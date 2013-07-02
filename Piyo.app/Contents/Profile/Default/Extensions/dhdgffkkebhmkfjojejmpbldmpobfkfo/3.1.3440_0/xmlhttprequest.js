
(function(){Registry.require("helper");var e=Registry.get("helper");
var a={};var c=function(h){var g=e.isLocalImage(h);
return(h&&h.length>4&&h.substr(0,4)=="http")||g};var f={"user-agent":true,referer:true,origin:true,host:true,"proxy-connection":true,"accept-encoding":true,"accept-charset":true};
var b=function(g,q,v){if(q===undefined){q={}}if(v===undefined){v={}
}if(window.chrome!=undefined&&window.chrome.xmlHttpRequest!=undefined){window.chrome.xmlHttpRequest(g,q,v);
return}var s=!(q.callback||q.onreadychange||q.onprogress||q.onerr||q.done);
var j=new XMLHttpRequest();var u=function(){var p="";
var x=g.url;if(j.readyState>2){p=j.getAllResponseHeaders();
if(j.readyState==4){if(p){p=p.replace(/TM-finalURL\: .*[\r\n]{1,2}/,"")
}var y=j.getResponseHeader("TM-finalURL");if(y){x=y
}}}var w={readyState:j.readyState,responseHeaders:p,finalUrl:x,status:(j.readyState==4?j.status:0),statusText:(j.readyState==4?j.statusText:"")};
if(j.readyState==4){if(!j.responseType||j.responseType==""){w.responseXML=(j.responseXML?escape(j.responseXML):null);
w.responseText=j.responseText;w.response=j.response
}else{w.responseXML=null;w.responseText=null;w.response=j.response
}}else{w.responseXML=null;w.responseText="";w.response=null
}return w};var m=function(){var p=u();if(p.readyState==4&&p.status!=200&&p.status!=0&&g.retries>0){g.retries--;
b(g,q,v);return}if(q.callback){q.callback(p)}if(q.done){q.done()
}};var r=function(){var p=u();if(p.readyState==4&&p.status!=200&&p.status!=0&&g.retries>0){g.retries--;
b(g,q,v);return}if(q.onerr){q.onerr(p)}else{if(q.callback){q.callback(p)
}}if(q.done){q.done()}delete j};var n=function(C,z,B){if(B===undefined){B={}
}try{var w=null;var y=null;if(C.lengthComputable||C.totalSize>0){w=C.position||C.loaded;
y=C.totalSize||C.total}else{var x=Number(e.getStringBetweenTags(z.responseHeaders.toLowerCase(),"content-length:","\n").trim());
var p=j.responseText?j.responseText.length:0;if(x==0){x=-1
}w=C.position||C.loaded||p;y=C.totalSize||C.total||x
}B.lengthComputable=C.lengthComputable;B.loaded=w;B.done=w;
B.total=y;B.totalSize=y}catch(A){}return B};var t=function(w){var p=u();
if(q.onreadychange){p.progress=n(w,p);q.onreadychange(p)
}};var k=function(w){var p=u();if(q.onprogress){q.onprogress(n(w,p,p))
}};if(!s){j.onload=m;j.onerror=r;j.onprogress=k;j.onreadystatechange=t
}try{if(!v.internal&&!c(g.url)){throw new Error("Invalid scheme of url: "+g.url)
}j.open(g.method,g.url,!s);if(g.headers){for(var h in g.headers){var i=h;
if(a.use&&f[h.toLowerCase()]){i=a.prefix+h}j.setRequestHeader(i,g.headers[h])
}}if(typeof(g.overrideMimeType)!=="undefined"){j.overrideMimeType(g.overrideMimeType)
}if(typeof(g.responseType)!=="undefined"){j.responseType=g.responseType
}if(typeof(g.data)!=="undefined"){j.send(g.data)}else{j.send()
}}catch(o){console.log("xhr: error: "+o.message);var l={responseXML:"",responseText:"",response:null,readyState:4,responseHeaders:"",status:403,statusText:"Forbidden"};
if(q.callback){q.callback(l)}if(q.done){q.done()}if(s){return l
}}if(s){return u()}};var d=function(g){a=g};Registry.register("xmlhttprequest",{run:b,setWebRequest:d})
})();