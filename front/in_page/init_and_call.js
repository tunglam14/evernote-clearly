
//  global object
//  =============
    window.$evernote_clearly_in_page = {};

//  isolate -- execute on load
//  =======
    (function ($R)
    {
        //  log
        var _log = function (_message) { if (console && console.log) { console.log('evernote_clearly / in_page / ' + _message); } };
    
        //  no $R
        if ($R) {}else { _log('$evernote_clearly_in_page is not defined'); return; }
    
        //  set vars
        //  ========
        
            $R.window = window;
            $R.document = window.document;
            $R.parentWindow = window.parent;
            $R.parentDocument = window.parent.document;
            $R.version = '1433496389';
            $R.paths = { 
                'back': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/back/', 
                'front': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/front/', 
                'evernote': 'https://www.evernote.com/' 
            };
            $R.cssIDs = { 'prefix': 'evernote_clearly__' };
            $R.cssIDs.in_isolation = $R.cssIDs.prefix + 'in_isolation';
            $R.cssIDs.script__inject_and_init_and_call = $R.cssIDs.prefix + 'inject_and_init_and_call';
            $R.cssIDs.script__call = $R.cssIDs.prefix + 'call';
            $R.visible = true;
            $R.scrollDisabled = false;
            $R.scrollOriginalOverflowValue = 'auto';
            $R.action = false;
            $R.buttonTimer = true;
            
        //  postMessage
        //  ===========

            //  send messages to isolation            
            $R.postMessageToIsolation = function (_event_name, _event_data)
            {
                //  create
                var _json = { 'signature': 'evernote_clearly', 'event_name': 'to-isolation--'+_event_name, 'event_data': {} };
                if (_event_data) { for (var _key in _event_data) { _json.event_data[_key] = _event_data[_key]; } }

                //  send
                $R.parentDocument.getElementById($R.cssIDs.in_isolation).contentWindow.postMessage(JSON.stringify(_json), "*");
            };
        
            //  listen for messages from isolation
            $R.parentWindow.addEventListener("message", function (_event)
            {
                //  get
                var _json = {};
                try { _json = JSON.parse(_event.data); } catch (_e) {}
                
                //  check
                if (_json.signature && _json.signature == 'evernote_clearly') {}else { return; }
                if (_json.event_name && (_json.event_name.indexOf('to-page--') === 0)) {}else { return; }

                //  which
                switch (_json.event_name.substr('to-page--'.length))
                {   
                    case 'start--detect':
                        //  sent the first time always
                        //  and subsequent times too, on domains where detect needs to be re-run
                        
                        $R.cc__detect.start();
                        break;
                        
                    case 'start--next':
                        //  sent on a time-out from first show
                        //  if isolation from is still visible at that point
                    
                        $R.cc__next.start();
                        break;
                        
                    case 'callback--show':
                        //  sent after frame is visible and ready for interaction
                        //  we use this to send back an action, if needed
                    
                        //  onShow is called externally,
                        //  both on init (init_and_call.js), and on call (call.js.parts/after_trigger.js)
                    
                        $R.doAction();
                        $R.buttonTimer = false;

                        break;
                        
                    case 'callback--hide':
                        //  sent at the end of the "hiding" animation
                        //  this is when we hide the isolation frame
                        
                        $R.onHide();
                        $R.hideFrame();
                        
                        break;
                }
            
            }, false);
        
        //  page stuff
        //  ==========
            
            $R.showFrame = function ()
            {
                //  remember
                $R.visible = true;
                
                //  make
                var _frame = $R.parentDocument.getElementById($R.cssIDs.in_isolation);
                    _frame.style.top = '0px';
                    _frame.style.left = '0px';
            };
            
            $R.hideFrame = function ()
            {
                //  remember
                $R.visible = false;
                
                //  make
                var _frame = $R.parentDocument.getElementById($R.cssIDs.in_isolation);
                    _frame.style.top = '-100%';
                    _frame.style.left = '-100%';
            };
            
            $R.onShow = function ()
            {
                //  set overflow
                $R.scrollOriginalOverflowValue = $R.parentDocument.documentElement.style.overflow;
                $R.parentDocument.documentElement.style.overflow = 'hidden';
                
                //  remember
                $R.scrollDisabled = true;
                
                //  scroll position
                $R.scrollStayAtX = $R.parentWindow.pageXOffset;
                $R.scrollStayAtY = $R.parentWindow.pageYOffset;
                
                //  add class on body
                var _c = $R.parentDocument.body.className;
                $R.parentDocument.body.className = ((_c > '') ? (_c + ' ') : '') + 'evernote_clearly__is_visible';
            };
        
            $R.onHide = function ()
            {
                //  set overflow
                $R.parentDocument.documentElement.style.overflow = $R.scrollOriginalOverflowValue;
            
                //  remember
                $R.scrollDisabled = false;
                
                //  remove class on body
                var _c = $R.parentDocument.body.className;
                $R.parentDocument.body.className = _c.replace(/([ ]?)evernote_clearly__is_visible/gi, '');
            };

            $R.parentWindow.addEventListener("scroll", function (_event)
            {
                //  only while frame visible
                if ($R.visible) {}else { return; }
                
                //  scroll back
                $R.parentWindow.scrollTo($R.scrollStayAtX, $R.scrollStayAtY);
            });
            
        //  components
        //  ==========

            $R.cc__detect__init = function ()
            {
                //  define
                $R.cc__detect = {
                    'callbacks': {
                        'finished': function (_result)
                        {
                            //  save result
                            $R.cc__detect__result = _result;
                        
                            //  result to send
                            var _result_to_send = {
                                '_html':        _result._html,
                                '_title':       _result._title,
                                '_language':    _result._language,
                                '_rtl':         _result._rtl,
                                '_rtl_maybe':   _result._rtl_maybe
                            };
                        
                            //  send result
                            $R.postMessageToIsolation('callback--detect', _result_to_send);
                        }
                    },
                    'debug': false,
                    'window': $R.parentWindow,
                    'jQuery': window.jQuery
                };

                //  create
                $R.cc__detect = window.initClearlyComponent__detect($R.cc__detect);
            };

            $R.cc__next__init = function ()
            {
                //  define
                $R.cc__next = {
                    'callbacks': {
                        'newPageFound': function (_result)
                        {
                            //  result to send
                            var _result_to_send = {
                                '_url':         _result._url,
                                '_html':        _result._html
                            };
                        
                            //  send result
                            $R.postMessageToIsolation('callback--next', _result_to_send);
                        }
                    },
                    'window': $R.window,
                    'detectComponentInstance': $R.cc__detect
                };

                //  create
                $R.cc__next = initClearlyComponent__next($R.cc__next);

                //  next-pages container
                $R.cc__next.createNextPagesContainer();
            };
            
        //  and action
        //  ==========
        
            $R.doAction = function ()
            {
                //  blank
                if ($R.action) {}else { return; }
                
                //  send
                $R.postMessageToIsolation('do-action--'+$R.action);
            };
            
        //  first-time run
        //  ==============
            
            (function ()
            {
                var _injected_script = $R.parentDocument.getElementById($R.cssIDs.script__inject_and_init_and_call);
                if (_injected_script && _injected_script.parentNode) { _injected_script.parentNode.removeChild(_injected_script); }
            })();
            
            $R.onShow();
            $R.cc__detect__init();
            $R.cc__next__init();
            
    })(window.$evernote_clearly_in_page);
