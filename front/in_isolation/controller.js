$(function () { (function ($R, $$, $)
{
    
//  import js_anywhere
//  ==================
    (function () {
        
        (function () {
            
            //  var
            //  ===
                var _custom_events = false;
            
            //  code
            //  ====
                (function ()
                {
                
                    var _names_to_keys = {},
                        _keys_to_names = {},
                        _names_to_objects = {},
                        _custom_events_list = [
                    
                            ['to-extension--open--settings',                                  'click-111-111-111-111-1-1-1'],
                            ['to-extension--open--settings--theme',                           'click-112-112-112-112-1-1-1'],
                        
                            ['to-extension--open--premium',                                   'click-114-114-114-114-1-1-1'],
                            ['to-extension--open--two-factor-help',                           'click-115-115-115-115-1-1-1'],
                            ['to-extension--open--password-reset',                            'click-116-116-116-116-1-1-1'],
            
                            ['to-extension--open--register--footer',                          'click-117-117-117-117-1-1-1'],
                            ['to-extension--open--register--popup',                           'click-118-118-118-118-1-1-1'],
            
                            /* === */
            
                            ['to-extension--select--theme--theme-1',                          'click-121-121-121-121-1-1-1'],
                            ['to-extension--select--theme--theme-2',                          'click-122-122-122-122-1-1-1'],
                            ['to-extension--select--theme--theme-3',                          'click-123-123-123-123-1-1-1'],
                            ['to-extension--select--theme--custom',                           'click-124-124-124-124-1-1-1'],
            
                            ['to-extension--select--size--small',                             'click-125-125-125-125-1-1-1'],
                            ['to-extension--select--size--medium',                            'click-126-126-126-126-1-1-1'],
                            ['to-extension--select--size--large',                             'click-127-127-127-127-1-1-1'],
            
                            ['to-extension--select--related-notes--just-at-bottom',           'click-128-128-128-128-1-1-1'],
                            ['to-extension--select--related-notes--disabled',                 'click-129-129-129-129-1-1-1'],
            
                            /* === */
                        
                            ['to-extension--track--clip',                                     'click-131-131-131-131-1-1-1'],
                            ['to-extension--track--view',                                     'click-132-132-132-132-1-1-1'],
                            ['to-extension--track--theme-popup',                              'click-133-133-133-133-1-1-1'],
                            ['to-extension--track--settings',                                 'click-134-134-134-134-1-1-1'],
                            ['to-extension--track--register--shown',                          'click-135-135-135-135-1-1-1'],
                            ['to-extension--track--register--complete',                       'click-136-136-136-136-1-1-1'],
            
            
                            ['to-extension--track--first-show--check',                        'click-171-171-171-171-1-1-1'],
                            ['to-extension--track--first-show--mark',                         'click-172-172-172-172-1-1-1'],
            
                            ['to-extension--track--reminder--shown',                          'click-173-173-173-173-1-1-1'],
                            ['to-extension--track--reminder--clicked',                        'click-174-174-174-174-1-1-1'],
                            ['to-extension--track--reminder--closed',                         'click-175-175-175-175-1-1-1'],
            
                            ['to-extension--track--evernote-footer--check',                   'click-176-176-176-176-1-1-1'],
            
                            /* === */
                        
                            ['to-extension--evernote--clip',                                  'click-141-141-141-141-1-1-1'],
                            ['to-extension--evernote--clip-highlight',                        'click-142-142-142-142-1-1-1'],
                            ['to-extension--evernote--clip-filing',                           'click-143-143-143-143-1-1-1'],
            
            
                            ['to-extension--evernote--get-recommendation',                    'click-144-144-144-144-1-1-1'],
                            ['to-extension--evernote--get-filing',                            'click-145-145-145-145-1-1-1'],
                            ['to-extension--evernote--get-filing--refresh',                   'click-146-146-146-146-1-1-1'],
                        
                        
                            ['to-extension--evernote--login--do',                             'click-151-151-151-151-1-1-1'],
                            ['to-extension--evernote--login--do-second-factor',               'click-152-152-152-152-1-1-1'],
                            ['to-extension--evernote--login--switch-to-cn',                   'click-154-154-154-154-1-1-1'],
                            ['to-extension--evernote--login--switch-to-in',                   'click-155-155-155-155-1-1-1'],
                            ['to-extension--evernote--login--now-open',                       'click-156-156-156-156-1-1-1'],
            
                            ['to-extension--evernote--login--do-after-register',              'click-157-157-157-157-1-1-1'],
            
                        
                            /* ========================================================================================== */
                        
                        
                            ['to-browser--evernote--login--show',                             'click-211-211-211-211-1-1-1'],
                            ['to-browser--evernote--login--show--in',                         'click-211-212-212-212-1-1-1'],
                            ['to-browser--evernote--login--show--in-cn',                      'click-211-213-213-213-1-1-1'],
                            ['to-browser--evernote--login--show--cn',                         'click-211-214-214-214-1-1-1'],
                            ['to-browser--evernote--login--show--cn-in',                      'click-211-215-215-215-1-1-1'],
            
                            ['to-browser--evernote--login--successful',                       'click-212-212-212-212-1-1-1'],
                            ['to-browser--evernote--login--now-open',                         'click-213-213-213-213-1-1-1'],
                        
                            /* === */
            
                            ['to-browser--evernote--login--set--in',                          'click-214-214-214-214-1-1-1'],
                            ['to-browser--evernote--login--set--in-cn',                       'click-215-215-215-215-1-1-1'],
                            ['to-browser--evernote--login--set--cn',                          'click-216-216-216-216-1-1-1'],
                            ['to-browser--evernote--login--set--cn-in',                       'click-217-217-217-217-1-1-1'],
            
                            ['to-browser--evernote--login--request-second-factor',            'click-221-221-221-221-1-1-1'],
            
                            ['to-browser--evernote--login--failed',                           'click-222-222-222-222-1-1-1'],
                            ['to-browser--evernote--login--failed--email',                    'click-223-223-223-223-1-1-1'],
                            ['to-browser--evernote--login--failed--password',                 'click-224-224-224-224-1-1-1'],
                            ['to-browser--evernote--login--failed--password-reset',           'click-225-225-225-225-1-1-1'],
            
                            ['to-browser--evernote--login--failed--two-factor--code',         'click-226-226-226-226-1-1-1'],
                            ['to-browser--evernote--login--failed--two-factor--timeout',      'click-227-227-227-227-1-1-1'],
            
                            /* === */
                        
                            ['to-browser--evernote--clip--successful',                        'click-251-251-251-251-1-1-1'],
                            ['to-browser--evernote--clip--failed',                            'click-252-252-252-252-1-1-1'],
            
                            ['to-browser--evernote--clip-highlight--successful',              'click-253-253-253-253-1-1-1'],
                            ['to-browser--evernote--clip-highlight--failed',                  'click-254-254-254-254-1-1-1'],
            
                            ['to-browser--evernote--clip-filing--successful',                 'click-255-255-255-255-1-1-1'],
                            ['to-browser--evernote--clip-filing--failed',                     'click-256-256-256-256-1-1-1'],
            
            
                            ['to-browser--evernote--get-recommendation--successful',          'click-261-261-261-261-1-1-1'],
                            ['to-browser--evernote--get-recommendation--failed',              'click-262-262-262-262-1-1-1'],
            
                            ['to-browser--evernote--get-filing--successful',                  'click-263-263-263-263-1-1-1'],
                            ['to-browser--evernote--get-filing--failed',                      'click-264-264-264-264-1-1-1'],
                        
                            /* === */
                        
                            ['to-browser--show--dialog-first--all-features',                  'click-271-271-271-271-1-1-1'],
                            ['to-browser--show--dialog-first--new-features',                  'click-272-272-272-272-1-1-1'],
                            
                            ['to-browser--show--evernote-footer',                             'click-273-273-273-273-1-1-1']
                        
                        ];
                
                     /* Explanations for some of the to-extension events:
                     // =================================================
                        to-extension--evernote--login--do:
                            triggered by:   frame -- when button is pressed
                            operates in:    background, frame -- gets the email/password from the frame, and performs a background login
                            triggers:       browser...login--successful/failed/failed--email/failed--password/failed--password-reset
            
                        to-extension--evernote--login--do-second-factor:
                            triggered by:   frame -- when button is pressed, in the "enter code" view
                            operates in:    background, frame -- gets the code from the frame, and performs a background completeLogin
                            triggers:       browser...login--successful/failed--second-factor/failed--second-factor-timeout
            
                        to-extension--evernote--login--request-load--from-outside:
                            triggered by:   html -- after clearly has launched; firefox only
                            operates in:    background -- forces the loading of the url into the frame; and then loads everything else too
                        
                        to-extension--evernote--login--switch-to-cn/in:
                            triggered by:   frame -- when user clicks on china/international toggle
                            operates in:    background -- switches the background china-mode on/off
                            triggers:       browser...login--set--in/in-cn/cn/cn-in
                     */   
                
                     /* Explanations for some of the to-browser events:
                     // ===============================================
                        to-browser--evernote--login--show:
                            triggered by:   background -- when it detects that login is needed; should be triggered after login-show--in-frame
                            operates in:    html -- shows the login dialog
            
                        to-browser--evernote--login--show--in-frame:
                            triggered by:   background -- when it detects that login is needed; should be triggered before login-show
                            operates in:    frame -- does stuff inside the login frame; like, for example, clear the errors from last time
            
                        to-browser--evernote--login--request-second-factor:
                            triggered by:   background -- when it detects that second factor is needed
                            operates in:    frame -- does stuff inside the login frame: shows the second-factor view
                            
                        to-browser--evernote--login--set--in/in-cn/cn/cn-in:
                            triggered by:   background -- after a request has been sent from the frame, the background performs switch, and responds with this event
                            operates in:    frame -- switches around the on/off toggles for china/international
                            
                        to-browser--evernote--login--failed/failed--email/failed--password
                            triggered by:   background -- after the login button was pressed in the frame, it sent an event to the background, which tried to login with the supplied details; the background is now responding with this event
                            operates in:    frame -- frame will display the error
            
                        to-browser--evernote--login--failed--password-reset/two-factor
                            triggered by:   background -- after the login button was pressed in the frame, it sent an event to the background, which tried to login with the supplied details; the background is now responding with this event
                            operates in:    html -- display error dialog for password reset
                            
                        to-browser--evernote--login--successful:
                            triggered by:   background; same as above
                            operates in:    html -- will hide the login dialog, and continue performing whatever operation is was trying to do before
                     */
            
                    
                    //  fill in event objects
                    //  =====================
                        for (var i=0,_i=_custom_events_list.length,e=false,k=false; i<_i; i++)
                        {
                            e = _custom_events_list[i];
                            k = e[1].split('-');
                    
                            _names_to_keys[e[0]] = e[1];
                            _keys_to_names[e[1]] = e[0];
                            _names_to_objects[e[0]] = {
                                '_1': k[1],
                                '_2': k[2],
                                '_3': k[3],
                                '_4': k[4],
                                '_5': (k[5] == 1 ? true : false),
                                '_6': (k[6] == 1 ? true : false),
                                '_7': (k[7] == 1 ? true : false)
                            };
                        }
                    
                    
                    //  define _get_gey function
                    //  ========================
                        var _get_key = function (_event)
                        {
                            return ''                           +
                                'click'                         +
                                '-'+_event.screenX              +
                                '-'+_event.screenY              +
                                '-'+_event.clientX              +
                                '-'+_event.clientY              +
                                '-'+(_event.ctrlKey ?   1 : 0)  +
                                '-'+(_event.altKey ?    1 : 0)  +
                                '-'+(_event.shiftKey ?  1 : 0)  +
                            '';
                        };
                
                
                    //  define _dispatch function
                    //  =========================
                        var _dispatch = function (_custom_event_object, _window)
                        {
                            var _d = _window.document,
                                _e = _d.createEvent("MouseEvents");
                    
                            _e.initMouseEvent(
                                "click", true, true, _window, 0, 
                                _custom_event_object['_1'], 
                                _custom_event_object['_2'], 
                                _custom_event_object['_3'], 
                                _custom_event_object['_4'], 
                                _custom_event_object['_5'], 
                                _custom_event_object['_6'], 
                                _custom_event_object['_7'], 
                                false, 0, null);
                    
                            _d.dispatchEvent(_e);
                        };
                
                
                    //  define custom events object
                    //  ===========================
                        _custom_events = {
                            'names_to_keys':    _names_to_keys,
                            'keys_to_names':    _keys_to_names,
                            'names_to_objects': _names_to_objects,
                            
                            'get_key':          _get_key,
                            'dispatch':         _dispatch
                        };
                    
                    
                    //  return
                        return;
                        
                })();
            
            /* =============== */
            $R.custom_events = _custom_events;
            $R.custom_events__dispatchToBackground = function (_name) { $R.custom_events.dispatch($R.custom_events.names_to_objects['to-extension--'+_name], $R.window); };
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
            
            //  get key combo
            //  =============    
                var _get_key_combo_from_event = function (_event)
                {
                    //  _event can be a browser event or a jQuery event
                    
                    var _key_code = 'NONE';
                    switch (true)
                    {
                        case (!!_event.keyCode && (_event.keyCode >= 65 && _event.keyCode <= 90)):
                            _key_code = String.fromCharCode(_event.keyCode).toUpperCase();
                            break;
                        
                        case (_event.keyCode == 27):    _key_code = 'Escape';        break;
                        case (_event.keyCode == 37):    _key_code = 'Left Arrow';    break;
                        case (_event.keyCode == 39):    _key_code = 'Right Arrow';   break;
                        case (_event.keyCode == 38):    _key_code = 'Up Arrow';      break;
                        case (_event.keyCode == 40):    _key_code = 'Down Arrow';    break;
                    }
            
                    var _modifierKeys = (_event.originalEvent ? _event.originalEvent : _event);
                    //  jQuery screws up -- fucks up the metaKey property badly
                    
                    var _key_combo = ''                                 +
                        (_modifierKeys.ctrlKey ?    'Control + ' : '')  +
                        (_modifierKeys.shiftKey ?   'Shift + ' : '')    +
                        (_modifierKeys.altKey ?     'Alt + ' : '')      +
                        (_modifierKeys.metaKey ?    'Command + ' : '')  +
                        _key_code                                       +
                    '';
            
                    if ((_key_code != 'Escape') && (_key_code == _key_combo))
                    {
                        _key_code = 'NONE';
                        _key_combo = 'NONE';
                    }
                    
                    //  return
                    return {
                        '_key_code': _key_code,
                        '_key_combo': _key_combo
                    };
                };
                
            /* =============== */
            $R.get_key_combo_from_event = _get_key_combo_from_event;
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

            //  translated strings may have &stuff; in them
            $R.translate = function (_key) { var _r = $R.translation__items[_key]; return $R.escape_html($R.unescape_html(_r ? _r : _key)); };    
        })();

        (function () {
            
            //  always run detect on url
            //  ========================
                var _always_run_detect_on_url = function (_url)
                {
                    switch (true)
                    {
                        case (/^https:\/\/([^\/]*)mail.google/gi.test(_url)):
                        case (/^https:\/\/([^\/]*)mail.yahoo/gi.test(_url)):
                        case (/^https:\/\/([^\/]*)mail.live/gi.test(_url)):
                            return true;
                            break;
                    }
            
                    return false;
                };
            
            /* =============== */
            $R.always_run_detect_on_url = _always_run_detect_on_url;
        })();

    })();


//  import _js_in/
//  ==============
    (function () {

        
        //  options
        //  =======
            $R.from_background__options = function ()
            {
                $R.options = {};
                for (var _x in $R.default_options)
                {
                    var _value = $R.decode($R.$document.find('#evernote_clearly__serialized__option__'+_x).html());
                    $R.options[_x] = (_value > '' ? _value : $R.default_options[_x]);
                }
            };
        
            
        //  vars
        //  ====
            $R.from_background__vars = function ()
            {
                $R.vars = {};
                for (var _x in $R.default_vars)
                {
                    var _value = $R.decode($R.$document.find('#evernote_clearly__serialized__var__'+_x).html());
                    $R.vars[_x] = (_value > '' ? _value : $R.default_vars[_x]);
                }
            };
            
        
        //  translation
        //  ===========
            $R.from_background__translation = function ()
            {
                //  $R.translation__items is already defined
                for (var _x in $R.translation__items)
                {
                    var _value = $R.decode($R.$document.find('#evernote_clearly__serialized__translation__'+_x).html());
                    if (_value > '') { $R.translation__items[_x] = _value; }
                }
            };
        
    
    })();


//  ==========================================================================================================================

    
//  import this
//  ===========
    (function () {

        
        
        //  init
        //  ====
            $R.cc__highlight__init = function ()
            {
                var _callback = function ()
                {
                    $R.login__requestedFor = 'highlight';
                    $R.cc__reformat__extra.$html.addClass('clipping');
                    $R.custom_events__dispatchToBackground('evernote--clip');
                };
                
                $R.cc__highlight = {
                    'settings': { 
                        'cssPath': $R.paths.front+'the_components/highlight/css/',
                        'elementWhichMustContainAllHighlights': $('#pages').get(0)
                    },
                    'callbacks': {
                        'highlightAdded': _callback,
                        'highlightDeleted': _callback
                    },
                    'debug': true,
                    'window': $R.cc__reformat.iframeWindow,
                    'jQuery': $R.cc__reformat.iframeWindow.jQuery
                };
                $R.cc__highlight = window.initClearlyComponent__highlight($R.cc__highlight);
        
                $R.cc__highlight.insertCSS();
                $R.cc__highlight.addMouseHandlers();
            };
            
            
        //  enable
        //  ======
            $R.cc__highlight__enable = function ()
            {
                $R.highlighting = true;
                $R.cc__highlight.enable();
            };
            
            
        //  disable
        //  =======
            $R.cc__highlight__disable = function ()
            {
                $R.highlighting = false;
                $R.cc__highlight.disable();
            };
            
        
        
        //  ClearlyComponents::Reformat
        //  ===========================
            //  reformat is the first component to be initialized
            //  it has to load another copy of jQuery within itself
            //  we also have to add a lot of other stuff to it (sidebar, dialogs, loaders, etc) and then bind a lot of events
        
        //  init
        //  ====
            $R.cc__reformat__init = function()
            {
                //  more html
                var _inner_ui__basics = '';
                (function ()
                {
                    //  shortcuts
                    var _e = $R.escape_html,
                        _t = function (_k) { return $R.translate('menu__'+_k); },
                        _s = 'sidebar_menu';
                        
                    //  shortcut keys
                    var _s__clip =      (($R.vars['keys_clip'] > '') ?      ' (' + _e($R.vars['keys_clip']) + ')'       : ''),
                        _s__highlight = (($R.vars['keys_highlight'] > '') ? ' (' + _e($R.vars['keys_highlight']) + ')'  : ''),
                    
                        _s__print =     ' ('+(($R.os == 'Mac OS') ? 'Command' : 'Control') + ' P)',
                        _s__close =     ' (Escape'+(($R.vars['keys_activation'] > '') ? ', ' + _e($R.vars['keys_activation']) : '') + ')';
                    
                    //  html
                    var _html__basics = '' +
                        '<div id="cover_everything"></div>' +
                        '<div id="loading"><div id="loading_spinner"></div></div>' +
                        '<div id="sidebar">' +
                            '<div id="[=s]">' +
                                '<a id="[=s]__close"' +                     ' title="' + _t('close__tooltip') +                 _s__close +     '"' + ' href="#"></a>' +
                                '<div id="[=s]__line_above"></div>' +
                                '<a id="[=s]__clip_to_evernote"' +          ' title="' + _t('clip_to_evernote__tooltip') +      _s__clip +      '"' + ' href="#"></a>' +
                                '<a id="[=s]__clipped_to_evernote"' +       ' title="' + _t('clip_to_evernote__tooltip') +      _s__clip +      '"' + ' href="#"></a>' +
                                '<a id="[=s]__clipping_to_evernote"' +      ' title="' + _t('clip_to_evernote__tooltip') +                      '"' + ' href="#"><div id="[=s]__clipping_to_evernote_spinner"></div></a>' +
                                '<a id="[=s]__highlight_to_evernote"' +     ' title="' + _t('highlight_to_evernote__tooltip') + _s__highlight + '"' + ' href="#"></a>' +
                                '<a id="[=s]__highlighting_to_evernote"' +  ' title="' + _t('highlight_to_evernote__tooltip') + _s__highlight + '"' + ' href="#"></a>' +
                                '<a id="[=s]__settings"' +                  ' title="' + _t('settings__tooltip') +                              '"' + ' href="#"></a>' +
                                '<a id="[=s]__settings_showing"' +          ' title="' + _t('settings__tooltip') +                              '"' + ' href="#"></a>' +
                                '<a id="[=s]__print"' +                     ' title="' + _t('print__tooltip') +                 _s__print +     '"' + ' href="#"></a>' +
                                '<div id="[=s]__line_below"></div>' +
                            '</div>' +
                            '<div id="sidebar_dialogs"></div>' +
                        '</div>' +
                    '';
                    
                    //  replace
                    _html__basics = _html__basics.replace(/\[[=][s]\]/gi, _s);
                    
                    _inner_ui__basics = _html__basics;
                })();
            
                $R.cc__reformat = {
                    'callbacks': {
                        'frameCreated': function () { 
                            /* set $ */         //$ = $R.cc__reformat.iframeWindow.jQuery;
                            /* set $('#X') */   $ = function (_x) { return $R.cc__reformat.$iframeDocument.find(_x); };
                            /* add shading */   $R.cc__reformat.iframeDocument.getElementById('background').innerHTML = '<div id="background_shading"></div>';
                            /* get extra */     $R.cc__reformat__get_extra();
                            /* calllback */     $R.launch__after_reformat_is_created(); 
                        }
                    },
                    'settings': {
                    
        
                    
                        'https': ($R.url_protocol == 'https'),
                    
                        'cssPath': $R.paths.front+'the_components/reformat/css/',
                        'pageLabel': function (_nr) { return $R.translate('misc__page').replace('[=page]', _nr); },
                        'linksLabel': $R.translate('misc__links'),
        
                        'onAddPageAttachFootnotesToLinks':      true,
        
                        'onCreateFrameUseThisURLAsTheLocation': $R.paths.front+'in_isolation/reformat.html',
                        'onCreateFrameDoNotInsertCSS':          true,
                        'onCreateFrameUseThisId':               $R.cssIDs.reformat,
                        'onCreateFrameUseThisBaseTimer':        10,
                        'onCreateFrameWaitForTheseWindowVars':  ['jQuery'],     
        
                        'onCreateFrameInjectThisHTMLBefore':    '' +
                            '<div id="curtains"></div>' +
                            '',
        
                        'onCreateFrameInjectThisHTMLAfter':     '' +
                            '<div id="extra__ui__basics">' +
                                _inner_ui__basics +
                            '</div>' +
                            '',
                            
                        'onGetCSSFromOptionsInjectThisCSSAfter': '' +
                        ''
                    },
                    'debug': false,
                    'window': $R.window,        //  original page
                    'jQuery': window.jQuery     //  clearly controller
                };
                $R.cc__reformat = window.initClearlyComponent__reformat($R.cc__reformat);
            };
        
        
        //  get extra
        //  =========
            $R.cc__reformat__get_extra = function ()
            {
                //  find
                var _f = function (_s) { return $R.cc__reformat.$iframeDocument.find(_s); };
                
                //  extra reference -- if we use $, we'll run into problems with the second jQuery also needing the easings; which would make it load slightly slower; which we don't want
                $R.cc__reformat__extra = 
                {
                    '$html':                _f('#html'),
                    '$box':                 _f('#box'),
                    '$background':          _f('#background'),
                    '$backgroundShading':   _f('#background_shading'),
                    '$loading':             _f('#loading'),
                    '$sidebar':             _f('#sidebar'),
                    '$cover_everything':    _f('#cover_everything'),
                    '$dialogsOverlay':      false, //  set in $R.cc__reformat__create_inner_ui
                    '$relatedNotes':        false  //  set in $R.cc__reformat__create_inner_ui
                };
            };
            
        
        //  add later html
        //  ==============
            $R.cc__reformat__create_inner_ui = function ()
            {
                //  later
                (function ()
                {
                    var _html__misc = '' +
                        '<div id="fitts" title="' + $R.translate('menu__fitts__tooltip') + '"></div>' +
                        '<div id="dialogs_overlay"></div>' +
                    
                        '<div id="other_dialogs">' +
                    
                            '<div class="dialog dynamic" id="dialog__eula"><div class="dialog_canvas theFont">' +
                                '<div id="dialog__eula__content">' +
                                    '<div id="dialog__eula_container">' +
                                        '<h1>End User License Agreement</h1>' +
                                            '<p>IMPORTANT NOTICE: THIS IS A LEGAL AGREEMENT BETWEEN EVERNOTE AND THE PARTY THAT DOWNLOADS, INSTALLS AND/OR USES THE SOFTWARE PROVIDED BY EVERNOTE, EACH OF WHOM ACCEPTS THE TERMS OF THIS AGREEMENT FOR HERSELF, HIMSELF OR ITSELF (AS APPLICABLE, "LICENSEE"). IF YOU RESIDE IN THE UNITED STATES OR CANADA, THIS CONTRACT WILL BE WITH EVERNOTE CORPORATION, AND, IF YOU RESIDE OUTSIDE OF THE UNITED STATES AND CANADA, THIS CONTRACT WILL BE WITH EVERNOTE GMBH, A WHOLLY-OWNED SUBSIDIARY OF EVERNOTE CORPORATION. (EVERNOTE CORPORATION AND EVERNOTE GMBH, AS APPLICABLE, MAY BE REFERRED TO IN THIS AGREEMENT AS "EVERNOTE"). EVERNOTE SOFTWARE IS LICENSED AND NOT SOLD AND THE RIGHTS TO USE THE SOFTWARE ARE SET FORTH IN THIS AGREEMENT. AS DESCRIBED BELOW, USING THE SOFTWARE ALSO OPERATES AS YOUR CONSENT TO THE TRANSMISSION OF CERTAIN INFORMATION AND DATA DURING ACTIVATION, USE, OBTAINING SOFTWARE UPDATES AND FOR INTERNET-BASED SERVICES.</p>' +
                                            '<p>CAREFULLY READ THE FOLLOWING TERMS APPLICABLE TO THE LICENSE OF THE EVERNOTE APPLICATION SOFTWARE AND ANY OTHER SOFTWARE PROVIDED TO LICENSEE BY EVERNOTE PURSUANT TO WARRANTY, MAINTENANCE AND SUPPORT OR OTHERWISE, ALL OF WHICH ARE INCLUDED WITHIN THE DEFINITION OF "SOFTWARE" BELOW. THESE TERMS AND CONDITIONS SHALL CONSTITUTE A LEGALLY BINDING AGREEMENT BY AND BETWEEN EVERNOTE AND LICENSEE. LICENSEE\'S ACCEPTANCE ACCORDING TO THE TERMS HEREIN AND/OR LICENSEE\'S INSTALLATION, REPRODUCTION OR USE OF THE SOFTWARE ALSO SIGNIFIES LICENSEE\'S AGREEMENT TO BE LEGALLY BOUND BY THESE TERMS AND CONDITIONS.</p>' +
                                            '<p>PLEASE NOTE THAT YOU NEED NOT AGREE TO BE BOUND BY THIS AGREEMENT. HOWEVER, IF YOU DO NOT AGREE TO BE LEGALLY BOUND BY THE TERMS AND CONDITIONS SET FORTH HEREIN, YOU ARE NOT PERMITTED TO INSTALL, COPY, USE OR TRANSFER THE SOFTWARE AND SHALL NOT HAVE ANY RIGHTS HEREUNDER AS A "LICENSEE." IF YOU DO NOT AGREE TO BE BOUND BY THIS AGREEMENT, YOU SHOULD PROMPTLY UNINSTALL THE SOFTWARE. NO ADDITIONAL OR CONTRARY TERMS TO THIS AGREEMENT SHALL APPLY UNLESS AGREED TO IN A WRITTEN AGREEMENT BETWEEN LICENSEE AND EVERNOTE.</p>' +
                                        '<h2>1. DEFINITIONS.</h2>' +
                                            '<p>For the purposes of this Agreement, the following definitions shall apply:</p>' +
                                            '<p>1.1 "Derivative Work" means a work that is based upon or derived from the Software, such as a revision, modification, translation, abridgment, condensation or expansion, or any form in which Software may be recast, transformed or adapted, which, if prepared without the express written consent of Evernote, would constitute copyright infringement.</p>' +
                                            '<p>1.2 "Evernote Service" means the Evernote software service that enables Registered Users to store, organize, search and share text, documents, images and sounds, and upload and sync the same through one or more Certified Device(s).</p>' +
                                            '<p>1.3 "Evernote Site" means the Internet site(s) published by Evernote and applicable to the Software and/or Evernote Service, as they may change from time to time, including, without limitation, the site which is currently located at www.evernote.com.</p>' +
                                            '<p>1.4 "Evernote Terms of Service" means the then applicable terms and conditions governing the use of the Evernote Service, as published at the Evernote Site.</p>' +
                                            '<p>1.5 "Individual Computer" means any general-purpose computing device (desktop, laptop, netbook, tablet, smart phone) that is operated by one human user at a time for that user\'s benefit (e.g., not as a server or in any partition of a computer system). Licensee may access the Software operating on an Individual Computer through a remote device without any additional license.</p>' +
                                            '<p>1.6 "Object Code" means the form of computer program or portion thereof that can be executed by a computer without further modification.</p>' +
                                            '<p>1.7 "Registered User" means any individual who has registered at the Evernote Site for either a premium account or free account to use the Evernote Service.</p>' +
                                            '<p>1.8 "Software" means, collectively, (i) that version of the Evernote application software reflected in text accessed within the Evernote application software, (ii) all updates, upgrades, patches, bug fixes and modifications thereto that may be released by Evernote and made available to Licensee from time to time, if any, in Object Code form and (iii) all written information and materials provided to Licensee with and regarding the Evernote application software, including, without limitation, in the "About" tab or other settings information areas within the particular application (which information may be referred to herein as "Documentation").</p>' +
                                            '<p>1.9 "Source Code" means the human-readable form of the code and related system documentation for the Software, including all comments and any procedural code such as job control language.</p>' +
                                            '<p>1.10 "Supported Device" means the type of Individual Computer (e.g., iPad) or the Individual Computer running a certain operating system (e.g., Windows) for which the Software is designed and offered for use. Evernote identifies the Supported Device for the Software by name in connection with the link through which the Software is made available for download or on the written software application description in the materials provided by Evernote with the Software.</p>' +
                                        '<h2>2. SOFTWARE LICENSES; GENERAL RESTRICTIONS.</h2>' +
                                            '<h3>2.1 License Grants.</h3>' +
                                                '<p>(a) Subject to the terms and conditions contained herein, Licensee is hereby granted, and Licensee accepts, a non-exclusive, non-transferable, fully-paid license (i) to install and use the Software on one or more Supported Devices owned or controlled by Licensee and (ii) during such period of time that Licensee is a Registered User, use the Software to enable interaction between the Evernote Service and the Supported Device on which the Software is installed, subject to the Evernote Terms of Service.</p>' +
                                                '<p>(b) Subject to the terms and conditions contained herein, Evernote hereby grants Licensee a non-exclusive, non-transferable license to make a reasonable number of copies of the Software without modification for Licensee\'s personal use. Licensee agrees that this License Agreement applies to all such copies.</p>' +
                                                '<p>(c) Certain computer software components licensed by one or more third-parties may be provided with the Software. Evernote grants Licensee a non-exclusive, non-transferable, fully-paid license to use one copy of any third- party software provided by Evernote with the Software ("Third-Party Software") on the terms herein and such terms (if any) as may be set forth in the Documentation (including any additional terms therein), provided that: TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL THIRD-PARTY SOFTWARE IS PROVIDED "AS IS" AND WITH ALL FAULTS. THE PROVISIONS REGARDING DISCLAIMER OF WARRANTIES, EXCLUSION OF CONSEQUENTIAL AND CERTAIN OTHER DAMAGES AND LIMITATION OF LIABILITY IN SECTIONS 6 AND 7 BELOW SHALL APPLY TO SUCH THIRD-PARTY SOFTWARE.</p>' +
                                            '<h3>2.2 General License Restrictions.</h3>' +
                                                '<p>Licensee shall only use the Software for Licensee\'s personal use on a Supported Device and, in connection with the Evernote Service, as permitted by the Evernote Terms of Service. Licensee shall not cause or permit the renting, leasing, sublicensing or selling, or any dissemination or other distribution of copies of, the Software by any means or in any form to any person, and shall not permit others to use the Software via a timesharing, outsourcing, service bureau, application service provider, managed service provider or similar arrangement. Licensee may not use the Software in any way that is intended to circumvent the Evernote Terms of Service or to otherwise violate any law or regulation. Licensee shall not use or distribute as a separate or stand alone executable file, product or server any Third-Party Software or use such Third-Party Software except as a component part of the Software. Licensee agrees not to, directly or indirectly, take any action to modify, translate, decompile, reverse engineer, reverse compile, convert to another programming language or otherwise attempt to derive Source Code from the Software or any internal data files generated by the Software, or perform any similar type of operation on any software or firmware acquired under this Agreement, in any fashion or for any purpose whatsoever, except to the extent the foregoing restriction is expressly prohibited by applicable law notwithstanding this limitation. Licensee also acknowledges and agrees any such works are Derivative Works and acknowledges that Evernote retains ownership of the copyright in any Derivative Works and is not granting any right to make, use, publish or distribute any Derivative Works of the Software. Licensee shall not modify or delete any Evernote or thirdparty proprietary rights notices appearing in the Software, or any Third-Party Software, and will implement any changes to such notices, if feasible, that Evernote may reasonably request. Licensee acknowledges and agrees that the technology manifested in the operation of the Software constitutes the valuable trade secrets and know-how of Evernote and its suppliers and, to the extent Licensee discovers any such trade secrets, Licensee will not disclose them to any third party. Licensee acknowledges and agrees that this Agreement in no way shall be construed to provide to Licensee any express or implied license to use or otherwise exploit the Software or any portion thereof except as specifically set forth in this Agreement, and all rights not expressly granted to Licensee are reserved by Evernote. Licensee has no right to transfer any interest in or to any Software, except as permitted by the express terms in this Agreement. The license granted herein is neither contingent on the delivery of any future functionality or features nor dependent on any oral or written public comments made by Evernote regarding future functionality or features.</p>' +
                                        '<h2>3. OWNERSHIP OF SOFTWARE.</h2>' +
                                            '<p>Evernote\'s ownership interests in the Software are protected by United States and other applicable copyright, patent and other laws and international treaty provisions. Except for the limited license rights specifically granted to Licensee in this Agreement, all rights, title and interests, including without limitation intellectual property rights, in and to the Software, including all Derivative Works thereof, (and all copies thereof and related materials that are produced or shipped to Licensee under this Agreement), belong to and shall be retained by Evernote or its suppliers, as applicable. Licensee acknowledges that the development of the Software is an ongoing process and that Licensee and other licensees of the Software benefit from the improvements resulting from such ongoing development. In order to facilitate such ongoing development, Licensee may provide certain suggestions, documentation, materials and other data to Evernote regarding the use, improvement or applications of the Software (the "Contributed Ideas"), and Licensee hereby acknowledges and agrees that all Contributed Ideas may be used by Evernote in the development of the Software and/or related products and services. Unless specifically provided in a writing signed by Evernote and Licensee and specifically relating to the disclosure of any Contributed Ideas, and notwithstanding any provision in this Agreement to the contrary, Licensee hereby grants to Evernote the irrevocable, perpetual, nonexclusive, worldwide, royalty-free right and license to disclose, use and incorporate the Contributed Ideas in connection with the development of the Software and/or related products and services, and the demonstration, display, license, reproduction, modification and distribution and sale of the Software and/or related products and services, without any obligation to provide any accounting or other reporting.</p>' +
                                        '<h2>4. SOFTWARE SUPPORT; INTERACTION WITH EVERNOTE.</h2>' +
                                            '<p>4.1 Support of Licensee. During the term of this Agreement, Evernote shall use its commercially reasonable efforts to provide technical support of the Software to Licensee according to its then applicable support policies. Such technical support shall be available by email communication in the English language, and any other language that may be available from time to time, during Evernote\'s regular business hours, subject to further restrictions, which may be set forth at the Evernote Site or otherwise published by Evernote and provided or made available to Licensee.</p>' +
                                            '<p>4.2 Information Sharing and Interactions. During installation of the Software and from time to time thereafter when Licensee uses the Software, the Software will send information about the Software and the Individual Computer on which the Software is installed to Evernote. This information includes the version of the Software, the language of the Software (e.g., English, Japanese, etc.), the Internet protocol address of the Individual Computer and the Individual Computer\'s hardware configuration. Evernote does not use this information to identify personal information regarding Licensee. Evernote does use this information to ensure that Licensee is operating the most current version of the Software and, if there is a newer release of the Software, enable Licensee to download and install the current version appropriate for the Individual Computer. Depending upon the settings in the Software, updates to the Software may be installed automatically without Licensee\'s separate consent. In addition, Evernote will use the information provided to Evernote to enable interaction of the Individual Computer with the Evernote Service, if Licensee is a Registered User. Licensee may customize the interactions with Evernote through the settings found within the Software to limit or, in certain cases, eliminate such interactions. Evernote will use digital certificates to confirm Licensee\'s identity for the purpose of enabling standard encryption of content transmitted between Licensee\'s Individual Computer and the Evernote Service. In an effort to protect the security of such transmissions, Licensee cannot disable the use of such digital certificates in connection with the use of the Evernote Service. By using the Software, Licensee consents to the sharing of the information and interactions described herein and, by using the Software with the Evernote Service, Licensee also consents to the use of information described in the then current Evernote Privacy Policy published at the Evernote Site.</p>' +
                                        '<h2>5. TERM AND TERMINATION.</h2>' +
                                            '<p>This Agreement shall commence on the earlier date of delivery or download of the Software, shall be confirmed upon and by the installation of the Software on any computer device and shall continue for so long as Licensee complies with the terms herein, subject to termination or expiration in accordance with the terms provided herein. This Agreement shall automatically terminate, without notice, upon any failure by Licensee to comply with the terms of this Agreement. Upon the termination of this Agreement, all licenses and other rights granted to Licensee hereunder shall immediately terminate. Notwithstanding any termination of this Agreement, the provisions of Sections 3 (Ownership of Software), 6.2 (Disclaimer of Warranties), 7 (Limitations on Liability), 11 (General Provisions) and this Section 5 shall survive and continue to be legally binding upon Licensee and Evernote.</p>' +
                                        '<h2>6. SOFTWARE WARRANTY AND DISCLAIMER OF WARRANTIES; SOFTWARE WARRANTY REMEDY.</h2>' +
                                            '<h3>6.1 Limited Warranty.</h3>' +
                                                '<p>Evernote hereby warrants to Licensee that the Software will perform substantially in accordance with the functional description applicable thereto at the Evernote Site if used in accordance with the terms of this Agreement and any applicable directions or requirements in the Documentation. The foregoing warranty is extended to the initial Licensee only, is not transferable and shall be in effect for thirty (30) days immediately following Licensee\'s receipt of the Software (the "Software Warranty Period"). Licensee\'s sole and exclusive remedy and the entire liability of Evernote and its suppliers and licensors for any breach of this limited warranty will be, at Evernote\'s option, repair or replacement of the Software, if such breach is reported prior to the expiration of the Warranty Period to Evernote or the Evernote authorized distributor that supplied the Software to Licensee (the "Software Warranty Remedy"). Evernote may require that Licensee return or certify the destruction of all copies of the Software to Evernote or to the authorized distributor in order to receive the designated remedy hereunder. Any replacement Software provided pursuant to this Section 6.1 will be covered by the warranty in this Section 6.1 for the remainder of the original Software Warranty Period or for 30 days from the date on which Licensee receives such repaired or replacement Software, whichever is longer.</p>' +
                                            '<h3>6.2 Disclaimer of Warranties.</h3>' +
                                                '<p>(a) EXCEPT AS EXPRESSLY PROVIDED IN SECTION 6.1, THE SOFTWARE IS BEING PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND AND EVERNOTE HEREBY DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, ORAL OR WRITTEN, WITH RESPECT TO THE SOFTWARE, INCLUDING, WITHOUT LIMITATION, ANY AND ALL IMPLIED WARRANTIES AS TO THE CONDITION, NONINFRINGEMENT, MERCHANTABILITY, DESIGN, OPERATION OR FITNESS FOR ANY PARTICULAR PURPOSE. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY EVERNOTE, ITS RESELLERS AND/OR ITS OR THEIR AGENTS OR EMPLOYEES, SHALL CREATE A WARRANTY OR IN ANY WAY INCREASE OR MODIFY THE SCOPE OF THE WARRANTIES EXPRESSLY SET FORTH HEREIN. If Licensee\'s legal jurisdiction provides that a certain implied warranty may not be disclaimed, such implied warranty shall only apply to defects discovered during the period of the express Software Warranty Period provided herein. There is no implied warranty for defects discovered after the expiration of such Software Warranty Period. Some legal jurisdictions do not allow limitations on how long an implied warranty lasts, so these limitations may not apply to Licensee.</p>' +
                                                '<p>(b) EXCEPT AS EXPRESSLY PROVIDED IN SECTION 6.1, EVERNOTE DOES NOT WARRANT THAT THE SOFTWARE WILL MEET ALL REQUIREMENTS OF LICENSEE, OR THAT THE OPERATION OF THE SOFTWARE WILL BE UNINTERRUPTED OR ERROR FREE, OR THAT ALL SOFTWARE DEFECTS WILL BE CORRECTED. FURTHER, EVERNOTE IS NOT RESPONSIBLE FOR ANY DEFECT OR ERROR RESULTING FROM: (I) THE MODIFICATION, MISUSE OR DAMAGE OF THE SOFTWARE BY PARTIES OTHER THAN EVERNOTE OR PARTIES PERFORMING AS A CONTRACTOR TO, AND AT THE DIRECTION OF, EVERNOTE, (II) LICENSEE\'S FAILURE TO IMPLEMENT ALL BUG FIXES OR OTHER DEFECT CORRECTIONS WHICH ARE MADE AVAILABLE BY EVERNOTE, (III) USE OF THE SOFTWARE IN A MANNER INCONSISTENT WITH THE DIRECTIONS PROVIDED IN THE DOCUMENTATION OR AS PERMITTED BY THIS AGREEMENT, (IV) ANY COMPUTER VIRUS OR (V) ANY DEFECT IN OR FAILURE OF ANY THIRD PARTY\'S INDIVIDUAL COMPUTER, EQUIPMENT, NETWORK OR SOFTWARE, OR FOR ANY USER ERROR. EVERNOTE DOES NOT WARRANT AND SHALL HAVE NO LIABILITY WITH RESPECT TO NON-EVERNOTE PRODUCTS OR SERVICES INCLUDING, WITHOUT LIMITATION, THIRD-PARTY SOFTWARE OR HARDWARE, INTERNET CONNECTIONS OR CONNECTIVITY OR COMPUTER NETWORKS.</p>' +
                                        '<h2>7. LIMITATIONS ON LIABILITY.</h2>' +
                                            '<h3>7.1 Consequential Damages.</h3>' +
                                                '<p>IN NO EVENT SHALL EVERNOTE BE LIABLE TO LICENSEE FOR ANY LOSS OF OR DAMAGE TO DATA OR OTHER PERSONAL OR BUSINESS INFORMATION, LOST PROFITS OR USE OF THE SOFTWARE, OR FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING THE INSTALLATION, USE OR PERFORMANCE, OR INABILITY TO USE, THE SOFTWARE, EVEN IF EVERNOTE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>' +
                                            '<h3>7.2 Limitation.</h3>' +
                                                '<p>EVERNOTE PROVIDES THE SOFTWARE AT NO CHARGE TO LICENSEE. IN CONSIDERATION FOR, AND AS A FUNDAMENTAL AND EXPRESS CONDITION OF ENABLING USE OF THE SOFTWARE WITHOUT CHARGE, AND NOTWITHSTANDING ANY PROVISION IN THIS AGREEMENT TO THE CONTRARY, EVERNOTE SHALL NOT HAVE ANY LIABILITY FOR ANY MATTER ARISING OUT OF THE SUBJECT MATTER OF THIS AGREEMENT, WHETHER IN CONTRACT, TORT OR OTHERWISE, EXCEPT THE SOFTWARE WARRANTY REMEDY. THE LIMITATIONS HEREIN SHALL APPLY EVEN IF THE SOFTWARE WARRANTY REMEDY DOES NOT FULLY COMPENSATE LICENSEE FOR ANY OR ALL LOSSES, OR IF EVERNOTE KNEW OR SHOULD HAVE KNOWN ABOUT THE POSSIBILITY OF CONSEQUENTIAL DAMAGES. SOME LEGAL JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO LICENSEE IF LICENSEE RESIDES IN CERTAIN JURISDICTIONS.</p>' +
                                        '<h2>8. COMPLIANCE WITH EXPORT LAWS.</h2>' +
                                            '<p>Licensee acknowledges that the Software is subject to laws and regulations of the United States restricting the export thereof to foreign jurisdictions and agrees to comply with all applicable United States and foreign international laws, including, without limitation, the rules and regulations promulgated from time to time by the Bureau of Export Administration, United States Department of Commerce. Without limiting the foregoing, Licensee shall not download, and if downloaded shall not install or shall immediately uninstall and destroy, the Software if Licensee\'s download, installation or use of the Software is prohibited under applicable laws. By installing or using the Software, Licensee agrees to the foregoing and certifies that it is not located in, under the control of, or a national or resident of any country or on any list of countries to which the United States has embargoed goods or on the United States Treasury Department\'s list of Specially Designated Nations or the United States Commerce Department\'s Table of Denial Orders. Licensee shall not export, re-export, transfer or divert directly or indirectly, the Software, Documentation or other information or materials provided hereunder, or the output thereof, to any restricted place or person for which the United States or any other relevant jurisdiction requires any export license or other governmental approval at the time of export without first obtaining such license or approval. Evernote has no responsibility for compliance with such laws and regulations by Licensee. Licensee hereby agrees to indemnify and hold harmless Evernote from and against all claims, losses, damages, liabilities, costs and expenses, including reasonable attorneys\' fees, to the extent such claims arise out of any breach of this Section 8.</p>' +
                                        '<h2>9. HIGH RISK ACTIVITIES.</h2>' +
                                            '<p>The Software is not fault-tolerant for, and is not designed or intended for use in, hazardous environments requiring fail-safe performance, including, without limitation, in the operation of nuclear facilities, aircraft navigation or communication systems, air traffic control, weapons systems, direct life-support machines or any other application in which the failure of the Software could lead directly to death, personal injury or severe physical or property damage (collectively, "High Risk Activities"). Evernote expressly disclaims any express or implied warranty of fitness for High Risk Activities.</p>' +
                                        '<h2>10. UNITED STATES GOVERNMENT.</h2>' +
                                            '<p>The Software and Documentation are "commercial computer software" and "commercial computer software documentation," respectively, pursuant to DFAR Section 227.7202 and FAR Section 12.212, as applicable. Any use, modification, reproduction, release, performance, display or disclosure of the Software by the United States Government shall be governed solely by the terms of this Agreement, except to the extent expressly permitted by the terms of this Agreement.</p>' +
                                        '<h2>11. GENERAL PROVISIONS.</h2>' +
                                            '<h3>11.1 Entire Agreement; Amendment.</h3>' +
                                                '<p>This Agreement constitutes the entire agreement with regard to the subject matter hereof. No waiver, consent, modification or change of terms of this Agreement shall bind any party unless in writing signed by such party, and then such waiver, consent, modification or change shall be effective only in the specific instance and for the specific purpose given.</p>' +
                                            '<h3>11.2 Relationship.</h3>' +
                                                '<p>No agency, partnership, joint venture or employment is created between the parties hereto as a result of this Agreement. Neither party is authorized to create any obligation, expressed or implied, on behalf of the other party, or to exercise any control over the other party\'s methods of operation, except as specifically provided herein.</p>' +
                                            '<h3>11.3 Governing Law.</h3>' +
                                                '<p>This Agreement shall be governed by and construed in accordance with the laws of the State of California, United States of America, without regard to its choice of law provisions, and shall not be governed by the provisions of the Convention on Contracts for the International Sale of Goods. If you are provided a translation of this Agreement in a language other than English, such translation is offered as a convenience and, if there is any conflict between such translation and the English language version, the English version of this Agreement shall govern, to the extent not expressly prohibited by the law in your jurisdiction. If you have not received the English version of this Agreement, you may find it at the Evernote Corporation web site (www.evernote.com) or by contacting Evernote and requesting a copy.</p>' +
                                            '<h3>11.4 Waiver.</h3>' +
                                                '<p>The waiver by any party hereto of a breach or a default of any provision of this Agreement by another party shall not be construed as a waiver of any succeeding breach of the same or any other provision, nor shall any delay or omission on the part of either party to exercise or avail itself of any right, power or privilege that it has, or may have hereunder, operate as a waiver of any right, power or privilege by such party.</p>' +
                                            '<h3>11.5 Headings.</h3>' +
                                                '<p>Captions and headings contained in this Agreement have been included for ease of reference and convenience and shall not be considered in interpreting or construing this Agreement.</p>' +
                                            '<h3>11.6 Assignment; Successors.</h3>' +
                                                '<p>The terms and conditions of this Agreement shall inure to the benefit of and be enforceable by the parties hereto and their permitted successors and assigns; provided, that the only permitted successor or assignee shall be a party that acquires all or substantially all of the business and assets of Evernote, whether by merger, sale of assets or otherwise by operation of law. Licensee shall not assign this Agreement or any right, interest or obligation under this Agreement, or in or relating to the Software. Any attempted assignment or delegation in contravention of this provision shall be void and ineffective.</p>' +
                                            '<h3>11.7 Notices.</h3>' +
                                                '<p>Any notice or communication from one party to the other required or permitted to be given hereunder shall be in writing and either personally delivered, sent by postal service or sent via courier (with evidence of delivery in any case). All notices shall be in English and shall be effective upon actual receipt, irrespective of the date appearing thereon. Unless otherwise requested, all notices to Evernote shall be to the attention of "Compliance."</p>' +
                                            '<h3>11.8 Contact.</h3>' +
                                                '<p>If you have any questions concerning these terms and conditions, you may do so at the following address:</p>' +
                                                '<table cellspacing="0" cellpadding="5" border="1">' +
                                                    '<tr>' +
                                                        '<th>&nbsp;</th>' +
                                                        '<th>In the USA or Canada</th>' +
                                                        '<th>Outside the USA and Canada</th>' +
                                                    '</tr>' +
                                                    '<tr>' +
                                                        '<th>Mail:</th>' +
                                                        '<td>Evernote Corporation<br />305 Walnut Street<br />Redwood City, CA 94065<br />Attn: General Counsel</td>' +
                                                        '<td>Evernote GmbH<br />Joseffstrasse 59<br />8005, Zurich, Switzerland<br />Attn: Legal Notice</td>' +
                                                    '</tr>' +
                                                    '<tr>' +
                                                        '<th>Email:</th>' +
                                                        '<td>legalnotice@evernote.com</td>' +
                                                        '<td>legalnotice@evernote.com</td>' +
                                                    '</tr>' +
                                                    '<tr>' +
                                                        '<th>Phone:</th>' +
                                                        '<td>650.41.NOTES (650.416.6837)</td>' +
                                                        '<td>+1.650.41.NOTES (650.416.6837)</td>' +
                                                    '</tr>' +
                                                '</table>' +
                    
                                                '<p>If you would like to contact Evernote for any other reason relating to use of the Software, you may do so at this address: us-support@evernote.com.</p>' +
                                   '</div>' +
                                   '<div class="dialog_close" id="dialog__eula__close2_container"><a href="#" class="dialogButton theFont">' + $R.translate('features__close2') + '</a></div>' +
                               '</div>' +
                               '<a class="dialog_close" href="#"></a>' +
                            '<div class="dialog_bottom"></div></div></div>' +
                    
                            '<div class="dialog dynamic" id="dialog__features"><div class="dialog_canvas theFont">' +
                               '<div id="dialog__features__content">' +
                    
                                   '<div class="features_title" id="dialog__features__title__all">' + $R.translate('features__title__all') + '</div>' +
                                   '<div class="features_title" id="dialog__features__title__new">' + $R.translate('features__title__new') + '</div>' +
                                   '<table id="dialog__features__table" cellspacing="0" cellpadding="0" border="0">' +
                                       '<tr id="dialog__features__clipping">' +
                                           '<td class="image"><div class="feature_image"></div></td>' +
                                           '<td class="text">' +
                                               '<div class="feature_title">' + $R.translate('features__clipping__title') + '</div>' +
                                               '<div class="feature_text">' + $R.translate('features__clipping__text') + '</div>' +
                                          '</td>' +
                                       '</tr>' +
                                       '<tr id="dialog__features__highlighting">' +
                                           '<td class="image"><div class="feature_image"></div></td>' +
                                           '<td class="text">' +
                                               '<div class="feature_title">' + $R.translate('features__highlighting__title') + '</div>' +
                                               '<div class="feature_text">' + $R.translate('features__highlighting__text') + '</div>' +
                                          '</td>' +
                                       '</tr>' +
                                       '<tr id="dialog__features__related_notes">' +
                                           '<td class="image"><div class="feature_image"></div></td>' +
                                           '<td class="text">' +
                                               '<div class="feature_title">' + $R.translate('features__related_notes__title') + '</div>' +
                                             '<div class="feature_text">' + $R.translate('features__related_notes__text') + '</div>' +
                                           '</td>' +
                                       '</tr>' +
                                       '<tr id="dialog__features__smart_filing">' +
                                           '<td class="image"><div class="feature_image"></div></td>' +
                                           '<td class="text">' +
                                               '<div class="feature_title">' + $R.translate('features__smart_filing__title') + '</div>' +
                                               '<div class="feature_text">' + $R.translate('features__smart_filing__text') + '</div>' +
                                           '</td>' +
                                       '</tr>' +
                                   '</table>' +
                                   '<div id="dialog__features__eula_notice">' + $R.translate('features__eula_notice').replace('[=eula]', '<a href="#">'+$R.translate('features__eula')+'</a>') + '</div>' +
                                   '<div class="dialog_close" id="dialog__features__close2_container"><a href="#" class="dialogButton theFont">' + $R.translate('features__close2') + '</a></div>' +
                    
                               '</div>' +
                               '<a class="dialog_close" href="#"></a>' +
                            '<div class="dialog_bottom"></div></div></div>' +
                            
                        '</div>' +
                    '';
                    
                    //  create
                    var _div = $R.cc__reformat.iframeDocument.createElement('div');
                        _div.setAttribute('id', 'extra__ui');
                        _div.innerHTML = _html__misc;
                        
                    //  append
                    $R.cc__reformat.iframeDocument.getElementById('body').appendChild(_div);
        
                    //  add to extra
                    $R.cc__reformat__extra.$dialogsOverlay = $('#dialogs_overlay');
                })();
                
                //  curtains
                (function ()
                {
                    var _html__curtains = '' +
                        ($R.debug ? '<div id="curtain__debug" class="curtain">' +
                            '<div class="setBoxWidth"><div class="setBoxWidthInner">' +
                                '<div class="curtainCanvas">' +
                                    '<table id="debugOutput"></table>' +
                                '</div>' +
                            '</div></div>' +
                            '<div class="curtainShading"></div>' +
                            '<a href="#" class="curtainCloseButton"></a>' +
                        '</div>' : '') +
                    
                        '<div id="curtain__tips" class="curtain">' +
                            '<div class="setBoxWidth"><div class="setBoxWidthInner">' +
                                '<div class="curtainCanvas">' +
                                    '<div id="curtain__tips__logo"></div>' +
                                    '<div id="curtain__tips__heading">' + $R.translate('blank_error__heading') + '</div>' +
                                    '<div id="curtain__tips__body">' + $R.translate('blank_error__body') + '</div>' +
                                '</div>' +
                            '</div></div>' +
                            '<div class="curtainShading"></div>' +
                            '<a href="#" class="curtainCloseButton"></a>' +
                        '</div>' +
                    
                        '<div id="curtain__rtl" class="curtain">' +
                            '<div class="setBoxWidth"><div class="setBoxWidthInner">' +
                                '<div class="curtainCanvas">' +
                                    $R.translate('rtl__main__label') +
                                    '<input  id="curtain__rtl__radio__ltr" type="radio" name="curtain__rtl__radio_input" checked="checked"/>' +
                                    '<label for="curtain__rtl__radio__ltr">' + $R.translate('rtl__ltr__label') + '</label>' +
                                    '<input  id="curtain__rtl__radio__rtl" type="radio" name="curtain__rtl__radio_input"/>' +
                                    '<label for="curtain__rtl__radio__rtl">' + $R.translate('rtl__rtl__label') + '</label>' +
                                '</div>' +
                            '</div></div>' +
                            '<div class="curtainShading"></div>' +
                            '<a href="#" class="curtainCloseButton"></a>' +
                        '</div>' +
                    '';
                    
                    //  append
                    $R.cc__reformat.iframeDocument.getElementById('curtains').innerHTML = _html__curtains;
                })();
                
                //  sidebar dialogs
                (function ()
                {
                    var _html__sidebar_dialogs = '' +
                    
                    //    '<div class="dialog" id="dialog__clip__info"><div class="dialog_canvas theFont">' +
                    //        '<div id="filingInfo_injected"></div>' +
                    //        '<div id="filingInfo_notebook"></div>' +
                    //        '<div id="filingInfo_notebook_default">' + $R.translate('filing_info__default_notebook') + '</div>' +
                    //        '<div id="filingInfo_tags">' + /* <span>tag</span> */ '</div>' +
                    
                    //        '<div id="filingInfo_sentence">' + $R.translate('filing_info__sentence') + '</div>' +
                    //        '<div id="filingInfo_sentence_no_tags">' + $R.translate('filing_info__sentence_no_tags') + '</div>' +
                    //        '<div id="filingInfo_sentence_and">' + $R.translate('filing_info__sentence_and') + '</div>' +
                    
                    //        '<div id="filingInfo_sentence_show"></div>' +
                    
                    //        '<div id="filingInfo_links">' +
                    //            '<a id="filingInfo_edit" class="dialogButton" href="#url-edit" target="_blank">'+ $R.translate('filing_info__edit') +'</a>' +
                    //        '</div>' +
                    //    '</div></div>' +
                    
                        '<div class="dialog" id="dialog__clip__filing"><div class="dialog_canvas theFont"><div id="clip__filing" class="not_injected__filing not_injected__clip_info">' +
                            
                            '<div id="clip__filing__dropdown_overlay"></div>' +
                            '<div id="clip__filing__loading_overlay"></div>' +
                    
                            '<div id="filing__hidden">' +
                                '<div id="filing__injected"></div>' +                   // yup
                    
                                '<div id="filing__clip_info">' +
                                    '<div id="filing__clip_info__injected"></div>' +    // yup
                                    '<div id="filing__clip_info__title"></div>' +       // [=note-title]
                                    '<div id="filing__clip_info__url"></div>' +         // [=note-url] -- when creating a link element with this URL, if that link has target="_blank", remove the target if the url matches ^evernote://
                                    '<div id="filing__clip_info__notebook_id"></div>' + // [=notebook-id]
                                    '<div id="filing__clip_info__tag_names"></div>' +   // <span>[tag-name]</span>
                                '</div>' +
                    
                                '<div id="filing__tags__list__personal"></div>' +       // <div>[tag-name]</div>
                                '<div id="filing__tags__list__business"></div>' +       // <div>[tag-name]</div>
                            '</div>' +
                            
                            //  ====
                            
                            '<div id="filing__title__container"><a id="filing__title">' +
                                '<span id="filing__title__clipped">' + $R.translate('filing_info__clipped') + '</span>&nbsp;' +
                                '<span id="filing__title__caption"></span>' +
                            '</a></div>' +
                    
                            '<div id="filing__separator"></div>' +
                    
                            //  ====
                    
                            '<div id="filing__notebook">' +
                                '<span id="filing__notebook__overlay"></span>' +
                                '<span id="filing__notebook__id"></span>' +
                                '<div id="filing__notebook__name"></div>' +
                            '</div>' +
                    
                            '<div id="filing__notebooks__dropdown" class="list_container show_list">' +
                                '<div id="filing__notebooks__find" class="list"></div>' +
                                '<div id="filing__notebooks__list" class="list"></div>' + // <div id="filing__notebooks__list__selected(_alpha)" n_id="[notebook-id]" class="notebook (personal|business|shared) no_tags stacked">[notebook-name]</div>
                    
                                '<input id="filing__notebooks__search" class="theFont" placeholder="' + $R.translate('filing_info__find_notebook') + '" maxlength="20" />' +
                                '<a id="filing__notebooks__refresh" href="#" title="' + $R.translate('filing_info__refresh_notebooks') + '"></a>' +
                            '</div>' +
                    
                            //  ====
                    
                            '<div id="filing__tag__container">' +
                                '<div id="filing__tag__none">' + $R.translate('filing_info__no_tags') + '</div>' +
                                '<input id="filing__tag" class="theFont" placeholder="' + $R.translate('filing_info__add_tag') + '" maxlength="20" />' +
                            '</div>' +
                            
                            '<div id="filing__tags__dropdown" class="list_container">' +
                                '<div id="filing__tags__find" class="list"></div>' +
                            '</div>' +
                            
                            //  ====
                            
                            '<div id="filing__tags"></div>' + // <div><span>tag</span><b></b></div>
                    
                            '<div id="filing__tags__after"></div>' +
                    
                        '</div></div><div class="dialog_bottom"></div></div>' +
                    
                        '<div class="dialog" id="dialog__clip__failed"><div class="dialog_canvas">' +
                            '<div id="dialog__clip__failed__icon"></div>' +
                            '<div id="dialog__clip__failed__label" class="theFont">' + $R.translate('misc__clipping__failed') + '</div>' +
                        '</div><div class="dialog_cover"></div></div>' +
                    
                        '<div class="dialog" id="dialog__clip__login_request"><div class="dialog_canvas theFont">' +
                            '<div id="login_request_message">' + (function () {
                                var _t = $R.translate('misc__login_request');
                    _t = $R.translate('misc__login_request__chrome'); 
                    
                                return _t;
                            })() + '</div>' +
                            '<div id="login_request_image"></div>' +
                        '</div></div>' +
                    
                    //    '<div class="dialog" id="dialog__clip__login_reset"><div class="dialog_canvas">' +
                    //        '<div class="theFont" id="login_reset__message">' + $R.translate('login__password__error__reset') + '</div>' +
                    //        '<input id="login_reset__button" type="button" class="dialogButton theFont" value="Ok"/>' +
                    //    '</div></div>' +
                    
                    //    '<div class="dialog" id="dialog__clip__login"><div class="dialog_canvas">' +
                    //        '<iframe class="popup" id="login_frame" name="login_frame" scrolling="no" frameborder="0" src="'+ 
                    //$R.paths.back+'in_popup/login/page.html'+  
                    //        '"></iframe>' +
                    //    '</div></div>' +
                    
                    //    '<div class="dialog" id="dialog__clip__register"><div class="dialog_canvas"></div></div>' +
                    
                        '<div class="dialog" id="dialog__settings__4"><div class="dialog_canvas"><div id="settings__4">' +
                    
                            '<a id="settings__4__1" class="themeBox">' +
                                '<div class="themeThumbnail"></div>' +
                                '<div class="themeTitle">' + $R.translate('settings__theme__1__not_translated') + '</div>' +
                            '</a>' +
                            '<a id="settings__4__2" class="themeBox">' +
                                '<div class="themeThumbnail"></div>' +
                                '<div class="themeTitle">' + $R.translate('settings__theme__2__not_translated') + '</div>' +
                            '</a>' +
                            '<a id="settings__4__3" class="themeBox">' +
                                '<div class="themeThumbnail"></div>' +
                                '<div class="themeTitle">' + $R.translate('settings__theme__3__not_translated') + '</div>' +
                            '</a>' +
                            '<a id="settings__4__custom" class="themeBox">' +
                                '<div class="themeThumbnail"></div>' +
                                '<div class="themeTitle">' + $R.translate('settings__theme__custom') + '</div>' +
                            '</a>' +
                    
                            '<div id="settings__4__separator_1" class="settingsSeparator"></div>' +
                    
                            '<div class="fontSizeButtons" id="settings__4__fontSizeButtons">' +
                                '<a id="settings__4__fontSize__small" class="fontSizeButton fontSizeSmall">' +
                                    '<div class="fontSizeLabel">' + $R.translate('settings__fontSize__small') + '</div>' +
                                '</a>' +
                                '<a id="settings__4__fontSize__medium" class="fontSizeButton fontSizeMedium">' +
                                    '<div class="fontSizeLabel">' + $R.translate('settings__fontSize__medium') + '</div>' +
                                '</a>' +
                                '<a id="settings__4__fontSize__large" class="fontSizeButton fontSizeLarge">' +
                                    '<div class="fontSizeLabel">' + $R.translate('settings__fontSize__large') + '</div>' +
                                '</a>' +
                            '</div>' +
                            
                            '<div id="settings__4__separator_2" class="settingsSeparator"></div>' +
                            
                            '<div id="settings__4__more_options">' +
                                $R.translate('settings__more_options') +
                            '</div>' +
                                    
                        '</div></div></div>' +
                    '';
                    
                    //  append
                    $R.cc__reformat.iframeDocument.getElementById('sidebar_dialogs').innerHTML = _html__sidebar_dialogs;
                })();
        
                //  related notes
                (function ()
                {
                    var _html__related_notes = '' +
                        '<div id="relatedNotes__injected"></div>' +
                    
                        '<div id="relatedNotes__separator" class="separator">' +
                            '<div class="separatorLine setTextColorAsBackgroundColor"></div>' +
                            '<div class="separatorLabel setBackgroundColor">' +
                                $R.translate('related_notes__title') +
                                '<div id="relatedNotes__separator__buttons">' +
                                    '<a id="relatedNotes__close" href="#"></a>' +
                                    '<a id="relatedNotes__disable" href="#">' + $R.translate('related_notes__disable_short') + '</a>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    
                        '<div id="relatedNotes__notes">' +
                            '<div id="relatedNotes__first" class="note"></div>'  +
                            '<div id="relatedNotes__second" class="note"></div>' +
                            '<div id="relatedNotes__third" class="note"></div>'  +
                        '</div>' +
                    '';
                
                    //  create
                    var _div = $R.cc__reformat.document.createElement('div');
                        _div.setAttribute('id', 'relatedNotes');
                        _div.className = 'separateSection none empty';
                        _div.innerHTML = _html__related_notes;
                
                    //  append
                    $R.cc__reformat.iframeDocument.getElementById('text').appendChild(_div);
                
                    //  add to extra
                    $R.cc__reformat__extra.$relatedNotes = $('#relatedNotes');
                })();
                
                //  account footer
                (function ()
                {
                    var _html__account_footer = '' +
                        '<div id="accountFooter__separator" class="separator">' +
                            '<div class="separatorLine setTextColorAsBackgroundColor"></div>' +
                            '<div class="separatorLabel setBackgroundColor">' +
                                '<div id="accountFooter__logo"></div>' +
                            '</div>' +
                        '</div>' +
                        '<div id="accountFooter__text">' + $R.translate('footer__text') + '</div>' +
                        '<a id="accountFooter__button" href="#" title="' + $R.translate('footer__button') + '">' + $R.translate('footer__button') + '</a>' +
                    '';
                    
                    //  create
                    var _div = $R.cc__reformat.document.createElement('div');
                        _div.setAttribute('id', 'accountFooter');
                        _div.className = 'separateSection';
                        _div.innerHTML = _html__account_footer;
                    
                    //  append
                    $R.cc__reformat.iframeDocument.getElementById('text').appendChild(_div);
                    
                    //  add to extra
                    $R.cc__reformat__extra.$accountFooter = $('#accountFooter');
                })();
            };
        
        
        //  create outer css
        //  ================
            $R.cc__reformat__create_outer_css = function ()
            {
                //  container
                var _container = $R.document.getElementById($R.cssIDs.container);
                if (_container) {}else { return; }
                
                //  css
                var _cssText = '';
                (function ()
                {
                    //  elements
                    var _html =      $R.document.getElementsByTagName('html')[0],
                        _body =      $R.document.getElementsByTagName('body')[0];
                    
                    //  var
                    var _outer_css = '';
                    
                    //  required
                    if ((!_html) || (!_body)) {}else
                    {
                        //  vars
                        var _vars = {
                            'id__html':                (_html.id && (_html.id > '') && (_html.id.match(/^[a-z]/i) != null) ? '#'+_html.id : 'html'),
                            'id__body':                (_body.id && (_body.id > '') && (_body.id.match(/^[a-z]/i) != null) ? '#'+_body.id : 'body'),
                            'id__reformat':            '#'+$R.cssIDs.reformat,
                            'class__before_visible':   $R.cssClasses.before_visible,
                            'class__is_visible':       $R.cssClasses.is_visible
                        };
                    
                        //  the css
                        _outer_css = '' +
                            '[=id__html].[=class__before_visible], html > [=id__body].[=class__before_visible], [=id__body].[=class__before_visible] ' +
                            '{ ' +
                                'position: static !important; ' +
                                'margin: 0 !important; padding: 0 !important; border: 0 !important; ' +
                            '} ' +
                    
                            '[=id__html].[=class__is_visible], html > [=id__body].[=class__is_visible], [=id__body].[=class__is_visible] ' +
                            '{ ' +
                                'overflow: hidden !important; overflow-x: hidden !important; overflow-y: hidden !important; ' +
                            '} ' +
                    
                            '[=id__html].[=class__before_visible] object, [=id__html].[=class__before_visible] embed, [=id__html].[=class__before_visible] iframe, ' +
                            'html > [=id__body].[=class__before_visible] object, html > [=id__body].[=class__before_visible] embed, html > [=id__body].[=class__before_visible] iframe, ' +
                            '[=id__body].[=class__before_visible] object, [=id__body].[=class__before_visible] embed, [=id__body].[=class__before_visible] iframe ' +
                            '{ ' +
                                'visibility: hidden !important; ' +
                            '} ' +
                    
                            '[=id__reformat] { ' +
                                'margin: 0 !important; padding: 0 !important; border: none !important; ' +
                                'position: absolute !important; ' +
                                'width: 100% !important; height: 100% !important; min-height: 100% !important; ' +
                                'top: -100%; left: -100%; ' + // if these are !important, they won't be overridden by .style
                                'z-index: 2147483647 !important; ' +
                            '} ' +
                    
                            '[=id__html].[=class__before_visible] [=id__reformat], html > [=id__body].[=class__before_visible] [=id__reformat], [=id__body].[=class__before_visible] [=id__reformat], [=id__reformat] ' +
                            '{ ' +
                                'display: block !important; ' +
                                'overflow: auto !important; ' +
                                'visibility: visible !important; ' +
                            '} ' +
                        '';
                    
                        //  replace stuff in cssText
                        _outer_css = _outer_css.replace(/\[=([a-z0-9_]+?)\]/gi, function (_m, _k) { return ((_k in _vars) ? _vars[_k] : _k); });
                        _outer_css = _outer_css.replace(/\} /gi, "} \n");
                    }
                    _cssText = _outer_css;
                })();
        
                //    create css
                var _cssElement = $R.document.createElement('style');
                    _cssElement.setAttribute('id', $R.cssIDs.prefix + 'css_for_reformat');
                    _cssElement.setAttribute('type', 'text/css');
                if (_cssElement.styleSheet) {_cssElement.styleSheet.cssText = _cssText; }
                    else { _cssElement.appendChild($R.document.createTextNode(_cssText)); }
        
                //  insert css
                _container.appendChild(_cssElement);
            };
        
        
        //  apply options
        //  =============
            $R.cc__reformat__applyOptions = function ()
            {
                //  apply
                $R.cc__reformat.applyUnencodedOptions($R.options);
                if ($R.vars['theme'] == 'custom') {}else { $R.cc__reformat.applyCustomCSSFile($R.vars['theme']); }
                
                //  get measures
                window.setTimeout(function ()
                {
                    //  find
                    var _f = function (_s) { return $R.cc__reformat.$iframeDocument.find(_s); };
        
                    //  take measure        
                    $R.cc__reformat__measure = {
                        'lineHeight': _f('#measure__lineHeight').height(),
                        'fontSize':   _f('#measure__fontSize').height()
                    };
                    
                    //  related notes
                    $R.bind__related_notes__doPositioning(true);
                }, 5000);
            };
        

        
        
        //  custom events
        //  =============
            $R.bind__custom_events = function ()
            {
                $R.document.addEventListener('click', function(_event)
                {
                    //  vars
                    var _event_key = $R.custom_events.get_key(_event),
                        _event_name = $R.custom_events.keys_to_names[_event_key],
                        _stop = false;
                
                    //  invalid    
                    if (_event_name) {}else { return; }
        
                    //  other
                    if (_event_name.indexOf('to-browser--') === 0) {}else { return; }
        
                    //  vars
                    var _short_event_name = _event_name.substr('to-browser--'.length);
        
                    //  what event?
                    switch (_short_event_name)
                    {
                        /* case 'evernote--login--show':
                            
                            //  not clipping
                            $R.cc__reformat__extra.$html.removeClass('clipping');
                        
                            //  end highlighting mode
                            if ($R.login__requestedFor == 'highlight') { $R.cc__highlight.disable(); }
        
                            //  requested for                
                            $('#dialog__clip__login').attr('requested_for', $R.login__requestedFor);
                            $('#dialog__clip__login_reset').attr('requested_for', $R.login__requestedFor);
        
                            // show login
                            $R.showDialog('clip__login');
                        
                            _stop = true;
                            break; */
                    
                        case 'evernote--login--show':
                        
                            //  not clipping
                            $R.cc__reformat__extra.$html.removeClass('clipping');
                    
                            //  end highlighting mode
                            if ($R.login__requestedFor == 'highlight') { $R.cc__highlight.disable(); }
        
                            //  requested for                
                            $('#clip__login_request').attr('requested_for', $R.login__requestedFor);
                        
                            //  show request dialog
                            $R.showDialog('clip__login_request');
                
                            _stop = true;
                            break;
        
                        case 'evernote--login--now-open':
                        
                             //  hide request dialog
                            $R.hideDialog('clip__login_request');
                        
                        
        
                        
                            _stop = true;
                            break;
                        
                        case 'evernote--login--successful':
                            //  multiple options
                            switch (true)
                            {
                                case ($R.login__requestedFor == 'clip'):
                                    $R.menu_functions.clip_to_evernote();
                                    break;
        
                                case ($R.login__requestedFor == 'highlight'):
                                    $R.menu_functions.clip_to_evernote();
                                    $R.cc__highlight__enable();
                                    break;
                            }
        
                            _stop = true;
                            break;
        
                        /* === */    
        
                        case 'evernote--clip--successful':
                        case 'evernote--clip-highlight--successful':
                        case 'evernote--clip-filing--successful':
                            
                            //  hide login dialog, if open -- clip-filing excluded
                            if (_short_event_name != 'evernote--clip-filing--successful') { $R.hideOpenDialog(); }
        
                            //  clipped
                            $R.cc__reformat__extra.$html.removeClass('clipping').addClass('clipped');
                            
                            //  get clip__filing
                            window.setTimeout(function () { $R.bind__dialogs__clip__filing__getInjected(); }, 250);
                            
                            //  show clip__filing only once
                            if ($R.showedClipInfo) { return; }
                            $R.showedClipInfo = true;
        
                            //  show clip_filing
                            window.setTimeout(function () { $R.showDialog('clip__filing'); }, 500);
                    
                            _stop = true;
                            break;
                        
                        case 'evernote--clip--failed':
                        case 'evernote--clip-highlight--failed':
                        case 'evernote--clip-filing--failed':
                            //  remove class
                            $R.cc__reformat__extra.$html.removeClass('clipping');
                        
                            //  waiting
                            $R.showDialog('clip__failed');
                        
                            //  remove all highlights
                            $R.cc__highlight.highlight__deleteAllHighlights();
                        
                            //  end
                            _stop = true;
                            break;
        
                        /* === */    
                        
                        case 'evernote--get-recommendation--failed':
                            _stop = true;
                            break;
                    
                        case 'evernote--get-recommendation--successful':
                            //  reposition
                            $R.bind__related_notes__doPositioning();
        
                            _stop = true;
                            break;
        
                        /* === */    
                        
                        case 'evernote--get-filing--failed':
                            _stop = true;
                            break;
                    
                        case 'evernote--get-filing--successful':
                            //  set clip__filing -- again
                            window.setTimeout(function () { $R.bind__dialogs__clip__filing__getInjected(); }, 500);
                        
                            _stop = true;
                            break;
                        
                        /* === */    
                        
                        case 'show--dialog-first--all-features':
                        case 'show--dialog-first--new-features':
                            //  var
                            var _$features = $('#dialog__features');
                            
                            //  show
                            _$features.removeClass('all new');
        
                            //  which
                            switch (_short_event_name)
                            {
                                case 'show--dialog-first--all-features': _$features.addClass('all'); break;
                                case 'show--dialog-first--new-features': _$features.addClass('new'); break;
                            }
                        
                            //  open dialog
                            $R.showDialog('features');
        
                            //  event
                            $R.custom_events__dispatchToBackground('track--first-show--mark');
                        
                            _stop = true;
                            break;
                            
                        case 'show--evernote-footer':
                        
                            //  show
                            $('#accountFooter').show();
                        
                            _stop = true;
                            break;
                    }
            
                    //  stop
                    if (_stop) { _event.stopPropagation(); _event.preventDefault(); }
                }, true);
            };
         
        
        //  dialogs
        //  =======
            $R.bind__dialogs = function ()
            {
                //  overlay hide current
                $R.cc__reformat__extra.$dialogsOverlay.click(function () { $R.hideOpenDialog(); return false; });
        
                //  small dialogs -- hide on click
                $('#dialog__clip__failed div.dialog_cover').click(function () { $R.hideOpenDialog(); return false; });
        
                //  password reset
                //  $('#dialog__clip__login_reset div.dialog_canvas').click(function() { $R.custom_events__dispatchToBackground('open--password-reset'); return false; });
                
                //  close all
                $('#sidebar_dialogs div.dialog.dynamic a.dialog_close, #sidebar_dialogs div.dialog.dynamic div.dialog_close a').click(function () { $R.hideOpenDialog(); return false; });
                $('#other_dialogs div.dialog.dynamic a.dialog_close, #other_dialogs div.dialog.dynamic div.dialog_close a').click(function () { $R.hideOpenDialog(); return false; });
        
                //  features -> eula
                $('#dialog__features__eula_notice a').click(function () { $R.showDialog('eula'); return false; });
                $('#dialog__eula_frame').attr('src', $R.paths.back+'options/eula.html');
        
                //  settings
                $R.bind__dialogs__clip__filing();
                $R.bind__dialogs__settings();
                $R.bind__dialogs__settings__select_initial();
            };
        
        
        //  include
        //  =======
            //  settings
            //  ========
                $R.bind__dialogs__settings = function ()
                {
                    //  theme boxes        
                    $('#settings__4__1').click(function () { $R.bind__dialogs__settings__select_theme_from_menu('theme-1'); $('#settings__4__1').addClass('selected'); });
                    $('#settings__4__2').click(function () { $R.bind__dialogs__settings__select_theme_from_menu('theme-2'); $('#settings__4__2').addClass('selected'); });
                    $('#settings__4__3').click(function () { $R.bind__dialogs__settings__select_theme_from_menu('theme-3'); $('#settings__4__3').addClass('selected'); });
                    $('#settings__4__custom').click(function ()
                    {
                        //  show settings, if no custom values set
                        if ($R.vars['custom_theme_options'] > '') {}else
                        {
                            $R.custom_events__dispatchToBackground('open--settings--theme');
                            $R.hideOpenDialog();
                            return;
                        }
            
                        //  apply theme
                        $R.bind__dialogs__settings__select_theme_from_menu('custom');
                        $('#settings__4__custom').addClass('selected');
                    });
                
                    //  size buttons
                    $('#settings__4__fontSize__small').click(function ()  { $R.bind__dialogs__settings__select_size_from_menu('small');  $('#settings__4__fontSize__small').addClass('selected');  });
                    $('#settings__4__fontSize__medium').click(function () { $R.bind__dialogs__settings__select_size_from_menu('medium'); $('#settings__4__fontSize__medium').addClass('selected'); });
                    $('#settings__4__fontSize__large').click(function ()  { $R.bind__dialogs__settings__select_size_from_menu('large');  $('#settings__4__fontSize__large').addClass('selected');  });
                    
                    //  more options
                    $('#settings__4__more_options').click(function ()
                    {
                        $R.custom_events__dispatchToBackground('open--settings');
                        $R.hideOpenDialog();
                        return false;
                    });
                };
                
                
            //  initially selected
            //  ==================
                $R.bind__dialogs__settings__select_initial = function()
                {
                    //  theme
                    switch ($R.vars['theme'])
                    {
                        case 'theme-1': $('#settings__4__1').addClass('selected');      break;
                        case 'theme-2': $('#settings__4__2').addClass('selected');      break;
                        case 'theme-3': $('#settings__4__3').addClass('selected');      break;
                        case 'custom':  $('#settings__4__custom').addClass('selected'); break;
                    }
                
                    //  size
                    switch ($R.options['text_size'])
                    {
                        case $R.the_sizes['small'][$R.vars['theme']]:  $('#settings__4__fontSize__small').addClass('selected');   break;
                        case $R.the_sizes['medium'][$R.vars['theme']]: $('#settings__4__fontSize__medium').addClass('selected');  break;
                        case $R.the_sizes['large'][$R.vars['theme']]:  $('#settings__4__fontSize__large').addClass('selected');   break;
                    }
                };
                
                
            //  helpers
            //  =======
            
                $R.bind__dialogs__settings__select_theme_from_menu = function (_theme_id)
                {
                    //  set var
                    $R.vars['theme'] = _theme_id;
                    $R.options['defined'] = _theme_id;
            
                    //  event
                    $R.custom_events__dispatchToBackground('select--theme--'+_theme_id);
                
                    //  set theme
                    if (_theme_id == 'custom')
                    {
                        $R.vars['custom_theme_options'].replace(/\[\[=(.*?)\]\[=(.*?)\]\]/gi, function (_match, _name, _value) {
                            $R.options[_name] = _value; 
                        });
                    }
                    else
                    {
                        for (var _v in $R.the_themes[_theme_id]) { 
                            $R.options[_v] = $R.the_themes[_theme_id][_v];
                        }
                    }
                    
                    //  apply options
                    $R.cc__reformat__applyOptions();
                
                    //  deselect all -- will be selected for each item
                    $('#settings__4 a.themeBox').removeClass('selected');
                
                    //  deselct font size; select medium
                    $('#settings__4__fontSizeButtons a.fontSizeButton').removeClass('selected');
                    if (_theme_id != 'custom') { $('#settings__4__fontSize__medium').addClass('selected'); }
                };
                
                $R.bind__dialogs__settings__select_size_from_menu = function (_size)
                {
                    //  event
                    $R.custom_events__dispatchToBackground('select--size--'+_size);
                
                    //  apply size
                    $R.options['text_size'] = $R.the_sizes[_size][$R.vars['theme']];
                    $R.cc__reformat__applyOptions();
                
                    //  deselect all
                    //  will be selected for each item
                    $('#settings__4__fontSizeButtons a.fontSizeButton').removeClass('selected');
                };
            
            //  clip__filing
            //  ============
                $R.bind__dialogs__clip__filing = function ()
                {
                    //  notebooks
                    $R.bind__dialogs__clip__filing__notebooks();
                    
                    //  tags
                    $R.bind__dialogs__clip__filing__tags();
                
                    //  misc
                    $('#clip__filing__dropdown_overlay').click(function () { $R.bind__dialogs__clip__filing__showDropdown('none'); return false; });
                    $('#filing__notebooks_list__refresh').click(function () { return false; });
                };
            
            //  include
            //  =======
                //  notebooks
                //  =========
                    $R.bind__dialogs__clip__filing__notebooks = function ()
                    {
                        $('#filing__notebooks__refresh').click(function () // refresh notebooks & tags
                        {
                            $R.bind__dialogs__clip__filing__showDropdown('none'); 
                            $('#clip__filing').addClass('not_injected__filing');
                            $('#filing__tag').get(0).focus();
                            $R.custom_events__dispatchToBackground('evernote--get-filing--refresh');
                            return false; 
                        });
                
                        $('#filing__notebook__overlay').click(function () // show notebooks dropdown
                        {
                            $R.bind__dialogs__clip__filing__showDropdown('notebooks'); 
                            return false; 
                        });
                    
                        $('#filing__notebooks__dropdown div.list').on('click', 'div.notebook', function () // set notebook
                        {
                            $R.bind__dialogs__clip__filing__notebooks__set(this);
                            $R.bind__dialogs__clip__filing__showDropdown('none');
                            $R.bind__dialogs__clip__filing__sendEvent();
                            $('#filing__tag').get(0).focus();
                            return false;
                        });
                
                        $('#filing__notebooks__find').on('mouseenter', 'div.notebook', function () // select notebook, in __find
                        {
                            $R.bind__dialogs__clip__filing__notebooks__find__select(this);
                            return false;
                        });
                
                        $('#filing__notebooks__list').on('mouseenter', 'div.notebook', function () // select notebook, in __list
                        {
                            $R.bind__dialogs__clip__filing__notebooks__list__select(this);
                            return false;
                        });
                
                        $('#filing__notebooks__search').on('input', function (_e) // find notebooks
                        {
                            //  search string
                            //  =============
                                var _value = this.value.toLowerCase();
                
                            //  show everything
                            //  ===============
                                if (_value > '') {}else
                                {
                                    $('#filing__notebooks__dropdown').removeClass('show_find').addClass('show_list');
                                    $('#filing__notebooks__find').html('');
                                    return;
                                }
                
                            //  find matching notebooks
                            //  =======================
                                $('#filing__notebooks__find').html((function ()
                                {
                                    var _r = ''; 
                
                                    $('#filing__notebooks__list div.notebook').each(function ()
                                    {
                                        //  caption to match
                                        //  ================
                                            var _caption = ('' +
                                                (this.childNodes[0].textContent) + 
                                                (this.childNodes[1] ? (' ' + this.childNodes[1].textContent.slice(2, -1)) : '') +
                                            '').toLowerCase();
                                    
                                        //  does it match?
                                        //  ==============
                                            switch (true)
                                            {
                                                case (_caption.indexOf(_value) === 0): break;
                                                case (_caption.indexOf(' '+_value) > -1): break;
                                            
                                                default: return; break;
                                            }
                                    
                                        //  vars
                                        //  ====
                                        
                                            var _class = this.className;
                                                _class = (_class ? _class.replace('stacked', '') : '') + ' in_find';
                                            
                                            var _n_id = this.getAttribute('n_id');
                                                _n_id = (_n_id ? _n_id : '');
                
                                            var _id = this.getAttribute('id');
                                                _id = (_id ? _id : '');
                                                _id = (((_r > '') || (_id == 'filing__notebooks__list__selected_alpha')) ? _id : 'filing__notebooks__find__selected');
                                    
                                        //  add html
                                        //  ========
                                            _r += '' + 
                                                '<div' + 
                                                    ' class="' + _class + '"' +
                                                    ' n_id="' + _n_id + '"' +
                                                    ' id="' + _id + '"' +
                                                '>' + 
                                                    this.innerHTML + 
                                                '</div>' +
                                            '';
                                    });
                                
                                    //  __selected and __selected_alpha
                                    var _list_selected_alpha = ' id="filing__notebooks__list__selected_alpha"',
                                        _find_selected_alpha = ' id="filing__notebooks__find__selected_alpha"',
                                        _find_selected =       ' id="filing__notebooks__find__selected"';
                                        
                                    //  handle __selected and __selected_alpha
                                    if (_r.indexOf(_list_selected_alpha) > -1)
                                    {
                                        _r = _r.replace(_list_selected_alpha, _find_selected_alpha);
                                        _r = _r.replace(_find_selected, '');
                                    }
                                
                                    //  return
                                    return _r; 
                                })());
                
                            //  show __find
                            //  ===========
                                $('#filing__notebooks__dropdown').removeClass('show_list').addClass('show_find');
                        });
                    
                        $('#filing__notebooks__search').keydown(function (_event) // handle escape, return, up, down
                        {
                            //  fast return
                            if (_event.keyCode && ('|9|27|13|38|40|'.indexOf('|'+_event.keyCode+'|') > -1)) {}else { return true; }
                
                            //  vars
                            var _value = $('#filing__notebooks__search').val(),
                                _$selected = ((_value > '') ? $('#filing__notebooks__find__selected') : $('#filing__notebooks__list__selected'));
                            
                            //  __selected_alpha
                            if ((_$selected.length > 0)) {}else { _$selected = ((_value > '') ? $('#filing__notebooks__find__selected_alpha') : $('#filing__notebooks__list__selected_alpha')); }
                            
                            //  key and action
                            var _stop = false;
                            switch (true)
                            {
                                case ((_event.keyCode == 27) && (_value > '')): // escape, value
                                    $('#filing__notebooks__search').val('');
                                    $('#filing__notebooks__dropdown').removeClass('show_find').addClass('show_list');
                                    $('#filing__notebooks__find').html('');
                                    _stop = true;
                                    break;
                
                                case ((_event.keyCode == 9)): // tab
                                case ((_event.keyCode == 27) && !(_value > '')): // escape, no value
                                case ((_event.keyCode == 13) && !(_$selected.length > 0)): // return, no item
                                    $R.bind__dialogs__clip__filing__showDropdown('none');
                                    $('#filing__tag').get(0).focus();
                                    _stop = true;
                                    break;
                
                                case ((_event.keyCode == 13) && (_$selected.length > 0)): // return, item
                                    $R.bind__dialogs__clip__filing__notebooks__set(_$selected.get(0));
                                    $R.bind__dialogs__clip__filing__showDropdown('none');
                                    $R.bind__dialogs__clip__filing__sendEvent();
                                    $('#filing__tag').get(0).focus();
                                    _stop = true;
                                    break;
                                
                                case ((_event.keyCode == 38) && (_value > '')): // up, value
                                    $R.bind__dialogs__clip__filing__notebooks__find__select(_$selected.get(0).previousSibling);
                                    $R.bind__dialogs__clip__filing__notebooks__find__scroll();
                                    _stop = true;
                                    break;
                                    
                                case ((_event.keyCode == 40) && (_value > '')): // down, value
                                    $R.bind__dialogs__clip__filing__notebooks__find__select(_$selected.get(0).nextSibling);
                                    $R.bind__dialogs__clip__filing__notebooks__find__scroll();
                                    _stop = true;
                                    break;
                
                                case ((_event.keyCode == 38) && !(_value > '')): // up, no value
                                    $R.bind__dialogs__clip__filing__notebooks__list__select(_$selected.get(0).previousSibling);
                                    $R.bind__dialogs__clip__filing__notebooks__list__scroll();
                                    _stop = true;
                                    break;
                                    
                                case ((_event.keyCode == 40) && !(_value > '')): // down, no value
                                    $R.bind__dialogs__clip__filing__notebooks__list__select(_$selected.get(0).nextSibling);
                                    $R.bind__dialogs__clip__filing__notebooks__list__scroll();
                                    _stop = true;
                                    break;
                            }
                            
                            //  stop
                            if (_stop) { return false; }
                            
                            //  return
                            return true;
                        });
                    };
                
                //  helpers
                //  =======
                
                    $R.bind__dialogs__clip__filing__notebooks__find__scroll = function () { $R.bind__dialogs__clip__filing__scrollDropdown('notebooks', ['filing__notebooks__find__selected', 'filing__notebooks__find__selected_alpha']); };
                    $R.bind__dialogs__clip__filing__notebooks__list__scroll = function () { $R.bind__dialogs__clip__filing__scrollDropdown('notebooks', ['filing__notebooks__list__selected', 'filing__notebooks__list__selected_alpha']); };
                
                    $R.bind__dialogs__clip__filing__notebooks__find__select = function (_notebookElement)
                    {
                        if (_notebookElement) {}else { return; }
                        
                        $('#filing__notebooks__find__selected').attr('id', '');
                
                        if ($(_notebookElement).attr('id') == 'filing__notebooks__find__selected_alpha')
                        {
                            $('#filing__notebooks__find').removeClass('has_selected');
                        }
                        else
                        {
                            $('#filing__notebooks__find').addClass('has_selected');
                            $(_notebookElement).attr('id', 'filing__notebooks__find__selected');
                        }
                    };
                
                    $R.bind__dialogs__clip__filing__notebooks__list__select = function (_notebookElement)
                    {
                        if (_notebookElement) {}else { return; }
                
                        $('#filing__notebooks__list__selected').attr('id', '');
                        
                        if ($(_notebookElement).attr('id') == 'filing__notebooks__list__selected_alpha')
                        {
                            $('#filing__notebooks__list').removeClass('has_selected');
                        }
                        else
                        {
                            $('#filing__notebooks__list').addClass('has_selected');
                            $(_notebookElement).attr('id', 'filing__notebooks__list__selected');
                        }
                    };
                
                    $R.bind__dialogs__clip__filing__notebooks__set = function (_notebookElement)
                    {
                        //  vars
                        //  ====
                            var _$content = $('#clip__filing'),
                                _$element = $(_notebookElement),
                                _caption = _$element.find('> span').text(),
                                _id = _$element.attr('n_id');
                        
                        //  check
                        //  =====
                            switch (true)
                            {
                                case (!_notebookElement):
                                case (!_$element):
                                case (!_$element.hasClass('notebook')):
                                case (!_caption):
                                case (!_id):
                                    return;
                                    break;
                            }
                            
                        //  set name / id
                        //  =============
                            $('#filing__notebook__id').text(_id);
                            $('#filing__notebook__name').text(_caption);
                        
                        //  selected -- whether or not the notebook is a __find result
                        //  ========
                            $('#filing__notebooks__list__selected_alpha').attr('id', '');
                            $('#filing__notebooks__list__selected').attr('id', '');
                            (_$element.hasClass('in_find') ? $('#filing__notebooks__list [n_id="' + _$element.attr('n_id') + '"]') : _$element).attr('id', 'filing__notebooks__list__selected_alpha');
                        
                        //  tags -- personal / business / none
                        //  ====
                            _$content.removeClass('tags__none').removeClass('tags__personal').removeClass('tags__business');
                            switch (true)
                            {
                                case (_$element.hasClass('personal')): _$content.addClass('tags__personal'); break;
                                case (_$element.hasClass('business')): _$content.addClass('tags__business'); break;
                                case (_$element.hasClass('no_tags')):  _$content.addClass('tags__none');       
                                                                       $('#filing__tags').html('');          break;
                            }
                    };
                
                //  tags
                //  ====
                    $R.bind__dialogs__clip__filing__tags = function ()
                    {
                        $('#filing__tags').on('click', 'div b', function () // remove tag
                        {
                            $R.bind__dialogs__clip__filing__tags__remove(this.parentNode); 
                            $R.bind__dialogs__clip__filing__sendEvent();
                            return false;
                        });
                
                        $('#filing__tags__dropdown div.list').on('click', 'div', function () // select tag
                        {
                            $R.bind__dialogs__clip__filing__tags__add(this.textContent);
                            $R.bind__dialogs__clip__filing__showDropdown('none');
                            $R.bind__dialogs__clip__filing__sendEvent();
                            return false;
                        });
                
                        $('#filing__tags__find').on('mouseenter', 'div', function () // select tags, in __find
                        {
                            $R.bind__dialogs__clip__filing__tags__find__select(this);
                            return false;
                        });
                
                        $('#filing__tag').on('input', function () // find tags
                        {
                            //  no tags
                            //  =======
                                if ($('#clip__filing').hasClass('tags__none')) { this.value = ''; return; }
                
                            //  too many tags
                            //  =============
                                if ($('#filing__tags div').length >= 12) { this.value = ''; return; }
                        
                            //  remove certain characters
                            //  =========================
                                this.value = this.value.replace(/[\n\r\t,]/gi, '');
                        
                            //  search string
                            //  =============
                                var _value = this.value.toLowerCase();
                
                            //  show everything
                            //  ===============
                                if (_value > '') {}else
                                {
                                    $R.bind__dialogs__clip__filing__showDropdown('none');
                                    $('#filing__tags__find').html('');
                                    return;
                                }
                
                            //  find matching tags
                            //  ==================
                                var _matching = (function ()
                                {
                                    //  vars
                                    //  ====
                                        var _$c = $('#clip__filing'),
                                            _$f = false, 
                                            _r = ''; 
                
                                    //  which tags + current tags
                                    //  ==========
                                        switch (true)
                                        {
                                            case (_$c.hasClass('tags__personal')): _$f = $('#filing__tags__list__personal div'); break;
                                            case (_$c.hasClass('tags__business')): _$f = $('#filing__tags__list__business div'); break;
                                        }
                                        if (_$f) {}else { return ''; }
                
                                    //  loop
                                    //  ====
                                        _$f.each(function ()
                                        {
                                            //  caption to match
                                            //  ================
                                                var _caption = this.textContent.toLowerCase();
                                    
                                            //  does it match?
                                            //  ==============
                                                switch (true)
                                                {
                                                    case (_caption.indexOf(_value) === 0): break;
                                                    case (_caption.indexOf(' '+_value) > -1): break;
                                            
                                                    default: return; break;
                                                }
                                    
                                            //  add html
                                            //  ========
                                                _r += '<div class="in_find"' + ((_caption == _value) ? '[=exactly]' : '') + '>' + this.textContent + '</div>';
                                        });
                                
                                    //  only one exact match
                                    //  ====================
                                        _r = _r.replace('[=exactly]', ' id="filing__tags__find__selected"');
                                        _r = _r.replace('[=exactly]', '');
                                
                                    //  return
                                    //  ======
                                        return _r; 
                                })();
                                
                            //  show dropdown, display results -- or hide
                            //  ==============================
                                if (_matching > '')
                                {
                                    $('#filing__tags__find').html(_matching);
                                    $R.bind__dialogs__clip__filing__showDropdown('tags');
                                }
                                else
                                {
                                    $('#filing__tags__find').html('');
                                    $R.bind__dialogs__clip__filing__showDropdown('none');
                                }
                        });
                    
                        $('#filing__tag').keydown(function (_event) // handle return, up, down, escape
                        {
                            //  tags are temporarily disabled
                            switch (true)
                            {
                                case ($('#clip__filing').hasClass('tags__none')):
                                case ($('#clip__filing').hasClass('not_injected__filing')):
                                case ($('#clip__filing').hasClass('not_injected__clip_info')):
                                    switch (true)
                                    {
                                        case (_event.keyCode == 9):  /* tab */    $R.bind__dialogs__clip__filing__showDropdown('notebooks'); break;
                                        case (_event.keyCode == 27): /* escape */ $R.hideOpenDialog(); break;
                                    }
                                    return false;
                                    break;
                            }
                        
                            //  fast return
                            if (_event.keyCode && ('|9|27|13|38|40|'.indexOf('|'+_event.keyCode+'|') > -1)) {}else { return true; }
                
                            //  vars
                            var _value = $('#filing__tag').val(),
                                _$selected = $('#filing__tags__find__selected');
                            
                            //  key and action
                            var _stop = false;
                            switch (true)
                            {
                                case ((_event.keyCode == 9)): // tab
                                    $R.bind__dialogs__clip__filing__showDropdown('notebooks');
                                    _stop = true;
                                    break;                    
                            
                                case ((_event.keyCode == 27) && (_value > '')): // escape, value
                                    $R.bind__dialogs__clip__filing__showDropdown('none');
                                    $('#filing__tag').val('');
                                    $('#filing__tags__find').html('');
                                    _stop = true;
                                    break;
                
                                case ((_event.keyCode == 27) && !(_value > '')): // escape, no value
                                    $R.hideOpenDialog();
                                    _stop = true;
                                    break;
                
                                case ((_event.keyCode == 13) && (_value > '')): // return, value
                                    $R.bind__dialogs__clip__filing__tags__add(((_$selected.length > 0) ? _$selected.text() : _value));
                                    $R.bind__dialogs__clip__filing__showDropdown('none');
                                    $R.bind__dialogs__clip__filing__sendEvent();
                                    $('#filing__tag').val('');
                                    $('#filing__tags__find').html('');
                                    _stop = true;
                                    break;
                                
                                case ((_event.keyCode == 38) && (_$selected.length > 0)): // up, selected
                                    $R.bind__dialogs__clip__filing__tags__find__select(_$selected.get(0).previousSibling);
                                    $R.bind__dialogs__clip__filing__tags__find__scroll();
                                    _stop = true;
                                    break;
                                    
                                case ((_event.keyCode == 40) && (_$selected.length > 0)): // down, selected
                                    $R.bind__dialogs__clip__filing__tags__find__select(_$selected.get(0).nextSibling);
                                    $R.bind__dialogs__clip__filing__tags__find__scroll();
                                    _stop = true;
                                    break;
                                    
                                case ((_event.keyCode == 40) && !(_$selected.length > 0)): // down, blank
                                    $R.bind__dialogs__clip__filing__tags__find__select($('#filing__tags__find').get(0).firstChild);
                                    $R.bind__dialogs__clip__filing__tags__find__scroll();
                                    _stop = true;
                                    break;
                            }
                            
                            //  stop
                            if (_stop) { return false; }
                            
                            //  return
                            return true;        
                        });
                    };
                    
                //  helpers
                //  =======
                
                    $R.bind__dialogs__clip__filing__tags__find__scroll = function () { $R.bind__dialogs__clip__filing__scrollDropdown('tags', ['filing__tags__find__selected']); };
                
                    $R.bind__dialogs__clip__filing__tags__find__select = function (_tagElement)
                    {   
                        if (_tagElement) {}else { return; }
                        
                        $('#filing__tags__find__selected').attr('id', '');
                        $(_tagElement).attr('id', 'filing__tags__find__selected');
                    };
                
                    $R.bind__dialogs__clip__filing__tags__add = function (_tagName)
                    {
                        //  check
                        if (!_tagName) { return; }
                
                        //  trim
                        _tagName = _tagName.replace(/[\n\r\t,]/gi, '').replace(/^\s+/gi, '').replace(/\s+$/gi, '');
                
                        //  blank?
                        if (_tagName > '') {}else { return; }
                
                        //  exists?
                        var _current_tags = (function () { var _r={}; $('#filing__tags div span').each(function () { _r[this.textContent.toLowerCase()] = true; }); return _r; })();
                        if (_current_tags[_tagName.toLowerCase()]) { return; }
                    
                        //  add
                        $('#filing__tags').append('<div><span>' + $R.escape_html(_tagName) + '</span><b></b></div>');
                    };
                
                    $R.bind__dialogs__clip__filing__tags__remove = function (_tagElement)
                    {
                        //  check
                        if (!_tagElement) { return; }
                
                        //  remove
                        try { $('#filing__tags').get(0).removeChild(_tagElement); } catch (_e) { }
                    };
                
                
                //  misc
                //  ====
                
                    $R.bind__dialogs__clip__filing__getInjected = function ()
                    {
                        //  get injected clip_info, from filing__clip_info, and display it
                
                        //  url + title
                        //  ===========
                            var _url = $('#filing__clip_info__url').text(),
                                _title = $('#filing__clip_info__title').text(),
                                _$titleLink = $('#filing__title'),
                                _$titleCaption = $('#filing__title__caption');
                                
                            if (_url) { _$titleLink.attr('href', _url); }
                            if (_url) { _$titleLink.attr('target', ((_url.match(/^evernote:\/\/\//gi) != null) ? '' : '_blank')); }
                            if (_title) { _$titleCaption.text(_title); }
                        
                        //  notebook
                        //  ========
                            var _notebook_id = $('#filing__clip_info__notebook_id').text();
                            if (_notebook_id) { $R.bind__dialogs__clip__filing__notebooks__set($('#filing__notebooks__list [n_id="' + _notebook_id + '"]').get(0)); }
                        
                        //  tags
                        //  ====
                            var _new_tags = (function () { var _r={}; $('#filing__clip_info__tag_names span').each(function () { _r[this.textContent] = true; }); return _r; })(),
                                _current_tags = (function () { var _r={}; $('#filing__tags div span').each(function () { _r[this.textContent] = true; }); return _r; })();
                                
                            for (var _tag in _new_tags) { if (_current_tags[_tag]) {}else { $R.bind__dialogs__clip__filing__tags__add(_tag); } }
                    };
                
                    $R.bind__dialogs__clip__filing__sendEvent = function ()
                    {
                        $R.login__requestedFor = 'clip';
                        $R.cc__reformat__extra.$html.addClass('clipping');
                        $R.custom_events__dispatchToBackground('evernote--clip-filing');
                    };
                
                    $R.bind__dialogs__clip__filing__showDropdown = function (_which)
                    {
                        var _$content = $('#clip__filing'),
                            _$dropdown = $('filing__' + _which + '_dropdown');
                        
                        //  custom, before
                        //  ==============
                            switch (true)
                            {
                                case (_which == 'notebooks'):
                
                                    //  clear __find
                                    $('#filing__notebooks__dropdown').removeClass('show_find').addClass('show_list');
                                
                                    //  remove has_seleted
                                    $('#filing__notebooks__list').removeClass('has_selected');
                                    $('#filing__notebooks__find').removeClass('has_selected');
                                
                                    //  remove selected
                                    $('#filing__notebooks__list__selected').attr('id', '');
                                    $('#filing__notebooks__find__selected').attr('id', '');
                                
                                    //  clear search field
                                    $('#filing__notebooks__search').val('');
                                
                                    //  tag must be below overlay
                                    $('#filing__tag__container').css({ 'z-index': 1 });
                                
                                    break;
                            }
                        
                        //  do show -- and hide of other
                        //  =======
                            switch (true)
                            {
                                case (_which == 'notebooks'): _$content.removeClass('dropdown__none').removeClass('dropdown__tags');      break;
                                case (_which == 'tags'):      _$content.removeClass('dropdown__none').removeClass('dropdown__notebooks'); break;
                                case (_which == 'none'):      _$content.removeClass('dropdown__notebooks').removeClass('dropdown__tags'); break;
                            }
                            _$content.addClass('dropdown__' + _which);
                        
                        //  custom, after
                        //  =============
                            switch (true)
                            {
                                case (_which == 'notebooks'): // set focus on search; put selected into view
                                
                                    //  focus search field
                                    $('#filing__notebooks__search').get(0).focus();
                                
                                    //  scroll
                                    $R.bind__dialogs__clip__filing__notebooks__list__scroll();
                                    
                                    break;
                                    
                                case (_which == 'tags'):
                                
                                    //  tag must be above overlay
                                    $('#filing__tag__container').css({ 'z-index': 500 });
                                
                                    break;
                            }
                    };
                
                    $R.bind__dialogs__clip__filing__scrollDropdown = function (_which, _ids)
                    {
                        //  get dropdown
                        var _dropdown = (function ()
                        {
                            switch (true)
                            {
                                case (_which == 'notebooks'): return $('#filing__notebooks__dropdown').get(0); break;
                                case (_which == 'tags'):      return $('#filing__tags__dropdown').get(0); break;
                            }
                            return false;
                        })();
                        
                        //  no dropdown
                        if (_dropdown) {}else { return; }
                        
                        //  get vars
                        var _d_height = _dropdown.offsetHeight,
                            _d_top = _dropdown.scrollTop,
                            _e_vertical = (function () {
                                for (var _e=false, _i=0, _ii=_ids.length; _i<_ii; _i++)
                                {
                                    _e = $('#'+_ids[_i]).get(0);
                                    if (_e) { return { 'top': _e.offsetTop, 'height': _e.offsetHeight }; }
                                }
                                return 0;
                            })();
                        
                        //  compute bottom or return because no element offset
                        if (_e_vertical) { _e_vertical['bottom'] = (_e_vertical.top + _e_vertical.height); } else { return; }
                        
                        //  negative
                        var _t_negative = ((-1) * (_e_vertical.top - _d_top)),
                            _b_negative = ((-1) * (_d_height - _e_vertical.bottom + _d_top));
                            
                        //  scroll
                        switch (true)
                        {
                            case (_t_negative > 0): _dropdown.scrollTop -= (_t_negative + (_e_vertical.height/2)); break;
                            case (_b_negative > 0): _dropdown.scrollTop += (_b_negative + (_e_vertical.height/2)); break;
                        }
                        
                        //  notebooks special case
                        if ((_which == 'notebooks') && (((-1) * _t_negative) <= _e_vertical.height) && (_d_top <= _e_vertical.height)) { _dropdown.scrollTop = 0; }
                    };
                
            
        
        
        //  keyboard escape
        //  ===============
            $R.bind__keyboard__escape = function ()
            {
                $R.cc__reformat.$iframeWindow.keydown(function (_event)
                {
                    var _key_combo_from_event = $R.get_key_combo_from_event(_event),
                        _key_combo =            _key_combo_from_event._key_combo;
                
                    //  not visible; return
                    if ($R.visible) {}else { return; }
                
                    //  highlighting -- handled in other event
                    if ($R.highlighting) { return; }
                
                    //  not Escape; return
                    if (_key_combo == 'Escape' || _key_combo == $R.vars['keys_activation']) {}else { return; }
                
                    //  Escape!
                    $R.makeInvisible();
                    _event.preventDefault();
                    _event.stopPropagation();
                });
            };
        
        
        //  keyboard shortcuts
        //  ==================
            $R.bind__keyboard = function ()
            {
                $R.cc__reformat.$iframeWindow.keydown(function (_event)
                {
                    //  not visible; return
                    if ($R.visible) {}else { return; }
        
                    //  stop
                    var _stop = false;
        
                    //  short
                    var _from_event =   $R.get_key_combo_from_event(_event),
                        _c =            _from_event._key_combo,
                        _v =            $R.vars;
        
                    //  what to do?
                    switch (true)
                    {
                        //  print
                        case (_c == 'Control + P'):                              $R.cc__reformat.$iframeWindow.print();          _stop = true; break;
                        case (_c == 'Command + P'):                              $R.cc__reformat.$iframeWindow.print();          _stop = true; break;
                            
                        //  highlight off
                        case ($R.highlighting && (_c == 'Escape')):              $R.menu_functions.highlighting_to_evernote();   _stop = true; break;
                        case ($R.highlighting && (_c == _v['keys_highlight'])):  $R.menu_functions.highlighting_to_evernote();   _stop = true; break;
        
                        //  highlight on
                        case (_c == _v['keys_highlight']):                       $R.menu_functions.highlight_to_evernote();      _stop = true; break;
        
                        //  clip
                        case (_c == _v['keys_clip']):                            $R.menu_functions.clip_to_evernote();           _stop = true; break;
                        
                        //  hide dialog, don't hide everything
                        case (_c == 'Escape'):                                   if ($R.hideOpenDialog()) { _stop = true; }                    break;
                        
                        //  hide -- has it's own event
                        //  case (_c == 'Escape'):                               $R.makeInvisible();                             _stop = true; break;
                        //  case (_c == _v['keys_activation']):                  $R.makeInvisible();                             _stop = true; break;
                    }
                    
                    //  stop
                    if (_stop) { _event.preventDefault(); _event.stopPropagation(); }
                });
            };
        
        
        //  menu
        //  ====
            $R.bind__menu = function ()
            {
                $('#sidebar_menu__close').click(function() {                    $R.menu_functions.close();                      return false; });
                $('#sidebar_menu__clip_to_evernote').click(function() {         $R.menu_functions.clip_to_evernote();           return false; });
                $('#sidebar_menu__clipping_to_evernote').click(function() {     $R.menu_functions.clipping_to_evernote();       return false; });
                $('#sidebar_menu__clipped_to_evernote').click(function() {      $R.menu_functions.clipped_to_evernote();        return false; });
                $('#sidebar_menu__highlight_to_evernote').click(function() {    $R.menu_functions.highlight_to_evernote();      return false; });
                $('#sidebar_menu__highlighting_to_evernote').click(function() { $R.menu_functions.highlighting_to_evernote();   return false; });
                $('#sidebar_menu__settings').click(function() {                 $R.menu_functions.settings();                   return false; });
                $('#sidebar_menu__settings_showing').click(function() {         $R.menu_functions.settings_showing();           return false; });
                $('#sidebar_menu__print').click(function() {                    $R.menu_functions.print();                      return false; });
            };
        
        
        //  misc
        //  ====
            $R.bind__misc = function ()
            {
                //  account footer
                //  ==============
                    $('#accountFooter__button').click(function () { $R.custom_events__dispatchToBackground('open--register--footer'); return false; });
            
                //  rtl
                //  ===
                    $('#curtain__rtl__radio__rtl').change(function(){ $R.rtl__yes(); return false; });
                    $('#curtain__rtl__radio__ltr').change(function(){ $R.rtl__no(); return false; });
            
                //  curtains
                //  ========
                    $('#curtains a.curtainCloseButton').click(function(){
                        $$(this.parentNode).hide();
                        return false;
                    });
                
                //  good ux
                //  =======
                    $('#fitts').click(function (_event) { $R.makeInvisible(); return false; });
                    $R.cc__reformat__extra.$background.dblclick(function (_event) { $R.makeInvisible(); return false; });
            
                //  scroll-back
                //  ===========
            
                    $R.scrollPosition = 0;
                    $R.goToNamedAnchor = function (_anchor)
                    {
                        var _$e = $("[id='"+_anchor+"'], [name='"+_anchor+"']");
                        if (_$e.length > 0) {}else { return; }
                    
                        $R.scrollPosition = $R.cc__reformat.$iframeWindow.scrollTop();
                        $('#bottom_scroll_back').show();
                    
                        $R.cc__reformat.$iframeWindow.scrollTop(_$e.offset().top);
                    };
            };
        
        
        //  related notes
        //  =============
            $R.bind__related_notes = function ()
            {
                //  on resize
                //  =========
                    $R.$window.resize(function () { $R.bind__related_notes__doPositioning(true); });
            
            
                //  on disable
                //  ==========
                    $('#relatedNotes__disable').click(function ()
                    {
                        //  do
                        $R.vars['related_notes'] = 'disabled';
                        $R.custom_events__dispatchToBackground('select--related-notes--disabled');
        
                        //  hide
                        $R.cc__reformat__extra.$relatedNotes.get(0).className = 'separateSection none';
        
                        //  positioning
                        $R.bind__related_notes__doPositioning(true);
        
                        return false;
                    });
        
                    
                //  on close
                //  ========
                    $('#relatedNotes__close').click(function ()
                    {
                        //  invalid
                        if ($R.vars['related_notes']) {}else { return false; }
                        
                        //  move to bottom
                        if ($R.vars['related_notes'] == 'enabled')
                        {
                            //  do
                            $R.vars['related_notes'] = 'just_at_bottom';
                            $R.custom_events__dispatchToBackground('select--related-notes--just-at-bottom');
        
                            //  hide
                            $R.cc__reformat__extra.$relatedNotes.get(0).className = 'separateSection none';
                            
                            //  positioning
                            $R.bind__related_notes__doPositioning(true);
        
                            return false;
                        }
                        
                        //  disable
                        if ($R.vars['related_notes'] == 'just_at_bottom')
                        {
                            var _$disable = $('#relatedNotes__disable');
                            if (_$disable.is(':hidden')) { _$disable.css({ 'display': 'inline-block' }); }
                            else { _$disable.css({ 'display': 'none' }); }
                            
                            return false;
                        }
                    });
            };
        
        
        //  helper
        //  ======
            $R.bind__related_notes__doPositioning = function (_instant)
            {
                var _computation_interval = false;
                var _computation = function ()
                {
                    //  wait for measuring to be done
                    if ($R.cc__reformat__measure){} else { return; }
        
                    //  clear interval
                    $R.window.clearInterval(_computation_interval);
                
                    //  snippet height
                    $R.cc__reformat__extra.$relatedNotes.find('div.snippet').css({
                        'height': (3 * $R.cc__reformat__measure.lineHeight) + 'px'
                    });
                
                    var _relatedNotesClass = false;
                    switch (true)
                    {
                        case ($R.vars['related_notes'] == 'disabled'):
                        case ($R.cc__reformat__extra.$relatedNotes.hasClass('empty')):
                            break;
        
                        case ($R.vars['related_notes'] == 'just_at_bottom'):
                            _relatedNotesClass = 'bottom';
                            break;
                            
                        case (($R.vars['related_notes'] == 'enabled') && !!($R.cc__reformat__measure)):
                        
                            var _spaceAvailable = (($R.cc__reformat__extra.$background.width() - 50 - $('#text').width()) / 2),
                                _spaceNeeded =    (36 * $R.cc__reformat__measure.fontSize),
                                _width =          (22 * $R.cc__reformat__measure.fontSize);
                            
                            if (_spaceAvailable >= _spaceNeeded)
                            {
                                var _top = $('#pages').position().top + $('#articleHeader__title').height(),
                                    _right = ((_spaceNeeded + _width) / 2) * (-1);
                                    
                                $R.cc__reformat__extra.$relatedNotes.css({
                                    'position': 'absolute',
                                    'top':      _top + 'px',
                                    'right':    _right + 'px',
                                    'width':    _width + 'px'
                                });
                                
                                _relatedNotesClass = 'right';
                            }
                            else
                            {
                                _relatedNotesClass = 'bottom';
                            }
                            
                            break;
                    }
                    
                    //  set
                    if (_relatedNotesClass)
                    {
                        //  when "bottom", reset style
                        if (_relatedNotesClass == 'bottom')
                        {
                            $R.cc__reformat__extra.$relatedNotes.attr('style', '');
                        }
                        
                        //  class
                        $R.cc__reformat__extra.$relatedNotes.get(0).className = _relatedNotesClass;
                    }
                };
            
                //  wait for it
                _computation_interval = $R.window.setInterval(_computation, 100);
            };
        
        
        
        //  show
        //  ====
            $R.showDialog = function (_dialog_id)
            {
                //  special cases, before
                switch (true)
                {
                    case (_dialog_id == 'clip__filing'):
                        //  hide open dropdown
                        $R.bind__dialogs__clip__filing__showDropdown('none');
                        break;
                    
                    case (_dialog_id == 'features'):
                    case (_dialog_id == 'eula'):
                        //  center both
                        var _$dialog = $('#dialog__'+_dialog_id);
                            _$dialog.css({
                                'top': ($R.cc__reformat.$iframeWindow.scrollTop() + 100) + 'px',
                                'left': ((($R.cc__reformat__extra.$background.width() - _$dialog.width()) / 2) - 25) + 'px'
                            });
                        
                        //  set height for eula
                        if (_dialog_id == 'features')
                        {
                            $('#dialog__eula__content').css({'height': (_$dialog.height() -28 -13 -62) + 'px'});
                            $('#dialog__eula_container').css({'height': (_$dialog.height() -28 -62) + 'px'});
                        }
                        
                        break;
                }
            
                //  regaular code
                //  =============
                
                    //  hide open
                    $R.hideOpenDialog();
        
                    //  show this
                    $R.cc__reformat__extra.$dialogsOverlay.show();
                    $('#dialog__'+_dialog_id).show();
                    $R.cc__reformat__extra.$html.addClass('showing_dialog__'+_dialog_id);
                
                    //  set
                    $R.openDialogID = _dialog_id;
                    
                //  special cases, after
                switch (true)
                {
                    case (_dialog_id == 'clip__filing'):
                        $('#filing__tag').get(0).focus();
                        break;
                }
            };
        
        
        //  hide
        //  ====
            $R.hideDialog = function (_dialog_id)
            {
                $('#dialog__'+_dialog_id).hide();
                $R.cc__reformat__extra.$dialogsOverlay.hide();
        
                $R.cc__reformat__extra.$html.removeClass('showing_dialog__'+_dialog_id);
                
                $R.openDialogID = ($R.openDialogID == _dialog_id ? '' : $R.openDialogID);
            };
            
        
        //  hide open
        //  =========
            $R.hideOpenDialog = function ()
            {
                //  no dialog
                if ($R.openDialogID > '') {}else { return false; }
        
                //  hide
                $R.hideDialog($R.openDialogID);
                
                //  reset
                $R.openDialogID = '';
                
                //  return
                return true;
            };
        
        
        //  after reformat created
        //  ======================
            $R.launch__after_reformat_is_created = function ()
            {
                //  apply options
                $R.cc__reformat__applyOptions();
            
                //  show
                $R.makeVisible(function () { $R.launch__after_reformat_is_visible(); });
            };
        
        
        //  after reformat visible
        //  ======================
            $R.launch__after_reformat_is_visible = function ()
            {
                //  load fonts
                $R.cc__reformat.loadGoogleFontsRequiredByAppliedOptions();
        
                //  bind keyboard escape
                $R.bind__keyboard__escape();
        
                //  send event -- will continue with $R.launch__after_detect_is_finished()
                $R.postMessageToPage('start--detect');
            };
        
        
        //  after detect is finished
        //  ========================
            $R.launch__after_detect_is_finished__recurrent = function ()
            {
                //  clear html
                $R.cc__reformat.clearAllPages();
            
                //  add html
                $R.cc__reformat.addNewPage($R.cc__detect__result._html, $R.url);
        
                //  make visible
                $R.makeVisible(function ()
                {
                    $R.makeVisible__show_content();
                    $R.makeVisible__enable_ui();
        
                    $R.doCallback__show();
                });
            };
            
            $R.launch__after_detect_is_finished = function ()
            {
                //  only run this once -- if we end up running detect multipel times, run a different callback
                if ($R.launch__after_detect_is_finished__has_run)
                {
                    $R.launch__after_detect_is_finished__recurrent();
                    return;
                }
            
                //  marked as having run
                $R.launch__after_detect_is_finished__has_run = true;
                
                //  add html
                $R.cc__reformat.addNewPage($R.cc__detect__result._html, $R.url);
        
                //  show content
                $R.makeVisible__show_content();
                
                //  create inner ui
                $R.cc__reformat__create_inner_ui();
                
                //  rtl
                if ($R.cc__detect__result._rtl) { $R.rtl__yes(); }
                else { if ($R.cc__detect__result._rtl_maybe) { $R.rtl__maybe(); } }
                
                //  bind events
                $R.bind__custom_events();
                $R.bind__menu();
                $R.bind__dialogs();
                $R.bind__keyboard();
                $R.bind__misc();
                $R.bind__related_notes();
                
                //  enable ui
                $R.makeVisible__enable_ui();
        
                //  init highlight
                $R.cc__highlight__init();
        
                //  send background events
                $R.launch__trigger_events();
        
                //  action
                $R.doAction();
                
                //  callback
                $R.doCallback__show();
                
                //  next, in a while
                window.setTimeout(function () { $R.postMessageToPage('start--next'); }, 10000);
            };
        
        
        //  trigger events
        //  ==============
            $R.launch__trigger_events = function ()
            {
                //  load secure frames
        
        
                //  first show?
                $R.custom_events__dispatchToBackground('track--first-show--check');
            
                //  track
                $R.trackedView = true;
                $R.custom_events__dispatchToBackground('track--view');
        
                //  display evernote footer?
                $R.custom_events__dispatchToBackground('track--evernote-footer--check');
        
                //  filing -- either very fast (from cache) or very slow
                $R.custom_events__dispatchToBackground('evernote--get-filing');
            
                //  get_recommendation -- delayed by 1 second
                switch (true)
                {
                    case ($R.vars['related_notes'] == 'enabled'):
                    case ($R.vars['related_notes'] == 'just_at_bottom'):
                    case ($R.vars['smart_filing'] == 'enabled'):
                    case ($R.vars['smart_filing'] == 'just_notebooks'):
                    case ($R.vars['smart_filing'] == 'just_tags'):
                        window.setTimeout(function () { $R.custom_events__dispatchToBackground('evernote--get-recommendation'); }, 1000);
                        break;
                }
            };
        
        
        //  menu functions
        //  ==============
        
            $R.menu_functions = {};
                
            $R.menu_functions['close'] =                    function () { $R.makeInvisible(); };
            $R.menu_functions['clip_to_evernote'] =         function () { $R.login__requestedFor = 'clip'; $R.cc__reformat__extra.$html.addClass('clipping'); $R.custom_events__dispatchToBackground('evernote--clip'); };
            $R.menu_functions['clipping_to_evernote'] =     function () { };
            $R.menu_functions['clipped_to_evernote'] =      function () { $R.showDialog('clip__filing'); };
            $R.menu_functions['highlight_to_evernote'] =    function () { $R.hideOpenDialog(); $R.cc__highlight__enable(); $R.cc__highlight.highlight__doCurentSelection(); };
            $R.menu_functions['highlighting_to_evernote'] = function () { $R.cc__highlight__disable(); };
            $R.menu_functions['settings_showing'] =         function () { $R.hideDialog('settings__4'); };
            $R.menu_functions['settings'] =                 function () { $R.showDialog('settings__4'); $R.custom_events__dispatchToBackground('track--theme-popup'); };
            $R.menu_functions['print'] =                    function () { $R.hideOpenDialog(); $R.cc__reformat.iframeWindow.print(); };
        
        
        //  rtl
        //  ===
        
            $R.rtl__yes = function ()
            {
                $('#curtain__rtl__radio__rtl').get(0).checked = true;
                $('#curtain__rtl__radio__ltr').get(0).checked = false;
                
                $R.cc__reformat__extra.$html.attr('dir', 'rtl').addClass('couldBeRTL').addClass('rtl');
                $('#pages').attr('dir', 'rtl').addClass('rtl');
            };
            
            $R.rtl__no = function ()
            {
                $('#curtain__rtl__radio__rtl').get(0).checked = false;
                $('#curtain__rtl__radio__ltr').get(0).checked = true;
        
                $R.cc__reformat__extra.$html.attr('dir', '').removeClass('rtl');
                $('#pages').attr('dir', '').removeClass('rtl');
            };
        
            $R.rtl__maybe = function ()
            {
                $('#curtain__rtl__radio__rtl').get(0).checked = false;
                $('#curtain__rtl__radio__ltr').get(0).checked = true;
        
                $R.cc__reformat__extra.$html.addClass('couldBeRTL');
            };
        
        
        //  helpers
        //  =======
            $R.scrolledWindowWhileReformatVisible = function () { $R.window.scrollTo(0, 0); };
        
            $R.makeVisible__enable_ui = function () { $R.cc__reformat__extra.$cover_everything.hide(); };
            $R.makeVisible__show_content = function () { $R.cc__reformat__extra.$loading.hide(); $R.cc__reformat__extra.$box.show(); };
        
        
        //  show
        //  ====
            $R.makeVisible = function (_callback)
            {
                //  get specs
                var _width = $R.cc__reformat.$iframe.width();
        
                //  cache
                var _$outer_body_and_html = $R.$document.find('body, html');
        
                //  bind scroll
                $R.$document.bind('scroll', $R.scrolledWindowWhileReformatVisible);
                
                //  prepare
                _$outer_body_and_html.addClass($R.cssClasses.before_visible + ' ' + $R.cssClasses.is_visible);
                $R.cc__reformat__extra.$box.hide();
                $R.cc__reformat__extra.$cover_everything.show();        
                $R.cc__reformat__extra.$sidebar.addClass('belowBackground withoutShading').css({ 'right': '-100px' });
                $R.cc__reformat__extra.$backgroundShading.show();
                $R.cc__reformat__extra.$background.css({ 'right': _width+'px' });
                    
                //  scroll -- remember and set
                $R.pagePositionBeforeShow__x = $R.$window.scrollLeft();
                $R.pagePositionBeforeShow__y = $R.$window.scrollTop();
                $R.cc__reformat.iframeWindow.scrollTo(0, 0);
                $R.window.scrollTo(0, 0);
        
                //  show frame
                $R.cc__reformat.$iframe.css({ 'top': '0px', 'left': '0px' });
        
                //  animation
                $R.cc__reformat__extra.$background.animate(
                    { 'right': '50px' }, 
                    $R.visibility__timers__show_background,
                    'evernote_clearly__background_show',
                    function ()
                    {
                        $R.cc__reformat__extra.$loading.show();
                        $R.cc__reformat__extra.$sidebar.css({ 'right': '50px' });
                            
                        $R.cc__reformat__extra.$sidebar.animate(
                            { 'right': '0px' }, 
                            $R.visibility__timers__show_sidebar,
                            'evernote_clearly__sidebar_show',
                            function ()
                            {
                                //  end animation
                                $R.cc__reformat__extra.$sidebar.removeClass('belowBackground withoutShading');
        
                                //  focus
                                if ($R.cc__reformat.iframeWindow.focus) { $R.cc__reformat.iframeWindow.focus(); }
                                
                                //  finished
                                $R.visible = true;
                                        
                                //  callback
                                if (_callback) { _callback(); }
                            });    
                    });
            };        
        
        
        //  hide
        //  ====
            $R.makeInvisible = function (_callback)
            {
                //  get specs
                var _width = $R.cc__reformat.$iframe.width();
            
                //  cache
                var _$outer_body_and_html = $R.$document.find('body, html');
            
                //  hide open dialogs
                $R.hideOpenDialog();
                    
                //  unbind scroll
                $R.$document.unbind('scroll', $R.scrolledWindowWhileReformatVisible);
        
                //  prepare
                $R.cc__reformat__extra.$background.css({ 'right': '50px' });
                $R.cc__reformat__extra.$sidebar.addClass('belowBackground withoutShading');
                $R.cc__reformat__extra.$backgroundShading.show();
                    
                //  inverse
                $R.cc__reformat__extra.$box.hide();
                $R.cc__reformat__extra.$cover_everything.show();
                _$outer_body_and_html.removeClass($R.cssClasses.is_visible);
        
                //  animation
                $R.cc__reformat__extra.$sidebar.animate(
                    { 'right': '50px' }, 
                    $R.visibility__timers__hide_sidebar,
                    'evernote_clearly__sidebar_hide',
                    function ()
                    {
                        $R.cc__reformat__extra.$sidebar.css({ 'right': '-100px' });
        
                        $R.cc__reformat__extra.$background.animate(
                            { 'right': _width+'px' }, 
                            $R.visibility__timers__hide_background,
                            'evernote_clearly__background_hide',
                            function ()
                            {
                                //  end animation
                                _$outer_body_and_html.removeClass($R.cssClasses.before_visible);
                                    
                                //  show frame
                                $R.cc__reformat.$iframe.css({ 'top': '-100%', 'left': '-100%' });
                                    
                                //  scroll
                                $R.$window.scrollLeft($R.pagePositionBeforeShow__x);
                                $R.$window.scrollTop($R.pagePositionBeforeShow__y);
                                    
                                //  focus
                                if ($R.window.focus) { $R.window.focus(); }
                                        
                                //  finished
                                $R.visible = false;
        
                                //  inverse
                                $R.cc__reformat__extra.$box.show();
                                $R.cc__reformat__extra.$cover_everything.hide();
                                
                                //  callback -- none, custom, default
                                if (_callback == 'none') { return; }
                                if (_callback) { _callback(); }
                                else { $R.doCallback__hide(); }
                            });
                    });
            };
        
    
    })();


//  ==========================================================================================================================

//  first run goes like this
//  ========================
/*  [misc]
    [from background]
    [hide reformat with inserted css]
    [init reformat] :: create basic inner UI here
    [create reformat frame] -> callback
        [apply reformat options]
        [opening animation] -> callback
            [bind keyboard escape]
            [load fonts]
            [init detect]
            [start detect] -> callback
                [add html]
                [create inner UI]
                [bind events]
                [enable inner UI]
                [after launch] :: special actions
*/


//  run
//  ===
    (function () {
    
        
        //  settings
        //  ========
        
            //  debug
            $R.debug = true;
        
            //  css IDs -- set in init.js
            $R.cssIDs.reformat = $R.cssIDs.prefix + 'reformat';
        
            //  css classes -- new
            $R.cssClasses = {};
            $R.cssClasses.prefix =          'evernote_clearly__';
            $R.cssClasses.before_visible =  $R.cssClasses.prefix + 'before_visible';
            $R.cssClasses.is_visible =      $R.cssClasses.prefix + 'is_visible';
        
            //  appear
            $R.visibility__timers__show_background = 500;
            $R.visibility__timers__show_sidebar = 500;
            $R.visibility__timers__hide_sidebar = 100;
            $R.visibility__timers__hide_background = 500;
        
        
        //  state
        //  =====
        
            $R.visible = false;
        
            $R.openDialogID = false;
            $R.login__requestedFor = false;
            $R.highlighting = false;
        
        
        //  cached
        //  ======
            $R.$window = $$($R.window);      //  original window
            $R.$document = $$($R.document);  //  original document
        
        
        //  related notes
        //  =============
            $R.relatedNotes__first__mouseEnter_timeout = false;
            $R.relatedNotes__first__mouseLeave_timeout = false;
            $R.relatedNotes__second__mouseEnter_timeout = false;
            $R.relatedNotes__second__mouseLeave_timeout = false;
        
        
        //  misc
        //  ====
        
            $R.pagePositionBeforeShow__x = 0;
            $R.pagePositionBeforeShow__y = 0;
        
            $R.os = $R.from_user_agent__get_os(window.navigator.userAgent);
        
            
        //  false for now -- assigned in other places
        //  =============
        
            $R.options = false;
            $R.vars = false;
        
            $R.cc__detect = false;
            $R.cc__highlight = false;
            $R.cc__next = false;
            $R.cc__reformat = false;
            $R.cc__next = false;
        
            $R.cc__reformat__extra = false;
            $R.cc__detect__result = false;
        
        
        //  debug
        //  =====
        
            $R.debug = ($R.debug || false);
            $R.debugRemembered = {};
            
            if ($R.debug)
            {
                switch (true)
                {
                    case (!!$R.window.console && !!$R.window.console.log):    $R.writeLog = function (msg) { $R.window.console.log(msg); };      break;
                    case (!!$R.window.opera && !!$R.window.opera.postError):  $R.writeLog = function (msg) { $R.window.opera.postError(msg); };  break;
                    default:                                                  $R.writeLog = function (msg) { };                                  break;
                }
        
                $R.log = function ()
                {
                    if ($R.debug) {}else { return; }
                    for (var i=0, il=arguments.length; i<il ; i++) { $R.writeLog(arguments[i]); }
                    $R.writeLog('-----------------------------------------');
                };
                    
                $R.debugRemember = function (_k, _v)
                {
                    $R.debugRemembered[_k] = _v;
                };
            }
            else
            {
                $R.writeLog         = function () { return false; };
                $R.log              = function () { return false; };
                $R.debugRemember    = function () { return false; };
            }
        
        
        //  get translation        
        $R.from_background__translation();

        //  get vars/options
        $R.from_background__options();
        $R.from_background__vars();

        //  reformat css
        $R.cc__reformat__create_outer_css();

        //  init reformat
        $R.cc__reformat__init();

        //  create reformat frame => $R.launch__after_reformat_is_created()
        $R.cc__reformat.createFrame();

        //    fix flash
        $R.$document.find("param[name='wmode']").attr('value', 'opaque');
        $R.$document.find("embed").attr('wmode', 'opaque');
    
    })();

})(window.parent.$evernote_clearly_in_isolation, $); });
