
//  main object
//  ===========
    window.__readable_by_evernote__content = {};


//  ==========================================================================================================================


//  import _js_anywhere/
//  ====================
    (function ($C) {
    
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
            $C.escape_html =    _escape_html;
            $C.unescape_html =  _unescape_html;
            $C.encode =         _encode;
            $C.decode =         _decode;
        })();

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
            $C.custom_events = _custom_events;
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
            $C.get_key_combo_from_event = _get_key_combo_from_event;
        })();

    })(window.__readable_by_evernote__content);
    

//  import _js_background/_anywhere/
//  ===================================
    (function ($C) {

        (function () {
            
            //  get html to clip
            //  ================
                var _get_html_to_clip = function (_doc) { return (function ()
                {
                    //  import components/highlight -> getCleanHTML
                    //  ===========================================
                
                        //  object
                        var $H = {};
                
                        //  settings
                        $H.settings = {};
                        $H.settings.highlightElementCSSClass =        'clearly_highlight_element';
                        $H.settings.highlightElementDeleteCSSClass =  'clearly_highlight_delete_element';
                        $H.settings.highlightCleanHTMLElementStart =  '<span style="-evernote-highlighted:true; background-color:#f6ee96">';
                        $H.settings.highlightCleanHTMLElementEnd =    '</span>';
                
                        //  clean html
                        $H.getCleanHTML = function (_rawHTML)
                        {
                            //  html
                            var _html = _rawHTML;
            
                            //  remove all spans -- spans hold deleted highlights, or useless helper elements
                            _html = _html.replace(/<span([^>]*?)>/gi, '');
                            _html = _html.replace(/<\/span>/gi, '');
            
                            //  remove highlight-delete buttons
                            var _highlight_delete_reg = new RegExp('<a ([^>]*?)'+$H.settings.highlightElementDeleteCSSClass+'([^>]*?)></a>', 'gi');
                            _html = _html.replace(_highlight_delete_reg, '');
            
                            //  highlight element
                            var _highlight_element_reg = new RegExp('<em ([^>]*?)'+$H.settings.highlightElementCSSClass+'([^>]*?)>([^>]+?)</em>', 'gi');
                            _html = _html.replace(_highlight_element_reg, '<highlight>$3</highlight>');
            
                            //  double EMs
                            var _two_highlights_reg = new RegExp('<highlight>([\\s\\S]*?)</highlight>([ \\n\\r\\t]*?)<highlight>([\\s\\S]*?)</highlight>', 'gi');
                            while (_html.match(_two_highlights_reg) != null) {
                                _html = _html.replace(_two_highlights_reg, '<highlight>$1$3</highlight>');
                            }
            
                            //  replace EMs
                            var _highlight_reg = new RegExp('<highlight>([\\s\\S]*?)</highlight>', 'gi');
                            _html = _html.replace(_highlight_reg, $H.settings.highlightCleanHTMLElementStart+'$1'+$H.settings.highlightCleanHTMLElementEnd);
            
                            return _html;
                        };
            
            
                    //  get html
                    //  ========
                
                        //  get all "page_content" child elements 
                        //      of all "page" elements 
                        //          of the "#pages" element
                        //  add #footnotedLinks ol element?
            
                        var _pages_container = _doc.getElementById('pages');
                        var _pages_container_dir = (_pages_container.getAttribute ? ('' + _pages_container.getAttribute('dir')).toLowerCase() : '');
            
                        //  var
                        var __body = '';
            
                        //  add #pages start
                        __body += '<div id="pages"'+(_pages_container_dir == 'rtl' ? ' dir="rtl"' : '')+'>';
                
                        //  loop through pages
                        var _pages = _pages_container.childNodes;
                        for (var _i=0, _ii=_pages.length; _i<_ii; _i++)
                        {
                            var _page_elements = _pages[_i].childNodes;
                            for (var _z=0, _zz=_page_elements.length; _z<_zz; _z++)
                            {
                                //  element
                                var _page_element = _page_elements[_z];
                            
                                //  not page_content
                                if (_page_element.className && _page_element.className.toLowerCase && _page_element.className.toLowerCase() == 'page_content') {}else { continue; }
                            
                                //  append content
                                __body += '<div id="page'+(_i+1)+'" class="page">';
                                __body +=   _page_element.innerHTML;
                                __body += '</div>';
                            
                                //  one per page
                                break;
                            }
                        }
                
                        //  add #pages end
                        __body += '</div>';
            
                
                    //  clean highlights
                    //  ================
                        __body = $H.getCleanHTML(__body);
                
                
                    //  remove link footnotes
                    //  =====================
                        __body = __body.replace(/<sup class="readableLinkFootnote">([^<]*)<\/sup>/gi, '');
            
            
                    //  return
                    //  ======
                        return __body;
                })(); };
            
            /* =============== */
            $C.get_html_to_clip = _get_html_to_clip;
        })();

        (function () {
            
            //  inject
            //  ======    
                var _inject_recommendation = function (_recommendation, _documentToInjectInto, _escape_html_function)
                {
                    //  elements
                    //  ========
                    
                        var _injected__element =    _documentToInjectInto.getElementById('relatedNotes__injected'),
                            _notes__element =       _documentToInjectInto.getElementById('relatedNotes'),
                            _note_first__element =  _documentToInjectInto.getElementById('relatedNotes__first'),
                            _note_second__element = _documentToInjectInto.getElementById('relatedNotes__second'),
                            _note_third__element =  _documentToInjectInto.getElementById('relatedNotes__third');
                            
                        switch (true)
                        {
                            case (!_injected__element):
                            case (!_notes__element):
                            case (!_note_first__element):
                            case (!_note_second__element):
                            case (!_note_third__element):
                                return;
                                break;
                        }
                            
                    //  mark -- inject only once
                    //  ====
                        if (_injected__element.textContent == 'yup') { return; } else { _injected__element.textContent = 'yup'; }
                          
                    //  notes & inject
                    //  ==============
                        var _injectNote = function (_note_data, _note_element)
                        {
                            //  invalid
                            if (_note_data && _note_element) {}else { return; }
            
                            //  thumbnail
                            var _thumbnail = _note_data.absoluteURL__thumbnail;
                                _thumbnail = (((_documentToInjectInto.defaultView) && (_documentToInjectInto.defaultView.devicePixelRatio) && (_documentToInjectInto.defaultView.devicePixelRatio == 2)) ? _thumbnail.replace(/size=75$/, 'size=150') : _thumbnail);
                            
                            //  write
                            _note_element.innerHTML = ''  +
                                '<div class="title"><a target="_blank" href="'+_escape_html_function(_note_data.absoluteURL__noteView)+'">'+_escape_html_function(_note_data.title)+'</a></div>' +
                                '<div class="snippet"><a target="_blank" href="'+_escape_html_function(_note_data.absoluteURL__noteView)+'">'+_escape_html_function(_note_data.snippet)+'</a></div>' +
                                '<a class="image" target="_blank" href="'+_escape_html_function(_note_data.absoluteURL__noteView)+'" style="' + (_thumbnail == 'none' ? '' : 'background-image: url(\''+_escape_html_function(_thumbnail)+'\');') + '"></a>' +
                            '';
                            //'<div class="date"><a target="_blank" href="'+_escape_html_function(_note_data.absoluteURL__noteView)+'">'+_escape_html_function(((new Date(_note_data.created)).toDateString()))+'</a></div>' +
                        };
                        
                    //  which notes
                    //  ===========
            
                        //  vars
                        var _notes = [],
                            _hasNotes = !!(_recommendation.relatedNotes && _recommendation.relatedNotes.length), 
                            _hasNotes__business = !!(_recommendation.relatedNotes__business && _recommendation.relatedNotes__business.length);
                        
                        //  cases
                        switch (true)
                        {
                            case (_hasNotes && _hasNotes__business):
                                _notes = [
                                    _recommendation.relatedNotes[0],
                                    _recommendation.relatedNotes[1],
                                    _recommendation.relatedNotes__business[0]
                                ];
                                break;
                                
                            case (_hasNotes && !_hasNotes__business):
                                _notes = _recommendation.relatedNotes;
                                break;
                                
                            case (!_hasNotes && _hasNotes__business):
                                _notes = _recommendation.relatedNotes__business;
                                break;
                        }
                            
                    //  actually inject
                    //  ===============
                        if (_notes.length)
                        {
                            //  notes element, set class
                            _notes__element.className = 'none separateSection';
                            
                            //  inject notes
                            if (_notes[0]) { _injectNote(_notes[0], _note_first__element);  }
                            if (_notes[1]) { _injectNote(_notes[1], _note_second__element); }
                            if (_notes[2]) { _injectNote(_notes[2], _note_third__element);  }
                            
                            // remove targets, for Evernote links
                            var _links = _notes__element.getElementsByTagName('a');
                            for (var _i=0, _ii=_links.length; _i<_ii; _i++) { if (_links[_i].getAttribute('href').match(/^evernote:\/\/\//gi) != null) { _links[_i].setAttribute('target', ''); } }
                        }
                };
            
            /* =============== */
            $C.inject_recommendation = _inject_recommendation;
        })();

        (function () {
            
            //  inject
            //  ======    
                var _inject_filing = function (_filing, _documentToInjectInto, _escape_html_function)
                {
                    //  elements
                    //  ========
                    
                        var _injected__element =       _documentToInjectInto.getElementById('filing__injected'),
                            _notebooks__element =      _documentToInjectInto.getElementById('filing__notebooks__list'),
                            _tags__personal__element = _documentToInjectInto.getElementById('filing__tags__list__personal'),
                            _tags__business__element = _documentToInjectInto.getElementById('filing__tags__list__business');
                
                        switch (true)
                        {
                            case (!_injected__element):
                            case (!_notebooks__element):
                            case (!_tags__personal__element):
                            case (!_tags__business__element):
                                return;
                                break;
                        }
                
                    //  mark -- can inject multiple times
                    //  ====
                        _injected__element.textContent = 'yup';
                        //  if (_injected__element.textContent == 'yup') { return; } else { _injected__element.textContent = 'yup'; }
            
                    //  notebooks
                    //  =========
                        if (_filing.notebooks && _filing.notebooks__order)
                        {
                            //  clear
                            _notebooks__element.innerHTML = '';
                        
                            //  add
                            for (var _nno=false, _nns=false, _ss=false, _s='', _nn=false, _n=false, _i=0, _ii=_filing.notebooks__order.length; _i<_ii; _i++)
                            {
                                _n = _filing.notebooks[_filing.notebooks__order[_i]];
                            
                                if ((_n.stack > '') && (_n.stack != _s))
                                {
                                    _s = _n.stack;
                                
                                    _ss = _documentToInjectInto.createElement('div');
                                    _ss.className = 'stack';
                                    _ss.textContent = _s;
                                
                                    _notebooks__element.appendChild(_ss);
                                }
            
                                _nn = _documentToInjectInto.createElement('div');
                                _nn.className = 'notebook ' + _n.type + ((_n.stack > '') ? ' stacked' : '') + ((_n.businessInfo && _n.businessInfo.noTags) ? ' no_tags' : '') + ((_n.sharedInfo && _n.sharedInfo.noTags) ? ' no_tags' : '');
                                //_nn.setAttribute('id', 'filing__notebook__'+_n.id);
                                //_nn.setAttribute('href', '#');
                                _nn.setAttribute('n_id', _n.id);
                            
                                _nns = _documentToInjectInto.createElement('span');
                                _nns.textContent = _n.name;
                                _nn.appendChild(_nns);
                            
                                if (_n.owner)
                                {
                                    _nno = _documentToInjectInto.createElement('b');
                                    _nno.textContent = ' (' + _n.owner + ')';
                                    _nn.appendChild(_nno);
                                }
                            
                                _notebooks__element.appendChild(_nn);
                            }
                        }
                        
                    //  tags / personal
                    //  ===============
                        if (_filing.tags__personal && _filing.tags__personal__order)
                        {
                            //  clear
                            _tags__personal__element.innerHTML = '';
            
                            //  add
                            for (var _tt=false, _t=false, _i=0, _ii=_filing.tags__personal__order.length; _i<_ii; _i++)
                            {
                                _t = _filing.tags__personal[_filing.tags__personal__order[_i]];
                                            
                                _tt = _documentToInjectInto.createElement('div');
                                //_tt.setAttribute('id', 'filing__tag__'+_t.id);
                                //_tt.setAttribute('tid', _t.id);
                                //_tt.setAttribute('gid', _t.guid);
                                //_tt.setAttribute('href', '#');
                                _tt.textContent = _t.name;
                            
                                _tags__personal__element.appendChild(_tt);
                            }
                        }
            
                    //  tags / business
                    //  ===============
                        if (_filing.tags__business && _filing.tags__business__order)
                        {
                            //  clear
                            _tags__business__element.innerHTML = '';
            
                            //  add
                            for (var _tt=false, _t=false, _i=0, _ii=_filing.tags__business__order.length; _i<_ii; _i++)
                            {
                                _t = _filing.tags__business[_filing.tags__business__order[_i]];
                                            
                                _tt = _documentToInjectInto.createElement('div');
                                //_tt.setAttribute('id', 'filing__tag__'+_t.id);
                                //_tt.setAttribute('tid', _t.id);
                                //_tt.setAttribute('gid', _t.guid);
                                //_tt.setAttribute('href', '#');
                                _tt.textContent = _t.name;
                            
                                _tags__business__element.appendChild(_tt);
                            }
                        }
                        
                    //  mark clip__filing
                    //  =================
                        var _clip__filing = _documentToInjectInto.getElementById('clip__filing');
                        if (_clip__filing.className && _clip__filing.className.replace) { _clip__filing.className = _clip__filing.className.replace('not_injected__filing', ''); }
                };
            
            /* =============== */
            $C.inject_filing = _inject_filing;
        })();

        (function () {
            
            //  inject
            //  ======
                var _inject_clip_info = function (_info, _documentToInjectInto, _escape_html_function)
                {
                    //  elements
                    //  ========
            
                        var _injected__element =    _documentToInjectInto.getElementById('filing__clip_info__injected'),
                            _notebook_id__element = _documentToInjectInto.getElementById('filing__clip_info__notebook_id'),
                            _tag_names__element =   _documentToInjectInto.getElementById('filing__clip_info__tag_names'),
                            _title__element =       _documentToInjectInto.getElementById('filing__clip_info__title'),
                            _url__element =         _documentToInjectInto.getElementById('filing__clip_info__url');
                
                        switch (true)
                        {
                            case (!_injected__element):
                            case (!_notebook_id__element):
                            case (!_tag_names__element):
                            case (!_title__element):
                            case (!_url__element):
                                return;
                                break;
                        }
                
                    //  mark -- can inject multiple times
                    //  ====
                        _injected__element.textContent = 'yup';
                        //  if (_injected__element.textContent == 'yup') { return; } else { _injected__element.textContent = 'yup'; }
            
                    //  title, url, notebook_id
                    //  =======================
                        if (_info.title)           { _title__element.textContent =       _info.title; }
                        if (_info.url)             { _url__element.textContent =         _info.url; }
                        if (_info.filing.notebook) { _notebook_id__element.textContent = _info.filing.notebook.id; }
                        
                    //  tags
                    //  ====
                        if (_info.filing.tag_names)
                        {
                            //  clear
                            _tag_names__element.innerHTML = '';
                            
                            //  add
                            for (var _tt=false, _t=false, _i=0, _ii=_info.filing.tag_names.length; _i<_ii; _i++)
                            {
                                _t = _info.filing.tag_names[_i];
                            
                                _tt = _documentToInjectInto.createElement('span');
                                _tt.textContent = _t;
                            
                                _tag_names__element.appendChild(_tt);
                            }
                        }
                        
                    //  mark clip__filing
                    //  =================
                        var _clip__filing = _documentToInjectInto.getElementById('clip__filing');
                        if (_clip__filing.className && _clip__filing.className.replace) { _clip__filing.className = _clip__filing.className.replace('not_injected__clip_info', ''); }
                };
                
            /* =============== */
            $C.inject_clip_info = _inject_clip_info;
        })();

        (function () {
            
            //  launcher
            //  ========
                var _inject_script_and_definitions = function (__document, __script_to_launch, __definitions_as_html)
                {
                    //  IDs
                    var _id__container =         'evernote_clearly__container',
                        _id__definitions =       'evernote_clearly__definitions',
                        _id__launcher =          'evernote_clearly__launcher',
                        _id__css_for_container = 'evernote_clearly__css_for_container';
            
                    //  log
                    var _log = function (_message) { if (console && console.log) { console.log('evernote_clearly / inject_script_and_definitions / ' + _message); } };
            
                    //  need body; else stop
                    var _body = __document.body;
                    if (_body) {}else { _log('page is missing body element'); return; }
                    
                    //  vars
                    var _container = __document.getElementById(_id__container),
                        _container_css = __document.getElementById(_id__css_for_container),
                        _definitions = __document.getElementById(_id__definitions), 
                        _launcher = __document.createElement('script');
            
                    //  define launcher
                    _launcher.setAttribute('src', __script_to_launch);
                    _launcher.className = _id__launcher;
            
                    //  create container, if not present
                    if (_container) {}else
                    {
                        //  controller container
                        var _containerElement = __document.createElement('div');
                            _containerElement.setAttribute('id', _id__container);
            
                        //  append container
                        _body.appendChild(_containerElement);
            
                        //  get container (again)        
                        _container = __document.getElementById(_id__container);
                    }
            
                    //  create css for container, if not present
                    if (_container_css) {}else
                    {
                        //  css text
                        var _cssText = ''                                               +
                             '#'+_id__container+' { '                                   +
                                 'position: absolute !important; '                      +
                                 'width: 5px !important; height: 5px !important; '      +
                                 'top: -1000px !important; left: -1000px !important; '  +
                                 'margin: 0 !important; padding: 0 !important; border: none !important; ' +
                            '} '                                                        +
                            '#'+_id__definitions+' { display: none !important; } '      +
                        '';
                        _cssText = _cssText.replace(/\} /gi, "} \n");
            
                        //  css element
                        var _cssElement = __document.createElement('style');
                            _cssElement.setAttribute('id', _id__css_for_container);
                            _cssElement.setAttribute('type', 'text/css');
                        if (_cssElement.styleSheet) { _cssElement.styleSheet.cssText = _cssText; }
                            else { _cssElement.appendChild(__document.createTextNode(_cssText)); }
            
                        //  append css
                        _container.appendChild(_cssElement);
                    
                        //  get container css (again)
                        _container_css = __document.getElementById(_id__css_for_container);
                    }
            
                    //  create definitions, if not present
                    if (_definitions) {}else
                    {
                        var _definitionsElement = __document.createElement('div');
                            _definitionsElement.setAttribute('id', _id__definitions);
            
                        //  append definitions
                        _container.appendChild(_definitionsElement);
                        
                        //  get definitions (again)        
                        _definitions = __document.getElementById(_id__definitions);
                    }
            
                    //  (re)set definitions
                    _definitions.innerHTML = __definitions_as_html;
            
                    //  insert launcher -- inserting several launchers does nothing bad
                    _container.appendChild(_launcher);
                };
            
            /* =============== */
            $C.inject_script_and_definitions = _inject_script_and_definitions;
        })();

        (function () {
            
            //  launcher
            //  ========
                var _inject_clearly = function (__document, __and_action)
                {
                    //  log
                    //  ===
                        var _log = function (_message) { if (console && console.log) { console.log('evernote_clearly / _inject_clearly / ' + _message); } };
                
                    //  paths
                    //  =====
                        var _path_back = 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/back/',
                            _path_front = 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/front/';
                
                    //  css IDs
                    //  =======
                        var _cssIDs = { 'prefix': 'evernote_clearly__' };
                            _cssIDs.in_isolation = _cssIDs.prefix + 'in_isolation';
                            _cssIDs.in_page = _cssIDs.prefix + 'in_page';
                            _cssIDs.script__inject_and_init_and_call = _cssIDs.prefix + 'inject_and_init_and_call';
                            _cssIDs.script__call = _cssIDs.prefix + 'call';
                
                    //  containers
                    //  ==========
                        
                        //  get
                        var _html = __document.getElementsByTagName('html')[0],
                            _body = __document.getElementsByTagName('body')[0];
            
                        //  check
                        if (_body) {}else { _log('page is missing body element'); return; }
                        if (_html) {}else { _log('page is missing html element'); return; }
            
                    //  subsequent inject: just call
                    //  ============================
                        
                        if (__document.getElementById(_cssIDs.in_isolation))
                        {
                            //  doing other stuff
                            if (__document.getElementById(_cssIDs.script__call)) { return; }
                            if (__document.getElementById(_cssIDs.script__inject_and_init_and_call)) { return; }
                            
                            //  create
                            var _script = __document.createElement('script');
                            
                            //  attributes
                            _script.setAttribute('id', _cssIDs.script__call);
                            _script.setAttribute('type', 'text/javascript');
                            _script.setAttribute('src', _path_front+'in_page/call'+(__and_action ? '_and_'+__and_action : '')+'.js');
            
                            //  insert
                            _body.appendChild(_script);
                            
                            //  end
                            return;
                        }
            
                    //  first inject: frame, components, init, and call
                    //  ===============================================
            
                        //  inject script -- script which itself injects the rest of the scripts (in a frame)
                        //  =============
                            window.setTimeout(function ()
                            {
                                //  create scripts
                                var _script = __document.createElement('script');
            
                                //  set script attributes
                                _script.setAttribute('id', _cssIDs.script__inject_and_init_and_call);
                                _script.setAttribute('type', 'text/javascript');
                                _script.setAttribute('src', _path_front+'in_page/inject_and_init_and_call.js');
            
                                //  insert script
                                _body.appendChild(_script);
                            }, 10);
                    
                        //  inject isolation
                        //  ================
                            window.setTimeout(function ()
                            {
                                //  frame url
                                var _frame_url = _path_front+'in_isolation/isolation.html?x=y',
                                    _win_location = __document.defaultView.location,
                                    _path_params = {
                                        'action':       (__and_action ? __and_action : 'none'),
                                        'title':        __document.title,
                                        'url':          _win_location.href,
                                        'url_host':     _win_location.hostname,
                                        'url_path':     _win_location.pathname,
                                        'url_protocol': _win_location.protocol.replace(/:$/gi, '')
                                    };
                                for (var _param in _path_params) { _frame_url += '&' + _param + '=' + encodeURIComponent(_path_params[_param]); }
                                
                                //  create frame
                                var _frame = __document.createElement('iframe');
                
                                //  set frame attributes
                                _frame.setAttribute('frameBorder', '0');
                                _frame.setAttribute('allowTransparency', 'true');
                                _frame.setAttribute('scrolling', 'auto');
                                _frame.setAttribute('id', _cssIDs.in_isolation);
                            
                                 //  set URL -- Chrome
                                _frame.setAttribute('src', _frame_url);
                            
            
                                //  set frame style
                                _frame.style.position = 'fixed';
                                _frame.style.width =    '100%';
                                _frame.style.height =   '100%';
                                _frame.style.top =      '0';
                                _frame.style.left =     '0';
                                _frame.style.zIndex =   '2147483647';
            
                                //  insert frame
                                _html.appendChild(_frame);
            
            
                            }, 20);
                };
            
            /* =============== */
            $C.inject_clearly = _inject_clearly;
        })();

        (function () {
            
            //  add keyboard hook
            //  =================
                var _add_keyboard_hook = function (__window, __keys, __get_key_combo_from_event, __inject) { __window.addEventListener('keydown', function(_event)
                {
                    var _key_combo_from_event = __get_key_combo_from_event(_event),
                        _key_combo =            _key_combo_from_event._key_combo;
            
                    switch (true)
                    {
                        case ((__keys._key_activation > '')   && (_key_combo == __keys._key_activation)):
                        case ((__keys._key_clip > '')         && (_key_combo == __keys._key_clip)):
                        case ((__keys._key_highlight > '')    && (_key_combo == __keys._key_highlight)):
                            
                            //  also?
                            var _clip_on_launch =       ((__keys._key_clip > '')         && (_key_combo == __keys._key_clip)),
                                _highlight_on_launch =  ((__keys._key_highlight > '')    && (_key_combo == __keys._key_highlight));
                                
                            //  visible already; ignore
                            var _doc = (__window.contentDocument || __window.document);
                            if (_doc.body && _doc.body.className && (_doc.body.className.match(/evernote_clearly__is_visible/) != null)) { break; }
                                
                            //  stop event
                            _event.stopPropagation();
                            _event.preventDefault();
            
                            //  _and_action
                            var _and_action = (_clip_on_launch ? 'clip' : (_highlight_on_launch ? 'highlight' : ''));
            
                            //  inject
                            __inject(_doc, _and_action);
                            
                            //  end
                            break;
                        }
                    }, true); };
            
            /* =============== */
            $C.add_keyboard_hook = _add_keyboard_hook;
        })();

        (function () {
            
            //  expose
            //  ======
                var _expose_as_installed = function (_window)
                {
                    //  this allows evernote controlled websites to detect when clearly is installed
                    //  this code tries to add a meta element to the head of the page, and a class to the body of the page
            
                    //  only on evernote domains
                    //  ========================
                        if (_window.location.hostname.match(/(evernote|yinxiang).com$/gi) != null) {}else { return; }
                    
                    //  try to add meta element to page-head
                    //  ====================================
                        try
                        {
                            var _meta = _window.document.createElement("meta");
                                _meta.name = "evernote-clearly-extension";
                                _meta.content = "installed";
                        
                            _window.document.head.appendChild(_meta);
                        }
                        catch (e) {}
                    
                    //  try to add class to page-body
                    //  =============================
                        try { _window.document.body.className += ' evernote-clearly-extension'; }
                        catch (e) {}
                };
                
            /* =============== */
            $C.expose_as_installed = _expose_as_installed;
        })();

        (function () {
            
            //  show reminder on url
            //  ====================
                var _inject_reminder = false,
                    _close_reminder = false;
                
                (function ()
                {
                    //  include URLs => _urls
                    //  same URLs as in __urls_and_examples.js, but with the examples stripped out
                    //  this fiel is created manually, whenever __urls_and_examples.js is modified -- which is rarely
                    
                    var _urls = {
                    
                    /* =========================== */
                    /* big, news, international */
                    
                        'arstechnica.com':          ['/([a-z0-9-]+?)/([0-9]{4})/([0-9]{1,2})/([\\S]+?)/'],
                                                    
                        'cnn.com':                  ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/index.html'],
                                                    
                        'fortune.com':              ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                    
                        'gothamist.com':            ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?).php'],
                    
                        'gizmodo.com':              ['/([\\S]+?)-([0-9]{6,16})'],
                    
                        'hbr.org':                  ['/([0-9]{4})/([0-9]{1,2})/([\\S]+?)', 
                                                     '/([a-z0-9-]+?)/([\\S]+?)'],
                               
                        'io9.com':                  ['/([\\S]+?)-([0-9]{6,16})'],
                    
                        'kotaku.com':               ['/([\\S]+?)-([0-9]{6,16})'],
                                                    
                        'lifehacker.com':           ['/([a-z0-9-]+?)-([0-9]{5,15})'],
                           
                        'londonist.com':            ['/([0-9]{4})/([0-9]{1,2})/([\\S]+?).php'],
                    
                        'mashable.com':             ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                    
                        'nautil.us':                ['/issue/([0-9]{1,3})/([a-z0-9-]+?)/([\\S]+?)', 
                                                     '/blog/([\\S]+?)'],
                    
                        'narrative.ly':             ['/([a-z0-9-]+?)/([\\S]+?)/'],
                                                    
                        'nytimes.com':              ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)([/]|.html)'],
                    
                        'perezhilton.com':          ['(/cocoperez)?/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})-([\\S]+?)'],
                                                    
                        'techcrunch.com':           ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                                                    
                        'time.com':                 ['(/money)?/([0-9]{5,15})/([\\S]+?)/'],
                    
                        'venturebeat.com':          ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                            
                                                    
                        'www.bbc.com':              ['/([a-z0-9/-]+?)/([0-9]{5,15})(-[\\S]+?)?',
                                                     '/([a-z0-9/-]+?)/([\\S]+?)-([0-9]{5,15})'],
                                                    
                        'www.bbc.co.uk':            ['/([a-z0-9/-]+?)/([0-9]{5,15})(-[\\S]+?)?',
                                                     '/([a-z0-9/-]+?)/([\\S]+?)-([0-9]{5,15})'],
                                                    
                        'www.bloomberg.com':        ['/news/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/([\\S]+?).html', 
                                                     '/([a-z0-9-]+?)/articles/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/([\\S]+?)'],
                    
                        'www.bloombergview.com':    ['/articles/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/([\\S]+?)'],
                                                    
                        'www.businessinsider.com':  ['/([\\S]+?)-([0-9]{4})-([0-9]{1,2})'],
                    
                        'www.businessweek.com':     ['/articles/([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/([\\S]+?)'],
                                                    
                        'www.cracked.com':          ['/article_([^ /]+?).html', 
                                                     '/blog/([\\S]+?)/'],
                                                    
                        'www.economist.com':        ['/([a-z0-9-]+?)/([a-z0-9-]+?)/([0-9]+?)-([\\S]+?)',
                                                     '/blogs/([a-z0-9-]+?)/([0-9]{4})/([0-9]{1,2})/([\\S]+?)'],
                    
                        'www.engadget.com':         ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                                                    
                        'www.entrepreneur.com':     ['/article/([0-9]{4,9})'],
                    
                        'www.examiner.com':         ['/article/([\\S]+?)'],
                                                    
                        'www.forbes.com':           ['/sites/([a-z0-9-]+?)/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                                                    
                        'www.ft.com':               ['/cms/s/([0-9]{1,2})/([\\S]+?).html'],
                                                    
                        'www.huffingtonpost.com':   ['/([a-z0-9-]+?)/([\\S]+?)_([0-9]{3,15}).html', 
                                                     '/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)_([0-9]{3,15}).html'],
                                                    
                        'www.inc.com':              ['/([a-z0-9-]+?)/([\\S]+?).html'],
                    
                        'www.msn.com':              ['/([a-z0-9/-]+?)/([a-z]{2})-([a-z0-9]{5,9})'],
                                                    
                        'www.newsweek.com':         ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)-([0-9]{5,9}).html', 
                                                     '([\\S]+?)-([0-9]{5,9})'],
                    
                        'www.newyorker.com':        ['/([a-z0-9-]+?)/([a-z0-9-]+?)/([\\S]+?)', 
                                                     '/([a-z0-9-]+?)/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)'],
                                                    
                        'www.reuters.com':          ['/article/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)'],
                                                    
                        'www.salon.com':            ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                                                    
                        'www.slate.com':            ['/articles/([a-z0-9_/-]+?)/([0-9]{4})/([0-9]{1,2})/([\\S]+?).html', 
                                                     '/blogs/([a-z0-9_-]+?)/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?).html'],
                                                    
                        'www.telegraph.co.uk':      ['/([a-z0-9/-]+?)/([0-9]{6,15})/([\\S]+?).html'],
                                                    
                        'www.theatlantic.com':      ['/([a-z0-9-]+?)/archive/([0-9]{4})/([0-9]{1,2})/([\\S]+?)/([0-9]+?)/'],
                                 
                        'www.thedailybeast.com':    ['/articles/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?).html'],
                                                    
                        'www.theguardian.com':      ['/([a-z0-9/-]+?)/([0-9]{4})/([a-z]{3})/([0-9]{1,2})/([\\S]+?)'],
                                                    
                        'www.theverge.com':         ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([0-9]{5,9})/([\\S]+?)'],
                                                    
                        'www.washingtonpost.com':   ['/([a-z0-9/-]+?)/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)(/|_story.html)'],
                                                    
                        'www.wired.com':            ['/([0-9]{4})/([0-9]{1,2})/([\\S]+?)/'],
                              
                                                    
                        'news.yahoo.com':           ['/([\\S]+?)-([0-9]+?).html'],
                    
                        'online.wsj.com':           ['/articles/([\\S]+?)-([0-9]{5,15})'],
                    
                    /* =========================== */
                    /* big, news, us */
                    
                        'chicagosuntimes.com':      ['/news/([\\S]+?)/'],
                    
                        'chron.com':                ['/([a-z0-9-]+?)/article/([\\S]+?)-([0-9]+?).php', 
                                                     '/([a-z0-9-]+?)/([0-9]{4})/([0-9]{1,2})/([\\S]+?)/'],
                    
                        'nypost.com':               ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                    
                        'suntimes.com':             ['/([a-z0-9/-]+?)/([0-9]+?)/([0-9]+?)/([0-9]+?)/([\\S]+?)/'],
                    
                        'usatoday.com':             ['/story/([a-z0-9/-]+?)/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/([0-9]+?)/', 
                                                     '/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                    
                    
                        'www.breitbart.com':        ['/([a-z0-9-]+?)/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)'],
                    
                        'www.cbsnews.com':          ['/news/([\\S]+?)/'],
                    
                        'www.chicagotribune.com':   ['/([a-z0-9/-]+?)/([\\S]+?)-([0-9]+?)-(story|column).html'],
                    
                        'www.foxnews.com':          ['/([a-z0-9-]+?)/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                    
                        'www.latimes.com':          ['/([a-z0-9/-]+?)/([\\S]+?)-([0-9]+?)-story.html'],
                    
                        'www.miamiherald.com':      ['/news/([a-z0-9/-]+?)/article([0-9]+?).html'],
                    
                        'www.nbcnews.com':          ['/([a-z0-9-]+?)/([a-z0-9-]+?)/([\\S]+?)-n([0-9]+?)'],
                    
                        'www.sfchronicle.com':      ['/([a-z0-9-]+?)/([a-z0-9-]+?)/article/([\\S]+?)-([0-9]+?).php'],
                    
                    
                        'abcnews.go.com':           ['/([a-z0-9/-]+?)/story[?]id=([0-9]+?)', 
                                                     '/([a-z0-9-]+?)/wireStory/([\\S]+?)-([0-9]{5,15})'],
                    
                        'espn.go.com':              ['/([a-z0-9-]+?)/story/_/id/([0-9]+?)/([\\S]+?)'],
                    
                    /* =========================== */
                    /* big, misc, intrnational */
                    
                        'medium.com':               ['/([\\S]+?)-([a-f0-9]{10,14})'],
                    
                        'wikipedia.org':            ['/wiki/([\\S]+?)'],
                               
                                                    
                        'www.linkedin.com':         ['/today/post/article/([\\S]+?)'],
                    
                        'www.theonion.com':         ['/articles/([\\S]+?),([0-9]+?)/'],
                           
                                                    
                        'blog.evernote.com':        ['/blog/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                    
                    /* =========================== */
                    /* small, news, intrnational */
                    
                        'lifehacker.ru':            ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                               
                        'politiken.dk':             ['/([a-z0-9_/-]+?)/ECE([0-9]+?)/([\\S]+?)/'],
                    
                                                    
                        'www.aftonbladet.se':       ['/([a-z0-9/-]+?)/article([0-9]+?).ab'],
                    
                        'www.asahi.com':            ['/articles/([\\S]+?).html'],
                    
                        'www.eluniversal.com.mx':   ['/([a-z0-9-]+?)/([0-9]{4})/([\\S]+?)-([0-9]+?).html'],
                    
                        'www.dailymail.co.uk':      ['/([a-z0-9/-]+?)/article-([0-9]+)/([\\S]+?).html'],
                    
                        'www.dw.de':                ['/([\\S]+?)/([a-z])-([0-9]+?)'],
                    
                        'www.elmundo.es':           ['/([a-z0-9-]+?)/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?).html'],
                    
                        'www.faz.net':              ['/([a-z0-9/-]+?)/([\\S]+?)-([0-9]+?).html'],
                    
                        'www.globalresearch.ca':    ['/([\\S]+?)/([0-9]{5,15})'],
                            
                        'www.heise.de':             ['/([a-z0-9/-]+?)/([\\S]+?)-([0-9]+?).html'],
                    
                        'www.hindustantimes.com':   ['/([a-z0-9/-]+?)/article(1)?-([0-9]+?).aspx'],
                                                    
                        'www.huffingtonpost.jp':    ['/([a-z0-9-]+?)/([\\S]+?).html', 
                                                     '/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?).html'],
                    
                        'www.ilpost.it':            ['/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)/'],
                    
                        'www.indiatimes.com':       ['/([a-z0-9/-]+?)/([\\S]+?)-([0-9]+?).html'],
                                                    
                        'www.lemonde.fr':           ['/([a-z0-9-]+?)/article/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?)_([0-9]+?)_([0-9]+?).html'],
                                                    
                        'www.lifehacker.jp':        ['/([0-9]{4})/([0-9]{1,2})/([\\S]+?).html'],
                                                    
                        'www.lifehack.org':         ['/articles/([a-z0-9-]+?)/([\\S]+?).html'],
                                
                        'www.news.com.au':          ['/([a-z0-9/-]+?)/story-([\\S]+?)-([0-9]+?)'],
                                             
                        'www.nikkei.com':           ['/article/DGX([\\S]+?)/'],
                    
                        'www.sciencedaily.com':     ['/releases/([0-9]{4})/([0-9]{1,2})/([0-9]+?).htm'],
                                             
                        'www.spiegel.de':           ['/([a-z0-9/-]+?)/([\\S]+?)-([0-9]+?).html'],
                    
                        'www.smh.com.au':           ['/([a-z0-9-]+?)/([a-z0-9-]+?)/([\\S]+?).html'],
                    
                        'www.svd.se':               ['/([a-z0-9/-]+?)/([\\S]+?)_([0-9]+?).svd'],
                    
                        'www.tagesanzeiger.ch':     ['/([a-z0-9/-]+?)/([\\S]+?)/story/([0-9]+?)'],
                    
                        'www.theglobeandmail.com':  ['/([a-z0-9/-]+?)/article([0-9]+?)/'],
                    
                        'www.thehindu.com':         ['/([a-z0-9/-]+?)/article([0-9]+?).ece'],
                                
                        'www.thestar.com':          ['/([a-z0-9/-]+?)/([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([\\S]+?).html'],
                            
                                
                        'chinadaily.com.cn':        ['/([a-z0-9-]+?)/([0-9-]+?)/([0-9]{1,2})/([\\S]+?).htm'],
                                                    
                        'headlines.yahoo.co.jp':    ['/hl[?]a=([0-9]+?)-([\\S]+?)'],
                                                    
                        'news.xinhuanet.com':       ['/([a-z0-9-]+?)/([0-9-]+?)/([0-9]{1,2})/([\\S]+?).htm'],
                    
                        'nikkeibp.co.jp':           ['/article/([a-z0-9-]+?)/([0-9]+?)/([0-9]+?)/'],
                    
                        'people.com.cn':            ['/n/([0-9]{4})/([0-9]+?)/([\\S]+?).html'],
                    
                    /* =========================== */
                    /* misc, international */
                    
                        'blogos.com':               ['/article/([0-9]+?)/'],
                            
                        'diamond.jp':               ['/articles/-/([0-9]+?)'],
                            
                        'gigazine.net':             ['/news/([0-9]+?)-([\\S]+?)/'],
                            
                        'habrahabr.ru':             ['/post/([0-9]+?)/'],
                            
                        'mainichi.jp':              ['/([a-z0-9/-]+?)/([\\S]+?).html'],
                            
                        'toyokeizai.net':           ['/articles/-/([0-9]+?)'],
                            
                        'udn.com':                  ['/([a-z0-9/-]+?)/([0-9]+?).shtml', 
                                                     '/storypage.php'],
                    
                        
                        'www.appledaily.com.tw':    ['/([a-z0-9/-]+?)/([0-9]+?)/([0-9]+?)/([\\S]+?)'],
                            
                        
                        'daum.net':                 ['/([a-z0-9/-]+?)/([\\S]+?)newsid=([0-9]+?)', 
                                                     '/news/([\\S]+?)([0-9]{10,25}).daum'],
                            
                        'matome.naver.jp':          ['/odai/([0-9]+?)'],
                            
                        'news.naver.com':           ['/main/read.nhn']
                        
                    };
                    
                    
                    //  path
                    var _path_back = 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/back/',
                        _path_front = 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/front/';
            
                    //  css IDs
                    var _cssIDs = { 'prefix': 'evernote_clearly__' };
                        _cssIDs.in_reminder = _cssIDs.prefix + 'in_reminder';
            
                    //  ====
                
                    _inject_reminder = function (_window, _info)
                    {
                        //  check that we should show the reminder
                        //  ======================================
            
                            //  no info
                            if (_info) {}else { return; }
            
                            //  no data on when Clearly was last used -- enabled in the past; disabled now
                            //  if (_info.lastUsed_view) {}else { return; }
                            
                            //  time vars
                            var _now = (new Date()).getTime(),
                                _one_day = (1000 * 60 * 60 * 24);
            
                            //  shown less than 2 days ago
                            if (_info.lastUsed_reminderShown && ((_now - (_one_day * 2)) < _info.lastUsed_reminderShown)) { return; }
                                
                            //  closed less than 14 days ago
                            if (_info.lastUsed_reminderClosed && ((_now - (_one_day * 14)) < _info.lastUsed_reminderClosed)) { return; }
                    
                            //  used less than 21 days ago
                            if (_info.lastUsed_view && ((_now - (_one_day * 21)) < _info.lastUsed_view)) { return; }
                            
                        //  check that we're on a good url
                        //  ==============================
                        
                            //  get bearings
                            var _location = _window.location,
                                _href = _window.location.href.replace(/^([^\/:]+?):\/\//, ''),
                                _domain_name_1 = _location.hostname,
                                _domain_name_2 = _domain_name_1.replace(/^([^.]+?)[.]/i, ''),
                                _domain = false,
                                _rule = false;
            
                            //console.log(_domain_name_1);
                            //console.log(_domain_name_2);
                            //console.log(_urls[_domain_name_1]);
                            //console.log(_urls[_domain_name_2]);
                            
                            //  try to get rule
                            if (_rule) {}else { _rule = _urls[_domain_name_1]; _domain = _domain_name_1; }
                            if (_rule) {}else { _rule = _urls[_domain_name_2]; _domain = _domain_name_2; }
                            if (_rule) {}else { _domain = false; return; }
                    
                            //console.log(_rule);
                            //console.log(_domain);
                            //console.log(_href);
            
                            //  loop through rules
                            var _matched = false;
                            for (var _i=0, _ii=_rule.length; _i<_ii; _i++) { 
                                _matched = _href.match((new RegExp(_domain + _rule[_i] + '($|[?#/])', 'gi'))); 
                                if (_matched) { break; }
                            }
                            
                            //  did not match any rules
                            if (_matched) {}else { return; }
            
                        //  insert reminder
                        //  ===============
                    
                            //  log
                            var _log = function (_message) { if (console && console.log) { console.log('evernote_clearly / _inject_reminder / ' + _message); } };
            
                            //  containers
                            var _doc =  _window.document,
                                _html = _doc.getElementsByTagName('html')[0],
                                _body = _doc.getElementsByTagName('body')[0];
            
                            //  check containers
                            if (_body) {}else { _log('page is missing body element'); return; }
                            if (_html) {}else { _log('page is missing html element'); return; }
            
                            //  frame
                            var _frame = _doc.createElement('iframe'),
                                _frame_url = _path_front + 'in_reminder/page.html?x=y' +
                                             '&profile=' + _info.profile;
            
                            //  set frame attributes
                            _frame.setAttribute('frameBorder', '0');
                            _frame.setAttribute('allowTransparency', 'true');
                            _frame.setAttribute('scrolling', 'auto');
                            _frame.setAttribute('id', _cssIDs.in_reminder);
                    
                             //  set URL -- Chrome
                            _frame.setAttribute('src', _frame_url);
                        
            
                            //  set frame style
                            _frame.style.display =  'none';
                            _frame.style.position = 'absolute';
                            _frame.style.width =    '420px';
                            _frame.style.height =   '270px';
                            _frame.style.top =      '20px';
                            _frame.style.right =    '20px';
                            _frame.style.zIndex =   '2147483646';
            
                            //  insert frame
                            _html.appendChild(_frame);
            
            
                            
                            //  show, with delay
                            _window.setTimeout(function ()
                            {
                                //  get
                                var _f = _window.document.getElementById(_cssIDs.in_reminder);
                                if (_f) {}else { return; }
                                
                                //  show
                                _f.style.display = 'block'; 
                            }, 1000);
                    };
                    
                    _close_reminder = function (_window)
                    {
                        //  get
                        var _f = _window.document.getElementById(_cssIDs.in_reminder);
                        if (_f) {}else { return; }
                        
                        //  hide
                        _f.style.display = 'none'; 
                    };
                })();
            
            /* =============== */
            $C.inject_reminder = _inject_reminder;
            $C.close_reminder = _close_reminder;
        })();

        (function () {
            
            //  serialize object as html
            //  ========================
                var _serialize_object_as_custom_html = function (_stuffToTransform, __escape_html)
                {
                    //  stuffToTransform = { 'prefix-id': { 'key': 'value' } };
                    //  result = '<div id="evernote_clearly__serialized__[=prefix]__[=key]">[=value]</div>';
            
                    var _html = '';
                    
                    for (var _prefix in _stuffToTransform) { for (var _x in _stuffToTransform[_prefix])
                    {
                        _html += '<div id="evernote_clearly__serialized__' + __escape_html(_prefix) + '__' + __escape_html(_x) + '">';
                        _html +=    __escape_html(_stuffToTransform[_prefix][_x]);
                        _html += '</div>';
                    }}
                    
                    return _html;
                };
            
            /* =============== */
            $C.serialize_object_as_custom_html = _serialize_object_as_custom_html;
        })();

    })(window.__readable_by_evernote__content);
    

//  ==========================================================================================================================


//  import this
//  ===========
    (function ($C) {
    
        
        //  launch code
        //  ===========
            $C.inject = function (__document, __and_action)
            {
                //  inject
                $C.inject_clearly(__document, __and_action);
            };
        
    
    })(window.__readable_by_evernote__content);


//  ==========================================================================================================================


//  run
//  ===
    (function ($C) {
    
        
        //  launch hook
        //  ===========
            chrome.extension.onMessage.addListener(function(message, sender, sendResponse)
            {
                //  invalid
                if (message._type) {}else { return; }
                if (message._type == 'inject' || message._type == 'close-reminder') {}else { return; }
                
                //  cases
                switch (message._type)
                {
                    case ('inject'):
                        $C.inject(document);
                        break;
                        
                    case ('close-reminder'):
                        $C.close_reminder(window);
                        break;
                }
        
                //  response        
                sendResponse({});
            });
        

        
        //  load info
        //  =========
            (function ($C) {
            
                //  info object
                $C.loaded_info = {};
                    
                //  load
                chrome.extension.sendMessage({ '_type': "to-chrome--load-info" }, function(response)
                {
                    //  invalid response, for some reason
                    if (response._options && response._vars && response._translation) {}else { return; }
                    
                    //  profile
                    $C.loaded_info.reminder_info = response._reminder_info;
                    
                    //  loaded
                    $C.loaded_info.info = {
                        'option':             response._options,
                        'var':                response._vars,
                        'translation':        response._translation
                    };
        
                    //  keyboard shortcuts
                    $C.loaded_info.keyboard_shortcuts = {
                        '_key_activation':  $C.decode($C.loaded_info.info['var'].keys_activation),
                        '_key_clip':        $C.decode($C.loaded_info.info['var'].keys_clip),
                        '_key_highlight':   $C.decode($C.loaded_info.info['var'].keys_highlight)
                    };
                    
                    //  as html
                    $C.loaded_info.as_html = $C.serialize_object_as_custom_html($C.loaded_info.info, $C.escape_html);
        
                    //  add keyboard hook
                    $C.add_keyboard_hook(window, $C.loaded_info.keyboard_shortcuts, $C.get_key_combo_from_event, $C.inject);
                    
                    //  show reminder
                    $C.inject_reminder(window, $C.loaded_info.reminder_info);
                });
            
            })(window.__readable_by_evernote__content);
        

        /* === */

        //  expose as installed
        $C.expose_as_installed(window);    
    
    })(window.__readable_by_evernote__content);
