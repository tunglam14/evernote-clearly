(function ($R)
{
    //  include original json-rpc library
    /*
     * Evernote.XORCrypt
     * Evernote
     *
     * Created by Pavel Skaldin on 3/7/10
     * Copyright 2010-2013 Evernote Corp. All rights reserved
     */
    /**
     * Naive implementation of XOR encryption with padding. It is not meant to be a
     * strong encryption of any kind, just an obfuscation. The algorithm uses a seed
     * string for XORing. The string to be encrypted is first XOR'd with a random
     * number to avoid recognizable patterns; the result is then padded and then
     * XOR'd with the seed string.
     * 
     * Make sure that XORCrypt.LENGTH is larger than the strings you're trying to
     * encrypt.
     * 
     * <pre>
     * Usage: 
     * var enc = Evernote.XORCrypt.encrypt(secret, seed); 
     * var dec = Evernote.XORCrypt.decrypt(enc, seed);
     * </pre>
     */
    var _xor = {
      DELIMIT : ":",
      LENGTH : 128,
      /**
       * Pads string to make it XORCrypt.LENGTH characters in length. Padding is
       * done by prepending the string with random chars from a range of printable
       * ascii chars.
       */
      _padString : function(str) {
        var counter = 0;
        if (str.length < 128) {
          for ( var i = str.length; i <= 128; i++) {
            str = String.fromCharCode(this._randomForChar()) + str;
            counter++;
          }
        }
        return counter + this.DELIMIT + str;
      },
      /**
       * Returns random number that would correspond to a printable ascii char.
       */
      _randomForChar : function() {
        var r = 0;
        var c = 0;
        while (r < 33 || r > 126) {
          // just a waiting... this shouldn't happen frequently
          r = parseInt(Math.random() * 150);
          c++;
        }
        return r;
      },
      /**
       * Returns random non-zero integer.
       */
      _randomNonZero : function() {
        var r = 0;
        while ((r = parseInt(Math.random() * 100)) == 0) {
          // just a waiting... this shouldn't happen frequently
        }
        return r;
      },
      /**
       * Shifts string by XOR'ing it with a number larger than 100 so as to avoid
       * non-printable characters. The resulting string will be prepended with the
       * number used to XOR followed by DELIMITER.
       */
      _shiftString : function(str) {
        var delta = this._randomNonZero() + 100;
        var shifted = [];
        for ( var i = 0; i < str.length; i++) {
          shifted.push(String.fromCharCode(str.charCodeAt(i) + delta));
        }
        return delta + this.DELIMIT + shifted.join("");
      },
      /**
       * Unshifts and returns a shifted string. The argument should be in a format
       * produced by _shitString(), i.e. begin with the shift coefficient followed
       * by DELIMITER, followed by the shifted string.
       */
      _unshiftString : function(str) {
        var delta = parseInt(str.substring(0, str.indexOf(this.DELIMIT)));
        var unshifted = [];
        if (!isNaN(delta)) {
          for ( var i = ((delta + "").length + this.DELIMIT.length); i < str.length; i++) {
            unshifted.push(String.fromCharCode(str.charCodeAt(i) - delta));
          }
        }
        return unshifted.join("");
      },
      /**
       * Encrypts string with a seed string and returns encrypted string padded to
       * be XORCrypt.LENGTH characters long.
       */
      encrypt : function(str, seed) {
        str += "";
        seed += "";
        var newStr = this._padString(this._shiftString(str));
        var enc = [];
        for ( var i = 0; i < newStr.length; i++) {
          var e = newStr.charCodeAt(i);
          for ( var j = 0; j < seed.length; j++) {
            e = seed.charCodeAt(j) ^ e;
          }
          enc.push(String.fromCharCode(e + 100));
        }
        return enc.join("");
      },
      /**
       * Decrypts string using seed string. The seed string has to be the same
       * string that was used in encrypt()ing.
       */
      decrypt : function(str, seed) {
        str += "";
        seed += "";
        var dec = [];
        for ( var i = 0; i < str.length; i++) {
          var e = str.charCodeAt(i) - 100;
          for ( var j = seed.length - 1; j >= 0; j--) {
            e = seed.charCodeAt(j) ^ e;
          }
          dec.push(String.fromCharCode(e));
        }
        var decStr = dec.join("");
        var pad = parseInt(decStr.substring(0, decStr.indexOf(this.DELIMIT)));
        if (!isNaN(pad)) {
          return this._unshiftString(decStr.substring(("" + pad).length
              + this.DELIMIT.length + pad));
        }
        return "";
      }
    };
    
    
    //  add to global object
    $R.xor = _xor;
    
})(window.__readable_by_evernote);
