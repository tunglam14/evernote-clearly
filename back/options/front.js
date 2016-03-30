
//  import _js_anywhere/
//  ====================
    (function ($O) {
    
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
            $O.escape_html =    _escape_html;
            $O.unescape_html =  _unescape_html;
            $O.encode =         _encode;
            $O.decode =         _decode;
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
            $O.default_options =        _default_options;
            $O.default_vars =           _default_vars;
            $O.the_sizes =              _the_sizes;
            $O.the_themes =             _the_themes;
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
            $O.get_key_combo_from_event = _get_key_combo_from_event;
        })();

        (function () {
            
            //  translate dom
            //  =============
                var _translate_dom = function (_jquery, _translate)
                {
                    _jquery('[translate]').each(function()
                    {
                        //  vars
                        var _$t = _jquery(this),
                            _tk = _$t.attr('translate'),
                            _tt = _translate(_tk),
                            _tt = (_tt > '' ? _tt : '[' + _tk + ']');
                
                        //  X parameter
                        if (_tt.indexOf('[=x]') > -1)
                        {
                            var _x = _$t.attr('translate_x');
                                _t = _tt.replace('[=x]', _x);
                        }
                
                        //  type of element
                        switch (true)
                        {
                            case ((_$t.attr('type') == 'button')   && (this.tagName.toLowerCase() == 'input')): _$t.attr('value', _tt);       break;
                            case ((_$t.attr('type') == 'text')     && (this.tagName.toLowerCase() == 'input')): _$t.attr('placeholder', _tt); break;
                            case ((_$t.attr('type') == 'password') && (this.tagName.toLowerCase() == 'input')): _$t.attr('placeholder', _tt); break;
                            default: _$t.html(_tt); break;
                        }
                    });
                };
            
            /* =============== */
            $O.translate_dom = _translate_dom;
        })();

        (function () {
            
            //  translations
            //  ============
                var _translations__options = {
                
                    'title__page':                                  'Clearly / Options',
                    'title__general':                               'Options',
                    'title__custom':                                'Custom Theme',
                    'title__features':                              'Clearly Features',
                    
                    /* === */
                    
                    'title__sub__keyboard':                         'Keyboard shortcuts',
                    'message__keys':                                'To change, place cursor in field and strike key combination on your keyboard.',
                    'message__keys_firefox':                        'Restart your browser, afer saving.',
                    'keys_activation__label':                       'View page in Clearly',
                    'keys_clip__label':                             'Clip to Evernote',
                    'keys_highlight__label':                        'Highlight',
            
                    /* === */
            
                    'title__sub__tags':                             'Tag Selection',
                    'message__tags':                                'Tags to apply, when you Clip to Evernote.',
                    'clip_tag__specific__label':                    'Use specific Tag',
                    'clip_tag__smart__label':                       'Use Smart Filing',
            
                    /* === */
            
                    'title__sub__notebook':                         'Notebook Selection',
                    'message__notebook':                            'Notebook to clip to, when you Clip to Evernote.',
                    'clip_notebook__specific__label':               'Use specific Notebook',
                    'clip_notebook__smart__label':                  'Use Smart Filing',
                    'clip_notebook__default':                       'Default',
                    'clip_notebook__your':                          'Your Notebooks',
                    'clip_notebook__shared':                        'Shared Notebooks',
                    'clip_notebook__business':                      'Business Notebooks',
                    
                    /* === */
            
                    'title__sub__smart_filing':                     'Smart Filing',
                    'message__smart_filing':                        'Let Evernote determine what Notebook clips should go into, and what Tags they should get.',
                    'smart_filing__enabled__label':                 'Enable Smart Filing',
                    'smart_filing__just_notebooks__label':          'Enable Smart Filing, but just for Notebooks',
                    'smart_filing__just_tags__label':               'Enable Smart Filing, but just for Tags',
                    'smart_filing__disabled__label':                'Disable Smart Filing',
                    'smart_filing_for_business__notebooks__label':  'For Business Notebooks too',
                    'smart_filing_for_business__tags__label':       'For Business Tags too',
            
                    /* === */
            
                    'title__sub__related_notes':                    'Related Notes',
                    'message__related_notes':                       'Let Evernote fetch clips from your account that might be relevant to what you are reading now.',
                    'related_notes__enabled__label':                'Enable Related Notes',
                    'related_notes__just_at_bottom__label':         'Only show Related Notes at the bottom',
                    'related_notes__disabled__label':               'Disable Related Notes',
            
                    /* === */
            
                    'title__sub__open_notes_in':                    'Open notes in',
                    'message__open_notes_in':                       'When openinig notes from Clearly, use a specific Evernote client.',
                    'open_notes_in__web__label':                    'Web client',
                    'open_notes_in__desktop__label':                'Desktop client',
                    
                    /* === */
            
                    'title__sub__account':                          'Account',
                    'account__sign_out':                            'Permanently signed in as [[=email]].',
                    'account__sign_out_link':                       'Sign out.',
                    'account__signed_out':                          'You are not permanently signed in. Click on the Evernote icon, in the Clearly sidebar, to sign in.',
            
                    /* === */
                    
                    'text_font__label':                             'Body Font',
                    'text_font_header__label':                      'Header Font',
                    'text_font_monospace__label':                   'Monospace Font',
                    'text_size__label':                             'Base Font Size',
                    'text_line_height__label':                      'Line Height',
                    'box_width__label':                             'Line Width',
                    'color_background__label':                      'Background Color',
                    'color_text__label':                            'Foreground Color',
                    'color_links__label':                           'Links Color',
                    'text_align__label':                            'Text Align',
                    'base__label':                                  'Base CSS',
                    'custom_css__label':                            'Custom CSS',
                    'footnote_links__label':                        'Links as Footnotes',
                    'large_graphics__label':                        'Large Graphics',
                    
                    /* === */
                    
                    'values__text_align__Normal':                   'Normal',
                    'values__text_align__Justified':                'Justified',
            
                    'values__base__Blueprint__not_translated':      'Blueprint',
                    'values__base__Theme_1__not_translated':        'Newsprint',
                    'values__base__Theme_2__not_translated':        'Notable',
                    'values__base__Theme_3__not_translated':        'Night Owl',
                    
                    'values__base__Blueprint':                      'Blueprint',
                    'values__base__Theme_1':                        'Newsprint',
                    'values__base__Theme_2':                        'Notable',
                    'values__base__Theme_3':                        'Night Owl',
                    'values__base__None':                           'None',
                    
                    'values__footnote_links__On_Print':             'On Print',
                    'values__footnote_links__Always':               'Always',
                    'values__footnote_links__Never':                'Never',
                    
                    'values__large_graphics__Do_Nothing':           'Show Always',
                    'values__large_graphics__Hide_on_Print':        'Hide on Print',
                    'values__large_graphics__Hide_Always':          'Hide Always',
                    
                    'values__menu_placement__Top_Right':            'Top Right',
                    'values__menu_placement__Bottom_Right':         'Bottom Right',
            
                    /* === */
                    
                    'button__save_general':                         'Save Options',
                    'button__save_custom':                          'Save Theme',
                    'button__more_options':                         'More Options',
                    'button__reset_custom':                         'Reset',
                    
                    /* === */
            
                    'misc__print_preview':                       'Print Preview',
                    'misc__reset_theme':                         'Reset Custom Theme',
                    'misc__reset_theme__confirm':                'This will set your custom theme\'s values to be the same as the default theme\'s values. Are you sure you want to do this?',
            
                    'misc__saving':                              'Saving',
                    'misc__saved':                               'Settings will be in effect on any new tabs you use Clearly on.'
                
                };    
            
            /* =============== */
            $O.translation__items = _translations__options;
            
            
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
            for (var _k in _translations__features) { $O.translation__items[_k] = _translations__features[_k]; }
            
            //  translated strings may have &stuff; in them
            $O.translate = function (_key) { var _r = $O.translation__items[_key]; return $O.escape_html($O.unescape_html(_r ? _r : _key)); };
        })();

    })(window.__readable_by_evernote__options__front);
    
    
//  ==========================================================================================================================
    

//  import this
//  ===========
    (function ($O, $B) {

        
        //  get background
        //  ==============
            $O.get_background_object = function ()
            {
                var _w = chrome.extension.getBackgroundPage();
                return _w.__readable_by_evernote;
            };
        
        
        //  translation
        //  ===========
            $O.translation__get_item = function (_key)
            {
                //  default
                var _t = chrome.i18n.getMessage('options__'+_key);
                
                //  custom
                switch (true)
                {
                    case (_key.match(/^features__/) != null):
                        _t = chrome.i18n.getMessage('inside__'+_key);
                        break;
                }
                
                return (_t > '' ? _t : '');
            };
        


        
        //  get strings
        //  ===========
            $O.translation__get_items = function ()
            {
                for (var x in $O.translation__items)
                {
                    var _t = $O.translation__get_item(x);
                    if (_t > '') {}else { continue; }
                
                    $O.translation__items[x] = _t;
                }
            
        
            };
            
        
        //  do translate
        //  ============
            $O.translation__apply = function ()
            {
                //  translate everything
                //  ====================
                    $O.translate_dom($, $O.translate);
        
                //  misc other stuff
                //  ================
                
                    $('#preview__custom_theme__print').attr('title', $O.translate('misc__print_preview'));
                    $('#preview__custom_theme__reset').attr('title', $O.translate('misc__reset_theme'));
                
                    $('#features__eula_notice span').html($('#features__eula_notice span').html().replace('[=eula]', '<a href="#">'+$O.translate('features__eula')+'</a>'));
                    $('#features__eula_notice span a').click(function () { $('body').addClass('showEula'); return false; });
            };
        

        
        //  general
        //  =======
            $O.values_put__general = function ()
            {
                //  vars
                var _vars = $B.saved__get_vars(),
                    _varsDecoded = {};
        
                //  decode
                for (var _x in _vars) { _varsDecoded[_x] = $O.decode(_vars[_x]); }
                    
                //  keys
                $('#keys_activation__control').val(_varsDecoded['keys_activation']);
                $('#keys_clip__control').val(_varsDecoded['keys_clip']);
                $('#keys_highlight__control').val(_varsDecoded['keys_highlight']);
        
                //  tag
                var _clip_tag = _varsDecoded['clip_tag'];
                $('#clip_tag__control').val(_clip_tag);
                $('#clip_tag__radio__specific').get(0).checked = (_clip_tag > '');
                $('#clip_tag__radio__smart').get(0).checked = ('|enabled|just_tags|'.indexOf(_varsDecoded['smart_filing']) > -1);
                $('#smart_filing_for_business__tags__control').get(0).checked = ('|enabled|just_tags|'.indexOf(_varsDecoded['smart_filing_for_business']) > -1);
                $O.values_put__tags__sub_display();
        
                //  notebook
                var _clip_notebook_id = _varsDecoded['clip_notebook_id'];
                $('#clip_notebook_id__control').attr('_selected', _clip_notebook_id);
                $('#clip_notebook__radio__smart').get(0).checked = ('|enabled|just_notebooks|'.indexOf(_varsDecoded['smart_filing']) > -1);
                $('#clip_notebook__radio__specific').get(0).checked = !$('#clip_notebook__radio__smart').get(0).checked;
                $('#smart_filing_for_business__notebooks__control').get(0).checked = ('|enabled|just_notebooks|'.indexOf(_varsDecoded['smart_filing_for_business']) > -1);
                $O.values_put__notebooks__sub_display();
        
                //  related notes                
                var _related_notes = _varsDecoded['related_notes'];
                switch (true)
                {
                    case (_related_notes == 'enabled'):         $('#related_notes__radio__enabled').get(0).checked = true;        break;
                    case (_related_notes == 'just_at_bottom'):  $('#related_notes__radio__just_at_bottom').get(0).checked = true; break;
                    case (_related_notes == 'disabled'):        $('#related_notes__radio__disabled').get(0).checked = true;       break;
                }
        
                //  open notes in
                var _open_notes_in = _varsDecoded['open_notes_in'];
                switch (true)
                {
                    case (_open_notes_in == 'web'):     $('#open_notes_in__radio__web').get(0).checked = true;     break;
                    case (_open_notes_in == 'desktop'): $('#open_notes_in__radio__desktop').get(0).checked = true; break;
                }
            };
                
                
        //  custom
        //  ======
            $O.values_put__custom = function ()
            {
                //  hold custom reset options
                $O.values_put__reset_custom_theme = $B.saved__get_options();
        
                //  get custom theme options -- serialize as [[=option_name][=option_value]]
                var _vars = $B.saved__get_vars(),
                    _customThemeOptionsAggregate = $O.decode(_vars['custom_theme_options']),
                    _customThemeOptions = {},
                    _customThemeOptionsUse = true;
                
                //  get _customThemeOptions    
                _customThemeOptionsAggregate.replace(/\[\[=(.*?)\]\[=(.*?)\]\]/gi, function (_match, _name, _value) { _customThemeOptions[_name] = _value; });
                        
                //  if customThemeOptions has all the options filled-in, then use the customThemeOptions var as the values_put__reset_custom_theme var
                for (var _option in $O.default_options) { if (_option in _customThemeOptions) {}else { _customThemeOptionsUse = false; break; } }
                $O.values_put__reset_custom_theme = (_customThemeOptionsUse ? _customThemeOptions : $O.values_put__reset_custom_theme);
                        
                //  put in ui
                $O.values_put__custom__reset();
            };
        
            $O.values_put__custom__reset = function ()
            {
                //  decode
                var _varsDecoded = {};
                for (var _x in $O.values_put__reset_custom_theme) { _varsDecoded[_x] = $O.decode($O.values_put__reset_custom_theme[_x]); }
                
                //  list
                var _normalOptionsList = [
                    'color_background', 'color_text', 'color_links',
                    'text_size', 'box_width', 'text_line_height',
                    'base', 'text_align', 'footnote_links', 'large_graphics'
                ];
                    
                //  normal options
                for (var i=0, _i=_normalOptionsList.length; i<_i; i++) { $('#'+_normalOptionsList[i]+'__control').val(_varsDecoded[_normalOptionsList[i]]); }
                            
                //  fonts
                var _u = $O.values_put__custom__reset__unquote_fonts;
                $('#text_font__control').val(           _u(_varsDecoded['text_font']));
                $('#text_font_header__control').val(    _u(_varsDecoded['text_font_header']));
                $('#text_font_monospace__control').val( _u(_varsDecoded['text_font_monospace']));
                        
                //  custom -- add new line, after every }
                $('#custom_css__control').val(_varsDecoded['custom_css'].replace(/\}/gi, '}\n'));
            };
                
            $O.values_put__custom__reset__unquote_fonts = function (_s)
            {
                return _s.replace(/"([^"]+)"/gi, '$1');
            };
        
        
        //  qa
        //  ==
            $O.values_put__qa = function ()
            {
                //  vars
                var _varsDecoded = {},
                    _vars = {
                        'qa__servers': $B.storage__get('qa__servers'),
                        'qa__language': $B.storage__get('qa__language')
                    };
        
                //  decode
                for (var _x in _vars) { _varsDecoded[_x] = $O.decode(_vars[_x]); }
                    
                //  servers
                var _servers = _varsDecoded['qa__servers'];
                    _servers = (_servers ? _servers : 'live');
                switch (true)
                {
                    case (_servers == 'live'):  $('#qa__servers__live').get(0).checked = true;  break;
                    case (_servers == 'stage'): $('#qa__servers__stage').get(0).checked = true; break;
                }
        
                //  language
                var _language = _varsDecoded['qa__language'];
                    _language = (_language ? _language : 'default');
                switch (true)
                {
                    case (_language == 'default'):          $('#qa__language__default').get(0).checked = true;          break;
                    case (_language == 'simulate_chinese'): $('#qa__language__simulate_chinese').get(0).checked = true; break;
                }
            };
        
        
        //  notebooks
        //  =========
            $O.values_put__notebooks = function ()
            {
                var _back = $O.get_background_object(),
                    _$select_element = $('#clip_notebook_id__control'),
                    _select_html = '',
                    _selected = _$select_element.attr('_selected');
                    
                $O.values_put__notebooks__ensureFiling(_back, function ()
                {
                    //  no filing
                    if (_back.$remote.filing__notebooks && _back.$remote.filing__notebooks__order) {}else { return; }
        
                    //  loop; add
                    for (var _s='', _n=false, _i=0, _ii=_back.$remote.filing__notebooks__order.length; _i<_ii; _i++)
                    {
                        //  notebook
                        _n = _back.$remote.filing__notebooks[_back.$remote.filing__notebooks__order[_i]];
                
                        //  write stack / open & close
                        switch (true)
                        {
                            case ((_n.stack > '') && (_n.stack != _s)): // open
                                _s = _n.stack;
                                _select_html += '<optgroup label="'+$O.escape_html(_s)+'">';
                                break;
                                
                            case ((_s > '') && !(_n.stack > '') && (_n.stack != _s)): // close
                                _select_html += '</optgroup>';
                                break;
                        }
        
                        //  write notebook
                        _select_html += '<option value="'+$O.escape_html(_n.id)+'">' + $O.escape_html(_n.name) + '</option>';
                    }
                    
                    //  write html to combo
                    _$select_element.html(_select_html);
                    
                    //  change selected
                    _selected = (_selected || _back.$remote.setting__clip_notebook_id);
                    
                    //  select _selected
                    _$select_element.val(_selected);
                    
                    //  check checkbox
                    if (_$select_element.val())
                    {
                        $('#clip_notebook__radio__no').attr('checked', false);
                        $('#clip_notebook__radio__yes').attr('checked', true);
                    }
                }, 
                function () {});
            };    
        
            $O.values_put__notebooks__ensureFiling = function (_back, _onSuccess, _onFailure)
            {
                _back.$remote.ensure_filing(function () { _onSuccess(); }, function ()
                {
                    var _storedLogin = _back.credentials__get();
                    switch (true)
                    {
                        case (!_back.$remote.is__connected):
                        case (!_back.$remote.is__loggedIn):
                        case (!_back.$remote.is__notExpired()):
                
                            //  not connected / logged-in
                            //      and we know this -- so do connect/login
                        
                            //  no stored login
                            //  ===============
                                if (_storedLogin == false) { _onFailure(); return; }
                
                            //  do stored login
                            //  ================
                                _back.$remote.loginWithAuthToken(
                            
                                    _storedLogin.xAuthToken,
        
                                    //  login => success
                                    function () { _back.$remote.ensure_filing(_onSuccess, _onFailure); },
        
                                    //  login => failure
                                    function (_failReason) { _onFailure(); });
                    
                            break;
                    
                        default:
        
                            //  should be both connected and logged in
                            _back.$remote.ensure_filing(_onSuccess, _onFailure);
                            
                            break;
                    }
                });
            };
        
        
        //  general
        //  =======
            $O.values_get__general = function()
            {
                //  vars
                var _varsDecoded = {},
                    _vars = {};
        
                //  keys
                _varsDecoded['keys_activation'] =   $('#keys_activation__control').val();
                _varsDecoded['keys_clip'] =         $('#keys_clip__control').val();
                _varsDecoded['keys_highlight'] =    $('#keys_highlight__control').val();
        
                //  tag        
                _varsDecoded['clip_tag'] = $('#clip_tag__control').val();
                _varsDecoded['clip_tag'] = ($('#clip_tag__radio__specific').get(0).checked ? _varsDecoded['clip_tag'] : '');
        
                //  notebook
                _varsDecoded['clip_notebook_id'] = $('#clip_notebook_id__control').val();
                _varsDecoded['clip_notebook_id'] = ($('#clip_notebook__radio__smart').get(0).checked ? '' : _varsDecoded['clip_notebook_id']);
                _varsDecoded['clip_notebook'] =      '';
                _varsDecoded['clip_notebook_guid'] = '';
                        
                //  smart filing
                var _t = $('#clip_tag__radio__smart').get(0).checked,
                    _n = $('#clip_notebook__radio__smart').get(0).checked;
                
                switch (true)
                {
                    case (_t && _n):  _varsDecoded['smart_filing'] = 'enabled';        break;
                    case (!_t && _n): _varsDecoded['smart_filing'] = 'just_notebooks'; break;
                    case (_t && !_n): _varsDecoded['smart_filing'] = 'just_tags';      break;
                    default:          _varsDecoded['smart_filing'] = 'disabled';       break;
                }
        
                //  smart filing for business
                var _tb = $('#smart_filing_for_business__tags__control').get(0).checked,
                    _nb = $('#smart_filing_for_business__notebooks__control').get(0).checked;
                
                switch (true)
                {
                    case (_tb && _nb):  _varsDecoded['smart_filing_for_business'] = 'enabled';        break;
                    case (!_tb && _nb): _varsDecoded['smart_filing_for_business'] = 'just_notebooks'; break;
                    case (_tb && !_nb): _varsDecoded['smart_filing_for_business'] = 'just_tags';      break;
                    default:            _varsDecoded['smart_filing_for_business'] = 'disabled';       break;
                }
                        
                //  related notes
                switch (true)
                {
                    case ($('#related_notes__radio__enabled').get(0).checked):        _varsDecoded['related_notes'] = 'enabled';        break;
                    case ($('#related_notes__radio__just_at_bottom').get(0).checked): _varsDecoded['related_notes'] = 'just_at_bottom'; break;
                    case ($('#related_notes__radio__disabled').get(0).checked):       _varsDecoded['related_notes'] = 'disabled';       break;
                }
        
                //  open notes in
                switch (true)
                {
                    case ($('#open_notes_in__radio__web').get(0).checked):            _varsDecoded['open_notes_in'] = 'web';      break;
                    case ($('#open_notes_in__radio__desktop').get(0).checked):        _varsDecoded['open_notes_in'] = 'desktop';  break;
                }
                        
                //  encode
                for (var _x in _varsDecoded) { _vars[_x] = $O.encode(_varsDecoded[_x]); }
                    
                return _vars;
            };
                
        
        //  custom
        //  ======
            $O.values_get__custom = function()
            {
                //  vars
                var _optionsDecoded = {},
                    _options = {},
                    _optionsList = [
                        'color_background', 'color_text', 'color_links',
                        'text_size', 'box_width', 'text_line_height',
                        'base', 'text_align', 'footnote_links', 'large_graphics'
                    ];
                    
                //  normal options
                for (var _i=0, _ii=_optionsList.length; _i<_ii; _i++) { _optionsDecoded[_optionsList[_i]] = $('#'+_optionsList[_i]+'__control').val(); }
                        
                //  fonts
                _optionsDecoded['text_font'] =           $O.values_get__custom__quoteFonts($('#text_font__control').val());
                _optionsDecoded['text_font_header'] =    $O.values_get__custom__quoteFonts($('#text_font_header__control').val());
                _optionsDecoded['text_font_monospace'] = $O.values_get__custom__quoteFonts($('#text_font_monospace__control').val());
                    
                //  custom
                _optionsDecoded['custom_css'] =          $('#custom_css__control').val().replace(/[\r\n]/gi, '');
                
                //  encode
                for (var _x in _optionsDecoded) { _options[_x] = $O.encode(_optionsDecoded[_x]); }
                    
                return _options;
            };
                
            $O.values_get__custom__quoteFonts = function (_val)
            {
                var _r='', _v='', _m = _val.split(',');
                for (var i=0, _i=_m.length; i<_i; i++)
                {
                    _v = _m[i].replace(/\s+/gi, ' ').replace(/^\s/, '').replace('\s$/', '');
                    _r += ', '+((_v.indexOf(' ') > -1) ? '"'+_v+'"' : _v);
                }
                
                return _r.substr(2);
            };
        
        
        //  validate
        //  ========
            $O.values_get__validate_custom_theme = function ()
            {
                //  list    
                var _requiredList = [
                    'text_font', 'text_font_header', 'text_font_monospace',
                    'color_background', 'color_text', 'color_links',
                    'text_size', 'box_width', 'text_line_height'
                ];
                    
                //  remove errors    
                $('#view__custom table.controlTable').removeClass('error');    
                    
                //  vars
                var _errors = {},
                    _optionsEncoded = $O.values_get__custom(),
                    _optionsDecoded = {};
                    
                //  decode
                for (var _x in _optionsEncoded) { _optionsDecoded[_x] = $O.decode(_optionsEncoded[_x]); }
                    
                //  required vars
                for (var i=0, _i=_requiredList.length; i<_i; i++) { 
                    if (_optionsDecoded[_requiredList[i]] == 'none') { 
                        _errors[_requiredList[i]] = true;
                    } 
                }
                
                //  colors
                var _colors = { 'color_background': 'x', 'color_text': 'x', 'color_links': 'x' };
                for (var _color in _colors) { 
                    if (_errors[_color]) {}else {
                        switch (true) {
                            case (_optionsDecoded[_color].match(/^#[a-f0-9]{6}$/gi) != null): break;
                            case (_optionsDecoded[_color].match(/^#[a-f0-9]{3}$/gi) != null): break;
                            default: _errors[_color] = true; break;
                        }
                    }
                }
                    
                //  units
                var _units = { 'text_size': 'x', 'box_width': 'x', 'text_line_height': 'x' };
                for (var _unit in _units) { 
                    if (_errors[_unit]) {}else {
                        switch (true) {
                            case (_optionsDecoded[_unit].match(/^([0-9.]+)(%|em|ex|pt|px)$/gi) != null): break;
                            default: _errors[_unit] = true; break;
                        }
                    }
                }
                
                //  has errors
                var _hasError = false;
                for (var _error in _errors) {
                    _hasError = true; 
                    $('#'+_error+'__controlTable').addClass('error'); 
                }
                if (_hasError) { return false; }
        
                //  no errors
                $O.values_get__valid_custom_theme = _optionsEncoded;
                return true;
            };
        
        
        //  QA
        //  ==
            $O.values_get__qa = function()
            {
                //  vars
                var _varsDecoded = {},
                    _vars = {};
        
                //  servers
                switch (true)
                {
                    case ($('#qa__servers__live').get(0).checked):  _varsDecoded['qa__servers'] = 'live'; break;
                    case ($('#qa__servers__stage').get(0).checked): _varsDecoded['qa__servers'] = 'stage'; break;
                }
        
                //  language
                switch (true)
                {
                    case ($('#qa__language__default').get(0).checked):          _varsDecoded['qa__language'] = 'default';          break;
                    case ($('#qa__language__simulate_chinese').get(0).checked): _varsDecoded['qa__language'] = 'simulate_chinese'; break;
                }
        
                //  encode
                for (var _x in _varsDecoded) { _vars[_x] = $O.encode(_varsDecoded[_x]); }
                    
                return _vars;
            };
        



        
        //  reformat/custom_theme init
        //  ==========================
            $O.cc__custom_theme__reformat__init = function()
            {
                $O.cc__custom_theme__reformat = {
                    'callbacks': {
                        'frameCreated': function () {
                            /* this */        var _this = $O.cc__custom_theme__reformat;
                            /* apply theme */ _this.applyEncodedOptions($O.values_put__reset_custom_theme);
                            /* load fonts */  _this.loadGoogleFontsRequiredByAppliedOptions();
                            /* add page */    _this.addNewPage($('#preview__custom_theme__contents').html(), 'http://www.example.com/');
                            /* no links */    _this.$iframeDocument.find('a').click(function () { return false; });
                        }
                    },
                    'settings': {
                        'cssPath': $O.paths.front+'the_components/reformat/css/',
                        
                        'onAddPageAttachFootnotesToLinks':       true,
                        
                        'onCreateFrameDoNotInsertCSS':           true,
                        'createFrameInsideElementWithThisId':    'preview__custom_theme',
                        'onCreateFrameUseThisId':                'preview__custom_theme__iframe',
                        
                        'onGetCSSFromOptionsInjectThisCSSAfter': ''                                 +
                            '#text { padding: 20px; padding-top: 14px; padding-bottom: 0; } '       +
                            '#box, .setBoxWidth { padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; margin-right: 0 !important; } ' +
                            '#box_inner, .setBoxWidthInner { margin-left: 0 !important; margin-right: 0 !important; } ' +
                            '#body { overflow-x: hidden; } '                                        +
                        ''
                    },
                    'debug': false,
                    'window': window,
                    'jQuery': window.jQuery
                };
                $O.cc__custom_theme__reformat = window.initClearlyComponent__reformat($O.cc__custom_theme__reformat);
                $O.cc__custom_theme__reformat.createFrame();
            };
        
        
        //  reformat/custom_theme update
        //  ============================
            $O.cc__custom_theme__reformat__update = function()
            {
                //  valid?
                if ($O.values_get__validate_custom_theme()) {}else { return false; }
                
                // this
                var _this = $O.cc__custom_theme__reformat;
                
                // apply theme
                _this.applyEncodedOptions($O.values_get__valid_custom_theme);
                
                //  true
                return true;
            };
        

    })(window.__readable_by_evernote__options__front, window.__readable_by_evernote__options__back);


//  ==========================================================================================================================


//  run
//  ===
    (function ($O, $B) {

        //  vars
        $O.storedLogin = $B.credentials__get();
        $O.paths = { 
            'back': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/back/', 
            'front': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/front/', 
            'evernote': 'https://www.evernote.com/' 
        };

        //  ui/init
        
        //  helpers
        //  =======
        
            $O.spin = function (_callback)
            {
                $('#spinner').show();
                window.setTimeout(function()
                {
                    $('#spinner').hide();
                    if (_callback) { _callback(); }
                }, 1000);
            };
        
            $O.values_put__notebooks__sub_display = function ()
            {
                //  one or the other can be enabled
                
                if ($('#clip_notebook__radio__smart').get(0).checked)
                {
                    $('#clip_notebook_id__control').hide();
                    $('#smart_filing_for_business__notebooks__container').show();
                }
                else
                {
                    $('#smart_filing_for_business__notebooks__container').hide();
                    $('#clip_notebook_id__control').show();
                }
            };
        
            $O.values_put__tags__sub_display = function ()
            {
                //  both can be enabled
                
                if ($('#clip_tag__radio__specific').get(0).checked)
                {
                    $('#clip_tag__control').show();
                }
                else
                {
                    $('#clip_tag__control').hide();
                }
                
                if ($('#clip_tag__radio__smart').get(0).checked)
                {
                    $('#smart_filing_for_business__tags__container').show();
                }
                else
                {
                    $('#smart_filing_for_business__tags__container').hide();
                }
                
            };
        
        
        //  flex-select
        //  ===========
            $('#text_font__select, #text_font_header__select, #text_font_monospace__select').flexselect({ 
                'allowMismatch': true, 
                'inputIdTransform': function (id) {
                    return id.replace('__select', '__control'); 
                }
            });
        
                    
        //  load values
        //  ===========
            $O.values_put__general();
            $O.values_put__custom();
            $O.values_put__notebooks();
        
        
        
        
        //  custom theme :: preview height
        //  ==============================
            (function ()
            {
                //  there's 20px at the top and 20px at the bottom
                window.setTimeout(function () { $('#preview__custom_theme').css({ 'height': ($(window).height()-280-20-20)+'px' }); }, 100);
            })();
        
        
        //  view selection
        //  ==============
            (function ()
            {
                var _all_classes = 'showGeneral showCustom showFeatures showQA';
                $('#sidebar__menu__general').click(function()  { $('body').removeClass(_all_classes).addClass('showGeneral');   return false; });
                $('#sidebar__menu__custom').click(function()   { $('body').removeClass(_all_classes).addClass('showCustom');    return false; });    
                $('#sidebar__menu__features').click(function() { $('body').removeClass(_all_classes).addClass('showFeatures');  return false; });    
                $('#sidebar__menu__qa').click(function()       { $('body').removeClass(_all_classes).addClass('showQA');        return false; });    
            })();
        
        
        //  dialogs
        //  =======
            $('#sidebar__licenses a').click(function() {  $('body').addClass('showLicenses'); return false; });
            $('#licenses div.overlay').click(function() { $('body').removeClass('showLicenses'); return false; });
            $('#eula div.overlay').click(function() {     $('body').removeClass('showEula'); return false; });
        
        
        //  general :: keyboard shortcuts
        //  =============================
            $('#keys_activation__control, #keys_clip__control, #keys_highlight__control').keydown(function (_event)
            {
                var _key_combo_from_event = $O.get_key_combo_from_event(_event),
                    _key_combo =            _key_combo_from_event._key_combo,
                    _key_code =             _key_combo_from_event._key_code;
        
                switch (true)
                {
                    case (_event.keyCode == 46): $(this).val('');         break; // delete
                    case (_event.keyCode == 8):  $(this).val('');         break; // backspace
                    case (_key_code != 'NONE'):  $(this).val(_key_combo); break;
                }
        
                _event.preventDefault();
                _event.stopPropagation();
            });
        
        
        //  general :: auto-save
        //  ====================
            (function ()
            {
                //  hold previously saved values
                var _previous_values = false;
                
                //  check previous values
                var _compare_with_previous_values = function (_new_values)
                {
                    //  no previous values
                    if (_previous_values) {}else { return true; }
                    
                    //  loop
                    for (var _k in _new_values) {
                        if (_previous_values[_k]) {
                            if (_new_values[_k] != _previous_values[_k]) {
                                return true;
                            }
                        }
                    }
                    
                    //  false
                    return false;
                };
                
                //  set previous values
                var _set_previous_values = function (_new_values)
                {
                    //  start with blank
                    _previous_values = {};
                    
                    //  set
                    for (var _k in _new_values) {
                        _previous_values[_k] = _new_values[_k];
                    }
                };        
                
                //  add function
                var _auto_save = function ()
                {
                    //  get
                    var _general_values = $O.values_get__general();
                    
                    //  different?
                    if (_compare_with_previous_values(_general_values)) {}else { return; }
                    _set_previous_values(_general_values);
                    
                    //  spin
                    $O.spin();
                    
                    //  save
                    $B.storage__set_more(_general_values);
                };
                
                //  add handlers
                (function ()
                {
                    //  notebooks, tags :: sub-display
                    $('#clip_notebook__radio__smart, #clip_notebook__radio__specific').click(function () { $O.values_put__notebooks__sub_display(); });
                    $('#clip_tag__radio__smart, #clip_tag__radio__specific').click(function () { $O.values_put__tags__sub_display(); });
        
                    //  all radios, checkboxes
                    $('#view__general table.controlTable input[type="radio"]').click(function() { _auto_save(); });
                    $('#view__general table.controlTable input[type="checkbox"]').click(function() { _auto_save(); });
        
                    //  all other controls
                    $('#keys_activation__control').keyup(function() { _auto_save(); });
                    $('#keys_clip__control').keyup(function() {       _auto_save(); });
                    $('#keys_highlight__control').keyup(function() {  _auto_save(); });
                    $('#clip_tag__control').keyup(function() {        _auto_save(); });
                    
                    //  notebook selection
                    $('#clip_notebook_id__control').change(function() { _auto_save(); });
                })();
            })();
        
        
        //  general :: account
        //  ==================
            (function ()
            {
                $O.account__sign_out = function()
                {
                    //  forget -- will also set logout_on_next_action
                    $B.credentials__forget();
                    
                    //  clear
                    $B.credentials__deleteUserInfoCache();
                    try { $B.$remote.clear_filing(); } catch (_e) {}
        
                    //  remove notebooks
                    $('#clip_notebook_id__control').html('');
        
                    //  wait; refresh
                    $O.spin(function ()
                    {
                        $O.storedLogin = $B.credentials__get();
                        $O.account__show_state();
                    });
                };
            
                $O.account__show_state = function()
                {
                    var _result = '';
                
                    //  which
                    if ($O.storedLogin)
                    {
                        _result = '' +
                            $O.translate('account__sign_out').replace('[=username]', $O.escape_html($O.storedLogin.username)) +
                            ' <a href="#" id="account__sign_out">' + $O.translate('account__sign_out_link') + '</a>' +
                        '';
                        $('#body').attr('logged_into', $O.escape_html($O.storedLogin.server));
                    }
                    else
                    {
                        _result = '<div id="account__signed_out">' + $O.translate('account__signed_out') + '</div>';
                        $('#body').attr('logged_into', 'none');
                    }
                
                    //  set
                    $('#account__container').html(_result);
                
                    //  set sign-out link
                    $('#account__container #account__sign_out').click(function () { $O.account__sign_out(); return false; });
                };
            })();     
        
        
        //  custom theme :: auto-save & reset, print
        //  ========================================
            (function ()
            {
                //  auto-save
                //  =========
        
                    //  hold previously saved values
                    var _previous_values = false;
                
                    //  check previous values
                    var _compare_with_previous_values = function (_new_values)
                    {
                        //  no previous values
                        if (_previous_values) {}else { return true; }
                    
                        //  loop
                        for (var _k in _new_values) {
                            if (_previous_values[_k]) {
                                if (_new_values[_k] != _previous_values[_k]) {
                                    return true;
                                }
                            }
                        }
                    
                        //  false
                        return false;
                    };
                
                    //  set previous values
                    var _set_previous_values = function (_new_values)
                    {
                        //  start with blank
                        _previous_values = {};
                    
                        //  set
                        for (var _k in _new_values) {
                            _previous_values[_k] = _new_values[_k];
                        }
                    };        
                
                    //  add function
                    var _auto_save = function ()
                    {
                        //  validate
                        if ($O.values_get__validate_custom_theme()) {}else { return; }
        
                        //  get
                        var _custom_values = $O.values_get__custom();
                    
                        //  different?
                        if (_compare_with_previous_values(_custom_values)) {}else { return; }
                        _set_previous_values(_custom_values);
                    
                        //  spin
                        $O.spin();
                    
                        //  compose
                        var _to_save = {}, _custom_options_aggregate = '';
                        for (var _option in _custom_values)
                        {
                            //  apply
                            _to_save[_option] = _custom_values[_option];
                    
                            //  and save
                            _custom_options_aggregate += '' +
                                '['                         +
                                   '[='+_option+']'         +
                                   '[='+$O.encode(_custom_values[_option])+']' +
                                ']'                         +
                            '';
                        }
                        _to_save['theme'] = 'custom';
                        _to_save['custom_theme_options'] = _custom_options_aggregate;
                
                        //  save
                        $B.storage__set_more(_to_save);
                    };
            
                //  handlers
                //  ========
                    (function ()
                    {
                        //  shortcut
                        var _shortcut = function () { if ($O.cc__custom_theme__reformat__update()) { _auto_save(); }; };
        
                        //  color pickers
                        $('#color_background__control, #color_text__control, #color_links__control').minicolors({ 'letterCase': 'uppercase', 'change': function () { _shortcut(); }});
                
                        //  all selects
                        $('#view__custom table.controlTable select').change(function() { _shortcut(); });
        
                        //  all other controls
                        $('#text_size__control').keyup(function() {           _shortcut(); });
                        $('#box_width__control').keyup(function() {           _shortcut(); });
                        $('#text_line_height__control').keyup(function() {    _shortcut(); });
                        $('#text_font__control').keyup(function() {           _shortcut(); });
                        $('#text_font_header__control').keyup(function() {    _shortcut(); });
                        $('#text_font_monospace__control').keyup(function() { _shortcut(); });
                        $('#custom_css__control').keyup(function() {          _shortcut(); });
                        
                        //  theme reset
                        $('#preview__custom_theme__reset').click(function()
                        {
                            //  confirm
                            if (window.confirm($O.translate('misc__reset_theme__confirm'))) {}else { return; }
                    
                            //  reset var
                            $O.values_put__reset_custom_theme = {};
                            for (var _option in $O.default_options) {
                                $O.values_put__reset_custom_theme[_option] = $O.encode($O.default_options[_option]);
                            }
                            
                            //  reset form
                            $O.values_put__custom__reset();
                
                            //  redraw colors
                            var _colors = ['color_background', 'color_text', 'color_links'];
                            for (var i=0, _i=_colors.length; i<_i; i++) { 
                                $('#'+_colors[i]+'__controlTable span.minicolors-swatch-color').css({ 'background-color': $O.decode($O.values_put__reset_custom_theme[_colors[i]]) });
                            }
                
                            //  preview & save
                            _shortcut();
                        });
        
                        $('#preview__custom_theme__print').click(function()
                        {
                            $O.cc__custom_theme__reformat.iframeWindow.print();
                            return false;
                        });
                    })();
            })();
            
                
        //  QA :: auto-save
        //  ===============
        
        
        
        //  QA :: buttons
        //  =============
        
        
        
        //  translations
        //  ============
            $O.translation__get_items();
            $O.translation__apply();
        
        //  show specific tab
        //  =================
            $('body').removeClass('showCover');
            switch (window.location.hash)
            {
                case '#showCustom': $('body').addClass('showCustom');  break;
                default:            $('body').addClass('showGeneral'); break;
            }
        
        //  components
        //  ==========
            $O.cc__custom_theme__reformat__init();
        
        //  account state
        //  =============
            $O.account__show_state();
        
        
        //  track
        (function () {
            var _r = $O.get_background_object();
                _r.events_handler__independent_pages('to-extension--track--settings');
        })();

    })(window.__readable_by_evernote__options__front, window.__readable_by_evernote__options__back);
