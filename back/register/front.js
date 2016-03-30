
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
                var _translations__register = {
                
                    'register__page_title':       'Clearly / Register',
            
                    'register__evernote_heading': 'Your life\'s work',
                    'register__evernote_text':    'For everything you\'ll do, Evernote is the workspace to get it done.',
            
                    'register__text':             'Using Clearly with an Evernote account will allow you to save all your articles and read them later on any device.',
                    'register__button':           'Sign up',
            
                    'register__agree':            'By clicking "Sign up", you agree to our [=terms] and [=privacy].',
                    'register__agree__terms':     'Terms of Service',
                    'register__agree__privacy':   'Privacy Policy',
            
                    
                    'register__captcha__label':            'Captcha',
                    'register__captcha__error__required':  'Captcha is required.',
                    'register__captcha__error__incorrect': 'Captcha is incorrect.',
            
                    'register__email__error__conflict':    'Email is already associated with an account.',
            
            
                    'register__after__heading':   'Registration complete',
                    
                    'register__after__1':         'Your Evernote account is now paired with Clearly.',
                    'register__after__2':         'Click the Evernote icon, in Clearly\'s sidebar, to instantly save an article.',
                    'register__after__3':         'Get Evernote on all your devices to read anywhere, at anytime.'
                
                };    
            
            /* =============== */
            $R.translation__items = _translations__register;
            
            
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
            
            //  translated strings may have &stuff; in them
            $R.translate = function (_key) { var _r = $R.translation__items[_key]; return $R.escape_html($R.unescape_html(_r ? _r : _key)); };
        })();

    })(window.__readable_by_evernote__register__front);
    
    
//  ==========================================================================================================================
    

//  import this
//  ===========
    (function ($R, $B) {

        
        //  get background
        //  ==============
            $R.get_background_object = function ()
            {
                var _w = chrome.extension.getBackgroundPage();
                return _w.__readable_by_evernote;
            };
        
        
        //  translation
        //  ===========
            $R.translation__get_item = function (_key)
            {
                //  default
                var _t = chrome.i18n.getMessage(_key);
                
                //  custom
                switch (true)
                {
                    case (_key.match(/^login__/) != null):
                        _t = chrome.i18n.getMessage('inside__'+_key);
                        break;
                }
                
                return (_t > '' ? _t : '');
            };
        


        
        //  get strings
        //  ===========
            $R.translation__get_items = function ()
            {
                for (var x in $R.translation__items)
                {
                    var _t = $R.translation__get_item(x);
                    if (_t > '') {}else { continue; }
                
                    $R.translation__items[x] = _t;
                }
            };
            
        
        //  do translate
        //  ============
            $R.translation__apply = function ()
            {
                //  translate everything
                //  ====================
                    $R.translate_dom($, $R.translate);        
        
                //  misc other stuff
                //  ================
                    $('#register__agree').html($('#register__agree').html().replace('[=terms]', '<a id="register__agree__terms" href="#">'+$R.translate('register__agree__terms')+'</a>').replace('[=privacy]', '<a id="register__agree__privacy" href="#">'+$R.translate('register__agree__privacy')+'</a>'));
            };
        

    })(window.__readable_by_evernote__register__front, window.__readable_by_evernote__register__back);


//  ==========================================================================================================================


//  run
//  ===
    (function ($R, $B) {

        //  vars
        $R.paths = { 
            'back': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/back/', 
            'front': 'chrome-extension://iooicodkiihhpojmmeghjclgihfjdjhj/front/', 
            'evernote': 'https://www.evernote.com/' 
        };
        $R.referral_code = 'clearly';
        $R.registrationInfo = false;    //  set in getAndSetRegistrationInfo

        //  track
        (function () {
            var _r = $R.get_background_object();
                _r.events_handler__independent_pages('to-extension--track--register--shown');
        })();

        
        //  get registration info
        //  =====================
            $R.getAndSetRegistrationInfo = function ()
            {
                //  international/china
                $('#register__container_which').get(0).className = $B.$bootstrap.profiles_as_string; 
        
                //  construct request
                var _url = $B.$bootstrap.remote_domain + 'CreateUserJSON.action',
                    _data = { 
                        'code': $R.referral_code,
                        'timestamp': (new Date()).getTime()
                    },
                    _callback = function ()
                    {
                        //  multiple callback; check state
                        if (this.readyState == 4 && this.status == 200 && this.responseText) {}else { return; }
            
                        //  get/check response JSON
                        var _json = JSON.parse(this.responseText);
                        if (_json.code && _json.submit && _json.captcha) {}else { return; }
            
                        //  save
                        $R.registrationInfo = {
                            'submit': $B.$bootstrap.remote_domain + _json.submit.substr(1),
                            'captcha': $B.$bootstrap.remote_domain + _json.captcha.substr(1) + '?timestamp=' + (new Date()).getTime()
                        };
        
                        //  show captcha image        
                        $('#register__captcha__image__inner').css({ 'background-image': "url('"+$R.registrationInfo.captcha+"')" });
                        
                        //  terms and privacy, according to bootstrap
                        $('#register__agree__terms').attr('target', '_blank').attr('href', $B.$bootstrap.remote_domain_marketing + 'legal/tos.php');
                        $('#register__agree__privacy').attr('target', '_blank').attr('href', $B.$bootstrap.remote_domain_marketing + 'legal/privacy.php');
                    };
                
                //  send request
                $B.xhr('POST', _url, _callback, _data);
            };
        
        
        //  do
        //  ==
        
            $R.do__submit = function ()
            {
                //  get
                var _email = $('#register__email').val(),
                    _password = $('#register__password').val(),
                    _captcha = $('#register__captcha').val();
        
                //  validate
                if ($R.do__validate(_email, _password, _captcha)) {}else { return; }
            
                //  spinner
                $('#register__container').addClass('showSpinner');
        
                //  construct request
                var _url = $R.registrationInfo.submit,
                    _data = { 
                        'code': $R.referral_code,
                        'email': _email,
                        'password': _password,
                        'terms': 'true',
                        'createNoUsername': '',
                        'timestamp': (new Date()).getTime()
                    },
                    _callback = function ()
                    {
                        //  multiple callback; check state
                        if (this.readyState == 4 && this.status == 200 && this.responseText) {}else { return; }
            
                        //  get/check response JSON
                        var _json = JSON.parse(this.responseText);
                        try { var _x = _json.success; } catch (_e) { return; }
                        if ((''+_json.success).toUpperCase().substr(0,1)) {}else { return; }
        
                        //  spinner
                        $('#register__container').removeClass('showSpinner');
        
                        //  callback
                        $R.do__callback(_json, _data);
                    };
                
                //  add captcha, if necessary
                if ($('#register__container').hasClass('showCaptcha')) { _data['captcha'] = _captcha; }
                
                //  send request
                $B.xhr('POST', _url, _callback, _data);
            };
        
            $R.do__callback = function (_json, _submitted)
            {
                //  success
                var _success = ((''+_json.success).toUpperCase().substr(0,1) == 'T');
        
                //  process errors
                if (!_success && _json.errors && _json.errors.length && (_json.errors.length > 0)) { $R.do__callback__process_errors(_json); return; }
                
                //  success -> show done
                $('#register__container').addClass('showDone');
                
                //  login
                (function () {
                    //  credentials
                    var _credentials = {
                        'user': _submitted['email'],
                        'pass': _submitted['password']
                    };
                    
                    //  background
                    var _r = $R.get_background_object();
                    
                    //  background login => send credentials too
                    _r.events_handler__independent_pages('to-extension--evernote--login--do-after-register', _credentials);
                    
                    //  track register
                    _r.events_handler__independent_pages('to-extension--track--register--completed');
                })();
            };
        
            $R.do__callback__process_errors = function (_json)
            {
                //  remove all errors
                $('#register__container').removeClass('showEmailError showPasswordError showCaptchaError');
        
                //  one error at a time
                var _error = _json.errors[0],
                    _field = _error['field-name'],
                    _code = _error['code'],
                    _message = false;
        
                //  figure-out error
                switch (true)
                {
                    case ((_field == 'email') &&    (_code == 'validation.required.valueNotPresent')):          _message = $R.translate('login__email__error__required'); break;
                    case ((_field == 'email') &&    (_code == 'validation.minlength.valueTooShort')):           _message = $R.translate('login__email__error__length');   break;
                    case ((_field == 'email') &&    (_code == 'validation.maxlength.valueTooLong')):            _message = $R.translate('login__email__error__length');   break;
                    case ((_field == 'email') &&    (_code == 'validation.minvalue.valueBelowMinimum')):        _message = $R.translate('login__email__error__length');   break;
                    case ((_field == 'email') &&    (_code == 'validation.maxvalue.valueAboveMaximum')):        _message = $R.translate('login__email__error__length');   break;
                    case ((_field == 'email') &&    (_code == 'validation.mask.valueDoesNotMatch')):            _message = $R.translate('login__email__error__format');   break;
                    case ((_field == 'email') &&    (_code == 'validation.expression.valueFailedExpression')):  _message = $R.translate('login__email__error__format');   break;
        
                    case ((_field == 'password') && (_code == 'validation.required.valueNotPresent')):          _message = $R.translate('login__password__error__required'); break;
                    case ((_field == 'password') && (_code == 'validation.minlength.valueTooShort')):           _message = $R.translate('login__password__error__length');   break;
                    case ((_field == 'password') && (_code == 'validation.maxlength.valueTooLong')):            _message = $R.translate('login__password__error__length');   break;
                    case ((_field == 'password') && (_code == 'validation.minvalue.valueBelowMinimum')):        _message = $R.translate('login__password__error__length');   break;
                    case ((_field == 'password') && (_code == 'validation.maxvalue.valueAboveMaximum')):        _message = $R.translate('login__password__error__length');   break;
                    case ((_field == 'password') && (_code == 'validation.mask.valueDoesNotMatch')):            _message = $R.translate('login__password__error__format');   break;
                    case ((_field == 'password') && (_code == 'validation.expression.valueFailedExpression')):  _message = $R.translate('login__password__error__format');   break;
        
                    case ((_field == 'captcha') &&  (_code == 'validation.required.valueNotPresent')):          _message = $R.translate('register__captcha__error__required');  break;
                    case ((_field == 'captcha') &&  (_code == 'validation.minlength.valueTooShort')):           _message = $R.translate('register__captcha__error__incorrect'); break;
                    case ((_field == 'captcha') &&  (_code == 'validation.maxlength.valueTooLong')):            _message = $R.translate('register__captcha__error__incorrect'); break;
                    case ((_field == 'captcha') &&  (_code == 'validation.minvalue.valueBelowMinimum')):        _message = $R.translate('register__captcha__error__incorrect'); break;
                    case ((_field == 'captcha') &&  (_code == 'validation.maxvalue.valueAboveMaximum')):        _message = $R.translate('register__captcha__error__incorrect'); break;
                    case ((_field == 'captcha') &&  (_code == 'validation.mask.valueDoesNotMatch')):            _message = $R.translate('register__captcha__error__incorrect'); break;
                    case ((_field == 'captcha') &&  (_code == 'validation.expression.valueFailedExpression')):  _message = $R.translate('register__captcha__error__incorrect'); break;
                    
                    
                    case ((_field == 'email') &&    (_code == 'registration.email.deactivated')):               _message = $R.translate('register__email__error__conflict'); break;
                    case ((_field == 'email') &&    (_code == 'registrationAction.email.conflict')):            _message = $R.translate('register__email__error__conflict'); break;
                    
                    case ((_field == 'captcha') &&  (_code == 'registrationAction.captia')):                    _message = $R.translate('register__captcha__error__incorrect'); break;
                }    
        
                //  show captcha, if needed
                if (_field == 'captcha') { $('#register__container').addClass('showCaptcha').removeClass('hideCaptcha'); }
            
                //  show error
                $('#register__'+_field+'__error').html(_message);
                $('#register__container').addClass('show'+_field.substr(0,1).toUpperCase()+_field.substr(1)+'Error');
            };
        
            $R.do__validate = function (_email, _password, _captcha)
            {
                //  remove all errors
                $('#register__container').removeClass('showEmailError showPasswordError showCaptchaError');
        
                // check email
                switch (true)
                {
                    case (!(_email.length >= 1)):
                        $('#register__email__error').html($R.translate('login__email__error__required'));
                        $('#register__container').addClass('showEmailError');
                        return false;
                    
                    case (!(_email.length <= 64)):
                        $('#register__email__error').html($R.translate('login__email__error__length'));
                        $('#register__container').addClass('showEmailError');
                        return false;
                    
                    case (!(/^[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.([A-Za-z]{2,})$/gi.test(_email))):
                        $('#register__email__error').html($R.translate('login__email__error__format'));
                        $('#register__container').addClass('showEmailError');
                        return false;
                }
        
                // check password
                switch (true)
                {        
                    case (!(_password.length >= 1)):
                        $('#register__password__error').html($R.translate('login__password__error__required'));
                        $('#register__container').addClass('showPasswordError');
                        return false;
        
                    case (!(_password.length >= 6)):
                    case (!(_password.length <= 64)):
                        $('#register__password__error').html($R.translate('login__password__error__length'));
                        $('#register__container').addClass('showPasswordError');
                        return false;
                    
                    case (!(/^[A-Za-z0-9!#$%&'()*+,.\/:;<=>?@^_`{|}~\[\]\\-]{6,64}$/gi.test(_password))):
                        $('#register__password__error').html($R.translate('login__password__error__format'));
                        $('#register__container').addClass('showPasswordError');
                        return false;
                }
            
                //  check captcha
                if ($('#register__container').hasClass('showCaptcha')) { switch (true) {
                    case (!(_captcha.length >= 1)):
                        $('#register__captcha__error').html($R.translate('register__captcha__error__required'));
                        $('#register__container').addClass('showCaptchaError');
                        return false;
                    
                    case (!(_captcha.length == 5)):
                    case (!(/^[0-9]{5}$/gi.test(_captcha))):
                        $('#register__captcha__error').html($R.translate('register__captcha__error__incorrect'));
                        $('#register__container').addClass('showCaptchaError');
                        return false;
                } }
            
                //  no errors
                return true;
            };
        
        
        //  events
        //  ======
            $R.bind__ui_events = function ()
            {
                //  click labels => show inputs
                $('#register__email__label').click(function ()    { $('#register__email__label').hide();    $('#register__email').get(0).focus();     return false; });
                $('#register__password__label').click(function () { $('#register__password__label').hide(); $('#register__password').get(0).focus();  return false; });
                $('#register__captcha__label').click(function ()  { $('#register__captcha__label').hide();  $('#register__captcha').get(0).focus();   return false; });
        
                //  leave input => show labels
                $('#register__email').blur(function ()    { if ($('#register__email').val() == '')     { $('#register__email__label').show();     } return false; });
                $('#register__password').blur(function () { if ($('#register__password').val() == '')  { $('#register__password__label').show();  } return false; });
                $('#register__captcha').blur(function ()  { if ($('#register__captcha').val() == '')   { $('#register__captcha__label').show();   } return false; });
        
                //  click errors => show inputs
                $('#register__email__error').click(function ()    { $('#register__container').removeClass('showEmailError');    $('#register__email__label').hide();     $('#register__email').get(0).focus();     return false; });
                $('#register__password__error').click(function () { $('#register__container').removeClass('showPasswordError'); $('#register__password__label').hide();  $('#register__password').get(0).focus();  return false; });
                $('#register__captcha__error').click(function ()  { $('#register__container').removeClass('showCaptchaError');  $('#register__captcha__label').hide();   $('#register__captcha').get(0).focus();   return false; });
        
                //  enter to submit
                $('#register__email, #register__password, #register__captcha').keydown(function (_event) { if (_event.keyCode == '13') { $R.do__submit(); return false; } });
            
                //  tab -- to password
                $('#register__email').keydown(function (_event)
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
                            $('#register__container').removeClass('showPasswordError'); 
                            $('#register__password__label').hide(); 
                            $('#register__password').get(0).focus(); 
                            return false;
                        }
                    }
                    
                    return true;
                });
                
                //  tab -- to captcha; back to email
                $('#register__password').keydown(function (_event)
                {
                    if (_event.keyCode == '9')
                    {
                        if (_event.originalEvent && _event.originalEvent.shiftKey)
                        {
                            $('#register__container').removeClass('showEmailError'); 
                            $('#register__email__label').hide(); 
                            $('#register__email').get(0).focus(); 
                            return false;
                        }
                        else
                        {
                            if ($('#register__container').hasClass('showCaptcha'))
                            {
                                $('#register__container').removeClass('showCaptchaError'); 
                                $('#register__captcha__label').hide(); 
                                $('#register__captcha').get(0).focus(); 
                            }
                            
                            //  if no captcha field, do not TAB anywhere
                            return false;
                        }
                    }
                    
                    return true;
                });
        
                //  tab -- back to password
                $('#register__captcha').keydown(function (_event)
                {
                    if (_event.keyCode == '9')
                    {
                        if (_event.originalEvent && _event.originalEvent.shiftKey)
                        {
                            $('#register__container').removeClass('showPasswordError'); 
                            $('#register__password__label').hide(); 
                            $('#register__password').get(0).focus(); 
                            return false;
                        }
                        else
                        {
                            //  do not TAB anywhere
                            return false;
                        }
                    }
                    
                    return true;
                });
        
                //  switch in -> cn
                $('#register__switch_to_cn').click(function()
                {
                    //  return
                    if ($B.$bootstrap.profiles_as_string == 'in_cn') {}else { return false; }
        
                    //  set
                    $B.$bootstrap.profiles_as_string = 'cn_in';
                    $B.$bootstrap.server = 'china';
                    $B.$bootstrap.remote_domain = $B.$bootstrap['server_china'];
        
                    var _other_profile = false;
                        _other_profile = (_other_profile ? _other_profile : $B.$bootstrap.profiles[1]);
                        _other_profile = (($B.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                        _other_profile = (_other_profile ? _other_profile : $B.$bootstrap.profiles[0]);
                        _other_profile = (($B.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                    if (_other_profile && _other_profile.settings && _other_profile.settings.marketingUrl) { $B.$bootstrap.remote_domain_marketing = _other_profile.settings.marketingUrl + '/'; }
                
                    //  update
                    $R.getAndSetRegistrationInfo();
                    
                    return false; 
                });
                
                //  switch cn -> in
                $('#register__switch_to_in').click(function()
                {
                    //  return
                    if ($B.$bootstrap.profiles_as_string == 'cn_in') {}else { return false; }
        
                    //  set
                    $B.$bootstrap.profiles_as_string = 'in_cn';
                    $B.$bootstrap.server = 'main';
                    $B.$bootstrap.remote_domain = $B.$bootstrap['server_main'];
        
                    var _other_profile = false;
                        _other_profile = (_other_profile ? _other_profile : $B.$bootstrap.profiles[0]);
                        _other_profile = (($B.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                        _other_profile = (_other_profile ? _other_profile : $B.$bootstrap.profiles[1]);
                        _other_profile = (($B.$bootstrap.getProfileName__short(_other_profile) == 'cn') ? _other_profile : false);
                    if (_other_profile && _other_profile.settings && _other_profile.settings.marketingUrl) { $B.$bootstrap.remote_domain_marketing = _other_profile.settings.marketingUrl + '/'; }
        
                    //  update
                    $R.getAndSetRegistrationInfo();
                
                    return false;
                });
        
                //  refresh captcha
                $('#register__captcha__reset').click(function() { $R.getAndSetRegistrationInfo(); return false; });
                
                //  click button
                $('#register__button').click(function() { $R.do__submit(); return false; });
            
                //  terms and privacy, defaults
                $('#register__agree__terms').attr('target', '_blank').attr('href', 'http://evernote.com/' + 'legal/tos.php');
                $('#register__agree__privacy').attr('target', '_blank').attr('href', 'http://evernote.com/' + 'legal/privacy.php');
            };
        
        //  translations
        //  ============
            $R.translation__get_items();
            $R.translation__apply();
        
        //  events
        //  ======
            $R.bind__ui_events();
        
        //  remove cover
        //  ============
            $('body').removeClass('showCover');
            
        //  bootstrap
        //  =========
            $B.$bootstrap.bootstrap(function () { $R.getAndSetRegistrationInfo(); }, function () { });
        

    })(window.__readable_by_evernote__register__front, window.__readable_by_evernote__register__back);
