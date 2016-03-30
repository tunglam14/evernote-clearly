//  isolate
//  =======
    (function ()
    {
        //  log
        var _log = function (_message) { if (console && console.log) { console.log('evernote_clearly / in_page / ' + _message); } };
    
        //  path
        var _path_back = 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/back/',
            _path_front = 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/front/';

        //  css IDs
        var _cssIDs = { 'prefix': 'evernote_clearly__' };
            _cssIDs.in_isolation = _cssIDs.prefix + 'in_isolation';
            _cssIDs.in_page = _cssIDs.prefix + 'in_page';
            _cssIDs.in_reminder = _cssIDs.prefix + 'in_reminder';

        //  containers
        var _html = document.getElementsByTagName('html')[0],
            _body = document.getElementsByTagName('body')[0];

        //  check containers
        if (_body) {}else { _log('page is missing body element'); return; }
        if (_html) {}else { _log('page is missing html element'); return; }

        //  frame exists?
        if (document.getElementById(_cssIDs.in_page)) { return; }

        //  remove reminder, if present
        var _reminder = document.getElementById(_cssIDs.in_reminder);
        if (_reminder) { _reminder.style.display = 'none'; }

        //  create frame
        var _frame = document.createElement('iframe'),
            _frameHTML = ''                         +
                '<!DOCTYPE html>'                   +
                '<html id="html"><body id="body">'  +
                    '<script type="text/javascript" src="'+_path_front+'third_party/jquery/jquery.js">' +    '</script>' +
                    ''                              +
                    '<script type="text/javascript" src="'+_path_front+'the_components/detect/detect.js">' + '</script>' +
                    '<script type="text/javascript" src="'+_path_front+'the_components/next/next.js">' +     '</script>' +
                    ''                              +
                    '<script type="text/javascript" src="'+_path_front+'in_page/init_and_call.js">' +     '</script>' +
                '</body></html>'                    +
            '';
            
        //  frame attributes
        _frame.setAttribute('id', _cssIDs.in_page);
        _frame.setAttribute('frameBorder', '0');
        _frame.setAttribute('allowTransparency', 'true');
        _frame.setAttribute('scrolling', 'auto');

        //  set frame style
        _frame.style.position = 'fixed';
        _frame.style.width =    '5px';
        _frame.style.height =   '5px';
        _frame.style.top =      '-10px';
        _frame.style.left =     '-10px';

        //  insert frame
        _html.appendChild(_frame);
        
        //  write to frame -- when loaded        
        var _check_interval = false;
        var _check = function ()
        {
            //  iframe
            var _iframe = document.getElementById(_cssIDs.in_page);
            if (_iframe) {}else { return; }

            //  doc                
            var _doc = (_iframe.contentDocument || _iframe.contentWindow.document);
            if (_doc) {}else { return; }
        
            //  clear interval
            window.clearInterval(_check_interval);

            //  write in frame                
            _doc.open();
            _doc.write(_frameHTML);
            _doc.close();
        };
        _check_interval = window.setInterval(_check, 50);
        
    })();
