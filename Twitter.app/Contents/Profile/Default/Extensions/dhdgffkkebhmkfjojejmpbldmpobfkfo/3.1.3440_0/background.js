
var trup=null;var rase=null;var rsse=null;var init=null;
var fire=null;var exte=null;var lfgs=null;var sycl=null;
var cfgo=null;var uris=null;var D=false;var V=false;
var T=false;var EV=false;var MV=false;var UV=false;
var SV=false;var YV=false;var CV=false;var NV=false;
var RV=false;var TV=false;Registry.require("prepare");
Registry.require("statistics");Registry.require("convert");
Registry.require("xmlhttprequest");Registry.require("cache");
Registry.require("uri");Registry.require("compat");
Registry.require("parser");Registry.require("helper");
Registry.require("syncinfo");Registry.require("i18n");
(function(){var M=function(a3){D|=(a3>=60);YV|=(a3>=60);
TV|=(a3>=60);RV|=(a3>=80);EV|=(a3>=80);NV|=(a3>=80);
CV|=(a3>=100);UV|=(a3>=100);MV|=(a3>=100);V|=(a3>=100);
SV|=(a3>=100)};const l=-2;const n=-1;const F=0;const af=1;
const t="uso:hash";const g="uso:timestamp";const ar="uso:script";
var aB=Registry.get("prepare").FEATURES.PREPARED_FOR_BACKGROUND();
var aZ=aB.WEBREQUEST;var aX=aB.HTML5.LOCALSTORAGE;var p=aB.HTML5.WEBKITNOTIFICATIONS;
var K=(new Date()).getTime()+Math.floor(Math.random()*61283+1);
var ax={};var aa=[];var a0={};var aO=null;var O="@re";
var at="@st";var aG="@source";var aH="@header";if(D||V){console.debug("Starting background fred @"+K)
}var ad=Registry.get("helper");var Q=Registry.get("cache");
var az=Registry.get("statistics");Q.create("requires").setOptions({timeout:30*60,check_interval:5*60}).init();
Q.create("rundata").setOptions({timeout:3*60,check_interval:2*60,retimeout_on_get:true}).init();
var S=function(a8,a7){if(V){console.log("versionCmp: "+a8+" : "+a7)
}var a4=function(bc){return ad.filter(bc.replace(/-/g,"."),/[\.0-9]/g)
};var bb=a4(a8);var ba=a4(a7);var a5=bb.split(".");
var a3=ba.split(".");var a9=a5.length<a3.length?a5.length:a3.length;
for(var a6=0;a6<a9;a6++){if(a5.length<a9){a5[a6]=0}if(a3.length<a9){a3[a6]=0
}if(Number(a5[a6])>Number(a3[a6])){return af}else{if(Number(a5[a6])<Number(a3[a6])){return n
}}}if(a3.length<a5.length){return af}return F};chrome.extension.manifest=(function(){var a3=chrome.extension.getURL("manifest.json");
var a4;try{if(a3&&a3.search("{")!=-1){a4=JSON.parse(a3)
}else{var a6=new XMLHttpRequest();a6.open("GET",a3,false);
a6.send(null);a4=JSON.parse(a6.responseText)}}catch(a5){console.log("getVersion"+a5.message);
a4={version:"0.0.0.0",name:"Tampermonkey"}}return a4
})();chrome.extension.getVersion=function(){return chrome.extension.manifest.version
};chrome.extension.getName=function(){return chrome.extension.manifest.name
};var aI=function(a4){var a3="0.0.0.0";var bd=function(){var bf=a3;
if(aB.DB.USE_LOCAL){var bf=C.getValue("TM_version",a3);
if(a3==bf){aB.DB.USE_LOCAL=false;bf=C.getValue("TM_version",a3);
aB.DB.USE_LOCAL=true}}return bf};var be=chrome.extension.getVersion();
var bb=bd();var bc=function(bm,bf){var bl=new E.Script();
var bk=U();var bi=1;var bg=function(){if(--bi==0&&bf){window.setTimeout(bf,1)
}};for(var bh in bk){var bj=function(){var br=bk[bh];
var bn=G(br);if(!bn.script||!bn.cond){console.error(aS.getMessage("fatal_error")+" ("+br+")!!!");
return}for(var bo in bl.options){if(!bl.options.hasOwnProperty(bo)){continue
}if(bn.script.options[bo]===undefined){console.log("set option "+bo+" to "+JSON.stringify(bl.options[bo]));
bn.script.options[bo]=bl.options[bo]}}for(var bq in bl.options.override){if(bn.script.options.override[bq]===undefined){console.log("set option.override."+bq+" to "+JSON.stringify(bl.options.override[bq]));
bn.script.options.override[bq]=bl.options.override[bq]
}}var bp=function(){bn.script=b(bn.script);if(bm){var bs={url:bn.script.fileURL,src:bn.script.textContent,ask:false,cb:function(bt){},hash:bn.script.hash};
Z(bs)}else{bn.script.id=E.getScriptId(bn.script.name);
s(bn.script.name,bn.script,false)}bg()};if(bf){bi++;
window.setTimeout(bp,10)}else{bp()}};bj()}bg()};var a9=function(){bc(true)
};var a7=S(be,bb)==af;var a6=[];var a5=0;var ba=false;
var a8=function(){if(a5<a6.length){var bf=function(){window.setTimeout(a8,aB.MISC.TIMEOUT)
};if(a6[a5].cond){a6[a5].fn(bf)}else{bf()}a5++}};a6=[{cond:a7&&S("1.0.0.4",bb)==af,fn:function(bf){console.log("Update config from "+bb+" to 1.0.0.4");
am(null,null);window.setTimeout(bf,aB.MISC.TIMEOUT)
}},{cond:a7&&aB.DB.USE_LOCAL&&S("1.2",bb)==af,fn:function(bf){console.log("Update config from "+bb+" to 1.2");
var bj=[];for(var bh=0;bh<aX.length;bh++){var bg=aX.key(bh);
aB.DB.USE_LOCAL=false;var bi=C.getValue(bg,null);aB.DB.USE_LOCAL=true;
if(bi){if(V){console.log("Copy from localStorage: "+bg+" -> "+bi)
}C.setValue(bg,bi)}bj.push(bg)}for(var bh=0;bh<bj.length;
bh++){aX.removeItem(bj[bh])}window.setTimeout(bf,aB.MISC.TIMEOUT)
}},{cond:a7&&S("2.0.2316",bb)==af,fn:function(bf){console.log("Update config from "+bb+" to 2.0.2316");
bc(false);window.setTimeout(bf,aB.MISC.TIMEOUT)}},{cond:a7&&S("2.3",bb)==af,fn:function(bf){console.log("Update config from "+bb+" to 2.3");
a9();window.setTimeout(bf,aB.MISC.TIMEOUT)}},{cond:a7&&S("2.3.2597",bb)==af,fn:function(bf){console.log("Update config from "+bb+" to 2.3.2597");
var bg=a1();bg.fire.last=0;bg.fire.db_version=0;bg.fire.entries=0;
k(bg);window.setTimeout(bf,aB.MISC.TIMEOUT)}},{cond:a7&&S("2.3.2660",bb)==af,fn:function(bf){console.log("Update config from "+bb+" to 2.3.2660");
v("TamperScript");window.setTimeout(bf,aB.MISC.TIMEOUT)
}},{cond:a7&&S("2.5.61",bb)==af,fn:function(bf){console.log("Update config from "+bb+" to 2.5.61");
var bi=U();for(var bg in bi){var bk=bi[bg];var bh=G(bk);
if(!bh.script||!bh.cond){console.error(aS.getMessage("fatal_error")+" ("+bk+")!!!");
continue}bh.script.options.do_sync=bh.script.options.sync;
delete bh.script.options.sync;bh.script.id=E.getScriptId(bh.script.name);
s(bh.script.name,bh.script,false)}var bj=C.getValue("TM_config",null);
if(bj){for(var bh in bj){if(!bj.hasOwnProperty(bh)){continue
}if(bh=="fire_updateURL"){bj[bh]="http://fire.tampermonkey.net/update.php"
}else{if(bh=="sync_URL"){bj[bh]=""}}}C.setValue("TM_config",bj)
}window.setTimeout(bf,aB.MISC.TIMEOUT)}},{cond:a7&&S("2.6.83",bb)==af,fn:function(bf){console.log("Update config from "+bb+" to 2.6.83");
bc(false,bf)}},{cond:a7&&S("2.9.2943",bb)==af,fn:function(bf){console.log("Update config from "+bb+" to 2.9.2943");
var bi=U();for(var bg in bi){var bj=bi[bg];var bh=G(bj);
if(!bh.script||!bh.cond){console.error(aS.getMessage("fatal_error")+" ("+bj+")!!!");
continue}bh.script.options.compatopts_for_requires=bh.script.options.compat_for_requires;
s(bh.script.name,bh.script,false)}window.setTimeout(bf,aB.MISC.TIMEOUT)
}},{cond:a7&&S("2.12.3033",bb)==af,fn:function(bf){console.log("Update config from "+bb+" to 2.12.3033");
var bi=U();for(var bg in bi){var bj=bi[bg];var bh=G(bj);
if(!bh.script||!bh.cond){console.error(aS.getMessage("fatal_error")+" ("+bj+")!!!");
continue}bh.script.options.override.orig_noframes=bh.script.options.noframes;
if(bh.script.options.noframes===false){bh.script.options.noframes=null
}s(bh.script.name,bh.script,false)}window.setTimeout(bf,aB.MISC.TIMEOUT)
}},{cond:a7&&S("3.0.3224",bb)==af,fn:function(bf){console.log("Update config from "+bb+" to 3.0.3224");
var bh=C.getValue("TM_config",null);if(bh){for(var bg in bh){if(!bh.hasOwnProperty(bg)){continue
}if(bg=="scriptblocker_overwrite"){bh[bg]="no"}else{if(bg=="notification_showUpdate"){bh[bg]="changelog"
}}}C.setValue("TM_config",bh)}window.setTimeout(bf,aB.MISC.TIMEOUT)
}},{cond:a7,fn:function(bf){console.log("First run of version "+be+"!");
aO={newV:be,oldV:bb,first_run:(bb==a3)};C.setValue("TM_version",be);
window.setTimeout(bf,aB.MISC.TIMEOUT)}},{cond:true,fn:function(bf){if(a4){a4()
}window.setTimeout(bf,aB.MISC.TIMEOUT)}}];a8();rase=bc;
rsse=a9};var ae=(function(){var a3={get:function(ba,a4){var a5=(ba==0)+"#"+a4;
var bb=Q.items.rundata.getj(a5);if(bb){bb.oldret.user_agent[ba]=bb.oldret.user_agent[bb.frameId];
bb=bb.oldret}else{var a8=a2(a4);var bd=[];var a9=0;
var a6={};var be={};for(var a7=0;a7<a8.length;a7++){var bc=a8[a7];
if(V){console.log("check "+bc.name+" for enabled:"+bc.enabled)
}if(!bc.enabled){a9++;continue}if(ba!=0&&(bc.options.noframes===true||(bc.options.noframes===null&&bc.options.override.orig_noframes===true))){continue
}if(bc.options.user_agent&&bc.options.user_agent!=""){be[ba]=bc.options.user_agent
}a6[bc.name]=true;bd.push(bc)}bb={runners:bd,disabled:a9,script_map:a6,user_agent:be};
if(TV){console.log("tv: getScriptRunInfo("+ba+") run:"+bb.runners.length+" disabled:"+bb.disabled+" au:"+JSON.stringify(bb.user_agent))
}Q.items.rundata.setj(a5,{frameId:ba,oldret:bb})}return bb
},getUserAgent:function(a5,a4){return a3.get(a5,a4).user_agent
}};return a3})();var ay=(function(){var a6={};var bc=1;
var a7=bc++;var bf=bc++;var be=bc++;var a3=bc++;var bd=bc++;
var a8=bc++;var bg=bc++;var bb=bc++;var a4=bc++;var a9=bc++;
var a5=function(){var bi={frames:{0:{state:a7}},tabs:{reset_ts:(new Date()).getTime()},scripts:{},urls:{},maps:{},contexts:{onUnload:{}},stats:{running:0,disabled:0,},extra:{}};
var bj={length:{value:0,enumerable:false,writable:true,configurable:true}};
Object.defineProperties(bi.urls,bj);return bi};var ba=function(bi){delete a6[bi]
};var bh={_info:function(){return a6},listeners:{_onReset:[],_onCommited:[],_onCompleted:[],add:{onReset:function(bi){bh.listeners._onReset.push(bi);
return bh.listeners._onReset.length-1},onCommited:function(bi){bh.listeners._onCommited.push(bi);
return bh.listeners._onCommited.length-1},onCompleted:function(bi){bh.listeners._onCompleted.push(bi);
return bh.listeners._onCompleted.length-1}},remove:{onReset:function(bi){bh.listeners._onReset[bi]=null
},onCommited:function(bi){bh.listeners._onCommited[bi]=null
},onCompleted:function(bi){bh.listeners._onCompleted[bi]=null
}}},events:{reset:function(bi,bj){if(TV){console.log("tv: events.reset("+bi+", "+bj+")")
}a6[bi]=a5();a6[bi].frames[0].state=a7;ad.forEach(bh.listeners._onReset,function(bl,bk){if(bl){bl(bi,bj)
}})},request:function(bj,bm,bl){if(TV){console.log("tv: events.request("+bj+", "+bm+", "+bl+")")
}a6[bj]=a6[bj]||a5();a6[bj].frames[bm]=a6[bj].frames[bm]||{};
a6[bj].frames[bm].state=bf;var bi=I.woHash(bl);var bk=ae.getUserAgent(bm,bi);
if(bk[bm]){bh.set.extra(bj,bm,"user_agent",bk[bm])}},response:function(bj,bl,bk){if(TV){console.log("tv: events.response("+bj+", "+bl+", "+bk+")")
}a6[bj]=a6[bj]||a5();a6[bj].frames[bl]=a6[bj].frames[bl]||{};
var bm=a6[bj].frames[bl].state||a7;a6[bj].frames[bl].state=be;
if(bl===0){a6[bj].tabs.response_ts=(new Date()).getTime()
}if(bm<be){var bi=I.woHash(bk);bh.scripts.determine(bj,bl,bi)
}},commited:function(bk,bm,bl){var bi=I.parse(bl);if(bi.protocol!=="http:"&&bi.protocol!=="https:"&&bi.protocol!=="file:"){return
}if(TV){console.log("tv: events.commited("+bk+", "+bm+", "+bl+")")
}a6[bk]=a6[bk]||a5();a6[bk].frames[bm]=a6[bk].frames[bm]||{};
var bn=a6[bk].frames[bm].state||a7;a6[bk].frames[bm].state=a3;
if(bn<be){var bj=I.woHash(bl);bh.scripts.determine(bk,bm,bj)
}ad.forEach(bh.listeners._onCommited,function(bp,bo){if(bp){bp(bk)
}})},loading:function(bk,bm,bl){var bi=I.parse(bl);
if(bi.protocol!=="http:"&&bi.protocol!=="https:"&&bi.protocol!=="file:"){return
}if(bm===0&&bi.protocol==="file:"){if(TV){console.log("tv: events.loading("+bk+", "+bm+", "+bl+")")
}a6[bk]=a6[bk]||a5();a6[bk].frames[bm]=a6[bk].frames[bm]||{};
var bn=a6[bk].frames[bm].state||a7;a6[bk].frames[bm].state=bd;
if(bn<be){var bj=I.woHash(bl);bh.scripts.determine(bk,bm,bj)
}}},prepare:function(bm,bo,bi,bn){if(TV){console.log("tv: events.prepare("+bm+", "+bo+", "+bi+", "+bn+")")
}var bp=bo===0?bo:bi;a6[bm]=a6[bm]||a5();a6[bm].frames[bp]=a6[bm].frames[bp]||{};
var bl=I.woHash(bn);a6[bm].frames[bp].state=a8;var bk,bj=a6[bm].scripts[bl];
if(!bj){if(TV){console.warn("tv: lazy init @ events.prepare("+bm+", "+bo+", "+bi+", "+bn+")")
}bh.scripts.determine(bm,bo,bl);bj=a6[bm].scripts[bl]
}bk=bj.runners.length;bh.scripts.updateMaps(bm,bi,bj.script_map);
bh.scripts.updateUrls(bm,bi,bl);return bk},run:function(bk,bp,bo,bl,bm){if(TV){console.log("tv: events.run("+bk+", "+bp+", "+bo+", "+bl+")")
}var bj=bp===0?bp:bo;a6[bk]=a6[bk]||a5();a6[bk].frames[bj]=a6[bk].frames[bj]||{};
a6[bk].frames[bj].state=bg;var bi=I.woHash(bl);var br=a6[bk].scripts[bi];
if(!br){var bq;if(D){bq=a6[bk].scripts}console.warn("tv: no script run info for tab "+bk+" @ "+bi,bq);
return}var bn=function(){delete a6[bk].scripts[bi];
if(bm){bm()}};bh.scripts.updateStats(bk,bo,br.runners.length,br.disabled);
bh.scripts.run(bk,bp,bo,bi,br.runners,bn)},complete:function(bj,bl,bk){var bi=I.parse(bk);
if(bi.protocol!=="http:"&&bi.protocol!=="https:"&&bi.protocol!=="file:"){return
}if(TV){console.log("tv: events.complete("+bj+", "+bl+", "+bk+")")
}if(bl===0){a6[bj]=a6[bj]||a5();a6[bj].frames[bl]=a6[bj].frames[bl]||{};
var bn=a6[bj].frames[bl].state||a7;a6[bj].frames[bl].state=bb;
if(!ay.get.empty(bj)&&ay.get.stats(bj).running){if(bn<bg){console.warn("tv: no script run info!");
return}if(bi.protocol==="file:"){var bm=function(){chrome.tabs.sendMessage(bj,{method:"onLoad",frameId:bl},function(bo){})
};window.setTimeout(bm,500)}else{chrome.tabs.sendMessage(bj,{method:"onLoad",frameId:bl},function(bo){});
if(ak.runCheck){if(V||EV||UV){console.log("contentSettings: ("+(new Date()).getTime()+") javascript.clear({})")
}chrome.contentSettings.javascript.clear({})}}}}ad.forEach(bh.listeners._onCompleted,function(bp,bo){if(bp){bp(bj)
}})},unload:function(bj,bl,bi){if(TV){console.log("tv: events.unload("+bj+", "+bl+", "+bi+")")
}var bm=bl===0?bl:bi;a6[bj]=a6[bj]||a5();a6[bj].frames[bm]=a6[bj].frames[bm]||{};
a6[bj].frames[bm].state=a4;if(a6[bj]){if(a6[bj].contexts.onUnload[bi]){for(var bk=0;
bk<a6[bj].contexts.onUnload[bi].length;bk++){a6[bj].contexts.onUnload[bi][bk]()
}a6[bj].contexts.onUnload[bi]=[]}}},remove:function(bi){if(TV){console.log("tv: events.remove("+bi+")")
}ba(bi)}},scripts:{updateStats:function(bj,bi,bk,bl){a6[bj].stats.running+=bk;
a6[bj].stats.disabled+=bl;a6[bj].contexts.onUnload[bi]=a6[bj].contexts.onUnload[bi]||[];
a6[bj].contexts.onUnload[bi].push(function(){a6[bj].stats.running-=bk;
a6[bj].stats.disabled-=bl});a6[bj].tabs.ts=(new Date()).getTime()
},updateMaps:function(bj,bi,bl){var bm=1;var bk=function(bo,bn){if(a6[bj].maps[bn]===undefined){if(bm===1){a6[bj].maps[bn]=0
}}a6[bj].maps[bn]+=bm};ad.forEach(bl,bk);a6[bj].contexts.onUnload[bi]=a6[bj].contexts.onUnload[bi]||[];
a6[bj].contexts.onUnload[bi].push(function(){if(!a6[bj]){return
}bm=-1;ad.forEach(bl,bk)})},updateUrls:function(bk,bi,bj){var bm=1;
var bl=function(){if(a6[bk].urls[bj]===undefined){if(bm===1){a6[bk].urls[bj]=0
}}a6[bk].urls[bj]+=bm;a6[bk].urls.length=-1};bl();a6[bk].contexts.onUnload[bi]=a6[bk].contexts.onUnload[bi]||[];
a6[bk].contexts.onUnload[bi].push(function(){if(!a6[bk]){return
}bm=-1;bl()})},determine:function(bk,bl,bj){var bi=ae.get(bl,bj);
a6[bk].scripts[bj]=bi;return bi.runners.length},run:function(bm,bu,bs,bj,bx,bo){var bv=[];
var bt=1;var bk=function(){if(--bt===0&&bo){bo()}};
var by=aB.RUNTIME.ALLOWS_FAST_DOCUMENT_START&&aF.values.runtime_fastDocumentStart;
for(var bp=0;bp<bx.length;bp++){var bw=bx[bp];if(!bw.options.user_agent){var br=by&&bw.options.run_at=="document-start";
var bn=new aq(br);bt++;var bi=bn.contentLoad({tabId:bm,frameId:bu,contextId:bs,url:bj},bw,bk);
if(br){bv.push(bi)}}}for(var bq=0,bl=null;bl=bv[bq];
bq++){chrome.tabs.sendMessage(bm,bl,function(){})}bk()
}},set:{extra:function(bi,bl,bj,bk){a6[bi]=a6[bi]||a5();
if(bl===null){a6[bi].extra[bj]=bk}else{a6[bi].extra[bj]=a6[bi].extra[bj]||{};
a6[bi].extra[bj][bl]=bk}},blocker:function(bj,bi){bh.set.extra(bj,null,"blocker",true)
},forbidden:function(bj,bk,bi){if(bk===0){bh.set.extra(bj,null,"forbidden",true)
}},fire:{count:function(bi,bj){bh.set.extra(bi,null,"fire_count",bj)
}}},get:{extra:function(bi,bm,bj,bl){if(bl===undefined){bl=null
}var bk=null;bk=(a6[bi]?a6[bi].extra:{})[bj];if(bm!==null&&bk){bk=bk[bm]
}return bk||bl},empty:function(bj){var bi=true;if(a6[bj]){if(a6[bj].urls.length==0){}else{if(a6[bj].urls.length==-1){a6[bj].urls.length=0;
var bk=function(bm,bl){if(bl!=="length"&&bm>0){a6[bj].urls.length++
}};ad.forEach(a6[bj].urls,bk);return bh.get.empty(bj)
}else{bi=false}}}return bi},fire:{count:function(bi){return bh.get.extra(bi,null,"fire_count")
}},urls:function(bi){return a6[bi]?a6[bi].urls:{}},stats:function(bk,bl){var bj={};
if(a6[bk]){bj.running=a6[bk].stats.running;bj.disabled=a6[bk].stats.disabled;
if(bl){bj.unique=0;for(var bi in a6[bk].maps){if(!a6[bk].maps.hasOwnProperty(bi)){continue
}if(a6[bk].maps[bi]>0){bj.unique++}}}}return bj},tabs:function(){var bi={};
var bj=function(bk,bl){bi[bl]={ts:bk.response_ts}};
ad.forEach(a6,bj);return bi},blocker:function(bi){return bh.get.extra(bi,null,"blocker")
},forbidden:function(bj,bk,bi){return bh.get.extra(bj,null,"forbidden")
},user_agent:function(bi,bj){return bh.get.extra(bi,bj,"user_agent")
}}};return bh})();var aD={isScriptUrl:function(a4){if(!a4){return false
}var a3=a4.split(/[\?#$]/)[0];var a5=a3.search(/\.user\.(js\#|js\?|js$)/)!=-1||a3.search(/\.tamper\.(js\#|js\?|js$)/)!=-1;
if(!a5){return a5}var a6=(a3.search(/^htt[ps]{1,2}:\/\/code\.google\.com/)!=-1)||(a3.search(/^htt[ps]{1,2}:\/\/github\.com/)!=-1&&a3.search(/^htt[ps]{1,2}:\/\/github\.com\/[a-zA-Z0-9%-]\/[a-zA-Z0-9%-]\/raw\//)==-1);
return !a6}};var a={id:0,useXmlHttpReq:true,useIframeMessage:false,callbacks:{},listener:function(a3,a7){a7=a3?a3.data:a7;
try{var a4=JSON.parse(a7);var a6=a.callbacks[a4.id];
if(a6){if(V){console.log("localFile: retrieval of '"+a6.url+"' took "+((new Date()).getTime()-a6.ts)+"ms")
}if(a6.cb){a6.cb(a4.content)}if(a6.iframe){a6.iframe.parentNode.removeChild(a6.iframe)
}delete a.callbacks[a4.id]}else{console.warn("localFile: Warn: getSource callback "+a4.id+" not found!")
}}catch(a5){console.error("localFile: Error: getSource processing of "+a7+" failed!")
}},initialize:function(){if(a.useIframeMessage){window.addEventListener("message",a.listener,false);
window.addEventListener("unload",a.clean,false)}},clean:function(){if(a.useIframeMessage){window.removeEventListener("message",a.listener,false);
window.removeEventListener("unload",a.clean,false)}a.callbacks={}
},getSource:function(a4,a3){if(a.useXmlHttpReq){return a.getSourceXmlHttp(a4,a3)
}else{return a.getSourceIframe(a4,a3)}},getSourceXmlHttp:function(a4,a3){var a7=(new Date()).getTime();
a4+=(a4.search("\\?")!=-1)?"&":"?";a4+="ts="+a7;var a8=function(a9){a3(a9.responseText)
};var a5={method:"GET",retries:0,url:a4,};if(a3){an(a5,{callback:a8})
}else{var a6=an(a5,{});return a6.readyState==4&&(a6.status==200||a6.status==0)?a6.responseText:null
}},getSourceIframe:function(a4,a3){if(a.id==0){a.initialize()
}var a5=document.createElement("iframe");a5.src=a4+"?gimmeSource=1";
document.getElementsByTagName("body")[0].appendChild(a5);
var a7=JSON.stringify({id:a.id});a.callbacks[a.id]={cb:a3,ts:(new Date()).getTime(),iframe:a5,url:a4};
var a6=function(){var a9=a.id;var a8=function(){if(a9==null){return
}if(a.callbacks[a9]){a.listener(null,JSON.stringify({id:a9,content:null}))
}a9=null};var ba=function(){if(a9==null){return}try{a5.contentWindow.postMessage(a7,a5.src);
a9=null}catch(bb){if(D){console.error("localFile: ERROR:"+bb.message)
}}};a5.onload=ba;window.setTimeout(a8,3000)};a6();a.id++
}};lfgs=a;var a1=function(){var a5={db_version:0,last:0,entries:0};
var a4={scripts:0,fire:a5};var a3=C.getValue("TM_update_check",a4);
if(!a3){a3=a4}if(a3.fire==undefined){a3.fire=a5}if(a3.scripts==undefined){a3.scripts=0
}return a3};var k=function(a3){if(a3){C.setValue("TM_update_check",a3)
}};var ac=function(a3){return a3};var ai={fireDB:null,status:{initialized:false,action:"Initializing"},resetStatus:function(a3){if(a3===undefined){a3=!!ai.fireDB
}ai.status={initialized:a3,update:false,download:false,action:"",error:"",progress:{n:0,of:0}}
},isReady:function(){return ai.status.initialized&&!ai.status.update&&!ai.status.download
},checkUpdate:function(a7,ba,be,a8){var a4=a7||ba;if(!a4&&(aF.values.fire_updatePeriod==0||!aF.values.fire_enabled)){return
}var bb=a1();var a9=function(){if(a8){a8(ai.status.error=="")
}};if(ai.status.update||ai.status.download){if(be){be(true)
}var bd=function(){if(ai.isReady()){a9()}else{window.setTimeout(bd,1000)
}};if(a8){bd()}return}if(a4||((new Date()).getTime()-bb.fire.last)>aF.values.fire_updatePeriod){var bc=0;
var a5=function(){var bf=function(bg){if(ai.status.error==""){bb.fire.last=(new Date()).getTime();
bb.fire.db_version=bc;bb.fire.entries=bg;k(bb)}a9()
};ai.update(a7,bf)};var a6=function(bf){if(bf.readyState==4){if(bf.status=200){try{var bi=JSON.parse(bf.responseText);
bc=bi.db_version}catch(bh){console.log("bg: fire: unable to parse DB version response! "+bf.responseText)
}console.log("bg: fire: local DB version: "+bb.fire.db_version+" remote: "+bc);
var bg=bc>bb.fire.db_version||ba;if(be){be(bg)}if(bg){a5();
return}}a9()}};var a3={method:"GET",url:ai.updateURL()+"&db_version=get",retries:aB.XMLHTTPREQUEST.RETRIES,overrideMimeType:"text/plain; charset=x-user-defined"};
an(a3,{callback:a6})}else{a9()}},updateURL:function(){return aF.values.fire_getURL+"?ts=0"
},update:function(bb,a6){var bi=10;var bf=2;var a4=null;
var bh=bf;var bg=null;var a5=1;var ba=null;var a9=0;
var a7={};var bd=function(){if(a4){window.clearTimeout(a4)
}a4=null};var bc=function(){bd();a4=window.setTimeout(bg,2*60*1000)
};var bj=function(bk){return{method:"GET",url:ai.updateURL()+"&part="+bk,retries:aB.XMLHTTPREQUEST.RETRIES,overrideMimeType:"text/plain; charset=x-user-defined"}
};var be=function(bk){bd();ai.resetStatus();ai.status.error=bk;
if(a6){a6()}console.log(aS.getMessage("TamperFire_update_failed___")+" Error: "+bk+" @ file:"+bj(a5).url);
aN.show("TamperFire",aS.getMessage("TamperFire_update_failed___"),chrome.extension.getURL("images/icon128.png"),15000)
};var a3=function(bl){bc();if(bl.progress&&bl.progress.totalSize!=-1){if(ba==null){ba=bl.progress.totalSize
}var bk=ba*6*bi;var bm=bl.progress.done+ba*6*(a5-1);
if(bm>bk){bm=bk}ai.status.progress={n:bm,of:bk};if(D&&(++a9%50)==0){console.log("bg: fire download: "+bl.progress.done+" bytes "+bm+"/"+bk)
}}};var a8=function(bp){bc();if(bp.readyState==4){if(bp.status=200){bd();
var bs={};var bt=bp.responseText;try{bs=JSON.parse(bt)
}catch(bo){var bn="<body>";var bm="</body>";if(bt.search(bn)!=-1){var br=bt.indexOf(bn);
var bq=bt.lastIndexOf(bm);if(br!=-1&&bq!=-1){bt=bt.substr(br+bn.length,bq-(br+bn.length))
}}try{bs=JSON.parse(bt)}catch(bo){be("Parse Error! Update URL: "+ai.updateURL());
return}}bt=null;if(!bs.scripts){be("Invalid Content! Update URL: "+ai.updateURL());
return}for(var bl in bs.scripts){a7[bl]=bs.scripts[bl]
}bs=null;if(a5<bi){if(D){console.log("bg: fire: download of file "+a5+" succced")
}a5++;bh=bf;bg()}else{ai.resetStatus();ai.status.update=true;
ai.status.action=aS.getMessage("Update_in_progress");
var bu=function(){ai.status.update=true;var bv=function(bw){ai.resetStatus();
console.log(aS.getMessage("TamperFire_is_up_to_date"));
aN.show("TamperFire",aS.getMessage("TamperFire_is_up_to_date"),chrome.extension.getURL("images/icon128.png"));
if(a6){a6(bw)}};ai.insertValuesFromJSON({scripts:a7},bv);
a7=null};var bk=function(){ai.initTables(bu)};ai.clean(bk)
}}else{be("Update URL: "+bp.status);return}}else{console.log(bp)
}};bg=function(){if(bh>0){ai.status.action=aS.getMessage("Downloading");
ai.status.download=true;bc();an(bj(a5),{callback:a8,onreadychange:a3});
bh--}else{be("Download failed!")}};console.log(aS.getMessage("TamperFire_update_started"));
aN.show("TamperFire",aS.getMessage("TamperFire_update_started"),chrome.extension.getURL("images/icon128.png"),30000);
if(!bb){chrome.tabs.create({url:chrome.extension.getURL("fire.html")},function(){})
}bg()},init:function(a3){var a4=function(a5){var a6=a5!==false;
if(a3){a3(a6)}if(a6){window.setTimeout(ai.checkUpdate,20000)
}};ai.resetStatus(false);ai.initTables(a4)},clean:function(a4){var a6=function(){if(a4){a4()
}};var a9=function(){ai.fireDB.db.transaction(function(ba){ba.executeSql("DROP TABLE scripts",[],a6,a6)
})};var a3=function(){ai.fireDB.db.transaction(function(ba){ba.executeSql("DROP TABLE excludes",[],a9,a9)
})};var a5=function(){ai.fireDB.db.transaction(function(ba){ba.executeSql("DROP TABLE includes",[],a3,a3)
})};var a7=function(){ai.fireDB.db.transaction(function(ba){ba.executeSql("DROP TABLE scriptexcludes",[],a5,a5)
})};var a8=function(){ai.fireDB.db.transaction(function(ba){ba.executeSql("DROP TABLE scriptincludes",[],a7,a7)
})};a8()},initTables:function(a3){var a4=function(){ai.status.initialized=true;
if(a3){a3()}};ai.fireDB={db:openDatabase("tmFire","1.0","TamperFire",40*1024*1024),onSuccess:function(bb,ba){if(V){console.log("fireDB Success ")
}},onError:function(ba,bd,bb,bc){console.error("fireDB Error "+JSON.stringify(bd));
if(bb){console.warn(" @ statement "+bb)}if(bc){console.warn("        with "+JSON.stringify(bc))
}},createScriptTable:function(bb){var ba=function(bc,bd){ai.fireDB.onError(bc,bd);
if(a3){a3(false)}};ai.fireDB.db.transaction(function(bc){bc.executeSql("CREATE TABLE IF NOT EXISTS scripts(sid INTEGER PRIMARY KEY ASC, value TEXT)",[],bb,ba)
})},createScriptIncludesTable:function(bb){var ba=function(bc,bd){ai.fireDB.onError(bc,bd);
if(a3){a3(false)}};ai.fireDB.db.transaction(function(bc){bc.executeSql("CREATE TABLE IF NOT EXISTS scriptincludes(iid INTEGER, sid INTEGER, FOREIGN KEY(sid) REFERENCES scripts(sid),FOREIGN KEY(iid) REFERENCES includes(iid))",[],bb,ba)
})},createIncludesTable:function(bb){var ba=function(bc,bd){ai.fireDB.onError(bc,bd);
if(a3){a3(false)}};ai.fireDB.db.transaction(function(bc){bc.executeSql("CREATE TABLE IF NOT EXISTS includes(iid INTEGER PRIMARY KEY ASC, generic BOOLEAN, regex TEXT)",[],bb,ba)
})},createScriptExcludesTable:function(bb){var ba=function(bc,bd){ai.fireDB.onError(bc,bd);
if(a3){a3(false)}};ai.fireDB.db.transaction(function(bc){bc.executeSql("CREATE TABLE IF NOT EXISTS scriptexcludes(eid INTEGER, sid INTEGER, FOREIGN KEY(sid) REFERENCES scripts(sid),FOREIGN KEY(eid) REFERENCES excludes(eid))",[],bb,ba)
})},createExcludesTable:function(bb){var ba=function(bc,bd){ai.fireDB.onError(bc,bd);
if(a3){a3(false)}};ai.fireDB.db.transaction(function(bc){bc.executeSql("CREATE TABLE IF NOT EXISTS excludes(eid INTEGER PRIMARY KEY ASC, regex TEXT)",[],bb,ba)
})}};var a5=function(){ai.fireDB.createScriptExcludesTable(a4)
};var a6=function(){ai.fireDB.createScriptIncludesTable(a5)
};var a7=function(){ai.fireDB.createExcludesTable(a6)
};var a8=function(){ai.fireDB.createIncludesTable(a7)
};var a9=function(){ai.fireDB.createScriptTable(a8)
};a9()},insertValuesFromJSON:function(bm,bd){var a8=[];
var bk=10000;var a7=[];var be={};var a4={};var bh=[];
var bq=[];var ba=[];var bg=[];var a5=0;var bn=0;console.log(aS.getMessage("TamperFire_import_started"));
for(var bf in bm.scripts){if(!bm.scripts.hasOwnProperty(bf)){continue
}a8.push(bf)}ai.status.action=aS.getMessage("Processing_scripts");
ai.status.progress={n:0,of:a8.length};var bj=0;var bi;
var bp=0;var a3=function(){for(var br in be){var bs=a5++;
bh.push([br,be[br].generic,bs]);for(var bt in be[br].sids){ba.push([bs,be[br].sids[bt]])
}}};var bo=function(){for(var bs in a4){var br=bn++;
bq.push([bs,br]);for(var bt in a4[bs].sids){bg.push([br,a4[bs].sids[bt]])
}}};var bl=function(bu,bw,bx,br){if(bx.length){ai.resetStatus();
ai.status.update=true;ai.status.action=aS.getMessage("Writing_scripts");
ai.status.progress={n:bu,of:bh.length+bq.length+ba.length+bg.length}
}else{if(br){br()}return}var bv=function(){bl(bu,bw,bx,br)
};var bt=function(){if(bi>=bx.length-1){if(br){br()
}}else{window.setTimeout(bv,0)}};var bs=bx.length-1;
if((bs-bi)>bk){bs=bi+bk}if(D){console.log("bg: write TF "+bs)
}bw(bx.slice(bi,bs),bt);bi=bs;ai.status.progress.n=bu+bi
};var bc=function(br){if(a7.length){ai.scripts.setValues(a7,br);
a7=[]}else{if(br){br()}}};var bb=function(){var bt=function(){if(bd){bd(a8.length)
}};var bu=function(){bi=0;bl(bp,ai.scriptExcludes.setValues,bg,bt);
bp+=bg.length};var bv=function(){bi=0;bl(bp,ai.scriptIncludes.setValues,ba,bu);
bp+=ba.length};var br=function(){bi=0;bl(bp,ai.excludes.setValues,bq,bv);
bp+=bq.length};var bs=function(){bi=0;bl(bp,ai.includes.setValues,bh,br);
bp+=bh.length};a3();bo();bc(bs)};var a6=function(){if(a7.length>bk){bc(a6);
return}bj++;if(bj%96==0){window.setTimeout(a9,0)}else{a9()
}};var a9=function(){if(D&&bj%2048==0){console.log("bg: import TF script "+a8[bj])
}ai.status.progress.n=bj;if(bj<a8.length){var bv=bm.scripts[a8[bj]];
a7.push([a8[bj],JSON.stringify(bv)]);for(var bs=0;bs<bv.excludes.length;
bs++){var br=I.getRegExpFromInclude(bv.excludes[bs],{safe:true,tryToFixUrl:aF.values.tryToFixUrl,safeUrls:aF.values.safeUrls});
if(!a4[br]){a4[br]={sids:[]}}a4[br].sids.push(a8[bj])
}for(var bs=0;bs<bv.includes.length;bs++){var bu=bv.includes[bs].trim();
var br=I.getRegExpFromInclude(bu,{safe:true,tryToFixUrl:aF.values.tryToFixUrl,safeUrls:aF.values.safeUrls});
if(!be[br]){var bt=0;if(bu.search("^[https*]]{1,}[://]{0,}[w.]{0,4}[*|.]{1,}[$|/]")!=-1||bu.search("^[.*/]{1,}$")!=-1||bu.search("^[https*]{1,}[://]{0,}[w.]{0,4}[.|*|/]{1,}$")!=-1||bu.search("^"+ad.escapeForRegExp("*://*[$|/]"))!=-1||bu.replace(new RegExp("(https|http|\\*).://\\*"),"")==""||bu=="*"){bt=1
}be[br]={sids:[],generic:bt.toString()}}be[br].sids.push(a8[bj])
}a6()}else{bb()}};a9()},count:function(a6,a7,a5,a3){var a4=function(a8){a3(a8.length)
};ai.getValues(a6,a7,[a5],a4)},setValue:function(a6,a8,a5,a4,a7,a3){ai.setValues(a6,[a8,a4],[a4,a7],a3)
},setValues:function(bb,bc,a5,a7){if(V){console.log("TM_fire.setValues")
}var a9=0;var a8=function(){if(a7){a7()}};var a4=[];
var ba=[];for(var a3=0;a3<bc.length;a3++){a4.push(bc[a3]);
ba.push("?")}var a6=function(bd){if(a9<a5.length){var be="INSERT INTO "+bb+"("+a4.join(", ")+") VALUES ("+ba.join(", ")+");";
bd.executeSql(be,a5[a9],a6,function(bf,bg){ai.fireDB.onError(bf,bg,be,a5[a9]);
a6(bf)});a9++}else{a8()}};ai.fireDB.db.transaction(a6)
},getValues:function(bc,a7,ba,a4){if(V){console.log("TM_fire.getValues")
}var a5=0;var a6=null;var a8=[];var a9=20;var bb=function(bd,bf){if(bf.rows){for(var be=0;
be<bf.rows.length;be++){a8.push(bf.rows.item(be))}}if(a5<ba.length){a3()
}else{a4(a8)}};var a3=function(be){if(!a6){a6=be}var bd=[];
var be=[];for(var bf=a5;bf<ba.length&&bf-a5<a9;bf++){be.push(a7+"=?");
bd.push(ba[bf])}a6.executeSql("SELECT * FROM "+bc+" WHERE "+be.join(" OR "),bd,bb,ai.fireDB.onError);
a5+=a9};ai.fireDB.db.transaction(a3)},getMax:function(a5,a4,a3){var a8='MAX("'+a4+'")';
var a7=function(a9,bb){var ba=0;if(bb.rows&&bb.rows.length){ba=bb.rows.item(0)[a8]
}a3(ba)};var a6=function(a9){a9.executeSql("SELECT "+a8+' FROM "'+a5+'"',[],a7,ai.fireDB.onError)
};ai.fireDB.db.transaction(a6)},tab:{getItems:function(a4,a6){var a5=0;
var a3={};var ba=[];var a9=1;var a7=function(){for(var bc in a3){if(!a3.hasOwnProperty(bc)){continue
}ba.push(a3[bc])}if(a9==0&&a6){window.setTimeout(function(){a6(ba)
},1)}};var bb=function(bd){for(var bc=0;bc<bd.length;
bc++){a3[bd[bc][ar]]=bd[bc]}if(--a9==0){a7()}};if(!ay.get.empty(a4)){var a8=function(bd,bc){a9++;
ai.url.getItems(bc,bb)};ad.forEach(ay.get.urls(a4),a8)
}a9--;a7()},getCountCallbacks:{},resetFireCnt:function(a3){ai.tab.getCountCallbacks[a3]=[];
ay.set.fire.count(a3,null)},getCount:function(a7,a3){var a6=ay.get.fire.count(a7);
if(a6){a3(a6)}else{var a5=function(a9){if(!ai.tab.getCountCallbacks[a7]){return
}while(ai.tab.getCountCallbacks[a7].length>0){var a8=ai.tab.getCountCallbacks[a7].pop();
if(a8){a8(a9)}}};var a4=function(a8){ay.set.fire.count(a7,a8.length);
a5(a8.length)};if(!ai.tab.getCountCallbacks[a7]){ai.tab.getCountCallbacks[a7]=[]
}if(ai.tab.getCountCallbacks[a7].length==0){ai.tab.getItems(a7,a4)
}ai.tab.getCountCallbacks[a7].push(a3)}}},url:{getCount:function(a4,a3){if(D){console.log("bg: TF: get count for URL "+a4)
}var a7="count(*)";var a6=function(a8,ba){var a9=0;
if(ba.rows&&ba.rows.length){a9=ba.rows.item(0)[a7]}a3(a9)
};var a5="";a5+="SELECT "+a7+" FROM scripts WHERE sid IN ";
a5+="    (SELECT sid FROM scriptincludes WHERE iid IN (SELECT iid FROM includes WHERE generic=0 AND ? REGEXP regex)) ";
a5+="AND NOT sid IN ";a5+="    (SELECT sid FROM scriptexcludes WHERE eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex)) ";
ai.fireDB.db.transaction(function(a8){a8.executeSql(a5,[a4,a4],a6,ai.fireDB.onError)
})},getItems:function(a4,a7){if(D){console.log("bg: TF: get scripts for URL "+a4)
}var bb=[];var a6="";var bd=1,ba=0,a9=0;if(bd==0){a6+="SELECT DISTINCT t1.* FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid WHERE T2.iid IN ";
a6+="    (SELECT iid FROM includes WHERE generic=0 AND ? REGEXP regex) ";
a6+="AND NOT T1.sid IN ";a6+="    (SELECT T4.sid FROM excludes T3 JOIN scriptexcludes T4 ON T3.eid=T4.eid WHERE T3.eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex))"
}else{if(bd==1){a6+="SELECT * FROM scripts T1 WHERE T1.sid IN ";
a6+="    (SELECT sid FROM scriptincludes WHERE iid IN (SELECT iid FROM includes WHERE generic=0 AND ? REGEXP regex)) ";
a6+="AND NOT T1.sid IN ";a6+="    (SELECT sid FROM scriptexcludes WHERE eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex)) "
}else{if(bd==2){a6+="SELECT DISTINCT t1.* FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid WHERE EXISTS";
a6+="    (SELECT iid FROM includes I1 WHERE T2.iid=I1.iid AND generic=0 AND ? REGEXP regex) ";
a6+="AND NOT T1.sid IN ";a6+="    (SELECT T4.sid FROM excludes T3 JOIN scriptexcludes T4 ON T3.eid=T4.eid WHERE T3.eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex))"
}else{if(bd==3){a6+="SELECT DISTINCT t1.* FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid JOIN includes I1 ON I1.iid=T2.iid WHERE I1.generic=0 AND ? REGEXP I1.regex ";
a6+="AND NOT T1.sid IN ";a6+="    (SELECT T4.sid FROM excludes T3 JOIN scriptexcludes T4 ON T3.eid=T4.eid WHERE T3.eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex))"
}}}}var a3="SELECT DISTINCT t1.value, t1.sid FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid WHERE T2.iid IN (SELECT iid FROM includes WHERE generic=0)";
var bc=(a4=="*");var a5=(bc?a3:a6);var a8=function(be,bh){a9=(new Date()).getTime();
if(D){console.log("bg: TF db access: "+bd+" -> "+(a9-ba)+"ms")
}if(bh.rows&&bh.rows.length){for(var bf=0;bf<bh.rows.length;
bf++){try{var bi=bh.rows.item(bf).value;bb.push(JSON.parse(bi))
}catch(bg){console.error("bg: error parsing TamperFire entry "+item[bf])
}}a7(bb)}else{console.warn("bg: warn: no scripts entry");
a7(bb)}};ai.fireDB.db.transaction(function(be){ba=(new Date()).getTime();
be.executeSql(a5,bc?[]:[a4,a4],a8,ai.fireDB.onError)
})}},ids:{getItems:function(a6,a3){var a5=[];var a4=function(a8){if(a8&&a8.length){for(var a7=0;
a7<a8.length;a7++){try{a5.push(JSON.parse(a8[a7]))}catch(a9){console.error("bg: error parsing TamperFire entry "+a8)
}}a3(a5)}else{console.warn("bg: warn: no scripts entry");
a3(a5)}};if(a6.length){ai.scripts.getValues(a6,null,a4)
}else{a3(a5)}}},includes:{setValues:function(a4,a3){ai.setValues("includes",["regex","generic","iid"],a4,a3)
}},scriptIncludes:{setValues:function(a4,a3){ai.setValues("scriptincludes",["iid","sid"],a4,a3)
}},excludes:{setValues:function(a4,a3){ai.setValues("excludes",["regex","eid"],a4,a3)
}},scriptExcludes:{setValues:function(a4,a3){ai.setValues("scriptexcludes",["eid","sid"],a4,a3)
}},scripts:{getValues:function(a6,a5,a3){var a4=function(a7){var a8=[];
for(var a9=0;a9<a7.length;a9++){a8.push(a7[a9]["value"])
}a3(a8)};ai.getValues("scripts","sid",a6,a4)},setValue:function(a4,a5,a3){ai.setValue("scripts","sid",a4,"value",a5,a3)
},setValues:function(a4,a3){ai.setValues("scripts",["sid","value"],a4,a3)
}}};fire=ai;var C={cacheDB:null,localDB:null,init:function(a4){if(V){console.log("bg: TM_storage.init() "+aB.DB.USE_LOCAL)
}if(aB.DB.USE_LOCAL){var a5=function(a6,a8){C.cacheDB={};
if(a8){for(var a7=0;a7<a8.rows.length;a7++){C.cacheDB[a8.rows.item(a7).name]=a8.rows.item(a7).value
}}C.initialized=true;if(a4){a4()}};var a3=function(){if(SV){console.log("bg: init storage cache")
}C.localDB.db.transaction(function(a6){a6.executeSql("SELECT * FROM config",[],a5,C.localDB.onError)
})};C.localDB={db:openDatabase("tmStorage","1.0","TM Storage",30*1024*1024),onSuccess:function(a7,a6){if(SV){console.log("bg: storage: localDB Success ")
}},onError:function(a6,a7){console.error("bg: storage: localDB Error "+JSON.stringify(a7))
},createTable:function(a6){C.localDB.db.transaction(function(a7){a7.executeSql("CREATE TABLE IF NOT EXISTS config(ID INTEGER PRIMARY KEY ASC, name TEXT, value TEXT)",[],a6,C.localDB.onError)
})}};C.localDB.createTable(a3)}else{C.initialized=true;
if(a4){a4()}}},setValue:function(a8,a6,a3){if(SV){console.log("TM_storage.setValue -> "+a8)
}var a5=(typeof a6)[0];var a4=ac(a8);switch(a5){case"o":try{a6=a5+JSON.stringify(a6)
}catch(a7){console.error("bg: storage: setValue ERROR: "+a7.message);
return}break;default:a6=a5+a6}if(aB.DB.USE_LOCAL){if(C.getValue(a4,null)){C.localDB.db.transaction(function(a9){a9.executeSql("UPDATE config SET value=? WHERE name=?",[a6,a4],a3?a3:C.localDB.onSuccess,C.localDB.onError)
})}else{C.localDB.db.transaction(function(a9){a9.executeSql("INSERT INTO config(name, value) VALUES (?,?)",[a4,a6],a3?a3:C.localDB.onSuccess,C.localDB.onError)
})}C.cacheDB[a4]=a6}else{aX.setItem(a4,a6)}},getValue:function(a6,a3){if(SV){console.log("TM_storage.getValue -> "+a6)
}var a5=ac(a6);var a4=function(a9,a7){if(!a9){return a7
}var a8=a9[0];a9=a9.substring(1);switch(a8){case"b":return a9=="true";
case"n":return Number(a9);case"o":try{return JSON.parse(a9)
}catch(ba){console.error("bg: storage: getValue ERROR: "+ba.message);
return a7}default:return a9}};if(aB.DB.USE_LOCAL){return a4(C.cacheDB[a5],a3)
}else{return a4(aX.getItem(a5,a3),a3)}},deleteAll:function(a3){if(SV){console.log("TM_storage.deleteAll()")
}if(aB.DB.USE_LOCAL){C.cacheDB={};C.localDB.db.transaction(function(a6){a6.executeSql("DROP TABLE config",[],a3,C.localDB.onError)
})}else{var a5=C.listValues();for(var a4=0;a4<a5.length;
a4++){aX.removeItem(a5[a4])}}},deleteValue:function(a5,a3){if(SV){console.log("TM_storage.deleteValue -> "+a5)
}var a4=ac(a5);if(aB.DB.USE_LOCAL){C.cacheDB[a4]=null;
delete C.cacheDB[a4];C.localDB.db.transaction(function(a6){a6.executeSql("DELETE FROM config WHERE name=?",[a4],a3,C.localDB.onError)
})}else{aX.removeItem(a4)}},listValues:function(){if(SV){console.log("TM_storage.listValues")
}if(aB.DB.USE_LOCAL){var a3=[];for(var a4 in C.cacheDB){if(!C.cacheDB.hasOwnProperty(a4)){continue
}a3.push(a4)}return a3}else{var a3=[];for(var a4=0;
a4<aX.length;a4++){a3.push(aX.key(a4))}return a3}}};
var P=function(){var a3=[];var a5=[];for(var a6=0;a6<a3.length;
a6++){var a4="system/"+a3[a6]+".tamper.js";var a7=Registry.getRaw(a4);
if(a7){a5.push(a7)}}return a5};var al={initialized:false,listenerRegistered:false,enabled:false,syncing:0,period:null,syncDoneListener:[],scheduled:{to:null,force:null,t:0},SYNCED:{comment:true},createTeslaData:function(a4){var a6=[];
var a7=al.getLocalScriptList();for(var a5=0;a5<a7.length;
a5++){if(a7[a5].url){var a3=JSON.stringify(a7[a5].options);
var a8=a7[a5].name.replace(/\|/g,"!")+"|"+a3+"|"+a7[a5].url.replace(/\|/g,"%7C");
a6.push(a8)}}if(a4){a4(a6)}},enable:function(a3){if(al.enabled){if(D&&al.initialized&&al.listenerRegistered){console.log("sync: reenable?")
}}else{if(aF.values.sync_type=="0"){al.enabled=false
}else{al.enabled=SyncInfo.init(aF.values.sync_type,aF.values.sync_id)
}}if(h.hasPermission&&!al.listenerRegistered){SyncInfo.addChangeListener(al.remoteChangeCb);
al.listenerRegistered=true}if(!al.initialized){al.initialized=true
}if(a3){a3(al.enabled)}},finalize:function(){},reset:function(a3){SyncInfo.reset(a3)
},addSyncDoneListener:function(a3){al.syncDoneListener.push(a3);
if(V){console.log("sync: addSyncDoneListener() -> "+al.syncDoneListener.length)
}},runAllSyncDoneListeners:function(a4){if(V){console.log("sync: runAllSyncDoneListeners() -> "+al.syncDoneListener.length)
}while(al.syncDoneListener.length){var a3=al.syncDoneListener.splice(0,1);
a3[0](a4)}},scheduleSync:function(a4,a5){var a8=(new Date()).getTime();
a5=al.scheduled.force||a5;if(al.scheduled.to){window.clearTimeout(al.scheduled.to);
if(al.scheduled.ts<(a8+a4)){a4=al.scheduled.ts-a8;if(a4<1){a4=1
}if(V){console.log("sync: re-schedule sync for run in "+a4+" ms")
}}}else{if(D){console.debug("sync: schedule sync for run in "+a4+" ms")
}}var a6=function(){al.sync(al.scheduled.force);al.scheduled.to=null;
al.scheduled.force=null};var a7=function(){al.scheduled.to=null;
al.scheduled.force=null;al.runAllSyncDoneListeners(false)
};var a3=function(){if(aF.values.sync_type==SyncInfo.types.eCHROMESYNC){var a9=function(ba,bb){if(ba){if(!al.listenerRegistered){al.enable(a6)
}else{a6()}}else{console.log("sync: storage permission is needed in order to use Google Sync!");
a7()}};h.requestPermissionEx(a9)}else{a6()}};al.scheduled.to=window.setTimeout(a3,a4);
al.scheduled.force=a5;al.scheduled.ts=a8+a4},schedulePeriodicalCheck:function(){if(al.period){return
}var a3=18000000;if(D){console.debug("sync: schedule sync for periodical run every "+a3+" ms")
}al.period=window.setInterval(al.sync,a3)},disablePeriodicalCheck:function(){if(al.period){if(D){console.debug("sync: disable periodical sync")
}window.clearInterval(al.period);al.period=null}},getLocalObjFromScript:function(a5){var a9=(a5.id||E.getScriptId(a5.name));
var a3=a5.downloadURL?a5.downloadURL.split("#")[0]:null;
var a8=a5.fileURL?a5.fileURL.split("#")[0]:null;var a7=a8||a3;
var a6={id:a9,name:a5.name,options:{},durl:a3,furl:a8,url:a7};
for(var a4 in al.SYNCED){if(al.SYNCED[a4]===true&&a5.options[a4]!==null){a6.options[a4]=a5.options[a4]
}}return a6},getLocalScriptList:function(){var a4=[];
var a6=U();for(var a3 in a6){var a7=a6[a3];var a5=G(a7);
if(!a5.script||!a5.cond){continue}a4.push(al.getLocalObjFromScript(a5.script))
}return a4},getRemoteScriptList:function(a3){SyncInfo.list(a3)
},checkSyncAccount:function(a5,a3,a4){var a7=null;var a6=function(a8){if(a7==null){var a9=function(){al.enable(function(){aQ();
al.scheduleSync(3000,a8)});a7=null};a7=window.setTimeout(a9,200)
}};if(a5=="sync_enabled"){if(a4){if(aF.values.sync_type==SyncInfo.types.ePASTEBIN){al.schedulePeriodicalCheck()
}a6()}else{al.enabled=false;al.disablePeriodicalCheck()
}}else{if(a5=="sync_type"){if(a4==SyncInfo.types.ePASTEBIN){al.schedulePeriodicalCheck()
}else{if(a4==SyncInfo.types.eCHROMESYNC){al.disablePeriodicalCheck()
}}a6()}else{if(a5=="sync_id"){if(aF.values.sync_type==SyncInfo.types.ePASTEBIN){a6()
}}}}},sync:function(a3){if(al.syncing>0){if(a3){var a8=function(bk){if(bk){al.scheduleSync(50,a3)
}};al.addSyncDoneListener(a8)}return}if(!al.enabled){return
}al.syncing++;if(V){console.log("sync: start syncing = "+al.syncing)
}var bg=null;var a4=null;var a7=[];var bf=false;var bi=true;
var bh={};var ba=function(){if(a7.length>0){var bk=a7.splice(0,1);
window.setTimeout(bk[0],1)}};var bc=function(){bi=false;
a9()};var a6=function(){al.getRemoteScriptList(be);
bg=al.getLocalScriptList()};var be=function(bk){a4=bk;
if(a4){ba()}else{if(D){console.error("sync: unable to get remotelist!")
}bc()}};a7.push(a6);var a5=function(bl){if(bl){bl=bl.split("#")[0];
if(bl){bl=bl.toLowerCase()}for(var bk=0;bk<bg.length;
bk++){var bm=bg[bk].furl?bg[bk].furl.toLowerCase():null;
var bn=bg[bk].durl?bg[bk].durl.toLowerCase():null;if(bm==bl||bn==bl){return bg[bk]
}}}return null};var bd=function(bl){if(bl){bl=bl.split("#")[0];
for(var bk=0;bk<a4.length;bk++){if(a4[bk].url==bl){return a4[bk]
}}}return null};var bb=function(){var br=1;var bl=function(){if(--br==0){ba()
}};for(var bs=0;bs<a4.length;bs++){var bm=a4[bs];var bq=false;
var bp=false;var bn=a5(bm.url);if(bn){bq=true;bh[bm.url]=true;
for(var bo in al.SYNCED){if(al.SYNCED[bo]===true&&bn.options[bo]!=bm.options[bo]){bp=true;
break}}}if(bq){if(bm.options.removed){bf=true;if(D){console.debug("sync: remove local script "+(bm.name||bm.url))
}s(bn.name,null,false)}else{if(bp){bf=true;if(D){console.debug("sync: update local script "+(bm.name||bm.url))
}var bk=G(bn.name);if(bk.script&&bk.cond){for(var bo in al.SYNCED){if(al.SYNCED[bo]===true){bk.script.options[bo]=bm.options[bo]
}}s(bk.script.name,bk.script,false)}else{console.log(aS.getMessage("fatal_error")+"("+bn.name+")!!!")
}}}}if(!bq&&!bm.options.removed){br++;bf=true;al.importScript(bm,bl)
}}bl()};a7.push(bb);var bj=function(){var bm=1;var bl=function(){if(--bm==0){ba()
}};for(var bn=0;bn<bg.length;bn++){var bk=false;var bq=bg[bn];
var bo=bq.url;if(!bo||bh[bo]){continue}var bp=bd(bo);
if(bp){bk=true}if(!bk){bm++;bf=true;al.exportScript(bq,bl)
}}bl()};if(aF.values.sync_type!=SyncInfo.types.ePASTEBIN){a7.push(bj)
}var a9=function(){if(D){console.debug("sync: finished")
}if(--al.syncing==0){al.runAllSyncDoneListeners(bi)
}if(bf){aQ()}};a7.push(a9);ba()},importScript:function(a8,a3){if(D){console.debug("sync: import "+(a8.name||a8.url))
}var a7={imported:aF.values.sync_type};var a5={};for(var a4 in al.SYNCED){if(al.SYNCED[a4]===true){a5[a4]=a8.options[a4]
}}var a6={ask:false,sync:a7,save:true,force_options:a5};
c(a8.url,a6,a3)},exportScript:function(a4,a3){if(D){console.debug("sync: export "+(a4.name||a4.url))
}SyncInfo.add(a4,a3)},removeScript:function(a4,a3){if(D){console.debug("sync: remove "+(a4.name||a4.url))
}SyncInfo.remove(a4,a3)},remoteChangeCb:function(a4,a3){if(!al.enabled||aF.values.sync_type!=SyncInfo.types.eCHROMESYNC){return
}if(V){console.log("sync: remoteChangeCb()")}al.scheduleSync(500,true)
},scriptAddedCb:function(a4,a3){if(!al.enabled){return
}if(V){console.log("sync: scriptAddedCb()")}var a5=al.getLocalObjFromScript(a3);
if(!a5.url){return}al.exportScript(a5)},scriptChangedCb:function(a5,a4,a7){if(!al.enabled){return
}if(V){console.log("sync: scriptChangedCb()")}var a6=al.getLocalObjFromScript(a4);
if(!a6.url){return}for(var a3 in al.SYNCED){if(al.SYNCED[a3]===true&&a4.options[a3]!=a7.options[a3]){al.exportScript(a6);
break}}},scriptRemovedCb:function(a4,a3){if(!al.enabled){return
}if(V){console.log("sync: scriptRemovedCb()")}var a5=al.getLocalObjFromScript(a3);
if(!a5.url){return}al.removeScript(a5)}};sycl=al;var B=function(a3){aF.addChangeListener("scriptblocker_overwrite",ak.init);
aF.addChangeListener("sync_enabled",al.checkSyncAccount);
aF.addChangeListener("sync_type",al.checkSyncAccount);
aF.addChangeListener("sync_id",al.checkSyncAccount);
aF.addChangeListener("fire_enabled",function(a6,a5,a4){if(a4&&!ai.status.initialized){ai.init()
}});aF.addChangeListener("logLevel",function(){M(aF.values.logLevel)
});aF.addChangeListener("i18n",function(){aS.setLocale(aF.values.i18n)
})};var z=function(a5){var a7=this;var a6="";a6+="// ==UserScript==\n";
a6+="// @name       My Fancy New Userscript\n";a6+="// @namespace  http://use.i.E.your.homepage/\n";
a6+="// @version    0.1\n";a6+="// @description  enter something useful\n";
a6+="// @match      http://*/*\n";a6+="// @copyright  2012+, You\n";
a6+="// ==/UserScript==\n\n";this.changeListeners={};
var a4={};var a9={configMode:0,safeUrls:true,tryToFixUrl:true,debug:false,logLevel:0,showFixedSrc:false,firstRun:true,webrequest_modHeaders:"yes",webrequest_fixCSP:"yes",scriptblocker_overwrite:"no",notification_showUpdate:"changelog",notification_silentScriptUpdate:true,scriptTemplate:a6,scriptUpdateCheckPeriod:12*60*60*1000,scriptUpdateHideNotificationAfter:15*1000,scriptUpdateCheckDisabled:false,runtime_fastDocumentStart:true,runtime_unsafeWindow:"auto",autoReload:false,appearance_badges:"running",fire_enabled:false,fire_sort_cache_enabled:true,fire_getURL:"http://fire.tampermonkey.net/get.php",fire_updatePeriod:14*24*60*60*1000,fire_topOnly:true,editor_enabled:true,editor_keyMap:"windows",editor_indentUnit:4,editor_indentWithTabs:false,editor_tabMode:"smart",editor_enterMode:"indent",editor_electricChars:true,editor_autoSave:false,editor_easySave:false,i18n:null,sync_enabled:false,sync_type:0,sync_id:"",statistics_enabled:true,require_blacklist:["/^https?:\\/\\/sizzlemctwizzle.com\\/.*/"],forbiddenPages:["*.paypal.tld/*","https://*deutsche-bank-24.tld/*","https://*bankamerica.tld/*","*://plusone.google.com/*/fastbutton*","*://www.facebook.com/plugins/*","*://platform.twitter.com/widgets/*"]};
this.addChangeListener=function(bc,bb){if(!a7.changeListeners[bc]){a7.changeListeners[bc]=[]
}a7.changeListeners[bc].push(bb)};this.load=function(bb){var bg=P();
for(var bc in bg){var be=bg[bc];window.setTimeout(function(){Z({tabid:null,url:null,src:be,ask:false,defaultscript:true})
},1)}a7.defaults=a9;a7.values={};for(var bf in a9){if(!a9.hasOwnProperty(bf)){continue
}(function bd(){var bj=bf;var bi=function(){return a4[bj]
};var bk=function(bl){ba(bj,bl)};a7.values.__defineGetter__(bj,bi);
a7.values.__defineSetter__(bj,bk)})();a4[bf]=a9[bf]
}var bh=C.getValue("TM_config",a7.defaults);for(var bf in bh){if(!bh.hasOwnProperty(bf)){continue
}a7.values[bf]=bh[bf]}bb()};var ba=function(bb,be){if(a7.changeListeners[bb]&&(a4[bb])!=be){for(var bc=0;
bc<a7.changeListeners[bb].length;bc++){(function bd(){var bj=bb;
var bi=a7.values[bj];var bh=be;if(bi!=bh){var bg=a7.changeListeners[bj][bc];
var bf=function(){bg(bj,bi,bh)};window.setTimeout(bf,1)
}})()}}a4[bb]=be};this.save=function(bb){if(bb==undefined){bb=true
}var bc=a7.values;bc.firstRun=false;C.setValue("TM_config",bc)
};var a3=function(){if(a7.values.firstRun){a7.save(false)
}a7.images={};a7.images.icon="images/icon.png";a7.initialized=true;
if(aO){var bc="version="+aO.newV+"&ext="+aB.SELF.ID.substr(0,4)+"&updated=true";
var bb,bd;if(aO.first_run){bb="http://tampermonkey.net/installed.php?"+bc;
bd=true}else{bc+="&old="+aO.oldV;bb="http://tampermonkey.net/changelog.php?"+bc;
bd=false}if(a7.values.notification_showUpdate=="off"){}else{if(a7.values.notification_showUpdate=="notification"){aN.showUpdate(aS.getMessage("Updated_to__0version0",aO.newV),aS.getMessage("Click_here_to_see_the_recent_changes"),chrome.extension.getURL("images/icon128.png"),bb)
}else{if(a7.values.notification_showUpdate=="changelog"){var be={url:bb,active:bd};
chrome.tabs.create(be,function(){})}}}}if(a5){a5()}};
var a8=function(bb){if(!C.initialized){window.setTimeout(function(){a8(bb)
},10);return}var bc=function(){a7.load(bb)};aI(bc)};
a8(a3);return this};var an=function(a3,a4){return u(a3,a4,{internal:true})
};var aq=function(a4){var a3=this;this.getNextResource=function(bh,bc){var a8=function(bn,bl){bl.loaded=true;
bl.resURL="";bl.resText="";var bq=null;var bk=bn.responseHeaders?bn.responseHeaders.split("\n"):null;
for(var bj in bk){var bp=bk[bj].split(":");var bm=bp.shift()||"";
var bo=bp.join(":")||"";if(V){console.log("ri: Header: "+bk[bj])
}if(bm.trim().toLowerCase()=="content-type"&&bo.search("image")!=-1){bq=bo.trim();
break}}if(bn.readyState==4){if(bn.status==200||bn.status==0){bl.resText=bn.responseText;
if(!bq){if(bl.url.search(".ico$")!=-1||bl.url.search(".jpg$")!=-1){bq="image/x-icon"
}else{if(bl.url.search(".gif$")!=-1){bq="image/gif"
}else{if(bl.url.search(".png$")!=-1){bq="image/png"
}else{if(ad.isLocalImage(bl.url)){bq="image/x-icon"
}}}}}if(bn.status!=0){Q.items.requires.set(bl.url,{content:bn.responseText,headers:bn.responseHeaders})
}if(!bq){bl.resURL=L.Base64.encode(bn.responseText)
}else{bl.resURL="data:"+bq+";base64,"+L.Base64.encode(bn.responseText)
}if(V){console.log("ri: resUrl: "+bl.resURL)}if(!a4){bc(bh)
}}else{if(D||V){console.debug("ri: Failed to load: '"+bl.url+"' "+bn.status+" "+bn.statusText)
}if(!a4){bc(bh)}}}};var bd=function(bj){a8({readyState:4,status:404,responseText:"",responseHeaders:""},bj)
};var a6,bf;for(var be in bh.resources){a6=bh.resources[be];
bf=false;if(!a6.loaded){var a9=I.parse(a6.url);if(a9.protocol=="tampermonkey:"){if(a9.pathname.search("\\.\\.")==-1){a6.url=chrome.extension.getURL(a6.url.replace(/^tampermonkey:\/\//,""))
}else{bf=true}}else{if(a9.protocol=="chrome-extension:"){if(bh.fileURL){var ba=I.parse(bh.fileURL);
var bb=ba.pathname.split("/");bb.pop();var a7=bb.join("/")+a9.pathname;
a6.url=ba.protocol+"//"+ba.hostname+(ba.port?":"+ba.port:"")+a7+a9.search
}else{bf=true}}}if(bf){bd(a6)}else{var bi=Q.items.requires.get(a6.url);
if(bi){a8({readyState:4,status:200,responseText:bi.content,responseHeaders:bi.headers},a6)
}else{if(a9.protocol=="file:"){var bg=function(bj){a8({readyState:4,status:bj?0:404,responseText:bj},a6)
};if(a4){bg(a.getSource(a6.url))}else{a.getSource(a6.url,bg)
}}else{var a5={method:"GET",url:a6.url,retries:aB.XMLHTTPREQUEST.RETRIES,overrideMimeType:"text/plain; charset=x-user-defined"};
if(V){console.log("ri: request "+a6.url)}if(a4){a8(an(a5,{}),a6)
}else{an(a5,{callback:function(bj){a8(bj,a6)}})}}}}if(!a4){return true
}}}return false};this.isBlacklisted=function(a6){var a7=false;
var a5=function(a9){var a8=false;if(!a9.length){return
}if(a9.substr(0,1)=="/"){a8=aY(a6,a9)}else{a8=(a6.search(a9)!=-1)
}if(D&&a8){console.log('bg: require blacklist entry "'+a9+'" matched')
}a7|=a8};ad.forEach(aF.values.require_blacklist,a5);
return a7};this.getRequires=function(bh,bd){var bi=function(bl,bk){a6.loaded=true;
if(bl.readyState==4&&bl.status==200||bl.status==0){a6.textContent=bl.responseText;
if(bl.status!=0){Q.items.requires.set(a6.url,{content:bl.responseText,headers:bl.responseHeaders})
}}};var bc=function(bk){bi({readyState:4,status:404,responseText:""},bk)
};var a6,bf;for(var be in bh.requires){var a6=bh.requires[be];
bf=false;if(!a6.loaded&&a6.url){var a9=I.parse(a6.url);
if(a9.protocol=="tampermonkey:"){if(a9.pathname.search("\\.\\.")==-1){a6.url=chrome.extension.getURL(a6.url.replace(/^tampermonkey:\/\//,""))
}else{bf=true}}else{if(a9.protocol=="chrome-extension:"){if(bh.fileURL){var ba=I.parse(bh.fileURL);
var bb=ba.pathname.split("/");bb.pop();var a7=bb.join("/")+a9.pathname;
a6.url=ba.protocol+"//"+ba.hostname+(ba.port?":"+ba.port:"")+a7+a9.search
}else{bf=true}}}if(bf){bc(a6)}else{var bj=null;if(a3.isBlacklisted(a6.url)){bj={content:'// this @require ("'+encodeURIComponent(a6.url)+'") is blacklisted!\n'}
}else{bj=Q.items.requires.get(a6.url)}if(bj){bi({readyState:4,status:200,responseText:bj.content},a6);
if(!a4){a3.getRequires(bh,bd)}}else{if(V){console.log("requires "+a6.url)
}var a8=function(bk){bi(bk,a6);if(!a4){a3.getRequires(bh,bd)
}};if(a9.protocol=="file:"){var bg=function(bk){a8({readyState:4,status:bk?0:404,responseText:bk})
};if(a4){bg(a.getSource(a6.url))}else{a.getSource(a6.url,bg)
}}else{var a5={method:"GET",retries:aB.XMLHTTPREQUEST.RETRIES,url:a6.url,};
if(a4){a8(an(a5,{}))}else{an(a5,{callback:a8})}}}}if(!a4){return true
}}}if(!a4){bd()}};this.contentLoad=function(a9,a6,a5){var a7=null;
if(a3.getNextResource(a6,function(ba){a3.contentLoad(a9,ba,a5)
})){return a7}a3.info=a9;if(typeof ax[a9.tabId]=="undefined"){ax[a9.tabId]={storage:{}}
}var a8=function(){console.log("run script "+a6.name+" @ "+a9.url);
return a3.injectScript(a6,a5)};if(a4){return a8(a3.getRequires(a6))
}else{a3.getRequires(a6,a8)}};this.getUrlContents=function(a5){var a6="";
var a7=new XMLHttpRequest();a7.open("GET","/"+a5,false);
a7.send(null);a6=a7.responseText;return a6};this.createEnv=function(a6,a5){a6=aV.mkCompat(a6,a5);
if(aF.values.debug){console.log(aS.getMessage("env_option__debug_scripts"));
a6="debugger;\n"+a6}return a6};this.injectScript=function(a8,a5){if(a5==undefined){a5=function(){}
}var ba=[];a8.requires.forEach(function(be){var bd=be.textContent;
bd=aV.mkCompat(bd,a8.options.compatopts_for_requires?a8:null);
ba.push(bd)});var a6="\n"+ba.join("\n")+"\n";var bc=aJ(a8.name);
var a9={};for(var a7 in a8){if(a7=="includes"||a7=="matches"||a7=="requires"||a7=="excludes"||a7=="textContent"){continue
}a9[a7]=a8[a7]}var bb={method:"executeScript",header:a8.header,code:a3.createEnv(a8.textContent,a8),requires:a6,version:chrome.extension.getVersion(),storage:bc,script:a9,id:a3.info.contextId};
if(a4){a5();return bb}else{window.setTimeout(function(){chrome.tabs.sendMessage(a3.info.tabId,bb,a5)
},1)}}};var v=function(a3){s(a3,null);au(a3,null)};
var X=function(a3){if(a3){a3+=(a3.search("\\?")==-1?"?":"&")+"ts="+(new Date()).getTime()
}return a3};var aW=function(a5,a4){if(!a5){return null
}var a3=null;if(a5.fileURL&&a5.fileURL.search("^file://"==-1)){a3=a5.fileURL
}if(a5.downloadURL&&a5.downloadURL.search("^file://"==-1)){a3=a5.downloadURL
}if(a3&&a4){a3=X(a3)}return a3};var i=function(a7,a6){if(!a7){return null
}var a5=null,a3=null;if(a7.fileURL&&a7.fileURL.search("^file://"==-1)){a5=a7.fileURL
}if(a7.downloadURL&&a7.downloadURL.search("^file://"==-1)){a5=a7.downloadURL
}if(a7.updateURL&&a7.updateURL.search("^file://"==-1)){a3=a7.updateURL
}if(a3){return a6?X(a3):a3}if(a5){var a4=null;a4=a5.replace(".user.js",".meta.js");
if(a4==a5){a4=a5.replace(".tamper.js",".meta.js")}if(a4==a5){a4=null
}return a6?X(a4):a4}return null};var ap=function(a6,a7){var a5=i(a6,true);
if(a5){var a4={method:"GET",retries:0,url:a5,};var a3=function(a8){a6.meta=null;
if(a8.readyState==4&&a8.status==200){var a9=E.processMetaHeader(a8.responseText);
a6.meta=a9;a6.metasrc=a8.responseText}else{console.log("bg: unable to find meta data @ "+a5+" req.status = "+a8.status)
}a7(a6)};u(a4,{callback:a3});return}a6.meta=null;a7(a6)
};var b=function(a4){var a6,a5=a4.options.override;
a4.includes=a5.merge_includes&&a5.orig_includes?a5.orig_includes.slice():[];
a4.excludes=a5.merge_excludes&&a5.orig_excludes?a5.orig_excludes.slice():[];
a4.matches=a5.merge_matches&&a5.orig_matches?a5.orig_matches.slice():[];
for(a6=0;a6<a5.use_includes.length;a6++){var a3=a4.excludes.indexOf(a5.use_includes[a6]);
if(a3>=0){a4.excludes.splice(a3,1)}a4.includes.push(a5.use_includes[a6])
}if(typeof a5.use_matches!=="undefined"){for(a6=0;a6<a5.use_matches.length;
a6++){a3=a4.excludes.indexOf(a5.use_matches[a6]);if(a3>=0){a4.excludes.splice(a3,1)
}a4.matches.push(a5.use_matches[a6])}}for(a6=0;a6<a5.use_excludes.length;
a6++){a4.excludes.push(a5.use_excludes[a6])}return a4
};var aQ=function(){if(D){console.debug("bg: notifyOptionsTab() -> may fail...")
}am();var a3=function(a4){chrome.extension.sendMessage({method:"updateOptions",items:a4},function(a5){})
};f(a3)};var Z=function(ba){var bl=false;var bk=false;
var bh=false;var bi={};if(ba.name===undefined){ba.name=null
}if(ba.clean===undefined){ba.clean=false}if(ba.defaultscript===undefined){ba.defaultscript=false
}if(ba.ask===undefined){ba.ask=true}if(ba.url===undefined||ba.url==null){ba.url=""
}if(ba.save===undefined){ba.save=false}if(ba.hash===undefined){ba.hash=""
}if(ba.force_url===""){ba.force_url=null}if(ba.ask&&!ba.tabid){console.warn("anus: no tabId was given!")
}var bm=E.createScriptFromSrc(ba.src);if(ba.name&&ba.name!=bm.name){if(ba.clean){console.warn("anus: names do not match!");
return false}else{bi.renamed=true}}if(!bm.name||bm.name==""||(bm.version==undefined)){var bb=aS.getMessage("Invalid_UserScript__Sry_")+"\n\n";
if(ba.name){bb+=aS.getMessage("Script_name_0url0",ba.name)+"\n\n"
}if(ba.url){bb+=aS.getMessage("Downloaded_from_0url0",ba.url)
}if(ba.tabid){chrome.tabs.sendMessage(ba.tabid,{method:"showMsg",msg:bb,frameId:0},function(bn){})
}else{console.warn("anus: "+bb)}return false}var a7=C.getValue(bm.name,null);
var a4="";if(!ba.clean&&a7&&a7.system&&!ba.defaultscript){return false
}if(bm.options.compat_uW_gmonkey){var bb=aS.getMessage("This_script_uses_uW_gm_api_");
if(ba.tabid){chrome.tabs.sendMessage(ba.tabid,{method:"showMsg",msg:bb,frameId:0},function(bn){})
}else{console.warn("anus: "+bb)}return false}if(a7){bh=(ba.hash&&a7.hash!=ba.hash);
bm.fileURL=a7.fileURL}bm.hash=ba.hash?ba.hash:(a7?a7.hash:null);
bm.lastUpdated=(new Date()).getTime();bm.system=ba.defaultscript;
if(ba.url){bm.fileURL=ba.url}if(!ba.clean&&ba.force_url){bm.updateURL=null;
bm.downloadURL=ba.force_url}bm.position=a7?a7.position:A()+1;
if(bm.name.search("\n")!=-1){var bb=aS.getMessage("Invalid_UserScript_name__Sry_");
if(ba.tabid){chrome.tabs.sendMessage(ba.tabid,{method:"showMsg",msg:bb,frameId:0},function(bn){})
}else{console.warn("anus: "+bb)}return false}else{if(!ba.clean&&a7&&bm.version==a7.version&&!bh){if(ba.defaultscript||ba.noreinstall){return null
}if(ba.save){a4+=aS.getMessage("You_are_about_to_modify_a_UserScript_")+"     \n"
}else{a4+=aS.getMessage("You_are_about_to_reinstall_a_UserScript_")+"     \n";
bl=true;a4+="\n"+aS.getMessage("All_script_settings_will_be_reset_")+"!!\n"
}a4+="\n"+aS.getMessage("Name_")+"\n";a4+="    "+bm.name+((bm.version!="")?" v"+bm.version:"")+"\n";
a4+="\n"+aS.getMessage("Installed_Version_")+"\n";a4+="    v"+bm.version+"\n"
}else{if(!ba.clean&&a7&&S(bm.version,a7.version)==n){a4+=aS.getMessage("You_are_about_to_downgrade_a_UserScript")+"     \n";
a4+="\n"+aS.getMessage("Name_")+"\n";a4+="    "+bm.name+((bm.version!="")?" v"+bm.version:"")+"\n";
a4+="\n"+aS.getMessage("Installed_Version_")+"\n";a4+="    v"+a7.version+"\n"
}else{if(!ba.clean&&a7){a4+=aS.getMessage("You_are_about_to_update_a_UserScript_")+"     \n";
a4+="\n"+aS.getMessage("Name_")+"\n";a4+="    "+bm.name+((bm.version!="")?" v"+bm.version:"")+"\n";
a4+="\n"+aS.getMessage("Installed_Version_")+"\n";a4+="    v"+a7.version+"\n";
bk=true}else{a4+=aS.getMessage("You_are_about_to_install_a_UserScript_")+"     \n";
a4+="\n"+aS.getMessage("Name_")+"\n";a4+="    "+bm.name+((bm.version!="")?" v"+bm.version:"")+"\n"
}}}}if(!ba.clean&&a7){bm.options.override=a7.options.override;
bm.options.comment=a7.options.comment}bm.options.override.orig_includes=bm.includes;
bm.options.override.orig_excludes=bm.excludes;bm.options.override.orig_matches=bm.matches;
bm=b(bm);bm.options.override.orig_noframes=bm.options.noframes;
if(a7){if(a7.sync){bm.sync=a7.sync}}if(!bl&&!ba.clean&&a7){bm.enabled=a7.enabled;
bm.options.noframes=a7.options.noframes;if(!bm.options.awareOfChrome){bm.options.compat_forvarin=a7.options.compat_forvarin;
if(bm.options.run_at==""){bm.options.run_at=a7.options.run_at
}}var bd=i(a7);var a3=i(bm);if(bd!=a3){a4+="\n"+aS.getMessage("The_update_url_has_changed_from_0oldurl0_to__0newurl0",[bd,a3]);
bk=false}}if(!ba.clean&&ba.sync){bm.sync=ba.sync}if(!bm.includes.length&&!bm.matches.length){a4+="\n"+aS.getMessage("Note_")+"\n";
a4+="    "+aS.getMessage("This_script_does_not_provide_any__include_information_")+"\n";
a4+="    "+aS.getMessage("Tampermonkey_assumes_0urlAllHttp0_in_order_to_continue_",I.staticVars.urlAllHttp_)+"    \n";
bm.includes.push(I.staticVars.urlAllHttp_)}if(bm.options.run_at==""){bm.options.run_at="document-end"
}if(ba.force_options){for(var bf in bm.options){if(ba.force_options[bf]!==undefined){bm.options[bf]=ba.force_options[bf]
}}}var bg=bm.excludes.length+bm.includes.length+bm.matches.lenght;
var bj=0;var bb=4;var a5="";a5+="\n"+aS.getMessage("Include_s__");
if(bm.options.override.includes||bm.options.override.matches){a5+=" ("+aS.getMessage("overwritten_by_user")+")"
}a5+="\n";var bc=0,a9=0;for(bc=0;bc<bm.includes.length;
bc++,a9++){a5+="    "+bm.includes[bc];a5+=(bg<15)?"\n":(bj<bb)?";":"\n";
if(bj++>=bb){bj=0}if(a9>13){a5+="\n"+aS.getMessage("Attention_Can_not_display_all_includes_")+"\n";
break}}for(bc=0;bc<bm.matches.length;bc++,a9++){a5+="    "+bm.matches[bc];
a5+=(bg<15)?"\n":(bj<bb)?";":"\n";if(bj++>=bb){bj=0
}if(a9>13){a5+="\n"+aS.getMessage("Attention_Can_not_display_all_includes_")+"\n";
break}}var a6="";bj=0;if(bm.excludes.length){a6+="\n"+aS.getMessage("Exclude_s__");
if(bm.options.override.excludes){a6+=" ("+aS.getMessage("overwritten_by_user")+")"
}a6+="\n";for(var bc=0;bc<bm.excludes.length;bc++){a6+="    "+bm.excludes[bc];
a6+=(bg<15)?"\n":(bj<bb)?";":"\n";if(bj++>=bb){bj=0
}if(bc>13){a6+="\n"+aS.getMessage("Attention_Can_not_display_all_excludes_")+"\n";
break}}}a4+=a5+a6;var be=false;for(var bf in bm.options){if(bf.search("compat_")!=-1&&bm.options[bf]===true){be=true;
break}}if(be){a4+="\n"+aS.getMessage("Note__A_recheck_of_the_GreaseMonkey_FF_compatibility_options_may_be_required_in_order_to_run_this_script_")+"\n\n"
}if(ba.clean){a4+="\n"+aS.getMessage("Do_you_really_want_to_factory_reset_this_script_")+"    "
}else{a4+="\n"+aS.getMessage("Do_you_want_to_continue_")
}var a8=function(){s(bm.name,bm);if(!a7||ba.clean){au(bm.name,{ts:(new Date()).getTime()})
}if(!ba.cb){aQ()}if(false){var bn=function(bo){if(!bo){return
}console.log("anus: disable extension "+bo.name);d.setEnabled(bo,false)
};d.getUserscriptByName(bm.name,bn)}};if(!ba.ask||(bk&&aF.values.notification_silentScriptUpdate)){a8();
bi.installed=true;if(ba.cb){ba.cb(bi)}}else{chrome.tabs.sendMessage(ba.tabid,{method:"confirm",msg:a4,frameId:0},function(bn){var bo=bn&&bn.confirm;
if(bo){a8();bi.installed=true}if(ba.cb){ba.cb(bi)}})
}return true};var c=function(a4,a6,a3){var a5={method:"GET",retries:aB.XMLHTTPREQUEST.RETRIES,url:a4,};
var a7=function(a9){if(a9.readyState==4){if(a9.status==200){var bb=function(bc){if(a3){a3(true,bc.installed)
}};var ba={url:a4,src:a9.responseText,ask:true,cb:bb};
if(a6){for(var a8 in a6){if(!a6.hasOwnProperty(a8)){continue
}ba[a8]=a6[a8]}}if(!Z(ba)){if(a3){a3(false,false)}}}else{if(V){console.log("scriptClick: "+a4+" req.status = "+a9.status)
}if(a3){a3(false,false)}}}};u(a5,{callback:a7})};var m=function(a7,a3){var a4=function(a9){if(!a7){return false
}for(var a8=0;a8<a7.length;a8++){if(a7[a8]==a9){return true
}}return false};var a6=function(a8){return !a4(a8)&&!ay.get.empty(a8)&&ay.get.stats(a8).running
};var a5=function(ba){var a9=0;var bg=ba&&ba.id;var a8=bg&&!ay.get.empty(ba.id);
if(!bg||!a8){var bc=0;var bd=0;var bb=function(bh,bi){if(bd==0||bh.ts<bd){if(a6(bi)){bd=bh.ts;
bc=bi}}};ad.forEach(ay.get.tabs(),bb);a9=Number(bc)
}else{if(a6(ba.id)){a9=ba.id}}if(a9==0){var bf=3;var be=function(){var bh=function(bi){if(!bi){if(bf-->0){console.warn("chrome.tabs.create failed -> retry!");
window.setTimeout(be,500)}else{console.error("chrome.tabs.create failed -> giving up now!")
}return}a9=bi.id;var bk=function(){chrome.tabs.remove(a9)
};var bj=function(){a3(a9,bk)};window.setTimeout(bj,100)
};chrome.tabs.create({url:chrome.extension.getURL("ask.html")+"?i18n="+aF.values.i18n},bh)
};be()}else{a3(a9,null)}};chrome.tabs.getSelected(null,a5)
};var aN={notify:function(a8,a7,a5,a3,a4,ba){var a9=false;
if(!ba){a9=true;ba=function(){}}var a6=function(bc){var bb=null;
var bf=false;var bh=null;var bi=function(){if(bh){window.clearTimeout(bh)
}if(!bf){ba({})}};var bj=function(){bf=true;var bn={clicked:bf};
var bm=function(){if(ba){ba(bn)}};if(a4){var bk=function(bo){bn.granted=bo;
bm()};var bl={permissions:[a4]};chrome.permissions.request(bl,bk)
}else{bm(bn)}if(bb){bb.cancel()}};try{bb=p.createNotification(bc,a8||"",a7||"")
}catch(be){console.warn("notify: Notification creation failed with: "+be.message);
var bd=function(){var bk=confirm((a8?a8+"\n\n":"")+a7);
if(bk){bj()}else{bi()}};if(!a9){window.setTimeout(bd,1)
}return}bb.onclose=bi;bb.onclick=bj;var bg=function(){bh=null;
bb.cancel()};bh=window.setTimeout(bg,a3?a3+5000:10*60*1000);
if(D||V||UV){console.debug("notify.notify(): ",a8,a7,a5,a3,a4)
}bb.show()};ab.getDataUriFromUrl(a5||chrome.extension.getURL("images/icon128.png"),a6)
},getPermission:function(a7,a6,a5,a3,a4,a8){aN.notify(a7,a6,a5,a3,a4,a8)
},showUpdate:function(a6,a5,a4,a3){var a7=function(a8){if(a8.clicked){var a9={url:a3};
chrome.tabs.create(a9,function(){})}};aN.notify(a6,a5,a4,300000,null,a7)
},show:function(a6,a5,a4,a3,a7){aN.notify(a6,a5,a4,a3,null,a7)
}};var ag={check:function(a5,a6,a8,a7){if(!a5&&aF.values.scriptUpdateCheckPeriod==0){return
}var a3=function(ba){if(a6){var bb=aS.getMessage("Script_Update");
var bc=aS.getMessage("Check_for_userscripts_updates")+"...";
aN.show(bb,bc,chrome.extension.getURL("images/icon128.png"),5000)
}console.log("bg: check for script updates "+(a8?" for "+a8:""));
var a9=function(be,bh){if(be){try{var bf=function(bj){if(bj.clicked){var bk=function(bn,bm){var bl={tabid:bn,url:bh.url,src:bh.code,ask:true,cb:bm,hash:bh.newhash!==undefined?bh.newhash:null};
Z(bl)};m(null,bk)}};var bi=aS.getMessage("There_is_an_update_for_0name0_avaiable_",bh.name)+"\n"+aS.getMessage("Click_here_to_install_it_");
var bd=aS.getMessage("Just_another_service_provided_by_your_friendly_script_updater_");
if(aF.values.notification_silentScriptUpdate){bf({clicked:true})
}else{aN.show(bd,bi,chrome.extension.getURL("images/icon128.png"),aF.values.scriptUpdateHideNotificationAfter,bf)
}}catch(bg){console.error("bg: notification error "+bg.message)
}}if(a7){a7(be)}};ag.updateUserscripts(0,a6,a8,a9)};
var a4=function(){var ba=a1();if(a5||((new Date()).getTime()-ba.scripts)>aF.values.scriptUpdateCheckPeriod){var a9=function(){a3();
ba.scripts=(new Date()).getTime();k(ba)};if(al.enabled){al.addSyncDoneListener(a9);
al.scheduleSync(50,false)}else{a9()}}else{if(a7){console.log("bg: WARN ScriptUpdater.check -> no force but callback");
window.setTimeout(a7,1)}}};a4();window.setTimeout(ag.check,5*60*1000)
},srcCmp:function(a5){var a3=E.createScriptFromSrc(a5);
if(!a3.name||a3.name==""||(a3.version===undefined)){return l
}var a4=C.getValue(a3.name,null);if(a4&&a4.system){return null
}if(a3.options.compat_uW_gmonkey){return l}if(a3.name.search("@")!=-1){return l
}else{if(a4&&a3.version==a4.version){return F}else{if(a4&&S(a3.version,a4.version)==n){return n
}else{if(a4){return af}else{return af}}}}return af},updateUserscripts:function(a4,a5,bh,bg){var bd=U();
var bb=1;var bi=0;var a9=function(){if(bb==0&&bi==0){if(a5){if(D||V||UV){console.debug("No update found")
}aN.show("Narf!",aS.getMessage("No_update_found__sry_"),chrome.extension.getURL("images/icon128.png"),5000)
}if(bg){window.setTimeout(bg,1)}}};var bf=function(bk){var bj={method:"GET",retries:aB.XMLHTTPREQUEST.RETRIES,url:aW(bk.script,true),};
bb++;(function(){var bn={tabid:a4,r:bk};var bm=aW(bn.r.script);
var bl=function(bq){bb--;if(bq.readyState==4&&bq.status==200){if(V){console.log(bm)
}var bp=function(){if(bn.r.meta){if(V||UV){console.log("bg: update hash of script "+bk.script.name+" to "+bn.r.meta[t])
}bn.r.script.hash=bn.r.meta[t];s(bn.r.script.name,bn.r.script,false)
}};var bo=ag.srcCmp(bq.responseText);if(bo==af||bk.hash_different){bi++;
if(bg){bg(true,{name:bn.r.script.name,url:bm,code:bq.responseText,newhash:bn.r.meta?bn.r.meta[t]:null})
}return}else{if(bo==F){if(V||UV){console.log("bg: found same version @ "+bm)
}bp()}}}else{console.log(aS.getMessage("UpdateCheck_of_0name0_Url_0url0_failed_",[bn.r.script.name,bm]))
}a9()};u(bj,{callback:bl})})()};var bc=function(bk){bb++;
var bj=function(bo){var bp=!!bo.meta;var bl=bp&&!!bo.meta.version;
var bn=bl&&(!bk.script.version||S(bo.meta.version,bk.script.version)==af);
var bm=bp&&(bk.script.hash||!bl)&&!!bo.meta[t]&&bo.meta[t]!=bk.script.hash;
if(!bp||bm||!bl||bn){if(V||UV){console.log("bg: hash of script "+bk.script.name+" has changed or does not exist! running version check!")
}bk.meta=bo.meta;bk.metasrc=bo.metasrc;bk.hash_different=bm;
bf(bk)}else{if(V||UV){console.log("bg: hash of script "+bk.script.name+" has NOT changed.")
}}bb--;a9()};ap(bk.script,bj)};var ba=false;for(var a8 in bd){var a7=bd[a8];
var a3=G(a7);if(!a3.script||!a3.cond){console.log(aS.getMessage("fatal_error")+"("+a7+")!!!");
continue}var be=bh&&a3.script.id!=bh;var a6=!aF.values.scriptUpdateCheckDisabled&&!a3.script.enabled&&!bh;
if(be||a6||!(i(a3.script)||aW(a3.script))){continue
}ba=true;bc(a3)}if(!ba&&bh&&bg){window.setTimeout(bg,1)
}bb--}};trup=ag;var A=function(){var a6=U();var a8=0;
for(var a3 in a6){var a7=a6[a3];var a5=G(a7);if(!a5.script||!a5.cond){console.error("fatal error ("+a7+")!!!");
continue}if(a5.script.position&&a5.script.position>a8){a8=a5.script.position
}}var a4=new E.Script();if(a4.position>a8){a8=a4.position
}return a8};var aY=function(a3,a7,a4){var a5=function(ba){return ba.replace(/\/$/,"")
};var a8,a6;try{if(!a4&&a7.length>1&&a7.substr(0,1)=="/"){a8=new RegExp(".*"+a7.replace(/^\//g,"").replace(/\/$/g,"")+".*","i")
}else{if(a4){a6=I.getRegExpFromMatch(a7);a8=new RegExp(a6)
}else{a6=I.getRegExpFromInclude(a7,{tryToFixUrl:aF.values.tryToFixUrl,safeUrls:aF.values.safeUrls});
a8=new RegExp(a6,"i")}}}catch(a9){console.warn("bg: invalid regexp ",a7);
az.tE('Invalid Regexp "'+a7+'" -> "'+a6+'" '+a9.message,chrome.extension.manifest.version);
return false}return a3.replace(a8,"")===""};var aE=function(a3,a5,a7){var a4,a6=false;
if(a5.inc||a5.match){for(a4 in a5.inc){if(typeof a5.inc[a4]!=="string"){console.warn("bg: WARN: include["+a4+"] '"+a5.inc[a4]+"' "+(a7?"@"+a7+" ":"")+"can't be compared to '"+a3+"'")
}else{if(aY(a3,a5.inc[a4])){if(D){console.log("bg: @include '"+a5.inc[a4]+"' matched"+(a7?" ("+a7+")":""))
}a6=true;break}}}if(a5.match){for(a4 in a5.match){if(typeof a5.match[a4]!=="string"){console.warn("bg: WARN: match["+a4+"] '"+a5.match[a4]+"' "+(a7?"@"+a7+" ":"")+"can't be compared to '"+a3+"'")
}else{if(aY(a3,a5.match[a4],true)){if(D){console.log("bg: @match '"+a5.match[a4]+"' matched"+(a7?" ("+a7+")":""))
}a6=true;break}}}}if(!a6){return a6}}else{a6=true}for(a4 in a5.exc){if(aY(a3,a5.exc[a4])){if(D){console.log("bg: @exclude '"+a5.exc[a4]+"' matched"+(a7?" ("+a7+")":""))
}a6=false;break}}return a6};var U=function(){var a5=C.listValues();
var a6=[];for(var a4 in a5){var a3=a5[a4];if(a3.search(/@re$/)==-1){continue
}var a7=a3.replace(/@re$/,"");a6.push(a7)}return a6
};var am=function(a4,a9){var a3=a2();for(var a5=0;a5<a3.length;
a5++){var a6=a3[a5];if(a6.name==a4){var a7=(a6.position<a9)?0.5:-0.5;
a6.position=(Number(a9)+a7)}}a3=av(a3);var a8=1;for(var a5=0;
a5<a3.length;a5++){var a6=a3[a5];a6.position=a8++;s(a6.name,a6,false)
}};var av=function(a3){var a4=function(a6,a5){return a6.position-a5.position
};a3.sort(a4);return a3};var a2=function(a4){var a8=U();
var a5=[];if(D||V){console.log("determineScriptsToRun @"+a4)
}for(var a3 in a8){var a9=a8[a3];if(a4){var a6=C.getValue(a9+O,null);
if(!a6){continue}if(!aE(a4,a6,a9)){continue}}var a7=G(a9);
if(!a7.script||!a7.cond){console.error("fatal error ("+a9+")!!!");
continue}if(V){console.log("bg: determineScriptsToRun: found script "+a9)
}a5.push(a7.script)}return av(a5)};var aJ=function(a3){var a4=C.getValue(a3+at,{ts:0,data:{}});
if(typeof a4.ts==="undefined"){a4.ts=0}if(typeof a4.data==="undefined"){a4.data={}
}return a4};var au=function(a3,a4){if(a4){C.setValue(a3+at,a4)
}else{C.deleteValue(a3+at)}};var G=function(a3){var a4=C.getValue(a3,null);
if(a4){a4.textContent=C.getValue(a3+aG,a4.textContent);
if(!a4.textContent){a4=null}}return{script:a4,cond:C.getValue(a3+O,null)}
};var s=function(a4,ba,a6){if(a6===undefined){a6=true
}if(ba){var a7=C.getValue(a4);var a9=!a7;C.setValue(a4+O,{inc:ba.includes,match:ba.matches,exc:ba.excludes});
C.setValue(a4+aG,ba.textContent);var bc=ba;bc.textContent=null;
C.setValue(a4,bc);if(a6){if(a9){al.scriptAddedCb(a4,ba)
}else{al.scriptChangedCb(a4,ba,a7)}if(!aF.values||aF.values.statistics_enabled){var bb=null;
if(a9&&ba.fileURL){var a5=I.parse(ba.fileURL);var a8=a5.hostname&&a5.hostname.length>5?a5.hostname.substr(0,1)+"***"+a5.hostname.substr(a5.hostname.length-3,3):"*";
bb=a5.protocol+"//"+a8+(a5.port?":"+a5.port:"")+a5.pathname+(a5.search?"?***":"")
}az.tS(a4,bb,a9?true:null)}}}else{var a3=G(a4);C.deleteValue(a4+O);
C.deleteValue(a4+aG);C.deleteValue(a4);if(a6){if(a3.script&&a3.cond){al.scriptRemovedCb(a4,a3.script)
}if(!aF.values||aF.values.statistics_enabled){az.tS(a4,null,false)
}}}Q.items.rundata.removeAll()};var o=function(a4,bb,a3,a7){if(a7===undefined){a7=true
}if(bb===undefined){bb=null}var a6=aa;aa=[];for(var a8 in a6){var ba=a6[a8];
try{if(a4&&ba.name==a4){if(V||SV){console.log("storage notify "+a4)
}if(a7){if(bb){var bc={data:{},ts:0};var bd=aJ(ba.name);
bc.data[bb]=bd.data[bb];bc.ts=bd.ts;var a5={storage:bc};
if(bd.data[bb]===undefined){a5.removed=bb}ba.response(a5)
}else{ba.response({storage:aJ(ba.name)})}}aa.push(ba)
}else{if(a3!=undefined&&ba.tabid==a3){if(V||SV){console.log("storage refresh/remove listeners of tab "+a3)
}if(a7){ba.response({refresh:true})}}else{aa.push(ba)
}}}catch(a9){console.log("Storage listener notification for script "+a4+" failed! Page reload?!")
}}};var aC=function(a5,a9,a7){if(a7===undefined){a7=true
}var a3=aa;aa=[];for(var a4 in a3){var a8=a3[a4];try{if(a8.name==a5&&a8.id==a9){if(V||SV){console.log("send empty response "+a5+" "+a9)
}if(a7){a8.response({})}}else{aa.push(a8)}}catch(a6){if(D){console.debug("Storage listener clear for script "+a5+" failed! Page reload?!")
}}}};var aU=function(a4){if(!aj.late){aj.registerLateCallback(function(){aU(a4)
});return}var a3=function(a8){var bc=null;var ba=a4.sender;
if(V||EV||MV){console.log("back: connect.method "+a8.method+" contextId "+a8.id+" tabId: "+(ba.tab?ba.tab.id:"unknown!!!"))
}var a7=function(bg){try{a4.postMessage(bg)}catch(bf){console.error("bg: Error sending port ("+a4.name+") message: "+JSON.stringify(bg))
}};if(a8.method=="xhr"){var a9=function(){a4.disconnect()
};var a5=function(bf){a7({error:true,data:bf})};var bb=function(bf){a7({success:true,data:bf})
};var a6=function(bf){a7({change:true,data:bf})};var bd=function(bf){a7({progress:true,data:bf})
};u(a8.details,{callback:bb,onreadychange:a6,onprogress:bd,onerr:a5,done:a9})
}else{if(a8.method=="addStorageListener"){if(typeof ba.tab!="undefined"){if(V||SV){console.log("storage add listener "+a8.name+" "+a8.id)
}aa.push({tabid:ba.tab.id,id:a8.id,name:a8.name,time:(new Date()).getTime(),response:a7});
bc=function(){aC(a8.name,a8.id,false)}}else{console.log(aS.getMessage("Unable_to_load_storage_due_to_empty_tabID_"));
a7({error:true})}}else{if(a8.method=="removeStorageListener"){if(typeof ba.tab!="undefined"){if(V){console.log("storage remove listener "+a8.name+" "+a8.id)
}aC(a8.name,a8.id);a7({error:false})}else{console.warn("Unable to remove storage listener due to empty tabID!");
a7({error:true})}}else{if(a8.method=="saveStorageKey"){if(typeof ba.tab!="undefined"){if(a8.name){var be=aJ(a8.name);
if(V||SV){console.log("storage ("+a8.name+"): set key "+a8.key+" to '"+a8.value+"'")
}be.data[a8.key]=a8.value;be.ts=a8.ts;au(a8.name,be);
o(a8.name,a8.key)}}else{console.log(aS.getMessage("Unable_to_save_storage_due_to_empty_tabID_"))
}a7({})}}}}if(bc){a4.onDisconnect.addListener(bc)}if(V){console.log("back: connect.method "+a8.method+" end!")
}};a4.onMessage.addListener(a3)};var aP={ping:{allow:{insecure:true},exec:function(a5,a4,a3){a3({pong:true,instanceID:K})
}},openInTab:{allow:{script:true,extpage:true},exec:function(a7,a5,a3){var a4=function(ba){a0[ba.id]=true;
a3({tabId:ba.id})};var a6=["active"];var a8={url:a7.url};
if(a7.options){for(var a9=0;a9<a6.length;a9++){if(a7.options[a6[a9]]!==undefined){a8[a6[a9]]=a7.options[a6[a9]]
}}if(a7.options.insert){a8.index=a5.tab.index+1}}chrome.tabs.create(a8,a4)
}},closeTab:{allow:{script:true,extpage:true},exec:function(a5,a4,a3){if(a5.tabId&&a0[a5.tabId]){chrome.tabs.remove(a5.tabId)
}a3({})}},getTab:{allow:{script:true},exec:function(a6,a4,a3){if(typeof a4.tab!="undefined"){if(typeof ax[a4.tab.id]=="undefined"){ax[a4.tab.id]={storage:{}}
}var a5=ax[a4.tab.id];a3({data:a5})}else{console.log(aS.getMessage("Unable_to_deliver_tab_due_to_empty_tabID_"));
a3({data:null})}}},getTabs:{allow:{script:true},exec:function(a5,a4,a3){a3({data:ax})
}},saveTab:{allow:{script:true},exec:function(a7,a5,a3){if(typeof a5.tab!="undefined"){var a6={};
for(var a4 in a7.tab){a6[a4]=a7.tab[a4]}ax[a5.tab.id]=a6
}else{console.log(aS.getMessage("Unable_to_save_tab_due_to_empty_tabID_"))
}a3({})}},copyToClipboard:{allow:{script:true,extpage:true},exec:function(a5,a4,a3){if(typeof a4.tab!="undefined"){aR.copy(a5.data)
}else{console.log("bg: unable to process request!")
}a3({})}},setOption:{allow:{extpage:true},exec:function(a7,a5,a3){var a6=(a5.extpage=="options");
aF.values[a7.name]=a7.value;aF.save();var a4=function(a8){if(a6){a3({items:a8})
}else{aQ();a3({})}};f(a4)}},buttonPress:{allow:{extpage:true},exec:function(a8,a6,a4){var a7=(a6.extpage=="options");
var a5=function(){a4({})};if(a8.name=="reset_simple"){ao.reset(a5)
}else{if(a8.name=="reset_factory"){ao.factoryReset(a5)
}else{if(a8.name=="create_tesla_data"){var a3=function(a9){aR.copy({content:L.UTF8.encode(a9.join("<br>")),type:"html"});
a5()};al.createTeslaData(a3)}else{if(a8.name=="reset_chrome_sync"){al.reset(a5)
}else{console.log("bg: Warning: unnknown button "+name);
a4({})}}}}}},modifyScriptOptions:{allow:{extpage:true},exec:function(ba,bb,a5){var bd=(bb.extpage=="options");
var a3=(ba.reload==undefined||ba.reload==true);var a7=function(){if(ba.reorder){am()
}if(V){console.log("modifyScriptOptions "+bd)}if(a3){if(bd){var be=function(bg){a5({items:bg,i18n:aF.values.i18n})
};f(be)}else{if(ba.name){window.setTimeout(aQ,100)}var bf=function(bh){var bg=e(bh);
a5({items:bg,i18n:aF.values.i18n});if(ba.name&&aF.values.autoReload){chrome.tabs.sendMessage(bh.id,{method:"reload",frameId:0},function(bi){})
}};chrome.tabs.getSelected(null,bf)}}else{a5({})}};
if(ba.name&&ba.method=="modifyScriptOptions"){var a4=G(ba.name);
if(a4.script&&a4.cond){var a6=false;var bc=new E.Script();
for(var a8 in bc.options){if(!bc.options.hasOwnProperty(a8)){continue
}if(typeof ba[a8]!=="undefined"){a4.script.options[a8]=ba[a8]
}}for(var a8 in bc.options.override){if(!bc.options.override.hasOwnProperty(a8)||a8.search("merge_")==-1){continue
}if(typeof ba[a8]!=="undefined"){a4.script.options.override[a8]=ba[a8];
a6=true}}if(typeof ba.enabled!=="undefined"){a4.script.enabled=ba.enabled
}if(typeof ba.includes!=="undefined"){a4.script.options.override.use_includes=ba.includes;
a4.script.options.override.use_excludes=ba.excludes;
a4.script.options.override.use_matches=ba.matches;a6=true
}if(a6){a4.script=b(a4.script)}s(a4.script.name,a4.script);
if(typeof ba.position!=="undefined"&&a3){am(ba.name,ba.position)
}}}else{if(ba.nid&&ba.method=="modifyNativeScript"){var a9=function(be){if(be){if(ba.actionid=="installed"){if(ba.value=="false"){d.uninstall(be,a7);
return true}}else{if(ba.actionid=="enabled"){d.setEnabled(be,ba.value,a7);
return true}}a7()}else{a5({})}};d.getUserscriptById(ba.nid,a9);
return true}}a7()}},modifyNativeScript:{allow:{extpage:true},exec:function(a5,a4,a3){return aP.modifyScriptOptions.exec(a5,a4,a3)
}},saveScript:{allow:{extpage:true},exec:function(a9,a6,a4){var a8=(a9.reload==undefined||a9.reload==true);
var a3=function(bd,bc){if(a8){var bb=function(be){a4({items:be,installed:bd,renamed:bc})
};f(bb)}else{a4({})}};if(a9.clean){var ba=function(bc){var bb=function(bd){a4({cleaned:bc.installed,items:bd});
if(bc.installed){o(a9.name,null)}};f(bb)};if(D){console.debug("bg: clean userscript "+a9.name)
}var a7=G(a9.name);if(!a7.script||!a7.cond){console.error(aS.getMessage("fatal_error")+" ("+a9.name+")!!!");
ba({installed:false})}else{if(!Z({name:a9.name,tabid:a6.tab.id,force_url:null,url:a9.file_url,src:a7.script.textContent,clean:true,ask:true,save:true,cb:ba})){if(ba){ba({installed:false})
}}}}else{if(a9.code){var ba=function(bb){a4({installed:bb.installed,renamed:bb.renamed})
};if(a9.reload===undefined||a9.reload===true){ba=function(bb){am();
a3(bb.installed,bb.renamed)}}a9.force&=(a6.extpage=="options");
var a5={name:a9.name,tabid:a6.tab.id,force_url:a9.force_url,url:a9.file_url,src:a9.code,ask:!aF.values.editor_easySave&&!a9.force,save:(!a6.extpage||a6.extpage!="ask"),cb:ba};
if(!Z(a5)){if(ba){ba({installed:false})}}}else{v(a9.name);
am();a3()}}}},scriptClick:{allow:{insecure:true},exec:function(a6,a5,a4){if(typeof a5.tab!="undefined"){var a3=function(a8,a7){a4({data:null,found:a8,installed:a7});
if(a8){if(a7){aQ()}}else{chrome.tabs.sendMessage(a5.tab.id,{method:"showMsg",msg:aS.getMessage("Unable_to_get_UserScript__Sry_"),id:a6.id},function(a9){})
}};c(a6.url,{tabid:a5.tab.id},a3)}else{console.log(aS.getMessage("Unable_to_install_script_due_to_empty_tabID_"))
}}},registerMenuCmd:{allow:{script:true},exec:function(a5,a4,a3){if(typeof a4.tab!="undefined"){if(V||MV){console.log("MC add "+a5.id)
}r.add({tabId:a4.tab.id,url:a4.tab.url,name:a5.name,id:a5.menuId,response:a3})
}else{console.log("Unable to register menu cmd due to empty tabID!");
a3({run:false})}}},unRegisterMenuCmd:{allow:{script:true},exec:function(a5,a4,a3){if(V||MV){console.log("MC unreg "+a5.id)
}r.clearById(a5.id);a3({})}},execMenuCmd:{allow:{extpage:true},exec:function(a5,a4,a3){var a6=r.getById(a5.id);
if(a6){if(V||MV){console.log("MC exec "+a6.id)}a6.response({run:true,menuId:a6.id})
}else{console.error("bg: Error: unable to find MC id "+a6.id)
}a3({})}},runScriptUpdates:{allow:{extpage:true},exec:function(a6,a5,a3){if(a6.scriptid){var a4=function(a7){a3({scriptid:a6.scriptid,updatable:a7})
};ag.check(true,false,a6.scriptid,a4)}else{ag.check(true,true);
a3({})}}},getWebRequestInfo:{allow:{script:true},exec:function(a6,a4,a3){if(typeof a4.tab!="undefined"){var a5={webRequest:aZ};
a3(a5)}else{console.log("Unable to run scripts due to empty tab id");
a3({})}}},unLoad:{allow:{script:true},exec:function(a5,a4,a3){if(!a5.topframe){if(V||UV){console.log("unload check "+a5.id+" url: "+a5.url)
}if(a5.id){ay.events.unload(a4.tab.id,a4.tab.frameId,a5.id)
}}}},prepare:{allow:{script:true},exec:function(a9,ba,a5){if(typeof ba.tab!="undefined"&&ba.tab.index>=0){var bb=a9.topframe?0:null;
var a4=a9.url+a9.params;var bc=aF.values.forbiddenPages.length==0||aE(a4,{exc:aF.values.forbiddenPages});
var a7=ay.events.prepare(ba.tab.id,bb,a9.id,a4);if(bc){var a8=function(){q.setIcon(ba.tab.id);
q.setBadge(ba.tab.id)};if(a7){var a3={enabledScriptsCount:a7,raw:{},webRequest:aZ,logLevel:aF.values.logLevel,unsafeWindow:aF.values.runtime_unsafeWindow};
if(a9.raw){for(var a6=0;a6<a9.raw.length;a6++){a3.raw[a9.raw[a6]]=Registry.getRaw(a9.raw[a6])
}}a5(a3)}else{a5({logLevel:aF.values.logLevel})}ay.events.run(ba.tab.id,bb,a9.id,a4,a8);
ai.tab.resetFireCnt(ba.tab.id)}else{console.log("Forbidden page: '"+a4+"' -> Do nothing!");
if(a9.id){ay.set.forbidden(ba.tab.id,bb,a9.id)}a5({})
}}else{a5({})}return false}},scriptBlockerDetected:{allow:{script:true},exec:function(a6,a5,a3){if(a6.xml_style_detected||a6.url.search(".xml$")!=-1){console.warn("blocker: unable to get unsafeWindow...")
}else{var a4=function(a8,a9){var a7=(a8&&a9)?aS.getMessage("Please_reload_this_page_in_order_to_run_your_userscripts_"):null;
a3({alert:a7})};ak.requestPermissionEx(a4)}ay.set.blocker(a5.tab.id);
q.setIcon(a5.tab.id)}},startFireUpdate:{allow:{extpage:true},exec:function(a6,a5,a3){var a4=function(a7){a3({suc:a7})
};ai.checkUpdate(true,a6.force,a4)}},getFireItems:{allow:{extpage:true},exec:function(a7,a6,a4){var a5=function(bc,ba,bb){if(ba==undefined){ba=null
}var a9=function(be){try{var bd={image:be,cnt:bc,scripts:ba,progress:bb};
a4(bd);ba=[]}catch(bf){console.warn("bg: warn: action menu closed? "+JSON.stringify(bf))
}};if(a7.countonly){a9(null)}else{ab.createIconEx(bc,a9)
}};if(!ai.isReady()){a5(0,[],{action:ai.status.action,state:ai.status.progress});
return true}var a8=function(a9){var ba=aK(a7,a9);a5(a9.length,ba)
};if(a7.tabid){if(a7.countonly){ai.tab.getCount(a7.tabid,a5)
}else{ai.tab.getItems(a7.tabid,a8)}}else{if(a7.url){if(a7.url=="*"){var a3=function(bb){var ba=[];
for(var a9=0;a9<1000;a9++){ba.push(Math.floor(Math.random()*bb+1).toString())
}ai.ids.getItems(ba,a8)};ai.getMax("scripts","sid",a3)
}else{if(a7.countonly){ai.url.getCount(a7.url,a5)}else{ai.url.getItems(a7.url,a8)
}}}else{a5([],[])}}}},notification:{allow:{script:true,extpage:true},exec:function(a6,a5,a4){var a7=(a6.image&&a6.image!="")?a6.image:chrome.extension.getURL("images/icon128.png");
var a3=function(a8){a4({clicked:a8.clicked})};aN.show(a6.title,a6.msg,a7,a6.delay,a3)
}},localFileCB:{allow:{script:true},exec:function(a5,a4,a3){if(!a.useIframeMessage){a.listener(null,a5.data)
}a3({})}},handler:function(a8,ba,a4){if(!aj.late){aj.registerLateCallback(function(){aP.handler(a8,ba,a4)
});return true}if(V||EV||MV){console.log("back: request ",a8," sender: ",ba)
}var bg=aP[a8.method];if(bg){if(bg.allow&&bg.exec){var a9=aB.SELF.ID;
var bc=(!aB.REQUESTS.HAS_SENDER_ID&&ba.tab)||ba.id===a9;
var be=null;var a6=aB.REQUESTS.INTERNAL_PAGE_URL;var a7=aB.REQUESTS.GET_INTERNAL_PAGE_REGEXP();
var a5=bc&&(!ba.tab||(ba.tab.url.search(a6)==0));if(bc&&a5){if(ba.tab){var bb=ba.tab.url.match(a7);
if(bb&&bb.length==2){be=bb[1]}}else{be="*"}ba.extpage=be
}if(V||EV||MV){console.log("back: request page:",be,"extpage:",a5)
}var bh=(be=="options");var a3=(be=="background");var bf=bc&&!a5;
if(a3||(bg.allow.insecure)||(bg.allow.extpage&&a5)||(bg.allow.options&&bh)||(bg.allow.script&&bf)){var bd=bg.exec(a8,ba,a4);
if(bd!==undefined){return bd}}else{if(D){console.warn("back: this context doesn't have the permission to call '"+a8.method+"' ")
}return false}}else{console.log("b: invalid implementation of "+a8.method);
return false}}else{console.log("back: unknown method "+a8.method);
return false}if(V){console.log("back: request.method "+a8.method+" end!")
}return true}};var r={commands:[],add:function(a3){r.commands.push(a3)
},list:function(){var a4=[];for(var a3 in r.commands){if(!r.commands.hasOwnProperty(a3)){continue
}var a5=r.commands[a3];a4.push(a5)}return a4},listByTabId:function(a6){var a5=[];
for(var a3 in r.commands){if(!r.commands.hasOwnProperty(a3)){continue
}var a8=r.commands[a3];if(a8.tabId==a6){var a4=false;
for(var a7=0;a7<a5.length;a7++){if(a5[a7].name==a8.name){a4=true;
break}}if(!a4){a5.push(a8)}}}return a5},clearByTabId:function(a3){r.getByTabId(a3)
},getByTabId:function(a6){var a5=[];var a3=r.commands;
r.commands=[];for(var a4 in a3){if(!a3.hasOwnProperty(a4)){continue
}var a7=a3[a4];if(a7.tabId!=a6){r.commands.push(a7)
}else{a5.push(a7);if(V||MV){console.log("MC remove "+a7.id)
}}}return a5},clearById:function(a3){r.getById(a3)},getById:function(a7){var a5=null;
var a3=r.commands;r.commands=[];for(var a4 in a3){if(!a3.hasOwnProperty(a4)){continue
}var a6=a3[a4];if(a6.id!=a7){r.commands.push(a6)}else{a5=a6
}}if(V||MV){console.log("MC remove "+a5.id)}return a5
}};var aK=function(a5,a9){var a7=[];var bc="http://...";
if(a5.tabid&&!ay.get.empty(a5.tabid)){var a6=function(be,bd){bc=bd;
return true};ad.forEach(ay.get.urls(a5.tabid),a6)}else{if(a5.url){bc=a5.url
}}a7.push({name:aS.getMessage("Enable_Sort_Cache"),id:"fire_sort_cache_enabled",checkbox:true,option:true,enabled:aF.values.fire_sort_cache_enabled,desc:""});
var ba=a9.length?" ("+a9.length+")":"";a7.push({name:aS.getMessage("Available_Userscripts")+ba,heading:true,scriptTab:true});
a7=a7.concat(Y(a9,false,true));a7.push({name:aS.getMessage("Settings"),heading:true});
a7.push({name:aS.getMessage("General"),section:true});
var bb="",a8="";var a4=a1();if(a4.fire.db_version==0){a8="?"
}else{var a3=a4.fire.db_version*1000;a8=new Date(a3).toString()
}bb+=aS.getMessage("Current_Index_")+"<br><br>";bb+=aS.getMessage("Date_")+" "+a8+"<br>";
bb+=aS.getMessage("Entries_")+" "+((a4.fire.entries)?a4.fire.entries:"?")+"<br><br><br>";
a7.push({name:"TamperFire DB",fire:true,fireInfo:true,value:bb,versionDB:a3});
a7.push({name:aS.getMessage("Check_for_Updates"),fname:aS.getMessage("Force_Update"),fire:true,fireUpdate:true});
a7.push({name:"Search by URL",id:"searchByURL",search:true,value:bc,desc:""});
return a7};var e=function(a7){var a4=a7?a7.url:null;
if(V){console.log("createActionMenuItems "+a4)}var a3=[];
var a6=[];if(aF.values.fire_enabled){a6.push({name:"fire",section:true,pos:"top"});
var a5=null;if(aF.values.fire_topOnly){a5=chrome.extension.getURL("fire.html?url="+encodeURIComponent(a4))
}else{a5=chrome.extension.getURL("fire.html?tab="+a7.id)
}a6.push({name:aS.getMessage("_0_scripts_found"),image:chrome.extension.getURL("images/download.gif"),doneImage:chrome.extension.getURL("images/fire.png"),tabid:a7.id,tamperfire:true,url:a5,newtab:true})
}a6.push({name:"scripts",section:true,pos:"right"});
var a8=w(a7);a6=a6.concat(a8);if(!a8.length){if(aF.values.forbiddenPages.length==0||aE(a4,{exc:aF.values.forbiddenPages})){a6.push({name:aS.getMessage("No_script_is_running"),image:chrome.extension.getURL("images/info.png")})
}else{a6.push({name:aS.getMessage("This_page_is_blacklisted_at_the_security_settings"),image:chrome.extension.getURL("images/critical.png")})
}}if(aF.values.configMode<100||!a8.length){a6.push({name:aS.getMessage("Get_new_scripts___"),image:chrome.extension.getURL("images/script_download.png"),url:"http://userscripts.org",newtab:true});
a6.push({name:aS.getMessage("Add_new_script___"),image:chrome.extension.getURL("images/script_add.png"),url:chrome.extension.getURL("options.html")+"?open=0",newtab:true})
}a3=a3.concat(a6);a3.push({name:"commands",section:true,pos:"left"});
var a9=x(a7.id);if(a9.length){a9.push({name:"commands2",section:true,pos:"left"})
}a9.push({name:aS.getMessage("Check_for_userscripts_updates"),image:chrome.extension.getURL("images/update.png"),runUpdate:true});
a9.push({name:aS.getMessage("Report_a_bug"),image:chrome.extension.getURL("images/bug.png"),url:"http://tampermonkey.net/bug",newtab:true});
a9.push({name:aS.getMessage("Please_consider_a_donation"),image:chrome.extension.getURL("images/amor.png"),url:"http://tampermonkey.net/donate.html",newtab:true});
a9.push({name:"about",section:true,pos:"bottom"});a9.push({name:aS.getMessage("Dashboard"),image:chrome.extension.getURL("images/agt_utilities.png"),url:chrome.extension.getURL("options.html"),newtab:true});
a9.push(aA());a3=a3.concat(a9);return a3};var f=function(a4){var a6=[];
var a8=[];var a3;a6.push({name:aS.getMessage("Installed_userscripts"),heading:true,scriptTab:true});
var a7=w(null,true);a3=a7.length;a7.push({name:aS.getMessage("No_script_is_installed"),image:chrome.extension.getURL("images/info.png"),visible:!a3});
a7.push({name:aS.getMessage("Get_some_scripts___"),image:chrome.extension.getURL("images/edit_add.png"),url:"http://userscripts.org",newtab:true,visible:!a3});
var a5=function(bg){for(var bi=0;bi<bg.length;bi++){var be=bg[bi];
var bh={name:be.name,id:be.id,icon:be.icon,code:null,position:0,positionof:a3,enabled:be.enabled,version:be.version,description:be.description,nativeScript:true};
a6.push(bh)}a6.push({name:"Version",id:null,version:true,value:chrome.extension.getVersion()});
a6.push({name:aS.getMessage("New_userscript"),id:null,image:chrome.extension.getURL("images/script_add.png"),icon:chrome.extension.getURL("images/txt.png"),code:aF.values.scriptTemplate,nnew:true,position:-1,positionof:a3,enabled:true,userscript:true});
a6=a6.concat(a7);a6.push({name:aS.getMessage("Settings"),heading:true});
var bl=[];var bm=[];var bc=[];var bb=[];var bd=[];var bk=[];
var bj=[];var ba=[];var a9=[];var bf=[];bl.push({name:aS.getMessage("General"),section:true});
bl.push({name:aS.getMessage("Config_Mode"),id:"configMode",level:0,option:true,select:[{name:aS.getMessage("Novice"),value:0},{name:aS.getMessage("Beginner"),value:50},{name:aS.getMessage("Advanced"),value:100}],value:aF.values.configMode,desc:aS.getMessage("Changes_the_number_of_visible_config_options")});
bl.push({name:aS.getMessage("Language"),id:"i18n",level:0,option:true,reload:true,warning:{msg:aS.getMessage("A_reload_is_required")},select:[{name:"Browser Default",value:null},{name:aS.getOriginalMessage("English"),value:"en"},{name:aS.getOriginalMessage("German"),value:"de"},{name:aS.getOriginalMessage("French"),value:"fr"},{name:aS.getOriginalMessage("Spanish"),value:"es"},{name:aS.getOriginalMessage("Polish"),value:"pl"},{name:aS.getOriginalMessage("Chinese__Simplified_"),value:"zh_CN"},{name:aS.getOriginalMessage("Chinese__Traditional_"),value:"zh_TW"},{name:aS.getOriginalMessage("Japanese"),value:"ja"}],value:aF.values.i18n});
bl.push({name:aS.getMessage("Make_includes_more_safe"),id:"safeUrls",level:60,option:true,checkbox:true,enabled:aF.values.safeUrls,desc:aS.getMessage("Includes_more_safe_example")});
bl.push({name:aS.getMessage("Fix_includes"),id:"tryToFixUrl",level:60,option:true,checkbox:true,enabled:aF.values.tryToFixUrl,desc:aS.getMessage("Fix_includes_example")});
bl.push({name:aS.getMessage("Auto_reload_on_script_enabled"),level:20,id:"autoReload",option:true,checkbox:true,enabled:aF.values.autoReload,desc:aS.getMessage("Auto_reload_on_script_enabled_desc")});
bl.push({name:aS.getMessage("Anonymous_statistics"),level:0,id:"statistics_enabled",option:true,checkbox:true,enabled:aF.values.statistics_enabled,desc:aS.getMessage("Allow_Tampermonkey_to_collect_anonymous_statistics_via_Google_Analytics")});
bl.push({name:aS.getMessage("Debug_scripts"),level:100,id:"debug",option:true,checkbox:true,enabled:aF.values.debug,desc:""});
bl.push({name:aS.getMessage("Show_fixed_source"),level:100,id:"showFixedSrc",option:true,checkbox:true,enabled:aF.values.showFixedSrc,desc:""});
bl.push({name:aS.getMessage("LogLevel"),id:"logLevel",level:0,option:true,select:[{name:aS.getMessage("Trace"),value:100},{name:aS.getMessage("Verbose"),value:80},{name:aS.getMessage("Debug"),value:60},{name:aS.getMessage("Error"),value:0}],value:aF.values.logLevel,desc:""});
if(aB.OPTIONS.HAS_TESLA){a9.push({name:aS.getMessage("TESLA")+" BETA",section:true,level:50,needsave:true});
a9.push({name:aS.getMessage("Enable_TESLA"),id:"sync_enabled",level:50,option:true,checkbox:true,enabled:aF.values.sync_enabled,desc:aS.getMessage("Tampermonkey_External_Script_List_Access")});
a9.push({name:aS.getMessage("Sync_Type"),id:"sync_type",enabler:true,level:50,option:true,select:[{name:"pastebin.com",value:SyncInfo.types.ePASTEBIN},{name:"Chrome Sync (Beta)",value:SyncInfo.types.eCHROMESYNC,enable:{sync_id:0,create_tesla_data:0}}],value:aF.values.sync_type});
a9.push({name:aS.getMessage("Sync_Id"),id:"sync_id",enabledBy:"sync_type",level:50,text:true,value:aF.values.sync_id,option:true});
a9.push({name:aS.getMessage("Create_Exportable_Data"),id:"create_tesla_data",enabledBy:"sync_type",button:true,ignore:true,level:60,warning:{msg:aS.getMessage("Copy_exportable_data_to_clipboard_Ok_")}})
}bb.push({name:aS.getMessage("Appearance"),section:true,level:20});
bb.push({name:aS.getMessage("Update_Notification"),id:"notification_showUpdate",level:50,option:true,select:[{name:aS.getMessage("Off"),value:"off"},{name:aS.getMessage("Show_notification"),value:"notification"},{name:aS.getMessage("Open_changelog"),value:"changelog"}],value:aF.values.notification_showUpdate,desc:""});
bb.push({name:aS.getMessage("Icon_badge_info"),id:"appearance_badges",level:50,option:true,select:[{name:aS.getMessage("Off"),value:"off"},{name:aS.getMessage("Running_scripts"),value:"running"},{name:aS.getMessage("Unique_running_scripts"),value:"running_unique"},{name:aS.getMessage("Disabled_scripts"),value:"disabled"},{name:"TamperFire",value:"tamperfire"}],value:aF.values.appearance_badges,desc:""});
if(aB.OPTIONS.HAS_TAMPERFIRE){bj.push({name:aS.getMessage("TamperFire"),section:true});
bj.push({name:aS.getMessage("Enable_TamperFire"),id:"fire_enabled",level:0,option:true,checkbox:true,enabled:aF.values.fire_enabled,desc:""});
bj.push({name:aS.getMessage("Use_top_frame_URL_only"),id:"fire_topOnly",level:0,option:true,checkbox:true,enabled:aF.values.fire_topOnly,desc:""});
bj.push({name:aS.getMessage("Enable_Sort_Cache"),id:"fire_sort_cache_enabled",level:100,checkbox:true,option:true,enabled:aF.values.fire_sort_cache_enabled,desc:""});
bj.push({name:aS.getMessage("Update_interval"),id:"fire_updatePeriod",level:50,option:true,select:[{name:aS.getMessage("Never"),value:0},{name:aS.getMessage("Every_Day"),value:24*60*60*1000},{name:aS.getMessage("Every_Week"),value:7*24*60*60*1000},{name:aS.getMessage("Every_2_Weeks"),value:14*24*60*60*1000},{name:aS.getMessage("Every_Month"),value:30*24*60*60*1000}],value:aF.values.fire_updatePeriod,desc:""})
}bm.push({name:aS.getMessage("Editor"),section:true,level:20});
bm.push({name:aS.getMessage("Enable_Editor"),id:"editor_enabled",level:100,option:true,checkbox:true,enabled:aF.values.editor_enabled,reload:true,warning:{msg:aS.getMessage("A_reload_is_required")},desc:""});
bm.push({name:aS.getMessage("Key_Mapping"),id:"editor_keyMap",level:50,option:true,reload:true,warning:{msg:aS.getMessage("A_reload_is_required")},select:[{name:aS.getMessage("Windows"),value:"windows"},{name:aS.getMessage("Emacs"),value:"emacs"},{name:aS.getMessage("Vim"),value:"vim"}],value:aF.values.editor_keyMap});
bm.push({name:aS.getMessage("Indentation_Width"),id:"editor_indentUnit",level:50,option:true,select:[{name:aS.getMessage("1"),value:1},{name:aS.getMessage("2"),value:2},{name:aS.getMessage("3"),value:3},{name:aS.getMessage("4"),value:4},{name:aS.getMessage("5"),value:5},{name:aS.getMessage("6"),value:6},{name:aS.getMessage("7"),value:7},{name:aS.getMessage("8"),value:8},{name:aS.getMessage("9"),value:9},{name:aS.getMessage("10"),value:10},{name:aS.getMessage("11"),value:11}],value:aF.values.editor_indentUnit,desc:""});
bm.push({name:aS.getMessage("Indent_with"),id:"editor_indentWithTabs",level:50,option:true,select:[{name:aS.getMessage("Tabs"),value:"tabs"},{name:aS.getMessage("Spaces"),value:"spaces"}],value:aF.values.editor_indentWithTabs,desc:""});
bm.push({name:aS.getMessage("TabMode"),id:"editor_tabMode",level:50,option:true,select:[{name:aS.getMessage("Classic"),value:"classic"},{name:aS.getMessage("Smart"),value:"smart"}],value:aF.values.editor_tabMode,desc:""});
bm.push({name:aS.getMessage("Reindent_on_typing"),id:"editor_electricChars",level:50,option:true,checkbox:true,enabled:aF.values.editor_electricChars,desc:""});
bm.push({name:aS.getMessage("Enable_autoSave"),id:"editor_autoSave",level:20,option:true,checkbox:true,enabled:aF.values.editor_autoSave,desc:""});
bm.push({name:aS.getMessage("Enable_easySave"),id:"editor_easySave",level:20,option:true,checkbox:true,enabled:aF.values.editor_easySave,desc:""});
bc.push({name:aS.getMessage("Script_Update"),section:true,level:0});
bc.push({name:aS.getMessage("Check_disabled_scripts"),id:"scriptUpdateCheckDisabled",level:0,option:true,checkbox:true,enabled:aF.values.scriptUpdateCheckDisabled,desc:""});
bc.push({name:aS.getMessage("Check_interval"),id:"scriptUpdateCheckPeriod",level:0,option:true,select:[{name:aS.getMessage("Never"),value:0},{name:aS.getMessage("Every_Hour"),value:1*60*60*1000},{name:aS.getMessage("Every_6_Hours"),value:6*60*60*1000},{name:aS.getMessage("Every_12_Hour"),value:12*60*60*1000},{name:aS.getMessage("Every_Day"),value:24*60*60*1000},{name:aS.getMessage("Every_Week"),value:7*24*60*60*1000}],value:aF.values.scriptUpdateCheckPeriod,desc:""});
bc.push({name:aS.getMessage("Dont_ask_me_for_simple_script_updates"),id:"notification_silentScriptUpdate",level:80,option:true,checkbox:true,enabled:aF.values.notification_silentScriptUpdate,desc:""});
bc.push({name:aS.getMessage("Hide_notification_after"),id:"scriptUpdateHideNotificationAfter",level:50,option:true,select:[{name:aS.getMessage("Never"),value:0},{name:aS.getMessage("15_Seconds"),value:15*1000},{name:aS.getMessage("30_Seconds"),value:30*1000},{name:aS.getMessage("1_Minute"),value:60*1000},{name:aS.getMessage("5_Minutes"),value:5*60*1000},{name:aS.getMessage("1_Hour"),value:60*60*1000}],value:aF.values.scriptUpdateHideNotificationAfter,desc:""});
if(aB.RUNTIME.NEED_UNSAFEWINDOW_PROXY){bk.push({name:aS.getMessage("Runtime"),section:true,level:50});
bk.push({name:aS.getMessage("UnsafeWindow_retrieval_method"),id:"runtime_unsafeWindow",level:50,option:true,select:[{name:aS.getMessage("Auto"),value:"auto"},{name:aS.getMessage("Native"),value:"native"},{name:aS.getMessage("Proxy"),value:"proxy"},{name:aS.getMessage("Unsafe"),value:"unsafe"},{name:aS.getMessage("Sandbox"),value:"sandbox"}],value:aF.values.runtime_unsafeWindow,desc:aS.getMessage("A_lot_of_userscripts_require_the_unsafeWindow_object_to_interact_with_the_pages_javascript_"),warning:{msg:aS.getMessage("This_option_is_essential_for_many_userscripts_to_work_Do_you_want_to_visit_the_FAQ_"),once:true,ok:{url:"http://tampermonkey.net/faq.php#Q404"}}})
}bd.push({name:aS.getMessage("Security"),section:true,level:50});
if(aB.OPTIONS.HAS_CSP){bd.push({name:aS.getMessage("Allow_overwrite_javascript_settings"),id:"scriptblocker_overwrite",level:50,option:true,select:[{name:aS.getMessage("Yes"),value:"yes"},{name:aS.getMessage("No"),value:"no"}],value:aF.values.scriptblocker_overwrite,desc:aS.getMessage("Tampermonkey_can_not_work_when_javascript_is_disabled")});
bd.push({name:aS.getMessage("Add_TM_to_CSP"),id:"webrequest_fixCSP",level:50,option:true,select:[{name:aS.getMessage("Yes"),value:"yes"},{name:aS.getMessage("No"),value:"no"}],value:aF.values.webrequest_fixCSP,desc:aS.getMessage("Tampermonkey_might_not_be_able_to_provide_access_to_the_unsafe_context_when_this_is_disabled")});
bd.push({name:aS.getMessage("Allow_headers_to_be_modified_by_scripts"),id:"webrequest_modHeaders",level:50,option:true,select:[{name:aS.getMessage("Yes"),value:"yes"},{name:aS.getMessage("Auto"),value:"auto"},{name:aS.getMessage("No"),value:"no"}],value:aF.values.webrequest_modHeaders,desc:""})
}bd.push({name:aS.getMessage("Forbidden_Pages"),id:"forbiddenPages",level:50,option:true,input:true,array:true,value:aF.values.forbiddenPages,desc:""});
bd.push({name:aS.getMessage("_require_blacklist"),id:"require_blacklist",level:80,option:true,input:true,array:true,value:aF.values.require_blacklist,desc:""});
ba.push({name:aS.getMessage("Userscripts"),section:true,level:80});
ba.push({name:aS.getMessage("New_script_template_"),id:"scriptTemplate",level:80,option:true,input:true,value:aF.values.scriptTemplate});
bf.push({name:aS.getMessage("Reset_Section"),section:true,level:50});
bf.push({name:aS.getMessage("Restart_Tampermonkey"),id:"reset_simple",level:50,button:true,reload:true,value:0,warning:{msg:aS.getMessage("This_will_restart_Tampermonkey_Ok_")}});
bf.push({name:aS.getMessage("Factory_Reset"),id:"reset_factory",level:80,button:true,reload:true,value:0,warning:{msg:aS.getMessage("This_will_remove_all_scripts_and_reset_all_settings_Ok_")}});
if(h.hasPermission){bf.push({name:aS.getMessage("Chrome_Sync_Reset"),id:"reset_chrome_sync",level:80,button:true,reload:false,value:0,warning:{msg:aS.getMessage("This_will_remove_all_stored_data_from_google_sync_Ok_")}})
}a6=a6.concat(bl).concat(bb).concat(bc).concat(bk).concat(a9).concat(bj).concat(bm).concat(bd).concat(ba).concat(bf);
a6.push({name:"EOS",section:true,endsection:true});
if(false){a6.push({name:aS.getMessage("Registered_menu_cmds"),heading:true});
a8=x()}a6=a6.concat(a8);if(a4){a4(a6)}};d.getAllUserscripts(a5)
};var aA=function(){var a3="version="+chrome.extension.getVersion()+"&ext="+aB.SELF.ID.substr(0,4);
return{image:chrome.extension.getURL("images/info.png"),urls:[{name:" "+aS.getMessage("About"),url:"http://tampermonkey.net/about.html?"+a3,newtab:true},{name:" "+aS.getMessage("Changelog"),url:"http://tampermonkey.net/changelog.php?"+a3,newtab:true}]}
};var x=function(a6){var a5=[];var a3=(a6==null||a6==undefined)?r.list():r.listByTabId(a6);
for(var a4 in a3){if(!a3.hasOwnProperty(a4)){continue
}var a8=a3[a4];var a7={name:a8.name,id:a8.id,image:chrome.extension.getURL("images/package_utilities.png"),menucmd:true};
a5.push(a7)}return a5};var Y=function(a5,bb,a6){var a8=[];
for(var a4 in a5){var a9=a5[a4];var ba;if(bb||a6){ba=a9
}else{ba={name:a9.name,id:a9.id,system:a9.system,enabled:a9.enabled,position:a9.position}
}ba.file_url=a9.downloadURL||a9.fileURL;ba.positionof=a5.length;
ba.userscript=a9.options.user_agent?false:true;ba.user_agent=a9.options.user_agent;
if(!a9.icon64&&!a9.icon){ba.icon64=chrome.extension.getURL(ba.user_agent?"images/user_agent.png":"images/txt.png")
}if(a9.options){var a7=new E.Script();for(var a3 in a7.options){if(!a7.options.hasOwnProperty(a3)){continue
}ba[a3]=a9.options[a3]}}if(bb||a6){ba.code=a9.textContent;
ba.sync=a9.sync;if(bb&&aF.values.showFixedSrc){ba.code=aV.mkCompat(a9.textContent,a9)
}}a8.push(ba)}return a8};var w=function(a7,a5){if(a5==undefined){a5=false
}var a4=a7?a7.url:null;var a3=[];if(a7){if(!ay.get.empty(a7.id)){var a6=function(a9,bc){if(V||UV){console.log("Found at Tabs.get.urls["+a7.id+"] -> "+bc)
}var bd=a2(bc);for(var bb=0;bb<bd.length;bb++){var ba=false;
for(var a8=0;a8<a3.length;a8++){if(a3[a8].name==bd[bb].name){ba=true;
break}}if(!ba){a3.push(bd[bb])}}};ad.forEach(ay.get.urls(a7.id),a6)
}else{console.warn("bg: WARN: Tabs.get.urls["+a7.id+"] is empty!")
}}else{a3=a2(a4)}return Y(a3,a5)};var aR={copy:function(a4){var a3=document.createElement("iframe");
a3.setAttribute("sandbox","allow-same-origin");document.body.appendChild(a3);
try{if(a4.type=="html"){a3.contentDocument.documentElement.innerHTML=a4.content
}else{a3.contentDocument.documentElement.textContent=a4.content
}a3.contentDocument.designMode="on";a3.contentDocument.execCommand("selectAll",false,null);
a3.contentDocument.execCommand("copy",false,null);a3.contentDocument.designMode="off"
}catch(a5){console.error("bg: clipboard Error: "+a5.message)
}a3.parentNode.removeChild(a3);a3=null}};var y={permContentSettings:"contentSettings",permStorage:"storage",permissions:null,lock:false,clear:function(){if(y.lock){console.log("perm: clear, but locked")
}y.permissions=null},get:function(a3){var a4=function(a5){ad.forEach(a5.permissions,function(a7,a6){y.permissions[a7]=true
});y.lock=false;if(a3){a3()}};y.lock=true;y.permissions={};
chrome.permissions.getAll(a4)},has:function(a5,a3){if(y.lock){var a6=function(){y.has(a5,a3)
};window.setTimeout(a6,50);return}if(!y.permissions){var a4=function(){y.has(a5,a3)
};y.get(a4);return}if(a3){a3(!!y.permissions[a5])}},ask:function(a6,a9,a8,a3){var a7=chrome.extension.getURL("images/icon128.png");
var a5=function(ba){if(a3){a3(ba)}};var a4=function(ba){if(ba.granted){if(!y.permissions){y.permissions={}
}y.permissions[a6]=true;a5(ba.granted);return}a5(false)
};aN.getPermission(a9,a8,a7,60000,a6,a4)},remove:function(a5,a3){var a4=function(a6){if(y.permissions){y.permissions[a5]=false
}if(a3){a3(a6)}};chrome.permissions.remove({permissions:[a5]},a4)
}};var h={asked:false,hasPermission:null,init:function(){var a3=function(a4){h.hasPermission=a4;
if(D){console.log("bg: storagePermission: hasPermission = "+a4)
}};y.has(y.permStorage,a3)},askForPermission:function(a3){y.ask(y.permStorage,aS.getMessage("Storage_permission_is_needed_"),aS.getMessage("Click_here_to_allow_TM_to_use_Google_sync"),a3)
},requestPermissionEx:function(a3){var a4=function(a6){if(a3){a3(a6,true)
}if(a6&&!h.hasPermission){h.hasPermission=true;ao.reset()
}};var a5=function(a6){if(h.asked){if(a3){a3(a6,false)
}}else{if(a6){a3(a6,false)}else{h.askForPermission(a4)
}}h.asked=true};y.has(y.permStorage,a5)},remove:function(a3){y.remove(y.permStorage,a3)
}};var ak={asked:false,runCheck:false,hasPermission:false,init:function(){var a3=function(a4){ak.hasPermission=a4;
ak.runCheck=ak.hasPermission&&(aF.values.scriptblocker_overwrite=="yes");
if(D){console.log("bg: contentSettings: runCheck = "+ak.runCheck+" hasPerm = "+ak.hasPermission)
}};y.has(y.permContentSettings,a3)},askForPermission:function(a3){y.ask(y.permContentSettings,aS.getMessage("A_script_blocker_was_detected_"),aS.getMessage("Click_here_to_allow_TM_to_override_the_script_blocker"),a3)
},requestPermissionEx:function(a3){if(aF.values.scriptblocker_overwrite!="yes"){if(a3){a3()
}return}var a4=function(a6){if(a3){a3(a6,true)}if(a6&&!ak.runCheck){ak.runCheck=true;
ao.reset()}};var a5=function(a6){if(ak.asked){if(a3){a3(a6,false)
}}else{if(a6){a3(a6,false)}else{ak.askForPermission(a4)
}}ak.asked=true};y.has(y.permContentSettings,a5)},remove:function(a3){y.remove(y.permContentSettings,a3)
}};var ao={run:function(ba,a3){var a8=1;var a9=function(){if(a3){a3()
}window.location.reload()};var a4=function(){if(--a8==0){a9()
}};if(ba=="config"){var a7=C.listValues();for(var a6 in a7){var a5=a7[a6];
if(a5.search(aG)==-1){continue}if(a5.search(O)==-1){continue
}if(a5.search(at)==-1){continue}C.deleteValue(a5)}}else{if(ba=="factory"){if(ai.isReady()){a8++;
ai.clean(a4)}if(ak.hasPermission){a8++;ak.remove(a4)
}if(h.hasPermission){a8++;h.remove(a4)}a8++;C.deleteAll(a4)
}}a4()},reset:function(a3){ao.run(null,a3)},factoryReset:function(a3){ao.run("factory",a3)
},configReset:function(a3){ao.run("config",a3)}};var d={getAll:function(a3){try{chrome.management.getAll(a3)
}catch(a4){a3([])}},getAllUserscripts:function(a3){var a4=function(a8){var a6=[];
for(var a5 in a8){if(!a8.hasOwnProperty(a5)){continue
}var a7=a8[a5];if(a7.homepageUrl==""&&a7.hostPermissions.length==0&&a7.permissions.length==0&&!a7.icons&&!a7.updateUrl&&a7.isApp==false&&a7.optionsUrl==""&&a7.mayDisable==true){a7.icon="chrome://extension-icon/"+a7.id+"/48/1";
a6.push(a7)}}if(a3){a3(a6)}};chrome.management.getAll(a4)
},getUserscriptByName:function(a4,a3){var a5=function(a8){for(var a6=0;
a6<a8.length;a6++){var a7=a8[a6];if(a7.name==a4){a3(a7);
return}}a3(null)};this.getAllUserscripts(a5)},getUserscriptById:function(a5,a3){var a4=function(a8){for(var a6=0;
a6<a8.length;a6++){var a7=a8[a6];if(a7.id==a5){a3(a7);
return}}a3(null)};this.getAllUserscripts(a4)},setEnabled:function(a5,a4,a3){try{chrome.management.setEnabled(a5.id,a4,a3);
return}catch(a6){}if(a3){window.setTimeout(a3,1)}},uninstall:function(a4,a3){try{chrome.management.uninstall(a4.id,a3);
return}catch(a5){}if(a3){window.setTimeout(a3,1)}}};
exte=d;var ab={getDataUriFromUrl:function(a5,a3){var a7=document.createElement("img");
var a6=false;var ba=null;document.body.appendChild(a7);
var a8=function(){if(ba){window.clearTimeout(ba)}if(!a6&&a3){a3(null)
}};var a4=function(){if(ba){window.clearTimeout(ba)
}var bc=document.createElement("canvas");bc.width=a7.width;
bc.height=a7.height;var bb=bc.getContext("2d").drawImage(a7,0,0);
if(a7.parentNode){a7.parentNode.removeChild(a7)}a7=null;
if(!a6&&a3){a3(bc.toDataURL())}};var a9=function(){ba=null;
a8();a6=true};ba=window.setTimeout(a9,5000);a7.onload=a4;
a7.onerror=a8;a7.src=a5},initCanvas:function(a3){this.canvas=a3;
this.context=this.canvas.getContext("2d")},init:function(a3,a5){var a4=null;
if(this.canvas){a4=this.canvas}else{a4=document.createElement("canvas");
if(D){document.body.appendChild(a4)}}a4.height=a5;a4.width=a3;
this.initCanvas(a4)},initFromImage:function(a8,ba,a9,a7,a3,bc,a4){var a5=document.createElement("img");
if(D){document.body.appendChild(a5)}var bb=this;var a6=function(){bb.init(ba,a9);
if(bc){bb.context.scale(bc,bc)}bb.context.drawImage(a5,a7,a3);
bb.loaded=true;if(a5.parentNode){a5.parentNode.removeChild(a5)
}a5=null;if(a4){a4()}};a5.onload=a6;a5.src=a8},printNr:function(a3,a6,a5,a4){this.context.font="22pt Arial bold";
this.context.fillStyle="rgba("+a4.join(",")+", 1)";
this.context.fillText(a5,a3,a6)},circle:function(a3,a7,a5,a4){var a6="rgba("+a4.join(",")+", 1)";
this.context.fillStyle=a6;this.context.beginPath();
this.context.arc(a3,a7,a5,0,2*Math.PI,true);this.context.fill()
},rect:function(a7,a6,a3,a5,a8,a4){if(a8==null){a8=true
}if(a8){this.context.fillStyle="rgba("+a4.join(",")+", 0.99)";
this.context.fillRect(a7,a6,a3,a5)}else{this.context.fillStyle="rgb("+a4.join(",")+", 1)";
this.context.beginPath();this.context.moveTo(a7,a6);
this.context.lineTo(a7+a3,a6);this.context.lineTo(a7+a3,a6+a5);
this.context.lineTo(a7,a6+a5);this.context.lineTo(a7,a6);
this.context.stroke()}},rrect:function(a4,a8,a3,a5,a9,a7){var a6=a9;
this.circle(a4+a6,a8+a6,a9,a7);this.circle(a3-a6,a8+a6,a9,a7);
this.circle(a4+a6,a5-a6,a9,a7);this.circle(a3-a6,a5-a6,a9,a7);
this.rect(a4+a9,a8,a3-a4-2*a9,a5-a8,true,a7);this.rect(a4,a8+a9,a3-a4,a5-a8-2*a9,true,a7)
},createIconEx:function(a8,a3){var a5=140;var a7=140;
var a9=this;var a6=1;var a4=function(){var bc=14;var bb=25;
var ba=116-(a8>10?bc:0)-(a8>100?bc:0)-(a8>1000?bc:0)-(a8>10000?bc:0);
ab.rrect(ba,0,a5,bb,4,[200,0,0]);var bd=3;ab.rrect(ba+bd,0+bd,a7-bd,bb-bd,4,[190,0,0]);
ab.printNr(ba+4,bb-3,a8,[240,250,240]);if(a3){a3(a9.canvas.toDataURL())
}};ab.initFromImage(chrome.extension.getURL("images/icon128.png"),a5,a7,6,6,1,a4)
},toPNG:function(){return this.canvas.toDataURL()}};
var j=function(){chrome.browserAction.setIcon({path:chrome.extension.getURL("images/icon_grey.png")});
chrome.browserAction.setPopup({popup:"action.html"});
chrome.browserAction.setTitle({title:"Tampermonkey"})
};var q={t:500,tob:{},toi:{},setIcon:function(a4,a5){if(q.toi[a4]){window.clearTimeout(q.toi[a4])
}var a3=function(){q.setIconInternal(a4,a5);delete q.toi[a4]
};q.toi[a4]=window.setTimeout(a3,q.t)},setIconInternal:function(a3,a4){if(a4==undefined){a4=aF
}var bb,ba,a9=null;var a8=false;var a5=false;var a7=false;
if(a3&&!ay.get.empty(a3)){a8=ay.get.blocker(a3);a5=ay.get.stats(a3).running;
a7=ay.get.forbidden(a3)}if(a7){a4.images.icon="images/icon_grey_forbidden.png";
a9=aS.getMessage("At_least_one_part_of_this_page_is_listed_at_the_forbidden_pages_setting_")
}else{if(a8){a4.images.icon="images/icon_grey_blocker.png";
a9=aS.getMessage("Some_scripts_might_be_blocked_by_the_javascript_settings_for_this_page_or_a_script_blocker_")
}else{if(a5){a4.images.icon="images/icon.png"}else{a4.images.icon="images/icon_grey.png"
}}}bb={path:chrome.extension.getURL(a4.images.icon)};
ba={title:a9?a9:chrome.extension.manifest.name};if(a3!=null){bb.tabId=a3;
ba.tabId=a3}try{chrome.browserAction.setIcon(bb);chrome.browserAction.setTitle(ba)
}catch(a6){console.warn("bg: ERROR while setIcon! "+a6.message)
}},setBadge:function(a4){if(q.tob[a4]){window.clearTimeout(q.tob[a4])
}var a3=function(){q.setBadgeInternal(a4);delete q.tob[a4]
};q.tob[a4]=window.setTimeout(a3,q.t)},setBadgeInternal:function(a4){var a6=0;
var a5=function(){if(D){console.log("badge: set "+a6)
}if(a6==0){chrome.browserAction.setBadgeText({text:"",tabId:a4})
}else{chrome.browserAction.setBadgeText({text:a6.toString(),tabId:a4})
}};if(aF.values.appearance_badges=="off"){a6=0}else{if(aF.values.appearance_badges=="running"){if(a4&&!ay.get.empty(a4)){a6=ay.get.stats(a4).running
}}else{if(aF.values.appearance_badges=="running_unique"){if(a4&&!ay.get.empty(a4)){a6=ay.get.stats(a4,true).unique
}}else{if(aF.values.appearance_badges=="disabled"){if(a4&&!ay.get.empty(a4)){a6=ay.get.stats(a4).disabled
}}else{if(aF.values.appearance_badges=="tamperfire"){var a3=function(a7){a6=a7;
a5()};ai.tab.getCount(a4,a3);return}}}}}a5()}};var ah={infoChanged:[],redirects:{},addInfoChangedListener:function(a3){ah.infoChanged.push(a3)
},runInfoChangedListener:function(){for(var a3=0;a3<ah.infoChanged.length;
a3++){ah.infoChanged[a3](aZ)}},headerCheck:function(a5){if(a5.tabId>=0&&aZ.verified==false){if(D||UV){console.log("bg: verify that webRequest is working at "+a5.type+" to "+a5.url)
}var a8=false;var a7=new RegExp("^"+aZ.testprefix);
for(var a4=0;a4<a5.requestHeaders.length;a4++){var a6=a5.requestHeaders[a4];
if(UV){console.log(" #: "+a6.name+" -> "+a6.value)}if(a6.name.search(a7)==0){if(D){console.log("bg: found "+a6.name+" @webRequest :)")
}a8=true}}if(!a8&&aZ.verifyCnt-->0){return}aZ.headers=a8;
aZ.verified=true;ah.runInfoChangedListener();if(D){console.debug("bg: verified webRequest "+(aZ.headers?"":"not ")+"being working")
}try{chrome.webRequest.onSendHeaders.removeListener(ah.headerCheck)
}catch(a3){aZ.headers=false;aZ.verified=true;ah.runInfoChangedListener()
}}},detectRedirectToCache:function(a3){aj.registerLateCallback(function(){ah.detectRedirect(a3)
})},detectRedirect:function(a3){var bd=a3.responseHeaders;
var a5=a3.requestId;var bb=false;var be=false;var bc=false;
var bf=a3.type=="xmlhttprequest";var a8=a3.type=="main_frame";
var a6=a8||a3.type=="sub_frame";if(!bf&&!aF.values.webrequest_fixCSP&&!a6){return{}
}if(bf&&ah.redirects[a5]){bb=true}for(var a9=0;a9<bd.length;
a9++){var bg=bd[a9];if(bg.name=="Location"){if(a6){be=true
}else{if(bf){var a4=function(){var bh=a5;if(bb){window.clearTimeout(ah.redirects[a5].to)
}var bi=function(){delete (ah.redirects[bh])};ah.redirects[bh]={url:bg.value,to:window.setTimeout(bi,10000)}
};a4();break}}}else{if(aF.values.webrequest_fixCSP&&(bg.name=="X-WebKit-CSP"||bg.name=="X-Content-Security-Policy"||bg.name=="Content-Security-Policy")){var a7=bg.value.replace(/script-src /,"script-src "+aB.REQUESTS.INTERNAL_PAGE_URL+aB.SELF.ID+" 'unsafe-inline' 'unsafe-eval' ");
if(D){console.log('csp: replace "'+bg.value+'" with "'+a7+'"')
}bg.value=a7;bd[a9]=bg;bc=true}}}if(!be&&a6){var ba={tabId:a3.tabId,frameId:a3.frameId,url:a3.url};
ay.events.response(a3.tabId,a3.frameId,a3.url)}if(bf&&bb){bd.push({name:"TM-finalURL",value:ah.redirects[a5].url});
bc=true}if(bc){return{responseHeaders:bd}}return{}},headerFix:function(bg){if(V||UV){console.log(bg.type)
}var bk=!ay.get.empty(bg.tabId);var a5=bg.type=="main_frame";
var bl=ak.runCheck;var ba=a5||bg.type=="sub_frame";
if(ba&&bl){var bh=I.parse(bg.url);var a8=bh.origin+"/*";
chrome.contentSettings.javascript.set({primaryPattern:a8,setting:"allow"});
if(V||UV||EV){var a4=function(){var bm=function(bn){console.log("contentSettings: ("+(new Date()).getTime()+") state: "+JSON.stringify(bn))
};chrome.contentSettings.javascript.get({primaryUrl:bg.url},bm)
};console.log("contentSettings: ("+(new Date()).getTime()+") allow URL "+a8);
a4();window.setTimeout(a4,20)}}var a7=a5&&ay.get.user_agent(bg.tabId,bg.frameId);
var a3=aZ.headers&&bg.type=="xmlhttprequest";if(!a7&&!a3){return{}
}var bc=false;var bf={};var a9=[];var bb=new RegExp("^"+aZ.prefix);
var a6;if(a7){a6=ay.get.user_agent(bg.tabId,bg.frameId);
if(V||UV){console.log("bg: userscript user-agent spoof enabled! ("+a6+")")
}}if(V||UV){console.log("bg: process request to "+bg.url);
console.log(bg.requestHeaders)}for(var be=0;be<bg.requestHeaders.length;
be++){var bj=bg.requestHeaders[be];if(a3&&bj.name.search(bb)==0){a9.push(bj)
}else{if(a7&&bj.name.toLowerCase()=="user-agent"){bc=true;
bf[bj.name]=a6}else{bf[bj.name]=bj.value}}}if(a3){for(var be=0;
be<a9.length;be++){var bj=a9[be];bc=true;bf[bj.name.replace(bb,"")]=bj.value
}if(!aZ.verified){bc=true;bf[aZ.testprefix]="true"}}if(bc){var bi=[];
for(var bd in bf){if(!bf.hasOwnProperty(bd)){continue
}if(bd!=""){bi.push({name:bd,value:bf[bd]})}}if(V||UV){console.log(bi)
}return{requestHeaders:bi}}return{}},sucRequest:function(a3){if(a3.tabId>0){console.log("bg: "+a3.requestId+" print "+a3.type+" request of tabId "+a3.tabId+" to "+a3.url)
}},checkRequestForUserscript:function(a3){var a7=aD.isScriptUrl(a3.url);
var a8=a3.url.search(/\?/);var bb=a3.url.search(/\#/);
var ba=a3.url.search(/^file:\/\//);var a6=a3.type=="main_frame";
var a9=a3.type=="xmlhttprequest";var a5=a6||a3.type=="sub_frame";
if(a3.tabId>0&&a3.type=="main_frame"&&a3.method!="POST"&&ba==-1&&a7==true&&(a8==-1||a7<a8)&&(bb==-1||a7<bb)&&a3.url.search(/\#bypass=true/)==-1){var a4=chrome.extension.getURL("ask.html")+"?script="+L.Base64.encode(a3.url)+"&i18n="+aF.values.i18n;
if(RV){console.log("bg: user script detected @ "+a3.url+" -> open tab with "+a4)
}chrome.tabs.create({url:a4},function(){});return{redirectUrl:"javascript:history.back()"}
}if(a6){ay.events.reset(a3.tabId,true);ay.events.request(a3.tabId,a3.frameId,a3.url)
}return{}},removeWebRequestListeners:function(){if(aZ.use){try{ah.preCleanup();
chrome.webRequest.onBeforeRequest.removeListener(ah.checkRequestForUserscript);
chrome.webRequest.onBeforeSendHeaders.removeListener(ah.headerFix);
chrome.webRequest.onHeadersReceived.removeListener(ah.detectRedirect);
if(aZ.headers){if(aZ.verified==false){chrome.webRequest.onSendHeaders.removeListener(ah.headerCheck)
}if(V||UV){chrome.webRequest.onCompleted.removeListener(ah.sucRequest)
}}}catch(a3){}}aZ.headers=false;aZ.verified=true;ah.runInfoChangedListener()
},preInit:function(){if(aZ.use){ah.tmp_cache=true;var a3={urls:["http://*/*","https://*/*"]};
chrome.webRequest.onHeadersReceived.addListener(ah.detectRedirectToCache,a3,["responseHeaders","blocking"]);
chrome.webRequest.handlerBehaviorChanged()}},preCleanup:function(){if(aZ.use&&ah.tmp_cache){chrome.webRequest.onHeadersReceived.removeListener(ah.detectRedirectToCache);
delete ah.tmp_cache}},init:function(a4,a8){if(aZ.use){try{ah.preCleanup();
var a7={urls:["http://*/*","https://*/*"],types:["xmlhttprequest"]};
var a3={urls:["http://*/*","https://*/*","file://*/*"]};
var a5={urls:["http://*/*","https://*/*"]};chrome.webRequest.onBeforeRequest.addListener(ah.checkRequestForUserscript,a3,["blocking"]);
chrome.webRequest.onBeforeSendHeaders.addListener(ah.headerFix,a3,["requestHeaders","blocking"]);
chrome.webRequest.onHeadersReceived.addListener(ah.detectRedirect,a5,["responseHeaders","blocking"]);
if(a8){if(!a4){chrome.webRequest.onSendHeaders.addListener(ah.headerCheck,a7,["requestHeaders"])
}if(V||UV){chrome.webRequest.onCompleted.addListener(ah.sucRequest,a7,[])
}}chrome.webRequest.handlerBehaviorChanged();aZ.verified=a4;
aZ.headers=a8;aZ.id=((new Date()).getTime()+Math.floor(Math.random()*6121983+1)).toString();
aZ.testprefix=aZ.prefix+(Math.floor(Math.random()*6121983+1)).toString();
aZ.prefix=aZ.prefix+aZ.id+"_";ah.runInfoChangedListener()
}catch(a6){if(D){console.error("bg: error initializing webRequests "+a6.message)
}ah.removeWebRequestListeners()}}},finalize:function(){ah.removeWebRequestListeners()
}};var J={onCommitedListener:function(a3){ay.events.commited(a3.tabId,a3.frameId,a3.url)
}};var aj={late:false,callbacks:[],init:function(){},registerLateCallback:function(a3){if(D||V){console.log("toea: register callback")
}aj.callbacks.push(a3)},setReady:function(){if(D||V){console.debug("toea: run "+aj.callbacks.length+" callbacks")
}aj.late=true;for(var a3=0;a3<aj.callbacks.length;a3++){aj.callbacks[a3]()
}aj.callbacks=[]}};function aw(){if(D){console.debug("bg: cleanup!")
}ah.finalize();al.finalize()}window.addEventListener("unload",aw,false);
var aM=null;var aL=function(a5,a6,a8){if(!aj.late){window.setTimeout(function(){aL(a5,a6,a8)
},100);return}if(V){console.log("loadListener "+a8.url+" "+a6.status)
}var a4=(!a8||!a8.url||a8.url.length<4)?null:a8.url.substr(0,4);
var a3=function(ba){if(!ba){if(D){console.warn("getSrc: returned no response")
}}else{if(V){console.log("add script from "+a8.url)
}Z({tabid:a8.id,url:a8.url,src:ba.src})}};var a7=function(){aM=null;
if(a4=="file"){a3({src:a.getSource(a8.url)})}else{chrome.tabs.sendMessage(a5,{method:"getSrc",frameId:0},a3)
}};if(aD.isScriptUrl(a8.url)){if(V){console.log("found script @ "+a8.url)
}if(a6.status=="complete"){if(aM!=null){window.clearTimeout(aM);
aM=null}a7()}else{aM=window.setTimeout(a7,5000)}}var a9=0;
if(a6.status=="loading"){ay.events.loading(a8.id,a9,a8.url)
}else{if(a6.status=="complete"){ay.events.complete(a8.id,a9,a8.url)
}}};var R=function(a3,a4){};var H=function(a4,a3){ay.events.remove(a4)
};var N=function(){M(aF.values.logLevel);aS.setLocale(aF.values.i18n);
if(aF.values.statistics_enabled){az.init(aB.SELF.ID);
window.onerror=function(a7,a6,a5){az.tE(a7,chrome.extension.manifest.version+" "+a6,a5)
}}SyncInfo.debug(!!YV);ak.init();h.init();ay.listeners.add.onReset(function(a5,a6){r.clearByTabId(a5);
o(null,null,a5,false);if(!a6){q.setIcon(a5)}});var a4=function(a5){q.setIcon(a5);
q.setBadge(a5)};ay.listeners.add.onCommited(a4);ay.listeners.add.onCompleted(a4);
if(aF.values.sync_enabled&&aF.values.sync_type){al.enable();
al.scheduleSync(1000,true);al.schedulePeriodicalCheck()
}if(aF.values.fire_enabled){ai.init()}var a3=function(a5){if(V){console.log("bg: webRequest changed "+JSON.stringify(a5))
}if(W){W.setWebRequest(a5)}};ah.addInfoChangedListener(a3);
ah.init(aF.values.webrequest_modHeaders!="auto",aF.values.webrequest_modHeaders!="no")
};var I=Registry.get("uri");uris=I;var aF;var L;var u;
var W;var aV;var E;var aT;var aS;init=function(){if(V){console.log("bg: init extension, detected id: "+aB.SELF.ID)
}aj.init();ah.preInit();chrome.tabs.onUpdated.addListener(aL);
chrome.tabs.onRemoved.addListener(H);chrome.extension.onMessage.addListener(aP.handler);
chrome.extension.onConnect.addListener(aU);chrome.extension.onConnectExternal.addListener(function(a7){a7.disconnect()
});L=Registry.get("convert");aS=Registry.get("i18n");
W=Registry.get("xmlhttprequest");u=W.run;aV=Registry.get("compat");
E=Registry.get("parser");SyncInfo=Registry.get("syncinfo");
j();var a6=function(){N();B();q.setIcon();a3()};var a4=function(){aF=new z(a6);
cfgo=aF};C.init(a4);var a5=function(){if(!chrome.webNavigation||!chrome.webNavigation.onCommitted){if(D||V){console.log("bg: waitForWebNav()")
}window.setTimeout(a5,300);return}chrome.webNavigation.onCommitted.addListener(J.onCommitedListener)
};var a3=function(){window.setTimeout(ag.check,10000);
a5();if(D||V){console.debug("Listeners registered!")
}window.setTimeout(aj.setReady,1)}};init()})();