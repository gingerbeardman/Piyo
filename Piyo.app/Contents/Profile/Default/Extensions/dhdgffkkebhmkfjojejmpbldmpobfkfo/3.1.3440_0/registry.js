
(function(){var b;var a=false;var d=false;var c={objects:{},raw_objects:{},callbacks:[],loading:0,init:function(){},onLoad:function(){var e=c.callbacks.pop();
if(e){e()}},checkLoading:function(){var e=false;for(var f in c.objects){if(!c.objects.hasOwnProperty(f)){continue
}if(c.objects[f]===null){e=true;break}}if(!e){c.onLoad()
}},register:function(f,g,e){if(d||a||b){console.log("Registry.register "+f+" overwrite: "+e)
}if(!c.objects[f]||e){c.objects[f]=g;c.checkLoading()
}},registerRaw:function(f,g,e){if(d||a||b){console.log("Registry.registerRaw "+f+" overwrite: "+e)
}if(!c.raw_objects[f]||e){c.raw_objects[f]=g}},require:function(e){if(d||a||b){console.log("Registry.require "+e)
}if(c.objects[e]===undefined){console.log("Error: need "+e+".js");
c.objects[e]=null;c.loadFile(e+".js")}},getRaw:function(g){if(d||a||b){console.log("Registry.getRaw "+g)
}var h=null;if(c.raw_objects[g]!==undefined){h=c.raw_objects[g]
}else{var f=chrome.extension.getURL(g);try{var j=new XMLHttpRequest();
j.open("GET",f,false);j.send(null);h=j.responseText;
if(!h){console.log("WARN: content of "+g+" is null!")
}}catch(i){console.log("getRawContent "+i)}}return h
},loadFile:function(f,i){if(a||b){console.log("Registry.loadFile "+f)
}try{if(i){var h=c.getRaw(f);i(h)}else{var g=document.createElement("script");
g.setAttribute("src",chrome.extension.getURL(f));(document.head||document.body||document.documentElement||document).appendChild(g)
}}catch(j){console.log("Error: Registry.load "+f+" failed! "+j.message)
}},get:function(e){if(a||b){console.log("Registry.get "+e)
}var f=c.objects[e];if(f===undefined){console.log("Error: Registry.get "+e+" wasn't required or found!")
}return f},addLoadHandler:function(e){c.callbacks.push(e)
}};window.setTimeout(c.init,1);window.Registry=c})();