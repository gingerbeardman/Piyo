
(function(){Registry.require("helper");Registry.require("xmlhttprequest");
var c={};var i=null;var d=Registry.get("helper");var e=function(o){var m=o;
var l=Array.prototype.slice.call(arguments,1);if(l.length==1&&d.toType(l[0])==="Array"){l=l[0]
}var p=new RegExp("_0[a-zA-Z].*0");for(var n=0;n<l.length;
l++){if(m.search(p)==-1){console.log("getMessage(): wrong argument count!!!");
break}m=m.replace(p," "+l[n])}return m.replace(/_/g," ")
};var g=function(t,p){var l=t.message;var q=false;if(p.length==1&&d.toType(p[0])==="Array"){p=p[0];
q=true}for(var n in t.placeholders){try{var u=Number(t.placeholders[n].content.replace(/^\$/,""))-1;
var s;if(u<p.length){s=q?p:p[u];l=l.replace("$"+n+"$",s)
}else{console.log("i18n: invalid argument count on processing '"+l+"' with args "+JSON.stringify(p))
}}catch(r){console.log("i18n: error processing '"+l+"' with args "+JSON.stringify(p))
}}return l};var j=function(l){var m=chrome.i18n.getMessage.apply(this,arguments);
if(m){return m}else{return e.apply(this,arguments)}};
var h=function(l){return a.apply(this,arguments)};var a=function(l){if(!i){return j.apply(this,arguments)
}else{var m=c[l];if(m){return g(m,Array.prototype.slice.call(arguments,1))
}else{return e.apply(this,arguments)}}};var b=function(){return i
};var f=function(m){if(m==="null"){m=null}if(i==m){return true
}if(m){var l="_locales/"+m+"/messages.json";var o=Registry.getRaw(l);
if(o){try{c=JSON.parse(o);i=m;return true}catch(n){console.log("i18n: parsing locale "+m+" failed!")
}}else{console.log("i18n: retrieving locale "+m+" failed!")
}return false}else{c={};i=null;return true}};var k=function(l){var m=function(n){if(l){l(n.i18n)
}};chrome.extension.sendMessage({method:"getLocale"},m)
};Registry.register("i18n",{getMessage:h,getOriginalMessage:j,askForLocale:k,getLocale:b,setLocale:f})
})();