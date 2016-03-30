(function ($R)
{
    //  define fiji
    var fiji = {};
    
    //  include original xhr library
    /**
     * XMLHttpRequest Wrapper Object
     * @copyright Fiji Web Deisgn, GNU/GPL
     * @author gabe@fijiwebdesign.com
     * @url www.fijiwebdesign.com
     * @version 0.1
     */
    
    // make sure we have our fiji namespace
    if (typeof(fiji) == 'undefined') {
    	fiji = {};
    }
    
    /**
     * Constructor
     * @param {String} method (POST | GET)
     * @param {String} url 
     * @param {Function} callback
     * @param {Bool} async Optional Mode, defaults to Asynchronous
     */ 
    fiji.xhr = function(method, url, callback, async) {
    	this._init(method, url, callback, async);
    };
    /**
     * @static ie_activex
     * Holds IE6- XHR ActiveX version
     */
    fiji.xhr.ie_activex = false;
    	
    /**
     * @Prototype Inherited Methods
     */
    fiji.xhr.prototype = {
    	
    	/**
    	 * Output Logging function
    	 */
    	debug: function(str) {},
    	
    	/**
    	 * Constructor
    	 * @param {String} method
    	 * @param {String} url
    	 * @param {Function} callback
    	 * @param {Bool} async
    	 */
    	_init: function(method, url, callback, async) {
    		if (method && url && callback) {
    			this.req(method, url, callback, async);	
    		}
    	},
    
    	/**
    	 * Returns the platform dependent XHR Instance
    	 */
    	getXHR: function() {
    		if (window.XMLHttpRequest) {
    	        return new XMLHttpRequest();
    	    } else if (window.ActiveXObject) {
    	        if (fiji.xhr.ie_activex) {
    	            return new ActiveXObject(fiji.xhr.ie_activex);
    	        } else {
    			    var axs = [
    					"Msxml2.XMLHTTP.6.0", 
    					"Msxml2.XMLHTTP.5.0", 
    					"Msxml2.XMLHTTP.4.0", 
    					"MSXML2.XMLHTTP.3.0", 
    					"MSXML2.XMLHTTP",
    					"Microsoft.XMLHTTP"
    				];
    	            for (var i = 0; i < axs.length ; i++) {
    	                try {
    	                    var xhr = new ActiveXObject(axs[i]);
    	                    if (xhr) {
    	                        fiji.xhr.ie_activex = axs[i];
    							return xhr;
    	                        break;
    	                    }
    	                }
    	                catch (e) {/* next */}
    	            }
    	        }
    	    }
    		return false;
    	},
    	
    	/**
    	 * Create XMLHttpRequest
    	 * @param {String} method
    	 * @param {String} url
    	 * @param {Function} callback
    	 * @param {Bool} async
    	 */
    	req: function(method, url, callback, async) {
    		// closure
    	    var self = this;
    	    self.xhr = this.getXHR();
    	    self.callback = callback;
    		method = method.toUpperCase();
    		
    	    // handles state changes
    	    if (self.callback) {
                self.xhr.onreadystatechange = function( ) {
                    try { self.callback.apply(self.xhr, [self]); }
                    catch(e) { self.debug(e); }
                }
            }
    	
    	    self.xhr.open(method, url, (async === false ? false : true));
    	
    	    if (method == "POST") {
    	        self.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    	        self.xhr.setRequestHeader("Method", "POST " + url + " HTTP/1.1");
    	    }
    		
    		this.debug('new '+method+': '+url);
    		
    	    return self.xhr;
    	},
    	
    	/**
    	 * Stringify Object Parameters
    	 * @param {Object} parameters
    	 */
    	stringifyParams: function(data) {
    		// stringify data
    		var params = '';
    		for(var x in data) {
    			if (data.hasOwnProperty(x)) {
    				params += '&'+this.encode(x)+'='+this.encode(data[x].toString());
    			}
    		}
    		return params.substr(1);
    	},
    	
    	/**
    	 * Send the XHR request
    	 * @param {Mixed} Data. Can be an Object to strigify or String Data
    	 */
    	send: function (data) {
    		if (typeof(data) != 'string') {
    			data = this.stringifyParams(data);
    		}
    		this.debug('sending:'+data);
    		this.xhr.send(data);
    	},
    	
    	/**
    	 * Encode a url parameter
    	 * @param {String} str
    	 */
    	encode: function(str) {
    		return encodeURIComponent ? encodeURIComponent(str) : escape(str);
    	}
    };
    
    
    //  add to global object -- always async
    $R.xhr = function (method, url, callback, data, headers)
    { 
        //  create
        var _xhr = new fiji.xhr();
        
        //  open -- and, for GET requests, send too
        _xhr.req(method, url, callback, true);
        
        //  additional headers
        if (headers) { for (var _h in headers) { _xhr.xhr.setRequestHeader(_h, headers[_h]); } }
        
        //  send
        if (data) { _xhr.send(data); }
        else { _xhr.send(); }
    };
    
})(window.__readable_by_evernote);
