import{initializeApp as _e}from"https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";import{getAnalytics as ye}from"https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const be={apiKey:"AIzaSyCiF8-qVW-0lHVnf2-yrxWgQ-h8bfybURY",authDomain:"mercury-tour.firebaseapp.com",databaseURL:"https://mercury-tour-default-rtdb.europe-west1.firebasedatabase.app",projectId:"mercury-tour",storageBucket:"mercury-tour.firebasestorage.app",messagingSenderId:"910181577746",appId:"1:910181577746:web:699ad75b4d60fdccea14cb",measurementId:"G-LY5R2TEQ5Z"},we=_e(be);ye(we);var q=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},L=le,xe=K,Ae=Ee,$e=ne,ke=oe,Te=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function K(t){for(var e=[],i=0,a=0,s="",n;(n=Te.exec(t))!=null;){var r=n[0],l=n[1],o=n.index;if(s+=t.slice(a,o),a=o+r.length,l){s+=l[1];continue}s&&(e.push(s),s="");var c=n[2],d=n[3],h=n[4],v=n[5],f=n[6],k=n[7],ge=f==="+"||f==="*",me=f==="?"||f==="*",Q=c||"/",ve=h||v||(k?".*":"[^"+Q+"]+?");e.push({name:d||i++,prefix:c||"",delimiter:Q,optional:me,repeat:ge,pattern:Ue(ve)})}return a<t.length&&(s+=t.substr(a)),s&&e.push(s),e}function Ee(t){return ne(K(t))}function ne(t){for(var e=new Array(t.length),i=0;i<t.length;i++)typeof t[i]=="object"&&(e[i]=new RegExp("^"+t[i].pattern+"$"));return function(a){for(var s="",n=a||{},r=0;r<t.length;r++){var l=t[r];if(typeof l=="string"){s+=l;continue}var o=n[l.name],c;if(o==null){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to be defined')}if(q(o)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received "'+o+'"');if(o.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<o.length;d++){if(c=encodeURIComponent(o[d]),!e[r].test(c))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received "'+c+'"');s+=(d===0?l.prefix:l.delimiter)+c}continue}if(c=encodeURIComponent(o),!e[r].test(c))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+c+'"');s+=l.prefix+c}return s}}function J(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function Ue(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function Z(t,e){return t.keys=e,t}function re(t){return t.sensitive?"":"i"}function Ne(t,e){var i=t.source.match(/\((?!\?)/g);if(i)for(var a=0;a<i.length;a++)e.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return Z(t,e)}function je(t,e,i){for(var a=[],s=0;s<t.length;s++)a.push(le(t[s],e,i).source);var n=new RegExp("(?:"+a.join("|")+")",re(i));return Z(n,e)}function Ce(t,e,i){for(var a=K(t),s=oe(a,i),n=0;n<a.length;n++)typeof a[n]!="string"&&e.push(a[n]);return Z(s,e)}function oe(t,e){e=e||{};for(var i=e.strict,a=e.end!==!1,s="",n=t[t.length-1],r=typeof n=="string"&&/\/$/.test(n),l=0;l<t.length;l++){var o=t[l];if(typeof o=="string")s+=J(o);else{var c=J(o.prefix),d=o.pattern;o.repeat&&(d+="(?:"+c+d+")*"),o.optional?c?d="(?:"+c+"("+d+"))?":d="("+d+")?":d=c+"("+d+")",s+=d}}return i||(s=(r?s.slice(0,-2):s)+"(?:\\/(?=$))?"),a?s+="$":s+=i&&r?"":"(?=\\/|$)",new RegExp("^"+s,re(e))}function le(t,e,i){return e=e||[],q(e)?i||(i={}):(i=e,e=[]),t instanceof RegExp?Ne(t,e):q(t)?je(t,e,i):Ce(t,e,i)}L.parse=xe;L.compile=Ae;L.tokensToFunction=$e;L.tokensToRegExp=ke;var T=typeof document<"u",g=typeof window<"u",D=typeof history<"u",Re=typeof process<"u",z=T&&document.ontouchstart?"touchstart":"click",_=g&&!!(window.history.location||window.location);function p(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}p.prototype.configure=function(t){var e=t||{};this._window=e.window||g&&window,this._decodeURLComponents=e.decodeURLComponents!==!1,this._popstate=e.popstate!==!1&&g,this._click=e.click!==!1&&T,this._hashbang=!!e.hashbang;var i=this._window;this._popstate?i.addEventListener("popstate",this._onpopstate,!1):g&&i.removeEventListener("popstate",this._onpopstate,!1),this._click?i.document.addEventListener(z,this.clickHandler,!1):T&&i.document.removeEventListener(z,this.clickHandler,!1),this._hashbang&&g&&!D?i.addEventListener("hashchange",this._onpopstate,!1):g&&i.removeEventListener("hashchange",this._onpopstate,!1)};p.prototype.base=function(t){if(arguments.length===0)return this._base;this._base=t};p.prototype._getBase=function(){var t=this._base;if(t)return t;var e=g&&this._window&&this._window.location;return g&&this._hashbang&&e&&e.protocol==="file:"&&(t=e.pathname),t};p.prototype.strict=function(t){if(arguments.length===0)return this._strict;this._strict=t};p.prototype.start=function(t){var e=t||{};if(this.configure(e),e.dispatch!==!1){this._running=!0;var i;if(_){var a=this._window,s=a.location;this._hashbang&&~s.hash.indexOf("#!")?i=s.hash.substr(2)+s.search:this._hashbang?i=s.search+s.hash:i=s.pathname+s.search+s.hash}this.replace(i,null,!0,e.dispatch)}};p.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(z,this.clickHandler,!1),g&&t.removeEventListener("popstate",this._onpopstate,!1),g&&t.removeEventListener("hashchange",this._onpopstate,!1)}};p.prototype.show=function(t,e,i,a){var s=new S(t,e,this),n=this.prevContext;return this.prevContext=s,this.current=s.path,i!==!1&&this.dispatch(s,n),s.handled!==!1&&a!==!1&&s.pushState(),s};p.prototype.back=function(t,e){var i=this;if(this.len>0){var a=this._window;D&&a.history.back(),this.len--}else setTimeout(t?function(){i.show(t,e)}:function(){i.show(i._getBase(),e)})};p.prototype.redirect=function(t,e){var i=this;typeof t=="string"&&typeof e=="string"&&M.call(this,t,function(a){setTimeout(function(){i.replace(e)},0)}),typeof t=="string"&&typeof e>"u"&&setTimeout(function(){i.replace(t)},0)};p.prototype.replace=function(t,e,i,a){var s=new S(t,e,this),n=this.prevContext;return this.prevContext=s,this.current=s.path,s.init=i,s.save(),a!==!1&&this.dispatch(s,n),s};p.prototype.dispatch=function(t,e){var i=0,a=0,s=this;function n(){var l=s.exits[a++];if(!l)return r();l(e,n)}function r(){var l=s.callbacks[i++];if(t.path!==s.current){t.handled=!1;return}if(!l)return He.call(s,t);l(t,r)}e?n():r()};p.prototype.exit=function(t,e){if(typeof t=="function")return this.exit("*",t);for(var i=new B(t,null,this),a=1;a<arguments.length;++a)this.exits.push(i.middleware(arguments[a]))};p.prototype.clickHandler=function(t){if(this._which(t)===1&&!(t.metaKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented){var e=t.target,i=t.path||(t.composedPath?t.composedPath():null);if(i){for(var a=0;a<i.length;a++)if(i[a].nodeName&&i[a].nodeName.toUpperCase()==="A"&&i[a].href){e=i[a];break}}for(;e&&e.nodeName.toUpperCase()!=="A";)e=e.parentNode;if(!(!e||e.nodeName.toUpperCase()!=="A")){var s=typeof e.href=="object"&&e.href.constructor.name==="SVGAnimatedString";if(!(e.hasAttribute("download")||e.getAttribute("rel")==="external")){var n=e.getAttribute("href");if(!(!this._hashbang&&this._samePath(e)&&(e.hash||n==="#"))&&!(n&&n.indexOf("mailto:")>-1)&&!(s?e.target.baseVal:e.target)&&!(!s&&!this.sameOrigin(e.href))){var r=s?e.href.baseVal:e.pathname+e.search+(e.hash||"");r=r[0]!=="/"?"/"+r:r,Re&&r.match(/^\/[a-zA-Z]:\//)&&(r=r.replace(/^\/[a-zA-Z]:\//,"/"));var l=r,o=this._getBase();r.indexOf(o)===0&&(r=r.substr(o.length)),this._hashbang&&(r=r.replace("#!","")),!(o&&l===r&&(!_||this._window.location.protocol!=="file:"))&&(t.preventDefault(),this.show(l))}}}}};p.prototype._onpopstate=function(){var t=!1;return g?(T&&document.readyState==="complete"?t=!0:window.addEventListener("load",function(){setTimeout(function(){t=!0},0)}),function(i){if(t){var a=this;if(i.state){var s=i.state.path;a.replace(s,i.state)}else if(_){var n=a._window.location;a.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}}):function(){}}();p.prototype._which=function(t){return t=t||g&&this._window.event,t.which==null?t.button:t.which};p.prototype._toURL=function(t){var e=this._window;if(typeof URL=="function"&&_)return new URL(t,e.location.toString());if(T){var i=e.document.createElement("a");return i.href=t,i}};p.prototype.sameOrigin=function(t){if(!t||!_)return!1;var e=this._toURL(t),i=this._window,a=i.location;return a.protocol===e.protocol&&a.hostname===e.hostname&&(a.port===e.port||a.port===""&&(e.port==80||e.port==443))};p.prototype._samePath=function(t){if(!_)return!1;var e=this._window,i=e.location;return t.pathname===i.pathname&&t.search===i.search};p.prototype._decodeURLEncodedURIComponent=function(t){return typeof t!="string"?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t};function ce(){var t=new p;function e(){return M.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=ce,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(i){t.len=i}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(i){t.current=i}}),e.Context=S,e.Route=B,e}function M(t,e){if(typeof t=="function")return M.call(this,"*",t);if(typeof e=="function")for(var i=new B(t,null,this),a=1;a<arguments.length;++a)this.callbacks.push(i.middleware(arguments[a]));else typeof t=="string"?this[typeof e=="string"?"redirect":"show"](t,e):this.start(t)}function He(t){if(!t.handled){var e,i=this,a=i._window;i._hashbang?e=_&&this._getBase()+a.location.hash.replace("#!",""):e=_&&a.location.pathname+a.location.search,e!==t.canonicalPath&&(i.stop(),t.handled=!1,_&&(a.location.href=t.canonicalPath))}}function Pe(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function S(t,e,i){var a=this.page=i||M,s=a._window,n=a._hashbang,r=a._getBase();t[0]==="/"&&t.indexOf(r)!==0&&(t=r+(n?"#!":"")+t);var l=t.indexOf("?");this.canonicalPath=t;var o=new RegExp("^"+Pe(r));if(this.path=t.replace(o,"")||"/",n&&(this.path=this.path.replace("#!","")||"/"),this.title=T&&s.document.title,this.state=e||{},this.state.path=t,this.querystring=~l?a._decodeURLEncodedURIComponent(t.slice(l+1)):"",this.pathname=a._decodeURLEncodedURIComponent(~l?t.slice(0,l):t),this.params={},this.hash="",!n){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=a._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}S.prototype.pushState=function(){var t=this.page,e=t._window,i=t._hashbang;t.len++,D&&e.history.pushState(this.state,this.title,i&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};S.prototype.save=function(){var t=this.page;D&&t._window.history.replaceState(this.state,this.title,t._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function B(t,e,i){var a=this.page=i||G,s=e||{};s.strict=s.strict||a._strict,this.path=t==="*"?"(.*)":t,this.method="GET",this.regexp=L(this.path,this.keys=[],s)}B.prototype.middleware=function(t){var e=this;return function(i,a){if(e.match(i.path,i.params))return i.routePath=e.path,t(i,a);a()}};B.prototype.match=function(t,e){var i=this.keys,a=t.indexOf("?"),s=~a?t.slice(0,a):t,n=this.regexp.exec(decodeURIComponent(s));if(!n)return!1;delete e[0];for(var r=1,l=n.length;r<l;++r){var o=i[r-1],c=this.page._decodeURLEncodedURIComponent(n[r]);(c!==void 0||!hasOwnProperty.call(e,o.name))&&(e[o.name]=c)}return!0};var G=ce(),m=G,Le=G;m.default=Le;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,O=j.trustedTypes,X=O?O.createPolicy("lit-html",{createHTML:t=>t}):void 0,de="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+b,Se=`<${he}>`,$=document,C=()=>$.createComment(""),R=t=>t===null||typeof t!="object"&&typeof t!="function",Y=Array.isArray,Be=t=>Y(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",W=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ee=/-->/g,te=/>/g,x=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,se=/"/g,pe=/^(?:script|style|textarea|title)$/i,Ie=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),y=Ie(1),H=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ae=new WeakMap,A=$.createTreeWalker($,129);function ue(t,e){if(!Y(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(e):e}const Oe=(t,e)=>{const i=t.length-1,a=[];let s,n=e===2?"<svg>":e===3?"<math>":"",r=N;for(let l=0;l<i;l++){const o=t[l];let c,d,h=-1,v=0;for(;v<o.length&&(r.lastIndex=v,d=r.exec(o),d!==null);)v=r.lastIndex,r===N?d[1]==="!--"?r=ee:d[1]!==void 0?r=te:d[2]!==void 0?(pe.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=x):d[3]!==void 0&&(r=x):r===x?d[0]===">"?(r=s??N,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?x:d[3]==='"'?se:ie):r===se||r===ie?r=x:r===ee||r===te?r=N:(r=x,s=void 0);const f=r===x&&t[l+1].startsWith("/>")?" ":"";n+=r===N?o+Se:h>=0?(a.push(c),o.slice(0,h)+de+o.slice(h)+b+f):o+b+(h===-2?l:f)}return[ue(t,n+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]};class P{constructor({strings:e,_$litType$:i},a){let s;this.parts=[];let n=0,r=0;const l=e.length-1,o=this.parts,[c,d]=Oe(e,i);if(this.el=P.createElement(c,a),A.currentNode=this.el.content,i===2||i===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=A.nextNode())!==null&&o.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(de)){const v=d[r++],f=s.getAttribute(h).split(b),k=/([.?@])?(.*)/.exec(v);o.push({type:1,index:n,name:k[2],strings:f,ctor:k[1]==="."?Me:k[1]==="?"?Fe:k[1]==="@"?We:F}),s.removeAttribute(h)}else h.startsWith(b)&&(o.push({type:6,index:n}),s.removeAttribute(h));if(pe.test(s.tagName)){const h=s.textContent.split(b),v=h.length-1;if(v>0){s.textContent=O?O.emptyScript:"";for(let f=0;f<v;f++)s.append(h[f],C()),A.nextNode(),o.push({type:2,index:++n});s.append(h[v],C())}}}else if(s.nodeType===8)if(s.data===he)o.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(b,h+1))!==-1;)o.push({type:7,index:n}),h+=b.length-1}n++}}static createElement(e,i){const a=$.createElement("template");return a.innerHTML=e,a}}function E(t,e,i=t,a){var r,l;if(e===H)return e;let s=a!==void 0?(r=i._$Co)==null?void 0:r[a]:i._$Cl;const n=R(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,i,a)),a!==void 0?(i._$Co??(i._$Co=[]))[a]=s:i._$Cl=s),s!==void 0&&(e=E(t,s._$AS(t,e.values),s,a)),e}class De{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:a}=this._$AD,s=((e==null?void 0:e.creationScope)??$).importNode(i,!0);A.currentNode=s;let n=A.nextNode(),r=0,l=0,o=a[0];for(;o!==void 0;){if(r===o.index){let c;o.type===2?c=new I(n,n.nextSibling,this,e):o.type===1?c=new o.ctor(n,o.name,o.strings,this,e):o.type===6&&(c=new Ve(n,this,e)),this._$AV.push(c),o=a[++l]}r!==(o==null?void 0:o.index)&&(n=A.nextNode(),r++)}return A.currentNode=$,s}p(e){let i=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,i),i+=a.strings.length-2):a._$AI(e[i])),i++}}class I{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,a,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=a,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=E(this,e,i),R(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Be(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T($.createTextNode(e)),this._$AH=e}$(e){var n;const{values:i,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=P.createElement(ue(a.h,a.h[0]),this.options)),a);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(i);else{const r=new De(s,this),l=r.u(this.options);r.p(i),this.T(l),this._$AH=r}}_$AC(e){let i=ae.get(e.strings);return i===void 0&&ae.set(e.strings,i=new P(e)),i}k(e){Y(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let a,s=0;for(const n of e)s===i.length?i.push(a=new I(this.O(C()),this.O(C()),this,this.options)):a=i[s],a._$AI(n),s++;s<i.length&&(this._$AR(a&&a._$AB.nextSibling,s),i.length=s)}_$AR(e=this._$AA.nextSibling,i){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,i);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,a,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=n,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=u}_$AI(e,i=this,a,s){const n=this.strings;let r=!1;if(n===void 0)e=E(this,e,i,0),r=!R(e)||e!==this._$AH&&e!==H,r&&(this._$AH=e);else{const l=e;let o,c;for(e=n[0],o=0;o<n.length-1;o++)c=E(this,l[a+o],i,o),c===H&&(c=this._$AH[o]),r||(r=!R(c)||c!==this._$AH[o]),c===u?e=u:e!==u&&(e+=(c??"")+n[o+1]),this._$AH[o]=c}r&&!s&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Me extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class Fe extends F{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class We extends F{constructor(e,i,a,s,n){super(e,i,a,s,n),this.type=5}_$AI(e,i=this){if((e=E(this,e,i,0)??u)===H)return;const a=this._$AH,s=e===u&&a!==u||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,n=e!==u&&(a===u||s);s&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}}class Ve{constructor(e,i,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const V=j.litHtmlPolyfillSupport;V==null||V(P,I),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.2.1");const w=(t,e,i)=>{const a=e;let s=a._$litPart$;return s===void 0&&(a._$litPart$=s=new I(e.insertBefore(C(),null),null,void 0,{})),s._$AI(t),s},U=document.querySelector("main"),qe=document.querySelector("nav"),ze=document.querySelector("footer");function Ke(){window.scrollTo({top:0,behavior:"smooth"})}const Ze=()=>y`
  <div class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo">
            <a href="/"><img src="assets/image0-removebg-preview.png" alt="mercury-tour-logo" class="img-logo"></a>
          </div>
          <p>
            Explore the world's best destinations, enjoy unbeatable prices, and
            book your perfect getaway instantly.
          </p>
          <h4>CONNECT WITH US</h4>
          <ul class="footer__socials">
            <li>
              <a href="https://www.instagram.com/mercurytour.bg/?igsh=MXkxdmo5aWFvYm9oZg%3D%3D#"><i class="ri-instagram-fill"></i></a>
            </li>
            <li>
              <a href="mailto:mercurytour@abv.bg"><i class="ri-mail-fill"></i></a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>QUICK LINKS</h4>
          <ul class="footer__links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/destinations">Destinations</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>DESTINATIONS</h4>
          <ul class="footer__links">
            <li><a href="/destinations">Asia</a></li>
            <li><a href="/destinations">Europe</a></li>
            <li><a href="/destinations">North America</a></li>
            <li><a href="/destinations">South America</a></li>
            <li><a href="/destinations">Africa</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>OUR ACTIVITIES</h4>
          <ul class="footer__links">
            <li><a href="/activities">Beach Day</a></li>
            <li><a href="/activities">City Tour</a></li>
            <li><a href="/activities">Hiking</a></li>
            <li><a href="/activities">Food tasting</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bar">
      </div>
`;function Ge(t,e){w(Ze(),ze),e()}function Ye(t,e){Ke(),e()}function Qe(){const t=document.getElementById("menu-btn"),e=document.getElementById("nav-links");t.addEventListener("click",()=>{e.classList.toggle("open")})}const Je=()=>y`
<div class="nav__header">
<div class="nav__logo">
  <a href="/"><img src="assets/image0-removebg-preview.png" alt="mercury-tour-logo" class="img-logo"></a>
</div>
<div class="nav__menu__btn" id="menu-btn"  @click = ${Qe} >
<i class="ri-menu-line"></i>
</div>

</div>
<ul class="nav__links" id="nav-links">
<li><a href="/">Home</a></li>
<li><a href="/destinations">Destinations</a></li>
<li><a href="/activities">Activities</a></li>
<li><a href="/about">About us</a></li>
</ul>`;function Xe(t,e){w(Je(),qe),e()}const et=()=>y`
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <img src="assets/camera-1130731_1280.jpg" alt="" class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center">
  <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Work with us</h2>
      <p class="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">Welcome to MercuryTour! We specialize in creating unforgettable travel experiences tailored just for you. Whether you're dreaming of tropical getaways, cultural explorations, or urban adventures, our mission is to make your journey seamless and memorable.

<!-- Based in Sofia, we take pride in offering personalized, high-quality tours that bring destinations to life. From start to finish, our dedicated team ensures your travel experience is stress-free and unforgettable.

Let us help you discover the world your way. Adventure awaits—let’s plan your perfect escape today!</p> -->
    </div>
      <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-white">Offices in Bulgaria</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">10</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-white">Extra Time Vacations</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">300+</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-white">Family Packages</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">Promotional</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-white">Paid time off</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

`;function tt(){w(et(),U)}const it=()=>y`

<div class="activity-container">
  
  <!-- Beach Day Activity -->
  <div class="activity">
    <img src="assets/child-5489290_1280.jpg" alt="Beach Day">
    <div class="activity-info">
      <h3>Beach Day</h3>
      <p>Relax and unwind at the beach. Whether you're into surfing, lounging by the sea, or playing beach volleyball, there's something for everyone!</p>
    </div>
  </div>

  <!-- City Tour Activity -->
  <div class="activity">
    <img src="assets/travel-6493621_1280.jpg" alt="City Tour">
    <div class="activity-info">
      <h3>City Tour</h3>
      <p>Take a guided tour through the city’s landmarks. From historic sites to modern marvels, discover the culture and beauty of our vibrant city.</p>
    </div>
  </div>
  
  <!-- Hiking Activity -->
  <div class="activity">
    <img src="assets/man-1850181_1280.jpg" alt="Hiking">
    <div class="activity-info">
      <h3>Hiking</h3>
      <p>Embark on scenic hiking trails and experience nature at its finest. Enjoy breathtaking views and the refreshing outdoors.</p>
    </div>
  </div>
  
  <!-- Food Tasting Activity -->
  <div class="activity">
    <img src="assets/spaghetti-1932466_1280.jpg" alt="Food Tasting">
    <div class="activity-info">
      <h3>Food Tasting</h3>
      <p>Savor local delicacies and international flavors with a guided food-tasting experience. Discover a rich variety of tastes!</p>
    </div>
  </div>
  
  
</div>

`;function st(){w(it(),U)}const at=()=>y`
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Booking</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" @submit=${rt}>

    <div>
        <label for="firstName" class="block text-sm/6 font-medium text-gray-900">First Name</label>
        <div class="mt-2">
          <input type="text" name="firstName" id="firstName"  required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div>
        <label for="lastName" class="block text-sm/6 font-medium text-gray-900">Last Name</label>
        <div class="mt-2">
          <input type="text" name="lastName" id="lastName"  required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>


      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div class="mt-2">
          <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book</button>
      </div>
    </form>
  </div>
</div>

`;function nt(){w(at(),U)}async function rt(t){t.preventDefault();const e=Object.fromEntries(new FormData(t.target).entries()),i=e.firstName,a=e.lastName,s=e.email,n="https://mercury-tour-default-rtdb.europe-west1.firebasedatabase.app/Bookers.json";try{const r=await fetch(n,{method:"POST",body:JSON.stringify({email:s,firstName:i,lastName:a})});m.redirect("/")}catch(r){console.log(r.message)}}const fe=[{id:1,name:"Vienna",imageUrl:"assets/vienna-228943_1280.jpg",description:"A stunning city known for its classical music, historical architecture, and vibrant culture.",price:"750"},{id:2,name:"Milano",imageUrl:"assets/milano-5052008_1280.jpg",description:"A world-class fashion city, with an impressive skyline and historical landmarks like the Duomo.",price:"2850"},{id:3,name:"Paris",imageUrl:"assets/eiffel-tower-975004_1280.jpg",description:"The capital of France, known for the Eiffel Tower, art museums, and romantic ambiance.",price:"1700"},{id:4,name:"Lisabon",imageUrl:"assets/boat-7010962_1280.jpg",description:"A charming coastal city known for its colorful neighborhoods and rich maritime history.",price:"700"},{id:5,name:"Amsterdam",imageUrl:"assets/city-4388160_1280.jpg",description:"Famous for its canal network, museums, and vibrant cultural scene.",price:"1100"},{id:6,name:"Barcelona",imageUrl:"assets/sagrada-familia-552084_1280.jpg",description:"A lively city with unique architecture, stunning beaches, and rich Catalan culture.",price:"950"},{id:7,name:"Puket",imageUrl:"assets/thailand-1451382_1280.jpg",description:"Thailand's largest island, renowned for its beaches, clear waters, and vibrant nightlife.",price:"2250"},{id:8,name:"Tokyo",imageUrl:"assets/pagoda-2405537_1280.jpg",description:"A bustling metropolis blending futuristic technology with ancient traditions.",price:"3500"},{id:9,name:"Dubai",imageUrl:"assets/dubai-4736936_1280.jpg",description:"A luxury destination known for its modern architecture, shopping, and world-class attractions.",price:"3500"},{id:10,name:"Bali",imageUrl:"assets/bali-8838762_1280.jpg",description:"An Indonesian paradise offering stunning beaches, lush jungles, and a rich spiritual culture.",price:"2500"},{id:11,name:"Maldivi",imageUrl:"assets/beach-666122_1280.jpg",description:"A tropical paradise known for its crystal-clear waters, overwater bungalows, and luxurious resorts.",price:"3000"},{id:12,name:"New York",imageUrl:"assets/sunset-3875817_1280.jpg",description:"The iconic metropolis with world-famous landmarks such as Times Square, the Statue of Liberty, and Broadway.",price:"1550"},{id:13,name:"Miami",imageUrl:"assets/ocean-drive-7111332_1280.jpg",description:"A sunny city famous for its beaches, nightlife, and diverse culture.",price:"2700"},{id:14,name:"Las Vegas",imageUrl:"assets/las-vegas-1846684_1280.jpg",description:"Known for its vibrant casinos, entertainment shows, and nightlife scene.",price:"3250"},{id:15,name:"Los Angels",imageUrl:"assets/hollywood-573444_1280.jpg",description:"Hollywood, beaches, and a melting pot of culture and entertainment.",price:"3100"},{id:16,name:"Toronto",imageUrl:"assets/buildings-5070537_1280.jpg",description:"Canada's largest city, known for its multicultural population and iconic CN Tower.",price:"2600"},{id:17,name:"Buenos Aires",imageUrl:"assets/buenos-aires-7334367_1280.jpg",description:"Argentina’s capital, rich in European heritage and home to tango music and art.",price:"2900"},{id:18,name:"Machu Pikcu",imageUrl:"assets/peru-2135770_1280.jpg",description:"A mystical Incan city located high in the Peruvian Andes, famous for its historic ruins.",price:"2400"},{id:19,name:"Rio De Jeneiro",imageUrl:"assets/rio-de-janeiro-6356462_1280.jpg",description:"A vibrant Brazilian city, famous for its beaches, carnival, and the Christ the Redeemer statue.",price:"2900"},{id:20,name:"Marakesh",imageUrl:"assets/morocco-2871720_1280.jpg",description:"A city that blends vibrant souks, palaces, and gardens in Morocco's historic heart.",price:"1900"},{id:21,name:"Cairo",imageUrl:"assets/landscape-5584652_1280.jpg",description:"The sprawling capital of Egypt, home to the Pyramids and a rich Ancient Egyptian history.",price:"2000"},{id:22,name:"Zanzibar",imageUrl:"assets/zanzibar-2783447_1280.jpg",description:"A stunning tropical destination with idyllic beaches and rich Swahili culture.",price:"2400"}],ot=t=>y`
<div class="group relative">
  <img src="${t.imageUrl}" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
  <div class="mt-4 flex justify-between">
    <div>
      <h3 class="text-sm text-gray-700">
        <a href="/destinations/${t.id}">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${t.name}
        </a>
      </h3>
      <p class="mt-1 text-sm text-gray-500">${t.description}</p>
    </div>
    <p class="text-sm font-medium text-gray-900">$${t.price}</p>
  </div>
</div>
`,lt=t=>y`
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Destinations</h2>

    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        ${t.map(e=>ot(e))}
      </div>
    </div>
  </div>
</div>
`;function ct(){w(lt(fe),U)}const dt=t=>y`
   <div class="bg-white">
  <div class="pt-6">
    <!-- Image gallery -->
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
     <img src="${t.imageUrl}" class="img-into-details"></img>
    </div>

    <!-- Product info -->
    <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">${t.name}</h1>
      </div>

      <!-- Options -->
      <div class="mt-4 lg:row-span-3 lg:mt-0">
        <p class="text-3xl tracking-tight text-gray-900">$${t.price}</p>
          <a href ="/book"><button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Book Now</button></a>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <div>
          <h3 class="sr-only">Description</h3>
          <div class="space-y-6">
            <p class="text-base text-gray-900">${t.description}</p>
            <p>
Welcome to ${t.name}, a place where culture, history, and nature come together. From iconic landmarks to stunning landscapes, there's something for every type of traveler.

Top Attractions
Don't miss the landmarks and enjoy the breathtaking views. Wander through neighborhoods or streets, and explore beaches, parks, or natural spots that showcase the region's beauty.

Local Culture & Cuisine
Indulge in the flavors of ${t.name} with local dishes . Experience the blend of traditions, art, and vibrant local life.

Shopping & Entertainment
Whether you’re exploring markets or trendy districts, ${t.name} offers fantastic shopping opportunities for unique, local finds.
Start your adventure in ${t.name} — where unforgettable memories await!
            </p>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</div>

`;function ht(t){const{id:e}=t.params,i=fe.find(a=>a.id==e);w(dt(i),U)}const pt=()=>y`
 <header class="header" id="home">
      <div class="section__container header__container">
        <h1>TRAVELLER<br /><span>FOR LIFE.</span></h1>
        <p>Live your best moments</p>
      </div>
</header>
<section class="section__container feature__container" id="service">
      <div class="feature__card">
        <img src="assets/santorini-5655299_1280.jpg" alt="feature" />
        <div>
          <h4>Best Destinations</h4>
          <p>Discover the most breathtaking places around the globe.</p>
        </div>
      </div>
      <div class="feature__card">
        <img src="assets/price-tag-374404_1280.jpg" alt="feature" />
        <div>
          <h4>Best Price Guaranteed</h4>
          <p>Enjoy unbeatable prices on every trip you book.</p>
        </div>
      </div>
      <div class="feature__card">
        <img src="assets/icon-8794676_1280.jpg" alt="feature" />
        <div>
          <h4>Instant Booking</h4>
          <p>Secure your dream vacation with just a click.</p>
        </div>
      </div>
    </section>

    <section class="destination" id="destination">
      <div class="section__container destination__container">
        <h2 class="section__header">Top Destinations</h2>
        <p class="section__description">
          Find out what are the best destinations in the world
        </p>
        <div class="destination__grid">
          <div class="destination__card">
            <a href="/destinations/14">
            <img src="assets/las-vegas-1846684_1280.jpg" alt="destination" />
            <div class="destination__content">Las Vegas</div>
          </a>
          </div>
          <div class="destination__card">
            <a href="/destinations/10">
            <img src="assets/bali-8838762_1280.jpg" alt="destination" />
            <div class="destination__content">Bali</div></a>
          </div>
          <div class="destination__card">
          <a href="/destinations/6">
            <img src="assets/sagrada-familia-552084_1280.jpg" alt="destination" />
            <div class="destination__content">Barcelona</div>
          </a>
          </div>
        </div>
      </div>
    </section>

   

    <section class="section__container package__container" id="package">
      <h2 class="section__header">We Offer Best Services</h2>
      <p class="section__description">
        We will help you find the trip that's perfect for you!
      </p>
      <div class="package__grid">
        <div class="package__card">
          <img src="assets/eiffel-tower-975004_1280.jpg" alt="package" />
          <div class="package__card__details">
            <h4>Paris</h4>
            <p>
              Explore timeless elegance, enchanting streets, iconic Eiffel Tower, romantic Seine, world-class art, and couture.
            </p>
            <div>
            <a href="/book"><button class="btn">Book Now</button></a>
              
              <h3>$1700</h3>
            </div>
          </div>
        </div>
        <div class="package__card">
          <img src="assets/thailand-1451382_1280.jpg" alt="package" />
          <div class="package__card__details">
            <h4>Puket</h4>
            <p>
            Phuket, Thailand: turquoise waters, vibrant beaches, thrilling nightlife, cultural temples,and tropical serenity.
            </p>
            <div>
            <a href="/book"><button class="btn">Book Now</button></a>
              <h3>$2250</h3>
            </div>
          </div>
        </div>
        <div class="package__card">
          <img src="assets/sunset-3875817_1280.jpg" alt="package" />
          <div class="package__card__details">
            <h4>New York</h4>
            <p>
            New York, USA: towering skyline, vibrant streets, cultural melting pot, Broadway shows, iconic landmarks, endless energy.
            </p>
            <div>
              <a href="/book"><button class="btn">Book Now</button></a>
              <h3>$1550</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

`;function ut(){w(pt(),U)}m(Xe);m(Ge);m(Ye);m("/",ut);m("/about",tt);m("/book",nt);m("/destinations",ct);m("/destinations/:id",ht);m("/activities",st);m.start();
