(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[55318],{240684:(e,t,r)=>{"use strict";r.d(t,{TA:()=>$,ZP:()=>x});var o=r(667294),n=r(263366),s=r(487462),i=r(497326),a=r(894578),u=r(659864),c=r(108679),l=r.n(c);function f(e){console.warn("loadable: "+e)}var d=o.createContext(),p={initialChunks:{}},y="PENDING",m="REJECTED",h=function(e){return e};function v(e){var t=e.defaultResolveComponent,r=void 0===t?h:t,c=e.render,f=e.onLoad;function v(e,t){void 0===t&&(t={});var h,v="function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e,b={};function _(e){return t.cacheKey?t.cacheKey(e):v.resolve?v.resolve(e):"static"}function C(e,o,n){var s=t.resolveComponent?t.resolveComponent(e,o):r(e);if(t.resolveComponent&&!(0,u.isValidElementType)(s))throw Error("resolveComponent returned something that is not a React component!");return l()(n,s,{preload:!0}),s}var S=(h=function(e){function r(r){var o;return((o=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:_(r)},function(e,t){if(!e){var r=Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}(!r.__chunkExtractor||v.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor)?(!1===t.ssr||(v.requireAsync(r).catch(function(){return null}),o.loadSync(),r.__chunkExtractor.addChunk(v.chunkName(r))),(0,i.Z)(o)):(!1!==t.ssr&&(v.isReady&&v.isReady(r)||v.chunkName&&p.initialChunks[v.chunkName(r)])&&o.loadSync(),o)}(0,a.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=_(e);return(0,s.Z)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===m&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return _(this.props)},o.getCache=function(){return b[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),b[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;f&&setTimeout(function(){f(e.state.result,e.props)})},o.loadSync=function(){if(this.state.loading)try{var e=v.requireSync(this.props),t=C(e,this.props,w);this.state.result=t,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:v.resolve(this.props),chunkName:v.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then(function(t){var r=C(t,e.props,{Loadable:w});e.safeSetState({result:r,loading:!1},function(){return e.triggerOnLoad()})}).catch(function(t){return e.safeSetState({error:t,loading:!1})}),t},o.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,(0,n.Z)(t,["__chunkExtractor","forwardedRef"])),o=this.getCache();return o||((o=v.requireAsync(r)).status=y,this.setCache(o),o.then(function(){o.status="RESOLVED"},function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:v.resolve(e.props),chunkName:v.chunkName(e.props),error:t?t.message:t}),o.status=m})),o},o.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,i=(e.__chunkExtractor,(0,n.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),a=this.state,u=a.error,l=a.loading,f=a.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===y)throw this.loadAsync();if(u)throw u;var d=o||t.fallback||null;return l?d:c({fallback:d,result:f,options:t,props:(0,s.Z)({},i,{ref:r})})},r}(o.Component),function(e){return o.createElement(d.Consumer,null,function(t){return o.createElement(h,Object.assign({__chunkExtractor:t},e))})}),w=o.forwardRef(function(e,t){return o.createElement(S,Object.assign({forwardedRef:t},e))});return w.preload=function(e){v.requireAsync(e)},w.load=function(e){return v.requireAsync(e)},w}return{loadable:v,lazy:function(e,t){return v(e,(0,s.Z)({},t,{suspense:!0}))}}}var b=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return o.createElement(t,r)}}),_=b.loadable,C=b.lazy,S=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),w=S.loadable,g=S.lazy,E="undefined"!=typeof window;function $(e,t){void 0===e&&(e=function(){});var r=(void 0===t?{}:t).namespace;if(!E)return f("`loadableReady()` must be called in browser only"),e(),Promise.resolve();var o=null;if(E){var n=""+(void 0===r?"":r)+"__LOADABLE_REQUIRED_CHUNKS__",s=document.getElementById(n);if(s){o=JSON.parse(s.textContent);var i=document.getElementById(n+"_ext");if(i)JSON.parse(i.textContent).namedChunks.forEach(function(e){p.initialChunks[e]=!0});else throw Error("loadable-component: @loadable/server does not match @loadable/component")}}if(!o)return f("`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side"),e(),Promise.resolve();var a=!1;return new Promise(function(e){window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[];var t=window.__LOADABLE_LOADED_CHUNKS__,r=t.push.bind(t);function n(){o.every(function(e){return t.some(function(t){return t[0].indexOf(e)>-1})})&&!a&&(a=!0,e())}t.push=function(){r.apply(void 0,arguments),n()},n()}).then(e)}_.lib=w,C.lib=g;let x=_},108679:(e,t,r)=>{"use strict";var o=r(121296),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function u(e){return o.isMemo(e)?i:a[e.$$typeof]||n}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=i;var c=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(y){var n=p(r);n&&n!==y&&e(t,n,o)}var i=l(r);f&&(i=i.concat(f(r)));for(var a=u(t),m=u(r),h=0;h<i.length;++h){var v=i[h];if(!s[v]&&!(o&&o[v])&&!(m&&m[v])&&!(a&&a[v])){var b=d(r,v);try{c(t,v,b)}catch(e){}}}}return t}},396103:(e,t)=>{"use strict";/** @license React v16.8.4
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116;function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case f:case s:case a:case i:case p:return e;default:switch(e=e&&e.$$typeof){case c:case d:case u:return e;default:return t}}case m:case y:case n:return t}}}function v(e){return h(e)===f}t.typeOf=h,t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=u,t.Element=o,t.ForwardRef=d,t.Fragment=s,t.Lazy=m,t.Memo=y,t.Portal=n,t.Profiler=a,t.StrictMode=i,t.Suspense=p,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===a||e===i||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===u||e.$$typeof===c||e.$$typeof===d)},t.isAsyncMode=function(e){return v(e)||h(e)===l},t.isConcurrentMode=v,t.isContextConsumer=function(e){return h(e)===c},t.isContextProvider=function(e){return h(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return h(e)===d},t.isFragment=function(e){return h(e)===s},t.isLazy=function(e){return h(e)===m},t.isMemo=function(e){return h(e)===y},t.isPortal=function(e){return h(e)===n},t.isProfiler=function(e){return h(e)===a},t.isStrictMode=function(e){return h(e)===i},t.isSuspense=function(e){return h(e)===p}},121296:(e,t,r)=>{"use strict";e.exports=r(396103)},869921:(e,t)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,_=r?Symbol.for("react.responder"):60118,C=r?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case f:case s:case a:case i:case p:return e;default:switch(e=e&&e.$$typeof){case c:case d:case h:case m:case u:return e;default:return t}}case n:return t}}}function w(e){return S(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=u,t.Element=o,t.ForwardRef=d,t.Fragment=s,t.Lazy=h,t.Memo=m,t.Portal=n,t.Profiler=a,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||S(e)===l},t.isConcurrentMode=w,t.isContextConsumer=function(e){return S(e)===c},t.isContextProvider=function(e){return S(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===s},t.isLazy=function(e){return S(e)===h},t.isMemo=function(e){return S(e)===m},t.isPortal=function(e){return S(e)===n},t.isProfiler=function(e){return S(e)===a},t.isStrictMode=function(e){return S(e)===i},t.isSuspense=function(e){return S(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===a||e===i||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===u||e.$$typeof===c||e.$$typeof===d||e.$$typeof===b||e.$$typeof===_||e.$$typeof===C||e.$$typeof===v)},t.typeOf=S},659864:(e,t,r)=>{"use strict";e.exports=r(869921)},895370:(e,t,r)=>{(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/[username]/[slug]/_tools/more-ideas"]=function(){return r(851312).Z}},9867:(e,t,r)=>{(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/[username]/[slug]/more_ideas"]=function(){return r(192891).Z}},342513:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(667294);function n(e,t){let r="consumer"===t?`${e}Consumer`:`use${e}`;return`
  ${r} must be used within a ${e}Provider.
  Please see https://pdocs.pinadmin.com/docs/webapp/docs/testing-jest#createhydra-errors for more information.
  `}function s(e,t){let r=(0,o.createContext)(t),{messageDisplayName:s}=function(e,t){let r=e.slice(1);if(r=r.endsWith("Context")?r:`${r}Context`,t){let o=`with${e[0].toUpperCase()}${r}(${t})`;return{hocDisplayName:o}}let o=`${e[0].toLowerCase()}${r}`,n=`${e[0].toUpperCase()}${r}`;return{propsDisplayName:o,messageDisplayName:n}}(e);r.displayName=s;let{Provider:i}=r,a=({children:e})=>{let t=(0,o.useContext)(r);if(void 0===t)throw Error(n(s,"consumer"));return e(t)},u=()=>(0,o.useContext)(r);return i.displayName=`${s}Provider`,a.displayName=`${s}Consumer`,{Provider:i,Consumer:a,MaybeConsumer:({children:e})=>{let t=(0,o.useContext)(r);return e(t)},useMaybeHook:u,useHook:function(){let e=u();if(void 0===e)throw Error(n(s,"hook"));return e}}}},5859:(e,t,r)=>{"use strict";r.d(t,{B:()=>f,LC:()=>c,P2:()=>u,fH:()=>l,gf:()=>d});var o=r(667294),n=r(642190),s=r(520893),i=r(785893);let a=(0,o.createContext)();function u({children:e,initialValue:t}){let[r,u]=(0,o.useState)(t),c=(0,o.useMemo)(()=>({requestContext:r,updateRequestContext:e=>{let t={...r,...e};(0,s.Z)(r,e)||u(t),(0,n.J)(t)}}),[r]);return(0,i.jsx)(a.Provider,{value:c,children:e})}let c=({children:e})=>{let t=(0,o.useContext)(a);if(!t)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)},l=({children:e})=>{let t=(0,o.useContext)(a);if(!t)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)};function f(){let e=(0,o.useContext)(a);if(!e)throw Error("useRequestContext must be used within a RequestContextProvider");return e.requestContext}function d(){let e=(0,o.useContext)(a);if(!e)throw Error("useUpdateRequestContext must be used within a RequestContextProvider");return e.updateRequestContext}},642190:(e,t,r)=>{"use strict";let o;function n(e){o=e}function s(){return o}r.d(t,{J:()=>n,l:()=>s})},520893:(e,t,r)=>{"use strict";function o(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let r=Object.keys(e),o=Object.keys(t);return r.length===o.length&&r.every(r=>e[r]===t[r])}r.d(t,{Z:()=>o})},554786:(e,t,r)=>{"use strict";r.d(t,{HG:()=>f,Kf:()=>i,Mq:()=>n,Wb:()=>l,ZP:()=>d,dA:()=>a,ds:()=>u,ml:()=>c});var o=r(5859);function n(e){let{isMobile:t,isTablet:r}=e.userAgent;return r?"tablet":t?"phone":"desktop"}let s=()=>{let e=(0,o.B)();return n(e)},i=e=>"phone"===e,a=e=>"tablet"===e,u=e=>"desktop"===e,c=()=>i(s()),l=()=>a(s()),f=()=>u(s()),d=s},149722:(e,t,r)=>{"use strict";r.d(t,{$:()=>n,Z:()=>i});var o=r(342513);let{Provider:n,useHook:s}=(0,o.Z)("viewer"),i=s},132776:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(240684),n=r(554786),s=r(149722),i=r(785893);let a=(0,o.ZP)({resolved:{},chunkName:()=>"app-www-BoardMoreIdeasPage-BoardMoreIdeasToolPageAuthDesktop",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.all([r.e(97270),r.e(83119),r.e(77958),r.e(55105)]).then(r.bind(r,641649)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){let t=this.resolve(e);return r(t)},resolve:()=>641649}),u=(0,o.ZP)({resolved:{},chunkName:()=>"app-www-BoardMoreIdeasPage-MoreIdeasTabContentPageDefault",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.all([r.e(97270),r.e(83119),r.e(72006)]).then(r.bind(r,487087)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){let t=this.resolve(e);return r(t)},resolve:()=>487087});function c(){let e=(0,n.HG)(),t=(0,s.Z)(),r=t&&t.isAuth;return e&&r?(0,i.jsx)(a,{}):(0,i.jsx)(u,{})}},851312:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(132776);let n=o.Z},192891:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(132776);let n=o.Z},497326:(e,t,r)=>{"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:()=>o})},487462:(e,t,r)=>{"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}r.d(t,{Z:()=>o})},894578:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(589611);function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,o.Z)(e,t)}},263366:(e,t,r)=>{"use strict";function o(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,{Z:()=>o})},589611:(e,t,r)=>{"use strict";function o(e,t){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,{Z:()=>o})}},e=>{var t=t=>e(e.s=t);e.O(0,[97270],()=>(t(9867),t(895370))),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/[username]/[slug]/more_ideas-7ce4f61f7fb60a94.mjs.map