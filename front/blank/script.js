
//  namespace
//  =========
    window.__readable_by_evernote__blank = {};


//  import
//  ======
    (function ($B) {
        
        //  escape html
        //  ===========
            var _escape_html = function (_string)
            {
                var _replace = { "&": "amp", '"': "quot", "<": "lt", ">": "gt" };
                return ((_string && _string.replace) ? _string.replace(/[&"<>]/g, function (_match) { var _r = _replace[_match]; return (_r ? ("&" + _r + ";") : _match); }) : '');
            };
            
        
        //  escape html
        //  ===========
            var _unescape_html = function (_string)
            {
                var _replace = { "amp": "&", "quot": '"', "lt": "<", "gt": ">" };
                return ((_string && _string.replace) ? _string.replace(/[&](amp|quot|lt|gt)[;]/g, function (_match, _match_key) { var _r = _replace[_match_key]; return (_r ? _r : _match); }) : '');
            };
        
        
        //  encode
        //  ======
            var _encode = function (_string)
            {
                if (_string == '') { return 'none'; }
                var _replace = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "*": "%2A" };
                return ((_string && _string.replace) ? _string.replace(/[!'()*]/g, function (_match) { return _replace[_match]; }) : '');
            };
        
            
        //  decode
        //  ======
            var _decode = function (_string)
            {
                if (_string == 'none') { return ''; }
                return ((_string && _string.replace) ? decodeURIComponent(_string) : '');
            };
        
        /* =============== */
        $B.escape_html =   _escape_html;
        $B.unescape_html = _unescape_html;
    })(window.__readable_by_evernote__blank);



     (function ($B) {
        $B.translation__items = {
            'heading':  chrome.i18n.getMessage('inside__blank__heading'),
            'text':     chrome.i18n.getMessage('inside__blank__text')
        };
    })(window.__readable_by_evernote__blank);



//  run
//  ===
    (function ($B) {
    
        //  translated strings may have {&stuff;} in them
        //  so unescape & escape
    
        document.title = $B.escape_html($B.unescape_html($B.translation__items['heading']));
        document.getElementById('tips__heading').innerHTML = $B.escape_html($B.unescape_html($B.translation__items['heading']));
        document.getElementById('tips__body').innerHTML = $B.escape_html($B.unescape_html($B.translation__items['text']));
    
    })(window.__readable_by_evernote__blank);
