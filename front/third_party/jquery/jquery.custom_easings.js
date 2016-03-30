
//	custom easing
//	=============
    
    //  generated and tweaked with the help of this page:
    //  http://timotheegroleau.com/Flash/experiments/easing_function_generator.htm

    //  on jQuery load
    $(function ()
    {
        $.easing['evernote_clearly__background_show'] = function (x, t, b, c, d)
        {
            /* out cubic :: variation */
            var ts=(t/=d)*t;
            var tc=ts*t;
            return b+c*(-2.5*tc*ts + 10*ts*ts + -14*tc + 7*ts + 0.5*t);
        };
        
        $.easing['evernote_clearly__sidebar_show'] = function (x, t, b, c, d)
        {
            /* out elastic (small) :: variation */
            var ts=(t/=d)*t;
            var tc=ts*t;
            return b+c*(20.05*tc*ts + -65.25*ts*ts + 79.7*tc + -44.6*ts + 11.1*t);
        };

        $.easing['evernote_clearly__background_hide'] = function (x, t, b, c, d)
        {
            /* out cubic :: variation */
            var ts=(t/=d)*t;
            var tc=ts*t;
            return b+c*(-2.5*tc*ts + 10*ts*ts + -14*tc + 7*ts + 0.5*t);
        };
        
        $.easing['evernote_clearly__sidebar_hide'] = function (x, t, b, c, d)
        {
            /* out cubic :: variation */
            var ts=(t/=d)*t;
            var tc=ts*t;
            return b+c*(-2.5*tc*ts + 10*ts*ts + -14*tc + 7*ts + 0.5*t);
        };
    });
    