(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const G_="modulepreload",Q_=function(t){return"/"+t},bh={},Z_=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Q_(i),i in bh)return;bh[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":G_,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};function Ml(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Te={},Br=[],kt=()=>{},J_=()=>!1,Y_=/^on[^a-z]/,Ea=t=>Y_.test(t),Ll=t=>t.startsWith("onUpdate:"),qe=Object.assign,Fl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},X_=Object.prototype.hasOwnProperty,ue=(t,e)=>X_.call(t,e),q=Array.isArray,qr=t=>Di(t)==="[object Map]",Ta=t=>Di(t)==="[object Set]",Ah=t=>Di(t)==="[object Date]",ee=t=>typeof t=="function",Ue=t=>typeof t=="string",Ks=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Df=t=>Ae(t)&&ee(t.then)&&ee(t.catch),Of=Object.prototype.toString,Di=t=>Of.call(t),ey=t=>Di(t).slice(8,-1),Vf=t=>Di(t)==="[object Object]",Ul=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Io=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ty=/-(\w)/g,Xt=Ia(t=>t.replace(ty,(e,n)=>n?n.toUpperCase():"")),ny=/\B([A-Z])/g,Rr=Ia(t=>t.replace(ny,"-$1").toLowerCase()),wa=Ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),gc=Ia(t=>t?`on${wa(t)}`:""),Gs=(t,e)=>!Object.is(t,e),wo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Lo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sh;const jc=()=>Sh||(Sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $l(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?oy(r):$l(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ue(t))return t;if(Ae(t))return t}}const ry=/;(?![^(]*\))/g,sy=/:([^]+)/,iy=/\/\*[^]*?\*\//g;function oy(t){const e={};return t.replace(iy,"").split(ry).forEach(n=>{if(n){const r=n.split(sy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function jl(t){let e="";if(Ue(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const r=jl(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ay="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cy=Ml(ay);function Mf(t){return!!t||t===""}function ly(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ba(t[r],e[r]);return n}function ba(t,e){if(t===e)return!0;let n=Ah(t),r=Ah(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ks(t),r=Ks(e),n||r)return t===e;if(n=q(t),r=q(e),n||r)return n&&r?ly(t,e):!1;if(n=Ae(t),r=Ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ba(t[o],e[o]))return!1}}return String(t)===String(e)}function uy(t,e){return t.findIndex(n=>ba(n,e))}const gt=t=>Ue(t)?t:t==null?"":q(t)||Ae(t)&&(t.toString===Of||!ee(t.toString))?JSON.stringify(t,Lf,2):String(t),Lf=(t,e)=>e&&e.__v_isRef?Lf(t,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ta(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!q(e)&&!Vf(e)?String(e):e;let _t;class Ff{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Uf(t){return new Ff(t)}function hy(t,e=_t){e&&e.active&&e.effects.push(t)}function $f(){return _t}function dy(t){_t&&_t.cleanups.push(t)}const Bl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},jf=t=>(t.w&qn)>0,Bf=t=>(t.n&qn)>0,fy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=qn},py=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];jf(s)&&!Bf(s)?s.delete(t):e[n++]=s,s.w&=~qn,s.n&=~qn}e.length=n}},Fo=new WeakMap;let Ps=0,qn=1;const Bc=30;let bt;const hr=Symbol(""),qc=Symbol("");class ql{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hy(this,r)}run(){if(!this.active)return this.fn();let e=bt,n=On;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,On=!0,qn=1<<++Ps,Ps<=Bc?fy(this):Rh(this),this.fn()}finally{Ps<=Bc&&py(this),qn=1<<--Ps,bt=this.parent,On=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(Rh(this),this.onStop&&this.onStop(),this.active=!1)}}function Rh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let On=!0;const qf=[];function fs(){qf.push(On),On=!1}function ps(){const t=qf.pop();On=t===void 0?!0:t}function ft(t,e,n){if(On&&bt){let r=Fo.get(t);r||Fo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Bl()),zf(s)}}function zf(t,e){let n=!1;Ps<=Bc?Bf(t)||(t.n|=qn,n=!jf(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t))}function mn(t,e,n,r,s,i){const o=Fo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?Ul(n)&&a.push(o.get("length")):(a.push(o.get(hr)),qr(t)&&a.push(o.get(qc)));break;case"delete":q(t)||(a.push(o.get(hr)),qr(t)&&a.push(o.get(qc)));break;case"set":qr(t)&&a.push(o.get(hr));break}if(a.length===1)a[0]&&zc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);zc(Bl(c))}}function zc(t,e){const n=q(t)?t:[...t];for(const r of n)r.computed&&Ch(r);for(const r of n)r.computed||Ch(r)}function Ch(t,e){(t!==bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function my(t,e){var n;return(n=Fo.get(t))==null?void 0:n.get(e)}const gy=Ml("__proto__,__v_isRef,__isVue"),Hf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ks)),_y=zl(),yy=zl(!1,!0),vy=zl(!0),Ph=Ey();function Ey(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=he(this);for(let i=0,o=this.length;i<o;i++)ft(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(he)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fs();const r=he(this)[e].apply(this,n);return ps(),r}}),t}function Ty(t){const e=he(this);return ft(e,"has",t),e.hasOwnProperty(t)}function zl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Ly:Zf:e?Qf:Gf).get(r))return r;const o=q(r);if(!t){if(o&&ue(Ph,s))return Reflect.get(Ph,s,i);if(s==="hasOwnProperty")return Ty}const a=Reflect.get(r,s,i);return(Ks(s)?Hf.has(s):gy(s))||(t||ft(r,"get",s),e)?a:Ne(a)?o&&Ul(s)?a:a.value:Ae(a)?t?Jf(a):Sa(a):a}}const Iy=Wf(),wy=Wf(!0);function Wf(t=!1){return function(n,r,s,i){let o=n[r];if(Yr(o)&&Ne(o)&&!Ne(s))return!1;if(!t&&(!Uo(s)&&!Yr(s)&&(o=he(o),s=he(s)),!q(n)&&Ne(o)&&!Ne(s)))return o.value=s,!0;const a=q(n)&&Ul(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,s,i);return n===he(i)&&(a?Gs(s,o)&&mn(n,"set",r,s):mn(n,"add",r,s)),c}}function by(t,e){const n=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&mn(t,"delete",e,void 0),r}function Ay(t,e){const n=Reflect.has(t,e);return(!Ks(e)||!Hf.has(e))&&ft(t,"has",e),n}function Sy(t){return ft(t,"iterate",q(t)?"length":hr),Reflect.ownKeys(t)}const Kf={get:_y,set:Iy,deleteProperty:by,has:Ay,ownKeys:Sy},Ry={get:vy,set(t,e){return!0},deleteProperty(t,e){return!0}},Cy=qe({},Kf,{get:yy,set:wy}),Hl=t=>t,Aa=t=>Reflect.getPrototypeOf(t);function io(t,e,n=!1,r=!1){t=t.__v_raw;const s=he(t),i=he(e);n||(e!==i&&ft(s,"get",e),ft(s,"get",i));const{has:o}=Aa(s),a=r?Hl:n?Gl:Qs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function oo(t,e=!1){const n=this.__v_raw,r=he(n),s=he(t);return e||(t!==s&&ft(r,"has",t),ft(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ao(t,e=!1){return t=t.__v_raw,!e&&ft(he(t),"iterate",hr),Reflect.get(t,"size",t)}function kh(t){t=he(t);const e=he(this);return Aa(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function xh(t,e){e=he(e);const n=he(this),{has:r,get:s}=Aa(n);let i=r.call(n,t);i||(t=he(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Gs(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function Nh(t){const e=he(this),{has:n,get:r}=Aa(e);let s=n.call(e,t);s||(t=he(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mn(e,"delete",t,void 0),i}function Dh(){const t=he(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function co(t,e){return function(r,s){const i=this,o=i.__v_raw,a=he(o),c=e?Hl:t?Gl:Qs;return!t&&ft(a,"iterate",hr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function lo(t,e,n){return function(...r){const s=this.__v_raw,i=he(s),o=qr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Hl:e?Gl:Qs;return!e&&ft(i,"iterate",c?qc:hr),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:this}}function Py(){const t={get(i){return io(this,i)},get size(){return ao(this)},has:oo,add:kh,set:xh,delete:Nh,clear:Dh,forEach:co(!1,!1)},e={get(i){return io(this,i,!1,!0)},get size(){return ao(this)},has:oo,add:kh,set:xh,delete:Nh,clear:Dh,forEach:co(!1,!0)},n={get(i){return io(this,i,!0)},get size(){return ao(this,!0)},has(i){return oo.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:co(!0,!1)},r={get(i){return io(this,i,!0,!0)},get size(){return ao(this,!0)},has(i){return oo.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=lo(i,!1,!1),n[i]=lo(i,!0,!1),e[i]=lo(i,!1,!0),r[i]=lo(i,!0,!0)}),[t,n,e,r]}const[ky,xy,Ny,Dy]=Py();function Wl(t,e){const n=e?t?Dy:Ny:t?xy:ky;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ue(n,s)&&s in r?n:r,s,i)}const Oy={get:Wl(!1,!1)},Vy={get:Wl(!1,!0)},My={get:Wl(!0,!1)},Gf=new WeakMap,Qf=new WeakMap,Zf=new WeakMap,Ly=new WeakMap;function Fy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uy(t){return t.__v_skip||!Object.isExtensible(t)?0:Fy(ey(t))}function Sa(t){return Yr(t)?t:Kl(t,!1,Kf,Oy,Gf)}function $y(t){return Kl(t,!1,Cy,Vy,Qf)}function Jf(t){return Kl(t,!0,Ry,My,Zf)}function Kl(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Uy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Vn(t){return Yr(t)?Vn(t.__v_raw):!!(t&&t.__v_isReactive)}function Yr(t){return!!(t&&t.__v_isReadonly)}function Uo(t){return!!(t&&t.__v_isShallow)}function Yf(t){return Vn(t)||Yr(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function Ra(t){return Mo(t,"__v_skip",!0),t}const Qs=t=>Ae(t)?Sa(t):t,Gl=t=>Ae(t)?Jf(t):t;function Xf(t){On&&bt&&(t=he(t),zf(t.dep||(t.dep=Bl())))}function ep(t,e){t=he(t);const n=t.dep;n&&zc(n)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function et(t){return jy(t,!1)}function jy(t,e){return Ne(t)?t:new By(t,e)}class By{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:Qs(e)}get value(){return Xf(this),this._value}set value(e){const n=this.__v_isShallow||Uo(e)||Yr(e);e=n?e:he(e),Gs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Qs(e),ep(this))}}function Bt(t){return Ne(t)?t.value:t}const qy={get:(t,e,n)=>Bt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function tp(t){return Vn(t)?t:new Proxy(t,qy)}function zy(t){const e=q(t)?new Array(t.length):{};for(const n in t)e[n]=Wy(t,n);return e}class Hy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return my(he(this._object),this._key)}}function Wy(t,e,n){const r=t[e];return Ne(r)?r:new Hy(t,e,n)}class Ky{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ql(e,()=>{this._dirty||(this._dirty=!0,ep(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=he(this);return Xf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Gy(t,e,n=!1){let r,s;const i=ee(t);return i?(r=t,s=kt):(r=t.get,s=t.set),new Ky(r,s,i||!s,n)}function Mn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ca(i,e,n)}return s}function xt(t,e,n,r){if(ee(t)){const i=Mn(t,e,n,r);return i&&Df(i)&&i.catch(o=>{Ca(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(xt(t[i],e,n,r));return s}function Ca(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Mn(c,null,10,[t,o,a]);return}}Qy(t,n,s,r)}function Qy(t,e,n,r=!0){console.error(t)}let Zs=!1,Hc=!1;const Ye=[];let zt=0;const zr=[];let ln=null,rr=0;const np=Promise.resolve();let Ql=null;function Zl(t){const e=Ql||np;return t?e.then(this?t.bind(this):t):e}function Zy(t){let e=zt+1,n=Ye.length;for(;e<n;){const r=e+n>>>1;Js(Ye[r])<t?e=r+1:n=r}return e}function Jl(t){(!Ye.length||!Ye.includes(t,Zs&&t.allowRecurse?zt+1:zt))&&(t.id==null?Ye.push(t):Ye.splice(Zy(t.id),0,t),rp())}function rp(){!Zs&&!Hc&&(Hc=!0,Ql=np.then(ip))}function Jy(t){const e=Ye.indexOf(t);e>zt&&Ye.splice(e,1)}function Yy(t){q(t)?zr.push(...t):(!ln||!ln.includes(t,t.allowRecurse?rr+1:rr))&&zr.push(t),rp()}function Oh(t,e=Zs?zt+1:0){for(;e<Ye.length;e++){const n=Ye[e];n&&n.pre&&(Ye.splice(e,1),e--,n())}}function sp(t){if(zr.length){const e=[...new Set(zr)];if(zr.length=0,ln){ln.push(...e);return}for(ln=e,ln.sort((n,r)=>Js(n)-Js(r)),rr=0;rr<ln.length;rr++)ln[rr]();ln=null,rr=0}}const Js=t=>t.id==null?1/0:t.id,Xy=(t,e)=>{const n=Js(t)-Js(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ip(t){Hc=!1,Zs=!0,Ye.sort(Xy);const e=kt;try{for(zt=0;zt<Ye.length;zt++){const n=Ye[zt];n&&n.active!==!1&&Mn(n,null,14)}}finally{zt=0,Ye.length=0,sp(),Zs=!1,Ql=null,(Ye.length||zr.length)&&ip()}}function ev(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Te;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||Te;p&&(s=n.map(m=>Ue(m)?m.trim():m)),h&&(s=n.map(Lo))}let a,c=r[a=gc(e)]||r[a=gc(Xt(e))];!c&&i&&(c=r[a=gc(Rr(e))]),c&&xt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xt(l,t,6,s)}}function op(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=op(l,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):qe(o,i),Ae(t)&&r.set(t,o),o)}function Pa(t,e){return!t||!Ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,Rr(e))||ue(t,e))}let yt=null,ka=null;function $o(t){const e=yt;return yt=t,ka=t&&t.type.__scopeId||null,e}function ap(t){ka=t}function cp(){ka=null}function tv(t,e=yt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Hh(-1);const i=$o(e);let o;try{o=t(...s)}finally{$o(i),r._d&&Hh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _c(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:b,inheritAttrs:A}=t;let C,B;const X=$o(t);try{if(n.shapeFlag&4){const L=s||r;C=qt(u.call(L,L,h,i,m,p,b)),B=c}else{const L=e;C=qt(L.length>1?L(i,{attrs:c,slots:a,emit:l}):L(i,null)),B=e.props?c:nv(c)}}catch(L){Fs.length=0,Ca(L,t,1),C=ct(_r)}let te=C;if(B&&A!==!1){const L=Object.keys(B),{shapeFlag:de}=te;L.length&&de&7&&(o&&L.some(Ll)&&(B=rv(B,o)),te=Xr(te,B))}return n.dirs&&(te=Xr(te),te.dirs=te.dirs?te.dirs.concat(n.dirs):n.dirs),n.transition&&(te.transition=n.transition),C=te,$o(X),C}const nv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ea(n))&&((e||(e={}))[n]=t[n]);return e},rv=(t,e)=>{const n={};for(const r in t)(!Ll(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Vh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Pa(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Vh(r,o,l):!0:!!o;return!1}function Vh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Pa(n,i))return!0}return!1}function iv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ov=t=>t.__isSuspense;function av(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Yy(t)}const uo={};function bo(t,e,n){return lp(t,e,n)}function lp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Te){var a;const c=$f()===((a=Be)==null?void 0:a.scope)?Be:null;let l,u=!1,h=!1;if(Ne(t)?(l=()=>t.value,u=Uo(t)):Vn(t)?(l=()=>t,r=!0):q(t)?(h=!0,u=t.some(L=>Vn(L)||Uo(L)),l=()=>t.map(L=>{if(Ne(L))return L.value;if(Vn(L))return or(L);if(ee(L))return Mn(L,c,2)})):ee(t)?e?l=()=>Mn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),xt(t,c,3,[m])}:l=kt,e&&r){const L=l;l=()=>or(L())}let p,m=L=>{p=X.onStop=()=>{Mn(L,c,4)}},b;if(ti)if(m=kt,e?n&&xt(e,c,3,[l(),h?[]:void 0,m]):l(),s==="sync"){const L=nE();b=L.__watcherHandles||(L.__watcherHandles=[])}else return kt;let A=h?new Array(t.length).fill(uo):uo;const C=()=>{if(X.active)if(e){const L=X.run();(r||u||(h?L.some((de,De)=>Gs(de,A[De])):Gs(L,A)))&&(p&&p(),xt(e,c,3,[L,A===uo?void 0:h&&A[0]===uo?[]:A,m]),A=L)}else X.run()};C.allowRecurse=!!e;let B;s==="sync"?B=C:s==="post"?B=()=>dt(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),B=()=>Jl(C));const X=new ql(l,B);e?n?C():A=X.run():s==="post"?dt(X.run.bind(X),c&&c.suspense):X.run();const te=()=>{X.stop(),c&&c.scope&&Fl(c.scope.effects,X)};return b&&b.push(te),te}function cv(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?up(r,t):()=>r[t]:t.bind(r,r);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Be;es(this);const a=lp(s,i.bind(r),n);return o?es(o):dr(),a}function up(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function or(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))or(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)or(t[n],e);else if(Ta(t)||qr(t))t.forEach(n=>{or(n,e)});else if(Vf(t))for(const n in t)or(t[n],e);return t}function Gt(t,e){const n=yt;if(n===null)return t;const r=Oa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Te]=e[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&or(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(fs(),xt(c,n,8,[t.el,a,t,e]),ps())}}function sn(t,e){return ee(t)?(()=>qe({name:t.name},e,{setup:t}))():t}const Ao=t=>!!t.type.__asyncLoader,hp=t=>t.type.__isKeepAlive;function lv(t,e){dp(t,"a",e)}function uv(t,e){dp(t,"da",e)}function dp(t,e,n=Be){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)hp(s.parent.vnode)&&hv(r,e,n,s),s=s.parent}}function hv(t,e,n,r){const s=xa(e,t,r,!0);Xl(()=>{Fl(r[e],s)},n)}function xa(t,e,n=Be,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fs(),es(n);const a=xt(e,n,t,o);return dr(),ps(),a});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=Be)=>(!ti||t==="sp")&&xa(t,(...r)=>e(...r),n),dv=In("bm"),Yl=In("m"),fv=In("bu"),pv=In("u"),mv=In("bum"),Xl=In("um"),gv=In("sp"),_v=In("rtg"),yv=In("rtc");function vv(t,e=Be){xa("ec",t,e)}const fp="components";function jt(t,e){return Tv(fp,t,!0,e)||t}const Ev=Symbol.for("v-ndc");function Tv(t,e,n=!0,r=!1){const s=yt||Be;if(s){const i=s.type;if(t===fp){const a=Xv(i,!1);if(a&&(a===e||a===Xt(e)||a===wa(Xt(e))))return i}const o=Mh(s[t]||i[t],e)||Mh(s.appContext[t],e);return!o&&r?i:o}}function Mh(t,e){return t&&(t[e]||t[Xt(e)]||t[wa(Xt(e))])}function $r(t,e,n,r){let s;const i=n&&n[r];if(q(t)||Ue(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Wc=t=>t?bp(t)?Oa(t)||t.proxy:Wc(t.parent):null,Ms=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wc(t.parent),$root:t=>Wc(t.root),$emit:t=>t.emit,$options:t=>eu(t),$forceUpdate:t=>t.f||(t.f=()=>Jl(t.update)),$nextTick:t=>t.n||(t.n=Zl.bind(t.proxy)),$watch:t=>cv.bind(t)}),yc=(t,e)=>t!==Te&&!t.__isScriptSetup&&ue(t,e),Iv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(yc(r,e))return o[e]=1,r[e];if(s!==Te&&ue(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,i[e];if(n!==Te&&ue(n,e))return o[e]=4,n[e];Kc&&(o[e]=0)}}const u=Ms[e];let h,p;if(u)return e==="$attrs"&&ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&ue(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,ue(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return yc(s,e)?(s[e]=n,!0):r!==Te&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Te&&ue(t,o)||yc(e,o)||(a=i[0])&&ue(a,o)||ue(r,o)||ue(Ms,o)||ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Lh(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kc=!0;function wv(t){const e=eu(t),n=t.proxy,r=t.ctx;Kc=!1,e.beforeCreate&&Fh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:b,activated:A,deactivated:C,beforeDestroy:B,beforeUnmount:X,destroyed:te,unmounted:L,render:de,renderTracked:De,renderTriggered:Se,errorCaptured:ae,serverPrefetch:ne,expose:Re,inheritAttrs:pt,components:Lt,directives:xr,filters:bs}=e;if(l&&bv(l,r,null),o)for(const ke in o){const ve=o[ke];ee(ve)&&(r[ke]=ve.bind(n))}if(s){const ke=s.call(n,n);Ae(ke)&&(t.data=Sa(ke))}if(Kc=!0,i)for(const ke in i){const ve=i[ke],Yn=ee(ve)?ve.bind(n,n):ee(ve.get)?ve.get.bind(n,n):kt,ro=!ee(ve)&&ee(ve.set)?ve.set.bind(n):kt,Xn=su({get:Yn,set:ro});Object.defineProperty(r,ke,{enumerable:!0,configurable:!0,get:()=>Xn.value,set:Ft=>Xn.value=Ft})}if(a)for(const ke in a)pp(a[ke],r,n,ke);if(c){const ke=ee(c)?c.call(n):c;Reflect.ownKeys(ke).forEach(ve=>{kv(ve,ke[ve])})}u&&Fh(u,t,"c");function _e(ke,ve){q(ve)?ve.forEach(Yn=>ke(Yn.bind(n))):ve&&ke(ve.bind(n))}if(_e(dv,h),_e(Yl,p),_e(fv,m),_e(pv,b),_e(lv,A),_e(uv,C),_e(vv,ae),_e(yv,De),_e(_v,Se),_e(mv,X),_e(Xl,L),_e(gv,ne),q(Re))if(Re.length){const ke=t.exposed||(t.exposed={});Re.forEach(ve=>{Object.defineProperty(ke,ve,{get:()=>n[ve],set:Yn=>n[ve]=Yn})})}else t.exposed||(t.exposed={});de&&t.render===kt&&(t.render=de),pt!=null&&(t.inheritAttrs=pt),Lt&&(t.components=Lt),xr&&(t.directives=xr)}function bv(t,e,n=kt){q(t)&&(t=Gc(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=Ls(s.from||r,s.default,!0):i=Ls(s.from||r):i=Ls(s),Ne(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Fh(t,e,n){xt(q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pp(t,e,n,r){const s=r.includes(".")?up(n,r):()=>n[r];if(Ue(t)){const i=e[t];ee(i)&&bo(s,i)}else if(ee(t))bo(s,t.bind(n));else if(Ae(t))if(q(t))t.forEach(i=>pp(i,e,n,r));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&bo(s,i,t)}}function eu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>jo(c,l,o,!0)),jo(c,e,o)),Ae(e)&&i.set(e,c),c}function jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&jo(t,i,n,!0),s&&s.forEach(o=>jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Av[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Av={data:Uh,props:$h,emits:$h,methods:ks,computed:ks,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:ks,directives:ks,watch:Rv,provide:Uh,inject:Sv};function Uh(t,e){return e?t?function(){return qe(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function Sv(t,e){return ks(Gc(t),Gc(e))}function Gc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function at(t,e){return t?[...new Set([].concat(t,e))]:e}function ks(t,e){return t?qe(Object.create(null),t,e):e}function $h(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:qe(Object.create(null),Lh(t),Lh(e??{})):e}function Rv(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const r in e)n[r]=at(t[r],e[r]);return n}function mp(){return{app:null,config:{isNativeTag:J_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cv=0;function Pv(t,e){return function(r,s=null){ee(r)||(r=qe({},r)),s!=null&&!Ae(s)&&(s=null);const i=mp(),o=new Set;let a=!1;const c=i.app={_uid:Cv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:rE,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const p=ct(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Oa(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ys=c;try{return l()}finally{Ys=null}}};return c}}let Ys=null;function kv(t,e){if(Be){let n=Be.provides;const r=Be.parent&&Be.parent.provides;r===n&&(n=Be.provides=Object.create(r)),n[t]=e}}function Ls(t,e,n=!1){const r=Be||yt;if(r||Ys){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ys._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ee(e)?e.call(r&&r.proxy):e}}function xv(){return!!(Be||yt||Ys)}function Nv(t,e,n,r=!1){const s={},i={};Mo(i,Da,1),t.propsDefaults=Object.create(null),gp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$y(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Dv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=he(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Pa(t.emitsOptions,p))continue;const m=e[p];if(c)if(ue(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const b=Xt(p);s[b]=Qc(c,a,b,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{gp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=Rr(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Qc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ue(e,h))&&(delete i[h],l=!0)}l&&mn(t,"set","$attrs")}function gp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Io(c))continue;const l=e[c];let u;s&&ue(s,u=Xt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Pa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=he(n),l=a||Te;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Qc(s,c,h,l[h],t,!ue(l,h))}}return o}function Qc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ee(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(es(s),r=l[n]=c.call(null,e),dr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rr(n))&&(r=!0))}return r}function _p(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[p,m]=_p(h,e,!0);qe(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ae(t)&&r.set(t,Br),Br;if(q(i))for(let u=0;u<i.length;u++){const h=Xt(i[u]);jh(h)&&(o[h]=Te)}else if(i)for(const u in i){const h=Xt(u);if(jh(h)){const p=i[u],m=o[h]=q(p)||ee(p)?{type:p}:qe({},p);if(m){const b=zh(Boolean,m.type),A=zh(String,m.type);m[0]=b>-1,m[1]=A<0||b<A,(b>-1||ue(m,"default"))&&a.push(h)}}}const l=[o,a];return Ae(t)&&r.set(t,l),l}function jh(t){return t[0]!=="$"}function Bh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function qh(t,e){return Bh(t)===Bh(e)}function zh(t,e){return q(e)?e.findIndex(n=>qh(n,t)):ee(e)&&qh(e,t)?0:-1}const yp=t=>t[0]==="_"||t==="$stable",tu=t=>q(t)?t.map(qt):[qt(t)],Ov=(t,e,n)=>{if(e._n)return e;const r=tv((...s)=>tu(e(...s)),n);return r._c=!1,r},vp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yp(s))continue;const i=t[s];if(ee(i))e[s]=Ov(s,i,r);else if(i!=null){const o=tu(i);e[s]=()=>o}}},Ep=(t,e)=>{const n=tu(e);t.slots.default=()=>n},Vv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),Mo(e,"_",n)):vp(e,t.slots={})}else t.slots={},e&&Ep(t,e);Mo(t.slots,Da,1)},Mv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(qe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,vp(e,s)),o=e}else e&&(Ep(t,e),o={default:1});if(i)for(const a in s)!yp(a)&&!(a in o)&&delete s[a]};function Zc(t,e,n,r,s=!1){if(q(t)){t.forEach((p,m)=>Zc(p,e&&(q(e)?e[m]:e),n,r,s));return}if(Ao(r)&&!s)return;const i=r.shapeFlag&4?Oa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ue(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):Ne(l)&&(l.value=null)),ee(c))Mn(c,a,12,[o,u]);else{const p=Ue(c),m=Ne(c);if(p||m){const b=()=>{if(t.f){const A=p?ue(h,c)?h[c]:u[c]:c.value;s?q(A)&&Fl(A,i):q(A)?A.includes(i)||A.push(i):p?(u[c]=[i],ue(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,ue(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,dt(b,n)):b()}}}const dt=av;function Lv(t){return Fv(t)}function Fv(t,e){const n=jc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=kt,insertStaticContent:b}=t,A=(d,f,_,E=null,v=null,R=null,x=!1,S=null,P=!!f.dynamicChildren)=>{if(d===f)return;d&&!Ss(d,f)&&(E=so(d),Ft(d,v,R,!0),d=null),f.patchFlag===-2&&(P=!1,f.dynamicChildren=null);const{type:T,ref:U,shapeFlag:V}=f;switch(T){case Na:C(d,f,_,E);break;case _r:B(d,f,_,E);break;case vc:d==null&&X(f,_,E,x);break;case je:Lt(d,f,_,E,v,R,x,S,P);break;default:V&1?de(d,f,_,E,v,R,x,S,P):V&6?xr(d,f,_,E,v,R,x,S,P):(V&64||V&128)&&T.process(d,f,_,E,v,R,x,S,P,Nr)}U!=null&&v&&Zc(U,d&&d.ref,R,f||d,!f)},C=(d,f,_,E)=>{if(d==null)r(f.el=a(f.children),_,E);else{const v=f.el=d.el;f.children!==d.children&&l(v,f.children)}},B=(d,f,_,E)=>{d==null?r(f.el=c(f.children||""),_,E):f.el=d.el},X=(d,f,_,E)=>{[d.el,d.anchor]=b(d.children,f,_,E,d.el,d.anchor)},te=({el:d,anchor:f},_,E)=>{let v;for(;d&&d!==f;)v=p(d),r(d,_,E),d=v;r(f,_,E)},L=({el:d,anchor:f})=>{let _;for(;d&&d!==f;)_=p(d),s(d),d=_;s(f)},de=(d,f,_,E,v,R,x,S,P)=>{x=x||f.type==="svg",d==null?De(f,_,E,v,R,x,S,P):ne(d,f,v,R,x,S,P)},De=(d,f,_,E,v,R,x,S)=>{let P,T;const{type:U,props:V,shapeFlag:$,transition:K,dirs:ie}=d;if(P=d.el=o(d.type,R,V&&V.is,V),$&8?u(P,d.children):$&16&&ae(d.children,P,null,E,v,R&&U!=="foreignObject",x,S),ie&&er(d,null,E,"created"),Se(P,d,d.scopeId,x,E),V){for(const ye in V)ye!=="value"&&!Io(ye)&&i(P,ye,null,V[ye],R,d.children,E,v,cn);"value"in V&&i(P,"value",null,V.value),(T=V.onVnodeBeforeMount)&&$t(T,E,d)}ie&&er(d,null,E,"beforeMount");const Ee=(!v||v&&!v.pendingBranch)&&K&&!K.persisted;Ee&&K.beforeEnter(P),r(P,f,_),((T=V&&V.onVnodeMounted)||Ee||ie)&&dt(()=>{T&&$t(T,E,d),Ee&&K.enter(P),ie&&er(d,null,E,"mounted")},v)},Se=(d,f,_,E,v)=>{if(_&&m(d,_),E)for(let R=0;R<E.length;R++)m(d,E[R]);if(v){let R=v.subTree;if(f===R){const x=v.vnode;Se(d,x,x.scopeId,x.slotScopeIds,v.parent)}}},ae=(d,f,_,E,v,R,x,S,P=0)=>{for(let T=P;T<d.length;T++){const U=d[T]=S?Cn(d[T]):qt(d[T]);A(null,U,f,_,E,v,R,x,S)}},ne=(d,f,_,E,v,R,x)=>{const S=f.el=d.el;let{patchFlag:P,dynamicChildren:T,dirs:U}=f;P|=d.patchFlag&16;const V=d.props||Te,$=f.props||Te;let K;_&&tr(_,!1),(K=$.onVnodeBeforeUpdate)&&$t(K,_,f,d),U&&er(f,d,_,"beforeUpdate"),_&&tr(_,!0);const ie=v&&f.type!=="foreignObject";if(T?Re(d.dynamicChildren,T,S,_,E,ie,R):x||ve(d,f,S,null,_,E,ie,R,!1),P>0){if(P&16)pt(S,f,V,$,_,E,v);else if(P&2&&V.class!==$.class&&i(S,"class",null,$.class,v),P&4&&i(S,"style",V.style,$.style,v),P&8){const Ee=f.dynamicProps;for(let ye=0;ye<Ee.length;ye++){const Oe=Ee[ye],wt=V[Oe],Dr=$[Oe];(Dr!==wt||Oe==="value")&&i(S,Oe,wt,Dr,v,d.children,_,E,cn)}}P&1&&d.children!==f.children&&u(S,f.children)}else!x&&T==null&&pt(S,f,V,$,_,E,v);((K=$.onVnodeUpdated)||U)&&dt(()=>{K&&$t(K,_,f,d),U&&er(f,d,_,"updated")},E)},Re=(d,f,_,E,v,R,x)=>{for(let S=0;S<f.length;S++){const P=d[S],T=f[S],U=P.el&&(P.type===je||!Ss(P,T)||P.shapeFlag&70)?h(P.el):_;A(P,T,U,null,E,v,R,x,!0)}},pt=(d,f,_,E,v,R,x)=>{if(_!==E){if(_!==Te)for(const S in _)!Io(S)&&!(S in E)&&i(d,S,_[S],null,x,f.children,v,R,cn);for(const S in E){if(Io(S))continue;const P=E[S],T=_[S];P!==T&&S!=="value"&&i(d,S,T,P,x,f.children,v,R,cn)}"value"in E&&i(d,"value",_.value,E.value)}},Lt=(d,f,_,E,v,R,x,S,P)=>{const T=f.el=d?d.el:a(""),U=f.anchor=d?d.anchor:a("");let{patchFlag:V,dynamicChildren:$,slotScopeIds:K}=f;K&&(S=S?S.concat(K):K),d==null?(r(T,_,E),r(U,_,E),ae(f.children,_,U,v,R,x,S,P)):V>0&&V&64&&$&&d.dynamicChildren?(Re(d.dynamicChildren,$,_,v,R,x,S),(f.key!=null||v&&f===v.subTree)&&Tp(d,f,!0)):ve(d,f,_,U,v,R,x,S,P)},xr=(d,f,_,E,v,R,x,S,P)=>{f.slotScopeIds=S,d==null?f.shapeFlag&512?v.ctx.activate(f,_,E,x,P):bs(f,_,E,v,R,x,P):bn(d,f,P)},bs=(d,f,_,E,v,R,x)=>{const S=d.component=Gv(d,E,v);if(hp(d)&&(S.ctx.renderer=Nr),Qv(S),S.asyncDep){if(v&&v.registerDep(S,_e),!d.el){const P=S.subTree=ct(_r);B(null,P,f,_)}return}_e(S,d,f,_,v,R,x)},bn=(d,f,_)=>{const E=f.component=d.component;if(sv(d,f,_))if(E.asyncDep&&!E.asyncResolved){ke(E,f,_);return}else E.next=f,Jy(E.update),E.update();else f.el=d.el,E.vnode=f},_e=(d,f,_,E,v,R,x)=>{const S=()=>{if(d.isMounted){let{next:U,bu:V,u:$,parent:K,vnode:ie}=d,Ee=U,ye;tr(d,!1),U?(U.el=ie.el,ke(d,U,x)):U=ie,V&&wo(V),(ye=U.props&&U.props.onVnodeBeforeUpdate)&&$t(ye,K,U,ie),tr(d,!0);const Oe=_c(d),wt=d.subTree;d.subTree=Oe,A(wt,Oe,h(wt.el),so(wt),d,v,R),U.el=Oe.el,Ee===null&&iv(d,Oe.el),$&&dt($,v),(ye=U.props&&U.props.onVnodeUpdated)&&dt(()=>$t(ye,K,U,ie),v)}else{let U;const{el:V,props:$}=f,{bm:K,m:ie,parent:Ee}=d,ye=Ao(f);if(tr(d,!1),K&&wo(K),!ye&&(U=$&&$.onVnodeBeforeMount)&&$t(U,Ee,f),tr(d,!0),V&&mc){const Oe=()=>{d.subTree=_c(d),mc(V,d.subTree,d,v,null)};ye?f.type.__asyncLoader().then(()=>!d.isUnmounted&&Oe()):Oe()}else{const Oe=d.subTree=_c(d);A(null,Oe,_,E,d,v,R),f.el=Oe.el}if(ie&&dt(ie,v),!ye&&(U=$&&$.onVnodeMounted)){const Oe=f;dt(()=>$t(U,Ee,Oe),v)}(f.shapeFlag&256||Ee&&Ao(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&d.a&&dt(d.a,v),d.isMounted=!0,f=_=E=null}},P=d.effect=new ql(S,()=>Jl(T),d.scope),T=d.update=()=>P.run();T.id=d.uid,tr(d,!0),T()},ke=(d,f,_)=>{f.component=d;const E=d.vnode.props;d.vnode=f,d.next=null,Dv(d,f.props,E,_),Mv(d,f.children,_),fs(),Oh(),ps()},ve=(d,f,_,E,v,R,x,S,P=!1)=>{const T=d&&d.children,U=d?d.shapeFlag:0,V=f.children,{patchFlag:$,shapeFlag:K}=f;if($>0){if($&128){ro(T,V,_,E,v,R,x,S,P);return}else if($&256){Yn(T,V,_,E,v,R,x,S,P);return}}K&8?(U&16&&cn(T,v,R),V!==T&&u(_,V)):U&16?K&16?ro(T,V,_,E,v,R,x,S,P):cn(T,v,R,!0):(U&8&&u(_,""),K&16&&ae(V,_,E,v,R,x,S,P))},Yn=(d,f,_,E,v,R,x,S,P)=>{d=d||Br,f=f||Br;const T=d.length,U=f.length,V=Math.min(T,U);let $;for($=0;$<V;$++){const K=f[$]=P?Cn(f[$]):qt(f[$]);A(d[$],K,_,null,v,R,x,S,P)}T>U?cn(d,v,R,!0,!1,V):ae(f,_,E,v,R,x,S,P,V)},ro=(d,f,_,E,v,R,x,S,P)=>{let T=0;const U=f.length;let V=d.length-1,$=U-1;for(;T<=V&&T<=$;){const K=d[T],ie=f[T]=P?Cn(f[T]):qt(f[T]);if(Ss(K,ie))A(K,ie,_,null,v,R,x,S,P);else break;T++}for(;T<=V&&T<=$;){const K=d[V],ie=f[$]=P?Cn(f[$]):qt(f[$]);if(Ss(K,ie))A(K,ie,_,null,v,R,x,S,P);else break;V--,$--}if(T>V){if(T<=$){const K=$+1,ie=K<U?f[K].el:E;for(;T<=$;)A(null,f[T]=P?Cn(f[T]):qt(f[T]),_,ie,v,R,x,S,P),T++}}else if(T>$)for(;T<=V;)Ft(d[T],v,R,!0),T++;else{const K=T,ie=T,Ee=new Map;for(T=ie;T<=$;T++){const mt=f[T]=P?Cn(f[T]):qt(f[T]);mt.key!=null&&Ee.set(mt.key,T)}let ye,Oe=0;const wt=$-ie+1;let Dr=!1,Th=0;const As=new Array(wt);for(T=0;T<wt;T++)As[T]=0;for(T=K;T<=V;T++){const mt=d[T];if(Oe>=wt){Ft(mt,v,R,!0);continue}let Ut;if(mt.key!=null)Ut=Ee.get(mt.key);else for(ye=ie;ye<=$;ye++)if(As[ye-ie]===0&&Ss(mt,f[ye])){Ut=ye;break}Ut===void 0?Ft(mt,v,R,!0):(As[Ut-ie]=T+1,Ut>=Th?Th=Ut:Dr=!0,A(mt,f[Ut],_,null,v,R,x,S,P),Oe++)}const Ih=Dr?Uv(As):Br;for(ye=Ih.length-1,T=wt-1;T>=0;T--){const mt=ie+T,Ut=f[mt],wh=mt+1<U?f[mt+1].el:E;As[T]===0?A(null,Ut,_,wh,v,R,x,S,P):Dr&&(ye<0||T!==Ih[ye]?Xn(Ut,_,wh,2):ye--)}}},Xn=(d,f,_,E,v=null)=>{const{el:R,type:x,transition:S,children:P,shapeFlag:T}=d;if(T&6){Xn(d.component.subTree,f,_,E);return}if(T&128){d.suspense.move(f,_,E);return}if(T&64){x.move(d,f,_,Nr);return}if(x===je){r(R,f,_);for(let V=0;V<P.length;V++)Xn(P[V],f,_,E);r(d.anchor,f,_);return}if(x===vc){te(d,f,_);return}if(E!==2&&T&1&&S)if(E===0)S.beforeEnter(R),r(R,f,_),dt(()=>S.enter(R),v);else{const{leave:V,delayLeave:$,afterLeave:K}=S,ie=()=>r(R,f,_),Ee=()=>{V(R,()=>{ie(),K&&K()})};$?$(R,ie,Ee):Ee()}else r(R,f,_)},Ft=(d,f,_,E=!1,v=!1)=>{const{type:R,props:x,ref:S,children:P,dynamicChildren:T,shapeFlag:U,patchFlag:V,dirs:$}=d;if(S!=null&&Zc(S,null,_,d,!0),U&256){f.ctx.deactivate(d);return}const K=U&1&&$,ie=!Ao(d);let Ee;if(ie&&(Ee=x&&x.onVnodeBeforeUnmount)&&$t(Ee,f,d),U&6)K_(d.component,_,E);else{if(U&128){d.suspense.unmount(_,E);return}K&&er(d,null,f,"beforeUnmount"),U&64?d.type.remove(d,f,_,v,Nr,E):T&&(R!==je||V>0&&V&64)?cn(T,f,_,!1,!0):(R===je&&V&384||!v&&U&16)&&cn(P,f,_),E&&vh(d)}(ie&&(Ee=x&&x.onVnodeUnmounted)||K)&&dt(()=>{Ee&&$t(Ee,f,d),K&&er(d,null,f,"unmounted")},_)},vh=d=>{const{type:f,el:_,anchor:E,transition:v}=d;if(f===je){W_(_,E);return}if(f===vc){L(d);return}const R=()=>{s(_),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:x,delayLeave:S}=v,P=()=>x(_,R);S?S(d.el,R,P):P()}else R()},W_=(d,f)=>{let _;for(;d!==f;)_=p(d),s(d),d=_;s(f)},K_=(d,f,_)=>{const{bum:E,scope:v,update:R,subTree:x,um:S}=d;E&&wo(E),v.stop(),R&&(R.active=!1,Ft(x,d,f,_)),S&&dt(S,f),dt(()=>{d.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},cn=(d,f,_,E=!1,v=!1,R=0)=>{for(let x=R;x<d.length;x++)Ft(d[x],f,_,E,v)},so=d=>d.shapeFlag&6?so(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),Eh=(d,f,_)=>{d==null?f._vnode&&Ft(f._vnode,null,null,!0):A(f._vnode||null,d,f,null,null,null,_),Oh(),sp(),f._vnode=d},Nr={p:A,um:Ft,m:Xn,r:vh,mt:bs,mc:ae,pc:ve,pbc:Re,n:so,o:t};let pc,mc;return e&&([pc,mc]=e(Nr)),{render:Eh,hydrate:pc,createApp:Pv(Eh,pc)}}function tr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Tp(t,e,n=!1){const r=t.children,s=e.children;if(q(r)&&q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Cn(s[i]),a.el=o.el),n||Tp(o,a)),a.type===Na&&(a.el=o.el)}}function Uv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const $v=t=>t.__isTeleport,je=Symbol.for("v-fgt"),Na=Symbol.for("v-txt"),_r=Symbol.for("v-cmt"),vc=Symbol.for("v-stc"),Fs=[];let At=null;function se(t=!1){Fs.push(At=t?null:[])}function jv(){Fs.pop(),At=Fs[Fs.length-1]||null}let Xs=1;function Hh(t){Xs+=t}function Ip(t){return t.dynamicChildren=Xs>0?At||Br:null,jv(),Xs>0&&At&&At.push(t),t}function le(t,e,n,r,s,i){return Ip(g(t,e,n,r,s,i,!0))}function ei(t,e,n,r,s){return Ip(ct(t,e,n,r,s,!0))}function Bv(t){return t?t.__v_isVNode===!0:!1}function Ss(t,e){return t.type===e.type&&t.key===e.key}const Da="__vInternal",wp=({key:t})=>t??null,So=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||Ne(t)||ee(t)?{i:yt,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wp(e),ref:e&&So(e),scopeId:ka,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yt};return a?(nu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),Xs>0&&!o&&At&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&At.push(c),c}const ct=qv;function qv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ev)&&(t=_r),Bv(t)){const a=Xr(t,e,!0);return n&&nu(a,n),Xs>0&&!i&&At&&(a.shapeFlag&6?At[At.indexOf(t)]=a:At.push(a)),a.patchFlag|=-2,a}if(eE(t)&&(t=t.__vccOpts),e){e=zv(e);let{class:a,style:c}=e;a&&!Ue(a)&&(e.class=jl(a)),Ae(c)&&(Yf(c)&&!q(c)&&(c=qe({},c)),e.style=$l(c))}const o=Ue(t)?1:ov(t)?128:$v(t)?64:Ae(t)?4:ee(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function zv(t){return t?Yf(t)||Da in t?qe({},t):t:null}function Xr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Hv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&wp(a),ref:e&&e.ref?n&&s?q(s)?s.concat(So(e)):[s,So(e)]:So(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xr(t.ssContent),ssFallback:t.ssFallback&&Xr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ln(t=" ",e=0){return ct(Na,null,t,e)}function St(t="",e=!1){return e?(se(),ei(_r,null,t)):ct(_r,null,t)}function qt(t){return t==null||typeof t=="boolean"?ct(_r):q(t)?ct(je,null,t.slice()):typeof t=="object"?Cn(t):ct(Na,null,String(t))}function Cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xr(t)}function nu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),nu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Da in e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[Ln(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=jl([e.class,r.class]));else if(s==="style")e.style=$l([e.style,r.style]);else if(Ea(s)){const i=e[s],o=r[s];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $t(t,e,n,r=null){xt(t,e,7,[n,r])}const Wv=mp();let Kv=0;function Gv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Wv,i={uid:Kv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ff(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_p(r,s),emitsOptions:op(r,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:r.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ev.bind(null,i),t.ce&&t.ce(i),i}let Be=null,ru,Or,Wh="__VUE_INSTANCE_SETTERS__";(Or=jc()[Wh])||(Or=jc()[Wh]=[]),Or.push(t=>Be=t),ru=t=>{Or.length>1?Or.forEach(e=>e(t)):Or[0](t)};const es=t=>{ru(t),t.scope.on()},dr=()=>{Be&&Be.scope.off(),ru(null)};function bp(t){return t.vnode.shapeFlag&4}let ti=!1;function Qv(t,e=!1){ti=e;const{props:n,children:r}=t.vnode,s=bp(t);Nv(t,n,s,e),Vv(t,r);const i=s?Zv(t,e):void 0;return ti=!1,i}function Zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ra(new Proxy(t.ctx,Iv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Yv(t):null;es(t),fs();const i=Mn(r,t,0,[t.props,s]);if(ps(),dr(),Df(i)){if(i.then(dr,dr),e)return i.then(o=>{Kh(t,o,e)}).catch(o=>{Ca(o,t,0)});t.asyncDep=i}else Kh(t,i,e)}else Ap(t,e)}function Kh(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=tp(e)),Ap(t,n)}let Gh;function Ap(t,e,n){const r=t.type;if(!t.render){if(!e&&Gh&&!r.render){const s=r.template||eu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=qe(qe({isCustomElement:i,delimiters:a},o),c);r.render=Gh(s,l)}}t.render=r.render||kt}es(t),fs(),wv(t),ps(),dr()}function Jv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}}))}function Yv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Jv(t)},slots:t.slots,emit:t.emit,expose:e}}function Oa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(tp(Ra(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ms)return Ms[n](t)},has(e,n){return n in e||n in Ms}}))}function Xv(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function eE(t){return ee(t)&&"__vccOpts"in t}const su=(t,e)=>Gy(t,e,ti),tE=Symbol.for("v-scx"),nE=()=>Ls(tE),rE="3.3.4",sE="http://www.w3.org/2000/svg",sr=typeof document<"u"?document:null,Qh=sr&&sr.createElement("template"),iE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sr.createElementNS(sE,t):sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Qh.innerHTML=r?`<svg>${t}</svg>`:t;const a=Qh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function oE(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function aE(t,e,n){const r=t.style,s=Ue(n);if(n&&!s){if(e&&!Ue(e))for(const i in e)n[i]==null&&Jc(r,i,"");for(const i in n)Jc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Zh=/\s*!important$/;function Jc(t,e,n){if(q(n))n.forEach(r=>Jc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=cE(t,e);Zh.test(n)?t.setProperty(Rr(r),n.replace(Zh,""),"important"):t[r]=n}}const Jh=["Webkit","Moz","ms"],Ec={};function cE(t,e){const n=Ec[e];if(n)return n;let r=Xt(e);if(r!=="filter"&&r in t)return Ec[e]=r;r=wa(r);for(let s=0;s<Jh.length;s++){const i=Jh[s]+r;if(i in t)return Ec[e]=i}return e}const Yh="http://www.w3.org/1999/xlink";function lE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Yh,e.slice(6,e.length)):t.setAttributeNS(Yh,e,n);else{const i=cy(e);n==null||i&&!Mf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function uE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Mf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function ir(t,e,n,r){t.addEventListener(e,n,r)}function hE(t,e,n,r){t.removeEventListener(e,n,r)}function dE(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=fE(e);if(r){const l=i[e]=gE(r,s);ir(t,a,l,c)}else o&&(hE(t,a,o,c),i[e]=void 0)}}const Xh=/(?:Once|Passive|Capture)$/;function fE(t){let e;if(Xh.test(t)){e={};let r;for(;r=t.match(Xh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rr(t.slice(2)),e]}let Tc=0;const pE=Promise.resolve(),mE=()=>Tc||(pE.then(()=>Tc=0),Tc=Date.now());function gE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xt(_E(r,n.value),e,5,[r])};return n.value=t,n.attached=mE(),n}function _E(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ed=/^on[a-z]/,yE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?oE(t,r,s):e==="style"?aE(t,n,r):Ea(e)?Ll(e)||dE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vE(t,e,r,s))?uE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),lE(t,e,r,s))};function vE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ed.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ed.test(e)&&Ue(n)?!1:e in t}const Bo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>wo(e,n):e};function EE(t){t.target.composing=!0}function td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Bo(s);const i=r||s.props&&s.props.type==="number";ir(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Lo(a)),t._assign(a)}),n&&ir(t,"change",()=>{t.value=t.value.trim()}),e||(ir(t,"compositionstart",EE),ir(t,"compositionend",td),ir(t,"change",td))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Bo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Lo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},nd={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ta(e);ir(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Lo(qo(o)):qo(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Bo(r)},mounted(t,{value:e}){rd(t,e)},beforeUpdate(t,e,n){t._assign=Bo(n)},updated(t,{value:e}){rd(t,e)}};function rd(t,e){const n=t.multiple;if(!(n&&!q(e)&&!Ta(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=qo(i);if(n)q(e)?i.selected=uy(e,o)>-1:i.selected=e.has(o);else if(ba(qo(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qo(t){return"_value"in t?t._value:t.value}const TE=["ctrl","shift","alt","meta"],IE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>TE.some(n=>t[`${n}Key`]&&!e.includes(n))},Sp=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=IE[e[s]];if(i&&i(n,e))return}return t(n,...r)},wE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},iu=(t,e)=>n=>{if(!("key"in n))return;const r=Rr(n.key);if(e.some(s=>s===r||wE[s]===r))return t(n)},bE=qe({patchProp:yE},iE);let sd;function AE(){return sd||(sd=Lv(bE))}const SE=(...t)=>{const e=AE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=RE(r);if(!s)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function RE(t){return Ue(t)?document.querySelector(t):t}var CE=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Rp;const Va=t=>Rp=t,Cp=Symbol();function Yc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Us;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Us||(Us={}));function PE(){const t=Uf(!0),e=t.run(()=>et({}));let n=[],r=[];const s=Ra({install(i){Va(s),s._a=i,i.provide(Cp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!CE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Pp=()=>{};function id(t,e,n,r=Pp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&$f()&&dy(s),s}function Vr(t,...e){t.slice().forEach(n=>{n(...e)})}const kE=t=>t();function Xc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Yc(s)&&Yc(r)&&t.hasOwnProperty(n)&&!Ne(r)&&!Vn(r)?t[n]=Xc(s,r):t[n]=r}return t}const xE=Symbol();function NE(t){return!Yc(t)||!t.hasOwnProperty(xE)}const{assign:Rn}=Object;function DE(t){return!!(Ne(t)&&t.effect)}function OE(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=zy(n.state.value[t]);return Rn(u,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Ra(su(()=>{Va(n);const m=n._s.get(t);return o[p].call(m,m)})),h),{}))}return c=kp(t,l,e,n,r,!0),c}function kp(t,e,n={},r,s,i){let o;const a=Rn({actions:{}},n),c={deep:!0};let l,u,h=[],p=[],m;const b=r.state.value[t];!i&&!b&&(r.state.value[t]={}),et({});let A;function C(ae){let ne;l=u=!1,typeof ae=="function"?(ae(r.state.value[t]),ne={type:Us.patchFunction,storeId:t,events:m}):(Xc(r.state.value[t],ae),ne={type:Us.patchObject,payload:ae,storeId:t,events:m});const Re=A=Symbol();Zl().then(()=>{A===Re&&(l=!0)}),u=!0,Vr(h,ne,r.state.value[t])}const B=i?function(){const{state:ne}=n,Re=ne?ne():{};this.$patch(pt=>{Rn(pt,Re)})}:Pp;function X(){o.stop(),h=[],p=[],r._s.delete(t)}function te(ae,ne){return function(){Va(r);const Re=Array.from(arguments),pt=[],Lt=[];function xr(_e){pt.push(_e)}function bs(_e){Lt.push(_e)}Vr(p,{args:Re,name:ae,store:de,after:xr,onError:bs});let bn;try{bn=ne.apply(this&&this.$id===t?this:de,Re)}catch(_e){throw Vr(Lt,_e),_e}return bn instanceof Promise?bn.then(_e=>(Vr(pt,_e),_e)).catch(_e=>(Vr(Lt,_e),Promise.reject(_e))):(Vr(pt,bn),bn)}}const L={_p:r,$id:t,$onAction:id.bind(null,p),$patch:C,$reset:B,$subscribe(ae,ne={}){const Re=id(h,ae,ne.detached,()=>pt()),pt=o.run(()=>bo(()=>r.state.value[t],Lt=>{(ne.flush==="sync"?u:l)&&ae({storeId:t,type:Us.direct,events:m},Lt)},Rn({},c,ne)));return Re},$dispose:X},de=Sa(L);r._s.set(t,de);const De=r._a&&r._a.runWithContext||kE,Se=r._e.run(()=>(o=Uf(),De(()=>o.run(e))));for(const ae in Se){const ne=Se[ae];if(Ne(ne)&&!DE(ne)||Vn(ne))i||(b&&NE(ne)&&(Ne(ne)?ne.value=b[ae]:Xc(ne,b[ae])),r.state.value[t][ae]=ne);else if(typeof ne=="function"){const Re=te(ae,ne);Se[ae]=Re,a.actions[ae]=ne}}return Rn(de,Se),Rn(he(de),Se),Object.defineProperty(de,"$state",{get:()=>r.state.value[t],set:ae=>{C(ne=>{Rn(ne,ae)})}}),r._p.forEach(ae=>{Rn(de,o.run(()=>ae({store:de,app:r._a,pinia:r,options:a})))}),b&&i&&n.hydrate&&n.hydrate(de.$state,b),l=!0,u=!0,de}function VE(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=xv();return a=a||(l?Ls(Cp,null):null),a&&Va(a),a=Rp,a._s.has(r)||(i?kp(r,e,s,a):OE(r,s,a)),a._s.get(r)}return o.$id=r,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ME=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Np={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ME(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new LE;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const b=l<<6&192|h;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FE=function(t){const e=xp(t);return Np.encodeByteArray(e,!0)},zo=function(t){return FE(t).replace(/\./g,"")},Dp=function(t){try{return Np.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=()=>UE().__FIREBASE_DEFAULTS__,jE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dp(t[1]);return e&&JSON.parse(e)},ou=()=>{try{return $E()||jE()||BE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Op=t=>{var e,n;return(n=(e=ou())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qE=t=>{const e=Op(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vp=()=>{var t;return(t=ou())===null||t===void 0?void 0:t.config},Mp=t=>{var e;return(e=ou())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function KE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QE(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZE(){try{return typeof indexedDB=="object"}catch{return!1}}function JE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Px(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=YE,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?XE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wn(s,a,r)}}function XE(t,e){return t.replace(eT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eT=/\{\$([^}]+)}/g;function tT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(od(i)&&od(o)){if(!Ho(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function od(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nT(t,e){const n=new rT(t,e);return n.subscribe.bind(n)}class rT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ic),s.error===void 0&&(s.error=Ic),s.complete===void 0&&(s.complete=Ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ic(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=1e3,oT=2,aT=4*60*60*1e3,cT=.5;function kx(t,e=iT,n=oT){const r=e*Math.pow(n,t),s=Math.round(cT*r*(Math.random()-.5)*2);return Math.min(aT,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hT(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uT(t){return t===nr?void 0:t}function hT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const fT={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},pT=fe.INFO,mT={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},gT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class au{constructor(e){this.name=e,this._logLevel=pT,this._logHandler=gT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const _T=(t,e)=>e.some(n=>t instanceof n);let ad,cd;function yT(){return ad||(ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vT(){return cd||(cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lp=new WeakMap,el=new WeakMap,Fp=new WeakMap,wc=new WeakMap,cu=new WeakMap;function ET(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Un(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lp.set(n,t)}).catch(()=>{}),cu.set(e,t),e}function TT(t){if(el.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});el.set(t,e)}let tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return el.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IT(t){tl=t(tl)}function wT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bc(this),e,...n);return Fp.set(r,e.sort?e.sort():[e]),Un(r)}:vT().includes(t)?function(...e){return t.apply(bc(this),e),Un(Lp.get(this))}:function(...e){return Un(t.apply(bc(this),e))}}function bT(t){return typeof t=="function"?wT(t):(t instanceof IDBTransaction&&TT(t),_T(t,yT())?new Proxy(t,tl):t)}function Un(t){if(t instanceof IDBRequest)return ET(t);if(wc.has(t))return wc.get(t);const e=bT(t);return e!==t&&(wc.set(t,e),cu.set(e,t)),e}const bc=t=>cu.get(t);function AT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Un(o.result),c.oldVersion,c.newVersion,Un(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ST=["get","getKey","getAll","getAllKeys","count"],RT=["put","add","delete","clear"],Ac=new Map;function ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ac.get(e))return Ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=RT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ST.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ac.set(e,i),i}IT(t=>({...t,get:(e,n,r)=>ld(e,n)||t.get(e,n,r),has:(e,n)=>!!ld(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nl="@firebase/app",ud="0.9.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new au("@firebase/app"),kT="@firebase/app-compat",xT="@firebase/analytics-compat",NT="@firebase/analytics",DT="@firebase/app-check-compat",OT="@firebase/app-check",VT="@firebase/auth",MT="@firebase/auth-compat",LT="@firebase/database",FT="@firebase/database-compat",UT="@firebase/functions",$T="@firebase/functions-compat",jT="@firebase/installations",BT="@firebase/installations-compat",qT="@firebase/messaging",zT="@firebase/messaging-compat",HT="@firebase/performance",WT="@firebase/performance-compat",KT="@firebase/remote-config",GT="@firebase/remote-config-compat",QT="@firebase/storage",ZT="@firebase/storage-compat",JT="@firebase/firestore",YT="@firebase/firestore-compat",XT="firebase",eI="10.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="[DEFAULT]",tI={[nl]:"fire-core",[kT]:"fire-core-compat",[NT]:"fire-analytics",[xT]:"fire-analytics-compat",[OT]:"fire-app-check",[DT]:"fire-app-check-compat",[VT]:"fire-auth",[MT]:"fire-auth-compat",[LT]:"fire-rtdb",[FT]:"fire-rtdb-compat",[UT]:"fire-fn",[$T]:"fire-fn-compat",[jT]:"fire-iid",[BT]:"fire-iid-compat",[qT]:"fire-fcm",[zT]:"fire-fcm-compat",[HT]:"fire-perf",[WT]:"fire-perf-compat",[KT]:"fire-rc",[GT]:"fire-rc-compat",[QT]:"fire-gcs",[ZT]:"fire-gcs-compat",[JT]:"fire-fst",[YT]:"fire-fst-compat","fire-js":"fire-js",[XT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new Map,sl=new Map;function nI(t,e){try{t.container.addComponent(e)}catch(n){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(sl.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;sl.set(e,t);for(const n of Wo.values())nI(n,t);return!0}function lu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new Oi("app","Firebase",rI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=eI;function Up(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});if(n||(n=Vp()),!n)throw $n.create("no-options");const i=Wo.get(s);if(i){if(Ho(n,i.options)&&Ho(r,i.config))return i;throw $n.create("duplicate-app",{appName:s})}const o=new dT(s);for(const c of sl.values())o.addComponent(c);const a=new sI(n,r,o);return Wo.set(s,a),a}function $p(t=rl){const e=Wo.get(t);if(!e&&t===rl&&Vp())return Up();if(!e)throw $n.create("no-app",{appName:t});return e}function jn(t,e,n){var r;let s=(r=tI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(a.join(" "));return}ts(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="firebase-heartbeat-database",oI=1,ni="firebase-heartbeat-store";let Sc=null;function jp(){return Sc||(Sc=AT(iI,oI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ni)}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),Sc}async function aI(t){try{return await(await jp()).transaction(ni).objectStore(ni).get(Bp(t))}catch(e){if(e instanceof wn)vr.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vr.warn(n.message)}}}async function hd(t,e){try{const r=(await jp()).transaction(ni,"readwrite");await r.objectStore(ni).put(e,Bp(t)),await r.done}catch(n){if(n instanceof wn)vr.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vr.warn(r.message)}}}function Bp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=1024,lI=30*24*60*60*1e3;class uI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=lI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dd(),{heartbeatsToSend:n,unsentEntries:r}=hI(this._heartbeatsCache.heartbeats),s=zo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function dd(){return new Date().toISOString().substring(0,10)}function hI(t,e=cI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZE()?JE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fd(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t){ts(new yr("platform-logger",e=>new CT(e),"PRIVATE")),ts(new yr("heartbeat",e=>new uI(e),"PRIVATE")),jn(nl,ud,t),jn(nl,ud,"esm2017"),jn("fire-js","")}fI("");var pI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,uu=uu||{},W=pI||self;function Ma(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mI(t){return Object.prototype.hasOwnProperty.call(t,Rc)&&t[Rc]||(t[Rc]=++gI)}var Rc="closure_uid_"+(1e9*Math.random()>>>0),gI=0;function _I(t,e,n){return t.call.apply(t.bind,arguments)}function yI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=_I:tt=yI,tt.apply(null,arguments)}function ho(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function He(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Zn(){this.s=this.s,this.o=this.o}var vI=0;Zn.prototype.s=!1;Zn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vI!=0)&&mI(this)};Zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function pd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ma(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var EI=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",()=>{},e),W.removeEventListener("test",()=>{},e)}catch{}return t}();function ri(t){return/^[\s\xa0]*$/.test(t)}function La(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Ht(t){return La().indexOf(t)!=-1}function du(t){return du[" "](t),t}du[" "]=function(){};function TI(t,e){var n=fw;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var II=Ht("Opera"),ns=Ht("Trident")||Ht("MSIE"),zp=Ht("Edge"),il=zp||ns,Hp=Ht("Gecko")&&!(La().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),wI=La().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function Wp(){var t=W.document;return t?t.documentMode:void 0}var ol;e:{var Cc="",Pc=function(){var t=La();if(Hp)return/rv:([^\);]+)(\)|;)/.exec(t);if(zp)return/Edge\/([\d\.]+)/.exec(t);if(ns)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wI)return/WebKit\/(\S+)/.exec(t);if(II)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pc&&(Cc=Pc?Pc[1]:""),ns){var kc=Wp();if(kc!=null&&kc>parseFloat(Cc)){ol=String(kc);break e}}ol=Cc}var al;if(W.document&&ns){var md=Wp();al=md||parseInt(ol,10)||void 0}else al=void 0;var bI=al;function si(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hp){e:{try{du(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:AI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&si.$.h.call(this)}}He(si,nt);var AI={2:"touch",3:"pen",4:"mouse"};si.prototype.h=function(){si.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Li="closure_listenable_"+(1e6*Math.random()|0),SI=0;function RI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++SI,this.fa=this.ia=!1}function Fa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function fu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function CI(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Kp(t){const e={};for(const n in t)e[n]=t[n];return e}const gd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gp(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<gd.length;i++)n=gd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ua(t){this.src=t,this.g={},this.h=0}Ua.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ll(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new RI(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function cl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=qp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Fa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ll(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var pu="closure_lm_"+(1e6*Math.random()|0),xc={};function Qp(t,e,n,r,s){if(r&&r.once)return Jp(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qp(t,e[i],n,r,s);return null}return n=_u(n),t&&t[Li]?t.O(e,n,Mi(r)?!!r.capture:!!r,s):Zp(t,e,n,!1,r,s)}function Zp(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Mi(s)?!!s.capture:!!s,a=gu(t);if(a||(t[pu]=a=new Ua(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=PI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)EI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Xp(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PI(){function t(n){return e.call(t.src,t.listener,n)}const e=kI;return t}function Jp(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Jp(t,e[i],n,r,s);return null}return n=_u(n),t&&t[Li]?t.P(e,n,Mi(r)?!!r.capture:!!r,s):Zp(t,e,n,!0,r,s)}function Yp(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Yp(t,e[i],n,r,s);else r=Mi(r)?!!r.capture:!!r,n=_u(n),t&&t[Li]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ll(i,n,r,s),-1<n&&(Fa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=gu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ll(e,n,r,s)),(n=-1<t?e[t]:null)&&mu(n))}function mu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Li])cl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Xp(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gu(e))?(cl(n,t),n.h==0&&(n.src=null,e[pu]=null)):Fa(t)}}}function Xp(t){return t in xc?xc[t]:xc[t]="on"+t}function kI(t,e){if(t.fa)t=!0;else{e=new si(e,this);var n=t.listener,r=t.la||t.src;t.ia&&mu(t),t=n.call(r,e)}return t}function gu(t){return t=t[pu],t instanceof Ua?t:null}var Nc="__closure_events_fn_"+(1e9*Math.random()>>>0);function _u(t){return typeof t=="function"?t:(t[Nc]||(t[Nc]=function(e){return t.handleEvent(e)}),t[Nc])}function ze(){Zn.call(this),this.i=new Ua(this),this.S=this,this.J=null}He(ze,Zn);ze.prototype[Li]=!0;ze.prototype.removeEventListener=function(t,e,n,r){Yp(this,t,e,n,r)};function Ge(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var s=e;e=new nt(r,t),Gp(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=fo(o,r,!0,e)&&s}if(o=e.g=t,s=fo(o,r,!0,e)&&s,s=fo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=fo(o,r,!1,e)&&s}ze.prototype.N=function(){if(ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fa(n[r]);delete t.g[e],t.h--}}this.J=null};ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function fo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&cl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var yu=W.JSON.stringify;class xI{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function NI(){var t=vu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class DI{constructor(){this.h=this.g=null}add(e,n){const r=em.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var em=new xI(()=>new OI,t=>t.reset());class OI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VI(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function MI(t){W.setTimeout(()=>{throw t},0)}let ii,oi=!1,vu=new DI,tm=()=>{const t=W.Promise.resolve(void 0);ii=()=>{t.then(LI)}};var LI=()=>{for(var t;t=NI();){try{t.h.call(t.g)}catch(n){MI(n)}var e=em;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oi=!1};function $a(t,e){ze.call(this),this.h=t||1,this.g=e||W,this.j=tt(this.qb,this),this.l=Date.now()}He($a,ze);k=$a.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(Eu(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Eu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){$a.$.N.call(this),Eu(this),delete this.g};function Tu(t,e,n){if(typeof t=="function")n&&(t=tt(t,n));else if(t&&typeof t.handleEvent=="function")t=tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function nm(t){t.g=Tu(()=>{t.g=null,t.i&&(t.i=!1,nm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class FI extends Zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:nm(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ai(t){Zn.call(this),this.h=t,this.g={}}He(ai,Zn);var _d=[];function rm(t,e,n,r){Array.isArray(n)||(n&&(_d[0]=n.toString()),n=_d);for(var s=0;s<n.length;s++){var i=Qp(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function sm(t){fu(t.g,function(e,n){this.g.hasOwnProperty(n)&&mu(e)},t),t.g={}}ai.prototype.N=function(){ai.$.N.call(this),sm(this)};ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ja(){this.g=!0}ja.prototype.Ea=function(){this.g=!1};function UI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function $I(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function jr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BI(t,n)+(r?" "+r:"")})}function jI(t,e){t.info(function(){return"TIMEOUT: "+e})}ja.prototype.info=function(){};function BI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return yu(n)}catch{return e}}var Cr={},yd=null;function Ba(){return yd=yd||new ze}Cr.Ta="serverreachability";function im(t){nt.call(this,Cr.Ta,t)}He(im,nt);function ci(t){const e=Ba();Ge(e,new im(e))}Cr.STAT_EVENT="statevent";function om(t,e){nt.call(this,Cr.STAT_EVENT,t),this.stat=e}He(om,nt);function lt(t){const e=Ba();Ge(e,new om(e,t))}Cr.Ua="timingevent";function am(t,e){nt.call(this,Cr.Ua,t),this.size=e}He(am,nt);function Fi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var qa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Iu(){}Iu.prototype.h=null;function vd(t){return t.h||(t.h=t.i())}function lm(){}var Ui={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function wu(){nt.call(this,"d")}He(wu,nt);function bu(){nt.call(this,"c")}He(bu,nt);var ul;function za(){}He(za,Iu);za.prototype.g=function(){return new XMLHttpRequest};za.prototype.i=function(){return{}};ul=new za;function $i(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ai(this),this.P=qI,t=il?125:void 0,this.V=new $a(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new um}function um(){this.i=null,this.g="",this.h=!1}var qI=45e3,hl={},Ko={};k=$i.prototype;k.setTimeout=function(t){this.P=t};function dl(t,e,n){t.L=1,t.v=Wa(gn(e)),t.s=n,t.S=!0,hm(t,null)}function hm(t,e){t.G=Date.now(),ji(t),t.A=gn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),vm(n.i,"t",r),t.C=0,n=t.l.J,t.h=new um,t.g=$m(t.l,n?e:null,!t.s),0<t.O&&(t.M=new FI(tt(t.Pa,t,t.g),t.O)),rm(t.U,t.g,"readystatechange",t.nb),e=t.I?Kp(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ci(),UI(t.j,t.u,t.A,t.m,t.W,t.s)}k.nb=function(t){t=t.target;const e=this.M;e&&Wt(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const u=Wt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||il||this.g&&(this.h.h||this.g.ja()||wd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ci(3):ci(2)),Ha(this);var n=this.g.da();this.ca=n;t:if(dm(this)){var r=wd(this.g);t="";var s=r.length,i=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),$s(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,$I(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ri(a)){var l=a;break t}}l=null}if(n=l)jr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fl(this,n);else{this.i=!1,this.o=3,lt(12),ar(this),$s(this);break e}}this.S?(fm(this,u,o),il&&this.i&&u==3&&(rm(this.U,this.V,"tick",this.mb),this.V.start())):(jr(this.j,this.m,o,null),fl(this,o)),u==4&&ar(this),this.i&&!this.J&&(u==4?Mm(this.l,this):(this.i=!1,ji(this)))}else uw(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),ar(this),$s(this)}}}catch{}finally{}};function dm(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function fm(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=zI(t,n),s==Ko){e==4&&(t.o=4,lt(14),r=!1),jr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==hl){t.o=4,lt(15),jr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else jr(t.j,t.m,s,null),fl(t,s);dm(t)&&s!=Ko&&s!=hl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ku(e),e.M=!0,lt(11))):(jr(t.j,t.m,n,"[Invalid Chunked Response]"),ar(t),$s(t))}k.mb=function(){if(this.g){var t=Wt(this.g),e=this.g.ja();this.C<e.length&&(Ha(this),fm(this,t,e),this.i&&t!=4&&ji(this))}};function zI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ko:(n=Number(e.substring(n,r)),isNaN(n)?hl:(r+=1,r+n>e.length?Ko:(e=e.slice(r,r+n),t.C=r+n,e)))}k.cancel=function(){this.J=!0,ar(this)};function ji(t){t.Y=Date.now()+t.P,pm(t,t.P)}function pm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fi(tt(t.lb,t),e)}function Ha(t){t.B&&(W.clearTimeout(t.B),t.B=null)}k.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(jI(this.j,this.A),this.L!=2&&(ci(),lt(17)),ar(this),this.o=2,$s(this)):pm(this,this.Y-t)};function $s(t){t.l.H==0||t.J||Mm(t.l,t)}function ar(t){Ha(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Eu(t.V),sm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function fl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||pl(n.i,t))){if(!t.K&&pl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Zo(n),Qa(n);else break e;Pu(n),lt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Fi(tt(n.ib,n),6e3));if(1>=Im(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else cr(n,11)}else if((t.K||n.g==t)&&Zo(n),!ri(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const b=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var i=r.i;i.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Au(i,i.h),i.h=null))}if(r.F){const A=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(r.Da=A,Ie(r.I,r.F,A))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Um(r,r.J?r.pa:null,r.Y),o.K){wm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ha(a),ji(a)),r.g=o}else Om(r);0<n.j.length&&Za(n)}else l[0]!="stop"&&l[0]!="close"||cr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?cr(n,7):Cu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ci(4)}catch{}}function HI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ma(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function WI(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ma(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function mm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ma(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=WI(t),r=HI(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var gm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function fr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof fr){this.h=t.h,Go(this,t.j),this.s=t.s,this.g=t.g,Qo(this,t.m),this.l=t.l;var e=t.i,n=new li;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ed(this,n),this.o=t.o}else t&&(e=String(t).match(gm))?(this.h=!1,Go(this,e[1]||"",!0),this.s=xs(e[2]||""),this.g=xs(e[3]||"",!0),Qo(this,e[4]),this.l=xs(e[5]||"",!0),Ed(this,e[6]||"",!0),this.o=xs(e[7]||"")):(this.h=!1,this.i=new li(null,this.h))}fr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,Td,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,Td,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?ZI:QI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,YI)),t.join("")};function gn(t){return new fr(t)}function Go(t,e,n){t.j=n?xs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ed(t,e,n){e instanceof li?(t.i=e,XI(t.i,t.h)):(n||(e=Ns(e,JI)),t.i=new li(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function Wa(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Td=/[#\/\?@]/g,QI=/[#\?:]/g,ZI=/[#\?]/g,JI=/[#\?@]/g,YI=/#/g;function li(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jn(t){t.g||(t.g=new Map,t.h=0,t.i&&KI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=li.prototype;k.add=function(t,e){Jn(this),this.i=null,t=gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _m(t,e){Jn(t),e=gs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ym(t,e){return Jn(t),e=gs(t,e),t.g.has(e)}k.forEach=function(t,e){Jn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};k.ta=function(){Jn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};k.Z=function(t){Jn(this);let e=[];if(typeof t=="string")ym(this,t)&&(e=e.concat(this.g.get(gs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return Jn(this),this.i=null,t=gs(this,t),ym(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function vm(t,e,n){_m(t,e),0<n.length&&(t.i=null,t.g.set(gs(t,e),hu(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function XI(t,e){e&&!t.j&&(Jn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(_m(this,r),vm(this,s,n))},t)),t.j=e}var ew=class{constructor(t,e){this.g=t,this.map=e}};function Em(t){this.l=t||tw,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tw=10;function Tm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Im(t){return t.h?1:t.g?t.g.size:0}function pl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Au(t,e){t.g?t.g.add(e):t.h=e}function wm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Em.prototype.cancel=function(){if(this.i=bm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return hu(t.i)}var nw=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function rw(){this.g=new nw}function sw(t,e,n){const r=n||"";try{mm(t,function(s,i){let o=s;Mi(s)&&(o=yu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function iw(t,e){const n=new ja;if(W.Image){const r=new Image;r.onload=ho(po,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ho(po,n,r,"TestLoadImage: error",!1,e),r.onabort=ho(po,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ho(po,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function po(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Bi(t){this.l=t.fc||null,this.j=t.ob||!1}He(Bi,Iu);Bi.prototype.g=function(){return new Ka(this.l,this.j)};Bi.prototype.i=function(t){return function(){return t}}({});function Ka(t,e){ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Su,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(Ka,ze);var Su=0;k=Ka.prototype;k.open=function(t,e){if(this.readyState!=Su)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ui(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qi(this)),this.readyState=Su};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Am(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Am(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qi(this):ui(this),this.readyState==3&&Am(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,qi(this))};k.Ya=function(t){this.g&&(this.response=t,qi(this))};k.ka=function(){this.g&&qi(this)};function qi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ui(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ui(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ow=W.JSON.parse;function xe(t){ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Sm,this.L=this.M=!1}He(xe,ze);var Sm="",aw=/^https?$/i,cw=["POST","PUT"];k=xe.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ul.g(),this.C=this.u?vd(this.u):vd(ul),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Id(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=W.FormData&&t instanceof W.FormData,!(0<=qp(cw,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Pm(this),0<this.B&&((this.L=lw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=Tu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Id(this,i)}};function lw(t){return ns&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof uu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function Id(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Rm(t),Ga(t)}function Rm(t){t.F||(t.F=!0,Ge(t,"complete"),Ge(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Ga(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ga(this,!0)),xe.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?Cm(this):this.kb())};k.kb=function(){Cm(this)};function Cm(t){if(t.h&&typeof uu<"u"&&(!t.C[1]||Wt(t)!=4||t.da()!=2)){if(t.v&&Wt(t)==4)Tu(t.La,0,t);else if(Ge(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(gm)[1]||null;!s&&W.self&&W.self.location&&(s=W.self.location.protocol.slice(0,-1)),r=!aw.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var i=2<Wt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Rm(t)}}finally{Ga(t)}}}}function Ga(t,e){if(t.g){Pm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function Pm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function Wt(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ow(e)}};function wd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Sm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function uw(t){const e={};t=(t.g&&2<=Wt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ri(t[r]))continue;var n=VI(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}CI(e,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function km(t){let e="";return fu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ru(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=km(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function Rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xm(t){this.Ga=0,this.j=[],this.l=new ja,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Rs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Rs("baseRetryDelayMs",5e3,t),this.hb=Rs("retryDelaySeedMs",1e4,t),this.eb=Rs("forwardChannelMaxRetries",2,t),this.xa=Rs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Em(t&&t.concurrentRequestLimit),this.Ja=new rw,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=xm.prototype;k.ra=8;k.H=1;function Cu(t){if(Nm(t),t.H==3){var e=t.W++,n=gn(t.I);if(Ie(n,"SID",t.K),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),zi(t,n),e=new $i(t,t.l,e),e.L=2,e.v=Wa(gn(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=$m(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ji(e)}Fm(t)}function Qa(t){t.g&&(ku(t),t.g.cancel(),t.g=null)}function Nm(t){Qa(t),t.u&&(W.clearTimeout(t.u),t.u=null),Zo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Za(t){if(!Tm(t.i)&&!t.m){t.m=!0;var e=t.Na;ii||tm(),oi||(ii(),oi=!0),vu.add(e,t),t.C=0}}function hw(t,e){return Im(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Fi(tt(t.Na,t,e),Lm(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new $i(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Kp(i),Gp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Dm(this,s,e),n=gn(this.I),Ie(n,"RID",t),Ie(n,"CVER",22),this.F&&Ie(n,"X-HTTP-Session-Id",this.F),zi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(km(i)))+"&"+e:this.o&&Ru(n,this.o,i)),Au(this.i,s),this.bb&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",e),Ie(n,"SID","null"),s.aa=!0,dl(s,n,null)):dl(s,n,e),this.H=2}}else this.H==3&&(t?bd(this,t):this.j.length==0||Tm(this.i)||bd(this))};function bd(t,e){var n;e?n=e.m:n=t.W++;const r=gn(t.I);Ie(r,"SID",t.K),Ie(r,"RID",n),Ie(r,"AID",t.V),zi(t,r),t.o&&t.s&&Ru(r,t.o,t.s),n=new $i(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Dm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Au(t.i,n),dl(n,r,e)}function zi(t,e){t.na&&fu(t.na,function(n,r){Ie(e,r,n)}),t.h&&mm({},function(n,r){Ie(e,r,n)})}function Dm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?tt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{sw(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Om(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ii||tm(),oi||(ii(),oi=!0),vu.add(e,t),t.A=0}}function Pu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Fi(tt(t.Ma,t),Lm(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,Vm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Fi(tt(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),Qa(this),Vm(this))};function ku(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Vm(t){t.g=new $i(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=gn(t.wa);Ie(e,"RID","rpc"),Ie(e,"SID",t.K),Ie(e,"AID",t.V),Ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ie(e,"TO",t.qa),Ie(e,"TYPE","xmlhttp"),zi(t,e),t.o&&t.s&&Ru(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Wa(gn(e)),n.s=null,n.S=!0,hm(n,t)}k.ib=function(){this.v!=null&&(this.v=null,Qa(this),Pu(this),lt(19))};function Zo(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Mm(t,e){var n=null;if(t.g==e){Zo(t),ku(t),t.g=null;var r=2}else if(pl(t.i,e))n=e.F,wm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Ba(),Ge(r,new am(r,n)),Za(t)}else Om(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&hw(t,e)||r==2&&Pu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}}function Lm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function cr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=tt(t.pb,t);n||(n=new fr("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Go(n,"https"),Wa(n)),iw(n.toString(),r)}else lt(2);t.H=0,t.h&&t.h.za(e),Fm(t),Nm(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function Fm(t){if(t.H=0,t.ma=[],t.h){const e=bm(t.i);(e.length!=0||t.j.length!=0)&&(pd(t.ma,e),pd(t.ma,t.j),t.i.i.length=0,hu(t.j),t.j.length=0),t.h.ya()}}function Um(t,e,n){var r=n instanceof fr?gn(n):new fr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Qo(r,r.m);else{var s=W.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new fr(null);r&&Go(i,r),e&&(i.g=e),s&&Qo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ie(r,n,e),Ie(r,"VER",t.ra),zi(t,r),r}function $m(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new xe(new Bi({ob:!0})):new xe(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function jm(){}k=jm.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function Jo(){if(ns&&!(10<=Number(bI)))throw Error("Environmental error: no available transport.")}Jo.prototype.g=function(t,e){return new Et(t,e)};function Et(t,e){ze.call(this),this.g=new xm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ri(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ri(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _s(this)}He(Et,ze);Et.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Um(t,null,t.Y),Za(t)};Et.prototype.close=function(){Cu(this.g)};Et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=yu(t),t=n);e.j.push(new ew(e.fb++,t)),e.H==3&&Za(e)};Et.prototype.N=function(){this.g.h=null,delete this.j,Cu(this.g),delete this.g,Et.$.N.call(this)};function Bm(t){wu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(Bm,wu);function qm(){bu.call(this),this.status=1}He(qm,bu);function _s(t){this.g=t}He(_s,jm);_s.prototype.Ba=function(){Ge(this.g,"a")};_s.prototype.Aa=function(t){Ge(this.g,new Bm(t))};_s.prototype.za=function(t){Ge(this.g,new qm)};_s.prototype.ya=function(){Ge(this.g,"b")};function dw(){this.blockSize=-1}function Ot(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}He(Ot,dw);Ot.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Dc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ot.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Dc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Dc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Dc(this,r),s=0;break}}this.h=s,this.i+=e};Ot.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var fw={};function xu(t){return-128<=t&&128>t?TI(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function Kt(t){if(isNaN(t)||!isFinite(t))return Hr;if(0>t)return Ke(Kt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ml;return new ge(e,0)}function zm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(zm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Kt(Math.pow(e,8)),r=Hr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Kt(Math.pow(e,i)),r=r.R(i).add(Kt(o))):(r=r.R(n),r=r.add(Kt(o)))}return r}var ml=4294967296,Hr=xu(0),gl=xu(1),Ad=xu(16777216);k=ge.prototype;k.ea=function(){if(Tt(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ml+r)*e,e*=ml}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(hn(this))return"0";if(Tt(this))return"-"+Ke(this).toString(t);for(var e=Kt(Math.pow(t,6)),n=this,r="";;){var s=Xo(n,e).g;n=Yo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,hn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function hn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tt(t){return t.h==-1}k.X=function(t){return t=Yo(this,t),Tt(t)?-1:hn(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(gl)}k.abs=function(){return Tt(this)?Ke(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function Yo(t,e){return t.add(Ke(e))}k.R=function(t){if(hn(this)||hn(t))return Hr;if(Tt(this))return Tt(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(Tt(t))return Ke(this.R(Ke(t)));if(0>this.X(Ad)&&0>t.X(Ad))return Kt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,mo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,mo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,mo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,mo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function mo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Cs(t,e){this.g=t,this.h=e}function Xo(t,e){if(hn(e))throw Error("division by zero");if(hn(t))return new Cs(Hr,Hr);if(Tt(t))return e=Xo(Ke(t),e),new Cs(Ke(e.g),Ke(e.h));if(Tt(e))return e=Xo(t,Ke(e)),new Cs(Ke(e.g),e.h);if(30<t.g.length){if(Tt(t)||Tt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=gl,r=e;0>=r.X(t);)n=Sd(n),r=Sd(r);var s=Mr(n,1),i=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!hn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Mr(r,1),n=Mr(n,1)}return e=Yo(t,s.R(e)),new Cs(s,e)}for(s=Hr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Kt(n),o=i.R(e);Tt(o)||0<o.X(t);)n-=r,i=Kt(n),o=i.R(e);hn(i)&&(i=gl),s=s.add(i),t=Yo(t,o)}return new Cs(s,t)}k.gb=function(t){return Xo(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function Sd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function Mr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ge(s,t.h)}Jo.prototype.createWebChannel=Jo.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;qa.NO_ERROR=0;qa.TIMEOUT=8;qa.HTTP_ERROR=6;cm.COMPLETE="complete";lm.EventType=Ui;Ui.OPEN="a";Ui.CLOSE="b";Ui.ERROR="c";Ui.MESSAGE="d";ze.prototype.listen=ze.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;Ot.prototype.digest=Ot.prototype.l;Ot.prototype.reset=Ot.prototype.reset;Ot.prototype.update=Ot.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=Kt;ge.fromString=zm;var pw=function(){return new Jo},mw=function(){return Ba()},Oc=qa,gw=cm,_w=Cr,Rd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yw=Bi,go=lm,vw=xe,Ew=Ot,Wr=ge;const Cd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="10.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new au("@firebase/firestore");function Pd(){return Er.logLevel}function M(t,...e){if(Er.logLevel<=fe.DEBUG){const n=e.map(Nu);Er.debug(`Firestore (${ys}): ${t}`,...n)}}function _n(t,...e){if(Er.logLevel<=fe.ERROR){const n=e.map(Nu);Er.error(`Firestore (${ys}): ${t}`,...n)}}function rs(t,...e){if(Er.logLevel<=fe.WARN){const n=e.map(Nu);Er.warn(`Firestore (${ys}): ${t}`,...n)}}function Nu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function be(t,e){t||H()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class Iw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ww{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new Hm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Ze(e)}}class bw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Aw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new bw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new Sw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Cw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Fe(0,0))}static max(){return new G(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends hi{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const Pw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends hi{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return Pw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new O(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new O(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new O(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(we.fromString(e))}static fromName(e){return new F(we.fromString(e).popFirst(5))}static empty(){return new F(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new we(e.slice()))}}function kw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new zn(s,F.empty(),e)}function xw(t){return new zn(t.readTime,t.key,-1)}class zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zn(G.min(),F.empty(),-1)}static max(){return new zn(G.max(),F.empty(),-1)}}function Nw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ow{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==Dw)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(s=>s?I.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new I((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new I((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Du.ae=-1;function Ja(t){return t==null}function ea(t){return t===0&&1/t==-1/0}function Vw(t){return typeof t=="number"&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Km(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _o(this.root,e,this.comparator,!1)}getReverseIterator(){return new _o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _o(this.root,e,this.comparator,!0)}}class _o{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new rt(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gm("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const Mw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(be(!!t),typeof t=="string"){let e=0;const n=Mw.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vu(t){const e=t.mapValue.fields.__previous_value__;return Ou(e)?Vu(e):e}function di(t){const e=Hn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ou(t)?4:Fw(t)?9007199254740991:10:H()}function en(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hn(s.timestampValue),a=Hn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Me(s.doubleValue),a=Me(i.doubleValue);return o===a?ea(o)===ea(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(kd(o)!==kd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!en(o[c],a[c])))return!1;return!0}(t,e);default:return H()}}function pi(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Me(i.integerValue||i.doubleValue),c=Me(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Nd(t.timestampValue,e.timestampValue);case 4:return Nd(di(t),di(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Tr(i),c=Tr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=me(a[l],c[l]);if(u!==0)return u}return me(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=me(Me(i.latitude),Me(o.latitude));return a!==0?a:me(Me(i.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=is(a[l],c[l]);if(u)return u}return me(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===yo.mapValue&&o===yo.mapValue)return 0;if(i===yo.mapValue)return 1;if(o===yo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const p=me(c[h],u[h]);if(p!==0)return p;const m=is(a[c[h]],l[u[h]]);if(m!==0)return m}return me(c.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function Nd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Hn(t),r=Hn(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function os(t){return _l(t)}function _l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return F.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=_l(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${_l(n.fields[o])}`;return s+"}"}(t.mapValue):H()}function Dd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yl(t){return!!t&&"integerValue"in t}function Mu(t){return!!t&&"arrayValue"in t}function Od(t){return!!t&&"nullValue"in t}function Vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ro(t){return!!t&&"mapValue"in t}function js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Fw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ro(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=js(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ro(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ro(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(js(this.value))}}function Qm(t){const e=[];return vs(t.fields,(n,r)=>{const s=new Xe([n]);if(Ro(r)){const i=Qm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,G.min(),G.min(),G.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new Je(e,1,n,G.min(),r,s,0)}static newNoDocument(e,n){return new Je(e,2,n,G.min(),G.min(),It.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,G.min(),G.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.position=e,this.inclusive=n}}function Md(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ld(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Uw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{}class Le extends Zm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jw(e,n,r):n==="array-contains"?new zw(e,r):n==="in"?new Hw(e,r):n==="not-in"?new Ww(e,r):n==="array-contains-any"?new Kw(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Bw(e,r):new qw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(is(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Vt extends Zm{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Vt(e,n)}matches(e){return Jm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Jm(t){return t.op==="and"}function Ym(t){return $w(t)&&Jm(t)}function $w(t){for(const e of t.filters)if(e instanceof Vt)return!1;return!0}function vl(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+os(t.value);if(Ym(t))return t.filters.map(e=>vl(e)).join(",");{const e=t.filters.map(n=>vl(n)).join(",");return`${t.op}(${e})`}}function Xm(t,e){return t instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)}(t,e):t instanceof Vt?function(r,s){return s instanceof Vt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Xm(o,s.filters[a]),!0):!1}(t,e):void H()}function eg(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof Vt?function(n){return n.op.toString()+" {"+n.getFilters().map(eg).join(" ,")+"}"}(t):"Filter"}class jw extends Le{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class Bw extends Le{constructor(e,n){super(e,"in",n),this.keys=tg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qw extends Le{constructor(e,n){super(e,"not-in",n),this.keys=tg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class zw extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mu(n)&&pi(n.arrayValue,this.value)}}class Hw extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class Ww extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pi(this.value.arrayValue,n)}}class Kw extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Fd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Gw(t,e,n,r,s,i,o)}function Lu(t){const e=Y(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.he=n}return e.he}function Fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Uw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Xm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ld(t.startAt,e.startAt)&&Ld(t.endAt,e.endAt)}function El(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function Qw(t,e,n,r,s,i,o,a){return new Ki(t,e,n,r,s,i,o,a)}function Uu(t){return new Ki(t)}function Ud(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ng(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $u(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function rg(t){return t.collectionGroup!==null}function qs(t){const e=Y(t);if(e.Pe===null){e.Pe=[];const n=$u(e),r=ng(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Bs(n)),e.Pe.push(new Bs(Xe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Bs(Xe.keyField(),i))}}}return e.Pe}function yn(t){const e=Y(t);return e.Ie||(e.Ie=Zw(e,qs(t))),e.Ie}function Zw(t,e){if(t.limitType==="F")return Fd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Bs(s.field,i)});const n=t.endAt?new ta(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ta(t.startAt.position,t.startAt.inclusive):null;return Fd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Tl(t,e){e.getFirstInequalityField(),$u(t);const n=t.filters.concat([e]);return new Ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Il(t,e,n){return new Ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ya(t,e){return Fu(yn(t),yn(e))&&t.limitType===e.limitType}function sg(t){return`${Lu(yn(t))}|lt:${t.limitType}`}function wl(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>eg(s)).join(", ")}]`),Ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>os(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>os(s)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Xa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Md(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,qs(r),s)||r.endAt&&!function(o,a,c){const l=Md(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,qs(r),s))}(t,e)}function Jw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ig(t){return(e,n)=>{let r=!1;for(const s of qs(t)){const i=Yw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Yw(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?is(c,l):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Km(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=new Pe(F.comparator);function vn(){return Xw}const og=new Pe(F.comparator);function Ds(...t){let e=og;for(const n of t)e=e.insert(n.key,n);return e}function ag(t){let e=og;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function lr(){return zs()}function cg(){return zs()}function zs(){return new Es(t=>t.toString(),(t,e)=>t.isEqual(e))}const e0=new Pe(F.comparator),t0=new rt(F.comparator);function oe(...t){let e=t0;for(const n of t)e=e.add(n);return e}const n0=new rt(me);function r0(){return n0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function ug(t){return{integerValue:""+t}}function s0(t,e){return Vw(e)?ug(e):lg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this._=void 0}}function i0(t,e,n){return t instanceof mi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ou(i)&&(i=Vu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof gi?dg(t,e):t instanceof _i?fg(t,e):function(s,i){const o=hg(s,i),a=$d(o)+$d(s.Ee);return yl(o)&&yl(s.Ee)?ug(a):lg(s.serializer,a)}(t,e)}function o0(t,e,n){return t instanceof gi?dg(t,e):t instanceof _i?fg(t,e):n}function hg(t,e){return t instanceof na?function(r){return yl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mi extends ec{}class gi extends ec{constructor(e){super(),this.elements=e}}function dg(t,e){const n=pg(e);for(const r of t.elements)n.some(s=>en(s,r))||n.push(r);return{arrayValue:{values:n}}}class _i extends ec{constructor(e){super(),this.elements=e}}function fg(t,e){let n=pg(e);for(const r of t.elements)n=n.filter(s=>!en(s,r));return{arrayValue:{values:n}}}class na extends ec{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function $d(t){return Me(t.integerValue||t.doubleValue)}function pg(t){return Mu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.field=e,this.transform=n}}function c0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof gi&&s instanceof gi||r instanceof _i&&s instanceof _i?ss(r.elements,s.elements,en):r instanceof na&&s instanceof na?en(r.Ee,s.Ee):r instanceof mi&&s instanceof mi}(t.transform,e.transform)}class l0{constructor(e,n){this.version=e,this.transformResults=n}}class Qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tc{}function mg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ju(t.key,Qt.none()):new Gi(t.key,t.data,Qt.none());{const n=t.data,r=It.empty();let s=new rt(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Pr(t.key,r,new Rt(s.toArray()),Qt.none())}}function u0(t,e,n){t instanceof Gi?function(s,i,o){const a=s.value.clone(),c=Bd(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(s,i,o){if(!Co(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Bd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(gg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Hs(t,e,n,r){return t instanceof Gi?function(i,o,a,c){if(!Co(i.precondition,o))return a;const l=i.value.clone(),u=qd(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(i,o,a,c){if(!Co(i.precondition,o))return a;const l=qd(i.fieldTransforms,c,o),u=o.data;return u.setAll(gg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Co(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function h0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=hg(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function jd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ss(r,s,(i,o)=>c0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gi extends tc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends tc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Bd(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,o0(o,a,n[s]))}return r}function qd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,i0(i,o,e))}return r}class ju extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class d0 extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&u0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=mg(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>jd(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>jd(n,r))}}class Bu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return e0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Bu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,ce;function g0(t){switch(t){default:return H();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function _g(t){if(t===void 0)return _n("GRPC error has no .code"),y.UNKNOWN;switch(t){case Ve.OK:return y.OK;case Ve.CANCELLED:return y.CANCELLED;case Ve.UNKNOWN:return y.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return y.INTERNAL;case Ve.UNAVAILABLE:return y.UNAVAILABLE;case Ve.UNAUTHENTICATED:return y.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case Ve.NOT_FOUND:return y.NOT_FOUND;case Ve.ALREADY_EXISTS:return y.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return y.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case Ve.ABORTED:return y.ABORTED;case Ve.OUT_OF_RANGE:return y.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return y.UNIMPLEMENTED;case Ve.DATA_LOSS:return y.DATA_LOSS;default:return H()}}(ce=Ve||(Ve={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return vo}static getOrCreateInstance(){return vo===null&&(vo=new qu),vo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let vo=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=new Wr([4294967295,4294967295],0);function zd(t){const e=_0().encode(t),n=new Ew;return n.update(e),new Uint8Array(n.digest())}function Hd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([s,i],0)]}class zu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Os(`Invalid padding: ${n}`);if(r<0)throw new Os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Os(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Wr.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Wr.fromNumber(r)));return s.compare(y0)===1&&(s=new Wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=zd(e),[r,s]=Hd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=zd(e),[r,s]=Hd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nc(G.min(),s,new Pe(me),vn(),oe())}}class Qi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qi(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class yg{constructor(e,n){this.targetId=e,this.ye=n}}class vg{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Wd{constructor(){this.we=0,this.Se=Gd(),this.be=it.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=oe(),n=oe(),r=oe();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:H()}}),new Qi(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=Gd()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class v0{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=vn(),this.Ue=Kd(),this.We=new Pe(me)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){var n;const r=e.targetId,s=e.ye.count,i=this.et(r);if(i){const o=i.target;if(El(o))if(s===0){const a=new F(o.path);this.je(r,a,Je.newNoDocument(a,G.min()))}else be(s===1);else{const a=this.tt(r);if(a!==s){const c=this.nt(e),l=c?this.rt(c,e,a):1;if(l!==0){this.Ze(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(r,u)}(n=qu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,p,m,b,A){var C,B,X,te,L,de;const De={localCacheCount:h,existenceFilterCount:p.count,databaseId:m.database,projectId:m.projectId},Se=p.unchangedNames;return Se&&(De.bloomFilter={applied:A===0,hashCount:(C=Se==null?void 0:Se.hashCount)!==null&&C!==void 0?C:0,bitmapLength:(te=(X=(B=Se==null?void 0:Se.bits)===null||B===void 0?void 0:B.bitmap)===null||X===void 0?void 0:X.length)!==null&&te!==void 0?te:0,padding:(de=(L=Se==null?void 0:Se.bits)===null||L===void 0?void 0:L.padding)!==null&&de!==void 0?de:0,mightContain:ae=>{var ne;return(ne=b==null?void 0:b.mightContain(ae))!==null&&ne!==void 0&&ne}}),De}(a,e.ye,this.Qe.it(),c,l))}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Tr(r).toUint8Array()}catch(c){if(c instanceof Gm)return rs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new zu(o,s,i)}catch(c){return rs(c instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}ot(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&El(a.target)){const c=new F(a.target.path);this.$e.get(c)!==null||this._t(o,c)||this.je(o,c,Je.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=oe();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new nc(e,n,this.We,this.$e,r);return this.$e=vn(),this.Ue=Kd(),this.We=new Pe(me),s}ze(e,n){if(!this.Ye(e))return;const r=this._t(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ut(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this._t(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ut(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Wd,this.Ke.set(e,n)),n}ut(e){let n=this.Ue.get(e);return n||(n=new rt(me),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.ct(e)}Ze(e){this.Ke.set(e,new Wd),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}_t(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Kd(){return new Pe(F.comparator)}function Gd(){return new Pe(F.comparator)}const E0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),T0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),I0=(()=>({and:"AND",or:"OR"}))();class w0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bl(t,e){return t.useProto3Json||Ja(e)?e:{value:e}}function ra(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Eg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function b0(t,e){return ra(t,e.toTimestamp())}function Zt(t){return be(!!t),G.fromTimestamp(function(n){const r=Hn(n);return new Fe(r.seconds,r.nanos)}(t))}function Hu(t,e){return function(r){return new we(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Tg(t){const e=we.fromString(t);return be(Ag(e)),e}function Al(t,e){return Hu(t.databaseId,e.path)}function Vc(t,e){const n=Tg(e);if(n.get(1)!==t.databaseId.projectId)throw new O(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(Ig(n))}function Sl(t,e){return Hu(t.databaseId,e)}function A0(t){const e=Tg(t);return e.length===4?we.emptyPath():Ig(e)}function Rl(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ig(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qd(t,e,n){return{name:Al(t,e),fields:n.value.mapValue.fields}}function S0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(be(u===void 0||typeof u=="string"),it.fromBase64String(u||"")):(be(u===void 0||u instanceof Uint8Array),it.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?y.UNKNOWN:_g(l.code);return new O(u,l.message||"")}(o);n=new vg(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vc(t,r.document.name),i=Zt(r.document.updateTime),o=r.document.createTime?Zt(r.document.createTime):G.min(),a=new It({mapValue:{fields:r.document.fields}}),c=Je.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Po(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Vc(t,r.document),i=r.readTime?Zt(r.readTime):G.min(),o=Je.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Po([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Vc(t,r.document),i=r.removedTargetIds||[];n=new Po([],i,s,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new m0(s,i),a=r.targetId;n=new yg(a,o)}}return n}function R0(t,e){let n;if(e instanceof Gi)n={update:Qd(t,e.key,e.value)};else if(e instanceof ju)n={delete:Al(t,e.key)};else if(e instanceof Pr)n={update:Qd(t,e.key,e.data),updateMask:M0(e.fieldMask)};else{if(!(e instanceof d0))return H();n={verify:Al(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof mi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _i)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof na)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:b0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(t,e.precondition)),n}function C0(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Zt(s.updateTime):Zt(i);return o.isEqual(G.min())&&(o=Zt(i)),new l0(o,s.transformResults||[])}(n,e))):[]}function P0(t,e){return{documents:[Sl(t,e.path)]}}function k0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Sl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return bg(Vt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Lr(h.field),direction:D0(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=bl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function x0(t){let e=A0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const p=wg(h);return p instanceof Vt&&Ym(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(b){return new Bs(Fr(b.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Ja(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,m=h.values||[];return new ta(m,p)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const p=!h.before,m=h.values||[];return new ta(m,p)}(n.endAt)),Qw(e,s,o,i,a,"F",c,l)}function N0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vt.create(n.compositeFilter.filters.map(r=>wg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function D0(t){return E0[t]}function O0(t){return T0[t]}function V0(t){return I0[t]}function Lr(t){return{fieldPath:t.canonicalString()}}function Fr(t){return Xe.fromServerFormat(t.fieldPath)}function bg(t){return t instanceof Le?function(n){if(n.op==="=="){if(Vd(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NAN"}};if(Od(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vd(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NAN"}};if(Od(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(n.field),op:O0(n.op),value:n.value}}}(t):t instanceof Vt?function(n){const r=n.getFilters().map(s=>bg(s));return r.length===1?r[0]:{compositeFilter:{op:V0(n.op),filters:r}}}(t):H()}function M0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ag(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n,r,s,i=G.min(),o=G.min(),a=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.lt=e}}function F0(t){const e=x0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Il(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.on=new $0}addToCollectionParentIndex(e,n){return this.on.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(zn.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class $0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new as(0)}static Nn(){return new as(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.changes=new Es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Hs(r.mutation,s,Rt.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ds();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=vn();const o=zs(),a=function(){return zs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Pr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Hs(u.mutation,l,u.mutation.getFieldMask(),Fe.now())):o.set(l.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new B0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=zs();let s=new Pe((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Rt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||oe()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=cg();u.forEach(p=>{if(!i.has(p)){const m=mg(n.get(p),r.get(p));m!==null&&h.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):I.resolve(lr());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,oe())).next(u=>({batchId:a,changes:ag(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let s=Ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Ds();return this.indexManager.getCollectionParents(e,s).next(o=>I.forEach(o,a=>{const c=function(u,h){return new Ki(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Je.newInvalidDocument(l)))});let o=Ds();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Hs(l.mutation,c,Rt.empty(),Fe.now()),Xa(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return I.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Zt(s.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:F0(s.bundledQuery),readTime:Zt(s.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.overlays=new Pe(F.comparator),this.lr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=lr();return I.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Pt(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const s=lr(),i=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return I.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Pe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=lr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=lr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return I.resolve(a)}Pt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new p0(n,r));let i=this.lr.get(n);i===void 0&&(i=oe(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.hr=new rt($e.Pr),this.Ir=new rt($e.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new $e(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new F(new we([])),r=new $e(n,e),s=new $e(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new F(new we([])),r=new $e(n,e),s=new $e(n,e+1);let i=oe();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return F.comparator(e.key,n.key)||me(e.gr,n.gr)}static Tr(e,n){return me(e.gr,n.gr)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new rt($e.Pr)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new f0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),s=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(me);return n.forEach(s=>{const i=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),I.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const o=new $e(new F(i),0);let a=new rt(me);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),I.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return I.forEach(n.mutations,s=>{const i=new $e(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new $e(n,0),s=this.yr.firstAfterOrEqual(r);return I.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.vr=e,this.docs=function(){return new Pe(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Je.newInvalidDocument(s))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=vn();const o=n.path,a=new F(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Nw(xw(u),r)<=0||(s.has(u.key)||Xa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,r,s){H()}Cr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new G0(this)}getSize(e){return I.resolve(this.size)}}class G0 extends j0{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.persistence=e,this.Fr=new Es(n=>Lu(n),Fu),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Wu,this.targetCount=0,this.Nr=as.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),I.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.kn(n),I.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),I.waitFor(i).next(()=>s)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Du(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Q0(this),this.indexManager=new U0,this.remoteDocumentCache=function(s){return new K0(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new L0(n),this.Kr=new z0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new H0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new W0(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const s=new J0(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return I.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class J0 extends Ow{constructor(e){super(),this.currentSequenceNumber=e}}class Ku{constructor(e){this.persistence=e,this.Gr=new Wu,this.zr=null}static jr(e){return new Ku(e)}get Hr(){if(this.zr)return this.zr;throw H()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),I.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Hr,r=>{const s=F.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,G.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return I.or([()=>I.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.Ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ui(e,n).next(i=>i||this.Wi(e,n,s,r)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(Ud(n))return I.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Il(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.zi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,Il(n,null,"F")):this.Hi(e,l,n,c)}))})))}Wi(e,n,r,s){return Ud(n)||s.isEqual(G.min())?this.Gi(e,n):this.$i.getDocuments(e,r).next(i=>{const o=this.zi(n,i);return this.ji(n,o,r,s)?this.Gi(e,n):(Pd()<=fe.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wl(n)),this.Hi(e,o,n,kw(s,-1)))})}zi(e,n){let r=new rt(ig(e));return n.forEach((s,i)=>{Xa(e,i)&&(r=r.add(i))}),r}ji(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Gi(e,n){return Pd()<=fe.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",wl(n)),this.$i.getDocumentsMatchingQuery(e,n,zn.min())}Hi(e,n,r,s){return this.$i.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n,r,s){this.persistence=e,this.Ji=n,this.serializer=s,this.Yi=new Pe(me),this.Zi=new Es(i=>Lu(i),Fu),this.Xi=new Map,this.es=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.ts(r)}ts(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new q0(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Yi))}}function eb(t,e,n,r){return new X0(t,e,n,r)}async function Sg(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ts(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=oe();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ns:l,removedBatchIds:o,addedBatchIds:a}))})})}function tb(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.es.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,p=h.keys();let m=I.resolve();return p.forEach(b=>{m=m.next(()=>u.getEntry(c,b)).next(A=>{const C=l.docVersions.get(b);be(C!==null),A.version.compareTo(C)<0&&(h.applyToRemoteDocument(A,l),A.isValidDocument()&&(A.setReadTime(l.commitVersion),u.addEntry(A)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=oe();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Rg(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function nb(t,e){const n=Y(t),r=e.snapshotVersion;let s=n.Yi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.es.newChangeBuffer({trackRemovals:!0});s=n.Yi;const a=[];e.targetChanges.forEach((u,h)=>{const p=s.get(h);if(!p)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(it.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(A,C,B){return A.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(p,m,u)&&a.push(n.qr.updateTargetData(i,m))});let c=vn(),l=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(rb(i,o,e.documentUpdates).next(u=>{c=u.rs,l=u.ss})),!r.isEqual(G.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Yi=s,i))}function rb(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=vn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{rs:o,ss:s}})}function sb(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ib(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,I.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Dn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Yi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Yi=n.Yi.insert(r.targetId,r),n.Zi.set(e,r.targetId)),r})}async function Cl(t,e,n){const r=Y(t),s=r.Yi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wi(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Yi=r.Yi.remove(e),r.Zi.delete(s.target)}function Zd(t,e,n){const r=Y(t);let s=G.min(),i=oe();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=Y(c),p=h.Zi.get(u);return p!==void 0?I.resolve(h.Yi.get(p)):h.qr.getTargetData(l,u)}(r,o,yn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Ji.getDocumentsMatchingQuery(o,e,n?s:G.min(),n?i:oe())).next(a=>(ob(r,Jw(e),a),{documents:a,os:i})))}function ob(t,e,n){let r=t.Xi.get(e)||G.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Xi.set(e,r)}class Jd{constructor(){this.activeTargetIds=r0()}Ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}Is(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ab{constructor(){this.Js=new Jd,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Js.Ps(e),this.Ys[e]||"not-current"}updateQueryState(e,n,r){this.Ys[e]=n}removeLocalQueryTarget(e){this.Js.Is(e)}isLocalQueryTarget(e){return this.Js.activeTargetIds.has(e)}clearQueryState(e){delete this.Ys[e]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(e){return this.Js.activeTargetIds.has(e)}start(){return this.Js=new Jd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{Zs(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(e){this.io.push(e)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.io)e(0)}ro(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.io)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo=null;function Mc(){return Eo===null?Eo=function(){return 268435456+Math.round(2147483648*Math.random())}():Eo++,"0x"+Eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.oo=e.oo,this._o=e._o}ao(e){this.uo=e}co(e){this.lo=e}onMessage(e){this.ho=e}close(){this._o()}send(e){this.oo(e)}Po(){this.uo()}Io(e){this.lo(e)}To(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class hb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+n.host,this.Ao=`projects/${s}/databases/${i}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Vo(){return!1}mo(n,r,s,i,o){const a=Mc(),c=this.fo(n,r);M("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(l,i,o),this.yo(n,c,l,s).then(u=>(M("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw rs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}wo(n,r,s,i,o,a){return this.mo(n,r,s,i,o)}po(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ys}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}fo(n,r){const s=lb[n];return`${this.Eo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}yo(e,n,r,s){const i=Mc();return new Promise((o,a)=>{const c=new vw;c.setWithCredentials(!0),c.listenOnce(gw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Oc.NO_ERROR:const u=c.getResponseJson();M(Qe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Oc.TIMEOUT:M(Qe,`RPC '${e}' ${i} timed out`),a(new O(y.DEADLINE_EXCEEDED,"Request time out"));break;case Oc.HTTP_ERROR:const h=c.getStatus();if(M(Qe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const b=function(C){const B=C.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(B)>=0?B:y.UNKNOWN}(m.status);a(new O(b,m.message))}else a(new O(y.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new O(y.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{M(Qe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);M(Qe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}So(e,n,r){const s=Mc(),i=[this.Eo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pw(),a=mw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new yw({})),this.po(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");M(Qe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let p=!1,m=!1;const b=new ub({oo:C=>{m?M(Qe,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(p||(M(Qe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),p=!0),M(Qe,`RPC '${e}' stream ${s} sending:`,C),h.send(C))},_o:()=>h.close()}),A=(C,B,X)=>{C.listen(B,te=>{try{X(te)}catch(L){setTimeout(()=>{throw L},0)}})};return A(h,go.EventType.OPEN,()=>{m||M(Qe,`RPC '${e}' stream ${s} transport opened.`)}),A(h,go.EventType.CLOSE,()=>{m||(m=!0,M(Qe,`RPC '${e}' stream ${s} transport closed`),b.Io())}),A(h,go.EventType.ERROR,C=>{m||(m=!0,rs(Qe,`RPC '${e}' stream ${s} transport errored:`,C),b.Io(new O(y.UNAVAILABLE,"The operation could not be completed")))}),A(h,go.EventType.MESSAGE,C=>{var B;if(!m){const X=C.data[0];be(!!X);const te=X,L=te.error||((B=te[0])===null||B===void 0?void 0:B.error);if(L){M(Qe,`RPC '${e}' stream ${s} received error:`,L);const de=L.status;let De=function(ne){const Re=Ve[ne];if(Re!==void 0)return _g(Re)}(de),Se=L.message;De===void 0&&(De=y.INTERNAL,Se="Unknown error status: "+de+" with message "+L.message),m=!0,b.Io(new O(De,Se)),h.close()}else M(Qe,`RPC '${e}' stream ${s} received:`,X),b.To(X)}}),A(a,_w.STAT_EVENT,C=>{C.stat===Rd.PROXY?M(Qe,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Rd.NOPROXY&&M(Qe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.Po()},0),b}}function Lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t){return new w0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.bo=r,this.Do=s,this.vo=i,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(e){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),s=Math.max(0,n-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Mo=Date.now(),e())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Lo=r,this.ko=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new Cg(e,n)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(e){this.Yo(),this.stream.send(e)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(e,n){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,e!==4?this.$o.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Xo(){}auth(){this.state=1;const e=this.e_(this.qo),n=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.qo===n&&this.t_(r,s)},r=>{e(()=>{const s=new O(y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(s)})})}t_(e,n){const r=this.e_(this.qo);this.stream=this.r_(e,n),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(s=>{r(()=>this.n_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}e_(e){return n=>{this.si.enqueueAndForget(()=>this.qo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class db extends Pg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}r_(e,n){return this.connection.So("Listen",e,n)}onMessage(e){this.$o.reset();const n=S0(this.serializer,e),r=function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Zt(o.readTime):G.min()}(e);return this.listener.i_(n,r)}s_(e){const n={};n.database=Rl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=El(c)?{documents:P0(i,c)}:{query:k0(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Eg(i,o.resumeToken);const l=bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=ra(i,o.snapshotVersion.toTimestamp());const l=bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=N0(this.serializer,e);r&&(n.labels=r),this.Jo(n)}o_(e){const n={};n.database=Rl(this.serializer),n.removeTarget=e,this.Jo(n)}}class fb extends Pg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(e,n){return this.connection.So("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.__){this.$o.reset();const n=C0(e.writeResults,e.commitTime),r=Zt(e.commitTime);return this.listener.c_(r,n)}return be(!e.writeResults||e.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const e={};e.database=Rl(this.serializer),this.Jo(e)}u_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>R0(this.serializer,r))};this.Jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.P_=!1}I_(){if(this.P_)throw new O(y.FAILED_PRECONDITION,"The client has already been terminated.")}mo(e,n,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.mo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(y.UNKNOWN,s.toString())})}wo(e,n,r,s){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.wo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(y.UNKNOWN,i.toString())})}terminate(){this.P_=!0}}class mb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(e){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.V_("Offline")))}set(e){this.g_(),this.E_=0,e==="Online"&&(this.A_=!1),this.V_(e)}V_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}m_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(_n(n),this.A_=!1):M("OnlineStateTracker",n)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=i,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{kr(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Y(c);l.w_.add(4),await Zi(l),l.D_.set("Unknown"),l.w_.delete(4),await sc(l)}(this))})}),this.D_=new mb(r,s)}}async function sc(t){if(kr(t))for(const e of t.S_)await e(!0)}async function Zi(t){for(const e of t.S_)await e(!1)}function kg(t,e){const n=Y(t);n.y_.has(e.targetId)||(n.y_.set(e.targetId,e),Ju(n)?Zu(n):Ts(n).Wo()&&Qu(n,e))}function xg(t,e){const n=Y(t),r=Ts(n);n.y_.delete(e),r.Wo()&&Ng(n,e),n.y_.size===0&&(r.Wo()?r.jo():kr(n)&&n.D_.set("Unknown"))}function Qu(t,e){if(t.v_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ts(t).s_(e)}function Ng(t,e){t.v_.Le(e),Ts(t).o_(e)}function Zu(t){t.v_=new v0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ct:e=>t.y_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Ts(t).start(),t.D_.R_()}function Ju(t){return kr(t)&&!Ts(t).Uo()&&t.y_.size>0}function kr(t){return Y(t).w_.size===0}function Dg(t){t.v_=void 0}async function _b(t){t.y_.forEach((e,n)=>{Qu(t,e)})}async function yb(t,e){Dg(t),Ju(t)?(t.D_.f_(e),Zu(t)):t.D_.set("Unknown")}async function vb(t,e,n){if(t.D_.set("Online"),e instanceof vg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.y_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.y_.delete(a),s.v_.removeTarget(a))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sa(t,r)}else if(e instanceof Po?t.v_.Ge(e):e instanceof yg?t.v_.Xe(e):t.v_.He(e),!n.isEqual(G.min()))try{const r=await Rg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.v_.ot(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.y_.get(l);u&&i.y_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.y_.get(c);if(!u)return;i.y_.set(c,u.withResumeToken(it.EMPTY_BYTE_STRING,u.snapshotVersion)),Ng(i,c);const h=new Dn(u.target,c,l,u.sequenceNumber);Qu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await sa(t,r)}}async function sa(t,e,n){if(!Wi(e))throw e;t.w_.add(1),await Zi(t),t.D_.set("Offline"),n||(n=()=>Rg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.w_.delete(1),await sc(t)})}function Og(t,e){return e().catch(n=>sa(t,n,e))}async function ic(t){const e=Y(t),n=Wn(e);let r=e.p_.length>0?e.p_[e.p_.length-1].batchId:-1;for(;Eb(e);)try{const s=await sb(e.localStore,r);if(s===null){e.p_.length===0&&n.jo();break}r=s.batchId,Tb(e,s)}catch(s){await sa(e,s)}Vg(e)&&Mg(e)}function Eb(t){return kr(t)&&t.p_.length<10}function Tb(t,e){t.p_.push(e);const n=Wn(t);n.Wo()&&n.a_&&n.u_(e.mutations)}function Vg(t){return kr(t)&&!Wn(t).Uo()&&t.p_.length>0}function Mg(t){Wn(t).start()}async function Ib(t){Wn(t).h_()}async function wb(t){const e=Wn(t);for(const n of t.p_)e.u_(n.mutations)}async function bb(t,e,n){const r=t.p_.shift(),s=Bu.from(r,e,n);await Og(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ic(t)}async function Ab(t,e){e&&Wn(t).a_&&await async function(r,s){if(function(o){return g0(o)&&o!==y.ABORTED}(s.code)){const i=r.p_.shift();Wn(r).zo(),await Og(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ic(r)}}(t,e),Vg(t)&&Mg(t)}async function Xd(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=kr(n);n.w_.add(3),await Zi(n),r&&n.D_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.w_.delete(3),await sc(n)}async function Sb(t,e){const n=Y(t);e?(n.w_.delete(2),await sc(n)):e||(n.w_.add(2),await Zi(n),n.D_.set("Unknown"))}function Ts(t){return t.C_||(t.C_=function(n,r,s){const i=Y(n);return i.I_(),new db(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ao:_b.bind(null,t),co:yb.bind(null,t),i_:vb.bind(null,t)}),t.S_.push(async e=>{e?(t.C_.zo(),Ju(t)?Zu(t):t.D_.set("Unknown")):(await t.C_.stop(),Dg(t))})),t.C_}function Wn(t){return t.F_||(t.F_=function(n,r,s){const i=Y(n);return i.I_(),new fb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ao:Ib.bind(null,t),co:Ab.bind(null,t),l_:wb.bind(null,t),c_:bb.bind(null,t)}),t.S_.push(async e=>{e?(t.F_.zo(),await ic(t)):(await t.F_.stop(),t.p_.length>0&&(M("RemoteStore",`Stopping write stream with ${t.p_.length} pending writes`),t.p_=[]))})),t.F_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Yu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xu(t,e){if(_n("AsyncQueue",`${e}: ${t}`),Wi(t))return new O(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Kr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.M_=new Pe(F.comparator)}track(e){const n=e.doc.key,r=this.M_.get(n);r?e.type!==0&&r.type===3?this.M_=this.M_.insert(n,e):e.type===3&&r.type!==1?this.M_=this.M_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.M_=this.M_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.M_=this.M_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.M_=this.M_.remove(n):e.type===1&&r.type===2?this.M_=this.M_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.M_=this.M_.insert(n,{type:2,doc:e.doc}):H():this.M_=this.M_.insert(n,e)}x_(){const e=[];return this.M_.inorderTraversal((n,r)=>{e.push(r)}),e}}class cs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new cs(e,n,Kr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(){this.O_=void 0,this.listeners=[]}}class Cb{constructor(){this.queries=new Es(e=>sg(e),Ya),this.onlineState="Unknown",this.N_=new Set}}async function Pb(t,e){const n=Y(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Rb),s)try{i.O_=await n.onListen(r)}catch(o){const a=Xu(o,`Initialization of query '${wl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.B_(n.onlineState),i.O_&&e.L_(i.O_)&&eh(n)}async function kb(t,e){const n=Y(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function xb(t,e){const n=Y(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.L_(s)&&(r=!0);o.O_=s}}r&&eh(n)}function Nb(t,e,n){const r=Y(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function eh(t){t.N_.forEach(e=>{e.next()})}class Db{constructor(e,n,r){this.query=e,this.k_=n,this.q_=!1,this.Q_=null,this.onlineState="Unknown",this.options=r||{}}L_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.q_?this.K_(e)&&(this.k_.next(e),n=!0):this.U_(e,this.onlineState)&&(this.W_(e),n=!0),this.Q_=e,n}onError(e){this.k_.error(e)}B_(e){this.onlineState=e;let n=!1;return this.Q_&&!this.q_&&this.U_(this.Q_,e)&&(this.W_(this.Q_),n=!0),n}U_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.G_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}K_(e){if(e.docChanges.length>0)return!0;const n=this.Q_&&this.Q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}W_(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.q_=!0,this.k_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.key=e}}class Fg{constructor(e){this.key=e}}class Ob{constructor(e,n){this.query=e,this.ea=n,this.ta=null,this.hasCachedResults=!1,this.current=!1,this.na=oe(),this.mutatedKeys=oe(),this.ra=ig(e),this.ia=new Kr(this.ra)}get sa(){return this.ea}oa(e,n){const r=n?n._a:new ef,s=n?n.ia:this.ia;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const p=s.get(u),m=Xa(this.query,h)?h:null,b=!!p&&this.mutatedKeys.has(p.key),A=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;p&&m?p.data.isEqual(m.data)?b!==A&&(r.track({type:3,doc:m}),C=!0):this.aa(p,m)||(r.track({type:2,doc:m}),C=!0,(c&&this.ra(m,c)>0||l&&this.ra(m,l)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),C=!0):p&&!m&&(r.track({type:1,doc:p}),C=!0,(c||l)&&(a=!0)),C&&(m?(o=o.add(m),i=A?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ia:o,_a:r,ji:a,mutatedKeys:i}}aa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ia;this.ia=e.ia,this.mutatedKeys=e.mutatedKeys;const i=e._a.x_();i.sort((l,u)=>function(p,m){const b=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return b(p)-b(m)}(l.type,u.type)||this.ra(l.doc,u.doc)),this.ua(r);const o=n?this.ca():[],a=this.na.size===0&&this.current?1:0,c=a!==this.ta;return this.ta=a,i.length!==0||c?{snapshot:new cs(this.query,e.ia,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),la:o}:{la:o}}B_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ia:this.ia,_a:new ef,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{la:[]}}ha(e){return!this.ea.has(e)&&!!this.ia.has(e)&&!this.ia.get(e).hasLocalMutations}ua(e){e&&(e.addedDocuments.forEach(n=>this.ea=this.ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ea=this.ea.delete(n)),this.current=e.current)}ca(){if(!this.current)return[];const e=this.na;this.na=oe(),this.ia.forEach(r=>{this.ha(r.key)&&(this.na=this.na.add(r.key))});const n=[];return e.forEach(r=>{this.na.has(r)||n.push(new Fg(r))}),this.na.forEach(r=>{e.has(r)||n.push(new Lg(r))}),n}Pa(e){this.ea=e.os,this.na=oe();const n=this.oa(e.documents);return this.applyChanges(n,!0)}Ia(){return cs.fromInitialDocuments(this.query,this.ia,this.mutatedKeys,this.ta===0,this.hasCachedResults)}}class Vb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Mb{constructor(e){this.key=e,this.Ta=!1}}class Lb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new Es(a=>sg(a),Ya),this.Aa=new Map,this.Ra=new Set,this.Va=new Pe(F.comparator),this.ma=new Map,this.fa=new Wu,this.ga={},this.pa=new Map,this.ya=as.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function Fb(t,e){const n=Gb(t);let r,s;const i=n.da.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ia();else{const o=await ib(n.localStore,yn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Ub(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&kg(n.remoteStore,o)}return s}async function Ub(t,e,n,r,s){t.Sa=(h,p,m)=>async function(A,C,B,X){let te=C.view.oa(B);te.ji&&(te=await Zd(A.localStore,C.query,!1).then(({documents:De})=>C.view.oa(De,te)));const L=X&&X.targetChanges.get(C.targetId),de=C.view.applyChanges(te,A.isPrimaryClient,L);return nf(A,C.targetId,de.la),de.snapshot}(t,h,p,m);const i=await Zd(t.localStore,e,!0),o=new Ob(e,i.os),a=o.oa(i.documents),c=Qi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);nf(t,n,l.la);const u=new Vb(e,n,o);return t.da.set(e,u),t.Aa.has(n)?t.Aa.get(n).push(e):t.Aa.set(n,[e]),l.snapshot}async function $b(t,e){const n=Y(t),r=n.da.get(e),s=n.Aa.get(r.targetId);if(s.length>1)return n.Aa.set(r.targetId,s.filter(i=>!Ya(i,e))),void n.da.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Cl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),xg(n.remoteStore,r.targetId),Pl(n,r.targetId)}).catch(Hi)):(Pl(n,r.targetId),await Cl(n.localStore,r.targetId,!0))}async function jb(t,e,n){const r=Qb(t);try{const s=await function(o,a){const c=Y(o),l=Fe.now(),u=a.reduce((m,b)=>m.add(b.key),oe());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let b=vn(),A=oe();return c.es.getEntries(m,u).next(C=>{b=C,b.forEach((B,X)=>{X.isValidDocument()||(A=A.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,b)).next(C=>{h=C;const B=[];for(const X of a){const te=h0(X,h.get(X.key).overlayedDocument);te!=null&&B.push(new Pr(X.key,te,Qm(te.value.mapValue),Qt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,B,a)}).next(C=>{p=C;const B=C.applyToLocalDocumentSet(h,A);return c.documentOverlayCache.saveOverlays(m,C.batchId,B)})}).then(()=>({batchId:p.batchId,changes:ag(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.ga[o.currentUser.toKey()];l||(l=new Pe(me)),l=l.insert(a,c),o.ga[o.currentUser.toKey()]=l}(r,s.batchId,n),await Ji(r,s.changes),await ic(r.remoteStore)}catch(s){const i=Xu(s,"Failed to persist write");n.reject(i)}}async function Ug(t,e){const n=Y(t);try{const r=await nb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ma.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ta=!0:s.modifiedDocuments.size>0?be(o.Ta):s.removedDocuments.size>0&&(be(o.Ta),o.Ta=!1))}),await Ji(n,r,e)}catch(r){await Hi(r)}}function tf(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.da.forEach((i,o)=>{const a=o.view.B_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Y(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const p of h.listeners)p.B_(a)&&(l=!0)}),l&&eh(c)}(r.eventManager,e),s.length&&r.Ea.i_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Bb(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ma.get(e),i=s&&s.key;if(i){let o=new Pe(F.comparator);o=o.insert(i,Je.newNoDocument(i,G.min()));const a=oe().add(i),c=new nc(G.min(),new Map,new Pe(me),o,a);await Ug(r,c),r.Va=r.Va.remove(i),r.ma.delete(e),th(r)}else await Cl(r.localStore,e,!1).then(()=>Pl(r,e,n)).catch(Hi)}async function qb(t,e){const n=Y(t),r=e.batch.batchId;try{const s=await tb(n.localStore,e);jg(n,r,null),$g(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ji(n,s)}catch(s){await Hi(s)}}async function zb(t,e,n){const r=Y(t);try{const s=await function(o,a){const c=Y(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(be(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);jg(r,e,n),$g(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ji(r,s)}catch(s){await Hi(s)}}function $g(t,e){(t.pa.get(e)||[]).forEach(n=>{n.resolve()}),t.pa.delete(e)}function jg(t,e,n){const r=Y(t);let s=r.ga[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ga[r.currentUser.toKey()]=s}}function Pl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Aa.get(e))t.da.delete(r),n&&t.Ea.ba(r,n);t.Aa.delete(e),t.isPrimaryClient&&t.fa.Rr(e).forEach(r=>{t.fa.containsKey(r)||Bg(t,r)})}function Bg(t,e){t.Ra.delete(e.path.canonicalString());const n=t.Va.get(e);n!==null&&(xg(t.remoteStore,n),t.Va=t.Va.remove(e),t.ma.delete(n),th(t))}function nf(t,e,n){for(const r of n)r instanceof Lg?(t.fa.addReference(r.key,e),Hb(t,r)):r instanceof Fg?(M("SyncEngine","Document no longer in limbo: "+r.key),t.fa.removeReference(r.key,e),t.fa.containsKey(r.key)||Bg(t,r.key)):H()}function Hb(t,e){const n=e.key,r=n.path.canonicalString();t.Va.get(n)||t.Ra.has(r)||(M("SyncEngine","New document in limbo: "+n),t.Ra.add(r),th(t))}function th(t){for(;t.Ra.size>0&&t.Va.size<t.maxConcurrentLimboResolutions;){const e=t.Ra.values().next().value;t.Ra.delete(e);const n=new F(we.fromString(e)),r=t.ya.next();t.ma.set(r,new Mb(n)),t.Va=t.Va.insert(n,r),kg(t.remoteStore,new Dn(yn(Uu(n.path)),r,"TargetPurposeLimboResolution",Du.ae))}}async function Ji(t,e,n){const r=Y(t),s=[],i=[],o=[];r.da.isEmpty()||(r.da.forEach((a,c)=>{o.push(r.Sa(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Gu.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ea.i_(s),await async function(c,l){const u=Y(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>I.forEach(l,p=>I.forEach(p.ki,m=>u.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>I.forEach(p.qi,m=>u.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!Wi(h))throw h;M("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const p=h.targetId;if(!h.fromCache){const m=u.Yi.get(p),b=m.snapshotVersion,A=m.withLastLimboFreeSnapshotVersion(b);u.Yi=u.Yi.insert(p,A)}}}(r.localStore,i))}async function Wb(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await Sg(n.localStore,e);n.currentUser=e,function(i,o){i.pa.forEach(a=>{a.forEach(c=>{c.reject(new O(y.CANCELLED,o))})}),i.pa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ji(n,r.ns)}}function Kb(t,e){const n=Y(t),r=n.ma.get(e);if(r&&r.Ta)return oe().add(r.key);{let s=oe();const i=n.Aa.get(e);if(!i)return s;for(const o of i){const a=n.da.get(o);s=s.unionWith(a.view.sa)}return s}}function Gb(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ug.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bb.bind(null,e),e.Ea.i_=xb.bind(null,e.eventManager),e.Ea.ba=Nb.bind(null,e.eventManager),e}function Qb(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zb.bind(null,e),e}class rf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return eb(this.persistence,new Y0,e.initialUser,this.serializer)}createPersistence(e){return new Z0(Ku.jr,this.serializer)}createSharedClientState(e){return new ab}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wb.bind(null,this.syncEngine),await Sb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Cb}()}createDatastore(e){const n=rc(e.databaseInfo.databaseId),r=function(i){return new hb(i)}(e.databaseInfo);return function(i,o,a,c){return new pb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new gb(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>tf(this.syncEngine,n,0),function(){return Yd.v()?new Yd:new cb}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new Lb(s,i,o,a,c,l);return u&&(h.wa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Y(n);M("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await Zi(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ca(this.observer.next,e)}error(e){this.observer.error?this.Ca(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}Fa(){this.muted=!0}Ca(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=Wm.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{M("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(M("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fc(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Sg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eA(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Xd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Xd(e.remoteStore,i)),t._onlineComponents=e}function Xb(t){return t.name==="FirebaseError"?t.code===y.FAILED_PRECONDITION||t.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function eA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Xb(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await Fc(t,new rf)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Fc(t,new rf);return t._offlineComponents}async function qg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await sf(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await sf(t,new Zb))),t._onlineComponents}function tA(t){return qg(t).then(e=>e.syncEngine)}async function of(t){const e=await qg(t),n=e.eventManager;return n.onListen=Fb.bind(null,e.syncEngine),n.onUnlisten=$b.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e,n){if(!n)throw new O(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nA(t,e,n,r){if(e===!0&&r===!0)throw new O(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cf(t){if(!F.isDocumentKey(t))throw new O(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lf(t){if(F.isDocumentKey(t))throw new O(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function Gr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oc(t);throw new O(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ac{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Tw;switch(r.type){case"firstParty":return new Aw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=af.get(n);r&&(M("ComponentProvider","Removing Datastore"),af.delete(n),r.terminate())}(this),Promise.resolve()}}function rA(t,e,n,r={}){var s;const i=(t=Gr(t,ac))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ze.MOCK_USER;else{a=HE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new O(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new Iw(new Hm(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Is(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Bn extends Is{constructor(e,n,r){super(e,n,Uu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new F(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function hf(t,e,...n){if(t=ut(t),Hg("collection","path",e),t instanceof ac){const r=we.fromString(e,...n);return lf(r),new Bn(t,null,r)}{if(!(t instanceof vt||t instanceof Bn))throw new O(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return lf(r),new Bn(t.firestore,null,r)}}function Wg(t,e,...n){if(t=ut(t),arguments.length===1&&(e=Wm.V()),Hg("doc","path",e),t instanceof ac){const r=we.fromString(e,...n);return cf(r),new vt(t,null,new F(r))}{if(!(t instanceof vt||t instanceof Bn))throw new O(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return cf(r),new vt(t.firestore,t instanceof Bn?t.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new Cg(this,"async_queue_retry"),this.eu=()=>{const n=Lc();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const e=Lc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.tu(),this.nu(e)}enterRestrictedMode(e){if(!this.ja){this.ja=!0,this.Za=e||!1;const n=Lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(e){if(this.tu(),this.ja)return new Promise(()=>{});const n=new pr;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.za.push(e),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(e){if(!Wi(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(e){const n=this.Ga.then(()=>(this.Ya=!0,e().catch(r=>{this.Ja=r,this.Ya=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw _n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(e,n,r){this.tu(),this.Xa.indexOf(e)>-1&&(n=0);const s=Yu.createAndSchedule(this,e,n,r,i=>this.iu(i));return this.Ha.push(s),s}tu(){this.Ja&&H()}verifyOperationInProgress(){}async su(){let e;do e=this.Ga,await e;while(e!==this.Ga)}ou(e){for(const n of this.Ha)if(n.timerId===e)return!0;return!1}_u(e){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.su()})}au(e){this.Xa.push(e)}iu(e){const n=this.Ha.indexOf(e);this.Ha.splice(n,1)}}function df(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class yi extends ac{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new sA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gg(this),this._firestoreClient.terminate()}}function iA(t,e){const n=typeof t=="object"?t:$p(),r=typeof t=="string"?t:e||"(default)",s=lu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qE("firestore");i&&rA(s,...i)}return s}function Kg(t){return t._firestoreClient||Gg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gg(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new Lw(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,zg(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Yb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(it.fromBase64String(e))}catch(n){throw new O(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ls(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=/^__.*__$/;class aA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gi(e,this.data,n,this.fieldTransforms)}}function Qg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class ih{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.uu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(e){return new ih(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.lu({path:r,Pu:!1});return s.Iu(e),s}Tu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.lu({path:r,Pu:!1});return s.uu(),s}Eu(e){return this.lu({path:void 0,Pu:!0})}du(e){return ia(e,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}uu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Iu(this.path.get(e))}Iu(e){if(e.length===0)throw this.du("Document fields must not be empty");if(Qg(this.cu)&&oA.test(e))throw this.du('Document fields cannot begin and end with "__"')}}class cA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rc(e)}Vu(e,n,r,s=!1){return new ih({cu:e,methodName:n,Ru:r,path:Xe.emptyPath(),Pu:!1,Au:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zg(t){const e=t._freezeSettings(),n=rc(t._databaseId);return new cA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lA(t,e,n,r,s,i={}){const o=t.Vu(i.merge||i.mergeFields?2:0,e,n,s);Xg("Data must be an object, but it was:",o,r);const a=Jg(r,o);let c,l;if(i.merge)c=new Rt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const p=hA(e,h,n);if(!o.contains(p))throw new O(y.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);fA(u,p)||u.push(p)}c=new Rt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new aA(new It(a),c,l)}class oh extends rh{_toFieldTransform(e){return new a0(e.path,new mi)}isEqual(e){return e instanceof oh}}function uA(t,e,n,r=!1){return ah(n,t.Vu(r?4:3,e))}function ah(t,e){if(Yg(t=ut(t)))return Xg("Unsupported field value:",e,t),Jg(t,e);if(t instanceof rh)return function(r,s){if(!Qg(s.cu))throw s.du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Pu&&e.cu!==4)throw e.du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ah(a,s.Eu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return s0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:ra(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ra(s.serializer,i)}}if(r instanceof sh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ls)return{bytesValue:Eg(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.du(`Unsupported field value: ${oc(r)}`)}(t,e)}function Jg(t,e){const n={};return Km(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(r,s)=>{const i=ah(s,e.hu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Yg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof sh||t instanceof ls||t instanceof vt||t instanceof rh)}function Xg(t,e,n){if(!Yg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=oc(n);throw r==="an object"?e.du(t+" a custom object"):e.du(t+" "+r)}}function hA(t,e,n){if((e=ut(e))instanceof nh)return e._internalPath;if(typeof e=="string")return e_(t,e);throw ia("Field path arguments must be of type string or ",t,!1,void 0,n)}const dA=new RegExp("[~\\*/\\[\\]]");function e_(t,e,n){if(e.search(dA)>=0)throw ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nh(...e.split("."))._internalPath}catch{throw ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ia(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new O(y.INVALID_ARGUMENT,a+t+c)}function fA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ch("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pA extends t_{data(){return super.data()}}function ch(t,e){return typeof e=="string"?e_(t,e):e instanceof nh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lh{}class gA extends lh{}function _A(t,e,...n){let r=[];e instanceof lh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof uh).length,a=i.filter(c=>c instanceof cc).length;if(o>1||o>0&&a>0)throw new O(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class cc extends gA{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cc(e,n,r)}_apply(e){const n=this._parse(e);return n_(e._query,n),new Is(e.firestore,e.converter,Tl(e._query,n))}_parse(e){const n=Zg(e.firestore);return function(i,o,a,c,l,u,h){let p;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new O(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){pf(h,u);const m=[];for(const b of h)m.push(ff(c,i,b));p={arrayValue:{values:m}}}else p=ff(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||pf(h,u),p=uA(a,o,h,u==="in"||u==="not-in");return Le.create(l,u,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function yA(t,e,n){const r=e,s=ch("where",t);return cc._create(s,r,n)}class uh extends lh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new uh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Vt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)n_(o,c),o=Tl(o,c)}(e._query,n),new Is(e.firestore,e.converter,Tl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ff(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new O(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rg(e)&&n.indexOf("/")!==-1)throw new O(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!F.isDocumentKey(r))throw new O(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dd(t,new F(r))}if(n instanceof vt)return Dd(t,n._key);throw new O(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oc(n)}.`)}function pf(t,e){if(!Array.isArray(t)||t.length===0)throw new O(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function n_(t,e){if(e.isInequality()){const r=$u(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new O(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=ng(t);i!==null&&vA(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function vA(t,e,n){if(!n.isEqual(e))throw new O(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class EA{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new sh(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=Hn(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);be(Ag(r));const s=new fi(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(n)||_n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class r_ extends t_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ch("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ko extends r_{data(e={}){return super.data(e)}}class IA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ko(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new ko(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new ko(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:wA(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class s_ extends EA{constructor(e){super(),this.firestore=e}convertBytes(e){return new ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function bA(t){return i_(Gr(t.firestore,yi),[new ju(t._key,Qt.none())])}function AA(t,e){const n=Gr(t.firestore,yi),r=Wg(t),s=TA(t.converter,e);return i_(n,[lA(Zg(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Qt.exists(!1))]).then(()=>r)}function SA(t,...e){var n,r,s;t=ut(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||df(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(df(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof vt)l=Gr(t.firestore,yi),u=Uu(t._key.path),c={next:h=>{e[o]&&e[o](RA(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Gr(t,Is);l=Gr(h.firestore,yi),u=h._query;const p=new s_(l);c={next:m=>{e[o]&&e[o](new IA(l,p,h,m))},error:e[o+1],complete:e[o+2]},mA(t._query)}return function(p,m,b,A){const C=new Jb(A),B=new Db(m,C,b);return p.asyncQueue.enqueueAndForget(async()=>Pb(await of(p),B)),()=>{C.Fa(),p.asyncQueue.enqueueAndForget(async()=>kb(await of(p),B))}}(Kg(l),u,a,c)}function i_(t,e){return function(r,s){const i=new pr;return r.asyncQueue.enqueueAndForget(async()=>jb(await tA(r),s,i)),i.promise}(Kg(t),e)}function RA(t,e,n){const r=n.docs.get(e._key),s=new s_(t);return new r_(t,s,e._key,r,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}function CA(){return new oh("serverTimestamp")}(function(e,n=!0){(function(s){ys=s})(ms),ts(new yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new yi(new ww(r.getProvider("auth-internal")),new Rw(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new O(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),jn(Cd,"4.1.1",e),jn(Cd,"4.1.1","esm2017")})();const on=VE("main",{state:()=>({data:{preferred_max_time_between_classes:10,preferred_max_classes_per_day:3,classes:[{name:"Default Course Name",timings:[{days:"M",start_time:"00:00",end_time:"00:00"}]}]},localStorageKeys:Object.keys(localStorage),defaultData:{preferred_max_time_between_classes:10,preferred_max_classes_per_day:3,classes:[{name:"Default Class Name",timings:[{days:"M",start_time:"00:00",end_time:"00:00"}]}]},user:null,firestore:iA(),savesUnsubscribe:null,saves:new Map,loadTarget:"local"}),getters:{getSaveNamesFromFirestore(){const t=[];for(const e of this.saves.values())t.push(e.saveName);return t}},actions:{setData(t){this.data=t},addCourseAfterIndex(t){this.data.classes.splice(t+1,0,{name:"Default Course Name",timings:[{days:"M",start_time:"00:00",end_time:"00:00"}]})},removeCourseAtIndex(t){this.data.classes.length<=1||this.data.classes.splice(t,1)},shiftCourseUpOne(t){if(t>0){const e=this.data.classes.splice(t,1)[0];this.data.classes.splice(t-1,0,e)}},addTimingAfterIndex(t,e){this.data.classes[t].timings.splice(e+1,0,{days:"M",start_time:"00:00",end_time:"00:00"})},removeTimingAtIndex(t,e){this.data.classes[t].timings.length<=1||this.data.classes[t].timings.splice(e,1)},shiftTimingUpOne(t,e){if(e>0){const n=this.data.classes[t].timings.splice(e,1)[0];this.data.classes[t].timings.splice(e-1,0,n)}},editCourseNameAtIndex(t,e){this.data.classes[t].name=e},editTimingInfoAtIndex(t,e,n){this.data.classes[t].timings[e]=n},updateLocalStorageKeys(){localStorage.setItem("Default",JSON.stringify(this.defaultData)),this.localStorageKeys=Object.keys(localStorage)},saveNameToLocalStorage(t){localStorage.setItem(t,JSON.stringify(this.data)),this.updateLocalStorageKeys()},saveNameToFirestore(t){var e;AA(hf(this.firestore,"saves"),{saveName:t,data:this.data,uid:(e=this.user)==null?void 0:e.uid,createdAt:CA()})},loadSaveNameFromLocalStorage(t){this.data=JSON.parse(localStorage.getItem(t)||JSON.stringify(this.defaultData))},loadSaveNameFromFirestore(t){for(const[,e]of this.saves)e.saveName===t&&(this.data=e.data)},deleteSaveNameFromLocalStorage(t){localStorage.removeItem(t),this.updateLocalStorageKeys()},deleteSaveNameFromFirestore(t){for(const[e,n]of this.saves)n.saveName===t&&bA(Wg(this.firestore,"saves",e))},startSavesSubscribe(){var e;this.stopSavesSubscribe();const t=_A(hf(this.firestore,"saves"),yA("uid","==",(e=this.user)==null?void 0:e.uid));this.savesUnsubscribe=SA(t,n=>{this.saves=new Map,n.forEach(r=>{this.saves.set(r.id,r.data())})})},stopSavesSubscribe(){this.saves=new Map,this.loadTarget="local",this.savesUnsubscribe&&this.savesUnsubscribe(),this.savesUnsubscribe=null}}}),PA=sn({props:{courseIndex:{type:Number,required:!0},timingIndex:{type:Number,required:!0}},setup(t,{emit:e}){const n=on(),r=n.data.classes[t.courseIndex].timings[t.timingIndex],s=et(r.days),i=et(r.start_time),o=et(r.end_time),a=()=>{n.editTimingInfoAtIndex(t.courseIndex,t.timingIndex,{days:s.value,start_time:i.value,end_time:o.value}),c()},c=()=>{e("closeModal")};return{closeModal:c,newDays:s,newStartTime:i,newEndTime:o,saveNewTimingInfo:a}},emits:["closeModal"]}),an=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},kA={class:"modal-custom bg-dark"},xA=g("h1",null,"Edit Timing Info",-1),NA={class:"container-fluid"},DA={class:"row align-items-center"},OA=g("div",{class:"col-12 col-md-4"},[g("h2",null,"Days")],-1),VA={class:"col-12 col-md-8"},MA={class:"row mt-2"},LA=g("div",{class:"col-12 col-md-4"},[g("h2",null,"Start")],-1),FA={class:"col-12 col-md-8"},UA={class:"row mt-2"},$A=g("div",{class:"col-12 col-md-4"},[g("h2",null,"End")],-1),jA={class:"col-12 col-md-8"},BA={class:"container-fluid mt-3"},qA={class:"row"},zA={class:"col-6"},HA={class:"col"};function WA(t,e,n,r,s,i){return se(),le("div",{class:"modal-backdrop",onClick:e[5]||(e[5]=Sp((...o)=>t.closeModal&&t.closeModal(...o),["self"])),onKeydown:e[6]||(e[6]=iu(o=>t.saveNewTimingInfo(),["enter"]))},[g("div",kA,[xA,g("div",NA,[g("div",DA,[OA,g("div",VA,[Gt(g("input",{type:"text",placeholder:"MTWRF",class:"modifier-input text-center w-100","onUpdate:modelValue":e[0]||(e[0]=o=>t.newDays=o)},null,512),[[Fn,t.newDays]])])]),g("div",MA,[LA,g("div",FA,[Gt(g("input",{type:"text",placeholder:"HH:MM",class:"modifier-input text-center w-100","onUpdate:modelValue":e[1]||(e[1]=o=>t.newStartTime=o)},null,512),[[Fn,t.newStartTime]])])]),g("div",UA,[$A,g("div",jA,[Gt(g("input",{type:"text",placeholder:"HH:MM",class:"modifier-input text-center w-100","onUpdate:modelValue":e[2]||(e[2]=o=>t.newEndTime=o)},null,512),[[Fn,t.newEndTime]])])])]),g("div",BA,[g("div",qA,[g("div",zA,[g("button",{type:"button",title:"Close Edit Timing Info Modal",class:"btn btn-secondary large-button-text w-100",onClick:e[3]||(e[3]=o=>t.closeModal())},"Close")]),g("div",HA,[g("button",{type:"button",title:"Save New Timing Info",class:"btn btn-primary large-button-text w-100",onClick:e[4]||(e[4]=o=>t.saveNewTimingInfo())},"Save")])])])])],32)}const KA=an(PA,[["render",WA]]),GA=sn({components:{EditTimingInfoModal:KA},props:{timingData:{type:Object,required:!0},courseIndex:{type:Number,required:!0},timingIndex:{type:Number,required:!0}},setup(t){const e=on(),n=()=>{e.addTimingAfterIndex(t.courseIndex,t.timingIndex)},r=()=>{e.removeTimingAtIndex(t.courseIndex,t.timingIndex)},s=()=>{e.shiftTimingUpOne(t.courseIndex,t.timingIndex)},i=et(!1);return{addTiming:n,removeTiming:r,showEditTimingInfoModal:i,toggleShowEditTimingInfoModal:()=>{i.value=!i.value},shiftTimingUpOne:s}}}),QA={class:"d-flex justify-content-center align-items-center"},ZA=g("i",{class:"bi bi-clock-fill"},null,-1),JA=[ZA],YA=g("i",{class:"bi bi-caret-up-fill"},null,-1),XA=[YA],eS=g("i",{class:"bi bi-plus-circle-fill"},null,-1),tS=[eS],nS=g("i",{class:"bi bi-trash3-fill"},null,-1),rS=[nS];function sS(t,e,n,r,s,i){const o=jt("EditTimingInfoModal");return se(),le(je,null,[g("div",QA,[g("h4",null,gt(t.timingData.days),1),g("button",{title:"Show Edit Timing Info Modal",type:"button",class:"btn btn-warning text-white modifier-button",onClick:e[0]||(e[0]=a=>t.toggleShowEditTimingInfoModal())},JA),t.timingIndex>0?(se(),le("button",{key:0,type:"button",title:"Shift Timing Up 1",class:"btn btn-secondary text-white modifier-button",onClick:e[1]||(e[1]=a=>t.shiftTimingUpOne())},XA)):St("",!0),g("button",{title:"Add Timing After This One",type:"button",class:"btn btn-success modifier-button",onClick:e[2]||(e[2]=(...a)=>t.addTiming&&t.addTiming(...a))},tS),g("button",{title:"Remove This Timing",type:"button",class:"btn btn-danger modifier-button",onClick:e[3]||(e[3]=(...a)=>t.removeTiming&&t.removeTiming(...a))},rS)]),t.showEditTimingInfoModal?(se(),ei(o,{key:0,"course-index":t.courseIndex,"timing-index":t.timingIndex,"timing-data":t.timingData,onCloseModal:e[4]||(e[4]=a=>t.toggleShowEditTimingInfoModal())},null,8,["course-index","timing-index","timing-data"])):St("",!0)],64)}const iS=an(GA,[["render",sS]]),oS=sn({props:{courseIndex:{type:Number,required:!0}},setup(t,{emit:e}){const n=on(),r=n.data.classes[t.courseIndex].name,s=et(r),i=()=>{n.editCourseNameAtIndex(t.courseIndex,s.value),o()},o=()=>{e("closeModal")};return{closeModal:o,newCourseName:s,saveNewCourseName:i}},emits:["closeModal"]}),aS={class:"modal-custom bg-dark"},cS=g("h1",null,"Edit Course Name",-1),lS={class:"container-fluid mt-3"},uS={class:"row"},hS={class:"col-6"},dS={class:"col"};function fS(t,e,n,r,s,i){return se(),le("div",{class:"modal-backdrop",onClick:e[4]||(e[4]=Sp((...o)=>t.closeModal&&t.closeModal(...o),["self"]))},[g("div",aS,[cS,Gt(g("input",{type:"text",class:"modifier-input text-center",placeholder:"Name",onKeydown:e[0]||(e[0]=iu(o=>t.saveNewCourseName(),["enter"])),"onUpdate:modelValue":e[1]||(e[1]=o=>t.newCourseName=o)},null,544),[[Fn,t.newCourseName]]),g("div",lS,[g("div",uS,[g("div",hS,[g("button",{type:"button",title:"Close Edit Course Name Modal",class:"btn btn-secondary large-button-text w-100",onClick:e[2]||(e[2]=o=>t.closeModal())},"Close")]),g("div",dS,[g("button",{type:"button",title:"Show New Course Name",class:"btn btn-primary large-button-text w-100",onClick:e[3]||(e[3]=o=>t.saveNewCourseName())},"Save")])])])])])}const pS=an(oS,[["render",fS]]),mS=sn({components:{Timing:iS,EditCourseNameModal:pS},props:{courseData:{type:Object,required:!0},courseIndex:{type:Number,required:!0}},setup(t){const e=on(),n=()=>{e.addCourseAfterIndex(t.courseIndex)},r=()=>{e.removeCourseAtIndex(t.courseIndex)},s=()=>{e.shiftCourseUpOne(t.courseIndex)},i=et(!1);return{addCourse:n,removeCourse:r,showEditCourseNameModal:i,toggleShowEditCourseNameModal:()=>{i.value=!i.value},shiftCourseUpOne:s}}});const ws=t=>(ap("data-v-e70ab943"),t=t(),cp(),t),gS={class:"course-background"},_S={class:"container-fluid"},yS={class:"row"},vS=ws(()=>g("div",{class:"col-xs-0 col-md-4"},null,-1)),ES={class:"col-6 col-md-4"},TS={class:"col-6 col-md-4 d-flex justify-content-end"},IS=ws(()=>g("i",{class:"bi bi-pencil-fill"},null,-1)),wS=[IS],bS=ws(()=>g("i",{class:"bi bi-caret-up-fill"},null,-1)),AS=[bS],SS=ws(()=>g("i",{class:"bi bi-plus-circle-fill"},null,-1)),RS=[SS],CS=ws(()=>g("i",{class:"bi bi-trash3-fill"},null,-1)),PS=[CS],kS=ws(()=>g("h4",{class:"mb-3 text-white-50"},"Timings",-1));function xS(t,e,n,r,s,i){const o=jt("Timing"),a=jt("EditCourseNameModal");return se(),le(je,null,[g("div",gS,[g("div",_S,[g("div",yS,[vS,g("h3",ES,gt(t.courseData.name),1),g("div",TS,[g("button",{type:"button",title:"Show Edit Course Name Modal",class:"btn btn-info text-white modifier-button",onClick:e[0]||(e[0]=c=>t.toggleShowEditCourseNameModal())},wS),t.courseIndex>0?(se(),le("button",{key:0,type:"button",title:"Shift Course Up 1",class:"btn btn-secondary text-white modifier-button",onClick:e[1]||(e[1]=c=>t.shiftCourseUpOne())},AS)):St("",!0),g("button",{type:"button",title:"Add Course After This One",class:"btn btn-success modifier-button",onClick:e[2]||(e[2]=c=>t.addCourse())},RS),g("button",{type:"button",title:"Remove This Course",class:"btn btn-danger modifier-button",onClick:e[3]||(e[3]=c=>t.removeCourse())},PS)])])]),kS,(se(!0),le(je,null,$r(t.courseData.timings,(c,l)=>(se(),le("div",{class:"mt-2",key:c.days+"-"+l},[ct(o,{"timing-data":c,"course-index":t.courseIndex,"timing-index":l},null,8,["timing-data","course-index","timing-index"])]))),128))]),t.showEditCourseNameModal?(se(),ei(a,{key:0,"course-index":t.courseIndex,onCloseModal:e[4]||(e[4]=c=>t.toggleShowEditCourseNameModal())},null,8,["course-index"])):St("",!0)],64)}const NS=an(mS,[["render",xS],["__scopeId","data-v-e70ab943"]]),DS=sn({setup(){const t=on(),e=et("");return{saveName:e,saveNameToLocalStorage:()=>{t.saveNameToLocalStorage(e.value)},mainStore:t,saveNameToFirestore:()=>{t.saveNameToFirestore(e.value)}}}}),OS={class:"modal fade",id:"saveDataModal",tabindex:"-1"},VS={class:"modal-dialog modal-dialog-centered"},MS={class:"modal-content bg-dark"},LS=g("div",{class:"modal-header"},[g("h1",{class:"modal-title fs-5"},"Save Data"),g("button",{title:"Close Save Data Modal",type:"button",class:"btn-close","data-bs-dismiss":"modal"})],-1),FS={class:"modal-body"},US={class:"d-flex justify-content-center"},$S=g("button",{type:"button",class:"btn btn-secondary large-button-text m-2 me-0 w-100","data-bs-dismiss":"modal","data-bs-target":"#saveDataModal"},"Close",-1);function jS(t,e,n,r,s,i){return se(),le("div",OS,[g("div",VS,[g("div",MS,[LS,g("div",FS,[Gt(g("input",{type:"text",class:"text-center modifier-input",placeholder:"Save Name","onUpdate:modelValue":e[0]||(e[0]=o=>t.saveName=o)},null,512),[[Fn,t.saveName]])]),g("div",US,[t.mainStore.user!==null?(se(),le("button",{key:0,type:"button",class:"btn btn-success large-button-text m-2 me-0 w-100","data-bs-dismiss":"modal","data-bs-target":"#saveDataModal",onClick:e[1]||(e[1]=o=>t.saveNameToFirestore())},"Save To Account")):St("",!0),$S,g("button",{type:"button",class:"btn btn-primary large-button-text m-2 w-100","data-bs-dismiss":"modal","data-bs-target":"#saveDataModal",onClick:e[2]||(e[2]=o=>t.saveNameToLocalStorage())},"Save Locally")])])])])}const BS=an(DS,[["render",jS]]),qS={class:"modal-dialog modal-dialog-centered"},zS={class:"modal-content bg-dark"},HS=g("div",{class:"modal-header"},[g("h1",{class:"modal-title fs-5"},"Load Data"),g("button",{title:"Close Load Data Modal",type:"button",class:"btn-close","data-bs-dismiss":"modal"})],-1),WS={class:"modal-body"},KS={key:0,class:"container-fluid mt-2"},GS={class:"row"},QS={class:"col-12 d-flex justify-content-center align-items-center"},ZS=g("h2",{class:"d-inline-block"},"Load From",-1),JS=g("option",{value:"local"},"Local",-1),YS=g("option",{value:"account"},"Account",-1),XS=[JS,YS],eR={class:"d-flex justify-content-center"},tR=g("button",{type:"button",class:"btn btn-secondary large-button-text m-2 me-0 w-100","data-bs-dismiss":"modal","data-bs-target":"#loadDataModal"},"Close",-1),nR=sn({__name:"LoadDataModal",setup(t){const e=on(),n=et(e.localStorageKeys[0]),r=et(null),s=()=>{e.loadTarget==="local"?e.loadSaveNameFromLocalStorage(n.value):e.loadSaveNameFromFirestore(n.value)},i=()=>{e.loadTarget==="local"?(e.deleteSaveNameFromLocalStorage(n.value),n.value=e.localStorageKeys[0]):e.deleteSaveNameFromFirestore(n.value)};return(o,a)=>(se(),le("div",{class:"modal fade",id:"loadDataModal",tabindex:"-1",onKeydown:a[4]||(a[4]=iu(c=>{var l;return(l=r.value)==null?void 0:l.click()},["enter"]))},[g("div",qS,[g("div",zS,[HS,g("div",WS,[Gt(g("select",{title:"Save Name Select",class:"rounded-4 py-1 pe-1","onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c)},[(se(!0),le(je,null,$r(Bt(e).loadTarget==="local"?Bt(e).localStorageKeys:Bt(e).getSaveNamesFromFirestore,c=>(se(),le("option",{class:"text-center",key:c},gt(c),1))),128))],512),[[nd,n.value]]),Bt(e).user!==null?(se(),le("div",KS,[g("div",GS,[g("div",QS,[ZS,Gt(g("select",{title:"Load From Select",size:"2",class:"d-inline-block ms-2 text-center overflow-y-auto","onUpdate:modelValue":a[1]||(a[1]=c=>Bt(e).loadTarget=c)},XS,512),[[nd,Bt(e).loadTarget]])])])])):St("",!0)]),g("div",eR,[g("button",{type:"button",class:"btn btn-danger large-button-text m-2 me-0 w-100",onClick:a[2]||(a[2]=c=>i())},"Delete"),tR,g("button",{type:"button",class:"btn btn-primary large-button-text m-2 w-100","data-bs-dismiss":"modal","data-bs-target":"#loadDataModal",ref_key:"loadSaveNameButtonRef",ref:r,onClick:a[3]||(a[3]=c=>s())},"Load",512)])])])],32))}}),rR={};const sR={class:"loader"};function iR(t,e,n,r,s,i){return se(),le("div",sR)}const oR=an(rR,[["render",iR],["__scopeId","data-v-eaa7f255"]]),aR=sn({setup(){const t=on();return{copyDataToClipboard:()=>{navigator.clipboard.writeText(JSON.stringify(t.data))}}}}),cR={class:"modal fade",id:"exportDataModal",tabindex:"-1"},lR={class:"modal-dialog modal-dialog-centered"},uR={class:"modal-content bg-dark"},hR=g("div",{class:"modal-header"},[g("h1",{class:"modal-title fs-5"},"Export Data"),g("button",{title:"Close Export Data Modal",type:"button",class:"btn-close","data-bs-dismiss":"modal"})],-1),dR={class:"modal-body"},fR={class:"container-fluid"},pR={class:"row align-items-center"},mR=g("div",{class:"col-9"},[g("h3",null,'Press the copy button to the right to copy current data to clipboard. Then head to wherever you need to import the data to, click "Import Data", and paste copied data.')],-1),gR={class:"col-3"},_R=g("i",{class:"bi bi-clipboard-fill"},null,-1),yR=[_R],vR=g("div",{class:"d-flex justify-content-center"},[g("button",{type:"button",class:"btn btn-secondary large-button-text m-2 w-100","data-bs-dismiss":"modal","data-bs-target":"#exportDataModal"},"Close")],-1);function ER(t,e,n,r,s,i){return se(),le("div",cR,[g("div",lR,[g("div",uR,[hR,g("div",dR,[g("div",fR,[g("div",pR,[mR,g("div",gR,[g("button",{type:"button",class:"btn btn-primary large-button-text modifier-button",onClick:e[0]||(e[0]=(...o)=>t.copyDataToClipboard&&t.copyDataToClipboard(...o))},yR)])])])]),vR])])])}const TR=an(aR,[["render",ER]]);var pe;(function(t){t.assertEqual=s=>s;function e(s){}t.assertIs=e;function n(s){throw new Error}t.assertNever=n,t.arrayToEnum=s=>{const i={};for(const o of s)i[o]=o;return i},t.getValidEnumValues=s=>{const i=t.objectKeys(s).filter(a=>typeof s[s[a]]!="number"),o={};for(const a of i)o[a]=s[a];return t.objectValues(o)},t.objectValues=s=>t.objectKeys(s).map(function(i){return s[i]}),t.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&i.push(o);return i},t.find=(s,i)=>{for(const o of s)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function r(s,i=" | "){return s.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=r,t.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(pe||(pe={}));var kl;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(kl||(kl={}));const N=pe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Pn=t=>{switch(typeof t){case"undefined":return N.undefined;case"string":return N.string;case"number":return isNaN(t)?N.nan:N.number;case"boolean":return N.boolean;case"function":return N.function;case"bigint":return N.bigint;case"symbol":return N.symbol;case"object":return Array.isArray(t)?N.array:t===null?N.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?N.promise:typeof Map<"u"&&t instanceof Map?N.map:typeof Set<"u"&&t instanceof Set?N.set:typeof Date<"u"&&t instanceof Date?N.date:N.object;default:return N.unknown}},w=pe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),IR=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class Nt extends Error{constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(i){return i.message},r={_errors:[]},s=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(s);else if(o.code==="invalid_return_type")s(o.returnTypeError);else if(o.code==="invalid_arguments")s(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let a=r,c=0;for(;c<o.path.length;){const l=o.path[c];c===o.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(n(o))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return s(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,pe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const s of this.issues)s.path.length>0?(n[s.path[0]]=n[s.path[0]]||[],n[s.path[0]].push(e(s))):r.push(e(s));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}Nt.create=t=>new Nt(t);const vi=(t,e)=>{let n;switch(t.code){case w.invalid_type:t.received===N.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case w.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,pe.jsonStringifyReplacer)}`;break;case w.unrecognized_keys:n=`Unrecognized key(s) in object: ${pe.joinValues(t.keys,", ")}`;break;case w.invalid_union:n="Invalid input";break;case w.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${pe.joinValues(t.options)}`;break;case w.invalid_enum_value:n=`Invalid enum value. Expected ${pe.joinValues(t.options)}, received '${t.received}'`;break;case w.invalid_arguments:n="Invalid function arguments";break;case w.invalid_return_type:n="Invalid function return type";break;case w.invalid_date:n="Invalid date";break;case w.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:pe.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case w.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case w.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case w.custom:n="Invalid input";break;case w.invalid_intersection_types:n="Intersection results could not be merged";break;case w.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case w.not_finite:n="Number must be finite";break;default:n=e.defaultError,pe.assertNever(t)}return{message:n}};let o_=vi;function wR(t){o_=t}function oa(){return o_}const aa=t=>{const{data:e,path:n,errorMaps:r,issueData:s}=t,i=[...n,...s.path||[]],o={...s,path:i};let a="";const c=r.filter(l=>!!l).slice().reverse();for(const l of c)a=l(o,{data:e,defaultError:a}).message;return{...s,path:i,message:s.message||a}},bR=[];function D(t,e){const n=aa({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,oa(),vi].filter(r=>!!r)});t.common.issues.push(n)}class ot{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const s of n){if(s.status==="aborted")return Z;s.status==="dirty"&&e.dirty(),r.push(s.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const s of n)r.push({key:await s.key,value:await s.value});return ot.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const s of n){const{key:i,value:o}=s;if(i.status==="aborted"||o.status==="aborted")return Z;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value<"u"||s.alwaysSet)&&(r[i.value]=o.value)}return{status:e.value,value:r}}}const Z=Object.freeze({status:"aborted"}),a_=t=>({status:"dirty",value:t}),ht=t=>({status:"valid",value:t}),xl=t=>t.status==="aborted",Nl=t=>t.status==="dirty",Ei=t=>t.status==="valid",ca=t=>typeof Promise<"u"&&t instanceof Promise;var j;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(j||(j={}));class tn{constructor(e,n,r,s){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const mf=(t,e)=>{if(Ei(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Nt(t.common.issues);return this._error=n,this._error}}};function J(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:s}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:s}}class re{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Pn(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Pn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new ot,ctx:{common:e.parent.common,data:e.data,parsedType:Pn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(ca(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){var r;const s={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Pn(e)},i=this._parseSync({data:e,path:s.path,parent:s});return mf(s,i)}async parseAsync(e,n){const r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Pn(e)},s=this._parse({data:e,path:r.path,parent:r}),i=await(ca(s)?s:Promise.resolve(s));return mf(r,i)}refine(e,n){const r=s=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(s):n;return this._refinement((s,i)=>{const o=e(s),a=()=>i.addIssue({code:w.custom,...r(s)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,s)=>e(r)?!0:(s.addIssue(typeof n=="function"?n(r,s):n),!1))}_refinement(e){return new Mt({schema:this,typeName:z.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return pn.create(this,this._def)}nullable(){return Ar.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Dt.create(this,this._def)}promise(){return hs.create(this,this._def)}or(e){return bi.create([this,e],this._def)}and(e){return Ai.create(this,e,this._def)}transform(e){return new Mt({...J(this._def),schema:this,typeName:z.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new ki({...J(this._def),innerType:this,defaultValue:n,typeName:z.ZodDefault})}brand(){return new l_({typeName:z.ZodBranded,type:this,...J(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new da({...J(this._def),innerType:this,catchValue:n,typeName:z.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return Yi.create(this,e)}readonly(){return pa.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const AR=/^c[^\s-]{8,}$/i,SR=/^[a-z][a-z0-9]*$/,RR=/[0-9A-HJKMNP-TV-Z]{26}/,CR=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,PR=/^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,kR=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,xR=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,NR=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,DR=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function OR(t,e){return!!((e==="v4"||!e)&&xR.test(t)||(e==="v6"||!e)&&NR.test(t))}class Ct extends re{constructor(){super(...arguments),this._regex=(e,n,r)=>this.refinement(s=>e.test(s),{validation:n,code:w.invalid_string,...j.errToObj(r)}),this.nonempty=e=>this.min(1,j.errToObj(e)),this.trim=()=>new Ct({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Ct({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Ct({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==N.string){const i=this._getOrReturnCtx(e);return D(i,{code:w.invalid_type,expected:N.string,received:i.parsedType}),Z}const r=new ot;let s;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(s=this._getOrReturnCtx(e,s),D(s,{code:w.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(s=this._getOrReturnCtx(e,s),D(s,{code:w.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(s=this._getOrReturnCtx(e,s),o?D(s,{code:w.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&D(s,{code:w.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")PR.test(e.data)||(s=this._getOrReturnCtx(e,s),D(s,{validation:"email",code:w.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")kR.test(e.data)||(s=this._getOrReturnCtx(e,s),D(s,{validation:"emoji",code:w.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")CR.test(e.data)||(s=this._getOrReturnCtx(e,s),D(s,{validation:"uuid",code:w.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")AR.test(e.data)||(s=this._getOrReturnCtx(e,s),D(s,{validation:"cuid",code:w.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")SR.test(e.data)||(s=this._getOrReturnCtx(e,s),D(s,{validation:"cuid2",code:w.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")RR.test(e.data)||(s=this._getOrReturnCtx(e,s),D(s,{validation:"ulid",code:w.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),D(s,{validation:"url",code:w.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),D(s,{validation:"regex",code:w.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(e,s),D(s,{code:w.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(s=this._getOrReturnCtx(e,s),D(s,{code:w.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(s=this._getOrReturnCtx(e,s),D(s,{code:w.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?DR(i).test(e.data)||(s=this._getOrReturnCtx(e,s),D(s,{code:w.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="ip"?OR(e.data,i.version)||(s=this._getOrReturnCtx(e,s),D(s,{validation:"ip",code:w.invalid_string,message:i.message}),r.dirty()):pe.assertNever(i);return{status:r.value,value:e.data}}_addCheck(e){return new Ct({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...j.errToObj(e)})}url(e){return this._addCheck({kind:"url",...j.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...j.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...j.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...j.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...j.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...j.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...j.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...j.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...j.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...j.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...j.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...j.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...j.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...j.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...j.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Ct.create=t=>{var e;return new Ct({checks:[],typeName:z.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...J(t)})};function VR(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,s=n>r?n:r,i=parseInt(t.toFixed(s).replace(".","")),o=parseInt(e.toFixed(s).replace(".",""));return i%o/Math.pow(10,s)}class Kn extends re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==N.number){const i=this._getOrReturnCtx(e);return D(i,{code:w.invalid_type,expected:N.number,received:i.parsedType}),Z}let r;const s=new ot;for(const i of this._def.checks)i.kind==="int"?pe.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),D(r,{code:w.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),D(r,{code:w.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),D(r,{code:w.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?VR(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),D(r,{code:w.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),D(r,{code:w.not_finite,message:i.message}),s.dirty()):pe.assertNever(i);return{status:s.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,j.toString(n))}gt(e,n){return this.setLimit("min",e,!1,j.toString(n))}lte(e,n){return this.setLimit("max",e,!0,j.toString(n))}lt(e,n){return this.setLimit("max",e,!1,j.toString(n))}setLimit(e,n,r,s){return new Kn({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:j.toString(s)}]})}_addCheck(e){return new Kn({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:j.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:j.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:j.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:j.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:j.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:j.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:j.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:j.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:j.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&pe.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Kn.create=t=>new Kn({checks:[],typeName:z.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...J(t)});class Gn extends re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==N.bigint){const i=this._getOrReturnCtx(e);return D(i,{code:w.invalid_type,expected:N.bigint,received:i.parsedType}),Z}let r;const s=new ot;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),D(r,{code:w.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),D(r,{code:w.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),D(r,{code:w.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):pe.assertNever(i);return{status:s.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,j.toString(n))}gt(e,n){return this.setLimit("min",e,!1,j.toString(n))}lte(e,n){return this.setLimit("max",e,!0,j.toString(n))}lt(e,n){return this.setLimit("max",e,!1,j.toString(n))}setLimit(e,n,r,s){return new Gn({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:j.toString(s)}]})}_addCheck(e){return new Gn({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:j.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:j.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:j.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:j.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:j.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Gn.create=t=>{var e;return new Gn({checks:[],typeName:z.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...J(t)})};class Ti extends re{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==N.boolean){const r=this._getOrReturnCtx(e);return D(r,{code:w.invalid_type,expected:N.boolean,received:r.parsedType}),Z}return ht(e.data)}}Ti.create=t=>new Ti({typeName:z.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...J(t)});class wr extends re{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==N.date){const i=this._getOrReturnCtx(e);return D(i,{code:w.invalid_type,expected:N.date,received:i.parsedType}),Z}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return D(i,{code:w.invalid_date}),Z}const r=new ot;let s;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(s=this._getOrReturnCtx(e,s),D(s,{code:w.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(s=this._getOrReturnCtx(e,s),D(s,{code:w.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):pe.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new wr({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:j.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:j.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}wr.create=t=>new wr({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:z.ZodDate,...J(t)});class la extends re{_parse(e){if(this._getType(e)!==N.symbol){const r=this._getOrReturnCtx(e);return D(r,{code:w.invalid_type,expected:N.symbol,received:r.parsedType}),Z}return ht(e.data)}}la.create=t=>new la({typeName:z.ZodSymbol,...J(t)});class Ii extends re{_parse(e){if(this._getType(e)!==N.undefined){const r=this._getOrReturnCtx(e);return D(r,{code:w.invalid_type,expected:N.undefined,received:r.parsedType}),Z}return ht(e.data)}}Ii.create=t=>new Ii({typeName:z.ZodUndefined,...J(t)});class wi extends re{_parse(e){if(this._getType(e)!==N.null){const r=this._getOrReturnCtx(e);return D(r,{code:w.invalid_type,expected:N.null,received:r.parsedType}),Z}return ht(e.data)}}wi.create=t=>new wi({typeName:z.ZodNull,...J(t)});class us extends re{constructor(){super(...arguments),this._any=!0}_parse(e){return ht(e.data)}}us.create=t=>new us({typeName:z.ZodAny,...J(t)});class mr extends re{constructor(){super(...arguments),this._unknown=!0}_parse(e){return ht(e.data)}}mr.create=t=>new mr({typeName:z.ZodUnknown,...J(t)});class En extends re{_parse(e){const n=this._getOrReturnCtx(e);return D(n,{code:w.invalid_type,expected:N.never,received:n.parsedType}),Z}}En.create=t=>new En({typeName:z.ZodNever,...J(t)});class ua extends re{_parse(e){if(this._getType(e)!==N.undefined){const r=this._getOrReturnCtx(e);return D(r,{code:w.invalid_type,expected:N.void,received:r.parsedType}),Z}return ht(e.data)}}ua.create=t=>new ua({typeName:z.ZodVoid,...J(t)});class Dt extends re{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),s=this._def;if(n.parsedType!==N.array)return D(n,{code:w.invalid_type,expected:N.array,received:n.parsedType}),Z;if(s.exactLength!==null){const o=n.data.length>s.exactLength.value,a=n.data.length<s.exactLength.value;(o||a)&&(D(n,{code:o?w.too_big:w.too_small,minimum:a?s.exactLength.value:void 0,maximum:o?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&n.data.length<s.minLength.value&&(D(n,{code:w.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&n.data.length>s.maxLength.value&&(D(n,{code:w.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>s.type._parseAsync(new tn(n,o,n.path,a)))).then(o=>ot.mergeArray(r,o));const i=[...n.data].map((o,a)=>s.type._parseSync(new tn(n,o,n.path,a)));return ot.mergeArray(r,i)}get element(){return this._def.type}min(e,n){return new Dt({...this._def,minLength:{value:e,message:j.toString(n)}})}max(e,n){return new Dt({...this._def,maxLength:{value:e,message:j.toString(n)}})}length(e,n){return new Dt({...this._def,exactLength:{value:e,message:j.toString(n)}})}nonempty(e){return this.min(1,e)}}Dt.create=(t,e)=>new Dt({type:t,minLength:null,maxLength:null,exactLength:null,typeName:z.ZodArray,...J(e)});function Ur(t){if(t instanceof Ce){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=pn.create(Ur(r))}return new Ce({...t._def,shape:()=>e})}else return t instanceof Dt?new Dt({...t._def,type:Ur(t.element)}):t instanceof pn?pn.create(Ur(t.unwrap())):t instanceof Ar?Ar.create(Ur(t.unwrap())):t instanceof nn?nn.create(t.items.map(e=>Ur(e))):t}class Ce extends re{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=pe.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==N.object){const l=this._getOrReturnCtx(e);return D(l,{code:w.invalid_type,expected:N.object,received:l.parsedType}),Z}const{status:r,ctx:s}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof En&&this._def.unknownKeys==="strip"))for(const l in s.data)o.includes(l)||a.push(l);const c=[];for(const l of o){const u=i[l],h=s.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new tn(s,h,s.path,l)),alwaysSet:l in s.data})}if(this._def.catchall instanceof En){const l=this._def.unknownKeys;if(l==="passthrough")for(const u of a)c.push({key:{status:"valid",value:u},value:{status:"valid",value:s.data[u]}});else if(l==="strict")a.length>0&&(D(s,{code:w.unrecognized_keys,keys:a}),r.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const u of a){const h=s.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new tn(s,h,s.path,u)),alwaysSet:u in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const l=[];for(const u of c){const h=await u.key;l.push({key:h,value:await u.value,alwaysSet:u.alwaysSet})}return l}).then(l=>ot.mergeObjectSync(r,l)):ot.mergeObjectSync(r,c)}get shape(){return this._def.shape()}strict(e){return j.errToObj,new Ce({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var s,i,o,a;const c=(o=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=j.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new Ce({...this._def,unknownKeys:"strip"})}passthrough(){return new Ce({...this._def,unknownKeys:"passthrough"})}extend(e){return new Ce({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Ce({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:z.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new Ce({...this._def,catchall:e})}pick(e){const n={};return pe.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new Ce({...this._def,shape:()=>n})}omit(e){const n={};return pe.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new Ce({...this._def,shape:()=>n})}deepPartial(){return Ur(this)}partial(e){const n={};return pe.objectKeys(this.shape).forEach(r=>{const s=this.shape[r];e&&!e[r]?n[r]=s:n[r]=s.optional()}),new Ce({...this._def,shape:()=>n})}required(e){const n={};return pe.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof pn;)i=i._def.innerType;n[r]=i}}),new Ce({...this._def,shape:()=>n})}keyof(){return c_(pe.objectKeys(this.shape))}}Ce.create=(t,e)=>new Ce({shape:()=>t,unknownKeys:"strip",catchall:En.create(),typeName:z.ZodObject,...J(e)});Ce.strictCreate=(t,e)=>new Ce({shape:()=>t,unknownKeys:"strict",catchall:En.create(),typeName:z.ZodObject,...J(e)});Ce.lazycreate=(t,e)=>new Ce({shape:t,unknownKeys:"strip",catchall:En.create(),typeName:z.ZodObject,...J(e)});class bi extends re{_parse(e){const{ctx:n}=this._processInputParams(e),r=this._def.options;function s(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new Nt(a.ctx.common.issues));return D(n,{code:w.invalid_union,unionErrors:o}),Z}if(n.common.async)return Promise.all(r.map(async i=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(s);{let i;const o=[];for(const c of r){const l={...n,common:{...n.common,issues:[]},parent:null},u=c._parseSync({data:n.data,path:n.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:l}),l.common.issues.length&&o.push(l.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(c=>new Nt(c));return D(n,{code:w.invalid_union,unionErrors:a}),Z}}get options(){return this._def.options}}bi.create=(t,e)=>new bi({options:t,typeName:z.ZodUnion,...J(e)});const xo=t=>t instanceof Ri?xo(t.schema):t instanceof Mt?xo(t.innerType()):t instanceof Ci?[t.value]:t instanceof Qn?t.options:t instanceof Pi?Object.keys(t.enum):t instanceof ki?xo(t._def.innerType):t instanceof Ii?[void 0]:t instanceof wi?[null]:null;class lc extends re{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==N.object)return D(n,{code:w.invalid_type,expected:N.object,received:n.parsedType}),Z;const r=this.discriminator,s=n.data[r],i=this.optionsMap.get(s);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(D(n,{code:w.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Z)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const s=new Map;for(const i of n){const o=xo(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(s.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);s.set(a,i)}}return new lc({typeName:z.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:s,...J(r)})}}function Dl(t,e){const n=Pn(t),r=Pn(e);if(t===e)return{valid:!0,data:t};if(n===N.object&&r===N.object){const s=pe.objectKeys(e),i=pe.objectKeys(t).filter(a=>s.indexOf(a)!==-1),o={...t,...e};for(const a of i){const c=Dl(t[a],e[a]);if(!c.valid)return{valid:!1};o[a]=c.data}return{valid:!0,data:o}}else if(n===N.array&&r===N.array){if(t.length!==e.length)return{valid:!1};const s=[];for(let i=0;i<t.length;i++){const o=t[i],a=e[i],c=Dl(o,a);if(!c.valid)return{valid:!1};s.push(c.data)}return{valid:!0,data:s}}else return n===N.date&&r===N.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Ai extends re{_parse(e){const{status:n,ctx:r}=this._processInputParams(e),s=(i,o)=>{if(xl(i)||xl(o))return Z;const a=Dl(i.value,o.value);return a.valid?((Nl(i)||Nl(o))&&n.dirty(),{status:n.value,value:a.data}):(D(r,{code:w.invalid_intersection_types}),Z)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,o])=>s(i,o)):s(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Ai.create=(t,e,n)=>new Ai({left:t,right:e,typeName:z.ZodIntersection,...J(n)});class nn extends re{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.array)return D(r,{code:w.invalid_type,expected:N.array,received:r.parsedType}),Z;if(r.data.length<this._def.items.length)return D(r,{code:w.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Z;!this._def.rest&&r.data.length>this._def.items.length&&(D(r,{code:w.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...r.data].map((o,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new tn(r,o,r.path,a)):null}).filter(o=>!!o);return r.common.async?Promise.all(i).then(o=>ot.mergeArray(n,o)):ot.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new nn({...this._def,rest:e})}}nn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new nn({items:t,typeName:z.ZodTuple,rest:null,...J(e)})};class Si extends re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.object)return D(r,{code:w.invalid_type,expected:N.object,received:r.parsedType}),Z;const s=[],i=this._def.keyType,o=this._def.valueType;for(const a in r.data)s.push({key:i._parse(new tn(r,a,r.path,a)),value:o._parse(new tn(r,r.data[a],r.path,a))});return r.common.async?ot.mergeObjectAsync(n,s):ot.mergeObjectSync(n,s)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof re?new Si({keyType:e,valueType:n,typeName:z.ZodRecord,...J(r)}):new Si({keyType:Ct.create(),valueType:e,typeName:z.ZodRecord,...J(n)})}}class ha extends re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.map)return D(r,{code:w.invalid_type,expected:N.map,received:r.parsedType}),Z;const s=this._def.keyType,i=this._def.valueType,o=[...r.data.entries()].map(([a,c],l)=>({key:s._parse(new tn(r,a,r.path,[l,"key"])),value:i._parse(new tn(r,c,r.path,[l,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of o){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return Z;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(l.value,u.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of o){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return Z;(l.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(l.value,u.value)}return{status:n.value,value:a}}}}ha.create=(t,e,n)=>new ha({valueType:e,keyType:t,typeName:z.ZodMap,...J(n)});class br extends re{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==N.set)return D(r,{code:w.invalid_type,expected:N.set,received:r.parsedType}),Z;const s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(D(r,{code:w.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),n.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(D(r,{code:w.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),n.dirty());const i=this._def.valueType;function o(c){const l=new Set;for(const u of c){if(u.status==="aborted")return Z;u.status==="dirty"&&n.dirty(),l.add(u.value)}return{status:n.value,value:l}}const a=[...r.data.values()].map((c,l)=>i._parse(new tn(r,c,r.path,l)));return r.common.async?Promise.all(a).then(c=>o(c)):o(a)}min(e,n){return new br({...this._def,minSize:{value:e,message:j.toString(n)}})}max(e,n){return new br({...this._def,maxSize:{value:e,message:j.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}br.create=(t,e)=>new br({valueType:t,minSize:null,maxSize:null,typeName:z.ZodSet,...J(e)});class Qr extends re{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==N.function)return D(n,{code:w.invalid_type,expected:N.function,received:n.parsedType}),Z;function r(a,c){return aa({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,oa(),vi].filter(l=>!!l),issueData:{code:w.invalid_arguments,argumentsError:c}})}function s(a,c){return aa({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,oa(),vi].filter(l=>!!l),issueData:{code:w.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},o=n.data;if(this._def.returns instanceof hs){const a=this;return ht(async function(...c){const l=new Nt([]),u=await a._def.args.parseAsync(c,i).catch(m=>{throw l.addIssue(r(c,m)),l}),h=await Reflect.apply(o,this,u);return await a._def.returns._def.type.parseAsync(h,i).catch(m=>{throw l.addIssue(s(h,m)),l})})}else{const a=this;return ht(function(...c){const l=a._def.args.safeParse(c,i);if(!l.success)throw new Nt([r(c,l.error)]);const u=Reflect.apply(o,this,l.data),h=a._def.returns.safeParse(u,i);if(!h.success)throw new Nt([s(u,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Qr({...this._def,args:nn.create(e).rest(mr.create())})}returns(e){return new Qr({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new Qr({args:e||nn.create([]).rest(mr.create()),returns:n||mr.create(),typeName:z.ZodFunction,...J(r)})}}class Ri extends re{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Ri.create=(t,e)=>new Ri({getter:t,typeName:z.ZodLazy,...J(e)});class Ci extends re{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return D(n,{received:n.data,code:w.invalid_literal,expected:this._def.value}),Z}return{status:"valid",value:e.data}}get value(){return this._def.value}}Ci.create=(t,e)=>new Ci({value:t,typeName:z.ZodLiteral,...J(e)});function c_(t,e){return new Qn({values:t,typeName:z.ZodEnum,...J(e)})}class Qn extends re{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return D(n,{expected:pe.joinValues(r),received:n.parsedType,code:w.invalid_type}),Z}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),r=this._def.values;return D(n,{received:n.data,code:w.invalid_enum_value,options:r}),Z}return ht(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return Qn.create(e)}exclude(e){return Qn.create(this.options.filter(n=>!e.includes(n)))}}Qn.create=c_;class Pi extends re{_parse(e){const n=pe.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==N.string&&r.parsedType!==N.number){const s=pe.objectValues(n);return D(r,{expected:pe.joinValues(s),received:r.parsedType,code:w.invalid_type}),Z}if(n.indexOf(e.data)===-1){const s=pe.objectValues(n);return D(r,{received:r.data,code:w.invalid_enum_value,options:s}),Z}return ht(e.data)}get enum(){return this._def.values}}Pi.create=(t,e)=>new Pi({values:t,typeName:z.ZodNativeEnum,...J(e)});class hs extends re{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==N.promise&&n.common.async===!1)return D(n,{code:w.invalid_type,expected:N.promise,received:n.parsedType}),Z;const r=n.parsedType===N.promise?n.data:Promise.resolve(n.data);return ht(r.then(s=>this._def.type.parseAsync(s,{path:n.path,errorMap:n.common.contextualErrorMap})))}}hs.create=(t,e)=>new hs({type:t,typeName:z.ZodPromise,...J(e)});class Mt extends re{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===z.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:r}=this._processInputParams(e),s=this._def.effect||null,i={addIssue:o=>{D(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),s.type==="preprocess"){const o=s.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:o,path:r.path,parent:r})}if(s.type==="refinement"){const o=a=>{const c=s.refinement(a,i);if(r.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?Z:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?Z:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(s.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Ei(o))return o;const a=s.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>Ei(o)?Promise.resolve(s.transform(o.value,i)).then(a=>({status:n.value,value:a})):o);pe.assertNever(s)}}Mt.create=(t,e,n)=>new Mt({schema:t,typeName:z.ZodEffects,effect:e,...J(n)});Mt.createWithPreprocess=(t,e,n)=>new Mt({schema:e,effect:{type:"preprocess",transform:t},typeName:z.ZodEffects,...J(n)});class pn extends re{_parse(e){return this._getType(e)===N.undefined?ht(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}pn.create=(t,e)=>new pn({innerType:t,typeName:z.ZodOptional,...J(e)});class Ar extends re{_parse(e){return this._getType(e)===N.null?ht(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ar.create=(t,e)=>new Ar({innerType:t,typeName:z.ZodNullable,...J(e)});class ki extends re{_parse(e){const{ctx:n}=this._processInputParams(e);let r=n.data;return n.parsedType===N.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}ki.create=(t,e)=>new ki({innerType:t,typeName:z.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...J(e)});class da extends re{_parse(e){const{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},s=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return ca(s)?s.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Nt(r.common.issues)},input:r.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Nt(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}da.create=(t,e)=>new da({innerType:t,typeName:z.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...J(e)});class fa extends re{_parse(e){if(this._getType(e)!==N.nan){const r=this._getOrReturnCtx(e);return D(r,{code:w.invalid_type,expected:N.nan,received:r.parsedType}),Z}return{status:"valid",value:e.data}}}fa.create=t=>new fa({typeName:z.ZodNaN,...J(t)});const MR=Symbol("zod_brand");class l_ extends re{_parse(e){const{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Yi extends re{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?Z:i.status==="dirty"?(n.dirty(),a_(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?Z:s.status==="dirty"?(n.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(e,n){return new Yi({in:e,out:n,typeName:z.ZodPipeline})}}class pa extends re{_parse(e){const n=this._def.innerType._parse(e);return Ei(n)&&(n.value=Object.freeze(n.value)),n}}pa.create=(t,e)=>new pa({innerType:t,typeName:z.ZodReadonly,...J(e)});const u_=(t,e={},n)=>t?us.create().superRefine((r,s)=>{var i,o;if(!t(r)){const a=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,c=(o=(i=a.fatal)!==null&&i!==void 0?i:n)!==null&&o!==void 0?o:!0,l=typeof a=="string"?{message:a}:a;s.addIssue({code:"custom",...l,fatal:c})}}):us.create(),LR={object:Ce.lazycreate};var z;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(z||(z={}));const FR=(t,e={message:`Input not instance of ${t.name}`})=>u_(n=>n instanceof t,e),h_=Ct.create,d_=Kn.create,UR=fa.create,$R=Gn.create,f_=Ti.create,jR=wr.create,BR=la.create,qR=Ii.create,zR=wi.create,HR=us.create,WR=mr.create,KR=En.create,GR=ua.create,QR=Dt.create,ZR=Ce.create,JR=Ce.strictCreate,YR=bi.create,XR=lc.create,eC=Ai.create,tC=nn.create,nC=Si.create,rC=ha.create,sC=br.create,iC=Qr.create,oC=Ri.create,aC=Ci.create,cC=Qn.create,lC=Pi.create,uC=hs.create,gf=Mt.create,hC=pn.create,dC=Ar.create,fC=Mt.createWithPreprocess,pC=Yi.create,mC=()=>h_().optional(),gC=()=>d_().optional(),_C=()=>f_().optional(),yC={string:t=>Ct.create({...t,coerce:!0}),number:t=>Kn.create({...t,coerce:!0}),boolean:t=>Ti.create({...t,coerce:!0}),bigint:t=>Gn.create({...t,coerce:!0}),date:t=>wr.create({...t,coerce:!0})},vC=Z;var Pt=Object.freeze({__proto__:null,defaultErrorMap:vi,setErrorMap:wR,getErrorMap:oa,makeIssue:aa,EMPTY_PATH:bR,addIssueToContext:D,ParseStatus:ot,INVALID:Z,DIRTY:a_,OK:ht,isAborted:xl,isDirty:Nl,isValid:Ei,isAsync:ca,get util(){return pe},get objectUtil(){return kl},ZodParsedType:N,getParsedType:Pn,ZodType:re,ZodString:Ct,ZodNumber:Kn,ZodBigInt:Gn,ZodBoolean:Ti,ZodDate:wr,ZodSymbol:la,ZodUndefined:Ii,ZodNull:wi,ZodAny:us,ZodUnknown:mr,ZodNever:En,ZodVoid:ua,ZodArray:Dt,ZodObject:Ce,ZodUnion:bi,ZodDiscriminatedUnion:lc,ZodIntersection:Ai,ZodTuple:nn,ZodRecord:Si,ZodMap:ha,ZodSet:br,ZodFunction:Qr,ZodLazy:Ri,ZodLiteral:Ci,ZodEnum:Qn,ZodNativeEnum:Pi,ZodPromise:hs,ZodEffects:Mt,ZodTransformer:Mt,ZodOptional:pn,ZodNullable:Ar,ZodDefault:ki,ZodCatch:da,ZodNaN:fa,BRAND:MR,ZodBranded:l_,ZodPipeline:Yi,ZodReadonly:pa,custom:u_,Schema:re,ZodSchema:re,late:LR,get ZodFirstPartyTypeKind(){return z},coerce:yC,any:HR,array:QR,bigint:$R,boolean:f_,date:jR,discriminatedUnion:XR,effect:gf,enum:cC,function:iC,instanceof:FR,intersection:eC,lazy:oC,literal:aC,map:rC,nan:UR,nativeEnum:lC,never:KR,null:zR,nullable:dC,number:d_,object:ZR,oboolean:_C,onumber:gC,optional:hC,ostring:mC,pipeline:pC,preprocess:fC,promise:uC,record:nC,set:sC,strictObject:JR,string:h_,symbol:BR,transformer:gf,tuple:tC,undefined:qR,union:YR,unknown:WR,void:GR,NEVER:vC,ZodIssueCode:w,quotelessJson:IR,ZodError:Nt});const EC=Pt.object({days:Pt.string(),start_time:Pt.string(),end_time:Pt.string()}),TC=Pt.object({name:Pt.string(),timings:Pt.array(EC)}),IC=Pt.object({preferred_max_time_between_classes:Pt.number(),preferred_max_classes_per_day:Pt.number(),classes:Pt.array(TC)}),wC=sn({setup(){const t=on(),e=et(""),n=()=>{navigator.clipboard.writeText(JSON.stringify(t.data))},r=su(()=>{try{return IC.parse(JSON.parse(e.value)),!0}catch{return!1}});return{copyDataToClipboard:n,dataToImport:e,isValidImportData:r,importData:()=>{t.setData(JSON.parse(e.value))}}}}),bC={class:"modal fade",id:"importDataModal",tabindex:"-1"},AC={class:"modal-dialog modal-dialog-centered"},SC={class:"modal-content bg-dark"},RC=g("div",{class:"modal-header"},[g("h1",{class:"modal-title fs-5"},"Import Data"),g("button",{title:"Close Export Data Modal",type:"button",class:"btn-close","data-bs-dismiss":"modal"})],-1),CC={class:"modal-body"},PC=g("h3",null,[Ln("Paste Data Copied From"),g("br"),Ln('"Export Data"')],-1),kC={key:0,class:"text-danger"},xC={class:"d-flex justify-content-center"},NC=g("button",{type:"button",class:"btn btn-secondary large-button-text m-2 w-100","data-bs-dismiss":"modal","data-bs-target":"#importDataModal"},"Close",-1),DC=["disabled"];function OC(t,e,n,r,s,i){return se(),le("div",bC,[g("div",AC,[g("div",SC,[RC,g("div",CC,[PC,Gt(g("input",{type:"text",class:"modifier-input text-center",placeholder:"Data","onUpdate:modelValue":e[0]||(e[0]=o=>t.dataToImport=o)},null,512),[[Fn,t.dataToImport]]),t.dataToImport.length>0&&!t.isValidImportData?(se(),le("h3",kC,"Invalid Data")):St("",!0)]),g("div",xC,[NC,g("button",{type:"button",class:"btn btn-primary large-button-text m-2 w-100","data-bs-dismiss":"modal","data-bs-target":"#importDataModal",disabled:!t.isValidImportData,onClick:e[1]||(e[1]=o=>t.importData())},"Import",8,DC)])])])])}const VC=an(wC,[["render",OC]]);function hh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function p_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MC=p_,m_=new Oi("auth","Firebase",p_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new au("@firebase/auth");function LC(t,...e){ma.logLevel<=fe.WARN&&ma.warn(`Auth (${ms}): ${t}`,...e)}function No(t,...e){ma.logLevel<=fe.ERROR&&ma.error(`Auth (${ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,...e){throw dh(t,...e)}function Jt(t,...e){return dh(t,...e)}function g_(t,e,n){const r=Object.assign(Object.assign({},MC()),{[e]:n});return new Oi("auth","Firebase",r).create(e,{appName:t.name})}function FC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rn(t,"argument-error"),g_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return m_.create(t,...e)}function Q(t,e,...n){if(!t)throw dh(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw No(e),new Error(e)}function Tn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UC(){return _f()==="http:"||_f()==="https:"}function _f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UC()||KE()||"connection"in navigator)?navigator.onLine:!0}function jC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=WE()||GE()}get(){return $C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=new Xi(3e4,6e4);function y_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function eo(t,e,n,r,s={}){return v_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),__.fetch()(E_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function v_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BC),e);try{const s=new HC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw To(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw To(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw To(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw To(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw g_(t,u,l);rn(t,u)}}catch(s){if(s instanceof wn)throw s;rn(t,"network-request-failed",{message:String(s)})}}async function zC(t,e,n,r,s={}){const i=await eo(t,e,n,r,s);return"mfaPendingCredential"in i&&rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function E_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?fh(t.config,s):`${t.config.apiScheme}://${s}`}class HC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),qC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function To(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e){return eo(t,"POST","/v1/accounts:delete",e)}async function KC(t,e){return eo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GC(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=ph(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ws(Uc(s.auth_time)),issuedAtTime:Ws(Uc(s.iat)),expirationTime:Ws(Uc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Uc(t){return Number(t)*1e3}function ph(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const s=Dp(n);return s?JSON.parse(s):(No("Failed to decode base64 JWT payload"),null)}catch(s){return No("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function QC(t){const e=ph(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&ZC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xi(t,KC(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?eP(i.providerUserInfo):[],a=XC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new T_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function YC(t){const e=ut(t);await ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function eP(t){return t.map(e=>{var{providerId:n}=e,r=hh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e){const n=await v_(t,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=E_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",__.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):QC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ni;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=hh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new T_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xi(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GC(this,e)}reload(){return YC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ga(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xi(this,WC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(l=n.createdAt)!==null&&l!==void 0?l:void 0,X=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:te,emailVerified:L,isAnonymous:de,providerData:De,stsTokenManager:Se}=n;Q(te&&Se,e,"internal-error");const ae=Ni.fromJSON(this.name,Se);Q(typeof te=="string",e,"internal-error"),Sn(h,e.name),Sn(p,e.name),Q(typeof L=="boolean",e,"internal-error"),Q(typeof de=="boolean",e,"internal-error"),Sn(m,e.name),Sn(b,e.name),Sn(A,e.name),Sn(C,e.name),Sn(B,e.name),Sn(X,e.name);const ne=new gr({uid:te,auth:e,email:p,emailVerified:L,displayName:h,isAnonymous:de,photoURL:b,phoneNumber:m,tenantId:A,stsTokenManager:ae,createdAt:B,lastLoginAt:X});return De&&Array.isArray(De)&&(ne.providerData=De.map(Re=>Object.assign({},Re))),C&&(ne._redirectEventId=C),ne}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ni;s.updateFromServerResponse(n);const i=new gr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ga(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=new Map;function fn(t){Tn(t instanceof Function,"Expected a class definition");let e=yf.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}I_.type="NONE";const vf=I_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Do(this.userKey,s.apiKey,i),this.fullPersistenceKey=Do("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(fn(vf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||fn(vf);const o=Do(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=gr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(A_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R_(e))return"Blackberry";if(C_(e))return"Webos";if(mh(e))return"Safari";if((e.includes("chrome/")||b_(e))&&!e.includes("edge/"))return"Chrome";if(S_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function w_(t=st()){return/firefox\//i.test(t)}function mh(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function b_(t=st()){return/crios\//i.test(t)}function A_(t=st()){return/iemobile/i.test(t)}function S_(t=st()){return/android/i.test(t)}function R_(t=st()){return/blackberry/i.test(t)}function C_(t=st()){return/webos/i.test(t)}function uc(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nP(t=st()){var e;return uc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rP(){return QE()&&document.documentMode===10}function P_(t=st()){return uc(t)||S_(t)||C_(t)||R_(t)||/windows phone/i.test(t)||A_(t)}function sP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t,e=[]){let n;switch(t){case"Browser":n=Ef(st());break;case"Worker":n=`${Ef(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t,e={}){return eo(t,"GET","/v2/passwordPolicy",y_(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=6;class cP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tf(this),this.idTokenSubscription=new Tf(this),this.beforeStateQueue=new iP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ga(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ut(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oP(this),n=new cP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=k_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hc(t){return ut(t)}class Tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=nT(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uP().appendChild(r)})}function dP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e){const n=lu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ho(i,e??{}))return s;rn(s,"already-initialized")}return n.initialize({options:e})}function pP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mP(t,e,n){const r=hc(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=x_(e),{host:o,port:a}=gP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||_P()}function x_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gP(t){const e=x_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:If(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:If(o)}}}function If(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _P(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e){return zC(t,"POST","/v1/accounts:signInWithIdp",y_(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP="http://localhost";class Sr extends N_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=hh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Sr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:yP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends gh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends to{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends to{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends to{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gr._fromIdTokenResponse(e,r,s),o=wf(r);return new ds({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wf(r);return new ds({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_a.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _a(e,n,r,s)}}function D_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_a._fromErrorAndOperation(t,i,e,r):i})}async function vP(t,e,n=!1){const r=await xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await xi(t,D_(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=ph(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),ds._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e,n=!1){const r="signIn",s=await D_(t,r,e),i=await ds._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function IP(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function wP(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function bP(t,e,n,r){return ut(t).onAuthStateChanged(e,n,r)}function AP(t){return ut(t).signOut()}const ya="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ya,"1"),this.storage.removeItem(ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(){const t=st();return mh(t)||uc(t)}const RP=1e3,CP=10;class V_ extends O_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SP()&&sP(),this.fallbackToPolling=P_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,CP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}V_.type="LOCAL";const PP=V_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_ extends O_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}M_.type="SESSION";const L_=M_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await kP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=_h("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function NP(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function DP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VP(){return F_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="firebaseLocalStorageDb",MP=1,va="firebaseLocalStorage",$_="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fc(t,e){return t.transaction([va],e?"readwrite":"readonly").objectStore(va)}function LP(){const t=indexedDB.deleteDatabase(U_);return new no(t).toPromise()}function Vl(){const t=indexedDB.open(U_,MP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(va,{keyPath:$_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(va)?e(r):(r.close(),await LP(),e(await Vl()))})})}async function bf(t,e,n){const r=fc(t,!0).put({[$_]:e,value:n});return new no(r).toPromise()}async function FP(t,e){const n=fc(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function Af(t,e){const n=fc(t,!0).delete(e);return new no(n).toPromise()}const UP=800,$P=3;class j_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$P)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return F_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(VP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DP(),!this.activeServiceWorker)return;this.sender=new xP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vl();return await bf(e,ya,"1"),await Af(e,ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fc(s,!1).getAll();return new no(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j_.type="LOCAL";const jP=j_;new Xi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t,e){return e?fn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh extends N_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BP(t){return TP(t.auth,new yh(t),t.bypassAuthState)}function qP(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),EP(n,new yh(t),t.bypassAuthState)}async function zP(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),vP(n,new yh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BP;case"linkViaPopup":case"linkViaRedirect":return zP;case"reauthViaPopup":case"reauthViaRedirect":return qP;default:rn(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=new Xi(2e3,1e4);async function WP(t,e,n){const r=hc(t);FC(t,e,gh);const s=B_(r,n);return new ur(r,"signInViaPopup",e,s).executeNotNull()}class ur extends q_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=_h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HP.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP="pendingRedirect",Oo=new Map;class GP extends q_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await QP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QP(t,e){const n=YP(e),r=JP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ZP(t,e){Oo.set(t._key(),e)}function JP(t){return fn(t._redirectPersistence)}function YP(t){return Do(KP,t.config.apiKey,t.name)}async function XP(t,e,n=!1){const r=hc(t),s=B_(r,e),o=await new GP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=10*60*1e3;class tk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!z_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ek&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sf(e))}saveEventToCache(e){this.cachedEventUids.add(Sf(e)),this.lastProcessedEventTime=Date.now()}}function Sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function z_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e={}){return eo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ik=/^https?/;async function ok(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rk(t);for(const n of e)try{if(ak(n))return}catch{}rn(t,"unauthorized-domain")}function ak(t){const e=Ol(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ik.test(n))return!1;if(sk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new Xi(3e4,6e4);function Rf(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lk(t){return new Promise((e,n)=>{var r,s,i;function o(){Rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rf(),n(Jt(t,"network-request-failed"))},timeout:ck.get()})}if(!((s=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)o();else{const a=dP("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},hP(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Vo=null,e})}let Vo=null;function uk(t){return Vo=Vo||lk(t),Vo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=new Xi(5e3,15e3),dk="__/auth/iframe",fk="emulator/auth/iframe",pk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gk(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fh(e,fk):`https://${t.config.authDomain}/${dk}`,r={apiKey:e.apiKey,appName:t.name,v:ms},s=mk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vi(r).slice(1)}`}async function _k(t){const e=await uk(t),n=Yt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:gk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),a=Yt().setTimeout(()=>{i(o)},hk.get());function c(){Yt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vk=500,Ek=600,Tk="_blank",Ik="http://localhost";class Cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wk(t,e,n,r=vk,s=Ek){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yk),{width:r.toString(),height:s.toString(),top:i,left:o}),l=st().toLowerCase();n&&(a=b_(l)?Tk:n),w_(l)&&(e=e||Ik,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,b])=>`${p}${m}=${b},`,"");if(nP(l)&&a!=="_self")return bk(e||"",a),new Cf(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new Cf(h)}function bk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak="__/auth/handler",Sk="emulator/auth/handler",Rk=encodeURIComponent("fac");async function Pf(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ms,eventId:s};if(e instanceof gh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof to){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Rk}=${encodeURIComponent(c)}`:"";return`${Ck(t)}?${Vi(a).slice(1)}${l}`}function Ck({config:t}){return t.emulator?fh(t,Sk):`https://${t.authDomain}/${Ak}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="webStorageSupport";class Pk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L_,this._completeRedirectFn=XP,this._overrideRedirectResult=ZP}async _openPopup(e,n,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Pf(e,n,r,Ol(),s);return wk(e,o,_h())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Pf(e,n,r,Ol(),s);return NP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _k(e),r=new tk(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($c,{type:$c},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$c];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ok(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return P_()||mh()||uc()}}const kk=Pk;var kf="@firebase/auth",xf="1.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Dk(t){ts(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:k_(t)},l=new lP(r,s,i,c);return pP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new yr("auth-internal",e=>{const n=hc(e.getProvider("auth").getImmediate());return(r=>new xk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(kf,xf,Nk(t)),jn(kf,xf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=5*60,Vk=Mp("authIdTokenMaxAge")||Ok;let Nf=null;const Mk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Vk)return;const s=n==null?void 0:n.token;Nf!==s&&(Nf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Lk(t=$p()){const e=lu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fP(t,{popupRedirectResolver:kk,persistence:[jP,PP,L_]}),r=Mp("authTokenSyncURL");if(r){const i=Mk(r);wP(n,i,()=>i(n.currentUser)),IP(n,o=>i(o))}const s=Op("auth");return s&&mP(n,`http://${s}`),n}Dk("Browser");const Fk=t=>(ap("data-v-d27b5843"),t=t(),cp(),t),Uk={class:"bg-dark p-1"},$k=Fk(()=>g("div",{class:"d-flex justify-content-center align-items-center"},[Ln(" Sign In With "),g("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",class:"navbar-image ms-2"})],-1)),jk=[$k],Bk={class:"d-flex justify-content-center align-items-center"},qk=["src"],zk=sn({__name:"UserNavbar",setup(t){const e=on(),n=Lk(),r=new un;Yl(()=>{bP(n,o=>{e.user=o,o!==null?e.startSavesSubscribe():e.stopSavesSubscribe()})}),Xl(()=>{e.stopSavesSubscribe()});const s=()=>{WP(n,r)},i=()=>{AP(n)};return(o,a)=>(se(),le("div",Uk,[Bt(e).user===null?(se(),le("button",{key:0,type:"button",class:"btn btn-dark btn-lg w-100",onClick:a[0]||(a[0]=c=>s())},jk)):(se(),le("button",{key:1,type:"button",class:"btn btn-dark btn-lg w-100",onClick:a[1]||(a[1]=c=>i())},[g("div",Bk,[Ln(" Sign Out From "+gt(Bt(e).user.displayName)+" ",1),g("img",{src:Bt(e).user.photoURL||void 0,class:"navbar-image ms-2"},null,8,qk)])]))]))}});const Hk=an(zk,[["__scopeId","data-v-d27b5843"]]),Wk=sn({components:{Course:NS,SaveDataModal:BS,LoadDataModal:nR,Spinner:oR,ExportDataModal:TR,ImportDataModal:VC,UserNavbar:Hk},setup(){const t=on();Yl(()=>{t.updateLocalStorageKeys()});const e=et(null),n=et(null),r=et(!1),s=et(null);return{mainStore:t,generateSchedule:()=>{r.value=!0,fetch("https://farrukhanwar.pythonanywhere.com/classscheduler/data",{method:"POST",headers:{"Content-Type":"application/json; charset = utf-8"},body:JSON.stringify(t.data)}).then(c=>c.json()).then(c=>{var l;e.value=c,n.value=((l=e.value)==null?void 0:l.code)||500}).catch(()=>{n.value=500}).finally(()=>{r.value=!1,Zl(()=>{var c;(c=s.value)==null||c.scrollIntoView({behavior:"smooth"})})})},responseData:e,sortScheduleViewsInOrder:a=>{const c=new Map;return c.set("Monday",a.Monday),c.set("Tuesday",a.Tuesday),c.set("Wednesday",a.Wednesday),c.set("Thursday",a.Thursday),c.set("Friday",a.Friday),c},coursesBottomDivRef:s,responseCode:n,isFetchingData:r}}});const Kk=g("h2",null,"Preferred Maximum Time Between Courses",-1),Gk=g("h2",null,"Preferred Maximum Courses Per Day",-1),Qk=g("h2",null,"Courses",-1),Zk={ref:"coursesBottomDivRef"},Jk={class:"container-fluid fixed-bottom bg-dark pb-2"},Yk=g("button",{class:"navbar-toggler d-md-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#bottom-navbar"},[g("i",{class:"bi bi-list"})],-1),Xk={class:"collapse navbar-collapse show d-md-block",id:"bottom-navbar"},ex={class:"row align-items-center"},tx=g("div",{class:"col-12 col-md-2 order-md-1 mt-2"},[g("button",{type:"button",title:"Import Data",class:"btn btn-secondary large-button-text w-100","data-bs-toggle":"modal","data-bs-target":"#importDataModal"},"Import Data")],-1),nx=g("div",{class:"col-12 col-md-2 order-md-2 mt-2"},[g("button",{type:"button",title:"Load Data",class:"btn btn-info large-button-text text-white w-100","data-bs-toggle":"modal","data-bs-target":"#loadDataModal"},"Load Data")],-1),rx={class:"col-12 col-md-4 order-md-3 order-last mt-2"},sx=["disabled"],ix={class:"d-flex justify-content-center align-items-center"},ox=g("div",{class:"col-12 col-md-2 order-md-4 mt-2"},[g("button",{type:"button",title:"Save Data",class:"btn btn-info large-button-text text-white w-100","data-bs-toggle":"modal","data-bs-target":"#saveDataModal"},"Save Data")],-1),ax=g("div",{class:"col-12 col-md-2 order-md-5 mt-2"},[g("button",{type:"button",title:"Export Data",class:"btn btn-secondary large-button-text w-100","data-bs-toggle":"modal","data-bs-target":"#exportDataModal"},"Export Data")],-1),cx={key:0},lx={key:0},ux=g("br",null,null,-1),hx={key:1},dx={key:2},fx=g("h2",{class:"text-white-50 mt-2"},"Best Schedule (Course View)",-1),px={class:"course-name"},mx={class:"fst-italic"},gx=g("h2",{class:"text-white-50 mt-2"},"Best Schedule (Daily View)",-1),_x={key:0},yx={class:"course-name"},vx={class:"fst-italic"},Ex={class:"mt-2"},Tx=g("div",{class:"bottom-navbar-spacer"},null,-1);function Ix(t,e,n,r,s,i){const o=jt("SaveDataModal"),a=jt("LoadDataModal"),c=jt("ExportDataModal"),l=jt("ImportDataModal"),u=jt("UserNavbar"),h=jt("Course"),p=jt("Spinner");return se(),le(je,null,[ct(o),ct(a),ct(c),ct(l),ct(u),Kk,Gt(g("input",{type:"number",title:"Enter a positive integer or decimal value representing hours",placeholder:"0",class:"text-center modifier-input",min:"0",pattern:"\\d+","onUpdate:modelValue":e[0]||(e[0]=m=>t.mainStore.data.preferred_max_time_between_classes=m)},null,512),[[Fn,t.mainStore.data.preferred_max_time_between_classes]]),Gk,Gt(g("input",{type:"number",class:"text-center modifier-input",min:"0",placeholder:"0","onUpdate:modelValue":e[1]||(e[1]=m=>t.mainStore.data.preferred_max_classes_per_day=m)},null,512),[[Fn,t.mainStore.data.preferred_max_classes_per_day]]),Qk,(se(!0),le(je,null,$r(t.mainStore.data.classes,(m,b)=>(se(),ei(h,{"course-data":m,"course-index":b,key:m.name+"-"+b},null,8,["course-data","course-index"]))),128)),g("div",Zk,null,512),g("div",Jk,[Yk,g("div",Xk,[g("div",ex,[tx,nx,g("div",rx,[g("button",{type:"button",title:"Generate Schedule",class:"btn btn-primary large-button-text w-100",disabled:t.isFetchingData,onClick:e[2]||(e[2]=m=>t.generateSchedule())},[g("div",ix,[Ln(" Generate Schedule "),t.isFetchingData?(se(),ei(p,{key:0,class:"d-inline-block ms-2"})):St("",!0)])],8,sx)]),ox,ax])])]),t.isFetchingData?St("",!0):(se(),le("div",cx,[t.responseCode===201?(se(),le("h1",lx,[Ln("No Schedules Found Meeting Criteria"),ux,Ln("Please Change Criteria And Try Again")])):t.responseCode===500?(se(),le("h1",hx,"Internal Server Error")):t.responseCode===200&&t.responseData?(se(),le("div",dx,[fx,(se(!0),le(je,null,$r(t.responseData.class_view,(m,b)=>(se(),le("div",{class:"bg-dark py-2 mt-2 mx-4 rounded-5",key:m.name+"-"+b},[g("h3",px,gt(m.name),1),g("h4",mx,gt(m.days)+": "+gt(m.start_time)+" - "+gt(m.end_time),1)]))),128)),gx,(se(!0),le(je,null,$r(t.sortScheduleViewsInOrder(t.responseData.schedule_view),([m,b])=>(se(),le("div",{key:m},[b.length>0?(se(),le("div",_x,[g("h3",null,gt(m),1),(se(!0),le(je,null,$r(b,(A,C)=>(se(),le("div",{class:"bg-dark py-2 mt-2 mx-4 rounded-5",key:m+"-"+A.name+"-"+C},[g("h3",yx,gt(A.name),1),g("h4",vx,gt(A.start_time)+" - "+gt(A.end_time),1)]))),128))])):St("",!0)]))),128)),g("h3",Ex,"Total Time Between Classes: "+gt(t.responseData.total_time_between_classes),1)])):St("",!0)])),Tx],64)}const wx=an(Wk,[["render",Ix]]);var bx="firebase",Ax="10.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(bx,Ax,"app");const Sx={apiKey:"AIzaSyAMJoIZWhgbZsDdP0HIuNAx8R_yAP837dQ",authDomain:"vuecoursescheduler.firebaseapp.com",projectId:"vuecoursescheduler",storageBucket:"vuecoursescheduler.appspot.com",messagingSenderId:"5969263684",appId:"1:5969263684:web:ab8fed48a7d11acfe09011",measurementId:"G-657B3B46TQ"},Rx=Up(Sx);async function Cx(){try{const t=()=>Z_(()=>import("./index.esm-76e3746b.js"),[]),{getAnalytics:e}=await t();e(Rx)}catch{console.log("Couldn't load analytics.")}}Cx();const H_=SE(wx);H_.use(PE());H_.mount("#app");export{yr as C,Oi as E,wn as F,au as L,ts as _,lu as a,$p as b,Px as c,Ho as d,ZE as e,kx as f,ut as g,KE as i,jn as r,JE as v};
