
(function(){Registry.require("crcrc");Registry.require("helper");
var b=Registry.get("helper");var d=Registry.get("crcrc").cr;
var e=Registry.get("crcrc").crc;var a={};var c=function(k,n,w){var u=b.filter(k,/[0-9a-zA-Z]/g);
var p=false;if(w==undefined){w={tv:"tv",tv_table:"tv_table",tr_tabs:"tr_tabs",tr_content:"tr_content",td_content:"td_content",td_tabs:"td_tabs",tv_tabs_fill:"tv_tabs_fill",tv_tabs_table:"tv_tabs_table",tv_tabs_align:"tv_tabs_align",tv_contents:"tv_contents",tv_tab_selected:"tv_tab tv_selected",tv_tab_close:"tv_tab_close",tv_tab:"tv_tab",tv_content:"tv_content"}
}var q=e("div",w.tv,"main"+u);var y=e("table",w.tv_table+" noborder","main_table"+u);
if(y.inserted){p=true}else{a[u]={};a[u].g_entries={};
a[u].g_selectedId=null}var f=e("tr",w.tr_tabs,"tabs"+n.id+u);
var m=e("td",w.td_tabs,"pages"+u);var B=e("div",w.tv_tabs_fill,"tv_tabs_fill"+u);
var g=e("div",w.tv_tabs_table,"tv_tabs_table"+u);var z=e("div",w.tv_tabs_align,"tv_tabs_align"+u);
var x=e("tr",w.tr_content,"content"+n.id+u);var l=e("td",w.td_content,"content"+u);
var t=e("div",w.tv_contents,"tv_content"+u);g.appendChild(z);
B.appendChild(g);m.appendChild(B);f.appendChild(m);
y.appendChild(f);l.appendChild(t);x.appendChild(l);
y.appendChild(x);q.appendChild(y);n.appendChild(q);
var r=function(F,G,E){if(G){F.setAttribute("style",E?b.staticVars.visible_move:b.staticVars.visible)
}else{F.setAttribute("style",E?b.staticVars.invisible_move:b.staticVars.invisible)
}F.setAttribute("vis",G.toString())};var i=function(E,F){var G=E.getId();
if(a[u].g_entries[G]){if(F==a[u].g_entries[G].visible){return
}a[u].g_entries[G].visible=F;r(a[u].g_entries[G].tab,F)
}};var C=function(F,E){r(F.content,E,true)};var s=function(F){for(var E in a[u].g_entries){var G=a[u].g_entries[E];
if(G.tab.id==F.id){return G}}return null};var h=function(F){for(var E in a[u].g_entries){var G=a[u].g_entries[E];
if(G.tab.id==F.id){return E}}return null};var A=function(F){if(F.getId()==a[u].g_selectedId){return
}var H=F.getId();if(a[u].g_selectedId){C(a[u].g_entries[a[u].g_selectedId],false)
}for(var E in a[u].g_entries){var G=a[u].g_entries[E];
if(G.entry.getId()==H){if(!G.visible){console.log("tv: WARN: tab selected but not visible!")
}else{if(!G.selected){G.tab.setAttribute("class",w.tv_tab_selected);
C(G,true);G.selected=true}}}else{if(G.selected){G.tab.setAttribute("class",w.tv_tab);
C(G,false);G.selected=false}}}a[u].g_selectedId=H};
var v=function(G){var J=G.getId();var I=(J==a[u].g_selectedId);
if(a[u].g_entries[J]){i(G,false)}else{console.log("tv: WARN: tab not part of tabview!")
}if(I){var H=null;var F=null;for(var E in a[u].g_entries){if(a[u].g_entries[E].visible){H=a[u].g_entries[E];
if(!F&&!H.closable){F=H}}}if(!H.closable){H=F}if(H){H.entry.select()
}else{a[u].g_selectedId=null;console.log("tv: WARN: selected tab set, but entry collection empty!")
}}};var o=function(E){var F=E.getId();if(a[u].g_entries[F]){i(E,true)
}else{console.log("tv: WARN: tab not part of tabview!")
}};var j=function(E){E.hide();var H=E.getId();var F=a[u].g_entries[H];
if(F){F.tab.parentNode.removeChild(F.tab);F.content.parentNode.removeChild(F.content);
var G=h(F.tab);if(G){delete a[u].g_entries[G]}}else{console.log("tv: WARN: tab not part of tabview!")
}};var D=null;if(!p){D={removeTab:j,appendTab:function(I,F,E,H,G){return this.insertTab(undefined,I,F,E,H,G)
},insertTab:function(O,G,N,Q,J,M){if(O===null){O=z.firstChild
}var H=e("div","",G,"content"+u);var I=(H.inserted!==undefined&&H.inserted==true);
if(M){var F=e("div",w.tv_tab_close,G,"tv_close"+u,"tab_close");
if(!F.inserted){F.addEventListener("click",M)}F.textContent="X";
N.appendChild(F)}if(I){var L=s(H);if(L){return L.entry
}console.log("tv: WARN: old tab, but not in tabs collection!")
}var P;var K=(new Date()).getTime()+Math.floor(Math.random()*61283+1);
var E=function(R){if(R.target.className!=""&&R.target.className==w.tv_tab_close){return
}P.select()};H.setAttribute("tv_id"+u,G);H.addEventListener("click",E);
N.setAttribute("tv_id"+u,G);N.addEventListener("click",E);
H.setAttribute("name","tabview_tab"+u);H.setAttribute("class",w.tv_tab);
H.appendChild(N);if(O){z.insertBefore(H,O)}else{z.appendChild(H)
}Q.setAttribute("name","tabview_content"+u);Q.setAttribute("tv_id"+u,G);
Q.setAttribute("class",w.tv_content);t.appendChild(Q);
P={getId:function(){return K},isVisible:function(){return H.getAttribute("vis")=="true"
},isSelected:function(){return(a[u].g_selectedId==this.getId())
},remove:function(){j(this)},hide:function(){v(this)
},show:function(){o(this)},select:function(){if(J){J()
}A(this)}};a[u].g_entries[K]={entry:P,tab:H,content:Q,closable:M!=null};
C(a[u].g_entries[K],false);P.show();if(!a[u].g_selectedId){P.select()
}return P}};a[u].tv=D}else{D=a[u].tv}return D};Registry.register("tabview",{create:c})
})();