
(function(){var d=false;var k=false;var D=null;var H=null;
var J=null;var F=true;var e="rank";var u={};var g=0;
var f="http://...";var a=new Date();if(!window.requestFileSystem){window.requestFileSystem=window.webkitRequestFileSystem
}if(!window.BlobBuilder){window.BlobBuilder=window.WebKitBlobBuilder
}Registry.require("pingpong");Registry.require("crcrc");
Registry.require("curtain");Registry.require("helper");
Registry.require("tabview");Registry.require("convert");
Registry.require("htmlutil");Registry.require("i18n");
var w=Registry.get("crcrc").cr;var n=Registry.get("crcrc").crc;
var r=Registry.get("curtain");var B=Registry.get("helper");
var t=Registry.get("tabview");var K=Registry.get("convert");
var A=Registry.get("htmlutil");var l=Registry.get("pingpong");
var h=Registry.get("i18n");var v=B.getUrlArgs();var q=function(M,N){if(N){M.setAttribute("style",B.staticVars.visible);
M.vis=true}else{M.setAttribute("style",B.staticVars.invisible);
M.vis=false}};var b=function(M){return v.tab?v.tab:M
};var j=function(M){return v.url?v.url:M};var o=function(S){var Q=0;
var W=0;var Y=0;var R=0;var N=(new Date()).getTime();
var U=24*60*60*1000;var X=7*U;var O=30*U;if(S["uso:timestamp"]){var Z=S["uso:timestamp"];
if(N-X<Z){Q=1}else{if(N-O<Z){Q=0.96}else{if(N-6*O<Z){Q=0.9
}else{if(N-24*O<Z){Q=0.7}else{Q=0}}}}}var aa=S["uso:installs"];
if(aa>500000){W=1}else{if(aa>100000){W=0.95}else{if(aa>50000){W=0.9
}else{if(aa>10000){W=0.88}else{if(aa>1000){W=0.8}else{W=0.5*(aa/1000)
}}}}}var P=S["uso:fans"];if(P>5&&aa>333){var T=aa/P;
if(T<333){Y=1}else{if(T<1000){Y=0.9}else{if(T<3000){Y=0.85
}else{if(T<10000){Y=0.8}else{Y=0.5*(10000/T)}}}}}var V=Number(S["uso:rating"]);
R=V>4?1:V/5;var M=0.25*Q+0.35*W+0.15*Y+0.25*R;return M
};var G=function(O,N){O=parseFloat(O);if(!isNaN(O)){if(!N){var N=0
}var M=Math.pow(10,N);return Math.floor(O*M+((O*M*10)%10>=5?1:0))/M
}else{return O}};var E=function(M){if(M==undefined){M=""
}var ab={id:"new",name:M};var Z=[];var O=function(ai,ae,ar,ao,ak){var at=n("div","settingsth",ai.name,ai.id,ae);
var am=function(ax,au,aw){var av=document.getElementsByName("settingsth_a_up"+ai.name);
var aA=document.getElementsByName("settingsth_a_down"+ai.name);
var az;var ay;for(var aB=0;aB<av.length;aB++){av[aB].style.display="none"
}for(var aB=0;aB<aA.length;aB++){aA[aB].style.display="none"
}if(F){au.style.display=""}else{aw.style.display=""
}};var aq=n("a","settingsth_a",ai.name,ai.id,ae+"_a");
aq.setAttribute("name","settingsth_a"+ai.name);var ap=n("a","settingsth_a_up",ai.name,ai.id,ae+"_a_up");
ap.setAttribute("name","settingsth_a_up"+ai.name);var ag=n("a","settingsth_a_down",ai.name,ai.id,ae+"_a_down");
ag.setAttribute("name","settingsth_a_down"+ai.name);
ap.style.display="none";ag.style.display="none";var aj=function(){am(aq,ap,ag)
};var af=function(){aj();r.hide()};var ah=function(){var au=function(){e=ao;
c(H,e,F,af)};r.wait(h.getMessage("Please_wait___"));
window.setTimeout(au,1)};var an=function(){var au=function(){F=false;
e=ao;c(H,e,F,af)};r.wait(h.getMessage("Please_wait___"));
window.setTimeout(au,1)};var al=function(){var au=function(){F=true;
e=ao;c(H,e,F,af)};r.wait(h.getMessage("Please_wait___"));
window.setTimeout(au,1)};if(!at.inserted){at.appendChild(aq);
at.appendChild(ag);at.appendChild(ap);aq.addEventListener("click",ah);
ap.addEventListener("click",an);ag.addEventListener("click",al);
aq.textContent=ar+" ";aq.href="javascript://nop/";ap.innerHTML="&#x25BE;";
ap.href="javascript://nop/";ag.innerHTML="&#x25B4;";
ag.href="javascript://nop/"}if(ak&&!e||ao==e){window.setTimeout(aj,1)
}return at};var Y=n("div","scripttable",ab.name,ab.id,"main");
var X=n("div","settingsth_fill",ab.name,ab.id,"thead_en");
var ad=n("div","settingsth_fill",ab.name,ab.id,"thead_fill1");
var W=O(ab,"thead_name",h.getMessage("Name"),"name");
var ac=n("div","settingsth_fill",ab.name,ab.id,"thead_fill");
var V=O(ab,"thead_score",h.getMessage("Rank"),"rank",true);
var U=n("div","settingsth",ab.name,ab.id,"thead_sites");
U.width="25%";U.textContent=h.getMessage("Sites");var T=O(ab,"thead_installs",h.getMessage("Installs"),"installs");
var S=O(ab,"thead_rating",h.getMessage("Rating"),"rating");
var R=O(ab,"thead_fans",h.getMessage("Fans"),"fans");
var Q=O(ab,"thead_timestamp",h.getMessage("Last_Changed"),"timestamp");
var P=n("div","settingsth",ab.name,ab.id,"thead_homepage");
P.textContent=h.getMessage("Homepage");if(!Y.inserted){Z=Z.concat([X,ad,ac,W,V,U,T,S,R,Q]);
var N=n("div","settingstr filler",ab.name,ab.id,"filler");
for(var aa=0;aa<Z.length;aa++){N.appendChild(Z[aa])
}Y.appendChild(N)}return Y};var x=function(aa,ai,ab){var al=null;
var ap=null;var O=[];var R=function(ar){var aq=null;
if(ar.scriptTab){aq=E();J=aq}else{aq=n("table","settingstable",ar.name,ar.id,"main");
var at=n("tr","settingstr filler",ar.name,ar.id,"filler");
aq.appendChild(at)}return aq};var S=null;var X=null;
for(var ae in aa){var ag=aa[ae];if(ag.id===undefined){ag.id="item"+ae
}if(d){console.log("fire: process Item "+ag.name)}var M=n("tr","settingstr",ag.name,ag.id,"outer");
if(ag.divider){M=null}else{var ao=w("td",ag.name,ag.id,"0");
M.appendChild(ao);var P=w("td",ag.name,ag.id,"1");var ac=ag.icon||ag.icon64||ag.image;
if(ac){P.setAttribute("class","imagetd");if(ag.id&&ag.userscript){var aj=A.createImage(ac,ag.name,ag.id);
aj.oldvalue=ag.enabled;P.appendChild(aj)}else{P.appendChild(A.createImage(ac,ag.name,ag.id))
}}if(ag.option){u[ag.id]=ag.checkbox?ag.enabled:ag.value
}var N=n("td","settingstd",ag.name,ag.id,"2");M.appendChild(N);
if(ag.heading){var ah=w("span",ag.name,ag.id,"heading");
if(!ah.inserted){ah.textContent=ag.name;var W=R(ag);
al=n("tbody","settingstbody",ag.name,ag.id,"tbody");
W.appendChild(al);ap=w("div",ag.name,ag.id,"tab_content");
ap.appendChild(W);ai.appendTab(B.createUniqueId(ag.name,ag.id),ah,ap)
}M=null}else{if(ag.section){if(ag.endsection){continue
}var Z=n("div","section"+(ag.width?" section_width"+ag.width:""),ag.name,ag.id);
var ah=n("b","section_head",ag.name,ag.id,"head");var am=n("div","section_content",ag.name,ag.id,"content");
ah.textContent=ag.name;Z.appendChild(ah);Z.appendChild(am);
if(X==null){X=n("div","section_table","","");N.appendChild(X);
N.setAttribute("class","section_td")}X.appendChild(Z);
S=am;P=null}else{if(ag.userscript){O.push({item:ag,tabv:ai});
M=null}else{if(ag.fireInfo){var ak=n("span",ag.name,ag.id);
ak.innerHTML=ag.value;a=new Date(ag.versionDB);if(S){S.appendChild(ak);
M=null}else{N.appendChild(ak)}}else{if(ag.fireUpdate){var ad=function(){z(false)
};var an=function(){z(true)};var V=A.createButton(ag.name,ag.id,ag.name,ad);
var U=A.createButton(ag.fname,ag.id,ag.fname,an);if(S){S.appendChild(V);
S.appendChild(U);M=null}else{N.appendChild(V);N.appendChild(U)
}}else{if(ag.search){f=ag.value;var T=w("div","search","box","");
T.appendChild(A.createSearchBox(f));M=null}else{if(ag.version){version=ag.value;
M=null;var Q=n("div","version","version","version");
Q.textContent="v"+version+" by Jan Biniok"}else{var af=w("span",ag.name,ag.id);
af.textContent=ag.name;N.setAttribute("colspan","2");
N.appendChild(af)}}}}}}}if(M){if(P){M.insertBefore(P,ao)
}if(N){M.appendChild(N,ao)}M.removeChild(ao)}}if(al&&M){al.appendChild(M)
}}H=O;var Y=function(){c(H,null,null,ab)};window.setTimeout(Y,1);
if(d){console.log("sort done!")}};var C=function(V,T){if(!V){console.log("fire: items is empty!");
return}D=V;var N=document.getElementById("fire");var Q=n("div","","fire","main");
if(N){var M=N.parentNode;M.removeChild(N);M.appendChild(Q);
document.body.setAttribute("class","main")}if(d){console.log("fire: head")
}var Y=n("div","head_container","fire","head_container");
var R=n("div","tv_container","fire","tv_container");
var W=w("a","head_link","fire","head_link");W.href="http://tampermonkey.net";
W.target="_blank";var Z=n("div","float margin4","fire","head1");
var P=n("img","banner","fire");P.src=chrome.extension.getURL("images/icon128.png");
var X=n("div","float head margin4","fire","head2");
var ab=w("div","fire");var S=n("div","version","version","version");
S.textContent=" by Jan Biniok";var aa=w("div","search","box","");
ab.textContent="TamperFire";Z.appendChild(P);X.appendChild(ab);
X.appendChild(S);W.appendChild(Z);W.appendChild(X);
Y.appendChild(W);Y.appendChild(aa);Q.appendChild(Y);
Q.appendChild(R);if(d){console.log("fire: tabView")
}var U=t.create("_main",R);if(d){console.log("fire: itemsToMenu")
}var O=function(){var ac=function(){if(T){console.log("fire: done! :)");
r.hide()}k=true};x(V,U,ac)};window.setTimeout(O,10)
};var p={name:function(N,M){return N},rank:function(N,M){return N.rank-M.rank
},installs:function(N,M){return N.installs-M.installs
},fans:function(N,M){return N.fans-M.fans},timestamp:function(M,N){return N.timestamp-M.timestamp
},rating:function(N,M){return N.rating-M.rating}};var c=function(O,X,V,Y){if(d){console.log("sortScripts: start")
}if(X===undefined||X===null){X="rank"}if(V===undefined||V===null){V=true
}var Z=u.fire_sort_cache_enabled?e+"_"+F.toString():"";
var af=[];var Q=0;var ab=u.fire_sort_cache_enabled?E(Z):null;
var W=u.fire_sort_cache_enabled?ab.inserted:false;var M,ad,P,N,aa,ae;
var U,T,R;var ac=J;if(u.fire_sort_cache_enabled){if(W&&d){console.log("use cached table "+Z)
}J.setAttribute("style",B.staticVars.invisible_move)
}if(u.fire_sort_cache_enabled){J.parentNode.insertBefore(ab,J);
J=ab;J.setAttribute("style",B.staticVars.visible_move)
}var S=null;if(!W){S=n("div","scripttbody","new",Z,"tbody");
if(J){J.appendChild(S)}}U=function(){if(d){console.log("sortScripts: delay 0")
}for(var ag=0;ag<O.length;ag++){ae=O[ag].tabv;ad=O[ag].item;
ad.id=ad.id+Z;M=n("div","scripttr",ad.name,ad.id,"outer");
if(u.fire_sort_cache_enabled||!M.inserted){P=n("div","scripttd",ad.name,ad.id,"1");
N=n("div","scripttd",ad.name,ad.id,"2");aa=ad.icon||ad.icon64||ad.image;
if(aa){P.setAttribute("class","scripttd imagetd");P.appendChild(A.createImage(aa,ad.name,ad.id))
}M.appendChild(P);M.appendChild(N);i(ae,ad,M)}Q++;af.push({tr:M,installs:ad["uso:installs"],fans:ad["uso:fans"],timestamp:ad["uso:timestamp"],rating:ad["uso:rating"],rank:ad.rank})
}if(d){console.log("sortScripts: delay 0.1")}af=af.sort(p[X]);
if(d){console.log("sortScripts: delay 0.2")}if(V){af=af.reverse()
}window.setTimeout(T,100)};T=function(){if(d){console.log("sortScripts: delay 1")
}if(u.fire_sort_cache_enabled){for(var ag=0;ag<Q;ag++){S.__appendChild(af[ag].tr)
}window.setTimeout(R,100)}else{var aj=n("div","","dummy","dummy");
S.appendChild(aj);var ah=0;var ai=function(){var al;
var ak=(new Date()).getTime()+15000;while((new Date()).getTime()<ak){for(al=ah;
(al<Q)&&(ah+100>al);al++){S.__insertBefore(af[al].tr,aj)
}ah=al}if(al<Q){console.log("puhhhhh: sorting is hard work...");
window.setTimeout(ai,1)}else{S.removeChild(aj);window.setTimeout(R,100)
}};ai()}};R=function(){if(d){console.log("sortScripts: end")
}af=[];var ag=function(){if(Y){Y()}};window.setTimeout(ag,100)
};window.setTimeout(W||O.length==0?R:U,100)};var L=function(X,U,S){var R=w("div",X.name,X.id,"script_editor_h");
R.textContent="USO";var W=w("div",X.name,X.id,"script_editor_c");
var M=n("tr","editor_container p100100",X.name,X.id,"container");
var Z=n("tr","",X.name,X.id,"container_menu");var V=n("table","editor_container_o p100100",X.name,X.id,"container_o");
var Y=n("td","editor_outer",X.name,X.id,"script_info");
var Q=n("td","editor",X.name,X.id,"script_info");var P;
V.appendChild(Z);V.appendChild(M);W.appendChild(V);
var O=n("td","editormenu",X.name,X.id,"editormenu");
Y.appendChild(Q);M.appendChild(Y);Z.appendChild(O);
var T=A.createButton(X.name,"close_script",h.getMessage("Close"),S);
var N=function(){var ab=function(ac){if(ac.found){}else{alert(h.getMessage("Unable_to_get_UserScript__Sry_"))
}};chrome.extension.sendMessage({method:"scriptClick",url:"http://userscripts.org/scripts/source/"+X["uso:script"]+".user.js"},ab)
};var aa=A.createButton(X.name,"save",h.getMessage("Install"),N);
O.appendChild(aa);O.appendChild(T);P=U.appendTab("script_editor_tab"+B.createUniqueId(X.name,X.id),R,W);
return{onShow:function(){var ab=document.createElement("iframe");
ab.setAttribute("class","script_iframe");ab.setAttribute("src","http://greasefire.userscripts.org/scripts/show/"+X["uso:script"]);
Q.innerHTML="";Q.appendChild(ab)},onClose:function(){}}
};var I=function(O,ab,N,U,V){var X=n("div","",ab.name,ab.id,"script_tab_head");
var T=B.decodeHtml(ab.name);var S=n("div","heading",ab.name,"heading");
var Z=n("img","nameNicon64",ab.name,"heading_icon");
var M=ab.icon64?ab.icon64:ab.icon;Z.src=M;var aa=n("div","nameNname64",ab.name,"heading_name");
aa.textContent=T;if(M){S.appendChild(Z)}S.appendChild(aa);
var W=n("div","author",ab.name,"author");if(ab.author){W.textContent="by "+B.decodeHtml(ab.author)
}else{if(ab.copyright){W.innerHTML="&copy; ";W.textContent+=B.decodeHtml(ab.copyright)
}}var ae=n("table","noborder p100100",ab.name,"table");
var ag=n("tr","script_tab_head",ab.name,"tr1");var af=n("tr","details",ab.name,"tr2");
var R=n("td","",ab.name,"td1");var ad=n("td","",ab.name,"td2");
S.appendChild(W);X.appendChild(S);R.appendChild(X);
ag.appendChild(R);af.appendChild(ad);ae.appendChild(ag);
ae.appendChild(af);U.appendChild(ae);var ac={tv:"tv tv_alt",tv_table:"tv_table tv_table_alt",tr_tabs:"tr_tabs tr_tabs_alt",tr_content:"tr_content tr_content_alt",td_content:"td_content td_content_alt",td_tabs:"td_tabs td_tabs_alt",tv_tabs_align:"tv_tabs_align tv_tabs_align_alt",tv_tabs_fill:"tv_tabs_fill tv_tabs_fill_alt",tv_tabs_table:"tv_tabs_table tv_tabs_table_alt",tv_contents:"tv_contents tv_contents_alt",tv_tab_selected:"tv_tab tv_selected tv_tab_alt tv_selected_alt",tv_tab_close:"",tv_tab:"tv_tab tv_tab_alt",tv_content:"tv_content tv_content_alt"};
var Q=t.create("_details"+B.createUniqueId(ab.name,ab.id),ad,ac);
var Y=L(ab,Q,V);var P=function(ai){var ah=false;if(ai.type!="keydown"){return
}if(ai.keyCode==27){if(O.isSelected()){window.setTimeout(V,100)
}ah=true}if(ah){ai.stopPropagation()}};return{onShow:function(){if(Y.onShow){Y.onShow()
}window.addEventListener("keydown",P,false)},onClose:function(){if(Y.onClose){if(Y.onClose()){return true
}}window.removeEventListener("keydown",P,false)}}};
var i=function(af,ac,P){var Q;var aj;var am=n("span","clickable",ac.name,ac.id,"sname");
var S=n("span","",ac.name,ac.id,"sname_name");var R;
var N=ac.homepage?ac.homepage:(ac.namespace&&ac.namespace.search("http://")==0?ac.namespace:null);
var W="http://userscripts.org/scripts/show/"+ac["uso:script"]+"/";
R=w("a",ac.name,ac.id,"sname_name_a");if(!R.inserted){R.setAttribute("target","_blank");
S.appendChild(R)}var U=B.decodeHtml(ac.name);R.textContent=((U.length>35)?U.substr(0,35)+"...":U);
am.appendChild(S);var an=[];var al=function(ao,at,ar,aq){if(!aq){aq="scripttd"
}var ap=n("div",aq,ao.name,ao.id,ar);if(at){ap.appendChild(at)
}return ap};var Y=function(){if(aj.onClose&&aj.onClose()){return
}if(Q){Q.hide()}};var ai=function(){var ao=n("div","",ac.name,ac.id,"details_h");
ao.textContent=((U.length>25)?U.substr(0,25)+"...":U);
var ap=w("div",ac.name,ac.id,"details_c");Q=af.insertTab(null,"details_"+B.createUniqueId(ac.name,ac.id),ao,ap,null,Y);
aj=I(Q,ac,P,ap,Y)};var ae=function(ao){if(!Q){ai()}if(aj.onShow){aj.onShow()
}Q.show();if(ao.button!=1){Q.select()}};var ad=w("span",ac.name,ac.id,"srank");
var ah=w("span",ac.name,ac.id,"sinstalls");var M=w("span",ac.name,ac.id,"srating");
var ag=w("span",ac.name,ac.id,"sfans");var ab=w("span",ac.name,ac.id,"stimestamp");
var O=w("span",ac.name,ac.id,"shomepage");var V=w("a",ac.name,ac.id,"shomepage_a");
ac.rank=o(ac);ad.textContent=G(ac.rank*100,1);ah.textContent=ac["uso:installs"];
M.textContent=ac["uso:rating"];ag.textContent=ac["uso:fans"];
var Z=function(ao){var ap="0"+ao;return ap.substr(ap.length-2,2)
};var ak=function(ax,av){var aq=1000*60*60;var ap=1000*60*60*24;
var ar=ax.getTime();var ao=av.getTime();var aw=Math.abs(ar-ao);
var at=Math.round(aw/aq);var au=Math.round(aw/ap);if(at<=48){return at+" h"
}else{return au+" d"}};if(ac["uso:timestamp"]!=0){ab.textContent=ak(a,new Date(ac["uso:timestamp"]))
}O.appendChild(V);if(!V.inserted){V.setAttribute("href",N);
V.setAttribute("target","_blank");O.appendChild(R)}var T=al(ac,am,"script_td2","scripttd scripttd_name clickable");
T.addEventListener("click",ae);T.title=ac.description?U+"\n\n"+B.decodeHtml(ac.description):U;
an.push(T);an.push(al(ac,ad,"script_td3"));an.push(al(ac,s(ac),"script_td4"));
an.push(al(ac,ah,"script_td5"));an.push(al(ac,M,"script_td6"));
an.push(al(ac,ag,"script_td7"));an.push(al(ac,ab,"script_td8"));
an.push(al(ac,O,"script_td9"));for(var aa=an.length;
aa<10;aa++){an.push(n("div","scripttd",ac.name,ac.id,"script_filler_"+aa))
}P.appendChild(n("div","scripttd",ac.name,ac.id,"script_prefiller_2"));
for(var X=0;X<an.length;X++){P.appendChild(an[X])}return an
};var s=function(U){var aa=w("span",U.name,U.id,"site_images",true);
var Q=function(ag){if(ag.search("http")!=0){ag="http://"+ag
}var ac=ag.split("/");if(ac.length<3){return null}var ai=ac[2].split(".");
if(ai.length<2){return null}var ad=ai[ai.length-1];
var ah=ai[ai.length-2];var af=[];for(var ae=ai.length-3;
ae>=0;ae--){if(ai[ae].search("\\*")!=-1){break}af.push(ai[ae])
}return{tld:ad,dom:ah,predom:af.reverse()}};if(U.includes){var Y=0;
for(var P=0;P<U.includes.length;P++){var R=U.includes[P];
if(R.search(/htt(ps|p):\/\/(\*\/\*|\*)*$/)!=-1||R=="*"){var V=A.createImage(chrome.extension.getURL("images/web.png"),U.name,U.id,U.includes[P],U.includes[P]);
aa.appendChild(V);break;continue}var O=Q(R);if(O==null){continue
}var T=false;for(var N=0;N<P;N++){var M=U.includes[N];
var ab=Q(M);if(ab==null){continue}if(ab.dom==O.dom){T=true;
break}}if(!T){var S="com";var W="";if(O.tld!="*"&&O.tld!="tld"){S=O.tld
}if(O.predom.length){W=O.predom.join(".")+"."}var X=("http://"+W+O.dom+"."+S+"/favicon.ico").replace(/\*/g,"");
if(X.search("http://userscripts.org/")==0||X.search("http://userscripts.com/")==0){X="http://userscripts.org/images/script_icon.png"
}var V=A.createImage(X,U.name,U.id,U.includes[P],U.includes[P]);
aa.appendChild(V);Y++}if(Y>7){var Z=n("span",U.name,U.id,"tbc");
Z.textContent="...";aa.appendChild(Z);break}}}return aa
};var m=function(O,M){if(d){console.log("run getFireItems")
}try{var N={method:"getFireItems",tabid:O,url:M};if(d){console.log("getFireItems sendReq")
}var P=function(T){try{var X=true;if(T.progress){var S=T.progress.action+"... ";
if(!S||S==""){S=""}var W="";if(T.progress.state&&T.progress.state.of){W=" "+Math.round(T.progress.state.n*100/T.progress.state.of)+"%"
}var Y=(S!=""||W!="")?S+W:h.getMessage("Please_wait___");
r.wait(Y);var R=function(){m(O,M)};window.setTimeout(R,2000);
X=false}if(T.scripts){C(T.scripts,X);if(d){console.log("createFireMenu done!")
}}if(T.image){var V=n("img","banner","fire");V.src=T.image
}T=null}catch(U){console.log(U);throw U}};chrome.extension.sendMessage(N,P);
r.wait(null)}catch(Q){console.log("mSo: "+Q.message)
}};var z=function(P,M){if(d){console.log("run startFireUpdate")
}try{var O={method:"startFireUpdate",force:P};var N=function(){m(g,f)
};chrome.extension.sendMessage(O,function(R){if(R.suc===false){r.hide();
alert(h.getMessage("TamperFire_is_up_to_date_"))}else{window.setTimeout(N,1000)
}});r.wait(h.getMessage("Please_wait___"))}catch(Q){console.log("mSo: "+Q.message)
}};chrome.extension.onMessage.addListener(function(O,N,M){if(d){console.log("f: method "+O.method)
}if(O.method=="confirm"){var P=function(Q){M({confirm:Q})
};B.confirm(O.msg,P)}else{if(O.method=="showMsg"){alert(O.msg);
M({})}else{if(d){console.log("f: "+h.getMessage("Unknown_method_0name0",O.method))
}return false}}return true});var y=function(){window.removeEventListener("DOMContentLoaded",y,false);
window.removeEventListener("load",y,false);var N=function(){m(g,f)
};var M=function(){if(confirm(h.getMessage("An_internal_error_occured_Do_you_want_to_visit_the_forum_"))){window.location.href="http://tampermonkey.net/bug"
}};l.ping(N,M);r.wait(h.getMessage("Please_wait___"))
};window.addEventListener("DOMContentLoaded",y,false);
window.addEventListener("load",y,false);g=b();f=decodeURIComponent(j(encodeURI(f)))
})();