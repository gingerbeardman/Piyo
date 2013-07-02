
var V=false;(function(){Registry.require("pingpong");
Registry.require("crcrc");Registry.require("htmlutil");
Registry.require("i18n");var e=Registry.get("prepare").FEATURES;
var f=Registry.get("crcrc").cr;var d=Registry.get("crcrc").crc;
var i=Registry.get("htmlutil");var b=Registry.get("pingpong");
var h=Registry.get("i18n");var a=function(B){var I=document.getElementById("action");
var E=I.parentNode;E.removeChild(I);I=f("span");I.setAttribute("id","action");
E.appendChild(I);var Q=d("table","actionlayout","actionlayout");
I.appendChild(Q);var P=d("tr","actionpostr","hor");
var D=d("td","actionpostd","hor_west");var R;P.appendChild(D);
Q.appendChild(P);if(e.ACTIONMENU.COLUMNS===2){R=d("td","actionpostd","hor_east");
P.appendChild(R)}else{R=D}var G=d("div","actionregion","top");
var X=d("div","actionregion","right");var x=d("div","actionregion","left");
var U=d("div","actionregion","bottom");D.appendChild(G);
R.appendChild(X);D.appendChild(x);D.appendChild(U);
var u={top:G,left:x,right:X,bottom:U};var S=0;for(var J in B){var M=B[J];
var n=d("tr","actiontr",J.toString());var L;if(M.section){Q=d("table","actiontable","actiontable-"+M.name);
if(!u[M.pos]){console.log("a: unkonwn pos "+M.pos);
return}u[M.pos].appendChild(Q)}else{var r=d("td","imagetd actionimagetd",M.name,M.id);
var q=d("td","actiontd",M.name,M.id);var s=d("div","actionitem",M.name,M.id,"ai",true);
q.appendChild(s);if(M.image){image=i.createImage(M.image,M.name,M.id,null,"");
r.appendChild(image)}if(M.checkbox){var y=document.createElement("input");
y.type="checkbox";y.name=M.name;y.id="enabled";y.checked=M.enabled;
var H=function(){l(this.name,this.id,this.checked)};
y.addEventListener("click",H);L=document.createElement("span");
L.textContent=M.name;s.appendChild(y);s.appendChild(L)
}else{if(M.url||M.urls){var t=M.urls||[M];q.setAttribute("colspan","2");
for(var O=0;O<t.length;O++){var K=t[O];L=document.createElement("span");
L.textContent=K.name;var z=M.urls?L:q;z.url=K.url;z.newtab=K.newtab;
var w=function(){c(this.url,this.newtab)};z.addEventListener("click",w);
z.setAttribute("class",z.getAttribute("class")+" clickable");
s.appendChild(L);if(O<t.length-1){var C=document.createElement("span");
C.textContent=" | ";s.appendChild(C)}}}else{if(M.menucmd){var T=document.createElement("span");
q.id=M.id;var H=function(){k(this.id)};q.addEventListener("click",H);
q.setAttribute("class",q.getAttribute("class")+" clickable");
T.textContent=M.name;q.setAttribute("colspan","2");
s.appendChild(T)}else{if(M.runUpdate){var T=document.createElement("span");
q.id=M.id;var v=function(){j(this.id)};q.addEventListener("click",v);
q.setAttribute("class",q.getAttribute("class")+" clickable");
T.textContent=M.name;q.setAttribute("colspan","2");
s.appendChild(T)}else{if(M.userscript||M.user_agent){if(M.id){var W=M.enabled?chrome.extension.getURL("images/greenled.png"):chrome.extension.getURL("images/redled.png");
var o=function(p){if(p&&p.button&2||p.button&1||p.ctrlKey){window.open(chrome.extension.getURL("options.html")+"?open="+this.key);
p.stopPropagation()}else{l(this.name,"enabled",!this.oldvalue)
}};var F=(M.position>0)?((M.position<10)?" "+M.position:M.position):null;
var N=i.createImageText(W,M.name,"enabled","enabled",M.enabled?h.getMessage("Enabled"):h.getMessage("Disabled"),o,F);
N.oldvalue=M.enabled;r.appendChild(N);s.name=M.name;
s.oldvalue=M.enabled;s.key=M.id;s.addEventListener("click",o);
q.setAttribute("class",q.getAttribute("class")+" clickable")
}L=document.createElement("span");L.textContent=M.name;
q.setAttribute("colspan","2");s.appendChild(L)}else{L=document.createElement("span");
L.textContent=M.name;q.setAttribute("colspan","2");
s.appendChild(L)}}}}}if(M.tamperfire){var A=function(){var Z=L;
var Y=image;var aa=M.doneImage;var p=function(ab,ac){if(Z){if(ac){Z.textContent=ac
}else{Z.textContent=Z.textContent.replace("?",Number(ab))
}}if(Y){Y.setAttribute("src",aa)}};if(M.tabid){m(M.tabid,p)
}else{r=null;q=null}};A()}if(r){n.appendChild(r)}if(q){n.appendChild(q)
}}Q.appendChild(n)}};var c=function(o,n){try{var q=function(r){chrome.tabs.sendMessage(r.id,{method:"loadUrl",url:o,newtab:n},function(s){})
};if(n){chrome.extension.sendMessage({method:"openInTab",url:o},function(r){})
}else{chrome.tabs.getSelected(null,q)}}catch(p){console.log(p)
}};var j=function(){try{chrome.extension.sendMessage({method:"runScriptUpdates"},function(o){})
}catch(n){console.log(n)}};var k=function(o){try{chrome.extension.sendMessage({method:"execMenuCmd",id:o},function(p){})
}catch(n){console.log(n)}};var m=function(o,n){try{var q=function(s){var u=null;
if(s.progress){var r=s.progress.action+"... ";if(!r||r==""){r=""
}var t="";if(s.progress.state&&s.progress.state.of){t=" "+Math.round(s.progress.state.n*100/s.progress.state.of)+"%"
}u=(r!=""||t!="")?r+t:null}n(s.cnt,u)};chrome.extension.sendMessage({method:"getFireItems",countonly:true,tabid:o},q)
}catch(p){console.log(p)}};var l=function(n,r,p){try{var o={method:"modifyScriptOptions",name:n};
if(r&&r!=""){o[r]=p}chrome.extension.sendMessage(o,function(s){if(s){if(s.i18n){h.setLocale(s.i18n)
}if(s.items){a(s.items)}}});document.getElementById("action").innerHTML=h.getMessage("Please_wait___")
}catch(q){console.log("mSo: "+q.message)}};chrome.extension.onMessage.addListener(function(p,o,n){if(V){console.log("a: method "+p.method)
}if(false&&p.method=="updateActions"){a(p.items);n({})
}else{if(V){console.log("a: "+h.getMessage("Unknown_method_0name0",p.method))
}}});var g=function(){window.removeEventListener("DOMContentLoaded",g,false);
window.removeEventListener("load",g,false);var s=null;
var q=null;var o=function(){if(s){window.clearTimeout(s)
}s=null;if(q){q.parentNode.removeChild(q)}q=null};var n=function(){q=document.createElement("img");
q.setAttribute("src","images/large-loading.gif");document.getElementById("action").appendChild(q)
};var r=function(){o();l(null,false)};var p=function(){o();
if(confirm(h.getMessage("An_internal_error_occured_Do_you_want_to_visit_the_forum_"))){window.open("http://tampermonkey.net/bug")
}};s=window.setTimeout(n,500);b.ping(r,p)};window.addEventListener("DOMContentLoaded",g,false);
window.addEventListener("load",g,false)})();