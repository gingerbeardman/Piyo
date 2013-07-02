
(function(){var f={_background:true,_webRequest:{},Converter:null,Eventing:null,V:false,D:false,EV:false,EMV:false,ENV:false,TS:false,CV:false,USV:false};
var N=function(){var R={};var T={webkitStorageInfo:true,JSLINT:true};
var Q={"Infinity":true,Array:true,ArrayBuffer:true,ArrayBufferView:true,Attr:true,Audio:true,AudioProcessingEvent:true,BeforeLoadEvent:true,Blob:true,Boolean:true,CDATASection:true,CSS:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSHostRule:true,CSSImportRule:true,CSSMediaRule:true,CSSPageRule:true,CSSPrimitiveValue:true,CSSRule:true,CSSRuleList:true,CSSStyleDeclaration:true,CSSStyleRule:true,CSSStyleSheet:true,CSSValue:true,CSSValueList:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CharacterData:true,ClientRect:true,ClientRectList:true,Clipboard:true,CloseEvent:true,Comment:true,CompositionEvent:true,Counter:true,CustomEvent:true,DOMException:true,DOMImplementation:true,DOMParser:true,DOMSettableTokenList:true,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,DataView:true,Date:true,DeviceOrientationEvent:true,Document:true,DocumentFragment:true,DocumentType:true,Element:true,Entity:true,EntityReference:true,Error:true,ErrorEvent:true,EvalError:true,Event:true,EventException:true,EventSource:true,File:true,FileError:true,FileList:true,FileReader:true,Float32Array:true,Float64Array:true,FocusEvent:true,FormData:true,Function:true,HTMLAllCollection:true,HTMLAnchorElement:true,HTMLAppletElement:true,HTMLAreaElement:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLCollection:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDirectoryElement:true,HTMLDivElement:true,HTMLDocument:true,HTMLElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLFontElement:true,HTMLFormControlsCollection:true,HTMLFormElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMarqueeElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOptionsCollection:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLSelectElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HashChangeEvent:true,IDBCursor:true,IDBCursorWithValue:true,IDBDatabase:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBRequest:true,IDBTransaction:true,IDBVersionChangeEvent:true,Image:true,ImageData:true,Int8Array:true,Int16Array:true,Int32Array:true,Intl:true,JSON:true,KeyboardEvent:true,Map:true,Math:true,MediaController:true,MediaError:true,MediaKeyError:true,MediaKeyEvent:true,MediaList:true,MediaStreamEvent:true,MessageChannel:true,MessageEvent:true,MessagePort:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,MutationEvent:true,MutationObserver:true,MutationRecord:true,"NaN":true,NamedNodeMap:true,Node:true,NodeFilter:true,NodeList:true,Notation:true,Notification:true,Number:true,Object:true,OfflineAudioCompletionEvent:true,Option:true,OverflowEvent:true,PageTransitionEvent:true,Plugin:true,PluginArray:true,PopStateEvent:true,ProcessingInstruction:true,ProgressEvent:true,Proxy:true,RGBColor:true,RTCIceCandidate:true,RTCSessionDescription:true,Range:true,RangeError:true,Rect:true,ReferenceError:true,RegExp:true,SQLException:true,SVGAElement:true,SVGAltGlyphDefElement:true,SVGAltGlyphElement:true,SVGAltGlyphItemElement:true,SVGAngle:true,SVGAnimateColorElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGCircleElement:true,SVGClipPathElement:true,SVGColor:true,SVGComponentTransferFunctionElement:true,SVGCursorElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDocument:true,SVGElement:true,SVGElementInstance:true,SVGElementInstanceList:true,SVGEllipseElement:true,SVGException:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEDropShadowElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGFontElement:true,SVGFontFaceElement:true,SVGFontFaceFormatElement:true,SVGFontFaceNameElement:true,SVGFontFaceSrcElement:true,SVGFontFaceUriElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGlyphElement:true,SVGGlyphRefElement:true,SVGGradientElement:true,SVGHKernElement:true,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMPathElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMatrix:true,SVGMetadataElement:true,SVGMissingGlyphElement:true,SVGNumber:true,SVGNumberList:true,SVGPaint:true,SVGPathElement:true,SVGPathSeg:true,SVGPathSegArcAbs:true,SVGPathSegArcRel:true,SVGPathSegClosePath:true,SVGPathSegCurvetoCubicAbs:true,SVGPathSegCurvetoCubicRel:true,SVGPathSegCurvetoCubicSmoothAbs:true,SVGPathSegCurvetoCubicSmoothRel:true,SVGPathSegCurvetoQuadraticAbs:true,SVGPathSegCurvetoQuadraticRel:true,SVGPathSegCurvetoQuadraticSmoothAbs:true,SVGPathSegCurvetoQuadraticSmoothRel:true,SVGPathSegLinetoAbs:true,SVGPathSegLinetoHorizontalAbs:true,SVGPathSegLinetoHorizontalRel:true,SVGPathSegLinetoRel:true,SVGPathSegLinetoVerticalAbs:true,SVGPathSegLinetoVerticalRel:true,SVGPathSegList:true,SVGPathSegMovetoAbs:true,SVGPathSegMovetoRel:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGPreserveAspectRatio:true,SVGRadialGradientElement:true,SVGRect:true,SVGRectElement:true,SVGRenderingIntent:true,SVGSVGElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStringList:true,SVGStyleElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTRefElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGTransform:true,SVGTransformList:true,SVGUnitTypes:true,SVGUseElement:true,SVGVKernElement:true,SVGViewElement:true,SVGViewSpec:true,SVGZoomAndPan:true,SVGZoomEvent:true,Selection:true,Set:true,SharedWorker:true,SpeechInputEvent:true,Storage:true,StorageEvent:true,String:true,StyleSheet:true,StyleSheetList:true,Symbol:true,SyntaxError:true,Text:true,TextEvent:true,TextMetrics:true,TextTrack:true,TextTrackCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TrackEvent:true,TransitionEvent:true,TypeError:true,UIEvent:true,URIError:true,URL:true,Uint8Array:true,Uint8ClampedArray:true,Uint16Array:true,Uint32Array:true,WeakMap:true,WebGLActiveInfo:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLTexture:true,WebGLUniformLocation:true,WebKitAnimationEvent:true,WebKitCSSFilterRule:true,WebKitCSSFilterValue:true,WebKitCSSKeyframeRule:true,WebKitCSSKeyframesRule:true,WebKitCSSMatrix:true,WebKitCSSMixFunctionValue:true,WebKitCSSTransformValue:true,WebKitMediaSource:true,WebKitMutationObserver:true,WebKitPoint:true,WebKitShadowRoot:true,WebKitSourceBuffer:true,WebKitSourceBufferList:true,WebKitTransitionEvent:true,WebSocket:true,WheelEvent:true,Worker:true,XMLDocument:true,XMLHttpRequest:true,XMLHttpRequestProgressEvent:true,XMLHttpRequestUpload:true,XMLSerializer:true,XPathEvaluator:true,XPathException:true,XPathResult:true,XSLTProcessor:true,applicationCache:true,chrome:true,clientInformation:true,closed:true,console:true,content:true,crypto:true,decodeURI:true,decodeURIComponent:true,defaultStatus:true,defaultstatus:true,devicePixelRatio:true,document:true,encodeURI:true,encodeURIComponent:true,escape:true,event:true,external:true,frameElement:true,history:true,indexedDB:true,innerHeight:true,innerWidth:true,isFinite:true,isNaN:true,length:true,localStorage:true,location:true,locationbar:true,menubar:true,name:true,navigator:true,offscreenBuffering:true,opener:true,outerHeight:true,outerWidth:true,pageXOffset:true,pageYOffset:true,parent:true,parseFloat:true,parseInt:true,performance:true,personalbar:true,screen:true,screenLeft:true,screenTop:true,screenX:true,screenY:true,scrollX:true,scrollY:true,scrollbars:true,sessionStorage:true,status:true,statusbar:true,styleMedia:true,toolbar:true,unescape:true,v8Intl:true,webkitAudioContext:true,webkitAudioPannerNode:true,webkitIDBCursor:true,webkitIDBDatabase:true,webkitIDBFactory:true,webkitIDBIndex:true,webkitIDBKeyRange:true,webkitIDBObjectStore:true,webkitIDBRequest:true,webkitIDBTransaction:true,webkitIndexedDB:true,webkitMediaStream:true,webkitNotifications:true,webkitOfflineAudioContext:true,webkitRTCPeerConnection:true,webkitSpeechGrammar:true,webkitSpeechGrammarList:true,webkitSpeechRecognition:true,webkitSpeechRecognitionError:true,webkitSpeechRecognitionEvent:true,webkitURL:true};
for(var S in window.__proto__){if(!window.__proto__.hasOwnProperty(S)||f[S]!==undefined||T[S]){continue
}if(S.length>2&&S.substr(0,2)==="on"){R[S]={proto:true,event:true}
}else{R[S]={proto:true}}}for(var S in window){if(!window.hasOwnProperty(S)||f[S]!==undefined||T[S]||R[S]){continue
}R[S]={window:true}}for(var S in Q){if(!Q.hasOwnProperty(S)||T[S]||R[S]){continue
}R[S]={white:true}}return R};var r=N();var e=function(){var Q=[];
for(var R in f){if(!f.hasOwnProperty(R)){continue}window[R]=f[R]
}};e();Registry.require("prepare");Registry.require("xmlhttprequest");
Registry.require("convert");Registry.require("helper");
var k=Registry.get("prepare").FEATURES;var x=Registry.get("xmlhttprequest");
var I=x.run;var F=Registry.get("helper");var u=F.clean;
Converter=Registry.get("convert");var C="DOMAttrModified";
var K=window.XMLHttpRequest;var v=null;var h=null;var n="";
var L={safeContext:k.RUNTIME.ALLOWS_SAFE_CONTEXT,scriptBlocker:false,proxy:false};
var H=null;var s=false;var i=false;var B=false;var y=false;
var A=function(){D|=(H>=60);EV|=(H>=80);V|=(H>=100);
ENV|=(H>=100);EMV|=(H>=100);TS|=(H>=100)};var p=function(){if(V||EV||D){console.log("content: detected DOMContentLoaded "+Eventing.contextId)
}B=true;if(s){c.sendMessage("domContentLoaded = true; if (typeof runAllLoadListeners !== 'undefined') runAllLoadListeners();")
}};var O=function(Q){if(!y){if(V||EV||D){console.log("content: first DOMNodeInserted "+Eventing.contextId)
}y=true}};var c={responses:{},initstate:0,sendMessage:function(S){var R="";
if(this.initstate==0){this.initstate=1}else{if(this.initstate==1){R+="var V = "+(V?"true":"false")+";\n";
R+="var D = "+(D?"true":"false")+";\n";R+="var ENV = "+(ENV?"true":"false")+";\n";
R+="var TS = "+(TS?"true":"false")+";\n";R+="var Converter = "+F.serialize(Converter)+";\n";
R+="var TMwin = { backup: {}, use: "+JSON.stringify(L)+", windowProps: "+JSON.stringify(r)+", isIncognito: "+chrome.extension.inIncognitoContext+" };\n";
R+="var TMJSON = JSON;\n";R+="var _background = false;\n";
R+="var console = window['console'];\n";R+="var JSON = window['JSON'];\n";
R+="function JSONcheck() {\n";R+="        if (!JSON.parse || JSON.parse != 'function parse() { [native code] }') {\n";
R+="              if (TMJSON && TMJSON.parse == 'function parse() { [native code] }') {\n";
R+="                  JSON = TMJSON;\n";R+="                  console.log('page: use JSON backup');\n";
R+="              } else {\n";R+="                  JSON = window.JSON;\n";
R+="                  console.log('page: use JSON fallback');\n";
R+="              }\n";R+="        } else if (ENV) { \n";
R+="            console.log('page: JSON is fine');\n";
R+="        }\n";R+="};\n";R+="JSONcheck();\n";R+="var Eventing = "+F.serialize(Eventing).replace("___eval___","eval")+";\n";
R+="var TM_do = "+J.toString().replace("___eval___","eval")+";\n";
R+="Eventing.init();\n";R+="function cleanup(evt) {\n";
R+="    Eventing.cleanup();\n";R+="    window.removeEventListener('unload', cleanup, false);\n";
R+="    delete Eventing;\n";R+="    delete TMJSON;\n";
R+="    delete TMwin;\n";R+="    delete Converter;\n";
R+="    delete TS;\n";R+="    delete ENV;\n";R+="};\n";
R+="window.addEventListener('unload', cleanup, false);\n";
R+="if (ENV) console.log('page: env initialized ("+Eventing.contextId+")');\n";
if(!L.safeContext){var Q=document.createElement("script");
Q.textContent="(function TM_mother() { "+R+"\n"+S+"})();";
Q.setAttribute("name","TM_internal");(document.head||document.body||document.documentElement||document).appendChild(Q);
Q.parentNode.removeChild(Q)}else{window["eval"]("(function TM_mother() { "+R+"\n"+S+"})();")
}this.initstate=2}else{if(this.initstate==2){Eventing.fireEvent(S)
}}}},getResponseId:function(R){var Q=0;if(R){while(Q==0||c.responses[Q]!=undefined){Q=(new Date()).getTime()+Math.floor(Math.random()*6121983+1)
}c.responses[Q]=R;if(V){console.log("content: registerResponseId "+Q)
}}return Q},runResponse:function(Q,S){if(V){console.log("content: runResponse "+Q+" -> "+Converter.decode(S))
}for(var R in c.responses){if(R==Q){var U="";try{U=JSON.parse(Converter.decode(S));
if(!c.responses[R]){console.log("Warn: content: responseId "+R+" is undefined!!!")
}else{c.responses[R](U)}}catch(T){console.log("content: Json parse error (runResponse):"+T+"\n"+S)
}c.responses[R]=null;return}}console.log("WARN: responseId "+Q+" not found!")
}};var q={ports:{},log:function(Q){if(_background){console.log("content: "+Q)
}else{Eventing.fireEvent({fn:"log",args:"page: "+Q})
}},onContentResponse:function(U,S,R,T){if(_background){if(V){this.log("onContentResponse "+this.id+" "+R+" "+T)
}c.runResponse(R,Converter.encode(T))}else{var Q=arguments;
Eventing.fireEvent({fn:"onContentResponse",args:Q})
}},onResponse:function(X,U,S,W){if(_background){try{if(V){this.log("onResponse "+this.id+" "+S+" "+W)
}var T=Converter.encode(W);var R="if (TMwin.chromeEmu) TMwin.chromeEmu.runResponse("+S+', "'+T+'")';
c.sendMessage(R);T="";R=""}catch(Y){console.log("Error: processing onResponse")
}}else{var Q=arguments;Eventing.fireEvent({fn:"onResponse",args:Q})
}},onConnectResponse:function(X,U,S,W){if(_background){try{if(V){this.log("onConnectResponse "+this.id+" "+S+" "+W)
}var T=Converter.encode(W);var R="if (TMwin.chromeEmu) TMwin.chromeEmu.runConnectResponse("+S+', "'+T+'")';
c.sendMessage(R);T="";R=""}catch(Y){console.log("Error: processing onConnectResponse")
}}else{var Q=arguments;Eventing.fireEvent({fn:"onConnectResponse",args:Q})
}},onContentRequest:function(U,T,R){if(_background){if(V){this.log("onContentRequest "+this.id+" "+R+" "+JSON.stringify(U))
}if(U.id&&this.id&&U.id!=this.id){if(V){this.log("filter: "+U.id+"!="+this.id)
}return}var S=Converter.encode(JSON.stringify({sender:T,request:U}));
var Q="if (TMwin.chromeEmu) TMwin.chromeEmu.runContentRequest("+R+', "'+S+'", 0);';
c.sendMessage(Q);S="";Q=""}else{console.log("Warn: onContentRequest from non BG not supported")
}},onMessage:function(U,T,R){if(_background){if(V){this.log("onMessage "+this.id+" "+R+" "+JSON.stringify(U))
}if(U.id&&this.id&&U.id!=this.id){if(V){this.log("filter: "+U.id+"!="+this.id)
}return}var S=Converter.encode(JSON.stringify({sender:T,request:U}));
var Q="if (TMwin.chromeEmu) TMwin.chromeEmu.runRequest("+R+', "'+S+'", 0)';
c.sendMessage(Q);S="";Q=""}else{console.log("Warn: onMessage from non BG not supported")
}},xmlHttpRequest:function(ab,Q,T){if(_background){if(V){this.log("xmlHttpRequest "+this.id+" "+T+" "+JSON.stringify(Q))
}var W=JSON.parse(Q);if(W.q_id){var S=W.q_id;W=window[S];
delete window[S]}var aa=function(ac){var ad="__x__"+Math.floor(Math.random()*6121983+1);
window[ad]=ac.response;ac.response=null;q.onConnectResponse(ab,0,T,JSON.stringify({onLoad:true,response:ac,r_id:ad}))
};var X=function(ac){q.onConnectResponse(ab,0,T,JSON.stringify({onReadyStateChange:true,response:ac}))
};var R=function(ac){q.onConnectResponse(ab,0,T,JSON.stringify({onProgress:true,response:ac}))
};var Y=function(ac){q.onConnectResponse(ab,0,T,JSON.stringify({onError:true,response:ac}))
};var U=function(ac){q.onConnectResponse(ab,0,T,JSON.stringify({onDone:true,onDisconnect:true,response:ac}))
};I(W,{callback:aa,onreadychange:X,onprogress:R,onerr:Y,done:U})
}else{var Z=arguments;Eventing.fireEvent({fn:"xmlHttpRequest",args:Z})
}},runUpdateListener:function(){console.log("WARN: not supported!")
},getUrl:function(){console.log("WARN: not supported!")
},sendExtensionMessage:function(U,T,R){if(_background){if(V){this.log("sendExtensionMessage "+this.id+" "+R+" "+T)
}var S=function(X){q.onResponse(U,0,R,JSON.stringify(X))
};var W=JSON.parse(T);W.responseId=R;chrome.extension.sendMessage(W,S);
W=null}else{var Q=arguments;Eventing.fireEvent({fn:"sendExtensionMessage",args:Q})
}},sendExtensionConnect:function(W,U,R){if(_background){var Y=JSON.parse(U);
Y.responseId=R;if(V){this.log("sendExtensionConnect "+this.id+" "+R+" "+U)
}var X=function(Z){q.onConnectResponse(W,0,R,JSON.stringify({onMessage:true,msg:Z}))
};var T=function(Z){q.onConnectResponse(W,0,R,JSON.stringify({onDisconnect:true}));
Y=null};var S=chrome.extension.connect({name:Y});S.onMessage.addListener(X);
S.onDisconnect.addListener(T);q.ports[R]=S}else{var Q=arguments;
Eventing.fireEvent({fn:"sendExtensionConnect",args:Q})
}},sendExtensionPortMessage:function(U,T,R){if(_background){if(V){this.log("sendExtensionPortMessage "+this.id+" "+R+" "+T)
}var S=q.ports[R];if(!S){this.log("Error: sendExtensionPortMessage unable to find port "+R)
}else{var W=JSON.parse(T);W.responseId=R;S.postMessage(W);
W=null}}else{var Q=arguments;Eventing.fireEvent({fn:"sendExtensionPortMessage",args:Q})
}},sendTabsRequest:function(){console.log("WARN: not supported!")
},createTab:function(){console.log("WARN: not supported!")
},getSelected:function(){console.log("WARN: not supported!")
},updateTab:function(){console.log("WARN: not supported!")
},onUpdated:function(){console.log("WARN: not supported!")
},getMessage:function(){console.log("WARN: not supported!")
},storageKey:function(){console.log("WARN: not supported!")
},storageRemoveItem:function(){console.log("WARN: not supported!")
},storageSetItem:function(){console.log("WARN: not supported!")
},storageGetItem:function(){console.log("WARN: not supported!")
},storageLength:function(){console.log("WARN: not supported!")
}};var J=function(T){var Q={};if(_background){Q=L}else{Q=TMwin.use
}if(Q.safeContext){var S=null;if(typeof T==="object"){S=JSON.stringify(T)
}else{S=JSON.stringify({method:"eval",arg:T})}var R=document.createEvent("MutationEvent");
R.initMutationEvent(Eventing.eventId+"#"+Eventing.contextId,false,false,null,null,null,S,R.ADDITION);
document.dispatchEvent(R);return R.returnValue}else{if(!_background){___eval___(T)
}else{console.log("ERROR: assert(use.safeContext)")
}}};var a=function(Q){var R=function(ae){var Y=null,ac;
try{Y=JSON.parse(ae.attrName);ac=window["passenger_"+ae.type.replace(/[^#]*#/,"")];
if(Y.method=="get"){var X=Y.path.split(".");var aa=window;
for(var ab=0;ab<X.length;ab++){aa=aa[X[ab]]}var Z=aa[Y.name];
var W={};W.value=Z;ac["_"+Y.id]=W}else{if(Y.method=="set"){var X=Y.path.split(".");
var aa=window;for(var ab=0;ab<X.length;ab++){aa=aa[X[ab]]
}var af=ac[Y.id];aa[Y.name]=af.value;ac["_"+Y.id]={}
}else{if(Y.method=="delete"){var X=Y.path.split(".");
var aa=window;for(var ab=0;ab<X.length;ab++){aa=aa[X[ab]]
}delete aa[Y.name];ac["_"+Y.id]={}}else{if(Y.method=="eval"){___eval___(Y.arg)
}}}}if(Y.id){delete ac[Y.id]}}catch(ad){}ae=null};var T="document.addEventListener('"+Eventing.eventId+"#"+Eventing.contextId+"', "+R.toString().replace("___eval___","eval")+", false);\n";
var S=Q.document.createElement("script");S.setAttribute("name","TM_internal");
S.innerHTML=T;var U=Q.document;(U.documentElement||U).appendChild(S);
S.parentNode.removeChild(S)};var G=function(T){var R=document.createElement("div");
var Q=null;try{R.setAttribute("onclick","return "+T+";");
Q=R.onclick()}catch(S){}R.setAttribute("onclick",null);
R.onclick=null;R=null;return Q};var g=function(){var S="passenger_"+Eventing.contextId;
var R="";R+="var prop = {};\n";R+="var passenger = {};\n";
R+="prop['"+S+"'] = {\n";R+="    value: passenger,\n";
R+="    enumerable: false,\n";R+="    writable: false,\n";
R+="    configurable: false\n";R+="};\n";R+="Object.defineProperties(window, prop);\n";
J(R);var Q=G(S);var T=(function(U){return{get:function(X){var W=Q[X];
delete Q[X];return W},set:function(W){var X=0;while(X==0||Q[X]!==undefined){X=(new Date()).getTime()+Math.floor(Math.random()*12061984+1)
}Q[X]=W||{};return X},getName:function(){return U}}
})(S);return T};var w=function(S,R){var Q=Proxy.create({get:function(W,U){var X=R.set({});
J({method:"get",name:U,id:X,path:S});var T=R.get("_"+X);
return T.value},set:function(W,U,X){var Y=R.set({value:X});
J({method:"set",name:U,id:Y,path:S});var T=R.get("_"+Y);
return T.value},"delete":function(W,U){var X=R.set({});
J({method:"delete",name:U,id:X,path:S});var T=R.get("_"+X);
return T.value}});return Q};var l=function(R){var Q;
Q=w("window",R);return Q};var z=function(){if(L.proxy==="unsafe"){console.warn("content: Chrome >= 27 detected! You've set the unsafeWindow retrieval method to 'unsafe'. This can cause problems because of incomplete environment separation between userscript and the page's scripts!")
}else{if(L.safeContext){var ac=Eventing.contextId;var ae={window:{forceUnsafe:true},top:{forceUnsafe:true}};
var W="";var aj=0;for(var af in ae){if(!ae.hasOwnProperty(af)){continue
}if(aj!=0){W+=", "}var ah=ae[af].fake?ae[af].fake:af;
var ab=ae[af].path?ae[af].path:af;W+=ah+":"+ab;aj++
}var Z=null;var al=G("{"+W+"}");if(USV){window.id="safe"
}if(al!==null){Z=al[ae.window.fake||"window"];if(USV){Z.id="unsafe"
}}else{Z=window;L.scriptBlocker=true;console.log("content: unsafeWindow retrieval failed! Do you use a script blocker like ScriptNo?");
var S=function(am){if(am.alert){alert(am.alert)}};var ag=document.getElementsByTagName("head");
var X=(ag&&ag.length)?!!ag[0].getElementById("xml-viewer-style"):false;
var Y=!!document.getElementsByTagName("catalog").length;
var T=(X||Y);var R={method:"scriptBlockerDetected",id:Eventing.contextId,url:window.location.origin+window.location.pathname,xml_style_detected:T,params:window.location.search+window.location.hash};
chrome.extension.sendMessage(R,S)}if(!Z){if(D||USV){console.debug("content: unable to get unsafeWindow, use window for now!")
}Z=window;al[ae.window.fake||"window"]=Z}a(Z);if(k.RUNTIME.NEED_UNSAFEWINDOW_PROXY){var ak=false;
var Q=false;var ai=false;if(D||USV){console.debug("content: Chrome >= 27 detected! -> try to enable unsafeWindow proxy")
}if(L.proxy==="proxy"){ak=!!window.Proxy;Q=true;ai=!ak
}else{if(L.proxy==="native"){ak=false;Q=true;ai=!ak
}}if(ai){console.warn("content: Chrome >= 27 detected! Tampermonkey needs a special Chrome option to be set. Visit http://tampermonkey.net/faq#Q404 for more infos.")
}if(Q||ak){window.unsafePassenger=g()}if(ak){Z=l(window.unsafePassenger);
al[ae.window.fake||"window"]=Z}}window.unsafeWindow=Z;
var aa=function(an,au,av,at){var aq=Object.getOwnPropertyDescriptor(an,au);
var ap=false;if(!at){try{if(aq){if(aq.writable){an[au]=av;
ap=true;if(D||USV){console.debug("env: write "+au)}u.push(function(){if(CV){console.log("clean: eobj["+au+"]")
}delete an[au]})}else{if(aq.configurable){var am={};
aq.value=av;am[au]=aq;Object.defineProperties(an,am);
ap=true;if(D||USV){console.debug("env: redefine "+au)
}u.push(function(){if(CV){console.log("clean: prop eobj["+au+"]")
}am[au].value=null;Object.defineProperties(an,am)})
}}}else{var am={};am[au]={value:av,enumerable:true,writable:false,configurable:true};
Object.defineProperties(an,am);ap=true;if(D||USV){console.debug("env: define "+au+" to "+JSON.stringify(aq))
}u.push(function(){if(CV){console.log("clean: prop eobj["+au+"]")
}am[au].value=null;Object.defineProperties(an,am)})
}}catch(ar){console.log(ar.message)}}if(!ap){var ao=au.replace(/^(.)/g,function(aw){return aw.toUpperCase()
});if(D||USV){console.debug("env: create unsafe"+ao)
}var am={};am["unsafe"+ao]={value:av,enumerable:true,writable:false,configurable:true};
Object.defineProperties(an,am);u.push(function(){if(CV){console.log("clean: prop eobj[unsafe"+ao+"]")
}am["unsafe"+ao].value=null;Object.defineProperties(an,am)
})}};var ad=function(ar,ao,am,ap){if(ap.override){for(var an in ap.override){if(!ap.override.hasOwnProperty(an)){continue
}ad(ar,an,al[an],ap.override[an])}}var aq=null;if(ap.value){aq=ap.value(ar,am)
}else{aq=am}aa(ar,ao,aq,ap.forceUnsafe)};if(D){console.debug("env: init "+window.location.href)
}for(var U in ae){if(!ae.hasOwnProperty(U)){continue
}ad(window,U,al[U],ae[U])}}}};function j(){var Q=[window.HTMLElement.prototype,document.__proto__];
for(var S=0;S<Q.length;S++){var R=function(){var T=Q[S];
var U=Object.getOwnPropertyDescriptor(T,"wrappedJSObject");
if(!U){var W={wrappedJSObject:{get:function(){return this
},enumerable:false,configurable:true},};Object.defineProperties(T,W);
u.push(function(){if(CV){console.log("clean: "+F.toType(T)+"[wrappedJSObject]")
}delete T.wrappedJSObject})}};R()}}function b(){var S=false;
var W=true;var T=function(){var Y=document.createElement("p");
var X=false;Y.addEventListener("DOMAttrModified",function(){X=true
},false);Y.setAttribute("class","trigger");return X
};if(T()){return}var Q=[window.HTMLElement.prototype,document.__proto__];
for(var U=0;U<Q.length;U++){var R=Q[U];if(!R.___addEventListener){R.___addEventListener=R.addEventListener;
R.___removeEventListener=R.removeEventListener;R.removeEventListener=function(Z,Y,X){this.___removeEventListener(Z,Y,X)
};R.addEventListener=function(X,ah,ac){if(X==C){if(this.outerHTML){var Z=this.outerHTML.split(">")[0]+" />";
var ad=this;var aa;if(this.parentNode){aa=this.parentNode
}else{aa=this}var ai=function(am,al,an,ak){var aj=document.createEvent("MutationEvent");
aj.initMutationEvent("DOMAttrModified",true,false,am,an||"",ak||"",al,(an==null)?aj.ADDITION:(ak==null)?aj.REMOVAL:aj.MODIFICATION);
am.dispatchEvent(aj)};try{var Y=function(ak){for(var am in ak){if(!ak.hasOwnProperty(am)){continue
}var aj=ak[am];if(aj.attributeName!=""&&aj.target){var an=aj.oldValue;
var al=aj.target.getAttribute(aj.attributeName);if(an!=al){ai(ad,aj.attributeName,an,al)
}}}};var ag=new WebKitMutationObserver(Y);ag.observe(ad,{childList:false,subtree:false,attributeOldValue:true,attributes:true})
}catch(af){var ab=function(am,al){if(al==undefined){al={}
}var aj=am.replace(/\\\"/g,"").replace(/".*?"/g,"").replace(/^<[a-zA-b0-9]* |>$/g,"").split(" ");
for(var ak in aj){if(!aj.hasOwnProperty(ak)){continue
}var an=aj[ak];if(an.substr(an.length-1,1)=="="){al[an.substr(0,an.length-1)]=null
}}return al};var ae=function(aq){if(aq.target==ad){var ak=aq.target.outerHTML.split(">")[0]+" />";
if(Z!=ak){var aj=document.createElement("div");aj.innerHTML=Z;
var at=aj.childNodes[0];var ao=document.createElement("div");
ao.innerHTML=ak;var am=ao.childNodes[0];var ar=ab(Z,ab(ak));
for(var an in ar){if(!ar.hasOwnProperty(an)){continue
}var al=at.getAttribute(an);var ap=am.getAttribute(an);
if(al!=ap){ai(ad,an,al,ap)}}Z=ak}}};W=false;if(!S){console.log("content: WARN unable to use MutationObserver -> fallback to DOMSubtreeModified event")
}S=true;aa.addEventListener("DOMSubtreeModified",ae,true)
}}}this.___addEventListener(X,ah,ac)};u.push(function(){R.removeEventListener=R.___removeEventListener;
R.addEventListener=R.___addEventListener})}}}Eventing={topframe:(window.self===window.top),eventId:"TM_do",contextId:null,rEventId:null,sEventId:null,eventSource:null,generateScriptId:function(){var Q="";
Q+=Math.floor(Math.random()*6121983+1);Q+=((new Date()).getTime().toString()).substr(10,7);
return Q},log:function(Q){console.log((_background?"content":"page")+": "+Q)
},alternativeEventSource:{element:{dispatchEvent:function(Q){if(!window.Registry._altEventing){window.Registry._altEventing={}
}if(window.Registry._altEventing[Q.type]){window.Registry._altEventing[Q.type](Q)
}},addEventListener:function(R,Q){if(!window.Registry._altEventing){window.Registry._altEventing={}
}window.Registry._altEventing[R]=Q},removeEventListener:function(Q){if(!window.Registry._altEventing){window.Registry._altEventing={}
}delete window.Registry._altEventing[Q]}},event:{encode:function(Q,R){return{type:Q,data:R}
},decode:function(Q){return Q.data}}},standardEventSource:{element:{dispatchEvent:function(){return document.dispatchEvent.apply(document,arguments)
},addEventListener:function(){return document.addEventListener.apply(document,arguments)
},removeEventListener:function(){return document.removeEventListener.apply(document,arguments)
}},event:{encode:function(R,S){var Q=document.createEvent("MutationEvent");
Q.initMutationEvent(R,false,false,null,null,null,Converter.encodeR(JSON.stringify(S)),Q.ADDITION);
return Q},decode:function(Q){return JSON.parse(Converter.decodeR(Q.attrName))
}}},init:function(){if(!Eventing.contextId){Eventing.log("Eventing.init() failed!!!");
return}var R="TM_toPage";var S="TM_toContent";var Q={};
if(_background){Q=L;Eventing.rEventId=S;Eventing.sEventId=R;
Eventing.eventHandler=Eventing.eventHandlerContent}else{Q=TMwin.use;
Eventing.rEventId=R;Eventing.sEventId=S;Eventing.eventHandler=Eventing.eventHandlerPage
}if(Q.safeContext){Eventing.eventSource=Eventing.alternativeEventSource
}else{Eventing.eventSource=Eventing.standardEventSource
}if(V){Eventing.log("Eventing initialized ("+Eventing.contextId+")")
}Eventing.registerListener()},fireEvent:function(S,Q){if(Q==undefined){Q=Eventing.sEventId+Eventing.contextId
}if(ENV){Eventing.log("fireEvent "+Q+" -> "+JSON.stringify(S))
}try{var R=Eventing.eventSource.event.encode(Q,S);Eventing.eventSource.element.dispatchEvent(R)
}catch(T){Eventing.log("Error: fire event "+Q+" -> "+JSON.stringify(S)+" "+T)
}},registerListener:function(){if(ENV){Eventing.log("registerListener "+Eventing.rEventId+Eventing.contextId)
}Eventing.eventSource.element.addEventListener(Eventing.rEventId+Eventing.contextId,Eventing.eventHandler,false)
},eventHandlerPage:function(Q){try{if(ENV){Eventing.log("Event received "+Eventing.rEventId+Eventing.contextId+" "+Q.attrName)
}var R=Eventing.eventSource.event.decode(Q);try{___eval___(R);
if(TS){Eventing.log("it took "+((new Date()).getTime()-Q.timeStamp)+" ms to process this event ->"+R.fn)
}}catch(S){console.log("page: Error: processing event! "+S.message+" -> ("+R+")")
}R=""}catch(S){Eventing.log("Error: retrieving event! "+S.message);
Eventing.log(Q)}Q=null},eventHandlerContent:function(Q){try{if(V){Eventing.log("Event received "+Eventing.rEventId+Eventing.contextId+" "+Q.attrName)
}var R=Eventing.eventSource.event.decode(Q);try{q[R.fn](R.args[0],R.args[1],R.args[2],R.args[3],R.args[4],R.args[5],R.args[6],R.args[7]);
if(TS){Eventing.log("it took "+((new Date()).getTime()-Q.timeStamp)+" ms to process this event ->"+R.fn)
}}catch(S){Eventing.log("Error: processing event ("+R.fn+")! "+S.message)
}R=""}catch(S){Eventing.log("Error: retrieving event! "+S.message);
Eventing.log(Q)}Q=null},cleanup:function(){if(Eventing.eventSource){Eventing.eventSource.element.removeEventListener(Eventing.rEventId+Eventing.contextId,Eventing.eventHandler,false)
}}};var P={init:function(){window.addEventListener("load",P.runHlp,false);
window.addEventListener("DOMNodeInserted",P.runHlp,false);
window.addEventListener("DOMContentLoaded",P.runHlp,false)
},runHlp:function(Q){if(!s){if(!document.head&&!document.body){if(Q==undefined){window.setTimeout(P.runHlp,100)
}return}else{P.cleanupHlp();P.run()}}},run:function(){if(!s&&h&&v){var R="var V = "+(V?"true":"false")+";\n";
R+="var EV = "+(EV?"true":"false")+";\n";R+="var ENV = "+(ENV?"true":"false")+";\n";
R+="var EMV = "+(EMV?"true":"false")+";\n";R+="var logLevel = "+H+";\n";
var Q="var tmCE = "+F.serialize(q)+";\nvar Event = function() {};\n";
var S="var TM_context_id = '"+Eventing.contextId+"';\n";
var T="";c.sendMessage("console.log('Tampermonkey started');");
if(B){T="TMwin.loadHappened = true;\n";T="TMwin.domContentLoaded = true;\n";
if(V||EV||D){console.log("content: Start ENV with DOMContentLoaded "+Eventing.contextId)
}}else{if(y){T="TMwin.loadHappened = true;\n";if(V||EV||D){console.log("content: Start ENV with loadHappened "+Eventing.contextId)
}}}if(T!=""&&(V||EV)){console.log("content: Start ENV normally "+Eventing.contextId)
}var U="(function () { "+R+S+n+Q+v+h+T+"})();";c.sendMessage(U);
h=null;v=null;Q=null;s=true}},cleanupHlp:function(){if(!s){window.removeEventListener("load",P.runHlp,false);
window.removeEventListener("DOMNodeInserted",P.runHlp,false);
window.removeEventListener("DOMContentLoaded",P.runHlp,false)
}}};function d(){if(V){console.log("content: cleanup!")
}var Q={method:"unLoad",id:Eventing.contextId,topframe:Eventing.topframe,url:window.location.origin+window.location.pathname,params:window.location.search+window.location.hash};
chrome.extension.sendMessage(Q,function(S){});try{Eventing.cleanup();
P.cleanupHlp()}catch(R){console.log("cleanup: Error: "+R.message)
}window.removeEventListener("DOMContentLoaded",p,false);
window.removeEventListener("DOMNodeInserted",O,false);
window.removeEventListener("unload",d,false);if(u!=null){u.finalize();
u=null}else{console.log("content: Warning: multiple unload events detected!!!")
}}function m(S,R,Q){if(!s){window.setTimeout(function(){m(S,R,Q)
},10);return true}if(i){var U=c.getResponseId(Q);q.onContentRequest(S,R,U)
}else{if(S.method=="getSrc"){Q({src:F.getSource(document)})
}else{if(S.method=="confirm"){var T=function(){var W=confirm(S.msg);
Q({confirm:W})};window.setTimeout(T,100)}else{if(S.method=="showMsg"){var T=function(){var W=function(){alert(S.msg)
};window.setTimeout(W,1);Q({})};window.setTimeout(T,100)
}}}}return true}var E=2;var o=function(){if(D){console.debug("content: create test XHR to check whether webRequest API is working")
}var S={method:"GET",url:"http://tampermonkey.net/empty.html",headers:{Referer:"http://doesnt.matter.com"},};
var R=function(T){if(T.webRequest){_webRequest=T.webRequest;
x.setWebRequest(_webRequest)}if(V){console.log("content: updated webRequest info")
}};var Q=function(){var T={method:"getWebRequestInfo",id:Eventing.contextId};
chrome.extension.sendMessage(T,R)};I(S,{done:Q})};var t=1;
var M=function(){var S="emulation.js";var T="environment.js";
var Q=function(Y){if(Y===undefined){if(D){console.debug("content: _early_ execution, connection to bg failed -> retry!")
}window.setTimeout(M,t);t*=2;return}L.proxy=Y.unsafeWindow;
if(k.RUNTIME.NEED_UNSAFEWINDOW_PROXY){if(L.proxy==="auto"){L.proxy="sandbox"
}L.safeContext&=(L.proxy!=="unsafe"&&L.proxy!=="sandbox");
W()}Eventing.init();H=Y.logLevel;A();if(V||D){console.log("content: Started ("+Eventing.contextId+", "+window.location.origin+window.location.pathname+")")
}if(s){c.sendMessage("TMwin.adjustLogLevel("+H+");\n")
}if(Y.enabledScriptsCount){if(V||D){console.log("content: start event processing for "+Eventing.contextId+" ("+Y.enabledScriptsCount+" to run)")
}i=true;if(Y.webRequest){_webRequest=Y.webRequest;x.setWebRequest(_webRequest);
if(_webRequest.headers&&!_webRequest.verified&&E-->0){o()
}}P.runHlp()}else{if(V||D){console.log("content: disable event processing for "+Eventing.contextId)
}i=false;s=true;P.cleanupHlp();d()}};var R=[];try{v="("+Registry.getRaw(S)+")();\n";
h="("+Registry.getRaw(T)+")();\n"}catch(X){}var W=function(){z();
b();j();c.sendMessage()};Eventing.contextId=Eventing.generateScriptId();
q.id=Eventing.contextId;if(!k.RUNTIME.NEED_UNSAFEWINDOW_PROXY){W()
}window.addEventListener("unload",d,false);window.addEventListener("DOMContentLoaded",p,false);
window.addEventListener("DOMNodeInserted",O,false);
chrome.extension.onMessage.addListener(m);var U={method:"prepare",id:Eventing.contextId,raw:R,topframe:Eventing.topframe,url:window.location.origin+window.location.pathname,params:window.location.search+window.location.hash};
chrome.extension.sendMessage(U,Q)};M()})();