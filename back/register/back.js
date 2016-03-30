
//  import target-specific stuff
//  ============================
    (function ($R) {
    
        /* chrome: */
        
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
        
        
        //  logOneline
        //  ==========
            $R.logOneLine = function (msg) { window.console.log(msg); };
            

        /* firefox: */



    
    })(window.__readable_by_evernote__register__back);


//  import _js_anywhere/
//  ====================
    (function ($R) {
    
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

    })(window.__readable_by_evernote__register__back);


//  import _js_background/
//  =========================
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
        
        
        
    })(window.__readable_by_evernote__register__back);


//  ==========================================================================================================================


//  run
//  ===
    (function ($R) {

        $R.$bootstrap.initialize();
        $R.$bootstrap.initializeForQA();

    })(window.__readable_by_evernote__register__back);
