
var V=false;var D=false;var UV=false;(function(){var f=false;
var m=null;var e="0.0.0";var i=false;var o=null;var b="???";
if(!window.requestFileSystem){window.requestFileSystem=window.webkitRequestFileSystem
}if(!window.BlobBuilder){window.BlobBuilder=window.WebKitBlobBuilder
}Registry.require("convert");Registry.require("xmlhttprequest");
Registry.require("compat");Registry.require("parser");
Registry.require("crcrc");Registry.require("helper");
Registry.require("i18n");Registry.require("curtain");
Registry.require("tabview");var g=Registry.get("crcrc").cr;
var l=Registry.get("crcrc").crc;var s=Registry.get("convert");
var j=Registry.get("i18n");var r=Registry.get("curtain");
var p=Registry.get("helper");var c=Registry.get("tabview");
var a=Registry.get("xmlhttprequest").run;var n=function(){var A;
var u=document.getElementById("ask");var w=l("div","main_container p100100","ask","main");
if(u){var t=u.parentNode;t.removeChild(u);t.appendChild(w);
document.body.setAttribute("class","main")}if(V){console.log("ask: head")
}var E=l("div","head_container","ask","head_container");
var x=l("div","tv_container","ask","tv_container");
var B=g("a","head_link","ask","head_link");B.href="http://tampermonkey.net";
B.target="_blank";var F=l("div","float margin4","ask","head1");
var v=l("img","banner","ask");v.src=chrome.extension.getURL("images/icon128.png");
var C=l("div","float head margin4","ask","head2");var H=g("div","fire");
var y=l("div","version","version","version");y.textContent=" by Jan Biniok";
var G=g("div","search","box","");H.textContent="Tampermonkey";
F.appendChild(v);C.appendChild(H);C.appendChild(y);
B.appendChild(F);B.appendChild(C);E.appendChild(B);
E.appendChild(G);w.appendChild(E);w.appendChild(x);
var z=c.create("_main",x);A=k(z);f=true;r.hide();return A
};var k=function(u){var v={name:"main",id:"main"};var x=g("div",v.name,v.id,"tab_content_h");
x.textContent=b;var t=g("div",v.name,v.id,"tab_content");
var w=u.appendTab(p.createUniqueId(v.name,v.id),x,t);
return t};var h=function(){if(!window.location.search&&!window.location.hash){window.onhashchange=function(){h()
};return}o=p.getUrlArgs();var v=function(z){window.location=z+"#bypass=true"
};if(o.i18n){j.setLocale(o.i18n)}if(o.script){o.script=s.Base64.decode(o.script);
b=j.getMessage("Install");var u=o.script;var y;r.wait(j.getMessage("Please_wait___"));
var x=function(F){var G=l("div","heading","indzsll","heading");
var z=l("div","nameNname64","install","heading_name");
z.textContent=o.script;G.appendChild(z);y.appendChild(G);
var B=l("div","editor_outer","","");var C=l("div","editor","","");
var A=l("textarea","editorta","","");A.setAttribute("wrap","off");
A.value=F.responseText;y.appendChild(B);B.appendChild(C);
C.appendChild(A);if(!o.nocm){var E=A.parentNode;E.removeChild(A);
y.editor=new MirrorFrame(E,{value:F.responseText,noButtons:true,matchBrackets:true})
}};var t=function(A){if(A.readyState==4){r.hide();if(A.status==200||A.status==0){var z=Registry.get("parser").createScriptFromSrc(A.responseText);
if(!z.name||z.name==""||(z.version==undefined)){window.close();
return}y=n();x(A);var B=function(){if(confirm(j.getMessage("Do_you_want_to_install_this_userscript_in_Tampermonkey_or_Chrome"))){var C={old_url:u};
q(z.name,z.textContent,C)}else{v(u)}};window.setTimeout(B,500)
}else{p.alert(j.getMessage("Unable_to_load_script_from_url_0url0",u));
v(u)}}};var w={method:"GET",url:u,retries:3};a(w,{callback:t})
}else{n()}};var q=function(v,x,u,t){try{var w=u.old_url?u.old_url:"";
chrome.extension.sendMessage({method:"saveScript",name:v,code:x,file_url:w},function(z){r.hide();
if(t){t()}});r.wait(j.getMessage("Please_wait___"))
}catch(y){console.log("sS: "+y.message)}};chrome.extension.onMessage.addListener(function(v,u,t){if(V){console.log("a: method "+v.method)
}if(v.method=="confirm"){var w=function(x){t({confirm:x})
};p.confirm(v.msg,w)}else{if(v.method=="showMsg"){p.alert(v.msg);
t({})}else{if(V){console.log("a: "+j.getMessage("Unknown_method_0name0",v.method))
}return false}}return true});if(V){console.log("Register request listener (ask)")
}var d=function(){window.removeEventListener("DOMContentLoaded",d,false);
window.removeEventListener("load",d,false);h()};window.addEventListener("DOMContentLoaded",d,false);
window.addEventListener("load",d,false)})();