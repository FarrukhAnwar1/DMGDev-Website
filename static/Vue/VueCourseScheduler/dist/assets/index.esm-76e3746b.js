import{r as S,_ as E,C,a as P,E as se,F as oe,g as T,b as je,d as Be,i as ce,c as ue,e as le,v as de,L as xe,f as Y}from"./index-858a8d58.js";const qe=(e,t)=>t.some(n=>e instanceof n);let J,X;function Ve(){return J||(J=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ue(){return X||(X=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fe=new WeakMap,N=new WeakMap,pe=new WeakMap,O=new WeakMap,U=new WeakMap;function Ge(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n(m(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&fe.set(n,e)}).catch(()=>{}),U.set(t,e),t}function ze(e){if(N.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});N.set(e,t)}let j={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return N.get(e);if(t==="objectStoreNames")return e.objectStoreNames||pe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ke(e){j=e(j)}function We(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(M(this),t,...n);return pe.set(r,t.sort?t.sort():[t]),m(r)}:Ue().includes(e)?function(...t){return e.apply(M(this),t),m(fe.get(this))}:function(...t){return m(e.apply(M(this),t))}}function He(e){return typeof e=="function"?We(e):(e instanceof IDBTransaction&&ze(e),qe(e,Ve())?new Proxy(e,j):e)}function m(e){if(e instanceof IDBRequest)return Ge(e);if(O.has(e))return O.get(e);const t=He(e);return t!==e&&(O.set(e,t),U.set(t,e)),t}const M=e=>U.get(e);function Ye(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(e,t),o=m(s);return r&&s.addEventListener("upgradeneeded",c=>{r(m(s.result),c.oldVersion,c.newVersion,m(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),o.then(c=>{a&&c.addEventListener("close",()=>a()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const Je=["get","getKey","getAll","getAllKeys","count"],Xe=["put","add","delete","clear"],F=new Map;function Q(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(F.get(t))return F.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Xe.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Je.includes(n)))return;const a=async function(s,...o){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),i&&c.done]))[0]};return F.set(t,a),a}Ke(e=>({...e,get:(t,n,r)=>Q(t,n)||e.get(t,n,r),has:(t,n)=>!!Q(t,n)||e.has(t,n)}));const he="@firebase/installations",G="0.6.4";/**
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
 */const ge=1e4,me=`w:${G}`,we="FIS_v2",Qe="https://firebaseinstallations.googleapis.com/v1",Ze=60*60*1e3,et="installations",tt="Installations";/**
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
 */const nt={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},y=new se(et,tt,nt);function Ie(e){return e instanceof oe&&e.code.includes("request-failed")}/**
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
 */function ye({projectId:e}){return`${Qe}/projects/${e}/installations`}function be(e){return{token:e.token,requestStatus:2,expiresIn:it(e.expiresIn),creationTime:Date.now()}}async function Te(e,t){const r=(await t.json()).error;return y.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ve({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function rt(e,{refreshToken:t}){const n=ve(e);return n.append("Authorization",at(t)),n}async function Ae(e){const t=await e();return t.status>=500&&t.status<600?e():t}function it(e){return Number(e.replace("s","000"))}function at(e){return`${we} ${e}`}/**
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
 */async function st({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ye(e),i=ve(e),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:we,appId:e.appId,sdkVersion:me},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await Ae(()=>fetch(r,o));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:be(u.authToken)}}else throw await Te("Create Installation",c)}/**
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
 */function Se(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function ot(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ct=/^[cdef][\w-]{21}$/,B="";function ut(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=lt(e);return ct.test(n)?n:B}catch{return B}}function lt(e){return ot(e).substr(0,22)}/**
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
 */function R(e){return`${e.appName}!${e.appId}`}/**
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
 */const Ee=new Map;function Ce(e,t){const n=R(e);De(n,t),dt(n,t)}function De(e,t){const n=Ee.get(e);if(n)for(const r of n)r(t)}function dt(e,t){const n=ft();n&&n.postMessage({key:e,fid:t}),pt()}let I=null;function ft(){return!I&&"BroadcastChannel"in self&&(I=new BroadcastChannel("[Firebase] FID Change"),I.onmessage=e=>{De(e.data.key,e.data.fid)}),I}function pt(){Ee.size===0&&I&&(I.close(),I=null)}/**
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
 */const ht="firebase-installations-database",gt=1,b="firebase-installations-store";let L=null;function z(){return L||(L=Ye(ht,gt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(b)}}})),L}async function D(e,t){const n=R(e),i=(await z()).transaction(b,"readwrite"),a=i.objectStore(b),s=await a.get(n);return await a.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Ce(e,t.fid),t}async function ke(e){const t=R(e),r=(await z()).transaction(b,"readwrite");await r.objectStore(b).delete(t),await r.done}async function _(e,t){const n=R(e),i=(await z()).transaction(b,"readwrite"),a=i.objectStore(b),s=await a.get(n),o=t(s);return o===void 0?await a.delete(n):await a.put(o,n),await i.done,o&&(!s||s.fid!==o.fid)&&Ce(e,o.fid),o}/**
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
 */async function K(e){let t;const n=await _(e.appConfig,r=>{const i=mt(r),a=wt(e,i);return t=a.registrationPromise,a.installationEntry});return n.fid===B?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function mt(e){const t=e||{fid:ut(),registrationStatus:0};return Pe(t)}function wt(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=It(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yt(e)}:{installationEntry:t}}async function It(e,t){try{const n=await st(e,t);return D(e.appConfig,n)}catch(n){throw Ie(n)&&n.customData.serverCode===409?await ke(e.appConfig):await D(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function yt(e){let t=await Z(e.appConfig);for(;t.registrationStatus===1;)await Se(100),t=await Z(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await K(e);return r||n}return t}function Z(e){return _(e,t=>{if(!t)throw y.create("installation-not-found");return Pe(t)})}function Pe(e){return bt(e)?{fid:e.fid,registrationStatus:0}:e}function bt(e){return e.registrationStatus===1&&e.registrationTime+ge<Date.now()}/**
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
 */async function Tt({appConfig:e,heartbeatServiceProvider:t},n){const r=vt(e,n),i=rt(e,n),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:me,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await Ae(()=>fetch(r,o));if(c.ok){const u=await c.json();return be(u)}else throw await Te("Generate Auth Token",c)}function vt(e,{fid:t}){return`${ye(e)}/${t}/authTokens:generate`}/**
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
 */async function W(e,t=!1){let n;const r=await _(e.appConfig,a=>{if(!Re(a))throw y.create("not-registered");const s=a.authToken;if(!t&&Et(s))return a;if(s.requestStatus===1)return n=At(e,t),a;{if(!navigator.onLine)throw y.create("app-offline");const o=Dt(a);return n=St(e,o),o}});return n?await n:r.authToken}async function At(e,t){let n=await ee(e.appConfig);for(;n.authToken.requestStatus===1;)await Se(100),n=await ee(e.appConfig);const r=n.authToken;return r.requestStatus===0?W(e,t):r}function ee(e){return _(e,t=>{if(!Re(t))throw y.create("not-registered");const n=t.authToken;return kt(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function St(e,t){try{const n=await Tt(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await D(e.appConfig,r),n}catch(n){if(Ie(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ke(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await D(e.appConfig,r)}throw n}}function Re(e){return e!==void 0&&e.registrationStatus===2}function Et(e){return e.requestStatus===2&&!Ct(e)}function Ct(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ze}function Dt(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function kt(e){return e.requestStatus===1&&e.requestTime+ge<Date.now()}/**
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
 */async function Pt(e){const t=e,{installationEntry:n,registrationPromise:r}=await K(t);return r?r.catch(console.error):W(t).catch(console.error),n.fid}/**
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
 */async function Rt(e,t=!1){const n=e;return await _t(n),(await W(n,t)).token}async function _t(e){const{registrationPromise:t}=await K(e);t&&await t}/**
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
 */function Ot(e){if(!e||!e.options)throw $("App Configuration");if(!e.name)throw $("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw $(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function $(e){return y.create("missing-app-config-values",{valueName:e})}/**
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
 */const _e="installations",Mt="installations-internal",Ft=e=>{const t=e.getProvider("app").getImmediate(),n=Ot(t),r=P(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Lt=e=>{const t=e.getProvider("app").getImmediate(),n=P(t,_e).getImmediate();return{getId:()=>Pt(n),getToken:i=>Rt(n,i)}};function $t(){E(new C(_e,Ft,"PUBLIC")),E(new C(Mt,Lt,"PRIVATE"))}$t();S(he,G);S(he,G,"esm2017");/**
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
 */const k="analytics",Nt="firebase_id",jt="origin",Bt=60*1e3,xt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",H="https://www.googletagmanager.com/gtag/js";/**
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
 */const l=new xe("@firebase/analytics");/**
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
 */const qt={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},d=new se("analytics","Analytics",qt);/**
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
 */function Vt(e){if(!e.startsWith(H)){const t=d.create("invalid-gtag-resource",{gtagURL:e});return l.warn(t.message),""}return e}function Oe(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Ut(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Gt(e,t){const n=Ut("firebase-js-sdk-policy",{createScriptURL:Vt}),r=document.createElement("script"),i=`${H}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function zt(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Kt(e,t,n,r,i,a){const s=r[i];try{if(s)await t[s];else{const c=(await Oe(n)).find(u=>u.measurementId===i);c&&await t[c.appId]}}catch(o){l.error(o)}e("config",i,a)}async function Wt(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const o=await Oe(n);for(const c of s){const u=o.find(w=>w.measurementId===c),f=u&&t[u.appId];if(f)a.push(f);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(a){l.error(a)}}function Ht(e,t,n,r){async function i(a,...s){try{if(a==="event"){const[o,c]=s;await Wt(e,t,n,o,c)}else if(a==="config"){const[o,c]=s;await Kt(e,t,n,r,o,c)}else if(a==="consent"){const[o]=s;e("consent","update",o)}else if(a==="get"){const[o,c,u]=s;e("get",o,c,u)}else if(a==="set"){const[o]=s;e("set",o)}else e(a,...s)}catch(o){l.error(o)}}return i}function Yt(e,t,n,r,i){let a=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=Ht(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}function Jt(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(H)&&n.src.includes(e))return n;return null}/**
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
 */const Xt=30,Qt=1e3;class Zt{constructor(t={},n=Qt){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Me=new Zt;function en(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function tn(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:en(r)},a=xt.replace("{app-id}",n),s=await fetch(a,i);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw d.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function nn(e,t=Me,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw d.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw d.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new sn;return setTimeout(async()=>{o.abort()},n!==void 0?n:Bt),Fe({appId:r,apiKey:i,measurementId:a},s,o,t)}async function Fe(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Me){var a;const{appId:s,measurementId:o}=e;try{await rn(r,t)}catch(c){if(o)return l.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const c=await tn(e);return i.deleteThrottleMetadata(s),c}catch(c){const u=c;if(!an(u)){if(i.deleteThrottleMetadata(s),o)return l.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw c}const f=Number((a=u==null?void 0:u.customData)===null||a===void 0?void 0:a.httpStatus)===503?Y(n,i.intervalMillis,Xt):Y(n,i.intervalMillis),w={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,w),l.debug(`Calling attemptFetch again in ${f} millis`),Fe(e,w,r,i)}}function rn(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),r(d.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function an(e){if(!(e instanceof oe)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class sn{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
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
 */let x;async function on(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const a=await t,s=Object.assign(Object.assign({},r),{send_to:a});e("event",n,s)}}async function cn(e,t,n,r){if(r&&r.global)return e("set",{screen_name:n}),Promise.resolve();{const i=await t;e("config",i,{update:!0,screen_name:n})}}async function un(e,t,n,r){if(r&&r.global)return e("set",{user_id:n}),Promise.resolve();{const i=await t;e("config",i,{update:!0,user_id:n})}}async function ln(e,t,n,r){if(r&&r.global){const i={};for(const a of Object.keys(n))i[`user_properties.${a}`]=n[a];return e("set",i),Promise.resolve()}else{const i=await t;e("config",i,{update:!0,user_properties:n})}}async function dn(e,t){const n=await t;return new Promise((r,i)=>{e("get",n,"client_id",a=>{a||i(d.create("no-client-id")),r(a)})})}async function fn(e,t){const n=await e;window[`ga-disable-${n}`]=!t}let q;function Le(e){q=e}function $e(e){x=e}/**
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
 */async function pn(){if(le())try{await de()}catch(e){return l.warn(d.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return l.warn(d.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hn(e,t,n,r,i,a,s){var o;const c=nn(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&l.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>l.error(g)),t.push(c);const u=pn().then(g=>{if(g)return r.getId()}),[f,w]=await Promise.all([c,u]);Jt(a)||Gt(a,f.measurementId),q&&(i("consent","default",q),Le(void 0)),i("js",new Date);const v=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return v[jt]="firebase",v.update=!0,w!=null&&(v[Nt]=w),i("config",f.measurementId,v),x&&(i("set",x),$e(void 0)),f.measurementId}/**
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
 */class gn{constructor(t){this.app=t}_delete(){return delete p[this.app.options.appId],Promise.resolve()}}let p={},te=[];const ne={};let A="dataLayer",Ne="gtag",re,h,V=!1;function vn(e){if(V)throw d.create("already-initialized");e.dataLayerName&&(A=e.dataLayerName),e.gtagName&&(Ne=e.gtagName)}function mn(){const e=[];if(ce()&&e.push("This is a browser extension environment."),ue()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=d.create("invalid-analytics-context",{errorInfo:t});l.warn(n.message)}}function wn(e,t,n){mn();const r=e.options.appId;if(!r)throw d.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)l.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw d.create("no-api-key");if(p[r]!=null)throw d.create("already-exists",{id:r});if(!V){zt(A);const{wrappedGtag:a,gtagCore:s}=Yt(p,te,ne,A,Ne);h=a,re=s,V=!0}return p[r]=hn(e,te,ne,t,re,A,n),new gn(e)}function An(e=je()){e=T(e);const t=P(e,k);return t.isInitialized()?t.getImmediate():In(e)}function In(e,t={}){const n=P(e,k);if(n.isInitialized()){const i=n.getImmediate();if(Be(t,n.getOptions()))return i;throw d.create("already-initialized")}return n.initialize({options:t})}async function Sn(){if(ce()||!ue()||!le())return!1;try{return await de()}catch{return!1}}function En(e,t,n){e=T(e),cn(h,p[e.app.options.appId],t,n).catch(r=>l.error(r))}async function Cn(e){return e=T(e),dn(h,p[e.app.options.appId])}function Dn(e,t,n){e=T(e),un(h,p[e.app.options.appId],t,n).catch(r=>l.error(r))}function kn(e,t,n){e=T(e),ln(h,p[e.app.options.appId],t,n).catch(r=>l.error(r))}function Pn(e,t){e=T(e),fn(p[e.app.options.appId],t).catch(n=>l.error(n))}function Rn(e){h?h("set",e):$e(e)}function yn(e,t,n,r){e=T(e),on(h,p[e.app.options.appId],t,n,r).catch(i=>l.error(i))}function _n(e){h?h("consent","update",e):Le(e)}const ie="@firebase/analytics",ae="0.10.0";function bn(){E(new C(k,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return wn(r,i,n)},"PUBLIC")),E(new C("analytics-internal",e,"PRIVATE")),S(ie,ae),S(ie,ae,"esm2017");function e(t){try{const n=t.getProvider(k).getImmediate();return{logEvent:(r,i,a)=>yn(n,r,i,a)}}catch(n){throw d.create("interop-component-reg-failed",{reason:n})}}}bn();export{An as getAnalytics,Cn as getGoogleAnalyticsClientId,In as initializeAnalytics,Sn as isSupported,yn as logEvent,Pn as setAnalyticsCollectionEnabled,_n as setConsent,En as setCurrentScreen,Rn as setDefaultEventParameters,Dn as setUserId,kn as setUserProperties,vn as settings};
