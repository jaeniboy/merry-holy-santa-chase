var fu=Object.defineProperty;var pu=(n,t,e)=>t in n?fu(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var As=(n,t,e)=>pu(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function Q(){}function vr(n,t){for(const e in t)n[e]=t[e];return n}function mu(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function Ha(n){return n()}function Uo(){return Object.create(null)}function de(n){n.forEach(Ha)}function Fr(n){return typeof n=="function"}function Ot(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function gu(n){return Object.keys(n).length===0}function Ga(n,...t){if(n==null){for(const r of t)r(void 0);return Q}const e=n.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function Fe(n){let t;return Ga(n,e=>t=e)(),t}function Bo(n){return n??""}function Ka(n){return n&&Fr(n.destroy)?n.destroy:Q}function B(n,t){n.appendChild(t)}function et(n,t,e){n.insertBefore(t,e||null)}function tt(n){n.parentNode&&n.parentNode.removeChild(n)}function Wa(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function j(n){return document.createElement(n)}function ae(n){return document.createTextNode(n)}function ot(){return ae(" ")}function oi(){return ae("")}function Ue(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function $o(n){return function(t){return t.preventDefault(),n.call(this,t)}}function K(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function _u(n){return Array.from(n.childNodes)}function Tr(n,t){t=""+t,n.data!==t&&(n.data=t)}function yu(n,t,e,r){n.style.setProperty(t,e,"")}function Eu(n,t,{bubbles:e=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:t,bubbles:e,cancelable:r})}function wr(n,t){return new n(t)}let Pn;function Ht(n){Pn=n}function Ur(){if(!Pn)throw new Error("Function called outside component initialization");return Pn}function vu(n){Ur().$$.after_update.push(n)}function Tu(n){Ur().$$.on_destroy.push(n)}function wu(){const n=Ur();return(t,e,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[t];if(s){const o=Eu(t,e,{cancelable:r});return s.slice().forEach(a=>{a.call(n,o)}),!o.defaultPrevented}return!0}}function jo(n,t){const e=n.$$.callbacks[t.type];e&&e.slice().forEach(r=>r.call(this,t))}const xe=[],Os=[];let Be=[];const qo=[],Qa=Promise.resolve();let Ls=!1;function Xa(){Ls||(Ls=!0,Qa.then(ai))}function Ya(){return Xa(),Qa}function Fs(n){Be.push(n)}const Rs=new Set;let ke=0;function ai(){if(ke!==0)return;const n=Pn;do{try{for(;ke<xe.length;){const t=xe[ke];ke++,Ht(t),Iu(t.$$)}}catch(t){throw xe.length=0,ke=0,t}for(Ht(null),xe.length=0,ke=0;Os.length;)Os.pop()();for(let t=0;t<Be.length;t+=1){const e=Be[t];Rs.has(e)||(Rs.add(e),e())}Be.length=0}while(xe.length);for(;qo.length;)qo.pop()();Ls=!1,Rs.clear(),Ht(n)}function Iu(n){if(n.fragment!==null){n.update(),de(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(Fs)}}function Au(n){const t=[],e=[];Be.forEach(r=>n.indexOf(r)===-1?t.push(r):e.push(r)),e.forEach(r=>r()),Be=t}const pr=new Set;let Ee;function Br(){Ee={r:0,c:[],p:Ee}}function $r(){Ee.r||de(Ee.c),Ee=Ee.p}function Ct(n,t){n&&n.i&&(pr.delete(n),n.i(t))}function Dt(n,t,e,r){if(n&&n.o){if(pr.has(n))return;pr.add(n),Ee.c.push(()=>{pr.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}else r&&r()}function Ru(n,t){const e=t.token={};function r(s,o,a,l){if(t.token!==e)return;t.resolved=l;let u=t.ctx;a!==void 0&&(u=u.slice(),u[a]=l);const d=s&&(t.current=s)(u);let p=!1;t.block&&(t.blocks?t.blocks.forEach((v,w)=>{w!==o&&v&&(Br(),Dt(v,1,1,()=>{t.blocks[w]===v&&(t.blocks[w]=null)}),$r())}):t.block.d(1),d.c(),Ct(d,1),d.m(t.mount(),t.anchor),p=!0),t.block=d,t.blocks&&(t.blocks[o]=d),p&&ai()}if(mu(n)){const s=Ur();if(n.then(o=>{Ht(s),r(t.then,1,t.value,o),Ht(null)},o=>{if(Ht(s),r(t.catch,2,t.error,o),Ht(null),!t.hasCatch)throw o}),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,n),!0;t.resolved=n}}function bu(n,t,e){const r=t.slice(),{resolved:s}=n;n.current===n.then&&(r[n.value]=s),n.current===n.catch&&(r[n.error]=s),n.block.p(r,e)}function Ir(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ar(n,t){const e={},r={},s={$$scope:1};let o=n.length;for(;o--;){const a=n[o],l=t[o];if(l){for(const u in a)u in l||(r[u]=1);for(const u in l)s[u]||(e[u]=l[u],s[u]=1);n[o]=l}else for(const u in a)s[u]=1}for(const a in r)a in e||(e[a]=void 0);return e}function Rr(n){return typeof n=="object"&&n!==null?n:{}}function ce(n){n&&n.c()}function Kt(n,t,e){const{fragment:r,after_update:s}=n.$$;r&&r.m(t,e),Fs(()=>{const o=n.$$.on_mount.map(Ha).filter(Fr);n.$$.on_destroy?n.$$.on_destroy.push(...o):de(o),n.$$.on_mount=[]}),s.forEach(Fs)}function Wt(n,t){const e=n.$$;e.fragment!==null&&(Au(e.after_update),de(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Su(n,t){n.$$.dirty[0]===-1&&(xe.push(n),Xa(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function $t(n,t,e,r,s,o,a=null,l=[-1]){const u=Pn;Ht(n);const d=n.$$={fragment:null,ctx:[],props:o,update:Q,not_equal:s,bound:Uo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Uo(),dirty:l,skip_bound:!1,root:t.target||u.$$.root};a&&a(d.root);let p=!1;if(d.ctx=e?e(n,t.props||{},(v,w,...R)=>{const S=R.length?R[0]:w;return d.ctx&&s(d.ctx[v],d.ctx[v]=S)&&(!d.skip_bound&&d.bound[v]&&d.bound[v](S),p&&Su(n,v)),w}):[],d.update(),p=!0,de(d.before_update),d.fragment=r?r(d.ctx):!1,t.target){if(t.hydrate){const v=_u(t.target);d.fragment&&d.fragment.l(v),v.forEach(tt)}else d.fragment&&d.fragment.c();t.intro&&Ct(n.$$.fragment),Kt(n,t.target,t.anchor),ai()}Ht(u)}class jt{constructor(){As(this,"$$");As(this,"$$set")}$destroy(){Wt(this,1),this.$destroy=Q}$on(t,e){if(!Fr(e))return Q;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!gu(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Pu="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Pu);const Ne=[];function Ja(n,t){return{subscribe:ci(n,t).subscribe}}function ci(n,t=Q){let e;const r=new Set;function s(l){if(Ot(n,l)&&(n=l,e)){const u=!Ne.length;for(const d of r)d[1](),Ne.push(d,n);if(u){for(let d=0;d<Ne.length;d+=2)Ne[d][0](Ne[d+1]);Ne.length=0}}}function o(l){s(l(n))}function a(l,u=Q){const d=[l,u];return r.add(d),r.size===1&&(e=t(s,o)||Q),l(n),()=>{r.delete(d),r.size===0&&e&&(e(),e=null)}}return{set:s,update:o,subscribe:a}}function Za(n,t,e){const r=!Array.isArray(n),s=r?[n]:n;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=t.length<2;return Ja(e,(a,l)=>{let u=!1;const d=[];let p=0,v=Q;const w=()=>{if(p)return;v();const S=t(r?d[0]:d,a,l);o?a(S):v=Fr(S)?S:Q},R=s.map((S,D)=>Ga(S,P=>{d[D]=P,p&=~(1<<D),u&&w()},()=>{p|=1<<D}));return u=!0,w(),function(){de(R),v(),u=!1}})}function Cu(n,t){if(n instanceof RegExp)return{keys:!1,pattern:n};var e,r,s,o,a=[],l="",u=n.split("/");for(u[0]||u.shift();s=u.shift();)e=s[0],e==="*"?(a.push("wild"),l+="/(.*)"):e===":"?(r=s.indexOf("?",1),o=s.indexOf(".",1),a.push(s.substring(1,~r?r:~o?o:s.length)),l+=~r&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(l+=(~r?"?":"")+"\\"+s.substring(o))):l+="/"+s;return{keys:a,pattern:new RegExp("^"+l+"/?$","i")}}function Vu(n){let t,e,r;const s=[n[2]];var o=n[0];function a(l,u){let d={};for(let p=0;p<s.length;p+=1)d=vr(d,s[p]);return u!==void 0&&u&4&&(d=vr(d,Ar(s,[Rr(l[2])]))),{props:d}}return o&&(t=wr(o,a(n)),t.$on("routeEvent",n[7])),{c(){t&&ce(t.$$.fragment),e=oi()},m(l,u){t&&Kt(t,l,u),et(l,e,u),r=!0},p(l,u){if(u&1&&o!==(o=l[0])){if(t){Br();const d=t;Dt(d.$$.fragment,1,0,()=>{Wt(d,1)}),$r()}o?(t=wr(o,a(l,u)),t.$on("routeEvent",l[7]),ce(t.$$.fragment),Ct(t.$$.fragment,1),Kt(t,e.parentNode,e)):t=null}else if(o){const d=u&4?Ar(s,[Rr(l[2])]):{};t.$set(d)}},i(l){r||(t&&Ct(t.$$.fragment,l),r=!0)},o(l){t&&Dt(t.$$.fragment,l),r=!1},d(l){l&&tt(e),t&&Wt(t,l)}}}function Du(n){let t,e,r;const s=[{params:n[1]},n[2]];var o=n[0];function a(l,u){let d={};for(let p=0;p<s.length;p+=1)d=vr(d,s[p]);return u!==void 0&&u&6&&(d=vr(d,Ar(s,[u&2&&{params:l[1]},u&4&&Rr(l[2])]))),{props:d}}return o&&(t=wr(o,a(n)),t.$on("routeEvent",n[6])),{c(){t&&ce(t.$$.fragment),e=oi()},m(l,u){t&&Kt(t,l,u),et(l,e,u),r=!0},p(l,u){if(u&1&&o!==(o=l[0])){if(t){Br();const d=t;Dt(d.$$.fragment,1,0,()=>{Wt(d,1)}),$r()}o?(t=wr(o,a(l,u)),t.$on("routeEvent",l[6]),ce(t.$$.fragment),Ct(t.$$.fragment,1),Kt(t,e.parentNode,e)):t=null}else if(o){const d=u&6?Ar(s,[u&2&&{params:l[1]},u&4&&Rr(l[2])]):{};t.$set(d)}},i(l){r||(t&&Ct(t.$$.fragment,l),r=!0)},o(l){t&&Dt(t.$$.fragment,l),r=!1},d(l){l&&tt(e),t&&Wt(t,l)}}}function ku(n){let t,e,r,s;const o=[Du,Vu],a=[];function l(u,d){return u[1]?0:1}return t=l(n),e=a[t]=o[t](n),{c(){e.c(),r=oi()},m(u,d){a[t].m(u,d),et(u,r,d),s=!0},p(u,[d]){let p=t;t=l(u),t===p?a[t].p(u,d):(Br(),Dt(a[p],1,1,()=>{a[p]=null}),$r(),e=a[t],e?e.p(u,d):(e=a[t]=o[t](u),e.c()),Ct(e,1),e.m(r.parentNode,r))},i(u){s||(Ct(e),s=!0)},o(u){Dt(e),s=!1},d(u){u&&tt(r),a[t].d(u)}}}function zo(){const n=window.location.href.indexOf("#/");let t=n>-1?window.location.href.substr(n+1):"/";const e=t.indexOf("?");let r="";return e>-1&&(r=t.substr(e+1),t=t.substr(0,e)),{location:t,querystring:r}}const li=Ja(null,function(t){t(zo());const e=()=>{t(zo())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}});Za(li,n=>n.location);Za(li,n=>n.querystring);const Ho=ci(void 0);async function ne(n){if(!n||n.length<1||n.charAt(0)!="/"&&n.indexOf("#/")!==0)throw Error("Invalid parameter location");await Ya(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(n.charAt(0)=="#"?"":"#")+n}function Nu(n){n?window.scrollTo(n.__svelte_spa_router_scrollX,n.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function xu(n,t,e){let{routes:r={}}=t,{prefix:s=""}=t,{restoreScrollState:o=!1}=t;class a{constructor($,N){if(!N||typeof N!="function"&&(typeof N!="object"||N._sveltesparouter!==!0))throw Error("Invalid component object");if(!$||typeof $=="string"&&($.length<1||$.charAt(0)!="/"&&$.charAt(0)!="*")||typeof $=="object"&&!($ instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:y,keys:m}=Cu($);this.path=$,typeof N=="object"&&N._sveltesparouter===!0?(this.component=N.component,this.conditions=N.conditions||[],this.userData=N.userData,this.props=N.props||{}):(this.component=()=>Promise.resolve(N),this.conditions=[],this.props={}),this._pattern=y,this._keys=m}match($){if(s){if(typeof s=="string")if($.startsWith(s))$=$.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const g=$.match(s);if(g&&g[0])$=$.substr(g[0].length)||"/";else return null}}const N=this._pattern.exec($);if(N===null)return null;if(this._keys===!1)return N;const y={};let m=0;for(;m<this._keys.length;){try{y[this._keys[m]]=decodeURIComponent(N[m+1]||"")||null}catch{y[this._keys[m]]=null}m++}return y}async checkConditions($){for(let N=0;N<this.conditions.length;N++)if(!await this.conditions[N]($))return!1;return!0}}const l=[];r instanceof Map?r.forEach((O,$)=>{l.push(new a($,O))}):Object.keys(r).forEach(O=>{l.push(new a(O,r[O]))});let u=null,d=null,p={};const v=wu();async function w(O,$){await Ya(),v(O,$)}let R=null,S=null;o&&(S=O=>{O.state&&(O.state.__svelte_spa_router_scrollY||O.state.__svelte_spa_router_scrollX)?R=O.state:R=null},window.addEventListener("popstate",S),vu(()=>{Nu(R)}));let D=null,P=null;const M=li.subscribe(async O=>{D=O;let $=0;for(;$<l.length;){const N=l[$].match(O.location);if(!N){$++;continue}const y={route:l[$].path,location:O.location,querystring:O.querystring,userData:l[$].userData,params:N&&typeof N=="object"&&Object.keys(N).length?N:null};if(!await l[$].checkConditions(y)){e(0,u=null),P=null,w("conditionsFailed",y);return}w("routeLoading",Object.assign({},y));const m=l[$].component;if(P!=m){m.loading?(e(0,u=m.loading),P=m,e(1,d=m.loadingParams),e(2,p={}),w("routeLoaded",Object.assign({},y,{component:u,name:u.name,params:d}))):(e(0,u=null),P=null);const g=await m();if(O!=D)return;e(0,u=g&&g.default||g),P=m}N&&typeof N=="object"&&Object.keys(N).length?e(1,d=N):e(1,d=null),e(2,p=l[$].props),w("routeLoaded",Object.assign({},y,{component:u,name:u.name,params:d})).then(()=>{Ho.set(d)});return}e(0,u=null),P=null,Ho.set(void 0)});Tu(()=>{M(),S&&window.removeEventListener("popstate",S)});function F(O){jo.call(this,n,O)}function G(O){jo.call(this,n,O)}return n.$$set=O=>{"routes"in O&&e(3,r=O.routes),"prefix"in O&&e(4,s=O.prefix),"restoreScrollState"in O&&e(5,o=O.restoreScrollState)},n.$$.update=()=>{n.$$.dirty&32&&(history.scrollRestoration=o?"manual":"auto")},[u,d,p,r,s,o,F,G]}class Mu extends jt{constructor(t){super(),$t(this,t,xu,ku,Ot,{routes:3,prefix:4,restoreScrollState:5})}}var bs={local:{},session:{}};function Ou(n){return n==="local"?localStorage:sessionStorage}function Fn(n,t,e){var r,s,o,a,l,u,d,p;const v=(r=void 0)!=null?r:JSON,w=(s=void 0)!=null?s:"local",R=(o=void 0)!=null?o:!0,S=(l=(a=void 0)!=null?a:void 0)!=null?l:N=>console.error(`Error when writing value from persisted store "${n}" to ${w}`,N),D=(u=void 0)!=null?u:(N,y)=>console.error(`Error when parsing ${N?'"'+N+'"':"value"} from persisted store "${n}"`,y),P=(d=void 0)!=null?d:N=>N,M=(p=void 0)!=null?p:N=>N,F=typeof window<"u"&&typeof document<"u",G=F?Ou(w):null;function O(N,y){const m=M(y);try{G==null||G.setItem(N,v.stringify(m))}catch(g){S(g)}}function $(){function N(E){try{return v.parse(E)}catch(T){D(E,T)}}const y=G==null?void 0:G.getItem(n);if(y==null)return t;const m=N(y);return m==null?t:P(m)}if(!bs[w][n]){const N=$(),y=ci(N,E=>{if(F&&w=="local"&&R){const T=I=>{if(I.key===n&&I.newValue){let _;try{_=v.parse(I.newValue)}catch(fe){D(I.newValue,fe);return}const kt=P(_);E(kt)}};return window.addEventListener("storage",T),()=>window.removeEventListener("storage",T)}}),{subscribe:m,set:g}=y;bs[w][n]={set(E){g(E),O(n,E)},update(E){return y.update(T=>{const I=E(T);return O(n,I),I})},reset(){this.set(t)},subscribe:m}}return bs[w][n]}const $e=Fn("CountStore",0),Us=Fn("PlayerName",""),Bs=Fn("ScoreInDb",!1),Ss=Fn("ScoreID",""),tc=Fn("HasVisited",!1);function Lu(n){let t,e,r,s,o,a;return{c(){t=j("main"),e=j("div"),r=j("div"),K(r,"id","content-container"),K(r,"class",s=Bo(n[0])+" svelte-g67ruz"),K(e,"id","flexbox-wrapper"),K(e,"class","svelte-g67ruz")},m(l,u){et(l,t,u),B(t,e),B(e,r),o||(a=Ka(n[1].call(null,r)),o=!0)},p(l,[u]){u&1&&s!==(s=Bo(l[0])+" svelte-g67ruz")&&K(r,"class",s)},i:Q,o:Q,d(l){l&&tt(t),o=!1,a()}}}let Fu=50,Uu=500,Bu=2e3;function $u(n,t,e){const r=[{type:"text",text:"Ho, ho, ho ... fröhliche Weihnachten!"},{type:"text",text:"Hast du Lust auf ein kleines Weihnachtsspiel?"},{type:"title",text:"FANG DEN SANTA!"},{type:"text",text:"Dir werden nacheinander verschiedene Emojis gezeigt."},{type:"text",text:"Klicke auf alle Emojis, die etwas mit Weihnachten zu tun haben."},{type:"text",text:"Für jedes Weihnachts-Emoji bekommst du einen Punkt."},{type:"text",text:"Aber Achtung: Nicht-Weihnachts-Emojis geben Strafpunkte!"},{type:"text",text:"Wenn du auf der nächsten Seite einen Spielernamen eingibst, wird dein Punktestand in einer High-Score gespeichert"},{type:"text",text:"Wenn du das nicht möchtest, kannst du auch einfach so spielen. Lass dann einfach das Namensfeld leer."}];let s=0,o="text",a;const l=(v,w,R)=>{const S=v.split("");let D="",P=0;const M=()=>{setTimeout(()=>{D=D+S[P],w.innerText=D,P++,D.split("").length<S.length?M():R()},Fu)};M()},u=(v,w,R)=>{const S=v.split(" ");let D="",P=0;const M=()=>{setTimeout(()=>{D=D+" "+S[P],w.innerText=D,P++,D.split(" ").length<=S.length?M():R()},Uu)};M()},d=()=>{s++,setTimeout(()=>{if(s<r.length){const v=r[s];a.innerText="",e(0,o=v.type),v.type==="text"?l(v.text,a,d):u(v.text,a,d)}else tc.set(!0),ne("/")},Bu)};return[o,()=>{a=document.getElementById("content-container"),l(r[s].text,a,d)}]}class ju extends jt{constructor(t){super(),$t(this,t,$u,Lu,Ot,{})}}const Go=""+new URL("../tree.png",import.meta.url).href,qu=""+new URL("../santa.png",import.meta.url).href;function zu(n){let t,e,r,s,o,a,l,u,d,p,v,w,R,S,D,P;return{c(){t=j("main"),e=j("div"),r=j("h1"),r.textContent="FANG DEN SANTA!",s=ot(),o=j("div"),o.innerHTML=`<img alt="tree emoji" src="${Go}" class="svelte-uqp32d"/> <img alt="santa emoji" src="${qu}" class="svelte-uqp32d"/> <img alt="tree emoji" src="${Go}" class="svelte-uqp32d"/>`,a=ot(),l=j("div"),u=j("div"),u.textContent="Bitte gib hier deinen Namen ein:",d=ot(),p=j("input"),v=ot(),w=j("button"),w.textContent="Spiel starten!",R=ot(),S=j("button"),S.textContent="Hä? Erklärs mir nochmal...",K(r,"class","svelte-uqp32d"),p.value=n[0],K(p,"maxlength","12"),K(p,"class","svelte-uqp32d"),K(w,"class","svelte-uqp32d"),K(S,"class","svelte-uqp32d"),K(e,"id","flexbox-wrapper")},m(M,F){et(M,t,F),B(t,e),B(e,r),B(e,s),B(e,o),B(e,a),B(e,l),B(l,u),B(l,d),B(l,p),B(e,v),B(e,w),B(e,R),B(e,S),D||(P=[Ue(p,"input",n[2]),Ue(w,"click",$o(n[3])),Ue(S,"click",$o(n[4]))],D=!0)},p:Q,i:Q,o:Q,d(M){M&&tt(t),D=!1,de(P)}}}function Hu(n){const t=Fe(tc),e=Fe(Us);!t&&ne("/intro");const r=l=>{console.log(l.target.value),Us.set(l.target.value)};return[e,r,l=>r(l),()=>ne("#/game"),()=>ne("#/intro")]}class Gu extends jt{constructor(t){super(),$t(this,t,Hu,zu,Ot,{})}}function Ku(n){let t,e,r;return{c(){t=j("div"),e=ae("Punkte: "),r=ae(n[0]),K(t,"id","counter"),K(t,"class","svelte-1kzghxj")},m(s,o){et(s,t,o),B(t,e),B(t,r)},p(s,[o]){o&1&&Tr(r,s[0])},i:Q,o:Q,d(s){s&&tt(t)}}}function Wu(n,t,e){let r;return $e.subscribe(a=>{e(0,r=a)}),[r,()=>{$e.update(a=>a+1)},()=>{$e.update(a=>a-1)}]}class Qu extends jt{constructor(t){super(),$t(this,t,Wu,Ku,Ot,{increment:1,decrement:2})}get increment(){return this.$$.ctx[1]}get decrement(){return this.$$.ctx[2]}}function Xu(n){let t,e;return{c(){t=j("div"),e=ae(n[0]),K(t,"id","countdown"),K(t,"class","svelte-1f4zbkp")},m(r,s){et(r,t,s),B(t,e)},p(r,[s]){s&1&&Tr(e,r[0])},i:Q,o:Q,d(r){r&&tt(t)}}}let Ko=1e3;function Yu(n,t,e){let{stopMusic:r}=t,s=1e3*120;const o=d=>d.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),a=d=>{let p=d/1e3;const v=Math.floor(p/60);return p=p%60,o(v)+":"+o(p)};let l=a(s);const u=()=>{setTimeout(()=>{s-=Ko,e(0,l=a(s)),s>0?u():(console.log("Done!"),r(),ne("/gameover"))},Ko)};return u(),n.$$set=d=>{"stopMusic"in d&&e(1,r=d.stopMusic)},[l,r]}class Ju extends jt{constructor(t){super(),$t(this,t,Yu,Xu,Ot,{stopMusic:1})}}function Wo(n,t,e){const r=n.slice();return r[20]=t[e],r}function Qo(n){let t;return{c(){t=j("div"),K(t,"id",n[20]),K(t,"class","game-field svelte-16klxys")},m(e,r){et(e,t,r)},p:Q,d(e){e&&tt(t)}}}function Zu(n){let t,e,r,s,o,a,l,u,d,p,v={};r=new Qu({props:v}),n[4](r),o=new Ju({props:{stopMusic:n[5]}});let w=Ir(n[1]),R=[];for(let S=0;S<w.length;S+=1)R[S]=Qo(Wo(n,w,S));return{c(){t=j("main"),e=j("div"),ce(r.$$.fragment),s=ot(),ce(o.$$.fragment),a=ot(),l=j("div");for(let S=0;S<R.length;S+=1)R[S].c();K(e,"id","headline"),K(e,"class","svelte-16klxys"),K(l,"id","board"),K(l,"class","svelte-16klxys"),K(t,"class","svelte-16klxys")},m(S,D){et(S,t,D),B(t,e),Kt(r,e,null),B(e,s),Kt(o,e,null),B(t,a),B(t,l);for(let P=0;P<R.length;P+=1)R[P]&&R[P].m(l,null);u=!0,d||(p=Ka(n[3].call(null,l)),d=!0)},p(S,[D]){const P={};if(r.$set(P),D&2){w=Ir(S[1]);let M;for(M=0;M<w.length;M+=1){const F=Wo(S,w,M);R[M]?R[M].p(F,D):(R[M]=Qo(F),R[M].c(),R[M].m(l,null))}for(;M<R.length;M+=1)R[M].d(1);R.length=w.length}},i(S){u||(Ct(r.$$.fragment,S),Ct(o.$$.fragment,S),u=!0)},o(S){Dt(r.$$.fragment,S),Dt(o.$$.fragment,S),u=!1},d(S){S&&tt(t),n[4](null),Wt(r),Wt(o),Wa(R,S),d=!1,p()}}}const th="/",Xo=35,eh=600,nh=5,rh=.2,sh=2;function ih(n,t,e){const r=["santa.png","tree.png","present.png","snowman.png"],s=["shark.png","pig.png","wrench.png","sunglasses.png","pizza.png","ghost.png","chick.png","ball.png","cactus.png","island.png"],o=[...Array(Xo).keys()];let a=Number,l=1200,u=0;const d=new Audio("/ding_a.mp3"),p=new Audio("/error.mp3"),v=new Audio("/silent_night.mp3");v.volume=.2,v.loop=!0,v.play();let w;Bs.set(!1),$e.set(0);const R=()=>{const m=Math.random()>=.5?r:s,g=Math.floor(Math.random()*m.length);return`<img class="emoji" src="${th}${m[g]}"/>`},S=()=>{let y;for(;y=Math.floor(Math.random()*Xo),y==a;);a=y,D();const m=document.getElementById(String(y));m.innerHTML=R(),m.onclick=g=>{const E=g.target.src.split("/").at(-1);r.includes(E)?(d.pause(),d.currentTime=0,d.play(),w.increment(),F()):(p.pause(),p.currentTime=0,p.play(),w.decrement()),g.target.parentNode.innerHTML="",g.target.onclick=null}},D=()=>{const y=document.getElementsByClassName("game-field");for(const m of y)m.innerText="",m.onclick=null},P=()=>{const y=v.playbackRate;y<sh&&(v.playbackRate=y+rh)},M=()=>{v.pause()},F=()=>{u++,l>eh&&u===nh&&(l-=100,u=0,P())},G=()=>{setTimeout(()=>{S(),G()},l)},O=()=>{S(),G()};function $(y){Os[y?"unshift":"push"](()=>{w=y,e(0,w)})}return[w,o,M,O,$,()=>M()]}class oh extends jt{constructor(t){super(),$t(this,t,ih,Zu,Ot,{})}}function Yo(n,t,e){const r=n.slice();return r[1]=t[e],r[3]=e,r}function Jo(n){let t,e,r,s,o=n[1].name+"",a,l,u,d=n[1].score+"",p,v,w;return{c(){t=j("tr"),e=j("td"),e.textContent=`${n[3]+1}.`,r=ot(),s=j("td"),a=ae(o),l=ot(),u=j("td"),p=ae(d),v=ot(),K(e,"class","svelte-h4frz2"),K(s,"class","svelte-h4frz2"),K(u,"class","svelte-h4frz2"),K(t,"id",w=n[1].new?"new-entry":""),K(t,"class","svelte-h4frz2")},m(R,S){et(R,t,S),B(t,e),B(t,r),B(t,s),B(s,a),B(t,l),B(t,u),B(u,p),B(t,v)},p(R,S){S&1&&o!==(o=R[1].name+"")&&Tr(a,o),S&1&&d!==(d=R[1].score+"")&&Tr(p,d),S&1&&w!==(w=R[1].new?"new-entry":"")&&K(t,"id",w)},d(R){R&&tt(t)}}}function ah(n){let t,e,r,s,o,a=Ir(n[0]),l=[];for(let u=0;u<a.length;u+=1)l[u]=Jo(Yo(n,a,u));return{c(){t=j("div"),e=j("h2"),e.textContent="High-Score",r=ot(),s=j("div"),o=j("table");for(let u=0;u<l.length;u+=1)l[u].c();K(o,"class","svelte-h4frz2"),K(s,"id","high-score"),K(s,"class","svelte-h4frz2"),K(t,"id","ranking"),K(t,"class","svelte-h4frz2")},m(u,d){et(u,t,d),B(t,e),B(t,r),B(t,s),B(s,o);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(o,null)},p(u,[d]){if(d&1){a=Ir(u[0]);let p;for(p=0;p<a.length;p+=1){const v=Yo(u,a,p);l[p]?l[p].p(v,d):(l[p]=Jo(v),l[p].c(),l[p].m(o,null))}for(;p<l.length;p+=1)l[p].d(1);l.length=a.length}},i:Q,o:Q,d(u){u&&tt(t),Wa(l,u)}}}function ch(n,t,e){let{topten:r}=t;return n.$$set=s=>{"topten"in s&&e(0,r=s.topten)},[r]}class lh extends jt{constructor(t){super(),$t(this,t,ch,ah,Ot,{topten:0})}}var Zo={};/**
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
 */const ec=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},uh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=o>>2,v=(o&3)<<4|l>>4;let w=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(w=64)),r.push(e[p],e[v],e[w],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ec(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):uh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const v=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||v==null)throw new hh;const w=o<<2|l>>4;if(r.push(w),d!==64){const R=l<<4&240|d>>2;if(r.push(R),v!==64){const S=d<<6&192|v;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dh=function(n){const t=ec(n);return nc.encodeByteArray(t,!0)},br=function(n){return dh(n).replace(/\./g,"")},fh=function(n){try{return nc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ph(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mh=()=>ph().__FIREBASE_DEFAULTS__,gh=()=>{if(typeof process>"u"||typeof Zo>"u")return;const n=Zo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_h=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&fh(n[1]);return t&&JSON.parse(t)},ui=()=>{try{return mh()||gh()||_h()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yh=n=>{var t,e;return(e=(t=ui())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Eh=n=>{const t=yh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},rc=()=>{var n;return(n=ui())===null||n===void 0?void 0:n.config};/**
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
 */class vh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Th(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[br(JSON.stringify(e)),br(JSON.stringify(a)),""].join(".")}/**
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
 */function wh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ih(){var n;const t=(n=ui())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ah(){return!Ih()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rh(){try{return typeof indexedDB=="object"}catch{return!1}}function bh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Sh="FirebaseError";class Ye extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Sh,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sc.prototype.create)}}class sc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Ph(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ye(s,l,r)}}function Ph(n,t){return n.replace(Ch,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Ch=/\{\$([^}]+)}/g;function $s(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ta(o)&&ta(a)){if(!$s(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ta(n){return n!==null&&typeof n=="object"}/**
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
 */function Cn(n){return n&&n._delegate?n._delegate:n}class Vn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ye="[DEFAULT]";/**
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
 */class Vh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new vh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(kh(t))try{this.getOrInitializeService({instanceIdentifier:ye})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ye){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ye){return this.instances.has(t)}getOptions(t=ye){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ye){return this.component?this.component.multipleInstances?t:ye:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dh(n){return n===ye?void 0:n}function kh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Nh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Vh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const xh={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Mh=Y.INFO,Oh={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Lh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Oh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ic{constructor(t){this.name=t,this._logLevel=Mh,this._logHandler=Lh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Fh=(n,t)=>t.some(e=>n instanceof e);let ea,na;function Uh(){return ea||(ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bh(){return na||(na=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oc=new WeakMap,js=new WeakMap,ac=new WeakMap,Ps=new WeakMap,hi=new WeakMap;function $h(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(re(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&oc.set(e,n)}).catch(()=>{}),hi.set(t,n),t}function jh(n){if(js.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});js.set(n,t)}let qs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return js.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ac.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return re(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function qh(n){qs=n(qs)}function zh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Cs(this),t,...e);return ac.set(r,t.sort?t.sort():[t]),re(r)}:Bh().includes(n)?function(...t){return n.apply(Cs(this),t),re(oc.get(this))}:function(...t){return re(n.apply(Cs(this),t))}}function Hh(n){return typeof n=="function"?zh(n):(n instanceof IDBTransaction&&jh(n),Fh(n,Uh())?new Proxy(n,qs):n)}function re(n){if(n instanceof IDBRequest)return $h(n);if(Ps.has(n))return Ps.get(n);const t=Hh(n);return t!==n&&(Ps.set(n,t),hi.set(t,n)),t}const Cs=n=>hi.get(n);function Gh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=re(a);return r&&a.addEventListener("upgradeneeded",u=>{r(re(a.result),u.oldVersion,u.newVersion,re(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Kh=["get","getKey","getAll","getAllKeys","count"],Wh=["put","add","delete","clear"],Vs=new Map;function ra(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Vs.get(t))return Vs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Wh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kh.includes(e)))return;const o=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&u.done]))[0]};return Vs.set(t,o),o}qh(n=>({...n,get:(t,e,r)=>ra(t,e)||n.get(t,e,r),has:(t,e)=>!!ra(t,e)||n.has(t,e)}));/**
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
 */class Qh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Xh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Xh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zs="@firebase/app",sa="0.10.6";/**
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
 */const we=new ic("@firebase/app"),Yh="@firebase/app-compat",Jh="@firebase/analytics-compat",Zh="@firebase/analytics",td="@firebase/app-check-compat",ed="@firebase/app-check",nd="@firebase/auth",rd="@firebase/auth-compat",sd="@firebase/database",id="@firebase/database-compat",od="@firebase/functions",ad="@firebase/functions-compat",cd="@firebase/installations",ld="@firebase/installations-compat",ud="@firebase/messaging",hd="@firebase/messaging-compat",dd="@firebase/performance",fd="@firebase/performance-compat",pd="@firebase/remote-config",md="@firebase/remote-config-compat",gd="@firebase/storage",_d="@firebase/storage-compat",yd="@firebase/firestore",Ed="@firebase/vertexai-preview",vd="@firebase/firestore-compat",Td="firebase",wd="10.12.3";/**
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
 */const Hs="[DEFAULT]",Id={[zs]:"fire-core",[Yh]:"fire-core-compat",[Zh]:"fire-analytics",[Jh]:"fire-analytics-compat",[ed]:"fire-app-check",[td]:"fire-app-check-compat",[nd]:"fire-auth",[rd]:"fire-auth-compat",[sd]:"fire-rtdb",[id]:"fire-rtdb-compat",[od]:"fire-fn",[ad]:"fire-fn-compat",[cd]:"fire-iid",[ld]:"fire-iid-compat",[ud]:"fire-fcm",[hd]:"fire-fcm-compat",[dd]:"fire-perf",[fd]:"fire-perf-compat",[pd]:"fire-rc",[md]:"fire-rc-compat",[gd]:"fire-gcs",[_d]:"fire-gcs-compat",[yd]:"fire-fst",[vd]:"fire-fst-compat",[Ed]:"fire-vertex","fire-js":"fire-js",[Td]:"fire-js-all"};/**
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
 */const Sr=new Map,Ad=new Map,Gs=new Map;function ia(n,t){try{n.container.addComponent(t)}catch(e){we.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Pr(n){const t=n.name;if(Gs.has(t))return we.debug(`There were multiple attempts to register component ${t}.`),!1;Gs.set(t,n);for(const e of Sr.values())ia(e,n);for(const e of Ad.values())ia(e,n);return!0}function Rd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const bd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},se=new sc("app","Firebase",bd);/**
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
 */class Sd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw se.create("app-deleted",{appName:this._name})}}/**
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
 */const Pd=wd;function cc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Hs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw se.create("bad-app-name",{appName:String(s)});if(e||(e=rc()),!e)throw se.create("no-options");const o=Sr.get(s);if(o){if($s(e,o.options)&&$s(r,o.config))return o;throw se.create("duplicate-app",{appName:s})}const a=new Nh(s);for(const u of Gs.values())a.addComponent(u);const l=new Sd(e,r,a);return Sr.set(s,l),l}function Cd(n=Hs){const t=Sr.get(n);if(!t&&n===Hs&&rc())return cc();if(!t)throw se.create("no-app",{appName:n});return t}function je(n,t,e){var r;let s=(r=Id[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),we.warn(l.join(" "));return}Pr(new Vn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Vd="firebase-heartbeat-database",Dd=1,Dn="firebase-heartbeat-store";let Ds=null;function lc(){return Ds||(Ds=Gh(Vd,Dd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Dn)}catch(e){console.warn(e)}}}}).catch(n=>{throw se.create("idb-open",{originalErrorMessage:n.message})})),Ds}async function kd(n){try{const e=(await lc()).transaction(Dn),r=await e.objectStore(Dn).get(uc(n));return await e.done,r}catch(t){if(t instanceof Ye)we.warn(t.message);else{const e=se.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});we.warn(e.message)}}}async function oa(n,t){try{const r=(await lc()).transaction(Dn,"readwrite");await r.objectStore(Dn).put(t,uc(n)),await r.done}catch(e){if(e instanceof Ye)we.warn(e.message);else{const r=se.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});we.warn(r.message)}}}function uc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Nd=1024,xd=30*24*60*60*1e3;class Md{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ld(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=aa();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=xd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=aa(),{heartbeatsToSend:r,unsentEntries:s}=Od(this._heartbeatsCache.heartbeats),o=br(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function aa(){return new Date().toISOString().substring(0,10)}function Od(n,t=Nd){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ca(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ca(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ld{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rh()?bh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await kd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return oa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return oa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ca(n){return br(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Fd(n){Pr(new Vn("platform-logger",t=>new Qh(t),"PRIVATE")),Pr(new Vn("heartbeat",t=>new Md(t),"PRIVATE")),je(zs,sa,n),je(zs,sa,"esm2017"),je("fire-js","")}Fd("");var Ud="firebase",Bd="10.12.3";/**
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
 */je(Ud,Bd,"app");var la=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Te,hc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,m){function g(){}g.prototype=m.prototype,y.D=m.prototype,y.prototype=new g,y.prototype.constructor=y,y.C=function(E,T,I){for(var _=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)_[kt-2]=arguments[kt];return m.prototype[T].apply(E,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,m,g){g||(g=0);var E=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)E[T]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(T=0;16>T;++T)E[T]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=y.g[0],g=y.g[1],T=y.g[2];var I=y.g[3],_=m+(I^g&(T^I))+E[0]+3614090360&4294967295;m=g+(_<<7&4294967295|_>>>25),_=I+(T^m&(g^T))+E[1]+3905402710&4294967295,I=m+(_<<12&4294967295|_>>>20),_=T+(g^I&(m^g))+E[2]+606105819&4294967295,T=I+(_<<17&4294967295|_>>>15),_=g+(m^T&(I^m))+E[3]+3250441966&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(I^g&(T^I))+E[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=I+(T^m&(g^T))+E[5]+1200080426&4294967295,I=m+(_<<12&4294967295|_>>>20),_=T+(g^I&(m^g))+E[6]+2821735955&4294967295,T=I+(_<<17&4294967295|_>>>15),_=g+(m^T&(I^m))+E[7]+4249261313&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(I^g&(T^I))+E[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=I+(T^m&(g^T))+E[9]+2336552879&4294967295,I=m+(_<<12&4294967295|_>>>20),_=T+(g^I&(m^g))+E[10]+4294925233&4294967295,T=I+(_<<17&4294967295|_>>>15),_=g+(m^T&(I^m))+E[11]+2304563134&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(I^g&(T^I))+E[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=I+(T^m&(g^T))+E[13]+4254626195&4294967295,I=m+(_<<12&4294967295|_>>>20),_=T+(g^I&(m^g))+E[14]+2792965006&4294967295,T=I+(_<<17&4294967295|_>>>15),_=g+(m^T&(I^m))+E[15]+1236535329&4294967295,g=T+(_<<22&4294967295|_>>>10),_=m+(T^I&(g^T))+E[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=I+(g^T&(m^g))+E[6]+3225465664&4294967295,I=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(I^m))+E[11]+643717713&4294967295,T=I+(_<<14&4294967295|_>>>18),_=g+(I^m&(T^I))+E[0]+3921069994&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(T^I&(g^T))+E[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=I+(g^T&(m^g))+E[10]+38016083&4294967295,I=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(I^m))+E[15]+3634488961&4294967295,T=I+(_<<14&4294967295|_>>>18),_=g+(I^m&(T^I))+E[4]+3889429448&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(T^I&(g^T))+E[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=I+(g^T&(m^g))+E[14]+3275163606&4294967295,I=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(I^m))+E[3]+4107603335&4294967295,T=I+(_<<14&4294967295|_>>>18),_=g+(I^m&(T^I))+E[8]+1163531501&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(T^I&(g^T))+E[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=I+(g^T&(m^g))+E[2]+4243563512&4294967295,I=m+(_<<9&4294967295|_>>>23),_=T+(m^g&(I^m))+E[7]+1735328473&4294967295,T=I+(_<<14&4294967295|_>>>18),_=g+(I^m&(T^I))+E[12]+2368359562&4294967295,g=T+(_<<20&4294967295|_>>>12),_=m+(g^T^I)+E[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=I+(m^g^T)+E[8]+2272392833&4294967295,I=m+(_<<11&4294967295|_>>>21),_=T+(I^m^g)+E[11]+1839030562&4294967295,T=I+(_<<16&4294967295|_>>>16),_=g+(T^I^m)+E[14]+4259657740&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(g^T^I)+E[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=I+(m^g^T)+E[4]+1272893353&4294967295,I=m+(_<<11&4294967295|_>>>21),_=T+(I^m^g)+E[7]+4139469664&4294967295,T=I+(_<<16&4294967295|_>>>16),_=g+(T^I^m)+E[10]+3200236656&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(g^T^I)+E[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=I+(m^g^T)+E[0]+3936430074&4294967295,I=m+(_<<11&4294967295|_>>>21),_=T+(I^m^g)+E[3]+3572445317&4294967295,T=I+(_<<16&4294967295|_>>>16),_=g+(T^I^m)+E[6]+76029189&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(g^T^I)+E[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=I+(m^g^T)+E[12]+3873151461&4294967295,I=m+(_<<11&4294967295|_>>>21),_=T+(I^m^g)+E[15]+530742520&4294967295,T=I+(_<<16&4294967295|_>>>16),_=g+(T^I^m)+E[2]+3299628645&4294967295,g=T+(_<<23&4294967295|_>>>9),_=m+(T^(g|~I))+E[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=I+(g^(m|~T))+E[7]+1126891415&4294967295,I=m+(_<<10&4294967295|_>>>22),_=T+(m^(I|~g))+E[14]+2878612391&4294967295,T=I+(_<<15&4294967295|_>>>17),_=g+(I^(T|~m))+E[5]+4237533241&4294967295,g=T+(_<<21&4294967295|_>>>11),_=m+(T^(g|~I))+E[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=I+(g^(m|~T))+E[3]+2399980690&4294967295,I=m+(_<<10&4294967295|_>>>22),_=T+(m^(I|~g))+E[10]+4293915773&4294967295,T=I+(_<<15&4294967295|_>>>17),_=g+(I^(T|~m))+E[1]+2240044497&4294967295,g=T+(_<<21&4294967295|_>>>11),_=m+(T^(g|~I))+E[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=I+(g^(m|~T))+E[15]+4264355552&4294967295,I=m+(_<<10&4294967295|_>>>22),_=T+(m^(I|~g))+E[6]+2734768916&4294967295,T=I+(_<<15&4294967295|_>>>17),_=g+(I^(T|~m))+E[13]+1309151649&4294967295,g=T+(_<<21&4294967295|_>>>11),_=m+(T^(g|~I))+E[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=I+(g^(m|~T))+E[11]+3174756917&4294967295,I=m+(_<<10&4294967295|_>>>22),_=T+(m^(I|~g))+E[2]+718787259&4294967295,T=I+(_<<15&4294967295|_>>>17),_=g+(I^(T|~m))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+m&4294967295,y.g[1]=y.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,y.g[2]=y.g[2]+T&4294967295,y.g[3]=y.g[3]+I&4294967295}r.prototype.u=function(y,m){m===void 0&&(m=y.length);for(var g=m-this.blockSize,E=this.B,T=this.h,I=0;I<m;){if(T==0)for(;I<=g;)s(this,y,I),I+=this.blockSize;if(typeof y=="string"){for(;I<m;)if(E[T++]=y.charCodeAt(I++),T==this.blockSize){s(this,E),T=0;break}}else for(;I<m;)if(E[T++]=y[I++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var m=1;m<y.length-8;++m)y[m]=0;var g=8*this.o;for(m=y.length-8;m<y.length;++m)y[m]=g&255,g/=256;for(this.u(y),y=Array(16),m=g=0;4>m;++m)for(var E=0;32>E;E+=8)y[g++]=this.g[m]>>>E&255;return y};function o(y,m){var g=l;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=m(y)}function a(y,m){this.h=m;for(var g=[],E=!0,T=y.length-1;0<=T;T--){var I=y[T]|0;E&&I==m||(g[T]=I,E=!1)}this.g=g}var l={};function u(y){return-128<=y&&128>y?o(y,function(m){return new a([m|0],0>m?-1:0)}):new a([y|0],0>y?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return v;if(0>y)return P(d(-y));for(var m=[],g=1,E=0;y>=g;E++)m[E]=y/g|0,g*=4294967296;return new a(m,0)}function p(y,m){if(y.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(y.charAt(0)=="-")return P(p(y.substring(1),m));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),E=v,T=0;T<y.length;T+=8){var I=Math.min(8,y.length-T),_=parseInt(y.substring(T,T+I),m);8>I?(I=d(Math.pow(m,I)),E=E.j(I).add(d(_))):(E=E.j(g),E=E.add(d(_)))}return E}var v=u(0),w=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-P(this).m();for(var y=0,m=1,g=0;g<this.g.length;g++){var E=this.i(g);y+=(0<=E?E:4294967296+E)*m,m*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S(this))return"0";if(D(this))return"-"+P(this).toString(y);for(var m=d(Math.pow(y,6)),g=this,E="";;){var T=O(g,m).g;g=M(g,T.j(m));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(y);if(g=T,S(g))return I+E;for(;6>I.length;)I="0"+I;E=I+E}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function S(y){if(y.h!=0)return!1;for(var m=0;m<y.g.length;m++)if(y.g[m]!=0)return!1;return!0}function D(y){return y.h==-1}n.l=function(y){return y=M(this,y),D(y)?-1:S(y)?0:1};function P(y){for(var m=y.g.length,g=[],E=0;E<m;E++)g[E]=~y.g[E];return new a(g,~y.h).add(w)}n.abs=function(){return D(this)?P(this):this},n.add=function(y){for(var m=Math.max(this.g.length,y.g.length),g=[],E=0,T=0;T<=m;T++){var I=E+(this.i(T)&65535)+(y.i(T)&65535),_=(I>>>16)+(this.i(T)>>>16)+(y.i(T)>>>16);E=_>>>16,I&=65535,_&=65535,g[T]=_<<16|I}return new a(g,g[g.length-1]&-2147483648?-1:0)};function M(y,m){return y.add(P(m))}n.j=function(y){if(S(this)||S(y))return v;if(D(this))return D(y)?P(this).j(P(y)):P(P(this).j(y));if(D(y))return P(this.j(P(y)));if(0>this.l(R)&&0>y.l(R))return d(this.m()*y.m());for(var m=this.g.length+y.g.length,g=[],E=0;E<2*m;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<y.g.length;T++){var I=this.i(E)>>>16,_=this.i(E)&65535,kt=y.i(T)>>>16,fe=y.i(T)&65535;g[2*E+2*T]+=_*fe,F(g,2*E+2*T),g[2*E+2*T+1]+=I*fe,F(g,2*E+2*T+1),g[2*E+2*T+1]+=_*kt,F(g,2*E+2*T+1),g[2*E+2*T+2]+=I*kt,F(g,2*E+2*T+2)}for(E=0;E<m;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=m;E<2*m;E++)g[E]=0;return new a(g,0)};function F(y,m){for(;(y[m]&65535)!=y[m];)y[m+1]+=y[m]>>>16,y[m]&=65535,m++}function G(y,m){this.g=y,this.h=m}function O(y,m){if(S(m))throw Error("division by zero");if(S(y))return new G(v,v);if(D(y))return m=O(P(y),m),new G(P(m.g),P(m.h));if(D(m))return m=O(y,P(m)),new G(P(m.g),m.h);if(30<y.g.length){if(D(y)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var g=w,E=m;0>=E.l(y);)g=$(g),E=$(E);var T=N(g,1),I=N(E,1);for(E=N(E,2),g=N(g,2);!S(E);){var _=I.add(E);0>=_.l(y)&&(T=T.add(g),I=_),E=N(E,1),g=N(g,1)}return m=M(y,T.j(m)),new G(T,m)}for(T=v;0<=y.l(m);){for(g=Math.max(1,Math.floor(y.m()/m.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),I=d(g),_=I.j(m);D(_)||0<_.l(y);)g-=E,I=d(g),_=I.j(m);S(I)&&(I=w),T=T.add(I),y=M(y,_)}return new G(T,y)}n.A=function(y){return O(this,y).h},n.and=function(y){for(var m=Math.max(this.g.length,y.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)&y.i(E);return new a(g,this.h&y.h)},n.or=function(y){for(var m=Math.max(this.g.length,y.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)|y.i(E);return new a(g,this.h|y.h)},n.xor=function(y){for(var m=Math.max(this.g.length,y.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)^y.i(E);return new a(g,this.h^y.h)};function $(y){for(var m=y.g.length+1,g=[],E=0;E<m;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new a(g,y.h)}function N(y,m){var g=m>>5;m%=32;for(var E=y.g.length-g,T=[],I=0;I<E;I++)T[I]=0<m?y.i(I+g)>>>m|y.i(I+g+1)<<32-m:y.i(I+g);return new a(T,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Te=a}).apply(typeof la<"u"?la:typeof self<"u"?self:typeof window<"u"?window:{});var lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dc,fc,Tn,pc,mr,Ks,mc,gc,_c;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,h){return i==Array.prototype||i==Object.prototype||(i[c]=h.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof lr=="object"&&lr];for(var c=0;c<i.length;++c){var h=i[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var h=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in h))break t;h=h[A]}i=i[i.length-1],f=h[i],c=c(f),c!=f&&c!=null&&t(h,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var h=0,f=!1,A={next:function(){if(!f&&h<i.length){var b=h++;return{value:c(b,i[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function p(i,c,h){return i.call.apply(i.bind,arguments)}function v(i,c,h){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(c,A)}}return function(){return i.apply(c,arguments)}}function w(i,c,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,w.apply(null,arguments)}function R(i,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function S(i,c){function h(){}h.prototype=c.prototype,i.aa=c.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(f,A,b){for(var k=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)k[nt-2]=arguments[nt];return c.prototype[A].apply(f,k)}}function D(i){const c=i.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=i[f];return h}return[]}function P(i,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const A=i.length||0,b=f.length||0;i.length=A+b;for(let k=0;k<b;k++)i[A+k]=f[k]}else i.push(f)}}class M{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function F(i){return/^[\s\xa0]*$/.test(i)}function G(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function O(i){return O[" "](i),i}O[" "]=function(){};var $=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function N(i,c,h){for(const f in i)c.call(h,i[f],f,i)}function y(i,c){for(const h in i)c.call(void 0,i[h],h,i)}function m(i){const c={};for(const h in i)c[h]=i[h];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)i[h]=f[h];for(let b=0;b<g.length;b++)h=g[b],Object.prototype.hasOwnProperty.call(f,h)&&(i[h]=f[h])}}function T(i){var c=1;i=i.split(":");const h=[];for(;0<c&&i.length;)h.push(i.shift()),c--;return i.length&&h.push(i.join(":")),h}function I(i){l.setTimeout(()=>{throw i},0)}function _(){var i=ts;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class kt{constructor(){this.h=this.g=null}add(c,h){const f=fe.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var fe=new M(()=>new kl,i=>i.reset());class kl{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let nn,rn=!1,ts=new kt,Fi=()=>{const i=l.Promise.resolve(void 0);nn=()=>{i.then(Nl)}};var Nl=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(h){I(h)}var c=fe;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}rn=!1};function Yt(){this.s=this.s,this.C=this.C}Yt.prototype.s=!1,Yt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Yt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function yt(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var xl=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return i}();function sn(i,c){if(yt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if($){t:{try{O(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=i.fromElement:h=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ml[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&sn.aa.h.call(this)}}S(sn,yt);var Ml={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Hn="closure_listenable_"+(1e6*Math.random()|0),Ol=0;function Ll(i,c,h,f,A){this.listener=i,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++Ol,this.da=this.fa=!1}function Gn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Kn(i){this.src=i,this.g={},this.h=0}Kn.prototype.add=function(i,c,h,f,A){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var k=ns(i,c,f,A);return-1<k?(c=i[k],h||(c.fa=!1)):(c=new Ll(c,this.src,b,!!f,A),c.fa=h,i.push(c)),c};function es(i,c){var h=c.type;if(h in i.g){var f=i.g[h],A=Array.prototype.indexOf.call(f,c,void 0),b;(b=0<=A)&&Array.prototype.splice.call(f,A,1),b&&(Gn(c),i.g[h].length==0&&(delete i.g[h],i.h--))}}function ns(i,c,h,f){for(var A=0;A<i.length;++A){var b=i[A];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==f)return A}return-1}var rs="closure_lm_"+(1e6*Math.random()|0),ss={};function Ui(i,c,h,f,A){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Ui(i,c[b],h,f,A);return null}return h=ji(h),i&&i[Hn]?i.K(c,h,d(f)?!!f.capture:!!f,A):Fl(i,c,h,!1,f,A)}function Fl(i,c,h,f,A,b){if(!c)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,nt=os(i);if(nt||(i[rs]=nt=new Kn(i)),h=nt.add(c,h,f,k,b),h.proxy)return h;if(f=Ul(),h.proxy=f,f.src=i,f.listener=h,i.addEventListener)xl||(A=k),A===void 0&&(A=!1),i.addEventListener(c.toString(),f,A);else if(i.attachEvent)i.attachEvent($i(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Ul(){function i(h){return c.call(i.src,i.listener,h)}const c=Bl;return i}function Bi(i,c,h,f,A){if(Array.isArray(c))for(var b=0;b<c.length;b++)Bi(i,c[b],h,f,A);else f=d(f)?!!f.capture:!!f,h=ji(h),i&&i[Hn]?(i=i.i,c=String(c).toString(),c in i.g&&(b=i.g[c],h=ns(b,h,f,A),-1<h&&(Gn(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete i.g[c],i.h--)))):i&&(i=os(i))&&(c=i.g[c.toString()],i=-1,c&&(i=ns(c,h,f,A)),(h=-1<i?c[i]:null)&&is(h))}function is(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Hn])es(c.i,i);else{var h=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(h,f,i.capture):c.detachEvent?c.detachEvent($i(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=os(c))?(es(h,i),h.h==0&&(h.src=null,c[rs]=null)):Gn(i)}}}function $i(i){return i in ss?ss[i]:ss[i]="on"+i}function Bl(i,c){if(i.da)i=!0;else{c=new sn(c,this);var h=i.listener,f=i.ha||i.src;i.fa&&is(i),i=h.call(f,c)}return i}function os(i){return i=i[rs],i instanceof Kn?i:null}var as="__closure_events_fn_"+(1e9*Math.random()>>>0);function ji(i){return typeof i=="function"?i:(i[as]||(i[as]=function(c){return i.handleEvent(c)}),i[as])}function Et(){Yt.call(this),this.i=new Kn(this),this.M=this,this.F=null}S(Et,Yt),Et.prototype[Hn]=!0,Et.prototype.removeEventListener=function(i,c,h,f){Bi(this,i,c,h,f)};function bt(i,c){var h,f=i.F;if(f)for(h=[];f;f=f.F)h.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new yt(c,i);else if(c instanceof yt)c.target=c.target||i;else{var A=c;c=new yt(f,i),E(c,A)}if(A=!0,h)for(var b=h.length-1;0<=b;b--){var k=c.g=h[b];A=Wn(k,f,!0,c)&&A}if(k=c.g=i,A=Wn(k,f,!0,c)&&A,A=Wn(k,f,!1,c)&&A,h)for(b=0;b<h.length;b++)k=c.g=h[b],A=Wn(k,f,!1,c)&&A}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var h=i.g[c],f=0;f<h.length;f++)Gn(h[f]);delete i.g[c],i.h--}}this.F=null},Et.prototype.K=function(i,c,h,f){return this.i.add(String(i),c,!1,h,f)},Et.prototype.L=function(i,c,h,f){return this.i.add(String(i),c,!0,h,f)};function Wn(i,c,h,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,b=0;b<c.length;++b){var k=c[b];if(k&&!k.da&&k.capture==h){var nt=k.listener,pt=k.ha||k.src;k.fa&&es(i.i,k),A=nt.call(pt,f)!==!1&&A}}return A&&!f.defaultPrevented}function qi(i,c,h){if(typeof i=="function")h&&(i=w(i,h));else if(i&&typeof i.handleEvent=="function")i=w(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(i,c||0)}function zi(i){i.g=qi(()=>{i.g=null,i.i&&(i.i=!1,zi(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class $l extends Yt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:zi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(i){Yt.call(this),this.h=i,this.g={}}S(on,Yt);var Hi=[];function Gi(i){N(i.g,function(c,h){this.g.hasOwnProperty(h)&&is(c)},i),i.g={}}on.prototype.N=function(){on.aa.N.call(this),Gi(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cs=l.JSON.stringify,jl=l.JSON.parse,ql=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function ls(){}ls.prototype.h=null;function Ki(i){return i.h||(i.h=i.i())}function Wi(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){yt.call(this,"d")}S(us,yt);function hs(){yt.call(this,"c")}S(hs,yt);var pe={},Qi=null;function Qn(){return Qi=Qi||new Et}pe.La="serverreachability";function Xi(i){yt.call(this,pe.La,i)}S(Xi,yt);function cn(i){const c=Qn();bt(c,new Xi(c))}pe.STAT_EVENT="statevent";function Yi(i,c){yt.call(this,pe.STAT_EVENT,i),this.stat=c}S(Yi,yt);function St(i){const c=Qn();bt(c,new Yi(c,i))}pe.Ma="timingevent";function Ji(i,c){yt.call(this,pe.Ma,i),this.size=c}S(Ji,yt);function ln(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},c)}function un(){this.g=!0}un.prototype.xa=function(){this.g=!1};function zl(i,c,h,f,A,b){i.info(function(){if(i.g)if(b)for(var k="",nt=b.split("&"),pt=0;pt<nt.length;pt++){var J=nt[pt].split("=");if(1<J.length){var vt=J[0];J=J[1];var Tt=vt.split("_");k=2<=Tt.length&&Tt[1]=="type"?k+(vt+"="+J+"&"):k+(vt+"=redacted&")}}else k=null;else k=b;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+k})}function Hl(i,c,h,f,A,b,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+b+" "+k})}function Pe(i,c,h,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Kl(i,h)+(f?" "+f:"")})}function Gl(i,c){i.info(function(){return"TIMEOUT: "+c})}un.prototype.info=function(){};function Kl(i,c){if(!i.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var f=h[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return cs(h)}catch{return c}}var Xn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ds;function Yn(){}S(Yn,ls),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},ds=new Yn;function Jt(i,c,h,f){this.j=i,this.i=c,this.l=h,this.R=f||1,this.U=new on(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new to}function to(){this.i=null,this.g="",this.h=!1}var eo={},fs={};function ps(i,c,h){i.L=1,i.v=er(qt(c)),i.m=h,i.P=!0,no(i,null)}function no(i,c){i.F=Date.now(),Jn(i),i.A=qt(i.v);var h=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),_o(h.i,"t",f),i.C=0,h=i.j.J,i.h=new to,i.g=Mo(i.j,h?c:null,!i.m),0<i.O&&(i.M=new $l(w(i.Y,i,i.g),i.O)),c=i.U,h=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(Hi[0]=A.toString()),A=Hi);for(var b=0;b<A.length;b++){var k=Ui(h,A[b],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),cn(),zl(i.i,i.u,i.A,i.l,i.R,i.m)}Jt.prototype.ca=function(i){i=i.target;const c=this.M;c&&zt(i)==3?c.j():this.Y(i)},Jt.prototype.Y=function(i){try{if(i==this.g)t:{const Tt=zt(this.g);var c=this.g.Ba();const De=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Ao(this.g)))){this.J||Tt!=4||c==7||(c==8||0>=De?cn(3):cn(2)),ms(this);var h=this.g.Z();this.X=h;e:if(ro(this)){var f=Ao(this.g);i="";var A=f.length,b=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){me(this),hn(this);var k="";break e}this.h.i=new l.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(b&&c==A-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Hl(this.i,this.u,this.A,this.l,this.R,Tt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var nt,pt=this.g;if((nt=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(nt)){var J=nt;break e}}J=null}if(h=J)Pe(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gs(this,h);else{this.o=!1,this.s=3,St(12),me(this),hn(this);break t}}if(this.P){h=!0;let Nt;for(;!this.J&&this.C<k.length;)if(Nt=Wl(this,k),Nt==fs){Tt==4&&(this.s=4,St(14),h=!1),Pe(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==eo){this.s=4,St(15),Pe(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else Pe(this.i,this.l,Nt,null),gs(this,Nt);if(ro(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||k.length!=0||this.h.h||(this.s=1,St(16),h=!1),this.o=this.o&&h,!h)Pe(this.i,this.l,k,"[Invalid Chunked Response]"),me(this),hn(this);else if(0<k.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),ws(vt),vt.M=!0,St(11))}}else Pe(this.i,this.l,k,null),gs(this,k);Tt==4&&me(this),this.o&&!this.J&&(Tt==4?Do(this.j,this):(this.o=!1,Jn(this)))}else hu(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),me(this),hn(this)}}}catch{}finally{}};function ro(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Wl(i,c){var h=i.C,f=c.indexOf(`
`,h);return f==-1?fs:(h=Number(c.substring(h,f)),isNaN(h)?eo:(f+=1,f+h>c.length?fs:(c=c.slice(f,f+h),i.C=f+h,c)))}Jt.prototype.cancel=function(){this.J=!0,me(this)};function Jn(i){i.S=Date.now()+i.I,so(i,i.I)}function so(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ln(w(i.ba,i),c)}function ms(i){i.B&&(l.clearTimeout(i.B),i.B=null)}Jt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Gl(this.i,this.A),this.L!=2&&(cn(),St(17)),me(this),this.s=2,hn(this)):so(this,this.S-i)};function hn(i){i.j.G==0||i.J||Do(i.j,i)}function me(i){ms(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,Gi(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function gs(i,c){try{var h=i.j;if(h.G!=0&&(h.g==i||_s(h.h,i))){if(!i.K&&_s(h.h,i)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)or(h),sr(h);else break t;Ts(h),St(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=ln(w(h.Za,h),6e3));if(1>=ao(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else _e(h,11)}else if((i.K||h.g==i)&&or(h),!F(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let J=A[c];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];const vt=J[3];vt!=null&&(h.la=vt,h.j.info("VER="+h.la));const Tt=J[4];Tt!=null&&(h.Aa=Tt,h.j.info("SVER="+h.Aa));const De=J[5];De!=null&&typeof De=="number"&&0<De&&(f=1.5*De,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Nt=i.g;if(Nt){const cr=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cr){var b=f.h;b.g||cr.indexOf("spdy")==-1&&cr.indexOf("quic")==-1&&cr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ys(b,b.h),b.h=null))}if(f.D){const Is=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Is&&(f.ya=Is,st(f.I,f.D,Is))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=i;if(f.qa=xo(f,f.J?f.ia:null,f.W),k.K){co(f.h,k);var nt=k,pt=f.L;pt&&(nt.I=pt),nt.B&&(ms(nt),Jn(nt)),f.g=k}else Co(f);0<h.i.length&&ir(h)}else J[0]!="stop"&&J[0]!="close"||_e(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?_e(h,7):vs(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}cn(4)}catch{}}var Ql=class{constructor(i,c){this.g=i,this.map=c}};function io(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ao(i){return i.h?1:i.g?i.g.size:0}function _s(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function ys(i,c){i.g?i.g.add(c):i.h=c}function co(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}io.prototype.cancel=function(){if(this.i=lo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function lo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const h of i.g.values())c=c.concat(h.D);return c}return D(i.i)}function Xl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(u(i)){for(var c=[],h=i.length,f=0;f<h;f++)c.push(i[f]);return c}c=[],h=0;for(f in i)c[h++]=i[f];return c}function Yl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(u(i)||typeof i=="string"){var c=[];i=i.length;for(var h=0;h<i;h++)c.push(h);return c}c=[],h=0;for(const f in i)c[h++]=f;return c}}}function uo(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(u(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var h=Yl(i),f=Xl(i),A=f.length,b=0;b<A;b++)c.call(void 0,f[b],h&&h[b],i)}var ho=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jl(i,c){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var f=i[h].indexOf("="),A=null;if(0<=f){var b=i[h].substring(0,f);A=i[h].substring(f+1)}else b=i[h];c(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function ge(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ge){this.h=i.h,Zn(this,i.j),this.o=i.o,this.g=i.g,tr(this,i.s),this.l=i.l;var c=i.i,h=new pn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),fo(this,h),this.m=i.m}else i&&(c=String(i).match(ho))?(this.h=!1,Zn(this,c[1]||"",!0),this.o=dn(c[2]||""),this.g=dn(c[3]||"",!0),tr(this,c[4]),this.l=dn(c[5]||"",!0),fo(this,c[6]||"",!0),this.m=dn(c[7]||"")):(this.h=!1,this.i=new pn(null,this.h))}ge.prototype.toString=function(){var i=[],c=this.j;c&&i.push(fn(c,po,!0),":");var h=this.g;return(h||c=="file")&&(i.push("//"),(c=this.o)&&i.push(fn(c,po,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(fn(h,h.charAt(0)=="/"?eu:tu,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",fn(h,ru)),i.join("")};function qt(i){return new ge(i)}function Zn(i,c,h){i.j=h?dn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function tr(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function fo(i,c,h){c instanceof pn?(i.i=c,su(i.i,i.h)):(h||(c=fn(c,nu)),i.i=new pn(c,i.h))}function st(i,c,h){i.i.set(c,h)}function er(i){return st(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function dn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function fn(i,c,h){return typeof i=="string"?(i=encodeURI(i).replace(c,Zl),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Zl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var po=/[#\/\?@]/g,tu=/[#\?:]/g,eu=/[#\?]/g,nu=/[#\?@]/g,ru=/#/g;function pn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Zt(i){i.g||(i.g=new Map,i.h=0,i.i&&Jl(i.i,function(c,h){i.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=pn.prototype,n.add=function(i,c){Zt(this),this.i=null,i=Ce(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(c),this.h+=1,this};function mo(i,c){Zt(i),c=Ce(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function go(i,c){return Zt(i),c=Ce(i,c),i.g.has(c)}n.forEach=function(i,c){Zt(this),this.g.forEach(function(h,f){h.forEach(function(A){i.call(c,A,f,this)},this)},this)},n.na=function(){Zt(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const A=i[f];for(let b=0;b<A.length;b++)h.push(c[f])}return h},n.V=function(i){Zt(this);let c=[];if(typeof i=="string")go(this,i)&&(c=c.concat(this.g.get(Ce(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)c=c.concat(i[h])}return c},n.set=function(i,c){return Zt(this),this.i=null,i=Ce(this,i),go(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function _o(i,c,h){mo(i,c),0<h.length&&(i.i=null,i.g.set(Ce(i,c),D(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const b=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=b;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),i.push(A)}}return this.i=i.join("&")};function Ce(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function su(i,c){c&&!i.j&&(Zt(i),i.i=null,i.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(mo(this,f),_o(this,A,h))},i)),i.j=c}function iu(i,c){const h=new un;if(l.Image){const f=new Image;f.onload=R(te,h,"TestLoadImage: loaded",!0,c,f),f.onerror=R(te,h,"TestLoadImage: error",!1,c,f),f.onabort=R(te,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=R(te,h,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function ou(i,c){const h=new un,f=new AbortController,A=setTimeout(()=>{f.abort(),te(h,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(A),b.ok?te(h,"TestPingServer: ok",!0,c):te(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),te(h,"TestPingServer: error",!1,c)})}function te(i,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function au(){this.g=new ql}function cu(i,c,h){const f=h||"";try{uo(i,function(A,b){let k=A;d(A)&&(k=cs(A)),c.push(f+b+"="+encodeURIComponent(k))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function mn(i){this.l=i.Ub||null,this.j=i.eb||!1}S(mn,ls),mn.prototype.g=function(){return new nr(this.l,this.j)},mn.prototype.i=function(i){return function(){return i}}({});function nr(i,c){Et.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(nr,Et),n=nr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,_n(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,_n(this)),this.g&&(this.readyState=3,_n(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function yo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?gn(this):_n(this),this.readyState==3&&yo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,gn(this))},n.Qa=function(i){this.g&&(this.response=i,gn(this))},n.ga=function(){this.g&&gn(this)};function gn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,_n(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=c.next();return i.join(`\r
`)};function _n(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(nr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Eo(i){let c="";return N(i,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Es(i,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=Eo(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):st(i,c,h))}function ct(i){Et.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ct,Et);var lu=/^https?$/i,uu=["POST","PUT"];n=ct.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ds.g(),this.v=this.o?Ki(this.o):Ki(ds),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(b){vo(this,b);return}if(i=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),A=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(uu,c,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,k]of h)this.g.setRequestHeader(b,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Io(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){vo(this,b)}};function vo(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,To(i),rr(i)}function To(i){i.A||(i.A=!0,bt(i,"complete"),bt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,bt(this,"complete"),bt(this,"abort"),rr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rr(this,!0)),ct.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?wo(this):this.bb())},n.bb=function(){wo(this)};function wo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||zt(i)!=4||i.Z()!=2)){if(i.u&&zt(i)==4)qi(i.Ea,0,i);else if(bt(i,"readystatechange"),zt(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=k===0){var A=String(i.D).match(ho)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),f=!lu.test(A?A.toLowerCase():"")}h=f}if(h)bt(i,"complete"),bt(i,"success");else{i.m=6;try{var b=2<zt(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",To(i)}}finally{rr(i)}}}}function rr(i,c){if(i.g){Io(i);const h=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||bt(i,"ready");try{h.onreadystatechange=f}catch{}}}function Io(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function zt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),jl(c)}};function Ao(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function hu(i){const c={};i=(i.g&&2<=zt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(F(i[f]))continue;var h=T(i[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[A]||[];c[A]=b,b.push(h)}y(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yn(i,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||c}function Ro(i){this.Aa=0,this.i=[],this.j=new un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yn("baseRetryDelayMs",5e3,i),this.cb=yn("retryDelaySeedMs",1e4,i),this.Wa=yn("forwardChannelMaxRetries",2,i),this.wa=yn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new io(i&&i.concurrentRequestLimit),this.Da=new au,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ro.prototype,n.la=8,n.G=1,n.connect=function(i,c,h,f){St(0),this.W=i,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=xo(this,null,this.W),ir(this)};function vs(i){if(bo(i),i.G==3){var c=i.U++,h=qt(i.I);if(st(h,"SID",i.K),st(h,"RID",c),st(h,"TYPE","terminate"),En(i,h),c=new Jt(i,i.j,c),c.L=2,c.v=er(qt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Mo(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Jn(c)}No(i)}function sr(i){i.g&&(ws(i),i.g.cancel(),i.g=null)}function bo(i){sr(i),i.u&&(l.clearTimeout(i.u),i.u=null),or(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function ir(i){if(!oo(i.h)&&!i.s){i.s=!0;var c=i.Ga;nn||Fi(),rn||(nn(),rn=!0),ts.add(c,i),i.B=0}}function du(i,c){return ao(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ln(w(i.Ga,i,c),ko(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Jt(this,this.j,i);let b=this.o;if(this.S&&(b?(b=m(b),E(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Po(this,A,c),h=qt(this.I),st(h,"RID",i),st(h,"CVER",22),this.D&&st(h,"X-HTTP-Session-Id",this.D),En(this,h),b&&(this.O?c="headers="+encodeURIComponent(String(Eo(b)))+"&"+c:this.m&&Es(h,this.m,b)),ys(this.h,A),this.Ua&&st(h,"TYPE","init"),this.P?(st(h,"$req",c),st(h,"SID","null"),A.T=!0,ps(A,h,null)):ps(A,h,c),this.G=2}}else this.G==3&&(i?So(this,i):this.i.length==0||oo(this.h)||So(this))};function So(i,c){var h;c?h=c.l:h=i.U++;const f=qt(i.I);st(f,"SID",i.K),st(f,"RID",h),st(f,"AID",i.T),En(i,f),i.m&&i.o&&Es(f,i.m,i.o),h=new Jt(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),c&&(i.i=c.D.concat(i.i)),c=Po(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ys(i.h,h),ps(h,f,c)}function En(i,c){i.H&&N(i.H,function(h,f){st(c,f,h)}),i.l&&uo({},function(h,f){st(c,f,h)})}function Po(i,c,h){h=Math.min(i.i.length,h);var f=i.l?w(i.l.Na,i.l,i):null;t:{var A=i.i;let b=-1;for(;;){const k=["count="+h];b==-1?0<h?(b=A[0].g,k.push("ofs="+b)):b=0:k.push("ofs="+b);let nt=!0;for(let pt=0;pt<h;pt++){let J=A[pt].g;const vt=A[pt].map;if(J-=b,0>J)b=Math.max(0,A[pt].g-100),nt=!1;else try{cu(vt,k,"req"+J+"_")}catch{f&&f(vt)}}if(nt){f=k.join("&");break t}}}return i=i.i.splice(0,h),c.D=i,f}function Co(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;nn||Fi(),rn||(nn(),rn=!0),ts.add(c,i),i.v=0}}function Ts(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ln(w(i.Fa,i),ko(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Vo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ln(w(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),sr(this),Vo(this))};function ws(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function Vo(i){i.g=new Jt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=qt(i.qa);st(c,"RID","rpc"),st(c,"SID",i.K),st(c,"AID",i.T),st(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&st(c,"TO",i.ja),st(c,"TYPE","xmlhttp"),En(i,c),i.m&&i.o&&Es(c,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=er(qt(c)),h.m=null,h.P=!0,no(h,i)}n.Za=function(){this.C!=null&&(this.C=null,sr(this),Ts(this),St(19))};function or(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function Do(i,c){var h=null;if(i.g==c){or(i),ws(i),i.g=null;var f=2}else if(_s(i.h,c))h=c.D,co(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=i.B;f=Qn(),bt(f,new Ji(f,h)),ir(i)}else Co(i);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&du(i,c)||f==2&&Ts(i)))switch(h&&0<h.length&&(c=i.h,c.i=c.i.concat(h)),A){case 1:_e(i,5);break;case 4:_e(i,10);break;case 3:_e(i,6);break;default:_e(i,2)}}}function ko(i,c){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*c}function _e(i,c){if(i.j.info("Error code "+c),c==2){var h=w(i.fb,i),f=i.Xa;const A=!f;f=new ge(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Zn(f,"https"),er(f),A?iu(f.toString(),h):ou(f.toString(),h)}else St(2);i.G=0,i.l&&i.l.sa(c),No(i),bo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function No(i){if(i.G=0,i.ka=[],i.l){const c=lo(i.h);(c.length!=0||i.i.length!=0)&&(P(i.ka,c),P(i.ka,i.i),i.h.i.length=0,D(i.i),i.i.length=0),i.l.ra()}}function xo(i,c,h){var f=h instanceof ge?qt(h):new ge(h);if(f.g!="")c&&(f.g=c+"."+f.g),tr(f,f.s);else{var A=l.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var b=new ge(null);f&&Zn(b,f),c&&(b.g=c),A&&tr(b,A),h&&(b.l=h),f=b}return h=i.D,c=i.ya,h&&c&&st(f,h,c),st(f,"VER",i.la),En(i,f),f}function Mo(i,c,h){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new ct(new mn({eb:h})):new ct(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oo(){}n=Oo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ar(){}ar.prototype.g=function(i,c){return new Pt(i,c)};function Pt(i,c){Et.call(this),this.g=new Ro(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!F(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!F(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Ve(this)}S(Pt,Et),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){vs(this.g)},Pt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=cs(i),i=h);c.i.push(new Ql(c.Ya++,i)),c.G==3&&ir(c)},Pt.prototype.N=function(){this.g.l=null,delete this.j,vs(this.g),delete this.g,Pt.aa.N.call(this)};function Lo(i){us.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const h in c){i=h;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}S(Lo,us);function Fo(){hs.call(this),this.status=1}S(Fo,hs);function Ve(i){this.g=i}S(Ve,Oo),Ve.prototype.ua=function(){bt(this.g,"a")},Ve.prototype.ta=function(i){bt(this.g,new Lo(i))},Ve.prototype.sa=function(i){bt(this.g,new Fo)},Ve.prototype.ra=function(){bt(this.g,"b")},ar.prototype.createWebChannel=ar.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,_c=function(){return new ar},gc=function(){return Qn()},mc=pe,Ks={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xn.NO_ERROR=0,Xn.TIMEOUT=8,Xn.HTTP_ERROR=6,mr=Xn,Zi.COMPLETE="complete",pc=Zi,Wi.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",Et.prototype.listen=Et.prototype.K,Tn=Wi,fc=mn,ct.prototype.listenOnce=ct.prototype.L,ct.prototype.getLastError=ct.prototype.Ka,ct.prototype.getLastErrorCode=ct.prototype.Ba,ct.prototype.getStatus=ct.prototype.Z,ct.prototype.getResponseJson=ct.prototype.Oa,ct.prototype.getResponseText=ct.prototype.oa,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Ha,dc=ct}).apply(typeof lr<"u"?lr:typeof self<"u"?self:typeof window<"u"?window:{});const ua="@firebase/firestore";/**
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
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let Je="10.12.3";/**
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
 */const Ie=new ic("@firebase/firestore");function vn(){return Ie.logLevel}function x(n,...t){if(Ie.logLevel<=Y.DEBUG){const e=t.map(di);Ie.debug(`Firestore (${Je}): ${n}`,...e)}}function Qt(n,...t){if(Ie.logLevel<=Y.ERROR){const e=t.map(di);Ie.error(`Firestore (${Je}): ${n}`,...e)}}function ze(n,...t){if(Ie.logLevel<=Y.WARN){const e=t.map(di);Ie.warn(`Firestore (${Je}): ${n}`,...e)}}function di(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function q(n="Unexpected state"){const t=`FIRESTORE (${Je}) INTERNAL ASSERTION FAILED: `+n;throw Qt(t),new Error(t)}function rt(n,t){n||q()}function H(n,t){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Ye{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ie{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class yc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $d{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class jd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class qd{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let o=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ie,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ie)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string"),new yc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string"),new It(t)}}class zd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Hd{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new zd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(rt(typeof e.token=="string"),this.R=e.token,new Gd(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Wd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Ec{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Wd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function Z(n,t){return n<t?-1:n>t?1:0}function He(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class dt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new L(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new dt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new z(t)}static min(){return new z(new dt(0,0))}static max(){return new z(new dt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class kn{constructor(t,e,r){e===void 0?e=0:e>t.length&&q(),r===void 0?r=t.length-e:r>t.length-e&&q(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return kn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof kn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class it extends kn{construct(t,e,r){return new it(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new it(e)}static emptyPath(){return new it([])}}const Qd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends kn{construct(t,e,r){return new gt(t,e,r)}static isValidIdentifier(t){return Qd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new L(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new L(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new L(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gt(e)}static emptyPath(){return new gt([])}}/**
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
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(it.fromString(t))}static fromName(t){return new U(it.fromString(t).popFirst(5))}static empty(){return new U(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&it.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return it.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new it(t.slice()))}}function Xd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new dt(e+1,0):new dt(e,r));return new le(s,U.empty(),t)}function Yd(n){return new le(n.readTime,n.key,-1)}class le{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new le(z.min(),U.empty(),-1)}static max(){return new le(z.max(),U.empty(),-1)}}function Jd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=U.comparator(n.documentKey,t.documentKey),e!==0?e:Z(n.largestBatchId,t.largestBatchId))}/**
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
 */const Zd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Un(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Zd)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},u=>r(u))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const d=u;e(t[d]).next(p=>{a[d]=p,++l,l===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function ef(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Bn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}fi.oe=-1;function jr(n){return n==null}function Cr(n){return n===0&&1/n==-1/0}function nf(n){return typeof n=="number"&&Number.isInteger(n)&&!Cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ha(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ze(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function vc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class at{constructor(t,e){this.comparator=t,this.root=e||mt.EMPTY}insert(t,e){return new at(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(t){return new at(this.comparator,this.root.remove(t,this.comparator).copy(null,null,mt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ur(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ur(this.root,t,this.comparator,!1)}getReverseIterator(){return new ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ur(this.root,t,this.comparator,!0)}}class ur{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class mt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??mt.RED,this.left=s??mt.EMPTY,this.right=o??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new mt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const t=this.left.check();if(t!==this.right.check())throw q();return t+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,r,s,o){return this}insert(t,e,r){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _t{constructor(t){this.comparator=t,this.data=new at(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new da(this.data.getIterator())}getIteratorFrom(t){return new da(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof _t)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new _t(this.comparator);return e.data=t,e}}class da{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(t){this.fields=t,t.sort(gt.comparator)}static empty(){return new xt([])}unionWith(t){let e=new _t(gt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return He(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Tc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Tc("Invalid base64 string: "+o):o}}(t);return new Rt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Rt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const rf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ue(n){if(rt(!!n),typeof n=="string"){let t=0;const e=rf.exec(n);if(rt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ae(n){return typeof n=="string"?Rt.fromBase64String(n):Rt.fromUint8Array(n)}/**
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
 */function pi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function mi(n){const t=n.mapValue.fields.__previous_value__;return pi(t)?mi(t):t}function Nn(n){const t=ue(n.mapValue.fields.__local_write_time__.timestampValue);return new dt(t.seconds,t.nanos)}/**
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
 */class sf{constructor(t,e,r,s,o,a,l,u,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class xn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const hr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Re(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pi(n)?4:of(n)?9007199254740991:10:q()}function Ut(n,t){if(n===t)return!0;const e=Re(n);if(e!==Re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Nn(n).isEqual(Nn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ue(s.timestampValue),l=ue(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ae(s.bytesValue).isEqual(Ae(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return ut(s.geoPointValue.latitude)===ut(o.geoPointValue.latitude)&&ut(s.geoPointValue.longitude)===ut(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ut(s.integerValue)===ut(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ut(s.doubleValue),l=ut(o.doubleValue);return a===l?Cr(a)===Cr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return He(n.arrayValue.values||[],t.arrayValue.values||[],Ut);case 10:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(ha(a)!==ha(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ut(a[u],l[u])))return!1;return!0}(n,t);default:return q()}}function Mn(n,t){return(n.values||[]).find(e=>Ut(e,t))!==void 0}function Ge(n,t){if(n===t)return 0;const e=Re(n),r=Re(t);if(e!==r)return Z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=ut(o.integerValue||o.doubleValue),u=ut(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return fa(n.timestampValue,t.timestampValue);case 4:return fa(Nn(n),Nn(t));case 5:return Z(n.stringValue,t.stringValue);case 6:return function(o,a){const l=Ae(o),u=Ae(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=Z(l[d],u[d]);if(p!==0)return p}return Z(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=Z(ut(o.latitude),ut(a.latitude));return l!==0?l:Z(ut(o.longitude),ut(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const l=o.values||[],u=a.values||[];for(let d=0;d<l.length&&d<u.length;++d){const p=Ge(l[d],u[d]);if(p)return p}return Z(l.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===hr.mapValue&&a===hr.mapValue)return 0;if(o===hr.mapValue)return 1;if(a===hr.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let v=0;v<u.length&&v<p.length;++v){const w=Z(u[v],p[v]);if(w!==0)return w;const R=Ge(l[u[v]],d[p[v]]);if(R!==0)return R}return Z(u.length,p.length)}(n.mapValue,t.mapValue);default:throw q()}}function fa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Z(n,t);const e=ue(n),r=ue(t),s=Z(e.seconds,r.seconds);return s!==0?s:Z(e.nanos,r.nanos)}function Ke(n){return Ws(n)}function Ws(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ue(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ae(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return U.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ws(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ws(e.fields[a])}`;return s+"}"}(n.mapValue):q()}function Qs(n){return!!n&&"integerValue"in n}function gi(n){return!!n&&"arrayValue"in n}function pa(n){return!!n&&"nullValue"in n}function ma(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gr(n){return!!n&&"mapValue"in n}function An(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ze(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=An(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=An(n.arrayValue.values[e]);return t}return Object.assign({},n)}function of(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!gr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=An(e)}setAll(t){let e=gt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=An(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());gr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];gr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ze(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Vt(An(this.value))}}function wc(n){const t=[];return Ze(n.fields,(e,r)=>{const s=new gt([e]);if(gr(r)){const o=wc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new xt(t)}/**
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
 */class At{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new At(t,0,z.min(),z.min(),z.min(),Vt.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,z.min(),z.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,z.min(),z.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vr{constructor(t,e){this.position=t,this.inclusive=e}}function ga(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),e.key):r=Ge(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function _a(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ut(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Dr{constructor(t,e="asc"){this.field=t,this.dir=e}}function af(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ic{}class ht extends Ic{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new lf(t,e,r):e==="array-contains"?new df(t,r):e==="in"?new ff(t,r):e==="not-in"?new pf(t,r):e==="array-contains-any"?new mf(t,r):new ht(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new uf(t,r):new hf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ge(e,this.value)):e!==null&&Re(this.value)===Re(e)&&this.matchesComparison(Ge(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends Ic{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Bt(t,e)}matches(t){return Ac(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ac(n){return n.op==="and"}function Rc(n){return cf(n)&&Ac(n)}function cf(n){for(const t of n.filters)if(t instanceof Bt)return!1;return!0}function Xs(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+Ke(n.value);if(Rc(n))return n.filters.map(t=>Xs(t)).join(",");{const t=n.filters.map(e=>Xs(e)).join(",");return`${n.op}(${t})`}}function bc(n,t){return n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.field.isEqual(s.field)&&Ut(r.value,s.value)}(n,t):n instanceof Bt?function(r,s){return s instanceof Bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&bc(a,s.filters[l]),!0):!1}(n,t):void q()}function Sc(n){return n instanceof ht?function(e){return`${e.field.canonicalString()} ${e.op} ${Ke(e.value)}`}(n):n instanceof Bt?function(e){return e.op.toString()+" {"+e.getFilters().map(Sc).join(" ,")+"}"}(n):"Filter"}class lf extends ht{constructor(t,e,r){super(t,e,r),this.key=U.fromName(r.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.matchesComparison(e)}}class uf extends ht{constructor(t,e){super(t,"in",e),this.keys=Pc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class hf extends ht{constructor(t,e){super(t,"not-in",e),this.keys=Pc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Pc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>U.fromName(r.referenceValue))}class df extends ht{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gi(e)&&Mn(e.arrayValue,this.value)}}class ff extends ht{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Mn(this.value.arrayValue,e)}}class pf extends ht{constructor(t,e){super(t,"not-in",e)}matches(t){if(Mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Mn(this.value.arrayValue,e)}}class mf extends ht{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Mn(this.value.arrayValue,r))}}/**
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
 */class gf{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function ya(n,t=null,e=[],r=[],s=null,o=null,a=null){return new gf(n,t,e,r,s,o,a)}function _i(n){const t=H(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Xs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),jr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ke(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ke(r)).join(",")),t.ue=e}return t.ue}function yi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!af(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!bc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!_a(n.startAt,t.startAt)&&_a(n.endAt,t.endAt)}function Ys(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class qr{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _f(n,t,e,r,s,o,a,l){return new qr(n,t,e,r,s,o,a,l)}function Cc(n){return new qr(n)}function Ea(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yf(n){return n.collectionGroup!==null}function Rn(n){const t=H(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new _t(gt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Dr(o,r))}),e.has(gt.keyField().canonicalString())||t.ce.push(new Dr(gt.keyField(),r))}return t.ce}function Lt(n){const t=H(n);return t.le||(t.le=Ef(t,Rn(n))),t.le}function Ef(n,t){if(n.limitType==="F")return ya(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Dr(s.field,o)});const e=n.endAt?new Vr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Vr(n.startAt.position,n.startAt.inclusive):null;return ya(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Js(n,t,e){return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function zr(n,t){return yi(Lt(n),Lt(t))&&n.limitType===t.limitType}function Vc(n){return`${_i(Lt(n))}|lt:${n.limitType}`}function Me(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Sc(s)).join(", ")}]`),jr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ke(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ke(s)).join(",")),`Target(${r})`}(Lt(n))}; limitType=${n.limitType})`}function Hr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):U.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Rn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=ga(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Rn(r),s)||r.endAt&&!function(a,l,u){const d=ga(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Rn(r),s))}(n,t)}function vf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dc(n){return(t,e)=>{let r=!1;for(const s of Rn(n)){const o=Tf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Tf(n,t,e){const r=n.field.isKeyField()?U.comparator(t.key,e.key):function(o,a,l){const u=a.data.field(o),d=l.data.field(o);return u!==null&&d!==null?Ge(u,d):q()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
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
 */class tn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ze(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return vc(this.inner)}size(){return this.innerSize}}/**
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
 */const wf=new at(U.comparator);function Xt(){return wf}const kc=new at(U.comparator);function wn(...n){let t=kc;for(const e of n)t=t.insert(e.key,e);return t}function Nc(n){let t=kc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ve(){return bn()}function xc(){return bn()}function bn(){return new tn(n=>n.toString(),(n,t)=>n.isEqual(t))}const If=new at(U.comparator),Af=new _t(U.comparator);function W(...n){let t=Af;for(const e of n)t=t.add(e);return t}const Rf=new _t(Z);function bf(){return Rf}/**
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
 */function Mc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cr(t)?"-0":t}}function Oc(n){return{integerValue:""+n}}function Sf(n,t){return nf(t)?Oc(t):Mc(n,t)}/**
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
 */class Gr{constructor(){this._=void 0}}function Pf(n,t,e){return n instanceof kr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&pi(o)&&(o=mi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof On?Fc(n,t):n instanceof Ln?Uc(n,t):function(s,o){const a=Lc(s,o),l=va(a)+va(s.Pe);return Qs(a)&&Qs(s.Pe)?Oc(l):Mc(s.serializer,l)}(n,t)}function Cf(n,t,e){return n instanceof On?Fc(n,t):n instanceof Ln?Uc(n,t):e}function Lc(n,t){return n instanceof Nr?function(r){return Qs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class kr extends Gr{}class On extends Gr{constructor(t){super(),this.elements=t}}function Fc(n,t){const e=Bc(t);for(const r of n.elements)e.some(s=>Ut(s,r))||e.push(r);return{arrayValue:{values:e}}}class Ln extends Gr{constructor(t){super(),this.elements=t}}function Uc(n,t){let e=Bc(t);for(const r of n.elements)e=e.filter(s=>!Ut(s,r));return{arrayValue:{values:e}}}class Nr extends Gr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function va(n){return ut(n.integerValue||n.doubleValue)}function Bc(n){return gi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Vf(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof On&&s instanceof On||r instanceof Ln&&s instanceof Ln?He(r.elements,s.elements,Ut):r instanceof Nr&&s instanceof Nr?Ut(r.Pe,s.Pe):r instanceof kr&&s instanceof kr}(n.transform,t.transform)}class Df{constructor(t,e){this.version=t,this.transformResults=e}}class Gt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Gt}static exists(t){return new Gt(void 0,t)}static updateTime(t){return new Gt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _r(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Kr{}function $c(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new qc(n.key,Gt.none()):new $n(n.key,n.data,Gt.none());{const e=n.data,r=Vt.empty();let s=new _t(gt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new be(n.key,r,new xt(s.toArray()),Gt.none())}}function kf(n,t,e){n instanceof $n?function(s,o,a){const l=s.value.clone(),u=wa(s.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof be?function(s,o,a){if(!_r(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=wa(s.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(jc(s)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Sn(n,t,e,r){return n instanceof $n?function(o,a,l,u){if(!_r(o.precondition,a))return l;const d=o.value.clone(),p=Ia(o.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof be?function(o,a,l,u){if(!_r(o.precondition,a))return l;const d=Ia(o.fieldTransforms,u,a),p=a.data;return p.setAll(jc(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,a,l){return _r(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Nf(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Lc(r.transform,s||null);o!=null&&(e===null&&(e=Vt.empty()),e.set(r.field,o))}return e||null}function Ta(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&He(r,s,(o,a)=>Vf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class $n extends Kr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class be extends Kr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function jc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function wa(n,t,e){const r=new Map;rt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Cf(a,l,e[s]))}return r}function Ia(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Pf(o,a,t))}return r}class qc extends Kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xf extends Kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Mf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&kf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Sn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Sn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=xc();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const u=$c(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),W())}isEqual(t){return this.batchId===t.batchId&&He(this.mutations,t.mutations,(e,r)=>Ta(e,r))&&He(this.baseMutations,t.baseMutations,(e,r)=>Ta(e,r))}}class Ei{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){rt(t.mutations.length===r.length);let s=function(){return If}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ei(t,e,r,s)}}/**
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
 */class Of{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Lf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var lt,X;function Ff(n){switch(n){default:return q();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function zc(n){if(n===void 0)return Qt("GRPC error has no .code"),V.UNKNOWN;switch(n){case lt.OK:return V.OK;case lt.CANCELLED:return V.CANCELLED;case lt.UNKNOWN:return V.UNKNOWN;case lt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case lt.INTERNAL:return V.INTERNAL;case lt.UNAVAILABLE:return V.UNAVAILABLE;case lt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case lt.NOT_FOUND:return V.NOT_FOUND;case lt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case lt.ABORTED:return V.ABORTED;case lt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case lt.DATA_LOSS:return V.DATA_LOSS;default:return q()}}(X=lt||(lt={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Uf(){return new TextEncoder}/**
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
 */const Bf=new Te([4294967295,4294967295],0);function Aa(n){const t=Uf().encode(n),e=new hc;return e.update(t),new Uint8Array(e.digest())}function Ra(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Te([e,r],0),new Te([s,o],0)]}class vi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new In(`Invalid padding: ${e}`);if(r<0)throw new In(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new In(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new In(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Te.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(Te.fromNumber(r)));return s.compare(Bf)===1&&(s=new Te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Aa(t),[r,s]=Ra(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new vi(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Aa(t),[r,s]=Ra(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class In extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,jn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Wr(z.min(),s,new at(Z),Xt(),W())}}class jn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new jn(r,e,W(),W(),W())}}/**
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
 */class yr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Hc{constructor(t,e){this.targetId=t,this.me=e}}class Gc{constructor(t,e,r=Rt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ba{constructor(){this.fe=0,this.ge=Pa(),this.pe=Rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=W(),e=W(),r=W();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:q()}}),new jn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Pa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,rt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $f{constructor(t){this.Le=t,this.Be=new Map,this.ke=Xt(),this.qe=Sa(),this.Qe=new at(Z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:q()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Ys(o))if(r===0){const a=new U(o.path);this.Ue(e,a,At.newNoDocument(a,z.min()))}else rt(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=Ae(r).toUint8Array()}catch(u){if(u instanceof Tc)return ze("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vi(a,s,o)}catch(u){return ze(u instanceof In?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&Ys(l.target)){const u=new U(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,At.newNoDocument(u,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=W();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Wr(t,e,this.Qe,this.ke,r);return this.ke=Xt(),this.qe=Sa(),this.Qe=new at(Z),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ba,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new _t(Z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ba),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Sa(){return new at(U.comparator)}function Pa(){return new at(U.comparator)}const jf={asc:"ASCENDING",desc:"DESCENDING"},qf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zf={and:"AND",or:"OR"};class Hf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Zs(n,t){return n.useProto3Json||jr(t)?t:{value:t}}function xr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Kc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Gf(n,t){return xr(n,t.toTimestamp())}function Ft(n){return rt(!!n),z.fromTimestamp(function(e){const r=ue(e);return new dt(r.seconds,r.nanos)}(n))}function Ti(n,t){return ti(n,t).canonicalString()}function ti(n,t){const e=function(s){return new it(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Wc(n){const t=it.fromString(n);return rt(Zc(t)),t}function ei(n,t){return Ti(n.databaseId,t.path)}function ks(n,t){const e=Wc(t);if(e.get(1)!==n.databaseId.projectId)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new U(Xc(e))}function Qc(n,t){return Ti(n.databaseId,t)}function Kf(n){const t=Wc(n);return t.length===4?it.emptyPath():Xc(t)}function ni(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xc(n){return rt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ca(n,t,e){return{name:ei(n,t),fields:e.value.mapValue.fields}}function Wf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(rt(p===void 0||typeof p=="string"),Rt.fromBase64String(p||"")):(rt(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Rt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const p=d.code===void 0?V.UNKNOWN:zc(d.code);return new L(p,d.message||"")}(a);e=new Gc(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ks(n,r.document.name),o=Ft(r.document.updateTime),a=r.document.createTime?Ft(r.document.createTime):z.min(),l=new Vt({mapValue:{fields:r.document.fields}}),u=At.newFoundDocument(s,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];e=new yr(d,p,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ks(n,r.document),o=r.readTime?Ft(r.readTime):z.min(),a=At.newNoDocument(s,o),l=r.removedTargetIds||[];e=new yr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ks(n,r.document),o=r.removedTargetIds||[];e=new yr([],o,s,null)}else{if(!("filter"in t))return q();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Lf(s,o),l=r.targetId;e=new Hc(l,a)}}return e}function Qf(n,t){let e;if(t instanceof $n)e={update:Ca(n,t.key,t.value)};else if(t instanceof qc)e={delete:ei(n,t.key)};else if(t instanceof be)e={update:Ca(n,t.key,t.data),updateMask:sp(t.fieldMask)};else{if(!(t instanceof xf))return q();e={verify:ei(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof kr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof On)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ln)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Nr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw q()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Gf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:q()}(n,t.precondition)),e}function Xf(n,t){return n&&n.length>0?(rt(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Ft(s.updateTime):Ft(o);return a.isEqual(z.min())&&(a=Ft(o)),new Df(a,s.transformResults||[])}(e,t))):[]}function Yf(n,t){return{documents:[Qc(n,t.path)]}}function Jf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Qc(n,s);const o=function(d){if(d.length!==0)return Jc(Bt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(w){return{field:Oe(w.field),direction:ep(w.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Zs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function Zf(n){let t=Kf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){rt(r===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(v){const w=Yc(v);return w instanceof Bt&&Rc(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(w=>function(S){return new Dr(Le(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(w))}(e.orderBy));let l=null;e.limit&&(l=function(v){let w;return w=typeof v=="object"?v.value:v,jr(w)?null:w}(e.limit));let u=null;e.startAt&&(u=function(v){const w=!!v.before,R=v.values||[];return new Vr(R,w)}(e.startAt));let d=null;return e.endAt&&(d=function(v){const w=!v.before,R=v.values||[];return new Vr(R,w)}(e.endAt)),_f(t,s,a,o,l,"F",u,d)}function tp(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Yc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Le(e.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Le(e.unaryFilter.field);return ht.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Le(e.unaryFilter.field);return ht.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Le(e.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(e){return ht.create(Le(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Bt.create(e.compositeFilter.filters.map(r=>Yc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(n):q()}function ep(n){return jf[n]}function np(n){return qf[n]}function rp(n){return zf[n]}function Oe(n){return{fieldPath:n.canonicalString()}}function Le(n){return gt.fromServerFormat(n.fieldPath)}function Jc(n){return n instanceof ht?function(e){if(e.op==="=="){if(ma(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NAN"}};if(pa(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ma(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NOT_NAN"}};if(pa(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oe(e.field),op:np(e.op),value:e.value}}}(n):n instanceof Bt?function(e){const r=e.getFilters().map(s=>Jc(s));return r.length===1?r[0]:{compositeFilter:{op:rp(e.op),filters:r}}}(n):q()}function sp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ee{constructor(t,e,r,s,o=z.min(),a=z.min(),l=Rt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new ee(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class ip{constructor(t){this.ct=t}}function op(n){const t=Zf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Js(t,t.limit,"L"):t}/**
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
 */class ap{constructor(){this._n=new cp}addToCollectionParentIndex(t,e){return this._n.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(le.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(le.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class cp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new _t(it.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new _t(it.comparator)).toArray()}}/**
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
 */class We{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new We(0)}static Ln(){return new We(-1)}}/**
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
 */class lp{constructor(){this.changes=new tn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class up{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class hp{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Sn(r.mutation,s,xt.empty(),dt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,W()).next(()=>r))}getLocalViewOfDocuments(t,e,r=W()){const s=ve();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=wn();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ve();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,W()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=Xt();const a=bn(),l=function(){return bn()}();return e.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof be)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Sn(p.mutation,d,p.mutation.getFieldMask(),dt.now())):a.set(d.key,xt.empty())}),this.recalculateAndSaveOverlays(t,o).next(u=>(u.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var v;return l.set(d,new up(p,(v=a.get(d))!==null&&v!==void 0?v:null))}),l))}recalculateAndSaveOverlays(t,e){const r=bn();let s=new at((a,l)=>a-l),o=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let p=r.get(u)||xt.empty();p=l.applyToLocalView(d,p),r.set(u,p);const v=(s.get(l.batchId)||W()).add(u);s=s.insert(l.batchId,v)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,v=xc();p.forEach(w=>{if(!o.has(w)){const R=$c(e.get(w),r.get(w));R!==null&&v.set(w,R),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):yf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(ve());let l=-1,u=o;return a.next(d=>C.forEach(d,(p,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(t,p).next(w=>{u=u.insert(p,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,u,d,W())).next(p=>({batchId:l,changes:Nc(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next(r=>{let s=wn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=wn();return this.indexManager.getCollectionParents(t,o).next(l=>C.forEach(l,u=>{const d=function(v,w){return new qr(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,u.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(p=>{p.forEach((v,w)=>{a=a.insert(v,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,At.newInvalidDocument(p)))});let l=wn();return a.forEach((u,d)=>{const p=o.get(u);p!==void 0&&Sn(p.mutation,d,xt.empty(),dt.now()),Hr(e,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class dp{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return C.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ft(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:op(s.bundledQuery),readTime:Ft(s.readTime)}}(e)),C.resolve()}}/**
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
 */class fp{constructor(){this.overlays=new at(U.comparator),this.hr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ve();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=ve(),o=e.length+1,a=new U(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new at((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=ve(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=ve(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return C.resolve(l)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Of(e,r));let o=this.hr.get(e);o===void 0&&(o=W(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
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
 */class wi{constructor(){this.Pr=new _t(ft.Ir),this.Tr=new _t(ft.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new ft(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new ft(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new U(new it([])),r=new ft(e,t),s=new ft(e,t+1),o=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new U(new it([])),r=new ft(e,t),s=new ft(e,t+1);let o=W();return this.Tr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ft(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ft{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return U.comparator(t.key,e.key)||Z(t.pr,e.pr)}static Er(t,e){return Z(t.pr,e.pr)||U.comparator(t.key,e.key)}}/**
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
 */class pp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new _t(ft.Ir)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Mf(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new ft(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ft(e,0),s=new ft(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],a=>{const l=this.Sr(a.pr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new _t(Z);return e.forEach(s=>{const o=new ft(s,0),a=new ft(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],l=>{r=r.add(l.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;U.isDocumentKey(o)||(o=o.child(""));const a=new ft(new U(o),0);let l=new _t(Z);return this.wr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.pr)),!0)},a),C.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){rt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(e.mutations,s=>{const o=new ft(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new ft(e,0),s=this.wr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class mp{constructor(t){this.vr=t,this.docs=function(){return new at(U.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Xt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():At.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Xt();const a=e.path,l=new U(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Jd(Yd(p),r)<=0||(s.has(p.key)||Hr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){q()}Fr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new gp(this)}getSize(t){return C.resolve(this.size)}}class gp extends lp{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class _p{constructor(t){this.persistence=t,this.Mr=new tn(e=>_i(e),yi),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new wi,this.targetCount=0,this.Lr=We.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),C.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new We(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.qn(e),C.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Nr.containsKey(e))}}/**
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
 */class yp{constructor(t,e){this.Br={},this.overlays={},this.kr=new fi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new _p(this),this.indexManager=new ap,this.remoteDocumentCache=function(s){return new mp(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ip(e),this.$r=new dp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new fp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new pp(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const s=new Ep(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class Ep extends tf{constructor(t){super(),this.currentSequenceNumber=t}}class Ii{constructor(t){this.persistence=t,this.zr=new wi,this.jr=null}static Hr(t){return new Ii(t)}get Jr(){if(this.jr)return this.jr;throw q()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),C.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{const s=U.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return C.or([()=>C.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Ai{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=W(),s=W();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ai(t,e.fromCache,r,s)}}/**
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
 */class vp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Tp{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ah()?8:ef(wh())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new vp;return this.Ji(t,e,a).next(l=>{if(o.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(vn()<=Y.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Me(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):(vn()<=Y.DEBUG&&x("QueryEngine","Query:",Me(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(vn()<=Y.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Me(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Lt(e))):C.resolve())}ji(t,e){if(Ea(e))return C.resolve(null);let r=Lt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Js(e,null,"F"),r=Lt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=W(...o);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.Zi(e,l);return this.Xi(e,d,a,u.readTime)?this.ji(t,Js(e,null,"F")):this.es(t,d,e,u)}))})))}Hi(t,e,r,s){return Ea(e)||s.isEqual(z.min())?C.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,s)?C.resolve(null):(vn()<=Y.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Me(e)),this.es(t,a,e,Xd(s,-1)).next(l=>l))})}Zi(t,e){let r=new _t(Dc(t));return e.forEach((s,o)=>{Hr(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return vn()<=Y.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Me(e)),this.zi.getDocumentsMatchingQuery(t,e,le.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class wp{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new at(Z),this.rs=new tn(o=>_i(o),yi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hp(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Ip(n,t,e,r){return new wp(n,t,e,r)}async function tl(n,t){const e=H(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let u=W();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return e.localDocuments.getDocuments(r,u).next(d=>({us:d,removedBatchIds:a,addedBatchIds:l}))})})}function Ap(n,t){const e=H(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const v=d.batch,w=v.keys();let R=C.resolve();return w.forEach(S=>{R=R.next(()=>p.getEntry(u,S)).next(D=>{const P=d.docVersions.get(S);rt(P!==null),D.version.compareTo(P)<0&&(v.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=W();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function el(n){const t=H(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Rp(n,t){const e=H(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const l=[];t.targetChanges.forEach((p,v)=>{const w=s.get(v);if(!w)return;l.push(e.Qr.removeMatchingKeys(o,p.removedDocuments,v).next(()=>e.Qr.addMatchingKeys(o,p.addedDocuments,v)));let R=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?R=R.withResumeToken(Rt.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),s=s.insert(v,R),function(D,P,M){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(w,R,p)&&l.push(e.Qr.updateTargetData(o,R))});let u=Xt(),d=W();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(bp(o,a,t.documentUpdates).next(p=>{u=p.cs,d=p.ls})),!r.isEqual(z.min())){const p=e.Qr.getLastRemoteSnapshotVersion(o).next(v=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return C.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(e.ns=s,o))}function bp(n,t,e){let r=W(),s=W();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Xt();return e.forEach((l,u)=>{const d=o.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(z.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):x("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{cs:a,ls:s}})}function Sp(n,t){const e=H(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Pp(n,t){const e=H(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Qr.allocateTargetId(r).next(a=>(s=new ee(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function ri(n,t,e){const r=H(n),s=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Bn(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Va(n,t,e){const r=H(n);let s=z.min(),o=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const v=H(u),w=v.rs.get(p);return w!==void 0?C.resolve(v.ns.get(w)):v.Qr.getTargetData(d,p)}(r,a,Lt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?s:z.min(),e?o:W())).next(l=>(Cp(r,vf(t),l),{documents:l,hs:o})))}function Cp(n,t,e){let r=n.ss.get(t)||z.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class Da{constructor(){this.activeTargetIds=bf()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vp{constructor(){this.no=new Da,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Da,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Dp{io(t){}shutdown(){}}/**
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
 */class ka{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dr=null;function Ns(){return dr===null?dr=function(){return 268435456+Math.round(2147483648*Math.random())}():dr++,"0x"+dr.toString(16)}/**
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
 */const kp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Np{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const wt="WebChannelConnection";class xp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,a){const l=Ns(),u=this.vo(e,r.toUriEncodedString());x("RestConnection",`Sending RPC '${e}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(e,u,d,s).then(p=>(x("RestConnection",`Received RPC '${e}' ${l}: `,p),p),p=>{throw ze("RestConnection",`RPC '${e}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}xo(e,r,s,o,a,l){return this.Co(e,r,s,o,a)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Je}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const s=kp[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=Ns();return new Promise((a,l)=>{const u=new dc;u.setWithCredentials(!0),u.listenOnce(pc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case mr.NO_ERROR:const p=u.getResponseJson();x(wt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case mr.TIMEOUT:x(wt,`RPC '${t}' ${o} timed out`),l(new L(V.DEADLINE_EXCEEDED,"Request time out"));break;case mr.HTTP_ERROR:const v=u.getStatus();if(x(wt,`RPC '${t}' ${o} failed with status:`,v,"response text:",u.getResponseText()),v>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const R=w==null?void 0:w.error;if(R&&R.status&&R.message){const S=function(P){const M=P.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(M)>=0?M:V.UNKNOWN}(R.status);l(new L(S,R.message))}else l(new L(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new L(V.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{x(wt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);x(wt,`RPC '${t}' ${o} sending request:`,s),u.send(e,"POST",d,r,15)})}Oo(t,e,r){const s=Ns(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=_c(),l=gc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new fc({})),this.Fo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const p=o.join("");x(wt,`Creating RPC '${t}' stream ${s}: ${p}`,u);const v=a.createWebChannel(p,u);let w=!1,R=!1;const S=new Np({lo:P=>{R?x(wt,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(w||(x(wt,`Opening RPC '${t}' stream ${s} transport.`),v.open(),w=!0),x(wt,`RPC '${t}' stream ${s} sending:`,P),v.send(P))},ho:()=>v.close()}),D=(P,M,F)=>{P.listen(M,G=>{try{F(G)}catch(O){setTimeout(()=>{throw O},0)}})};return D(v,Tn.EventType.OPEN,()=>{R||(x(wt,`RPC '${t}' stream ${s} transport opened.`),S.mo())}),D(v,Tn.EventType.CLOSE,()=>{R||(R=!0,x(wt,`RPC '${t}' stream ${s} transport closed`),S.po())}),D(v,Tn.EventType.ERROR,P=>{R||(R=!0,ze(wt,`RPC '${t}' stream ${s} transport errored:`,P),S.po(new L(V.UNAVAILABLE,"The operation could not be completed")))}),D(v,Tn.EventType.MESSAGE,P=>{var M;if(!R){const F=P.data[0];rt(!!F);const G=F,O=G.error||((M=G[0])===null||M===void 0?void 0:M.error);if(O){x(wt,`RPC '${t}' stream ${s} received error:`,O);const $=O.status;let N=function(g){const E=lt[g];if(E!==void 0)return zc(E)}($),y=O.message;N===void 0&&(N=V.INTERNAL,y="Unknown error status: "+$+" with message "+O.message),R=!0,S.po(new L(N,y)),v.close()}else x(wt,`RPC '${t}' stream ${s} received:`,F),S.yo(F)}}),D(l,mc.STAT_EVENT,P=>{P.stat===Ks.PROXY?x(wt,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===Ks.NOPROXY&&x(wt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function xs(){return typeof document<"u"?document:null}/**
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
 */function Qr(n){return new Hf(n,!0)}/**
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
 */class nl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class rl{constructor(t,e,r,s,o,a,l,u){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new nl(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Qt(e.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new L(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return x("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mp extends rl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=Wf(this.serializer,t),r=function(o){if(!("targetChange"in o))return z.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?Ft(a.readTime):z.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=ni(this.serializer),e.addTarget=function(o,a){let l;const u=a.target;if(l=Ys(u)?{documents:Yf(o,u)}:{query:Jf(o,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Kc(o,a.resumeToken);const d=Zs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){l.readTime=xr(o,a.snapshotVersion.toTimestamp());const d=Zs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=tp(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=ni(this.serializer),e.removeTarget=t,this.i_(e)}}class Op extends rl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(rt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Xf(t.writeResults,t.commitTime),r=Ft(t.commitTime);return this.listener.A_(r,e)}return rt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=ni(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Qf(this.serializer,r))};this.i_(e)}}/**
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
 */class Lp extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,ti(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(V.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,ti(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(V.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Fp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Qt(e),this.y_=!1):x("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Up{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{Se(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=H(u);d.M_.add(4),await qn(d),d.N_.set("Unknown"),d.M_.delete(4),await Xr(d)}(this))})}),this.N_=new Fp(r,s)}}async function Xr(n){if(Se(n))for(const t of n.x_)await t(!0)}async function qn(n){for(const t of n.x_)await t(!1)}function sl(n,t){const e=H(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Pi(e)?Si(e):en(e).Xo()&&bi(e,t))}function Ri(n,t){const e=H(n),r=en(e);e.F_.delete(t),r.Xo()&&il(e,t),e.F_.size===0&&(r.Xo()?r.n_():Se(e)&&e.N_.set("Unknown"))}function bi(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}en(n).P_(t)}function il(n,t){n.L_.xe(t),en(n).I_(t)}function Si(n){n.L_=new $f({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),en(n).start(),n.N_.w_()}function Pi(n){return Se(n)&&!en(n).Zo()&&n.F_.size>0}function Se(n){return H(n).M_.size===0}function ol(n){n.L_=void 0}async function Bp(n){n.N_.set("Online")}async function $p(n){n.F_.forEach((t,e)=>{bi(n,t)})}async function jp(n,t){ol(n),Pi(n)?(n.N_.D_(t),Si(n)):n.N_.set("Unknown")}async function qp(n,t,e){if(n.N_.set("Online"),t instanceof Gc&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,t)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Mr(n,r)}else if(t instanceof yr?n.L_.Ke(t):t instanceof Hc?n.L_.He(t):n.L_.We(t),!e.isEqual(z.min()))try{const r=await el(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.L_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=o.F_.get(d);p&&o.F_.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=o.F_.get(u);if(!p)return;o.F_.set(u,p.withResumeToken(Rt.EMPTY_BYTE_STRING,p.snapshotVersion)),il(o,u);const v=new ee(p.target,u,d,p.sequenceNumber);bi(o,v)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Mr(n,r)}}async function Mr(n,t,e){if(!Bn(t))throw t;n.M_.add(1),await qn(n),n.N_.set("Offline"),e||(e=()=>el(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Xr(n)})}function al(n,t){return t().catch(e=>Mr(n,e,t))}async function Yr(n){const t=H(n),e=he(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;zp(t);)try{const s=await Sp(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,Hp(t,s)}catch(s){await Mr(t,s)}cl(t)&&ll(t)}function zp(n){return Se(n)&&n.v_.length<10}function Hp(n,t){n.v_.push(t);const e=he(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function cl(n){return Se(n)&&!he(n).Zo()&&n.v_.length>0}function ll(n){he(n).start()}async function Gp(n){he(n).V_()}async function Kp(n){const t=he(n);for(const e of n.v_)t.d_(e.mutations)}async function Wp(n,t,e){const r=n.v_.shift(),s=Ei.from(r,t,e);await al(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Yr(n)}async function Qp(n,t){t&&he(n).E_&&await async function(r,s){if(function(a){return Ff(a)&&a!==V.ABORTED}(s.code)){const o=r.v_.shift();he(r).t_(),await al(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Yr(r)}}(n,t),cl(n)&&ll(n)}async function Na(n,t){const e=H(n);e.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Se(e);e.M_.add(3),await qn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Xr(e)}async function Xp(n,t){const e=H(n);t?(e.M_.delete(2),await Xr(e)):t||(e.M_.add(2),await qn(e),e.N_.set("Unknown"))}function en(n){return n.B_||(n.B_=function(e,r,s){const o=H(e);return o.f_(),new Mp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:Bp.bind(null,n),To:$p.bind(null,n),Ao:jp.bind(null,n),h_:qp.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),Pi(n)?Si(n):n.N_.set("Unknown")):(await n.B_.stop(),ol(n))})),n.B_}function he(n){return n.k_||(n.k_=function(e,r,s){const o=H(e);return o.f_(),new Op(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Gp.bind(null,n),Ao:Qp.bind(null,n),R_:Kp.bind(null,n),A_:Wp.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Yr(n)):(await n.k_.stop(),n.v_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class Ci{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Ci(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vi(n,t){if(Qt("AsyncQueue",`${t}: ${n}`),Bn(n))return new L(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class qe{constructor(t){this.comparator=t?(e,r)=>t(e,r)||U.comparator(e.key,r.key):(e,r)=>U.comparator(e.key,r.key),this.keyedMap=wn(),this.sortedSet=new at(this.comparator)}static emptySet(t){return new qe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof qe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new qe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class xa{constructor(){this.q_=new at(U.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):q():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Qe{constructor(t,e,r,s,o,a,l,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Qe(t,e,qe.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Yp{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Jp{constructor(){this.queries=new tn(t=>Vc(t),zr),this.onlineState="Unknown",this.z_=new Set}}async function Zp(n,t){const e=H(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new Yp,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Vi(a,`Initialization of query '${Me(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Di(e)}async function tm(n,t){const e=H(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function em(n,t){const e=H(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.U_)l.H_(s)&&(r=!0);a.K_=s}}r&&Di(e)}function nm(n,t,e){const r=H(n),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(e);r.queries.delete(t)}function Di(n){n.z_.forEach(t=>{t.next()})}var si,Ma;(Ma=si||(si={})).J_="default",Ma.Cache="cache";class rm{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Qe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==si.Cache}}/**
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
 */class ul{constructor(t){this.key=t}}class hl{constructor(t){this.key=t}}class sm{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=W(),this.mutatedKeys=W(),this.Ia=Dc(t),this.Ta=new qe(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new xa,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,v)=>{const w=s.get(p),R=Hr(this.query,v)?v:null,S=!!w&&this.mutatedKeys.has(w.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;w&&R?w.data.isEqual(R.data)?S!==D&&(r.track({type:3,doc:R}),P=!0):this.Ra(w,R)||(r.track({type:2,doc:R}),P=!0,(u&&this.Ia(R,u)>0||d&&this.Ia(R,d)<0)&&(l=!0)):!w&&R?(r.track({type:0,doc:R}),P=!0):w&&!R&&(r.track({type:1,doc:w}),P=!0,(u||d)&&(l=!0)),P&&(R?(a=a.add(R),o=D?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((p,v)=>function(R,S){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return D(R)-D(S)}(p.type,v.type)||this.Ia(p.doc,v.doc)),this.Va(r),s=s!=null&&s;const l=e&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,d=u!==this.ha;return this.ha=u,a.length!==0||d?{snapshot:new Qe(this.query,t.Ta,o,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new xa,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=W(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new hl(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new ul(r))}),e}pa(t){this.la=t.hs,this.Pa=W();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Qe.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class im{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class om{constructor(t){this.key=t,this.wa=!1}}class am{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new tn(l=>Vc(l),zr),this.Da=new Map,this.Ca=new Set,this.va=new at(U.comparator),this.Fa=new Map,this.Ma=new wi,this.xa={},this.Oa=new Map,this.Na=We.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function cm(n,t,e=!0){const r=_l(n);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await dl(r,t,e,!0),s}async function lm(n,t){const e=_l(n);await dl(e,t,!0,!1)}async function dl(n,t,e,r){const s=await Pp(n.localStore,Lt(t)),o=s.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await um(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&sl(n.remoteStore,s),l}async function um(n,t,e,r,s){n.Ba=(v,w,R)=>async function(D,P,M,F){let G=P.view.da(M);G.Xi&&(G=await Va(D.localStore,P.query,!1).then(({documents:y})=>P.view.da(y,G)));const O=F&&F.targetChanges.get(P.targetId),$=F&&F.targetMismatches.get(P.targetId)!=null,N=P.view.applyChanges(G,D.isPrimaryClient,O,$);return La(D,P.targetId,N.fa),N.snapshot}(n,v,w,R);const o=await Va(n.localStore,t,!0),a=new sm(t,o.hs),l=a.da(o.documents),u=jn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);La(n,e,d.fa);const p=new im(t,e,a);return n.ba.set(t,p),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),d.snapshot}async function hm(n,t,e){const r=H(n),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(a=>!zr(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ri(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ri(r.remoteStore,s.targetId),ii(r,s.targetId)}).catch(Un)):(ii(r,s.targetId),await ri(r.localStore,s.targetId,!0))}async function dm(n,t){const e=H(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ri(e.remoteStore,r.targetId))}async function fm(n,t,e){const r=vm(n);try{const s=await function(a,l){const u=H(a),d=dt.now(),p=l.reduce((R,S)=>R.add(S.key),W());let v,w;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let S=Xt(),D=W();return u.os.getEntries(R,p).next(P=>{S=P,S.forEach((M,F)=>{F.isValidDocument()||(D=D.add(M))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,S)).next(P=>{v=P;const M=[];for(const F of l){const G=Nf(F,v.get(F.key).overlayedDocument);G!=null&&M.push(new be(F.key,G,wc(G.value.mapValue),Gt.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,M,l)}).next(P=>{w=P;const M=P.applyToLocalDocumentSet(v,D);return u.documentOverlayCache.saveOverlays(R,P.batchId,M)})}).then(()=>({batchId:w.batchId,changes:Nc(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.xa[a.currentUser.toKey()];d||(d=new at(Z)),d=d.insert(l,u),a.xa[a.currentUser.toKey()]=d}(r,s.batchId,e),await zn(r,s.changes),await Yr(r.remoteStore)}catch(s){const o=Vi(s,"Failed to persist write");e.reject(o)}}async function fl(n,t){const e=H(n);try{const r=await Rp(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Fa.get(o);a&&(rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?rt(a.wa):s.removedDocuments.size>0&&(rt(a.wa),a.wa=!1))}),await zn(e,r,t)}catch(r){await Un(r)}}function Oa(n,t,e){const r=H(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,a)=>{const l=a.view.j_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=H(a);u.onlineState=l;let d=!1;u.queries.forEach((p,v)=>{for(const w of v.U_)w.j_(l)&&(d=!0)}),d&&Di(u)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function pm(n,t,e){const r=H(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),o=s&&s.key;if(o){let a=new at(U.comparator);a=a.insert(o,At.newNoDocument(o,z.min()));const l=W().add(o),u=new Wr(z.min(),new Map,new at(Z),a,l);await fl(r,u),r.va=r.va.remove(o),r.Fa.delete(t),ki(r)}else await ri(r.localStore,t,!1).then(()=>ii(r,t,e)).catch(Un)}async function mm(n,t){const e=H(n),r=t.batch.batchId;try{const s=await Ap(e.localStore,t);ml(e,r,null),pl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await zn(e,s)}catch(s){await Un(s)}}async function gm(n,t,e){const r=H(n);try{const s=await function(a,l){const u=H(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(v=>(rt(v!==null),p=v.keys(),u.mutationQueue.removeMutationBatch(d,v))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,t);ml(r,t,e),pl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await zn(r,s)}catch(s){await Un(s)}}function pl(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function ml(n,t,e){const r=H(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function ii(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||gl(n,r)})}function gl(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Ri(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),ki(n))}function La(n,t,e){for(const r of e)r instanceof ul?(n.Ma.addReference(r.key,t),_m(n,r)):r instanceof hl?(x("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||gl(n,r.key)):q()}function _m(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(x("SyncEngine","New document in limbo: "+e),n.Ca.add(r),ki(n))}function ki(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new U(it.fromString(t)),r=n.Na.next();n.Fa.set(r,new om(e)),n.va=n.va.insert(e,r),sl(n.remoteStore,new ee(Lt(Cc(e.path)),r,"TargetPurposeLimboResolution",fi.oe))}}async function zn(n,t,e){const r=H(n),s=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{a.push(r.Ba(u,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const v=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,v?"current":"not-current")}if(d){s.push(d);const v=Ai.Ki(u.targetId,d);o.push(v)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(u,d){const p=H(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>C.forEach(d,w=>C.forEach(w.qi,R=>p.persistence.referenceDelegate.addReference(v,w.targetId,R)).next(()=>C.forEach(w.Qi,R=>p.persistence.referenceDelegate.removeReference(v,w.targetId,R)))))}catch(v){if(!Bn(v))throw v;x("LocalStore","Failed to update sequence numbers: "+v)}for(const v of d){const w=v.targetId;if(!v.fromCache){const R=p.ns.get(w),S=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(S);p.ns=p.ns.insert(w,D)}}}(r.localStore,o))}async function ym(n,t){const e=H(n);if(!e.currentUser.isEqual(t)){x("SyncEngine","User change. New user:",t.toKey());const r=await tl(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(l=>{l.forEach(u=>{u.reject(new L(V.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zn(e,r.us)}}function Em(n,t){const e=H(n),r=e.Fa.get(t);if(r&&r.wa)return W().add(r.key);{let s=W();const o=e.Da.get(t);if(!o)return s;for(const a of o){const l=e.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function _l(n){const t=H(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=fl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Em.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=pm.bind(null,t),t.Sa.h_=em.bind(null,t.eventManager),t.Sa.ka=nm.bind(null,t.eventManager),t}function vm(n){const t=H(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=mm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gm.bind(null,t),t}class Fa{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Qr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Ip(this.persistence,new Tp,t.initialUser,this.serializer)}createPersistence(t){return new yp(Ii.Hr,this.serializer)}createSharedClientState(t){return new Vp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tm{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Oa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ym.bind(null,this.syncEngine),await Xp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Jp}()}createDatastore(t){const e=Qr(t.databaseInfo.databaseId),r=function(o){return new xp(o)}(t.databaseInfo);return function(o,a,l,u){return new Lp(o,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new Up(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Oa(this.syncEngine,e,0),function(){return ka.D()?new ka:new Dp}())}createSyncEngine(t,e){return function(s,o,a,l,u,d,p){const v=new am(s,o,a,l,u,d);return p&&(v.La=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=H(r);x("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await qn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class wm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Qt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Im{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Ec.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Vi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ms(n,t){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tl(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ua(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Rm(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Na(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Na(t.remoteStore,s)),n._onlineComponents=t}function Am(n){return n.name==="FirebaseError"?n.code===V.FAILED_PRECONDITION||n.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Rm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ms(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Am(e))throw e;ze("Error using user provided cache. Falling back to memory cache: "+e),await Ms(n,new Fa)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Ms(n,new Fa);return n._offlineComponents}async function yl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Ua(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Ua(n,new Tm))),n._onlineComponents}function bm(n){return yl(n).then(t=>t.syncEngine)}async function Sm(n){const t=await yl(n),e=t.eventManager;return e.onListen=cm.bind(null,t.syncEngine),e.onUnlisten=hm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=lm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=dm.bind(null,t.syncEngine),e}function Pm(n,t,e={}){const r=new ie;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,d){const p=new wm({next:w=>{a.enqueueAndForget(()=>tm(o,v)),w.fromCache&&u.source==="server"?d.reject(new L(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),v=new rm(l,p,{includeMetadataChanges:!0,ra:!0});return Zp(o,v)}(await Sm(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function El(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Ba=new Map;/**
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
 */function vl(n,t,e){if(!e)throw new L(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Cm(n,t,e,r){if(t===!0&&r===!0)throw new L(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function $a(n){if(!U.isDocumentKey(n))throw new L(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ja(n){if(U.isDocumentKey(n))throw new L(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ni(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q()}function Or(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new L(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ni(n);throw new L(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class qa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Cm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=El((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new L(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $d;switch(r.type){case"firstParty":return new Hd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ba.get(e);r&&(x("ComponentProvider","Removing Datastore"),Ba.delete(e),r.terminate())}(this),Promise.resolve()}}function Vm(n,t,e,r={}){var s;const o=(n=Or(n,Jr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ze("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=It.MOCK_USER;else{l=Th(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new L(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(d)}n._authCredentials=new jd(new yc(l,u))}}/**
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
 */class Zr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Zr(this.firestore,t,this._query)}}class Mt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Mt(this.firestore,t,this._key)}}class oe extends Zr{constructor(t,e,r){super(t,e,Cc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Mt(this.firestore,null,new U(t))}withConverter(t){return new oe(this.firestore,t,this._path)}}function za(n,t,...e){if(n=Cn(n),vl("collection","path",t),n instanceof Jr){const r=it.fromString(t,...e);return ja(r),new oe(n,null,r)}{if(!(n instanceof Mt||n instanceof oe))throw new L(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(t,...e));return ja(r),new oe(n.firestore,null,r)}}function Dm(n,t,...e){if(n=Cn(n),arguments.length===1&&(t=Ec.newId()),vl("doc","path",t),n instanceof Jr){const r=it.fromString(t,...e);return $a(r),new Mt(n,null,new U(r))}{if(!(n instanceof Mt||n instanceof oe))throw new L(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(it.fromString(t,...e));return $a(r),new Mt(n.firestore,n instanceof oe?n.converter:null,new U(r))}}/**
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
 */class km{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new nl(this,"async_queue_retry"),this.hu=()=>{const e=xs();e&&x("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=xs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=xs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new ie;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Bn(t))throw t;x("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Qt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Ci.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&q()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class xi extends Jr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new km}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wl(this),this._firestoreClient.terminate()}}function Nm(n,t){const e=typeof n=="object"?n:Cd(),r=typeof n=="string"?n:"(default)",s=Rd(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Eh("firestore");o&&Vm(s,...o)}return s}function Tl(n){return n._firestoreClient||wl(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function wl(n){var t,e,r;const s=n._freezeSettings(),o=function(l,u,d,p){return new sf(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,El(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Im(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xe(Rt.fromBase64String(t))}catch(e){throw new L(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Xe(Rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Mi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Il{constructor(t){this._methodName=t}}/**
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
 */class Oi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}}/**
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
 */const xm=/^__.*__$/;class Mm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new be(t,this.data,this.fieldMask,e,this.fieldTransforms):new $n(t,this.data,e,this.fieldTransforms)}}function Al(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Li{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Li(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Lr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Al(this.fu)&&xm.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Om{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Qr(t)}Fu(t,e,r,s=!1){return new Li({fu:t,methodName:e,vu:r,path:gt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lm(n){const t=n._freezeSettings(),e=Qr(n._databaseId);return new Om(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Fm(n,t,e,r,s,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);Pl("Data must be an object, but it was:",a,r);const l=bl(r,a);let u,d;if(o.merge)u=new xt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const w=Um(t,v,e);if(!a.contains(w))throw new L(V.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);$m(p,w)||p.push(w)}u=new xt(p),d=a.fieldTransforms.filter(v=>u.covers(v.field))}else u=null,d=a.fieldTransforms;return new Mm(new Vt(l),u,d)}function Rl(n,t){if(Sl(n=Cn(n)))return Pl("Unsupported field value:",t,n),bl(n,t);if(n instanceof Il)return function(r,s){if(!Al(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let u=Rl(l,s.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Cn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=dt.fromDate(r);return{timestampValue:xr(s.serializer,o)}}if(r instanceof dt){const o=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xr(s.serializer,o)}}if(r instanceof Oi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xe)return{bytesValue:Kc(s.serializer,r._byteString)};if(r instanceof Mt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ti(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Ni(r)}`)}(n,t)}function bl(n,t){const e={};return vc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ze(n,(r,s)=>{const o=Rl(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Sl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof Oi||n instanceof Xe||n instanceof Mt||n instanceof Il)}function Pl(n,t,e){if(!Sl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Ni(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function Um(n,t,e){if((t=Cn(t))instanceof Mi)return t._internalPath;if(typeof t=="string")return Cl(n,t);throw Lr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Bm=new RegExp("[~\\*/\\[\\]]");function Cl(n,t,e){if(t.search(Bm)>=0)throw Lr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Mi(...t.split("."))._internalPath}catch{throw Lr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Lr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new L(V.INVALID_ARGUMENT,l+n+u)}function $m(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Vl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new jm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Dl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class jm extends Vl{data(){return super.data()}}function Dl(n,t){return typeof t=="string"?Cl(n,t):t instanceof Mi?t._internalPath:t._delegate._internalPath}/**
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
 */function qm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zm{convertValue(t,e="none"){switch(Re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ae(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw q()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ze(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Oi(ut(t.latitude),ut(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=mi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Nn(t));default:return null}}convertTimestamp(t){const e=ue(t);return new dt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=it.fromString(t);rt(Zc(r));const s=new xn(r.get(1),r.get(3)),o=new U(r.popFirst(5));return s.isEqual(e)||Qt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Hm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class fr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Gm extends Vl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Er(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Dl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Er extends Gm{data(t={}){return super.data(t)}}class Km{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new fr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Er(this._firestore,this._userDataWriter,r.key,r,new fr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Er(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new Er(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Wm(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Wm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class Qm extends zm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Mt(this.firestore,null,e)}}function Xm(n){n=Or(n,Zr);const t=Or(n.firestore,xi),e=Tl(t),r=new Qm(t);return qm(n._query),Pm(e,n._query).then(s=>new Km(t,r,n,s))}function Ym(n,t){const e=Or(n.firestore,xi),r=Dm(n),s=Hm(n.converter,t);return Jm(e,[Fm(Lm(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function Jm(n,t){return function(r,s){const o=new ie;return r.asyncQueue.enqueueAndForget(async()=>fm(await bm(r),s,o)),o.promise}(Tl(n),t)}(function(t,e=!0){(function(s){Je=s})(Pd),Pr(new Vn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new xi(new qd(r.getProvider("auth-internal")),new Kd(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),je(ua,"4.6.4",t),je(ua,"4.6.4","esm2017")})();function Zm(n){let t;return{c(){t=j("p"),t.textContent=`${n[13].message}`,yu(t,"color","red")},m(e,r){et(e,t,r)},p:Q,i:Q,o:Q,d(e){e&&tt(t)}}}function tg(n){let t,e,r;function s(l,u){return l[12].isTopTen&&l[0]!==""?rg:l[12].isTopTen&&l[0]===""?ng:eg}let a=s(n)(n);return e=new lh({props:{topten:n[12].topTen}}),{c(){a.c(),t=ot(),ce(e.$$.fragment)},m(l,u){a.m(l,u),et(l,t,u),Kt(e,l,u),r=!0},p(l,u){a.p(l,u)},i(l){r||(Ct(e.$$.fragment,l),r=!0)},o(l){Dt(e.$$.fragment,l),r=!1},d(l){l&&tt(t),a.d(l),Wt(e,l)}}}function eg(n){let t,e,r;return{c(){t=j("h1"),t.textContent=`Schade${n[0]===""?"!":" "+n[0]+"!"}`,e=ot(),r=j("p"),r.textContent=`Du hast ${n[1]} Punkte erreicht. Das reicht leider nicht für die aktuelle Top-Ten.`},m(s,o){et(s,t,o),et(s,e,o),et(s,r,o)},p:Q,d(s){s&&(tt(t),tt(e),tt(r))}}}function ng(n){let t,e,r,s,o;return{c(){t=j("h1"),t.textContent="Schade!",e=ot(),r=j("p"),r.textContent=`Mit deinen ${n[1]} Punkten hättest du es in die Top-Ten geschafft.`,s=ot(),o=j("p"),o.textContent="Leider hast du keinen Namen eingegeben und dein Ergebnis kann nicht gespeichert werden."},m(a,l){et(a,t,l),et(a,e,l),et(a,r,l),et(a,s,l),et(a,o,l)},p:Q,d(a){a&&(tt(t),tt(e),tt(r),tt(s),tt(o))}}}function rg(n){let t,e,r;return{c(){t=j("h1"),t.textContent=`Super ${n[0]}!`,e=ot(),r=j("p"),r.textContent=`Mit deinen ${n[1]} Punkten hast du es in die Top-Ten geschafft. Dein Ergebnis wird dauerhaft gespeichert.`},m(s,o){et(s,t,o),et(s,e,o),et(s,r,o)},p:Q,d(s){s&&(tt(t),tt(e),tt(r))}}}function sg(n){let t;return{c(){t=ae("... warte auf das Resultat")},m(e,r){et(e,t,r)},p:Q,i:Q,o:Q,d(e){e&&tt(t)}}}function ig(n){let t,e,r,s,o,a,l,u,d,p,v,w={ctx:n,current:null,token:null,hasCatch:!0,pending:sg,then:tg,catch:Zm,value:12,error:13,blocks:[,,,]};return Ru(n[3](),w),{c(){t=j("div"),w.block.c(),e=ot(),r=j("p"),r.textContent="Möchtest du es nochmal versuchen?",s=ot(),o=j("div"),a=j("button"),a.textContent="Ja",l=ot(),u=j("button"),u.textContent="Nein",K(t,"id","flexbox-wrapper")},m(R,S){et(R,t,S),w.block.m(t,w.anchor=null),w.mount=()=>t,w.anchor=e,B(t,e),B(t,r),B(t,s),B(t,o),B(o,a),B(o,l),B(o,u),d=!0,p||(v=[Ue(a,"click",n[4]),Ue(u,"click",n[5])],p=!0)},p(R,[S]){n=R,bu(w,n,S)},i(R){d||(Ct(w.block),d=!0)},o(R){for(let S=0;S<3;S+=1){const D=w.blocks[S];Dt(D)}d=!1},d(R){R&&tt(t),w.block.d(),w.token=null,w=null,p=!1,de(v)}}}function og(n){const e=cc({apiKey:"AIzaSyBpOgtLkUIXsLaHmqZHoqVV_0D3dCfVlVk",authDomain:"merry-holy-santa-chase.firebaseapp.com",projectId:"merry-holy-santa-chase",storageBucket:"merry-holy-santa-chase.appspot.com",messagingSenderId:"1050325198070",appId:"1:1050325198070:web:2efd1e961bf1c135af38d7"}),r=Nm(e),s=Fe(Us),o=Fe($e),a=Fe(Bs),l=Fe(Ss),u={name:s,score:o,new:!0},d=R=>{$e.set(0),Ss.set(""),ne(R==="yes"?"/":"/credits")};return[s,o,d,async()=>{const S=(await Xm(za(r,"userscores"))).docs.map(F=>{const G=F.data();return F.id===l&&(G.new=!0),G}),P=(a?[...S]:[...S,u]).sort((F,G)=>G.score-F.score).slice(0,10);if(P.length<10){const F=10-P.length;for(let G of Array(F).fill())P.push({name:"--",new:!1,score:"--"})}const M=P.some(F=>F.new===!0);if(u.name!==""&&!a){const F=await Ym(za(r,"userscores"),{...u,new:!1});Ss.set(F.id),console.log("Game result written to database with ID: ",F.id),Bs.set(!0)}else console.log("No Game result written to database");return{topTen:P,isTopTen:M}},()=>d("yes"),()=>d("no")]}class ag extends jt{constructor(t){super(),$t(this,t,og,ig,Ot,{})}}function cg(n){let t,e,r,s,o,a,l,u,d,p,v,w;return{c(){t=j("div"),e=j("div"),e.innerHTML='<p class="svelte-k7l33j">IDEE UND UMSETZUNG:</p> <p class="svelte-k7l33j">Jani, der kleine Weihnachtswichtel</p>',r=ot(),s=j("div"),s.innerHTML='<p class="svelte-k7l33j">MUSIK:</p><p class="svelte-k7l33j"></p> <p class="svelte-k7l33j"><a href="https://freemusicarchive.org/music/Nullsleep/The_8bits_of_Christmas/8bp038-02-nullsleep-silent_night/">Silent night</a> by Nullsleep. (Lizenz: <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/">CC BY-NC-ND 3.0</a>)</p>',o=ot(),a=j("div"),a.innerHTML='<p class="svelte-k7l33j">SCHRIFTART:</p> <p class="svelte-k7l33j"><a href="https://www.1001fonts.com/kongtext-font.html">Kongtext</a> by codeman38. (Lizenz: <a href="https://st.1001fonts.net/license/kongtext/license.txt">custom</a>)</p>',l=ot(),u=j("div"),u.innerHTML='<p class="svelte-k7l33j">EMOJIS:</p> <p class="svelte-k7l33j"><a href="https://openmoji.org/">OpenMoji</a> changed to Pixelart. (Lizenz: <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>)</p>',d=ot(),p=j("button"),p.textContent="Zurück zum Start",K(p,"class","svelte-k7l33j"),K(t,"id","flexbox-wrapper")},m(R,S){et(R,t,S),B(t,e),B(t,r),B(t,s),B(t,o),B(t,a),B(t,l),B(t,u),B(t,d),B(t,p),v||(w=Ue(p,"click",n[0]),v=!0)},p:Q,i:Q,o:Q,d(R){R&&tt(t),v=!1,w()}}}function lg(n){return[()=>ne("/")]}class ug extends jt{constructor(t){super(),$t(this,t,lg,cg,Ot,{})}}function hg(n){let t,e,r;return e=new Mu({props:{routes:n[0]}}),{c(){t=j("main"),ce(e.$$.fragment),K(t,"class","svelte-13lsyqn")},m(s,o){et(s,t,o),Kt(e,t,null),r=!0},p:Q,i(s){r||(Ct(e.$$.fragment,s),r=!0)},o(s){Dt(e.$$.fragment,s),r=!1},d(s){s&&tt(t),Wt(e)}}}function dg(n){return[{"/":Gu,"/intro":ju,"/game":oh,"/gameover":ag,"/credits":ug}]}class fg extends jt{constructor(t){super(),$t(this,t,dg,hg,Ot,{})}}new fg({target:document.getElementById("app")});
