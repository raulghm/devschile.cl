/*
selectivizr v1.0.3b - (c) Keith Clark, freely distributable under the terms 
of the MIT license.

selectivizr.com
*/
!function(e){function t(e){return e.replace(H,V).replace(I,function(e,t,a){for(var s=a.split(","),c=0,l=s.length;l>c;c++){var i=u(s[c])+K,o=[];s[c]=i.replace(L,function(e,t,a,s,c){if(t)return o.length>0&&(O.push({selector:i.substring(0,c),patches:o}),o=[]),t;var l=a?n(a):r(s);return l?(o.push(l),"."+l.className):e})}return t+s.join(",")})}function r(e){return!G||G.test(e)?{className:c(e),applyClass:!0}:null}function n(t){var r,n,a=!0,s=c(t.slice(1)),l=":not("==t.substring(0,5);l&&(t=t.slice(5,-1));var i=t.indexOf("(");if(i>-1&&(t=t.substring(0,i)),":"==t.charAt(0))switch(t.slice(1)){case"root":a=function(e){return l?e!=E:e==E};break;case"target":if(8==A){a=function(t){var r=function(){var e=location.hash,r=e.slice(1);return l?e==J||t.id!=r:e!=J&&t.id==r};return p(e,"hashchange",function(){f(t,s,r())}),r()};break}return!1;case"checked":a=function(e){return U.test(e.type)&&p(e,"propertychange",function(){"checked"==event.propertyName&&f(e,s,e.checked!==l)}),e.checked!==l};break;case"disabled":l=!l;case"enabled":a=function(e){return D.test(e.tagName)?(p(e,"propertychange",function(){"$disabled"==event.propertyName&&f(e,s,e.$disabled===l)}),C.push(e),e.$disabled=e.disabled,e.disabled===l):":enabled"==t?l:!l};break;case"focus":r="focus",n="blur";case"hover":r||(r="mouseenter",n="mouseleave"),a=function(e){return p(e,l?n:r,function(){f(e,s,!0)}),p(e,l?r:n,function(){f(e,s,!1)}),l};break;default:if(!z.test(t))return!1}return{className:s,applyClass:a}}function a(){for(var e,t,r,n,a=0;a<O.length;a++){t=O[a].selector,r=O[a].patches,n=t.replace(B,J),(n==J||n.charAt(n.length-1)==K)&&(n+="*");try{e=k(n)}catch(c){l("Selector '"+t+"' threw exception '"+c+"'")}if(e)for(var i=0,o=e.length;o>i;i++){for(var u=e[i],f=u.className,p=0,h=r.length;h>p;p++){var g=r[p];s(u,g)||!g.applyClass||g.applyClass!==!0&&g.applyClass(u)!==!0||(f=d(f,g.className,!0))}u.className=f}}}function s(e,t){return new RegExp("(^|\\s)"+t.className+"(\\s|$)").test(e.className)}function c(e){return j+"-"+(6==A&&w?M++:e.replace(P,function(e){return e.charCodeAt(0)}))}function l(t){e.console&&e.console.log(t)}function i(e){return e.replace(F,V)}function o(e){return i(e).replace(Y,K)}function u(e){return o(e.replace(Q,V).replace(W,V))}function f(e,t,r){var n=e.className,a=d(n,t,r);a!=n&&(e.className=a,e.parentNode.className+=J)}function d(e,t,r){var n=RegExp("(^|\\s)"+t+"(\\s|$)"),a=n.test(e);return r?a?e:e+K+t:a?i(e.replace(n,V)):e}function p(e,t,r){e.attachEvent("on"+t,r)}function h(){if(e.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){return null}}function g(e){return T.open("GET",e,!1),T.send(),200==T.status?T.responseText:J}function v(e,t,r){function n(e){return e.substring(0,e.indexOf("//"))}function a(e){return e.substring(0,e.indexOf("/",8))}if(t||(t=_),"//"==e.substring(0,2)&&(e=n(t)+e),/^https?:\/\//i.test(e))return r||a(t)==a(e)?e:null;if("/"==e.charAt(0))return a(t)+e;var s=t.split(/[?#]/)[0];return"?"!=e.charAt(0)&&"/"!=s.charAt(s.length-1)&&(s=s.substring(0,s.lastIndexOf("/")+1)),s+e}function b(e){return e?g(e).replace(R,J).replace(X,function(t,r,n,a,s,c){var l=b(v(n||s,e));return c?"@media "+c+" {"+l+"}":l}).replace(q,function(t,r,n,a){return n=n||J,r?t:" url("+n+v(a,e,!0)+n+") "}):J}function m(){for(var e,r,n=0;n<S.styleSheets.length;n++)r=S.styleSheets[n],r.href!=J&&(e=v(r.href),e&&(r.cssText=r.rawCssText=t(b(e))))}function y(){a(),C.length>0&&setInterval(function(){for(var e=0,t=C.length;t>e;e++){var r=C[e];r.disabled!==r.$disabled&&(r.disabled?(r.disabled=!1,r.$disabled=!0,r.disabled=!0):r.$disabled=r.disabled)}},250)}/*!
* ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
*
* Author: Diego Perini (diego.perini at gmail.com)
* Summary: cross-browser wrapper for DOMContentLoaded
* Updated: 20101020
* License: MIT
* Version: 1.2
*
* URL:
* http://javascript.nwbox.com/ContentLoaded/
* http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
*
*/
function N(e,t){var r=!1,n=!0,a=function(n){("readystatechange"!=n.type||"complete"==S.readyState)&&(("load"==n.type?e:S).detachEvent("on"+n.type,a,!1),!r&&(r=!0)&&t.call(e,n.type||n))},s=function(){try{E.doScroll("left")}catch(e){return void setTimeout(s,50)}a("poll")};if("complete"==S.readyState)t.call(e,J);else{if(S.createEventObject&&E.doScroll){try{n=!e.frameElement}catch(c){}n&&s()}p(S,"readystatechange",a),p(e,"load",a)}}var $=navigator.userAgent.match(/MSIE (\d+)/);if(!$)return!1;var S=document,E=S.documentElement,T=h(),A=$[1];if(!("CSS1Compat"!=S.compatMode||6>A||A>8)&&T){var k,x={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},C=[],O=[],M=0,w=!0,j="slvzr",R=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g,X=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))\s*([^;]*);/g,q=/(behavior\s*?:\s*)?\burl\(\s*(["']?)(?!data:)([^"')]+)\2\s*\)/g,z=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,H=/:(:first-(?:line|letter))/g,I=/((?:^|(?:\s*})+)(?:\s*@media[^{]+{)?)\s*([^\{]*?[\[:][^{]+)/g,L=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,B=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,P=/[^\w-]/g,D=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/,U=/^(checkbox|radio)$/,G=A>6?/[\$\^*]=(['"])\1/:null,Q=/([(\[+~])\s+/g,W=/\s+([)\]+~])/g,Y=/\s+/g,F=/^\s*((?:[\S\s]*\S)?)\s*$/,J="",K=" ",V="$1",Z=S.getElementsByTagName("BASE"),_=Z.length>0?Z[0].href:S.location.href;m(),N(e,function(){for(var t in x){var r,n,a=e;if(e[t]){for(r=x[t].replace("*",t).split(".");(n=r.shift())&&(a=a[n]););if("function"==typeof a)return k=a,void y()}}})}}(this);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,a=n.firstElementChild||n.firstChild,s=e.createElement("body"),i=e.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(s,a),t=42===i.offsetWidth,n.removeChild(s),{matches:t,media:e}}}(e.document)}(this),/*! Respond.js v1.4.0: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */
function(e){"use strict";function t(){E(!0)}var n={};e.respond=n,n.update=function(){};var a=[],s=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),i=function(e,t){var n=s();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))};if(n.ajax=i,n.queue=a,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var r,o,l,m=e.document,d=m.documentElement,h=[],u=[],c=[],f={},p=30,y=m.getElementsByTagName("head")[0]||d,g=m.getElementsByTagName("base")[0],x=y.getElementsByTagName("link"),v=function(){var e,t=m.createElement("div"),n=m.body,a=d.style.fontSize,s=n&&n.style.fontSize,i=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=i=m.createElement("body"),n.style.background="none"),d.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),i&&d.insertBefore(n,d.firstChild),e=t.offsetWidth,i?d.removeChild(n):n.removeChild(t),d.style.fontSize=a,s&&(n.style.fontSize=s),e=l=parseFloat(e)},E=function(t){var n="clientWidth",a=d[n],s="CSS1Compat"===m.compatMode&&a||m.body[n]||a,i={},f=x[x.length-1],g=(new Date).getTime();if(t&&r&&p>g-r)return e.clearTimeout(o),void(o=e.setTimeout(E,p));r=g;for(var w in h)if(h.hasOwnProperty(w)){var S=h[w],T=S.minw,C=S.maxw,b=null===T,$=null===C,z="em";T&&(T=parseFloat(T)*(T.indexOf(z)>-1?l||v():1)),C&&(C=parseFloat(C)*(C.indexOf(z)>-1?l||v():1)),S.hasquery&&(b&&$||!(b||s>=T)||!($||C>=s))||(i[S.media]||(i[S.media]=[]),i[S.media].push(u[S.rules]))}for(var M in c)c.hasOwnProperty(M)&&c[M]&&c[M].parentNode===y&&y.removeChild(c[M]);c.length=0;for(var R in i)if(i.hasOwnProperty(R)){var O=m.createElement("style"),k=i[R].join("\n");O.type="text/css",O.media=R,y.insertBefore(O,f.nextSibling),O.styleSheet?O.styleSheet.cssText=k:O.appendChild(m.createTextNode(k)),c.push(O)}},w=function(e,t,a){var s=e.replace(n.regex.keyframes,"").match(n.regex.media),i=s&&s.length||0;t=t.substring(0,t.lastIndexOf("/"));var r=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},o=!i&&a;t.length&&(t+="/"),o&&(i=1);for(var l=0;i>l;l++){var m,d,c,f;o?(m=a,u.push(r(e))):(m=s[l].match(n.regex.findStyles)&&RegExp.$1,u.push(RegExp.$2&&r(RegExp.$2))),c=m.split(","),f=c.length;for(var p=0;f>p;p++)d=c[p],h.push({media:d.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:u.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}E()},S=function(){if(a.length){var t=a.shift();i(t.href,function(n){w(n,t.href,t.media),f[t.href]=!0,e.setTimeout(function(){S()},0)})}},T=function(){for(var t=0;t<x.length;t++){var n=x[t],s=n.href,i=n.media,r=n.rel&&"stylesheet"===n.rel.toLowerCase();s&&r&&!f[s]&&(n.styleSheet&&n.styleSheet.rawCssText?(w(n.styleSheet.rawCssText,s,i),f[s]=!0):(!/^([a-zA-Z:]*\/\/)/.test(s)&&!g||s.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===s.substring(0,2)&&(s=e.location.protocol+s),a.push({href:s,media:i})))}S()};T(),n.update=T,n.getEmValue=v,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);
/**
* @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=y.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=n+" "+e,m(t)}function c(e){var t=E[e[p]];return t||(t={},v++,e[p]=v,E[v]=t),t}function o(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=c(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():g.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||f.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||c(e);for(var a=n.frag.cloneNode(),o=0,i=r(),l=i.length;l>o;o++)a.createElement(i[o]);return a}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function m(e){e||(e=t);var r=c(e);return!y.shivCSS||s||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||l(e,r),e}var s,u,d="3.7.2",h=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",v=0,E={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){s=!0,u=!0}}();var y={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:h.shivCSS!==!1,supportsUnknownElements:u,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:m,createElement:o,createDocumentFragment:i,addElements:a};e.html5=y,m(t)}(this,document);
/*!
 * tinyModal 
 * Â©2015 - Jorge EpuÃ±an
 */
var tinyModal = (function(){

  if (!document.querySelector || !('classList' in document.body)) {
    return false;
  }

  var container = document.body,
      popup = document.querySelector(".tinymodal-window-open"),
      status = null;

  container.className = container.className.replace(/\s+$/gi, "") + " tinymodal-ready";

  // utils
  function addClass(element,name) {
    element.className = element.className.replace(/\s+$/gi,"") + " " + name;
  }
  function removeClass(element,name) {
    if( element ) {
      element.className = element.className.replace(name, "");
    }
  }

  // add cover
  function addCover(){
    var newCover = document.createElement("div");
    addClass(newCover,"tinymodal-cover");
    document.body.appendChild(newCover); 
  }
  // remove cover
  function removeCover(){
    var actualCover = document.querySelector(".tinymodal-cover");
    if( actualCover ) {
      actualCover.remove(); 
    }
  }
  // deactivate on ESC key
  function onEscKey(event) {
    if(event.keyCode === 27) {
      deactivate();
    }
  }
  // deactivate on cover click
  function onCoverClick(event) {
    if(event.target === cover || event.target === close) {
      deactivate();
    }
  }

  // get and set modal size by data-size
  function getSize(element){
    var size = element.dataset.size;
    if(size) {
      var sizes = size.split(",");
      element.setAttribute("style", "width:" + sizes[0] + ";height:" + sizes[1] + ";");
    }
  }

  // get and set modal class if available, by data-classname
  function getNewClass(element){
    var newClass = element.dataset.newclass;
    if(newClass) {
      addClass(element, newClass)
    }
  }

  // activate function
  function activate(state) {
    addCover();
    var cover = document.querySelector(".tinymodal-cover"),
        close = document.querySelectorAll(".tinymodal-close");
    if(close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", deactivate, false);
      }
    }
    document.addEventListener("keyup", onEscKey, false);
    cover.addEventListener("click", deactivate, false);
    cover.addEventListener("touchstart", deactivate, false);
    removeClass(popup,status);
    addClass(popup,state);
    getSize(popup);
    getNewClass(popup);
    setTimeout(function(){
      addClass(container, "tinymodal-active");
    }, 0);
    status = state;
  }

  // deactivate function
  function deactivate() {
    document.removeEventListener("keyup", onEscKey, false);
    document.removeEventListener("click", onCoverClick, false);
    document.removeEventListener("touchstart", onCoverClick, false);
    removeCover();
    removeClass(container, "tinymodal-active");
    removeClass(popup, "tinymodal-window-open");
    if(popup) {
      if(popup.classList.contains("tinymodal-new")) {
        setTimeout(function(){
          popup.parentNode.removeChild(popup);
        }, 300);
      }
    }
  }

  // openModal public method, w/ onOpen callback
  function openModal(selector,onOpen){
    if (selector.indexOf("#") > -1) {
      popup = document.querySelector(selector);
    } else if (selector.indexOf(".jpg") > -1 || selector.indexOf(".JPG") > -1 || selector.indexOf(".png") > -1 || selector.indexOf(".PNG") > -1) {
      popup = document.createElement("aside");
      popup.setAttribute("class","tinymodal-window tinymodal-new");
      popup.innerHTML = "<img src=\"" + selector + "\" />";
      document.body.appendChild(popup); 
    }
    //if(selector.dataset.newclass) {
      //var newClass = selector.dataset.newclass;
    //}
    addClass(popup, "tinymodal-window-open");
    activate("");
    if(onOpen && typeof(onOpen) === "function"){
      onOpen.call(popup);
    }
    return this;
  }

  // closeModal public method, w/ onClose callback
  function closeModal(onClose) {
    deactivate();
    if(onClose && typeof(onClose) === "function"){
      onClose.call(popup);
    }
  }

  return {
    openModal: openModal,
    closeModal: closeModal
  };

})();
/**
 * typewritter-effect
 * v0.0.3
 * built: Mon, 27 Jun 2016 14:26:56 GMT
 * git: https://github.com/ndaidong/typewritter
 * author: @ndaidong
 * License: MIT
**/
;(function(e,a){var b=window||{};b.define&&b.define.amd?b.define([],a):b.exports?b.exports=a():b[e]=a()})("TypeWritter",function(){var e=function(a){var b=a.extractClass,c=a.cursorClass,f=void 0===a.sentences?[]:a.sentences;a=document.getElementById(a.containerId);if(!a)throw Error("containerId does not exist!");b=a.querySelectorAll("."+b);if(b.length)for(var d=0;d<b.length;d++){var e=b[d].textContent;0<e.length&&f.push(e)}if(!f.length)throw Error("sentences could not be empty!");a.innerHTML="";b=
document.createElement("SPAN");a.appendChild(b);d=document.createElement("SPAN");d.className=c;d.innerHTML="|";a.appendChild(d);this.sentences=f;this.el=b;this.typingTimer=null;this.currLetter=-1;this.currSentence=0;return this};e.prototype.clearBack=function(){var a=this,b=a.sentences,c=a.typingTimer,f=a.currLetter,d=a.currSentence,e=a.el;c&&clearTimeout(c);c=b[d];b=20*Math.random()+10;0<=f?(f--,c=c.substring(0,f),e.innerHTML=c,c=setTimeout(function(){a.clearBack()},b)):(d++,c=setTimeout(function(){a.writeNext()},
b));this.currLetter=f;this.currSentence=d;this.typingTimer=c;return this};e.prototype.writeNext=function(){var a=this,b=a.sentences,c=a.typingTimer,f=a.currLetter,d=a.currSentence,e=a.el,g=b.length;if(0===g)return!1;c&&clearTimeout(c);d>=g&&(d=0);b=b[d];c=b.split("").length;f<c?(f++,b=b.substring(0,f),e.innerHTML=b,c=setTimeout(function(){a.writeNext()},100*Math.random()+50)):c=setTimeout(function(){a.clearBack()},3E3);this.currLetter=f;this.currSentence=d;this.typingTimer=c;return this};e.prototype.stop=
function(){this.typingTimer&&clearTimeout(this.typingTimer);this.currLetter=-1;this.currSentence=0;this.typingTimer=null;return this};return{start:function(a){return(new e({containerId:a.containerId,extractClass:a.extractClass,cursorClass:a.cursorClass,sentences:a.sentences})).stop().writeNext()}}});