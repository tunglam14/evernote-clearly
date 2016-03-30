
//  main
window.__readable_by_evernote__popup = {};

//  wrap
(function ($R)
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
            $R.escape_html =   _escape_html;
            $R.unescape_html = _unescape_html;
            $R.encode =        _encode;
            $R.decode =        _decode;
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
            $R.translate_dom = _translate_dom;
        })();

        (function () {
            
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
            $R.translation__items = _translations__popup;

            //  translated strings may have &stuff; in them
            $R.translate = function (_key) { var _r = $R.translation__items[_key]; return $R.escape_html($R.unescape_html(_r ? _r : _key)); };    
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

        
        //  init event
        //  ==========
            $R.init = function ()
            {
                //  get localization
                if ($R.$background.$popup && $R.$background.$popup._which && $R.$background.$popup._which == 'login') {
                    document.getElementById('login__container_which').className = $R.$background.$popup._details._localization;
                }
                
                //  clear state
                $('#login__container').removeClass('twoFactor passwordReset showSpinner showEmailError showPasswordError');
        
                //  clear fields
                $('#login__email').val('');
                $('#login__email').blur();
                $('#login__password').val('');
                $('#login__password').blur();
                
                 $('#login__email__label').click();
            
                
                //  second factor?
                if ($R.$background.$popup && $R.$background.$popup._which && $R.$background.$popup._which == 'login' && $R.$background.$popup._details && $R.$background.$popup._details._screen && $R.$background.$popup._details._screen == 'second-factor')
                {
                    //  switch state
                    $('#login__container').addClass('twoFactor');
        
                    //  clear fields
                    $('#two_factor__code').val('');
                    $('#two_factor__code').blur();
                    $('#two_factor__code__label').click();
                       
                    //  hint
                    var _number = document.getElementById('two_factor__message__sms__number');
                    if (_number) { _number.textContent = ($R.$background.$popup._details._deliveryHint ? $R.$background.$popup._details._deliveryHint : ''); }
                        
                    //  sms or google?
                    if ($('#two_factor__message__sms__number').text().match(/^[\s\n\r\t]*$/) != null) { $('#two_factor__message__sms').hide(); }
                }
                
                //  send now-open signal
                $R.custom_events__dispatchToBackground('evernote--login--now-open');        
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
                
                    //  which event?
                    switch (_short_event_name)
                    {
                        case 'evernote--login--request-second-factor':
                    
                            //  clear login
                            $('#login__container').removeClass('passwordReset showSpinner showEmailError showPasswordError showCodeError').addClass('twoFactor');
        
                            //  move focus from password
                            $('#login__password').blur();
        
                            //  clear fields
                            $('#two_factor__code').val('');
                            $('#two_factor__code').blur();
                            $('#two_factor__code__label').click();
                        
                            //  sms or google?
                            if ($('#two_factor__message__sms__number').text().match(/^[\s\n\r\t]*$/) != null) { $('#two_factor__message__sms').hide(); }
                        
                            //  end
                            _stop = true;
                            break;
        
                        /* case 'evernote--login--show--in-frame':
                    
                            //  clear login
                            $('#login__container').removeClass('twoFactor showSpinner showEmailError showPasswordError');
        
                            //  clear fields
                            $('#login__email').val('');
                            $('#login__email').blur();
                            $('#login__password').val('');
                            $('#login__password').blur();
                        
                            //  end
                            _stop = true;
                            break; */
        
                        case 'evernote--login--failed':
                            //  set error
                            $('#login__password__error').html($R.translate('login__general__error'));
                            //  show error
                            $('#login__container').removeClass('showSpinner twoFactor passwordReset').addClass('showPasswordError');
                            //  end
                            _stop = true;
                            break;
                    
                        case 'evernote--login--failed--email':
                            //  set error
                            $('#login__email__error').html($R.translate('login__email__error__invalid'));
                            //  show error
                            $('#login__container').removeClass('showSpinner').addClass('showEmailError');
                            //  end
                            _stop = true;
                            break;
                    
                        case 'evernote--login--failed--password':
                            //  set error
                            $('#login__password__error').html($R.translate('login__password__error__invalid'));
                            //  show error
                            $('#login__container').removeClass('showSpinner').addClass('showPasswordError');
                            //  end
                            _stop = true;
                            break;
        
                        case 'evernote--login--failed--password-reset':
                            
                            //  switch state
                            $('#login__container').removeClass('showSpinner').addClass('passwordReset');
        
                            _stop = true;
                            break;
        
                        case 'evernote--login--failed--two-factor--code':
                            //  set error
                            $('#two_factor__code__error').html($R.translate('two_factor__code__error__invalid'));
                            //  show error
                            $('#login__container').removeClass('showSpinner').addClass('showCodeError');
                            //  end
                            _stop = true;
                            break;
        
                        case 'evernote--login--failed--two-factor--timeout':
                            //  set error
                            $('#login__password__error').html($R.translate('login__password__error__timeout'));
                            //  show error
                            $('#login__container').removeClass('showSpinner twoFactor passwordReset').addClass('showPasswordError');
                            //  end
                            _stop = true;
                            break;
                    }
            
                    //  stop
                    if (_stop) { _event.stopPropagation(); _event.preventDefault(); }
            
                }, true);
            };
        
        
        //  events
        //  ======
            $R.bind__ui_events = function ()
            {
                //  click labels => show inputs
                $('#login__email__label').click(function ()     { $('#login__email__label').hide();     $('#login__email').get(0).focus();     return false; });
                $('#login__password__label').click(function ()  { $('#login__password__label').hide();  $('#login__password').get(0).focus();  return false; });
                $('#two_factor__code__label').click(function () { $('#two_factor__code__label').hide(); $('#two_factor__code').get(0).focus(); return false; });
        
                //  leave input => show labels
                $('#login__email').blur(function ()     { if ($('#login__email').val() == '')     { $('#login__email__label').show();     } return false; });
                $('#login__password').blur(function ()  { if ($('#login__password').val() == '')  { $('#login__password__label').show();  } return false; });
                $('#two_factor__code').blur(function () { if ($('#two_factor__code').val() == '') { $('#two_factor__code__label').show(); } return false; });
        
                //  click errors => show inputs
                $('#login__email__error').click(function ()     { $('#login__container').removeClass('showEmailError');    $('#login__email__label').hide();     $('#login__email').get(0).focus();     return false; });
                $('#login__password__error').click(function ()  { $('#login__container').removeClass('showPasswordError'); $('#login__password__label').hide();  $('#login__password').get(0).focus();  return false; });
                $('#two_factor__code__error').click(function () { $('#login__container').removeClass('showCodeError');     $('#two_factor__code__label').hide(); $('#two_factor__code').get(0).focus(); return false; });
        
                //  enter to submit
                $('#login__email, #login__password').keydown(function (_event) { if (_event.keyCode == '13') { $R.login__submit(); return false; } });
                $('#two_factor__code').keydown(function (_event)               { if (_event.keyCode == '13') { $R.login__submitSecondFactor(); return false; } });
            
                //  tab -- to password
                $('#login__email').keydown(function (_event)
                {
                    if (_event.keyCode == '9')
                    {
                        if (_event.originalEvent && _event.originalEvent.shiftKey)
                        {
                            //  do not Shift+TAB anywhere
                            return false;
                        }
                        else
                        {
                            $('#login__container').removeClass('showPasswordError');
                            $('#login__password__label').hide();
                            $('#login__password').get(0).focus();
                            return false;
                        }
                    }
                    
                    return true;
                });
                
                //  tab -- back to email
                $('#login__password').keydown(function (_event)
                {
                    if (_event.keyCode == '9')
                    {
                        if (_event.originalEvent && _event.originalEvent.shiftKey)
                        {
                            $('#login__container').removeClass('showEmailError'); 
                            $('#login__email__label').hide(); 
                            $('#login__email').get(0).focus(); 
                            return false;
                        }
                        else
                        {
                            //  do not TAB to the submit button
                            return false;
                        }
                    }
                    
                    return true;
                });
            
                //  switchers
                $('#login__switch_to_cn').click(function() { $R.custom_events__dispatchToBackground('evernote--login--switch-to-cn'); return false; });
                $('#login__switch_to_in').click(function() { $R.custom_events__dispatchToBackground('evernote--login--switch-to-in'); return false; });
            
                //  click button
                $('#login__button_do').click(function()      { $R.login__submit();             return false; });
                $('#two_factor__button_do').click(function() { $R.login__submitSecondFactor(); return false; });
        
                //  two factor help
                $('#two_factor__help').click(function() { $R.custom_events__dispatchToBackground('open--two-factor-help'); return false; });
        
                //  password reset
                $('#login_reset__button, #login_reset__message').click(function() { $R.custom_events__dispatchToBackground('open--password-reset'); return false; });
        
                //  register
                $('a.registerLink').click(function () { $R.custom_events__dispatchToBackground('open--register--popup'); return false; });
        
                //  submit
                $R.login__submit = function ()
                {
                    var _email = $('#login__email').val(),
                        _password = $('#login__password').val();
        
                    //  remove errors
                    $('#login__container').removeClass('showEmailError showPasswordError');
        
                    // check email
                    switch (true)
                    {
                        case (!(_email.length >= 1)):
                            $('#login__email__error').html($R.translate('login__email__error__required'));
                            $('#login__container').addClass('showEmailError');
                            return;
                        
                        case (!(_email.length <= 64)):
                            $('#login__email__error').html($R.translate('login__email__error__length'));
                            $('#login__container').addClass('showEmailError');
                            return;
                        
                        case (!(/^[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.([A-Za-z]{2,})$/gi.test(_email)) && !(/^[a-z0-9]([a-z0-9_-]{0,62}[a-z0-9])?$/gi.test(_email))):
                            $('#login__email__error').html($R.translate('login__email__error__format'));
                            $('#login__container').addClass('showEmailError');
                            return;
                    }
        
                    // check password
                    switch (true)
                    {        
                        case (!(_password.length >= 1)):
                            $('#login__password__error').html($R.translate('login__password__error__required'));
                            $('#login__container').addClass('showPasswordError');
                            return;
        
                        case (!(_password.length >= 6)):
                        case (!(_password.length <= 64)):
                            $('#login__password__error').html($R.translate('login__password__error__length'));
                            $('#login__container').addClass('showPasswordError');
                            return;
                        
                        case (!(/^[A-Za-z0-9!#$%&'()*+,.\/:;<=>?@^_`{|}~\[\]\\-]{6,64}$/gi.test(_password))):
                            $('#login__password__error').html($R.translate('login__password__error__format'));
                            $('#login__container').addClass('showPasswordError');
                            return;
                    }
                
                    //  spinner
                    $('#login__container').addClass('showSpinner');
            
                    //  event
                    $R.custom_events__dispatchToBackground('evernote--login--do');
                };
        
        
                $R.login__submitSecondFactor = function ()
                {
                    var _code = $('#two_factor__code').val();
                
                    //  remove errors
                    $('#login__container').removeClass('showCodeError');
        
                    // check code
                    switch (true)
                    {
                        case (!(_code.length >= 1)):
                            $('#two_factor__code__error').html($R.translate('two_factor__code__error__required'));
                            $('#login__container').addClass('showCodeError');
                            return;
                        
                        case (!(_code.length >= 6)):
                            $('#two_factor__code__error').html($R.translate('two_factor__code__error__length'));
                            $('#login__container').addClass('showCodeError');
                            return;
                        
                        case (!(/^([0-9-])+$/gi.test(_code))):
                            $('#two_factor__code__error').html($R.translate('two_factor__code__error__format'));
                            $('#login__container').addClass('showCodeError');
                            return;
                    }
        
                    //  spinner
                    $('#login__container').addClass('showSpinner');
            
                    //  event
                    $R.custom_events__dispatchToBackground('evernote--login--do-second-factor');
                };
            };
        
        //  ref to background page main object
        //  ==================================
        
            $R.$background = false;
        
             $R.$background = chrome.extension.getBackgroundPage().__readable_by_evernote;
        
        
        
            
    
    })();


//  ==========================================================================================================================


//  run
//  ===
    (function () {
        
        //  vars
        $R.window = window;
        $R.$window = $($R.window);
        $R.document = document;
        $R.$document = $($R.document);
        
        //  get translation        
        $R.from_background__translation();

        //  get vars/options
        $R.from_background__options();
        $R.from_background__vars();

        //  translate
        $R.translate_dom($, $R.translate);
        
        //  ui, ux
        $R.bind__custom_events();
        $R.bind__ui_events();

        //  init
$R.init(); 
        
        //  show
        $('body').removeClass('showCover');        
        
    })();

})(window.__readable_by_evernote__popup);
