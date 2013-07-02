
Registry.require("prepare");Registry.require("xmlhttprequest");
Registry.require("pingpong");Registry.require("crcrc");
Registry.require("curtain");Registry.require("tabview");
Registry.require("htmlutil");Registry.require("helper");
Registry.require("statistics");Registry.require("convert");
Registry.require("i18n");Registry.require("syncinfo");
(function(){var d=false;if(!window.requestFileSystem){window.requestFileSystem=window.webkitRequestFileSystem
}var r=Registry.get("prepare").FEATURES;var M=Registry.get("crcrc").cr;
var w=Registry.get("crcrc").crc;var A=Registry.get("curtain");
var G=Registry.get("tabview");var W=Registry.get("htmlutil");
var aa=Registry.get("helper");var o=Registry.get("statistics");
var al=Registry.get("convert");var v=Registry.get("pingpong");
var p=Registry.get("i18n");var s=Registry.get("syncinfo");
var t=false;var ab=null;var K={};var R=[];var ai="0.0.0";
var u=false;var n={};var L=aa.getUrlArgs();var a={};
var ak={};var k=function(aq,V){if(ak[aq]&&ak[aq][V]){ak[aq][V].apply(this,Array.prototype.slice.call(arguments,2))
}else{console.log("option: WARN: unable to find callback '"+V+"' for id '"+aq+"'")
}};var ad=function(){var V=function(){if(K.statistics_enabled){o.init(r.SELF.ID);
window.onerror=function(at,ar,aq){o.tE(at,ai+" "+ar,aq)
}}};R.push(V)};ad();var an=function(){while(R.length){var V=R.pop();
V()}};var P=function(aF,aN){var aO=null;var aT=null;
var at=[];var aw=function(bg){var ba,aV,bi,bk,bj,bh;
var bb=[],a9=[];bk=M("tbody",bg.name,bg.id,"body");
bj=M("tfoot",bg.name,bg.id,"foot");bh=M("thead",bg.name,bg.id,"head");
if(bg.scriptTab){var bd=ao(bg);ba=w("table","scripttable",bg.name,bg.id,"main");
var a8=w("th","",bg.name,bg.id,"thead_sel");a8.appendChild(bd.selAll);
var bf=w("td","",bg.name,bg.id,"tfoot_sel");var a7=w("th","",bg.name,bg.id,"thead_en");
var be=w("td","",bg.name,bg.id,"tfoot_en");be.setAttribute("colspan","9");
be.appendChild(bd.actionBox);var a6=w("th","settingsth",bg.name,bg.id,"thead_name");
a6.textContent=p.getMessage("Name");var aX=w("th","settingsth",bg.name,bg.id,"thead_ver");
aX.textContent=p.getMessage("Version");var aW=w("th","settingsth",bg.name,bg.id,"thead_type");
aW.textContent=p.getMessage("Type");var aU=w("th","settingsth",bg.name,bg.id,"thead_sync");
aU.textContent="";var a5=w("th","settingsth",bg.name,bg.id,"thead_sites");
a5.width="25%";a5.textContent=p.getMessage("Sites");
var a4=w("th","settingsth",bg.name,bg.id,"thead_features");
a4.textContent=p.getMessage("Features");var a3=w("th","settingsth",bg.name,bg.id,"thead_edit");
a3.textContent=p.getMessage("Homepage");var a1=w("th","settingsth",bg.name,bg.id,"thead_updated");
a1.textContent=p.getMessage("Last_Updated");var a0=w("th","settingsth",bg.name,bg.id,"thead_sort");
a0.textContent=p.getMessage("Sort");var aZ=w("th","settingsth",bg.name,bg.id,"thead_del");
aZ.textContent=p.getMessage("Delete");var aY=function(){if(K.sync_enabled){aU.textContent=p.getMessage("Imported")
}};R.push(aY);bb=bb.concat([a8,a7,a6,aX,aW,aU,a5,a4,a3,a1,a0,aZ]);
aV=w("tr","settingstr filler",bg.name,bg.id,"filler");
for(var bc=0;bc<bb.length;bc++){aV.appendChild(bb[bc])
}a9=a9.concat([bf,be]);bi=w("tr","settingstr filler",bg.name,bg.id,"footer");
for(var bc=0;bc<a9.length;bc++){bi.appendChild(a9[bc])
}var a2=w("td","settingstd filler",bg.name,bg.id,"filler_td"+bg.id);
aV.appendChild(a2);bh.appendChild(aV);bj.appendChild(bi)
}else{ba=w("table","settingstable",bg.name,bg.id,"main");
aV=w("tr","settingstr filler",bg.name,bg.id,"filler");
bk.appendChild(aV)}ba.appendChild(bh);ba.appendChild(bk);
ba.appendChild(bj);return{table:ba,head:bh,body:bk,foot:bj}
};var ay=function(aV){if(aV.once){if(a[aV.msg]){return true
}else{a[aV.msg]=true}}var aW=confirm(aV.msg);var aU={};
if(aW&&aV.ok){aU=aV.ok}else{if(!aW&&aV.cancel){aU=aV.cancel
}}if(aV.ok||aV.cancel){aW=true}if(aU.url){chrome.extension.sendMessage({method:"openInTab",url:aU.url},function(aX){})
}return aW};var ax=null;var aD=null;var aB=false;for(var aH in aF){var aL=aF[aH];
if(d){console.log("options: process Item "+aL.name)
}var V=w("tr","settingstr",aL.name,aL.id,"outer");if(aL.divider){V=null
}else{var aS=M("td",aL.name,aL.id,"0");V.appendChild(aS);
var au=M("td",aL.name,aL.id,"1");if(aL.image){au.setAttribute("class","imagetd");
au.appendChild(W.createImage(aL.image,aL.name,aL.id))
}var ar=w("td","settingstd",aL.name,aL.id,"2");if(aL.option){K[aL.id]=aL.checkbox?aL.enabled:aL.value
}if(aL.checkbox){var aG=function(){enableScript(this.key,this.checked)
};var aI=function(){var aU=true;if(this.warning){aU=ay(this.warning);
if(!aU){this.checked=!this.checked}}if(aU){D(this.key,this.checked,this.reload);
if(this.reload){window.location.reload()}}};if(ax&&aB){aG=null;
aI=null}var aA=W.createCheckbox(aL.name,aL,aL.option?aI:aG);
if(ax){ax.appendChild(aA.elem);V=null}else{ar.appendChild(aA.elem)
}aA.elem.setAttribute("style",(aL.level>K.configMode)?aa.staticVars.invisible:aa.staticVars.visible)
}else{if(aL.button){var aI=function(){var aU=true;if(this.warning){aU=ay(this.warning)
}if(aU){h(this.key,true,this.ignore,this.reload)}};
var aA=W.createButton(aL.name,aL,aI);if(ax){ax.appendChild(aA);
V=null}else{ar.appendChild(aA)}aA.setAttribute("style",(aL.level>K.configMode)?aa.staticVars.invisible:aa.staticVars.visible)
}else{if(aL.input){var aA=W.createTextarea(aL.name,aL);
if(ax){ax.appendChild(aA.elem);if(aL.hint){var aM=M("span",aL.name,aL.id,"hint");
aM.textContent=aL.hint;aA.elem.appendChild(aM)}V=null;
aB=true}else{ar.appendChild(aA.elem)}aA.elem.setAttribute("style",(aL.level>K.configMode)?aa.staticVars.invisible:aa.staticVars.visible)
}else{if(aL.text){var aA=W.createInput(aL.name,aL);
if(ax){ax.appendChild(aA.elem);if(aL.hint){var aM=w("span","hint",aL.name,aL.id,"hint");
aM.textContent=aL.hint;aA.elem.appendChild(aM)}V=null;
aB=true}else{ar.appendChild(aA.elem)}aA.elem.setAttribute("style",(aL.level>K.configMode)?aa.staticVars.invisible:aa.staticVars.visible)
}else{if(aL.password){var aA=W.createPassword(aL.name,aL);
if(ax){ax.appendChild(aA.elem);V=null;aB=true}else{ar.appendChild(aA.elem)
}aA.elem.setAttribute("style",(aL.level>K.configMode)?aa.staticVars.invisible:aa.staticVars.visible)
}else{if(aL.select){var aG=function(){var aU=true;if(this.warning){aU=ay(this.warning);
if(!aU){this.value=this.oldvalue}}if(aU){D(this.key,this.value,this.reload);
if(this.reload){window.location.reload()}}};if(ax&&aB){aG=null;
if(aL.enabler){aG=function(){var aW=document.getElementsByName("enabled_by_"+this.key);
var aU=(this.selectedIndex<this.options.length)?this.options[this.selectedIndex]:this.options[0];
var aV=aU.getAttribute("enables");var aX=aV?JSON.parse(aV):{};
aa.forEach(aW,function(aY){if(aX[aY.key]===undefined||aX[aY.key]==1){aY.setAttribute("style",aa.staticVars.visible)
}else{aY.setAttribute("style",aa.staticVars.invisible)
}})}}}var aA=W.createDropDown(aL.name,aL,aL.select,aG);
if(ax){ax.appendChild(aA.elem);V=null}else{ar.appendChild(aA.elem)
}aA.elem.setAttribute("style",(aL.level>K.configMode)?aa.staticVars.invisible:aa.staticVars.visible);
if(ax&&aL.enabler){var az=function(){var aU=aG;var aV=aA;
R.push(function(){aU.apply(aV.select,[])})};az()}}else{if(aL.url){var aR=M("a",aL.name,aL.id);
aR.href="javascript://nop/";aR.url=aL.url;aR.newtab=aL.newtab;
if(!aR.inserted){var aG=function(){ah(this.url,this.newtab)
};aR.addEventListener("click",aG)}aR.textContent=aL.name;
if(ax){ax.appendChild(aR);V=null}else{ar.setAttribute("colspan","2");
ar.appendChild(aR)}}else{if(aL.heading){var aM=M("span",aL.name,aL.id);
aM.textContent=aL.name;aO=aw(aL);aT=M("div",aL.name,aL.id,"tab_content");
aT.appendChild(aO.table);V=null;var aq=aN.appendTab(aa.createUniqueId(aL.name,aL.id),aM,aT)
}else{if(aL.section){if(ax&&aB){var aQ=M("input",ax.name,ax.id,"Save");
if(!aQ.inserted){aQ.type="button";aQ.section=ax;aQ.value=p.getMessage("Save");
var aE=function(){var aU=Array.prototype.slice.call(this.section.getElementsByTagName("textarea"));
var aY=function(a4){aa.forEach(a4,function(a5){aU.push(a5)
})};aY(document.evaluate('//div[@id="'+this.section.id+'"]//input',this.section,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null));
aY(document.evaluate('//div[@id="'+this.section.id+'"]//select',this.section,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null));
for(var aV=0;aV<aU.length;aV++){var aW=null;var aZ=aU[aV];
var a2=aZ.key;if(aZ.tagName.toLowerCase()=="textarea"){if(aZ.array){var a1=aZ.value.split("\n");
var aX=[];for(var a3=0;a3<a1.length;a3++){if(a1[a3]&&a1[a3].trim()!=""){aX.push(a1[a3])
}}aW=aX}else{aW=aZ.value}}else{if(aZ.getAttribute("type")=="checkbox"){aW=aZ.checked
}else{if(aZ.getAttribute("type")=="select"){var a0=0;
if(aZ.selectedIndex>=0&&aZ.selectedIndex<aZ.options.length){a0=aZ.selectedIndex
}aW=aZ[a0]?aZ[a0].value:aZ.options[0].value}else{if(aZ.getAttribute("type")=="button"){}else{aW=aZ.value
}}}}if(a2){D(a2,aW)}}};aQ.addEventListener("click",aE,false)
}ax.appendChild(aQ);V=null}if(aL.endsection){continue
}var aE=w("div","section",aL.name,aL.id);var aM=w("div","section_head",aL.name,aL.id,"head");
var aP=w("div","section_content",aL.name,aL.id,"content");
aM.textContent=aL.name;aE.appendChild(aM);aE.appendChild(aP);
if(aD==null){aD=w("div","section_table","","");ar.appendChild(aD);
ar.setAttribute("class","section_td")}else{V=null;ar=null
}aB=false;aD.appendChild(aE);aE.setAttribute("style",(aL.level>K.configMode)?aa.staticVars.invisible:aa.staticVars.visible);
ax=aP;if(aL.needsave){aB=true}au=null}else{if(aL.menucmd){var aK=M("span",aL.name,aL.id,false,true);
aK.textContent=aL.name;ar.setAttribute("colspan","2");
ar.appendChild(aK)}else{if(aL.userscript||aL.nativeScript||aL.user_agent){ar.setAttribute("colspan","2");
var aJ=q(aL,V,aN);V.setAttribute("class","scripttr");
if(aL.nnew){V.setAttribute("style","display: none;")
}for(var aC=0;aC<aJ.length;aC++){V.appendChild(aJ[aC])
}if(aL.userscript||aL.user_agent){at.push({script:V,pos:aL.position,posof:aL.positionof})
}au=null}else{if(aL.version){ai=aL.value;V=null;var av=w("div","version","version","version");
av.textContent="v"+ai+" by Jan Biniok"}else{var aK=M("span",aL.name,aL.id);
aK.textContent=aL.name;ar.setAttribute("colspan","2");
ar.appendChild(aK)}}}}}}}}}}}}if(V){if(au){V.insertBefore(au,aS)
}if(ar){V.appendChild(ar,aS)}V.removeChild(aS);var aP=V.getAttribute("class");
var aM=" hide";if(aL.visible===false){aP+=aM}else{aP=aP.replace(aM,"")
}V.setAttribute("class",aP)}}if(aO&&V){aO.body.appendChild(V)
}}c(at);R.push(ak.multiselect["single_click"])};var T=function(aQ){var aP={name:"utils",id:"utils"};
var aR=M("div",aP.name,aP.id,"tab_util_h");aR.textContent=p.getMessage("Utilities");
var au=M("div",aP.name,aP.id,"tab_util");var aw=aQ.appendTab(aa.createUniqueId(aP.name,aP.id),aR,au);
aw.show();var ax=w("div","tv_util",aP.name,aP.id,"tab_util_cont");
var aA=function(){var aX={created_by:"Tampermonkey",version:"1",scripts:[]};
for(var aW in ab){var aY=ab[aW];if((aY.userscript||aP.user_agent)&&aY.id&&!aY.system){var aV={name:aY.name,options:aY.options,enabled:aY.enabled,position:aY.position};
if(aY.file_url&&aY.file_url.trim()!=""){aV.file_url=aY.file_url
}if(aY.code&&aY.code.trim()!=""){aV.source=al.Base64.encode(al.UTF8.encode(aY.code));
aX.scripts.push(aV)}else{console.log("options: Strange script: "+aY.name)
}}}return JSON.stringify(aX)};var aM=function(aV){var a0=false;
var aY=0;if(aV.trim()!=""){var aZ=null;try{aZ=JSON.parse(aV)
}catch(a4){var a3="<body>";var a2="</body>";if(aV.search(a3)!=-1){var a6=aV.indexOf(a3);
var a5=aV.lastIndexOf(a2);if(a6!=-1&&a5!=-1){aV=aV.substr(a6+a3.length,a5-(a6+a3.length));
aM(aV)}}else{aa.alert(p.getMessage("Unable_to_parse_this_"))
}return}var a1=function(a8){try{var a7=a8.name;var ba=al.UTF8.decode(al.Base64.decode(a8.source));
var a9=a8.file_url||a8.update_url;if(ba&&ba.trim()!=""){var bc=function(bd){if(bd.installed){var be=(a8.enable==undefined)?a8.enabled:a8.enable;
var bf=a8.options;bf.enabled=be;bf.position=a8.position;
l(a8.name,bf,false)}if(--aY==0){C(null,false,null,true,true)
}};aY++;chrome.extension.sendMessage({method:"saveScript",name:a7,code:ba,reload:false,file_url:a9},bc)
}}catch(bb){a0=true;console.log("options: Error while importing script "+aX.name)
}};var aW=aZ.scripts;for(var aX=aW.length-1;aX>=0;aX--){a1(aW[aX])
}if(a0){aa.alert(p.getMessage("An_error_occured_during_import_"))
}}};var aC=function(aV){var aW="";switch(aV.code){case FileError.QUOTA_EXCEEDED_ERR:aW="QUOTA_EXCEEDED_ERR";
break;case FileError.NOT_FOUND_ERR:aW="NOT_FOUND_ERR";
break;case FileError.SECURITY_ERR:aW="SECURITY_ERR";
break;case FileError.INVALID_MODIFICATION_ERR:aW="INVALID_MODIFICATION_ERR";
break;case FileError.INVALID_STATE_ERR:aW="INVALID_STATE_ERR";
break;default:aW="Unknown Error";break}aa.alert("Error: "+aW)
};var aF=function(){aM(aD.value)};var aJ=function(){function aV(aW){aW.root.getFile("scripts.tmx",{},function(aX){aX.file(function(aZ){var aY=new FileReader();
aY.onloadend=function(a0){aM(this.result)};aY.readAsText(aZ)
},aC)},aC)}window.requestFileSystem(window.PERSISTENT,1024*1024,aV,aC)
};var aN=function(){var aV=aA();function aW(aX){aX.root.getFile("scripts.tmx",{create:true},function(aY){aY.createWriter(function(aZ){aZ.onwriteend=function(a1){console.log("Write completed.")
};aZ.onerror=function(a1){console.log("Write failed: "+a1.toString())
};var a0=new Blob([aV],{type:"text/plain"});aZ.write(a0)
},aC)},aC)}window.requestFileSystem(window.PERSISTENT,1024*1024,aW,aC)
};var aG=function(){var aV=aA();var aW=new Blob([aV],{type:"text/plain"});
saveAs(aW,"tmScripts.txt")};var aI=function(){aD.value=aA()
};var aO=W.createButton(aP.name,aP.id+"_i_ta",p.getMessage("Import_from_Textarea"),aF);
var aK=W.createButton(aP.name,aP.id+"_i_ls",p.getMessage("Import_from_SandboxFS"),aJ);
var ay=M("input",aP.name,aP.id+"_i_file","file");var at=function(aX){var aZ=aX.target.files;
var a1=[];var aW=function(){aM(a1.pop())};for(var aY=0,a0;
a0=aZ[aY];aY++){var aV=new FileReader();aV.onload=(function(a2){return function(a3){a1.push(a3.target.result);
window.setTimeout(aW,10)}})(a0);aV.readAsText(a0)}};
if(!ay.inserted){ay.type="file";ay.addEventListener("change",at,false)
}var ar=W.createButton(aP.name,aP.id+"_e_ta",p.getMessage("Export_to_Textarea"),aI);
var aE=W.createButton(aP.name,aP.id+"_e_doc",p.getMessage("Export_to_file"),aG);
var aT=W.createButton(aP.name,aP.id+"_e_ls",p.getMessage("Export_to_SandboxFS"),aN);
var aD=w("textarea","importta",aP.name,aP.id,"ta");
var aq=w("div","section",aP.name,aP.id,"ta");var aU=w("div","section_head",aP.name,aP.id,"head_ta");
var az=w("div","section_content",aP.name,aP.id,"content_ta");
aU.textContent=p.getMessage("TextArea");az.appendChild(ar);
az.appendChild(aO);az.appendChild(aD);aq.appendChild(aU);
aq.appendChild(az);var aL=w("div","section",aP.name,aP.id,"sb");
var aH=w("div","section_head",aP.name,aP.id,"head_sb");
var aS=w("div","section_content",aP.name,aP.id,"content_sb");
aH.textContent=p.getMessage("SandboxFS");aL.appendChild(aH);
aL.appendChild(aS);aS.appendChild(aT);aS.appendChild(aK);
var av=w("div","section",aP.name,aP.id,"fi");var V=w("div","section_head",aP.name,aP.id,"head_fi");
var aB=w("div","section_content",aP.name,aP.id,"content_fi");
V.textContent=p.getMessage("File");av.appendChild(V);
av.appendChild(aB);aB.appendChild(aE);aB.appendChild(ay);
ax.appendChild(av);ax.appendChild(aL);ax.appendChild(aq);
aa.forEach([aL,aq],function(aV){var aW=" hide";var aX=aV.getAttribute("class");
if(K.configMode<50){aX+=aW}else{aX=aX.replace(aW,"")
}aV.setAttribute("class",aX)});au.appendChild(ax)};
var S=function(ay,V){u=V;if(!ay){console.log("options: items is empty!");
return}ab=ay;var ar=document.getElementById("options");
var au=w("div","main_container p100100","options","main");
if(ar){var aq=ar.parentNode;aq.removeChild(ar);aq.appendChild(au);
document.body.setAttribute("class","main")}if(d){console.log("options: head")
}var aB=w("div","head_container","opt","head_container");
var av=w("div","tv_container","opt","tv_container");
var az=M("a","head_link","fire","head_link");az.href="http://tampermonkey.net";
az.target="_blank";var aC=w("div","float margin4","fire","head1");
var at=w("img","banner","fire");at.src=chrome.extension.getURL("images/icon128.png");
var aA=w("div","float head margin4","fire","head2");
var aE=M("div","fire");var aw=w("div","version","version","version");
aw.textContent=" by Jan Biniok";var aD=M("div","search","box","");
aE.textContent="Tampermonkey";aC.appendChild(at);aA.appendChild(aE);
aA.appendChild(aw);az.appendChild(aC);az.appendChild(aA);
aB.appendChild(az);aB.appendChild(aD);au.appendChild(aB);
au.appendChild(av);if(d){console.log("options: tabView")
}var ax=G.create("_main",av);if(d){console.log("options: itemsToMenu")
}P(ay,ax);if(d){console.log("options: utilTab")}T(ax);
u=null;t=true;A.hide();an()};var af=function(aQ,ar,au){var aJ=ar.item;
var aB=aJ.id+ar.id;var aP=(au?"orig_":"use_")+ar.id;
var ay=function(aR){return"select_"+aa.createUniqueId(aR,aJ.id)+"_sel1"
};var az=w("div","cludes",aQ,aB,"cb1");if(document.getElementById(ay(aP))){return{elem:az}
}var aI=M("span",aJ.name,aB,"cb2");if(au){var av=function(){if(this.type=="checkbox"){C(this.name,this.key,!this.oldvalue)
}};var aq="merge_"+ar.id;var aC=(aJ.options&&aJ.options.override&&aJ.options.override[aq])?true:false;
var aF=W.createCheckbox(aQ,{id:aq,name:aJ.name,enabled:aC},av);
aI.appendChild(aF.elem)}else{aI.textContent=aQ}az.title=aJ.desc?aJ.desc:"";
var V=(aJ.options&&aJ.options.override&&aJ.options.override[aP])?aJ.options.override[aP]:[];
var aG=w("select","cludes",aP,aJ.id,"sel1");aG.setAttribute("size","6");
for(var aD=0;aD<V.length;aD++){var ax=document.createElement("option");
ax.value=ax.text=V[aD];aG.appendChild(ax)}az.appendChild(aI);
az.appendChild(aG);var aL=function(){var aR=ay("use_"+(ar.id=="excludes"?"includes":"excludes"));
var aS=document.getElementById(aR);var aT=aG.options[aG.selectedIndex];
if(aT&&!aS.querySelector('option[value="'+aT.value+'"]')){aS.appendChild(aT.cloneNode(true));
aM()}};var at=function(){var aR=prompt(p.getMessage("Enter_the_new_rule"));
if(aR){var aS=document.createElement("option");aS.value=aS.text=aR.trim();
aG.appendChild(aS);aM()}};var aN=function(){var aS=aG.options[aG.selectedIndex];
if(!aS){return}var aR=prompt(p.getMessage("Enter_the_new_rule"),aS.value);
if(aR){aS.value=aS.text=aR.trim();aM()}};var aA=function(){var aR=aG.options[aG.selectedIndex];
if(!aR){return}aR.parentNode.removeChild(aR);aM()};
var aE=function(aS){var aR=[];for(var aT=0;aT<aS.options.length;
aT++){aR.push(aS.options[aT].value)}return aR};var aM=function(){var aR={includes:aE(document.getElementById(ay("use_includes"))),matches:aE(document.getElementById(ay("use_matches"))),excludes:aE(document.getElementById(ay("use_excludes")))};
l(aJ.name,aR);return true};if(au){var aw=M("button",aJ.name,aB,"btn1");
aw.innerHTML=p.getMessage("Add_as_0clude0",au);aw.addEventListener("click",aL,false);
az.appendChild(aw)}else{var aO=M("button",aJ.name,aB,"btn2");
aO.innerHTML=p.getMessage("Add")+"...";aO.addEventListener("click",at,false);
az.appendChild(aO);var aH=M("button",aJ.name,aB,"btn3");
aH.innerHTML=p.getMessage("Edit")+"...";aH.addEventListener("click",aN,false);
az.appendChild(aH);var aK=M("button",aJ.name,aB,"btn4");
aK.innerHTML=p.getMessage("Remove");aK.addEventListener("click",aA,false);
az.appendChild(aK)}return{elem:az}};var c=function(ar){var av=function(aB,aA){if(aB.tagName==aA){return aB
}else{return(aB.parentNode?av(aB.parentNode,aA):null)
}};var aq=function(aA){var aB=function(aD,aC){return aD.position-aC.position
};aA.sort(aB);return aA};var az=null;var at=[];var aw=0;
for(var au=0;au<ar.length;au++){var ax=ar[au].script;
var ay=av(ax,"TR");if(ay){var V=av(ay,"TBODY");if(!az){az=V
}else{if(az!=V){console.log("options: different parents?!?!")
}}aw++;at.push({tr:ay,position:ax.pos?ax.pos:(1000+aw)});
ay.inserted=false;ay.parentNode.removeChild(ay)}else{console.log("options: unable to sort script at pos "+ax.pos)
}}at=aq(at);for(var au=0;au<aw;au++){az.appendChild(at[au].tr)
}};var I={};var ae=function(au,aJ,at,aB,aC){var aE=w("div","",aJ.name,aJ.id,"script_tab_head");
var ar=aE.inserted;var az=w("div","heading",aJ.name,"heading");
var aG=w("img","nameNicon64",aJ.name,"heading_icon");
var V=aJ.icon64?aJ.icon64:aJ.icon;aG.src=V;var aI=w("div","nameNname64",aJ.name,"heading_name");
aI.textContent=aJ.name;if(V){az.appendChild(aG)}az.appendChild(aI);
var aD=w("div","author",aJ.name,"author");if(aJ.author){aD.textContent="by "+aJ.author
}else{if(aJ.copyright){aD.innerHTML="&copy; ";aD.textContent+=aJ.copyright
}}var aN=w("table","noborder p100100",aJ.name,"table");
var aQ=w("tr","script_tab_head",aJ.name,"tr1");var aP=w("tr","details",aJ.name,"tr2");
var ay=w("td","",aJ.name,"td1");var aL=w("td","",aJ.name,"td2");
az.appendChild(aD);aE.appendChild(az);ay.appendChild(aE);
aQ.appendChild(ay);aP.appendChild(aL);aN.appendChild(aQ);
aN.appendChild(aP);aB.appendChild(aN);var aK={tv:"tv tv_alt",tv_table:"tv_table tv_table_alt",tr_tabs:"tr_tabs tr_tabs_alt",tr_content:"tr_content tr_content_alt",td_content:"td_content td_content_alt",td_tabs:"td_tabs td_tabs_alt",tv_tabs_align:"tv_tabs_align tv_tabs_align_alt",tv_tabs_fill:"tv_tabs_fill tv_tabs_fill_alt",tv_tabs_table:"tv_tabs_table tv_tabs_table_alt",tv_contents:"tv_contents tv_contents_alt",tv_tab_selected:"tv_tab tv_selected tv_tab_alt tv_selected_alt",tv_tab_close:"",tv_tab:"tv_tab tv_tab_alt",tv_content:"tv_content tv_content_alt"};
var ax=G.create("_details"+aa.createUniqueId(aJ.name,aJ.id),aL,aK);
var aF=ag(aJ,ax,aC);var aA=!aJ.id||aJ.system?{}:z(aJ,ax);
if(ar){return n["tab"+aJ.name]}var aw=function(aS){var aR=false;
if(aS.type!="keydown"){return}if(aS.keyCode==27){if(K.editor_keyMap=="windows"){if(au.isSelected()){window.setTimeout(aC,1)
}aR=true}}if(aR){aS.stopPropagation();aS.preventDefault();
return false}};var aq=function(aS){var aR=false;if(aA.beforeClose){aR|=aA.beforeClose(aS)
}if(aF.beforeClose){aR|=aF.beforeClose(aS)}return aR&&!aJ.nnew
};var aH=function(){if(aA.onShow){aA.onShow()}if(aF.onShow){aF.onShow()
}window.addEventListener("keydown",aw,true)};var av=function(aR){if(aA.onClose){if(aA.onClose(aR)){return true
}}if(aF.onClose){if(aF.onClose(aR)){return true}}window.removeEventListener("keydown",aw,true)
};var aO=function(){if(aA.onSelect){if(aA.onSelect()){return true
}}if(aF.onClose){if(aF.onSelect()){return true}}};var aM={onShow:aH,onClose:av,onSelect:aO,beforeClose:aq};
n["tab"+aJ.name]=aM;return aM};var z=function(a6,aH){var aG=M("div",a6.name,a6.id,"script_setting_h");
var a0=aG.inserted;aG.textContent=p.getMessage("Settings");
var aI=M("div",a6.name,a6.id,"script_settings_c");var aQ=function(){if(this.type=="checkbox"||this.type=="button"){C(this.name,this.key,!this.oldvalue)
}else{if(this.type=="text"||this.type=="textarea"||this.type=="select-one"){var bc=this.value;
if(this.valtype==="native"){if(bc==="undefined"){bc=undefined
}else{try{bc=JSON.parse(bc)}catch(bb){}}}C(this.name,this.key,bc)
}}};var a1=W.createPosition(p.getMessage("Position_")+": ",{id:"position",name:a6.name,pos:a6.position,posof:a6.positionof},aQ);
var a5=W.createScriptStartDropDown(p.getMessage("Run_at")+": ",{id:"run_at",name:a6.name,value:a6.run_at},aQ);
var at=W.createDropDown(p.getMessage("No_frames"),{id:"noframes",name:a6.name,value:a6.noframes},[{name:p.getMessage("Yes"),value:true},{name:p.getMessage("No"),value:false},{name:p.getMessage("Default"),value:null}],aQ);
var au=af(p.getMessage("Original_includes"),{id:"includes",item:a6},p.getMessage("User_excludes"));
var aq=af(p.getMessage("Original_matches"),{id:"matches",item:a6},p.getMessage("User_excludes"));
var ax=af(p.getMessage("Original_excludes"),{id:"excludes",item:a6},p.getMessage("User_includes"));
var aU=w("div","clear",a6.name,a6.id,"clear");var ay=af(p.getMessage("User_includes"),{id:"includes",item:a6});
var av=af(p.getMessage("User_matches"),{id:"matches",item:a6});
var aA=af(p.getMessage("User_excludes"),{id:"excludes",item:a6});
var aZ=W.createCheckbox(p.getMessage("Apply_compatibility_options_to_required_script_too"),{id:"compatopts_for_requires",name:a6.name,enabled:a6.compatopts_for_requires},aQ);
var aM=W.createCheckbox(p.getMessage("Convert_CDATA_sections_into_a_chrome_compatible_format"),{id:"compat_metadata",name:a6.name,enabled:a6.compat_metadata},aQ);
var aT=W.createCheckbox(p.getMessage("Replace_for_each_statements"),{id:"compat_foreach",name:a6.name,enabled:a6.compat_foreach},aQ);
var aN=W.createCheckbox(p.getMessage("Fix_for_var_in_statements"),{id:"compat_forvarin",name:a6.name,enabled:a6.compat_forvarin},aQ);
var aF=W.createCheckbox(p.getMessage("Convert_Array_Assignements"),{id:"compat_arrayleft",name:a6.name,enabled:a6.compat_arrayleft},aQ);
var V=W.createCheckbox(p.getMessage("Add_toSource_function_to_Object_Prototype"),{id:"compat_prototypes",name:a6.name,enabled:a6.compat_prototypes},aQ);
var aR=[aZ,aM,aT,aN,aF,V];var aE=w("div","section",a6.name,a6.id,"ta_opt");
var aD=w("div","section_head",a6.name,a6.id,"head_ta_opt");
var aJ=w("div","section_content",a6.name,a6.id,"content_ta_opt");
aD.textContent=p.getMessage("Settings");aE.appendChild(aD);
aE.appendChild(aJ);var aK=w("div","section",a6.name,a6.id,"ta_cludes");
var aY=w("div","section_head",a6.name,a6.id,"head_ta_cludes");
var aP=w("div","section_content",a6.name,a6.id,"content_ta_cludes");
aY.textContent=p.getMessage("Includes_Excludes");aK.appendChild(aY);
aK.appendChild(aP);var az=w("div","section",a6.name,a6.id,"ta_compat");
var aL=w("div","section_head",a6.name,a6.id,"head_ta_compat");
var aw=w("div","section_content",a6.name,a6.id,"content_ta_compat");
aL.textContent=p.getMessage("GM_compat_options_");az.appendChild(aL);
az.appendChild(aw);aJ.appendChild(a1);if(!a6.user_agent){aJ.appendChild(a5)
}aJ.appendChild(at.elem);aP.appendChild(au.elem);aP.appendChild(aq.elem);
aP.appendChild(ax.elem);aP.appendChild(aU);aP.appendChild(ay.elem);
aP.appendChild(av.elem);aP.appendChild(aA.elem);var a7=M("span",a6.name,a6.id);
a7.textContent=p.getMessage("Settings");var aB=M("div",a6.name,a6.id,"tab_content_settings");
aB.appendChild(aE);aB.appendChild(aK);if(!a6.user_agent){for(var aV=0;
aV<aR.length;aV++){aw.appendChild(aR[aV].elem)}if(a6.awareOfChrome){for(var a2 in aR){aR[a2].input.setAttribute("disabled","disabled");
aR[a2].elem.setAttribute("title",p.getMessage("This_script_runs_in_Chrome_mode"))
}}aB.appendChild(az)}var aW={name:a6.name,id:"comment",value:a6.options.comment};
var aX=W.createTextarea(null,aW);aX.elem.setAttribute("class","script_setting_wrapper");
var a9=function(){aQ.apply(aX.textarea,[])};var aO=M("div",a6.name,a6.id,"save");
var aC=W.createButton(a6.name,a6.id,p.getMessage("Save"),a9);
aO.appendChild(aC);var aS=w("div","section",a6.name,a6.id,"ta_comment");
var ar=w("div","section_head",a6.name,a6.id,"head_ta_comment");
var a8=w("div","section_content",a6.name,a6.id,"content_ta_comment");
ar.textContent=p.getMessage("Comment");aS.appendChild(ar);
aS.appendChild(a8);a8.appendChild(aX.elem);a8.appendChild(aO);
aB.appendChild(aS);aI.appendChild(aB);var a4=aH.appendTab("script_settings_tab"+aa.createUniqueId(a6.name,a6.id),aG,aI);
if(a0){return n["settings"+a6.name]}var a3=function(){var bb=false;
if(au.beforeClose){bb|=au.beforeClose()}if(aq.beforeClose){bb|=aq.beforeClose()
}if(ax.beforeClose){bb|=ax.beforeClose()}if(ay.beforeClose){bb|=ay.beforeClose()
}if(av.beforeClose){bb|=av.beforeClose()}if(aA.beforeClose){bb|=aA.beforeClose()
}return bb};var ba={beforeClose:a3};n["settings"+a6.name]=ba;
return ba};var ag=function(aQ,aw,aB){var aK=w("tr","editor_container p100100",aQ.name,aQ.id,"container");
if(!u&&aK.editor){if(I[aQ.id]){I[aQ.id]=false;return[]
}else{if(!aQ.nnew){aa.alert(p.getMessage("Script_modified_in_background"));
return[]}}}var aM=null;var at=M("div",aQ.name,aQ.id,"script_editor_h");
var aq=at.inserted;at.textContent=p.getMessage("Editor");
var ax=M("div",aQ.name,aQ.id,"script_editor_c");var az=w("tr","editormenubar",aQ.name,aQ.id,"container_menu");
var aT=w("table","editor_container_o p100100 noborder",aQ.name,aQ.id,"container_o");
aT.appendChild(az);aT.appendChild(aK);ax.appendChild(aT);
var aU=function(aX){var aY=aK.editor&&K.editor_enabled?aK.editor.mirror.getValue():aJ.value;
var aZ=new Blob([aY],{type:"text/plain"});saveAs(aZ,aQ.name+".tamper.js")
};var aA=function(aX,aY){if(aM){if(aM(aY)){I[aQ.id]=true;
if(aK.editor&&K.editor_enabled){aK.editor.changed=false
}}}};var aC=function(aX,aY){if(aB){aB(aY)}};var aG=function(){var aX=null;
aX=function(a1){if(a1.cleaned){aC()}};var a0=aL.input?aL.input.oldvalue:"";
var aZ=aL.input?aL.input.value:"";var aY={old_url:a0,new_url:aZ,clean:true,reload:true};
x(aQ.name,null,aY,aX)};var aD=function(){var aX=confirm(p.getMessage("Really_reset_all_changes_"));
if(aX){if(aK.editor&&K.editor_enabled){aK.editor.mirror.setValue(aQ.code)
}else{aJ.textContent=aQ.code}}};var aW=function(){A.wait();
var aX=function(){O.run(aK.editor);A.hide()};window.setTimeout(aX,1)
};var aP=W.createImageButton(aQ.name,"save_to_disk",p.getMessage("Save_to_disk"),chrome.extension.getURL("images/harddrive2.png"),aU);
var V=W.createImageButton(aQ.name,"save",p.getMessage("Save"),chrome.extension.getURL("images/filesave.png"),aA);
var aE=W.createImageButton(aQ.name,"cancel",p.getMessage("Editor_reset"),chrome.extension.getURL("images/editor_cancel.png"),aD);
var ay=W.createImageButton(aQ.name,"reset",p.getMessage("Full_reset"),chrome.extension.getURL("images/script_cancel.png"),aG);
var aS=W.createImageButton(aQ.name,"close_script",p.getMessage("Close"),chrome.extension.getURL("images/exit.png"),aC);
var aF=W.createImageButton(aQ.name,"lint_script",p.getMessage("Run_syntax_check"),chrome.extension.getURL("images/check.png"),aW);
var aL=W.createInput(p.getMessage("Update_URL_"),{id:"file_url",name:aQ.name,value:aQ.file_url});
aL.input.setAttribute("class","updateurl_input");aL.elem.setAttribute("class","updateurl");
var aJ=w("textarea","editorta",aQ.name,aQ.id);aJ.setAttribute("wrap","off");
var aI=w("td","editor_outer",aQ.name,aQ.id,"edit");
var aO=w("div","editor",aQ.name,aQ.id,"edit");var ar=w("div","editormenu",aQ.name,aQ.id,"editormenu");
aI.appendChild(aO);az.appendChild(ar);az.appendChild(aL.elem);
if(!aK.inserted){aO.appendChild(aJ);aK.appendChild(aI)
}if(!aQ.system){aM=function(a3){var aY=true;if(K.showFixedSrc&&!aQ.user_agent){aY=confirm(p.getMessage("Do_you_really_want_to_store_fixed_code_",p.getMessage("Show_fixed_source")))
}var a2=aK.editor&&K.editor_enabled?aK.editor.mirror.getValue():aJ.value;
if(aY){var aX=function(a4){if(a4.installed&&(aQ.nnew||a4.renamed)){aC()
}else{aK.editor.changed&=!a4.installed}};var a1=aL.input?aL.input.oldvalue:"";
var a0=aL.input?aL.input.value:"";var aZ={old_url:a1,new_url:a0,clean:false,reload:true,force:a3};
x(aQ.name,a2,aZ,aX)}return aY};ar.appendChild(aP);ar.appendChild(V);
ar.appendChild(aE)}if(!aQ.nnew){ar.appendChild(ay)}ar.appendChild(aS);
if(!aQ.system&&K.editor_enabled){ar.appendChild(aF)
}var au=aw.appendTab("script_editor_tab"+aa.createUniqueId(aQ.name,aQ.id),at,ax);
if(aq){return n["editor"+aQ.name]}var aV=function(){if(aK.editor){aK.editor.mirror.refresh()
}};var aN=function(){var aX=ax.getElementsByTagName("textarea");
if(aX.length){var aY=aX[0];if(!aK.editor){var aZ=function(){if(aK.editor){aK.editor.changed=true
}};if(K.editor_enabled){var a0=aY.parentNode;var a1={search:p.getMessage("Search"),replace:p.getMessage("Replace"),jump:p.getMessage("Jump_to_line"),macro:p.getMessage("Insert_constructor"),reindentall:p.getMessage("Auto_Indent_all")};
a0.removeChild(aY);aK.editor=new MirrorFrame(a0,{value:aQ.code,indentUnit:Number(K.editor_indentUnit),indentWithTabs:K.editor_indentWithTabs=="tabs",smartIndent:K.editor_tabMode!="classic",enterMode:K.editor_enterMode,electricChars:K.editor_electricChars.toString()=="true",lineNumbers:true,extraKeys:{Enter:"newlineAndIndentContinueComment"},keyMap:K.editor_keyMap,gutters:["gutter","CodeMirror-linenumbers"],matchBrackets:true},{save:aA,close:aC,find:function(a2){aK.editor.searchText=aK.editor.search()
},findNext:function(a2){aK.editor.searchText=aK.editor.search(aK.editor.searchText)
},},{change:aZ,blur:aH},a1)}else{aY.value=aQ.code}}}};
var av=function(){var aX=false;if(K.editor_enabled){if(aK.editor){aX|=(aK.editor.changed&&aK.editor.mirror.historySize().undo)
}}else{aX=(aJ.value!=aQ.code)}return aX};var aH=function(){if(K.editor_autoSave&&av()){aM(K.editor_easySave)
}};var aR={onSelect:aV,onShow:aN,onClose:function(aY){var aX=function(){aK.editor=null
};if(av()&&!aY){var aZ=confirm(p.getMessage("There_are_unsaved_changed_"));
if(aZ){aX()}return !aZ}else{aX();return false}}};n["editor"+aQ.name]=aR;
return aR};var q=function(aZ,a2,az){if(!ak[aZ.id]){ak[aZ.id]={}
}var aX;var ay;var aV=aZ.icon&&!aZ.nativeScript;var aU=w("span","script_name"+(aZ.nativeScript?"":" clickable"),aZ.name,aZ.id,"sname");
var aM=w("img","nameNicon16 icon16",aZ.name,aZ.id,"sname_img");
var aq=w("span",aV?"nameNname16":"",aZ.name,aZ.id,"sname_name");
var aY=aZ.homepage?aZ.homepage:(aZ.namespace&&aZ.namespace.search("http://")==0?aZ.namespace:null);
aq.textContent=(aZ.name.length>35?aZ.name.substr(0,35)+"...":aZ.name);
var a0=M("span",aZ.name,aZ.id,"sversion");a0.textContent=aZ.version?aZ.version:"";
if(aV){aM.src=aZ.icon;aU.appendChild(aM)}var aL=[];
var aQ=function(a3,a7,a6,a5){if(!a5){a5="scripttd"}var a4=w("td",a5,a3.name,a3.id,a6);
if(a7){a4.appendChild(a7)}return a4};var aE=function(){if(aX){aX.remove();
aX=null}};var aH=function(){aU.parentNode.removeChild(aU)
};var aN=function(){var a3=function(){for(var a4 in ab){var a5=ab[a4];
if(a5.id==aZ.id&&a5.name==aZ.name){q(a5,a2,az);break
}}};window.setTimeout(a3,1)};var at=function(a4){var a3=true;
if(ay.beforeClose){a3=!ay.beforeClose(a4)}if(ay.onClose&&ay.onClose(a4)){return
}aE();aH();if(a3){aN()}};var aC=function(){if(ay.onSelect&&ay.onSelect()){return
}};var aR=function(){var a3=null;if(aZ.nnew){a3=w("div","head_icon",aZ.name,aZ.id,"details_h");
a3.appendChild(W.createImage(aZ.image,aZ.name,aZ.id,"new_script_head"))
}else{a3=w("div","",aZ.name,aZ.id,"details_h");a3.textContent=p.getMessage("Edit")+" - "+(aZ.name.length>25?aZ.name.substr(0,25)+"...":aZ.name)
}var a4=M("div",aZ.name,aZ.id,"details_c");aX=az.insertTab(null,"details_"+aa.createUniqueId(aZ.name,aZ.id),a3,a4,aC,aZ.nnew?null:at);
ay=ae(aX,aZ,a2,a4,at)};var au=function(a4,a3){if(!aX){aR()
}if(ay.onShow){ay.onShow()}aX.show();if((!a4||a4.button!=1)&&!a3){aX.select()
}aq.setAttribute("open","true")};if(aq.getAttribute("open")=="true"){au(null,true)
}var aI=M("span",aZ.name,aZ.id,"hp");if(aY){var aF=M("a",aZ.name,aZ.id,"hp");
aF.setAttribute("href",aY);aF.setAttribute("target","_blank");
var aA=W.createImage(chrome.extension.getURL("images/home.png"),aZ.name,aZ.id,"hp","");
aF.appendChild(aA);aI.appendChild(aF)}var av=function(bd,bb){var a9=1000*60;
var a6=1000*60*60;var a4=1000*60*60*24;var a7=bd.getTime();
var a3=bb.getTime();var bc=Math.abs(a7-a3);var a5=Math.round(bc/a9);
var a8=Math.round(bc/a6);var ba=Math.round(bc/a4);if(a5<=60){return a5+" min"
}else{if(a8<=48){return a8+" h"}else{return ba+" d"
}}};var aG=M("span",aZ.name,aZ.id,"last_updated");var aK="";
if(aZ.nativeScript||!aZ.id||aZ.system){aK=""}else{var aT=function(){var a4=aG.textContent;
aG.textContent="";aG.appendChild(W.createImage("/images/download.gif",aZ.name+"_down",aZ.id));
var a3=function(a5){aG.textContent=a4;if(a5){aG.style.color="green";
aG.title=p.getMessage("There_is_an_update_for_0name0_avaiable_",aZ.name);
aE();aH();C(null,false)}else{aG.style.color="red";aG.title=p.getMessage("No_update_found__sry_")
}};e(aZ.id,a3)};if(!aq.inserted){aG.addEventListener("click",function(){k(aZ.id,"scriptUpdate")
});aG.setAttribute("class","clickable");aG.title=p.getMessage("Check_for_Updates")
}ak[aZ.id]["scriptUpdate"]=aT;if(aZ.lastUpdated){try{aK=av(new Date(),new Date(aZ.lastUpdated))
}catch(a1){console.log("o: error calculating time "+a1.message)
}}else{aK="?"}}aG.textContent=aK;var aD=M("div",aZ.name,aZ.id,"imported");
var aJ="";var aO=function(){if(K.sync_enabled){if(aZ.nativeScript||!aZ.id||aZ.system){aJ=""
}else{if(aZ.sync&&aZ.sync.imported){if(aZ.sync.imported===true||aZ.sync.imported==s.types.ePASTEBIN){aJ='<img src="http://pastebin.com/favicon.ico" class="icon16" title="pastebin.com"/>'
}else{if(aZ.sync.imported==s.types.eCHROMESYNC){aJ='<img src="http://www.google.com/images/icons/product/chrome-16.png" class="icon16" title="Google Sync"/>'
}else{aJ='<img src="images/update.png" class="icon16" />'
}}}else{aJ='<img src="images/no.png" class="icon16" />'
}}aD.innerHTML=aJ;aD=null}};R.push(aO);if(aZ.file_url&&aZ.file_url.trim()!=""){var V=aZ.file_url.match(new RegExp("htt[ps]{1,2}://userscripts.org/scripts/source/([0-9]{1,9}).user.js"));
if(V&&V.length==2){var aF=M("a",aZ.name,aZ.id,"hp");
aF.setAttribute("href","http://userscripts.org/scripts/show/"+V[1]);
aF.setAttribute("target","_blank");var aS=W.createImage(aa.staticVars.USOicon,aZ.name,aZ.id,"uso","");
aF.appendChild(aS);aI.appendChild(aF)}}ak[aZ.id]["deleteScript"]=function(a4,a6){if(aZ.nativeScript){var a5=a6||confirm(p.getMessage("Really_delete_0name0__",aZ.name));
if(a5==true){X(aZ.id,"installed","false");a2.parentNode.removeChild(a2)
}}else{var a5=a6||confirm(p.getMessage("Really_delete_0name0__",aZ.name));
if(a5==true){var a3={reload:!a6};x(aZ.name,null,a3);
a2.parentNode.removeChild(a2)}}};var aB=W.createImage(chrome.extension.getURL("images/delete.png"),aZ.nativeScript?aZ.id:aZ.name,"delete","delete",p.getMessage("Delete"),function(){k(aZ.id,"deleteScript")
});var aw=function(){var a3=aZ.enabled?chrome.extension.getURL("images/greenled.png"):chrome.extension.getURL("images/redled.png");
var a5=aQ(aZ,aU,"script_td05","scripttd_enable");a5.setAttribute("class","imagetd");
var a4=function(){k(aZ.id,aZ.nativeScript?"switchNativeEnabled":"switchEnabled")
};var a7=(aZ.position>0)?((aZ.position<10)?" "+aZ.position:aZ.position):null;
var a6=W.createImageText(a3,aZ.nativeScript?aZ.id:aZ.name,"enabled","enabled",aZ.enabled?p.getMessage("Enabled"):p.getMessage("Disabled"),a4,aZ.nativeScript?"":a7);
ak[aZ.id]["switchEnabled"]=function(a9,ba,a8){if(ba===undefined){ba=!aZ.enabled
}C(aZ.name,"enabled",ba,a8)};ak[aZ.id]["switchNativeEnabled"]=function(a9,ba,a8){if(ba===undefined){ba=!aZ.enabled
}X(aZ.id,"enabled",ba,a8)};a5.appendChild(a6);a6=null;
return a5};if(!aU.inserted&&!aZ.nativeScript){aU.addEventListener("click",au)
}aU.appendChild(aq);var ar=aQ(aZ,aU,"script_td1","scripttd_name");
ar.title=aZ.description?aZ.name+"\n\n"+aZ.description:aZ.name;
var ax=aQ(aZ,aU,"script_td0","scripttd_sel");if(aZ.id&&!aZ.system){ax.appendChild(am(aZ))
}aL.push(ax);aL.push(aw());aL.push(ar);aL.push(aQ(aZ,a0,"script_td24","scripttd"));
aL.push(aQ(aZ,F(aZ),"script_td25","scripttd"));aL.push(aQ(aZ,aD,"script_td26","scripttd"));
aL.push(aQ(aZ,E(aZ),"script_td3"));aL.push(aQ(aZ,H(aZ),"script_td4"));
aL.push(aQ(aZ,aI,"script_td5"));aL.push(aQ(aZ,aG,"script_td6"));
aL.push(aQ(aZ,U(aZ),"script_td7"));aL.push(aQ(aZ,aZ.id&&!aZ.system?aB:null,"script_td8"));
for(var aW=aL.length;aW<10;aW++){aL.push(M("td",aZ.name,aZ.id,"script_filler_"+aW))
}if(aZ.nnew){var aP=function(){au(null,true)};window.setTimeout(aP,100);
if(!t&&L.open==="0"){window.setTimeout(au,1000)}}else{if(L.open){if(aZ.id===L.open){window.setTimeout(au,1000)
}}}return aL};var F=function(aq){var ar=M("span",aq.name,aq.id,"pos_type",true);
if(!aq.id){return ar}if(aq.user_agent){var V=W.createImage("images/user_agent.png",aq.name,aq.id,"user_agent",p.getMessage("This_only_changes_the_user_agent_string"));
ar.appendChild(V)}else{if(aq.nativeScript){var V=W.createImage(aq.icon,aq.name,aq.id,"chrome_ext",p.getMessage("This_is_a_chrome_extension"));
ar.appendChild(V)}else{if(aq.userscript){var V=W.createImage("images/txt.png",aq.name,aq.id,"user_agent",p.getMessage("This_is_a_userscript"));
ar.appendChild(V)}}}return ar};var H=function(at){var au=M("span",at.name,at.id,"pos_features",true);
if(!at.id){return au}if(at.system){var V=W.createImage(chrome.extension.getURL("images/lock.png"),at.name,at.id,"lock",p.getMessage("This_is_a_system_script"));
au.appendChild(V)}if(at.awareOfChrome||at.nativeScript){var V=W.createImage("http://www.google.com/images/icons/product/chrome-16.png",at.name,at.id,"chrome_mode",p.getMessage("This_script_runs_in_Chrome_mode"));
au.appendChild(V)}if(at.nativeScript){return au}var av=false;
var ar={includes:true,matches:true};for(var aq in ar){if(!at[aq]){continue
}for(var aw=0;aw<at[aq].length;aw++){if(at[aq][aw]&&(at[aq][aw].search("https")!=-1||at[aq][aw].search(/^\*:\/\//)!=-1)){var V=W.createImage(chrome.extension.getURL("images/halfencrypted.png"),at.name,at.id,"encrypt",p.getMessage("This_script_has_access_to_https_pages"));
au.appendChild(V);av=true;break}}if(av){break}}if(at.user_agent){return au
}if(at.code.search("GM_xmlhttpRequest")!=-1){var V=W.createImage(chrome.extension.getURL("images/web.png"),at.name,at.id,"web",p.getMessage("This_script_has_full_web_access"));
au.appendChild(V)}if(at.code.search("GM_setValue")!=-1){var V=W.createImage(chrome.extension.getURL("images/db.png"),at.name,at.id,"db",p.getMessage("This_script_stores_data"));
au.appendChild(V)}if(at.code.search("unsafeWindow")!=-1){var V=W.createImage(chrome.extension.getURL("images/resources.png"),at.name,at.id,"resource",p.getMessage("This_script_has_access_to_webpage_scripts"));
au.appendChild(V)}for(var aq in at.options){if(aq.search("compat_")!=-1&&at.options[aq]){var V=W.createImage(chrome.extension.getURL("images/critical.png"),at.name,at.id,"crit",p.getMessage("One_or_more_compatibility_options_are_set"));
au.appendChild(V);break}}return au};var Z=null;var ac=null;
var B=null;var Y=0;var aj=0;var y=function(V){var aq={x:B.x+V.pageX,y:B.y+V.pageY};
Z.style.top=aq.y+"px";Z.style.left=aq.x+"px"};var m=function(at){if(Z){y(at);
var ar=ac.previousSibling,aq=ac.nextSibling,V=ac.parentNode,au=ap(ac);
if(at.pageY>au.y+Y&&aq){V.removeChild(aq);V.insertBefore(aq,ac);
aj++}else{if(at.pageY<au.y&&aj>1){V.removeChild(ar);
if(aq){V.insertBefore(ar,aq)}else{V.appendChild(ar)
}aj--}}}};document.addEventListener("mousemove",m);
var ap=function(aq){var V=aq.offsetLeft;var ar=aq.offsetTop;
while(aq=aq.offsetParent){V+=aq.offsetLeft;ar+=aq.offsetTop
}return{x:V,y:ar}};var g=function(V,aq){Z=V;ac=Z.parentNode.parentNode.parentNode;
Y=ac.offsetHeight;B=ap(ac.parentNode.parentNode);B.x=-B.x-Z.offsetWidth/2;
B.y=-B.y-Z.offsetHeight/2;Z.style.position="absolute";
y(aq)};var J=function(){Z.style.position="static";C(Z.name,Z.key,aj);
Z=ac=B=null};var U=function(aq){var ar=M("span",aq.name,aq.id,"pos_images",true);
if(!aq.id||aq.nativeScript){return ar}var V=W.createImage(chrome.extension.getURL("images/up_n_down.png"),aq.name,"position","move",p.getMessage("Click_here_to_move_this_script"),function(at){if(Z){J()
}else{g(this,at);aj=aq.position}});if(aq.position>1||aq.position<aq.positionof){ar.appendChild(V)
}return ar};var E=function(aE){var aD=M("span",aE.name,aE.id,"site_images");
var aA=null;if(aD.inserted){aA=aD;aA.setAttribute("id",aA.id+"foo");
aD=M("span",aE.name,aE.id,"site_images")}var aw=function(aO){if(aO.search(/\//)==0){aO=aO.replace(/^\/|\/$|\^|\$|\?|\(|\)|\+|\\|\[.*\]|\.\*|[\-\.a-zA-Z0-9]+\/$|/g,"").replace(/\/\/$/g,"")
}aO=aO.replace(/^\*:\/\//,"http://");if(aO.search("http")!=0){aO="http://"+aO
}var aK=aO.split("/");if(aK.length<3){return null}var aQ=aK[2].split(".");
if(aQ.length<2){return null}var aL=aQ[aQ.length-1];
var aP=aQ[aQ.length-2];var aN=[];for(var aM=aQ.length-3;
aM>=0;aM--){if(aQ[aM].search("\\*")!=-1){break}aN.push(aQ[aM])
}return{tld:aL,dom:aP,predom:aN.reverse()}};if(aE.includes||aE.matches){var aG=0;
var aH=aE.includes.length?aE.includes:aE.matches;for(var aC=0;
aC<aH.length;aC++){var az=aH[aC];if(!az){console.log("o: Warn: script '"+aE.name+"' has invalid include (index: "+aC+")");
continue}if(az.search(/htt(ps|p):\/\/(\*\/\*|\*)*$/)!=-1||az.search(/\*:\/\/(\*\/\*|\*)*$/)!=-1||az=="*"){var aJ=W.createImage(chrome.extension.getURL("images/web.png"),aE.name,aE.id,az,az);
aD.appendChild(aJ,true);break;continue}var av=aw(az);
if(av==null){var aJ=W.createFavicon("?",aE.name,aE.id,az,az);
aD.appendChild(aJ,true);continue}var au=false;for(var aB=0;
aB<aC;aB++){var aq=aH[aB];if(aq){var V=aw(aq);if(V==null){continue
}if(V.dom==av.dom){au=true;break}}}if(!au){var aF="com";
var aI="";if(av.tld!="*"&&av.tld!="tld"){aF=av.tld}if(av.predom.length){aI=av.predom.join(".")+"."
}var ar=("chrome://favicon/http://"+aI+av.dom+"."+aF+"/").replace(/\*/g,"");
var at=("http://"+aI+av.dom+"."+aF+"/favicon.ico").replace(/\*/g,"");
var ay=[at,ar];if(at.search("http://userscripts.org/")==0||at.search("http://userscripts.com/")==0){ay=aa.staticVars.USOicon
}var aJ=W.createFavicon(ay,aE.name,aE.id,az,az);aD.appendChild(aJ,true);
aG++}if(aG>7){var ax=w("span",aE.name,aE.id,"tbc");
ax.textContent="...";aD.appendChild(ax,true);break}}}if(aA){aA.parentNode.removeChild(aA)
}return aD};var f=function(){var aq=document.getElementsByName("scriptselectors");
var ar=0;for(var V=0;V<aq.length;V++){if(aq[V].checked){ar++
}}};var i=function(){var V=0;ak.multiselect={};ak.multiselect["single_click"]=function(){var au=0;
var ay=document.getElementsByName("scriptselectors");
var ar=true;var aw=false;var az=false;var at=true;var aA=false;
var av=false;for(var ax=0;ax<ay.length;ax++){if(ay[ax].s_type=="n"){az=true;
ar=ar&&ay[ax].checked;aw=aw||ay[ax].checked}else{if(ay[ax].s_type=="s"){av=true;
at=at&&ay[ax].checked;aA=aA||ay[ax].checked}}}if(az){if(ar&&!aA){au=1
}else{if(at&&!aw&&aA){au=2}}}else{if(av&&at){au=3}}if(au!=V){V=au;
var aq=M("input","sms","all");aq.checked=(au!=0)}};
ak.multiselect["un_selectAll"]=function(){if(++V>3){V=0
}var at=false;var ar=document.getElementsByName("scriptselectors");
for(var aq=0;aq<ar.length;aq++){if(aq==0&&(V==1||V==3)&&ar[aq].s_type=="s"){if(++V>3){V=0
}}at|=(ar[aq].s_type=="s");ar[aq].checked=(V==3||V==1&&ar[aq].s_type=="n"||V==2&&ar[aq].s_type=="s")
}if(V>1&&!at){V=0}this.checked=(V!=0)}};var am=function(aq){var V=M("input",aq.name,aq.id,"sel");
V.type="checkbox";V.s_id=aq.id;V.name="scriptselectors";
V.s_type=aq.nativeScript?"n":"s";if(!V.inserted){V.addEventListener("click",function(){ak.multiselect["single_click"]()
})}return V};var ao=function(ar){var av=M("input","sms","all",null,true);
av.type="checkbox";av.mode=0;av.addEventListener("click",ak.multiselect["un_selectAll"]);
var ay=0;var aw=[{name:p.getMessage("__Please_choose__"),value:0},{name:p.getMessage("Enable"),value:1},{name:p.getMessage("Disable"),value:2},{name:p.getMessage("Trigger_Update"),value:5},{name:p.getMessage("Remove"),value:6}];
var au={value:0,id:"sms",name:"select"};var at=function(){if(this.value==0){ax.setAttribute("disabled","true")
}else{ax.removeAttribute("disabled")}ay=this.value};
var az=W.createDropDown(p.getMessage("Apply_this_action_to_the_selected_scripts"),au,aw,at);
az.elem.setAttribute("class","float");var V=function(){if(ay==0){console.log("option: ?!?!");
return}if(ay==6){if(!confirm(p.getMessage("Really_delete_the_selected_items_"))){return
}}var aF=document.getElementsByName("scriptselectors");
var aD=[];for(var aA=0;aA<aF.length;aA++){aD.push(aF[aA])
}var aC,aE=false,aB=100;for(var aA=0;aA<aD.length;aA++){if(!aD[aA].checked){continue
}if(ay==1||ay==2){aC=(aD[aA].s_type=="n")?"switchNativeEnabled":"switchEnabled";
k(aD[aA].s_id,aC,null,(ay==1),false);aE=true}else{if(ay==5){aC="scriptUpdate";
k(aD[aA].s_id,aC)}else{if(ay==6){aC="deleteScript";
k(aD[aA].s_id,aC,null,true);aE=true;aB=1500}}}}if(aE){A.wait(p.getMessage("Please_wait___"));
window.setTimeout(function(){C(null,false,null,true)
},aB)}};var ax=W.createButton("MultiSelectButton","button",p.getMessage("Start"),V);
ax.setAttribute("disabled","true");ax.setAttribute("style","height: 19px; top: 2px; position: relative; padding-top: -1px;");
var aq=M("div",ar.name,ar.id,"actions");aq.appendChild(az.elem);
aq.appendChild(ax);return{selAll:av,actionBox:aq}};
i();var O={options:{maxerr:999,newcap:true,es5:true,sloppy:true,browser:true,white:true,plusplus:true,nomen:true,"continue":true,todo:true,eqeq:true,passfail:false,unparam:true,devel:true},JSLINT_GLOBALS:["CDATA","XPathResult","xpath","uneval","escape","unescape","console","JSON","TM_info","GM_info","TM_addStyle","TM_deleteValue","TM_listValues","TM_getValue","TM_log","TM_registerMenuCommand","TM_openInTab","TM_setValue","TM_addValueChangeListener","TM_removeValueChangeListener","TM_xmlhttpRequest","TM_getTab","TM_saveTab","TM_getTabs","TM_installScript","TM_runNative","TM_execUnsafe","TM_notification","TM_getResourceText","TM_getResourceURL","GM_addStyle","GM_deleteValue","GM_listValues","GM_getValue","GM_log","GM_registerMenuCommand","GM_openInTab","GM_setValue","GM_addValueChangeListener","GM_removeValueChangeListener","GM_xmlhttpRequest","GM_getTab","GM_saveTab","GM_getTabs","GM_installScript","GM_runNative","GM_setClipboard","GM_execUnsafe","GM_notification","GM_getResourceText","GM_getResourceURL"],cleanGutters:function(aq,V){aq.clearGutter("gutter")
},setGutters:function(ay,az){for(var aw in az){if(!az.hasOwnProperty(aw)){continue
}var av=az[aw];var V=0;var ax=null;var aA=[];av.marks=[];
for(var at=0;at<av.length;at++){var aB="";var ar=av[at];
if(ar.stop){ax="no";V=3}else{if(ar.warn){if(V<1){ax="critical";
V=1}aB=p.getMessage("Warning")+": "}else{if(ar.info){if(V==0){ax="info"
}aB=p.getMessage("Info")+": "}else{if(V<2){ax="error";
V=2;aB=p.getMessage("Error")+": "}}}}aA.push(((av.length>1)?aB:"")+ar.text.replace(/\"/g,'\\"'));
if(!ar.stop){av.marks.push(ay.markText({line:ar.line-1,ch:ar.character-1},{line:ar.line-1,ch:ar.character-1+ar.evle},{className:"CodeMirror-highlight-"+ax}))
}}var au='<span class="editor_gutter" title="'+aA.join("\n\n")+'"><span width="15px"><img class="editor_gutter_img" src="images/'+ax+'.png"/></span></span>';
var aq=document.createElement("span");aq.innerHTML=au;
ay.setGutterMarker(Number(aw)-1,"gutter",aq)}return az
},run:function(av){if(av.oldGutters){O.cleanGutters(av.mirror,av.oldGutters)
}var V=av.mirror.getValue();var ay=null;try{ay=JSLINT
}catch(aL){}var aq="/*global "+O.JSLINT_GLOBALS.join(": true, ")+"*/\n";
var az=ay?ay(aq+V,O.options):true;if(az){return}else{var au={};
for(var aG in JSLINT.errors){var aF=JSLINT.errors[aG];
if(aF&&aF.line>1){var aE=aF.line-1;var at=aF.character;
var aJ=0;var ar=(aF.reason.search("Mixed spaces and tabs")!=-1);
var aH=0;try{var ax=!!aF.evidence&&!ar;if(ax){for(var aB=0,aw=0;
aB<at&&aw<at;aB++,aw++){if(aF.evidence.charCodeAt(aB)==9){aw+=K.editor_indentUnit-1;
aJ+=1}}}var aM=aJ*(K.editor_indentUnit-1);at-=aM;if(ax||ar){var aA=aF.evidence.length>at?aF.evidence.substr(at-1):"";
var aD=ar?aA.match(/([ \t])*/):aA.match(/([a-zA-Z0-9_])*/);
aH=aD&&aD.length?aD[0].length:0}}catch(aI){console.log("jslint: error parsing source "+aI.message)
}var aK=aH||1;var aC={line:aE,stop:aF.reason.search("Stopping")==0,info:ar||aF.reason.search("Combine this with the previous 'var'")!=-1||aF.reason.search("Expected '{' and instead saw")!=-1||aF.reason.search("Move 'var' declarations to the top")!=-1,warn:aF.id!="(error)"||aF.reason.search("used before it was defined")!=-1,character:at,evle:aK,text:aF.reason.replace(/.$/,"")};
if(aC.stop){aE++}if(!au[aE]){au[aE]=[]}au[aE].push(aC)
}}av.oldGutters=O.setGutters(av.mirror,au)}}};var j=null;
var b=null;var N=function(V,aq){if(j!=null){window.clearTimeout(j);
j=null;N(V?V:b.items,aq||b.noWarn)}else{b={items:V,noWarn:aq};
j=window.setTimeout(function(){j=null;S(b.items,b.noWarn);
b=null},50)}};var ah=function(aq,V){try{var at=function(au){chrome.tabs.sendMessage(au.id,{method:"loadUrl",url:aq,newtab:V},function(av){})
};if(V){chrome.extension.sendMessage({method:"openInTab",url:aq},function(au){})
}else{chrome.tabs.getSelected(null,at)}}catch(ar){console.log("lU: "+ar.message)
}};var x=function(at,au,ar,V){if(ar.reload===undefined){ar.reload=true
}try{var aq=(ar.new_url&&ar.new_url!=ar.old_url)?ar.new_url:"";
chrome.extension.sendMessage({method:"saveScript",name:at,code:au,clean:ar.clean,force:ar.force,force_url:aq,reload:ar.reload},function(aw){if(aw.items){N(aw.items,!!at)
}if(!au&&ar.reload){A.hide()}if(V){V(aw)}});A.wait(p.getMessage("Please_wait___"))
}catch(av){console.log("sS: "+av.message)}};var D=function(V,aq,at){try{chrome.extension.sendMessage({method:"setOption",name:V,value:aq},function(au){if(!at){N(au.items)
}});A.wait(p.getMessage("Please_wait___"))}catch(ar){console.log("sO: "+ar.message)
}};var h=function(V,ar,au,aq){try{chrome.extension.sendMessage({method:"buttonPress",name:V},function(av){if(aq){window.location.reload()
}else{if(!au){N(av.items)}else{A.hide()}}});A.wait(p.getMessage("Please_wait___"))
}catch(at){console.log("sO: "+at.message)}};var l=function(at,ar,av,aq){if(d){console.log("run modifyScriptOptions")
}if(av==undefined){av=true}try{var au={method:"modifyScriptOptions",name:at,reload:av,reorder:aq};
for(var V in ar){if(!ar.hasOwnProperty(V)){continue
}au[V]=ar[V]}if(d){console.log("modifyScriptOptions sendReq")
}chrome.extension.sendMessage(au,function(ax){if(ax.items){N(ax.items,!!at)
}});A.wait(p.getMessage("Please_wait___"))}catch(aw){console.log("mSo: "+aw.message)
}};var C=function(aq,aw,au,at,V){if(d){console.log("run modifyScriptOption")
}if(at===undefined){at=true}try{var ar={method:"modifyScriptOptions",name:aq,reload:at,reorder:V};
if(aw&&aw!=""){ar[aw]=au}if(d){console.log("modifyScriptOption sendReq")
}chrome.extension.sendMessage(ar,function(ax){if(ax){if(ax.i18n){p.setLocale(ax.i18n)
}if(ax.items){N(ax.items,!!aq)}}});A.wait(p.getMessage("Please_wait___"))
}catch(av){console.log("mSo: "+av.message)}};var X=function(av,au,ar,aq){if(d){console.log("run modifyNativeScriptOption")
}if(aq===undefined){aq=true}try{var V={method:"modifyNativeScript",nid:av,actionid:au,value:ar,reload:aq};
if(d){console.log("modifyNativeScriptOption sendReq")
}chrome.extension.sendMessage(V,function(aw){if(aw.items){N(aw.items,!!name)
}});A.wait(p.getMessage("Please_wait___"))}catch(at){console.log("mSo: "+at.message)
}};var e=function(at,V){try{var aq=function(au){if(V){V(au.updatable)
}};chrome.extension.sendMessage({method:"runScriptUpdates",scriptid:at},aq)
}catch(ar){console.log("rSu: "+ar.message)}};chrome.extension.onMessage.addListener(function(ar,aq,V){if(d){console.log("o: method "+ar.method)
}if(ar.method=="updateOptions"){N(ar.items);V({})}else{if(ar.method=="confirm"){var at=function(au){V({confirm:au})
};aa.confirm(ar.msg,at)}else{if(ar.method=="showMsg"){aa.alert(ar.msg);
V({})}else{if(d){console.log("o: "+p.getMessage("Unknown_method_0name0",ar.method))
}return false}}}return true});if(d){console.log("Register request listener (options)")
}var Q=function(){window.removeEventListener("DOMContentLoaded",Q,false);
window.removeEventListener("load",Q,false);var aq=function(){C(null,false,null,true)
};var V=function(){if(confirm(p.getOriginalMessage("An_internal_error_occured_Do_you_want_to_visit_the_forum_"))){window.location.href="http://tampermonkey.net/bug"
}};v.ping(aq,V);A.wait(p.getMessage("Please_wait___"))
};window.addEventListener("DOMContentLoaded",Q,false);
window.addEventListener("load",Q,false)})();