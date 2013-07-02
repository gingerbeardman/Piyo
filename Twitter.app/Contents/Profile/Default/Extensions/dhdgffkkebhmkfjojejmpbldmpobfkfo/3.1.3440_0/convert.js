
(function(){var b={encode:function(c){return unescape(encodeURIComponent(c))
},decode:function(c){return decodeURIComponent(escape(c))
},};var a={encode:function(c){var e="";for(var d=0;
d<c.length;d++){e+=String.fromCharCode(c.charCodeAt(d)&255)
}return window.btoa(e)},decode:function(c){return atob(c)
}};Registry.register("convert",{UTF8:b,Base64:a,encode:function(c){return escape(c)
},decode:function(c){return unescape(c)},encodeR:function(c){return c
},decodeR:function(c){return c}})})();