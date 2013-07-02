
Registry.registerRaw("environment.js",function(){var p="DOMContentLoaded";
var x="load";var L="DOMNodeInserted";var A=0;var E=1;
var d="TM_internal";TMwin.domContentLoaded=false;TMwin.loadHappened=false;
TMwin.domNodeInserted=false;TMwin.props={};TMwin.adjustLogLevel=function(T){if(T!==undefined){logLevel=T
}D|=(logLevel>=60);EV|=(logLevel>=80);V|=(logLevel>=100);
EMV|=(logLevel>=100)};var y={objs:{},push:function(T,W){if(W!==0&&W!==1){W=0
}var U=Math.floor(Math.random()*6121983+1);y.objs[U]={fn:T,prio:W};
return U},remove:function(T){delete y.objs[T]},get:function(){var U=[];
for(var W=0;W<=1;W++){for(var T in y.objs){if(!y.objs.hasOwnProperty(T)){continue
}if(y.objs[T].prio===W){U.push(y.objs[T].fn)}}}return U
}};TMwin.adjustLogLevel();var C=TMwin.chromeEmu;var s=function(T){return({}).toString.apply(T).match(/\s([a-z|A-Z]+)/)[1]
};var g=function(T){var U=document.createElement("div");
U.appendChild(T.cloneNode(true));return U.innerHTML
};var I=function(U,T){if(T==undefined){T=100}return(T&&U&&(U==document||(I(U.parentNode,T-1))))
};var t=function(){var T=function(){};T.prototype={};
return new T()};var N=function(){var Y=V;var X=t();
var Z={self:{get:function(){return X}},window:{get:function(){return X
}},content:{get:function(){return X.top}},top:{get:function(){return window.top===window.self?X:window.top
}},parent:{get:function(){return window.top===window.self?X:window.parent
}},setTimeout:{enhance:function(){var ad=arguments;
var ae=ad[0];if(typeof ae==="string"){ad[0]=new Function(ae)
}else{ad[0]=function(){return ae.apply(X,arguments)
}}return window.setTimeout.apply(window,ad)}},setInterval:{enhance:function(){var ad=arguments;
var ae=ad[0];if(typeof ae==="string"){ad[0]=new Function(ae)
}else{ad[0]=function(){return ae.apply(X,arguments)
}}return window.setInterval.apply(window,ad)}},clearInterval:{wrap:true},clearTimeout:{wrap:true},addEventListener:{wrap:true},removeEventListener:{wrap:true}};
var ac;for(var U in TMwin.windowProps){if(!TMwin.windowProps.hasOwnProperty(U)||Z[U]===false){continue
}ac={};try{try{var T=window[U];if(Z[U]){if(Z[U].wrap){ac.wrap=true
}else{if(Z[U].direct){ac.direct=true}else{if(Z[U].enhance){ac.enhance=Z[U].enhance
}else{if(Z[U].get){ac.get=Z[U].get}}}}}else{if(typeof window[U]==="function"){if(TMwin.windowProps[U].proto){ac.wrap=true;
ac.copy=true}else{ac.direct=true}}else{if(typeof window[U]==="number"||typeof window[U]==="string"){ac.get=true
}else{if(TMwin.windowProps[U].event&&TMwin.windowProps[U].proto){ac.event=true
}else{ac.direct=true}}}}}catch(aa){ac.get=true}if(ac.direct){if(Y){console.debug("sandbox: window["+U+"] -> direct reference")
}X[U]=window[U]}else{if(ac.enhance){if(Y){console.debug("sandbox: window["+U+"] -> enhanced reference")
}X[U]=ac.enhance}else{if(ac.event){if(Y){console.debug("sandbox: window["+U+"] -> event reference")
}(function W(){var ae=U;var af=undefined;var ah=undefined;
var ad=null;var ag=null;ag=function(ai){af=ai;ah=function(){return ai.apply(X,arguments)
};window[ae]=ah};ad=function(){return af===undefined||ah!==window[ae]?window[ae]:af
};X.__defineGetter__(ae,ad);X.__defineSetter__(ae,ag)
})()}else{if(ac.get||ac.set){if(Y){console.debug("sandbox: window["+U+"] -> "+(typeof ac.get==="function"||typeof ac.set==="function"?"enhanced ":"")+"getter/setter reference")
}(function W(){var ae=U;var af=undefined;var ad=null;
var ag=null;if(typeof ac.get==="function"){ad=ac.get
}else{ad=function(){return af===undefined?window[ae]:af
}}if(typeof ac.set==="function"){ag=ac.set}else{if(!ac.get){ag=function(ah){return af=ah
}}}if(ad){X.__defineGetter__(ae,ad)}if(ag){X.__defineSetter__(ae,ag)
}})()}else{if(ac.wrap){if(Y){console.debug("sandbox: window["+U+"] -> wrapped reference ")
}(function W(){var ad=U;X[ad]=function(){return window[ad].apply(window,arguments)
};if(ac.copy){for(var ae in window[ad]){if(!window[ad].hasOwnProperty(ae)){continue
}X[ad][ae]=window[ad][ae];if(Y){console.debug("sandbox:     add prop to wrapper ("+ad+"["+ae+"])")
}}}})()}}}}}}catch(ab){console.warn("env: error while creating a new sandbox: "+ab.message)
}}return X};var M=function(aB,ab,X,W,aq){var Y=null;
try{var au=W.contexts[aB.id];var ae="";var av="";if(!au.__TMbackref){au.__TMbackref={}
}var ao="";var an="(function(";var am=") { try {\n";
var al="\n} catch (e) {\n console.log(\"ERROR: Execution of script '"+aB.name+'\' failed! " + e.message);\n console.log(e.stack.replace(/\\(eval at <anonymous> /g, "").replace(/<anonymous>:/g, "").replace(/chrome-extension:\\/\\/[\\w]{32}\\/content\\.js:\\d*:\\d*\\)*, /g, ""));\n}\n}).apply(context, [';
var aj="]);";var ai="";if(TMwin.use.proxy==="sandbox"){ao="with (sandbox) {\n";
ai="}\n"}var Z=["sandbox","context"];var ay=[undefined,undefined];
for(var ak in W.elements[aB.id]){if(!W.elements[aB.id].hasOwnProperty(ak)){continue
}var ag=W.elements[aB.id][ak];if(ag.name){if(ag.overwrite){Z.push(ag.name);
ay.push(ag.value)}else{if(ag.scriptid){au.__TMbackref[ag.name+"_"+ag.scriptid]=ag.value;
Z.push(ag.name);ay.push('context.__TMbackref["'+ag.name+"_"+ag.scriptid+'"]')
}else{au[ag.name]=ag.value;Z.push(ag.name);ay.push("context."+ag.name)
}}}else{if(D){console.warn("env: WARN: unexpected item in props elem: "+JSON.stringify(ag))
}}}av='arguments.callee.__tmid = { id: "'+aB.id+'", run_at: "'+aB.options.run_at+'", ns: "'+aB.namespace+'" };\n';
Y=av+ao+an+Z.join(",")+am+X+ab+al+ay.join(",")+aj+ai;
var ah=function(aF,aD,aC){var aE=new Function("context","sandbox",Y);
aE.apply(aD,[aD,aC])};if(aq){aq(ah,[Y,au,W.sandbox])
}else{ah(Y,au,W.sandbox)}}catch(ax){var af={maxerr:999,newcap:true,es5:true,sloppy:true,browser:true,white:true,plusplus:true,nomen:true,"continue":true,todo:true,eqeq:true,passfail:false,unparam:true,devel:true};
var ac=null;try{ac=JSLINT}catch(aA){}var ad=ac?ac(Y,af):true;
var aw="";if(ad){aw=ae+ab}else{var U=(av+ae).split("\n").length+2;
var T=X.split("\n").length;var az="";for(var at in JSLINT.errors){var ar=JSLINT.errors[at];
if(ar&&ar.line>=U){var ap=ar.line-U+1;az+=ap>T?"script: ":"require: ";
az+=ar.reason.replace(/.$/,"")+" on line: "+ap+" at character: "+ar.character+"\n"
}}aw="JSLINT output:\n"+az}if(D||ad){console.error("env: ERROR: Syntax error @ '"+aB.name+"'!\n##########################\n"+aw+"##########################\nERROR: "+ax.message+"\n");
console.error(ax.stack)}else{console.error("env: ERROR: Syntax error @ '"+aB.name+"'!\n"+ax.message+"\n",ax.stack)
}var aa=function(){if(D){C.extension.sendMessage({method:"copyToClipboard",data:{content:ab,type:"test"},id:"42"},function(){})
}throw ax};window.setTimeout(aa,1);return}};var G=[];
var k={events:[],done:{},running:null};var v=[];var b=function(aa,Y,X,Z){var W={attrChange:0,attrName:null,bubbles:true,cancelBubble:false,cancelable:false,clipboardData:undefined,currentTarget:null,defaultPrevented:false,eventPhase:0,newValue:null,prevValue:null,relatedNode:null,returnValue:true,srcElement:null,target:null,timeStamp:(new Date()).getTime()};
var U=new Event();for(var T in W){U[T]=W[T]}for(var T in Y){U[T]=Y[T]
}U.type=aa;X.apply(Z,[U])};var m=function(T,U){if(V||EV){console.log("env: postLoadEvent!")
}var W={attrName:"null",newValue:"null",prevValue:"null",eventPhase:window.Event.AT_TARGET,attrChange:MutationEvent.ADDITION,target:document,relatedNode:document,srcElement:document};
b(x,W,T,U)};var K=function(T,U){if(V||EV){console.log("env: postDomEventListener!")
}var W={attrName:"null",newValue:"null",prevValue:"null",eventPhase:window.Event.AT_TARGET,attrChange:MutationEvent.ADDITION,target:document,relatedNode:document,srcElement:document};
b(p,W,T,U)};var S=function(X,Y,T,aa){if(!k){return}if(V||EV){console.log("env: refireAllNodeInserts!")
}var U=k.events.length;for(var W=0;W<U;W++){if(!aa||k.events[W].domContentLoaded){var Z={attrName:"",newValue:"",prevValue:"",eventPhase:window.Event.AT_TARGET,target:k.events[W].event.target,relatedNode:k.events[W].event.relatedNode,srcElement:k.events[W].event.srcElement};
b(L,Z,X,Y)}if(!k.running){return}}};var l=function(T){TMwin.loadHappened=true;
TMwin.domContentLoaded=true;if(V||EV||D){console.log("env: DOMContentLoaded Event!")
}u()};var Q=function(T){if(!TMwin.domNodeInserted&&(V||EV||D)){console.log("env: first DOMNodeInserted Event!")
}TMwin.loadHappened=true;TMwin.domNodeInserted=true;
if(k){k.events.push({event:T,domContentLoaded:TMwin.domContentLoaded})
}};var J=function(T){TMwin.loadHappened=true;if(V||EV||D){console.log("env: load Event!")
}};var a=function(){document.removeEventListener(L,Q,false);
document.removeEventListener(p,l,false);document.removeEventListener(x,J,false);
window.removeEventListener("unload",a,false);if(y!=null){var U=y.get();
for(var T=0;T<U.length;T++){U[T]()}y=null}if(C.clean){C.clean()
}};var u=function(){if(!TMwin.domContentLoaded){if(V||EV||D){console.log("env: Content not loaded, schedule loadListeners run!")
}return -1}var T=G.length;while(G.length>0){var U=function(){var W=G.shift();
try{window.setTimeout(W.fn,1)}catch(X){console.log("ERROR: Execution (loadListener) of script env "+W.name+" failed!"+X.message)
}};U()}return T};var i=function(U,T){U()};var z=function(U,T){if(!document.body){var W=function(){document.removeEventListener("load",W,false);
document.removeEventListener("DOMNodeInserted",W,false);
document.removeEventListener("DOMContentLoaded",W,false);
z(U,T)};document.addEventListener("load",W,false);document.addEventListener("DOMNodeInserted",W,false);
document.addEventListener("DOMContentLoaded",W,false)
}else{var X=function(){U()};window.setTimeout(X,1)}};
var B=function(X,U,W){var T=function(){X()};G.push({fn:T,name:W});
if(!TMwin.domNodeInserted&&!TMwin.domContentLoaded){if(V||EV||D){console.log("env: schedule for node Insert Event!")
}}else{u()}};function h(){var U=[window.HTMLDocument.prototype,window.__proto__];
var T=[];for(var X=0;X<U.length;X++){var W=function(){var Y=U[X];
if(!Y.__addEventListener){Y.__addEventListener=Y.addEventListener;
Y.__removeEventListener=Y.removeEventListener;Y.removeEventListener=function(ab,aa,Z){if(ab==L){if(k&&k.running==aa){if(EV){console.log("env: detected removeEventListener while refireAllNodeInserts")
}k.running=null}}this.__removeEventListener(ab,aa,Z)
};Y.addEventListener=function(Z,ag,ad){if(V||EV){console.log("env: addEventListener "+Z)
}var ah=true;if(Z==x||Z==p||Z==L){var aa=null;var ae=this;
try{aa=f(arguments.callee)}catch(af){if(D){console.error("env: Error: event "+Z,af)
}}if(V||EV){console.log("env: sid done "+Z)}if(aa){var ac=null;
if(Z==x){if(TMwin.loadHappened){ac=function(){m(ag,ae)
};ah=false;T.splice(1,0,ac)}}else{if(Z==p){if(TMwin.domContentLoaded){ac=function(){K(ag,ae)
};ah=false;T.push(ac)}}else{if(Z==L){if(k&&!k.done[aa]){k.done[aa]=true;
ac=function(){var ai=aa.run_at!="document-start"&&aa.run_at!="document-body";
k.running=ag;S(ag,ae,aa,ai);if(k.running){ae.__addEventListener(Z,ag,ad)
}k.running=null};T.push(ac)}}}}if(ac){var ab=function(){if(T.length){var ai=T[0];
T=T.slice(1);ai()}};window.setTimeout(ab,1);ah=false
}}}if(ah){this.__addEventListener(Z,ag,ad)}};y.push(function(){Y.removeEventListener=Y.__removeEventListener;
Y.addEventListener=Y.__addEventListener})}};W()}}var f=function(U,T){if(T===undefined){T=20
}if(T==0){return null}if(!U.__tmid&&U.caller){var W=f(U.caller,T-1);
return W}return U.__tmid};function P(){var T="HTMLDocument";
if(!window[T].prototype.__evaluate){window[T].prototype.__evaluate=window[T].prototype.evaluate;
window[T].prototype.evaluate=function(ad,W,aa,Z,Y){if(V){console.log("env: document.evaluate "+ad)
}if(!W){W=this}var ac;if(typeof XPathResult!="undefined"){var U=null;
var ae=ad;try{ac=this.__evaluate(ae,W,aa,Z,Y)}catch(ab){if(V){console.log("env: Error: document.evaluate "+JSON.stringify(ab))
}}var X=true;try{X&=!ac.snapshotLength}catch(ab){}try{X&=!ac.singleNodeValue
}catch(ab){}if(X&&ad.charAt(0)!="."&&!I(W)){if(V){console.log("env: query added elem for "+ae)
}ae=(ad.charAt(0)=="/"?".":"./")+ad;ac=this.__evaluate(ae,W,aa,Z,Y)
}else{if(V){console.log("env: queried document for "+ae)
}}if(V){console.log("env: query returned ");console.log(ac)
}}else{if(V){console.log("env: XPathResult == undefined, but selectNodes via "+xpathExpr)
}ac=W.selectNodes(xpathExpr)}return ac};y.push(function(){window[T].prototype.evaluate=window[T].prototype.__evaluate
})}}function O(){Object.defineProperties(window,{content:{get:function(){return window.top
},enumerable:true,configurable:false}})}function q(){if(TMwin.use.safeContext){window.open=function(U){var X="__o__"+TM_context_id;
var W="window."+X+' = window.open(decodeURI("'+encodeURI(U)+'"));';
TM_do(W);var T=unsafeWindow[X];delete unsafeWindow[X];
return T};y.push(function(){window.open=null})}}function e(){if(!TMwin.use.safeContext||window.__setTimeout){return
}window.__setTimeout=window.setTimeout;window.__setInterval=window.setInterval;
window.setTimeout=function(){var T=arguments;var U=T[0];
if(typeof U==="string"){T[0]=function(){TM_do(U)}}return __setTimeout.apply(this,T)
};window.setInterval=function(){var T=arguments;var U=T[0];
if(typeof U==="string"){T[0]=function(){TM_do(U)}}return __setInterval.apply(this,T)
};y.push(function(){window.setTimeout=window.__setTimeout;
window.setInterval=window.__setInterval})}var o=function(T,W){var Z=TM_context_id+"#"+T;
var X=null;var U=function(){if(V){console.log("env: unRegisterMenuCMD due to unload "+W.toString())
}C.extension.sendMessage({method:"unRegisterMenuCmd",name:T,id:Z},function(aa){})
};var Y=function(aa){if(X!==null){y.remove(X);X=null
}if(aa.run){if(V){console.log("env: execMenuCmd "+W.toString())
}window.setTimeout(function(){W()},1);o(T,W)}};X=y.push(U,1);
if(V){console.log("env: registerMenuCmd "+W.toString())
}C.extension.sendMessage({method:"registerMenuCmd",name:T,id:TM_context_id,menuId:Z},Y)
};var w=function(W,U){var T=null;var Y=function(){if(T===null){window.setTimeout(Y,500)
}else{if(T>0){C.extension.sendMessage({method:"closeTab",tabId:T,id:TM_context_id},X);
T=undefined}else{if(D){console.debug("env: attempt to close already closed tab!")
}}}};var X=function(Z){T=Z.tabId};if(W&&W.search(/^\/\//)==0){W=location.protocol+W
}C.extension.sendMessage({method:"openInTab",url:W,id:TM_context_id,options:U},X);
return{close:Y}};var c=function(U){var W=false;if(U.url&&U.url.substr(0,1)==="/"){U.url=window.location.origin+U.url
}var ac=function(ag,af){var ah=function(){ag(af)};if(ag&&!W){window.setTimeout(ah,1)
}};var aa=!U.responseType;if(aa){var X=C.extension.connect("xhr_"+TM_context_id);
X.postMessage({method:"xhr",details:U,id:TM_context_id});
var ad=function(af){try{if(af.success){if(U.onload){if(af.data.responseXML){af.data.responseXML=unescape(af.data.responseXML)
}ac(U.onload,af.data)}}else{if(af.change){if(U.onreadystatechange){ac(U.onreadystatechange,af.data)
}}else{if(af.progress){if(U.onprogress){ac(U.onprogress,af.data)
}}else{if(U.onerror){ac(U.onerror,af.data)}}}}}catch(ag){console.log("env: Error: TM_xmlhttpRequest - "+ag.message+"\n"+JSON.stringify(U))
}};X.onMessage.addListener(ad);var Y=function(af){console.log("env: onDisconnect! :)")
};if(V){X.onDisconnect.addListener(Y)}}else{var ae=function(af){ac(U.onload,af)
};var Z=function(af){ac(U.onreadystatechange,af)};var T=function(af){ac(U.onprogress,af)
};var ab=function(af){ac(U.onerror,af)};C.xmlHttpRequest(U,{callback:ae,onreadychange:Z,onprogress:T,onerr:ab})
}return{abort:function(){W=true}}};var F=function(T){C.extension.sendMessage({method:"getTab",id:TM_context_id},function(U){if(T){T(U.data)
}})};var H=function(T){C.extension.sendMessage({method:"saveTab",id:TM_context_id,tab:T},function(U){})
};var r=function(T){C.extension.sendMessage({method:"getTabs",id:TM_context_id},function(U){if(T){T(U.data)
}})};var R=function(U,T){C.extension.sendMessage({method:"scriptClick",url:U,id:TM_context_id},function(W){if(T){T(W)
}})};var j=function(){var T="";T+=((new Date()).getTime().toString());
T+=Math.floor(Math.random()*6121983+1);return T};var n=function(Z){var aJ=[];
var ak=Z.storage;var au=Z.script.name;var Y=Z.script;
var aD=function(aK){};var aB=null;var ar=function(){var aM={observers:1,id:1,enabled:1,hash:1,fileURL:1};
var aL={script:{}};for(var aK in Y){if(!Y.hasOwnProperty(aK)||aM[aK]){continue
}aL.script[aK]=Y[aK]}aL.script["run-at"]=Y.options.override.run_at||Y.options.run_at;
aL.script.excludes=Y.options.override.orig_excludes;
aL.script.includes=Y.options.override.orig_includes;
aL.script.matches=Y.options.override.orig_includes;
aL.script.grant=Y.grant;aL.script.unwrap=false;aL.scriptMetaStr=Z.header;
aL.scriptSource=Z.code;aL.scriptWillUpdate=!!(Y.options.fileURL&&Y.options.fileURL!="");
aL.scriptUpdateURL=Y.options.fileURL;aL.version=Z.version;
aL.scriptHandler="Tampermonkey";aL.isIncognito=TMwin.isIncognito;
return aL};var ay=function(){var aL=function(aN){if(aN.storage){for(var aM in aN.storage.data){if(!aN.storage.data.hasOwnProperty(aM)){continue
}var aO=function(){var aP=aM;var aQ=ak.data[aM];ak.data[aM]=aN.storage.data[aM];
var aR=ak.data[aM];if(V){console.log("env: storageListener - config key "+aP+": "+aQ+" -> "+aR)
}av(aP,aQ,aR,true)};aO()}}if(aN.removed){ak[aN.removed]=ae
}if(aN.error){console.log("env: Error: storage listener... :(")
}};aB=C.extension.connect("storageListener_"+TM_context_id);
aB.onMessage.addListener(aL);var aK=function(aM){console.log("env: storageListener onDisconnect! :)")
};if(V){aB.onDisconnect.addListener(aK)}aB.postMessage({method:"addStorageListener",name:au,id:TM_context_id})
};ay();var U=function(){aB.postMessage({method:"removeStorageListener",name:au,storage:ak,id:TM_context_id})
};var aj=function(aK){aB.postMessage({method:"saveStorageKey",name:au,key:aK,value:ak.data[aK],id:TM_context_id,ts:ak.ts});
if(V){console.log("env: saveStorageKey - config key "+aK+": "+ak.data[aK])
}};var ai=function(aK,aQ,aP){if(aP===ae){aP=function(aR){return aR
}}var aN=[];var aO=null;if(aK&&aK.length){aO={GM_info:true};
for(var aM in aK){if(!aK.hasOwnProperty(aM)){continue
}var aL=aK[aM];aO[aL]=true}}for(var aM in aQ){if(!aQ.hasOwnProperty(aM)){continue
}var aL=aQ[aM];if(!aO||aO[aP(aL.name)]){aN.push(aL)
}}return aN};var aF=function(aK){aj(aK)};var av=function(aM,aK,aL,aO){if(aK==aL){return
}for(var aN in aJ){if(!aJ.hasOwnProperty(aN)){continue
}var aQ=aJ[aN];if(aQ&&aQ.key==aM){if(aQ.cb){try{aQ.cb(aM,aK,aL,aO)
}catch(aP){if(D){console.warn("env: value change listener of '"+aM+"' failed with: "+aP.message)
}}}}}};var ax=function(aL,aK){var aP=0;for(var aO in aJ){if(!aJ.hasOwnProperty(aO)){continue
}var aM=aJ[aO];if(aO.id>aP){aP=aO.id}}aP++;var aN={id:aP,key:aL,cb:aK};
aJ.push(aN);return aP};var ao=function(aM){for(var aL in aJ){if(!aJ.hasOwnProperty(aL)){continue
}var aK=aJ[aL];if(aL.id==aM){delete aJ[aL];return true
}}};var aH=function(aL){var aK=ak.data[aL];ak.ts=(new Date()).getTime();
delete ak.data[aL];aF(aL);av(aL,aK,ak.data[aL],false)
};var az=function(){var aK=new Array();for(var aL in ak.data){if(!ak.data.hasOwnProperty(aL)){continue
}aK.push(aL)}return aK};var aC=function(aL,aK){var aN=ak.data[aL];
if(!aN){return aK}var aM=aN[0];aN=aN.substring(1);switch(aM){case"b":return aN=="true";
case"n":return Number(aN);case"o":try{return JSON.parse(aN)
}catch(aO){console.log("env: TM_getValue: "+aO);return aK
}default:return aN}};var aA=function(aL,aN){var aK=ak.data[aL];
var aM=(typeof aN)[0];switch(aM){case"o":try{aN=aM+JSON.stringify(aN)
}catch(aO){console.log(aO);return}break;default:aN=aM+aN
}ak.ts=(new Date()).getTime();ak.data[aL]=aN;aF(aL);
av(aL,aK,ak.data[aL],false)};var ap=function(aL){for(var aK in Y.resources){var aM=Y.resources[aK];
if(aM.name==aL){return aM.resText}}return null};var af=function(aL){for(var aK in Y.resources){var aM=Y.resources[aK];
if(aM.name==aL){return aM.resURL}}return null};var am=function(aK){if(window.console){window.console.log(aK)
}else{console.log(aK)}};var aa=function(aK){try{var aL=document.createElement("style");
aL.textContent=aK;(document.head||document.body||document.documentElement||document).appendChild(aL)
}catch(aM){console.log("Error: env: adding style "+aM)
}};var at=function(aP,aO,aN,aK,aM){if(!aO){aO=au}if(aN==ae){aN=Z.script.icon?Z.script.icon:Z.script.icon64
}var aL=function(aQ){if(aQ.clicked&&aK){aK()}};C.extension.sendMessage({method:"notification",delay:aM,msg:aP,image:aN,title:aO,id:TM_context_id},aL)
};var aw=function(aN,aM,aK){if(!aM){aM="text"}var aL=function(aO){if(aK){aK()
}};C.extension.sendMessage({method:"copyToClipboard",data:{content:aN,type:aM},id:TM_context_id},aL)
};var ab=function(aL,aK){return an(aL,aK)};var an=function(aO,aN){var aP=null;
var aL="window";var aS=function(aU,aT){aP[aT]=aU};var aM=function(aT){delete aP[aT]
};var aR="__u__"+Math.floor(Math.random()*6121983+1);
var aQ=aR+"_";if(TMwin.use.safeContext){if(window===unsafeWindow){if(window.unsafePassenger){aL=window.unsafePassenger.getName();
aS=window.unsafePassenger.set;aM=function(){}}else{console.warn("emu: unable to run execUnsafe!");
return}}else{aP=unsafeWindow}}else{aP=window}aR=aS(aO,aR)||aR;
aQ=aS(aN,aQ)||aQ;var aK=TM_do(aL+'["'+aR+'"].apply(this, '+aL+'["'+aQ+'"])');
aM(aR);aM(aQ);return aK};var aq=function(){this.GM_addStyle=function(aK){return aa(aK)
};this.GM_deleteValue=function(aK){return aH(aK)};this.GM_listValues=function(){return az()
};this.GM_getValue=function(aL,aK){return aC(aL,aK)
};this.GM_addValueChangeListener=function(aL,aK){return ax(aL,aK)
};this.GM_removeValueChangeListener=function(aK){return ao(aK)
};this.GM_log=function(aK){return am(aK)};this.GM_registerMenuCommand=function(aK,aL){return o(aK,aL)
};this.GM_openInTab=function(aL,aK){return w(aL,aK)
};this.GM_setValue=function(aK,aL){return aA(aK,aL)
};this.GM_xmlhttpRequest=function(aK){return c(aK)};
this.GM_getResourceText=function(aK){return ap(aK)};
this.GM_getResourceURL=function(aK){return af(aK)};
this.GM_notification=function(aN,aM,aL,aO,aK){return at(aN,aM,aL,aO,aK)
};this.GM_installScript=function(aK,aL){return R(aK,aL)
};this.GM_getTab=function(aK){return F(aK)};this.GM_saveTab=function(aK){return H(aK)
};this.GM_getTabs=function(aK){return r(aK)};this.GM_setClipboard=function(aL,aK,aM){return aw(aL,aK,aM)
};Object.defineProperties(this,{GM_info:{get:function(){return ar()
},enumerable:true,configurable:true},})};var ae=TMwin.undefined;
var X=[];var ah=null;for(var aE in Y.grant){if(!Y.grant.hasOwnProperty(aE)){continue
}if(Y.grant[aE]==="none"){ah=an;break}}var ag=Y.namespace+"_"+!!ah;
if(TMwin.props[ag]===ae){TMwin.props[ag]={sandbox:TMwin.use.proxy==="sandbox"?N():null,contexts:{},elements:{}};
y.push(function(){TMwin.props[ag]=null})}if(TMwin.use.proxy==="sandbox"){X.push({name:"window",value:"sandbox",overwrite:true})
}if(!TMwin.use.safeContext){var aG={window:window};
for(var aE in aG){if(!aG.hasOwnProperty(aE)){continue
}var al=function(){var aK=aE.replace(/^(.)/g,function(aL){return aL.toUpperCase()
});X.push({name:"unsafe"+aK,value:aG[aE]})};al()}}X.push({name:"CDATA",value:function(aK){this.src=aK;
this.toString=function(){return this.src};this.toXMLString=this.toString
}});X.push({name:"uneval",value:function(aK){try{return"$1 = "+JSON.stringify(aK)+";"
}catch(aL){console.log(aL)}}});if(TMwin.use.proxy!=="sandbox"){X.push({name:"console",value:console,type:E});
X.push({name:"JSON",value:JSON,type:E});X.push({name:"top",value:"window.unsafeTop",overwrite:true});
X.push({name:"location",value:window.location,type:E});
X.push({name:"document",value:window.document,type:E})
}X.push({name:"undefined",value:ae,type:E});var ad=[];
ad.push({name:"TM_addStyle",value:aa});ad.push({name:"TM_deleteValue",value:aH});
ad.push({name:"TM_listValues",value:az});ad.push({name:"TM_getValue",value:aC});
ad.push({name:"TM_log",value:am});ad.push({name:"TM_registerMenuCommand",value:o});
ad.push({name:"TM_openInTab",value:w});ad.push({name:"TM_setValue",value:aA});
ad.push({name:"TM_addValueChangeListener",value:ax});
ad.push({name:"TM_removeValueChangeListener",value:ao});
ad.push({name:"TM_xmlhttpRequest",value:c});ad.push({name:"TM_setClipboard",value:aw});
ad.push({name:"TM_getTab",value:F});ad.push({name:"TM_saveTab",value:H});
ad.push({name:"TM_getTabs",value:r});ad.push({name:"TM_installScript",value:R});
ad.push({name:"TM_runNative",value:ab});ad.push({name:"TM_execUnsafe",value:an});
ad.push({name:"TM_notification",value:at});ad.push({name:"TM_getResourceText",value:ap,scriptid:Y.id});
ad.push({name:"TM_getResourceURL",value:af,scriptid:Y.id});
var ac=[];var aI=new aq();var T=[];for(var aE in aI){T.push({name:aE,value:aI[aE]})
}ac=ac.concat(ai(Y.grant,ad,function(aK){return aK.replace(/^TM_/,"GM_")
}));ac=ac.concat(ai(Y.grant,T));X=X.concat(ac);if(Y.options.compat_prototypes){if(V||D){console.log("env: option: add toSource")
}if(!Object.prototype.toSource){Object.defineProperties(Object.prototype,{toSource:{value:function(){var aM=s(this);
if(aM==="String"){return"(String('"+this.replace(/\'/g,"\\'")+"'))"
}else{if(aM==="Number"){return"(Number('"+Number(this)+"'))"
}else{if(aM==="Array"){var aK="(new Array(";for(var aL=0;
aL<this.length;aL++){var aN=this[aL];var aM=s(aN);if(aM==="Null"){aK+="null"
}else{if(aM==="Undefined"){aK+="undefined"}else{aK+=this[aL].toSource()
}}if(aL+1<this.length){aK+=","}}aK+="))";return aK}}}return"JSON.parse(unescape('"+escape(JSON.stringify(this))+"'))"
},enumerable:false,writable:true,configurable:true,},})
}if(V||D){console.log("env: option: add some array generics")
}var W=["indexOf","lastIndexOf","filter","forEach","every","map","some","slice"];
W.forEach(function(aL){if(typeof Array[aL]!=="function"){var aK={};
aK[aL]={value:function(aM){return Array.prototype[aL].apply(aM,Array.prototype.slice.call(arguments,1))
},enumerable:false,writable:true,configurable:true,};
Object.defineProperties(Array,aK)}})}if(ah){X.push({name:"unsafeWindow",value:"undefined",overwrite:true})
}TMwin.props[ag].contexts[Z.script.id]=TMwin.use.proxy==="sandbox"?new Function():t();
TMwin.props[ag].elements[Z.script.id]=X;if(V||D){console.debug("env: execute script "+Y.name+" @ the "+(!!ah?"un":(TMwin.use.safeContext?"":"pseudo-"))+"safe context now!")
}M(Y,Z.code,Z.requires,TMwin.props[ag],ah);y.push(function(){U();
try{aB.disconnect();aB=null}catch(aK){}aJ=null;Z=null
})};C.extension.onMessage.addListener(function(Y,W,T){if(V||EV){console.log("env: request.method "+Y.method+" id: "+Y.id)
}if(Y.id&&Y.id!=TM_context_id){console.warn("env: Not for me! "+TM_context_id+"!="+Y.id);
return}var U=window.self==window.top;if(Y.method=="executeScript"){var X=function(){n(Y);
T({})};if(Y.script.options.run_at=="document-start"){if(D){console.debug("env: run '"+Y.script.name+"' ASAP -> document-start")
}i(X,Y.script.id)}else{if(Y.script.options.run_at=="document-body"){if(D){console.debug("env: schedule '"+Y.script.name+"' for document-body")
}z(X,Y.script.id)}else{if(D){console.debug("env: schedule '"+Y.script.name+"' for document-end")
}B(X,Y.script.id,Y.script.name)}}}else{if(Y.method=="onLoad"){TMwin.domContentLoaded=true;
u();T({});var ab=null;var Z=function(){if(V||EV){console.log("env: disable nodeInserts magic!")
}ab=null;k=null};y.push(function(){if(ab){if(V||EV){console.log("env: cancel nodeInserts timeout!")
}window.clearTimeout(ab)}Z()});ab=window.setTimeout(Z,2000)
}else{if(U){if(Y.method=="loadUrl"){window.location=Y.url;
T({})}else{if(Y.method=="reload"){window.location.reload();
T({})}else{if(Y.method=="confirm"){var aa=function(){var ac=confirm(Y.msg);
T({confirm:ac})};window.setTimeout(aa,100)}else{if(Y.method=="showMsg"){var aa=function(){var ac=function(){alert(Y.msg)
};window.setTimeout(ac,1);T({})};window.setTimeout(aa,100)
}else{if(Y.method=="getSrc"){T({src:Helper.getSource(document)})
}else{console.log("env: unknown method "+Y.method)}}}}}}}}});
P();h();O();q();e();document.addEventListener(L,Q,false);
document.addEventListener(p,l,false);document.addEventListener(x,J,false);
window.addEventListener("unload",a,false);if(V||D){console.debug("env: initialized (content, id:"+TM_context_id+", "+window.location.origin+window.location.pathname+") ")
}});