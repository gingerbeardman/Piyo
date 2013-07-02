
(function(){var b=20;var a=537.33;try{a=Number(navigator.userAgent.match(/AppleWebKit\/([0-9]+\.[0-9]+)/)[1]);
b=parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2])
}catch(f){}var d={createNotification:function(e){},createHTMLNotification:function(e){}};
var c={RUNTIME:{CHROME:true,CHROME_VERSION:b,WEBKIT_VERSION:a,ALLOWS_SAFE_CONTEXT:true,ALLOWS_FAST_DOCUMENT_START:true,NEED_UNSAFEWINDOW_PROXY:(a>=537.35)},ACTIONMENU:{COLUMNS:2},SELF:{ID:(function(){var g=chrome.extension.getURL("/");
var e=g.replace(/\//gi,"").split(":");return(e.length<2)?"":e[1]
})()},DB:{USE_LOCAL:true},XMLHTTPREQUEST:{RETRIES:5},PINGPONG:{RETRIES:5},MISC:{TIMEOUT:1},WEBREQUEST:{use:true,headers:true,verified:false,verifyCnt:20,id:0,prefix:"TM_",testprefix:"foobar"},HTML5:{LOCALSTORAGE:null,WEBKITNOTIFICATIONS:d},REQUESTS:{HAS_SENDER_ID:true,INTERNAL_PAGE_URL:"chrome-extension://",GET_INTERNAL_PAGE_REGEXP:function(){return new RegExp(c.REQUESTS.INTERNAL_PAGE_URL+c.SELF.ID+"/([a-zA-Z]*).html")
}},OPTIONS:{HAS_CSP:true,HAS_TESLA:true,HAS_TAMPERFIRE:true},PREPARED_FOR_BACKGROUND:function(){try{c.HTML5.LOCALSTORAGE=window.localStorage
}catch(g){console.warn("prep: window.localStorage will be unavailable")
}try{c.HTML5.WEBKITNOTIFICATIONS=window.webkitNotifications
}catch(g){console.warn("prep: window.webkitNotifications will be unavailable")
}return c}};Registry.register("prepare",{FEATURES:c})
})();