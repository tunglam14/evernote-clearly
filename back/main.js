
//  import target-specific stuff
//  ============================
    (function ($R) {
    
        
        //  storage
        //  =======
        
            $R.storage__get = function (_key)
            {
                return localStorage[_key];
            };
        
            $R.storage__set = function (_key, _value)
            {
                localStorage[_key] = _value;
            };
        
            $R.storage__set_more = function (_o)
            {
                for (var _x in _o) {
                    localStorage[_x] = _o[_x];
                }
            };
        
        
        //  get
        //  ===
            $R.credentials__get = function ()
            {
                //  get
                var _got_user = $R.storage__get('storedEvernoteUsername'),
                    _got_pass = $R.storage__get('storedEvernotexAuthToken'),
                    _got_srvr = $R.storage__get('storedEvernoteServer');
                    
                //  fail
                if ((_got_user > '') && (_got_pass > '')) {}else { return false; }
                    
                //  result
                var _r = {};
                    _r.username = _got_user;
                    _r.server = (((_got_srvr == 'main') || (_got_srvr == 'china')) ? _got_srvr : 'none');
                    _r.xAuthToken = $R.xor.decrypt(_got_pass, _got_user);
        
                return _r;
            };
        
        
        //  set
        //  ===
            $R.credentials__set = function (_o)
            {
                //  fail
                if ((_o['username'] > '') && (_o['xAuthToken'] > '')) {}else { return false; }
        
                //  set
                $R.storage__set('storedEvernoteServer', $R.$bootstrap.server);
                $R.storage__set('storedEvernoteUsername', _o.username);
                $R.storage__set('storedEvernotexAuthToken', $R.xor.encrypt(_o['xAuthToken'], _o['username']));
                $R.storage__set('storedEvernotePassword', '');
        
                return true;
            };
        
        
        //  forget
        //  ======
            $R.credentials__forget = function ()
            {
                $R.storage__set_more({
                    'storedEvernoteUsername': '',
                    'storedEvernotexAuthToken': '',
                    'storedEvernoteServer': '',
                    'storedEvernoteLogoutOnNextAction' : 'yes'
                });
            };
        
        
        //  translation
        //  =========== 
            $R.translation__get_item = function (_key)
            {
                var _t = chrome.i18n.getMessage('inside__'+_key);
                return $R.encode(_t > '' ? _t : '');
            };
        
        
        //  open url
        //  ========
            $R.open_url_in_new_tab = function (_url)
            {
                chrome.tabs.create({ 'url': _url, 'selected': true });
            };
        
        
        //  logOneline
        //  ==========
            $R.logOneLine = function (msg) { window.console.log(msg); };
            
    
    })(window.__readable_by_evernote);


//  ==========================================================================================================================


//  import _js_anywhere/
//  ====================
    (function ($R) {
    
        (function () {
            
            //  valid url
            //  =========
                var _valid_url = function (_url)
                {
                    //  not string
                    if (_url.indexOf) {}else { return false; }
                    
                    //  look at protocol
                    switch (true)
                    {
                        case (_url.indexOf('http://') === 0):
                        case (_url.indexOf('https://') === 0):
                        case (_url.indexOf('ftp://') === 0):
                        case (_url.indexOf('file://') === 0):
                            return true;
                            break;
                        
                        default:
                            return false;
                            break;
                    }
            
                    return false;
                };
            
            /* =============== */
            $R.valid_url = _valid_url;
        })();

        (function () {
            
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
            $R.escape_html =    _escape_html;
            $R.unescape_html =  _unescape_html;
            $R.encode =         _encode;
            $R.decode =         _decode;
        })();

        (function () {
            
            //  options
            //  =======
                var _default_options = {
                    'text_font':            '"PT Serif"',
                    'text_font_header':     '"PT Serif"',
                    'text_font_monospace':  'Inconsolata',
                    'text_size':            '16px',
                    'text_line_height':     '1.5em',
                    'box_width':            '36em',
                    'color_background':     '#F3F2EE',
                    'color_text':           '#1F0909',
                    'color_links':          '#065588',
                    'text_align':           'normal',
                    'base':                 'theme-1',
                    'footnote_links':       'on_print',
                    'large_graphics':       'do_nothing',
                    'custom_css':           ''
                };
            
            
            //  vars
            //  ====
                var _default_vars = {
                    'theme':                        'theme-1',                          /* theme-1, theme-2, theme-3, custom */
                
                    'keys_activation':              'Control + Alt + Right Arrow',
                    'keys_clip':                    'Control + Alt + Up Arrow',
                    'keys_highlight':               'Control + Alt + H',
            
                    'clip_tag':                     '',
                    'clip_notebook':                '',
                    'clip_notebook_guid':           '',
                    'clip_notebook_id':             '',
                
                    'related_notes':                'enabled',                          /* enabled, just_at_bottom, disabled */
                    'smart_filing':                 'enabled',                          /* enabled, just_notebooks, just_tags, disabled */
                    'smart_filing_for_business':    'disabled',                         /* enabled, just_notebooks, just_tags, disabled */
            
                    'open_notes_in':                'web',                              /* web, desktop */
                
                    'custom_theme_options':         ''                                  /* the custom theme options get serialized into this */
                };
            
                //  mac-specific keyboard shortcuts
                if ((window) && (window.navigator) && (window.navigator.userAgent) && (window.navigator.userAgent.indexOf) && (window.navigator.userAgent.indexOf('Mac OS') > -1))
                {
                    _default_vars['keys_activation'] = 'Control + Command + Right Arrow';
                    _default_vars['keys_clip'] =       'Control + Command + Up Arrow';
                    _default_vars['keys_highlight'] =  'Control + Command + H';
                }
            
            
            //  sizes
            //  =====
                var _the_sizes = {
                    'small':    { 'theme-1': '12px',  'theme-2': '12px',  'theme-3': '12px',  'custom':  '12px' },
                    'medium':   { 'theme-1': '16px',  'theme-2': '16px',  'theme-3': '16px',  'custom':  '16px' },
                    'large':    { 'theme-1': '20px',  'theme-2': '20px',  'theme-3': '20px',  'custom':  '20px' }
                };
            
            
            //  themes
            //  ======
                var _the_themes = {
                    'theme-1': {
                        'text_font':              '"PT Serif"',
                        'text_font_header':       '"PT Serif"',
                        'text_font_monospace':    'Inconsolata',
                        'text_size':              '16px',
                        'text_line_height':       '1.5em',
                        'box_width':              '36em',
                        'color_background':       '#F3F2EE',
                        'color_text':             '#1F0909',
                        'color_links':            '#065588',
                        'text_align':             'normal',
                        'base':                   'theme-1',
                        'footnote_links':         'on_print',
                        'large_graphics':         'do_nothing',
                        'custom_css':             ''
                    },
                    
                    'theme-2': {
                        'text_font':              'Helvetica, Arial',
                        'text_font_header':       'Helvetica, Arial',
                        'text_font_monospace':    '"Droid Sans Mono"',
                        'text_size':              '14px',
                        'text_line_height':       '1.5em',
                        'box_width':              '42em',
                        'color_background':       '#FFFFFF',
                        'color_text':             '#333333',
                        'color_links':            '#009900',
                        'text_align':             'normal',
                        'base':                   'theme-2',
                        'footnote_links':         'on_print',
                        'large_graphics':         'do_nothing',
                        'custom_css':             ''
                    },
                    
                    'theme-3': {
                        'text_font':              '"PT Serif"',
                        'text_font_header':       '"PT Serif"',
                        'text_font_monospace':    'Inconsolata',
                        'text_size':              '16px',
                        'text_line_height':       '1.5em',
                        'box_width':              '36em',
                        'color_background':       '#2D2D2D',
                        'color_text':             '#E3E3E3',
                        'color_links':            '#E3E3E3',
                        'text_align':             'normal',
                        'base':                   'theme-3',
                        'footnote_links':         'on_print',
                        'large_graphics':         'do_nothing',
                        'custom_css':             ''
                    }
                };
            
            /* =============== */
            $R.default_options =        _default_options;
            $R.default_vars =           _default_vars;
            $R.the_sizes =              _the_sizes;
            $R.the_themes =             _the_themes;
        })();

        (function () {
            
            //  Used to show/not-show the dialog box telling people about new stuff in Clearly.
            //  Options:
            //      "the curent version number"
            //      "nope" -- usually this is what this var's value should be.
            
            var _first_show_identifier = '1433496389';
                _first_show_identifier = 'nope';
            
            /* =============== */
            $R.first_show_identifier =  _first_show_identifier;
        })();
        
        (function () {
            
            //  get browser
            //  ===========
                var _from_user_agent__get_browser = function (_user_agent)
                {
                    /*  possible values:
                        ================   
                        desktop:    firefox, safari, chrome, internet_explorer, opera
                        ios:        iphone, ipad
                        mobile:     android, dolphin, firefox_mobile, chrome_mobile, windows_phone
                        other:      unknown
                    */    
            
            
                    //  normalize
                    //  =========
                        _user_agent = _user_agent.toLowerCase();
            
            
                    //  partial detection -- old jQuery code
                    //  =================
                        var _jb = (function ()
                        {
                            var ua = _user_agent,
                                rwebkit = /(webkit)[ \/]([\w.]+)/,
                                ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                                rmsie = /(msie) ([\w.]+)/,
                                rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,
                                match = rwebkit.exec( ua ) ||
                                        ropera.exec( ua ) ||
                                        rmsie.exec( ua ) ||
                                        ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
                                        [];
            
                            return { 
                                'browser': match[1] || "", 
                                'version': match[2] || "0" 
                            };            
                        })();
                        
            
                    //  full detection
                    //  ==============
                        var _the_browser = (function ()
                        {
                            var _ua = _user_agent;
                
                            if ((_ua.indexOf('windows phone') > -1))                            { return 'windows_phone'; }
            
                            if ((_ua.indexOf('chrome') > -1) && (_ua.indexOf('android') > -1))  { return 'chrome_mobile'; }
                            if ((_ua.indexOf('firefox') > -1) && (_ua.indexOf('fennec') > -1))  { return 'firefox_mobile'; }
                            if ((_ua.indexOf('dolfin') > -1) || (_ua.indexOf('dolphin') > -1))  { return 'dolphin'; }
                            if ((_ua.indexOf('android') > -1))                                  { return 'android'; }
            
                            if ((_ua.indexOf('ipad') > -1))                                     { return 'ipad'; }
                            if ((_ua.indexOf('iphone') > -1))                                   { return 'iphone'; }
                
                            if ((_jb.browser.opera))                                            { return 'opera'; }
                            if ((_jb.browser.msie))                                             { return 'internet_explorer'; }
                            if ((_jb.browser.webkit) && (_ua.indexOf('chrome') > -1))           { return 'chrome'; }
                            if ((_jb.browser.webkit) && (_ua.indexOf('safari') > -1))           { return 'safari'; }
                            if ((_jb.browser.mozilla))                                          { return 'firefox'; }
                    
                            return 'unknown';
                        })();
                        
                
                    //  return
                    //  ======
                        return _the_browser;       
                };
            
            
            //  get os -- nicely formatted
            //  ======
                var _from_user_agent__get_os = function (_user_agent)
                {
                    var ua = _user_agent.toLowerCase();
                    switch (true)
                    {
                        case (/linux/i.test(ua)):
                            return 'Linux';
                    
                        case (/macintosh/i.test(ua)):
                            var _m = ua.match(/(Mac OS [^\)]+?)\)/i);
                            // if (_m && _m[1]) { return _m[1].replace(/_/g, '.'); }
                            return 'Mac OS';
                        
                        case (/windows/i.test(ua)):
                            var _m = ua.match(/Windows NT ([0-9.]+)/i);
                            var _windows_variants = { 
                                "3.1":  "Windows NT 3.1",
                                "3.5":  "Windows NT 3.5",
                                "3.51": "Windows NT 3.51",
                                "4.0":  "Windows NT 4.0",
                                "5.0":  "Windows 2000",
                                "5.1":  "Windows XP",
                                "5.2":  "Windows XP",
                                "6.0":  "Windows Vista",
                                "6.1":  "Windows 7",
                                "6.2":  "Windows 8"
                            };
                            
                            //  versioned
                            if (_m && _m[1] && _windows_variants[_m[1]]) { return _windows_variants[_m[1]]; }
                            
                            //  default
                            return 'Windows';
                    }
                
                    return 'Unknown OS';
                };
            
            /* =============== */
            $R.from_user_agent__get_browser = _from_user_agent__get_browser;
            $R.from_user_agent__get_os = _from_user_agent__get_os;
        })();
        
        (function () {
            
            //  translations
            //  ============
                var _translations__inside = {
                
                    'menu__close__tooltip':                 'Hide the overlay.',
                    'menu__clip_to_evernote__tooltip':      'Clip to Evernote.',
                    'menu__highlight_to_evernote__tooltip': 'Highlight.',
                    'menu__print__tooltip':                 'Print.',
                    'menu__settings__tooltip':              'Show Themes.',
                    'menu__fitts__tooltip':                 'Hide the overlay.',
                    
                    /* === */
                    
                    'rtl__main__label':                     'Text direction?',
                    'rtl__ltr__label':                      'Left-to-right',
                    'rtl__rtl__label':                      'Right-to-left',
            
                    /* === */
                    
                    'related_notes__title':                 'Related Notes',
                    'related_notes__disable_short':         'Disable?',
                    'related_notes__disable_long':          'Do you want to disable Related Notes?',
            
                    /* === */
            
                    'filing_info__title_normal':            'Filed in:',
                    'filing_info__title_smart':             'Smart Filed in:',
                    'filing_info__default_notebook':        'Default',
                    'filing_info__view':                    'View',
                    'filing_info__edit':                    'Edit',
                    'filing_info__sentence':                'Clipped into the [=notebook] notebook, and tagged with [=tags].',
                    'filing_info__sentence_no_tags':        'Clipped into the [=notebook] notebook.',
                    'filing_info__sentence_and':            'and',
                    'filing_info__sentence_other_tags':     'other tags',
            
                    'filing_info__clipped':                 'Clipped',
                    'filing_info__find_notebook':           'Find a notebook',
                    'filing_info__change_notebook':         'Change notebook',
                    'filing_info__no_tags':                 'Tags not allowed',
                    'filing_info__add_tag':                 'Add a tag',
                    'filing_info__remove_tag':              'Remove tag',
                    'filing_info__refresh_notebooks':       'Refresh notebooks list',
                    'filing_info__refresh_tags':            'Refresh tags list',
                    'filing_info__open_note':               'Open note',
            
                    /* === */
            
                    'settings__theme__1__not_translated':   'Newsprint',
                    'settings__theme__2__not_translated':   'Notable',
                    'settings__theme__3__not_translated':   'Night Owl',
                    
                    'settings__theme__1':                   'Newsprint',
                    'settings__theme__2':                   'Notable',
                    'settings__theme__3':                   'Night Owl',
                    'settings__theme__custom':              'Custom',
                    
                    'settings__fontSize__small':            'small',
                    'settings__fontSize__medium':           'medium',
                    'settings__fontSize__large':            'large',
            
                    'settings__more_options':               'More options',
            
                    /* === */
                    
                    'footer__text':                         'Get a free Evernote account to save this article and view it later on any device.',
                    'footer__button':                       'Create account',
            
                    /* === */        
                    
                    'misc__clipping__doing':                'Clipping...',
                    'misc__clipping__failed':               'Clipping failed.',
                    'misc__login_request':                  'To sign in to Evernote, please click the Clearly icon in the toolbar.',
                    'misc__login_request__chrome':          'To sign in to Evernote, please click the Clearly icon in Chrome\'s toolbar.',
                    'misc__login_request__opera':           'To sign in to Evernote, please click the Clearly icon in Opera\'s toolbar.',
                    'misc__login_request__firefox':         'To sign in to Evernote, please click the Clearly icon in Firefox\'s toolbar.',
                    
                    'misc__page':                           'Page [=page]',
                    'misc__links':                          'Links'
                
                };    
            
            /* =============== */
            $R.translation__items = _translations__inside;

            
            //  translations
            //  ============
                var _translations__features = {
                
                    'features__title__new':                 'You have a new version of Evernote Clearly!',
                    'features__title__all':                 'Welcome to the new Evernote Clearly',
                    
                    'features__clipping__title':            'Clip to Evernote',
                    'features__clipping__text':             'Save what you\'re reading to your Evernote account with one click. Access clips from any device, anytime in Evernote.',
            
                    'features__highlighting__title':        'Highlighting',
                    'features__highlighting__text':         'Highlight text you want to remember & quickly find it in your Evernote account. Highlighting changes you make in Clearly will be updated in your Evernote account automatically.',
            
                    'features__related_notes__title':       'Related Notes',
                    'features__related_notes__text':        'Magically rediscover notes from your Evernote account that are related to the page you are viewing. Related Notes are displayed at the bottom of the article or on the right side if space permits.',
            
                    'features__smart_filing__title':        'Smart Filing',
                    'features__smart_filing__text':         'Automatically assigns tags to your Web clips and saves them to the appropriate notebook, so you don\'t have to.',
                    
                    'features__eula_notice':                'By using Clearly, you agree to our [=eula].',
                    'features__eula':                       'End User License Agreement',
                    'features__close2':                     'Close'
            
                };    
            
            /* =============== */
            for (var _k in _translations__features) { $R.translation__items[_k] = _translations__features[_k]; }

            
            //  translations
            //  ============
                var _translations__popup = {
                
                    'login__heading':                      'Sign in to Evernote',
                    'login__spinner':                      'Signing in to Evernote',
                    'login__create_account':               'Create an account',
                    'login__button_do__label':             'Sign in',
                    'login__button_cancel__label':         'Cancel',
                    
                    'login__email__label':                 'Email address',
                    'login__password__label':              'Password',
                    'login__rememberMe__label':            'Remember me',
            
                    'login__email__error__required':       'Email is required.',
                    'login__email__error__length':         'Email must be between 1 and 64 characters long.',
                    'login__email__error__format':         'Email contains bad characters.',
                    'login__email__error__invalid':        'Not a valid, active user.',
                    
                    'login__password__error__required':    'Password is required.',
                    'login__password__error__length':      'Password must be between 6 and 64 characters long.',
                    'login__password__error__format':      'Password contains bad characters.',
                    'login__password__error__invalid':     'Email and password do not match existing user.',
                    'login__password__error__timeout':     'Login session timed-out. Please try again.',
            
                    'login__password__error__reset':       'Your password has expired. Please reset it now.',
                    'login__general__error':               'Authentication failed.',
            
                    /* === */
            
                    'two_factor__message__sms':            'We sent a text message with a verification code to',
                    'two_factor__message__google':         'Enter the verification code displayed in your Google Authenticator app.',
            
                    'two_factor__code__label':             'Verification code',
                    'two_factor__code__error__required':   'Verification code is required.',
                    'two_factor__code__error__length':     'Verification code should be at least 6 characters long.',
                    'two_factor__code__error__format':     'Verification code should be only numbers.',
                    'two_factor__code__error__invalid':    'Verification code is incorrect.',
                    
                    'two_factor__button_do__label':        'Verify',
                    'two_factor__button_help__label':      'I need help getting a verification code'
                
                };    
            
            /* =============== */
            for (var _k in _translations__popup) { $R.translation__items[_k] = _translations__popup[_k]; }

            
            //  translations
            //  ============
                var _translations__reminder = {
                
                    'reminder__heading': 'Get more from online reading, with Clearly',
                    'reminder__text':    'With just one click, strip any article of all distractions. With one more click, save any article in Evernote, forever. Try it now!',
                    'reminder__button':  'Read with Clearly'
                
                };    
            
            /* =============== */
            for (var _k in _translations__reminder) { $R.translation__items[_k] = _translations__reminder[_k]; }
        })();
        
    })(window.__readable_by_evernote);


//  import _js_background/
//  ======================
    (function ($R) {

        
        //  get options
        //  ===========
            $R.saved__get_options = function ()
            {
                var _return = {};
                for (var _x in $R.default_options) {
                    _return[_x] = $R.storage__get(_x);
                }
                return _return;
            };
        
                
        //  get vars    
        //  ========
            $R.saved__get_vars = function ()
            {
                var _return = {};
                for (var _x in $R.default_vars) {
                    _return[_x] = $R.storage__get(_x);
                }
                return _return;
            };
        
        
        //  device id
        //  =========
            $R.saved__get_device_id = function ()
            {
                var _curr = $R.storage__get('storedEvernoteDeviceId');
                if (_curr) {}else
                {
                    _curr = Math.floor((Math.random() * 1000 * 1000 * 1000)+1);
                    $R.storage__set('storedEvernoteDeviceId', _curr);
                }
                
                return _curr;
            };
            
            
        //  selects
        //  =======    
        
            $R.saved__select__theme = function (_theme_id)
            {
                //  var
                var _to_save = {};
                
                if (_theme_id == 'custom')
                {
                    _to_save = { 'theme': 'custom' };
                    var _vars = $R.saved__get_vars();
                    $R.decode(_vars['custom_theme_options']).replace(
                        /\[\[=(.*?)\]\[=(.*?)\]\]/gi,
                        function (_match, _name, _value) {
                            _to_save[_name] = _value;
                        });
                    $R.storage__set_more(_to_save);
                }
                else
                {
                    _to_save = $R.the_themes[_theme_id];
                    _to_save['theme'] = _theme_id;
                    $R.storage__set_more(_to_save);
                }
            };
            
            $R.saved__select__size = function (_size)
            {
                var _current_vars = $R.saved__get_vars();
                $R.storage__set('text_size', $R.the_sizes[_size][_current_vars['theme']]);
            };
            
            $R.saved__select__related_notes = function (_setting)
            {
                $R.storage__set('related_notes', $R.encode(_setting));
            };
            
            
        //  last used
        //  =========
        
            $R.saved__setLastUsed = function (_key, _val)
            {
                var _now = (new Date()).getTime();
                $R.storage__set('lastUsed_'+_key, (_val ? _val : _now));
            };
            
            $R.saved__getLastUsed = function (_key)
            {
                return $R.storage__get('lastUsed_'+_key);
            };
            
        
        //  do logout?
        //  ==========
            $R.credentials__get_logout_on_next_action = function ()
            {
                //  get
                var _got_value = $R.storage__get('storedEvernoteLogoutOnNextAction');
            
                //  fail
                if (_got_value == 'yes') {}else { return false; }
                
                //  reset
                $R.storage__set('storedEvernoteLogoutOnNextAction', '');
                
                return true;
            };
            
        
        //  set logout!
        //  ===========
            $R.credentials__set_logout_on_next_action = function ()
            {
                $R.storage__set('storedEvernoteLogoutOnNextAction', 'yes');
            };
            
            
        //  get userInfoCache
        //  =================
            $R.credentials__getUserInfoCache = function ()
            {
                var _json = $R.storage__get('storedEvernoteUserInfo');
                if (_json > '') {}else { return false; }
                
                var _info = JSON.parse(_json);
                var _keys = ['user__id', 'user__shard_id', 'user__privilege', 'user__name', 'user__username', 'user__email', 'user__business_id', 'user__last_updated'];
                for (var _i=0, _ii=_keys.length; _i<_ii; _i++) { if (_info[_keys[_i]]) {}else { return false; } }
                
                return _info;
            };
        
            
        //  set userInfoCache
        //  =================
            $R.credentials__setUserInfoCache = function (_userInfo)
            {
                var _json = JSON.stringify(_userInfo);
                $R.storage__set('storedEvernoteUserInfo', _json);
            };
        
        
        //  delete userInfoCache
        //  ====================
            $R.credentials__deleteUserInfoCache = function ()
            {
                $R.storage__set('storedEvernoteUserInfo', '');
                $R.storage__set('storedEvernoteFiling', '');
            };
        
        
        //  get translations
        //  ================
            $R.translation__get_items = function ()
            {
                for (var x in $R.translation__items)
                {
                    var _t = $R.translation__get_item(x);
                    if (_t > '') {}else { continue; }
                
                    $R.translation__items[x] = _t;
                }
            };
        
    
        
        //  namespace
        //  =========
            $R.$bootstrap =
            {
                /* predefined */
                'servers':                  false,
                'server_main':              '',     /* ends in slash */
                'server_china':             '',     /* ends in slash */
                
                /* set on load */
                'saved_server':             false,  /* main | china */
                'client_locale':            false,
                'has_chinese_locale':       false,
                'simulate_chinese_locale':  false,
                
                /* set on bootstrap() */
                'rpc__userStore':           false,
                'profiles':                 false,
                'profiles_as_string':       false,
                'profiles_as_string2':      false,
                'server':                   false,
                'remote_domain':            false,  /* ends in slash */
                'remote_domain_marketing':  false,  /* ends in slash */
                'connected':                false
            };
        
            
        //  servers
        //  =======
            $R.$bootstrap.servers = {
                'live':     { 'main': 'https://www.evernote.com/',      'china': 'https://app.yinxiang.com/' },
                'stage':    { 'main': 'https://stage.evernote.com/',    'china': 'https://stage-china.evernote.com/' }
            };
            //  /* alternate stage => 'https://stage-dev.corp.etonreve.com/' */
            //  $R.$bootstrap.servers['live'] = $R.$bootstrap.servers['stage'];
                
                
        //  include
        //  =======
                
            //  bootstrap
            //  =========
                $R.$bootstrap.bootstrap = function (_onSuccess, _onFailure)
                {
                    //  already connected
                    //  =================
                        if ($R.$bootstrap.connected) { _onSuccess(); return; }
                
                    //  figure out order
                    //  ================
                        var _order = [];
                        switch (true)
                        {
                            case ($R.$bootstrap.saved_server == 'main'):    _order = ['main', 'china']; break;
                            case ($R.$bootstrap.saved_server == 'china'):   _order = ['china', 'main']; break;
                            case ($R.$bootstrap.has_chinese_locale):        _order = ['china', 'main']; break;
                            case ($R.$bootstrap.simulate_chinese_locale):   _order = ['china', 'main']; break;
                            default:                                        _order = ['main', 'china']; break;
                        }
            
                    //  try connect to one
                    //  ==================
                        var _try_connect_to_one = function (_order_number)
                        {
                            //  invalid; fail
                            //  =============
                                switch (true)
                                {
                                    case (!(_order[_order_number])):
                                    case (!($R.$bootstrap['server_' + _order[_order_number]])):
                                        _onFailure('connection / invalid');
                                        return;
                                        break;
                                }
            
                            //  try current number
                            //  ==================
                                $R.log('RPC/1', $R.$bootstrap['server_' + _order[_order_number]] + 'json');
                                var _rpcBootstrapClient = new $R.JSONRpcClient(function ()
                                { 
                                    //  error / timeout
                                    //  ===============
                                        if (this.UserStore) {}else { _try_connect_to_one(_order_number + 1); return; }
            
                                    //  set conected
                                    //  ============
                                        $R.$bootstrap.connected = true;
                                        $R.$bootstrap.rpc__userStore = this;
            
                                    //  get profiles
                                    //  ============
                                        $R.$bootstrap.rpc__userStore.UserStore.getBootstrapInfo(function (_rpc_result, _rpc_exception)
                                        {
                                            var _bootstrapInfoResult = _rpc_result, _bootstrapInfoError = _rpc_exception;
                                            
                                            //  error
                                            //  =====
                                                if (_bootstrapInfoError)
                                                {
                                                    _bootstrapInfoResult = {
                                                        'profiles': {
                                                           'list': [ {
                                                                'name':         'Evernote',
                                                                'setName':      true,
                                                                'setSettings':  true,
                                                                'settings': {
                                                                    'marketingUrl': 'http://evernote.com',
                                                                    'serviceHost':  'www.evernote.com',
                                                                    'supportUrl':   'https://evernote.com/contact/support/'
                                                                }
                                                            } ] 
                                                        }
                                                    };
                                                }
                                            
                                            //  result
                                            //  ======
                                            
                                                //  set profiles
                                                //  ============
                                                    $R.$bootstrap.profiles = _bootstrapInfoResult.profiles.list;
                                                
                                                //  profiles as string
                                                //  ==================
                                                    $R.$bootstrap.profiles_as_string = '';
                                                    for (var zz=0,_zz=$R.$bootstrap.profiles.length; zz<_zz; zz++)
                                                        { $R.$bootstrap.profiles_as_string += '_' + $R.$bootstrap.getProfileName__short($R.$bootstrap.profiles[zz]); }
                                                    $R.$bootstrap.profiles_as_string = $R.$bootstrap.profiles_as_string.substr(1);
                                                    $R.$bootstrap.profiles_as_string2 = $R.$bootstrap.profiles_as_string.replace(/_/g, '-');
                                                
                                                //  select first
                                                //  ============
                                                    $R.$bootstrap.server = $R.$bootstrap.getProfileName__long($R.$bootstrap.profiles[0]);
                                                    $R.$bootstrap.remote_domain = $R.$bootstrap['server_' + $R.$bootstrap.server];
                                                    $R.$bootstrap.remote_domain_marketing = $R.$bootstrap.profiles[0].settings.marketingUrl + '/';
                                                
                                                //  first different than saved -- switch
                                                //  ==========================
                                                    if (($R.$bootstrap.profiles_as_string == 'in_cn') && ($R.$bootstrap.server == 'main') && ($R.$bootstrap.saved_server == 'china'))
                                                    {
                                                        $R.$bootstrap.server = 'china';
                                                        $R.$bootstrap.remote_domain = $R.$bootstrap['server_' + 'china'];
                                                        $R.$bootstrap.remote_domain_marketing = $R.$bootstrap.profiles[1].settings.marketingUrl + '/';
                                                        $R.$bootstrap.profiles_as_string == 'cn_in';
                                                    }
                                                    else if (($R.$bootstrap.profiles_as_string == 'cn_in') && ($R.$bootstrap.server == 'china') && ($R.$bootstrap.saved_server == 'main'))
                                                    {
                                                        $R.$bootstrap.server = 'main';
                                                        $R.$bootstrap.remote_domain = $R.$bootstrap['server_' + 'main'];
                                                        $R.$bootstrap.remote_domain_marketing = $R.$bootstrap.profiles[1].settings.marketingUrl + '/';
                                                        $R.$bootstrap.profiles_as_string == 'in_cn';
                                                    }
                                                
                                                //  run sucess
                                                //  ==========
                                                    _onSuccess();
                                        },
                                        ($R.$bootstrap.simulate_chinese_locale ? 'zh_cn' : $R.$bootstrap.client_locale));
                                }, 
                                $R.$bootstrap['server_' + _order[_order_number]] + 'json');
                        };
            
                    //  try first
                    //  =========
                        _try_connect_to_one(0);
                };
            
            
            //  profiles
            //  ========
            
                $R.$bootstrap.getProfileName__short = function (_profile)
                {
                    switch (_profile.name.toLowerCase())
                    {
                        case 'evernote':            return 'in';
                        case 'evernote-china':      return 'cn';
                    //  case 'stage':               return 'in';
                    //  case 'stagedev':            return 'in';
                    //  case 'stage-china':         return 'cn';
                    }
                    return '';
                };
                
                $R.$bootstrap.getProfileName__long = function (_profile)
                {
                    switch (_profile.name.toLowerCase())
                    {
                        case 'evernote':            return 'main';
                        case 'evernote-china':      return 'china';
                    //  case 'stage':               return 'main';
                    //  case 'stagedev':            return 'main';
                    //  case 'stage-china':         return 'cn';
                    }
                    return '';
                };
            
            
            //  set locale
            //  ==========    
                $R.$bootstrap.setLocale = function (_browser_locale)
                {
                    //  which
                    var _locale = _browser_locale;
                        _locale = _locale.replace(/[-]/gi, '_');
                        _locale = _locale.replace(/\s+/gi, '');
                        _locale = _locale.toLowerCase();
                    
                    //   set
                    $R.$bootstrap.client_locale = _locale;
                    
                    //  chinese?
                    $R.$bootstrap.has_chinese_locale = ('|zh|zh_cn|zh_hans|zh_hans_cn|'.indexOf('|'+_locale+'|') > -1);
                };
            
            
            //  disconnect
            //  ==========
                $R.$bootstrap.disconnect = function ()
                {
                    $R.$bootstrap['connected'] =      false;
                    $R.$bootstrap['profiles'] =       false;
                    $R.$bootstrap['server'] =         false;
                    $R.$bootstrap['remote_domain'] =  false;
                    $R.$bootstrap['rpc__userStore'] = false;
                };
            
            
            //  initialize
            //  ==========
            
                $R.$bootstrap.initialize = function ()
                {
                    //  set to live
                    $R.$bootstrap['server_main'] = $R.$bootstrap.servers['live']['main'];
                    $R.$bootstrap['server_china'] = $R.$bootstrap.servers['live']['china'];
                
                    //  set locale
                    $R.$bootstrap.setLocale(window.navigator.language);
            
                    //  saved server
                    if ($R.credentials__get && $R.credentials__get())
                    {
                        var _credentials = $R.credentials__get();
                        if (_credentials && _credentials.server) { $R.$bootstrap.saved_server = _credentials.server; }
                    }
                };
            
                $R.$bootstrap.initializeForQA = function ()
                {
                    //  always starts off with defaults
                    //      change only if necessary
                
                    //  this shouldn't really get the qa vars itself
                    //      we do it, though, to avoid repeating code elsewhere
                
            
                };
            
            
            //  QA
            //  ==
            
                $R.$bootstrap.qa__set_servers_to_stage = function ()
                {
                    $R.$bootstrap['server_main'] = $R.$bootstrap.servers['stage']['main'];
                    $R.$bootstrap['server_china'] = $R.$bootstrap.servers['stage']['china'];
                };
                
                $R.$bootstrap.qa__set_servers_to_live = function ()
                {
                    $R.$bootstrap['server_main'] = $R.$bootstrap.servers['live']['main'];
                    $R.$bootstrap['server_china'] = $R.$bootstrap.servers['live']['china'];
                };
            
                $R.$bootstrap.qa__set_language_to_simulate_chinese = function () { $R.$bootstrap.simulate_chinese_locale = true; };
                $R.$bootstrap.qa__set_language_to_default = function () { $R.$bootstrap.simulate_chinese_locale = false; };
                
        
        
        //  namespace
        //  =========
            $R.$remote =
            {
                /* predefined */
                /* ========== */
                    'api__key':       'en-clearly-xauth-new',
                    'api__secret':    '38f4e71b0172afbb',
        
                    'api__chunkSize': 250,
        
                /* set on init */
                /* =========== */
                    'setting__related_notes':               '',
                    'setting__smart_filing':                '',
                    'setting__smart_filing_for_business':   '',
                    'setting__clip_tag':                    '',
                    'setting__clip_notebook':               '',
                    'setting__clip_notebook_guid':          '',
                    'setting__clip_notebook_id':            '',
                    'setting__open_notes_in':               '',
                
                /* stores */
                /* ====== */
                    'store__pageId_to_clipInfo':       {},
                    'store__pageId_to_recommendation': {},
        
                /* set on login */
                /* ============ */
                
                    'rpc__userStore':               false,
                    'rpc__noteStore':               false,
                    'rpc__noteStoreForBusiness':    false,
                    
                    'user__authToken':              false,
                    'user__authTokenForSession':    false,
                    'user__expires':                false,
                    'user__expiresForSession':      false,
                    'user__id':                     false,
                    'user__shardId':                false,
                    'user__privilege':              false,
                    'user__username':               false,
                    'user__email':                  false,
                    'user__name':                   false,
                    'user__businessId':             false,
                    'user__lastUpdated':            false,
                    
                    'is__connected':                false,
                    'is__loggedIn':                 false,
                    'is__business':                 false,
                    
                    'twoFactor__authToken':         false,
                    'twoFactor__deliveryHint':      false,
        
                /* business */
                /* ======== */
                    'business__id':         false,
                    'business__authToken':  false,
                    'business__expires':    false,
                    'business__shardId':    false,
                    
                /* notebooks */
                /* ========= */
        
                    'filing__working':                  false,
        
                    'filing__when':                     false,
                    'filing__expires':                  false,
        
                    'filing__last_usn__home':           false,
                    'filing__last_usn__business':       false,
        
                    'filing__notebooks':                false,
                    'filing__notebooks__order':         false,
                    'filing__notebooks__id_of_default': false,
                    'filing__notebooks__id_by_guid':    false,
        
                    'filing__tags__personal':           false,
                    'filing__tags__personal__order':    false,
        
                    'filing__tags__business':           false,
                    'filing__tags__business__order':    false
            };
            
            
        //  include
        //  =======
        
            
            //  ensure_authTokenForSession
            //  ==========================
                $R.$remote.ensure_authTokenForSession = function (_onSuccess, _onFailure)
                {
                    //  ensures that "user__authTokenForSession" hasn't expired (by checking user__expiresForSession)
                    //  it renews the token, if it has expired
                
                    //  preliminary check
                    //  =================
                        switch (true)
                        {
                            case (!$R.$remote.rpc__userStore):
                            case (!$R.$remote.rpc__userStore.UserStore):
                            case (!$R.$remote.is__connected):
                            case (!$R.$remote.is__loggedIn):
                            case (!$R.$remote.is__notExpired()):
                                _onFailure('login');
                                return;
                        }
                    
                    //  not expired; success
                    //  ====================
                        switch (true)
                        {
                            case (!$R.$remote.user__authTokenForSession):
                            case (!$R.$remote.user__expiresForSession):
                            case (!((new Date()).getTime() < ($R.$remote.user__expiresForSession - (10 * 60 * 1000)))): //  within 10 minutes
                                break;
            
                            default: 
                                _onSuccess();
                                return;
                                break;
                        }
                
                    //  expired; renew
                    //  ==============
                        $R.$remote.renew_authTokenForSession(_onSuccess, _onFailure);
                };
            
            
            //  renew_authTokenForSession
            //  =========================
            //      renews "user__authTokenForSession"
                
                $R.$remote.renew_authTokenForSession = function (_onSuccess, _onFailure)
                {
                    $R.$remote.rpc__userStore.UserStore.createSessionAuthenticationToken(function (_rpc_result, _rpc_exception)
                    {
                        var _getResult = _rpc_result, _getError = _rpc_exception;
                        $R.log('renew_authTokenForSession', _getResult, _getError);
                    
                        //  error
                        //  =====
                        
                            if (_getError)
                            {
                                //  unknown error
                                //  =============
                                    switch (true)
                                    {
                                        case (!_getError.trace):
                                        case (!_getError.trace.indexOf):
                                        case (!(_getError.trace.indexOf(')') > -1)):
                                            _onFailure('get_session_token / exception / no trace');
                                            return;
                                    }
                                
                                //  figure out error
                                //  ================
                                    var _trace = _getError.trace.substr(0, _getError.trace.indexOf(')')+1);
                                    switch (_trace)
                                    {
                                        case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                        case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                        case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                            _onFailure('login');
                                            return;
                                    }
            
                                //  could not figure out error
                                //  ==========================
                                    _onFailure('get_session_token / exception / unknown');
                                    return;
                            }
                            
                        //  result
                        //  ======
            
                            //  set
                            $R.$remote.user__authTokenForSession = _getResult;
                            $R.$remote.user__expiresForSession = (new Date()).getTime() + (60 * 60 * 1000); // 1 hour expiry
                        
                            //  return
                            _onSuccess();
                    },
                    $R.$remote.user__authToken);
                };
                
            
            //  refresh
            //  =======
                $R.$remote.refresh_settings = function ()
                {
                    //  shortcuts
                    //  =========
                        var _s = $R.saved__get_vars(),
                            _r = $R.$remote,
                            _d = $R.decode;
            
                    //  get settings
                    //  ============
                        $R.$remote.setting__related_notes =             _d(_s['related_notes']);
                        $R.$remote.setting__smart_filing =              _d(_s['smart_filing']);
                        $R.$remote.setting__smart_filing_for_business = _d(_s['smart_filing_for_business']);
                        $R.$remote.setting__open_notes_in =             _d(_s['open_notes_in']);
                        $R.$remote.setting__clip_tag =                  _d(_s['clip_tag']);
                        $R.$remote.setting__clip_notebook =             _d(_s['clip_notebook']);
                        $R.$remote.setting__clip_notebook_guid =        _d(_s['clip_notebook_guid']);
                        $R.$remote.setting__clip_notebook_id =          _d(_s['clip_notebook_id']);
                };
            
            
            //  initialize
            //  ==========
                $R.$remote.initialize = function ()
                {
                    $R.$remote.load_filing();
                    $R.$remote.order_filing();
                    $R.$remote.refresh_settings();
                };
            
            
            //  connect
            //  =======
                $R.$remote.connect = function (_onSuccess, _onFailure)
                {
                    //  bootstrap first
                    //  ===============
                        $R.$bootstrap.bootstrap(function ()
                        {
                            //  bootstrap succesfull
                            //  ====================
                            try
                            {
                                $R.log('RPC/3', $R.$bootstrap.remote_domain + 'json');
                                var _rpcUserStoreClient = new $R.JSONRpcClient(function ()
                                {
                                    //  error / timeout
                                    //  ===============
                                        if (this.UserStore) {}else { _onFailure('connection / invalid'); return; }
                                
                                    //  set conected
                                    //  ============
                                        $R.$remote.is__connected = true;
                                        $R.$remote.rpc__userStore = this;
                                    
                                    //  run success
                                    //  ===========
                                        _onSuccess();
                                }, 
                                $R.$bootstrap.remote_domain + 'json');
                            }
                            catch (_error) { _onFailure('connection / invalid'); return; }
                        },
                        function () { _onFailure('connection / invalid'); });
                };
            
        
            
            //  not expired
            //  ===========
                $R.$remote.is__notExpired = function ()
                {
                    //  invalid
                    switch (true)
                    {
                        case (!$R.$remote.is__connected):
                        case (!$R.$remote.is__loggedIn):
                        case (!$R.$remote.user__expires):
                            return false;
                    }
                    
                    //  now
                    var _now = (new Date()).getTime();
            
                    //  not within 3 minutes of expiration
                    if (_now > ($R.$remote.user__expires - (3 * 60 * 1000))) { return false; }
                    
                    //  check business too
                    if ($R.$remote.is__business)
                    {
                        //  not within 3 minutes of expiration
                        if (_now > ($R.$remote.business__expires - (3 * 60 * 1000))) { return false; }
                        
                        //  business too, is not expired
                        return true;
                    }
                    else
                    {
                        //  not business, and user not expired
                        return true;
                    }
                    
                    return true;
                };
            
            
            //  not expired / without business
            //  ==============================
                $R.$remote.is__notExpired__businessDoesNotCount = function ()
                {
                    //  invalid
                    switch (true)
                    {
                        case (!$R.$remote.is__connected):
                        case (!$R.$remote.is__loggedIn):
                        case (!$R.$remote.user__expires):
                            return false;
                    }
                    
                    //  now
                    var _now = (new Date()).getTime();
            
                    //  not within 3 minutes of expiration
                    if (_now > ($R.$remote.user__expires - (3 * 60 * 1000))) { return false; }
                    
                    return true;
                };
            
                
            //  login
            //  =====
                $R.$remote.loginLongSession = function (_user, _pass, _device_id, _device_description, _onSuccess, _onFailure)
                {
                    //  login function
                    //  ===============
                        var _loginFunction = function ()
                        {
                            //  login
                            //  =====
                                $R.$remote.rpc__userStore.UserStore.authenticateLongSession(function (_rpc_result, _rpc_exception)
                                {
                                    var _loginResult = _rpc_result, _loginError = _rpc_exception;
                                    $R.log('loginLongSession', _loginResult, _loginError);
                                    
                                    //  error
                                    //  =====
                                    
                                        if (_loginError)
                                        {
                                            //  unknown error
                                            //  =============
                                                switch (true)
                                                {
                                                    case (!_loginError.trace):
                                                    case (!_loginError.trace.indexOf):
                                                    case (!(_loginError.trace.indexOf(')') > -1)):
                                                        _onFailure('login / exception / no trace');
                                                        return;
                                                }
                                            
                                            //  figure out error
                                            //  ================
                                                var _trace = _loginError.trace.substr(0, _loginError.trace.indexOf(')')+1);
                                                switch (_trace)
                                                {
                                                    case 'EDAMUserException(errorCode:INVALID_AUTH, parameter:username)':
                                                        _onFailure('email');
                                                        return;
            
                                                    case 'EDAMUserException(errorCode:INVALID_AUTH, parameter:password)':
                                                        _onFailure('password');
                                                        return;
            
                                                    case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:password)':
                                                        _onFailure('password-reset');
                                                        return;
                                                }
            
                                            //  could not figure out error
                                            //  ==========================
                                                _onFailure('login / exception / unknown');
                                                return;
                                        }
                                            
                                        
                                    //  result
                                    //  ======
                                     
                                        //  two factor
                                        //  ==========
                                            if (_loginResult.secondFactorRequired)
                                            {
                                                //  set
                                                $R.$remote.twoFactor__authToken = _loginResult.authenticationToken;
                                                $R.$remote.twoFactor__deliveryHint = (_loginResult.secondFactorDeliveryHint ? _loginResult.secondFactorDeliveryHint : '');
                                                $R.$remote.twoFactor__username = _user;
                                            
                                                //  trigger
                                                _onFailure('two-factor');
                                                
                                                //  return
                                                return;
                                            }
                                     
                                        
                                        //  check
                                        //  =====
                                            switch (true)
                                            {
                                                case (!_loginResult.authenticationToken):
                                                case (!_loginResult.user):
                                                case (!_loginResult.user.id):
                                                case (!_loginResult.user.shardId):
                                                    _onFailure('login / invalid result');
                                                    return;
                                            }
                                            
                                        //  loginWithAuthToken
                                        //  ==================
                                            $R.credentials__deleteUserInfoCache();
                                            $R.$remote.clear_filing();
                                            $R.$remote.loginWithAuthToken(_loginResult.authenticationToken, _onSuccess, _onFailure);
                                            return;
                                },
                                _user, _pass, $R.$remote.api__key, $R.$remote.api__secret, _device_id, _device_description, true);
                        };
            
                        
                    //  already connected, connect, or error
                    //  =====================================
                        if ($R.$remote.is__connected)
                        {
                            //  do
                            _loginFunction();
                        }
                        else
                        {
                            //  connect
                            $R.$remote.connect(
                                function () { _loginFunction(); },
                                function () { _onFailure('connection / invalid'); });
                        }
                };
            
            
            //  login :: second factor
            //  ======================
                $R.$remote.loginLongSessionSecondFactor = function (_temp_auth, _code, _device_id, _device_description, _onSuccess, _onFailure)
                {
                    //  login function
                    //  ===============
                        var _loginFunction = function ()
                        {
                            //  login
                            //  =====
                                $R.$remote.rpc__userStore.UserStore.completeTwoFactorAuthentication(function (_rpc_result, _rpc_exception)
                                {
                                    var _loginResult = _rpc_result, _loginError = _rpc_exception;
                                    $R.log('loginLongSessionSecondFactor', _loginResult, _loginError);
                                
                                    //  error
                                    //  =====
                                    
                                        if (_loginError)
                                        {
                                            //  unknown error
                                            //  =============
                                                switch (true)
                                                {
                                                    case (!_loginError.trace):
                                                    case (!_loginError.trace.indexOf):
                                                    case (!(_loginError.trace.indexOf(')') > -1)):
                                                        _onFailure('login / exception / no trace');
                                                        return;
                                                }
                                            
                                            //  figure out error
                                            //  ================
                                                var _trace = _loginError.trace.substr(0, _loginError.trace.indexOf(')')+1);
                                                switch (_trace)
                                                {
                                                    case 'EDAMUserException(errorCode:INVALID_AUTH, parameter:oneTimeCode)':
                                                        _onFailure('code');
                                                        return;
            
                                                    case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                                        _onFailure('timeout');
                                                        return;
                                                }
            
                                            //  could not figure out error
                                            //  ==========================
                                                _onFailure('login / exception / unknown');
                                                return;
                                        }
                                        
                                    
                                    //  result
                                    //  ======
                                     
                                        //  check
                                        //  =====
                                            switch (true)
                                            {
                                                case (!_loginResult.authenticationToken):
                                                case (!_loginResult.user):
                                                case (!_loginResult.user.id):
                                                case (!_loginResult.user.shardId):
                                                    _onFailure('login / invalid result');
                                                    return;
                                            }
            
                                            
                                        //  loginWithAuthToken
                                        //  ==================
                                            $R.credentials__deleteUserInfoCache();
                                            $R.$remote.clear_filing();
                                            $R.$remote.loginWithAuthToken(
                                                _loginResult.authenticationToken,
                                                _onSuccess,
                                                _onFailure);
                                            return;
                                },
                                _temp_auth, _code, _device_id, _device_description);
                        };
            
                        
                    //  already connected, connect, or error
                    //  =====================================
                        if ($R.$remote.is__connected)
                        {
                            //  do
                            _loginFunction();
                        }
                        else
                        {
                            //  connect
                            $R.$remote.connect(
                                function () { _loginFunction(); },
                                function () { _onFailure('connection / invalid'); });
                        }
                };
            
            
            //  login
            //  =====
                $R.$remote.loginWithAuthToken = function (_authToken, _onSuccess, _onFailure, _businessLoginNotNecessary)
                {
                    //  fail fast
                    //  =========
                        if (_authToken > '') {}else { _onFailure('getUser / exception / no token'); return; }
                
                    //  login sucess
                    //  ============
                        var _doSuccess = function () { _onSuccess(); };
                
                    //  set token
                    //  =========
                        $R.$remote.user__authToken = _authToken;
                              
                    //  only login to business
                    //  ======================
                        if (($R.$remote.user__businessId > 0) && $R.$remote.is__notExpired__businessDoesNotCount() && !_businessLoginNotNecessary) { $R.$remote.loginToBusiness(_doSuccess, _doSuccess); return; }
                                                
                    //  get userInfo
                    //  ============
                        $R.$remote.updateUserInfo(function ()
                        {
                            //  officially logged-in
                            //  ====================
                                $R.$remote.user__expires = (new Date()).getTime() + (1000 * 60 * 60 * 24 * 1);     //  one day, in milliseconds
                                $R.$remote.is__loggedIn =  true;
                        
                            //  note store -- user first; then, if needed, business
                            //  ==========
                                $R.log('RPC/6', $R.$bootstrap.remote_domain + 'shard/' + $R.$remote.user__shardId + '/json');
                                var _rpcNoteStoreClient = new $R.JSONRpcClient(function ()
                                {
                                    //  error / timeout
                                    //  ===============
                                        if (this.NoteStore) {}else { _onFailure('getUser / note store / invalid'); return; }
            
                                    //  set connected
                                    //  =============
                                        $R.$remote.rpc__noteStore = this;
            
                                    //  not business
                                    //  ============
                                        if ($R.$remote.user__businessId > 0) {}else { _doSuccess(); return; }
                
                                    //  is business -- try login
                                    //  ========================
                                        if (_businessLoginNotNecessary) { _doSuccess(); return; }
                                        $R.$remote.loginToBusiness(_doSuccess, _doSuccess);
                                },
                                $R.$bootstrap.remote_domain + 'shard/' + $R.$remote.user__shardId + '/json');
                        },
                        _onFailure);
                };
            
            
            //  login to business
            //  =================
                $R.$remote.loginToBusiness = function (_onSuccess, _onFailure)
                {
                    //  login sucess
                    //  ============
                        var _doSuccess = function () { _onSuccess(); };
            
                    //  authenticate to business
                    //  ========================
                        $R.$remote.rpc__userStore.UserStore.authenticateToBusiness(function (_rpc_result, _rpc_exception)
                        {
                            var _loginResultBusiness = _rpc_result, _loginErrorBusiness = _rpc_exception;
                            $R.log('loginToBusiness', _loginResultBusiness, _loginErrorBusiness);
                            
                            //  error
                            //  =====
                                if (_loginErrorBusiness) { _doSuccess(); return; }
                                
                            //  result
                            //  ======
                                
                                //  check
                                //  =====
                                    switch (true)
                                    {
                                        case (!_loginResultBusiness.authenticationToken):
                                        case (!_loginResultBusiness.user):
                                        case (!_loginResultBusiness.user.shardId):
                                            _doSuccess();
                                            return;
                                    }
            
                                //  set business info
                                //  =================
                                    $R.$remote.business__authToken =  _loginResultBusiness.authenticationToken;
                                    $R.$remote.business__expires =    _loginResultBusiness.expiration;
            
                                    $R.$remote.business__shardId =    _loginResultBusiness.user.shardId;
                                    
                                //  note store
                                //  ==========
                                    $R.log('RPC/5', $R.$bootstrap.remote_domain + 'shard/' + $R.$remote.business__shardId + '/json');
                                    var _rpcNoteStoreClientBusiness = new $R.JSONRpcClient(function ()
                                    {
                                        //  error / timeout
                                        //  ===============
                                            if (this.NoteStore) {}else { _onFailure(); return; }
            
                                        //  set connected
                                        //  =============
                                            $R.$remote.business__id = $R.$remote.user__businessId;
                                            $R.$remote.rpc__noteStoreForBusiness = this;
                                            $R.$remote.is__business = true;
                                            
                                        //  success
                                        //  =======
                                            _doSuccess();
                                    },
                                    $R.$bootstrap.remote_domain + 'shard/' + $R.$remote.business__shardId + '/json');
                        },
                        $R.$remote.user__authToken);
                };
            
            //  token
            //  =====
                $R.$remote.logoutWithAuthToken = function (_authToken)
                {
                    try { $R.$remote.rpc__userStore.UserStore.revokeLongSession(_authToken); } catch (e) { }
                };
            
            
            //  logout
            //  ======
                $R.$remote.logout = function ()
                {
                    $R.$remote['is__connected'] =       false;
                    $R.$remote['is__loggedIn'] =        false;
                    $R.$remote['is__business'] =        false;
            
                    $R.$remote['rpc__userStore'] =            false;
                    $R.$remote['rpc__noteStore'] =            false;
                    $R.$remote['rpc__noteStoreForBusiness'] = false;
            
                    $R.$remote['user__authToken'] =           false;
                    $R.$remote['user__authTokenForSession'] = false;
                    $R.$remote['user__expires'] =             false;
                    $R.$remote['user__id'] =                  false;
                    $R.$remote['user__shardId'] =             false;
                    $R.$remote['user__privilege'] =           false;
                    $R.$remote['user__username'] =            false;
                    $R.$remote['user__email'] =               false;
                    $R.$remote['user__name'] =                false;
                    $R.$remote['user__businessId'] =          false;
                    $R.$remote['user__lastUpdated'] =         false;
            
                    $R.$remote['business__id'] =        false;
                    $R.$remote['business__authToken'] = false;
                    $R.$remote['business__expires'] =   false;
                    $R.$remote['business__shardId'] =   false;
                };
            
            
            //  QA
            //  ==
                $R.$remote.disconnect = function ()
                {
                    $R.$remote.logout();
                };
                
            
            //  updateUserInfo
            //  ==============
                $R.$remote.updateUserInfo = function (_onSuccess, _onFailure)
                {
                    //  current cache
                    //  =============
                        var _currentCache = $R.credentials__getUserInfoCache();
                    
                    //  get and cache userInfo
                    //  =================
                        var _getAndCacheUserInfo = function ()
                        {
                            $R.$remote.updateUserInfo__getFromServer(function ()
                            {
                                //  the new cache
                                var _newCache = {
                                    'user__id':           $R.$remote.user__id,
                                    'user__shard_id':     $R.$remote.user__shardId,
                                    'user__privilege':    $R.$remote.user__privilege,
                                    'user__name':         $R.$remote.user__name,
                                    'user__username':     $R.$remote.user__username,
                                    'user__email':        $R.$remote.user__email,
                                    'user__business_id':  $R.$remote.user__businessId,
                                    'user__last_updated': $R.$remote.user__lastUpdated
                                };
                                
                                //  save cache
                                $R.credentials__setUserInfoCache(_newCache);
                                
                                //  success
                                _onSuccess();
                            },
                            _onFailure);
                        };
                    
                    //  get syncStateAndCompareCache
                    //  ============================
                        var _getSyncStateAndCompareCacheDate = function ()
                        {
                            $R.log('RPC/7', $R.$bootstrap.remote_domain + 'shard/' + _currentCache['user__shard_id'] + '/json');
                            var _rpcNoteStoreClient_dummy = new $R.JSONRpcClient(function ()
                            {
                                //  error / timeout
                                //  ===============
                                    if (this.NoteStore) {}else { _onFailure('getUser / note store / invalid'); return; }
            
                                //  getSyncState
                                //  ============
                                    this.NoteStore.getSyncState(function (_rpc_result, _rpc_exception)
                                    {
                                        var _last__online = ((_rpc_result && _rpc_result.lastUpdated && (_rpc_result.lastUpdated > 0)) ? _rpc_result.lastUpdated : 0);
                                        var _last__cached = ((_currentCache.user__last_updated && (_currentCache.user__last_updated > 0)) ? _currentCache.user__last_updated : 0);
                            
                                        //  get from online, or set cached
                                        if ((_last__online > _last__cached) || ((_last__online + _last__cached) == 0))
                                        {
                                            _getAndCacheUserInfo();
                                        }
                                        else
                                        {
                                            //  set from local cache
                                            //  ====================
                                                $R.$remote.user__id =           _currentCache['user__id'];
                                                $R.$remote.user__shardId =      _currentCache['user__shard_id'];
                                                $R.$remote.user__privilege =    _currentCache['user__privilege'];
                                                $R.$remote.user__name =         _currentCache['user__name'];
                                                $R.$remote.user__username =     _currentCache['user__username'];
                                                $R.$remote.user__email =        _currentCache['user__email'];
                                                $R.$remote.user__businessId =   _currentCache['user__business_id'];
                                                $R.$remote.user__lastUpdated =  _currentCache['user__last_updated'];
            
                                            //  success
                                            //  =======
                                                _onSuccess();
                                        }
                                    }, 
                                    __readable_by_evernote.$remote.user__authToken);
                            },
                            $R.$bootstrap.remote_domain + 'shard/' + _currentCache['user__shard_id'] + '/json');
                        };
            
                    //  getUserInfo
                    //  ===========
                        var _getUserInfo = function ()
                        {
                            if (_currentCache)
                            {
                                _getSyncStateAndCompareCacheDate();
                            }
                            else
                            {
                                _getAndCacheUserInfo();            
                            }
                        };
                    
                    //  already connected, connect, or error
                    //  ====================================
                        if ($R.$remote.is__connected)
                        {
                            //  do
                            _getUserInfo();
                        }
                        else
                        {
                            //  connect
                            $R.$remote.connect(
                                function () { _getUserInfo(); },
                                function () { _onFailure('connection / invalid'); });
                        }
                };
            
                $R.$remote.updateUserInfo__getFromServer = function (_onSuccess, _onFailure)
                {
                    $R.$remote.rpc__userStore.UserStore.getUser(function (_rpc_result, _rpc_exception)
                    {
                        var _getUserResult = _rpc_result, _getUserError = _rpc_exception;
                        $R.log('updateUserInfo__getFromServer', _getUserResult, _getUserError);
                    
                        if (_getUserError)
                        {
                            //  could not figure out error
                            //  ==========================
                                _onFailure('getUser / exception / unknown');
                                return;
                        }
                            
                        switch (true)
                        {
                            case (!_getUserResult):
                            case (!_getUserResult.id):
                            case (!_getUserResult.shardId):
                                _onFailure('getUser / invalid result');
                                return;
                        }
            
                        $R.$remote.user__id =           _getUserResult.id;
                        $R.$remote.user__shardId =      _getUserResult.shardId;
                        $R.$remote.user__privilege =    _getUserResult.privilege.value;
                        $R.$remote.user__username =     _getUserResult.username;
                        $R.$remote.user__email =        _getUserResult.email;
                        $R.$remote.user__name =         _getUserResult.name;
                        $R.$remote.user__businessId =   ((_getUserResult.accounting && _getUserResult.accounting.businessId && (_getUserResult.accounting.businessId > 0)) ? _getUserResult.accounting.businessId : 0);
                        $R.$remote.user__lastUpdated =  _getUserResult.updated;
                            
                        _onSuccess(); 
                    },
                    $R.$remote.user__authToken);
                };
            
        
            //  clip
            //  ====
                $R.$remote.clip = function (_pageId, _note, _onSuccess, _onFailure)
                {
                    //  calls clip__update_content, if the _pageId has already been marked as clipped
                    //  otherwise, calls clip__new
                    
                    var _clipped = (_pageId in $R.$remote.store__pageId_to_clipInfo);
                    switch (true)
                    {
                        case (!!_clipped): $R.$remote.clip__update_content(_pageId, _note, _onSuccess, _onFailure); break;
                        case (!_clipped):  $R.$remote.clip__new(_pageId, _note, _onSuccess, _onFailure); break;
                    }
                };
            
            //  include
            //  =======
            
                //  do page clip
                //  ============
                    $R.$remote.clip__doPageClip = function (_pageId, _note, _filing, _onSuccess, _onFailure)
                    {
                        //  fix params
                        //  ==========
                            _note = $R.$remote.clip__doPageClip__fixNote(_note);
                            
                            if (_filing)
                            {
                                if (_filing.notebook) {}else  { _onFailure('noNotebook'); return; }
                                if (_filing.tag_names) {}else { _filing.tag_names = false; }
                            }
                            
                        //  filingParam
                        //  ===========
                            var _filingParam = {};
                            if (_filing)
                            {
                                //  meta
                                _filingParam['source'] = 'Clearly';
                                _filingParam['createTags'] = true;
                
                                //  notebook & tags
                                if (_filing.notebook && _filing.notebook.id)  { _filingParam['notebookGuid'] = _filing.notebook.guid; }
                                if (_filing.tag_names) { _filingParam['tagNameList'] = _filing.tag_names; } // { 'javaClass': 'java.util.ArrayList', 'list': _filing.tag_names }; }
                            }
                            else
                            {
                                if ($R.$remote.store__pageId_to_clipInfo[_pageId])
                                {
                                    //  updates content of note with this guid
                                    _filingParam['originalNoteGuid'] = $R.$remote.store__pageId_to_clipInfo[_pageId].guid;
                                    
                                    //  set _filing, because we need it (to return, and to find the container notebook/shard) -- won't also set _filingParam
                                    _filing = {
                                        'notebook':  $R.$remote.store__pageId_to_clipInfo[_pageId].filing.notebook,
                                        'tag_names': $R.$remote.store__pageId_to_clipInfo[_pageId].filing.tag_names
                                    };
                                }
                                else
                                {
                                    //  error
                                    _onFailure('notClippedBefore');
                                    return;
                                }
                            }    
                    
                        //  on clip success
                        //  ===============
                            var _onClipSuccess = function (_clipGuid)
                            {
                                $R.$remote.store__pageId_to_clipInfo[_pageId] = {
                                    'guid':   _clipGuid,
                                    'title':  _note.title,
                                    'url':    $R.$remote.get_note_url(_filing.notebook, _clipGuid),
                                    'filing': { 
                                        'notebook':  _filing.notebook,
                                        'tag_names': _filing.tag_names 
                                    }
                                };
                
                                _onSuccess();          
                            };
                    
                        //  get shard and auth token
                        //  ========================
                            $R.$remote.clip__doGetShardAndAuthTokenForNotebook(_filing.notebook, function (_shard, _authToken)
                            {
                                //  clip
                                //  ====
                                    $R.$remote.clip__doNoteClip(
                                        _note, 
                                        _filingParam, 
                                        _shard, 
                                        _authToken, 
                                        _onClipSuccess, 
                                        _onFailure); 
                            }, 
                            _onFailure);
                    };
                
                //  do page update filing
                //  =====================
                    $R.$remote.clip__doPageUpdateFiling = function (_pageId, _newFiling, _note, _onSuccess, _onFailure)
                    {
                        //  also modifies filing__tags__personal and filing__tags__business
                        //      specifically, when adding new tags, it adds them to those global arrays too
                    
                        //  fix params
                        //  ==========
                            _note = $R.$remote.clip__doPageClip__fixNote(_note);
                            if (_newFiling.notebook) {}else  { _newFiling.notebook = false; }
                            if (_newFiling.tag_names) {}else { _newFiling.tag_names = false; }
                    
                        //  check that page has been clipped
                        //  ================================
                            var _clipInfo = $R.$remote.store__pageId_to_clipInfo[_pageId];
                            if (_clipInfo) {}else { _onFailure('notClippedBefore'); return; }
                    
                        //  old filing
                        //  ==========
                            var _oldFiling = _clipInfo.filing;
                    
                        //  difference degree
                        //  =================
                            var _tagsAreDifferent =           (_newFiling.tag_names.length != _oldFiling.tag_names.length),
                                _notebooksAreDifferent =      (_newFiling.notebook ? (_newFiling.notebook.guid != _oldFiling.notebook.guid) : false),
                                _notebooksAreDifferentTypes = (_newFiling.notebook ? ((_newFiling.notebook.type != _oldFiling.notebook.type) || ((_newFiling.notebook.type == 'shared') && (_oldFiling.notebook.type == 'shared'))) : false);
                        
                        //  no difference
                        //  =============
                            if (!_tagsAreDifferent && !_notebooksAreDifferent && !_notebooksAreDifferentTypes) { _onSuccess(); return; }
                            
                        //  add tags to the main filing store, if new tags were just added
                        //  ==============================================================
                            if (_tagsAreDifferent) { (function () 
                            {
                                //  by type
                                var _tags_type = (_notebooksAreDifferent ? _newFiling.notebook.type : _oldFiling.notebook.type),
                                    _tags_array = $R.$remote['filing__tags__'+_tags_type],
                                    _tags_added = false;
                                    
                                if (_tags_array) {}else { return; }
                                
                                //  get current
                                var _current_tags = (function () { var _r={}; for (var _t in _tags_array) { _r[_tags_array[_t].name.toLowerCase()] = true; } return _r; })();
                                
                                //  loop through new tags
                                for (var _t=false, _i=0, _ii=_newFiling.tag_names.length; _i<_ii; _i++)
                                {
                                    //  new tag
                                    _t = _newFiling.tag_names[_i]; 
                                    
                                    //  in old tags?
                                    if (_current_tags[_t.toLowerCase()]) { continue; }
                                    
                                    //  random
                                    var _r = function () { return (Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111); };
                                    
                                    //  new new tag
                                    var _new = {
                                        'name': _t,
                                        'type': _tags_type,
                                        'guid': _r(),
                                        'id': 'p__' + _r()
                                    };
                                    
                                    //  add
                                    $R.$remote['filing__tags__'+_tags_type][_new.id] = _new;
                                    
                                    //  mark
                                    _tags_added = true;
                                }
                                
                                //  order -- skip notebooks
                                $R.$remote.order_filing(true);
                                
                                //  important:
                                //      these temporary tags aren't saved
                                //      they will get overridden the next time a filing-sync is performed
                                //          which is how it should be
                            })(); }
                            
                        //  by difference
                        //  =============
                            switch (true)
                            {
                                case (_notebooksAreDifferentTypes): //  delete note; clip again
                                    
                                    //  get shard and auth token
                                    //  ========================
                                        $R.$remote.clip__doGetShardAndAuthTokenForNotebook(_oldFiling.notebook, function (_shard, _authToken)
                                        {
                                            //  delete note
                                            //  ===========
                                                $R.$remote.clip__doNoteDelete(_clipInfo.guid, _shard, _authToken, function ()
                                                {
                                                    //  clip again -- !!! call doPageClip not doNoteClip
                                                    //  ==========
                                                        $R.$remote.clip__doPageClip(
                                                            _pageId, 
                                                            _note, 
                                                            _newFiling, 
                                                            _onSuccess, 
                                                            _onFailure);
                                                },
                                                _onFailure);
                                        }, 
                                        _onFailure);
                                        
                                    break;
                                    
                                case (_notebooksAreDifferent || _tagsAreDifferent): //  update note
                                    
                                    //  update param
                                    //  ============
                                        
                                        //  define
                                        var _updateParam = {
                                            'guid':  _clipInfo.guid,
                                            'title': _clipInfo.title
                                        };
                                                            
                                        //  notebook & tags
                                        if (_newFiling.notebook)  { _updateParam['notebookGuid'] = _newFiling.notebook.guid; }
                                        if (_newFiling.tag_names) { _updateParam['tagNames'] = { 'javaClass': 'java.util.ArrayList', 'list': _newFiling.tag_names }; }
                                    
                                    //  on update success
                                    //  =================
                                        var _onUpdateSuccess = function ()
                                        {
                                            $R.$remote.store__pageId_to_clipInfo[_pageId] = {
                                                'guid':  _clipInfo.guid,
                                                'title': _clipInfo.title,
                                                'url':   $R.$remote.get_note_url((_notebooksAreDifferent ? _newFiling : _oldFiling).notebook, _clipInfo.guid),
                                                'filing': { 
                                                    'notebook':  (_notebooksAreDifferent ? _newFiling : _oldFiling).notebook,
                                                    'tag_names': (_tagsAreDifferent ? _newFiling : _oldFiling).tag_names
                                                }
                                            };
                
                                            _onSuccess();          
                                        };
                                    
                                    //  get shard and auth token
                                    //  ========================
                                        $R.$remote.clip__doGetShardAndAuthTokenForNotebook(_newFiling.notebook, function (_shard, _authToken)
                                        {
                                            //  update note
                                            //  ===========
                                                $R.$remote.clip__doNoteUpdate(
                                                    _updateParam, 
                                                    _shard, 
                                                    _authToken, 
                                                    _onUpdateSuccess, 
                                                    _onFailure); 
                                        }, 
                                        _onFailure);
                                    
                                    break;
                            }
                    };
                
                //  fix note param
                //  ==============
                    $R.$remote.clip__doPageClip__fixNote = function (_note)
                    {
                        //  return
                        var _return = _note;
                
                        //  title
                        //  =====
                        
                            //  simple trim
                            _return.title = ((_return.title > '') ? _return.title.replace(/^\s+|\s+$/gm, '') : _url);
                
                            //  must match "^[^\p{Cc}\p{Z}]([^\p{Cc}\p{Zl}\p{Zp}]{0,253}[^\p{Cc}\p{Z}])?$"
                            //  ==========
                                //  http://www.unicode.org/reports/tr18/#General_Category_Property
                                //  XRegExp Unicode categories: http://xregexp.com/addons/unicode/unicode-categories.js
                                    //  Cc: "0000-001F 007F-009F"
                                    //  Z : "0020 00A0 1680 180E 2000-200A 2028 2029 202F 205F 3000"
                                    //  Zl: "2028"
                                    //  Zp: "2029"
                                //  example: http://espn.go.com/blog/playbook/fandom/post/_/id/20240/carmelo-anthonys-other-love-boxing 
                                
                                var _regex__cc_z__start = /^([\u0000-\u001F\u007F-\u009F]|[\u0020\u00A0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000])/i,
                                    _regex__cc_z__end =    /([\u0000-\u001F\u007F-\u009F]|[\u0020\u00A0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000])$/i,
                                    _regex__cc_zl_zp =     /([\u0000-\u001F\u007F-\u009F]|[\u2028]|[\u2029])/gi;
                            
                                //  start: ^[^\p{Cc}\p{Z}]
                                while (_return.title.match(_regex__cc_z__start) != null) { _return.title = _return.title.replace(_regex__cc_z__start, ''); }
                            
                                //  end: [^\p{Cc}\p{Z}])?$
                                while (_return.title.match(_regex__cc_z__end) != null) { _return.title = _return.title.replace(_regex__cc_z__end, ''); }
                            
                                //  ([^\p{Cc}\p{Zl}\p{Zp}]{0,253}
                                _return.title = _return.title.replace(_regex__cc_zl_zp, '');
                            
                            //  length
                            _return.title = _return.title.substr(0, 255);
                     
                        //  return
                        return _return;
                    };
                
                //  do note clip
                //  ============
                    $R.$remote.clip__doNoteClip = function (_note, _filing, _rpcNoteStore, _authToken, _onSuccess, _onFailure)
                    {
                        //  NoteStoreExtra.clipNote 
                        //      on a specific shard, using a specific authToken
                        //      knowing the final _note, and the final _filing
                        
                        _rpcNoteStore.NoteStoreExtra.clipNote(function (_rpc_result, _rpc_exception)
                        {
                            var _clipResult = _rpc_result, _clipError = _rpc_exception;
                            $R.log('clip__doNoteClip', _clipResult, _clipError);
                        
                            //  error
                            //  =====
                                if (_clipError)
                                {
                                    //  unknown error
                                    //  =============
                                        switch (true)
                                        {
                                            case (!(_clipError.trace)):
                                            case (!(_clipError.trace.indexOf)):
                                            case (!(_clipError.trace.indexOf(')') > -1)):
                                                _onFailure('clip__doNoteClip / exception / no trace');
                                                return;
                                        }
                                    
                                    //  figure out error
                                    //  ================
                                        var _trace = _clipError.trace.substr(0, _clipError.trace.indexOf(')')+1);
                                        switch (_trace)
                                        {
                                            case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                            case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                            case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                                _onFailure('login');
                                                return;
                                        }
                
                                    //  could not figure out error
                                    //  ==========================
                                        _onFailure('clip__doNoteClip / exception / unknown');
                                        return;
                                }
                                
                            //  result
                            //  ======
                
                                //  check -- _clipResult is note guid
                                //  =====
                                    switch (true)
                                    {
                                        case (!(_clipResult > '')):
                                        case (!(_clipResult.split('-').length == 5)):
                                            _onFailure('clip__doNoteClip / invalid result');
                                            return;
                                    }
                                    
                                //  success
                                //  =======
                                    _onSuccess(_clipResult);
                        },
                        _authToken,
                        _filing,
                        _note.title,
                        _note.url,
                        _note.body);
                    };
                
                //  do note update filing
                //  =====================
                    $R.$remote.clip__doNoteUpdate = function (_noteUpdate, _rpcNoteStore, _authToken, _onSuccess, _onFailure)
                    {
                        //  NoteStore.updateNote
                        //      on a specific shard, using a specific authToken
                        
                        _rpcNoteStore.NoteStore.updateNote(function (_rpc_result, _rpc_exception)
                        {
                            var _clipResult = _rpc_result, _clipError = _rpc_exception;
                            $R.log('clip__doNoteUpdate', _clipResult, _clipError);
                        
                            //  error
                            //  =====
                                if (_clipError)
                                {
                                    //  unknown error
                                    //  =============
                                        switch (true)
                                        {
                                            case (!(_clipError.trace)):
                                            case (!(_clipError.trace.indexOf)):
                                            case (!(_clipError.trace.indexOf(')') > -1)):
                                                _onFailure('clip__doNoteUpdate / exception / no trace');
                                                return;
                                        }
                                    
                                    //  figure out error
                                    //  ================
                                        var _trace = _clipError.trace.substr(0, _clipError.trace.indexOf(')')+1);
                                        switch (_trace)
                                        {
                                            case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                            case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                            case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                                _onFailure('login');
                                                return;
                                        }
                
                                    //  could not figure out error
                                    //  ==========================
                                        _onFailure('clip__doNoteUpdate / exception / unknown');
                                        return;
                                }
                                
                            //  success
                            //  =======
                                _onSuccess();
                        },
                        _authToken,
                        _noteUpdate);
                    };
                
                //  do note delete
                //  ==============
                    $R.$remote.clip__doNoteDelete = function (_noteGuid, _rpcNoteStore, _authToken, _onSuccess, _onFailure)
                    {
                        //  NoteStoreExtra.deleteNote 
                        //      on a specific shard, using a specific authToken
                        
                        _rpcNoteStore.NoteStore.deleteNote(function (_rpc_result, _rpc_exception)
                        {
                            var _clipResult = _rpc_result, _clipError = _rpc_exception;
                            $R.log('clip__doNoteDelete', _clipResult, _clipError);
                        
                            //  error
                            //  =====
                                if (_clipError)
                                {
                                    //  unknown error
                                    //  =============
                                        switch (true)
                                        {
                                            case (!(_clipError.trace)):
                                            case (!(_clipError.trace.indexOf)):
                                            case (!(_clipError.trace.indexOf(')') > -1)):
                                                _onFailure('clip__doNoteDelete / exception / no trace');
                                                return;
                                        }
                                    
                                    //  figure out error
                                    //  ================
                                        var _trace = _clipError.trace.substr(0, _clipError.trace.indexOf(')')+1);
                                        switch (_trace)
                                        {
                                            case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                            case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                            case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                                _onFailure('login');
                                                return;
                                        }
                
                                    //  could not figure out error
                                    //  ==========================
                                        _onFailure('clip__doNoteDelete / exception / unknown');
                                        return;
                                }
                                
                            //  success
                            //  =======
                                _onSuccess();
                        },
                        _authToken,
                        _noteGuid);
                    };
                
                //  get shard and auth toeken for specific notebook
                //  ===============================================
                    $R.$remote.clip__doGetShardAndAuthTokenForNotebook = function (_notebook, _onSuccess, _onFailure)
                    {
                        //  _notebook is a notebook object from $R.$remote.filing_notebooks
                        //      i.e. it has a type property and a shared/business-Info property and all the other stuff
                        
                        switch (true)
                        {
                            case (_notebook.type == 'personal'):
                            
                                _onSuccess(
                                    $R.$remote.rpc__noteStore, 
                                    $R.$remote.user__authToken); 
                            
                                return; 
                                break;
                                
                            case (_notebook.type == 'business'): 
                            
                                _onSuccess(
                                    $R.$remote.rpc__noteStoreForBusiness, 
                                    $R.$remote.business__authToken); 
                            
                                return; 
                                break;
                            
                            case (_notebook.type == 'shared'):
                                $R.log('RPC/2', $R.$bootstrap.remote_domain + 'shard/' + _notebook.sharedInfo.shardId + '/json');
                                var _shardRPCClient = new $R.JSONRpcClient(function ()
                                {
                                    //  error
                                    if (this.NoteStore && this.NoteStoreExtra) {}else { _onFailure(); return; }
                
                                    //  shared shard
                                    var _sharedShard = this;
                
                                    //  notebook auth
                                    this.NoteStore.authenticateToSharedNotebook(function (_rpc_result, _rpc_exception)
                                    {
                                        //  auth result
                                        var _getResultSharedAuth = _rpc_result, _getErrorSharedAuth = _rpc_exception;
                
                                        //  error
                                        switch (true)
                                        {
                                            case (!!_getErrorSharedAuth):
                                            case (!_getResultSharedAuth):
                                            case (!_getResultSharedAuth.authenticationToken):
                                                _onFailure();
                                                return;
                                                break;
                                        }
                                
                                        //  auth token
                                        var _sharedAuthToken = _getResultSharedAuth.authenticationToken;
                                
                                        //  success
                                        _onSuccess(
                                            _sharedShard, 
                                            _sharedAuthToken); 
                                    },
                                    _notebook.sharedInfo.globalId,
                                    $R.$remote.user__authToken);
                                },
                                $R.$bootstrap.remote_domain + 'shard/' + _notebook.sharedInfo.shardId + '/json');
                                
                                return;
                                break;
                        }
                    };
                
            
                //  clip new
                //  ========
                    $R.$remote.clip__new = function (_pageId, _note, _onSuccess, _onFailure)
                    {
                        //  clips page into a new note
                        //  files the note with the notebook/tags set in Options 
                        //      if those aren't set, the note is put in the default notebook and no tags are assigned
                        
                        //  _note = { url, title, body }
                    
                        //  preliminary check
                        //  =================
                            switch (true)
                            {
                                case (!$R.$remote.rpc__noteStore):
                                case (!$R.$remote.rpc__noteStore.NoteStore):
                                case (!$R.$remote.is__connected):
                                case (!$R.$remote.is__loggedIn):
                                case (!$R.$remote.is__notExpired()):
                                    _onFailure('login');
                                    return;
                            }
                
                        //  do smart filing, if needed -- the recommendation hasn't been requested yet
                        //  ==========================
                            switch (true)
                            {
                                case (!$R.$remote.store__pageId_to_recommendation[_pageId] && ($R.$remote.setting__smart_filing == 'enabled')):
                                case (!$R.$remote.store__pageId_to_recommendation[_pageId] && ($R.$remote.setting__smart_filing == 'just_notebooks')):
                                case (!$R.$remote.store__pageId_to_recommendation[_pageId] && ($R.$remote.setting__smart_filing == 'just_tags')):
                
                                    var _get_reccomendation__success = function ()
                                    {
                                        //  do it again
                                        $R.$remote.clip(_pageId, _note, _onSuccess, _onFailure);
                                    };
                
                                    var _get_reccomendation__fail = function ()
                                    {
                                        //  set to dummy
                                        $R.$remote.store__pageId_to_recommendation[_pageId] = true;
                                
                                        //  do it again
                                        $R.$remote.clip(_pageId, _note, _onSuccess, _onFailure);
                                    };
                                        
                                    //  wait a bit and check again; then, try to get recommendation (again)
                                    window.setTimeout(function ()
                                    {
                                        if ($R.$remote.store__pageId_to_recommendation[_pageId])
                                        {
                                            _get_reccomendation__success();
                                        }
                                        else
                                        {
                                            $R.$remote.get_recommendation(
                                                _pageId,
                                                { 'url':   _note.url, 
                                                  'title': _note.title, 
                                                  'body':  _note.body },
                                                function () { _get_reccomendation__success(); },
                                                function () { _fail_to_get_reccomendation(); });
                                        }
                                    }, 1000);
                                        
                                    return;
                                    break;
                            }
                        
                        //  ensure stuff
                        //  ============
                
                            //  filing
                            $R.$remote.ensure_filing(function ()
                            {
                                //  auth token        
                                $R.$remote.ensure_authTokenForSession(function ()
                                {
                                    //  get filing
                                    var _filing = $R.$remote.clip__new__getFiling(_pageId);
                                    $R.log('clip__new / filing', _filing);
                                    
                                    //  do clip -- with _filing, so this will create a new note
                                    $R.$remote.clip__doPageClip(_pageId, _note, _filing, _onSuccess, function (_r) { _onFailure(_r); console.log(_r); });
                                }, 
                                function () { _onFailure('sessionAuthToken'); });
                            },
                            function () { _onFailure('filing'); });
                    };
                
                //  get filing
                //  ==========
                    $R.$remote.clip__new__getFiling = function (_pageId)
                    {
                        //  return
                        //  ======
                            var _return = {
                                'notebook':  false,
                                'tag_names': { /* name => type */ }
                            };
                            
                        //  vars
                        //  ====
                            var _noTags = false; // running var that gets updated every time the notebook gets updated
                            var _recommendation = $R.$remote.store__pageId_to_recommendation[_pageId];
                    
                        //  filing: default notebook
                        //  ========================
                            if ($R.$remote.filing__notebooks__id_of_default && $R.$remote.filing__notebooks[$R.$remote.filing__notebooks__id_of_default])
                            {
                                _return.notebook = $R.$remote.filing__notebooks[$R.$remote.filing__notebooks__id_of_default];
                                _noTags = ((_return.notebook.type == 'shared') ? _return.notebook.sharedInfo.noTags : ((_return.notebook.type == 'business') ? _return.notebook.businessInfo.noTags : false));
                            }
                    
                        //  filing: options
                        //  ===============
                        
                            //  notebook
                            //  ========
                                if ($R.$remote.setting__clip_notebook_id && $R.$remote.filing__notebooks[$R.$remote.setting__clip_notebook_id])
                                {
                                    _return.notebook = $R.$remote.filing__notebooks[$R.$remote.setting__clip_notebook_id];
                                    _noTags = ((_return.notebook.type == 'shared') ? _return.notebook.sharedInfo.noTags : ((_return.notebook.type == 'business') ? _return.notebook.businessInfo.noTags : false));
                                }
                        
                            //  tags
                            //  ====
                                if (!_noTags)
                                {
                                    for (var _tags=$R.$remote.setting__clip_tag.split(','), _t=false, _i=0, _ii=_tags.length; _i<_ii; _i++)
                                    {
                                        //  set + trim
                                        _t = _tags[_i].replace(/^ /, '').replace(/ $/, '');
                                    
                                        //  invalid?
                                        if (_t > '') {}else { continue; }
                                    
                                        //  add
                                        _return.tag_names[_t] = 'options';
                                    }
                                }
                                
                        //  filing: recommendation
                        //  ======================
                        
                            //  notebook
                            //  ========
                                if (($R.$remote.setting__smart_filing == 'enabled' || $R.$remote.setting__smart_filing == 'just_notebooks') && _recommendation && _recommendation.notebook && _recommendation.notebook.guid && $R.$remote.filing__notebooks__id_by_guid[_recommendation.notebook.guid])
                                {
                                    _return.notebook = $R.$remote.filing__notebooks[$R.$remote.filing__notebooks__id_by_guid[_recommendation.notebook.guid]];
                                    _noTags = ((_return.notebook.type == 'shared') ? _return.notebook.sharedInfo.noTags : ((_return.notebook.type == 'business') ? _return.notebook.businessInfo.noTags : false));
                                }
                        
                            //  tags
                            //  ====
                                if (!_noTags && (_return.notebook.type == 'personal') && ($R.$remote.setting__smart_filing == 'enabled' || $R.$remote.setting__smart_filing == 'just_tags') && _recommendation && _recommendation.tags)
                                {
                                    for (var _t=false, _i=0, _ii=_recommendation.tags.length; _i<_ii; _i++)
                                    {
                                        //  set
                                        _t = _recommendation.tags[_i].name;
                                        
                                        //  invalid?
                                        if (_t > '') {}else { continue; }
                                    
                                        //  add
                                        _return.tag_names[_t] = 'personal';
                                    }
                                }
                
                        //  filing: business recommendation
                        //  ===============================
                
                            //  notebook
                            //  ========
                                if ($R.$remote.is__business && ($R.$remote.setting__smart_filing == 'enabled' || $R.$remote.setting__smart_filing == 'just_notebooks') && ($R.$remote.setting__smart_filing_for_business == 'enabled' || $R.$remote.setting__smart_filing_for_business == 'just_notebooks') && _recommendation && _recommendation.notebook__business && _recommendation.notebook__business.guid && $R.$remote.filing__notebooks__id_by_guid[_recommendation.notebook__business.guid])
                                {
                                    _return.notebook = $R.$remote.filing__notebooks[$R.$remote.filing__notebooks__id_by_guid[_recommendation.notebook__business.guid]];
                                    _noTags = ((_return.notebook.type == 'shared') ? _return.notebook.sharedInfo.noTags : ((_return.notebook.type == 'business') ? _return.notebook.businessInfo.noTags : false));
                                
                                    //  clear personal tags
                                    for (var _tag in _return.tag_names) { if (_return.tag_names[_tag] == 'personal') { _return.tag_names[_tag] = false; } }
                                }
                        
                            //  tags
                            //  ====
                                if ($R.$remote.is__business && !_noTags && (_return.notebook.type == 'business') && ($R.$remote.setting__smart_filing == 'enabled' || $R.$remote.setting__smart_filing == 'just_tags') && ($R.$remote.setting__smart_filing_for_business == 'enabled' || $R.$remote.setting__smart_filing_for_business == 'just_tags') && _recommendation && _recommendation.tags__business)
                                {
                                    for (var _t=false, _i=0, _ii=_recommendation.tags__business.length; _i<_ii; _i++)
                                    {
                                        //  set
                                        _t = _recommendation.tags__business[_i].name;
                                        
                                        //  invalid?
                                        if (_t > '') {}else { continue; }
                                    
                                        //  add
                                        _return.tag_names[_t] = 'business';
                                    }
                                }
                    
                        //  fallback to default notebook -- moved to beginning
                        //  ============================
                        /*  if (!_return.notebook && $R.$remote.filing__notebooks__id_of_default && $R.$remote.filing__notebooks[$R.$remote.filing__notebooks__id_of_default])
                            {
                                _return.notebook = $R.$remote.filing__notebooks[$R.$remote.filing__notebooks__id_of_default];
                                _noTags = ((_return.notebook.type == 'shared') ? _return.notebook.sharedInfo.noTags : ((_return.notebook.type == 'business') ? _return.notebook.businessInfo.noTags : false));
                                
                                //  clear business tags
                                for (var _tag in _return.tag_names) { if (_return.tag_names[_tag] == 'business') { _return.tag_names[_tag] = false; } }
                                
                                //  clear all tags, if _noTags says so
                                if (_noTags) { _return.tag_names = {}; }
                            } */
                    
                        //  remove null tags; make array
                        //  ============================
                            _return.tag_names = (function () { var _r=[]; for (var _tag in _return.tag_names) { if (_return.tag_names) { _r.push(_tag); } } return _r; })();
                    
                        //  return
                        //  ======
                            return _return;
                    };
                
                //  clip / update content
                //  =====================
                    $R.$remote.clip__update_content = function (_pageId, _note, _onSuccess, _onFailure)
                    {
                        //  updates note content, for the note which corresponds with the page
                    
                        //  _note = { url, title, body }
                    
                        //  preliminary check
                        //  =================
                            switch (true)
                            {
                                case (!$R.$remote.rpc__noteStore):
                                case (!$R.$remote.rpc__noteStore.NoteStore):
                                case (!$R.$remote.is__connected):
                                case (!$R.$remote.is__loggedIn):
                                case (!$R.$remote.is__notExpired()):
                                    _onFailure('login');
                                    return;
                            }
                
                        //  check that note has already been clipped
                        //  ========================================
                            if (_pageId in $R.$remote.store__pageId_to_clipInfo) {}else { _onFailure('notClippedBefore'); return; }
                
                        //  do clip -- without _filing, so this will only update the note's content
                        //  =======
                            $R.$remote.clip__doPageClip(_pageId, _note, false, _onSuccess, _onFailure);
                    };
                
                //  clip / update filing
                //  ====================
                    $R.$remote.clip__update_filing = function (_pageId, _newFiling, _note, _onSuccess, _onFailure)
                    {
                        //  either updates an existing note
                        //      if we're just adding tags
                        //      or if we're moving the note from 
                        //          a personal notebook to another personal notebook
                        //          or from a business notebook to another business notebook
                        //
                        //  or it deletes the old note and creates a new one
                        //      if we're moving the note between different types of notebooks
                    
                        //  _note = { url, title, body }
                        //  _newFiling = { notebook_id, tag_names }
                        //  _newFilingParam = { notebook, tag_names }
                    
                        //  filingParam
                        //  ===========
                        
                            //  define
                            var _newFilingParam = {};
                
                            //  tags
                            if (_newFiling.tag_names) { _newFilingParam['tag_names'] = _newFiling.tag_names; }
                        
                            //  notebook
                            if (_newFiling.notebook_id && $R.$remote.filing__notebooks[_newFiling.notebook_id])
                            {
                                _newFilingParam['notebook'] = $R.$remote.filing__notebooks[_newFiling.notebook_id];
                                var _noTags = ((_newFilingParam.notebook.type == 'shared') ? _newFilingParam.notebook.sharedInfo.noTags : ((_newFilingParam.notebook.type == 'business') ? _newFilingParam.notebook.businessInfo.noTags : false));
                                if (_noTags) { _newFilingParam['tag_names'] = []; }
                            }
                    
                        //  preliminary check
                        //  =================
                            switch (true)
                            {
                                case (!$R.$remote.rpc__noteStore):
                                case (!$R.$remote.rpc__noteStore.NoteStore):
                                case (!$R.$remote.is__connected):
                                case (!$R.$remote.is__loggedIn):
                                case (!$R.$remote.is__notExpired()):
                                    _onFailure('login');
                                    return;
                            }
                
                        //  ensure
                        //  ======
                            $R.$remote.ensure_filing(
                                function () { $R.$remote.clip__doPageUpdateFiling(_pageId, _newFilingParam, _note, _onSuccess, _onFailure); },
                                function () { _onFailure('filing'); });
                    };
                
            
            
            //  ensure filing
            //  =============
                $R.$remote.ensure_filing = function (_onSuccess, _onFailure)
                {
                    //  working -- renew_filing was previously called; we'll wait on it
                    //  =======
                        if ($R.$remote.filing__working)
                        {
                            //  start interval
                            (function ()
                            {
                                var _nr = 0, _int = window.setInterval(function ()
                                {
                                    switch (true)
                                    {
                                        case (!$R.$remote.filing__working && !!$R.$remote.filing__when): window.clearInterval(_int); _onSuccess(); break;
                                        case (!$R.$remote.filing__working && !$R.$remote.filing__when):  window.clearInterval(_int); _onFailure(); break;
                                        case ($R.$remote.filing__working &&  (_nr >= 10)):               window.clearInterval(_int); _onFailure(); break;
                                    }
                                }, 5000);
                            })();
                            
                            //  return
                            return;
                        }
                    
                    //  not expired; success
                    //  ====================
                        switch (true)
                        {
                            case (!$R.$remote.filing__expires):
                            case (!((new Date()).getTime() < ($R.$remote.filing__expires - (10 * 60 * 1000)))):  //  within 10 minutes
                                break;
            
                            default: 
                                _onSuccess();
                                return;
                                break;
                        }
                
                    //  preliminary check
                    //  =================
                        switch (true)
                        {
                            case (!$R.$remote.rpc__noteStore):
                            case (!$R.$remote.rpc__noteStore.NoteStore):
                            case (!$R.$remote.is__connected):
                            case (!$R.$remote.is__loggedIn):
                            case (!$R.$remote.is__notExpired()):
                                _onFailure('login');
                                return;
                        }
                        if ($R.$remote.is__business) { switch (true)
                        {
                            case (!$R.$remote.rpc__noteStoreForBusiness):
                            case (!$R.$remote.rpc__noteStoreForBusiness.NoteStore):
                                _onFailure('login');
                                return;
                        }}
                
                    //  expired; renew
                    //  ==============
                        $R.$remote.renew_filing(_onSuccess, _onFailure);
                };
            
            
            //  renew filing
            //  ============
                $R.$remote.renew_filing = function (_onSuccess, _onFailure, _force_full_sync)
                {
                    //  start working
                    //  =============
                        $R.$remote.filing__working = true;
                
                    //  include
                    //  =======
                        //  do home  -- on success: _onSuccessSub(_home_result)
                        //  =======
                            var _do_home_shard = function (_last_usn, _onSuccessSub, _onFailureSub)
                            {
                                //  _getChunkLoop is called
                                //      it calls itself as many times as needed
                                //      then it calls _onSuccessSub
                        
                                //  return
                                var _return = {
                                    'notebooks__new': [],
                                    'notebooks__del': [],
                        
                                    'tags__new': [],
                                    'tags__del': [],
                        
                                    'pre_business_notebooks__new': [],
                                    'pre_business_notebooks__del': [],
                        
                                    'pre_shared_notebooks__new': [],
                                    'pre_shared_notebooks__del': [],
                                    
                                    'new_usn': false
                                };
                        
                                //  chunk loop
                                var _getChunkLoop = function (_previous_usn)
                                {
                                    $R.$remote.rpc__noteStore.NoteStore.getFilteredSyncChunk(function (_rpc_result, _rpc_exception)
                                    {
                                        var _getResult = _rpc_result, _getError = _rpc_exception;
                                        $R.log('_do_home_shard / chunkLoop', _getResult, _getError);
                            
                                        //  error
                                        //  =====
                                            if (_getError)
                                            {
                                                //  unknown error
                                                //  =============
                                                    switch (true)
                                                    {
                                                        case (!_getError.trace):
                                                        case (!_getError.trace.indexOf):
                                                        case (!(_getError.trace.indexOf(')') > -1)):
                                                            _onFailureSub('renew_filing / _do_home_shard / exception / no trace');
                                                            return;
                                                    }
                                    
                                                //  figure out error
                                                //  ================
                                                    var _trace = _getError.trace.substr(0, _getError.trace.indexOf(')')+1);
                                                    switch (_trace)
                                                    {
                                                        case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                                        case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                                        case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                                            _onFailureSub('login');
                                                            return;
                                                    }
                        
                                                //  could not figure out error
                                                //  ==========================
                                                    _onFailureSub('renew_filing / _do_home_shard / exception / unknown');
                                                    return;
                                            }
                                   
                                        //  loops
                                        //  =====
                                        
                                            var _loop__notebooks = function (_list, _category)
                                            {
                                                if (_list && _list.list && _list.list.length) {}else { return; }
                                            
                                                for (var _n=false, _nn=false, _i=0, _ii=_list.list.length; _i<_ii; _i++)
                                                {
                                                    //  set
                                                    _n = _list.list[_i];
                                
                                                    //  item
                                                    _nn = {
                                                        'id':           ('p--'+_n.guid).replace(/-/g, '_'),
                                                        
                                                        'pre':          false,
                                                        'category':     _category,
                        
                                                        'guid':         _n.guid,
                        
                                                        'name':         _n.name,
                                                        'owner':        '',
                                                        'stack':        (_n.stack > '' ? _n.stack : ''),
                                                        
                                                        'personalInfo': { 
                                                            'isDefault': _n.defaultNotebook 
                                                        }
                                                    };
                                
                                                    //  check restrictions
                                                    if (_n.restrictions && _n.restrictions.noCreateNotes)
                                                    {
                                                        //  if restricted, add to "del"
                                                        _return.notebooks__del.push(_nn);
                                                    }
                                                    else
                                                    {
                                                        //  add item to list
                                                        switch (_category)
                                                        {
                                                            case ('new'): _return.notebooks__new.push(_nn); break;
                                                            case ('del'): _return.notebooks__del.push(_nn); break;
                                                        }
                                                    }
                                                }
                                            };
                                            
                                            var _loop__linked_notebooks = function (_list, _category)
                                            {
                                                if (_list && _list.list && _list.list.length) {}else { return; }
                        
                                                for (var _n=false, _nn=false, _i=0, _ii=_list.list.length; _i<_ii; _i++)
                                                {
                                                    //  set
                                                    _n = _list.list[_i];
                                
                                                    //  add to list
                                                    //  ===========
                                                        if ($R.$remote.is__business && _n.businessId && (_n.businessId == $R.$remote.business__id))
                                                        {
                                                            //  item
                                                            _nn = {
                                                                'pre':          true,
                                                                'category':     _category,
                                                                
                                                                'guid':         false,
                        
                                                                'name':         _n.shareName,
                                                                'owner':        (_n.username ? _n.username : ''),
                                                                'stack':        (_n.stack > '' ? _n.stack : ''),
                        
                                                                'businessInfo': { 
                                                                    'linkedGuid': _n.guid,
                                                                    'globalId':   _n.sharedNotebookGlobalId 
                                                                }
                                                            };
                                                            
                                                            //  add item to list
                                                            switch (_category)
                                                            {
                                                                case ('new'): _return.pre_business_notebooks__new.push(_nn); break;
                                                                case ('del'): _return.pre_business_notebooks__del.push(_nn); break;
                                                            }
                                                        }
                                                        else
                                                        {
                                                            //  item
                                                            _nn = {
                                                                'pre':          true,
                                                                'category':     _category,
                                                                
                                                                'guid':         false,
                        
                                                                'name':         _n.shareName,
                                                                'owner':        (_n.username ? _n.username : ''),
                                                                'stack':        (_n.stack > '' ? _n.stack : ''),
                        
                                                                'sharedInfo': { 
                                                                    'linkedGuid': _n.guid,
                                                                    'globalId':   _n.sharedNotebookGlobalId,
                                                                    'shardId':    _n.shardId
                                                                }
                                                            };
                                                            
                                                            //  add item to list
                                                            switch (_category)
                                                            {
                                                                case ('new'): _return.pre_shared_notebooks__new.push(_nn); break;
                                                                case ('del'): _return.pre_shared_notebooks__del.push(_nn); break;
                                                            }
                                                        }
                                                }
                                            };
                                            
                                            var _loop__tags = function (_list, _category)
                                            {
                                                if (_list && _list.list && _list.list.length) {}else { return; }
                                            
                                                for (var _t=false, _tt=false, _i=0, _ii=_list.list.length; _i<_ii; _i++)
                                                {
                                                    //  set
                                                    _t = _list.list[_i];
                                    
                                                    //  item
                                                    _tt = {
                                                        'id':        ('p--'+_t.guid).replace(/-/g, '_'),
                        
                                                        'category':  _category,
                                                    
                                                        'guid':     _t.guid,
                                                        'name':     _t.name
                                                    };
                                    
                                                    //  add item to list
                                                    switch (_category)
                                                    {
                                                        case ('new'): _return.tags__new.push(_tt); break;
                                                        case ('del'): _return.tags__del.push(_tt); break;
                                                    }
                                                }
                                            };
                                            
                                        //  execute loops
                                        //  =============
                                            
                                            _loop__notebooks(_getResult.notebooks, 'new');
                                            _loop__notebooks(_getResult.expungedNotebooks, 'del');
                        
                                            _loop__linked_notebooks(_getResult.linkedNotebooks, 'new');
                                            _loop__linked_notebooks(_getResult.expungedLinkedNotebooks, 'del');
                                            
                                            _loop__tags(_getResult.tags, 'new');
                                            _loop__tags(_getResult.expungedTags, 'del');
                            
                                        //  set usn
                                        //  =======
                                            _return.new_usn = _getResult.chunkHighUSN;
                            
                                        //  return or next chunk
                                        //  ====================
                                        
                                            //  total chunk size
                                            var _totalSize = 0;
                                                _totalSize += (_getResult.notebooksSize + _getResult.expungedNotebooksSize);
                                                _totalSize += (_getResult.linkedNotebooksSize + _getResult.expungedLinkedNotebooksSize);
                                                _totalSize += (_getResult.tagsSize + _getResult.expungedTagsSize);
                                                
                                            //  loop
                                            if (_totalSize >= $R.$remote.api__chunkSize) { _getChunkLoop(_return.new_usn); return; }
                                        
                                            //  success
                                            _onSuccessSub(_return);
                                    }, 
                                    $R.$remote.user__authToken, _previous_usn, $R.$remote.api__chunkSize, { 'includeNotebooks': true, 'includeLinkedNotebooks': true, 'includeTags': true });
                                };
                                
                                _getChunkLoop(_last_usn);
                            };
                        
                        
                        
                            //  old version:
                            //  _getChunkLoop is called
                            //      it calls itself as many times as needed
                            //      then it calls _getTags
                            //          which calls _onSuccessSub
                        
                            /* var _getTags = function ()
                            {
                                $R.$remote.rpc__noteStore.NoteStore.listTags(function (_rpc_result, _rpc_exception)
                                {
                                    var _getResult = _rpc_result, _getError = _rpc_exception;
                                    $R.log('_do_home_shard / tags', _getResult, _getError);
                            
                                    //  error
                                    //  =====
                                        if (_getError)
                                        {
                                            //  unknown error
                                            //  =============
                                                switch (true)
                                                {
                                                    case (!_getError.trace):
                                                    case (!_getError.trace.indexOf):
                                                    case (!(_getError.trace.indexOf(')') > -1)):
                                                        _onFailureSub('renew_filing / _do_home_shard / exception / no trace');
                                                        return;
                                                }
                                    
                                            //  figure out error
                                            //  ================
                                                var _trace = _getError.trace.substr(0, _getError.trace.indexOf(')')+1);
                                                switch (_trace)
                                                {
                                                    case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                                    case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                                    case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                                        _onFailureSub('login');
                                                        return;
                                                }
                        
                                            //  could not figure out error
                                            //  ==========================
                                                _onFailureSub('renew_filing / _do_home_shard / exception / unknown');
                                                return;
                                        }
                                        
                                        
                                    //  success
                                    //  =======
                                        _onSuccessSub(_return__notebooks, _return__pre_business_notebooks, _return__pre_shared_notebooks, _return__tags);
                                },
                                $R.$remote.user__authToken); 
                            }; */
                        
                        //  business shard -- on success: _onSuccessSub(_business_result)
                        //  ==============
                            var _do_business_shard = function (_last_usn, _pre_business_notebooks__new, _pre_business_notebooks__del, _onSuccessSub, _onFailureSub)
                            {
                                //  not a business
                                if ($R.$remote.is__business) {}else { _onSuccessSub(false); return; }
                        
                                //  _getChunkLoop is called
                                //      it calls itself as many times as needed
                                //      then it calls _onSuccessSub
                        
                                //  return
                                var _return = {
                                    'notebooks__new': [],
                                    'notebooks__del': [],
                        
                                    'tags__new': [],
                                    'tags__del': [],
                                    
                                    'new_usn': false
                                };
                                
                                //  pre_notebooks
                                var _preBusinessNotebooksByGlobalId = {};
                                for (var _n=false, _i=0, _ii=_pre_business_notebooks__new.length; _i<_ii; _i++) { _preBusinessNotebooksByGlobalId[_pre_business_notebooks__new[_i].businessInfo.globalId] = _pre_business_notebooks__new[_i]; }
                                for (var _n=false, _i=0, _ii=_pre_business_notebooks__del.length; _i<_ii; _i++) { _preBusinessNotebooksByGlobalId[_pre_business_notebooks__del[_i].businessInfo.globalId] = _pre_business_notebooks__del[_i]; }
                        
                                //  deleted notebooks
                                for (var _n=false, _i=0, _ii=_pre_business_notebooks__del.length; _i<_ii; _i++) { _return.notebooks__del.push(_pre_business_notebooks__del[_i]); }
                        
                                //  chunk loop        
                                var _getChunkLoop = function (_previous_usn)
                                {
                                    $R.$remote.rpc__noteStoreForBusiness.NoteStore.getFilteredSyncChunk(function (_rpc_result, _rpc_exception)
                                    {
                                        var _getResult = _rpc_result, _getError = _rpc_exception;
                                        $R.log('_do_business_shard / chunkLoop', _getResult, _getError);
                                
                                        //  error
                                        //  =====
                                            if (_getError)
                                            {
                                                //  unknown error
                                                //  =============
                                                    switch (true)
                                                    {
                                                        case (!_getError.trace):
                                                        case (!_getError.trace.indexOf):
                                                        case (!(_getError.trace.indexOf(')') > -1)):
                                                            _onFailureSub('renew_filing / _do_business_shard / exception / no trace');
                                                            return;
                                                    }
                                        
                                                //  figure out error
                                                //  ================
                                                    var _trace = _getError.trace.substr(0, _getError.trace.indexOf(')')+1);
                                                    switch (_trace)
                                                    {
                                                        case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                                        case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                                        case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                                            _onFailureSub('login');
                                                            return;
                                                    }
                        
                                                //  could not figure out error
                                                //  ==========================
                                                    _onFailureSub('renew_filing / _do_business_shard / exception / unknown');
                                                    return;
                                            }
                            
                                        //  loops
                                        //  =====
                                        
                                            var _loop__notebooks = function (_list, _category)
                                            {
                                                if (_list && _list.list && _list.list.length) {}else { return; }
                                            
                                                for (var _n=false, _nn=false, _i=0, _ii=_list.list.length; _i<_ii; _i++)
                                                {
                                                    //  set
                                                    _n = _list.list[_i];
                                    
                                                    //  check shared/rights
                                                    if (_n.sharedNotebooks && _n.sharedNotebooks.list && _n.sharedNotebooks.list.length) {}else { _return.notebooks__del.push(_n); continue; }
                                                    if (_n.restrictions && _n.restrictions.noCreateNotes) { _return.notebooks__del.push(_n); continue; }
                                    
                                                    //  find
                                                    (function () { for (var _s=false, _p=false, _u=false, _o=false, _nt=false, _j=0, _jj=_n.sharedNotebooks.list.length; _j<_jj; _j++)
                                                    {
                                                        //  set
                                                        _s = _n.sharedNotebooks.list[_j];
                                                        _p = _preBusinessNotebooksByGlobalId[_s.globalId]; 
                        
                                                        //  does pre notebook exist?
                                                        if (_p) {}else { continue; }
                        
                                                        //  user id
                                                        _u = false;
                                                        switch (true)
                                                        {
                                                            case (!!_n.contact && !!_n.contact.id): _u = _n.contact.id;  break;
                                                            case (!!_s.sharerUserId):               _u = _s.sharerUserId; break;
                                                        }
                        
                                                        //  owner
                                                        _o = '';
                                                        switch (true)
                                                        {
                                                            case (!!_n.contact && !!_n.contact.name):     _o = _n.contact.name;     break;
                                                            case (!!_n.contact && !!_n.contact.username): _o = _n.contact.username; break;
                                                        }
                        
                                                        //  owned by self -- remove
                                                        switch (true)
                                                        {
                                                            case (_o == $R.$remote.user__name):     _o = ''; break;
                                                            case (_o == $R.$remote.user__username): _o = ''; break;
                                                        }
                        
                                                        //  no tags
                                                        _nt = ((_n.restrictions && _n.restrictions.noCreateTags) ? true : false);
                        
                                                        //  item
                                                        _nn = {
                                                            'id':           ('b--'+_n.guid).replace(/-/g, '_'),
                                                        
                                                            'pre':          false,
                                                            'category':     _category,
                                                        
                                                            'guid':         _n.guid,
                                                    
                                                            'owner':        _o,
                                                            'name':         _p.name,
                                                            'stack':        _p.stack,
                                                    
                                                            'businessInfo': {
                                                                'linkedGuid': _p.businessInfo.linkedGuid,
                                                                'globalId':   _p.businessInfo.globalId,
                                                                'userId':     _u,
                                                                'noTags':     _nt
                                                            }
                                                        };
                                                        
                                                        //  add item to list
                                                        switch (_category)
                                                        {
                                                            case ('new'): _return.notebooks__new.push(_nn); return; break;
                                                            case ('del'): _return.notebooks__del.push(_nn); return; break;
                                                        }
                                                    }})();
                                                }
                                            };
                                            
                                            var _loop__tags = function (_list, _category)
                                            {
                                                if (_list && _list.list && _list.list.length) {}else { return; }
                                            
                                                for (var _t=false, _tt=false, _i=0, _ii=_list.list.length; _i<_ii; _i++)
                                                {
                                                    //  set
                                                    _t = _list.list[_i];
                                    
                                                    //  item
                                                    _tt = {
                                                        'id':        ('b--'+_t.guid).replace(/-/g, '_'),
                        
                                                        'category':  _category,
                                                    
                                                        'guid':     _t.guid,
                                                        'name':     _t.name
                                                    };
                                    
                                                    //  add item to list
                                                    switch (_category)
                                                    {
                                                        case ('new'): _return.tags__new.push(_tt); break;
                                                        case ('del'): _return.tags__del.push(_tt); break;
                                                    }
                                                }
                                            };
                                            
                                        //  execute loops
                                        //  =============
                                            
                                            _loop__notebooks(_getResult.notebooks, 'new');
                                            _loop__notebooks(_getResult.expungedNotebooks, 'del');
                                            
                                            _loop__tags(_getResult.tags, 'new');
                                            _loop__tags(_getResult.expungedTags, 'del');
                                            
                                        //  set usn
                                        //  =======
                                            _return.new_usn = _getResult.chunkHighUSN;
                                            
                                        //  return or next chunk
                                        //  ====================
                                        
                                            //  total chunk size
                                            var _totalSize = 0;
                                                _totalSize += (_getResult.notebooksSize + _getResult.expungedNotebooksSize);
                                                _totalSize += (_getResult.tagsSize + _getResult.expungedTagsSize);
                                                
                                            //  loop
                                            if (_totalSize >= $R.$remote.api__chunkSize) { _getChunkLoop(_return.new_usn); return; }
                                        
                                            //  success
                                            _onSuccessSub(_return);
                                    },
                                    $R.$remote.business__authToken, _previous_usn, $R.$remote.api__chunkSize, { 'includeNotebooks': true /* , 'includeTags': true */ }); 
                                };        
                                
                                //  return
                                if (_pre_business_notebooks__new.length) {}else { _onSuccessSub(_return); return; }
                                
                                //  start
                                _getChunkLoop(_last_usn);
                            };
                        
                        
                        
                            //  old version:
                            //  _getChunkLoop is called
                            //      it calls itself as many times as needed
                            //      then it calls _getTags
                            //          which calls _onSuccessSub
                        
                            /* var _getTags = function ()
                            {
                                $R.$remote.rpc__noteStoreForBusiness.NoteStore.listTags(function (_rpc_result, _rpc_exception)
                                {
                                    var _getResult = _rpc_result, _getError = _rpc_exception;
                                    $R.log('_do_business_shard / tags', _getResult, _getError);
                            
                                    //  error
                                    //  =====
                                        if (_getError)
                                        {
                                            //  unknown error
                                            //  =============
                                                switch (true)
                                                {
                                                    case (!_getError.trace):
                                                    case (!_getError.trace.indexOf):
                                                    case (!(_getError.trace.indexOf(')') > -1)):
                                                        _onFailureSub('renew_filing / _do_business_shard / exception / no trace');
                                                        return;
                                                }
                                    
                                            //  figure out error
                                            //  ================
                                                var _trace = _getError.trace.substr(0, _getError.trace.indexOf(')')+1);
                                                switch (_trace)
                                                {
                                                    case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                                    case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                                    case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                                        _onFailureSub('login');
                                                        return;
                                                }
                        
                                            //  could not figure out error
                                            //  ==========================
                                                _onFailureSub('renew_filing / _do_business_shard / exception / unknown');
                                                return;
                                        }
                                        
                                    //  business tags
                                    //  =============
                                        if (_getResult.list && _getResult.list.length)
                                        {
                                            for (var _t=false, _i=0, _ii=_getResult.list.length; _i<_ii; _i++)
                                            {
                                                //  set
                                                _t = _getResult.list[_i];
                                
                                                //  add to list
                                                _return__business_tags.push({
                                                    'guid': _t.guid,
                                                    'name': _t.name
                                                });
                                            }
                                        }
                                        
                                    //  success
                                    //  =======
                                        _onSuccessSub(_return__business_notebooks, _return__business_tags);
                                },
                                $R.$remote.business__authToken);
                            }; */
                        
                        //  do shared -- on success: _onSuccessSub(_shared_result)
                        //  =========
                            var _do_shared_shards = function (_pre_shared_notebooks__new, _pre_shared_notebooks__del, _onSuccessSub, _onFailureSub)
                            {
                                //  notebooks are grouped by shard id
                                //  _next/_current_shard is called
                                //      it calls itself as many times as needed
                                //      then it calls _done
                                //          which calls _onSuccessSub
                            
                                //  return
                                //  ======
                                    var _return = {
                                        'notebooks__new': [],
                                        'notebooks__del': []
                                    };    
                            
                                //  define
                                //  ======
                        
                                    var _shards = [];
                                    var _currentShardIndex = -1;
                        
                                    var _notebookGlobalIdsByShardId = {};
                                    var _notebookGuidByGlobalId = {};
                                    var _notebookNoRightsByGlobalId = {};
                                    var _notebookNoTagsByGlobalId = {};
                        
                                    var _userIdsByShardId = {};
                                    var _userIdByNotebookId = {};
                                    var _userNameByUserId = {};
                                
                                //  deleted notebooks
                                //  =================
                                    for (var _n=false, _i=0, _ii=_pre_shared_notebooks__del.length; _i<_ii; _i++) { _return.notebooks__del.push(_pre_business_notebooks__del[_i]); }
                                
                                //  get notebooks by shard id
                                //  =========================
                                    for (var _i=0, _ii=_pre_shared_notebooks__new.length; _i<_ii; _i++)
                                    {
                                        //  create shard
                                        if (_notebookGlobalIdsByShardId[_pre_shared_notebooks__new[_i].sharedInfo.shardId]) {}else { _notebookGlobalIdsByShardId[_pre_shared_notebooks__new[_i].sharedInfo.shardId] = []; }
                        
                                        //  add to list
                                        _notebookGlobalIdsByShardId[_pre_shared_notebooks__new[_i].sharedInfo.shardId].push(_pre_shared_notebooks__new[_i].sharedInfo.globalId);
                                    }
                                
                                //  make list of shards
                                //  ===================
                                    for (var _shard_id in _notebookGlobalIdsByShardId)
                                    {
                                        _shards.push({
                                            'id': _shard_id,
                                            'notebookGlobalIds': _notebookGlobalIdsByShardId[_shard_id]
                                        });
                                    }
                                
                                //  mark all notebooks on shard as invalid
                                //  ======================================
                                    var _mark_all_notebooks_on_shard_as_invalid = function (_shard_id)
                                    {
                                        //  shard
                                        var _shard = _notebookGlobalIdsByShardId[_shard_id];
                                        
                                        //  exists?
                                        if (_shard) {}else { return; }
                                        
                                        //  loop; mark
                                        for (var _i=0, _ii=_shard; _i<_ii; _i++) { _notebookNoRightsByGlobalId[_shard[_i]] = true; }
                                    };
                                
                                //  check next shard
                                //  ================
                                    var _next = function ()
                                    {
                                        //  done
                                        if (_currentShardIndex == (_shards.length - 1)) { _done(); return; }
                        
                                        //  increment
                                        _currentShardIndex++;
                        
                                        //  next
                                        _current_shard();
                                    };
                                
                                //  done
                                //  ====
                                    var _done = function ()
                                    {
                                        //  loop; check
                                        for (var _o=false, _p=false, _nn=false, _i=0, _ii=_pre_shared_notebooks__new.length; _i<_ii; _i++)
                                        {
                                            //  set
                                            _p = _pre_shared_notebooks__new[_i];
                                            
                                            //  to add
                                            _nn = {
                                                'pre':          false,
                                                'category':     false,
                                            
                                                'guid':         false,
                                                
                                                'owner':        _p.owner,
                                                'name':         _p.name,
                                                'stack':        _p.stack,
                                                
                                                'sharedInfo': {
                                                    'linkedGuid': _p.sharedInfo.linkedGuid,
                                                    'globalId':   _p.sharedInfo.globalId,
                                                    'shardId':    _p.sharedInfo.shardId,
                                                    'userId':     false,
                                                    'noTags':     false
                                                }
                                            };
                        
                                            //  more info
                                            //  =========
                        
                                                //  set user id
                                                if (_userIdByNotebookId[_nn.sharedInfo.globalId]) { _nn.sharedInfo['userId'] = _userIdByNotebookId[_nn.sharedInfo.globalId]; }
                        
                                                //  rights: no tags
                                                if (_notebookNoTagsByGlobalId[_nn.sharedInfo.globalId]) { _nn.sharedInfo['noTags'] = true; }
                                    
                                                //  (re)set owner name
                                                if (_userIdByNotebookId[_nn.sharedInfo.globalId] && _userNameByUserId[_userIdByNotebookId[_nn.sharedInfo.globalId]])
                                                {
                                                    //  owner
                                                    _o = _userNameByUserId[_userIdByNotebookId[_nn.sharedInfo.globalId]];
                                                    
                                                    //  owned by self -- remove
                                                    switch (true)
                                                    {
                                                        case (_o == $R.$remote.user__name):     _o = ''; break;
                                                        case (_o == $R.$remote.user__username): _o = ''; break;
                                                    }
                                                    
                                                    //  set owner
                                                    _nn['owner'] = _o;
                                                }
                        
                                            //  add or delete
                                            //  =============
                        
                                                //  set guid; or skip
                                                if (_notebookGuidByGlobalId[_nn.sharedInfo.globalId])
                                                {
                                                    _nn['guid'] = _notebookGuidByGlobalId[_nn.sharedInfo.globalId]; 
                                                    _nn['id'] = ('s--'+_nn.guid).replace(/-/g, '_');
                        
                                                    //  has rights or skip
                                                    if (_notebookNoRightsByGlobalId[_nn.sharedInfo.globalId]) {}else
                                                    {
                                                        //  add to list
                                                        _nn['category'] = 'new';
                                                        _return.notebooks__new.push(_nn);
                                                        
                                                        //  next!
                                                        continue;
                                                    }
                                                }
                        
                                                //  delete -- if we got here, that's the only thing left to do
                                                _nn['category'] = 'del';
                                                _return.notebooks__del.push(_nn);
                                        }
                                
                                        //  callback
                                        _onSuccessSub(_return);
                                    };
                                
                                //  shard
                                //  =====
                                    var _current_shard = function ()
                                    {
                                        //  shard
                                        var _shard = _shards[_currentShardIndex];
                                
                                        //  connect to shard
                                        $R.log('RPC/4', $R.$bootstrap.remote_domain + 'shard/' + _shard.id + '/json');
                                        var _shardRPCClient = new $R.JSONRpcClient(function ()
                                        {
                                            //  error / timeout
                                            //  ===============
                                                if (this.NoteStore && this.NoteStoreExtra) {}else
                                                {
                                                    _mark_all_notebooks_on_shard_as_invalid(_shard.id);
                                                    _next();
                                                    return;
                                                }
                        
                                            //  set rpc
                                            //  =======
                                                var _shard_rpc = this;
                        
                                            //  authenticate-to/get notebooks -- this is the equivalent of doing authenticateToSharedNotebook & getSharedNotebookByAuth
                                            //  =============================
                                                _shard_rpc.NoteStoreExtra.authenticateToNotebooks(function (_rpc_result__n, _rpc_exception__n)
                                                {
                                                    var _getResult = _rpc_result__n, _getError = _rpc_exception__n;
                                                    $R.log('_do_shared_shards / authenticateToNotebooks', _getResult, _getError);
                        
                                                    //  error; return
                                                    //  =============
                                                        switch (true)
                                                        {
                                                            case (!!_getError):
                                                            case (!_getResult):
                                                            case (!_getResult.map):
                                                                _mark_all_notebooks_on_shard_as_invalid(_shard.id);
                                                                _next();
                                                                return;
                                                                break;
                                                        }
                            
                                                    //  go through notebooks
                                                    //  ====================
                                                        var _notebook = false;
                                                        for (var _notebook_id in _getResult.map) { (function ()
                                                        {
                                                            //  notebook
                                                            _notebook = _getResult.map[_notebook_id];
                                                            
                                                            //  no rights
                                                            switch (true)
                                                            {
                                                                case (!_notebook):
                                                                case (!!_notebook && !!_notebook.restrictions && _notebook.restrictions.noCreateNotes):
                                                                    _notebookNoRightsByGlobalId[_notebook_id] = true;
                                                                    return; // invalid notebook
                                                                    break;
                                                            }
                                                            
                                                            //  set guid
                                                            _notebookGuidByGlobalId[_notebook_id] = _notebook.guid;
                                                            
                                                            //  find user id
                                                            //  ============
                                                                if (_notebook.sharedNotebooks && _notebook.sharedNotebooks.list && _notebook.sharedNotebooks.list.length)
                                                                {
                                                                    for (var _s=false, _i=0, _ii=_notebook.sharedNotebooks.list.length; _i<_ii; _i++)
                                                                    {
                                                                        //  set
                                                                        _s = _notebook.sharedNotebooks.list[_i];
                                                                    
                                                                        //  check
                                                                        if (_s.globalId == _notebook_id)
                                                                        {
                                                                            //  user by shard
                                                                            if (_userIdsByShardId[_shard.id]) {}else { _userIdsByShardId[_shard.id] = []; }
                                                                            _userIdsByShardId[_shard.id].push(_s.sharerUserId);
                                                                
                                                                            //  user and notebook
                                                                            _userIdByNotebookId[_notebook_id] = _s.sharerUserId;
                                                                        
                                                                            //  break
                                                                            break;
                                                                        }
                                                                    }
                                                                }
                                                        })(); }
                                                
                                                    //  get user names, for this shard
                                                    //  ==============================
                                                        if (_userIdsByShardId[_shard.id] && _userIdsByShardId[_shard.id].length)
                                                        {
                                                            _shard_rpc.NoteStoreExtra.getUserDisplayNames(function (_rpc_result__u, _rpc_exception__u)
                                                            {
                                                                var _getResult = _rpc_result__u, _getError = _rpc_exception__u;
                                                                $R.log('_do_shared_shards / getUserDisplayNames', _getResult, _getError);
                                
                                                                //  error; return
                                                                //  =============
                                                                    switch (true)
                                                                    {
                                                                        case (!!_getError):
                                                                        case (!_getResult):
                                                                        case (!_getResult.map):
                                                                            _next();
                                                                            return;
                                                                            break;
                                                                    }
                                
                                                                //  store user names
                                                                //  ================
                                                                    for (var _user_id in _getResult.map) { _userNameByUserId[_user_id] = _getResult.map[_user_id]; }
                                
                                                                //  next
                                                                //  ====
                                                                    _next();
                                
                                                            },
                                                            $R.$remote.user__authToken, { 'javaClass': 'java.util.ArrayList', 'list': _userIdsByShardId[_shard.id] }, true);
                                                        }
                                                        else { _next(); }
                                                },
                                                $R.$remote.user__authToken, { 'javaClass': 'java.util.ArrayList', 'list': _shard.notebookGlobalIds });
                                        },
                                        $R.$bootstrap.remote_domain + 'shard/' + _shard.id + '/json');
                                    };
                                
                                //  start
                                //  =====
                                    _next();
                            };
                        
                        //  set and return / fail
                        //  =====================
                            var _set_and_return__fail = function (_onFailureSub)
                            {
                                //  set
                                $R.$remote.filing__when = false; // now
                                $R.$remote.filing__expires = (new Date()).getTime() + (10 * 60 * 60 * 1000); // 10 minute expiry
                                
                                //  done working
                                $R.$remote.filing__working = false;
                                
                                //  return
                                _onFailureSub();    
                            };
                        
                        //  set and return
                        //  ==============
                            var _set_and_return = function (_home_result, _business_result, _shared_result, _onSuccessSub)
                            {
                                //  log
                                //  ===
                                    $R.log('_set_and_return results', _home_result, _business_result, _shared_result);
                            
                                //  return -- this, at first, is equal to the current object
                                //  ======
                                
                                    //  define
                                    var _return = {
                                        'when':                  $R.$remote.filing__when,
                                        'expires':               $R.$remote.filing__expires,
                        
                                        'last_usn__home':        $R.$remote.filing__last_usn__home,
                                        'last_usn__business':    $R.$remote.filing__last_usn__business,
                        
                                        'notebooks':             {},
                                        'tags__personal':        {},
                                        'tags__business':        {}
                                    };
                                
                                    //  copy
                                    for (var _id in $R.$remote.filing__notebooks)      { _return.notebooks[_id] =      $R.$remote.filing__notebooks[_id]; }
                                    for (var _id in $R.$remote.filing__tags__personal) { _return.tags__personal[_id] = $R.$remote.filing__tags__personal[_id]; }
                                    for (var _id in $R.$remote.filing__tags__business) { _return.tags__business[_id] = $R.$remote.filing__tags__business[_id]; }
                            
                                //  remove all of specific type -- for "false" results
                                //  ===========================
                            
                                    //  _business_result === false
                                    if (_business_result === false)
                                    {
                                        //  remove all notebooks
                                        for (var _id in _return.notebooks) { if (_return.notebooks[_id].type == 'business') { _return.notebooks[_id] = false; } } 
                                        
                                        //  remove all tags
                                        _return.tags__business = {};
                                    }
                        
                                    //  _shared_result === false
                                    if (_shared_result === false)
                                    {
                                        //  remove all notebooks
                                        for (var _id in _return.notebooks) { if (_return.notebooks[_id].type == 'shared') { _return.notebooks[_id] = false; } }
                                    }
                            
                                //  remove some
                                //  ===========
                        
                                    //  idByGlobalId
                                    //  ============
                                        var _notebooks__idByGlobalId = {};
                                        for (var _id in _return.notebooks) { if (_return.notebooks[_id].sharedInfo)   { _notebooks__idByGlobalId[_return.notebooks[_id].sharedInfo.globalId] =   _id; } }
                                        for (var _id in _return.notebooks) { if (_return.notebooks[_id].businessInfo) { _notebooks__idByGlobalId[_return.notebooks[_id].businessInfo.globalId] = _id; } }
                                    
                                    //  personal
                                    //  ========
                                    
                                        //  remove some notebooks
                                        for (var _n=false, _i=0, _ii=_home_result.notebooks__del.length; _i<_ii; _i++) { _n = _home_result.notebooks__del[_i]; if (_return.notebooks[_n.id]) { _return.notebooks[_n.id] = false; } }
                                        
                                        //  remove some tags
                                        for (var _t=false, _i=0, _ii=_home_result.tags__del.length; _i<_ii; _i++) { _t = _home_result.tags__del[_i]; if (_return.tags__personal[_t.id]) { _return.tags__personal[_t.id] = false; } }
                            
                                    //  business
                                    //  ========
                                        if (_business_result)
                                        {
                                            //  remove some notebooks -- handles "guid" and "globalId"
                                            for (var _n=false, _i=0, _ii=_business_result.notebooks__del.length; _i<_ii; _i++)
                                            {
                                                _n = _business_result.notebooks__del[_i];
                                                
                                                switch (true)
                                                {
                                                    case (!!_return.notebooks[_n.id]):
                                                        _return.notebooks[_n.id] = false; 
                                                        break;
                                                        
                                                    case (!!_n.businessInfo && !!_notebooks__idByGlobalId[_n.businessInfo.globalId] && !!_return.notebooks[_notebooks__idByGlobalId[_n.businessInfo.globalId]]):
                                                        _return.notebooks[_notebooks__idByGlobalId[_n.businessInfo.globalId]] = false;
                                                        break;
                                                }
                                            }
                                        
                                            //  remove some tags
                                            for (var _t=false, _i=0, _ii=_business_result.tags__del.length; _i<_ii; _i++) { _t = _business_result.tags__del[_i]; if (_return.tags__business[_t.id]) { _return.tags__business[_t.id] = false; } }
                                        }
                        
                                    //  shared
                                    //  ======
                                        if (_shared_result)
                                        {
                                            //  remove some notebooks -- handles "guid" and "globalId"
                                            for (var _n=false, _i=0, _ii=_shared_result.notebooks__del.length; _i<_ii; _i++)
                                            {
                                                _n = _shared_result.notebooks__del[_i]; 
                                                
                                                switch (true)
                                                {
                                                    case (!!_return.notebooks[_n.id]):
                                                        _return.notebooks[_n.id] = false;
                                                        break;
                                                        
                                                    case (!!_n.sharedInfo && !!_notebooks__idByGlobalId[_n.sharedInfo.globalId] && !!_return.notebooks[_notebooks__idByGlobalId[_n.sharedInfo.globalId]]):
                                                        _return.notebooks[_notebooks__idByGlobalId[_n.sharedInfo.globalId]] = false;
                                                        break;
                                                }
                                            }
                                        }
                                    
                                //  remove everything marked as false
                                //  =================================
                                    _return.notebooks =      (function () { var _r={}; for (var _id in _return.notebooks)      { if (_return.notebooks[_id])      { _r[_id] = _return.notebooks[_id]; } }      return _r; })();
                                    _return.tags__personal = (function () { var _r={}; for (var _id in _return.tags__personal) { if (_return.tags__personal[_id]) { _r[_id] = _return.tags__personal[_id]; } } return _r; })();
                                    _return.tags__business = (function () { var _r={}; for (var _id in _return.tags__business) { if (_return.tags__business[_id]) { _r[_id] = _return.tags__business[_id]; } } return _r; })();
                                    
                                //  add
                                //  ===
                            
                                    //  define add
                                    //  ==========
                                
                                        var _add__notebooks = function (_list, _type)
                                        {
                                            if (_list && _list.length) {}else { return; }
                                
                                            for (var _nn=false, _n=false, _id=false, _i=0, _ii=_list.length; _i<_ii; _i++)
                                            {
                                                //  item
                                                _n = _list[_i];
                                            
                                                //  invalid
                                                if (_n.pre) { continue; }
                                                if (_n.category && _n.category == 'del') { continue; }
                                            
                                                //  new item
                                                _nn = {
                                                    'type':  _type,
                                                
                                                    'id':    _n.id,
                                                    'guid':  _n.guid,
                        
                                                    'name':  _n.name,
                                                    'stack': _n.stack,
                                                    'owner': _n.owner
                                                };
                        
                                                //  if personal, add additional info
                                                if (_type == 'personal' && _n.personalInfo)
                                                {
                                                    _nn['personalInfo'] = {
                                                        'isDefault': _n.personalInfo.isDefault
                                                    };
                                                }
                                            
                                                //  if shared, add additional info
                                                if (_type == 'shared' && _n.sharedInfo)
                                                {
                                                    _nn['sharedInfo'] = {
                                                        'linkedGuid': _n.sharedInfo.linkedGuid,
                                                        'globalId':   _n.sharedInfo.globalId,
                                                        'shardId':    _n.sharedInfo.shardId,
                                                        'userId':     _n.sharedInfo.userId,
                                                        'noTags':     _n.sharedInfo.noTags
                                                    };
                                                }
                        
                                                //  if business, add additional info
                                                if (_type == 'business' && _n.businessInfo)
                                                {
                                                    _nn['businessInfo'] = {
                                                        'linkedGuid': _n.businessInfo.linkedGuid,
                                                        'globalId':   _n.businessInfo.globalId,
                                                        'userId':     _n.businessInfo.userId,
                                                        'noTags':     _n.businessInfo.noTags
                                                    };
                                                }
                                            
                                                //  add
                                                _return.notebooks[_nn.id] = _nn;
                                            }
                                        };
                        
                                        var _add__tags = function (_list, _type)
                                        {
                                            if (_list && _list.length) {}else { return; }
                                
                                            for (var _tt=false, _t=false, _id=false, _i=0, _ii=_list.length; _i<_ii; _i++)
                                            {
                                                //  item
                                                _t = _list[_i];
                                                
                                                //  new item
                                                _tt = {
                                                    'type':  _type,
                                                
                                                    'id':    _t.id,
                                                    'guid':  _t.guid,
                        
                                                    'name':  _t.name
                                                };
                                            
                                                //  add
                                                switch (true)
                                                {
                                                    case (_type == 'personal'): _return.tags__personal[_tt.id] = _tt; break;
                                                    case (_type == 'business'): _return.tags__business[_tt.id] = _tt; break;
                                                }
                                            }   
                                        };
                            
                                    //  execute add
                                    //  ===========
                                    
                                        //  home
                                        //  ====
                                            _add__notebooks(_home_result.notebooks__new,         'personal');
                                            _add__tags(_home_result.tags__new,                   'personal');
                                        
                                        //  business
                                        //  ========
                                            if (_business_result)
                                            {
                                                _add__notebooks(_business_result.notebooks__new, 'business');
                                                _add__tags(_business_result.tags__new,           'business');
                                            }
                        
                                        //  shared
                                        //  ======
                                            if (_shared_result)
                                            {
                                                _add__notebooks(_shared_result.notebooks__new,   'shared');
                                            }
                                
                                //  meta
                                //  ====
                        
                                    //  time/expires
                                    _return.when = (new Date()).getTime(); // now
                                    _return.expires = _return.when + (12 * 60 * 60 * 1000); // 12-hour expiry
                        
                                    //  home new usn
                                    _return.last_usn__home = _home_result.new_usn;
                                    
                                    //  business new usn
                                    if (_business_result) { _return.last_usn__business = _business_result.new_usn; }
                        
                                //  set
                                //  ===
                                    
                                    $R.$remote.filing__when =               _return.when;
                                    $R.$remote.filing__expires =            _return.expires;
                        
                                    $R.$remote.filing__last_usn__home =     _return.last_usn__home;
                                    $R.$remote.filing__last_usn__business = _return.last_usn__business;
                        
                                    $R.$remote.filing__notebooks =          _return.notebooks;
                                    $R.$remote.filing__tags__personal =     _return.tags__personal;
                                    $R.$remote.filing__tags__business =     _return.tags__business;
                                
                                //  order
                                //  =====
                        
                                    $R.$remote.filing__notebooks__order =      false;
                                    $R.$remote.filing__tags__personal__order = false;
                                    $R.$remote.filing__tags__business__order = false;
                        
                                    $R.$remote.order_filing();
                                
                                //  save
                                //  ====
                                    $R.$remote.save_filing();
                                    
                                //  done working
                                //  ============
                                    $R.$remote.filing__working = false;
                                
                                //  return
                                //  ======
                                    _onSuccessSub();
                            };
                        
            
                    //  callback process -- finishes with _onSuccess or _onFailure
                    //  ================
                        _do_home_shard(
                            (_force_full_sync ? 0 : (0+$R.$remote.filing__last_usn__home)), 
                            
                            function (_home_result)
                            {
                                // _do_home_shard => success
                                
                                _do_business_shard(
                                    (_force_full_sync ? 0 : (0+$R.$remote.filing__last_usn__business)), 
                                    _home_result.pre_business_notebooks__new, 
                                    _home_result.pre_business_notebooks__del, 
                                    
                                    function (_business_result)
                                    {
                                        // _do_home_shard => success
                                        // _do_business_shard => success
                                        
                                        _do_shared_shards(
                                            _home_result.pre_shared_notebooks__new, 
                                            _home_result.pre_shared_notebooks__del, 
                                            
                                            function (_shared_result)
                                            {
                                                // _do_home_shard => success
                                                // _do_business_shard => success
                                                // _do_shared_shards => success
                                                
                                                _set_and_return(
                                                    _home_result, 
                                                    _business_result, 
                                                    _shared_result, 
                                                    _onSuccess);
                                            },
                                            function (_failReason)
                                            {
                                                // _do_home_shard => success
                                                // _do_business_shard => success
                                                // _do_shared_shards => fail
                                            
                                                _set_and_return(
                                                    _home_result, 
                                                    _business_result, 
                                                    false, 
                                                    _onSuccess);
                                            });
                                    },
                                    function (_failReason)
                                    {
                                        // _do_home_shard => success
                                        // _do_business_shard => fail
                                    
                                        _do_shared_shards(
                                            _home_result.pre_shared_notebooks__new, 
                                            _home_result.pre_shared_notebooks__del, 
                                            
                                            function (_shared_result)
                                            {
                                                // _do_home_shard => success
                                                // _do_business_shard => fail
                                                // _do_shared_shards => success
             
                                                _set_and_return(
                                                    _home_result, 
                                                    false, 
                                                    _shared_result, 
                                                    _onSuccess);
                                            },
                                            function (_failReason)
                                            {
                                                // _do_home_shard => success
                                                // _do_business_shard => fail
                                                // _do_shared_shards => fail
                                            
                                                _set_and_return(
                                                    _home_result, 
                                                    false, 
                                                    false, 
                                                    _onSuccess);
                                            });
                                    }); 
                            },
                            function (_failReason)
                            {
                                // _do_home_shard => fail
                            
                                //  fail
                                _set_and_return__fail(_onFailure);
                            });
                };
            
            
            //  save filing
            //  ===========
                $R.$remote.save_filing = function ()
                {
                    //  get
                    //  ===
                        var _fj = {
                                'when':               $R.$remote.filing__when,
                                'expires':            $R.$remote.filing__expires,
            
                                'last_usn__home':     $R.$remote.filing__last_usn__home,
                                'last_usn__business': $R.$remote.filing__last_usn__business,
            
                                'notebooks':          $R.$remote.filing__notebooks,
                                'tags__personal':     $R.$remote.filing__tags__personal,
                                'tags__business':     $R.$remote.filing__tags__business
                            },
                            _ft = JSON.stringify(_fj);
                    
                    //  save
                    //  ====
                        $R.storage__set('storedEvernoteFiling', _ft);
                };
                
            //  load filing
            //  ===========
                $R.$remote.load_filing = function ()
                {
                    //  load
                    //  ====
                        var _ft = $R.storage__get('storedEvernoteFiling'),
                            _fj = ((_ft > '') ? JSON.parse(_ft) : false);
                    
                    //  check
                    //  =====
                        switch (true)
                        {
                            case (!_fj):
                            case (!_fj.expires):
                            case (!_fj.last_usn__home):
                                return;
                                break;
                        }
                
                    //  set
                    //  ===
            
                        $R.$remote.filing__when =               _fj.when;
                        $R.$remote.filing__expires =            _fj.expires;
            
                        $R.$remote.filing__last_usn__home =     _fj.last_usn__home;
                        $R.$remote.filing__last_usn__business = _fj.last_usn__business;
                    
                        $R.$remote.filing__notebooks =          _fj.notebooks;
                        $R.$remote.filing__tags__personal =     _fj.tags__personal;
                        $R.$remote.filing__tags__business =     _fj.tags__business;
                        
                    //  no order
                    //  ========
                        $R.$remote.filing__notebooks__order =      false;
                        $R.$remote.filing__tags__personal__order = false;
                        $R.$remote.filing__tags__business__order = false;
                };
            
            
            //  order filing
            //  ============
                $R.$remote.order_filing = function (_skip_notebooks, _skip_tags)
                {
                    //  return
                    //  ======
                        var _return = {
                            'notebooks__order':         [],
            
                            'tags__personal__order':    [],
                            'tags__business__order':    [],
            
                            'notebooks__id_by_guid':    {},
                            'notebooks__id_of_default': false
                        };
                    
                    //  create order arrays -- plus notebooks / id of default; plus notebooks / id by guid
                    //  ===================
            
                        if (_skip_notebooks) {}else
                        {            
                            for (var _id in $R.$remote.filing__notebooks)
                            {
                                _return.notebooks__order.push(_id);
                                _return.notebooks__id_by_guid[$R.$remote.filing__notebooks[_id].guid] = _id;
                                if ($R.$remote.filing__notebooks[_id].personalInfo && $R.$remote.filing__notebooks[_id].personalInfo.isDefault) { _return.notebooks__id_of_default = _id; } 
                            }
                        }
                        
                        if (_skip_tags) {}else
                        {
                            for (var _id in $R.$remote.filing__tags__personal) { _return.tags__personal__order.push(_id); }
                            for (var _id in $R.$remote.filing__tags__business) { _return.tags__business__order.push(_id); }
                        }
                        
            
                    //  notebooks
                    //  =========
                        if (_skip_notebooks) {}else
                        {            
                            _return.notebooks__order.sort(function (a, b)
                            {
                                var _a = $R.$remote.filing__notebooks[a],
                                    _b = $R.$remote.filing__notebooks[b],
                                    _ac = ((_a.stack > '' ? (_a.stack + ' / ') : '') + _a.name).toLowerCase(),
                                    _bc = ((_b.stack > '' ? (_b.stack + ' / ') : '') + _b.name).toLowerCase();
                            
                                switch (true)
                                {
                                    case (_ac < _bc): return -1;
                                    case (_ac > _bc): return 1;
                                    default: return 0;
                                }
                            });
                        }
                        
                    //  tags / personal
                    //  ===============
                        if (_skip_tags) {}else
                        {
                            _return.tags__personal__order.sort(function (a, b)
                            {
                                var _a = $R.$remote.filing__tags__personal[a],
                                    _b = $R.$remote.filing__tags__personal[b],
                                    _ac = _a.name.toLowerCase(),
                                    _bc = _b.name.toLowerCase();
                            
                                switch (true)
                                {
                                    case (_ac < _bc): return -1;
                                    case (_ac > _bc): return 1;
                                    default: return 0;
                                }
                            });
                        }
                        
                    //  tags / business
                    //  ===============
                        if (_skip_tags) {}else
                        {
                            _return.tags__business__order.sort(function (a, b)
                            {
                                var _a = $R.$remote.filing__tags__business[a],
                                    _b = $R.$remote.filing__tags__business[b],
                                    _ac = _a.name.toLowerCase(),
                                    _bc = _b.name.toLowerCase();
                            
                                switch (true)
                                {
                                    case (_ac < _bc): return -1;
                                    case (_ac > _bc): return 1;
                                    default: return 0;
                                }
                            });
                        }
                    
                    //  set
                    //  ===
            
                        if (_skip_notebooks) {}else
                        {
                            $R.$remote.filing__notebooks__order = _return.notebooks__order;
                            $R.$remote.filing__notebooks__id_of_default = _return.notebooks__id_of_default;
                            $R.$remote.filing__notebooks__id_by_guid =    _return.notebooks__id_by_guid;
                        }
                        
                        if (_skip_tags) {}else
                        {
                            $R.$remote.filing__tags__personal__order =    _return.tags__personal__order;
                            $R.$remote.filing__tags__business__order =    _return.tags__business__order;
                        }
                        
                    //  setting__clip_notebook_guid/id
                    //  ==============================
                        if (_skip_notebooks) {}else
                        {
                            if (($R.$remote.setting__clip_notebook_guid > '') && !($R.$remote.setting__clip_notebook_id > '') && $R.$remote.filing__notebooks__id_by_guid[$R.$remote.setting__clip_notebook_guid])
                            {
                                $R.$remote.setting__clip_notebook_guid = false;
                                $R.$remote.setting__clip_notebook_id = $R.$remote.filing__notebooks__id_by_guid[$R.$remote.setting__clip_notebook_guid];
                            }
                        }
                };
                
            
            //  clear filing
            //  ============
                $R.$remote.clear_filing = function ()
                {
                    $R.$remote.filing__working =                false;
            
                    $R.$remote.filing__when =                   false;
                    $R.$remote.filing__expires =                false;
            
                    $R.$remote.filing__last_usn__home =         false;
                    $R.$remote.filing__last_usn__business =     false;
                
                    $R.$remote.filing__notebooks =              false;
                    $R.$remote.filing__tags__personal =         false;
                    $R.$remote.filing__tags__business =         false;
                    
                    $R.$remote.filing__notebooks__order =       false;
                    $R.$remote.filing__tags__personal__order =  false;
                    $R.$remote.filing__tags__business__order =  false;
                };
                
            
            //  get note url -- https://dev.evernote.com/doc/articles/note_links.php
            //  ============
                $R.$remote.get_note_url = function (_notebook, _guid)
                {
                    //  takes into account the "open_notes_in" setting
                    //      ads authToken automatically
                
                    //  get info
                    //  ========
                    
                        var _shardId = false, 
                            _userId = false;
                            
                        switch (true)
                        {
                            case (_notebook.type == 'personal'):
                                _shardId = $R.$remote.user__shardId;
                                _userId = $R.$remote.user__id;
                                break;
                            
                            case (_notebook.type == 'business'): 
                                _shardId = $R.$remote.business__shardId;
                                _userId = _notebook.businessInfo.userId;
                                break;
                                
                            case ((_notebook.type == 'shared') && !!_notebook.sharedInfo): 
                                _shardId = _notebook.sharedInfo.shardId;
                                _userId = _notebook.sharedInfo.userId;
                                break;
                        }
            
                    //  missing info
                    //  ============
                        if (_shardId) {}else { return ''; }
                        if (_userId) {}else { _userId = $R.$remote.user__id; }
            
                    //  mode; return
                    //  ============
                        switch (true)
                        {
                            case ($R.$remote.setting__open_notes_in == 'web'):
            
                                return $R.$remote.get_setAuthAndRedirect_url('' +
                                    $R.$bootstrap.remote_domain +
                                    'shard/' + _shardId + '/' +
                                    'nl/' + _userId + '/' +
                                    _guid +
                                '');
            
                                break;
                                
                            case ($R.$remote.setting__open_notes_in == 'desktop'):
            
                                return ('' +
                                    'evernote:///view/' +
                                    _userId + '/' +
                                    _shardId + '/' +
                                    _guid + '/' +
                                    _guid + '/' +
                                '');
                            
                                break;
                        }
                        
                    //  blank
                    //  =====        
                        return '';
                };
                
                
            //  get noteThumbnail url
            //  =====================
                $R.$remote.get_noteThumbnail_url = function (_notebook, _guid)
                {
                    //  will always get from the web
                    //  will use the business auth token to get a business thumnbail
            
                    //  mode; info
                    //  ==========
                        switch (true)
                        {
                            case (_notebook.type == 'personal'):
                                _authToken = $R.$remote.user__authTokenForSession;
                                _shardId = $R.$remote.user__shardId;
                                break;
                            
                            case (_notebook.type == 'business'):
                                _authToken = $R.$remote.business__authToken;
                                _shardId = $R.$remote.business__shardId;
                                break;
                            
                            case (_notebook.type == 'shared' && _notebook.sharedInfo && _notebook.sharedInfo.shardId): 
                                _authToken = $R.$remote.user__authTokenForSession;
                                _shardId = _notebook.sharedInfo.shardId;
                                break;
                        }
            
                    //  missing info
                    //  ============
                        if (_shardId) {}else { return ''; }
                        if (_authToken) {}else { return ''; }
            
                    //  return
                    //  ======
                        return ('' +
                            $R.$bootstrap.remote_domain +
                            'shard/' +  _shardId + '/' +
                            'thm/note/' +
                            _guid +
                            '?auth=' + encodeURIComponent(_authToken) +
                            '&size=75' +
                        '');
                };
                    
                
            //  get SetAuthAndRedirect url
            //  ==========================
                $R.$remote.get_setAuthAndRedirect_url = function (_link)
                {
                    //  will login on the web-client, before going to where we want to go
                    //      if desktop client selected, will return the URL it was given
            
                    //  info
                    //  ====
                        var _authToken = $R.$remote.user__authTokenForSession;
                    
                    //  missing info
                    //  ============
                        if (_authToken) {}else { return ''; }
                
                    //  mode; return
                    //  ============
                        switch (true)
                        {
                            case ($R.$remote.setting__open_notes_in == 'web'):
                            
                                return ('' +
                                    $R.$bootstrap.remote_domain +
                                    'SetAuthToken.action?auth=' + encodeURIComponent(_authToken) +
                                    '&targetUrl=' + encodeURIComponent(_link) +
                                '');
                                
                                break;
                            
                            case ($R.$remote.setting__open_notes_in == 'desktop'):
                                
                                return _link;
                                
                                break;
                        }
            
                    //  nothing
                    //  =======      
                        return _link;
                };
            
            //  recommendation
            //  ==============
                $R.$remote.get_recommendation = function (_pageId, _request, _onSuccess, _onFailure)
                {
                    //  _request = { url, title, body }
                
                    //  preliminary check
                    //  =================
                        switch (true)
                        {
                            case (!$R.$remote.rpc__noteStore):
                            case (!$R.$remote.rpc__noteStore.NoteStore):
                            case (!$R.$remote.is__connected):
                            case (!$R.$remote.is__loggedIn):
                            case (!$R.$remote.is__notExpired()):
                                _onFailure('login');
                                return;
                        }
                        
                    //  ensure authToken
                    //  ================
                        $R.$remote.ensure_authTokenForSession(
                            function () { $R.$remote.get_recommendation__sub(_pageId, _request, _onSuccess, _onFailure); }, 
                            function () { _onFailure('sessionAuthToken'); });
                };
            
            //  recommendation / sub
            //  ====================
                $R.$remote.get_recommendation__sub = function (_pageId, _request, _onSuccess, _onFailure)
                {
                    //  fix
                    _request = $R.$remote.get_recommendation__fixRequest(_request);
                    
                    //  server request
                    var _recommendationRequest = {
                        'url': _request.url,
                        'text': _request.title + ' ' + _request.body,
                        
                        'relatedNotesResultSpec': {
                            'includeTitle': true,
                            'includeSnippet': true,
                            'includeCreated': true,
                            'includeLargestResourceMime': true,
                            'includeLargestResourceSize': true,
                            'includeNotebookGuid': true,
                            
                            'includeAttributes': false,
                            'includeTagNames': false
                        }
                    };
                
                    $R.$remote.rpc__noteStore.NoteStoreExtra.getFilingRecommendations(function (_rpc_result, _rpc_exception)
                    {
                        var _getResult = _rpc_result, _getError = _rpc_exception;
                        $R.log('get_recommendation / personal', _getResult, _getError);
                
                        //  error
                        //  =====
                    
                            if (_getError)
                            {
                                //  unknown error
                                //  =============
                                    switch (true)
                                    {
                                        case (!_getError.trace):
                                        case (!_getError.trace.indexOf):
                                        case (!(_getError.trace.indexOf(')') > -1)):
                                            _onFailure('get_recommendation / exception / no trace');
                                            return;
                                    }
                            
                                //  figure out error
                                //  ================
                                    var _trace = _getError.trace.substr(0, _getError.trace.indexOf(')')+1);
                                    switch (_trace)
                                    {
                                        case 'EDAMUserException(errorCode:BAD_DATA_FORMAT, parameter:authenticationToken)':
                                        case 'EDAMSystemException(errorCode:INVALID_AUTH, message:authenticationToken)':
                                        case 'EDAMUserException(errorCode:AUTH_EXPIRED, parameter:authenticationToken)':
                                            _onFailure('login');
                                            return;
                                    }
            
                                //  could not figure out error
                                //  ==========================
                                    _onFailure('get_recommendation / exception / unknown');
                                    return;
                            }
                        
                        //  result
                        //  ======
                    
                            //  get; fix
                            var _result = _getResult;
                                _result = $R.$remote.get_recommendation__defaultResultToFalse(_result);
                                _result = $R.$remote.get_recommendation__addAbsoluteURLsToRelatedNotes(_result, false);
                    
                            //  store
                            $R.$remote.store__pageId_to_recommendation[_pageId] = {
                                'notebook':     _result.notebook,
                                'tags':         _result.tags,
                                'relatedNotes': _result.relatedNotes
                            };
                            
                            //  not business; end
                            if ($R.$remote.is__business && $R.$remote.rpc__noteStoreForBusiness && $R.$remote.rpc__noteStoreForBusiness.NoteStore) {}else { _onSuccess(); return; }
                            
                            //  is business -- get second reccomendation
                            //  ========================================
                            
                                $R.$remote.rpc__noteStoreForBusiness.NoteStoreExtra.getFilingRecommendations(function (_rpc_result, _rpc_exception)
                                {
                                    var _getResultBusiness = _rpc_result, _getErrorBusiness = _rpc_exception;
                                    $R.log('get_recommendation / business', _getResultBusiness, _getErrorBusiness);
                                
                                    //  error
                                    if (_getErrorBusiness) { _onSuccess(); return; }
                                    
                                    //  result
                                    //  ======
                                    
                                        //  get; fix
                                        var _result__business = _getResultBusiness;
                                            _result__business = $R.$remote.get_recommendation__defaultResultToFalse(_result__business);
                                            _result__business = $R.$remote.get_recommendation__addAbsoluteURLsToRelatedNotes(_result__business, true);
                                            
                                        //  store result
                                        $R.$remote.store__pageId_to_recommendation[_pageId].notebook__business =     _result__business.notebook;
                                        $R.$remote.store__pageId_to_recommendation[_pageId].tags__business =         _result__business.tags;
                                        $R.$remote.store__pageId_to_recommendation[_pageId].relatedNotes__business = _result__business.relatedNotes;
            
                                    //  success
                                    _onSuccess();
                                },
                                $R.$remote.business__authToken, _recommendationRequest);
                    },
                    $R.$remote.user__authToken, _recommendationRequest);
                };
            
            //  default to false
            //  ================
                $R.$remote.get_recommendation__defaultResultToFalse = function (_result)
                {
                    var _return = {
                        'notebook':     (_result.notebook ? _result.notebook : false),
                        'tags':         ((_result.tags && _result.tags.list) ? _result.tags.list : false),
                        'relatedNotes': ((_result.relatedNotes && _result.relatedNotes.list) ? _result.relatedNotes.list : false)
                    };
                    
                    return _return;
                };
            
            //  add absolute URLs
            //  =================
                $R.$remote.get_recommendation__addAbsoluteURLsToRelatedNotes = function (_result, _use_business)
                {
                    //  return
                    var _return = _result;
                    
                    //  check
                    if (_return && _return.relatedNotes.length) {}else { return _return; }
                    
                    //  loop related notes and add URLs
                    for (var _nd=false, _n=false, _i=0, _ii=_return.relatedNotes.length; _i<_ii; _i++)
                    {
                        //  note
                        _n = _return.relatedNotes[_i];
                        
                        //  dummy notebook
                        if (_use_business)
                        {
                            _nd = { 
                                'type': 'business', 
                                'guid': _n.notebookGuid,
                                'businessInfo': { 
                                    'userId': false 
                                }
                            };
                        }
                        else
                        {
                            _nd = { 
                                'type': 'personal', 
                                'guid': _n.notebookGuid
                            };
                        }
                        
                        //  URLs
                        _return.relatedNotes[_i]['absoluteURL__thumbnail'] = $R.$remote.get_noteThumbnail_url(_nd, _n.guid);
                        _return.relatedNotes[_i]['absoluteURL__noteView'] = $R.$remote.get_note_url(_nd, _n.guid);
                        
                        // no thumbnail
                        if (_return.relatedNotes[_i].largestResourceSize > 0) {}else { _return.relatedNotes[_i]['absoluteURL__thumbnail'] = 'none'; }
                    }
                    
                    //  return
                    return _return;
                };
            
            //  fix request
            //  ===========
                $R.$remote.get_recommendation__fixRequest = function (_request)
                {
                    //  return
                    var _return = _request;
                    
                    //  body
                    //  ====
                    
                        //  just text
                        _return.body = _return.body.replace(/<[^>]+?>/gi, ' ');
                    
                        //  remove spaces
                        _return.body = _return.body.replace(/\s+/gi, ' ');
                        _return.body = _return.body.replace(/^\s+/gi, '');
                    
                        //  cut off
                        _return.body = _return.body.substr(0, 5000);
                    
                    //  return
                    return _return;
                };
            
        

        
        //  variable which holds what popup is currently open
        
            $R.$popup = {
                'which':    'string',           //  what popup is open -- currently 'login' is the only valid one
                'tab':      'integer||object',  //  what tab is the popup associated with -- tabId in Chrome, document object in Firefox
                'details':  'object'            //  popup specific details -- login has its own thing
            };
        
            //  none is the other valid variable
            $R.$popup = false;
        

        
        //  isolate
        //  =======
            (function ()
            {
                //  uage metrics
                //  ============
                    /* imported from the web-clipper */
                    /* init like this: if (!usageMetricsManager && auth) { usageMetricsManager = new UsageMetricsManager(url, isAuthenticated); } */
                    
                    // Takes a URL to make requests against, and a function that can be called to get back auth info. Currently, the spec
                    // for what should be passed to authFunction and what gets passed to authFunction's callback is exactly equivalent to
                    // Auth.isAuthenticated(), which is:
                    // Auth.isAuthenticated(callback, autoRenew)
                    //  callback: a function to call when we've decided whether a user is authenticated, this function will be passed an
                    //  object with the following properties:
                    //    username: the username used to perform the authentication (which can be an email address).
                    //    authenticationToken: the authentication token returned by a successful login on the server.
                    //    displayName: the username as it should be displayed in the UI (should not be an email address, may be the same as
                    //    username.  
                    //  NOTE: if authentication fails, NULL is passed to 'callback', not an object with null property values.
                    //
                    //  autoRenew: a boolean indicating whether the authFunction should attempt to automatically renew a stale auth token.
                    
                    function UsageMetricsManager(authFunction) {
                    
                      var usageMetrics = {};
                    
                      function recordActivity(_callback) {
                        var name = "";
                        function checkAuthCallback(auth)
                        {
                          // signed in/out
                          if (auth) {
                            name = auth.displayName;
                          }
                          else {
                            name = '__signed_out';
                          }
                          
                          // signed out
                          if (name == '__signed_out') {
                            var usage = usageMetrics[name];
                            if (!usage) {
                              usage = new UsageMetricsSignedOut();
                              usageMetrics[name] = usage;
                            }
                            usage.recordActivity(_callback);
                            return; // signed out, and done
                          }
                          
                          // signed in
                          if (name) {
                            var usage = usageMetrics[name];
                            if (!usage) {
                              usage = new UsageMetricsSignedIn(authFunction);
                              usageMetrics[name] = usage;
                            }
                            usage.recordActivity(_callback);
                          }
                        }
                        
                        authFunction(checkAuthCallback, true);
                      }
                    
                      this.recordActivity = recordActivity;
                    }
                    
                    /* imported from the web-clipper */
                    
                    // Each logged in user should get his own UsageMetrics object.
                    function UsageMetricsSignedIn(authFunction) {
                    
                      var INTERVAL_MINUTES = 15;
                    
                      // Timestamp of the 15 minute interval last sent to the server. We will not record events in this block or before.
                      var lastSent = 0;
                      var activityBlocks = {};
                    
                      // Gets the timestamp for the first second of the 15 minute block that we're currently in.
                      function getTimeBlock() {
                        var now = new Date();
                        var minutes = Math.floor(now.getMinutes() / INTERVAL_MINUTES) * INTERVAL_MINUTES;
                        now.setMinutes(minutes);
                        now.setSeconds(0);
                        now.setMilliseconds(0);
                        return Math.round(now.getTime() / 1000);
                      }
                    
                      function recordActivity(callback) {
                        var time = getTimeBlock();
                        if (lastSent >= time) {
                          if (callback) { callback(); }
                          return;
                        }
                        activityBlocks[time] = true;
                        send(callback);
                      }
                    
                      function send(callback) {
                        if (!navigator.onLine) {
                          if (callback) { callback(); }
                          return;
                        }
                        var count = 0;
                        var newLastSent = 0;
                        for (var i in activityBlocks) {
                          var num = parseInt(i, 2);
                          count++;
                          if (num > newLastSent) {
                            newLastSent = num;
                          }
                        }
                    
                        if (count > 0) {
                          sendRequest(count, newLastSent, callback);
                        }
                        else {
                          if (callback) { callback(); }
                        }
                      }
                    
                      function sendRequest(count, newLastSent, callback) {
                        function resultCallback(data, error) {
                          if (data) {
                            activityBlocks = [];
                            if (newLastSent > lastSent) {
                              lastSent = newLastSent;
                            }
                          }
                          if (callback) { callback(); }
                        }
                    
                        function sendCallback() {
                          $R.$remote.rpc__noteStore.NoteStore.getSyncStateWithMetrics(
                            resultCallback, 
                            $R.$remote.user__authToken, 
                            { 'sessions': count });
                        }
                    
                        function authCallback(_authInfo) {
                          if (_authInfo && _authInfo.authenticationToken){
                            sendCallback();
                          }
                          else {
                            //console.warn("Tried to send UsageMetrics, but not logged in.");
                            if (callback) { callback(); }
                          }
                        }
                    
                        authFunction(authCallback, true);
                      }
                      
                      function getJson() {
                        var json = {};
                        json.lastSent = lastSent;
                        json.activityBlocks = {};
                        // Deep copy.
                        for (var i in activityBlocks) {
                          json.activityBlocks[i] = activityBlocks[i];
                        }
                        return json;
                      }
                    
                      function importFromJson(json) {
                        try {
                          lastSent = json.lastSent;
                          activityBlocks = json.activityBlocks;
                        }
                        catch(e) {
                          lastSent = 0;
                          activityBlocks = {};
                          //console.warn("Failed to import saved UsageMetrics from JSON object.");
                        }
                      }
                    
                      this.recordActivity = recordActivity;
                      this.send = send;
                      this.getJson = getJson;
                      this.importFromJson = importFromJson;
                    }
                    
                    /* derived from UsageMetricsSignedIn */
                    
                    function UsageMetricsSignedOut() {
                      "use strict";
                    
                      var INTERVAL_MINUTES = 15;
                    
                      // Timestamp of the 15 minute interval last sent to the server. We will not record events in this block or before.
                      var lastSent = 0;
                      var activityBlocks = {};
                    
                      // Gets the timestamp for the first second of the 15 minute block that we're currently in.
                      function getTimeBlock() {
                        var now = new Date();
                        var minutes = Math.floor(now.getMinutes() / INTERVAL_MINUTES) * INTERVAL_MINUTES;
                        now.setMinutes(minutes);
                        now.setSeconds(0);
                        now.setMilliseconds(0);
                        return Math.round(now.getTime() / 1000);
                      }
                    
                      function recordActivity(callback) {
                        var time = getTimeBlock();
                        if (lastSent >= time) {
                          if (callback) { callback(); }
                          return;
                        }
                        activityBlocks[time] = true;
                        send(callback);
                      }
                    
                      function send(callback) {
                        if (!navigator.onLine) {
                          if (callback) { callback(); }
                          return;
                        }
                        var count = 0;
                        var newLastSent = 0;
                        for (var i in activityBlocks) {
                          var num = parseInt(i, 2);
                          count++;
                          if (num > newLastSent) {
                            newLastSent = num;
                          }
                        }
                    
                        if (count > 0) {
                          sendRequest(count, newLastSent, callback);
                        }
                        else {
                          if (callback) { callback(); }
                        }
                      }
                    
                      function sendRequest(count, newLastSent, callback) {
                        function resultCallback(data) {
                          if (data) {
                            activityBlocks = [];
                            if (newLastSent > lastSent) {
                              lastSent = newLastSent;
                            }
                          }
                          if (callback) { callback(); }
                        }
                    
                        function sendCallback()
                        {
                            //  get device id; set, if not present
                            var _device_id = $R.saved__get_device_id();
                        
                            //  create request
                            var _request = ''                           +
                                'a='  + encodeURIComponent('en-clearly-xauth-new') +
                                '&d=' + encodeURIComponent(_device_id)  +
                                '&t=' + 'sessions'                      +
                                '&c=' + encodeURIComponent(count)       +
                                '&w=' + encodeURIComponent(Math.floor((new Date()).getTime()/1000)) +
                            '';
                                
                            //  signature
                            var _signature = $R.md5(_request + '38f4e71b0172afbb');
                            
                            //  sign request
                            _request = _request + '&g=' + encodeURIComponent(_signature);
                                
                            //  send request
                            $R.xhr('get', 'https://metrics.evernote.com/r?' + _request, function() { if (this.readyState == 4 && this.status == 200 && callback) { callback(); } });
                        }
                    
                        sendCallback();
                      }
                    
                      this.recordActivity = recordActivity;
                      this.send = send;
                    }
                    
        
                //  the metrics manager
                //  ===================
                    $R.session_tracking__usageMetricsManager = false;
                
                //  the high-level track function
                //  =============================
                    $R.session_tracking__track = function ()
                    {
                        //  not instantiated yet
                        //  ====================
                            if ($R.session_tracking__usageMetricsManager) {}else
                            {
                                //  delay first instantiation by 60 seconds
                                window.setTimeout(function () { $R.session_tracking__init(function () { $R.session_tracking__track(); }); }, 60000);
                                return;
                            }
                    
                        //  do now
                        //  ======
                            $R.session_tracking__usageMetricsManager.recordActivity(function () { /* console.log('ran recordActivity'); */ });
                    };
                
                //  init metrics manager
                //  ====================
                    $R.session_tracking__init = function (_onSuccess)
                    {
                        $R.session_tracking__usageMetricsManager = new UsageMetricsManager($R.session_tracking__authFunction);
                        _onSuccess();
                    };
            
            
                //  auth function
                //  =============
                    $R.session_tracking__authFunction = function (_callback, _autoRenew)
                    {
                        //  doCallback
                        //  ==========
                            var _doCallback = function (_success)
                            {
                                //  failed
                                if (!_success) { _callback(false); return; }
                    
                                //  success
                                _callback({ 
                                    'authenticationToken':  $R.$remote.user__authToken,
                                    'displayName':          $R.$remote.user__id,
                                    'username':             $R.$remote.user__id
                                }); 
                            };
                    
                        //  not logged in
                        //  =============
                            switch (true)
                            {
                                case (!$R.$remote.is__connected):
                                case (!$R.$remote.is__loggedIn):
                                case (!$R.$remote.is__notExpired()):
                            
                                    //  don't auto renew -- just fail
                                    if (_autoRenew) {}else { _doCallback(false); return; }
        
                                    //  get login
                                    var _storedLogin = $R.credentials__get();
                            
                                    //  do stored login
                                    $R.$remote.loginWithAuthToken(
                                        _storedLogin.xAuthToken,
        
                                        //  success | login
                                        function () { _doCallback(true); return; },
        
                                        //  failure | login
                                        function (_failReason) { _doCallback(false); return; },
                                        
                                        //  business login not necessary
                                        true);
                            
                                    return;
                                    break;
                            }
                                
                        //  logged in -- do callback
                        //  =========
                            _doCallback(true);
                    };
            })();
            
        
        //  google analytics -- docs: https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide
        //  ================
        
            $R.analytics__track_event = function (_category, _action, _label)
            {
                //  data to be sent
                var _data =     { 'type': 'event' };
                if (_category)  { _data['category'] = _category; }
                if (_action)    { _data['action'] = _action; }
                if (_label)     { _data['label'] = _label; }
        
                //  category and action are required        
                if (_category && _action) {}else { return false; }
        
                //  send
                $R.analytics__send(_data);
                
                //  good
                return true;
            };
        
            $R.analytics__send = function (_data)
            {
                //  add metadata
                //  ============
                
                    _data['property_id'] =  'UA-285778-79'; /* live; previous: 'UA-28770131-1'; test: 'UA-28238478-1'; */
                    _data['client_id'] =    $R.saved__get_device_id();
                
                    _data['app_name'] =     'Clearly';
                    _data['app_version'] =  '10.6.1.8';
        
                    _data['api_version'] =  '1';
        
        
                //  post
                //  ====
                
                    //  actual GA parameter names -- they're very very short
                    var _parameter_names = {
                        'api_version':  'v',
                        'property_id':  'tid',
                        'client_id':    'cid',
                
                        'app_name':     'an',
                        'app_version':  'av',
                
                        'type':         't',
                
                        'category':     'ec',
                        'action':       'ea',
                        'label':        'el'
                    };
        
                    //  data to send
                    var _data2 = {};
                    for (var _key in _data) { _data2[_parameter_names[_key]] = _data[_key]; }
        
                    //  send -- also does the encoding of _data2
                    $R.xhr('POST', 'https://ssl.google-analytics.com/collect', false, _data2);
            };
        


        
        //  misc
        //  ====
        
            //  log
            $R.log = function ()
            {
                //  loop
                for (var i=0, il=arguments.length; i<il ; i++) { $R.logOneLine(arguments[i]); }
                
                //  separator
                $R.logOneLine('-------------------------------');
            };
            
            //  no debug
             $R.log = function () { };
        
        

        
        //  first show
        //  ==========
            $R.first__show = function()
            {
                //  already done -- somehow
                //  ============
                    if ($R.firstShow) { return; }
        
                //  check if not first run
                //  ======================
                    if ($R.storage__get('notFirstRun') != 'yes') 
                    {
                        $R.firstShow = 'all-features';
                        return;
                    }
                    else
                    {
                        if ($R.storage__get('firstShowIdentifier') == $R.first_show_identifier) {}else
                        {
                            $R.firstShow = 'new-features';
                            return;
                        }
                    }
            };
        
        
        //  first run
        //  =========
            $R.first__run = function()
            {
                //  check -- maybe return
                //  =====
                    if ($R.storage__get('notFirstRun') == 'yes') { return; }
        
                //  set
                //  ===
                    $R.storage__set('notFirstRun', 'yes');
                
                //  set reminder "last closed" -- this will start showing the reminder after 14 days
                //  ==========================
                    $R.saved__setLastUsed('reminderClosed');
                
                //  add button -- just for firefox
                //  ==========
        
                
                //  open info url
                //  =============
                    var defaultInfoURL = 'http://www.evernote.com/clearly/guide/';
                    $R.$bootstrap.bootstrap(
                        function ()
                        {
                            var url = '';
                                url = (url > '' ? url : $R.$bootstrap.remote_domain_marketing);
                                url = (url > '' ? url + 'clearly/guide/' : defaultInfoURL);
        
                            $R.open_url_in_new_tab(url);
                        },
                        function ()
                        {
                            $R.open_url_in_new_tab(defaultInfoURL);
                        });
            };
        
        
        //  defaults -- if options/vars not set
        //  ========
            $R.assure_defaults = function ()
            {
                for (var _x in $R.default_options)
                {
                    var _valueDefault = $R.default_options[_x],
                        _valueNow = $R.storage__get(_x);
        
                    switch (true)
                    {
                        case (!(_valueNow > '')):
                        case ((_valueNow == '--def--')):
                            $R.storage__set(_x, $R.encode(_valueDefault));
                            break;
                    }
                }
                    
                for (var _x in $R.default_vars)
                {
                    var _valueDefault = $R.default_vars[_x],
                        _valueNow = $R.storage__get(_x);
        
                    switch (true)
                    {
                        case (!(_valueNow > '')):
                        case ((_valueNow == '--def--')):
                            $R.storage__set(_x, $R.encode(_valueDefault));
                            break;
                    }
                }
            };
        
        
    })(window.__readable_by_evernote);


//  ==========================================================================================================================


//  import this
//  ===========
    (function ($R) {
    
        
        //  launch
        //  ======
            $R.launch = function ()
            {
                chrome.tabs.query({ 'windowId': chrome.windows.WINDOW_ID_CURRENT, 'active': true }, function (_selected_tabs)
                {
                    //  .query details
                    //      optional parameter ('currentWindow': true)
                    //          this parameter was available starting with Chrome 19
                    //      the WINDOW_ID_CURRENT, on the other hand, has been available since Chrome 18
                
                    //  first tab only
                    var _selected_tab = _selected_tabs[0];
                    
                    //  invalid page?
                    if (_selected_tab && _selected_tab.url && $R.valid_url(_selected_tab.url)) {}else
                    {
                        //  incognito; wil not work
                        if (_selected_tab.incognito) { return; }
                    
                        //  not incognito
                        chrome.tabs.update(_selected_tab.id, {'url': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/front/blank/page.html'});
                        return;
                    }
                    
                    //  send message
                    chrome.tabs.sendMessage(_selected_tab.id, { '_type': 'inject' });
                });
            };
        
        
        //  close reminder
        //  ==============
            $R.closeReminder = function ()
            {
                chrome.tabs.query({ 'windowId': chrome.windows.WINDOW_ID_CURRENT, 'active': true }, function (_selected_tabs)
                {
                    //  first tab only
                    var _selected_tab = _selected_tabs[0];
                    
                    //  invalid page?
                    if (_selected_tab && _selected_tab.url && $R.valid_url(_selected_tab.url)) {}else { return; }
                    
                    //  send message
                    chrome.tabs.sendMessage(_selected_tab.id, { '_type': 'close-reminder' });
                });
            };
        

    })(window.__readable_by_evernote);


//  ==========================================================================================================================


//  run
//  ===
    (function ($R) {

        
        //  button
        //  ======
            chrome.browserAction.onClicked.addListener(function(tab) { $R.launch(); });
            
        //  context menu
        //  ============
            chrome.contextMenus.create({
                'title':     chrome.i18n.getMessage('chrome_context_menu'),
                'type':      'normal',
                'contexts':  ['all'],
                'onclick':   function () { $R.launch(); }
            });
            
        
        //  events handler
        //  ==============
            chrome.extension.onMessage.addListener(function(message, sender, sendResponse)
            {
                //  invalid
                if (message._type) {}else { sendResponse({}); }
        
                //  vars
                var _event_name = message._type;
                
                //  other
                if (_event_name.indexOf('to-chrome--') === 0) {}else { return; }
                
                //  vars
                var _short_event_name = _event_name.substr('to-chrome--'.length),
                    _stop = false;
        
                //  dispatcher
                var __event_dispatch = function (_short_event_name, _arguments)
                {
                    //  default details -- for some events, this gets modified
                    var _details = { '_type': _short_event_name };
        
                    //  add more details?
                    switch (_short_event_name)
                    {
                        case 'evernote--get-recommendation--successful': 
                            _details = { 
                                '_type': _short_event_name, 
                                '_recommendation': $R.$remote.store__pageId_to_recommendation[_arguments['_page_id']] 
                            };
                            break;
        
                        case 'evernote--get-filing--successful': 
                            _details = { 
                                '_type': _short_event_name, 
                                '_filing': {
                                    'notebooks':             $R.$remote.filing__notebooks,
                                    'notebooks__order':      $R.$remote.filing__notebooks__order,
                                    
                                    'tags__personal':        $R.$remote.filing__tags__personal,
                                    'tags__personal__order': $R.$remote.filing__tags__personal__order,
                                    
                                    'tags__business':        $R.$remote.filing__tags__business,
                                    'tags__business__order': $R.$remote.filing__tags__business__order
                                } 
                            };
                            break;
                            
                        case 'evernote--clip--successful':
                        case 'evernote--clip-highlight--successful':
                        case 'evernote--clip-filing--successful':
                            _details = {
                                '_type': _short_event_name,
                                '_info': $R.$remote.store__pageId_to_clipInfo[_arguments['_page_id']],
                                '_filing': {
                                    'notebooks':             $R.$remote.filing__notebooks,
                                    'notebooks__order':      $R.$remote.filing__notebooks__order,
                                    
                                    'tags__personal':        $R.$remote.filing__tags__personal,
                                    'tags__personal__order': $R.$remote.filing__tags__personal__order,
                                    
                                    'tags__business':        $R.$remote.filing__tags__business,
                                    'tags__business__order': $R.$remote.filing__tags__business__order
                                } 
                            };
                            break;
                    }
        
                    //  type
                    _details._type = 'to-content--' + _details._type;
                    
                    //  send -- to sender tab, or to the tab associated with the tab
                    switch (_short_event_name)
                    {
                        case 'evernote--login--successful':
                        case 'evernote--login--now-open':
                            //  if a valid (login) popup object currently exists
                            if ($R.$popup && $R.$popup._which && $R.$popup._which == 'login') {
                                chrome.tabs.sendMessage($R.$popup._tab, _details);
                            }
                            else {
                                chrome.tabs.sendMessage(sender.tab.id, _details);
                            }
                            break;
                        
                        default:
                            chrome.tabs.sendMessage(sender.tab.id, _details);
                            break;
                    }
                    
                    //  custom action, after
                    switch (_short_event_name)
                    {
                        case 'evernote--login--show':
                        case 'evernote--login--show--in':
                        case 'evernote--login--show--in-cn':
                        case 'evernote--login--show--cn':
                        case 'evernote--login--show--cn-in':
                        
                            //  localization
                            var _localization = 'in';            
                            switch (_short_event_name)
                            {
                                case 'evernote--login--show--in':    _localization = _short_event_name.substr(-2); break;
                                case 'evernote--login--show--cn':    _localization = _short_event_name.substr(-2); break;
                                case 'evernote--login--show--in-cn': _localization = _short_event_name.substr(-5).replace(/-/g, '_').toLowerCase(); break;
                                case 'evernote--login--show--cn-in': _localization = _short_event_name.substr(-5).replace(/-/g, '_').toLowerCase(); break;
                            }
                        
                            //  set popup
                            $R.$popup = {
                                '_which':    'login',
                                '_tab':      sender.tab.id,
                                '_details':  { 
                                    '_localization': _localization,
                                    '_screen':       'credentials'
                                }
                            };
                            
                            //  set Chrome popup
                            chrome.browserAction.setPopup({ 
                                'tabId': $R.$popup._tab, 
                                'popup': 'back/in_popup/login/page.html' 
                            });
                            
                            break;
        
                        case 'evernote--login--successful':
                        
                            //  close popup
                            try { chrome.extension.getViews({ 'type': 'popup' })[0].close(); } catch (_e) {}
                        
                            //  unset Chrome popup
                            chrome.browserAction.setPopup({ 
                                'tabId': $R.$popup._tab, 
                                'popup': '' 
                            });
        
                            //  unset popup
                            $R.$popup = false;
                            
                            break;
                    }
                };
            
                //  dispatcher :: popup
                var __event_dispatch__popup = function (_short_event_name, _arguments)
                {
                    //  default details -- for some events, this gets modified
                    var _details = { '_type': _short_event_name };
        
                    //  add more details?
                    switch (_short_event_name)
                    {
                        case 'evernote--login--request-second-factor':
                            _details = { 
                                '_type': _short_event_name, 
                                '_deliveryHint': _arguments['_deliveryHint']
                            };
                            break;
                    }
        
                    //  type
                    _details._type = 'to-content--' + _details._type;
                    
                    //  send -- to popup
                    chrome.extension.sendMessage(_details);
                    
                    //  custom action, after
                    switch (_short_event_name)
                    {
                        case 'evernote--login--request-second-factor':
                        
                            if ($R.$popup && $R.$popup._which && $R.$popup._which == 'login') {
                                $R.$popup._details._screen = 'second-factor';
                                $R.$popup._details._deliveryHint = _details._deliveryHint;
                            }
                            
                            break;
        
                        case 'evernote--login--set--in':
                        case 'evernote--login--set--in-cn':
                        case 'evernote--login--set--cn':
                        case 'evernote--login--set--cn-in':
        
                            var _localization = '';            
                            switch (_short_event_name)
                            {
                                case 'evernote--login--set--in':    _localization = _short_event_name.substr(-2); break;
                                case 'evernote--login--set--cn':    _localization = _short_event_name.substr(-2); break;
                                case 'evernote--login--set--in-cn': _localization = _short_event_name.substr(-5).replace(/-/g, '_').toLowerCase(); break;
                                case 'evernote--login--set--cn-in': _localization = _short_event_name.substr(-5).replace(/-/g, '_').toLowerCase(); break;
                            }
                                
                            //  set?
                            if (_localization > '') {
                                if ($R.$popup && $R.$popup._which && $R.$popup._which == 'login') {
                                    $R.$popup._details._localization = _localization;
                                }
                            }
        
                            //  try to change now
                            try { chrome.extension.getViews({ 'type': 'popup' })[0].document.getElementById('login__container_which').className = _localization; } catch (_e) {}
        
                            break;
                    }
                };
            
                //  event groups
                //  ============
                    
                    //  evernote events
                    //  ===============
                        if (_stop) {}else { switch (_short_event_name)
                        {
                            case 'evernote--clip':
                                
                                (function () {
                                
                                    //  check login
                                    //  if not logged in, try stored log in 
                                    //      on successfull login, do clip again
                                    //      on failed login, or no stored login, show login form
                                    //    
                                    //  try clip
                                    //      on fail, because of login, try stored login
                                    //          on successfull login, try clip again
                                    //          on failed login, or no stored login, show login form
                                    //  ============================================================
                                    
                                    
                                    //  misc
                                    //  ====    
                                        $R.$remote.refresh_settings();
                                        if ($R.credentials__get_logout_on_next_action()) { $R.$remote.logout(); }
                                        var _storedLogin = $R.credentials__get();
                                
                                            
                                    //  callbacks
                                    //  =========
                                    
                                        var _clipping_successful = function (_page_id)
                                        {
                                            __event_dispatch('evernote--clip--successful', { '_page_id': _page_id });
                                
                                            var _domain_name = '';
                                               _domain_name = message._domain;
                                        
                                
                                
                                            var _privilege = ($R.$remote['user__privilege'] ? 'privilege-'+$R.$remote['user__privilege'] : 'blank-privilege');
                                
                                            $R.session_tracking__track();
                                            $R.analytics__track_event('Clip', _domain_name, _privilege);
                                            $R.saved__setLastUsed('clip');
                                        };
                                        
                                        var _clipping_failed = function ()
                                        {
                                            __event_dispatch('evernote--clip--failed');
                                        };
                                
                                        var _request_login = function ()
                                        {
                                            $R.$bootstrap.bootstrap(
                                                
                                                //  bootstrap => success
                                                function ()
                                                {
                                                    __event_dispatch('evernote--login--show--' + ($R.$bootstrap.profiles_as_string2));
                                                
                                                    //__event_dispatch__popup('evernote--login--set--' + ($R.$bootstrap.profiles_as_string2));
                                                    //__event_dispatch__popup('evernote--login--show--in-frame');
                                                    // __event_dispatch('evernote--login--show');
                                                },
                                                
                                                //  bootstrap => failure
                                                function () { _clipping_failed(); });
                                        };
                                        
                                        
                                    //  vars
                                    //  ====
                                         var __pageId = message._pageId,
                                            __note =   message._note;
                                    
                                
                                        
                                    
                                    //  code
                                    //  ====
                                        switch (true)
                                        {
                                            case (!$R.$remote.is__connected):
                                            case (!$R.$remote.is__loggedIn):
                                            case (!$R.$remote.is__notExpired()):
                                        
                                                //  not connected / logged-in
                                                //      and we know this; so do connect/login
                                        
                                                //  no stored login
                                                //  ===============
                                                    if (_storedLogin == false) { _request_login(); return; }
                                        
                                                //  do stored login
                                                //  ================
                                                    $R.$remote.loginWithAuthToken(
                                
                                                        _storedLogin.xAuthToken,
                                
                                                        //  login => success
                                                        function ()
                                                        {
                                                            $R.$remote.clip(
                                
                                                                __pageId,
                                                                __note,
                                
                                                                //  clip => success
                                                                function () { _clipping_successful(__pageId); },
                                
                                                                //  clip => failure
                                                                function (_failReason) { _clipping_failed(); });
                                                        },
                                
                                                        //  login => failure
                                                        function (_failReason) { _request_login(); });
                                            
                                                break;
                                            
                                
                                            default:
                                        
                                                //  should be both connected and logged in
                                                //      in case it fails because of login, we try another stored login
                                
                                                $R.$remote.clip(
                                                
                                                    __pageId,
                                                    __note,
                                
                                                    //  clip => success
                                                    function () { _clipping_successful(__pageId); },
                                
                                                    //  clip => failuse
                                                    function (_failReason)
                                                    {
                                                        //  failure because of soemthing else
                                                        if (_failReason == 'login') {}else { _clipping_failed(); return; }
                                
                                                        //  no stored login
                                                        if (_storedLogin == false) { _request_login(); return; }
                                
                                                        //  try stored login
                                                        $R.$remote.loginWithAuthToken(
                                                        
                                                            _storedLogin.xAuthToken,
                                
                                                            //  login => success
                                                            function ()
                                                            {
                                                                $R.$remote.clip(
                                                                
                                                                    __pageId,
                                                                    __note,
                                
                                                                    //  clip => success
                                                                    function () { _clipping_successful(__pageId); },
                                
                                                                    //  clip => failure
                                                                    function (_failReason) { _clipping_failed(); });
                                                            },
                                
                                                            //  login => failure
                                                            function (_failReason) { _request_login(); });
                                                    });
                                
                                                break;
                                        }
                                
                                })();
                                
                                _stop = true;
                                break;
                    
                            case 'evernote--clip-highlight':
                                
                                (function () {
                                
                                    //  check login
                                    //      if not logged in, fail 
                                    //      on failed login, fail
                                    //    
                                    //  try highlight
                                    //      on fail, fail
                                    //  ============================================================
                                
                                
                                    //  misc
                                    //  ====    
                                        $R.$remote.refresh_settings();
                                        if ($R.credentials__get_logout_on_next_action()) { $R.$remote.logout(); }
                                        var _storedLogin = $R.credentials__get();
                                
                                
                                    //  callbacks
                                    //  =========
                                            
                                        var _clipping_successful = function (_id)
                                        {
                                            __event_dispatch('evernote--clip-highlight--successful', { '_page_id': _id });
                                            $R.session_tracking__track();
                                        };
                                        
                                        var _clipping_failed = function ()
                                        {
                                            __event_dispatch('evernote--clip-highlight--failed');
                                        };
                                        
                                        var _request_login = function ()
                                        {
                                            $R.$bootstrap.bootstrap(
                                            
                                                //  bootstrap => success
                                                function ()
                                                {
                                                    __event_dispatch('evernote--login--show--' + ($R.$bootstrap.profiles_as_string2));
                                                
                                                    //__event_dispatch__popup('evernote--login--set--' + ($R.$bootstrap.profiles_as_string2));
                                                    //__event_dispatch__popup('evernote--login--show--in-frame');
                                                    // __event_dispatch('evernote--login--show');
                                                },
                                                
                                                //  bootstrap => failure
                                                function () { _clipping_failed(); });
                                        };
                                
                                
                                    //  vars
                                    //  ====
                                         var __pageId = message._pageId,
                                            __note =   message._note;
                                    
                                
                                    
                                
                                    //  code
                                    //  ====
                                        switch (true)
                                        {
                                            case (!$R.$remote.is__connected):
                                            case (!$R.$remote.is__loggedIn):
                                            case (!$R.$remote.is__notExpired()):
                                
                                                //  not connected / logged-in
                                                //      and we know this; so do connect/login
                                
                                                //  no stored login
                                                //  ===============
                                                    if (_storedLogin == false) { _request_login(); return; }
                                        
                                                //  do stored login
                                                //  ================
                                                    $R.$remote.loginWithAuthToken(
                                                    
                                                        _storedLogin.xAuthToken,
                                
                                                        //  login => success 
                                                        function ()
                                                        {
                                                            $R.$remote.clip(
                                                            
                                                                __pageId,
                                                                __note,
                                
                                                                //  clip => success 
                                                                function () { _clipping_successful(__id); },
                                
                                                                //  clip => failure
                                                                function (_failReason) { _clipping_failed(); });
                                                        },
                                
                                                        //  login => failure
                                                        function (_failReason) { _request_login(); });
                                            
                                                break;
                                
                                            default:
                                
                                                //  should be both connected and logged in
                                                //      in case it fails because of login, we try stored login
                                        
                                                $R.$remote.clip(
                                                
                                                    __pageId,
                                                    __note,
                                
                                                    //  clip => success
                                                    function () { _clipping_successful(__id); },
                                
                                                    //  clip => failure
                                                    function (_failReason)
                                                    {
                                                        //  failure because of soemthing else
                                                        if (_failReason == 'login') {}else { _clipping_failed(); return; }
                                
                                                        //  no stored login
                                                        if (_storedLogin == false) { _request_login(); return; }
                                
                                                        //  try stored login
                                                        $R.$remote.loginWithAuthToken(
                                                        
                                                            _storedLogin.xAuthToken,
                                
                                                            //  login => success
                                                            function ()
                                                            {
                                                                $R.$remote.clip(
                                                                
                                                                    __pageId,
                                                                    __note,
                                
                                                                    //  clip => success
                                                                    function () { _clipping_successful(message._id); },
                                
                                                                    //  clip => failure
                                                                    function (_failReason) { _clipping_failed(); });
                                                            },
                                
                                                            //  login => failure
                                                            function (_failReason) { _request_login(); });
                                                    });
                                            
                                                break;
                                        }
                                
                                })();
                                
                                _stop = true;
                                break;
                    
                            case 'evernote--clip-filing':
                                
                                (function () {
                                
                                    //  check login
                                    //  if not logged in, try stored log in 
                                    //      on successfull login, do clip again
                                    //      on failed login, or no stored login, show login form
                                    //    
                                    //  try clip
                                    //      on fail, because of login, try stored login
                                    //          on successfull login, try clip again
                                    //          on failed login, or no stored login, show login form
                                    //  ============================================================
                                    
                                    
                                    //  misc
                                    //  ====    
                                        $R.$remote.refresh_settings();
                                        if ($R.credentials__get_logout_on_next_action()) { $R.$remote.logout(); }
                                        var _storedLogin = $R.credentials__get();
                                
                                            
                                    //  callbacks
                                    //  =========
                                    
                                        var _clipping_successful = function (_page_id)
                                        {
                                            __event_dispatch('evernote--clip-filing--successful', { '_page_id': _page_id });
                                
                                            var _domain_name = '';
                                               _domain_name = message._domain;
                                        
                                
                                
                                            var _privilege = ($R.$remote['user__privilege'] ? 'privilege-'+$R.$remote['user__privilege'] : 'blank-privilege');
                                
                                            $R.session_tracking__track();
                                            $R.analytics__track_event('Clip', _domain_name, _privilege);
                                            $R.saved__setLastUsed('clip');
                                        };
                                        
                                        var _clipping_failed = function ()
                                        {
                                            __event_dispatch('evernote--clip-filing--failed');
                                        };
                                
                                        var _request_login = function ()
                                        {
                                            $R.$bootstrap.bootstrap(
                                                
                                                //  bootstrap => success
                                                function ()
                                                {
                                                    __event_dispatch('evernote--login--show--' + ($R.$bootstrap.profiles_as_string2));
                                                
                                                    //__event_dispatch__popup('evernote--login--set--' + ($R.$bootstrap.profiles_as_string2));
                                                    //__event_dispatch__popup('evernote--login--show--in-frame');
                                                    // __event_dispatch('evernote--login--show');
                                                },
                                                
                                                //  bootstrap => failure
                                                function () { _clipping_failed(); });
                                        };
                                        
                                        
                                    //  vars
                                    //  ====
                                         var __pageId = message._pageId,
                                            __note =   message._note,
                                            __filing = message._filing;
                                    
                                
                                        
                                    
                                    //  code
                                    //  ====
                                        switch (true)
                                        {
                                            case (!$R.$remote.is__connected):
                                            case (!$R.$remote.is__loggedIn):
                                            case (!$R.$remote.is__notExpired()):
                                        
                                                //  not connected / logged-in
                                                //      and we know this; so do connect/login
                                        
                                                //  no stored login
                                                //  ===============
                                                    if (_storedLogin == false) { _request_login(); return; }
                                        
                                                //  do stored login
                                                //  ================
                                                    $R.$remote.loginWithAuthToken(
                                
                                                        _storedLogin.xAuthToken,
                                
                                                        //  login => success
                                                        function ()
                                                        {
                                                            $R.$remote.clip__update_filing(
                                
                                                                __pageId,
                                                                __filing,
                                                                __note,
                                
                                                                //  clip => success
                                                                function () { _clipping_successful(__pageId); },
                                
                                                                //  clip => failure
                                                                function (_failReason) { _clipping_failed(); });
                                                        },
                                
                                                        //  login => failure
                                                        function (_failReason) { _request_login(); });
                                            
                                                break;
                                            
                                
                                            default:
                                        
                                                //  should be both connected and logged in
                                                //      in case it fails because of login, we try another stored login
                                
                                                $R.$remote.clip__update_filing(
                                                
                                                    __pageId,
                                                    __filing,
                                                    __note,
                                
                                                    //  clip => success
                                                    function () { _clipping_successful(__pageId); },
                                
                                                    //  clip => failuse
                                                    function (_failReason)
                                                    {
                                                        //  failure because of soemthing else
                                                        if (_failReason == 'login') {}else { _clipping_failed(); return; }
                                
                                                        //  no stored login
                                                        if (_storedLogin == false) { _request_login(); return; }
                                
                                                        //  try stored login
                                                        $R.$remote.loginWithAuthToken(
                                                        
                                                            _storedLogin.xAuthToken,
                                
                                                            //  login => success
                                                            function ()
                                                            {
                                                                $R.$remote.clip__update_filing(
                                                                
                                                                    __pageId,
                                                                    __filing,
                                                                    __note,
                                
                                                                    //  clip => success
                                                                    function () { _clipping_successful(__pageId); },
                                
                                                                    //  clip => failure
                                                                    function (_failReason) { _clipping_failed(); });
                                                            },
                                
                                                            //  login => failure
                                                            function (_failReason) { _request_login(); });
                                                    });
                                
                                                break;
                                        }
                                
                                })();
                                
                                _stop = true;
                                break;
                    
                    
                            case 'evernote--get-recommendation':
                                
                                (function () {
                                
                                    //  check login
                                    //      if not logged in, fail 
                                    //      on failed login, fail
                                    //    
                                    //  try get
                                    //      on fail, fail
                                    //  ============================================================
                                
                                
                                    //  misc
                                    //  ====    
                                        $R.$remote.refresh_settings();
                                        if ($R.credentials__get_logout_on_next_action()) { $R.$remote.logout(); }
                                        var _storedLogin = $R.credentials__get();
                                
                                            
                                    //  callbacks
                                    //  =========
                                
                                        var _get_successful = function (_page_id)
                                        {
                                            __event_dispatch('evernote--get-recommendation--successful', { '_page_id': _page_id });
                                        };
                                        
                                        var _get_failed = function ()
                                        {
                                            __event_dispatch('evernote--get-recommendation--failed');
                                        };
                                
                                
                                    //  vars
                                    //  ====
                                         var __pageId =  message._pageId,
                                            __request = message._request;
                                    
                                
                                
                                
                                    //  run code
                                    //  ========        
                                        switch (true)
                                        {
                                            case (!$R.$remote.is__connected):
                                            case (!$R.$remote.is__loggedIn):
                                            case (!$R.$remote.is__notExpired()):
                                        
                                                //  not connected / logged-in
                                                //      and we know this -- so do connect/login
                                                
                                                //  no stored login
                                                //  ===============
                                                    if (_storedLogin == false) { _get_failed(); return; }
                                        
                                                //  do stored login
                                                //  ================
                                                    $R.$remote.loginWithAuthToken(
                                                    
                                                        _storedLogin.xAuthToken,
                                
                                                        //  login => success
                                                        function ()
                                                        {
                                                            $R.$remote.get_recommendation(
                                                    
                                                                __pageId,
                                                                __request,
                                
                                                                //  get => success
                                                                function () { _get_successful(__pageId); },
                                
                                                                //  get => failure
                                                                function (_failReason) { _get_failed(); });
                                                        },
                                
                                                        //  login => failure
                                                        function (_failReason) { _get_failed(); });
                                            
                                                break;
                                            
                                            default:
                                
                                                //    should be both connected and logged in
                                                //        in case it fails because of login, we try another stored login
                                        
                                                $R.$remote.get_recommendation(
                                        
                                                    __pageId,
                                                    __request,
                                
                                                    //  get => success
                                                    function () { _get_successful(__pageId); },
                                
                                                    //  get => failure
                                                    function (_failReason) { _get_failed(); });
                                                    
                                                break;
                                        }
                                    
                                })();
                                
                                _stop = true;
                                break;
                    
                    
                            case 'evernote--get-filing':
                            case 'evernote--get-filing--refresh':
                                
                                (function () {
                                
                                    //  check login
                                    //      if not logged in, fail 
                                    //      on failed login, fail
                                    //    
                                    //  try get
                                    //      on fail, fail
                                    //  ============================================================
                                
                                
                                    //  misc
                                    //  ====    
                                        $R.$remote.refresh_settings();
                                        if ($R.credentials__get_logout_on_next_action()) { $R.$remote.logout(); }
                                        var _storedLogin = $R.credentials__get();
                                
                                
                                    //  refresh event?
                                    //  ==============
                                        var _refresh = !!(_short_event_name && (_short_event_name == 'evernote--get-filing--refresh')); // same function is included for refresh
                                        var _refresh_full = !!($R.$remote.filing__when > ((new Date()).getTime() - (5 * 60 * 1000))); // last refresh was less than 5 minutes ago
                                
                                            
                                    //  callbacks
                                    //  =========
                                
                                        var _get_successful = function ()
                                        {
                                            //  evernote--get-filing is called on every page load
                                            //      but we don't actually want the response, 
                                            //      unless the page has been clipped (and we get that from the clip--successful event) or 
                                            //      if the filing has been refreshed
                                            
                                            if (!!_refresh) {
                                                __event_dispatch('evernote--get-filing--successful');
                                            }
                                        };
                                        
                                        var _get_failed = function ()
                                        {
                                            __event_dispatch('evernote--get-filing--failed');
                                        };
                                
                                
                                    //  run code
                                    //  ========        
                                        switch (true)
                                        {
                                            case (!$R.$remote.is__connected):
                                            case (!$R.$remote.is__loggedIn):
                                            case (!$R.$remote.is__notExpired()):
                                        
                                                //  not connected / logged-in
                                                //      and we know this -- so do connect/login
                                                
                                                //  no stored login
                                                //  ===============
                                                    if (_storedLogin == false) { _get_failed(); return; }
                                        
                                                //  do stored login
                                                //  ================
                                                    $R.$remote.loginWithAuthToken(
                                                    
                                                        _storedLogin.xAuthToken,
                                
                                                        //  login => success
                                                        function ()
                                                        {
                                                            switch (true)
                                                            {
                                                                case (!!_refresh): $R.$remote.renew_filing(_get_successful,  _get_failed, _refresh_full); break;
                                                                case (!_refresh):  $R.$remote.ensure_filing(_get_successful, _get_failed);                break;
                                                            }
                                                        },
                                
                                                        //  login => failure
                                                        function (_failReason) { _get_failed(); });
                                            
                                                break;
                                            
                                            default:
                                
                                                //  should be both connected and logged in
                                                switch (true)
                                                {
                                                    case (!!_refresh): $R.$remote.renew_filing(_get_successful,  _get_failed, _refresh_full); break;
                                                    case (!_refresh):  $R.$remote.ensure_filing(_get_successful, _get_failed);                break;
                                                }
                                                    
                                                break;
                                        }
                                    
                                })();
                                
                                _stop = true;
                                break;
                    
                    
                              //  in firefox, these events --as well as open--two-factor-help-- belong 
                            //  to the secure-login iframe
                             case 'evernote--login--do':
                                
                                (function () {
                                
                                    //  do login
                                    //      store login
                                    //  ===============
                                
                                    
                                    //  misc
                                    //  ====    
                                        $R.$remote.refresh_settings();
                                
                                
                                    //  Long-session Device identification
                                    //  ==================================
                                        var __device_id = $R.saved__get_device_id(),
                                            __os = $R.from_user_agent__get_os(window.navigator.userAgent),
                                            __device_description = '';
                                
                                __device_description = 'Google Chrome'   + ' (' + __os + ')'; 
                                
                                
                                
                                
                                    //  vars
                                    //  ====
                                         var __user = message._user,
                                            __pass = message._pass; 
                                    
                                
                                
                                
                                    //  the actual login
                                    //  ================
                                        $R.lastUsernameUsedForLogin = __user;
                                        $R.$remote.loginLongSession(
                                        
                                            __user,
                                            __pass,
                                        
                                            __device_id,
                                            __device_description,
                                    
                                            //  login => success
                                            function ()
                                            {
                                                //  save credentials
                                                //  ================
                                                    $R.credentials__set({
                                                        'username': $R.$remote.user__email,
                                                        'xAuthToken': $R.$remote.user__authToken
                                                    });
                                            
                                                //  raise event
                                                //  ===========
                                                    __event_dispatch('evernote--login--successful');
                                            },
                                        
                                            //  login => fail
                                            function (_failReason)
                                            {
                                                switch (_failReason)
                                                {
                                                    case 'two-factor':       __event_dispatch__popup('evernote--login--request-second-factor', { '_deliveryHint': $R.$remote.twoFactor__deliveryHint }); break;
                                                    case 'email':            __event_dispatch__popup('evernote--login--failed--email');            break;
                                                    case 'password':         __event_dispatch__popup('evernote--login--failed--password');         break;
                                                    case 'password-reset':   __event_dispatch__popup('evernote--login--failed--password-reset');   break;
                                                    default:                 __event_dispatch__popup('evernote--login--failed');                   break;
                                                }
                                            });
                                
                                })();
                                
                                _stop = true;
                                break;
                             case 'evernote--login--do-second-factor':
                                
                                (function () {
                                
                                    //  do login
                                    //      store login, if rememberMe
                                    //  ==============================
                                
                                    
                                    //  misc
                                    //  ====    
                                        $R.$remote.refresh_settings();
                                
                                
                                    //  Long-session Device identification
                                    //  ==================================
                                        var __device_id = $R.saved__get_device_id(),
                                            __os = $R.from_user_agent__get_os(window.navigator.userAgent),
                                            __device_description = '';
                                
                                __device_description = 'Google Chrome'   + ' (' + __os + ')'; 
                                
                                
                                
                                
                                
                                    //  invalid
                                    //  =======
                                        if ($R.$remote.twoFactor__authToken) {}else
                                        {
                                            __event_dispatch__popup('evernote--login--failed');
                                            return;
                                        }
                                
                                
                                    //  code
                                    //  ====
                                         var __code = message._code;
                                    
                                
                                    
                                
                                    //  the actual login
                                    //  ================
                                    
                                        $R.$remote.loginLongSessionSecondFactor(
                                        
                                            $R.$remote.twoFactor__authToken,
                                            __code,
                                            __device_id,
                                            __device_description,
                                    
                                            //  login => success
                                            function ()
                                            {
                                                //  save credentials
                                                $R.credentials__set({
                                                    'username': $R.$remote.twoFactor__username,
                                                    'xAuthToken': $R.$remote.user__authToken
                                                });
                                            
                                                //  event    
                                                __event_dispatch('evernote--login--successful');
                                            },
                                        
                                            //  login => failure
                                            function (_failReason)
                                            {
                                                switch (_failReason)
                                                {
                                                    case 'code':         __event_dispatch__popup('evernote--login--failed--two-factor--code');     break;
                                                    case 'timeout':      __event_dispatch__popup('evernote--login--failed--two-factor--timeout');  break;
                                                    default:             __event_dispatch__popup('evernote--login--failed');                       break;
                                                }
                                            });
                                
                                })();
                                
                                _stop = true;
                                break;
                        
                            case 'evernote--login--switch-to-cn':
                                
                                (function () {
                                
                                    //  return
                                    if ($R.$bootstrap.profiles_as_string == 'in_cn') {}else { return; }
                                
                                    //  set
                                    $R.$bootstrap.profiles_as_string = 'cn_in';
                                    $R.$bootstrap.server = 'china';
                                    $R.$bootstrap.remote_domain = $R.$bootstrap['server_china'];
                                    
                                    var _other_profile = false;
                                        _other_profile = (_other_profile ? _other_profile : $R.$bootstrap.profiles[1]);
                                        _other_profile = (($R.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                                        _other_profile = (_other_profile ? _other_profile : $R.$bootstrap.profiles[0]);
                                        _other_profile = (($R.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                                    if (_other_profile && _other_profile.settings && _other_profile.settings.marketingUrl) { $R.$bootstrap.remote_domain_marketing = _other_profile.settings.marketingUrl + '/'; }
                                
                                    //  disconnect
                                    $R.$remote.disconnect();
                                
                                    //  notify
                                    __event_dispatch__popup('evernote--login--set--cn-in');
                                
                                })();
                                
                                _stop = true;
                                break;
                             case 'evernote--login--switch-to-in':
                                
                                (function () {
                                
                                    //  return
                                    if ($R.$bootstrap.profiles_as_string == 'cn_in') {}else { return; }
                                    
                                    //  set
                                    $R.$bootstrap.profiles_as_string = 'in_cn';
                                    $R.$bootstrap.server = 'main';
                                    $R.$bootstrap.remote_domain = $R.$bootstrap['server_main'];
                                
                                    var _other_profile = false;
                                        _other_profile = (_other_profile ? _other_profile : $R.$bootstrap.profiles[0]);
                                        _other_profile = (($R.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                                        _other_profile = (_other_profile ? _other_profile : $R.$bootstrap.profiles[1]);
                                        _other_profile = (($R.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                                    if (_other_profile && _other_profile.settings && _other_profile.settings.marketingUrl) { $R.$bootstrap.remote_domain_marketing = _other_profile.settings.marketingUrl + '/'; }
                                
                                    //  disconenct                    
                                    $R.$remote.disconnect();
                                
                                    //  notify
                                    __event_dispatch__popup('evernote--login--set--in-cn');
                                    
                                })();
                                
                                _stop = true;
                                break;
                            
                            
                            case 'evernote--login--now-open':
                                __event_dispatch('evernote--login--now-open');
                                _stop = true;
                                break;
                            
                        
                        } }
                    
                    
                    //  evernote events
                    //  ===============
                        if (_stop) {}else { switch (_short_event_name)
                        {
                            case 'evernote--login--do':
                                
                                (function () {
                                
                                    //  do login
                                    //      store login
                                    //  ===============
                                
                                    
                                    //  misc
                                    //  ====    
                                        $R.$remote.refresh_settings();
                                
                                
                                    //  Long-session Device identification
                                    //  ==================================
                                        var __device_id = $R.saved__get_device_id(),
                                            __os = $R.from_user_agent__get_os(window.navigator.userAgent),
                                            __device_description = '';
                                
                                __device_description = 'Google Chrome'   + ' (' + __os + ')'; 
                                
                                
                                
                                
                                    //  vars
                                    //  ====
                                         var __user = message._user,
                                            __pass = message._pass; 
                                    
                                
                                
                                
                                    //  the actual login
                                    //  ================
                                        $R.lastUsernameUsedForLogin = __user;
                                        $R.$remote.loginLongSession(
                                        
                                            __user,
                                            __pass,
                                        
                                            __device_id,
                                            __device_description,
                                    
                                            //  login => success
                                            function ()
                                            {
                                                //  save credentials
                                                //  ================
                                                    $R.credentials__set({
                                                        'username': $R.$remote.user__email,
                                                        'xAuthToken': $R.$remote.user__authToken
                                                    });
                                            
                                                //  raise event
                                                //  ===========
                                                    __event_dispatch('evernote--login--successful');
                                            },
                                        
                                            //  login => fail
                                            function (_failReason)
                                            {
                                                switch (_failReason)
                                                {
                                                    case 'two-factor':       __event_dispatch__popup('evernote--login--request-second-factor', { '_deliveryHint': $R.$remote.twoFactor__deliveryHint }); break;
                                                    case 'email':            __event_dispatch__popup('evernote--login--failed--email');            break;
                                                    case 'password':         __event_dispatch__popup('evernote--login--failed--password');         break;
                                                    case 'password-reset':   __event_dispatch__popup('evernote--login--failed--password-reset');   break;
                                                    default:                 __event_dispatch__popup('evernote--login--failed');                   break;
                                                }
                                            });
                                
                                })();
                                
                                _stop = true;
                                break;
                    
                            case 'evernote--login--do-second-factor':
                                
                                (function () {
                                
                                    //  do login
                                    //      store login, if rememberMe
                                    //  ==============================
                                
                                    
                                    //  misc
                                    //  ====    
                                        $R.$remote.refresh_settings();
                                
                                
                                    //  Long-session Device identification
                                    //  ==================================
                                        var __device_id = $R.saved__get_device_id(),
                                            __os = $R.from_user_agent__get_os(window.navigator.userAgent),
                                            __device_description = '';
                                
                                __device_description = 'Google Chrome'   + ' (' + __os + ')'; 
                                
                                
                                
                                
                                
                                    //  invalid
                                    //  =======
                                        if ($R.$remote.twoFactor__authToken) {}else
                                        {
                                            __event_dispatch__popup('evernote--login--failed');
                                            return;
                                        }
                                
                                
                                    //  code
                                    //  ====
                                         var __code = message._code;
                                    
                                
                                    
                                
                                    //  the actual login
                                    //  ================
                                    
                                        $R.$remote.loginLongSessionSecondFactor(
                                        
                                            $R.$remote.twoFactor__authToken,
                                            __code,
                                            __device_id,
                                            __device_description,
                                    
                                            //  login => success
                                            function ()
                                            {
                                                //  save credentials
                                                $R.credentials__set({
                                                    'username': $R.$remote.twoFactor__username,
                                                    'xAuthToken': $R.$remote.user__authToken
                                                });
                                            
                                                //  event    
                                                __event_dispatch('evernote--login--successful');
                                            },
                                        
                                            //  login => failure
                                            function (_failReason)
                                            {
                                                switch (_failReason)
                                                {
                                                    case 'code':         __event_dispatch__popup('evernote--login--failed--two-factor--code');     break;
                                                    case 'timeout':      __event_dispatch__popup('evernote--login--failed--two-factor--timeout');  break;
                                                    default:             __event_dispatch__popup('evernote--login--failed');                       break;
                                                }
                                            });
                                
                                })();
                                
                                _stop = true;
                                break;
                        
                            case 'evernote--login--switch-to-cn':
                                
                                (function () {
                                
                                    //  return
                                    if ($R.$bootstrap.profiles_as_string == 'in_cn') {}else { return; }
                                
                                    //  set
                                    $R.$bootstrap.profiles_as_string = 'cn_in';
                                    $R.$bootstrap.server = 'china';
                                    $R.$bootstrap.remote_domain = $R.$bootstrap['server_china'];
                                    
                                    var _other_profile = false;
                                        _other_profile = (_other_profile ? _other_profile : $R.$bootstrap.profiles[1]);
                                        _other_profile = (($R.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                                        _other_profile = (_other_profile ? _other_profile : $R.$bootstrap.profiles[0]);
                                        _other_profile = (($R.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                                    if (_other_profile && _other_profile.settings && _other_profile.settings.marketingUrl) { $R.$bootstrap.remote_domain_marketing = _other_profile.settings.marketingUrl + '/'; }
                                
                                    //  disconnect
                                    $R.$remote.disconnect();
                                
                                    //  notify
                                    __event_dispatch__popup('evernote--login--set--cn-in');
                                
                                })();
                                
                                _stop = true;
                                break;
                    
                            case 'evernote--login--switch-to-in':
                                
                                (function () {
                                
                                    //  return
                                    if ($R.$bootstrap.profiles_as_string == 'cn_in') {}else { return; }
                                    
                                    //  set
                                    $R.$bootstrap.profiles_as_string = 'in_cn';
                                    $R.$bootstrap.server = 'main';
                                    $R.$bootstrap.remote_domain = $R.$bootstrap['server_main'];
                                
                                    var _other_profile = false;
                                        _other_profile = (_other_profile ? _other_profile : $R.$bootstrap.profiles[0]);
                                        _other_profile = (($R.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                                        _other_profile = (_other_profile ? _other_profile : $R.$bootstrap.profiles[1]);
                                        _other_profile = (($R.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                                    if (_other_profile && _other_profile.settings && _other_profile.settings.marketingUrl) { $R.$bootstrap.remote_domain_marketing = _other_profile.settings.marketingUrl + '/'; }
                                
                                    //  disconenct                    
                                    $R.$remote.disconnect();
                                
                                    //  notify
                                    __event_dispatch__popup('evernote--login--set--in-cn');
                                    
                                })();
                                
                                _stop = true;
                                break;
                    
                            /* === */            
                                
                            case 'evernote--login--now-open':
                                __event_dispatch('evernote--login--now-open');
                                _stop = true;
                                break;
                        } }
                    
                    
                    //  open events
                    //  ===========
                    
                           var _options_url = 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/back/options/page.html';
                        var _register_url = 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/back/register/page.html';
                    
                        
                    
                        
                        if (_stop) {}else { switch (_short_event_name)
                        {
                    
                            
                             case 'open--settings':          $R.open_url_in_new_tab(_options_url);               _stop = true; break;
                            case 'open--settings--theme':   $R.open_url_in_new_tab(_options_url+'#showCustom'); _stop = true; break;
                             case 'open--register--footer':  $R.open_url_in_new_tab(_register_url);              _stop = true; break;
                        
                    
                            /* both */
                                case 'open--premium':
                                    
                                        try
                                        {
                                            var _upgrade_url = $R.$bootstrap.remote_domain + 'Checkout.action' + '?origin=' + 'clearly-chrome',
                                                _full_url = $R.$bootstrap.remote_domain + 'SetAuthToken.action?auth=' + encodeURIComponent($R.$remote.user__authToken) + '&targetUrl=' + encodeURIComponent(_upgrade_url);
                                            
                                            $R.open_url_in_new_tab(_full_url);
                                        }
                                        catch (_e) {}
                                    
                                    _stop = true;
                                    break;
                            /* both */
                        } }
                        
                    
                    //  open events
                    //  ===========
                        if (_stop) {}else { switch (_short_event_name)
                        {
                            case 'open--two-factor-help':
                                
                                    var defaultLoginPath = 'https://www.evernote.com/';
                                    $R.$bootstrap.bootstrap(
                                    
                                        //  bootstrap => success
                                        function ()
                                        {
                                            var _url = '';
                                                _url = (_url > '' ? _url : $R.$bootstrap.remote_domain);
                                                _url = (_url > '' ? _url : defaultLoginPath); 
                                                _url = _url + 'TwoStepHelp.action?auth='+encodeURIComponent($R.$remote.twoFactor__authToken);
                                
                                            $R.open_url_in_new_tab(_url);
                                        },
                                        
                                        //  bootstrap => fail
                                        function ()
                                        {
                                            var _url = defaultLoginPath;
                                                _url = _url + 'TwoStepHelp.action?auth='+encodeURIComponent($R.$remote.twoFactor__authToken);
                                
                                            $R.open_url_in_new_tab(_url);
                                        });
                                
                                _stop = true;
                                break;
                    
                            case 'open--password-reset':
                                
                                    var defaultLoginPath = 'https://www.evernote.com/';
                                    $R.$bootstrap.bootstrap(
                                    
                                        //  bootstrap => success
                                        function ()
                                        {
                                            var _url  = '';
                                                _url  = (_url > '' ? _url : $R.$bootstrap.remote_domain);
                                                _url  = (_url > '' ? _url : defaultLoginPath); 
                                                _url += 'Login.action?';
                                                _url += ($R.lastUsernameUsedForLogin ? 'username='+encodeURIComponent($R.lastUsernameUsedForLogin)+'&' : '');
                                                _url += 'targetUrl=%2FChangePassword.action';
                                                
                                            $R.open_url_in_new_tab(_url);
                                        },
                                        
                                        //  bootstrap => fail
                                        function ()
                                        {
                                            var _url  = defaultLoginPath;
                                                _url += 'Login.action?';
                                                _url += ($R.lastUsernameUsedForLogin ? 'username='+encodeURIComponent($R.lastUsernameUsedForLogin)+'&' : '');
                                                _url += 'targetUrl=%2FChangePassword.action';
                                    
                                            $R.open_url_in_new_tab(_url);
                                        });
                                
                                _stop = true;
                                break;
                                
                            case 'open--register--popup':
                            
                                   var _register_url = 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/back/register/page.html';
                                $R.open_url_in_new_tab(_register_url);
                            
                        
                    
                            
                                _stop = true;
                                break;
                        } }
                        
                    
                    //  select events
                    //  =============
                        if (_stop) {}else { switch (_short_event_name)
                        {
                            case 'select--theme--theme-1':                $R.saved__select__theme('theme-1'); _stop = true; break;
                            case 'select--theme--theme-2':                $R.saved__select__theme('theme-2'); _stop = true; break;
                            case 'select--theme--theme-3':                $R.saved__select__theme('theme-3'); _stop = true; break;
                            case 'select--theme--custom':                 $R.saved__select__theme('custom');  _stop = true; break;
                        
                            case 'select--size--small':                   $R.saved__select__size('small');  _stop = true; break;
                            case 'select--size--medium':                  $R.saved__select__size('medium'); _stop = true; break;
                            case 'select--size--large':                   $R.saved__select__size('large');  _stop = true; break;
                    
                            case 'select--related-notes--just-at-bottom': $R.saved__select__related_notes('just_at_bottom'); _stop = true; break;
                            case 'select--related-notes--disabled':       $R.saved__select__related_notes('disabled');       _stop = true; break;
                        } }
                        
                    
                    //  track events
                    //  ============
                        if (_stop) {}else { switch (_short_event_name)
                        {
                            case 'track--view':
                            
                                var _domain_name = '', _theme_name = '';
                                   _domain_name = message._domain;
                                _theme_name = message._theme;
                            
                    
                    
                                $R.session_tracking__track();
                                $R.analytics__track_event('View', _domain_name, _theme_name);
                                $R.saved__setLastUsed('view');
                                
                                _stop = true;
                                break;
                        
                            case 'track--theme-popup':
                                $R.session_tracking__track();
                                $R.analytics__track_event('Theme Popup', 'Theme Popup');
                                
                                _stop = true; 
                                break;
                    
                            /* === */
                    
                            case 'track--first-show--check':
                                switch (true)
                                {
                                    case (!$R.firstShow):                                                                        break;
                                    case ($R.firstShow == 'new-features'): __event_dispatch('show--dialog-first--new-features'); break;
                                    case ($R.firstShow == 'all-features'): __event_dispatch('show--dialog-first--all-features'); break;
                                }
                                _stop = true;
                                break;
                            
                            case 'track--first-show--mark':
                    
                                //  this instance
                                $R.firstShow = true;
                    
                                //  persist
                                $R.storage__set('firstShowIdentifier', $R.first_show_identifier);
                    
                                _stop = true;
                                break;
                                
                            /* === */
                    
                            case 'track--evernote-footer--check':
                            
                                //  get login
                                var _storedLogin = $R.credentials__get();
                    
                                //  not logged in
                                if (_storedLogin) {}else { __event_dispatch('show--evernote-footer'); }
                    
                                _stop = true;
                                break;
                            
                        } }
                        
                    
                    //  track events
                    //  ============
                        if (_stop) {}else { switch (_short_event_name)
                        {
                            case 'track--reminder--shown':
                                //  no session tracking: we don't consider a user active when they see a reminder
                                //  but we do want to know how many reminders were closed
                            
                                //  last shown
                                $R.saved__setLastUsed('reminderShown');
                            
                                //$R.session_tracking__track();
                                $R.analytics__track_event('Reminder Shown', 'Reminder Shown');
                                
                                _stop = true;
                                break;
                    
                            case 'track--reminder--clicked':
                                $R.session_tracking__track();
                                $R.analytics__track_event('Reminder Clicked', 'Reminder Clicked');
                                
                                //  launch -- in current tab
                                $R.launch();
                                
                                _stop = true;
                                break;
                                
                            case 'track--reminder--closed':
                                //  no session tracking: we don't consider a user active when they close a reminder
                                //  but we do want to know how many reminders we're showning
                            
                                //$R.session_tracking__track();
                                $R.analytics__track_event('Reminder Closed', 'Reminder Closed');
                    
                                //  last closed
                                $R.saved__setLastUsed('reminderClosed');
                    
                                //  close reminder -- in current tab
                                $R.closeReminder();
                            
                                _stop = true;
                                break;
                        } }
                        
        
                //  chrome-only events
                //  ==================
                    if (_stop) {}else { switch (_short_event_name)
                    {
                        case 'load-info':
                        
                            //  get profile
                            var _profile = $R.$bootstrap.saved_server;
                                _profile = ((_profile == 'china') ? 'cn' : $R.$bootstrap.profiles_as_string);
                                _profile = ((_profile > '') ? _profile : 'none');
        
                            //  get reminder info
                            var _reminder_info = {
                                'profile':                 _profile,
                                'lastUsed_view':           $R.saved__getLastUsed('view'),
                                'lastUsed_reminderShown':  $R.saved__getLastUsed('reminderShown'),
                                'lastUsed_reminderClosed': $R.saved__getLastUsed('reminderClosed')
                            };
                                
                            //  send
                            sendResponse({
                                '_options':       $R.saved__get_options(),
                                '_vars':          $R.saved__get_vars(),
                                '_translation':   $R.translation__items,
                                
                                '_reminder_info': _reminder_info  
                            });
                            
                            //  stop
                            _stop = true;
                            break;
                    } }
                
                //  stop
                if (_stop) { sendResponse({}); }
            });
        
        
        //  events handler for independent pages -- e.g. options, registor
        //  ===================
            $R.events_handler__independent_pages = function (_event_name, _params)
            {
                //  invalid
                if (_event_name) {}else { return; }
                
                //  other
                if (_event_name.indexOf('to-extension--') === 0) {}else { return; }
                
                //  vars
                var _short_event_name = _event_name.substr('to-extension--'.length);
            
                //  event
                var _stop = false;
                
                //  track events
                //  ============
                    if (_stop) {}else { switch (_short_event_name)
                    {
                        case 'track--settings':
                            $R.session_tracking__track();
                            $R.analytics__track_event('Settings Page', 'Settings Page');
                            
                            _stop = true;
                            break;
                
                        case 'track--register--shown':
                            $R.session_tracking__track();
                            $R.analytics__track_event('Register Shown', 'Register Shown');
                            
                            _stop = true;
                            break;
                
                        case 'track--register--completed':
                            $R.session_tracking__track();
                            $R.analytics__track_event('Register Completed', 'Register Completed');
                            
                            _stop = true;
                            break;
                            
                        case 'evernote--login--do-after-register':
                
                            //  no callbacks; fire and forget
                        
                            //  shortened, simplified copy of events.include/evernote__login__do.js
                            (function () {
                
                                //  check that params exist
                                if (_params && _params['user'] && _params['pass']) {}else { return; }
                
                                //  do login
                                //      store login
                                //  ===============
                    
                                //  misc
                                $R.$remote.refresh_settings();
                
                                //  Long-session device-identification
                                var __device_id = $R.saved__get_device_id(),
                                    __os = $R.from_user_agent__get_os(window.navigator.userAgent),
                                    __device_description = '';
                __device_description = 'Google Chrome'   + ' (' + __os + ')'; 
                
                
                
                                //  vars
                                var __user = _params['user'],
                                    __pass = _params['pass']; 
                
                                //  the actual login
                                $R.$remote.loginLongSession(
                                    __user, __pass, __device_id, __device_description,
                                    function ()
                                    {
                                        //  save credentials
                                        $R.credentials__set({
                                            'username': $R.$remote.user__email,
                                            'xAuthToken': $R.$remote.user__authToken
                                        });
                                    },
                    
                                    //  login => fail
                                    function (_failReason) { });
                
                            })();
                        
                            break;
                    } }
                    
            };
        

        $R.$bootstrap.initialize();
        $R.$bootstrap.initializeForQA();
        
        $R.$remote.initialize();

        $R.assure_defaults();

        $R.first__show();
        $R.first__run();
        
        $R.translation__get_items();

    })(window.__readable_by_evernote);
