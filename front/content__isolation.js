
//  main object
//  ===========
    window.__readable_by_evernote__content__isolation = {};


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

    })(window.__readable_by_evernote__content__isolation);
    

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

    })(window.__readable_by_evernote__content__isolation);
    

//  ==========================================================================================================================


//  import this
//  ===========
    (function ($C) {
    
        
        //  launch code
        //  ===========
            $C.inject = function (__document)
            {
                //  inject
                $C.inject_script_and_definitions(__document, 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/front/in_isolation/init_and_call.js', $C.loaded_info.as_html);
            };
        
    
    })(window.__readable_by_evernote__content__isolation);


//  ==========================================================================================================================


//  run
//  ===
    (function ($C) {
    
        
        //  on message
        //  ==========
            chrome.extension.onMessage.addListener(function(message, sender, sendResponse)
            {
                //  not ours
                if (message._type) {}else { return; }
                if (message._type == 'inject') { return; }
                if (message._type == 'close-reminder') { return; }
        
                //  vars
                var _stop = false,
                    _event_name = message._type;
                    
                //  other
                if (_event_name.indexOf('to-content--') === 0) {}else { return; }
                
                var _short_event_name = _event_name.substr('to-content--'.length),
                    _m = function (_name) {
                        var _e = $C.custom_events.names_to_objects['to-browser--'+_name];
                        $C.custom_events.dispatch(_e, window);
                    };
        
                //  pre-switch -- injects stuff; doesn't prevent main-switch
                switch (_short_event_name)
                {
                    case 'evernote--get-recommendation--successful':
                        var _iframe = document.getElementById('evernote_clearly__reformat'),
                            _documentToInjectInto = (_iframe.contentDocument || _iframe.contentWindow.document),
                            _recommendation = message._recommendation;
        
                        $C.inject_recommendation(_recommendation, _documentToInjectInto, $C.escape_html);
                        break;
        
                    case 'evernote--get-filing--successful':
                        var _iframe = document.getElementById('evernote_clearly__reformat'),
                            _documentToInjectInto = (_iframe.contentDocument || _iframe.contentWindow.document),
                            _filing = message._filing;
        
                        $C.inject_filing(_filing, _documentToInjectInto, $C.escape_html);
                        break;
        
                    case 'evernote--clip--successful':
                    case 'evernote--clip-highlight--successful':
                    case 'evernote--clip-filing--successful':
                        var _iframe = document.getElementById('evernote_clearly__reformat'),
                            _documentToInjectInto = (_iframe.contentDocument || _iframe.contentWindow.document),
                            _clipInfo = message._info,
                            _filing = message._filing;
        
                        $C.inject_filing(_filing, _documentToInjectInto, $C.escape_html);
                        $C.inject_clip_info(_clipInfo, _documentToInjectInto, $C.escape_html);
                        break;
                }
                
                //  main-switch -- what are we routing?
                switch (_short_event_name)
                {
                    case 'evernote--login--show':                     _m('evernote--login--show'); _stop = true; break;
                    case 'evernote--login--show--in':                 _m('evernote--login--show'); _stop = true; break;
                    case 'evernote--login--show--in-cn':              _m('evernote--login--show'); _stop = true; break;
                    case 'evernote--login--show--cn':                 _m('evernote--login--show'); _stop = true; break;
                    case 'evernote--login--show--cn-in':              _m('evernote--login--show'); _stop = true; break;
        
                    case 'evernote--login--successful':               _m(_short_event_name); _stop = true; break;
                    case 'evernote--login--now-open':                 _m(_short_event_name); _stop = true; break;
        
                  /*case 'evernote--login--failed--password-reset':   _m(_short_event_name); _stop = true; break;*/
        
                    case 'evernote--clip--successful':                _m(_short_event_name); _stop = true; break;
                    case 'evernote--clip--failed':                    _m(_short_event_name); _stop = true; break;
                    case 'evernote--clip-highlight--successful':      _m(_short_event_name); _stop = true; break;
                    case 'evernote--clip-highlight--failed':          _m(_short_event_name); _stop = true; break;
                    case 'evernote--clip-filing--successful':         _m(_short_event_name); _stop = true; break;
                    case 'evernote--clip-filing--failed':             _m(_short_event_name); _stop = true; break;
                    
                    case 'evernote--get-recommendation--failed':      _m(_short_event_name); _stop = true; break;
                    case 'evernote--get-recommendation--successful':  _m(_short_event_name); _stop = true; break;
        
                    case 'evernote--get-filing--failed':              _m(_short_event_name); _stop = true; break;
                    case 'evernote--get-filing--successful':          _m(_short_event_name); _stop = true; break;
        
                    case 'show--dialog-first--all-features':          _m(_short_event_name); _stop = true; break;
                    case 'show--dialog-first--new-features':          _m(_short_event_name); _stop = true; break;
        
                    case 'show--evernote-footer':                     _m(_short_event_name); _stop = true; break;
                }
                    
                //  stop?
                if (_stop) { sendResponse({}); }
            });
        
        
        //  on event
        //  ========
            window.document.addEventListener('click', function(_event)
            {
                //  vars
                var _stop = false,
                    _event_key = $C.custom_events.get_key(_event),
                    _event_name = $C.custom_events.keys_to_names[_event_key];
                
                //  invalid    
                if (_event_name) {}else { return; }
                
                //  other
                if (_event_name.indexOf('to-extension--') === 0) {}else { return; }
                
                //  vars
                var _short_event_name = _event_name.substr('to-extension--'.length),
                    _m = function (_message) {
                        _message['_type'] = 'to-chrome--' + _message['_type'];
                        chrome.extension.sendMessage(_message);
                    };
        
                //  route events -- some with added details, or different background names        
                switch (_short_event_name)
                {
                    case 'open--settings':                        _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'open--settings--theme':                 _m({ '_type': _short_event_name }); _stop = true; break;
                
                    case 'open--premium':                         _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'open--password-reset':                  _m({ '_type': _short_event_name }); _stop = true; break;
        
                    case 'open--register--footer':                _m({ '_type': _short_event_name }); _stop = true; break;
        
                    /* === */
                
                    case 'select--theme--theme-1':                _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'select--theme--theme-2':                _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'select--theme--theme-3':                _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'select--theme--custom':                 _m({ '_type': _short_event_name }); _stop = true; break;
                
                    case 'select--size--small':                   _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'select--size--medium':                  _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'select--size--large':                   _m({ '_type': _short_event_name }); _stop = true; break;
        
                    case 'select--related-notes--just-at-bottom': _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'select--related-notes--disabled':       _m({ '_type': _short_event_name }); _stop = true; break;
        
                    /* === */
                
                    case 'track--theme-popup':                    _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'track--settings':                       _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'track--register':                       _m({ '_type': _short_event_name }); _stop = true; break;
        
                    case 'track--first-show--check':              _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'track--first-show--mark':               _m({ '_type': _short_event_name }); _stop = true; break;
        
                    case 'track--evernote-footer--check':         _m({ '_type': _short_event_name }); _stop = true; break;
        
                    case 'track--clip':                           /* done inside background code */   _stop = true; break;
                    case 'track--view':
        
                        var _frame =    document.getElementById('evernote_clearly__reformat'),
                            _css =      (_frame && _frame.contentDocument && _frame.contentDocument.getElementById ? _frame.contentDocument.getElementById('baseCSS') : false),
                            _url =      decodeURIComponent(document.body.getAttribute('evernote_clearly__url')),
        
                            _domain =   ((_url.indexOf('/', 8) > -1) ? _url.substr(0, (_url.indexOf('/', 8)+1)) : 'blank-domain'),
                            _theme =    (_css && _css.className ? _css.className : 'blank-theme');
                        
                        _m({ 
                            '_type':    _short_event_name, 
                            '_domain':  _domain, 
                            '_theme':   _theme
                        }); 
                        
                        _stop = true;
                        break;
        
                    /* === */
        
                    case 'evernote--get-filing':          _m({ '_type': _short_event_name }); _stop = true; break;
                    case 'evernote--get-filing--refresh': _m({ '_type': _short_event_name }); _stop = true; break;
        
                    case 'evernote--clip':
                    
                        var _iframe =   document.getElementById('evernote_clearly__reformat'),
                            _doc =      (_iframe.contentDocument || _iframe.contentWindow.document),
        
                            _pageId =   decodeURIComponent(document.body.getAttribute('evernote_clearly__page_id')),
                            _note = {
                                'url':   decodeURIComponent(document.body.getAttribute('evernote_clearly__url')), 
                                'title': decodeURIComponent(document.body.getAttribute('evernote_clearly__title')), 
                                'body':  $C.get_html_to_clip(_doc)
                            },
                                                
                            _domain =   ((_note.url.indexOf('/', 8) > -1) ? _note.url.substr(0, (_note.url.indexOf('/', 8)+1)) : 'blank-domain');
        
                        _m({
                            '_type':   _short_event_name,
                            '_pageId': _pageId,
                            '_note':   _note,
                            '_domain': _domain
                        });
                    
                        _stop = true;
                        break;
        
                    case 'evernote--clip-highlight':
        
                        var _iframe =   document.getElementById('evernote_clearly__reformat'),
                            _doc =      (_iframe.contentDocument || _iframe.contentWindow.document),
        
                            _pageId =   decodeURIComponent(document.body.getAttribute('evernote_clearly__page_id')),
                            _note = {
                                'url':   decodeURIComponent(document.body.getAttribute('evernote_clearly__url')), 
                                'title': decodeURIComponent(document.body.getAttribute('evernote_clearly__title')), 
                                'body':  $C.get_html_to_clip(_doc)
                            };
                            
                        _m({
                            '_type':   _short_event_name,
                            '_pageId': _id,
                            '_note':   _note
                        });
                    
                        _stop = true;
                        break;
                
                    case 'evernote--clip-filing':
                    
                        var _iframe =   document.getElementById('evernote_clearly__reformat'),
                            _doc =      (_iframe.contentDocument || _iframe.contentWindow.document),
        
                            _pageId =   decodeURIComponent(document.body.getAttribute('evernote_clearly__page_id')),
                            _note = {
                                'url':   decodeURIComponent(document.body.getAttribute('evernote_clearly__url')), 
                                'title': decodeURIComponent(document.body.getAttribute('evernote_clearly__title')), 
                                'body':  $C.get_html_to_clip(_doc)
                            },
                            _filing = {
                                'notebook_id': _doc.getElementById('filing__notebook__id').textContent,
                                'tag_names': (function () { 
                                    var _r=[], _ts=_doc.getElementById('filing__tags').getElementsByTagName('span');
                                    for (var _i=0, _ii=_ts.length; _i<_ii; _i++) { _r.push(_ts[_i].textContent); }
                                    return _r;
                                })()  
                            },
                                                
                            _domain =   ((_note.url.indexOf('/', 8) > -1) ? _note.url.substr(0, (_note.url.indexOf('/', 8)+1)) : 'blank-domain');
        
                        _m({
                            '_type':   _short_event_name,
                            '_pageId': _pageId,
                            '_note':   _note,
                            '_filing': _filing,
                            '_domain': _domain
                        });
                    
                        _stop = true;
                        break;
                
                    case 'evernote--get-recommendation':
                    
                        var _iframe =   document.getElementById('evernote_clearly__reformat'),
                            _doc =      (_iframe.contentDocument || _iframe.contentWindow.document),
                            
                            _pageId =   decodeURIComponent(document.body.getAttribute('evernote_clearly__page_id')),
                            _request = {
                                'url':   decodeURIComponent(document.body.getAttribute('evernote_clearly__url')), 
                                'title': decodeURIComponent(document.body.getAttribute('evernote_clearly__title')), 
                                'body':  $C.get_html_to_clip(_doc)
                            };
        
                        _m({
                            '_type':    _short_event_name,
                            '_pageId':  _pageId,
                            '_request': _request
                        });
                    
                        _stop = true;
                        break;
                }
        
                //  stop
                if (_stop) { _event.stopPropagation(); _event.preventDefault(); }
            }, true);
        

        
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
                    $C.loaded_info.profile = response._profile;
                    
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
                    
                    //  inject
                    $C.inject(document);
                });
            
            })(window.__readable_by_evernote__content__isolation);
        
    
    })(window.__readable_by_evernote__content__isolation);
