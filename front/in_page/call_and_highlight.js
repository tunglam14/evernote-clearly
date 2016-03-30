(function()
{
    //  IDs
    var _cssIDs = { 'prefix': 'evernote_clearly__' };
        _cssIDs.in_page = _cssIDs.prefix + 'in_page';

    //  frame
    var _frame = document.getElementById(_cssIDs.in_page);
    if (_frame) {}else { return; }
    
    //  window
    var _window = _frame.contentWindow;
    if (_window) {}else { return; }
    
    //  $R
    var $R = _window.$evernote_clearly_in_page;
    if ($R) {}else { return; }



    $R.action = 'highlight';

    
    //  timer
    $R.buttonTimer = true;
    
    //  show frame, if not visible
    if ($R.visible) {}else
    {
        $R.showFrame();
        $R.onShow();
    }
    
    //  send event
    $R.postMessageToIsolation('call');
    
    //  remove self
    (function ()
    {
        var _injected_script = $R.parentDocument.getElementById($R.cssIDs.script__call);
        if (_injected_script && _injected_script.parentNode) { _injected_script.parentNode.removeChild(_injected_script); }
    })();
    
})();

