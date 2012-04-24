if(window && !window.InflectionJS) {
  window.InflectionJS = null
}
InflectionJS = {uncountable_words:["equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "moose", "deer", "news"], plural_rules:[[new RegExp("(m)an$", "gi"), "$1en"], [new RegExp("(pe)rson$", "gi"), "$1ople"], [new RegExp("(child)$", "gi"), "$1ren"], [new RegExp("^(ox)$", "gi"), "$1en"], [new RegExp("(ax|test)is$", "gi"), "$1es"], [new RegExp("(octop|vir)us$", "gi"), "$1i"], [new RegExp("(alias|status)$", "gi"), "$1es"], [new RegExp("(bu)s$", "gi"), "$1ses"], [new RegExp("(buffal|tomat|potat)o$", 
"gi"), "$1oes"], [new RegExp("([ti])um$", "gi"), "$1a"], [new RegExp("sis$", "gi"), "ses"], [new RegExp("(?:([^f])fe|([lr])f)$", "gi"), "$1$2ves"], [new RegExp("(hive)$", "gi"), "$1s"], [new RegExp("([^aeiouy]|qu)y$", "gi"), "$1ies"], [new RegExp("(x|ch|ss|sh)$", "gi"), "$1es"], [new RegExp("(matr|vert|ind)ix|ex$", "gi"), "$1ices"], [new RegExp("([m|l])ouse$", "gi"), "$1ice"], [new RegExp("(quiz)$", "gi"), "$1zes"], [new RegExp("s$", "gi"), "s"], [new RegExp("$", "gi"), "s"]], singular_rules:[[new RegExp("(m)en$", 
"gi"), "$1an"], [new RegExp("(pe)ople$", "gi"), "$1rson"], [new RegExp("(child)ren$", "gi"), "$1"], [new RegExp("([ti])a$", "gi"), "$1um"], [new RegExp("((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$", "gi"), "$1$2sis"], [new RegExp("(hive)s$", "gi"), "$1"], [new RegExp("(tive)s$", "gi"), "$1"], [new RegExp("(curve)s$", "gi"), "$1"], [new RegExp("([lr])ves$", "gi"), "$1f"], [new RegExp("([^fo])ves$", "gi"), "$1fe"], [new RegExp("([^aeiouy]|qu)ies$", "gi"), "$1y"], [new RegExp("(s)eries$", 
"gi"), "$1eries"], [new RegExp("(m)ovies$", "gi"), "$1ovie"], [new RegExp("(x|ch|ss|sh)es$", "gi"), "$1"], [new RegExp("([m|l])ice$", "gi"), "$1ouse"], [new RegExp("(bus)es$", "gi"), "$1"], [new RegExp("(o)es$", "gi"), "$1"], [new RegExp("(shoe)s$", "gi"), "$1"], [new RegExp("(cris|ax|test)es$", "gi"), "$1is"], [new RegExp("(octop|vir)i$", "gi"), "$1us"], [new RegExp("(alias|status)es$", "gi"), "$1"], [new RegExp("^(ox)en", "gi"), "$1"], [new RegExp("(vert|ind)ices$", "gi"), "$1ex"], [new RegExp("(matr)ices$", 
"gi"), "$1ix"], [new RegExp("(quiz)zes$", "gi"), "$1"], [new RegExp("s$", "gi"), ""]], non_titlecased_words:["and", "or", "nor", "a", "an", "the", "so", "but", "to", "of", "at", "by", "from", "into", "on", "onto", "off", "out", "in", "over", "with", "for"], id_suffix:new RegExp("(_ids|_id)$", "g"), underbar:new RegExp("_", "g"), space_or_underbar:new RegExp("[ _]", "g"), uppercase:new RegExp("([A-Z])", "g"), underbar_prefix:new RegExp("^_"), apply_rules:function(str, rules, skip, override) {
  if(override) {
    str = override
  }else {
    var ignore = skip.indexOf(str.toLowerCase()) > -1;
    if(!ignore) {
      for(var x = 0;x < rules.length;x++) {
        if(str.match(rules[x][0])) {
          str = str.replace(rules[x][0], rules[x][1]);
          break
        }
      }
    }
  }
  return str
}};
if(!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(item, fromIndex, compareFunc) {
    if(!fromIndex) {
      fromIndex = -1
    }
    var index = -1;
    for(var i = fromIndex;i < this.length;i++) {
      if(this[i] === item || compareFunc && compareFunc(this[i], item)) {
        index = i;
        break
      }
    }
    return index
  }
}
if(!String.prototype._uncountable_words) {
  String.prototype._uncountable_words = InflectionJS.uncountable_words
}
if(!String.prototype._plural_rules) {
  String.prototype._plural_rules = InflectionJS.plural_rules
}
if(!String.prototype._singular_rules) {
  String.prototype._singular_rules = InflectionJS.singular_rules
}
if(!String.prototype._non_titlecased_words) {
  String.prototype._non_titlecased_words = InflectionJS.non_titlecased_words
}
if(!String.prototype.pluralize) {
  String.prototype.pluralize = function(plural) {
    return InflectionJS.apply_rules(this, this._plural_rules, this._uncountable_words, plural)
  }
}
if(!String.prototype.singularize) {
  String.prototype.singularize = function(singular) {
    return InflectionJS.apply_rules(this, this._singular_rules, this._uncountable_words, singular)
  }
}
;var MD5 = function(string) {
  function RotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits
  }
  function AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 2147483648;
    lY8 = lY & 2147483648;
    lX4 = lX & 1073741824;
    lY4 = lY & 1073741824;
    lResult = (lX & 1073741823) + (lY & 1073741823);
    if(lX4 & lY4) {
      return lResult ^ 2147483648 ^ lX8 ^ lY8
    }
    if(lX4 | lY4) {
      if(lResult & 1073741824) {
        return lResult ^ 3221225472 ^ lX8 ^ lY8
      }else {
        return lResult ^ 1073741824 ^ lX8 ^ lY8
      }
    }else {
      return lResult ^ lX8 ^ lY8
    }
  }
  function F(x, y, z) {
    return x & y | ~x & z
  }
  function G(x, y, z) {
    return x & z | y & ~z
  }
  function H(x, y, z) {
    return x ^ y ^ z
  }
  function I(x, y, z) {
    return y ^ (x | ~z)
  }
  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b)
  }
  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b)
  }
  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b)
  }
  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b)
  }
  function ConvertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while(lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++
    }
    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray
  }
  function WordToHex(lValue) {
    var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
    for(lCount = 0;lCount <= 3;lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2)
    }
    return WordToHexValue
  }
  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for(var n = 0;n < string.length;n++) {
      var c = string.charCodeAt(n);
      if(c < 128) {
        utftext += String.fromCharCode(c)
      }else {
        if(c > 127 && c < 2048) {
          utftext += String.fromCharCode(c >> 6 | 192);
          utftext += String.fromCharCode(c & 63 | 128)
        }else {
          utftext += String.fromCharCode(c >> 12 | 224);
          utftext += String.fromCharCode(c >> 6 & 63 | 128);
          utftext += String.fromCharCode(c & 63 | 128)
        }
      }
    }
    return utftext
  }
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
  var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
  var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
  var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
  string = Utf8Encode(string);
  x = ConvertToWordArray(string);
  a = 1732584193;
  b = 4023233417;
  c = 2562383102;
  d = 271733878;
  for(k = 0;k < x.length;k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 3614090360);
    d = FF(d, a, b, c, x[k + 1], S12, 3905402710);
    c = FF(c, d, a, b, x[k + 2], S13, 606105819);
    b = FF(b, c, d, a, x[k + 3], S14, 3250441966);
    a = FF(a, b, c, d, x[k + 4], S11, 4118548399);
    d = FF(d, a, b, c, x[k + 5], S12, 1200080426);
    c = FF(c, d, a, b, x[k + 6], S13, 2821735955);
    b = FF(b, c, d, a, x[k + 7], S14, 4249261313);
    a = FF(a, b, c, d, x[k + 8], S11, 1770035416);
    d = FF(d, a, b, c, x[k + 9], S12, 2336552879);
    c = FF(c, d, a, b, x[k + 10], S13, 4294925233);
    b = FF(b, c, d, a, x[k + 11], S14, 2304563134);
    a = FF(a, b, c, d, x[k + 12], S11, 1804603682);
    d = FF(d, a, b, c, x[k + 13], S12, 4254626195);
    c = FF(c, d, a, b, x[k + 14], S13, 2792965006);
    b = FF(b, c, d, a, x[k + 15], S14, 1236535329);
    a = GG(a, b, c, d, x[k + 1], S21, 4129170786);
    d = GG(d, a, b, c, x[k + 6], S22, 3225465664);
    c = GG(c, d, a, b, x[k + 11], S23, 643717713);
    b = GG(b, c, d, a, x[k + 0], S24, 3921069994);
    a = GG(a, b, c, d, x[k + 5], S21, 3593408605);
    d = GG(d, a, b, c, x[k + 10], S22, 38016083);
    c = GG(c, d, a, b, x[k + 15], S23, 3634488961);
    b = GG(b, c, d, a, x[k + 4], S24, 3889429448);
    a = GG(a, b, c, d, x[k + 9], S21, 568446438);
    d = GG(d, a, b, c, x[k + 14], S22, 3275163606);
    c = GG(c, d, a, b, x[k + 3], S23, 4107603335);
    b = GG(b, c, d, a, x[k + 8], S24, 1163531501);
    a = GG(a, b, c, d, x[k + 13], S21, 2850285829);
    d = GG(d, a, b, c, x[k + 2], S22, 4243563512);
    c = GG(c, d, a, b, x[k + 7], S23, 1735328473);
    b = GG(b, c, d, a, x[k + 12], S24, 2368359562);
    a = HH(a, b, c, d, x[k + 5], S31, 4294588738);
    d = HH(d, a, b, c, x[k + 8], S32, 2272392833);
    c = HH(c, d, a, b, x[k + 11], S33, 1839030562);
    b = HH(b, c, d, a, x[k + 14], S34, 4259657740);
    a = HH(a, b, c, d, x[k + 1], S31, 2763975236);
    d = HH(d, a, b, c, x[k + 4], S32, 1272893353);
    c = HH(c, d, a, b, x[k + 7], S33, 4139469664);
    b = HH(b, c, d, a, x[k + 10], S34, 3200236656);
    a = HH(a, b, c, d, x[k + 13], S31, 681279174);
    d = HH(d, a, b, c, x[k + 0], S32, 3936430074);
    c = HH(c, d, a, b, x[k + 3], S33, 3572445317);
    b = HH(b, c, d, a, x[k + 6], S34, 76029189);
    a = HH(a, b, c, d, x[k + 9], S31, 3654602809);
    d = HH(d, a, b, c, x[k + 12], S32, 3873151461);
    c = HH(c, d, a, b, x[k + 15], S33, 530742520);
    b = HH(b, c, d, a, x[k + 2], S34, 3299628645);
    a = II(a, b, c, d, x[k + 0], S41, 4096336452);
    d = II(d, a, b, c, x[k + 7], S42, 1126891415);
    c = II(c, d, a, b, x[k + 14], S43, 2878612391);
    b = II(b, c, d, a, x[k + 5], S44, 4237533241);
    a = II(a, b, c, d, x[k + 12], S41, 1700485571);
    d = II(d, a, b, c, x[k + 3], S42, 2399980690);
    c = II(c, d, a, b, x[k + 10], S43, 4293915773);
    b = II(b, c, d, a, x[k + 1], S44, 2240044497);
    a = II(a, b, c, d, x[k + 8], S41, 1873313359);
    d = II(d, a, b, c, x[k + 15], S42, 4264355552);
    c = II(c, d, a, b, x[k + 6], S43, 2734768916);
    b = II(b, c, d, a, x[k + 13], S44, 1309151649);
    a = II(a, b, c, d, x[k + 4], S41, 4149444226);
    d = II(d, a, b, c, x[k + 11], S42, 3174756917);
    c = II(c, d, a, b, x[k + 2], S43, 718787259);
    b = II(b, c, d, a, x[k + 9], S44, 3951481745);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD)
  }
  var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  return temp.toLowerCase()
};
shortcut = {"all_shortcuts":{}, "add":function(shortcut_combination, callback, opt) {
  var default_options = {"type":"keydown", "propagate":false, "disable_in_input":false, "target":document, "keycode":false};
  if(!opt) {
    opt = default_options
  }else {
    for(var dfo in default_options) {
      if(typeof opt[dfo] == "undefined") {
        opt[dfo] = default_options[dfo]
      }
    }
  }
  var ele = opt.target;
  if(typeof opt.target == "string") {
    ele = document.getElementById(opt.target)
  }
  var ths = this;
  shortcut_combination = shortcut_combination.toLowerCase();
  var func = function(e) {
    e = e || window.event;
    if(opt["disable_in_input"]) {
      var element;
      if(e.target) {
        element = e.target
      }else {
        if(e.srcElement) {
          element = e.srcElement
        }
      }
      if(element.nodeType == 3) {
        element = element.parentNode
      }
      if(element.tagName == "INPUT" || element.tagName == "TEXTAREA") {
        return
      }
    }
    if(e.keyCode) {
      code = e.keyCode
    }else {
      if(e.which) {
        code = e.which
      }
    }
    var character = String.fromCharCode(code).toLowerCase();
    if(code == 188) {
      character = ","
    }
    if(code == 190) {
      character = "."
    }
    var keys = shortcut_combination.split("+");
    var kp = 0;
    var shift_nums = {"`":"~", 1:"!", 2:"@", 3:"#", 4:"$", 5:"%", 6:"^", 7:"&", 8:"*", 9:"(", "0":")", "-":"_", "=":"+", ";":":", "'":'"', ",":"<", ".":">", "/":"?", "\\":"|"};
    var special_keys = {"esc":27, "escape":27, "tab":9, "space":32, "return":13, "enter":13, "backspace":8, "scrolllock":145, "scroll_lock":145, "scroll":145, "capslock":20, "caps_lock":20, "caps":20, "numlock":144, "num_lock":144, "num":144, "pause":19, "break":19, "insert":45, "home":36, "delete":46, "end":35, "pageup":33, "page_up":33, "pu":33, "pagedown":34, "page_down":34, "pd":34, "left":37, "up":38, "right":39, "down":40, "f1":112, "f2":113, "f3":114, "f4":115, "f5":116, "f6":117, "f7":118, 
    "f8":119, "f9":120, "f10":121, "f11":122, "f12":123};
    var modifiers = {shift:{wanted:false, pressed:false}, ctrl:{wanted:false, pressed:false}, alt:{wanted:false, pressed:false}, meta:{wanted:false, pressed:false}};
    if(e.ctrlKey) {
      modifiers.ctrl.pressed = true
    }
    if(e.shiftKey) {
      modifiers.shift.pressed = true
    }
    if(e.altKey) {
      modifiers.alt.pressed = true
    }
    if(e.metaKey) {
      modifiers.meta.pressed = true
    }
    for(var i = 0;k = keys[i], i < keys.length;i++) {
      if(k == "ctrl" || k == "control") {
        kp++;
        modifiers.ctrl.wanted = true
      }else {
        if(k == "shift") {
          kp++;
          modifiers.shift.wanted = true
        }else {
          if(k == "alt") {
            kp++;
            modifiers.alt.wanted = true
          }else {
            if(k == "meta") {
              kp++;
              modifiers.meta.wanted = true
            }else {
              if(k.length > 1) {
                if(special_keys[k] == code) {
                  kp++
                }
              }else {
                if(opt["keycode"]) {
                  if(opt["keycode"] == code) {
                    kp++
                  }
                }else {
                  if(character == k) {
                    kp++
                  }else {
                    if(shift_nums[character] && e.shiftKey) {
                      character = shift_nums[character];
                      if(character == k) {
                        kp++
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if(kp == keys.length && modifiers.ctrl.pressed == modifiers.ctrl.wanted && modifiers.shift.pressed == modifiers.shift.wanted && modifiers.alt.pressed == modifiers.alt.wanted && modifiers.meta.pressed == modifiers.meta.wanted) {
      callback(e);
      if(!opt["propagate"]) {
        e.cancelBubble = true;
        e.returnValue = false;
        if(e.stopPropagation) {
          e.stopPropagation();
          e.preventDefault()
        }
        return false
      }
    }
  };
  this.all_shortcuts[shortcut_combination] = {"callback":func, "target":ele, "event":opt["type"]};
  if(ele.addEventListener) {
    ele.addEventListener(opt["type"], func, false)
  }else {
    if(ele.attachEvent) {
      ele.attachEvent("on" + opt["type"], func)
    }else {
      ele["on" + opt["type"]] = func
    }
  }
}, "remove":function(shortcut_combination) {
  shortcut_combination = shortcut_combination.toLowerCase();
  var binding = this.all_shortcuts[shortcut_combination];
  delete this.all_shortcuts[shortcut_combination];
  if(!binding) {
    return
  }
  var type = binding["event"];
  var ele = binding["target"];
  var callback = binding["callback"];
  if(ele.detachEvent) {
    ele.detachEvent("on" + type, callback)
  }else {
    if(ele.removeEventListener) {
      ele.removeEventListener(type, callback, false)
    }else {
      ele["on" + type] = false
    }
  }
}};
var VKI_attach, VKI_close;
var VKI_default_layout = VKI_default_layout || "US International";
(function() {
  var self = this;
  this.VKI_version = "1.49";
  this.VKI_showVersion = true;
  this.VKI_target = false;
  this.VKI_shift = this.VKI_shiftlock = false;
  this.VKI_altgr = this.VKI_altgrlock = false;
  this.VKI_dead = false;
  this.VKI_deadBox = true;
  this.VKI_deadkeysOn = false;
  this.VKI_numberPad = true;
  this.VKI_numberPadOn = false;
  this.VKI_kts = this.VKI_kt = VKI_default_layout;
  this.VKI_langAdapt = true;
  this.VKI_size = 2;
  this.VKI_sizeAdj = true;
  this.VKI_clearPasswords = false;
  this.VKI_imageURI = "/assets/tr8n/keyboard.png";
  this.VKI_clickless = 0;
  this.VKI_activeTab = 0;
  this.VKI_enterSubmit = true;
  this.VKI_keyCenter = 3;
  this.VKI_isIE = false;
  this.VKI_isIE6 = false;
  this.VKI_isIElt8 = false;
  this.VKI_isWebKit = RegExp("KHTML").test(navigator.userAgent);
  this.VKI_isOpera = RegExp("Opera").test(navigator.userAgent);
  this.VKI_isMoz = !this.VKI_isWebKit && navigator.product == "Gecko";
  this.VKI_i18n = {"00":"Display Number Pad", "01":"Display virtual keyboard interface", "02":"Select keyboard layout", "03":"Dead keys", "04":"On", "05":"Off", "06":"Close the keyboard", "07":"Clear", "08":"Clear this input", "09":"Version", 10:"Decrease keyboard size", 11:"Increase keyboard size"};
  this.VKI_layout = {};
  this.VKI_layout["\u0627\u0644\u0639\u0631\u0628\u064a\u0629"] = {"name":"Arabic", "keys":[[["\u0630", "\u0651 "], ["1", "!", "\u00a1", "\u00b9"], ["2", "@", "\u00b2"], ["3", "#", "\u00b3"], ["4", "$", "\u00a4", "\u00a3"], ["5", "%", "\u20ac"], ["6", "^", "\u00bc"], ["7", "&", "\u00bd"], ["8", "*", "\u00be"], ["9", "(", "\u2018"], ["0", ")", "\u2019"], ["-", "_", "\u00a5"], ["=", "+", "\u00d7", "\u00f7"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0636", "\u064e"], ["\u0635", "\u064b"], ["\u062b", 
  "\u064f"], ["\u0642", "\u064c"], ["\u0641", "\u0644"], ["\u063a", "\u0625"], ["\u0639", "\u2018"], ["\u0647", "\u00f7"], ["\u062e", "\u00d7"], ["\u062d", "\u061b"], ["\u062c", "<"], ["\u062f", ">"], ["\\", "|"]], [["Caps", "Caps"], ["\u0634", "\u0650"], ["\u0633", "\u064d"], ["\u064a", "]"], ["\u0628", "["], ["\u0644", "\u0644"], ["\u0627", "\u0623"], ["\u062a", "\u0640"], ["\u0646", "\u060c"], ["\u0645", "/"], ["\u0643", ":"], ["\u0637", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0626", 
  "~"], ["\u0621", "\u0652"], ["\u0624", "}"], ["\u0631", "{"], ["\u0644", "\u0644"], ["\u0649", "\u0622"], ["\u0629", "\u2019"], ["\u0648", ","], ["\u0632", "."], ["\u0638", "\u061f"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["Alt", "Alt"]]], "lang":["ar"]};
  this.VKI_layout["\u0985\u09b8\u09ae\u09c0\u09df\u09be"] = {"name":"Assamese", "keys":[[["+", "?"], ["\u09e7", "{", "\u09e7"], ["\u09e8", "}", "\u09e8"], ["\u09e9", "\u09cd\u09f0", "\u09e9"], ["\u09ea", "\u09f0\u09cd", "\u09ea"], ["\u09eb", "\u099c\u09cd\u09f0", "\u09eb"], ["\u09ec", "\u0995\u09cd\u09b7", "\u09ec"], ["\u09ed", "\u0995\u09cd\u09f0", "\u09ed"], ["\u09ee", "\u09b6\u09cd\u09f0", "\u09ee"], ["\u09ef", "(", "\u09ef"], ["\u09e6", ")", "\u09e6"], ["-", ""], ["\u09c3", "\u098b", "\u09e2", 
  "\u09e0"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u09cc", "\u0994", "\u09d7"], ["\u09c8", "\u0990"], ["\u09be", "\u0986"], ["\u09c0", "\u0988", "\u09e3", "\u09e1"], ["\u09c2", "\u098a"], ["\u09f1", "\u09ad"], ["\u09b9", "\u0999"], ["\u0997", "\u0998"], ["\u09a6", "\u09a7"], ["\u099c", "\u099d"], ["\u09a1", "\u09a2", "\u09dc", "\u09dd"], ["Enter", "Enter"]], [["Caps", "Caps"], ["\u09cb", "\u0993", "\u09f4", "\u09f5"], ["\u09c7", "\u098f", "\u09f6", "\u09f7"], ["\u09cd", "\u0985", "\u09f8", "\u09f9"], 
  ["\u09bf", "\u0987", "\u09e2", "\u098c"], ["\u09c1", "\u0989"], ["\u09aa", "\u09ab"], ["\u09f0", "", "\u09f0", "\u09f1"], ["\u0995", "\u0996"], ["\u09a4", "\u09a5"], ["\u099a", "\u099b"], ["\u099f", "\u09a0"], ["\u09bc", "\u099e"]], [["Shift", "Shift"], ["\u09ce", "\u0983"], ["\u0982", "\u0981", "\u09fa"], ["\u09ae", "\u09a3"], ["\u09a8", "\u09f7"], ["\u09ac", '"'], ["\u09b2", "'"], ["\u09b8", "\u09b6"], [",", "\u09b7"], [".", ";"], ["\u09af", "\u09df"], ["Shift", "Shift"]], [[" ", " ", " ", " "], 
  ["AltGr", "AltGr"]]], "lang":["as"]};
  this.VKI_layout["\u0410\u0437\u04d9\u0440\u0431\u0430\u0458\u04b9\u0430\u043d\u04b9\u0430"] = {"name":"Azerbaijani Cyrillic", "keys":[[["`", "~"], ["1", "!"], ["2", '"'], ["3", "\u2116"], ["4", ";"], ["5", "%"], ["6", ":"], ["7", "?"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0458", "\u0408"], ["\u04af", "\u04ae"], ["\u0443", "\u0423"], ["\u043a", "\u041a"], ["\u0435", "\u0415"], ["\u043d", "\u041d"], ["\u0433", "\u0413"], ["\u0448", "\u0428"], 
  ["\u04bb", "\u04ba"], ["\u0437", "\u0417"], ["\u0445", "\u0425"], ["\u04b9", "\u04b8"], ["\\", "/"]], [["Caps", "Caps"], ["\u0444", "\u0424"], ["\u044b", "\u042b"], ["\u0432", "\u0412"], ["\u0430", "\u0410"], ["\u043f", "\u041f"], ["\u0440", "\u0420"], ["\u043e", "\u041e"], ["\u043b", "\u041b"], ["\u0434", "\u0414"], ["\u0436", "\u0416"], ["\u049d", "\u049c"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\\", "|"], ["\u04d9", "\u04d8"], ["\u0447", "\u0427"], ["\u0441", "\u0421"], ["\u043c", "\u041c"], 
  ["\u0438", "\u0418"], ["\u0442", "\u0422"], ["\u0493", "\u0492"], ["\u0431", "\u0411"], ["\u04e9", "\u04e8"], [".", ","], ["Shift", "Shift"]], [[" ", " "]]], "lang":["az-Cyrl"]};
  this.VKI_layout["Az\u0259rbaycanca"] = {"name":"Azerbaijani Latin", "keys":[[["`", "~"], ["1", "!"], ["2", '"'], ["3", "\u2166"], ["4", ";"], ["5", "%"], ["6", ":"], ["7", "?"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["\u00fc", "\u00dc"], ["e", "E"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "\u0130"], ["o", "O"], ["p", "P"], ["\u00f6", "\u00d6"], ["\u011f", "\u011e"], ["\\", "/"]], [["Caps", "Caps"], ["a", "A"], ["s", 
  "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u0131", "I"], ["\u0259", "\u018f"], ["Enter", "Enter"]], [["Shift", "Shift"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], ["\u00e7", "\u00c7"], ["\u015f", "\u015e"], [".", ","], ["Shift", "Shift"]], [[" ", " "]]], "lang":["az"]};
  this.VKI_layout["\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"] = {"name":"Belarusian", "keys":[[["\u0451", "\u0401"], ["1", "!"], ["2", '"'], ["3", "\u2116"], ["4", ";"], ["5", "%"], ["6", ":"], ["7", "?"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0439", "\u0419"], ["\u0446", "\u0426"], ["\u0443", "\u0423"], ["\u043a", "\u041a"], ["\u0435", "\u0415"], ["\u043d", "\u041d"], ["\u0433", "\u0413"], ["\u0448", "\u0428"], ["\u045e", 
  "\u040e"], ["\u0437", "\u0417"], ["\u0445", "\u0425"], ["'", "'"], ["\\", "/"]], [["Caps", "Caps"], ["\u0444", "\u0424"], ["\u044b", "\u042b"], ["\u0432", "\u0412"], ["\u0430", "\u0410"], ["\u043f", "\u041f"], ["\u0440", "\u0420"], ["\u043e", "\u041e"], ["\u043b", "\u041b"], ["\u0434", "\u0414"], ["\u0436", "\u0416"], ["\u044d", "\u042d"], ["Enter", "Enter"]], [["Shift", "Shift"], ["/", "|"], ["\u044f", "\u042f"], ["\u0447", "\u0427"], ["\u0441", "\u0421"], ["\u043c", "\u041c"], ["\u0456", "\u0406"], 
  ["\u0442", "\u0422"], ["\u044c", "\u042c"], ["\u0431", "\u0411"], ["\u044e", "\u042e"], [".", ","], ["Shift", "Shift"]], [[" ", " "]]], "lang":["be"]};
  this.VKI_layout["Belgische / Belge"] = {"name":"Belgian", "keys":[[["\u00b2", "\u00b3"], ["&", "1", "|"], ["\u00e9", "2", "@"], ['"', "3", "#"], ["'", "4"], ["(", "5"], ["\u00a7", "6", "^"], ["\u00e8", "7"], ["!", "8"], ["\u00e7", "9", "{"], ["\u00e0", "0", "}"], [")", "\u00b0"], ["-", "_"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["a", "A"], ["z", "Z"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["^", "\u00a8", "["], ["$", "*", "]"], ["\u03bc", 
  "\u00a3", "`"]], [["Caps", "Caps"], ["q", "Q"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["m", "M"], ["\u00f9", "%", "\u00b4"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "\\"], ["w", "W"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], [",", "?"], [";", "."], [":", "/"], ["=", "+", "~"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["nl-BE", "fr-BE"]};
  this.VKI_layout["\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0424\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u043d"] = {"name":"Bulgarian Phonetic", "keys":[[["\u0447", "\u0427"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u044f", "\u042f"], ["\u0432", "\u0412"], ["\u0435", "\u0415"], ["\u0440", "\u0420"], ["\u0442", "\u0422"], ["\u044a", "\u042a"], 
  ["\u0443", "\u0423"], ["\u0438", "\u0418"], ["\u043e", "\u041e"], ["\u043f", "\u041f"], ["\u0448", "\u0428"], ["\u0449", "\u0429"], ["\u044e", "\u042e"]], [["Caps", "Caps"], ["\u0430", "\u0410"], ["\u0441", "\u0421"], ["\u0434", "\u0414"], ["\u0444", "\u0424"], ["\u0433", "\u0413"], ["\u0445", "\u0425"], ["\u0439", "\u0419"], ["\u043a", "\u041a"], ["\u043b", "\u041b"], [";", ":"], ["'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0437", "\u0417"], ["\u044c", "\u042c"], ["\u0446", "\u0426"], 
  ["\u0436", "\u0416"], ["\u0431", "\u0411"], ["\u043d", "\u041d"], ["\u043c", "\u041c"], [",", "<"], [".", ">"], ["/", "?"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["bg"]};
  this.VKI_layout["\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"] = {"name":"Bulgarian BDS", "keys":[[["`", "~"], ["1", "!"], ["2", "?"], ["3", "+"], ["4", '"'], ["5", "%"], ["6", "="], ["7", ":"], ["8", "/"], ["9", "_"], ["0", "\u2116"], ["-", "\u0406"], ["=", "V"], ["Bksp", "Bksp"]], [["Tab", "Tab"], [",", "\u044b"], ["\u0443", "\u0423"], ["\u0435", "\u0415"], ["\u0438", "\u0418"], ["\u0448", "\u0428"], ["\u0449", "\u0429"], ["\u043a", "\u041a"], ["\u0441", "\u0421"], ["\u0434", "\u0414"], 
  ["\u0437", "\u0417"], ["\u0446", "\u0426"], [";", "\u00a7"], ["(", ")"]], [["Caps", "Caps"], ["\u044c", "\u042c"], ["\u044f", "\u042f"], ["\u0430", "\u0410"], ["\u043e", "\u041e"], ["\u0436", "\u0416"], ["\u0433", "\u0413"], ["\u0442", "\u0422"], ["\u043d", "\u041d"], ["\u0412", "\u0412"], ["\u043c", "\u041c"], ["\u0447", "\u0427"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u042e", "\u044e"], ["\u0439", "\u0419"], ["\u044a", "\u042a"], ["\u044d", "\u042d"], ["\u0444", "\u0424"], ["\u0445", "\u0425"], 
  ["\u043f", "\u041f"], ["\u0440", "\u0420"], ["\u043b", "\u041b"], ["\u0431", "\u0411"], ["Shift", "Shift"]], [[" ", " "]]]};
  this.VKI_layout["\u09ac\u09be\u0982\u09b2\u09be"] = {"name":"Bengali", "keys":[[[""], ["1", "", "\u09e7"], ["2", "", "\u09e8"], ["3", "\u09cd\u09b0", "\u09e9"], ["4", "\u09b0\u09cd", "\u09ea"], ["5", "\u099c\u09cd\u09b0", "\u09eb"], ["6", "\u09a4\u09cd\u09b7", "\u09ec"], ["7", "\u0995\u09cd\u09b0", "\u09ed"], ["8", "\u09b6\u09cd\u09b0", "\u09ee"], ["9", "(", "\u09ef"], ["0", ")", "\u09e6"], ["-", "\u0983"], ["\u09c3", "\u098b", "\u09e2", "\u09e0"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u09cc", 
  "\u0994", "\u09d7"], ["\u09c8", "\u0990"], ["\u09be", "\u0986"], ["\u09c0", "\u0988", "\u09e3", "\u09e1"], ["\u09c2", "\u098a"], ["\u09ac", "\u09ad"], ["\u09b9", "\u0999"], ["\u0997", "\u0998"], ["\u09a6", "\u09a7"], ["\u099c", "\u099d"], ["\u09a1", "\u09a2", "\u09dc", "\u09dd"], ["Enter", "Enter"]], [["Caps", "Caps"], ["\u09cb", "\u0993", "\u09f4", "\u09f5"], ["\u09c7", "\u098f", "\u09f6", "\u09f7"], ["\u09cd", "\u0985", "\u09f8", "\u09f9"], ["\u09bf", "\u0987", "\u09e2", "\u098c"], ["\u09c1", 
  "\u0989"], ["\u09aa", "\u09ab"], ["\u09b0", "", "\u09f0", "\u09f1"], ["\u0995", "\u0996"], ["\u09a4", "\u09a5"], ["\u099a", "\u099b"], ["\u099f", "\u09a0"], ["\u09bc", "\u099e"]], [["Shift", "Shift"], [""], ["\u0982", "\u0981", "\u09fa"], ["\u09ae", "\u09a3"], ["\u09a8"], ["\u09ac"], ["\u09b2"], ["\u09b8", "\u09b6"], [",", "\u09b7"], [".", "{"], ["\u09af", "\u09df"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["bn"]};
  this.VKI_layout["Bosanski"] = {"name":"Bosnian", "keys":[[["\u00b8", "\u00a8"], ["1", "!", "~"], ["2", '"', "\u02c7"], ["3", "#", "^"], ["4", "$", "\u02d8"], ["5", "%", "\u00b0"], ["6", "&", "\u02db"], ["7", "/", "`"], ["8", "(", "\u02d9"], ["9", ")", "\u00b4"], ["0", "=", "\u02dd"], ["'", "?", "\u00a8"], ["+", "*", "\u00b8"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "\\"], ["w", "W", "|"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["z", "Z"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", 
  "P"], ["\u0161", "\u0160", "\u00f7"], ["\u0111", "\u0110", "\u00d7"], ["\u017e", "\u017d", "\u00a4"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F", "["], ["g", "G", "]"], ["h", "H"], ["j", "J"], ["k", "K", "\u0142"], ["l", "L", "\u0141"], ["\u010d", "\u010c"], ["\u0107", "\u0106", "\u00df"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">"], ["y", "Y"], ["x", "X"], ["c", "C"], ["v", "V", "@"], ["b", "B", "{"], ["n", "N", "}"], ["m", "M", "\u00a7"], [",", ";", "<"], [".", 
  ":", ">"], ["-", "_", "\u00a9"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["bs"]};
  this.VKI_layout["Canadienne-fran\u00e7aise"] = {"name":"Canadian French", "keys":[[["#", "|", "\\"], ["1", "!", "\u00b1"], ["2", '"', "@"], ["3", "/", "\u00a3"], ["4", "$", "\u00a2"], ["5", "%", "\u00a4"], ["6", "?", "\u00ac"], ["7", "&", "\u00a6"], ["8", "*", "\u00b2"], ["9", "(", "\u00b3"], ["0", ")", "\u00bc"], ["-", "_", "\u00bd"], ["=", "+", "\u00be"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O", 
  "\u00a7"], ["p", "P", "\u00b6"], ["^", "^", "["], ["\u00b8", "\u00a8", "]"], ["<", ">", "}"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], [";", ":", "~"], ["`", "`", "{"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u00ab", "\u00bb", "\u00b0"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M", "\u00b5"], [",", "'", "\u00af"], [".", ".", "\u00ad"], ["\u00e9", "\u00c9", "\u00b4"], 
  ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["fr-CA"]};
  this.VKI_layout["\u010cesky"] = {"name":"Czech", "keys":[[[";", "\u00b0", "`", "~"], ["+", "1", "!"], ["\u011b", "2", "@"], ["\u0161", "3", "#"], ["\u010d", "4", "$"], ["\u0159", "5", "%"], ["\u017e", "6", "^"], ["\u00fd", "7", "&"], ["\u00e1", "8", "*"], ["\u00ed", "9", "("], ["\u00e9", "0", ")"], ["=", "%", "-", "_"], ["\u00b4", "\u02c7", "=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", 
  "O"], ["p", "P"], ["\u00fa", "/", "[", "{"], [")", "(", "]", "}"], ["\u00a8", "'", "\\", "|"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u016f", '"', ";", ":"], ["\u00a7", "!", "\u00a4", "^"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\\", "|", "", "\u02dd"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "?", "<", "\u00d7"], [".", ":", ">", "\u00f7"], ["-", "_", 
  "/", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["Alt", "Alt"]]], "lang":["cs"]};
  this.VKI_layout["Dansk"] = {"name":"Danish", "keys":[[["\u00bd", "\u00a7"], ["1", "!"], ["2", '"', "@"], ["3", "#", "\u00a3"], ["4", "\u00a4", "$"], ["5", "%", "\u20ac"], ["6", "&"], ["7", "/", "{"], ["8", "(", "["], ["9", ")", "]"], ["0", "=", "}"], ["+", "?"], ["\u00b4", "`", "|"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00e5", "\u00c5"], ["\u00a8", "^", "~"], ["'", 
  "*"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00e6", "\u00c6"], ["\u00f8", "\u00d8"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "\\"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M", "\u03bc", "\u039c"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["da"]};
  this.VKI_layout["Deutsch"] = {"name":"German", "keys":[[["^", "\u00b0"], ["1", "!"], ["2", '"', "\u00b2"], ["3", "\u00a7", "\u00b3"], ["4", "$"], ["5", "%"], ["6", "&"], ["7", "/", "{"], ["8", "(", "["], ["9", ")", "]"], ["0", "=", "}"], ["\u00df", "?", "\\"], ["\u00b4", "`"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "@"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["z", "Z"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00fc", "\u00dc"], ["+", "*", "~"], ["#", "'"]], 
  [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00f6", "\u00d6"], ["\u00e4", "\u00c4"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "\u00a6"], ["y", "Y"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M", "\u00b5"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["de"]};
  this.VKI_layout["Dingbats"] = {"name":"Dingbats", "keys":[[["\u2764", "\u2765", "\u2766", "\u2767"], ["\u278a", "\u2780", "\u2776", "\u2768"], ["\u278b", "\u2781", "\u2777", "\u2769"], ["\u278c", "\u2782", "\u2778", "\u276a"], ["\u278d", "\u2783", "\u2779", "\u276b"], ["\u278e", "\u2784", "\u277a", "\u276c"], ["\u278f", "\u2785", "\u277b", "\u276d"], ["\u2790", "\u2786", "\u277c", "\u276e"], ["\u2791", "\u2787", "\u277d", "\u276f"], ["\u2792", "\u2788", "\u277e", "\u2770"], ["\u2793", "\u2789", 
  "\u277f", "\u2771"], ["\u2795", "\u2796", "\u274c", "\u2797"], ["\u2702", "\u2704", "\u2701", "\u2703"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u2714", "\u2705", "\u2713"], ["\u2718", "\u2715", "\u2717", "\u2716"], ["\u271a", "\u2719", "\u271b", "\u271c"], ["\u271d", "\u271e", "\u271f", "\u2720"], ["\u2722", "\u2723", "\u2724", "\u2725"], ["\u2726", "\u2727", "\u2728", "\u2756"], ["\u2729", "\u272a", "\u272d", "\u2730"], ["\u272c", "\u272b", "\u272e", "\u272f"], ["\u2736", "\u2731", "\u2732", "\u2749"], 
  ["\u273b", "\u273c", "\u273d", "\u273e"], ["\u2744", "\u2745", "\u2746", "\u2743"], ["\u2733", "\u2734", "\u2735", "\u2721"], ["\u2737", "\u2738", "\u2739", "\u273a"]], [["Caps", "Caps"], ["\u2799", "\u279a", "\u2798", "\u2758"], ["\u27b5", "\u27b6", "\u27b4", "\u2759"], ["\u27b8", "\u27b9", "\u27b7", "\u275a"], ["\u2794", "\u279c", "\u27ba", "\u27bb"], ["\u279d", "\u279e", "\u27a1", "\u2772"], ["\u27a9", "\u27aa", "\u27ab", "\u27ac"], ["\u27a4", "\u27a3", "\u27a2", "\u279b"], ["\u27b3", "\u27bc", 
  "\u27bd", "\u2773"], ["\u27ad", "\u27ae", "\u27af", "\u27b1"], ["\u27a8", "\u27a6", "\u27a5", "\u27a7"], ["\u279f", "\u27a0", "\u27be", "\u27b2"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u270c", "\u270b", "\u270a", "\u270d"], ["\u274f", "\u2750", "\u2751", "\u2752"], ["\u273f", "\u2740", "\u2741", "\u2742"], ["\u2747", "\u2748", "\u274a", "\u274b"], ["\u2757", "\u2755", "\u2762", "\u2763"], ["\u2753", "\u2754", "\u27b0", "\u27bf"], ["\u270f", "\u2710", "\u270e", "\u2774"], ["\u2712", "\u2711", 
  "\u274d", "\u274e"], ["\u2709", "\u2706", "\u2708", "\u2707"], ["\u275b", "\u275d", "\u2761", "\u2775"], ["\u275c", "\u275e", "\u275f", "\u2760"], ["Shift", "Shift"]], [["AltLk", "AltLk"], [" ", " ", " ", " "], ["AltGr", "AltGr"]]]};
  this.VKI_layout["\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0"] = {"name":"Divehi", "keys":[[["`", "~"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", ")"], ["0", "("], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u07ab", "\u00d7"], ["\u07ae", "\u2019"], ["\u07a7", "\u201c"], ["\u07a9", "/"], ["\u07ad", ":"], ["\u078e", "\u07a4"], ["\u0783", "\u079c"], ["\u0789", "\u07a3"], ["\u078c", "\u07a0"], ["\u0780", 
  "\u0799"], ["\u078d", "\u00f7"], ["[", "{"], ["]", "}"]], [["Caps", "Caps"], ["\u07a8", "<"], ["\u07aa", ">"], ["\u07b0", ".", ",", ","], ["\u07a6", "\u060c"], ["\u07ac", '"'], ["\u0788", "\u07a5"], ["\u0787", "\u07a2"], ["\u0782", "\u0798"], ["\u0786", "\u079a"], ["\u078a", "\u07a1"], ["\ufdf2", "\u061b", ";", ";"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\\", "|"], ["\u0792", "\u0796"], ["\u0791", "\u0795"], ["\u0790", "\u078f"], ["\u0794", "\u0797", "\u200d"], ["\u0785", "\u079f", "\u200c"], 
  ["\u078b", "\u079b", "\u200e"], ["\u0784", "\u079d", "\u200f"], ["\u0781", "\\"], ["\u0793", "\u079e"], ["\u07af", "\u061f"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["dv"]};
  this.VKI_layout["Dvorak"] = {"name":"Dvorak", "keys":[[["`", "~"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["[", "{"], ["]", "}"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["'", '"'], [",", "<"], [".", ">"], ["p", "P"], ["y", "Y"], ["f", "F"], ["g", "G"], ["c", "C"], ["r", "R"], ["l", "L"], ["/", "?"], ["=", "+"], ["\\", "|"]], [["Caps", "Caps"], ["a", "A"], ["o", "O"], ["e", "E"], ["u", "U"], ["i", "I"], ["d", "D"], ["h", 
  "H"], ["t", "T"], ["n", "N"], ["s", "S"], ["-", "_"], ["Enter", "Enter"]], [["Shift", "Shift"], [";", ":"], ["q", "Q"], ["j", "J"], ["k", "K"], ["x", "X"], ["b", "B"], ["m", "M"], ["w", "W"], ["v", "V"], ["z", "Z"], ["Shift", "Shift"]], [[" ", " "]]]};
  this.VKI_layout["\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"] = {"name":"Greek", "keys":[[["`", "~"], ["1", "!"], ["2", "@", "\u00b2"], ["3", "#", "\u00b3"], ["4", "$", "\u00a3"], ["5", "%", "\u00a7"], ["6", "^", "\u00b6"], ["7", "&"], ["8", "*", "\u00a4"], ["9", "(", "\u00a6"], ["0", ")", "\u00ba"], ["-", "_", "\u00b1"], ["=", "+", "\u00bd"], ["Bksp", "Bksp"]], [["Tab", "Tab"], [";", ":"], ["\u03c2", "^"], ["\u03b5", "\u0395"], ["\u03c1", "\u03a1"], ["\u03c4", "\u03a4"], ["\u03c5", "\u03a5"], 
  ["\u03b8", "\u0398"], ["\u03b9", "\u0399"], ["\u03bf", "\u039f"], ["\u03c0", "\u03a0"], ["[", "{", "\u201c"], ["]", "}", "\u201d"], ["\\", "|", "\u00ac"]], [["Caps", "Caps"], ["\u03b1", "\u0391"], ["\u03c3", "\u03a3"], ["\u03b4", "\u0394"], ["\u03c6", "\u03a6"], ["\u03b3", "\u0393"], ["\u03b7", "\u0397"], ["\u03be", "\u039e"], ["\u03ba", "\u039a"], ["\u03bb", "\u039b"], ["\u0384", "\u00a8", "\u0385"], ["'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">"], ["\u03b6", "\u0396"], ["\u03c7", 
  "\u03a7"], ["\u03c8", "\u03a8"], ["\u03c9", "\u03a9"], ["\u03b2", "\u0392"], ["\u03bd", "\u039d"], ["\u03bc", "\u039c"], [",", "<"], [".", ">"], ["/", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["el"]};
  this.VKI_layout["Eesti"] = {"name":"Estonian", "keys":[[["\u02c7", "~"], ["1", "!"], ["2", '"', "@", "@"], ["3", "#", "\u00a3", "\u00a3"], ["4", "\u00a4", "$", "$"], ["5", "%", "\u20ac"], ["6", "&"], ["7", "/", "{", "{"], ["8", "(", "[", "["], ["9", ")", "]", "]"], ["0", "=", "}", "}"], ["+", "?", "\\", "\\"], ["\u00b4", "`"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00fc", 
  "\u00dc"], ["\u00f5", "\u00d5", "\u00a7", "\u00a7"], ["'", "*", "\u00bd", "\u00bd"]], [["Caps", "Caps"], ["a", "A"], ["s", "S", "\u0161", "\u0160"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00f6", "\u00d6"], ["\u00e4", "\u00c4", "^", "^"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "|", "|"], ["z", "Z", "\u017e", "\u017d"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", 
  "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["et"]};
  this.VKI_layout["Espa\u00f1ol"] = {"name":"Spanish", "keys":[[["\u00ba", "\u00aa", "\\"], ["1", "!", "|"], ["2", '"', "@"], ["3", "'", "#"], ["4", "$", "~"], ["5", "%", "\u20ac"], ["6", "&", "\u00ac"], ["7", "/"], ["8", "("], ["9", ")"], ["0", "="], ["'", "?"], ["\u00a1", "\u00bf"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["`", "^", "["], ["+", "*", "]"], ["\u00e7", "\u00c7", "}"]], 
  [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00f1", "\u00d1"], ["\u00b4", "\u00a8", "{"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["es"]};
  this.VKI_layout["\u062f\u0631\u06cc"] = {"name":"Dari", "keys":[[["\u200d", "\u00f7", "~"], ["\u06f1", "!", "`"], ["\u06f2", "\u066c", "@"], ["\u06f3", "\u066b", "#"], ["\u06f4", "\u060b", "$"], ["\u06f5", "\u066a", "%"], ["\u06f6", "\u00d7", "^"], ["\u06f7", "\u060c", "&"], ["\u06f8", "*", "\u2022"], ["\u06f9", ")", "\u200e"], ["\u06f0", "(", "\u200f"], ["-", "\u0640", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0636", "\u0652", "\u00b0"], ["\u0635", "\u064c"], ["\u062b", "\u064d", 
  "\u20ac"], ["\u0642", "\u064b", "\ufd3e"], ["\u0641", "\u064f", "\ufd3f"], ["\u063a", "\u0650", "\u0656"], ["\u0639", "\u064e", "\u0659"], ["\u0647", "\u0651", "\u0655"], ["\u062e", "]", "'"], ["\u062d", "[", '"'], ["\u062c", "}", "\u0681"], ["\u0686", "{", "\u0685"], ["\\", "|", "?"]], [["Caps", "Caps"], ["\u0634", "\u0624", "\u069a"], ["\u0633", "\u0626", "\u06cd"], ["\u06cc", "\u064a", "\u0649"], ["\u0628", "\u0625", "\u06d0"], ["\u0644", "\u0623", "\u06b7"], ["\u0627", "\u0622", "\u0671"], 
  ["\u062a", "\u0629", "\u067c"], ["\u0646", "\u00bb", "\u06bc"], ["\u0645", "\u00ab", "\u06ba"], ["\u06a9", ":", ";"], ["\u06af", "\u061b", "\u06ab"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0638", "\u0643", "\u06d2"], ["\u0637", "\u0653", "\u0691"], ["\u0632", "\u0698", "\u0696"], ["\u0631", "\u0670", "\u0693"], ["\u0630", "\u200c", "\u0688"], ["\u062f", "\u0654", "\u0689"], ["\u067e", "\u0621", "\u0679"], ["\u0648", ">", ","], [".", "<", "\u06c7"], ["/", "\u061f", "\u06c9"], ["Shift", "Shift"]], 
  [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["fa-AF"]};
  this.VKI_layout["\u0641\u0627\u0631\u0633\u06cc"] = {"name":"Farsi", "keys":[[["\u067e", "\u0651 "], ["1", "!", "\u00a1", "\u00b9"], ["2", "@", "\u00b2"], ["3", "#", "\u00b3"], ["4", "$", "\u00a4", "\u00a3"], ["5", "%", "\u20ac"], ["6", "^", "\u00bc"], ["7", "&", "\u00bd"], ["8", "*", "\u00be"], ["9", "(", "\u2018"], ["0", ")", "\u2019"], ["-", "_", "\u00a5"], ["=", "+", "\u00d7", "\u00f7"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0636", "\u064e"], ["\u0635", "\u064b"], ["\u062b", "\u064f"], ["\u0642", 
  "\u064c"], ["\u0641", "\u0644"], ["\u063a", "\u0625"], ["\u0639", "\u2018"], ["\u0647", "\u00f7"], ["\u062e", "\u00d7"], ["\u062d", "\u061b"], ["\u062c", "<"], ["\u0686", ">"], ["\u0698", "|"]], [["Caps", "Caps"], ["\u0634", "\u0650"], ["\u0633", "\u064d"], ["\u064a", "]"], ["\u0628", "["], ["\u0644", "\u0644"], ["\u0627", "\u0623"], ["\u062a", "\u0640"], ["\u0646", "\u060c"], ["\u0645", "\\"], ["\u06af", ":"], ["\u0643", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0638", "~"], ["\u0637", 
  "\u0652"], ["\u0632", "}"], ["\u0631", "{"], ["\u0630", "\u0644"], ["\u062f", "\u0622"], ["\u0626", "\u0621"], ["\u0648", ","], [".", "."], ["/", "\u061f"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["Alt", "Alt"]]], "lang":["fa"]};
  this.VKI_layout["F\u00f8royskt"] = {"name":"Faeroese", "keys":[[["\u00bd", "\u00a7"], ["1", "!"], ["2", '"', "@"], ["3", "#", "\u00a3"], ["4", "\u00a4", "$"], ["5", "%", "\u20ac"], ["6", "&"], ["7", "/", "{"], ["8", "(", "["], ["9", ")", "]"], ["0", "=", "}"], ["+", "?"], ["\u00b4", "`", "|"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00e5", "\u00c5", "\u00a8"], ["\u00f0", 
  "\u00d0", "~"], ["'", "*"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00e6", "\u00c6"], ["\u00f8", "\u00d8", "^"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "\\"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M", "\u00b5"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["fo"]};
  this.VKI_layout["Fran\u00e7ais"] = {"name":"French", "keys":[[["\u00b2", "\u00b3"], ["&", "1"], ["\u00e9", "2", "~"], ['"', "3", "#"], ["'", "4", "{"], ["(", "5", "["], ["-", "6", "|"], ["\u00e8", "7", "`"], ["_", "8", "\\"], ["\u00e7", "9", "^"], ["\u00e0", "0", "@"], [")", "\u00b0", "]"], ["=", "+", "}"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["a", "A"], ["z", "Z"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["^", "\u00a8"], ["$", "\u00a3", 
  "\u00a4"], ["*", "\u03bc"]], [["Caps", "Caps"], ["q", "Q"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["m", "M"], ["\u00f9", "%"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">"], ["w", "W"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], [",", "?"], [";", "."], [":", "/"], ["!", "\u00a7"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["fr"]};
  this.VKI_layout["Gaeilge"] = {"name":"Irish / Gaelic", "keys":[[["`", "\u00ac", "\u00a6", "\u00a6"], ["1", "!"], ["2", '"'], ["3", "\u00a3"], ["4", "$", "\u20ac"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u00e9", "\u00c9"], ["r", "R"], ["t", "T"], ["y", "Y", "\u00fd", "\u00dd"], ["u", "U", "\u00fa", "\u00da"], ["i", "I", "\u00ed", "\u00cd"], ["o", "O", "\u00f3", "\u00d3"], 
  ["p", "P"], ["[", "{"], ["]", "}"], ["#", "~"]], [["Caps", "Caps"], ["a", "A", "\u00e1", "\u00c1"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], [";", ":"], ["'", "@", "\u00b4", "`"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\\", "|"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], ["/", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["ga", "gd"]};
  this.VKI_layout["\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"] = {"name":"Gujarati", "keys":[[[""], ["1", "\u0a8d", "\u0ae7"], ["2", "\u0ac5", "\u0ae8"], ["3", "\u0acd\u0ab0", "\u0ae9"], ["4", "\u0ab0\u0acd", "\u0aea"], ["5", "\u0a9c\u0acd\u0a9e", "\u0aeb"], ["6", "\u0aa4\u0acd\u0ab0", "\u0aec"], ["7", "\u0a95\u0acd\u0ab7", "\u0aed"], ["8", "\u0ab6\u0acd\u0ab0", "\u0aee"], ["9", "(", "\u0aef"], ["0", ")", "\u0ae6"], ["-", "\u0a83"], ["\u0ac3", "\u0a8b", "\u0ac4", "\u0ae0"], ["Bksp", "Bksp"]], [["Tab", 
  "Tab"], ["\u0acc", "\u0a94"], ["\u0ac8", "\u0a90"], ["\u0abe", "\u0a86"], ["\u0ac0", "\u0a88"], ["\u0ac2", "\u0a8a"], ["\u0aac", "\u0aad"], ["\u0ab9", "\u0a99"], ["\u0a97", "\u0a98"], ["\u0aa6", "\u0aa7"], ["\u0a9c", "\u0a9d"], ["\u0aa1", "\u0aa2"], ["\u0abc", "\u0a9e"], ["\u0ac9", "\u0a91"]], [["Caps", "Caps"], ["\u0acb", "\u0a93"], ["\u0ac7", "\u0a8f"], ["\u0acd", "\u0a85"], ["\u0abf", "\u0a87"], ["\u0ac1", "\u0a89"], ["\u0aaa", "\u0aab"], ["\u0ab0"], ["\u0a95", "\u0a96"], ["\u0aa4", "\u0aa5"], 
  ["\u0a9a", "\u0a9b"], ["\u0a9f", "\u0aa0"], ["Enter", "Enter"]], [["Shift", "Shift"], [""], ["\u0a82", "\u0a81", "", "\u0ad0"], ["\u0aae", "\u0aa3"], ["\u0aa8"], ["\u0ab5"], ["\u0ab2", "\u0ab3"], ["\u0ab8", "\u0ab6"], [",", "\u0ab7"], [".", "\u0964", "\u0965", "\u0abd"], ["\u0aaf"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["gu"]};
  this.VKI_layout["\u05e2\u05d1\u05e8\u05d9\u05ea"] = {"name":"Hebrew", "keys":[[["~", "`"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$", "\u20aa"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", ")"], ["0", "("], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["/", "Q"], ["'", "W"], ["\u05e7", "E", "\u20ac"], ["\u05e8", "R"], ["\u05d0", "T"], ["\u05d8", "Y"], ["\u05d5", "U", "\u05f0"], ["\u05df", "I"], ["\u05dd", "O"], ["\u05e4", "P"], ["\\", "|"], ["Enter", "Enter"]], [["Caps", 
  "Caps"], ["\u05e9", "A"], ["\u05d3", "S"], ["\u05d2", "D"], ["\u05db", "F"], ["\u05e2", "G"], ["\u05d9", "H", "\u05f2"], ["\u05d7", "J", "\u05f1"], ["\u05dc", "K"], ["\u05da", "L"], ["\u05e3", ":"], [",", '"'], ["]", "}"], ["[", "{"]], [["Shift", "Shift"], ["\u05d6", "Z"], ["\u05e1", "X"], ["\u05d1", "C"], ["\u05d4", "V"], ["\u05e0", "B"], ["\u05de", "N"], ["\u05e6", "M"], ["\u05ea", ">"], ["\u05e5", "<"], [".", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["he"]};
  this.VKI_layout["\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940"] = {"name":"Devanagari", "keys":[[["\u094a", "\u0912"], ["1", "\u090d", "\u0967"], ["2", "\u0945", "\u0968"], ["3", "\u094d\u0930", "\u0969"], ["4", "\u0930\u094d", "\u096a"], ["5", "\u091c\u094d\u091e", "\u096b"], ["6", "\u0924\u094d\u0930", "\u096c"], ["7", "\u0915\u094d\u0937", "\u096d"], ["8", "\u0936\u094d\u0930", "\u096e"], ["9", "(", "\u096f"], ["0", ")", "\u0966"], ["-", "\u0903"], ["\u0943", "\u090b", "\u0944", "\u0960"], 
  ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u094c", "\u0914"], ["\u0948", "\u0910"], ["\u093e", "\u0906"], ["\u0940", "\u0908", "\u0963", "\u0961"], ["\u0942", "\u090a"], ["\u092c", "\u092d"], ["\u0939", "\u0919"], ["\u0917", "\u0918", "\u095a"], ["\u0926", "\u0927"], ["\u091c", "\u091d", "\u095b"], ["\u0921", "\u0922", "\u095c", "\u095d"], ["\u093c", "\u091e"], ["\u0949", "\u0911"]], [["Caps", "Caps"], ["\u094b", "\u0913"], ["\u0947", "\u090f"], ["\u094d", "\u0905"], ["\u093f", "\u0907", "\u0962", 
  "\u090c"], ["\u0941", "\u0909"], ["\u092a", "\u092b", "", "\u095e"], ["\u0930", "\u0931"], ["\u0915", "\u0916", "\u0958", "\u0959"], ["\u0924", "\u0925"], ["\u091a", "\u091b", "\u0952"], ["\u091f", "\u0920", "", "\u0951"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0946", "\u090e", "\u0953"], ["\u0902", "\u0901", "", "\u0950"], ["\u092e", "\u0923", "\u0954"], ["\u0928", "\u0929"], ["\u0935", "\u0934"], ["\u0932", "\u0933"], ["\u0938", "\u0936"], [",", "\u0937", "\u0970"], [".", "\u0964", "\u0965", 
  "\u093d"], ["\u092f", "\u095f"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["hi-Deva"]};
  this.VKI_layout["\u0939\u093f\u0902\u0926\u0940"] = {"name":"Hindi", "keys":[[["\u200d", "\u200c", "`", "~"], ["1", "\u090d", "\u0967", "!"], ["2", "\u0945", "\u0968", "@"], ["3", "\u094d\u0930", "\u0969", "#"], ["4", "\u0930\u094d", "\u096a", "$"], ["5", "\u091c\u094d\u091e", "\u096b", "%"], ["6", "\u0924\u094d\u0930", "\u096c", "^"], ["7", "\u0915\u094d\u0937", "\u096d", "&"], ["8", "\u0936\u094d\u0930", "\u096e", "*"], ["9", "(", "\u096f", "("], ["0", ")", "\u0966", ")"], ["-", "\u0903", "-", 
  "_"], ["\u0943", "\u090b", "=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u094c", "\u0914"], ["\u0948", "\u0910"], ["\u093e", "\u0906"], ["\u0940", "\u0908"], ["\u0942", "\u090a"], ["\u092c", "\u092d"], ["\u0939", "\u0919"], ["\u0917", "\u0918"], ["\u0926", "\u0927"], ["\u091c", "\u091d"], ["\u0921", "\u0922", "[", "{"], ["\u093c", "\u091e", "]", "}"], ["\u0949", "\u0911", "\\", "|"]], [["Caps", "Caps"], ["\u094b", "\u0913"], ["\u0947", "\u090f"], ["\u094d", "\u0905"], ["\u093f", "\u0907"], 
  ["\u0941", "\u0909"], ["\u092a", "\u092b"], ["\u0930", "\u0931"], ["\u0915", "\u0916"], ["\u0924", "\u0925"], ["\u091a", "\u091b", ";", ":"], ["\u091f", "\u0920", "'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], [""], ["\u0902", "\u0901", "", "\u0950"], ["\u092e", "\u0923"], ["\u0928"], ["\u0935"], ["\u0932", "\u0933"], ["\u0938", "\u0936"], [",", "\u0937", ",", "<"], [".", "\u0964", ".", ">"], ["\u092f", "\u095f", "/", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], 
  "lang":["hi"]};
  this.VKI_layout["Hrvatski"] = {"name":"Croatian", "keys":this.VKI_layout["Bosanski"].keys.slice(0), "lang":["hr"]};
  this.VKI_layout["\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0574\u0578\u0582\u057f\u0584"] = {"name":"Western Armenian", "keys":[[["\u055d", "\u055c"], [":", "1"], ["\u0571", "\u0541"], ["\u0575", "\u0545"], ["\u055b", "3"], [",", "4"], ["-", "9"], [".", "\u0587"], ["\u00ab", "("], ["\u00bb", ")"], ["\u0585", "\u0555"], ["\u057c", "\u054c"], ["\u056a", "\u053a"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u056d", "\u053d"], ["\u057e", "\u054e"], ["\u0567", "\u0537"], ["\u0580", 
  "\u0550"], ["\u0564", "\u0534"], ["\u0565", "\u0535"], ["\u0568", "\u0538"], ["\u056b", "\u053b"], ["\u0578", "\u0548"], ["\u0562", "\u0532"], ["\u0579", "\u0549"], ["\u057b", "\u054b"], ["'", "\u055e"]], [["Caps", "Caps"], ["\u0561", "\u0531"], ["\u057d", "\u054d"], ["\u057f", "\u054f"], ["\u0586", "\u0556"], ["\u056f", "\u053f"], ["\u0570", "\u0540"], ["\u0573", "\u0543"], ["\u0584", "\u0554"], ["\u056c", "\u053c"], ["\u0569", "\u0539"], ["\u0583", "\u0553"], ["Enter", "Enter"]], [["Shift", "Shift"], 
  ["\u0566", "\u0536"], ["\u0581", "\u0551"], ["\u0563", "\u0533"], ["\u0582", "\u0552"], ["\u057a", "\u054a"], ["\u0576", "\u0546"], ["\u0574", "\u0544"], ["\u0577", "\u0547"], ["\u0572", "\u0542"], ["\u056e", "\u053e"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["hy-arevmda"]};
  this.VKI_layout["\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0565\u056c\u0584"] = {"name":"Eastern Armenian", "keys":[[["\u055d", "\u055c"], [":", "1"], ["\u0571", "\u0541"], ["\u0575", "\u0545"], ["\u055b", "3"], [",", "4"], ["-", "9"], [".", "\u0587"], ["\u00ab", "("], ["\u00bb", ")"], ["\u0585", "\u0555"], ["\u057c", "\u054c"], ["\u056a", "\u053a"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u056d", "\u053d"], ["\u0582", "\u0552"], ["\u0567", "\u0537"], ["\u0580", "\u0550"], 
  ["\u057f", "\u054f"], ["\u0565", "\u0535"], ["\u0568", "\u0538"], ["\u056b", "\u053b"], ["\u0578", "\u0548"], ["\u057a", "\u054a"], ["\u0579", "\u0549"], ["\u057b", "\u054b"], ["'", "\u055e"]], [["Caps", "Caps"], ["\u0561", "\u0531"], ["\u057d", "\u054d"], ["\u0564", "\u0534"], ["\u0586", "\u0556"], ["\u0584", "\u0554"], ["\u0570", "\u0540"], ["\u0573", "\u0543"], ["\u056f", "\u053f"], ["\u056c", "\u053c"], ["\u0569", "\u0539"], ["\u0583", "\u0553"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0566", 
  "\u0536"], ["\u0581", "\u0551"], ["\u0563", "\u0533"], ["\u057e", "\u054e"], ["\u0562", "\u0532"], ["\u0576", "\u0546"], ["\u0574", "\u0544"], ["\u0577", "\u0547"], ["\u0572", "\u0542"], ["\u056e", "\u053e"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["hy"]};
  this.VKI_layout["\u00cdslenska"] = {"name":"Icelandic", "keys":[[["\u00b0", "\u00a8", "\u00b0"], ["1", "!"], ["2", '"'], ["3", "#"], ["4", "$"], ["5", "%", "\u20ac"], ["6", "&"], ["7", "/", "{"], ["8", "(", "["], ["9", ")", "]"], ["0", "=", "}"], ["\u00f6", "\u00d6", "\\"], ["-", "_"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "@"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00f0", "\u00d0"], ["'", "?", "~"], ["+", 
  "*", "`"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00e6", "\u00c6"], ["\u00b4", "'", "^"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "|"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M", "\u00b5"], [",", ";"], [".", ":"], ["\u00fe", "\u00de"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["is"]};
  this.VKI_layout["Italiano"] = {"name":"Italian", "keys":[[["\\", "|"], ["1", "!"], ["2", '"'], ["3", "\u00a3"], ["4", "$", "\u20ac"], ["5", "%"], ["6", "&"], ["7", "/"], ["8", "("], ["9", ")"], ["0", "="], ["'", "?"], ["\u00ec", "^"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00e8", "\u00e9", "[", "{"], ["+", "*", "]", "}"], ["\u00f9", "\u00a7"]], [["Caps", "Caps"], ["a", 
  "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00f2", "\u00e7", "@"], ["\u00e0", "\u00b0", "#"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["it"]};
  this.VKI_layout["\u65e5\u672c\u8a9e"] = {"name":"Japanese Hiragana/Katakana", "keys":[[["\uff5e"], ["\u306c", "\u30cc"], ["\u3075", "\u30d5"], ["\u3042", "\u30a2", "\u3041", "\u30a1"], ["\u3046", "\u30a6", "\u3045", "\u30a5"], ["\u3048", "\u30a8", "\u3047", "\u30a7"], ["\u304a", "\u30aa", "\u3049", "\u30a9"], ["\u3084", "\u30e4", "\u3083", "\u30e3"], ["\u3086", "\u30e6", "\u3085", "\u30e5"], ["\u3088", "\u30e8", "\u3087", "\u30e7"], ["\u308f", "\u30ef", "\u3092", "\u30f2"], ["\u307b", "\u30db", 
  "\u30fc", "\uff1d"], ["\u3078", "\u30d8", "\uff3e", "\uff5e"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u305f", "\u30bf"], ["\u3066", "\u30c6"], ["\u3044", "\u30a4", "\u3043", "\u30a3"], ["\u3059", "\u30b9"], ["\u304b", "\u30ab"], ["\u3093", "\u30f3"], ["\u306a", "\u30ca"], ["\u306b", "\u30cb"], ["\u3089", "\u30e9"], ["\u305b", "\u30bb"], ["\u3001", "\u3001", "\uff20", "\u2018"], ["\u3002", "\u3002", "\u300c", "\uff5b"], ["\uffe5", "", "", "\uff0a"], ["\u309b", '"', "\uffe5", "\uff5c"]], [["Caps", 
  "Caps"], ["\u3061", "\u30c1"], ["\u3068", "\u30c8"], ["\u3057", "\u30b7"], ["\u306f", "\u30cf"], ["\u304d", "\u30ad"], ["\u304f", "\u30af"], ["\u307e", "\u30de"], ["\u306e", "\u30ce"], ["\u308c", "\u30ec", "\uff1b", "\uff0b"], ["\u3051", "\u30b1", "\uff1a", "\u30f6"], ["\u3080", "\u30e0", "\u300d", "\uff5d"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u3064", "\u30c4"], ["\u3055", "\u30b5"], ["\u305d", "\u30bd"], ["\u3072", "\u30d2"], ["\u3053", "\u30b3"], ["\u307f", "\u30df"], ["\u3082", "\u30e2"], 
  ["\u306d", "\u30cd", "\u3001", "\uff1c"], ["\u308b", "\u30eb", "\u3002", "\uff1e"], ["\u3081", "\u30e1", "\u30fb", "\uff1f"], ["\u308d", "\u30ed", "", "\uff3f"], ["Shift", "Shift"]], [["AltLk", "AltLk"], [" ", " ", " ", " "], ["Alt", "Alt"]]], "lang":["ja"]};
  this.VKI_layout["\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"] = {"name":"Georgian", "keys":[[["\u201e", "\u201c"], ["!", "1"], ["?", "2"], ["\u2116", "3"], ["\u00a7", "4"], ["%", "5"], [":", "6"], [".", "7"], [";", "8"], [",", "9"], ["/", "0"], ["\u2013", "-"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u10e6", "\u10e6"], ["\u10ef", "\u10ef"], ["\u10e3", "\u10e3"], ["\u10d9", "\u10d9"], ["\u10d4", "\u10d4", "\u10f1"], ["\u10dc", "\u10dc"], ["\u10d2", "\u10d2"], ["\u10e8", "\u10e8"], ["\u10ec", 
  "\u10ec"], ["\u10d6", "\u10d6"], ["\u10ee", "\u10ee", "\u10f4"], ["\u10ea", "\u10ea"], ["(", ")"]], [["Caps", "Caps"], ["\u10e4", "\u10e4", "\u10f6"], ["\u10eb", "\u10eb"], ["\u10d5", "\u10d5", "\u10f3"], ["\u10d7", "\u10d7"], ["\u10d0", "\u10d0"], ["\u10de", "\u10de"], ["\u10e0", "\u10e0"], ["\u10dd", "\u10dd"], ["\u10da", "\u10da"], ["\u10d3", "\u10d3"], ["\u10df", "\u10df"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u10ed", "\u10ed"], ["\u10e9", "\u10e9"], ["\u10e7", "\u10e7"], ["\u10e1", 
  "\u10e1"], ["\u10db", "\u10db"], ["\u10d8", "\u10d8", "\u10f2"], ["\u10e2", "\u10e2"], ["\u10e5", "\u10e5"], ["\u10d1", "\u10d1"], ["\u10f0", "\u10f0", "\u10f5"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["ka"]};
  this.VKI_layout["\u049a\u0430\u0437\u0430\u049b\u0448\u0430"] = {"name":"Kazakh", "keys":[[["(", ")"], ['"', "!"], ["\u04d9", "\u04d8"], ["\u0456", "\u0406"], ["\u04a3", "\u04a2"], ["\u0493", "\u0492"], [",", ";"], [".", ":"], ["\u04af", "\u04ae"], ["\u04b1", "\u04b0"], ["\u049b", "\u049a"], ["\u04e9", "\u04e8"], ["\u04bb", "\u04ba"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0439", "\u0419"], ["\u0446", "\u0426"], ["\u0443", "\u0423"], ["\u043a", "\u041a"], ["\u0435", "\u0415"], ["\u043d", "\u041d"], 
  ["\u0433", "\u0413"], ["\u0448", "\u0428"], ["\u0449", "\u0429"], ["\u0437", "\u0417"], ["\u0445", "\u0425"], ["\u044a", "\u042a"], ["\\", "/"]], [["Caps", "Caps"], ["\u0444", "\u0424"], ["\u044b", "\u042b"], ["\u0432", "\u0412"], ["\u0430", "\u0410"], ["\u043f", "\u041f"], ["\u0440", "\u0420"], ["\u043e", "\u041e"], ["\u043b", "\u041b"], ["\u0434", "\u0414"], ["\u0436", "\u0416"], ["\u044d", "\u042d"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\\", "|"], ["\u044f", "\u042f"], ["\u0447", "\u0427"], 
  ["\u0441", "\u0421"], ["\u043c", "\u041c"], ["\u0438", "\u0418"], ["\u0442", "\u0422"], ["\u044c", "\u042c"], ["\u0431", "\u0411"], ["\u044e", "\u042e"], ["\u2116", "?"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["kk"]};
  this.VKI_layout["\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a"] = {"name":"Khmer", "keys":[[["\u00ab", "\u00bb", "\u200d"], ["\u17e1", "!", "\u200c", "\u17f1"], ["\u17e2", "\u17d7", "@", "\u17f2"], ["\u17e3", '"', "\u17d1", "\u17f3"], ["\u17e4", "\u17db", "$", "\u17f4"], ["\u17e5", "%", "\u20ac", "\u17f5"], ["\u17e6", "\u17cd", "\u17d9", "\u17f6"], ["\u17e7", "\u17d0", "\u17da", "\u17f7"], ["\u17e8", "\u17cf", "*", "\u17f8"], ["\u17e9", "(", "{", "\u17f9"], ["\u17e0", ")", "}", "\u17f0"], 
  ["\u17a5", "\u17cc", "x"], ["\u17b2", "=", "\u17ce"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u1786", "\u1788", "\u17dc", "\u19e0"], ["\u17b9", "\u17ba", "\u17dd", "\u19e1"], ["\u17c1", "\u17c2", "\u17af", "\u19e2"], ["\u179a", "\u17ac", "\u17ab", "\u19e3"], ["\u178f", "\u1791", "\u17a8", "\u19e4"], ["\u1799", "\u17bd", "\u1799\u17be\u1784", "\u19e5"], ["\u17bb", "\u17bc", "", "\u19e6"], ["\u17b7", "\u17b8", "\u17a6", "\u19e7"], ["\u17c4", "\u17c5", "\u17b1", "\u19e8"], ["\u1795", "\u1797", "\u17b0", 
  "\u19e9"], ["\u17c0", "\u17bf", "\u17a9", "\u19ea"], ["\u17aa", "\u17a7", "\u17b3", "\u19eb"], ["\u17ae", "\u17ad", "\\"]], [["Caps", "Caps"], ["\u17b6", "\u17b6\u17c6", "\u17b5", "\u19ec"], ["\u179f", "\u17c3", "", "\u19ed"], ["\u178a", "\u178c", "\u17d3", "\u19ee"], ["\u1790", "\u1792", "", "\u19ef"], ["\u1784", "\u17a2", "\u17a4", "\u19f0"], ["\u17a0", "\u17c7", "\u17a3", "\u19f1"], ["\u17d2", "\u1789", "\u17b4", "\u19f2"], ["\u1780", "\u1782", "\u179d", "\u19f3"], ["\u179b", "\u17a1", "\u17d8", 
  "\u19f4"], ["\u17be", "\u17c4\u17c7", "\u17d6", "\u19f5"], ["\u17cb", "\u17c9", "\u17c8", "\u19f6"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u178b", "\u178d", "|", "\u19f7"], ["\u1781", "\u1783", "\u1781\u17d2\u1789\u17bb\u17c6", "\u19f8"], ["\u1785", "\u1787", "-", "\u19f9"], ["\u179c", "\u17c1\u17c7", "+", "\u19fa"], ["\u1794", "\u1796", "\u179e", "\u19fb"], ["\u1793", "\u178e", "[", "\u19fc"], ["\u1798", "\u17c6", "]", "\u19fd"], ["\u17bb\u17c6", "\u17bb\u17c7", ",", "\u19fe"], ["\u17d4", 
  "\u17d5", ".", "\u19ff"], ["\u17ca", "?", "/"], ["Shift", "Shift"]], [["\u200b", " ", "\u00a0", " "], ["AltGr", "AltGr"]]], "lang":["km"]};
  this.VKI_layout["\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"] = {"name":"Kannada", "keys":[[["\u0cca", "\u0c92"], ["1", "", "\u0ce7"], ["2", "", "\u0ce8"], ["3", "\u0ccd\u0cb0", "\u0ce9"], ["4", "\u0cb0\u0ccd", "\u0cea"], ["5", "\u0c9c\u0ccd\u0c9e", "\u0ceb"], ["6", "\u0ca4\u0ccd\u0cb0", "\u0cec"], ["7", "\u0c95\u0ccd\u0cb7", "\u0ced"], ["8", "\u0cb6\u0ccd\u0cb0", "\u0cee"], ["9", "(", "\u0cef"], ["0", ")", "\u0ce6"], ["-", "\u0c83"], ["\u0cc3", "\u0c8b", "\u0cc4", "\u0ce0"], ["Bksp", "Bksp"]], [["Tab", "Tab"], 
  ["\u0ccc", "\u0c94"], ["\u0cc8", "\u0c90", "\u0cd6"], ["\u0cbe", "\u0c86"], ["\u0cc0", "\u0c88", "", "\u0ce1"], ["\u0cc2", "\u0c8a"], ["\u0cac", "\u0cad"], ["\u0cb9", "\u0c99"], ["\u0c97", "\u0c98"], ["\u0ca6", "\u0ca7"], ["\u0c9c", "\u0c9d"], ["\u0ca1", "\u0ca2"], ["Enter", "Enter"]], [["Caps", "Caps"], ["\u0ccb", "\u0c93"], ["\u0cc7", "\u0c8f", "\u0cd5"], ["\u0ccd", "\u0c85"], ["\u0cbf", "\u0c87", "", "\u0c8c"], ["\u0cc1", "\u0c89"], ["\u0caa", "\u0cab", "", "\u0cde"], ["\u0cb0", "\u0cb1"], ["\u0c95", 
  "\u0c96"], ["\u0ca4", "\u0ca5"], ["\u0c9a", "\u0c9b"], ["\u0c9f", "\u0ca0"], ["", "\u0c9e"]], [["Shift", "Shift"], ["\u0cc6", "\u0c8f"], ["\u0c82"], ["\u0cae", "\u0ca3"], ["\u0ca8"], ["\u0cb5"], ["\u0cb2", "\u0cb3"], ["\u0cb8", "\u0cb6"], [",", "\u0cb7"], [".", "|"], ["\u0caf"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["kn"]};
  this.VKI_layout["\ud55c\uad6d\uc5b4"] = {"name":"Korean", "keys":[[["`", "~", "`", "~"], ["1", "!", "1", "!"], ["2", "@", "2", "@"], ["3", "#", "3", "#"], ["4", "$", "4", "$"], ["5", "%", "5", "%"], ["6", "^", "6", "^"], ["7", "&", "7", "&"], ["8", "*", "8", "*"], ["9", ")", "9", ")"], ["0", "(", "0", "("], ["-", "_", "-", "_"], ["=", "+", "=", "+"], ["\u20a9", "|", "\u20a9", "|"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u1107", "\u1108", "q", "Q"], ["\u110c", "\u110d", "w", "W"], ["\u1103", "\u1104", 
  "e", "E"], ["\u1100", "\u1101", "r", "R"], ["\u1109", "\u110a", "t", "T"], ["\u116d", "", "y", "Y"], ["\u1167", "", "u", "U"], ["\u1163", "", "i", "I"], ["\u1162", "\u1164", "o", "O"], ["\u1166", "\u1168", "p", "P"], ["[", "{", "[", "{"], ["]", "}", "]", "}"]], [["Caps", "Caps"], ["\u1106", "", "a", "A"], ["\u1102", "", "s", "S"], ["\u110b", "", "d", "D"], ["\u1105", "", "f", "F"], ["\u1112", "", "g", "G"], ["\u1169", "", "h", "H"], ["\u1165", "", "j", "J"], ["\u1161", "", "k", "K"], ["\u1175", 
  "", "l", "L"], [";", ":", ";", ":"], ["'", '"', "'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u110f", "", "z", "Z"], ["\u1110", "", "x", "X"], ["\u110e", "", "c", "C"], ["\u1111", "", "v", "V"], ["\u1172", "", "b", "B"], ["\u116e", "", "n", "N"], ["\u1173", "", "m", "M"], [",", "<", ",", "<"], [".", ">", ".", ">"], ["/", "?", "/", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["Kor", "Alt"]]], "lang":["ko"]};
  this.VKI_layout["Kurd\u00ee"] = {"name":"Kurdish", "keys":[[["\u20ac", "~"], ["\u0661", "!"], ["\u0662", "@"], ["\u0663", "#"], ["\u0664", "$"], ["\u0665", "%"], ["\u0666", "^"], ["\u0667", "&"], ["\u0668", "*"], ["\u0669", "("], ["\u0660", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0642", "`"], ["\u0648", "\u0648\u0648"], ["\u06d5", "\u064a"], ["\u0631", "\u0695"], ["\u062a", "\u0637"], ["\u06cc", "\u06ce"], ["\u0626", "\u0621"], ["\u062d", "\u0639"], ["\u06c6", "\u0624"], 
  ["\u067e", "\u062b"], ["[", "{"], ["]", "}"], ["\\", "|"]], [["Caps", "Caps"], ["\u0627", "\u0622"], ["\u0633", "\u0634"], ["\u062f", "\u0630"], ["\u0641", "\u0625"], ["\u06af", "\u063a"], ["\u0647", "\u200c"], ["\u0698", "\u0623"], ["\u06a9", "\u0643"], ["\u0644", "\u06b5"], ["\u061b", ":"], ["'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0632", "\u0636"], ["\u062e", "\u0635"], ["\u062c", "\u0686"], ["\u06a4", "\u0638"], ["\u0628", "\u0649"], ["\u0646", "\u0629"], ["\u0645", "\u0640"], 
  ["\u060c", "<"], [".", ">"], ["/", "\u061f"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["ku"]};
  this.VKI_layout["\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"] = {"name":"Kyrgyz", "keys":[[["\u0451", "\u0401"], ["1", "!"], ["2", '"'], ["3", "\u2116"], ["4", ";"], ["5", "%"], ["6", ":"], ["7", "?"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0439", "\u0419"], ["\u0446", "\u0426"], ["\u0443", "\u0423", "\u04af", "\u04ae"], ["\u043a", "\u041a"], ["\u0435", "\u0415"], ["\u043d", "\u041d", "\u04a3", "\u04a2"], ["\u0433", "\u0413"], ["\u0448", 
  "\u0428"], ["\u0449", "\u0429"], ["\u0437", "\u0417"], ["\u0445", "\u0425"], ["\u044a", "\u042a"], ["\\", "/"]], [["Caps", "Caps"], ["\u0444", "\u0424"], ["\u044b", "\u042b"], ["\u0432", "\u0412"], ["\u0430", "\u0410"], ["\u043f", "\u041f"], ["\u0440", "\u0420"], ["\u043e", "\u041e", "\u04e9", "\u04e8"], ["\u043b", "\u041b"], ["\u0434", "\u0414"], ["\u0436", "\u0416"], ["\u044d", "\u042d"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u044f", "\u042f"], ["\u0447", "\u0427"], ["\u0441", "\u0421"], 
  ["\u043c", "\u041c"], ["\u0438", "\u0418"], ["\u0442", "\u0422"], ["\u044c", "\u042c"], ["\u0431", "\u0411"], ["\u044e", "\u042e"], [".", ","], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["ky"]};
  this.VKI_layout["Latvie\u0161u"] = {"name":"Latvian", "keys":[[["\u00ad", "?"], ["1", "!", "\u00ab"], ["2", "\u00ab", "", "@"], ["3", "\u00bb", "", "#"], ["4", "$", "\u20ac", "$"], ["5", "%", '"', "~"], ["6", "/", "\u2019", "^"], ["7", "&", "", "\u00b1"], ["8", "\u00d7", ":"], ["9", "("], ["0", ")"], ["-", "_", "\u2013", "\u2014"], ["f", "F", "=", ";"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u016b", "\u016a", "q", "Q"], ["g", "G", "\u0123", "\u0122"], ["j", "J"], ["r", "R", "\u0157", "\u0156"], 
  ["m", "M", "w", "W"], ["v", "V", "y", "Y"], ["n", "N"], ["z", "Z"], ["\u0113", "\u0112"], ["\u010d", "\u010c"], ["\u017e", "\u017d", "[", "{"], ["h", "H", "]", "}"], ["\u0137", "\u0136"]], [["Caps", "Caps"], ["\u0161", "\u0160"], ["u", "U"], ["s", "S"], ["i", "I"], ["l", "L"], ["d", "D"], ["a", "A"], ["t", "T"], ["e", "E", "\u20ac"], ["c", "C"], ["\u00b4", "\u00b0", "\u00b4", "\u00a8"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0146", "\u0145"], ["b", "B", "x", "X"], ["\u012b", "\u012a"], ["k", 
  "K", "\u0137", "\u0136"], ["p", "P"], ["o", "O", "\u00f5", "\u00d5"], ["\u0101", "\u0100"], [",", ";", "<"], [".", ":", ">"], ["\u013c", "\u013b"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["lv"]};
  this.VKI_layout["Lietuvi\u0173"] = {"name":"Lithuanian", "keys":[[["`", "~"], ["\u0105", "\u0104"], ["\u010d", "\u010c"], ["\u0119", "\u0118"], ["\u0117", "\u0116"], ["\u012f", "\u012e"], ["\u0161", "\u0160"], ["\u0173", "\u0172"], ["\u016b", "\u016a"], ["\u201e", "("], ["\u201c", ")"], ["-", "_"], ["\u017e", "\u017d"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["[", "{"], ["]", "}"], 
  ["\\", "|"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], [";", ":"], ["'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u2013", "\u20ac"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], ["/", "?"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["lt"]};
  this.VKI_layout["Magyar"] = {"name":"Hungarian", "keys":[[["0", "\u00a7"], ["1", "'", "~"], ["2", '"', "\u02c7"], ["3", "+", "\u02c6"], ["4", "!", "\u02d8"], ["5", "%", "\u00b0"], ["6", "/", "\u02db"], ["7", "=", "`"], ["8", "(", "\u02d9"], ["9", ")", "\u00b4"], ["\u00f6", "\u00d6", "\u02dd"], ["\u00fc", "\u00dc", "\u00a8"], ["\u00f3", "\u00d3", "\u00b8"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "\\"], ["w", "W", "|"], ["e", "E", "\u00c4"], ["r", "R"], ["t", "T"], ["z", "Z"], ["u", "U", 
  "\u20ac"], ["i", "I", "\u00cd"], ["o", "O"], ["p", "P"], ["\u0151", "\u0150", "\u00f7"], ["\u00fa", "\u00da", "\u00d7"], ["\u0171", "\u0170", "\u00a4"]], [["Caps", "Caps"], ["a", "A", "\u00e4"], ["s", "S", "\u0111"], ["d", "D", "\u0110"], ["f", "F", "["], ["g", "G", "]"], ["h", "H"], ["j", "J", "\u00ed"], ["k", "K", "\u0141"], ["l", "L", "\u0142"], ["\u00e9", "\u00c9", "$"], ["\u00e1", "\u00c1", "\u00df"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u00ed", "\u00cd", "<"], ["y", "Y", ">"], ["x", 
  "X", "#"], ["c", "C", "&"], ["v", "V", "@"], ["b", "B", "{"], ["n", "N", "}"], ["m", "M", "<"], [",", "?", ";"], [".", ":", ">"], ["-", "_", "*"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["hu"]};
  this.VKI_layout["Malti"] = {"name":"Maltese 48", "keys":[[["\u010b", "\u010a", "`"], ["1", "!"], ["2", '"'], ["3", "\u20ac", "\u00a3"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u00e8", "\u00c8"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U", "\u00f9", "\u00d9"], ["i", "I", "\u00ec", "\u00cc"], ["o", "O", "\u00f2", "\u00d2"], ["p", "P"], ["\u0121", "\u0120", 
  "[", "{"], ["\u0127", "\u0126", "]", "}"], ["#", "\u017e"]], [["Caps", "Caps"], ["a", "A", "\u00e0", "\u00c0"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], [";", ":"], ["'", "@"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u017c", "\u017b", "\\", "|"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], ["/", "?", "", "`"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], 
  "lang":["mt"]};
  this.VKI_layout["\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"] = {"name":"Macedonian Cyrillic", "keys":[[["`", "~"], ["1", "!"], ["2", "\u201e"], ["3", "\u201c"], ["4", "\u2019"], ["5", "%"], ["6", "\u2018"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0459", "\u0409"], ["\u045a", "\u040a"], ["\u0435", "\u0415", "\u20ac"], ["\u0440", "\u0420"], ["\u0442", "\u0422"], ["\u0455", "\u0405"], ["\u0443", "\u0423"], ["\u0438", 
  "\u0418"], ["\u043e", "\u041e"], ["\u043f", "\u041f"], ["\u0448", "\u0428", "\u0402"], ["\u0453", "\u0403", "\u0452"], ["\u0436", "\u0416"]], [["Caps", "Caps"], ["\u0430", "\u0410"], ["\u0441", "\u0421"], ["\u0434", "\u0414"], ["\u0444", "\u0424", "["], ["\u0433", "\u0413", "]"], ["\u0445", "\u0425"], ["\u0458", "\u0408"], ["\u043a", "\u041a"], ["\u043b", "\u041b"], ["\u0447", "\u0427", "\u040b"], ["\u045c", "\u040c", "\u045b"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0451", "\u0401"], ["\u0437", 
  "\u0417"], ["\u045f", "\u040f"], ["\u0446", "\u0426"], ["\u0432", "\u0412", "@"], ["\u0431", "\u0411", "{"], ["\u043d", "\u041d", "}"], ["\u043c", "\u041c", "\u00a7"], [",", ";"], [".", ":"], ["/", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["mk"]};
  this.VKI_layout["\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"] = {"name":"Malayalam", "keys":[[["\u0d4a", "\u0d12"], ["1", "", "\u0d67"], ["2", "", "\u0d68"], ["3", "\u0d4d\u0d30", "\u0d69"], ["4", "", "\u0d6a"], ["5", "", "\u0d6b"], ["6", "", "\u0d6c"], ["7", "\u0d15\u0d4d\u0d37", "\u0d6d"], ["8", "", "\u0d6e"], ["9", "(", "\u0d6f"], ["0", ")", "\u0d66"], ["-", "\u0d03"], ["\u0d43", "\u0d0b", "", "\u0d60"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0d4c", "\u0d14", "\u0d57"], ["\u0d48", "\u0d10"], ["\u0d3e", 
  "\u0d06"], ["\u0d40", "\u0d08", "", "\u0d61"], ["\u0d42", "\u0d0a"], ["\u0d2c", "\u0d2d"], ["\u0d39", "\u0d19"], ["\u0d17", "\u0d18"], ["\u0d26", "\u0d27"], ["\u0d1c", "\u0d1d"], ["\u0d21", "\u0d22"], ["", "\u0d1e"]], [["Caps", "Caps"], ["\u0d4b", "\u0d13"], ["\u0d47", "\u0d0f"], ["\u0d4d", "\u0d05", "", "\u0d0c"], ["\u0d3f", "\u0d07"], ["\u0d41", "\u0d09"], ["\u0d2a", "\u0d2b"], ["\u0d30", "\u0d31"], ["\u0d15", "\u0d16"], ["\u0d24", "\u0d25"], ["\u0d1a", "\u0d1b"], ["\u0d1f", "\u0d20"], ["Enter", 
  "Enter"]], [["Shift", "Shift"], ["\u0d46", "\u0d0f"], ["\u0d02"], ["\u0d2e", "\u0d23"], ["\u0d28"], ["\u0d35", "\u0d34"], ["\u0d32", "\u0d33"], ["\u0d38", "\u0d36"], [",", "\u0d37"], ["."], ["\u0d2f"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["ml"]};
  this.VKI_layout["Misc. Symbols"] = {"name":"Misc. Symbols", "keys":[[["\u2605", "\u2606", "\u260e", "\u260f"], ["\u2648", "\u2673", "\u2659", "\u2630"], ["\u2649", "\u2674", "\u2658", "\u2631"], ["\u264a", "\u2675", "\u2657", "\u2632"], ["\u264b", "\u2676", "\u2656", "\u2633"], ["\u264c", "\u2677", "\u2655", "\u2634"], ["\u264d", "\u2678", "\u2654", "\u2635"], ["\u264e", "\u2679", "\u265f", "\u2636"], ["\u264f", "\u267a", "\u265e", "\u2637"], ["\u2650", "\u267b", "\u265d", "\u2686"], ["\u2651", 
  "\u267c", "\u265c", "\u2687"], ["\u2652", "\u267d", "\u265b", "\u2688"], ["\u2653", "\u2672", "\u265a", "\u2689"], ["Bksp", "Bksp"]], [["\u263f", "\u2680", "\u268a", "\u26a2"], ["\u2640", "\u2681", "\u268b", "\u26a3"], ["\u2641", "\u2682", "\u268c", "\u26a4"], ["\u2642", "\u2683", "\u268d", "\u26a5"], ["\u2643", "\u2684", "\u268e", "\u26a6"], ["\u2644", "\u2685", "\u268f", "\u26a7"], ["\u2645", "\u2620", "\u26ff", "\u26a8"], ["\u2646", "\u2622", "\u2692", "\u26a9"], ["\u2647", "\u2623", "\u2693", 
  "\u26b2"], ["\u2669", "\u266d", "\u2694", "\u26ac"], ["\u266a", "\u266e", "\u2695", "\u26ad"], ["\u266b", "\u266f", "\u2696", "\u26ae"], ["\u266c", "\u2607", "\u2697", "\u26af"], ["\u26f9", "\u2608", "\u2698", "\u26b0"], ["\u267f", "\u262e", "\u2638", "\u2609"]], [["Tab", "Tab"], ["\u261e", "\u261c", "\u261d", "\u261f"], ["\u261b", "\u261a", "\u2618", "\u2619"], ["\u2602", "\u2614", "\u26f1", "\u26d9"], ["\u2615", "\u2668", "\u26fe", "\u26d8"], ["\u263a", "\u2639", "\u263b", "\u26dc"], ["\u2617", 
  "\u2616", "\u26ca", "\u26c9"], ["\u2660", "\u2663", "\u2665", "\u2666"], ["\u2664", "\u2667", "\u2661", "\u2662"], ["\u26c2", "\u26c0", "\u26c3", "\u26c1"], ["\u2624", "\u2625", "\u269a", "\u26b1"], ["\u2610", "\u2611", "\u2612", "\u2613"], ["\u2628", "\u2626", "\u2627", "\u2629"], ["\u262a", "\u262b", "\u262c", "\u262d"], ["\u26fa", "\u26fb", "\u26fc", "\u26fd"]], [["Caps", "Caps"], ["\u262f", "\u2670", "\u2671", "\u267e"], ["\u263c", "\u2699", "\u263d", "\u263e"], ["\u26c4", "\u2603", "\u26c7", 
  "\u26c6"], ["\u26a0", "\u26a1", "\u2621", "\u26d4"], ["\u26e4", "\u26e5", "\u26e6", "\u26e7"], ["\u260a", "\u260b", "\u260c", "\u260d"], ["\u269c", "\u269b", "\u269d", "\u2604"], ["\u26b3", "\u26b4", "\u26b5", "\u26b6"], ["\u26b7", "\u26bf", "\u26b8", "\u26f8"], ["\u26b9", "\u26ba", "\u26bb", "\u26bc"], ["\u26bd", "\u26be", "\u269f", "\u269e"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u2600", "\u2601", "\u26c5", "\u26c8"], ["\u2691", "\u2690", "\u26ab", "\u26aa"], ["\u26cb", "\u26cc", "\u26cd", 
  "\u26ce"], ["\u26cf", "\u26d0", "\u26d1", "\u26d2"], ["\u26d3", "\u26d5", "\u26d6", "\u26d7"], ["\u26da", "\u26db", "\u26dd", "\u26de"], ["\u26df", "\u26e0", "\u26e1", "\u26e2"], ["\u26e3", "\u26e8", "\u26e9", "\u26ea"], ["\u26eb", "\u26ec", "\u26ed", "\u26ee"], ["\u26ef", "\u26f0", "\u26f2", "\u26f3"], ["\u26f4", "\u26f5", "\u26f6", "\u26f7"], ["Shift", "Shift"]], [["AltLk", "AltLk"], [" ", " ", " ", " "], ["Alt", "Alt"]]]};
  this.VKI_layout["\u041c\u043e\u043d\u0433\u043e\u043b"] = {"name":"Mongolian Cyrillic", "keys":[[["=", "+"], ["\u2116", "1"], ["-", "2"], ['"', "3"], ["\u20ae", "4"], [":", "5"], [".", "6"], ["_", "7"], [",", "8"], ["%", "9"], ["?", "0"], ["\u0435", "\u0415"], ["\u0449", "\u0429"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0444", "\u0424"], ["\u0446", "\u0426"], ["\u0443", "\u0423"], ["\u0436", "\u0416"], ["\u044d", "\u042d"], ["\u043d", "\u041d"], ["\u0433", "\u0413"], ["\u0448", "\u0428"], ["\u04af", 
  "\u04ae"], ["\u0437", "\u0417"], ["\u043a", "\u041a"], ["\u044a", "\u042a"], ["\\", "|"]], [["Caps", "Caps"], ["\u0439", "\u0419"], ["\u044b", "\u042b"], ["\u0431", "\u0411"], ["\u04e9", "\u04e8"], ["\u0430", "\u0410"], ["\u0445", "\u0425"], ["\u0440", "\u0420"], ["\u043e", "\u041e"], ["\u043b", "\u041b"], ["\u0434", "\u0414"], ["\u043f", "\u041f"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u044f", "\u042f"], ["\u0447", "\u0427"], ["\u0451", "\u0401"], ["\u0441", "\u0421"], ["\u043c", "\u041c"], 
  ["\u0438", "\u0418"], ["\u0442", "\u0422"], ["\u044c", "\u042c"], ["\u0432", "\u0412"], ["\u044e", "\u042e"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["mn"]};
  this.VKI_layout["\u092e\u0930\u093e\u0920\u0940"] = {"name":"Marathi", "keys":[[["", "", "`", "~"], ["\u0967", "\u090d", "1", "!"], ["\u0968", "\u0945", "2", "@"], ["\u0969", "\u094d\u0930", "3", "#"], ["\u096a", "\u0930\u094d", "4", "$"], ["\u096b", "\u091c\u094d\u091e", "5", "%"], ["\u096c", "\u0924\u094d\u0930", "6", "^"], ["\u096d", "\u0915\u094d\u0937", "7", "&"], ["\u096e", "\u0936\u094d\u0930", "8", "*"], ["\u096f", "(", "9", "("], ["\u0966", ")", "0", ")"], ["-", "\u0903", "-", "_"], ["\u0943", 
  "\u090b", "=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u094c", "\u0914"], ["\u0948", "\u0910"], ["\u093e", "\u0906"], ["\u0940", "\u0908"], ["\u0942", "\u090a"], ["\u092c", "\u092d"], ["\u0939", "\u0919"], ["\u0917", "\u0918"], ["\u0926", "\u0927"], ["\u091c", "\u091d"], ["\u0921", "\u0922", "[", "{"], ["\u093c", "\u091e", "]", "}"], ["\u0949", "\u0911", "\\", "|"]], [["Caps", "Caps"], ["\u094b", "\u0913"], ["\u0947", "\u090f"], ["\u094d", "\u0905"], ["\u093f", "\u0907"], ["\u0941", "\u0909"], 
  ["\u092a", "\u092b"], ["\u0930", "\u0931"], ["\u0915", "\u0916"], ["\u0924", "\u0925"], ["\u091a", "\u091b", ";", ":"], ["\u091f", "\u0920", "'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], [""], ["\u0902", "\u0901", "", "\u0950"], ["\u092e", "\u0923"], ["\u0928"], ["\u0935"], ["\u0932", "\u0933"], ["\u0938", "\u0936"], [",", "\u0937", ",", "<"], [".", "\u0964", ".", ">"], ["\u092f", "\u095f", "/", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["mr"]};
  this.VKI_layout["\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c"] = {"name":"Burmese", "keys":[[["\u1039`", "~"], ["\u1041", "\u100d"], ["\u1042", "\u100e"], ["\u1043", "\u100b"], ["\u1044", "\u1000\u103b\u1015\u103a"], ["\u1045", "%"], ["\u1046", "/"], ["\u1047", "\u101b"], ["\u1048", "\u1002"], ["\u1049", "("], ["\u1040", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u1006", "\u1029"], ["\u1010", "\u1040"], ["\u1014", "\u103f"], ["\u1019", "\u1023"], ["\u1021", 
  "\u1024"], ["\u1015", "\u104c"], ["\u1000", "\u1009"], ["\u1004", "\u104d"], ["\u101e", "\u1025"], ["\u1005", "\u100f"], ["\u101f", "\u1027"], ["\u2018", "\u2019"], ["\u104f", "\u100b\u1039\u100c"]], [["Caps", "Caps"], ["\u200b\u1031", "\u1017"], ["\u200b\u103b", "\u200b\u103e"], ["\u200b\u102d", "\u200b\u102e"], ["\u200b\u103a", "\u1004\u103a\u1039\u200b"], ["\u200b\u102b", "\u200b\u103d"], ["\u200b\u1037", "\u200b\u1036"], ["\u200b\u103c", "\u200b\u1032"], ["\u200b\u102f", "\u200b\u102f"], ["\u200b\u1030", 
  "\u200b\u1030"], ["\u200b\u1038", "\u200b\u102b\u103a"], ["\u1012", "\u1013"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u1016", "\u1007"], ["\u1011", "\u100c"], ["\u1001", "\u1003"], ["\u101c", "\u1020"], ["\u1018", "\u1026"], ["\u100a", "\u1008"], ["\u200b\u102c", "\u102a"], ["\u101a", "\u101b"], [".", "\u101b"], ["\u104b", "\u104a"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["my"]};
  this.VKI_layout["Nederlands"] = {"name":"Dutch", "keys":[[["@", "\u00a7", "\u00ac"], ["1", "!", "\u00b9"], ["2", '"', "\u00b2"], ["3", "#", "\u00b3"], ["4", "$", "\u00bc"], ["5", "%", "\u00bd"], ["6", "&", "\u00be"], ["7", "_", "\u00a3"], ["8", "(", "{"], ["9", ")", "}"], ["0", "'"], ["/", "?", "\\"], ["\u00b0", "~", "\u00b8"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R", "\u00b6"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", 
  "P"], ["\u00a8", "^"], ["*", "|"], ["<", ">"]], [["Caps", "Caps"], ["a", "A"], ["s", "S", "\u00df"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["+", "\u00b1"], ["\u00b4", "`"], ["Enter", "Enter"]], [["Shift", "Shift"], ["]", "[", "\u00a6"], ["z", "Z", "\u00ab"], ["x", "X", "\u00bb"], ["c", "C", "\u00a2"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M", "\u00b5"], [",", ";"], [".", ":", "\u00b7"], ["-", "="], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", 
  "AltGr"]]], "lang":["nl"]};
  this.VKI_layout["Norsk"] = {"name":"Norwegian", "keys":[[["|", "\u00a7"], ["1", "!"], ["2", '"', "@"], ["3", "#", "\u00a3"], ["4", "\u00a4", "$"], ["5", "%"], ["6", "&"], ["7", "/", "{"], ["8", "(", "["], ["9", ")", "]"], ["0", "=", "}"], ["+", "?"], ["\\", "`", "\u00b4"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00e5", "\u00c5"], ["\u00a8", "^", "~"], ["'", "*"]], [["Caps", 
  "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00f8", "\u00d8"], ["\u00e6", "\u00c6"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M", "\u03bc", "\u039c"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["no", "nb", "nn"]};
  this.VKI_layout["\u067e\u069a\u062a\u0648"] = {"name":"Pashto", "keys":[[["\u200d", "\u00f7", "`"], ["\u06f1", "!", "`"], ["\u06f2", "\u066c", "@"], ["\u06f3", "\u066b", "\u066b"], ["\u06f4", "\u00a4", "\u00a3"], ["\u06f5", "\u066a", "%"], ["\u06f6", "\u00d7", "^"], ["\u06f7", "\u00ab", "&"], ["\u06f8", "\u00bb", "*"], ["\u06f9", "(", "\ufdf2"], ["\u06f0", ")", "\ufefb"], ["-", "\u0640", "_"], ["=", "+", "\ufe87", "\u00f7"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0636", "\u0652", "\u06d5"], ["\u0635", 
  "\u064c", "\u0653"], ["\u062b", "\u064d", "\u20ac"], ["\u0642", "\u064b", "\ufef7"], ["\u0641", "\u064f", "\ufef5"], ["\u063a", "\u0650", "'"], ["\u0639", "\u064e", "\ufe84"], ["\u0647", "\u0651", "\u0670"], ["\u062e", "\u0681", "'"], ["\u062d", "\u0685", '"'], ["\u062c", "]", "}"], ["\u0686", "[", "{"], ["\\", "\u066d", "|"]], [["Caps", "Caps"], ["\u0634", "\u069a", "\ufbb0"], ["\u0633", "\u06cd", "\u06d2"], ["\u06cc", "\u064a", "\u06d2"], ["\u0628", "\u067e", "\u06ba"], ["\u0644", "\u0623", "\u06b7"], 
  ["\u0627", "\u0622", "\u0671"], ["\u062a", "\u067c", "\u0679"], ["\u0646", "\u06bc", "<"], ["\u0645", "\u0629", ">"], ["\u06a9", ":", "\u0643"], ["\u06af", "\u061b", "\u06ab"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0638", "\u0626", "?"], ["\u0637", "\u06d0", ";"], ["\u0632", "\u0698", "\u0655"], ["\u0631", "\u0621", "\u0654"], ["\u0630", "\u200c", "\u0625"], ["\u062f", "\u0689", "\u0688"], ["\u0693", "\u0624", "\u0691"], ["\u0648", "\u060c", ","], ["\u0696", ".", "\u06c7"], ["/", "\u061f", 
  "\u06c9"], ["Shift", "Shift", "\u064d"]], [[" ", " ", " ", " "], ["Alt", "Alt"]]], "lang":["ps"]};
  this.VKI_layout["\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"] = {"name":"Punjabi (Gurmukhi)", "keys":[[[""], ["1", "\u0a4d\u0a35", "\u0a67", "\u0a67"], ["2", "\u0a4d\u0a2f", "\u0a68", "\u0a68"], ["3", "\u0a4d\u0a30", "\u0a69", "\u0a69"], ["4", "\u0a71", "\u0a6a", "\u0a6a"], ["5", "", "\u0a6b", "\u0a6b"], ["6", "", "\u0a6c", "\u0a6c"], ["7", "", "\u0a6d", "\u0a6d"], ["8", "", "\u0a6e", "\u0a6e"], ["9", "(", "\u0a6f", "\u0a6f"], ["0", ")", "\u0a66", "\u0a66"], ["-"], [""], ["Bksp", "Bksp"]], [["Tab", "Tab"], 
  ["\u0a4c", "\u0a14"], ["\u0a48", "\u0a10"], ["\u0a3e", "\u0a06"], ["\u0a40", "\u0a08"], ["\u0a42", "\u0a0a"], ["\u0a2c", "\u0a2d"], ["\u0a39", "\u0a19"], ["\u0a17", "\u0a18", "\u0a5a", "\u0a5a"], ["\u0a26", "\u0a27"], ["\u0a1c", "\u0a1d", "\u0a5b", "\u0a5b"], ["\u0a21", "\u0a22", "\u0a5c", "\u0a5c"], ["Enter", "Enter"]], [["Caps", "Caps"], ["\u0a4b", "\u0a13"], ["\u0a47", "\u0a0f"], ["\u0a4d", "\u0a05"], ["\u0a3f", "\u0a07"], ["\u0a41", "\u0a09"], ["\u0a2a", "\u0a2b", "\u0a5e", "\u0a5e"], ["\u0a30"], 
  ["\u0a15", "\u0a16", "\u0a59", "\u0a59"], ["\u0a24", "\u0a25"], ["\u0a1a", "\u0a1b"], ["\u0a1f", "\u0a20"], ["\u0a3c", "\u0a1e"]], [["Shift", "Shift"], [""], ["\u0a02", "\u0a02"], ["\u0a2e", "\u0a23"], ["\u0a28"], ["\u0a35", "\u0a72", "\u0a73", "\u0a73"], ["\u0a32", "\u0a33"], ["\u0a38", "\u0a36"], [","], [".", "|", "\u0965", "\u0965"], ["\u0a2f"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["pa"]};
  this.VKI_layout["\u62fc\u97f3 (Pinyin)"] = {"name":"Pinyin", "keys":[[["`", "~", "\u4e93", "\u301c"], ["1", "!", "\uff62"], ["2", "@", "\uff63"], ["3", "#", "\u301d"], ["4", "$", "\u301e"], ["5", "%", "\u301f"], ["6", "^", "\u3008"], ["7", "&", "\u3009"], ["8", "*", "\u302f"], ["9", "(", "\u300a"], ["0", ")", "\u300b"], ["-", "_", "\u300e"], ["=", "+", "\u300f"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "\u0101", "\u0100"], ["w", "W", "\u00e1", "\u00c1"], ["e", "E", "\u01ce", "\u01cd"], ["r", 
  "R", "\u00e0", "\u00c0"], ["t", "T", "\u0113", "\u0112"], ["y", "Y", "\u00e9", "\u00c9"], ["u", "U", "\u011b", "\u011a"], ["i", "I", "\u00e8", "\u00c8"], ["o", "O", "\u012b", "\u012a"], ["p", "P", "\u00ed", "\u00cd"], ["[", "{", "\u01d0", "\u01cf"], ["]", "}", "\u00ec", "\u00cc"], ["\\", "|", "\u3020"]], [["Caps", "Caps"], ["a", "A", "\u014d", "\u014c"], ["s", "S", "\u00f3", "\u00d3"], ["d", "D", "\u01d2", "\u01d1"], ["f", "F", "\u00f2", "\u00d2"], ["g", "G", "\u00fc", "\u00dc"], ["h", "H", "\u016b", 
  "\u016a"], ["j", "J", "\u00fa", "\u00da"], ["k", "K", "\u01d4", "\u01d3"], ["l", "L", "\u00f9", "\u00d9"], [";", ":"], ["'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["z", "Z", "\u01d6", "\u01d5"], ["x", "X", "\u01d8", "\u01d7"], ["c", "C", "\u01da", "\u01d9"], ["v", "V", "\u01dc", "\u01db"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<", "\u3001"], [".", ">", "\u3002"], ["/", "?"], ["Shift", "Shift"]], [["AltLk", "AltLk"], [" ", " ", " ", " "], ["Alt", "Alt"]]], "lang":["zh-Latn"]};
  this.VKI_layout["Polski"] = {"name":"Polish (214)", "keys":[[["\u02db", "\u00b7"], ["1", "!", "~"], ["2", '"', "\u02c7"], ["3", "#", "^"], ["4", "\u00a4", "\u02d8"], ["5", "%", "\u00b0"], ["6", "&", "\u02db"], ["7", "/", "`"], ["8", "(", "\u00b7"], ["9", ")", "\u00b4"], ["0", "=", "\u02dd"], ["+", "?", "\u00a8"], ["'", "*", "\u00b8"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "\\"], ["w", "W", "\u00a6"], ["e", "E"], ["r", "R"], ["t", "T"], ["z", "Z"], ["u", "U", "\u20ac"], ["i", "I"], ["o", 
  "O"], ["p", "P"], ["\u017c", "\u0144", "\u00f7"], ["\u015b", "\u0107", "\u00d7"], ["\u00f3", "\u017a"]], [["Caps", "Caps"], ["a", "A"], ["s", "S", "\u0111"], ["d", "D", "\u0110"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u0142", "\u0141", "$"], ["\u0105", "\u0119", "\u00df"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">"], ["y", "Y"], ["x", "X"], ["c", "C"], ["v", "V", "@"], ["b", "B", "{"], ["n", "N", "}"], ["m", "M", "\u00a7"], [",", ";", "<"], [".", ":", 
  ">"], ["-", "_"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]]};
  this.VKI_layout["Polski Programisty"] = {"name":"Polish Programmers", "keys":[[["`", "~"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u0119", "\u0118"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O", "\u00f3", "\u00d3"], ["p", "P"], ["[", "{"], ["]", "}"], ["\\", "|"]], [["Caps", "Caps"], ["a", "A", 
  "\u0105", "\u0104"], ["s", "S", "\u015b", "\u015a"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L", "\u0142", "\u0141"], [";", ":"], ["'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["z", "Z", "\u017c", "\u017b"], ["x", "X", "\u017a", "\u0179"], ["c", "C", "\u0107", "\u0106"], ["v", "V"], ["b", "B"], ["n", "N", "\u0144", "\u0143"], ["m", "M"], [",", "<"], [".", ">"], ["/", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["Alt", "Alt"]]], "lang":["pl"]};
  this.VKI_layout["Portugu\u00eas Brasileiro"] = {"name":"Portuguese (Brazil)", "keys":[[["'", '"'], ["1", "!", "\u00b9"], ["2", "@", "\u00b2"], ["3", "#", "\u00b3"], ["4", "$", "\u00a3"], ["5", "%", "\u00a2"], ["6", "\u00a8", "\u00ac"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+", "\u00a7"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "/"], ["w", "W", "?"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00b4", 
  "`"], ["[", "{", "\u00aa"], ["Enter", "Enter"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00e7", "\u00c7"], ["~", "^"], ["]", "}", "\u00ba"], ["/", "?"]], [["Shift", "Shift"], ["\\", "|"], ["z", "Z"], ["x", "X"], ["c", "C", "\u20a2"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], [":", ":"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["pt-BR"]};
  this.VKI_layout["Portugu\u00eas"] = {"name":"Portuguese", "keys":[[["\\", "|"], ["1", "!"], ["2", '"', "@"], ["3", "#", "\u00a3"], ["4", "$", "\u00a7"], ["5", "%"], ["6", "&"], ["7", "/", "{"], ["8", "(", "["], ["9", ")", "]"], ["0", "=", "}"], ["'", "?"], ["\u00ab", "\u00bb"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["+", "*", "\u00a8"], ["\u00b4", "`"], ["~", "^"]], [["Caps", 
  "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00e7", "\u00c7"], ["\u00ba", "\u00aa"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "\\"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["pt"]};
  this.VKI_layout["Rom\u00e2n\u0103"] = {"name":"Romanian", "keys":[[["\u201e", "\u201d", "`", "~"], ["1", "!", "~"], ["2", "@", "\u02c7"], ["3", "#", "^"], ["4", "$", "\u02d8"], ["5", "%", "\u00b0"], ["6", "^", "\u02db"], ["7", "&", "`"], ["8", "*", "\u02d9"], ["9", "(", "\u00b4"], ["0", ")", "\u02dd"], ["-", "_", "\u00a8"], ["=", "+", "\u00b8", "\u00b1"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], 
  ["o", "O"], ["p", "P", "\u00a7"], ["\u0103", "\u0102", "[", "{"], ["\u00ee", "\u00ce", "]", "}"], ["\u00e2", "\u00c2", "\\", "|"]], [["Caps", "Caps"], ["a", "A"], ["s", "S", "\u00df"], ["d", "D", "\u00f0", "\u00d0"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L", "\u0142", "\u0141"], [this.VKI_isIElt8 ? "\u015f" : "\u0219", this.VKI_isIElt8 ? "\u015e" : "\u0218", ";", ":"], [this.VKI_isIElt8 ? "\u0163" : "\u021b", this.VKI_isIElt8 ? "\u0162" : "\u021a", "'", '"'], ["Enter", 
  "Enter"]], [["Shift", "Shift"], ["\\", "|"], ["z", "Z"], ["x", "X"], ["c", "C", "\u00a9"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", ";", "<", "\u00ab"], [".", ":", ">", "\u00bb"], ["/", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["ro"]};
  this.VKI_layout["\u0420\u0443\u0441\u0441\u043a\u0438\u0439"] = {"name":"Russian", "keys":[[["\u0451", "\u0401"], ["1", "!"], ["2", '"'], ["3", "\u2116"], ["4", ";"], ["5", "%"], ["6", ":"], ["7", "?"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0439", "\u0419"], ["\u0446", "\u0426"], ["\u0443", "\u0423"], ["\u043a", "\u041a"], ["\u0435", "\u0415"], ["\u043d", "\u041d"], ["\u0433", "\u0413"], ["\u0448", "\u0428"], ["\u0449", "\u0429"], ["\u0437", 
  "\u0417"], ["\u0445", "\u0425"], ["\u044a", "\u042a"], ["\\", "/"]], [["Caps", "Caps"], ["\u0444", "\u0424"], ["\u044b", "\u042b"], ["\u0432", "\u0412"], ["\u0430", "\u0410"], ["\u043f", "\u041f"], ["\u0440", "\u0420"], ["\u043e", "\u041e"], ["\u043b", "\u041b"], ["\u0434", "\u0414"], ["\u0436", "\u0416"], ["\u044d", "\u042d"], ["Enter", "Enter"]], [["Shift", "Shift"], ["/", "|"], ["\u044f", "\u042f"], ["\u0447", "\u0427"], ["\u0441", "\u0421"], ["\u043c", "\u041c"], ["\u0438", "\u0418"], ["\u0442", 
  "\u0422"], ["\u044c", "\u042c"], ["\u0431", "\u0411"], ["\u044e", "\u042e"], [".", ","], ["Shift", "Shift"]], [[" ", " "]]], "lang":["ru"]};
  this.VKI_layout["Schweizerdeutsch"] = {"name":"Swiss German", "keys":[[["\u00a7", "\u00b0"], ["1", "+", "\u00a6"], ["2", '"', "@"], ["3", "*", "#"], ["4", "\u00e7", "\u00b0"], ["5", "%", "\u00a7"], ["6", "&", "\u00ac"], ["7", "/", "|"], ["8", "(", "\u00a2"], ["9", ")"], ["0", "="], ["'", "?", "\u00b4"], ["^", "`", "~"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["z", "Z"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00fc", 
  "\u00e8", "["], ["\u00a8", "!", "]"], ["$", "\u00a3", "}"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00f6", "\u00e9"], ["\u00e4", "\u00e0", "{"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "\\"], ["y", "Y"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["de-CH"]};
  this.VKI_layout["Shqip"] = {"name":"Albanian", "keys":[[["\\", "|"], ["1", "!", "~"], ["2", '"', "\u02c7"], ["3", "#", "^"], ["4", "$", "\u02d8"], ["5", "%", "\u00b0"], ["6", "^", "\u02db"], ["7", "&", "`"], ["8", "*", "\u02d9"], ["9", "(", "\u00b4"], ["0", ")", "\u02dd"], ["-", "_", "\u00a8"], ["=", "+", "\u00b8"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "\\"], ["w", "W", "|"], ["e", "E"], ["r", "R"], ["t", "T"], ["z", "Z"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00e7", "\u00c7", 
  "\u00f7"], ["[", "{", "\u00df"], ["]", "}", "\u00a4"]], [["Caps", "Caps"], ["a", "A"], ["s", "S", "\u0111"], ["d", "D", "\u0110"], ["f", "F", "["], ["g", "G", "]"], ["h", "H"], ["j", "J"], ["k", "K", "\u0142"], ["l", "L", "\u0141"], ["\u00eb", "\u00cb", "$"], ["@", "'", "\u00d7"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">"], ["y", "Y"], ["x", "X"], ["c", "C"], ["v", "V", "@"], ["b", "B", "{"], ["n", "N", "}"], ["m", "M", "\u00a7"], [",", ";", "<"], [".", ":", ">"], ["/", "?"], ["Shift", 
  "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["sq"]};
  this.VKI_layout["Sloven\u010dina"] = {"name":"Slovak", "keys":[[[";", "\u00b0"], ["+", "1", "~"], ["\u013e", "2", "\u02c7"], ["\u0161", "3", "^"], ["\u010d", "4", "\u02d8"], ["\u0165", "5", "\u00b0"], ["\u017e", "6", "\u02db"], ["\u00fd", "7", "`"], ["\u00e1", "8", "\u02d9"], ["\u00ed", "9", "\u00b4"], ["\u00e9", "0", "\u02dd"], ["=", "%", "\u00a8"], ["\u00b4", "\u02c7", "\u00b8"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "\\"], ["w", "W", "|"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], 
  ["z", "Z"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P", "'"], ["\u00fa", "/", "\u00f7"], ["\u00e4", "(", "\u00d7"], ["\u0148", ")", "\u00a4"]], [["Caps", "Caps"], ["a", "A"], ["s", "S", "\u0111"], ["d", "D", "\u0110"], ["f", "F", "["], ["g", "G", "]"], ["h", "H"], ["j", "J"], ["k", "K", "\u0142"], ["l", "L", "\u0141"], ["\u00f4", '"', "$"], ["\u00a7", "!", "\u00df"], ["Enter", "Enter"]], [["Shift", "Shift"], ["&", "*", "<"], ["y", "Y", ">"], ["x", "X", "#"], ["c", "C", "&"], ["v", "V", "@"], 
  ["b", "B", "{"], ["n", "N", "}"], ["m", "M"], [",", "?", "<"], [".", ":", ">"], ["-", "_", "*"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["sk"]};
  this.VKI_layout["Sloven\u0161\u010dina"] = {"name":"Slovenian", "keys":this.VKI_layout["Bosanski"].keys.slice(0), "lang":["sl"]};
  this.VKI_layout["\u0441\u0440\u043f\u0441\u043a\u0438"] = {"name":"Serbian Cyrillic", "keys":[[["`", "~"], ["1", "!"], ["2", '"'], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "&"], ["7", "/"], ["8", "("], ["9", ")"], ["0", "="], ["'", "?"], ["+", "*"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0459", "\u0409"], ["\u045a", "\u040a"], ["\u0435", "\u0415", "\u20ac"], ["\u0440", "\u0420"], ["\u0442", "\u0422"], ["\u0437", "\u0417"], ["\u0443", "\u0423"], ["\u0438", "\u0418"], ["\u043e", "\u041e"], ["\u043f", 
  "\u041f"], ["\u0448", "\u0428"], ["\u0452", "\u0402"], ["\u0436", "\u0416"]], [["Caps", "Caps"], ["\u0430", "\u0410"], ["\u0441", "\u0421"], ["\u0434", "\u0414"], ["\u0444", "\u0424"], ["\u0433", "\u0413"], ["\u0445", "\u0425"], ["\u0458", "\u0408"], ["\u043a", "\u041a"], ["\u043b", "\u041b"], ["\u0447", "\u0427"], ["\u045b", "\u040b"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">"], ["\u0455", "\u0405"], ["\u045f", "\u040f"], ["\u0446", "\u0426"], ["\u0432", "\u0412"], ["\u0431", "\u0411"], 
  ["\u043d", "\u041d"], ["\u043c", "\u041c"], [",", ";", "<"], [".", ":", ">"], ["-", "_", "\u00a9"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["sr-Cyrl"]};
  this.VKI_layout["Srpski"] = {"name":"Serbian Latin", "keys":this.VKI_layout["Bosanski"].keys.slice(0), "lang":["sr"]};
  this.VKI_layout["Suomi"] = {"name":"Finnish", "keys":[[["\u00a7", "\u00bd"], ["1", "!"], ["2", '"', "@"], ["3", "#", "\u00a3"], ["4", "\u00a4", "$"], ["5", "%", "\u20ac"], ["6", "&"], ["7", "/", "{"], ["8", "(", "["], ["9", ")", "]"], ["0", "=", "}"], ["+", "?", "\\"], ["\u00b4", "`"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "\u00e2", "\u00c2"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T", "\u0167", "\u0166"], ["y", "Y"], ["u", "U"], ["i", "I", "\u00ef", "\u00cf"], ["o", "O", 
  "\u00f5", "\u00d5"], ["p", "P"], ["\u00e5", "\u00c5"], ["\u00a8", "^", "~"], ["'", "*"]], [["Caps", "Caps"], ["a", "A", "\u00e1", "\u00c1"], ["s", "S", "\u0161", "\u0160"], ["d", "D", "\u0111", "\u0110"], ["f", "F", "\u01e5", "\u01e4"], ["g", "G", "\u01e7", "\u01e6"], ["h", "H", "\u021f", "\u021e"], ["j", "J"], ["k", "K", "\u01e9", "\u01e8"], ["l", "L"], ["\u00f6", "\u00d6", "\u00f8", "\u00d8"], ["\u00e4", "\u00c4", "\u00e6", "\u00c6"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "|"], 
  ["z", "Z", "\u017e", "\u017d"], ["x", "X"], ["c", "C", "\u010d", "\u010c"], ["v", "V", "\u01ef", "\u01ee"], ["b", "B", "\u0292", "\u01b7"], ["n", "N", "\u014b", "\u014a"], ["m", "M", "\u00b5"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", "Shift"]], [["Alt", "Alt"], [" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["fi"]};
  this.VKI_layout["Svenska"] = {"name":"Swedish", "keys":[[["\u00a7", "\u00bd"], ["1", "!"], ["2", '"', "@"], ["3", "#", "\u00a3"], ["4", "\u00a4", "$"], ["5", "%", "\u20ac"], ["6", "&"], ["7", "/", "{"], ["8", "(", "["], ["9", ")", "]"], ["0", "=", "}"], ["+", "?", "\\"], ["\u00b4", "`"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00e5", "\u00c5"], ["\u00a8", "^", "~"], 
  ["'", "*"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00f6", "\u00d6"], ["\u00e4", "\u00c4"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "|"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M", "\u03bc", "\u039c"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["sv"]};
  this.VKI_layout["Swiss Fran\u00e7ais"] = {"name":"Swiss French", "keys":[[["\u00a7", "\u00b0"], ["1", "+", "\u00a6"], ["2", '"', "@"], ["3", "*", "#"], ["4", "\u00e7", "\u00b0"], ["5", "%", "\u00a7"], ["6", "&", "\u00ac"], ["7", "/", "|"], ["8", "(", "\u00a2"], ["9", ")"], ["0", "="], ["'", "?", "\u00b4"], ["^", "`", "~"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["z", "Z"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["\u00e8", 
  "\u00fc", "["], ["\u00a8", "!", "]"], ["$", "\u00a3", "}"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u00e9", "\u00f6"], ["\u00e0", "\u00e4", "{"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "\\"], ["y", "Y"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", ";"], [".", ":"], ["-", "_"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["fr-CH"]};
  this.VKI_layout["\u0723\u0718\u072a\u071d\u071d\u0710"] = {"name":"Syriac", "keys":[[["\u070f", "\u032e", "\u0651", "\u0651"], ["1", "!", "\u0701", "\u0701"], ["2", "\u030a", "\u0702", "\u0702"], ["3", "\u0325", "\u0703", "\u0703"], ["4", "\u0749", "\u0704", "\u0704"], ["5", "\u2670", "\u0705", "\u0705"], ["6", "\u2671", "\u0708", "\u0708"], ["7", "\u070a", "\u0709", "\u0709"], ["8", "\u00bb", "\u070b", "\u070b"], ["9", ")", "\u070c", "\u070c"], ["0", "(", "\u070d", "\u070d"], ["-", "\u00ab", "\u250c", 
  "\u250c"], ["=", "+", "\u2510", "\u2510"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0714", "\u0730", "\u064e", "\u064e"], ["\u0728", "\u0733", "\u064b", "\u064b"], ["\u0716", "\u0736", "\u064f", "\u064f"], ["\u0729", "\u073a", "\u064c", "\u064c"], ["\u0726", "\u073d", "\u0653", "\u0653"], ["\u071c", "\u0740", "\u0654", "\u0654"], ["\u0725", "\u0741", "\u0747", "\u0747"], ["\u0717", "\u0308", "\u0743", "\u0743"], ["\u071e", "\u0304", "\u0745", "\u0745"], ["\u071a", "\u0307", "\u032d", "\u032d"], 
  ["\u0713", "\u0303"], ["\u0715", "\u074a"], ["\u0706", ":"]], [["Caps", "Caps"], ["\u072b", "\u0731", "\u0650", "\u0650"], ["\u0723", "\u0734", "\u064d", "\u064d"], ["\u071d", "\u0737"], ["\u0712", "\u073b", "\u0621", "\u0621"], ["\u0720", "\u073e", "\u0655", "\u0655"], ["\u0710", "\u0711", "\u0670", "\u0670"], ["\u072c", "\u0640", "\u0748", "\u0748"], ["\u0722", "\u0324", "\u0744", "\u0744"], ["\u0721", "\u0331", "\u0746", "\u0746"], ["\u071f", "\u0323"], ["\u071b", "\u0330"], ["Enter", "Enter"]], 
  [["Shift", "Shift"], ["]", "\u0732"], ["[", "\u0735", "\u0652", "\u0652"], ["\u0724", "\u0738"], ["\u072a", "\u073c", "\u200d"], ["\u0727", "\u073f", "\u200c"], ["\u0700", "\u0739", "\u200e"], [".", "\u0742", "\u200f"], ["\u0718", "\u060c"], ["\u0719", "\u061b"], ["\u0707", "\u061f"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["syc"]};
  this.VKI_layout["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"] = {"name":"Tamil", "keys":[[["\u0bca", "\u0b92"], ["1", "", "\u0be7"], ["2", "", "\u0be8"], ["3", "", "\u0be9"], ["4", "", "\u0bea"], ["5", "", "\u0beb"], ["6", "\u0ba4\u0bcd\u0bb0", "\u0bec"], ["7", "\u0b95\u0bcd\u0bb7", "\u0bed"], ["8", "\u0bb7\u0bcd\u0bb0", "\u0bee"], ["9", "", "\u0bef"], ["0", "", "\u0bf0"], ["-", "\u0b83", "\u0bf1"], ["", "", "\u0bf2"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0bcc", "\u0b94"], ["\u0bc8", "\u0b90"], ["\u0bbe", 
  "\u0b86"], ["\u0bc0", "\u0b88"], ["\u0bc2", "\u0b8a"], ["\u0baa", "\u0baa"], ["\u0bb9", "\u0b99"], ["\u0b95", "\u0b95"], ["\u0ba4", "\u0ba4"], ["\u0b9c", "\u0b9a"], ["\u0b9f", "\u0b9f"], ["\u0b9e"]], [["Caps", "Caps"], ["\u0bcb", "\u0b93"], ["\u0bc7", "\u0b8f"], ["\u0bcd", "\u0b85"], ["\u0bbf", "\u0b87"], ["\u0bc1", "\u0b89"], ["\u0baa", "\u0baa"], ["\u0bb0", "\u0bb1"], ["\u0b95", "\u0b95"], ["\u0ba4", "\u0ba4"], ["\u0b9a", "\u0b9a"], ["\u0b9f", "\u0b9f"], ["Enter", "Enter"]], [["Shift", "Shift"], 
  ["\u0bc6", "\u0b8e"], [""], ["\u0bae", "\u0ba3"], ["\u0ba8", "\u0ba9"], ["\u0bb5", "\u0bb4"], ["\u0bb2", "\u0bb3"], ["\u0bb8", "\u0bb7"], [",", "\u0bb7"], [".", "\u0bb8\u0bcd\u0bb0\u0bc0"], ["\u0baf", "\u0baf"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["ta"]};
  this.VKI_layout["\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"] = {"name":"Telugu", "keys":[[["\u0c4a", "\u0c12"], ["1", "", "\u0c67"], ["2", "", "\u0c68"], ["3", "\u0c4d\u0c30", "\u0c69"], ["4", "", "\u0c6a"], ["5", "\u0c1c\u0c4d\u0c1e", "\u0c6b"], ["6", "\u0c24\u0c4d\u0c30", "\u0c6c"], ["7", "\u0c15\u0c4d\u0c37", "\u0c6d"], ["8", "\u0c36\u0c4d\u0c30", "\u0c6e"], ["9", "(", "\u0c6f"], ["0", ")", "\u0c66"], ["-", "\u0c03"], ["\u0c43", "\u0c0b", "\u0c44"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0c4c", 
  "\u0c14"], ["\u0c48", "\u0c10", "\u0c56"], ["\u0c3e", "\u0c06"], ["\u0c40", "\u0c08", "", "\u0c61"], ["\u0c42", "\u0c0a"], ["\u0c2c"], ["\u0c39", "\u0c19"], ["\u0c17", "\u0c18"], ["\u0c26", "\u0c27"], ["\u0c1c", "\u0c1d"], ["\u0c21", "\u0c22"], ["", "\u0c1e"]], [["Caps", "Caps"], ["\u0c4b", "\u0c13"], ["\u0c47", "\u0c0f", "\u0c55"], ["\u0c4d", "\u0c05"], ["\u0c3f", "\u0c07", "", "\u0c0c"], ["\u0c41", "\u0c09"], ["\u0c2a", "\u0c2b"], ["\u0c30", "\u0c31"], ["\u0c15", "\u0c16"], ["\u0c24", "\u0c25"], 
  ["\u0c1a", "\u0c1b"], ["\u0c1f", "\u0c25"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0c46", "\u0c0e"], ["\u0c02", "\u0c01"], ["\u0c2e", "\u0c23"], ["\u0c28", "\u0c28"], ["\u0c35"], ["\u0c32", "\u0c33"], ["\u0c38", "\u0c36"], [",", "\u0c37"], ["."], ["\u0c2f"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["te"]};
  this.VKI_layout["Ti\u1ebfng Vi\u1ec7t"] = {"name":"Vietnamese", "keys":[[["`", "~", "`", "~"], ["\u0103", "\u0102", "1", "!"], ["\u00e2", "\u00c2", "2", "@"], ["\u00ea", "\u00ca", "3", "#"], ["\u00f4", "\u00d4", "4", "$"], ["\u0300", "\u0300", "5", "%"], ["\u0309", "\u0309", "6", "^"], ["\u0303", "\u0303", "7", "&"], ["\u0301", "\u0301", "8", "*"], ["\u0323", "\u0323", "9", "("], ["\u0111", "\u0110", "0", ")"], ["-", "_", "-", "_"], ["\u20ab", "+", "=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], 
  ["q", "Q", "q", "Q"], ["w", "W", "w", "W"], ["e", "E", "e", "E"], ["r", "R", "r", "R"], ["t", "T", "t", "T"], ["y", "Y", "y", "Y"], ["u", "U", "u", "U"], ["i", "I", "i", "I"], ["o", "O", "o", "O"], ["p", "P", "p", "P"], ["\u01b0", "\u01af", "[", "{"], ["\u01a1", "\u01a0", "]", "}"], ["\\", "|", "\\", "|"]], [["Caps", "Caps"], ["a", "A", "a", "A"], ["s", "S", "s", "S"], ["d", "D", "d", "D"], ["f", "F", "f", "F"], ["g", "G", "g", "G"], ["h", "H", "h", "H"], ["j", "J", "j", "J"], ["k", "K", "k", "K"], 
  ["l", "L", "l", "L"], [";", ":", ";", ":"], ["'", '"', "'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["z", "Z", "z", "Z"], ["x", "X", "x", "X"], ["c", "C", "c", "C"], ["v", "V", "v", "V"], ["b", "B", "b", "B"], ["n", "N", "n", "N"], ["m", "M", "m", "M"], [",", "<", ",", "<"], [".", ">", ".", ">"], ["/", "?", "/", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["vi"]};
  this.VKI_layout["\u0e44\u0e17\u0e22 Kedmanee"] = {"name":"Thai Kedmanee", "keys":[[["_", "%"], ["\u0e45", "+"], ["/", "\u0e51"], ["-", "\u0e52"], ["\u0e20", "\u0e53"], ["\u0e16", "\u0e54"], ["\u0e38", "\u0e39"], ["\u0e36", "\u0e3f"], ["\u0e04", "\u0e55"], ["\u0e15", "\u0e56"], ["\u0e08", "\u0e57"], ["\u0e02", "\u0e58"], ["\u0e0a", "\u0e59"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0e46", "\u0e50"], ["\u0e44", '"'], ["\u0e33", "\u0e0e"], ["\u0e1e", "\u0e11"], ["\u0e30", "\u0e18"], ["\u0e31", "\u0e4d"], 
  ["\u0e35", "\u0e4a"], ["\u0e23", "\u0e13"], ["\u0e19", "\u0e2f"], ["\u0e22", "\u0e0d"], ["\u0e1a", "\u0e10"], ["\u0e25", ","], ["\u0e03", "\u0e05"]], [["Caps", "Caps"], ["\u0e1f", "\u0e24"], ["\u0e2b", "\u0e06"], ["\u0e01", "\u0e0f"], ["\u0e14", "\u0e42"], ["\u0e40", "\u0e0c"], ["\u0e49", "\u0e47"], ["\u0e48", "\u0e4b"], ["\u0e32", "\u0e29"], ["\u0e2a", "\u0e28"], ["\u0e27", "\u0e0b"], ["\u0e07", "."], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0e1c", "("], ["\u0e1b", ")"], ["\u0e41", "\u0e09"], 
  ["\u0e2d", "\u0e2e"], ["\u0e34", "\u0e3a"], ["\u0e37", "\u0e4c"], ["\u0e17", "?"], ["\u0e21", "\u0e12"], ["\u0e43", "\u0e2c"], ["\u0e1d", "\u0e26"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["th"]};
  this.VKI_layout["\u0e44\u0e17\u0e22 Pattachote"] = {"name":"Thai Pattachote", "keys":[[["_", "\u0e3f"], ["=", "+"], ["\u0e52", '"'], ["\u0e53", "/"], ["\u0e54", ","], ["\u0e55", "?"], ["\u0e39", "\u0e38"], ["\u0e57", "_"], ["\u0e58", "."], ["\u0e59", "("], ["\u0e50", ")"], ["\u0e51", "-"], ["\u0e56", "%"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0e47", "\u0e4a"], ["\u0e15", "\u0e24"], ["\u0e22", "\u0e46"], ["\u0e2d", "\u0e0d"], ["\u0e23", "\u0e29"], ["\u0e48", "\u0e36"], ["\u0e14", "\u0e1d"], ["\u0e21", 
  "\u0e0b"], ["\u0e27", "\u0e16"], ["\u0e41", "\u0e12"], ["\u0e43", "\u0e2f"], ["\u0e0c", "\u0e26"], ["\uf8c7", "\u0e4d"]], [["Caps", "Caps"], ["\u0e49", "\u0e4b"], ["\u0e17", "\u0e18"], ["\u0e07", "\u0e33"], ["\u0e01", "\u0e13"], ["\u0e31", "\u0e4c"], ["\u0e35", "\u0e37"], ["\u0e32", "\u0e1c"], ["\u0e19", "\u0e0a"], ["\u0e40", "\u0e42"], ["\u0e44", "\u0e06"], ["\u0e02", "\u0e11"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0e1a", "\u0e0e"], ["\u0e1b", "\u0e0f"], ["\u0e25", "\u0e10"], ["\u0e2b", 
  "\u0e20"], ["\u0e34", "\u0e31"], ["\u0e04", "\u0e28"], ["\u0e2a", "\u0e2e"], ["\u0e30", "\u0e1f"], ["\u0e08", "\u0e09"], ["\u0e1e", "\u0e2c"], ["Shift", "Shift"]], [[" ", " "]]]};
  this.VKI_layout["\u0422\u0430\u0442\u0430\u0440\u0447\u0430"] = {"name":"Tatar", "keys":[[["\u04bb", "\u04ba", "\u0451", "\u0401"], ["1", "!"], ["2", '"', "@"], ["3", "\u2116", "#"], ["4", ";", "$"], ["5", "%"], ["6", ":"], ["7", "?", "["], ["8", "*", "]"], ["9", "(", "{"], ["0", ")", "}"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0439", "\u0419"], ["\u04e9", "\u04e8", "\u0446", "\u0426"], ["\u0443", "\u0423"], ["\u043a", "\u041a"], ["\u0435", "\u0415"], ["\u043d", "\u041d"], 
  ["\u0433", "\u0413"], ["\u0448", "\u0428"], ["\u04d9", "\u04d8", "\u0449", "\u0429"], ["\u0437", "\u0417"], ["\u0445", "\u0425"], ["\u04af", "\u04ae", "\u044a", "\u042a"], ["\\", "/"]], [["Caps", "Caps"], ["\u0444", "\u0424"], ["\u044b", "\u042b"], ["\u0432", "\u0412"], ["\u0430", "\u0410"], ["\u043f", "\u041f"], ["\u0440", "\u0420"], ["\u043e", "\u041e"], ["\u043b", "\u041b"], ["\u0434", "\u0414"], ["\u04a3", "\u04a2", "\u0436", "\u0416"], ["\u044d", "\u042d", "'"], ["Enter", "Enter"]], [["Shift", 
  "Shift"], ["\u0491", "\u0490"], ["\u044f", "\u042f"], ["\u0447", "\u0427"], ["\u0441", "\u0421"], ["\u043c", "\u041c"], ["\u0438", "\u0418"], ["\u0442", "\u0422"], ["\u0497", "\u0496", "\u044c", "\u042c"], ["\u0431", "\u0411", "<"], ["\u044e", "\u042e", ">"], [".", ","], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["tt"]};
  this.VKI_layout["T\u00fcrk\u00e7e F"] = {"name":"Turkish F", "keys":[[["+", "*", "\u00ac"], ["1", "!", "\u00b9", "\u00a1"], ["2", '"', "\u00b2"], ["3", "^", "#", "\u00b3"], ["4", "$", "\u00bc", "\u00a4"], ["5", "%", "\u00bd"], ["6", "&", "\u00be"], ["7", "'", "{"], ["8", "(", "["], ["9", ")", "]"], ["0", "=", "}"], ["/", "?", "\\", "\u00bf"], ["-", "_", "|"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["f", "F", "@"], ["g", "G"], ["\u011f", "\u011e"], ["\u0131", "I", "\u00b6", "\u00ae"], ["o", "O"], ["d", 
  "D", "\u00a5"], ["r", "R"], ["n", "N"], ["h", "H", "\u00f8", "\u00d8"], ["p", "P", "\u00a3"], ["q", "Q", "\u00a8"], ["w", "W", "~"], ["x", "X", "`"]], [["Caps", "Caps"], ["u", "U", "\u00e6", "\u00c6"], ["i", "\u0130", "\u00df", "\u00a7"], ["e", "E", "\u20ac"], ["a", "A", " ", "\u00aa"], ["\u00fc", "\u00dc"], ["t", "T"], ["k", "K"], ["m", "M"], ["l", "L"], ["y", "Y", "\u00b4"], ["\u015f", "\u015e"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "|", "\u00a6"], ["j", "J", "\u00ab", "<"], ["\u00f6", 
  "\u00d6", "\u00bb", ">"], ["v", "V", "\u00a2", "\u00a9"], ["c", "C"], ["\u00e7", "\u00c7"], ["z", "Z"], ["s", "S", "\u00b5", "\u00ba"], ["b", "B", "\u00d7"], [".", ":", "\u00f7"], [",", ";", "-"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]]};
  this.VKI_layout["T\u00fcrk\u00e7e Q"] = {"name":"Turkish Q", "keys":[[['"', "\u00e9", "<"], ["1", "!", ">"], ["2", "'", "\u00a3"], ["3", "^", "#"], ["4", "+", "$"], ["5", "%", "\u00bd"], ["6", "&"], ["7", "/", "{"], ["8", "(", "["], ["9", ")", "]"], ["0", "=", "}"], ["*", "?", "\\"], ["-", "_", "|"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "@"], ["w", "W"], ["e", "E", "\u20ac"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["\u0131", "I", "i", "\u0130"], ["o", "O"], ["p", "P"], ["\u011f", 
  "\u011e", "\u00a8"], ["\u00fc", "\u00dc", "~"], [",", ";", "`"]], [["Caps", "Caps"], ["a", "A", "\u00e6", "\u00c6"], ["s", "S", "\u00df"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["\u015f", "\u015e", "\u00b4"], ["i", "\u0130"], ["Enter", "Enter"]], [["Shift", "Shift"], ["<", ">", "|"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], ["\u00f6", "\u00d6"], ["\u00e7", "\u00c7"], [".", ":"], ["Shift", "Shift"]], [[" ", 
  " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["tr"]};
  this.VKI_layout["\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"] = {"name":"Ukrainian", "keys":[[["\u00b4", "~"], ["1", "!"], ["2", '"'], ["3", "\u2116"], ["4", ";"], ["5", "%"], ["6", ":"], ["7", "?"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0439", "\u0419"], ["\u0446", "\u0426"], ["\u0443", "\u0423"], ["\u043a", "\u041a"], ["\u0435", "\u0415"], ["\u043d", "\u041d"], ["\u0433", "\u0413"], ["\u0448", "\u0428"], ["\u0449", 
  "\u0429"], ["\u0437", "\u0417"], ["\u0445", "\u0425"], ["\u0457", "\u0407"], ["\u0491", "\u0490"]], [["Caps", "Caps"], ["\u0444", "\u0424"], ["\u0456", "\u0406"], ["\u0432", "\u0412"], ["\u0430", "\u0410"], ["\u043f", "\u041f"], ["\u0440", "\u0420"], ["\u043e", "\u041e"], ["\u043b", "\u041b"], ["\u0434", "\u0414"], ["\u0436", "\u0416"], ["\u0454", "\u0404"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u044f", "\u042f"], ["\u0447", "\u0427"], ["\u0441", "\u0421"], ["\u043c", "\u041c"], ["\u0438", 
  "\u0418"], ["\u0442", "\u0422"], ["\u044c", "\u042c"], ["\u0431", "\u0411"], ["\u044e", "\u042e"], [".", ","], ["Shift", "Shift"]], [[" ", " "]]], "lang":["uk"]};
  this.VKI_layout["United Kingdom"] = {"name":"United Kingdom", "keys":[[["`", "\u00ac", "\u00a6"], ["1", "!"], ["2", '"'], ["3", "\u00a3"], ["4", "$", "\u20ac"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E", "\u00e9", "\u00c9"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U", "\u00fa", "\u00da"], ["i", "I", "\u00ed", "\u00cd"], ["o", "O", "\u00f3", "\u00d3"], ["p", "P"], ["[", 
  "{"], ["]", "}"], ["#", "~"]], [["Caps", "Caps"], ["a", "A", "\u00e1", "\u00c1"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], [";", ":"], ["'", "@"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\\", "|"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], ["/", "?"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]], "lang":["en-gb"]};
  this.VKI_layout["\u0627\u0631\u062f\u0648"] = {"name":"Urdu", "keys":[[["`", "~"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "\u066a"], ["6", "^"], ["7", "\u06d6"], ["8", "\u066d"], ["9", ")"], ["0", "("], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0637", "\u0638"], ["\u0635", "\u0636"], ["\u06be", "\u0630"], ["\u062f", "\u0688"], ["\u0679", "\u062b"], ["\u067e", "\u0651"], ["\u062a", "\u06c3"], ["\u0628", "\u0640"], ["\u062c", "\u0686"], ["\u062d", "\u062e"], ["]", 
  "}"], ["[", "{"], ["\\", "|"]], [["Caps", "Caps"], ["\u0645", "\u0698"], ["\u0648", "\u0632"], ["\u0631", "\u0691"], ["\u0646", "\u06ba"], ["\u0644", "\u06c2"], ["\u06c1", "\u0621"], ["\u0627", "\u0622"], ["\u06a9", "\u06af"], ["\u06cc", "\u064a"], ["\u061b", ":"], ["'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0642", "\u200d"], ["\u0641", "\u200c"], ["\u06d2", "\u06d3"], ["\u0633", "\u200e"], ["\u0634", "\u0624"], ["\u063a", "\u0626"], ["\u0639", "\u200f"], ["\u060c", ">"], ["\u06d4", 
  "<"], ["/", "\u061f"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["ur"]};
  this.VKI_layout["\u0627\u0631\u062f\u0648 Phonetic"] = {"name":"Urdu Phonetic", "keys":[[["\u064d", "\u064b", "~"], ["\u06f1", "1", "!"], ["\u06f2", "2", "@"], ["\u06f3", "3", "#"], ["\u06f4", "4", "$"], ["\u06f5", "5", "\u066a"], ["\u06f6", "6", "^"], ["\u06f7", "7", "&"], ["\u06f8", "8", "*"], ["\u06f9", "9", "("], ["\u06f0", "0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0642", "\u0652"], ["\u0648", "\u0651", "\u0602"], ["\u0639", "\u0670", "\u0656"], ["\u0631", "\u0691", 
  "\u0613"], ["\u062a", "\u0679", "\u0614"], ["\u06d2", "\u064e", "\u0601"], ["\u0621", "\u0626", "\u0654"], ["\u06cc", "\u0650", "\u0611"], ["\u06c1", "\u06c3"], ["\u067e", "\u064f", "\u0657"], ["[", "{"], ["]", "}"], ["\\", "|"]], [["Caps", "Caps"], ["\u0627", "\u0622", "\ufdf2"], ["\u0633", "\u0635", "\u0610"], ["\u062f", "\u0688", "\ufdfa"], ["\u0641"], ["\u06af", "\u063a"], ["\u062d", "\u06be", "\u0612"], ["\u062c", "\u0636", "\ufdfb"], ["\u06a9", "\u062e"], ["\u0644"], ["\u061b", ":"], ["'", 
  '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u0632", "\u0630", "\u060f"], ["\u0634", "\u0698", "\u060e"], ["\u0686", "\u062b", "\u0603"], ["\u0637", "\u0638"], ["\u0628", "", "\ufdfd"], ["\u0646", "\u06ba", "\u0600"], ["\u0645", "\u0658"], ["\u060c", "", "<"], ["\u06d4", "\u066b", ">"], ["/", "\u061f"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["Alt", "Alt"]]]};
  this.VKI_layout["US Standard"] = {"name":"US Standard", "keys":[[["`", "~"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["[", "{"], ["]", "}"], ["\\", "|"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", 
  "H"], ["j", "J"], ["k", "K"], ["l", "L"], [";", ":"], ["'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], ["/", "?"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["en-us"]};
  this.VKI_layout["US International"] = {"name":"US International", "keys":[[["`", "~"], ["1", "!", "\u00a1", "\u00b9"], ["2", "@", "\u00b2"], ["3", "#", "\u00b3"], ["4", "$", "\u00a4", "\u00a3"], ["5", "%", "\u20ac"], ["6", "^", "\u00bc"], ["7", "&", "\u00bd"], ["8", "*", "\u00be"], ["9", "(", "\u2018"], ["0", ")", "\u2019"], ["-", "_", "\u00a5"], ["=", "+", "\u00d7", "\u00f7"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "\u00e4", "\u00c4"], ["w", "W", "\u00e5", "\u00c5"], ["e", "E", "\u00e9", 
  "\u00c9"], ["r", "R", "\u00ae"], ["t", "T", "\u00fe", "\u00de"], ["y", "Y", "\u00fc", "\u00dc"], ["u", "U", "\u00fa", "\u00da"], ["i", "I", "\u00ed", "\u00cd"], ["o", "O", "\u00f3", "\u00d3"], ["p", "P", "\u00f6", "\u00d6"], ["[", "{", "\u00ab"], ["]", "}", "\u00bb"], ["\\", "|", "\u00ac", "\u00a6"]], [["Caps", "Caps"], ["a", "A", "\u00e1", "\u00c1"], ["s", "S", "\u00df", "\u00a7"], ["d", "D", "\u00f0", "\u00d0"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L", "\u00f8", 
  "\u00d8"], [";", ":", "\u00b6", "\u00b0"], ["'", '"', "\u00b4", "\u00a8"], ["Enter", "Enter"]], [["Shift", "Shift"], ["z", "Z", "\u00e6", "\u00c6"], ["x", "X"], ["c", "C", "\u00a9", "\u00a2"], ["v", "V"], ["b", "B"], ["n", "N", "\u00f1", "\u00d1"], ["m", "M", "\u00b5"], [",", "<", "\u00e7", "\u00c7"], [".", ">"], ["/", "?", "\u00bf"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["Alt", "Alt"]]], "lang":["en"]};
  this.VKI_layout["\u040e\u0437\u0431\u0435\u043a\u0447\u0430"] = {"name":"Uzbek Cyrillic", "keys":[[["\u0451", "\u0401"], ["1", "!"], ["2", '"'], ["3", "\u2116"], ["4", ";"], ["5", "%"], ["6", ":"], ["7", "?"], ["8", "*"], ["9", "("], ["0", ")"], ["\u0493", "\u0492"], ["\u04b3", "\u04b2"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u0439", "\u0419"], ["\u0446", "\u0426"], ["\u0443", "\u0423"], ["\u043a", "\u041a"], ["\u0435", "\u0415"], ["\u043d", "\u041d"], ["\u0433", "\u0413"], ["\u0448", "\u0428"], 
  ["\u045e", "\u040e"], ["\u0437", "\u0417"], ["\u0445", "\u0425"], ["\u044a", "\u042a"], ["\\", "/"]], [["Caps", "Caps"], ["\u0444", "\u0424"], ["\u049b", "\u049a"], ["\u0432", "\u0412"], ["\u0430", "\u0410"], ["\u043f", "\u041f"], ["\u0440", "\u0420"], ["\u043e", "\u041e"], ["\u043b", "\u041b"], ["\u0434", "\u0414"], ["\u0436", "\u0416"], ["\u044d", "\u042d"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u044f", "\u042f"], ["\u0447", "\u0427"], ["\u0441", "\u0421"], ["\u043c", "\u041c"], ["\u0438", 
  "\u0418"], ["\u0442", "\u0422"], ["\u044c", "\u042c"], ["\u0431", "\u0411"], ["\u044e", "\u042e"], [".", ","], ["Shift", "Shift"]], [[" ", " "]]], "lang":["uz"]};
  this.VKI_layout["\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"] = {"name":"Yiddish", "keys":[[[";", "~", "\u05b0"], ["1", "!", "\u05b1"], ["2", "@", "\u05b2"], ["3", "#", "\u05b3"], ["4", "$", "\u05b4"], ["5", "%", "\u05b5"], ["6", "^", "\u05b6"], ["7", "*", "\u05b7"], ["8", "&", "\u05b8"], ["9", "(", "\u05c2"], ["0", ")", "\u05c1"], ["-", "_", "\u05b9"], ["=", "+", "\u05bc"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["/", "\u201f", "\u201f"], ["'", "\u201e", "\u201e"], ["\u05e7", "`", "`"], ["\u05e8", "\ufb2f", 
  "\ufb2f"], ["\u05d0", "\ufb2e", "\ufb2e"], ["\u05d8", "\u05f0", "\u05f0"], ["\u05d5", "\ufb35", "\ufb35"], ["\u05df", "\ufb4b", "\ufb4b"], ["\u05dd", "\ufb4e", "\ufb4e"], ["\u05e4", "\ufb44", "\ufb44"], ["[", "{", "\u05bd"], ["]", "}", "\u05bf"], ["\\", "|", "\u05bb"]], [["Caps", "Caps"], ["\u05e9", "\ufb2a", "\ufb2a"], ["\u05d3", "\ufb2b", "\ufb2b"], ["\u05d2"], ["\u05db", "\ufb3b", "\ufb3b"], ["\u05e2", "\u05f1", "\u05f1"], ["\u05d9", "\ufb1d", "\ufb1d"], ["\u05d7", "\uff1f", "\uff1f"], ["\u05dc", 
  "\u05f2", "\u05f2"], ["\u05da"], ["\u05e3", ":", "\u05c3"], [",", '"', "\u05c0"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u05d6", "\u2260", "\u2260"], ["\u05e1", "\ufb4c", "\ufb4c"], ["\u05d1", "\ufb31", "\ufb31"], ["\u05d4", "\u05be", "\u05be"], ["\u05e0", "\u2013", "\u2013"], ["\u05de", "\u2014", "\u2014"], ["\u05e6", "\ufb4a", "\ufb4a"], ["\u05ea", "<", "\u05f3"], ["\u05e5", ">", "\u05f4"], [".", "?", "\u20aa"], ["Shift", "Shift"]], [[" ", " "], ["Alt", "Alt"]]], "lang":["yi"]};
  this.VKI_layout["\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05dc\u05e2\u05d1\u05d8"] = {"name":"Yiddish (Yidish Lebt)", "keys":[[[";", "~"], ["1", "!", "\u05b2", "\u05b2"], ["2", "@", "\u05b3", "\u05b3"], ["3", "#", "\u05b1", "\u05b1"], ["4", "$", "\u05b4", "\u05b4"], ["5", "%", "\u05b5", "\u05b5"], ["6", "^", "\u05b7", "\u05b7"], ["7", "&", "\u05b8", "\u05b8"], ["8", "*", "\u05bb", "\u05bb"], ["9", ")", "\u05b6", "\u05b6"], ["0", "(", "\u05b0", "\u05b0"], ["-", "_", "\u05bf", "\u05bf"], ["=", "+", 
  "\u05b9", "\u05b9"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["/", "", "\u05f4", "\u05f4"], ["'", "", "\u05f3", "\u05f3"], ["\u05e7", "", "\u20ac"], ["\u05e8"], ["\u05d0", "", "\u05d0\u05b7", "\ufb2e"], ["\u05d8", "", "\u05d0\u05b8", "\ufb2f"], ["\u05d5", "\u05d5\u05b9", "\u05d5\u05bc", "\ufb35"], ["\u05df", "", "\u05d5\u05d5", "\u05f0"], ["\u05dd", "", "\u05bc"], ["\u05e4", "", "\u05e4\u05bc", "\ufb44"], ["]", "}", "\u201e", "\u201d"], ["[", "{", "\u201a", "\u2019"], ["\\", "|", "\u05be", "\u05be"]], 
  [["Caps", "Caps"], ["\u05e9", "\u05e9\u05c1", "\u05e9\u05c2", "\ufb2b"], ["\u05d3", "", "\u20aa"], ["\u05d2", "\u201e"], ["\u05db", "", "\u05db\u05bc", "\ufb3b"], ["\u05e2", "", "", "\ufb20"], ["\u05d9", "", "\u05d9\u05b4", "\ufb1d"], ["\u05d7", "", "\u05f2\u05b7", "\ufb1f"], ["\u05dc", "\u05dc\u05b9", "\u05d5\u05d9", "\u05f1"], ["\u05da", "", "", "\u05f2"], ["\u05e3", ":", "\u05e4\u05bf", "\ufb4e"], [",", '"', ";", "\u05b2"], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u05d6", "", "\u2013", "\u2013"], 
  ["\u05e1", "", "\u2014", "\u2014"], ["\u05d1", "\u05dc\u05b9", "\u05d1\u05bf", "\ufb4c"], ["\u05d4", "", "\u201d", "\u201c"], ["\u05e0", "", "\u059c", "\u059e"], ["\u05de", "", "\u2019", "\u2018"], ["\u05e6", "", "\u05e9\u05c1", "\ufb2a"], ["\u05ea", ">", "\u05ea\u05bc", "\ufb4a"], ["\u05e5", "<"], [".", "?", "\u2026"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["Alt", "Alt"]]], "lang":["yi"]};
  this.VKI_layout["\u4e2d\u6587\u6ce8\u97f3\u7b26\u53f7"] = {"name":"Chinese Bopomofo IME", "keys":[[["\u20ac", "~"], ["\u3105", "!"], ["\u3109", "@"], ["\u02c7", "#"], ["\u02cb", "$"], ["\u3113", "%"], ["\u02ca", "^"], ["\u02d9", "&"], ["\u311a", "*"], ["\u311e", ")"], ["\u3122", "("], ["\u3126", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u3106", "q"], ["\u310a", "w"], ["\u310d", "e"], ["\u3110", "r"], ["\u3114", "t"], ["\u3117", "y"], ["\u3127", "u"], ["\u311b", "i"], ["\u311f", "o"], 
  ["\u3123", "p"], ["[", "{"], ["]", "}"], ["\\", "|"]], [["Caps", "Caps"], ["\u3107", "a"], ["\u310b", "s"], ["\u310e", "d"], ["\u3111", "f"], ["\u3115", "g"], ["\u3118", "h"], ["\u3128", "j"], ["\u311c", "k"], ["\u3120", "l"], ["\u3124", ":"], ["'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["\u3108", "z"], ["\u310c", "x"], ["\u310f", "c"], ["\u3112", "v"], ["\u3116", "b"], ["\u3119", "n"], ["\u3129", "m"], ["\u311d", "<"], ["\u3121", ">"], ["\u3125", "?"], ["Shift", "Shift"]], [[" ", " "]]], 
  "lang":["zh-Bopo"]};
  this.VKI_layout["\u4e2d\u6587\u4ed3\u9889\u8f93\u5165\u6cd5"] = {"name":"Chinese Cangjie IME", "keys":[[["\u20ac", "~"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", ")"], ["0", "("], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["\u624b", "q"], ["\u7530", "w"], ["\u6c34", "e"], ["\u53e3", "r"], ["\u5eff", "t"], ["\u535c", "y"], ["\u5c71", "u"], ["\u6208", "i"], ["\u4eba", "o"], ["\u5fc3", "p"], ["[", "{"], ["]", "}"], ["\\", 
  "|"]], [["Caps", "Caps"], ["\u65e5", "a"], ["\u5c38", "s"], ["\u6728", "d"], ["\u706b", "f"], ["\u571f", "g"], ["\u7af9", "h"], ["\u5341", "j"], ["\u5927", "k"], ["\u4e2d", "l"], [";", ":"], ["'", '"'], ["Enter", "Enter"]], [["Shift", "Shift"], ["\uff3a", "z"], ["\u96e3", "x"], ["\u91d1", "c"], ["\u5973", "v"], ["\u6708", "b"], ["\u5f13", "n"], ["\u4e00", "m"], [",", "<"], [".", ">"], ["/", "?"], ["Shift", "Shift"]], [[" ", " "]]], "lang":["zh"]};
  this.VKI_deadkey = {};
  this.VKI_deadkey['"'] = this.VKI_deadkey["\u00a8"] = this.VKI_deadkey["\u309b"] = {"a":"\u00e4", "e":"\u00eb", "i":"\u00ef", "o":"\u00f6", "u":"\u00fc", "y":"\u00ff", "\u03b9":"\u03ca", "\u03c5":"\u03cb", "\u016b":"\u01d6", "\u00fa":"\u01d8", "\u01d4":"\u01da", "\u00f9":"\u01dc", "A":"\u00c4", "E":"\u00cb", "I":"\u00cf", "O":"\u00d6", "U":"\u00dc", "Y":"\u0178", "\u0399":"\u03aa", "\u03a5":"\u03ab", "\u016a":"\u01d5", "\u00da":"\u01d7", "\u01d3":"\u01d9", "\u00d9":"\u01db", "\u304b":"\u304c", "\u304d":"\u304e", 
  "\u304f":"\u3050", "\u3051":"\u3052", "\u3053":"\u3054", "\u305f":"\u3060", "\u3061":"\u3062", "\u3064":"\u3065", "\u3066":"\u3067", "\u3068":"\u3069", "\u3055":"\u3056", "\u3057":"\u3058", "\u3059":"\u305a", "\u305b":"\u305c", "\u305d":"\u305e", "\u306f":"\u3070", "\u3072":"\u3073", "\u3075":"\u3076", "\u3078":"\u3079", "\u307b":"\u307c", "\u30ab":"\u30ac", "\u30ad":"\u30ae", "\u30af":"\u30b0", "\u30b1":"\u30b2", "\u30b3":"\u30b4", "\u30bf":"\u30c0", "\u30c1":"\u30c2", "\u30c4":"\u30c5", "\u30c6":"\u30c7", 
  "\u30c8":"\u30c9", "\u30b5":"\u30b6", "\u30b7":"\u30b8", "\u30b9":"\u30ba", "\u30bb":"\u30bc", "\u30bd":"\u30be", "\u30cf":"\u30d0", "\u30d2":"\u30d3", "\u30d5":"\u30d6", "\u30d8":"\u30d9", "\u30db":"\u30dc"};
  this.VKI_deadkey["~"] = {"a":"\u00e3", "l":"\u0142", "n":"\u00f1", "o":"\u00f5", "A":"\u00c3", "L":"\u0141", "N":"\u00d1", "O":"\u00d5"};
  this.VKI_deadkey["^"] = {"a":"\u00e2", "e":"\u00ea", "i":"\u00ee", "o":"\u00f4", "u":"\u00fb", "w":"\u0175", "y":"\u0177", "A":"\u00c2", "E":"\u00ca", "I":"\u00ce", "O":"\u00d4", "U":"\u00db", "W":"\u0174", "Y":"\u0176"};
  this.VKI_deadkey["\u02c7"] = {"c":"\u010d", "d":"\u010f", "e":"\u011b", "s":"\u0161", "l":"\u013e", "n":"\u0148", "r":"\u0159", "t":"\u0165", "u":"\u01d4", "z":"\u017e", "\u00fc":"\u01da", "C":"\u010c", "D":"\u010e", "E":"\u011a", "S":"\u0160", "L":"\u013d", "N":"\u0147", "R":"\u0158", "T":"\u0164", "U":"\u01d3", "Z":"\u017d", "\u00dc":"\u01d9"};
  this.VKI_deadkey["\u02d8"] = {"a":"\u0103", "g":"\u011f", "A":"\u0102", "G":"\u011e"};
  this.VKI_deadkey["-"] = this.VKI_deadkey["\u00af"] = {"a":"\u0101", "e":"\u0113", "i":"\u012b", "o":"\u014d", "u":"\u016b", "y":"\u0233", "\u00fc":"\u01d6", "A":"\u0100", "E":"\u0112", "I":"\u012a", "O":"\u014c", "U":"\u016a", "Y":"\u0232", "\u00dc":"\u01d5"};
  this.VKI_deadkey["`"] = {"a":"\u00e0", "e":"\u00e8", "i":"\u00ec", "o":"\u00f2", "u":"\u00f9", "\u00fc":"\u01dc", "A":"\u00c0", "E":"\u00c8", "I":"\u00cc", "O":"\u00d2", "U":"\u00d9", "\u00dc":"\u01db"};
  this.VKI_deadkey["'"] = this.VKI_deadkey["\u00b4"] = this.VKI_deadkey["\u0384"] = {"a":"\u00e1", "e":"\u00e9", "i":"\u00ed", "o":"\u00f3", "u":"\u00fa", "y":"\u00fd", "\u03b1":"\u03ac", "\u03b5":"\u03ad", "\u03b7":"\u03ae", "\u03b9":"\u03af", "\u03bf":"\u03cc", "\u03c5":"\u03cd", "\u03c9":"\u03ce", "\u00fc":"\u01d8", "A":"\u00c1", "E":"\u00c9", "I":"\u00cd", "O":"\u00d3", "U":"\u00da", "Y":"\u00dd", "\u0391":"\u0386", "\u0395":"\u0388", "\u0397":"\u0389", "\u0399":"\u038a", "\u039f":"\u038c", "\u03a5":"\u038e", 
  "\u03a9":"\u038f", "\u00dc":"\u01d7"};
  this.VKI_deadkey["\u02dd"] = {"o":"\u0151", "u":"\u0171", "O":"\u0150", "U":"\u0170"};
  this.VKI_deadkey["\u0385"] = {"\u03b9":"\u0390", "\u03c5":"\u03b0"};
  this.VKI_deadkey["\u00b0"] = this.VKI_deadkey["\u00ba"] = {"a":"\u00e5", "u":"\u016f", "A":"\u00c5", "U":"\u016e"};
  this.VKI_deadkey["\u02db"] = {"a":"\u0106", "e":"\u0119", "i":"\u012f", "o":"\u01eb", "u":"\u0173", "y":"\u0177", "A":"\u0105", "E":"\u0118", "I":"\u012e", "O":"\u01ea", "U":"\u0172", "Y":"\u0176"};
  this.VKI_deadkey["\u02d9"] = {"c":"\u010b", "e":"\u0117", "g":"\u0121", "z":"\u017c", "C":"\u010a", "E":"\u0116", "G":"\u0120", "Z":"\u017b"};
  this.VKI_deadkey["\u00b8"] = this.VKI_deadkey["\u201a"] = {"c":"\u00e7", "s":"\u015f", "C":"\u00c7", "S":"\u015e"};
  this.VKI_deadkey[","] = {"s":this.VKI_isIElt8 ? "\u015f" : "\u0219", "t":this.VKI_isIElt8 ? "\u0163" : "\u021b", "S":this.VKI_isIElt8 ? "\u015e" : "\u0218", "T":this.VKI_isIElt8 ? "\u0162" : "\u021a"};
  this.VKI_deadkey["\u3002"] = {"\u306f":"\u3071", "\u3072":"\u3074", "\u3075":"\u3077", "\u3078":"\u307a", "\u307b":"\u307d", "\u30cf":"\u30d1", "\u30d2":"\u30d4", "\u30d5":"\u30d7", "\u30d8":"\u30da", "\u30db":"\u30dd"};
  this.VKI_symbol = {"\u00a0":"NB\nSP", "\u200b":"ZW\nSP", "\u200c":"ZW\nNJ", "\u200d":"ZW\nJ"};
  this.VKI_numpad = [[["$"], ["\u00a3"], ["\u20ac"], ["\u00a5"]], [["7"], ["8"], ["9"], ["/"]], [["4"], ["5"], ["6"], ["*"]], [["1"], ["2"], ["3"], ["-"]], [["0"], ["."], ["="], ["+"]]];
  VKI_attach = function(elem) {
    if(elem.getAttribute("VKI_attached")) {
      return false
    }
    if(self.VKI_imageURI) {
      var keybut = document.createElement("img");
      keybut.src = self.VKI_imageURI;
      keybut.alt = self.VKI_i18n["01"];
      keybut.className = "keyboardInputInitiator";
      keybut.title = self.VKI_i18n["01"];
      keybut.elem = elem;
      keybut.onclick = function(e) {
        e = e || event;
        if(e.stopPropagation) {
          e.stopPropagation()
        }else {
          e.cancelBubble = true
        }
        self.VKI_show(this.elem)
      };
      elem.parentNode.insertBefore(keybut, elem.dir == "rtl" ? elem : elem.nextSibling)
    }else {
      elem.onfocus = function() {
        if(self.VKI_target != this) {
          if(self.VKI_target) {
            self.VKI_close()
          }
          self.VKI_show(this)
        }
      };
      elem.onclick = function() {
        if(!self.VKI_target) {
          self.VKI_show(this)
        }
      }
    }
    elem.setAttribute("VKI_attached", "true");
    if(self.VKI_isIE) {
      elem.onclick = elem.onselect = elem.onkeyup = function(e) {
        if((e || event).type != "keyup" || !this.readOnly) {
          this.range = document.selection.createRange()
        }
      }
    }
    VKI_addListener(elem, "click", function(e) {
      if(self.VKI_target == this) {
        e = e || event;
        if(e.stopPropagation) {
          e.stopPropagation()
        }else {
          e.cancelBubble = true
        }
      }
      return false
    }, false);
    if(self.VKI_isMoz) {
      elem.addEventListener("blur", function() {
        this.setAttribute("_scrollTop", this.scrollTop)
      }, false)
    }
  };
  function VKI_buildKeyboardInputs() {
    var inputElems = [document.getElementsByTagName("input"), document.getElementsByTagName("textarea")];
    for(var x = 0, elem;elem = inputElems[x++];) {
      for(var y = 0, ex;ex = elem[y++];) {
        if(ex.nodeName == "TEXTAREA" || ex.type == "text" || ex.type == "password") {
          if(ex.className.indexOf("keyboardInput") > -1) {
            VKI_attach(ex)
          }
        }
      }
    }
    VKI_addListener(document.documentElement, "click", function(e) {
      self.VKI_close()
    }, false)
  }
  function VKI_mouseEvents(elem) {
    if(elem.nodeName == "TD") {
      if(!elem.click) {
        elem.click = function() {
          var evt = this.ownerDocument.createEvent("MouseEvents");
          evt.initMouseEvent("click", true, true, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
          this.dispatchEvent(evt)
        }
      }
      elem.VKI_clickless = 0;
      VKI_addListener(elem, "dblclick", function() {
        return false
      }, false)
    }
    VKI_addListener(elem, "mouseover", function() {
      if(this.nodeName == "TD" && self.VKI_clickless) {
        var _self = this;
        clearTimeout(this.VKI_clickless);
        this.VKI_clickless = setTimeout(function() {
          _self.click()
        }, self.VKI_clickless)
      }
      if(self.VKI_isIE) {
        this.className += " hover"
      }
    }, false);
    VKI_addListener(elem, "mouseout", function() {
      if(this.nodeName == "TD") {
        clearTimeout(this.VKI_clickless)
      }
      if(self.VKI_isIE) {
        this.className = this.className.replace(/ ?(hover|pressed) ?/g, "")
      }
    }, false);
    VKI_addListener(elem, "mousedown", function() {
      if(this.nodeName == "TD") {
        clearTimeout(this.VKI_clickless)
      }
      if(self.VKI_isIE) {
        this.className += " pressed"
      }
    }, false);
    VKI_addListener(elem, "mouseup", function() {
      if(this.nodeName == "TD") {
        clearTimeout(this.VKI_clickless)
      }
      if(self.VKI_isIE) {
        this.className = this.className.replace(/ ?pressed ?/g, "")
      }
    }, false)
  }
  this.VKI_keyboard = document.createElement("table");
  this.VKI_keyboard.id = "keyboardInputMaster";
  this.VKI_keyboard.dir = "ltr";
  this.VKI_keyboard.cellSpacing = "0";
  this.VKI_keyboard.reflow = function() {
    this.style.width = "50px";
    var foo = this.offsetWidth;
    this.style.width = ""
  };
  VKI_addListener(this.VKI_keyboard, "click", function(e) {
    e = e || event;
    if(e.stopPropagation) {
      e.stopPropagation()
    }else {
      e.cancelBubble = true
    }
    return false
  }, false);
  if(!this.VKI_layout[this.VKI_kt]) {
    return alert('No keyboard named "' + this.VKI_kt + '"')
  }
  this.VKI_langCode = {};
  var thead = document.createElement("thead");
  var tr = document.createElement("tr");
  var th = document.createElement("th");
  th.colSpan = "2";
  var kbSelect = document.createElement("div");
  kbSelect.title = this.VKI_i18n["02"];
  VKI_addListener(kbSelect, "click", function() {
    var ol = this.getElementsByTagName("ol")[0];
    if(!ol.style.display) {
      ol.style.display = "block";
      var li = ol.getElementsByTagName("li");
      for(var x = 0, scr = 0;x < li.length;x++) {
        if(VKI_kt == li[x].firstChild.nodeValue) {
          li[x].className = "selected";
          scr = li[x].offsetTop - li[x].offsetHeight * 2
        }else {
          li[x].className = ""
        }
      }
      setTimeout(function() {
        ol.scrollTop = scr
      }, 0)
    }else {
      ol.style.display = ""
    }
  }, false);
  kbSelect.appendChild(document.createTextNode(this.VKI_kt));
  kbSelect.appendChild(document.createTextNode(this.VKI_isIElt8 ? " \u2193" : " \u25be"));
  kbSelect.langCount = 0;
  var ol = document.createElement("ol");
  for(ktype in this.VKI_layout) {
    if(typeof this.VKI_layout[ktype] == "object") {
      if(!this.VKI_layout[ktype].lang) {
        this.VKI_layout[ktype].lang = []
      }
      for(var x = 0;x < this.VKI_layout[ktype].lang.length;x++) {
        this.VKI_langCode[this.VKI_layout[ktype].lang[x].toLowerCase().replace(/-/g, "_")] = ktype
      }
      var li = document.createElement("li");
      li.title = this.VKI_layout[ktype].name;
      VKI_addListener(li, "click", function(e) {
        e = e || event;
        if(e.stopPropagation) {
          e.stopPropagation()
        }else {
          e.cancelBubble = true
        }
        this.parentNode.style.display = "";
        self.VKI_kts = self.VKI_kt = kbSelect.firstChild.nodeValue = this.firstChild.nodeValue;
        self.VKI_buildKeys();
        self.VKI_position(true)
      }, false);
      VKI_mouseEvents(li);
      li.appendChild(document.createTextNode(ktype));
      ol.appendChild(li);
      kbSelect.langCount++
    }
  }
  kbSelect.appendChild(ol);
  if(kbSelect.langCount > 1) {
    th.appendChild(kbSelect)
  }
  this.VKI_langCode.index = [];
  for(prop in this.VKI_langCode) {
    if(prop != "index" && typeof this.VKI_langCode[prop] == "string") {
      this.VKI_langCode.index.push(prop)
    }
  }
  this.VKI_langCode.index.sort();
  this.VKI_langCode.index.reverse();
  if(this.VKI_numberPad) {
    var span = document.createElement("span");
    span.appendChild(document.createTextNode("#"));
    span.title = this.VKI_i18n["00"];
    VKI_addListener(span, "click", function() {
      kbNumpad.style.display = !kbNumpad.style.display ? "none" : "";
      self.VKI_position(true)
    }, false);
    VKI_mouseEvents(span);
    th.appendChild(span)
  }
  this.VKI_kbsize = function(e) {
    self.VKI_size = Math.min(5, Math.max(1, self.VKI_size));
    self.VKI_keyboard.className = self.VKI_keyboard.className.replace(/ ?keyboardInputSize\d ?/, "");
    if(self.VKI_size != 2) {
      self.VKI_keyboard.className += " keyboardInputSize" + self.VKI_size
    }
    self.VKI_position(true);
    if(self.VKI_isOpera) {
      self.VKI_keyboard.reflow()
    }
  };
  if(this.VKI_sizeAdj) {
    var small = document.createElement("small");
    small.title = this.VKI_i18n["10"];
    VKI_addListener(small, "click", function() {
      --self.VKI_size;
      self.VKI_kbsize()
    }, false);
    VKI_mouseEvents(small);
    small.appendChild(document.createTextNode(this.VKI_isIElt8 ? "\u2193" : "\u21d3"));
    th.appendChild(small);
    var big = document.createElement("big");
    big.title = this.VKI_i18n["11"];
    VKI_addListener(big, "click", function() {
      ++self.VKI_size;
      self.VKI_kbsize()
    }, false);
    VKI_mouseEvents(big);
    big.appendChild(document.createTextNode(this.VKI_isIElt8 ? "\u2191" : "\u21d1"));
    th.appendChild(big)
  }
  var span = document.createElement("span");
  span.appendChild(document.createTextNode(this.VKI_i18n["07"]));
  span.title = this.VKI_i18n["08"];
  VKI_addListener(span, "click", function() {
    self.VKI_target.value = "";
    self.VKI_target.focus();
    return false
  }, false);
  VKI_mouseEvents(span);
  th.appendChild(span);
  var strong = document.createElement("strong");
  strong.appendChild(document.createTextNode("X"));
  strong.title = this.VKI_i18n["06"];
  VKI_addListener(strong, "click", function() {
    self.VKI_close()
  }, false);
  VKI_mouseEvents(strong);
  th.appendChild(strong);
  tr.appendChild(th);
  thead.appendChild(tr);
  this.VKI_keyboard.appendChild(thead);
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  var div = document.createElement("div");
  if(this.VKI_deadBox) {
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.title = this.VKI_i18n["03"] + ": " + (this.VKI_deadkeysOn ? this.VKI_i18n["04"] : this.VKI_i18n["05"]);
    checkbox.defaultChecked = this.VKI_deadkeysOn;
    VKI_addListener(checkbox, "click", function() {
      this.title = self.VKI_i18n["03"] + ": " + (this.checked ? self.VKI_i18n["04"] : self.VKI_i18n["05"]);
      self.VKI_modify("");
      return true
    }, false);
    label.appendChild(checkbox);
    checkbox.checked = this.VKI_deadkeysOn;
    div.appendChild(label);
    this.VKI_deadkeysOn = checkbox
  }else {
    this.VKI_deadkeysOn.checked = this.VKI_deadkeysOn
  }
  if(this.VKI_showVersion) {
    var vr = document.createElement("var");
    vr.title = this.VKI_i18n["09"] + " " + this.VKI_version;
    vr.appendChild(document.createTextNode("v" + this.VKI_version));
    div.appendChild(vr)
  }
  td.appendChild(div);
  tr.appendChild(td);
  var kbNumpad = document.createElement("td");
  kbNumpad.id = "keyboardInputNumpad";
  if(!this.VKI_numberPadOn) {
    kbNumpad.style.display = "none"
  }
  var ntable = document.createElement("table");
  ntable.cellSpacing = "0";
  var ntbody = document.createElement("tbody");
  for(var x = 0;x < this.VKI_numpad.length;x++) {
    var ntr = document.createElement("tr");
    for(var y = 0;y < this.VKI_numpad[x].length;y++) {
      var ntd = document.createElement("td");
      VKI_addListener(ntd, "click", VKI_keyClick, false);
      VKI_mouseEvents(ntd);
      ntd.appendChild(document.createTextNode(this.VKI_numpad[x][y]));
      ntr.appendChild(ntd)
    }
    ntbody.appendChild(ntr)
  }
  ntable.appendChild(ntbody);
  kbNumpad.appendChild(ntable);
  tr.appendChild(kbNumpad);
  tbody.appendChild(tr);
  this.VKI_keyboard.appendChild(tbody);
  if(this.VKI_isIE6) {
    this.VKI_iframe = document.createElement("iframe");
    this.VKI_iframe.style.position = "absolute";
    this.VKI_iframe.style.border = "0px none";
    this.VKI_iframe.style.filter = "mask()";
    this.VKI_iframe.style.zIndex = "999999";
    this.VKI_iframe.src = this.VKI_imageURI
  }
  function VKI_keyClick() {
    var done = false, character = "\u00a0";
    if(this.firstChild.nodeName.toLowerCase() != "small") {
      if((character = this.firstChild.nodeValue) == "\u00a0") {
        return false
      }
    }else {
      character = this.firstChild.getAttribute("char")
    }
    if(self.VKI_deadkeysOn.checked && self.VKI_dead) {
      if(self.VKI_dead != character) {
        if(character != " ") {
          if(self.VKI_deadkey[self.VKI_dead][character]) {
            self.VKI_insert(self.VKI_deadkey[self.VKI_dead][character]);
            done = true
          }
        }else {
          self.VKI_insert(self.VKI_dead);
          done = true
        }
      }else {
        done = true
      }
    }
    self.VKI_dead = false;
    if(!done) {
      if(self.VKI_deadkeysOn.checked && self.VKI_deadkey[character]) {
        self.VKI_dead = character;
        this.className += " dead";
        if(self.VKI_shift) {
          self.VKI_modify("Shift")
        }
        if(self.VKI_altgr) {
          self.VKI_modify("AltGr")
        }
      }else {
        self.VKI_insert(character)
      }
    }
    self.VKI_modify("");
    return false
  }
  this.VKI_buildKeys = function() {
    this.VKI_shift = this.VKI_shiftlock = this.VKI_altgr = this.VKI_altgrlock = this.VKI_dead = false;
    var container = this.VKI_keyboard.tBodies[0].getElementsByTagName("div")[0];
    var tables = container.getElementsByTagName("table");
    for(var x = tables.length - 1;x >= 0;x--) {
      container.removeChild(tables[x])
    }
    for(var x = 0, hasDeadKey = false, lyt;lyt = this.VKI_layout[this.VKI_kt].keys[x++];) {
      var table = document.createElement("table");
      table.cellSpacing = "0";
      if(lyt.length <= this.VKI_keyCenter) {
        table.className = "keyboardInputCenter"
      }
      var tbody = document.createElement("tbody");
      var tr = document.createElement("tr");
      for(var y = 0, lkey;lkey = lyt[y++];) {
        var td = document.createElement("td");
        if(this.VKI_symbol[lkey[0]]) {
          var text = this.VKI_symbol[lkey[0]].split("\n");
          var small = document.createElement("small");
          small.setAttribute("char", lkey[0]);
          for(var z = 0;z < text.length;z++) {
            if(z) {
              small.appendChild(document.createElement("br"))
            }
            small.appendChild(document.createTextNode(text[z]))
          }
          td.appendChild(small)
        }else {
          td.appendChild(document.createTextNode(lkey[0] || "\u00a0"))
        }
        var className = [];
        if(this.VKI_deadkeysOn.checked) {
          for(key in this.VKI_deadkey) {
            if(key === lkey[0]) {
              className.push("deadkey");
              break
            }
          }
        }
        if(lyt.length > this.VKI_keyCenter && y == lyt.length) {
          className.push("last")
        }
        if(lkey[0] == " " || lkey[1] == " ") {
          className.push("space")
        }
        td.className = className.join(" ");
        switch(lkey[1]) {
          case "Caps":
          ;
          case "Shift":
          ;
          case "Alt":
          ;
          case "AltGr":
          ;
          case "AltLk":
            VKI_addListener(td, "click", function(type) {
              return function() {
                self.VKI_modify(type);
                return false
              }
            }(lkey[1]), false);
            break;
          case "Tab":
            VKI_addListener(td, "click", function() {
              if(self.VKI_activeTab) {
                if(self.VKI_target.form) {
                  var target = self.VKI_target, elems = target.form.elements;
                  self.VKI_close();
                  for(var z = 0, me = false, j = -1;z < elems.length;z++) {
                    if(j == -1 && elems[z].getAttribute("VKI_attached")) {
                      j = z
                    }
                    if(me) {
                      if(self.VKI_activeTab == 1 && elems[z]) {
                        break
                      }
                      if(elems[z].getAttribute("VKI_attached")) {
                        break
                      }
                    }else {
                      if(elems[z] == target) {
                        me = true
                      }
                    }
                  }
                  if(z == elems.length) {
                    z = Math.max(j, 0)
                  }
                  if(elems[z].getAttribute("VKI_attached")) {
                    self.VKI_show(elems[z])
                  }else {
                    elems[z].focus()
                  }
                }else {
                  self.VKI_target.focus()
                }
              }else {
                self.VKI_insert("\t")
              }
              return false
            }, false);
            break;
          case "Bksp":
            VKI_addListener(td, "click", function() {
              self.VKI_target.focus();
              if(self.VKI_target.setSelectionRange && !self.VKI_target.readOnly) {
                var rng = [self.VKI_target.selectionStart, self.VKI_target.selectionEnd];
                if(rng[0] < rng[1]) {
                  rng[0]++
                }
                self.VKI_target.value = self.VKI_target.value.substr(0, rng[0] - 1) + self.VKI_target.value.substr(rng[1]);
                self.VKI_target.setSelectionRange(rng[0] - 1, rng[0] - 1)
              }else {
                if(self.VKI_target.createTextRange && !self.VKI_target.readOnly) {
                  try {
                    self.VKI_target.range.select()
                  }catch(e) {
                    self.VKI_target.range = document.selection.createRange()
                  }
                  if(!self.VKI_target.range.text.length) {
                    self.VKI_target.range.moveStart("character", -1)
                  }
                  self.VKI_target.range.text = ""
                }else {
                  self.VKI_target.value = self.VKI_target.value.substr(0, self.VKI_target.value.length - 1)
                }
              }
              if(self.VKI_shift) {
                self.VKI_modify("Shift")
              }
              if(self.VKI_altgr) {
                self.VKI_modify("AltGr")
              }
              self.VKI_target.focus();
              return true
            }, false);
            break;
          case "Enter":
            VKI_addListener(td, "click", function() {
              if(self.VKI_target.nodeName != "TEXTAREA") {
                if(self.VKI_enterSubmit && self.VKI_target.form) {
                  for(var z = 0, subm = false;z < self.VKI_target.form.elements.length;z++) {
                    if(self.VKI_target.form.elements[z].type == "submit") {
                      subm = true
                    }
                  }
                  if(!subm) {
                    self.VKI_target.form.submit()
                  }
                }
                self.VKI_close()
              }else {
                self.VKI_insert("\n")
              }
              return true
            }, false);
            break;
          default:
            VKI_addListener(td, "click", VKI_keyClick, false)
        }
        VKI_mouseEvents(td);
        tr.appendChild(td);
        for(var z = 0;z < 4;z++) {
          if(this.VKI_deadkey[lkey[z] = lkey[z] || ""]) {
            hasDeadKey = true
          }
        }
      }
      tbody.appendChild(tr);
      table.appendChild(tbody);
      container.appendChild(table)
    }
    if(this.VKI_deadBox) {
      this.VKI_deadkeysOn.style.display = hasDeadKey ? "inline" : "none"
    }
    if(this.VKI_isIE6) {
      this.VKI_iframe.style.width = this.VKI_keyboard.offsetWidth + "px";
      this.VKI_iframe.style.height = this.VKI_keyboard.offsetHeight + "px"
    }
  };
  this.VKI_buildKeys();
  VKI_addListener(this.VKI_keyboard, "selectstart", function() {
    return false
  }, false);
  this.VKI_keyboard.unselectable = "on";
  if(this.VKI_isOpera) {
    VKI_addListener(this.VKI_keyboard, "mousedown", function() {
      return false
    }, false)
  }
  this.VKI_modify = function(type) {
    switch(type) {
      case "Alt":
      ;
      case "AltGr":
        this.VKI_altgr = !this.VKI_altgr;
        break;
      case "AltLk":
        this.VKI_altgr = 0;
        this.VKI_altgrlock = !this.VKI_altgrlock;
        break;
      case "Caps":
        this.VKI_shift = 0;
        this.VKI_shiftlock = !this.VKI_shiftlock;
        break;
      case "Shift":
        this.VKI_shift = !this.VKI_shift;
        break
    }
    var vchar = 0;
    if(!this.VKI_shift != !this.VKI_shiftlock) {
      vchar += 1
    }
    if(!this.VKI_altgr != !this.VKI_altgrlock) {
      vchar += 2
    }
    var tables = this.VKI_keyboard.tBodies[0].getElementsByTagName("div")[0].getElementsByTagName("table");
    for(var x = 0;x < tables.length;x++) {
      var tds = tables[x].getElementsByTagName("td");
      for(var y = 0;y < tds.length;y++) {
        var className = [], lkey = this.VKI_layout[this.VKI_kt].keys[x][y];
        switch(lkey[1]) {
          case "Alt":
          ;
          case "AltGr":
            if(this.VKI_altgr) {
              className.push("pressed")
            }
            break;
          case "AltLk":
            if(this.VKI_altgrlock) {
              className.push("pressed")
            }
            break;
          case "Shift":
            if(this.VKI_shift) {
              className.push("pressed")
            }
            break;
          case "Caps":
            if(this.VKI_shiftlock) {
              className.push("pressed")
            }
            break;
          case "Tab":
          ;
          case "Enter":
          ;
          case "Bksp":
            break;
          default:
            if(type) {
              tds[y].removeChild(tds[y].firstChild);
              if(this.VKI_symbol[lkey[vchar]]) {
                var text = this.VKI_symbol[lkey[vchar]].split("\n");
                var small = document.createElement("small");
                small.setAttribute("char", lkey[vchar]);
                for(var z = 0;z < text.length;z++) {
                  if(z) {
                    small.appendChild(document.createElement("br"))
                  }
                  small.appendChild(document.createTextNode(text[z]))
                }
                tds[y].appendChild(small)
              }else {
                tds[y].appendChild(document.createTextNode(lkey[vchar] || "\u00a0"))
              }
            }
            if(this.VKI_deadkeysOn.checked) {
              var character = tds[y].firstChild.nodeValue || tds[y].firstChild.className;
              if(this.VKI_dead) {
                if(character == this.VKI_dead) {
                  className.push("pressed")
                }
                if(this.VKI_deadkey[this.VKI_dead][character]) {
                  className.push("target")
                }
              }
              if(this.VKI_deadkey[character]) {
                className.push("deadkey")
              }
            }
        }
        if(y == tds.length - 1 && tds.length > this.VKI_keyCenter) {
          className.push("last")
        }
        if(lkey[0] == " " || lkey[1] == " ") {
          className.push("space")
        }
        tds[y].className = className.join(" ")
      }
    }
  };
  this.VKI_insert = function(text) {
    this.VKI_target.focus();
    if(this.VKI_target.maxLength) {
      this.VKI_target.maxlength = this.VKI_target.maxLength
    }
    if(typeof this.VKI_target.maxlength == "undefined" || this.VKI_target.maxlength < 0 || this.VKI_target.value.length < this.VKI_target.maxlength) {
      if(this.VKI_target.setSelectionRange && !this.VKI_target.readOnly && !this.VKI_isIE) {
        var rng = [this.VKI_target.selectionStart, this.VKI_target.selectionEnd];
        this.VKI_target.value = this.VKI_target.value.substr(0, rng[0]) + text + this.VKI_target.value.substr(rng[1]);
        if(text == "\n" && this.VKI_isOpera) {
          rng[0]++
        }
        this.VKI_target.setSelectionRange(rng[0] + text.length, rng[0] + text.length)
      }else {
        if(this.VKI_target.createTextRange && !this.VKI_target.readOnly) {
          try {
            this.VKI_target.range.select()
          }catch(e) {
            this.VKI_target.range = document.selection.createRange()
          }
          this.VKI_target.range.text = text;
          this.VKI_target.range.collapse(true);
          this.VKI_target.range.select()
        }else {
          this.VKI_target.value += text
        }
      }
      if(this.VKI_shift) {
        this.VKI_modify("Shift")
      }
      if(this.VKI_altgr) {
        this.VKI_modify("AltGr")
      }
      this.VKI_target.focus()
    }else {
      if(this.VKI_target.createTextRange && this.VKI_target.range) {
        this.VKI_target.range.select()
      }
    }
  };
  this.VKI_show = function(elem) {
    if(!this.VKI_target) {
      this.VKI_target = elem;
      if(this.VKI_langAdapt && this.VKI_target.lang) {
        var chg = false, sub = [], lang = this.VKI_target.lang.toLowerCase().replace(/-/g, "_");
        for(var x = 0, chg = false;!chg && x < this.VKI_langCode.index.length;x++) {
          if(lang.indexOf(this.VKI_langCode.index[x]) == 0) {
            chg = kbSelect.firstChild.nodeValue = this.VKI_kt = this.VKI_langCode[this.VKI_langCode.index[x]]
          }
        }
        if(chg) {
          this.VKI_buildKeys()
        }
      }
      if(this.VKI_isIE) {
        if(!this.VKI_target.range) {
          this.VKI_target.range = this.VKI_target.createTextRange();
          this.VKI_target.range.moveStart("character", this.VKI_target.value.length)
        }
        this.VKI_target.range.select()
      }
      try {
        this.VKI_keyboard.parentNode.removeChild(this.VKI_keyboard)
      }catch(e) {
      }
      if(this.VKI_clearPasswords && this.VKI_target.type == "password") {
        this.VKI_target.value = ""
      }
      var elem = this.VKI_target;
      this.VKI_target.keyboardPosition = "absolute";
      do {
        if(VKI_getStyle(elem, "position") == "fixed") {
          this.VKI_target.keyboardPosition = "fixed";
          break
        }
      }while(elem = elem.offsetParent);
      if(this.VKI_isIE6) {
        document.body.appendChild(this.VKI_iframe)
      }
      document.body.appendChild(this.VKI_keyboard);
      this.VKI_keyboard.style.position = this.VKI_target.keyboardPosition;
      if(this.VKI_isOpera) {
        this.VKI_keyboard.reflow()
      }
      this.VKI_position(true);
      if(self.VKI_isMoz || self.VKI_isWebKit) {
        this.VKI_position(true)
      }
      this.VKI_target.blur();
      this.VKI_target.focus()
    }else {
      this.VKI_close()
    }
  };
  this.VKI_position = function(force) {
    if(self.VKI_target) {
      var kPos = VKI_findPos(self.VKI_keyboard), wDim = VKI_innerDimensions(), sDis = VKI_scrollDist();
      var place = false, fudge = self.VKI_target.offsetHeight + 3;
      if(force !== true) {
        if(kPos[1] + self.VKI_keyboard.offsetHeight - sDis[1] - wDim[1] > 0) {
          place = true;
          fudge = -self.VKI_keyboard.offsetHeight - 3
        }else {
          if(kPos[1] - sDis[1] < 0) {
            place = true
          }
        }
      }
      if(place || force === true) {
        var iPos = VKI_findPos(self.VKI_target), scr = self.VKI_target;
        while(scr = scr.parentNode) {
          if(scr == document.body) {
            break
          }
          if(scr.scrollHeight > scr.offsetHeight || scr.scrollWidth > scr.offsetWidth) {
            if(!scr.getAttribute("VKI_scrollListener")) {
              scr.setAttribute("VKI_scrollListener", true);
              VKI_addListener(scr, "scroll", function() {
                self.VKI_position(true)
              }, false)
            }
            var pPos = VKI_findPos(scr), oTop = iPos[1] - pPos[1], oLeft = iPos[0] - pPos[0];
            var top = oTop + self.VKI_target.offsetHeight;
            var left = oLeft + self.VKI_target.offsetWidth;
            var bottom = scr.offsetHeight - oTop - self.VKI_target.offsetHeight;
            var right = scr.offsetWidth - oLeft - self.VKI_target.offsetWidth;
            self.VKI_keyboard.style.display = top < 0 || left < 0 || bottom < 0 || right < 0 ? "none" : "";
            if(self.VKI_isIE6) {
              self.VKI_iframe.style.display = top < 0 || left < 0 || bottom < 0 || right < 0 ? "none" : ""
            }
          }
        }
        self.VKI_keyboard.style.top = iPos[1] - (self.VKI_target.keyboardPosition == "fixed" && !self.VKI_isIE && !self.VKI_isMoz ? sDis[1] : 0) + fudge + "px";
        self.VKI_keyboard.style.left = Math.max(10, Math.min(wDim[0] - self.VKI_keyboard.offsetWidth - 25, iPos[0])) + "px";
        if(self.VKI_isIE6) {
          self.VKI_iframe.style.width = self.VKI_keyboard.offsetWidth + "px";
          self.VKI_iframe.style.height = self.VKI_keyboard.offsetHeight + "px";
          self.VKI_iframe.style.top = self.VKI_keyboard.style.top;
          self.VKI_iframe.style.left = self.VKI_keyboard.style.left
        }
      }
      if(force === true) {
        self.VKI_position()
      }
    }
  };
  this.VKI_close = VKI_close = function() {
    if(this.VKI_target) {
      try {
        this.VKI_keyboard.parentNode.removeChild(this.VKI_keyboard);
        if(this.VKI_isIE6) {
          this.VKI_iframe.parentNode.removeChild(this.VKI_iframe)
        }
      }catch(e) {
      }
      if(this.VKI_kt != this.VKI_kts) {
        kbSelect.firstChild.nodeValue = this.VKI_kt = this.VKI_kts;
        this.VKI_buildKeys()
      }
      kbSelect.getElementsByTagName("ol")[0].style.display = "";
      this.VKI_target.focus();
      if(this.VKI_isIE) {
        setTimeout(function() {
          self.VKI_target = false
        }, 0)
      }else {
        this.VKI_target = false
      }
    }
  };
  function VKI_addListener(elem, type, func, cap) {
    if(elem.addEventListener) {
      elem.addEventListener(type, function(e) {
        func.call(elem, e)
      }, cap)
    }else {
      if(elem.attachEvent) {
        elem.attachEvent("on" + type, function() {
          func.call(elem)
        })
      }
    }
  }
  function VKI_findPos(obj) {
    var curleft = curtop = 0, scr = obj;
    while((scr = scr.parentNode) && scr != document.body) {
      curleft -= scr.scrollLeft || 0;
      curtop -= scr.scrollTop || 0
    }
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop
    }while(obj = obj.offsetParent);
    return[curleft, curtop]
  }
  function VKI_innerDimensions() {
    if(self.innerHeight) {
      return[self.innerWidth, self.innerHeight]
    }else {
      if(document.documentElement && document.documentElement.clientHeight) {
        return[document.documentElement.clientWidth, document.documentElement.clientHeight]
      }else {
        if(document.body) {
          return[document.body.clientWidth, document.body.clientHeight]
        }
      }
    }
    return[0, 0]
  }
  function VKI_scrollDist() {
    var html = document.getElementsByTagName("html")[0];
    if(html.scrollTop && document.documentElement.scrollTop) {
      return[html.scrollLeft, html.scrollTop]
    }else {
      if(html.scrollTop || document.documentElement.scrollTop) {
        return[html.scrollLeft + document.documentElement.scrollLeft, html.scrollTop + document.documentElement.scrollTop]
      }else {
        if(document.body.scrollTop) {
          return[document.body.scrollLeft, document.body.scrollTop]
        }
      }
    }
    return[0, 0]
  }
  function VKI_getStyle(obj, styleProp) {
    if(obj.currentStyle) {
      var y = obj.currentStyle[styleProp]
    }else {
      if(window.getComputedStyle) {
        var y = window.getComputedStyle(obj, null)[styleProp]
      }
    }
    return y
  }
  VKI_addListener(window, "resize", this.VKI_position, false);
  VKI_addListener(window, "scroll", this.VKI_position, false);
  this.VKI_kbsize();
  VKI_addListener(window, "load", VKI_buildKeyboardInputs, false)
})();
document.createElement("tr8n");
document.createElement("tml");
var Tr8n = Tr8n || {element:function(element_id) {
  if(typeof element_id == "string") {
    return document.getElementById(element_id)
  }
  return element_id
}, value:function(element_id) {
  return Tr8n.element(element_id).value
}, postMessage:function(msg, origin) {
  if(top.Tr8n) {
    top.Tr8n.onMessage(msg)
  }else {
    if(window.postMessage) {
      window.postMessage(msg, origin)
    }else {
      alert("Failed to deliver a tr8n message: " + msg + " to origin: " + origin)
    }
  }
}, onMessage:function(event) {
  var msg = "";
  if(typeof event == "string") {
    msg = event
  }else {
    msg = event.data
  }
  var elements = msg.split(":");
  if(elements[0] != "tr8n") {
    return
  }
  if(elements[1] == "reload") {
    window.location.reload();
    return
  }
  if(elements[1] == "translation") {
    if(elements[2] == "report") {
      tr8nTranslator.hide();
      tr8nLightbox.show("/tr8n/translator/lb_report?translation_id=" + elements[3], {width:600, height:360});
      return
    }
  }
  if(elements[1] == "language_case_map") {
    if(elements[2] == "report") {
      tr8nTranslator.hide();
      tr8nLightbox.show("/tr8n/translator/lb_report?language_case_map_id=" + elements[3], {width:600, height:360});
      return
    }
  }
  if(elements[1] == "lightbox") {
    if(elements[2] == "resize") {
      tr8nLightbox.resize(elements[3]);
      return
    }
    if(elements[2] == "hide") {
      tr8nLightbox.hide();
      return
    }
  }
  if(elements[1] == "translator") {
    if(elements[2] == "resize") {
      tr8nTranslator.resize(elements[3]);
      return
    }
    if(elements[2] == "hide") {
      tr8nTranslator.hide();
      return
    }
  }
  alert("Unknown message: " + msg)
}};
Tr8n.Utils = {hideFlash:function() {
  var embeds = document.getElementsByTagName("embed");
  for(i = 0;i < embeds.length;i++) {
    embeds[i].style.visibility = "hidden"
  }
}, showFlash:function() {
  var embeds = document.getElementsByTagName("embed");
  for(i = 0;i < embeds.length;i++) {
    embeds[i].style.visibility = "visible"
  }
}, isOpera:function() {
  return/Opera/.test(navigator.userAgent)
}, addEvent:function(elm, evType, fn, useCapture) {
  useCapture = useCapture || false;
  if(elm.addEventListener) {
    elm.addEventListener(evType, fn, useCapture);
    return true
  }else {
    if(elm.attachEvent) {
      var r = elm.attachEvent("on" + evType, fn);
      return r
    }else {
      elm["on" + evType] = fn
    }
  }
}, toQueryParams:function(obj) {
  if(typeof obj == "undefined" || obj == null) {
    return""
  }
  if(typeof obj == "string") {
    return obj
  }
  var qs = [];
  for(p in obj) {
    qs.push(p + "=" + encodeURIComponent(obj[p]))
  }
  return qs.join("&")
}, serializeForm:function(form) {
  var els = Tr8n.element(form).elements;
  var form_obj = {};
  for(i = 0;i < els.length;i++) {
    if(els[i].type == "checkbox" && !els[i].checked) {
      continue
    }
    form_obj[els[i].name] = els[i].value
  }
  return form_obj
}, indexOf:function(array, item, i) {
  i || (i = 0);
  var length = array.length;
  if(i < 0) {
    i = length + i
  }
  for(;i < length;i++) {
    if(array[i] === item) {
      return i
    }
  }
  return-1
}, replaceAll:function(label, key, value) {
  while(label.indexOf(key) != -1) {
    label = label.replace(key, value)
  }
  return label
}, trim:function(string) {
  return string.replace(/^\s+|\s+$/g, "")
}, ltrim:function(string) {
  return string.replace(/^\s+/, "")
}, rtrim:function(string) {
  return string.replace(/\s+$/, "")
}, getRequest:function() {
  var factories = [function() {
    return new ActiveXObject("Msxml2.XMLHTTP")
  }, function() {
    return new XMLHttpRequest
  }, function() {
    return new ActiveXObject("Microsoft.XMLHTTP")
  }];
  for(var i = 0;i < factories.length;i++) {
    try {
      var request = factories[i]();
      if(request != null) {
        return request
      }
    }catch(e) {
      continue
    }
  }
}, getMetaAttributes:function() {
  var meta_hash = {};
  var meta = document.getElementsByTagName("meta");
  for(var i = 0;i < meta.length;i++) {
    var name = meta[i].getAttribute("name");
    var content = meta[i].getAttribute("content");
    if(!name || !content) {
      continue
    }
    meta_hash[name] = content
  }
  return meta_hash
}, ajax:function(url, options) {
  options = options || {};
  options.parameters = options.parameters || {};
  var meta = Tr8n.Utils.getMetaAttributes();
  if(meta["csrf-param"] && meta["csrf-token"]) {
    options.parameters[meta["csrf-param"]] = meta["csrf-token"]
  }
  options.parameters = Tr8n.Utils.toQueryParams(options.parameters);
  options.method = options.method || "get";
  var self = this;
  if(options.method == "get" && options.parameters != "") {
    url = url + (url.indexOf("?") == -1 ? "?" : "&") + options.parameters
  }
  var request = this.getRequest();
  request.onreadystatechange = function() {
    if(request.readyState == 4) {
      if(request.status == 200) {
        if(options.onSuccess) {
          options.onSuccess(request)
        }
        if(options.onComplete) {
          options.onComplete(request)
        }
        if(options.evalScripts) {
          self.evalScripts(request.responseText)
        }
      }else {
        if(options.onFailure) {
          options.onFailure(request)
        }
        if(options.onComplete) {
          options.onComplete(request)
        }
      }
    }
  };
  request.open(options.method, url, true);
  request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.setRequestHeader("Accept", "text/javascript, text/html, application/xml, text/xml, */*");
  request.send(options.parameters)
}, update:function(element_id, url, options) {
  options.onSuccess = function(response) {
    Tr8n.element(element_id).innerHTML = response.responseText
  };
  Tr8n.Utils.ajax(url, options)
}, evalScripts:function(html) {
  var script_re = "<script[^>]*>([\\S\\s]*?)<\/script>";
  var matchAll = new RegExp(script_re, "img");
  var matchOne = new RegExp(script_re, "im");
  var matches = html.match(matchAll) || [];
  for(var i = 0, l = matches.length;i < l;i++) {
    var script = (matches[i].match(matchOne) || ["", ""])[1];
    eval(script)
  }
}, hasClassName:function(el, cls) {
  var exp = new RegExp("(^|\\s)" + cls + "($|\\s)");
  return el.className && exp.test(el.className) ? true : false
}, findElement:function(e, selector, el) {
  var event = e || window.event;
  var target = el || event.target || event.srcElement;
  if(target == document.body) {
    return null
  }
  var condition = selector.match(/^\./) ? this.hasClassName(target, selector.replace(/^\./, "")) : target.tagName.toLowerCase() == selector.toLowerCase();
  if(condition) {
    return target
  }else {
    return this.findElement(e, selector, target.parentNode)
  }
}, cumulativeOffset:function(element) {
  var valueT = 0, valueL = 0;
  do {
    valueT += element.offsetTop || 0;
    valueL += element.offsetLeft || 0;
    element = element.offsetParent
  }while(element);
  return[valueL, valueT]
}, elementRect:function(element) {
  var valueT = 0, valueL = 0, el = element;
  do {
    valueT += el.offsetTop || 0;
    valueL += el.offsetLeft || 0;
    el = el.offsetParent
  }while(el);
  return{left:valueL, top:valueT, width:element.offsetWidth, height:element.offsetHeight}
}, wrapText:function(obj_id, beginTag, endTag) {
  var obj = document.getElementById(obj_id);
  if(typeof obj.selectionStart == "number") {
    var start = obj.selectionStart;
    var end = obj.selectionEnd;
    obj.value = obj.value.substring(0, start) + beginTag + obj.value.substring(start, end) + endTag + obj.value.substring(end, obj.value.length)
  }else {
    if(document.selection) {
      obj.focus();
      var range = document.selection.createRange();
      if(range.parentElement() != obj) {
        return false
      }
      if(typeof range.text == "string") {
        document.selection.createRange().text = beginTag + range.text + endTag
      }
    }else {
      obj.value += beginTag + " " + endTag
    }
  }
  return true
}, insertAtCaret:function(areaId, text) {
  var txtarea = document.getElementById(areaId);
  var scrollPos = txtarea.scrollTop;
  var strPos = 0;
  var br = txtarea.selectionStart || txtarea.selectionStart == "0" ? "ff" : document.selection ? "ie" : false;
  if(br == "ie") {
    txtarea.focus();
    var range = document.selection.createRange();
    range.moveStart("character", -txtarea.value.length);
    strPos = range.text.length
  }else {
    if(br == "ff") {
      strPos = txtarea.selectionStart
    }
  }
  var front = txtarea.value.substring(0, strPos);
  var back = txtarea.value.substring(strPos, txtarea.value.length);
  txtarea.value = front + text + back;
  strPos = strPos + text.length;
  if(br == "ie") {
    txtarea.focus();
    var range = document.selection.createRange();
    range.moveStart("character", -txtarea.value.length);
    range.moveStart("character", strPos);
    range.moveEnd("character", 0);
    range.select()
  }else {
    if(br == "ff") {
      txtarea.selectionStart = strPos;
      txtarea.selectionEnd = strPos;
      txtarea.focus()
    }
  }
  txtarea.scrollTop = scrollPos
}, toggleKeyboards:function() {
  if(!VKI_attach) {
    return
  }
  if(!this.keyboardMode) {
    this.keyboardMode = true;
    var elements = document.getElementsByTagName("input");
    for(i = 0;i < elements.length;i++) {
      if(elements[i].type == "text") {
        VKI_attach(elements[i])
      }
    }
    elements = document.getElementsByTagName("textarea");
    for(i = 0;i < elements.length;i++) {
      VKI_attach(elements[i])
    }
  }else {
    window.location.reload()
  }
}, displayShortcuts:function() {
  if(tr8nLightbox) {
    tr8nLightbox.show("/tr8n/help/lb_shortcuts", {width:400, height:480})
  }
}, displayStatistics:function() {
  if(tr8nLightbox) {
    tr8nLightbox.show("/tr8n/help/lb_stats", {width:420, height:400})
  }
}};
Tr8n.Effects = {toggle:function(element_id) {
  if(Tr8n.element(element_id).style.display == "none") {
    Tr8n.element(element_id).show()
  }else {
    Tr8n.element(element_id).hide()
  }
}, hide:function(element_id) {
  Tr8n.element(element_id).style.display = "none"
}, show:function(element_id) {
  var style = Tr8n.element(element_id).tagName == "SPAN" ? "inline" : "block";
  Tr8n.element(element_id).style.display = style
}, blindUp:function(element_id) {
  Tr8n.Effects.hide(element_id)
}, blindDown:function(element_id) {
  Tr8n.Effects.show(element_id)
}, appear:function(element_id) {
  Tr8n.Effects.show(element_id)
}, fade:function(element_id) {
  Tr8n.Effects.hide(element_id)
}, submit:function(element_id) {
  Tr8n.element(element_id).submit()
}, focus:function(element_id) {
  Tr8n.element(element_id).focus()
}, scrollTo:function(element_id) {
  var theElement = Tr8n.element(element_id);
  var selectedPosX = 0;
  var selectedPosY = 0;
  while(theElement != null) {
    selectedPosX += theElement.offsetLeft;
    selectedPosY += theElement.offsetTop;
    theElement = theElement.offsetParent
  }
  window.scrollTo(selectedPosX, selectedPosY)
}};
Tr8n.LanguageSelector = function(options) {
  this.options = options || {};
  this.keyboardMode = false;
  this.loaded = false;
  this.container = document.createElement("div");
  this.container.className = "tr8n_language_selector";
  this.container.id = "tr8n_language_selector";
  this.container.style.display = "none";
  document.body.appendChild(this.container)
};
Tr8n.LanguageSelector.prototype = {toggle:function() {
  if(this.container.style.display == "none") {
    this.show()
  }else {
    this.hide()
  }
}, hide:function() {
  this.container.style.display = "none";
  Tr8n.Utils.showFlash()
}, show:function() {
  var self = this;
  if(tr8nTranslator) {
    tr8nTranslator.hide()
  }
  if(tr8nLightbox) {
    tr8nLightbox.hide()
  }
  Tr8n.Utils.hideFlash();
  var splash_screen = Tr8n.element("tr8n_splash_screen");
  if(!this.loaded) {
    var html = "";
    if(splash_screen) {
      html += splash_screen.innerHTML
    }else {
      html += "<div style='font-size:18px;text-align:center; margin:5px; padding:10px; background-color:black;'>";
      html += "  <img src='/assets/tr8n/tr8n_logo.jpg' style='width:280px; vertical-align:middle;'>";
      html += "  <img src='/assets/tr8n/loading3.gif' style='width:200px; height:20px; vertical-align:middle;'>";
      html += "</div>"
    }
    this.container.innerHTML = html
  }
  this.container.style.display = "block";
  var trigger = Tr8n.element("tr8n_language_selector_trigger");
  var trigger_position = Tr8n.Utils.cumulativeOffset(trigger);
  var container_position = {left:trigger_position[0] + trigger.offsetWidth - this.container.offsetWidth + "px", top:trigger_position[1] + trigger.offsetHeight + 4 + "px"};
  this.container.style.left = container_position.left;
  this.container.style.top = container_position.top;
  if(!this.loaded) {
    window.setTimeout(function() {
      Tr8n.Utils.update("tr8n_language_selector", "/tr8n/language/select", {evalScripts:true})
    }, 100)
  }
  this.loaded = true
}, removeLanguage:function(language_id) {
  Tr8n.Utils.update("tr8n_language_lists", "/tr8n/language/lists", {parameters:{language_action:"remove", language_id:language_id}, method:"post"})
}, enableInlineTranslations:function() {
  window.location = "/tr8n/language/switch?language_action=enable_inline_mode&source_url=" + location
}, disableInlineTranslations:function() {
  window.location = "/tr8n/language/switch?language_action=disable_inline_mode&source_url=" + location
}, showDashboard:function() {
  window.location = "/tr8n/dashboard"
}, manageLanguage:function() {
  window.location = "/tr8n/language"
}, toggleInlineTranslations:function() {
  window.location = "/tr8n/language/switch?language_action=toggle_inline_mode&source_url=" + location
}};
Tr8n.Lightbox = function() {
  this.container = document.createElement("div");
  this.container.className = "tr8n_lightbox";
  this.container.id = "tr8n_lightbox";
  this.container.style.height = "100px";
  this.container.style.display = "none";
  this.overlay = document.createElement("div");
  this.overlay.className = "tr8n_lightbox_overlay";
  this.overlay.id = "tr8n_lightbox_overlay";
  this.overlay.style.display = "none";
  this.content_frame = document.createElement("iframe");
  this.content_frame.src = "/tr8n/help/splash_screen";
  this.content_frame.style.border = "0px";
  this.content_frame.style.width = "100%";
  this.container.appendChild(this.content_frame);
  document.body.appendChild(this.container);
  document.body.appendChild(this.overlay)
};
Tr8n.Lightbox.prototype = {hide:function() {
  this.container.style.display = "none";
  this.overlay.style.display = "none";
  Tr8n.Utils.showFlash()
}, show:function(url, opts) {
  var self = this;
  opts = opts || {};
  if(tr8nTranslator) {
    tr8nTranslator.hide()
  }
  if(tr8nLanguageSelector) {
    tr8nLanguageSelector.hide()
  }
  Tr8n.Utils.hideFlash();
  this.content_frame.src = "/tr8n/help/splash_screen";
  this.overlay.style.display = "block";
  opts["width"] = opts["width"] || 700;
  var default_height = 100;
  this.container.style.width = opts["width"] + "px";
  this.container.style.marginLeft = -opts["width"] / 2 + "px";
  this.resize(default_height);
  this.container.style.display = "block";
  window.setTimeout(function() {
    url += url.indexOf("?") == -1 ? "?" : "&";
    url += "origin=" + escape(window.location);
    self.content_frame.src = url
  }, 500)
}, resize:function(height) {
  this.container.style.height = height + "px";
  this.container.style.marginTop = -height / 2 + "px";
  this.content_frame.style.height = height + "px"
}};
Tr8n.Translator = function(options) {
  var self = this;
  this.options = options;
  this.translation_key_id = null;
  this.suggestion_tokens = null;
  this.container_width = 400;
  this.container = document.createElement("div");
  this.container.className = "tr8n_translator";
  this.container.id = "tr8n_translator";
  this.container.style.display = "none";
  this.container.style.width = this.container_width + "px";
  this.stem_image = document.createElement("img");
  this.stem_image.src = "/assets/tr8n/top_left_stem.png";
  this.container.appendChild(this.stem_image);
  this.content_frame = document.createElement("iframe");
  this.content_frame.src = "/tr8n/language/translator_splash_screen";
  this.content_frame.style.border = "0px";
  this.container.appendChild(this.content_frame);
  document.body.appendChild(this.container);
  if(window.addEventListener) {
    window.addEventListener("message", Tr8n.onMessage, false)
  }else {
    if(window.attachEvent) {
      window.attachEvent("onmessage", Tr8n.onMessage)
    }
  }
  var event_type = Tr8n.Utils.isOpera() ? "click" : "contextmenu";
  Tr8n.Utils.addEvent(document, event_type, function(e) {
    if(Tr8n.Utils.isOpera() && !e.ctrlKey) {
      return
    }
    var translatable_node = Tr8n.Utils.findElement(e, ".tr8n_translatable");
    var language_case_node = Tr8n.Utils.findElement(e, ".tr8n_language_case");
    var link_node = Tr8n.Utils.findElement(e, "a");
    if(translatable_node == null && language_case_node == null) {
      return
    }
    if(link_node) {
      var temp_href = link_node.href;
      var temp_onclick = link_node.onclick;
      link_node.href = "javascript:void(0);";
      link_node.onclick = void 0;
      setTimeout(function() {
        link_node.href = temp_href;
        link_node.onclick = temp_onclick
      }, 500)
    }
    if(e.stop) {
      e.stop()
    }
    if(e.preventDefault) {
      e.preventDefault()
    }
    if(e.stopPropagation) {
      e.stopPropagation()
    }
    if(language_case_node) {
      self.show(language_case_node, true)
    }else {
      self.show(translatable_node, false)
    }
    return false
  })
};
Tr8n.Translator.prototype = {hide:function() {
  this.container.style.display = "none";
  Tr8n.Utils.showFlash()
}, show:function(translatable_node, is_language_case) {
  var self = this;
  if(tr8nLanguageSelector) {
    tr8nLanguageSelector.hide()
  }
  if(tr8nLightbox) {
    tr8nLightbox.hide()
  }
  Tr8n.Utils.hideFlash();
  this.content_frame.style.width = "100%";
  this.content_frame.style.height = "10px";
  this.content_frame.src = "/tr8n/language/translator_splash_screen";
  var stem = {v:"top", h:"left", width:10, height:12};
  var label_rect = Tr8n.Utils.elementRect(translatable_node);
  var new_container_origin = {left:label_rect.left, top:label_rect.top + label_rect.height + stem.height};
  var stem_offset = label_rect.width / 2;
  var label_center = label_rect.left + label_rect.width / 2;
  if(label_rect.left + label_rect.width + window.innerWidth / 2 > window.innerWidth) {
    new_container_origin.left = label_rect.left + label_rect.width - this.container_width;
    stem.h = "right";
    if(new_container_origin.left + 20 > label_center) {
      new_container_origin.left = label_center - 150;
      stem_offset = new_container_origin.left - 200
    }
  }
  this.stem_image.className = "stem " + stem.v + "_" + stem.h;
  if(stem.h == "left") {
    this.stem_image.style.left = stem_offset + "px";
    this.stem_image.style.right = ""
  }else {
    this.stem_image.style.right = stem_offset + "px";
    this.stem_image.style.left = ""
  }
  window.scrollTo(label_rect.left, label_rect.top - 100);
  this.container.style.left = new_container_origin.left + "px";
  this.container.style.top = new_container_origin.top + "px";
  this.container.style.display = "block";
  window.setTimeout(function() {
    var url = "";
    if(is_language_case) {
      self.language_case_id = translatable_node.getAttribute("case_id");
      self.language_case_rule_id = translatable_node.getAttribute("rule_id");
      self.language_case_key = translatable_node.getAttribute("case_key");
      url += "/tr8n/language_cases/manager?case_id=" + self.language_case_id;
      url += "&rule_id=" + self.language_case_rule_id;
      url += "&case_key=" + self.language_case_key;
      url += "&origin=" + escape(window.location)
    }else {
      self.translation_key_id = translatable_node.getAttribute("translation_key_id");
      url += "/tr8n/language/translator?translation_key_id=" + self.translation_key_id;
      url += "&origin=" + escape(window.location)
    }
    self.content_frame.src = url
  }, 500)
}, resize:function(height) {
  this.content_frame.style.height = height + "px";
  this.container.style.height = height + "px"
}};
var tr8n_suggestion_tokens;
var tr8n_suggestion_key_id;
Tr8n.Translation = {report:function(translation_key, translation_id) {
  var msg = "Reporting this translation will remove it from this list and the translator will be put on a watch list. \n\nAre you sure you want to report this translation?";
  if(!confirm(msg)) {
    return
  }
  Tr8n.TranslatorHelper.vote(translation_key, translation_id, -1E3)
}, vote:function(translation_key_id, translation_id, vote) {
  Tr8n.Effects.hide("tr8n_votes_for_" + translation_id);
  Tr8n.Effects.show("tr8n_spinner_for_" + translation_id);
  if(Tr8n.element("tr8n_translator_votes_for_" + translation_key_id)) {
    Tr8n.Utils.update("tr8n_translator_votes_for_" + translation_key_id, "/tr8n/translations/vote", {parameters:{translation_id:translation_id, vote:vote}, method:"post"})
  }else {
    Tr8n.Utils.update("tr8n_votes_for_" + translation_id, "/tr8n/translations/vote", {parameters:{translation_id:translation_id, vote:vote, short_version:true}, method:"post", onComplete:function() {
      Tr8n.Effects.hide("tr8n_spinner_for_" + translation_id);
      Tr8n.Effects.show("tr8n_votes_for_" + translation_id)
    }})
  }
}, insertDecorationToken:function(token, text_area_id) {
  text_area_id = text_area_id || "tr8n_translator_translation_label";
  Tr8n.Utils.wrapText(text_area_id, "[" + token + ": ", "]")
}, insertToken:function(token, text_area_id) {
  text_area_id = text_area_id || "tr8n_translator_translation_label";
  Tr8n.Utils.insertAtCaret(text_area_id, "{" + token + "}")
}, submit:function() {
  Tr8n.Effects.hide("tr8n_translator_translation_container");
  Tr8n.Effects.hide("tr8n_translator_buttons_container");
  Tr8n.Effects.show("tr8n_translator_spinner");
  Tr8n.Effects.submit("tr8n_translator_form")
}, submitWithDependencies:function() {
  Tr8n.Effects.hide("tr8n_translator_buttons_container");
  Tr8n.Effects.hide("tr8n_translator_dependencies_container");
  Tr8n.Effects.show("tr8n_translator_spinner");
  Tr8n.element("tr8n_translator_form").action = "/tr8n/translations/permutate";
  Tr8n.Effects.submit("tr8n_translator_form")
}, suggest:function(translation_key_id, original, tokens, from_lang, to_lang) {
  if(Tr8n.google_api_key == null) {
    return
  }
  tr8n_suggestion_tokens = tokens;
  tr8n_suggestion_key_id = translation_key_id;
  var new_script = document.createElement("script");
  new_script.type = "text/javascript";
  var source_text = escape(original);
  var api_source = "https://www.googleapis.com/language/translate/v2?key=" + Tr8n.google_api_key;
  var source = api_source + "&source=" + from_lang + "&target=" + to_lang + "&callback=Tr8n.Translation.showSuggestion&q=" + source_text;
  new_script.src = source;
  document.getElementsByTagName("head")[0].appendChild(new_script)
}, showSuggestion:function(response) {
  if(response == null || response.data == null || response.data.translations == null || response.data.translations.length == 0) {
    return
  }
  var suggestion = response.data.translations[0].translatedText;
  if(tr8n_suggestion_tokens) {
    var tokens = tr8n_suggestion_tokens.split(",");
    tr8n_suggestion_tokens = null;
    for(var i = 0;i < tokens.length;i++) {
      suggestion = Tr8n.Utils.replaceAll(suggestion, "(" + i + ")", tokens[i])
    }
  }
  Tr8n.element("tr8n_translation_suggestion_" + tr8n_suggestion_key_id).innerHTML = suggestion;
  Tr8n.element("tr8n_google_suggestion_container_" + tr8n_suggestion_key_id).style.display = "block";
  var suggestion_section = Tr8n.element("tr8n_google_suggestion_section");
  if(suggestion_section) {
    suggestion_section.style.display = "block"
  }
}};
Tr8n.Proxy = function(options) {
  var self = this;
  this.options = options;
  this.options["url"] = this.options["url"] || "/tr8n/api/v1/language/translate";
  this.options["scheduler_interval"] = this.options["scheduler_interval"] || 2E4;
  this.logger_enabled = false;
  this.missing_translations_locked = false;
  this.inline_translations_enabled = this.options["enable_inline_translations"];
  this.logger = new Tr8n.Proxy.Logger({"proxy":self, "element_id":options["logger_element_id"] || "tr8n_debugger"});
  this.language = new Tr8n.Proxy.Language({"proxy":self});
  this.initTranslations();
  this.runScheduledTasks()
};
Tr8n.Proxy.prototype = {log:function(msg) {
  this.logger.debug(msg)
}, logSettings:function() {
  this.logger.clear();
  this.logger.logObject(this.options)
}, logTranslations:function() {
  this.logger.clear();
  this.translations = this.translations || {};
  this.logger.logObject(this.translations)
}, logMissingTranslations:function() {
  this.logger.clear();
  this.missing_translation_keys = this.missing_translation_keys || {};
  this.logger.logObject(this.missing_translation_keys)
}, disableLogger:function() {
  this.logger_enabled = false
}, enableLogger:function() {
  this.logger_enabled = true
}, debug:function(msg) {
  this.logger.debug(msg)
}, error:function(msg) {
  this.logger.error(msg)
}, translate:function(label, description, tokens, options) {
  if(!label) {
    return""
  }
  description = description || "";
  tokens = tokens || {};
  options = options || {};
  return this.language.translate(label, description, tokens, options)
}, tr:function(label, description, tokens, options) {
  return this.translate(label, description, tokens, options)
}, trl:function(label, description, tokens, options) {
  options = options || {};
  options["skip_decorations"] = true;
  return this.translate(label, description, tokens, options)
}, getTranslations:function() {
  this.translations = this.translations || {};
  return this.translations
}, getDecorationFor:function(decoration_name) {
  if(!this.options["default_decorations"]) {
    return null
  }
  return this.options["default_decorations"][decoration_name]
}, getLanguageRuleForType:function(rule_type) {
  if(rule_type == "number") {
    return"Tr8n.Proxy.NumericRule"
  }
  if(rule_type == "gender") {
    return"Tr8n.Proxy.GenderRule"
  }
  if(rule_type == "date") {
    return"Tr8n.Proxy.DateRule"
  }
  if(rule_type == "list") {
    return"Tr8n.Proxy.ListRule"
  }
  if(rule_type == "gender_list") {
    return"Tr8n.Proxy.GenderListRule"
  }
  return null
}, getLanguageRuleForTokenSuffix:function(token_suffix) {
  if(!this.options["rules"]) {
    return null
  }
  for(rule_type in this.options["rules"]) {
    var suffixes = this.options["rules"][rule_type]["token_suffixes"];
    if(!suffixes) {
      continue
    }
    if(Tr8n.Utils.indexOf(suffixes, token_suffix) != -1) {
      return this.getLanguageRuleForType(rule_type)
    }
  }
  return null
}, registerTranslationKeys:function(translations) {
  this.log("Found " + translations.length + " registered phrases");
  for(i = 0;i < translations.length;i++) {
    var translation_key = translations[i];
    this.log("Registering " + translation_key["key"]);
    this.translations[translation_key["key"]] = translation_key
  }
}, initTranslations:function(forced) {
  if(!forced && this.translations) {
    return
  }
  this.translations = {};
  if(this.options["translations_cache_id"]) {
    this.log("Registering page translations from translations cache...");
    this.updateTranslations(eval(this.options["translations_cache_id"]))
  }
  var self = this;
  if(this.options["fetch_translations_on_init"]) {
    this.log("Fetching translations from the server...");
    Tr8n.Utils.ajax(this.options["url"], {method:"get", parameters:{"batch":true, "source":self.options["default_source"]}, onSuccess:function(response) {
      self.log("Received response from the server");
      self.log(response.responseText);
      self.updateTranslations(eval("[" + response.responseText + "]")[0]["phrases"])
    }})
  }
}, updateTranslations:function(new_translations) {
  this.translations = this.translations || {};
  this.log("Updating page translations...");
  this.registerTranslationKeys(new_translations)
}, registerMissingTranslationKey:function(translation_key, token_values, options) {
  this.missing_translation_keys = this.missing_translation_keys || {};
  if(!this.missing_translation_keys[translation_key.key]) {
    this.log("Adding missing translation to the queue: " + translation_key.key);
    this.missing_translation_keys[translation_key.key] = {translation_key:translation_key, token_values:token_values, options:options}
  }
}, submitMissingTranslationKeys:function() {
  if(this.missing_translations_locked) {
    this.log("Missing translations are being processed, postponding registration task.");
    return
  }
  this.missing_translation_keys = this.missing_translation_keys || {};
  var phrases = "[";
  for(var key in this.missing_translation_keys) {
    var translation_key = this.missing_translation_keys[key].translation_key;
    if(translation_key == null) {
      continue
    }
    if(phrases != "[") {
      phrases = phrases + ","
    }
    phrases = phrases + "{";
    phrases = phrases + '"label":"' + translation_key.label + '", ';
    phrases = phrases + '"description":"' + translation_key.description + '"';
    phrases = phrases + "}"
  }
  phrases = phrases + "]";
  if(phrases == "[]") {
    return
  }
  var self = this;
  this.debug("Submitting missing translation keys: " + phrases);
  Tr8n.Utils.ajax(this.options["url"], {method:"put", parameters:{"source":self.options["default_source"], "phrases":phrases}, onSuccess:function(response) {
    self.log("Received response from the server");
    self.log(response.responseText);
    self.updateMissingTranslationKeys(eval("[" + response.responseText + "]")[0]["phrases"])
  }})
}, updateMissingTranslationKeys:function(translations) {
  this.missing_translations_locked = true;
  this.log("Received " + translations.length + " registered phrases...");
  for(i = 0;i < translations.length;i++) {
    var translation_key_data = translations[i];
    this.log("Registering new key " + translation_key_data.key);
    this.translations[translation_key_data.key] = translation_key_data;
    var missing_key_data = this.missing_translation_keys[translation_key_data.key];
    var tr8nElement = Tr8n.element(translation_key_data.key);
    if(tr8nElement && missing_key_data.translation_key) {
      tr8nElement.setAttribute("translation_key_id", translation_key_data["id"]);
      tr8nElement.innerHTML = missing_key_data.translation_key.translate(this.language, missing_key_data.token_values)
    }
    delete this.missing_translation_keys[missing_key_data.translation_key.key]
  }
  this.missing_translations_locked = false
}, runScheduledTasks:function() {
  var self = this;
  this.submitMissingTranslationKeys();
  window.setTimeout(function() {
    self.runScheduledTasks()
  }, this.options["scheduler_interval"])
}, initTml:function() {
  var tree_walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL, function(node) {
    if(node.nodeName == "TML:LABEL") {
      return NodeFilter.FILTER_ACCEPT
    }else {
      return NodeFilter.FILTER_SKIP
    }
  }, false);
  while(tree_walker.nextNode()) {
    (new Tr8n.Tml.Label(tree_walker.currentNode, this)).translate()
  }
}};
Tr8n.Proxy.Logger = function(options) {
  this.options = options;
  this.object_keys = []
};
Tr8n.Proxy.Logger.prototype = {clear:function() {
  if(!this.options["proxy"].logger_enabled) {
    return
  }
  if(!this.options["element_id"]) {
    return
  }
  if(!Tr8n.element(this.options["element_id"])) {
    return
  }
  Tr8n.element(this.options["element_id"]).innerHTML = ""
}, append:function(msg) {
  if(!this.options["proxy"].logger_enabled) {
    return
  }
  if(!this.options["element_id"]) {
    return
  }
  if(!Tr8n.element(this.options["element_id"])) {
    return
  }
  var str = msg + "<br>" + Tr8n.element(this.options["element_id"]).innerHTML;
  Tr8n.element(this.options["element_id"]).innerHTML = str
}, log:function(msg) {
  if(!this.options["proxy"].logger_enabled) {
    return
  }
  var now = new Date;
  var str = "<span style='color:#ccc;'>" + (now.toLocaleDateString() + " " + now.toLocaleTimeString()) + "</span>: " + msg;
  this.append(str)
}, debug:function(msg) {
  if(!this.options["proxy"].logger_enabled) {
    return
  }
  if(window.console && console.log) {
    console.log(msg)
  }
  this.log("<span style='color:grey'>" + msg + "</span>")
}, error:function(msg) {
  if(!this.options["proxy"].logger_enabled) {
    return
  }
  if(window.console && console.error) {
    console.error(msg)
  }
  this.log("<span style='color:red'>" + msg + "</span>")
}, S4:function() {
  return((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
}, guid:function() {
  return this.S4() + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4()
}, escapeHTML:function(str) {
  return str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
}, showObject:function(obj_key, flag) {
  if(flag) {
    Tr8n.Effects.hide("no_object_" + obj_key);
    Tr8n.Effects.show("object_" + obj_key);
    Tr8n.element("expander_" + obj_key).innerHTML = "<img src='/assets/tr8n/minus_node.png'>"
  }else {
    Tr8n.Effects.hide("object_" + obj_key);
    Tr8n.Effects.show("no_object_" + obj_key);
    Tr8n.element("expander_" + obj_key).innerHTML = "<img src='/assets/tr8n/plus_node.png'>"
  }
}, toggleNode:function(obj_key) {
  this.showObject(obj_key, Tr8n.element("object_" + obj_key).style.display == "none")
}, expandAllNodes:function() {
  for(var i = 0;i < this.object_keys.length;i++) {
    this.showObject(this.object_keys[i], true)
  }
}, collapseAllNodes:function() {
  for(var i = 0;i < this.object_keys.length;i++) {
    this.showObject(this.object_keys[i], false)
  }
}, logObject:function(data) {
  this.object_keys = [];
  html = [];
  html.push("<div style='float:right;padding-right:10px;'>");
  html.push("<span style='padding:2px;' onClick=\"tr8nProxy.logger.expandAllNodes()\"><img src='/assets/tr8n/plus_node.png'></span>");
  html.push("<span style='padding:2px;' onClick=\"tr8nProxy.logger.collapseAllNodes()\"><img src='/assets/tr8n/minus_node.png'></span>");
  html.push("</div>");
  var results = data;
  if(typeof results == "string") {
    try {
      results = eval("[" + results + "]")[0]
    }catch(err) {
      this.push(results);
      return
    }
  }
  if(typeof results == "object") {
    html.push(this.formatObject(results, 1))
  }else {
    html.push(results)
  }
  this.append(html.join(""))
}, formatObject:function(obj, level) {
  if(obj == null) {
    return"{<br>}"
  }
  var html = [];
  var obj_key = this.guid();
  html.push("<span class='tr8n_logger_expander' id='expander_" + obj_key + "' onClick=\"tr8nProxy.logger.toggleNode('" + obj_key + "')\"><img src='/assets/tr8n/minus_node.png'></span> <span style='display:none' id='no_object_" + obj_key + "'>{...}</span> <span id='object_" + obj_key + "'>{");
  this.object_keys.push(obj_key);
  var keys = Object.keys(obj).sort();
  for(var i = 0;i < keys.length;i++) {
    key = keys[i];
    if(this.isObject(obj[key])) {
      if(this.isArray(obj[key])) {
        html.push(this.createSpacer(level) + "<span class='tr8n_logger_obj_key'>" + key + ":</span>" + this.formatArray(obj[key], level + 1) + ",")
      }else {
        html.push(this.createSpacer(level) + "<span class='tr8n_logger_obj_key'>" + key + ":</span>" + this.formatObject(obj[key], level + 1) + ",")
      }
    }else {
      html.push(this.createSpacer(level) + this.formatProperty(key, obj[key]) + ",")
    }
  }
  html.push(this.createSpacer(level - 1) + "}</span>");
  return html.join("<br>")
}, formatArray:function(arr, level) {
  if(arr == null) {
    return"[<br>]"
  }
  var html = [];
  var obj_key = this.guid();
  html.push("<span class='tr8n_logger_expander' id='expander_" + obj_key + "' onClick=\"tr8nProxy.logger.toggleNode('" + obj_key + "')\"><img src='/assets/tr8n/minus_node.png'></span> <span style='display:none' id='no_object_" + obj_key + "'>[...]</span> <span id='object_" + obj_key + "'>[");
  this.object_keys.push(obj_key);
  for(var i = 0;i < arr.length;i++) {
    if(this.isObject(arr[i])) {
      if(this.isArray(arr[i])) {
        html.push(this.createSpacer(level) + this.formatArray(arr[i], level + 1) + ",")
      }else {
        html.push(this.createSpacer(level) + this.formatObject(arr[i], level + 1) + ",")
      }
    }else {
      html.push(this.createSpacer(level) + this.formatProperty(null, arr[i]) + ",")
    }
  }
  html.push(this.createSpacer(level - 1) + "]</span>");
  return html.join("<br>")
}, formatProperty:function(key, value) {
  if(value == null) {
    return"<span class='tr8n_logger_obj_key'>" + key + ":</span><span class='obj_value_null'>null</span>"
  }
  var cls = "tr8n_logger_obj_value_" + typeof value;
  var value_span = "";
  if(this.isString(value)) {
    value_span = "<span class='" + cls + "'>\"" + this.escapeHTML(value) + '"</span>'
  }else {
    value_span = "<span class='" + cls + "'>" + value + "</span>"
  }
  if(key == null) {
    return value_span
  }
  return"<span class='tr8n_logger_obj_key'>" + key + ":</span>" + value_span
}, createSpacer:function(level) {
  return"<img src='/assets/tr8n/pixel.gif' style='height:1px;width:" + level * 20 + "px;'>"
}, isArray:function(obj) {
  if(obj == null) {
    return false
  }
  return!(obj.constructor.toString().indexOf("Array") == -1)
}, isObject:function(obj) {
  if(obj == null) {
    return false
  }
  return typeof obj == "object"
}, isString:function(obj) {
  return typeof obj == "string"
}, isURL:function(str) {
  str = "" + str;
  return str.indexOf("http://") != -1 || str.indexOf("https://") != -1
}};
Tr8n.Proxy.Language = function(options) {
  this.options = options
};
Tr8n.Proxy.Language.prototype = {getProxy:function() {
  return this.options["proxy"]
}, getLogger:function() {
  return this.getProxy().logger
}, translate:function(label, description, tokens, options) {
  return(new Tr8n.Proxy.TranslationKey(label, description, {"proxy":this.getProxy()})).translate(this, tokens, options)
}};
Tr8n.Proxy.TranslationKey = function(label, description, options) {
  this.label = label;
  this.description = description;
  this.options = options;
  this.generateKey()
};
Tr8n.Proxy.TranslationKey.prototype = {getProxy:function() {
  return this.options["proxy"]
}, getLogger:function() {
  return this.getProxy().logger
}, findFirstAcceptableTranslation:function(translations, token_values) {
  if(translations["label"] != null) {
    this.getLogger().debug("Found a single translation: " + translations["label"]);
    return translations
  }
  translations = translations["labels"];
  if(!translations) {
    this.getLogger().error("Translations are in a weird form...");
    return null
  }
  this.getLogger().debug("Found translations: " + translations.length);
  for(var i = 0;i < translations.length;i++) {
    this.getLogger().debug("Checking context rules for:" + translations[i]["label"]);
    if(!translations[i]["context"]) {
      this.getLogger().debug("Translation has no context, using it by default");
      return translations[i]
    }
    var valid_context = true;
    for(var token in translations[i]["context"]) {
      if(!valid_context) {
        continue
      }
      var token_context = translations[i]["context"][token];
      var rule_name = this.getProxy().getLanguageRuleForType(token_context["type"]);
      this.getLogger().debug("Evaluating rule: " + rule_name);
      var options = {"proxy":this.getProxy()};
      var rule = eval("new " + rule_name + "()");
      rule.definition = token_context;
      rule.options = options;
      valid_context = valid_context && rule.evaluate(token, token_values)
    }
    if(valid_context) {
      this.getLogger().debug("Found valid translation: " + translations[i].label);
      return translations[i]
    }else {
      this.getLogger().debug("The rules were not matched for: " + translations[i].label)
    }
  }
  this.getLogger().debug("No acceptable ranslations found");
  return null
}, translate:function(language, token_values, options) {
  if(!this.label) {
    this.getLogger().error("Label must always be provided for the translate method");
    return""
  }
  var translations = this.getProxy().getTranslations();
  var translation_key = translations[this.key];
  if(translation_key) {
    this.getLogger().debug("Found translations, evaluating rules...");
    this.id = translation_key.id;
    this.original = translation_key.original;
    var translation = this.findFirstAcceptableTranslation(translation_key, token_values);
    if(translation) {
      this.getLogger().debug("Found a valid match: " + translation.label);
      return this.substituteTokens(translation["label"], token_values, options)
    }else {
      this.getLogger().debug("No valid match found, using default language");
      return this.substituteTokens(this.label, token_values, options)
    }
  }else {
    this.getLogger().debug("Translation not found, using default language")
  }
  this.getProxy().registerMissingTranslationKey(this, token_values, options);
  this.getLogger().debug("No translation found. Using default...");
  return this.substituteTokens(this.label, token_values, options)
}, generateKey:function() {
  this.key = this.label + ";;;";
  if(this.description) {
    this.key = this.key + this.description
  }
  this.getLogger().debug("Preparing label signature: " + this.key);
  this.key = MD5(this.key);
  this.getLogger().debug("Label signature: " + this.key)
}, registerDataTokens:function(label) {
  this.data_tokens = [];
  this.data_tokens = this.data_tokens.concat(Tr8n.Proxy.DataToken.parse(label, {"key":this, "proxy":this.getProxy()}));
  this.data_tokens = this.data_tokens.concat(Tr8n.Proxy.TransformToken.parse(label, {"key":this, "proxy":this.getProxy()}))
}, registerDecorationTokens:function(label) {
  this.decoration_tokens = [];
  this.decoration_tokens = this.decoration_tokens.concat(Tr8n.Proxy.DecorationToken.parse(label, {"key":this, "proxy":this.getProxy()}))
}, substituteTokens:function(label, token_values, options) {
  this.registerDataTokens(label);
  if(!this.data_tokens) {
    return this.decorateLabel(label, options)
  }
  for(var i = 0;i < this.data_tokens.length;i++) {
    label = this.data_tokens[i].substitute(label, token_values || {})
  }
  this.registerDecorationTokens(label);
  if(!this.decoration_tokens) {
    return label
  }
  for(var i = 0;i < this.decoration_tokens.length;i++) {
    label = this.decoration_tokens[i].substitute(label, token_values || {})
  }
  return this.decorateLabel(label, options)
}, decorateLabel:function(label, options) {
  options = options || {};
  if(options["skip_decorations"]) {
    return label
  }
  html = [];
  html.push("<tr8n ");
  if(this.id) {
    html.push(" translation_key_id='" + this.id + "' ")
  }
  if(this.key) {
    html.push(" id='" + this.key + "' ")
  }
  var klasses = ["tr8n_translatable"];
  if(this.original) {
    klasses.push("tr8n_not_translated")
  }else {
    klasses.push("tr8n_translated")
  }
  if(this.getProxy().inline_translations_enabled && this.id) {
    html.push(" class='" + klasses.join(" ") + "'")
  }
  html.push(">");
  html.push(label);
  html.push("</tr8n>");
  return html.join("")
}};
Tr8n.Proxy.Token = function() {
};
Tr8n.Proxy.Token.prototype = {getProxy:function() {
  return this.options["proxy"]
}, getLogger:function() {
  return this.getProxy().logger
}, getExpression:function() {
  return null
}, register:function(label, options) {
  if(this.getExpression() == null) {
    alert("Token expression must be provided")
  }
  var tokens = label.match(this.getExpression());
  if(!tokens) {
    return[]
  }
  var objects = [];
  var uniq = {};
  for(i = 0;i < tokens.length;i++) {
    if(uniq[tokens[i]]) {
      continue
    }
    options["proxy"].debug("Registering data token: " + tokens[i]);
    objects.push(new Tr8n.Proxy.TransformToken(label, tokens[i], options));
    uniq[tokens[i]] = true
  }
  return objects
}, getFullName:function() {
  return this.full_name
}, getDeclaredName:function() {
  if(!this.declared_name) {
    this.declared_name = this.getFullName().replace(/[{}\[\]]/g, "")
  }
  return this.declared_name
}, getName:function() {
  if(!this.name) {
    this.name = Tr8n.Utils.trim(this.getDeclaredName().split(":")[0])
  }
  return this.name
}, getLanguageRule:function() {
  return null
}, substitute:function(label, token_values) {
  var value = token_values[this.getName()];
  if(value == null) {
    this.getLogger().error("Value for token: " + this.getFullName() + " was not provided");
    return label
  }
  return Tr8n.Utils.replaceAll(label, this.getFullName(), this.getTokenValue(value))
}, getTokenValue:function(token_value) {
  if(typeof token_value == "string") {
    return token_value
  }
  if(typeof token_value == "number") {
    return token_value
  }
  return token_value["value"]
}, getTokenObject:function(token_value) {
  if(typeof token_value == "string") {
    return token_value
  }
  if(typeof token_value == "number") {
    return token_value
  }
  return token_value["subject"]
}, getType:function() {
  if(this.getDeclaredName().indexOf(":") == -1) {
    return null
  }
  if(!this.type) {
    this.type = this.getDeclaredName().split("|")[0].split(":");
    this.type = this.type[this.type.length - 1]
  }
  return this.type
}, getSuffix:function() {
  if(!this.suffix) {
    this.suffix = this.getName().split("_");
    this.suffix = this.suffix[this.suffix.length - 1]
  }
  return this.suffix
}, getLanguageRule:function() {
  if(!this.language_rule) {
    if(this.getType()) {
      this.language_rule = this.getProxy().getLanguageRuleForType(this.getType())
    }else {
      this.language_rule = this.getProxy().getLanguageRuleForTokenSuffix(this.getSuffix())
    }
  }
  return this.language_rule
}};
Tr8n.Proxy.DataToken = function(label, token, options) {
  this.label = label;
  this.full_name = token;
  this.options = options
};
Tr8n.Proxy.DataToken.prototype = new Tr8n.Proxy.Token;
Tr8n.Proxy.DataToken.parse = function(label, options) {
  var tokens = label.match(/(\{[^_][\w]+(:[\w]+)?\})/g);
  if(!tokens) {
    return[]
  }
  var objects = [];
  var uniq = {};
  for(i = 0;i < tokens.length;i++) {
    if(uniq[tokens[i]]) {
      continue
    }
    options["proxy"].debug("Registering data token: " + tokens[i]);
    objects.push(new Tr8n.Proxy.DataToken(label, tokens[i], options));
    uniq[tokens[i]] = true
  }
  return objects
};
Tr8n.Proxy.TransformToken = function(label, token, options) {
  this.label = label;
  this.full_name = token;
  this.options = options
};
Tr8n.Proxy.TransformToken.prototype = new Tr8n.Proxy.Token;
Tr8n.Proxy.TransformToken.parse = function(label, options) {
  var tokens = label.match(/(\{[^_][\w]+(:[\w]+)?\s*\|\|?[^{^}]+\})/g);
  if(!tokens) {
    return[]
  }
  var objects = [];
  var uniq = {};
  for(i = 0;i < tokens.length;i++) {
    if(uniq[tokens[i]]) {
      continue
    }
    options["proxy"].debug("Registering transform token: " + tokens[i]);
    objects.push(new Tr8n.Proxy.TransformToken(label, tokens[i], options));
    uniq[tokens[i]] = true
  }
  return objects
};
Tr8n.Proxy.TransformToken.prototype.getName = function() {
  if(!this.name) {
    this.name = Tr8n.Utils.trim(this.getDeclaredName().split("|")[0].split(":")[0])
  }
  return this.name
};
Tr8n.Proxy.TransformToken.prototype.getPipedParams = function() {
  if(!this.piped_params) {
    var temp = this.getDeclaredName().split("|");
    temp = temp[temp.length - 1].split(",");
    this.piped_params = [];
    for(i = 0;i < temp.length;i++) {
      this.piped_params.push(Tr8n.Utils.trim(temp[i]))
    }
  }
  return this.piped_params
};
Tr8n.Proxy.TransformToken.prototype.substitute = function(label, token_values) {
  var object = token_values[this.getName()];
  if(object == null) {
    this.getLogger().error("Value for token: " + this.getFullName() + " was not provided");
    return label
  }
  var token_object = this.getTokenObject(object);
  this.getLogger().debug("Registered " + this.getPipedParams().length + " piped params");
  var lang_rule_name = this.getLanguageRule();
  if(!lang_rule_name) {
    this.getLogger().error("Rule type cannot be determined for the transform token: " + this.getFullName());
    return label
  }else {
    this.getLogger().debug("Transform token uses rule: " + lang_rule_name)
  }
  var transform_value = eval(lang_rule_name).transform(token_object, this.getPipedParams());
  this.getLogger().debug("Registered transform value: " + transform_value);
  if(this.isAllowedInTranslation()) {
    var token_value = this.getTokenValue(object);
    transform_value = token_value + " " + transform_value
  }
  return Tr8n.Utils.replaceAll(label, this.getFullName(), transform_value)
};
Tr8n.Proxy.TransformToken.prototype.getPipedSeparator = function() {
  if(!this.piped_separator) {
    this.piped_separator = this.getFullName().indexOf("||") != -1 ? "||" : "|"
  }
  return this.piped_separator
};
Tr8n.Proxy.TransformToken.prototype.isAllowedInTranslation = function() {
  return this.getPipedSeparator() == "||"
};
Tr8n.Proxy.DecorationToken = function(label, token, options) {
  this.label = label;
  this.full_name = token;
  this.options = options
};
Tr8n.Proxy.DecorationToken.prototype = new Tr8n.Proxy.Token;
Tr8n.Proxy.DecorationToken.parse = function(label, options) {
  var tokens = label.match(/(\[\w+:[^\]]+\])/g);
  if(!tokens) {
    return[]
  }
  var objects = [];
  var uniq = {};
  for(i = 0;i < tokens.length;i++) {
    if(uniq[tokens[i]]) {
      continue
    }
    options["proxy"].debug("Registering decoration token: " + tokens[i]);
    objects.push(new Tr8n.Proxy.DecorationToken(label, tokens[i], options));
    uniq[tokens[i]] = true
  }
  return objects
};
Tr8n.Proxy.DecorationToken.prototype.getDecoratedValue = function() {
  if(!this.decorated_value) {
    var value = this.getFullName().replace(/[\]]/g, "");
    value = value.substring(value.indexOf(":") + 1, value.length);
    this.decorated_value = Tr8n.Utils.trim(value)
  }
  return this.decorated_value
};
Tr8n.Proxy.DecorationToken.prototype.substitute = function(label, token_values) {
  var object = token_values[this.getName()];
  var decoration = object;
  if(!object || typeof object == "object") {
    decoration = this.getProxy().getDecorationFor(this.getName());
    if(!decoration) {
      this.getLogger().error("Default decoration is not defined for token " + this.getName());
      return label
    }
    decoration = Tr8n.Utils.replaceAll(decoration, "{$0}", this.getDecoratedValue());
    if(object) {
      for(var key in object) {
        decoration = Tr8n.Utils.replaceAll(decoration, "{$" + key + "}", object[key])
      }
    }
  }else {
    if(typeof object == "string") {
      decoration = Tr8n.Utils.replaceAll(decoration, "{$0}", this.getDecoratedValue())
    }else {
      this.getLogger().error("Unknown type of decoration token " + this.getFullName());
      return label
    }
  }
  return Tr8n.Utils.replaceAll(label, this.getFullName(), decoration)
};
Tr8n.Proxy.LanguageRule = function() {
};
Tr8n.Proxy.LanguageRule.prototype = {getProxy:function() {
  return this.options["proxy"]
}, getLogger:function() {
  return this.getProxy().logger
}, getTokenValue:function(token_name, token_values) {
  var object = token_values[token_name];
  if(object == null) {
    this.getLogger().error("Invalid token value for token: " + token_name)
  }
  return object
}, getDefinitionDescription:function() {
  var result = [];
  for(var key in this.definition) {
    result.push(key + ": '" + this.definition[key] + "'")
  }
  return"{" + result.join(", ") + "}"
}, sanitizeArrayValue:function(value) {
  var results = [];
  var arr = value.split(",");
  for(var index = 0;index < arr.length;index++) {
    results.push(Tr8n.Utils.trim(arr[index]))
  }
  return results
}};
Tr8n.Proxy.DateRule = function(definition, options) {
  this.definition = definition;
  this.options = options
};
Tr8n.Proxy.DateRule.prototype = new Tr8n.Proxy.LanguageRule;
Tr8n.Proxy.DateRule.transform = function(object, values) {
  return""
};
Tr8n.Proxy.DateRule.prototype.evaluate = function(token, token_values) {
  return true
};
Tr8n.Proxy.GenderRule = function(definition, options) {
  this.definition = definition;
  this.options = options
};
Tr8n.Proxy.GenderRule.prototype = new Tr8n.Proxy.LanguageRule;
Tr8n.Proxy.GenderRule.transform = function(object, values) {
  if(values.length == 1) {
    return values[0]
  }
  if(typeof object == "string") {
    if(object == "male") {
      return values[0]
    }
    if(object == "female") {
      return values[1]
    }
  }else {
    if(typeof object == "object") {
      if(object["gender"] == "male") {
        return values[0]
      }
      if(object["gender"] == "female") {
        return values[1]
      }
    }
  }
  if(values.length == 3) {
    return values[2]
  }
  return values[0] + "/" + values[1]
};
Tr8n.Proxy.GenderRule.prototype.evaluate = function(token_name, token_values) {
  var object = this.getTokenValue(token_name, token_values);
  if(!object) {
    return false
  }
  var gender = "";
  if(typeof object != "object") {
    this.getLogger().error("Invalid token value for gender based token: " + token_name + ". Token value must be an object.");
    return false
  }
  if(!object["subject"]) {
    this.getLogger().error("Invalid token subject for gender based token: " + token_name + ". Token value must contain a subject. Subject can be a string or an object with a gender.");
    return false
  }
  if(typeof object["subject"] == "string") {
    gender = object["subject"]
  }else {
    if(typeof object["subject"] == "object") {
      gender = object["subject"]["gender"];
      if(!gender) {
        this.getLogger().error("Cannot determine gender for token subject: " + token_name);
        return false
      }
    }else {
      this.getLogger().error("Invalid token subject for gender based token: " + token_name + ". Subject does not have a gender.");
      return false
    }
  }
  if(this.definition["operator"] == "is") {
    return gender == this.definition["value"]
  }else {
    if(this.definition["operator"] == "is_not") {
      return gender != this.definition["value"]
    }
  }
  return false
};
Tr8n.Proxy.NumericRule = function(definition, options) {
  this.definition = definition;
  this.options = options
};
Tr8n.Proxy.NumericRule.prototype = new Tr8n.Proxy.LanguageRule;
Tr8n.Proxy.NumericRule.transform = function(count, values) {
  if(count == 1) {
    return values[0]
  }
  if(values.length == 2) {
    return values[1]
  }
  return values[0].pluralize()
};
Tr8n.Proxy.NumericRule.prototype.evaluate = function(token_name, token_values) {
  var object = this.getTokenValue(token_name, token_values);
  if(object == null) {
    return false
  }
  var token_value = null;
  if(typeof object == "string" || typeof object == "number") {
    token_value = "" + object
  }else {
    if(typeof object == "object" && object["subject"]) {
      token_value = "" + object["subject"]
    }else {
      this.getLogger().error("Invalid token value for numeric token: " + token_name);
      return false
    }
  }
  this.getLogger().debug("Rule value: '" + token_value + "' for definition: " + this.getDefinitionDescription());
  var result1 = this.evaluatePartialRule(token_value, this.definition["part1"], this.sanitizeArrayValue(this.definition["value1"]));
  if(this.definition["multipart"] == "false" || this.definition["multipart"] == false || this.definition["multipart"] == null) {
    return result1
  }
  this.getLogger().debug("Part 1: " + result1 + " Processing part 2...");
  var result2 = this.evaluatePartialRule(token_value, this.definition["part2"], this.sanitizeArrayValue(this.definition["value2"]));
  this.getLogger().debug("Part 2: " + result2 + " Completing evaluation...");
  if(this.definition["operator"] == "or") {
    return result1 || result2
  }
  return result1 && result2
};
Tr8n.Proxy.NumericRule.prototype.evaluatePartialRule = function(token_value, name, values) {
  if(name == "is") {
    if(Tr8n.Utils.indexOf(values, token_value) != -1) {
      return true
    }
    return false
  }
  if(name == "is_not") {
    if(Tr8n.Utils.indexOf(values, token_value) == -1) {
      return true
    }
    return false
  }
  if(name == "ends_in") {
    for(var i = 0;i < values.length;i++) {
      if(token_value.match(values[i] + "$")) {
        return true
      }
    }
    return false
  }
  if(name == "does_not_end_in") {
    for(var i = 0;i < values.length;i++) {
      if(token_value.match(values[i] + "$")) {
        return false
      }
    }
    return true
  }
  return false
};
Tr8n.Proxy.ListRule = function(definition, options) {
  this.definition = definition;
  this.options = options
};
Tr8n.Proxy.ListRule.prototype = new Tr8n.Proxy.LanguageRule;
Tr8n.Proxy.ListRule.transform = function(object, values) {
  return""
};
Tr8n.Proxy.ListRule.prototype.evaluate = function(token, token_values) {
  return true
};
Tr8n.Proxy.GenderListRule = function(definition, options) {
  this.definition = definition;
  this.options = options
};
Tr8n.Proxy.GenderListRule.prototype = new Tr8n.Proxy.LanguageRule;
Tr8n.Proxy.GenderListRule.transform = function(object, values) {
  return""
};
Tr8n.Proxy.GenderListRule.prototype.evaluate = function(token, token_values) {
  return true
};
Tr8n.Tml = Tr8n.Tml || {};
Tr8n.Tml.Label = function(node, proxy) {
  this.node = node;
  this.label = "";
  this.description = "";
  this.tokens = {};
  this.options = {};
  this.proxy = proxy;
  for(var i = 0;i < this.node.childNodes.length;i++) {
    var childNode = this.node.childNodes[i];
    if(childNode.nodeType == 3) {
      this.label = this.label + " " + Tr8n.Utils.trim(childNode.nodeValue)
    }else {
      if(childNode.nodeName == "TML:TOKEN") {
        var token = new Tr8n.Tml.Token(childNode, this.tokens);
        this.label = Tr8n.Utils.trim(this.label) + " " + token.toTokenString()
      }
    }
  }
  this.description = this.node.attributes["desc"] || this.node.attributes["description"];
  this.description = this.description ? this.description.value : null;
  this.label = this.label.replace(/\n/g, "");
  this.label = Tr8n.Utils.trim(this.label)
};
Tr8n.Tml.Label.prototype = {translate:function() {
  this.node.innerHTML = this.proxy.translate(this.label, this.description, this.tokens, this.options)
}};
Tr8n.Tml = Tr8n.Tml || {};
Tr8n.Tml.Token = function(node, tokens) {
  this.node = node;
  this.type = this.node.attributes["type"];
  this.type = this.type ? this.type.value : "data";
  this.name = this.node.attributes["name"];
  this.name = this.name ? this.name.value : "unknown";
  this.name = this.name.toLowerCase();
  this.context = this.node.attributes["context"];
  this.context = this.context ? this.context.value : null;
  this.content = "";
  for(var i = 0;i < this.node.childNodes.length;i++) {
    var childNode = this.node.childNodes[i];
    var token_type = this.node.attributes["type"] ? this.node.attributes["type"].nodeValue : "data";
    if(childNode.nodeType == 3) {
      if(node.attributes["context"] && node.attributes["context"].nodeValue == "gender") {
        tokens[this.name] = {subject:node.attributes["value"].nodeValue, value:Tr8n.Utils.trim(childNode.nodeValue)}
      }else {
        tokens[this.name] = Tr8n.Utils.trim(childNode.nodeValue)
      }
    }else {
      var html_tag = childNode.nodeName.toLowerCase();
      var attributes = [];
      if(childNode.attributes["style"]) {
        attributes.push("style='" + childNode.attributes["style"].nodeValue + "'")
      }
      if(childNode.attributes["class"]) {
        attributes.push("class='" + childNode.attributes["class"].nodeValue + "'")
      }
      tokens[this.name] = "<" + html_tag + " " + attributes.join(" ") + ">{$0}</" + html_tag + ">";
      this.content = "";
      for(var j = 0;j < childNode.childNodes.length;j++) {
        var grandChildNode = childNode.childNodes[j];
        if(grandChildNode.nodeType == 3) {
          this.content = Tr8n.Utils.trim(this.content) + " " + Tr8n.Utils.trim(grandChildNode.nodeValue)
        }else {
          if(grandChildNode.nodeName == "TML:TOKEN") {
            var token = new Tr8n.Tml.Token(grandChildNode, tokens);
            this.content = Tr8n.Utils.trim(this.content) + " " + token.toTokenString()
          }
        }
      }
    }
  }
  this.content = this.content.replace(/\n/g, "");
  this.content = Tr8n.Utils.trim(this.content)
};
Tr8n.Tml.Token.prototype = {toTokenString:function() {
  if(this.type == "data") {
    return"{" + this.name + "}"
  }else {
    return"[" + this.name + ": " + this.content + "]"
  }
}};
var tr8nTranslator = null;
var tr8nLanguageSelector = null;
var tr8nLightbox = null;
function initializeTr8n() {
  var setup = function() {
    tr8nTranslator = new Tr8n.Translator;
    tr8nLanguageSelector = new Tr8n.LanguageSelector;
    tr8nLightbox = new Tr8n.Lightbox;
    Tr8n.Utils.addEvent(document, "keyup", function(event) {
      if(event.keyCode == 27) {
        tr8nTranslator.hide();
        tr8nLanguageSelector.hide();
        tr8nLightbox.hide()
      }
    })
  };
  Tr8n.Utils.addEvent(window, "load", setup)
}
;
