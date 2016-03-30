
//  define
//  ======
    window.$evernote_clearly_in_isolation = {};

//  isolate
//  =======
    (function ($R)
    {
    
        //  log
        var _log = function (_message) { if (console && console.log) { console.log('evernote_clearly / in_isolation / ' + _message); } };
    
        //  no $R
        if ($R) {}else { _log('$evernote_clearly_in_isolation is not defined'); return; }
    
        //  set vars -- important!
        //  ========
            
            $R.window = window;
            $R.document = window.document;
            $R.version = '1433496389';
            $R.paths = { 
                'back': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/back/', 
                'front': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/front/', 
                'evernote': 'https://www.evernote.com/' 
            };
            $R.cssIDs = { 'prefix': 'evernote_clearly__' };
            $R.cssIDs.controller = $R.cssIDs.prefix + 'controller';
            $R.cssIDs.container = $R.cssIDs.prefix + 'container';
            
        //  get vars from location
        //  ======================
        
            (function ()
            {
                var _href = $R.window.location.href,
                    _question_mark = _href.indexOf('?'),
                    _params_and_values = ((_question_mark > -1) ? _href.substr(_question_mark+1).split('&') : []),
                    _params = {};
                
                var _param_and_value = false, 
                    _param = false, 
                    _value = false, 
                    _equals_sign = false;
                
                for (var _i=0, _ii=_params_and_values.length; _i<_ii; _i++)
                {
                    _param_and_value = _params_and_values[_i];
                
                    _equals_sign = _param_and_value.indexOf('=');
                    if (_equals_sign > -1) {}else { continue; }
                
                    _param = _param_and_value.substr(0, _equals_sign).replace(/^\s+|\s+$/gi, '');
                    _value = _param_and_value.substr(_equals_sign+1).replace(/^\s+|\s+$/gi, '');
                
                    _params[_param] = decodeURIComponent(_value);
                }
                        
                $R.action = (_params['action'] == 'none' ? false : _params['action']);
                $R.title = _params['title'];
                $R.url = _params['url'];
                $R.url_host = _params['url_host'];
                $R.url_path = _params['url_path'];
                $R.url_protocol = _params['url_protocol'];
            })();

        //  more vars
        //  =========
        
            $R.page_id = '' +
                '{' + $R.url_host + '}' +
                '{' + $R.url_path + '}' +
                '{' + (Math.floor(Math.random() * (1000 - 1 + 1)) + 1) + '}' +
            '';
        
        //  set some vars as attributes
        //  ===========================

            (function ()
            {
                var _set_attr = function (_attr, _value) { $R.document.body.setAttribute(_attr, encodeURIComponent(_value)); };

                _set_attr('evernote_clearly__page_id', $R.page_id);
                _set_attr('evernote_clearly__url',     $R.url);
                _set_attr('evernote_clearly__title',   $R.title);
            })();
            
        //  check requirements
        //  ==================

            //  controller frame already present
            if ($R.document.getElementById($R.cssIDs.controller)) { _log('page already has controller frame'); return; }

            //  no body
            if ($R.document.body) {}else { _log('page does not have body'); return; }
    
        //  insert controller frame
        //  =======================

            (function ()
            {
                var _frame = document.createElement('iframe');

                _frame.setAttribute('id', $R.cssIDs.controller);
                _frame.setAttribute('frameBorder', '0');
                _frame.setAttribute('allowTransparency', 'true');
                _frame.setAttribute('scrolling', 'auto');
                _frame.setAttribute('src', $R.paths.front+'in_isolation/controller.html');
    
                $R.document.body.appendChild(_frame);
            })();
            
        //  postMessage
        //  ===========

            //  send message to page
            $R.postMessageToPage = function (_event_name, _event_data)
            {
                //  create
                var _json = { 'signature': 'evernote_clearly', 'event_name': 'to-page--'+_event_name, 'event_data': {} };
                if (_event_data) { for (var _key in _event_data) { _json.event_data[_key] = _event_data[_key]; } }

                //  send
                window.parent.postMessage(JSON.stringify(_json), "*");
            };

            //  listen for messages from page    
            $R.window.addEventListener("message", function (_event)
            {
                //  get
                var _json = {};
                try { _json = JSON.parse(_event.data); } catch (_e) {}
                
                //  check
                if (_json.signature && _json.signature == 'evernote_clearly') {}else { return; }
                if (_json.event_name && _json.event_name.indexOf('to-isolation--') === 0) {}else { return; }

                //  which
                switch (_json.event_name.substr('to-isolation--'.length))
                {
                    case 'callback--detect':
                        
                        //  sent when detect.start() finishes
                        //  detect.start was called on message to-page--start--detect
                        
                        //  store result
                        $R.cc__detect__result = {
                            '_html':        _json.event_data._html,
                            '_title':       _json.event_data._title,
                            '_language':    _json.event_data._language,
                            '_rtl':         _json.event_data._rtl,
                            '_rtl_maybe':   _json.event_data._rtl_maybe
                        };
                        
                        //  continue
                        $R.launch__after_detect_is_finished();
                        
                        break;
                        
                    case 'callback--next':
                    
                        //  sent when start--next detects a subsequent page
                        //  next.start was called on message to-page--start-detect
                        
                        //  add page
                        $R.cc__reformat.addNewPage(_json.event_data._html, _json.event_data._url);
                        
                        break;
                        
                    case 'call':
                    
                        //  visible; hide
                        if ($R.visible) { $R.makeInvisible(); return; }
                        
                        //  need to run detect again? => $R.launch__after_detect_is_finished__recurrent()
                        if ($R.always_run_detect_on_url($R.url)) { $R.postMessageToPage('start--detect'); return; }
                        
                        //  make visible
                        $R.makeVisible(function ()
                        {
                            $R.makeVisible__show_content();
                            $R.makeVisible__enable_ui();

                            $R.doCallback__show();
                        });
                        break;

                    case 'do-action--clip':
                    case 'do-action--highlight':
    
                        //  set the action
                        //  then call doAction

                        $R.action = _json.event_name.substr('to-isolation--do-action--'.length);
                        $R.doAction();

                        break;
                }
            
            }, false, true);

        //  misc
        //  ====

            $R.doAction = function ()
            {
                //  which?
                switch ($R.action)
                {
                    case ('clip'):      $R.menu_functions.clip_to_evernote();       break;
                    case ('highlight'): $R.menu_functions.highlight_to_evernote();  break;
                }
                
                //  reset
                $R.action = false;
            };

            $R.doCallback__show = function ()
            {
                $R.postMessageToPage('callback--show');
            };

            $R.doCallback__hide = function ()
            {
                $R.postMessageToPage('callback--hide');
            };

    })(window.$evernote_clearly_in_isolation);
