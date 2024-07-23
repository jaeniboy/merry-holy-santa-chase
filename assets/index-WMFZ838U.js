var vu=Object.defineProperty;var Tu=(n,t,e)=>t in n?vu(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var bs=(n,t,e)=>Tu(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function z(){}function vr(n,t){for(const e in t)n[e]=t[e];return n}function wu(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function Wa(n){return n()}function Ho(){return Object.create(null)}function Zt(n){n.forEach(Wa)}function Ur(n){return typeof n=="function"}function kt(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function Iu(n){return Object.keys(n).length===0}function Qa(n,...t){if(n==null){for(const r of t)r(void 0);return z}const e=n.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function Ue(n){let t;return Qa(n,e=>t=e)(),t}function Ko(n){return n??""}function Xa(n){return n&&Ur(n.destroy)?n.destroy:z}function B(n,t){n.appendChild(t)}function X(n,t,e){n.insertBefore(t,e||null)}function Q(n){n.parentNode&&n.parentNode.removeChild(n)}function Ya(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function U(n){return document.createElement(n)}function le(n){return document.createTextNode(n)}function it(){return le(" ")}function hi(){return le("")}function Te(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function Ls(n){return function(t){return t.preventDefault(),n.call(this,t)}}function q(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function Au(n){return Array.from(n.childNodes)}function Tr(n,t){t=""+t,n.data!==t&&(n.data=t)}function Ru(n,t,e,r){n.style.setProperty(t,e,"")}function bu(n,t,{bubbles:e=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:t,bubbles:e,cancelable:r})}function wr(n,t){return new n(t)}let Pn;function Wt(n){Pn=n}function $r(){if(!Pn)throw new Error("Function called outside component initialization");return Pn}function Su(n){$r().$$.after_update.push(n)}function Br(n){$r().$$.on_destroy.push(n)}function Pu(){const n=$r();return(t,e,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[t];if(s){const o=bu(t,e,{cancelable:r});return s.slice().forEach(a=>{a.call(n,o)}),!o.defaultPrevented}return!0}}function Go(n,t){const e=n.$$.callbacks[t.type];e&&e.slice().forEach(r=>r.call(this,t))}const Me=[],Fs=[];let $e=[];const Wo=[],Ja=Promise.resolve();let Us=!1;function Za(){Us||(Us=!0,Ja.then(di))}function tc(){return Za(),Ja}function $s(n){$e.push(n)}const Ss=new Set;let Ne=0;function di(){if(Ne!==0)return;const n=Pn;do{try{for(;Ne<Me.length;){const t=Me[Ne];Ne++,Wt(t),Cu(t.$$)}}catch(t){throw Me.length=0,Ne=0,t}for(Wt(null),Me.length=0,Ne=0;Fs.length;)Fs.pop()();for(let t=0;t<$e.length;t+=1){const e=$e[t];Ss.has(e)||(Ss.add(e),e())}$e.length=0}while(Me.length);for(;Wo.length;)Wo.pop()();Us=!1,Ss.clear(),Wt(n)}function Cu(n){if(n.fragment!==null){n.update(),Zt(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach($s)}}function Vu(n){const t=[],e=[];$e.forEach(r=>n.indexOf(r)===-1?t.push(r):e.push(r)),e.forEach(r=>r()),$e=t}const pr=new Set;let Ee;function jr(){Ee={r:0,c:[],p:Ee}}function qr(){Ee.r||Zt(Ee.c),Ee=Ee.p}function Rt(n,t){n&&n.i&&(pr.delete(n),n.i(t))}function Ct(n,t,e,r){if(n&&n.o){if(pr.has(n))return;pr.add(n),Ee.c.push(()=>{pr.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}else r&&r()}function ec(n,t){const e=t.token={};function r(s,o,a,l){if(t.token!==e)return;t.resolved=l;let u=t.ctx;a!==void 0&&(u=u.slice(),u[a]=l);const d=s&&(t.current=s)(u);let p=!1;t.block&&(t.blocks?t.blocks.forEach((T,I)=>{I!==o&&T&&(jr(),Ct(T,1,1,()=>{t.blocks[I]===T&&(t.blocks[I]=null)}),qr())}):t.block.d(1),d.c(),Rt(d,1),d.m(t.mount(),t.anchor),p=!0),t.block=d,t.blocks&&(t.blocks[o]=d),p&&di()}if(wu(n)){const s=$r();if(n.then(o=>{Wt(s),r(t.then,1,t.value,o),Wt(null)},o=>{if(Wt(s),r(t.catch,2,t.error,o),Wt(null),!t.hasCatch)throw o}),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,n),!0;t.resolved=n}}function nc(n,t,e){const r=t.slice(),{resolved:s}=n;n.current===n.then&&(r[n.value]=s),n.current===n.catch&&(r[n.error]=s),n.block.p(r,e)}function Ir(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ar(n,t){const e={},r={},s={$$scope:1};let o=n.length;for(;o--;){const a=n[o],l=t[o];if(l){for(const u in a)u in l||(r[u]=1);for(const u in l)s[u]||(e[u]=l[u],s[u]=1);n[o]=l}else for(const u in a)s[u]=1}for(const a in r)a in e||(e[a]=void 0);return e}function Rr(n){return typeof n=="object"&&n!==null?n:{}}function qt(n){n&&n.c()}function Lt(n,t,e){const{fragment:r,after_update:s}=n.$$;r&&r.m(t,e),$s(()=>{const o=n.$$.on_mount.map(Wa).filter(Ur);n.$$.on_destroy?n.$$.on_destroy.push(...o):Zt(o),n.$$.on_mount=[]}),s.forEach($s)}function Ft(n,t){const e=n.$$;e.fragment!==null&&(Vu(e.after_update),Zt(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Du(n,t){n.$$.dirty[0]===-1&&(Me.push(n),Za(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function Ut(n,t,e,r,s,o,a=null,l=[-1]){const u=Pn;Wt(n);const d=n.$$={fragment:null,ctx:[],props:o,update:z,not_equal:s,bound:Ho(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Ho(),dirty:l,skip_bound:!1,root:t.target||u.$$.root};a&&a(d.root);let p=!1;if(d.ctx=e?e(n,t.props||{},(T,I,...R)=>{const S=R.length?R[0]:I;return d.ctx&&s(d.ctx[T],d.ctx[T]=S)&&(!d.skip_bound&&d.bound[T]&&d.bound[T](S),p&&Du(n,T)),I}):[],d.update(),p=!0,Zt(d.before_update),d.fragment=r?r(d.ctx):!1,t.target){if(t.hydrate){const T=Au(t.target);d.fragment&&d.fragment.l(T),T.forEach(Q)}else d.fragment&&d.fragment.c();t.intro&&Rt(n.$$.fragment),Lt(n,t.target,t.anchor),di()}Wt(u)}class $t{constructor(){bs(this,"$$");bs(this,"$$set")}$destroy(){Ft(this,1),this.$destroy=z}$on(t,e){if(!Ur(e))return z;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Iu(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ku="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ku);const xe=[];function rc(n,t){return{subscribe:fi(n,t).subscribe}}function fi(n,t=z){let e;const r=new Set;function s(l){if(kt(n,l)&&(n=l,e)){const u=!xe.length;for(const d of r)d[1](),xe.push(d,n);if(u){for(let d=0;d<xe.length;d+=2)xe[d][0](xe[d+1]);xe.length=0}}}function o(l){s(l(n))}function a(l,u=z){const d=[l,u];return r.add(d),r.size===1&&(e=t(s,o)||z),l(n),()=>{r.delete(d),r.size===0&&e&&(e(),e=null)}}return{set:s,update:o,subscribe:a}}function sc(n,t,e){const r=!Array.isArray(n),s=r?[n]:n;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=t.length<2;return rc(e,(a,l)=>{let u=!1;const d=[];let p=0,T=z;const I=()=>{if(p)return;T();const S=t(r?d[0]:d,a,l);o?a(S):T=Ur(S)?S:z},R=s.map((S,D)=>Qa(S,P=>{d[D]=P,p&=~(1<<D),u&&I()},()=>{p|=1<<D}));return u=!0,I(),function(){Zt(R),T(),u=!1}})}function Nu(n,t){if(n instanceof RegExp)return{keys:!1,pattern:n};var e,r,s,o,a=[],l="",u=n.split("/");for(u[0]||u.shift();s=u.shift();)e=s[0],e==="*"?(a.push("wild"),l+="/(.*)"):e===":"?(r=s.indexOf("?",1),o=s.indexOf(".",1),a.push(s.substring(1,~r?r:~o?o:s.length)),l+=~r&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(l+=(~r?"?":"")+"\\"+s.substring(o))):l+="/"+s;return{keys:a,pattern:new RegExp("^"+l+"/?$","i")}}function xu(n){let t,e,r;const s=[n[2]];var o=n[0];function a(l,u){let d={};for(let p=0;p<s.length;p+=1)d=vr(d,s[p]);return u!==void 0&&u&4&&(d=vr(d,Ar(s,[Rr(l[2])]))),{props:d}}return o&&(t=wr(o,a(n)),t.$on("routeEvent",n[7])),{c(){t&&qt(t.$$.fragment),e=hi()},m(l,u){t&&Lt(t,l,u),X(l,e,u),r=!0},p(l,u){if(u&1&&o!==(o=l[0])){if(t){jr();const d=t;Ct(d.$$.fragment,1,0,()=>{Ft(d,1)}),qr()}o?(t=wr(o,a(l,u)),t.$on("routeEvent",l[7]),qt(t.$$.fragment),Rt(t.$$.fragment,1),Lt(t,e.parentNode,e)):t=null}else if(o){const d=u&4?Ar(s,[Rr(l[2])]):{};t.$set(d)}},i(l){r||(t&&Rt(t.$$.fragment,l),r=!0)},o(l){t&&Ct(t.$$.fragment,l),r=!1},d(l){l&&Q(e),t&&Ft(t,l)}}}function Mu(n){let t,e,r;const s=[{params:n[1]},n[2]];var o=n[0];function a(l,u){let d={};for(let p=0;p<s.length;p+=1)d=vr(d,s[p]);return u!==void 0&&u&6&&(d=vr(d,Ar(s,[u&2&&{params:l[1]},u&4&&Rr(l[2])]))),{props:d}}return o&&(t=wr(o,a(n)),t.$on("routeEvent",n[6])),{c(){t&&qt(t.$$.fragment),e=hi()},m(l,u){t&&Lt(t,l,u),X(l,e,u),r=!0},p(l,u){if(u&1&&o!==(o=l[0])){if(t){jr();const d=t;Ct(d.$$.fragment,1,0,()=>{Ft(d,1)}),qr()}o?(t=wr(o,a(l,u)),t.$on("routeEvent",l[6]),qt(t.$$.fragment),Rt(t.$$.fragment,1),Lt(t,e.parentNode,e)):t=null}else if(o){const d=u&6?Ar(s,[u&2&&{params:l[1]},u&4&&Rr(l[2])]):{};t.$set(d)}},i(l){r||(t&&Rt(t.$$.fragment,l),r=!0)},o(l){t&&Ct(t.$$.fragment,l),r=!1},d(l){l&&Q(e),t&&Ft(t,l)}}}function Ou(n){let t,e,r,s;const o=[Mu,xu],a=[];function l(u,d){return u[1]?0:1}return t=l(n),e=a[t]=o[t](n),{c(){e.c(),r=hi()},m(u,d){a[t].m(u,d),X(u,r,d),s=!0},p(u,[d]){let p=t;t=l(u),t===p?a[t].p(u,d):(jr(),Ct(a[p],1,1,()=>{a[p]=null}),qr(),e=a[t],e?e.p(u,d):(e=a[t]=o[t](u),e.c()),Rt(e,1),e.m(r.parentNode,r))},i(u){s||(Rt(e),s=!0)},o(u){Ct(e),s=!1},d(u){u&&Q(r),a[t].d(u)}}}function Qo(){const n=window.location.href.indexOf("#/");let t=n>-1?window.location.href.substr(n+1):"/";const e=t.indexOf("?");let r="";return e>-1&&(r=t.substr(e+1),t=t.substr(0,e)),{location:t,querystring:r}}const pi=rc(null,function(t){t(Qo());const e=()=>{t(Qo())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}});sc(pi,n=>n.location);sc(pi,n=>n.querystring);const Xo=fi(void 0);async function Qt(n){if(!n||n.length<1||n.charAt(0)!="/"&&n.indexOf("#/")!==0)throw Error("Invalid parameter location");await tc(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(n.charAt(0)=="#"?"":"#")+n}function Lu(n){n?window.scrollTo(n.__svelte_spa_router_scrollX,n.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Fu(n,t,e){let{routes:r={}}=t,{prefix:s=""}=t,{restoreScrollState:o=!1}=t;class a{constructor($,N){if(!N||typeof N!="function"&&(typeof N!="object"||N._sveltesparouter!==!0))throw Error("Invalid component object");if(!$||typeof $=="string"&&($.length<1||$.charAt(0)!="/"&&$.charAt(0)!="*")||typeof $=="object"&&!($ instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:E,keys:m}=Nu($);this.path=$,typeof N=="object"&&N._sveltesparouter===!0?(this.component=N.component,this.conditions=N.conditions||[],this.userData=N.userData,this.props=N.props||{}):(this.component=()=>Promise.resolve(N),this.conditions=[],this.props={}),this._pattern=E,this._keys=m}match($){if(s){if(typeof s=="string")if($.startsWith(s))$=$.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const g=$.match(s);if(g&&g[0])$=$.substr(g[0].length)||"/";else return null}}const N=this._pattern.exec($);if(N===null)return null;if(this._keys===!1)return N;const E={};let m=0;for(;m<this._keys.length;){try{E[this._keys[m]]=decodeURIComponent(N[m+1]||"")||null}catch{E[this._keys[m]]=null}m++}return E}async checkConditions($){for(let N=0;N<this.conditions.length;N++)if(!await this.conditions[N]($))return!1;return!0}}const l=[];r instanceof Map?r.forEach((M,$)=>{l.push(new a($,M))}):Object.keys(r).forEach(M=>{l.push(new a(M,r[M]))});let u=null,d=null,p={};const T=Pu();async function I(M,$){await tc(),T(M,$)}let R=null,S=null;o&&(S=M=>{M.state&&(M.state.__svelte_spa_router_scrollY||M.state.__svelte_spa_router_scrollX)?R=M.state:R=null},window.addEventListener("popstate",S),Su(()=>{Lu(R)}));let D=null,P=null;const F=pi.subscribe(async M=>{D=M;let $=0;for(;$<l.length;){const N=l[$].match(M.location);if(!N){$++;continue}const E={route:l[$].path,location:M.location,querystring:M.querystring,userData:l[$].userData,params:N&&typeof N=="object"&&Object.keys(N).length?N:null};if(!await l[$].checkConditions(E)){e(0,u=null),P=null,I("conditionsFailed",E);return}I("routeLoading",Object.assign({},E));const m=l[$].component;if(P!=m){m.loading?(e(0,u=m.loading),P=m,e(1,d=m.loadingParams),e(2,p={}),I("routeLoaded",Object.assign({},E,{component:u,name:u.name,params:d}))):(e(0,u=null),P=null);const g=await m();if(M!=D)return;e(0,u=g&&g.default||g),P=m}N&&typeof N=="object"&&Object.keys(N).length?e(1,d=N):e(1,d=null),e(2,p=l[$].props),I("routeLoaded",Object.assign({},E,{component:u,name:u.name,params:d})).then(()=>{Xo.set(d)});return}e(0,u=null),P=null,Xo.set(void 0)});Br(()=>{F(),S&&window.removeEventListener("popstate",S)});function H(M){Go.call(this,n,M)}function W(M){Go.call(this,n,M)}return n.$$set=M=>{"routes"in M&&e(3,r=M.routes),"prefix"in M&&e(4,s=M.prefix),"restoreScrollState"in M&&e(5,o=M.restoreScrollState)},n.$$.update=()=>{n.$$.dirty&32&&(history.scrollRestoration=o?"manual":"auto")},[u,d,p,r,s,o,H,W]}class Uu extends $t{constructor(t){super(),Ut(this,t,Fu,Ou,kt,{routes:3,prefix:4,restoreScrollState:5})}}var Ps={local:{},session:{}};function $u(n){return n==="local"?localStorage:sessionStorage}function Fn(n,t,e){var r,s,o,a,l,u,d,p;const T=(r=void 0)!=null?r:JSON,I=(s=void 0)!=null?s:"local",R=(o=void 0)!=null?o:!0,S=(l=(a=void 0)!=null?a:void 0)!=null?l:N=>console.error(`Error when writing value from persisted store "${n}" to ${I}`,N),D=(u=void 0)!=null?u:(N,E)=>console.error(`Error when parsing ${N?'"'+N+'"':"value"} from persisted store "${n}"`,E),P=(d=void 0)!=null?d:N=>N,F=(p=void 0)!=null?p:N=>N,H=typeof window<"u"&&typeof document<"u",W=H?$u(I):null;function M(N,E){const m=F(E);try{W==null||W.setItem(N,T.stringify(m))}catch(g){S(g)}}function $(){function N(y){try{return T.parse(y)}catch(v){D(y,v)}}const E=W==null?void 0:W.getItem(n);if(E==null)return t;const m=N(E);return m==null?t:P(m)}if(!Ps[I][n]){const N=$(),E=fi(N,y=>{if(H&&I=="local"&&R){const v=w=>{if(w.key===n&&w.newValue){let _;try{_=T.parse(w.newValue)}catch(fe){D(w.newValue,fe);return}const Nt=P(_);y(Nt)}};return window.addEventListener("storage",v),()=>window.removeEventListener("storage",v)}}),{subscribe:m,set:g}=E;Ps[I][n]={set(y){g(y),M(n,y)},update(y){return E.update(v=>{const w=y(v);return M(n,w),w})},reset(){this.set(t)},subscribe:m}}return Ps[I][n]}const Be=Fn("CountStore",0),Bs=Fn("PlayerName",""),js=Fn("ScoreInDb",!1),qs=Fn("ScoreID",""),ic=Fn("HasVisited",!1);function Bu(n){let t,e,r,s,o,a,l,u;return{c(){t=U("main"),e=U("div"),r=U("div"),o=it(),a=U("button"),a.textContent="überspringen",q(r,"id","content-container"),q(r,"class",s=Ko(n[0])+" svelte-5cacdd"),q(a,"class","svelte-5cacdd"),q(e,"id","flexbox-wrapper"),q(e,"class","svelte-5cacdd")},m(d,p){X(d,t,p),B(t,e),B(e,r),B(e,o),B(e,a),l||(u=[Xa(n[1].call(null,r)),Te(a,"click",Ls(n[3]))],l=!0)},p(d,[p]){p&1&&s!==(s=Ko(d[0])+" svelte-5cacdd")&&q(r,"class",s)},i:z,o:z,d(d){d&&Q(t),l=!1,Zt(u)}}}let ju=50,qu=500,zu=2e3;function Hu(n,t,e){const r=[{type:"text",text:"Ho, ho, ho ... fröhliche Weihnachten!"},{type:"text",text:"Hast du Lust auf ein kleines Weihnachtsspiel?"},{type:"title",text:"FANG DEN SANTA!"},{type:"text",text:"Dir werden nacheinander verschiedene Emojis gezeigt."},{type:"text",text:"Klicke auf alle Emojis, die etwas mit Weihnachten zu tun haben."},{type:"text",text:"Für jedes Weihnachts-Emoji bekommst du einen Punkt."},{type:"text",text:"Aber Achtung: Nicht-Weihnachts-Emojis geben Strafpunkte!"},{type:"text",text:"Wenn du auf der nächsten Seite einen Spielernamen eingibst, wird dein Punktestand gespeichert."},{type:"text",text:"Wenn du das nicht möchtest, kannst du auch anonym spielen."},{type:"text",text:"Lass dann einfach das Namensfeld leer."}];let s=0,o="text",a;const l=(R,S,D)=>{const P=R.split("");let F="",H=0;const W=()=>{setTimeout(()=>{F=F+P[H],S.innerText=F,H++,F.split("").length<P.length?W():D()},ju)};W()},u=(R,S,D)=>{const P=R.split(" ");let F="",H=0;const W=()=>{setTimeout(()=>{F=F+" "+P[H],S.innerText=F,H++,F.split(" ").length<=P.length?W():D()},qu)};W()},d=()=>{s++,setTimeout(()=>{if(s<r.length){const R=r[s];a.innerText="",e(0,o=R.type),R.type==="text"?l(R.text,a,d):u(R.text,a,d)}else T()},zu)},p=()=>{a=document.getElementById("content-container"),l(r[s].text,a,d)},T=()=>{ic.set(!0),Qt("/")};return[o,p,T,()=>T()]}class Ku extends $t{constructor(t){super(),Ut(this,t,Hu,Bu,kt,{})}}const zs=""+new URL("../tree.png",import.meta.url).href,oc=""+new URL("../santa.png",import.meta.url).href;function Gu(n){let t,e,r,s,o,a,l,u,d,p,T,I,R,S,D,P;return{c(){t=U("main"),e=U("div"),r=U("h1"),r.textContent="FANG DEN SANTA!",s=it(),o=U("div"),o.innerHTML=`<img alt="tree emoji" src="${zs}" class="svelte-ex251j"/> <img alt="santa emoji" src="${oc}" class="svelte-ex251j"/> <img alt="tree emoji" src="${zs}" class="svelte-ex251j"/>`,a=it(),l=U("div"),u=U("div"),u.textContent="Bitte gib hier deinen Namen ein:",d=it(),p=U("input"),T=it(),I=U("button"),I.textContent="Spiel starten!",R=it(),S=U("button"),S.textContent="Hä? Erklärs mir nochmal...",q(r,"class","svelte-ex251j"),p.value=n[0],q(p,"maxlength","12"),q(p,"class","svelte-ex251j"),q(I,"class","svelte-ex251j"),q(S,"class","svelte-ex251j"),q(e,"id","flexbox-wrapper")},m(F,H){X(F,t,H),B(t,e),B(e,r),B(e,s),B(e,o),B(e,a),B(e,l),B(l,u),B(l,d),B(l,p),B(e,T),B(e,I),B(e,R),B(e,S),D||(P=[Te(p,"input",n[2]),Te(I,"click",Ls(n[3])),Te(S,"click",Ls(n[4]))],D=!0)},p:z,i:z,o:z,d(F){F&&Q(t),D=!1,Zt(P)}}}function Wu(n){const t=Ue(ic),e=Ue(Bs);!t&&Qt("/intro");const r=l=>{console.log(l.target.value),Bs.set(l.target.value)};return[e,r,l=>r(l),()=>Qt("#/game"),()=>Qt("#/intro")]}class Qu extends $t{constructor(t){super(),Ut(this,t,Wu,Gu,kt,{})}}const Xu=""+new URL("../present.png",import.meta.url).href,Yu=""+new URL("../snowman.png",import.meta.url).href,Ju=""+new URL("../shark.png",import.meta.url).href,Zu=""+new URL("../pig.png",import.meta.url).href,th=""+new URL("../wrench.png",import.meta.url).href,eh=""+new URL("../sunglasses.png",import.meta.url).href,nh=""+new URL("../pizza.png",import.meta.url).href,rh=""+new URL("../ghost.png",import.meta.url).href,sh=""+new URL("../chick.png",import.meta.url).href,ih=""+new URL("../ball.png",import.meta.url).href,oh=""+new URL("../cactus.png",import.meta.url).href,ah=""+new URL("../island.png",import.meta.url).href,ch=""+new URL("../ding_a.mp3",import.meta.url).href,lh=""+new URL("../error.mp3",import.meta.url).href,uh=""+new URL("../silent_night.mp3",import.meta.url).href;function hh(n){let t,e,r;return{c(){t=U("div"),e=le("Punkte: "),r=le(n[0]),q(t,"id","counter"),q(t,"class","svelte-1kzghxj")},m(s,o){X(s,t,o),B(t,e),B(t,r)},p(s,[o]){o&1&&Tr(r,s[0])},i:z,o:z,d(s){s&&Q(t)}}}function dh(n,t,e){let r;return Be.subscribe(a=>{e(0,r=a)}),[r,()=>{Be.update(a=>a+1)},()=>{Be.update(a=>a-1)}]}class fh extends $t{constructor(t){super(),Ut(this,t,dh,hh,kt,{increment:1,decrement:2})}get increment(){return this.$$.ctx[1]}get decrement(){return this.$$.ctx[2]}}function ph(n){let t,e;return{c(){t=U("div"),e=le(n[0]),q(t,"id","countdown"),q(t,"class","svelte-1f4zbkp")},m(r,s){X(r,t,s),B(t,e)},p(r,[s]){s&1&&Tr(e,r[0])},i:z,o:z,d(r){r&&Q(t)}}}let Yo=1e3;function mh(n,t,e){let r=12e4,s=!0;const o=d=>d.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),a=d=>{let p=d/1e3;const T=Math.floor(p/60);return p=p%60,o(T)+":"+o(p)};let l=a(r);const u=()=>{setTimeout(()=>{r-=Yo,e(0,l=a(r)),r>0&&s?u():r>0&&!s?console.log("Countdown stopped"):(console.log("Done!"),setTimeout(()=>{Qt("/gameover")},1e3))},Yo)};return u(),Br(()=>{s=!1}),[l]}class gh extends $t{constructor(t){super(),Ut(this,t,mh,ph,kt,{})}}function Jo(n,t,e){const r=n.slice();return r[24]=t[e],r}function _h(n){return{c:z,m:z,p:z,i:z,o:z,d:z}}function yh(n){let t,e,r,s,o,a,l,u,d,p={};e=new fh({props:p}),n[5](e),s=new gh({});let T=Ir(n[2]),I=[];for(let R=0;R<T.length;R+=1)I[R]=Zo(Jo(n,T,R));return{c(){t=U("div"),qt(e.$$.fragment),r=it(),qt(s.$$.fragment),o=it(),a=U("div");for(let R=0;R<I.length;R+=1)I[R].c();q(t,"id","headline"),q(t,"class","svelte-16klxys"),q(a,"id","board"),q(a,"class","svelte-16klxys")},m(R,S){X(R,t,S),Lt(e,t,null),B(t,r),Lt(s,t,null),X(R,o,S),X(R,a,S);for(let D=0;D<I.length;D+=1)I[D]&&I[D].m(a,null);l=!0,u||(d=Xa(n[4].call(null,a)),u=!0)},p(R,S){const D={};if(e.$set(D),S&4){T=Ir(R[2]);let P;for(P=0;P<T.length;P+=1){const F=Jo(R,T,P);I[P]?I[P].p(F,S):(I[P]=Zo(F),I[P].c(),I[P].m(a,null))}for(;P<I.length;P+=1)I[P].d(1);I.length=T.length}},i(R){l||(Rt(e.$$.fragment,R),Rt(s.$$.fragment,R),l=!0)},o(R){Ct(e.$$.fragment,R),Ct(s.$$.fragment,R),l=!1},d(R){R&&(Q(t),Q(o),Q(a)),n[5](null),Ft(e),Ft(s),Ya(I,R),u=!1,d()}}}function Zo(n){let t;return{c(){t=U("div"),q(t,"id",n[24]),q(t,"class","game-field svelte-16klxys")},m(e,r){X(e,t,r)},p:z,d(e){e&&Q(t)}}}function Eh(n){let t;return{c(){t=U("div"),t.textContent="Lade Spiel-Ressourcen"},m(e,r){X(e,t,r)},p:z,i:z,o:z,d(e){e&&Q(t)}}}function vh(n){let t,e,r={ctx:n,current:null,token:null,hasCatch:!1,pending:Eh,then:yh,catch:_h,value:23,blocks:[,,,]};return ec(n[3](n[1]),r),{c(){t=U("main"),r.block.c(),q(t,"class","svelte-16klxys")},m(s,o){X(s,t,o),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null,e=!0},p(s,[o]){n=s,nc(r,n,o)},i(s){e||(Rt(r.block),e=!0)},o(s){for(let o=0;o<3;o+=1){const a=r.blocks[o];Ct(a)}e=!1},d(s){s&&Q(t),r.block.d(),r.token=null,r=null}}}const ta=35,Th=600,wh=5,Ih=.1;function Ah(n,t,e){const r=[oc,zs,Xu,Yu],s=[Ju,Zu,th,eh,nh,rh,sh,ih,oh,ah],o=[...r,...s],a=[...Array(ta).keys()];let l=Number,u=1200,d=0,p=!1;const T=new Audio(ch),I=new Audio(lh),R=new Audio(uh);R.volume=.2,R.loop=!0,R.play();let S;js.set(!1),Be.set(0);const D=y=>new Promise((v,w)=>{const _=new Image;_.onload=v,_.onerror=w,_.src=y}),P=async y=>Promise.all(y.map(D)),F=()=>{const y=Math.random(),v=y>=.5?r:s,w=Math.floor(Math.random()*v.length);return`<img class="emoji" data-kind=${y>=.5?"good":"bad"} src=${v[w]}>`},H=()=>{let y;for(;y=Math.floor(Math.random()*ta),y==l;);l=y,W();const v=document.getElementById(String(y));v!==null?(v.innerHTML=F(),v.children[0].onclick=w=>{const _=w.target.dataset.kind;_==="good"?(T.pause(),T.currentTime=0,T.play(),S.increment(),N()):_==="bad"&&(I.pause(),I.currentTime=0,I.play(),S.decrement()),w.target.parentNode.innerHTML="",w.target.onclick=null}):console.log("fieldSelected is null, but who cares!")},W=()=>{const y=document.getElementsByClassName("game-field");for(const v of y)v.innerText="",v.onclick=null},M=()=>{const y=R.playbackRate;R.playbackRate=y+Ih},$=()=>{R.pause()},N=()=>{d++,u>Th&&d===wh&&(u-=100,d=0,M())},E=()=>{setTimeout(()=>{H(),p||E()},u)},m=()=>{H(),E()};Br(()=>{$(),p=!0});function g(y){Fs[y?"unshift":"push"](()=>{S=y,e(0,S)})}return[S,o,a,P,m,g]}class Rh extends $t{constructor(t){super(),Ut(this,t,Ah,vh,kt,{})}}function ea(n,t,e){const r=n.slice();return r[1]=t[e],r[3]=e,r}function na(n){let t,e,r,s,o=n[1].name+"",a,l,u,d=n[1].score+"",p,T,I;return{c(){t=U("tr"),e=U("td"),e.textContent=`${n[3]+1}.`,r=it(),s=U("td"),a=le(o),l=it(),u=U("td"),p=le(d),T=it(),q(e,"class","svelte-h4frz2"),q(s,"class","svelte-h4frz2"),q(u,"class","svelte-h4frz2"),q(t,"id",I=n[1].new?"new-entry":""),q(t,"class","svelte-h4frz2")},m(R,S){X(R,t,S),B(t,e),B(t,r),B(t,s),B(s,a),B(t,l),B(t,u),B(u,p),B(t,T)},p(R,S){S&1&&o!==(o=R[1].name+"")&&Tr(a,o),S&1&&d!==(d=R[1].score+"")&&Tr(p,d),S&1&&I!==(I=R[1].new?"new-entry":"")&&q(t,"id",I)},d(R){R&&Q(t)}}}function bh(n){let t,e,r,s,o,a=Ir(n[0]),l=[];for(let u=0;u<a.length;u+=1)l[u]=na(ea(n,a,u));return{c(){t=U("div"),e=U("h2"),e.textContent="High-Score",r=it(),s=U("div"),o=U("table");for(let u=0;u<l.length;u+=1)l[u].c();q(o,"class","svelte-h4frz2"),q(s,"id","high-score"),q(s,"class","svelte-h4frz2"),q(t,"id","ranking"),q(t,"class","svelte-h4frz2")},m(u,d){X(u,t,d),B(t,e),B(t,r),B(t,s),B(s,o);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(o,null)},p(u,[d]){if(d&1){a=Ir(u[0]);let p;for(p=0;p<a.length;p+=1){const T=ea(u,a,p);l[p]?l[p].p(T,d):(l[p]=na(T),l[p].c(),l[p].m(o,null))}for(;p<l.length;p+=1)l[p].d(1);l.length=a.length}},i:z,o:z,d(u){u&&Q(t),Ya(l,u)}}}function Sh(n,t,e){let{topten:r}=t;return n.$$set=s=>{"topten"in s&&e(0,r=s.topten)},[r]}class Ph extends $t{constructor(t){super(),Ut(this,t,Sh,bh,kt,{topten:0})}}function Ch(n){let t,e,r,s,o,a,l,u;return{c(){t=U("p"),t.textContent="Möchtest du es nochmal versuchen?",e=it(),r=U("div"),s=U("button"),s.textContent="Ja",o=it(),a=U("button"),a.textContent="Nein"},m(d,p){X(d,t,p),X(d,e,p),X(d,r,p),B(r,s),B(r,o),B(r,a),l||(u=[Te(s,"click",n[1]),Te(a,"click",n[2])],l=!0)},p:z,i:z,o:z,d(d){d&&(Q(t),Q(e),Q(r)),l=!1,Zt(u)}}}function Vh(n){let t=!0;const e=o=>{Be.set(0),qs.set(""),o==="yes"?Qt("/"):(t=!1,Qt("/credits"))};return Br(()=>{t&&Qt("/")}),[e,()=>e("yes"),()=>e("no")]}class ac extends $t{constructor(t){super(),Ut(this,t,Vh,Ch,kt,{})}}var ra={};/**
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
 */const cc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Dh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=o>>2,T=(o&3)<<4|l>>4;let I=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(I=64)),r.push(e[p],e[T],e[I],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(cc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Dh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||T==null)throw new kh;const I=o<<2|l>>4;if(r.push(I),d!==64){const R=l<<4&240|d>>2;if(r.push(R),T!==64){const S=d<<6&192|T;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nh=function(n){const t=cc(n);return lc.encodeByteArray(t,!0)},br=function(n){return Nh(n).replace(/\./g,"")},xh=function(n){try{return lc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Mh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Oh=()=>Mh().__FIREBASE_DEFAULTS__,Lh=()=>{if(typeof process>"u"||typeof ra>"u")return;const n=ra.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&xh(n[1]);return t&&JSON.parse(t)},mi=()=>{try{return Oh()||Lh()||Fh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Uh=n=>{var t,e;return(e=(t=mi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},$h=n=>{const t=Uh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},uc=()=>{var n;return(n=mi())===null||n===void 0?void 0:n.config};/**
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
 */class Bh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function jh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[br(JSON.stringify(e)),br(JSON.stringify(a)),""].join(".")}/**
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
 */function qh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zh(){var n;const t=(n=mi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hh(){return!zh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kh(){try{return typeof indexedDB=="object"}catch{return!1}}function Gh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Wh="FirebaseError";class Ye extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Wh,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hc.prototype.create)}}class hc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Qh(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ye(s,l,r)}}function Qh(n,t){return n.replace(Xh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Xh=/\{\$([^}]+)}/g;function Hs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(sa(o)&&sa(a)){if(!Hs(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function sa(n){return n!==null&&typeof n=="object"}/**
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
 */class Yh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Bh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zh(t))try{this.getOrInitializeService({instanceIdentifier:ye})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ye){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ye){return this.instances.has(t)}getOptions(t=ye){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ye){return this.component?this.component.multipleInstances?t:ye:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jh(n){return n===ye?void 0:n}function Zh(n){return n.instantiationMode==="EAGER"}/**
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
 */class td{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Yh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const ed={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},nd=Z.INFO,rd={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},sd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=rd[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dc{constructor(t){this.name=t,this._logLevel=nd,this._logHandler=sd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ed[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const id=(n,t)=>t.some(e=>n instanceof e);let ia,oa;function od(){return ia||(ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ad(){return oa||(oa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fc=new WeakMap,Ks=new WeakMap,pc=new WeakMap,Cs=new WeakMap,gi=new WeakMap;function cd(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ie(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&fc.set(e,n)}).catch(()=>{}),gi.set(t,n),t}function ld(n){if(Ks.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ks.set(n,t)}let Gs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ks.get(n);if(t==="objectStoreNames")return n.objectStoreNames||pc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ie(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ud(n){Gs=n(Gs)}function hd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Vs(this),t,...e);return pc.set(r,t.sort?t.sort():[t]),ie(r)}:ad().includes(n)?function(...t){return n.apply(Vs(this),t),ie(fc.get(this))}:function(...t){return ie(n.apply(Vs(this),t))}}function dd(n){return typeof n=="function"?hd(n):(n instanceof IDBTransaction&&ld(n),id(n,od())?new Proxy(n,Gs):n)}function ie(n){if(n instanceof IDBRequest)return cd(n);if(Cs.has(n))return Cs.get(n);const t=dd(n);return t!==n&&(Cs.set(n,t),gi.set(t,n)),t}const Vs=n=>gi.get(n);function fd(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=ie(a);return r&&a.addEventListener("upgradeneeded",u=>{r(ie(a.result),u.oldVersion,u.newVersion,ie(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const pd=["get","getKey","getAll","getAllKeys","count"],md=["put","add","delete","clear"],Ds=new Map;function aa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ds.get(t))return Ds.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=md.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pd.includes(e)))return;const o=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&u.done]))[0]};return Ds.set(t,o),o}ud(n=>({...n,get:(t,e,r)=>aa(t,e)||n.get(t,e,r),has:(t,e)=>!!aa(t,e)||n.has(t,e)}));/**
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
 */class gd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(_d(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function _d(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ws="@firebase/app",ca="0.10.6";/**
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
 */const Ie=new dc("@firebase/app"),yd="@firebase/app-compat",Ed="@firebase/analytics-compat",vd="@firebase/analytics",Td="@firebase/app-check-compat",wd="@firebase/app-check",Id="@firebase/auth",Ad="@firebase/auth-compat",Rd="@firebase/database",bd="@firebase/database-compat",Sd="@firebase/functions",Pd="@firebase/functions-compat",Cd="@firebase/installations",Vd="@firebase/installations-compat",Dd="@firebase/messaging",kd="@firebase/messaging-compat",Nd="@firebase/performance",xd="@firebase/performance-compat",Md="@firebase/remote-config",Od="@firebase/remote-config-compat",Ld="@firebase/storage",Fd="@firebase/storage-compat",Ud="@firebase/firestore",$d="@firebase/vertexai-preview",Bd="@firebase/firestore-compat",jd="firebase",qd="10.12.3";/**
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
 */const Qs="[DEFAULT]",zd={[Ws]:"fire-core",[yd]:"fire-core-compat",[vd]:"fire-analytics",[Ed]:"fire-analytics-compat",[wd]:"fire-app-check",[Td]:"fire-app-check-compat",[Id]:"fire-auth",[Ad]:"fire-auth-compat",[Rd]:"fire-rtdb",[bd]:"fire-rtdb-compat",[Sd]:"fire-fn",[Pd]:"fire-fn-compat",[Cd]:"fire-iid",[Vd]:"fire-iid-compat",[Dd]:"fire-fcm",[kd]:"fire-fcm-compat",[Nd]:"fire-perf",[xd]:"fire-perf-compat",[Md]:"fire-rc",[Od]:"fire-rc-compat",[Ld]:"fire-gcs",[Fd]:"fire-gcs-compat",[Ud]:"fire-fst",[Bd]:"fire-fst-compat",[$d]:"fire-vertex","fire-js":"fire-js",[jd]:"fire-js-all"};/**
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
 */const Sr=new Map,Hd=new Map,Xs=new Map;function la(n,t){try{n.container.addComponent(t)}catch(e){Ie.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Pr(n){const t=n.name;if(Xs.has(t))return Ie.debug(`There were multiple attempts to register component ${t}.`),!1;Xs.set(t,n);for(const e of Sr.values())la(e,n);for(const e of Hd.values())la(e,n);return!0}function Kd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Gd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oe=new hc("app","Firebase",Gd);/**
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
 */class Wd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw oe.create("app-deleted",{appName:this._name})}}/**
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
 */const Qd=qd;function _i(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw oe.create("bad-app-name",{appName:String(s)});if(e||(e=uc()),!e)throw oe.create("no-options");const o=Sr.get(s);if(o){if(Hs(e,o.options)&&Hs(r,o.config))return o;throw oe.create("duplicate-app",{appName:s})}const a=new td(s);for(const u of Xs.values())a.addComponent(u);const l=new Wd(e,r,a);return Sr.set(s,l),l}function Xd(n=Qs){const t=Sr.get(n);if(!t&&n===Qs&&uc())return _i();if(!t)throw oe.create("no-app",{appName:n});return t}function je(n,t,e){var r;let s=(r=zd[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ie.warn(l.join(" "));return}Pr(new Vn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Yd="firebase-heartbeat-database",Jd=1,Dn="firebase-heartbeat-store";let ks=null;function mc(){return ks||(ks=fd(Yd,Jd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Dn)}catch(e){console.warn(e)}}}}).catch(n=>{throw oe.create("idb-open",{originalErrorMessage:n.message})})),ks}async function Zd(n){try{const e=(await mc()).transaction(Dn),r=await e.objectStore(Dn).get(gc(n));return await e.done,r}catch(t){if(t instanceof Ye)Ie.warn(t.message);else{const e=oe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ie.warn(e.message)}}}async function ua(n,t){try{const r=(await mc()).transaction(Dn,"readwrite");await r.objectStore(Dn).put(t,gc(n)),await r.done}catch(e){if(e instanceof Ye)Ie.warn(e.message);else{const r=oe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ie.warn(r.message)}}}function gc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tf=1024,ef=30*24*60*60*1e3;class nf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new sf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ha();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ef}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ha(),{heartbeatsToSend:r,unsentEntries:s}=rf(this._heartbeatsCache.heartbeats),o=br(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function ha(){return new Date().toISOString().substring(0,10)}function rf(n,t=tf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),da(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),da(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class sf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kh()?Gh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Zd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ua(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ua(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function da(n){return br(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function of(n){Pr(new Vn("platform-logger",t=>new gd(t),"PRIVATE")),Pr(new Vn("heartbeat",t=>new nf(t),"PRIVATE")),je(Ws,ca,n),je(Ws,ca,"esm2017"),je("fire-js","")}of("");var af="firebase",cf="10.12.3";/**
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
 */je(af,cf,"app");var fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var we,_c;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function g(){}g.prototype=m.prototype,E.D=m.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(y,v,w){for(var _=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)_[Nt-2]=arguments[Nt];return m.prototype[v].apply(y,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)y[v]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(v=0;16>v;++v)y[v]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=E.g[0],g=E.g[1],v=E.g[2];var w=E.g[3],_=m+(w^g&(v^w))+y[0]+3614090360&4294967295;m=g+(_<<7&4294967295|_>>>25),_=w+(v^m&(g^v))+y[1]+3905402710&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(g^w&(m^g))+y[2]+606105819&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(m^v&(w^m))+y[3]+3250441966&4294967295,g=v+(_<<22&4294967295|_>>>10),_=m+(w^g&(v^w))+y[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(v^m&(g^v))+y[5]+1200080426&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(g^w&(m^g))+y[6]+2821735955&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(m^v&(w^m))+y[7]+4249261313&4294967295,g=v+(_<<22&4294967295|_>>>10),_=m+(w^g&(v^w))+y[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(v^m&(g^v))+y[9]+2336552879&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(g^w&(m^g))+y[10]+4294925233&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(m^v&(w^m))+y[11]+2304563134&4294967295,g=v+(_<<22&4294967295|_>>>10),_=m+(w^g&(v^w))+y[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(v^m&(g^v))+y[13]+4254626195&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(g^w&(m^g))+y[14]+2792965006&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(m^v&(w^m))+y[15]+1236535329&4294967295,g=v+(_<<22&4294967295|_>>>10),_=m+(v^w&(g^v))+y[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(m^g))+y[6]+3225465664&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^g&(w^m))+y[11]+643717713&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(v^w))+y[0]+3921069994&4294967295,g=v+(_<<20&4294967295|_>>>12),_=m+(v^w&(g^v))+y[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(m^g))+y[10]+38016083&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^g&(w^m))+y[15]+3634488961&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(v^w))+y[4]+3889429448&4294967295,g=v+(_<<20&4294967295|_>>>12),_=m+(v^w&(g^v))+y[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(m^g))+y[14]+3275163606&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^g&(w^m))+y[3]+4107603335&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(v^w))+y[8]+1163531501&4294967295,g=v+(_<<20&4294967295|_>>>12),_=m+(v^w&(g^v))+y[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(m^g))+y[2]+4243563512&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^g&(w^m))+y[7]+1735328473&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(v^w))+y[12]+2368359562&4294967295,g=v+(_<<20&4294967295|_>>>12),_=m+(g^v^w)+y[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^v)+y[8]+2272392833&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^g)+y[11]+1839030562&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^m)+y[14]+4259657740&4294967295,g=v+(_<<23&4294967295|_>>>9),_=m+(g^v^w)+y[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^v)+y[4]+1272893353&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^g)+y[7]+4139469664&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^m)+y[10]+3200236656&4294967295,g=v+(_<<23&4294967295|_>>>9),_=m+(g^v^w)+y[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^v)+y[0]+3936430074&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^g)+y[3]+3572445317&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^m)+y[6]+76029189&4294967295,g=v+(_<<23&4294967295|_>>>9),_=m+(g^v^w)+y[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^v)+y[12]+3873151461&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^g)+y[15]+530742520&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^m)+y[2]+3299628645&4294967295,g=v+(_<<23&4294967295|_>>>9),_=m+(v^(g|~w))+y[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~v))+y[7]+1126891415&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~g))+y[14]+2878612391&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~m))+y[5]+4237533241&4294967295,g=v+(_<<21&4294967295|_>>>11),_=m+(v^(g|~w))+y[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~v))+y[3]+2399980690&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~g))+y[10]+4293915773&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~m))+y[1]+2240044497&4294967295,g=v+(_<<21&4294967295|_>>>11),_=m+(v^(g|~w))+y[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~v))+y[15]+4264355552&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~g))+y[6]+2734768916&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~m))+y[13]+1309151649&4294967295,g=v+(_<<21&4294967295|_>>>11),_=m+(v^(g|~w))+y[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~v))+y[11]+3174756917&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~g))+y[2]+718787259&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+w&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var g=m-this.blockSize,y=this.B,v=this.h,w=0;w<m;){if(v==0)for(;w<=g;)s(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<m;)if(y[v++]=E.charCodeAt(w++),v==this.blockSize){s(this,y),v=0;break}}else for(;w<m;)if(y[v++]=E[w++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var g=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=g&255,g/=256;for(this.u(E),E=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)E[g++]=this.g[m]>>>y&255;return E};function o(E,m){var g=l;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=m(E)}function a(E,m){this.h=m;for(var g=[],y=!0,v=E.length-1;0<=v;v--){var w=E[v]|0;y&&w==m||(g[v]=w,y=!1)}this.g=g}var l={};function u(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return T;if(0>E)return P(d(-E));for(var m=[],g=1,y=0;E>=g;y++)m[y]=E/g|0,g*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return P(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),y=T,v=0;v<E.length;v+=8){var w=Math.min(8,E.length-v),_=parseInt(E.substring(v,v+w),m);8>w?(w=d(Math.pow(m,w)),y=y.j(w).add(d(_))):(y=y.j(g),y=y.add(d(_)))}return y}var T=u(0),I=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-P(this).m();for(var E=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(D(this))return"-"+P(this).toString(E);for(var m=d(Math.pow(E,6)),g=this,y="";;){var v=M(g,m).g;g=F(g,v.j(m));var w=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=v,S(g))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=F(this,E),D(E)?-1:S(E)?0:1};function P(E){for(var m=E.g.length,g=[],y=0;y<m;y++)g[y]=~E.g[y];return new a(g,~E.h).add(I)}n.abs=function(){return D(this)?P(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0,v=0;v<=m;v++){var w=y+(this.i(v)&65535)+(E.i(v)&65535),_=(w>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=_>>>16,w&=65535,_&=65535,g[v]=_<<16|w}return new a(g,g[g.length-1]&-2147483648?-1:0)};function F(E,m){return E.add(P(m))}n.j=function(E){if(S(this)||S(E))return T;if(D(this))return D(E)?P(this).j(P(E)):P(P(this).j(E));if(D(E))return P(this.j(P(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var w=this.i(y)>>>16,_=this.i(y)&65535,Nt=E.i(v)>>>16,fe=E.i(v)&65535;g[2*y+2*v]+=_*fe,H(g,2*y+2*v),g[2*y+2*v+1]+=w*fe,H(g,2*y+2*v+1),g[2*y+2*v+1]+=_*Nt,H(g,2*y+2*v+1),g[2*y+2*v+2]+=w*Nt,H(g,2*y+2*v+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new a(g,0)};function H(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function W(E,m){this.g=E,this.h=m}function M(E,m){if(S(m))throw Error("division by zero");if(S(E))return new W(T,T);if(D(E))return m=M(P(E),m),new W(P(m.g),P(m.h));if(D(m))return m=M(E,P(m)),new W(P(m.g),m.h);if(30<E.g.length){if(D(E)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var g=I,y=m;0>=y.l(E);)g=$(g),y=$(y);var v=N(g,1),w=N(y,1);for(y=N(y,2),g=N(g,2);!S(y);){var _=w.add(y);0>=_.l(E)&&(v=v.add(g),w=_),y=N(y,1),g=N(g,1)}return m=F(E,v.j(m)),new W(v,m)}for(v=T;0<=E.l(m);){for(g=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(g),_=w.j(m);D(_)||0<_.l(E);)g-=y,w=d(g),_=w.j(m);S(w)&&(w=I),v=v.add(w),E=F(E,_)}return new W(v,E)}n.A=function(E){return M(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&E.i(y);return new a(g,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|E.i(y);return new a(g,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^E.i(y);return new a(g,this.h^E.h)};function $(E){for(var m=E.g.length+1,g=[],y=0;y<m;y++)g[y]=E.i(y)<<1|E.i(y-1)>>>31;return new a(g,E.h)}function N(E,m){var g=m>>5;m%=32;for(var y=E.g.length-g,v=[],w=0;w<y;w++)v[w]=0<m?E.i(w+g)>>>m|E.i(w+g+1)<<32-m:E.i(w+g);return new a(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_c=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,we=a}).apply(typeof fa<"u"?fa:typeof self<"u"?self:typeof window<"u"?window:{});var lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yc,Ec,Tn,vc,mr,Ys,Tc,wc,Ic;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,h){return i==Array.prototype||i==Object.prototype||(i[c]=h.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof lr=="object"&&lr];for(var c=0;c<i.length;++c){var h=i[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var h=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in h))break t;h=h[A]}i=i[i.length-1],f=h[i],c=c(f),c!=f&&c!=null&&t(h,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var h=0,f=!1,A={next:function(){if(!f&&h<i.length){var b=h++;return{value:c(b,i[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function p(i,c,h){return i.call.apply(i.bind,arguments)}function T(i,c,h){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(c,A)}}return function(){return i.apply(c,arguments)}}function I(i,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:T,I.apply(null,arguments)}function R(i,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function S(i,c){function h(){}h.prototype=c.prototype,i.aa=c.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(f,A,b){for(var k=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)k[nt-2]=arguments[nt];return c.prototype[A].apply(f,k)}}function D(i){const c=i.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=i[f];return h}return[]}function P(i,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const A=i.length||0,b=f.length||0;i.length=A+b;for(let k=0;k<b;k++)i[A+k]=f[k]}else i.push(f)}}class F{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function H(i){return/^[\s\xa0]*$/.test(i)}function W(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function M(i){return M[" "](i),i}M[" "]=function(){};var $=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function N(i,c,h){for(const f in i)c.call(h,i[f],f,i)}function E(i,c){for(const h in i)c.call(void 0,i[h],h,i)}function m(i){const c={};for(const h in i)c[h]=i[h];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)i[h]=f[h];for(let b=0;b<g.length;b++)h=g[b],Object.prototype.hasOwnProperty.call(f,h)&&(i[h]=f[h])}}function v(i){var c=1;i=i.split(":");const h=[];for(;0<c&&i.length;)h.push(i.shift()),c--;return i.length&&h.push(i.join(":")),h}function w(i){l.setTimeout(()=>{throw i},0)}function _(){var i=ns;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class Nt{constructor(){this.h=this.g=null}add(c,h){const f=fe.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var fe=new F(()=>new Ul,i=>i.reset());class Ul{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let nn,rn=!1,ns=new Nt,zi=()=>{const i=l.Promise.resolve(void 0);nn=()=>{i.then($l)}};var $l=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(h){w(h)}var c=fe;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}rn=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function yt(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var Bl=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return i}();function sn(i,c){if(yt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if($){t:{try{M(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=i.fromElement:h=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:jl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&sn.aa.h.call(this)}}S(sn,yt);var jl={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Hn="closure_listenable_"+(1e6*Math.random()|0),ql=0;function zl(i,c,h,f,A){this.listener=i,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++ql,this.da=this.fa=!1}function Kn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Gn(i){this.src=i,this.g={},this.h=0}Gn.prototype.add=function(i,c,h,f,A){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var k=ss(i,c,f,A);return-1<k?(c=i[k],h||(c.fa=!1)):(c=new zl(c,this.src,b,!!f,A),c.fa=h,i.push(c)),c};function rs(i,c){var h=c.type;if(h in i.g){var f=i.g[h],A=Array.prototype.indexOf.call(f,c,void 0),b;(b=0<=A)&&Array.prototype.splice.call(f,A,1),b&&(Kn(c),i.g[h].length==0&&(delete i.g[h],i.h--))}}function ss(i,c,h,f){for(var A=0;A<i.length;++A){var b=i[A];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==f)return A}return-1}var is="closure_lm_"+(1e6*Math.random()|0),os={};function Hi(i,c,h,f,A){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Hi(i,c[b],h,f,A);return null}return h=Wi(h),i&&i[Hn]?i.K(c,h,d(f)?!!f.capture:!!f,A):Hl(i,c,h,!1,f,A)}function Hl(i,c,h,f,A,b){if(!c)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,nt=cs(i);if(nt||(i[is]=nt=new Gn(i)),h=nt.add(c,h,f,k,b),h.proxy)return h;if(f=Kl(),h.proxy=f,f.src=i,f.listener=h,i.addEventListener)Bl||(A=k),A===void 0&&(A=!1),i.addEventListener(c.toString(),f,A);else if(i.attachEvent)i.attachEvent(Gi(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Kl(){function i(h){return c.call(i.src,i.listener,h)}const c=Gl;return i}function Ki(i,c,h,f,A){if(Array.isArray(c))for(var b=0;b<c.length;b++)Ki(i,c[b],h,f,A);else f=d(f)?!!f.capture:!!f,h=Wi(h),i&&i[Hn]?(i=i.i,c=String(c).toString(),c in i.g&&(b=i.g[c],h=ss(b,h,f,A),-1<h&&(Kn(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete i.g[c],i.h--)))):i&&(i=cs(i))&&(c=i.g[c.toString()],i=-1,c&&(i=ss(c,h,f,A)),(h=-1<i?c[i]:null)&&as(h))}function as(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Hn])rs(c.i,i);else{var h=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(h,f,i.capture):c.detachEvent?c.detachEvent(Gi(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=cs(c))?(rs(h,i),h.h==0&&(h.src=null,c[is]=null)):Kn(i)}}}function Gi(i){return i in os?os[i]:os[i]="on"+i}function Gl(i,c){if(i.da)i=!0;else{c=new sn(c,this);var h=i.listener,f=i.ha||i.src;i.fa&&as(i),i=h.call(f,c)}return i}function cs(i){return i=i[is],i instanceof Gn?i:null}var ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wi(i){return typeof i=="function"?i:(i[ls]||(i[ls]=function(c){return i.handleEvent(c)}),i[ls])}function Et(){te.call(this),this.i=new Gn(this),this.M=this,this.F=null}S(Et,te),Et.prototype[Hn]=!0,Et.prototype.removeEventListener=function(i,c,h,f){Ki(this,i,c,h,f)};function St(i,c){var h,f=i.F;if(f)for(h=[];f;f=f.F)h.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new yt(c,i);else if(c instanceof yt)c.target=c.target||i;else{var A=c;c=new yt(f,i),y(c,A)}if(A=!0,h)for(var b=h.length-1;0<=b;b--){var k=c.g=h[b];A=Wn(k,f,!0,c)&&A}if(k=c.g=i,A=Wn(k,f,!0,c)&&A,A=Wn(k,f,!1,c)&&A,h)for(b=0;b<h.length;b++)k=c.g=h[b],A=Wn(k,f,!1,c)&&A}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var h=i.g[c],f=0;f<h.length;f++)Kn(h[f]);delete i.g[c],i.h--}}this.F=null},Et.prototype.K=function(i,c,h,f){return this.i.add(String(i),c,!1,h,f)},Et.prototype.L=function(i,c,h,f){return this.i.add(String(i),c,!0,h,f)};function Wn(i,c,h,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,b=0;b<c.length;++b){var k=c[b];if(k&&!k.da&&k.capture==h){var nt=k.listener,pt=k.ha||k.src;k.fa&&rs(i.i,k),A=nt.call(pt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Qi(i,c,h){if(typeof i=="function")h&&(i=I(i,h));else if(i&&typeof i.handleEvent=="function")i=I(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(i,c||0)}function Xi(i){i.g=Qi(()=>{i.g=null,i.i&&(i.i=!1,Xi(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Wl extends te{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Xi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(i){te.call(this),this.h=i,this.g={}}S(on,te);var Yi=[];function Ji(i){N(i.g,function(c,h){this.g.hasOwnProperty(h)&&as(c)},i),i.g={}}on.prototype.N=function(){on.aa.N.call(this),Ji(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var us=l.JSON.stringify,Ql=l.JSON.parse,Xl=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function hs(){}hs.prototype.h=null;function Zi(i){return i.h||(i.h=i.i())}function to(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ds(){yt.call(this,"d")}S(ds,yt);function fs(){yt.call(this,"c")}S(fs,yt);var pe={},eo=null;function Qn(){return eo=eo||new Et}pe.La="serverreachability";function no(i){yt.call(this,pe.La,i)}S(no,yt);function cn(i){const c=Qn();St(c,new no(c))}pe.STAT_EVENT="statevent";function ro(i,c){yt.call(this,pe.STAT_EVENT,i),this.stat=c}S(ro,yt);function Pt(i){const c=Qn();St(c,new ro(c,i))}pe.Ma="timingevent";function so(i,c){yt.call(this,pe.Ma,i),this.size=c}S(so,yt);function ln(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},c)}function un(){this.g=!0}un.prototype.xa=function(){this.g=!1};function Yl(i,c,h,f,A,b){i.info(function(){if(i.g)if(b)for(var k="",nt=b.split("&"),pt=0;pt<nt.length;pt++){var tt=nt[pt].split("=");if(1<tt.length){var vt=tt[0];tt=tt[1];var Tt=vt.split("_");k=2<=Tt.length&&Tt[1]=="type"?k+(vt+"="+tt+"&"):k+(vt+"=redacted&")}}else k=null;else k=b;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+k})}function Jl(i,c,h,f,A,b,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+b+" "+k})}function Ce(i,c,h,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+tu(i,h)+(f?" "+f:"")})}function Zl(i,c){i.info(function(){return"TIMEOUT: "+c})}un.prototype.info=function(){};function tu(i,c){if(!i.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var f=h[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return us(h)}catch{return c}}var Xn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},io={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ps;function Yn(){}S(Yn,hs),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},ps=new Yn;function ee(i,c,h,f){this.j=i,this.i=c,this.l=h,this.R=f||1,this.U=new on(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oo}function oo(){this.i=null,this.g="",this.h=!1}var ao={},ms={};function gs(i,c,h){i.L=1,i.v=er(Kt(c)),i.m=h,i.P=!0,co(i,null)}function co(i,c){i.F=Date.now(),Jn(i),i.A=Kt(i.v);var h=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Io(h.i,"t",f),i.C=0,h=i.j.J,i.h=new oo,i.g=Bo(i.j,h?c:null,!i.m),0<i.O&&(i.M=new Wl(I(i.Y,i,i.g),i.O)),c=i.U,h=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(Yi[0]=A.toString()),A=Yi);for(var b=0;b<A.length;b++){var k=Hi(h,A[b],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),cn(),Yl(i.i,i.u,i.A,i.l,i.R,i.m)}ee.prototype.ca=function(i){i=i.target;const c=this.M;c&&Gt(i)==3?c.j():this.Y(i)},ee.prototype.Y=function(i){try{if(i==this.g)t:{const Tt=Gt(this.g);var c=this.g.Ba();const ke=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Vo(this.g)))){this.J||Tt!=4||c==7||(c==8||0>=ke?cn(3):cn(2)),_s(this);var h=this.g.Z();this.X=h;e:if(lo(this)){var f=Vo(this.g);i="";var A=f.length,b=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){me(this),hn(this);var k="";break e}this.h.i=new l.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(b&&c==A-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Jl(this.i,this.u,this.A,this.l,this.R,Tt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var nt,pt=this.g;if((nt=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(nt)){var tt=nt;break e}}tt=null}if(h=tt)Ce(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ys(this,h);else{this.o=!1,this.s=3,Pt(12),me(this),hn(this);break t}}if(this.P){h=!0;let xt;for(;!this.J&&this.C<k.length;)if(xt=eu(this,k),xt==ms){Tt==4&&(this.s=4,Pt(14),h=!1),Ce(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==ao){this.s=4,Pt(15),Ce(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else Ce(this.i,this.l,xt,null),ys(this,xt);if(lo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||k.length!=0||this.h.h||(this.s=1,Pt(16),h=!1),this.o=this.o&&h,!h)Ce(this.i,this.l,k,"[Invalid Chunked Response]"),me(this),hn(this);else if(0<k.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),As(vt),vt.M=!0,Pt(11))}}else Ce(this.i,this.l,k,null),ys(this,k);Tt==4&&me(this),this.o&&!this.J&&(Tt==4?Lo(this.j,this):(this.o=!1,Jn(this)))}else yu(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),me(this),hn(this)}}}catch{}finally{}};function lo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function eu(i,c){var h=i.C,f=c.indexOf(`
`,h);return f==-1?ms:(h=Number(c.substring(h,f)),isNaN(h)?ao:(f+=1,f+h>c.length?ms:(c=c.slice(f,f+h),i.C=f+h,c)))}ee.prototype.cancel=function(){this.J=!0,me(this)};function Jn(i){i.S=Date.now()+i.I,uo(i,i.I)}function uo(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ln(I(i.ba,i),c)}function _s(i){i.B&&(l.clearTimeout(i.B),i.B=null)}ee.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Zl(this.i,this.A),this.L!=2&&(cn(),Pt(17)),me(this),this.s=2,hn(this)):uo(this,this.S-i)};function hn(i){i.j.G==0||i.J||Lo(i.j,i)}function me(i){_s(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,Ji(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function ys(i,c){try{var h=i.j;if(h.G!=0&&(h.g==i||Es(h.h,i))){if(!i.K&&Es(h.h,i)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)or(h),sr(h);else break t;Is(h),Pt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=ln(I(h.Za,h),6e3));if(1>=po(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else _e(h,11)}else if((i.K||h.g==i)&&or(h),!H(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let tt=A[c];if(h.T=tt[0],tt=tt[1],h.G==2)if(tt[0]=="c"){h.K=tt[1],h.ia=tt[2];const vt=tt[3];vt!=null&&(h.la=vt,h.j.info("VER="+h.la));const Tt=tt[4];Tt!=null&&(h.Aa=Tt,h.j.info("SVER="+h.Aa));const ke=tt[5];ke!=null&&typeof ke=="number"&&0<ke&&(f=1.5*ke,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const xt=i.g;if(xt){const cr=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cr){var b=f.h;b.g||cr.indexOf("spdy")==-1&&cr.indexOf("quic")==-1&&cr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(vs(b,b.h),b.h=null))}if(f.D){const Rs=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Rs&&(f.ya=Rs,st(f.I,f.D,Rs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=i;if(f.qa=$o(f,f.J?f.ia:null,f.W),k.K){mo(f.h,k);var nt=k,pt=f.L;pt&&(nt.I=pt),nt.B&&(_s(nt),Jn(nt)),f.g=k}else Mo(f);0<h.i.length&&ir(h)}else tt[0]!="stop"&&tt[0]!="close"||_e(h,7);else h.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?_e(h,7):ws(h):tt[0]!="noop"&&h.l&&h.l.ta(tt),h.v=0)}}cn(4)}catch{}}var nu=class{constructor(i,c){this.g=i,this.map=c}};function ho(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function po(i){return i.h?1:i.g?i.g.size:0}function Es(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function vs(i,c){i.g?i.g.add(c):i.h=c}function mo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}ho.prototype.cancel=function(){if(this.i=go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function go(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const h of i.g.values())c=c.concat(h.D);return c}return D(i.i)}function ru(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(u(i)){for(var c=[],h=i.length,f=0;f<h;f++)c.push(i[f]);return c}c=[],h=0;for(f in i)c[h++]=i[f];return c}function su(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(u(i)||typeof i=="string"){var c=[];i=i.length;for(var h=0;h<i;h++)c.push(h);return c}c=[],h=0;for(const f in i)c[h++]=f;return c}}}function _o(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(u(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var h=su(i),f=ru(i),A=f.length,b=0;b<A;b++)c.call(void 0,f[b],h&&h[b],i)}var yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iu(i,c){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var f=i[h].indexOf("="),A=null;if(0<=f){var b=i[h].substring(0,f);A=i[h].substring(f+1)}else b=i[h];c(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function ge(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ge){this.h=i.h,Zn(this,i.j),this.o=i.o,this.g=i.g,tr(this,i.s),this.l=i.l;var c=i.i,h=new pn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Eo(this,h),this.m=i.m}else i&&(c=String(i).match(yo))?(this.h=!1,Zn(this,c[1]||"",!0),this.o=dn(c[2]||""),this.g=dn(c[3]||"",!0),tr(this,c[4]),this.l=dn(c[5]||"",!0),Eo(this,c[6]||"",!0),this.m=dn(c[7]||"")):(this.h=!1,this.i=new pn(null,this.h))}ge.prototype.toString=function(){var i=[],c=this.j;c&&i.push(fn(c,vo,!0),":");var h=this.g;return(h||c=="file")&&(i.push("//"),(c=this.o)&&i.push(fn(c,vo,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(fn(h,h.charAt(0)=="/"?cu:au,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",fn(h,uu)),i.join("")};function Kt(i){return new ge(i)}function Zn(i,c,h){i.j=h?dn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function tr(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function Eo(i,c,h){c instanceof pn?(i.i=c,hu(i.i,i.h)):(h||(c=fn(c,lu)),i.i=new pn(c,i.h))}function st(i,c,h){i.i.set(c,h)}function er(i){return st(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function dn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function fn(i,c,h){return typeof i=="string"?(i=encodeURI(i).replace(c,ou),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function ou(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var vo=/[#\/\?@]/g,au=/[#\?:]/g,cu=/[#\?]/g,lu=/[#\?@]/g,uu=/#/g;function pn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function ne(i){i.g||(i.g=new Map,i.h=0,i.i&&iu(i.i,function(c,h){i.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=pn.prototype,n.add=function(i,c){ne(this),this.i=null,i=Ve(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(c),this.h+=1,this};function To(i,c){ne(i),c=Ve(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function wo(i,c){return ne(i),c=Ve(i,c),i.g.has(c)}n.forEach=function(i,c){ne(this),this.g.forEach(function(h,f){h.forEach(function(A){i.call(c,A,f,this)},this)},this)},n.na=function(){ne(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const A=i[f];for(let b=0;b<A.length;b++)h.push(c[f])}return h},n.V=function(i){ne(this);let c=[];if(typeof i=="string")wo(this,i)&&(c=c.concat(this.g.get(Ve(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)c=c.concat(i[h])}return c},n.set=function(i,c){return ne(this),this.i=null,i=Ve(this,i),wo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function Io(i,c,h){To(i,c),0<h.length&&(i.i=null,i.g.set(Ve(i,c),D(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const b=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=b;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),i.push(A)}}return this.i=i.join("&")};function Ve(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function hu(i,c){c&&!i.j&&(ne(i),i.i=null,i.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(To(this,f),Io(this,A,h))},i)),i.j=c}function du(i,c){const h=new un;if(l.Image){const f=new Image;f.onload=R(re,h,"TestLoadImage: loaded",!0,c,f),f.onerror=R(re,h,"TestLoadImage: error",!1,c,f),f.onabort=R(re,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=R(re,h,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function fu(i,c){const h=new un,f=new AbortController,A=setTimeout(()=>{f.abort(),re(h,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(A),b.ok?re(h,"TestPingServer: ok",!0,c):re(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),re(h,"TestPingServer: error",!1,c)})}function re(i,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function pu(){this.g=new Xl}function mu(i,c,h){const f=h||"";try{_o(i,function(A,b){let k=A;d(A)&&(k=us(A)),c.push(f+b+"="+encodeURIComponent(k))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function mn(i){this.l=i.Ub||null,this.j=i.eb||!1}S(mn,hs),mn.prototype.g=function(){return new nr(this.l,this.j)},mn.prototype.i=function(i){return function(){return i}}({});function nr(i,c){Et.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(nr,Et),n=nr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,_n(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,_n(this)),this.g&&(this.readyState=3,_n(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ao(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ao(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?gn(this):_n(this),this.readyState==3&&Ao(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,gn(this))},n.Qa=function(i){this.g&&(this.response=i,gn(this))},n.ga=function(){this.g&&gn(this)};function gn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,_n(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=c.next();return i.join(`\r
`)};function _n(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(nr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ro(i){let c="";return N(i,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Ts(i,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=Ro(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):st(i,c,h))}function ct(i){Et.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ct,Et);var gu=/^https?$/i,_u=["POST","PUT"];n=ct.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ps.g(),this.v=this.o?Zi(this.o):Zi(ps),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(b){bo(this,b);return}if(i=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),A=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(_u,c,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,k]of h)this.g.setRequestHeader(b,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Co(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){bo(this,b)}};function bo(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,So(i),rr(i)}function So(i){i.A||(i.A=!0,St(i,"complete"),St(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,St(this,"complete"),St(this,"abort"),rr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rr(this,!0)),ct.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Po(this):this.bb())},n.bb=function(){Po(this)};function Po(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Gt(i)!=4||i.Z()!=2)){if(i.u&&Gt(i)==4)Qi(i.Ea,0,i);else if(St(i,"readystatechange"),Gt(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=k===0){var A=String(i.D).match(yo)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),f=!gu.test(A?A.toLowerCase():"")}h=f}if(h)St(i,"complete"),St(i,"success");else{i.m=6;try{var b=2<Gt(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",So(i)}}finally{rr(i)}}}}function rr(i,c){if(i.g){Co(i);const h=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||St(i,"ready");try{h.onreadystatechange=f}catch{}}}function Co(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Gt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Ql(c)}};function Vo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function yu(i){const c={};i=(i.g&&2<=Gt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(H(i[f]))continue;var h=v(i[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[A]||[];c[A]=b,b.push(h)}E(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yn(i,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||c}function Do(i){this.Aa=0,this.i=[],this.j=new un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yn("baseRetryDelayMs",5e3,i),this.cb=yn("retryDelaySeedMs",1e4,i),this.Wa=yn("forwardChannelMaxRetries",2,i),this.wa=yn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ho(i&&i.concurrentRequestLimit),this.Da=new pu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Do.prototype,n.la=8,n.G=1,n.connect=function(i,c,h,f){Pt(0),this.W=i,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=$o(this,null,this.W),ir(this)};function ws(i){if(ko(i),i.G==3){var c=i.U++,h=Kt(i.I);if(st(h,"SID",i.K),st(h,"RID",c),st(h,"TYPE","terminate"),En(i,h),c=new ee(i,i.j,c),c.L=2,c.v=er(Kt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Bo(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Jn(c)}Uo(i)}function sr(i){i.g&&(As(i),i.g.cancel(),i.g=null)}function ko(i){sr(i),i.u&&(l.clearTimeout(i.u),i.u=null),or(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function ir(i){if(!fo(i.h)&&!i.s){i.s=!0;var c=i.Ga;nn||zi(),rn||(nn(),rn=!0),ns.add(c,i),i.B=0}}function Eu(i,c){return po(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ln(I(i.Ga,i,c),Fo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new ee(this,this.j,i);let b=this.o;if(this.S&&(b?(b=m(b),y(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=xo(this,A,c),h=Kt(this.I),st(h,"RID",i),st(h,"CVER",22),this.D&&st(h,"X-HTTP-Session-Id",this.D),En(this,h),b&&(this.O?c="headers="+encodeURIComponent(String(Ro(b)))+"&"+c:this.m&&Ts(h,this.m,b)),vs(this.h,A),this.Ua&&st(h,"TYPE","init"),this.P?(st(h,"$req",c),st(h,"SID","null"),A.T=!0,gs(A,h,null)):gs(A,h,c),this.G=2}}else this.G==3&&(i?No(this,i):this.i.length==0||fo(this.h)||No(this))};function No(i,c){var h;c?h=c.l:h=i.U++;const f=Kt(i.I);st(f,"SID",i.K),st(f,"RID",h),st(f,"AID",i.T),En(i,f),i.m&&i.o&&Ts(f,i.m,i.o),h=new ee(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),c&&(i.i=c.D.concat(i.i)),c=xo(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),vs(i.h,h),gs(h,f,c)}function En(i,c){i.H&&N(i.H,function(h,f){st(c,f,h)}),i.l&&_o({},function(h,f){st(c,f,h)})}function xo(i,c,h){h=Math.min(i.i.length,h);var f=i.l?I(i.l.Na,i.l,i):null;t:{var A=i.i;let b=-1;for(;;){const k=["count="+h];b==-1?0<h?(b=A[0].g,k.push("ofs="+b)):b=0:k.push("ofs="+b);let nt=!0;for(let pt=0;pt<h;pt++){let tt=A[pt].g;const vt=A[pt].map;if(tt-=b,0>tt)b=Math.max(0,A[pt].g-100),nt=!1;else try{mu(vt,k,"req"+tt+"_")}catch{f&&f(vt)}}if(nt){f=k.join("&");break t}}}return i=i.i.splice(0,h),c.D=i,f}function Mo(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;nn||zi(),rn||(nn(),rn=!0),ns.add(c,i),i.v=0}}function Is(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ln(I(i.Fa,i),Fo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Oo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ln(I(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),sr(this),Oo(this))};function As(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function Oo(i){i.g=new ee(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=Kt(i.qa);st(c,"RID","rpc"),st(c,"SID",i.K),st(c,"AID",i.T),st(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&st(c,"TO",i.ja),st(c,"TYPE","xmlhttp"),En(i,c),i.m&&i.o&&Ts(c,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=er(Kt(c)),h.m=null,h.P=!0,co(h,i)}n.Za=function(){this.C!=null&&(this.C=null,sr(this),Is(this),Pt(19))};function or(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function Lo(i,c){var h=null;if(i.g==c){or(i),As(i),i.g=null;var f=2}else if(Es(i.h,c))h=c.D,mo(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=i.B;f=Qn(),St(f,new so(f,h)),ir(i)}else Mo(i);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&Eu(i,c)||f==2&&Is(i)))switch(h&&0<h.length&&(c=i.h,c.i=c.i.concat(h)),A){case 1:_e(i,5);break;case 4:_e(i,10);break;case 3:_e(i,6);break;default:_e(i,2)}}}function Fo(i,c){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*c}function _e(i,c){if(i.j.info("Error code "+c),c==2){var h=I(i.fb,i),f=i.Xa;const A=!f;f=new ge(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Zn(f,"https"),er(f),A?du(f.toString(),h):fu(f.toString(),h)}else Pt(2);i.G=0,i.l&&i.l.sa(c),Uo(i),ko(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Uo(i){if(i.G=0,i.ka=[],i.l){const c=go(i.h);(c.length!=0||i.i.length!=0)&&(P(i.ka,c),P(i.ka,i.i),i.h.i.length=0,D(i.i),i.i.length=0),i.l.ra()}}function $o(i,c,h){var f=h instanceof ge?Kt(h):new ge(h);if(f.g!="")c&&(f.g=c+"."+f.g),tr(f,f.s);else{var A=l.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var b=new ge(null);f&&Zn(b,f),c&&(b.g=c),A&&tr(b,A),h&&(b.l=h),f=b}return h=i.D,c=i.ya,h&&c&&st(f,h,c),st(f,"VER",i.la),En(i,f),f}function Bo(i,c,h){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new ct(new mn({eb:h})):new ct(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jo(){}n=jo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ar(){}ar.prototype.g=function(i,c){return new Vt(i,c)};function Vt(i,c){Et.call(this),this.g=new Do(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!H(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!H(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new De(this)}S(Vt,Et),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){ws(this.g)},Vt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=us(i),i=h);c.i.push(new nu(c.Ya++,i)),c.G==3&&ir(c)},Vt.prototype.N=function(){this.g.l=null,delete this.j,ws(this.g),delete this.g,Vt.aa.N.call(this)};function qo(i){ds.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const h in c){i=h;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}S(qo,ds);function zo(){fs.call(this),this.status=1}S(zo,fs);function De(i){this.g=i}S(De,jo),De.prototype.ua=function(){St(this.g,"a")},De.prototype.ta=function(i){St(this.g,new qo(i))},De.prototype.sa=function(i){St(this.g,new zo)},De.prototype.ra=function(){St(this.g,"b")},ar.prototype.createWebChannel=ar.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Ic=function(){return new ar},wc=function(){return Qn()},Tc=pe,Ys={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xn.NO_ERROR=0,Xn.TIMEOUT=8,Xn.HTTP_ERROR=6,mr=Xn,io.COMPLETE="complete",vc=io,to.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",Et.prototype.listen=Et.prototype.K,Tn=to,Ec=mn,ct.prototype.listenOnce=ct.prototype.L,ct.prototype.getLastError=ct.prototype.Ka,ct.prototype.getLastErrorCode=ct.prototype.Ba,ct.prototype.getStatus=ct.prototype.Z,ct.prototype.getResponseJson=ct.prototype.Oa,ct.prototype.getResponseText=ct.prototype.oa,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Ha,yc=ct}).apply(typeof lr<"u"?lr:typeof self<"u"?self:typeof window<"u"?window:{});const pa="@firebase/firestore";/**
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
 */const Ae=new dc("@firebase/firestore");function vn(){return Ae.logLevel}function x(n,...t){if(Ae.logLevel<=Z.DEBUG){const e=t.map(yi);Ae.debug(`Firestore (${Je}): ${n}`,...e)}}function Yt(n,...t){if(Ae.logLevel<=Z.ERROR){const e=t.map(yi);Ae.error(`Firestore (${Je}): ${n}`,...e)}}function ze(n,...t){if(Ae.logLevel<=Z.WARN){const e=t.map(yi);Ae.warn(`Firestore (${Je}): ${n}`,...e)}}function yi(n){if(typeof n=="string")return n;try{/**
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
 */function j(n="Unexpected state"){const t=`FIRESTORE (${Je}) INTERNAL ASSERTION FAILED: `+n;throw Yt(t),new Error(t)}function rt(n,t){n||j()}function G(n,t){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Ye{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ae{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Ac{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class uf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class hf{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let o=new ae;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ae,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ae)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string"),new Ac(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string"),new It(t)}}class df{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ff{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new df(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mf{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(rt(typeof e.token=="string"),this.R=e.token,new pf(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Rc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=gf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function et(n,t){return n<t?-1:n>t?1:0}function He(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class dt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new dt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?et(this.nanoseconds,t.nanoseconds):et(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{constructor(t){this.timestamp=t}static fromTimestamp(t){return new K(t)}static min(){return new K(new dt(0,0))}static max(){return new K(new dt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class kn{constructor(t,e,r){e===void 0?e=0:e>t.length&&j(),r===void 0?r=t.length-e:r>t.length-e&&j(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return kn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof kn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ot extends kn{construct(t,e,r){return new ot(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ot(e)}static emptyPath(){return new ot([])}}const _f=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends kn{construct(t,e,r){return new gt(t,e,r)}static isValidIdentifier(t){return _f.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new O(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new O(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gt(e)}static emptyPath(){return new gt([])}}/**
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
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(ot.fromString(t))}static fromName(t){return new L(ot.fromString(t).popFirst(5))}static empty(){return new L(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ot.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new ot(t.slice()))}}function yf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new dt(e+1,0):new dt(e,r));return new ue(s,L.empty(),t)}function Ef(n){return new ue(n.readTime,n.key,-1)}class ue{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ue(K.min(),L.empty(),-1)}static max(){return new ue(K.max(),L.empty(),-1)}}function vf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(n.documentKey,t.documentKey),e!==0?e:et(n.largestBatchId,t.largestBatchId))}/**
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
 */const Tf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Un(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Tf)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},u=>r(u))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const d=u;e(t[d]).next(p=>{a[d]=p,++l,l===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function If(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function $n(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ei{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ei.oe=-1;function zr(n){return n==null}function Cr(n){return n===0&&1/n==-1/0}function Af(n){return typeof n=="number"&&Number.isInteger(n)&&!Cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ma(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ze(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function bc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class at{constructor(t,e){this.comparator=t,this.root=e||mt.EMPTY}insert(t,e){return new at(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(t){return new at(this.comparator,this.root.remove(t,this.comparator).copy(null,null,mt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ur(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ur(this.root,t,this.comparator,!1)}getReverseIterator(){return new ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ur(this.root,t,this.comparator,!0)}}class ur{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class mt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??mt.RED,this.left=s??mt.EMPTY,this.right=o??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new mt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const t=this.left.check();if(t!==this.right.check())throw j();return t+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,r,s,o){return this}insert(t,e,r){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _t{constructor(t){this.comparator=t,this.data=new at(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ga(this.data.getIterator())}getIteratorFrom(t){return new ga(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof _t)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new _t(this.comparator);return e.data=t,e}}class ga{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(t){this.fields=t,t.sort(gt.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new _t(gt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return He(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Sc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Sc("Invalid base64 string: "+o):o}}(t);return new bt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return et(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const Rf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function he(n){if(rt(!!n),typeof n=="string"){let t=0;const e=Rf.exec(n);if(rt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Re(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
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
 */function vi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Ti(n){const t=n.mapValue.fields.__previous_value__;return vi(t)?Ti(t):t}function Nn(n){const t=he(n.mapValue.fields.__local_write_time__.timestampValue);return new dt(t.seconds,t.nanos)}/**
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
 */class bf{constructor(t,e,r,s,o,a,l,u,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class xn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const hr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function be(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vi(n)?4:Sf(n)?9007199254740991:10:j()}function zt(n,t){if(n===t)return!0;const e=be(n);if(e!==be(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Nn(n).isEqual(Nn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=he(s.timestampValue),l=he(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Re(s.bytesValue).isEqual(Re(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return ut(s.geoPointValue.latitude)===ut(o.geoPointValue.latitude)&&ut(s.geoPointValue.longitude)===ut(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ut(s.integerValue)===ut(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ut(s.doubleValue),l=ut(o.doubleValue);return a===l?Cr(a)===Cr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return He(n.arrayValue.values||[],t.arrayValue.values||[],zt);case 10:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(ma(a)!==ma(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!zt(a[u],l[u])))return!1;return!0}(n,t);default:return j()}}function Mn(n,t){return(n.values||[]).find(e=>zt(e,t))!==void 0}function Ke(n,t){if(n===t)return 0;const e=be(n),r=be(t);if(e!==r)return et(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return et(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=ut(o.integerValue||o.doubleValue),u=ut(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return _a(n.timestampValue,t.timestampValue);case 4:return _a(Nn(n),Nn(t));case 5:return et(n.stringValue,t.stringValue);case 6:return function(o,a){const l=Re(o),u=Re(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=et(l[d],u[d]);if(p!==0)return p}return et(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=et(ut(o.latitude),ut(a.latitude));return l!==0?l:et(ut(o.longitude),ut(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const l=o.values||[],u=a.values||[];for(let d=0;d<l.length&&d<u.length;++d){const p=Ke(l[d],u[d]);if(p)return p}return et(l.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===hr.mapValue&&a===hr.mapValue)return 0;if(o===hr.mapValue)return 1;if(a===hr.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let T=0;T<u.length&&T<p.length;++T){const I=et(u[T],p[T]);if(I!==0)return I;const R=Ke(l[u[T]],d[p[T]]);if(R!==0)return R}return et(u.length,p.length)}(n.mapValue,t.mapValue);default:throw j()}}function _a(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return et(n,t);const e=he(n),r=he(t),s=et(e.seconds,r.seconds);return s!==0?s:et(e.nanos,r.nanos)}function Ge(n){return Js(n)}function Js(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=he(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Re(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return L.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Js(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Js(e.fields[a])}`;return s+"}"}(n.mapValue):j()}function Zs(n){return!!n&&"integerValue"in n}function wi(n){return!!n&&"arrayValue"in n}function ya(n){return!!n&&"nullValue"in n}function Ea(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gr(n){return!!n&&"mapValue"in n}function An(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ze(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=An(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=An(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Sf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(t){this.value=t}static empty(){return new Dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!gr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=An(e)}setAll(t){let e=gt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=An(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());gr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return zt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];gr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ze(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Dt(An(this.value))}}function Pc(n){const t=[];return Ze(n.fields,(e,r)=>{const s=new gt([e]);if(gr(r)){const o=Pc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Mt(t)}/**
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
 */class At{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new At(t,0,K.min(),K.min(),K.min(),Dt.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,K.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,K.min(),K.min(),Dt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,K.min(),K.min(),Dt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vr{constructor(t,e){this.position=t,this.inclusive=e}}function va(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),e.key):r=Ke(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ta(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!zt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Dr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Pf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Cc{}class ht extends Cc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Vf(t,e,r):e==="array-contains"?new Nf(t,r):e==="in"?new xf(t,r):e==="not-in"?new Mf(t,r):e==="array-contains-any"?new Of(t,r):new ht(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Df(t,r):new kf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ke(e,this.value)):e!==null&&be(this.value)===be(e)&&this.matchesComparison(Ke(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends Cc{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ht(t,e)}matches(t){return Vc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Vc(n){return n.op==="and"}function Dc(n){return Cf(n)&&Vc(n)}function Cf(n){for(const t of n.filters)if(t instanceof Ht)return!1;return!0}function ti(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+Ge(n.value);if(Dc(n))return n.filters.map(t=>ti(t)).join(",");{const t=n.filters.map(e=>ti(e)).join(",");return`${n.op}(${t})`}}function kc(n,t){return n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.field.isEqual(s.field)&&zt(r.value,s.value)}(n,t):n instanceof Ht?function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&kc(a,s.filters[l]),!0):!1}(n,t):void j()}function Nc(n){return n instanceof ht?function(e){return`${e.field.canonicalString()} ${e.op} ${Ge(e.value)}`}(n):n instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(Nc).join(" ,")+"}"}(n):"Filter"}class Vf extends ht{constructor(t,e,r){super(t,e,r),this.key=L.fromName(r.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class Df extends ht{constructor(t,e){super(t,"in",e),this.keys=xc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kf extends ht{constructor(t,e){super(t,"not-in",e),this.keys=xc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function xc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>L.fromName(r.referenceValue))}class Nf extends ht{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return wi(e)&&Mn(e.arrayValue,this.value)}}class xf extends ht{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Mn(this.value.arrayValue,e)}}class Mf extends ht{constructor(t,e){super(t,"not-in",e)}matches(t){if(Mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Mn(this.value.arrayValue,e)}}class Of extends ht{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!wi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Mn(this.value.arrayValue,r))}}/**
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
 */class Lf{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function wa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Lf(n,t,e,r,s,o,a)}function Ii(n){const t=G(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ti(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),zr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ge(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ge(r)).join(",")),t.ue=e}return t.ue}function Ai(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Pf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!kc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ta(n.startAt,t.startAt)&&Ta(n.endAt,t.endAt)}function ei(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Hr{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ff(n,t,e,r,s,o,a,l){return new Hr(n,t,e,r,s,o,a,l)}function Mc(n){return new Hr(n)}function Ia(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Uf(n){return n.collectionGroup!==null}function Rn(n){const t=G(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new _t(gt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Dr(o,r))}),e.has(gt.keyField().canonicalString())||t.ce.push(new Dr(gt.keyField(),r))}return t.ce}function Bt(n){const t=G(n);return t.le||(t.le=$f(t,Rn(n))),t.le}function $f(n,t){if(n.limitType==="F")return wa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Dr(s.field,o)});const e=n.endAt?new Vr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Vr(n.startAt.position,n.startAt.inclusive):null;return wa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ni(n,t,e){return new Hr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Kr(n,t){return Ai(Bt(n),Bt(t))&&n.limitType===t.limitType}function Oc(n){return`${Ii(Bt(n))}|lt:${n.limitType}`}function Oe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Nc(s)).join(", ")}]`),zr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ge(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ge(s)).join(",")),`Target(${r})`}(Bt(n))}; limitType=${n.limitType})`}function Gr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Rn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=va(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Rn(r),s)||r.endAt&&!function(a,l,u){const d=va(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Rn(r),s))}(n,t)}function Bf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lc(n){return(t,e)=>{let r=!1;for(const s of Rn(n)){const o=jf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function jf(n,t,e){const r=n.field.isKeyField()?L.comparator(t.key,e.key):function(o,a,l){const u=a.data.field(o),d=l.data.field(o);return u!==null&&d!==null?Ke(u,d):j()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
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
 */class tn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ze(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return bc(this.inner)}size(){return this.innerSize}}/**
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
 */const qf=new at(L.comparator);function Jt(){return qf}const Fc=new at(L.comparator);function wn(...n){let t=Fc;for(const e of n)t=t.insert(e.key,e);return t}function Uc(n){let t=Fc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ve(){return bn()}function $c(){return bn()}function bn(){return new tn(n=>n.toString(),(n,t)=>n.isEqual(t))}const zf=new at(L.comparator),Hf=new _t(L.comparator);function Y(...n){let t=Hf;for(const e of n)t=t.add(e);return t}const Kf=new _t(et);function Gf(){return Kf}/**
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
 */function Bc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cr(t)?"-0":t}}function jc(n){return{integerValue:""+n}}function Wf(n,t){return Af(t)?jc(t):Bc(n,t)}/**
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
 */class Wr{constructor(){this._=void 0}}function Qf(n,t,e){return n instanceof kr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&vi(o)&&(o=Ti(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof On?zc(n,t):n instanceof Ln?Hc(n,t):function(s,o){const a=qc(s,o),l=Aa(a)+Aa(s.Pe);return Zs(a)&&Zs(s.Pe)?jc(l):Bc(s.serializer,l)}(n,t)}function Xf(n,t,e){return n instanceof On?zc(n,t):n instanceof Ln?Hc(n,t):e}function qc(n,t){return n instanceof Nr?function(r){return Zs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class kr extends Wr{}class On extends Wr{constructor(t){super(),this.elements=t}}function zc(n,t){const e=Kc(t);for(const r of n.elements)e.some(s=>zt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Ln extends Wr{constructor(t){super(),this.elements=t}}function Hc(n,t){let e=Kc(t);for(const r of n.elements)e=e.filter(s=>!zt(s,r));return{arrayValue:{values:e}}}class Nr extends Wr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Aa(n){return ut(n.integerValue||n.doubleValue)}function Kc(n){return wi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yf(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof On&&s instanceof On||r instanceof Ln&&s instanceof Ln?He(r.elements,s.elements,zt):r instanceof Nr&&s instanceof Nr?zt(r.Pe,s.Pe):r instanceof kr&&s instanceof kr}(n.transform,t.transform)}class Jf{constructor(t,e){this.version=t,this.transformResults=e}}class Xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xt}static exists(t){return new Xt(void 0,t)}static updateTime(t){return new Xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _r(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Qr{}function Gc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Qc(n.key,Xt.none()):new Bn(n.key,n.data,Xt.none());{const e=n.data,r=Dt.empty();let s=new _t(gt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Se(n.key,r,new Mt(s.toArray()),Xt.none())}}function Zf(n,t,e){n instanceof Bn?function(s,o,a){const l=s.value.clone(),u=ba(s.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Se?function(s,o,a){if(!_r(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=ba(s.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(Wc(s)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Sn(n,t,e,r){return n instanceof Bn?function(o,a,l,u){if(!_r(o.precondition,a))return l;const d=o.value.clone(),p=Sa(o.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Se?function(o,a,l,u){if(!_r(o.precondition,a))return l;const d=Sa(o.fieldTransforms,u,a),p=a.data;return p.setAll(Wc(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,l){return _r(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function tp(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=qc(r.transform,s||null);o!=null&&(e===null&&(e=Dt.empty()),e.set(r.field,o))}return e||null}function Ra(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&He(r,s,(o,a)=>Yf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Bn extends Qr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Se extends Qr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Wc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ba(n,t,e){const r=new Map;rt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Xf(a,l,e[s]))}return r}function Sa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Qf(o,a,t))}return r}class Qc extends Qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ep extends Qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class np{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Zf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Sn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Sn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=$c();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const u=Gc(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Y())}isEqual(t){return this.batchId===t.batchId&&He(this.mutations,t.mutations,(e,r)=>Ra(e,r))&&He(this.baseMutations,t.baseMutations,(e,r)=>Ra(e,r))}}class Ri{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){rt(t.mutations.length===r.length);let s=function(){return zf}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ri(t,e,r,s)}}/**
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
 */class rp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class sp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var lt,J;function ip(n){switch(n){default:return j();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Xc(n){if(n===void 0)return Yt("GRPC error has no .code"),V.UNKNOWN;switch(n){case lt.OK:return V.OK;case lt.CANCELLED:return V.CANCELLED;case lt.UNKNOWN:return V.UNKNOWN;case lt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case lt.INTERNAL:return V.INTERNAL;case lt.UNAVAILABLE:return V.UNAVAILABLE;case lt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case lt.NOT_FOUND:return V.NOT_FOUND;case lt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case lt.ABORTED:return V.ABORTED;case lt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case lt.DATA_LOSS:return V.DATA_LOSS;default:return j()}}(J=lt||(lt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function op(){return new TextEncoder}/**
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
 */const ap=new we([4294967295,4294967295],0);function Pa(n){const t=op().encode(n),e=new _c;return e.update(t),new Uint8Array(e.digest())}function Ca(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new we([e,r],0),new we([s,o],0)]}class bi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new In(`Invalid padding: ${e}`);if(r<0)throw new In(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new In(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new In(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=we.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(we.fromNumber(r)));return s.compare(ap)===1&&(s=new we([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Pa(t),[r,s]=Ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new bi(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Pa(t),[r,s]=Ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class In extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,jn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Xr(K.min(),s,new at(et),Jt(),Y())}}class jn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new jn(r,e,Y(),Y(),Y())}}/**
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
 */class yr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Yc{constructor(t,e){this.targetId=t,this.me=e}}class Jc{constructor(t,e,r=bt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Va{constructor(){this.fe=0,this.ge=ka(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=Y(),e=Y(),r=Y();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:j()}}),new jn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=ka()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,rt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class cp{constructor(t){this.Le=t,this.Be=new Map,this.ke=Jt(),this.qe=Da(),this.Qe=new at(et)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:j()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(ei(o))if(r===0){const a=new L(o.path);this.Ue(e,a,At.newNoDocument(a,K.min()))}else rt(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=Re(r).toUint8Array()}catch(u){if(u instanceof Sc)return ze("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new bi(a,s,o)}catch(u){return ze(u instanceof In?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&ei(l.target)){const u=new L(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,At.newNoDocument(u,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=Y();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Xr(t,e,this.Qe,this.ke,r);return this.ke=Jt(),this.qe=Da(),this.Qe=new at(et),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Va,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new _t(et),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Va),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Da(){return new at(L.comparator)}function ka(){return new at(L.comparator)}const lp={asc:"ASCENDING",desc:"DESCENDING"},up={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hp={and:"AND",or:"OR"};class dp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ri(n,t){return n.useProto3Json||zr(t)?t:{value:t}}function xr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function fp(n,t){return xr(n,t.toTimestamp())}function jt(n){return rt(!!n),K.fromTimestamp(function(e){const r=he(e);return new dt(r.seconds,r.nanos)}(n))}function Si(n,t){return si(n,t).canonicalString()}function si(n,t){const e=function(s){return new ot(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function tl(n){const t=ot.fromString(n);return rt(il(t)),t}function ii(n,t){return Si(n.databaseId,t.path)}function Ns(n,t){const e=tl(t);if(e.get(1)!==n.databaseId.projectId)throw new O(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new L(nl(e))}function el(n,t){return Si(n.databaseId,t)}function pp(n){const t=tl(n);return t.length===4?ot.emptyPath():nl(t)}function oi(n){return new ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nl(n){return rt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Na(n,t,e){return{name:ii(n,t),fields:e.value.mapValue.fields}}function mp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(rt(p===void 0||typeof p=="string"),bt.fromBase64String(p||"")):(rt(p===void 0||p instanceof Buffer||p instanceof Uint8Array),bt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const p=d.code===void 0?V.UNKNOWN:Xc(d.code);return new O(p,d.message||"")}(a);e=new Jc(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ns(n,r.document.name),o=jt(r.document.updateTime),a=r.document.createTime?jt(r.document.createTime):K.min(),l=new Dt({mapValue:{fields:r.document.fields}}),u=At.newFoundDocument(s,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];e=new yr(d,p,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ns(n,r.document),o=r.readTime?jt(r.readTime):K.min(),a=At.newNoDocument(s,o),l=r.removedTargetIds||[];e=new yr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ns(n,r.document),o=r.removedTargetIds||[];e=new yr([],o,s,null)}else{if(!("filter"in t))return j();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new sp(s,o),l=r.targetId;e=new Yc(l,a)}}return e}function gp(n,t){let e;if(t instanceof Bn)e={update:Na(n,t.key,t.value)};else if(t instanceof Qc)e={delete:ii(n,t.key)};else if(t instanceof Se)e={update:Na(n,t.key,t.data),updateMask:Rp(t.fieldMask)};else{if(!(t instanceof ep))return j();e={verify:ii(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof kr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof On)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ln)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Nr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw j()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:fp(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:j()}(n,t.precondition)),e}function _p(n,t){return n&&n.length>0?(rt(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?jt(s.updateTime):jt(o);return a.isEqual(K.min())&&(a=jt(o)),new Jf(a,s.transformResults||[])}(e,t))):[]}function yp(n,t){return{documents:[el(n,t.path)]}}function Ep(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=el(n,s);const o=function(d){if(d.length!==0)return sl(Ht.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(I){return{field:Le(I.field),direction:wp(I.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=ri(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function vp(n){let t=pp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){rt(r===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(T){const I=rl(T);return I instanceof Ht&&Dc(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(I=>function(S){return new Dr(Fe(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(I))}(e.orderBy));let l=null;e.limit&&(l=function(T){let I;return I=typeof T=="object"?T.value:T,zr(I)?null:I}(e.limit));let u=null;e.startAt&&(u=function(T){const I=!!T.before,R=T.values||[];return new Vr(R,I)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const I=!T.before,R=T.values||[];return new Vr(R,I)}(e.endAt)),Ff(t,s,a,o,l,"F",u,d)}function Tp(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function rl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Fe(e.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fe(e.unaryFilter.field);return ht.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Fe(e.unaryFilter.field);return ht.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fe(e.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(n):n.fieldFilter!==void 0?function(e){return ht.create(Fe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(r=>rl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(n):j()}function wp(n){return lp[n]}function Ip(n){return up[n]}function Ap(n){return hp[n]}function Le(n){return{fieldPath:n.canonicalString()}}function Fe(n){return gt.fromServerFormat(n.fieldPath)}function sl(n){return n instanceof ht?function(e){if(e.op==="=="){if(Ea(e.value))return{unaryFilter:{field:Le(e.field),op:"IS_NAN"}};if(ya(e.value))return{unaryFilter:{field:Le(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ea(e.value))return{unaryFilter:{field:Le(e.field),op:"IS_NOT_NAN"}};if(ya(e.value))return{unaryFilter:{field:Le(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Le(e.field),op:Ip(e.op),value:e.value}}}(n):n instanceof Ht?function(e){const r=e.getFilters().map(s=>sl(s));return r.length===1?r[0]:{compositeFilter:{op:Ap(e.op),filters:r}}}(n):j()}function Rp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function il(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class se{constructor(t,e,r,s,o=K.min(),a=K.min(),l=bt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new se(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class bp{constructor(t){this.ct=t}}function Sp(n){const t=vp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ni(t,t.limit,"L"):t}/**
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
 */class Pp{constructor(){this._n=new Cp}addToCollectionParentIndex(t,e){return this._n.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(ue.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(ue.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Cp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new _t(ot.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new _t(ot.comparator)).toArray()}}/**
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
 */class Vp{constructor(){this.changes=new tn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Dp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class kp{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Sn(r.mutation,s,Mt.empty(),dt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Y()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Y()){const s=ve();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=wn();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ve();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Y()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=Jt();const a=bn(),l=function(){return bn()}();return e.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Se)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Sn(p.mutation,d,p.mutation.getFieldMask(),dt.now())):a.set(d.key,Mt.empty())}),this.recalculateAndSaveOverlays(t,o).next(u=>(u.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var T;return l.set(d,new Dp(p,(T=a.get(d))!==null&&T!==void 0?T:null))}),l))}recalculateAndSaveOverlays(t,e){const r=bn();let s=new at((a,l)=>a-l),o=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let p=r.get(u)||Mt.empty();p=l.applyToLocalView(d,p),r.set(u,p);const T=(s.get(l.batchId)||Y()).add(u);s=s.insert(l.batchId,T)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,T=$c();p.forEach(I=>{if(!o.has(I)){const R=Gc(e.get(I),r.get(I));R!==null&&T.set(I,R),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Uf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(ve());let l=-1,u=o;return a.next(d=>C.forEach(d,(p,T)=>(l<T.largestBatchId&&(l=T.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(t,p).next(I=>{u=u.insert(p,I)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,u,d,Y())).next(p=>({batchId:l,changes:Uc(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(r=>{let s=wn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=wn();return this.indexManager.getCollectionParents(t,o).next(l=>C.forEach(l,u=>{const d=function(T,I){return new Hr(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,u.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(p=>{p.forEach((T,I)=>{a=a.insert(T,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,At.newInvalidDocument(p)))});let l=wn();return a.forEach((u,d)=>{const p=o.get(u);p!==void 0&&Sn(p.mutation,d,Mt.empty(),dt.now()),Gr(e,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class Np{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return C.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:jt(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Sp(s.bundledQuery),readTime:jt(s.readTime)}}(e)),C.resolve()}}/**
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
 */class xp{constructor(){this.overlays=new at(L.comparator),this.hr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ve();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=ve(),o=e.length+1,a=new L(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new at((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=ve(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=ve(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return C.resolve(l)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rp(e,r));let o=this.hr.get(e);o===void 0&&(o=Y(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
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
 */class Pi{constructor(){this.Pr=new _t(ft.Ir),this.Tr=new _t(ft.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new ft(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new ft(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new L(new ot([])),r=new ft(e,t),s=new ft(e,t+1),o=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new L(new ot([])),r=new ft(e,t),s=new ft(e,t+1);let o=Y();return this.Tr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ft(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ft{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return L.comparator(t.key,e.key)||et(t.pr,e.pr)}static Er(t,e){return et(t.pr,e.pr)||L.comparator(t.key,e.key)}}/**
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
 */class Mp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new _t(ft.Ir)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new np(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new ft(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ft(e,0),s=new ft(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],a=>{const l=this.Sr(a.pr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new _t(et);return e.forEach(s=>{const o=new ft(s,0),a=new ft(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],l=>{r=r.add(l.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new ft(new L(o),0);let l=new _t(et);return this.wr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.pr)),!0)},a),C.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){rt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(e.mutations,s=>{const o=new ft(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new ft(e,0),s=this.wr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Op{constructor(t){this.vr=t,this.docs=function(){return new at(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Jt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():At.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Jt();const a=e.path,l=new L(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||vf(Ef(p),r)<=0||(s.has(p.key)||Gr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){j()}Fr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Lp(this)}getSize(t){return C.resolve(this.size)}}class Lp extends Vp{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class Fp{constructor(t){this.persistence=t,this.Mr=new tn(e=>Ii(e),Ai),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Pi,this.targetCount=0,this.Lr=We.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),C.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new We(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.qn(e),C.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Nr.containsKey(e))}}/**
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
 */class Up{constructor(t,e){this.Br={},this.overlays={},this.kr=new Ei(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Fp(this),this.indexManager=new Pp,this.remoteDocumentCache=function(s){return new Op(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new bp(e),this.$r=new Np(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new xp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Mp(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const s=new $p(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class $p extends wf{constructor(t){super(),this.currentSequenceNumber=t}}class Ci{constructor(t){this.persistence=t,this.zr=new Pi,this.jr=null}static Hr(t){return new Ci(t)}get Jr(){if(this.jr)return this.jr;throw j()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),C.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{const s=L.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return C.or([()=>C.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Vi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=Y(),s=Y();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Vi(t,e.fromCache,r,s)}}/**
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
 */class Bp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class jp{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Hh()?8:If(qh())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Bp;return this.Ji(t,e,a).next(l=>{if(o.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(vn()<=Z.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Oe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):(vn()<=Z.DEBUG&&x("QueryEngine","Query:",Oe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(vn()<=Z.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Oe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bt(e))):C.resolve())}ji(t,e){if(Ia(e))return C.resolve(null);let r=Bt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ni(e,null,"F"),r=Bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Y(...o);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.Zi(e,l);return this.Xi(e,d,a,u.readTime)?this.ji(t,ni(e,null,"F")):this.es(t,d,e,u)}))})))}Hi(t,e,r,s){return Ia(e)||s.isEqual(K.min())?C.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,s)?C.resolve(null):(vn()<=Z.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Oe(e)),this.es(t,a,e,yf(s,-1)).next(l=>l))})}Zi(t,e){let r=new _t(Lc(t));return e.forEach((s,o)=>{Gr(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return vn()<=Z.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Oe(e)),this.zi.getDocumentsMatchingQuery(t,e,ue.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class qp{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new at(et),this.rs=new tn(o=>Ii(o),Ai),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kp(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function zp(n,t,e,r){return new qp(n,t,e,r)}async function ol(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let u=Y();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return e.localDocuments.getDocuments(r,u).next(d=>({us:d,removedBatchIds:a,addedBatchIds:l}))})})}function Hp(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const T=d.batch,I=T.keys();let R=C.resolve();return I.forEach(S=>{R=R.next(()=>p.getEntry(u,S)).next(D=>{const P=d.docVersions.get(S);rt(P!==null),D.version.compareTo(P)<0&&(T.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Y();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function al(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Kp(n,t){const e=G(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const l=[];t.targetChanges.forEach((p,T)=>{const I=s.get(T);if(!I)return;l.push(e.Qr.removeMatchingKeys(o,p.removedDocuments,T).next(()=>e.Qr.addMatchingKeys(o,p.addedDocuments,T)));let R=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?R=R.withResumeToken(bt.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),s=s.insert(T,R),function(D,P,F){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(I,R,p)&&l.push(e.Qr.updateTargetData(o,R))});let u=Jt(),d=Y();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(Gp(o,a,t.documentUpdates).next(p=>{u=p.cs,d=p.ls})),!r.isEqual(K.min())){const p=e.Qr.getLastRemoteSnapshotVersion(o).next(T=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return C.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(e.ns=s,o))}function Gp(n,t,e){let r=Y(),s=Y();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Jt();return e.forEach((l,u)=>{const d=o.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):x("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{cs:a,ls:s}})}function Wp(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Qp(n,t){const e=G(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Qr.allocateTargetId(r).next(a=>(s=new se(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function ai(n,t,e){const r=G(n),s=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!$n(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function xa(n,t,e){const r=G(n);let s=K.min(),o=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const T=G(u),I=T.rs.get(p);return I!==void 0?C.resolve(T.ns.get(I)):T.Qr.getTargetData(d,p)}(r,a,Bt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?s:K.min(),e?o:Y())).next(l=>(Xp(r,Bf(t),l),{documents:l,hs:o})))}function Xp(n,t,e){let r=n.ss.get(t)||K.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class Ma{constructor(){this.activeTargetIds=Gf()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yp{constructor(){this.no=new Ma,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ma,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Jp{io(t){}shutdown(){}}/**
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
 */class Oa{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dr=null;function xs(){return dr===null?dr=function(){return 268435456+Math.round(2147483648*Math.random())}():dr++,"0x"+dr.toString(16)}/**
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
 */const Zp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tm{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const wt="WebChannelConnection";class em extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,a){const l=xs(),u=this.vo(e,r.toUriEncodedString());x("RestConnection",`Sending RPC '${e}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(e,u,d,s).then(p=>(x("RestConnection",`Received RPC '${e}' ${l}: `,p),p),p=>{throw ze("RestConnection",`RPC '${e}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}xo(e,r,s,o,a,l){return this.Co(e,r,s,o,a)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Je}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const s=Zp[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=xs();return new Promise((a,l)=>{const u=new yc;u.setWithCredentials(!0),u.listenOnce(vc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case mr.NO_ERROR:const p=u.getResponseJson();x(wt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case mr.TIMEOUT:x(wt,`RPC '${t}' ${o} timed out`),l(new O(V.DEADLINE_EXCEEDED,"Request time out"));break;case mr.HTTP_ERROR:const T=u.getStatus();if(x(wt,`RPC '${t}' ${o} failed with status:`,T,"response text:",u.getResponseText()),T>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const S=function(P){const F=P.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(F)>=0?F:V.UNKNOWN}(R.status);l(new O(S,R.message))}else l(new O(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new O(V.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{x(wt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);x(wt,`RPC '${t}' ${o} sending request:`,s),u.send(e,"POST",d,r,15)})}Oo(t,e,r){const s=xs(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ic(),l=wc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new Ec({})),this.Fo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const p=o.join("");x(wt,`Creating RPC '${t}' stream ${s}: ${p}`,u);const T=a.createWebChannel(p,u);let I=!1,R=!1;const S=new tm({lo:P=>{R?x(wt,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(I||(x(wt,`Opening RPC '${t}' stream ${s} transport.`),T.open(),I=!0),x(wt,`RPC '${t}' stream ${s} sending:`,P),T.send(P))},ho:()=>T.close()}),D=(P,F,H)=>{P.listen(F,W=>{try{H(W)}catch(M){setTimeout(()=>{throw M},0)}})};return D(T,Tn.EventType.OPEN,()=>{R||(x(wt,`RPC '${t}' stream ${s} transport opened.`),S.mo())}),D(T,Tn.EventType.CLOSE,()=>{R||(R=!0,x(wt,`RPC '${t}' stream ${s} transport closed`),S.po())}),D(T,Tn.EventType.ERROR,P=>{R||(R=!0,ze(wt,`RPC '${t}' stream ${s} transport errored:`,P),S.po(new O(V.UNAVAILABLE,"The operation could not be completed")))}),D(T,Tn.EventType.MESSAGE,P=>{var F;if(!R){const H=P.data[0];rt(!!H);const W=H,M=W.error||((F=W[0])===null||F===void 0?void 0:F.error);if(M){x(wt,`RPC '${t}' stream ${s} received error:`,M);const $=M.status;let N=function(g){const y=lt[g];if(y!==void 0)return Xc(y)}($),E=M.message;N===void 0&&(N=V.INTERNAL,E="Unknown error status: "+$+" with message "+M.message),R=!0,S.po(new O(N,E)),T.close()}else x(wt,`RPC '${t}' stream ${s} received:`,H),S.yo(H)}}),D(l,Tc.STAT_EVENT,P=>{P.stat===Ys.PROXY?x(wt,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===Ys.NOPROXY&&x(wt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function Ms(){return typeof document<"u"?document:null}/**
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
 */function Yr(n){return new dp(n,!0)}/**
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
 */class cl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class ll{constructor(t,e,r,s,o,a,l,u){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new cl(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Yt(e.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new O(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return x("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nm extends ll{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=mp(this.serializer,t),r=function(o){if(!("targetChange"in o))return K.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?jt(a.readTime):K.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=oi(this.serializer),e.addTarget=function(o,a){let l;const u=a.target;if(l=ei(u)?{documents:yp(o,u)}:{query:Ep(o,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Zc(o,a.resumeToken);const d=ri(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=xr(o,a.snapshotVersion.toTimestamp());const d=ri(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=Tp(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=oi(this.serializer),e.removeTarget=t,this.i_(e)}}class rm extends ll{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(rt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=_p(t.writeResults,t.commitTime),r=jt(t.commitTime);return this.listener.A_(r,e)}return rt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=oi(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>gp(this.serializer,r))};this.i_(e)}}/**
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
 */class sm extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new O(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,si(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(V.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,si(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(V.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class im{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Yt(e),this.y_=!1):x("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class om{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{Pe(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=G(u);d.M_.add(4),await qn(d),d.N_.set("Unknown"),d.M_.delete(4),await Jr(d)}(this))})}),this.N_=new im(r,s)}}async function Jr(n){if(Pe(n))for(const t of n.x_)await t(!0)}async function qn(n){for(const t of n.x_)await t(!1)}function ul(n,t){const e=G(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),xi(e)?Ni(e):en(e).Xo()&&ki(e,t))}function Di(n,t){const e=G(n),r=en(e);e.F_.delete(t),r.Xo()&&hl(e,t),e.F_.size===0&&(r.Xo()?r.n_():Pe(e)&&e.N_.set("Unknown"))}function ki(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(K.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}en(n).P_(t)}function hl(n,t){n.L_.xe(t),en(n).I_(t)}function Ni(n){n.L_=new cp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),en(n).start(),n.N_.w_()}function xi(n){return Pe(n)&&!en(n).Zo()&&n.F_.size>0}function Pe(n){return G(n).M_.size===0}function dl(n){n.L_=void 0}async function am(n){n.N_.set("Online")}async function cm(n){n.F_.forEach((t,e)=>{ki(n,t)})}async function lm(n,t){dl(n),xi(n)?(n.N_.D_(t),Ni(n)):n.N_.set("Unknown")}async function um(n,t,e){if(n.N_.set("Online"),t instanceof Jc&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,t)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Mr(n,r)}else if(t instanceof yr?n.L_.Ke(t):t instanceof Yc?n.L_.He(t):n.L_.We(t),!e.isEqual(K.min()))try{const r=await al(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.L_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=o.F_.get(d);p&&o.F_.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=o.F_.get(u);if(!p)return;o.F_.set(u,p.withResumeToken(bt.EMPTY_BYTE_STRING,p.snapshotVersion)),hl(o,u);const T=new se(p.target,u,d,p.sequenceNumber);ki(o,T)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Mr(n,r)}}async function Mr(n,t,e){if(!$n(t))throw t;n.M_.add(1),await qn(n),n.N_.set("Offline"),e||(e=()=>al(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Jr(n)})}function fl(n,t){return t().catch(e=>Mr(n,e,t))}async function Zr(n){const t=G(n),e=de(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;hm(t);)try{const s=await Wp(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,dm(t,s)}catch(s){await Mr(t,s)}pl(t)&&ml(t)}function hm(n){return Pe(n)&&n.v_.length<10}function dm(n,t){n.v_.push(t);const e=de(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function pl(n){return Pe(n)&&!de(n).Zo()&&n.v_.length>0}function ml(n){de(n).start()}async function fm(n){de(n).V_()}async function pm(n){const t=de(n);for(const e of n.v_)t.d_(e.mutations)}async function mm(n,t,e){const r=n.v_.shift(),s=Ri.from(r,t,e);await fl(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Zr(n)}async function gm(n,t){t&&de(n).E_&&await async function(r,s){if(function(a){return ip(a)&&a!==V.ABORTED}(s.code)){const o=r.v_.shift();de(r).t_(),await fl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Zr(r)}}(n,t),pl(n)&&ml(n)}async function La(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Pe(e);e.M_.add(3),await qn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Jr(e)}async function _m(n,t){const e=G(n);t?(e.M_.delete(2),await Jr(e)):t||(e.M_.add(2),await qn(e),e.N_.set("Unknown"))}function en(n){return n.B_||(n.B_=function(e,r,s){const o=G(e);return o.f_(),new nm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:am.bind(null,n),To:cm.bind(null,n),Ao:lm.bind(null,n),h_:um.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),xi(n)?Ni(n):n.N_.set("Unknown")):(await n.B_.stop(),dl(n))})),n.B_}function de(n){return n.k_||(n.k_=function(e,r,s){const o=G(e);return o.f_(),new rm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:fm.bind(null,n),Ao:gm.bind(null,n),R_:pm.bind(null,n),A_:mm.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Zr(n)):(await n.k_.stop(),n.v_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class Mi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Mi(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oi(n,t){if(Yt("AsyncQueue",`${t}: ${n}`),$n(n))return new O(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class qe{constructor(t){this.comparator=t?(e,r)=>t(e,r)||L.comparator(e.key,r.key):(e,r)=>L.comparator(e.key,r.key),this.keyedMap=wn(),this.sortedSet=new at(this.comparator)}static emptySet(t){return new qe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof qe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Fa{constructor(){this.q_=new at(L.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):j():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Qe{constructor(t,e,r,s,o,a,l,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Qe(t,e,qe.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Kr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ym{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Em{constructor(){this.queries=new tn(t=>Oc(t),Kr),this.onlineState="Unknown",this.z_=new Set}}async function vm(n,t){const e=G(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new ym,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Oi(a,`Initialization of query '${Oe(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Li(e)}async function Tm(n,t){const e=G(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function wm(n,t){const e=G(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.U_)l.H_(s)&&(r=!0);a.K_=s}}r&&Li(e)}function Im(n,t,e){const r=G(n),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(e);r.queries.delete(t)}function Li(n){n.z_.forEach(t=>{t.next()})}var ci,Ua;(Ua=ci||(ci={})).J_="default",Ua.Cache="cache";class Am{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Qe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==ci.Cache}}/**
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
 */class gl{constructor(t){this.key=t}}class _l{constructor(t){this.key=t}}class Rm{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Y(),this.mutatedKeys=Y(),this.Ia=Lc(t),this.Ta=new qe(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new Fa,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,T)=>{const I=s.get(p),R=Gr(this.query,T)?T:null,S=!!I&&this.mutatedKeys.has(I.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;I&&R?I.data.isEqual(R.data)?S!==D&&(r.track({type:3,doc:R}),P=!0):this.Ra(I,R)||(r.track({type:2,doc:R}),P=!0,(u&&this.Ia(R,u)>0||d&&this.Ia(R,d)<0)&&(l=!0)):!I&&R?(r.track({type:0,doc:R}),P=!0):I&&!R&&(r.track({type:1,doc:I}),P=!0,(u||d)&&(l=!0)),P&&(R?(a=a.add(R),o=D?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((p,T)=>function(R,S){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return D(R)-D(S)}(p.type,T.type)||this.Ia(p.doc,T.doc)),this.Va(r),s=s!=null&&s;const l=e&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,d=u!==this.ha;return this.ha=u,a.length!==0||d?{snapshot:new Qe(this.query,t.Ta,o,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Fa,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=Y(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new _l(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new gl(r))}),e}pa(t){this.la=t.hs,this.Pa=Y();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Qe.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class bm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Sm{constructor(t){this.key=t,this.wa=!1}}class Pm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new tn(l=>Oc(l),Kr),this.Da=new Map,this.Ca=new Set,this.va=new at(L.comparator),this.Fa=new Map,this.Ma=new Pi,this.xa={},this.Oa=new Map,this.Na=We.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Cm(n,t,e=!0){const r=Il(n);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await yl(r,t,e,!0),s}async function Vm(n,t){const e=Il(n);await yl(e,t,!0,!1)}async function yl(n,t,e,r){const s=await Qp(n.localStore,Bt(t)),o=s.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await Dm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&ul(n.remoteStore,s),l}async function Dm(n,t,e,r,s){n.Ba=(T,I,R)=>async function(D,P,F,H){let W=P.view.da(F);W.Xi&&(W=await xa(D.localStore,P.query,!1).then(({documents:E})=>P.view.da(E,W)));const M=H&&H.targetChanges.get(P.targetId),$=H&&H.targetMismatches.get(P.targetId)!=null,N=P.view.applyChanges(W,D.isPrimaryClient,M,$);return Ba(D,P.targetId,N.fa),N.snapshot}(n,T,I,R);const o=await xa(n.localStore,t,!0),a=new Rm(t,o.hs),l=a.da(o.documents),u=jn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);Ba(n,e,d.fa);const p=new bm(t,e,a);return n.ba.set(t,p),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),d.snapshot}async function km(n,t,e){const r=G(n),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(a=>!Kr(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ai(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Di(r.remoteStore,s.targetId),li(r,s.targetId)}).catch(Un)):(li(r,s.targetId),await ai(r.localStore,s.targetId,!0))}async function Nm(n,t){const e=G(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Di(e.remoteStore,r.targetId))}async function xm(n,t,e){const r=Bm(n);try{const s=await function(a,l){const u=G(a),d=dt.now(),p=l.reduce((R,S)=>R.add(S.key),Y());let T,I;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let S=Jt(),D=Y();return u.os.getEntries(R,p).next(P=>{S=P,S.forEach((F,H)=>{H.isValidDocument()||(D=D.add(F))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,S)).next(P=>{T=P;const F=[];for(const H of l){const W=tp(H,T.get(H.key).overlayedDocument);W!=null&&F.push(new Se(H.key,W,Pc(W.value.mapValue),Xt.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,F,l)}).next(P=>{I=P;const F=P.applyToLocalDocumentSet(T,D);return u.documentOverlayCache.saveOverlays(R,P.batchId,F)})}).then(()=>({batchId:I.batchId,changes:Uc(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.xa[a.currentUser.toKey()];d||(d=new at(et)),d=d.insert(l,u),a.xa[a.currentUser.toKey()]=d}(r,s.batchId,e),await zn(r,s.changes),await Zr(r.remoteStore)}catch(s){const o=Oi(s,"Failed to persist write");e.reject(o)}}async function El(n,t){const e=G(n);try{const r=await Kp(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Fa.get(o);a&&(rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?rt(a.wa):s.removedDocuments.size>0&&(rt(a.wa),a.wa=!1))}),await zn(e,r,t)}catch(r){await Un(r)}}function $a(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,a)=>{const l=a.view.j_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=G(a);u.onlineState=l;let d=!1;u.queries.forEach((p,T)=>{for(const I of T.U_)I.j_(l)&&(d=!0)}),d&&Li(u)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Mm(n,t,e){const r=G(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),o=s&&s.key;if(o){let a=new at(L.comparator);a=a.insert(o,At.newNoDocument(o,K.min()));const l=Y().add(o),u=new Xr(K.min(),new Map,new at(et),a,l);await El(r,u),r.va=r.va.remove(o),r.Fa.delete(t),Fi(r)}else await ai(r.localStore,t,!1).then(()=>li(r,t,e)).catch(Un)}async function Om(n,t){const e=G(n),r=t.batch.batchId;try{const s=await Hp(e.localStore,t);Tl(e,r,null),vl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await zn(e,s)}catch(s){await Un(s)}}async function Lm(n,t,e){const r=G(n);try{const s=await function(a,l){const u=G(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(T=>(rt(T!==null),p=T.keys(),u.mutationQueue.removeMutationBatch(d,T))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,t);Tl(r,t,e),vl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await zn(r,s)}catch(s){await Un(s)}}function vl(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Tl(n,t,e){const r=G(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function li(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||wl(n,r)})}function wl(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Di(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Fi(n))}function Ba(n,t,e){for(const r of e)r instanceof gl?(n.Ma.addReference(r.key,t),Fm(n,r)):r instanceof _l?(x("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||wl(n,r.key)):j()}function Fm(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(x("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Fi(n))}function Fi(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new L(ot.fromString(t)),r=n.Na.next();n.Fa.set(r,new Sm(e)),n.va=n.va.insert(e,r),ul(n.remoteStore,new se(Bt(Mc(e.path)),r,"TargetPurposeLimboResolution",Ei.oe))}}async function zn(n,t,e){const r=G(n),s=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{a.push(r.Ba(u,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,T?"current":"not-current")}if(d){s.push(d);const T=Vi.Ki(u.targetId,d);o.push(T)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(u,d){const p=G(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>C.forEach(d,I=>C.forEach(I.qi,R=>p.persistence.referenceDelegate.addReference(T,I.targetId,R)).next(()=>C.forEach(I.Qi,R=>p.persistence.referenceDelegate.removeReference(T,I.targetId,R)))))}catch(T){if(!$n(T))throw T;x("LocalStore","Failed to update sequence numbers: "+T)}for(const T of d){const I=T.targetId;if(!T.fromCache){const R=p.ns.get(I),S=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(S);p.ns=p.ns.insert(I,D)}}}(r.localStore,o))}async function Um(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){x("SyncEngine","User change. New user:",t.toKey());const r=await ol(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(l=>{l.forEach(u=>{u.reject(new O(V.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zn(e,r.us)}}function $m(n,t){const e=G(n),r=e.Fa.get(t);if(r&&r.wa)return Y().add(r.key);{let s=Y();const o=e.Da.get(t);if(!o)return s;for(const a of o){const l=e.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function Il(n){const t=G(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=El.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=$m.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Mm.bind(null,t),t.Sa.h_=wm.bind(null,t.eventManager),t.Sa.ka=Im.bind(null,t.eventManager),t}function Bm(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Om.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Lm.bind(null,t),t}class ja{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Yr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return zp(this.persistence,new jp,t.initialUser,this.serializer)}createPersistence(t){return new Up(Ci.Hr,this.serializer)}createSharedClientState(t){return new Yp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jm{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$a(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Um.bind(null,this.syncEngine),await _m(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Em}()}createDatastore(t){const e=Yr(t.databaseInfo.databaseId),r=function(o){return new em(o)}(t.databaseInfo);return function(o,a,l,u){return new sm(o,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new om(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>$a(this.syncEngine,e,0),function(){return Oa.D()?new Oa:new Jp}())}createSyncEngine(t,e){return function(s,o,a,l,u,d,p){const T=new Pm(s,o,a,l,u,d);return p&&(T.La=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=G(r);x("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await qn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class qm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Yt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class zm{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Rc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Oi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Os(n,t){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ol(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function qa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Km(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>La(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>La(t.remoteStore,s)),n._onlineComponents=t}function Hm(n){return n.name==="FirebaseError"?n.code===V.FAILED_PRECONDITION||n.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Km(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Os(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Hm(e))throw e;ze("Error using user provided cache. Falling back to memory cache: "+e),await Os(n,new ja)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Os(n,new ja);return n._offlineComponents}async function Al(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await qa(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await qa(n,new jm))),n._onlineComponents}function Gm(n){return Al(n).then(t=>t.syncEngine)}async function Wm(n){const t=await Al(n),e=t.eventManager;return e.onListen=Cm.bind(null,t.syncEngine),e.onUnlisten=km.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Vm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Nm.bind(null,t.syncEngine),e}function Qm(n,t,e={}){const r=new ae;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,d){const p=new qm({next:I=>{a.enqueueAndForget(()=>Tm(o,T)),I.fromCache&&u.source==="server"?d.reject(new O(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),T=new Am(l,p,{includeMetadataChanges:!0,ra:!0});return vm(o,T)}(await Wm(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Rl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const za=new Map;/**
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
 */function bl(n,t,e){if(!e)throw new O(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Xm(n,t,e,r){if(t===!0&&r===!0)throw new O(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ha(n){if(!L.isDocumentKey(n))throw new O(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ka(n){if(L.isDocumentKey(n))throw new O(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ui(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":j()}function Or(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ui(n);throw new O(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Ga{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Xm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ts{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ga({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ga(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lf;switch(r.type){case"firstParty":return new ff(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=za.get(e);r&&(x("ComponentProvider","Removing Datastore"),za.delete(e),r.terminate())}(this),Promise.resolve()}}function Ym(n,t,e,r={}){var s;const o=(n=Or(n,ts))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ze("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=It.MOCK_USER;else{l=jh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(d)}n._authCredentials=new uf(new Ac(l,u))}}/**
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
 */class es{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new es(this.firestore,t,this._query)}}class Ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ce(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ot(this.firestore,t,this._key)}}class ce extends es{constructor(t,e,r){super(t,e,Mc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ot(this.firestore,null,new L(t))}withConverter(t){return new ce(this.firestore,t,this._path)}}function Lr(n,t,...e){if(n=Cn(n),bl("collection","path",t),n instanceof ts){const r=ot.fromString(t,...e);return Ka(r),new ce(n,null,r)}{if(!(n instanceof Ot||n instanceof ce))throw new O(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(t,...e));return Ka(r),new ce(n.firestore,null,r)}}function Jm(n,t,...e){if(n=Cn(n),arguments.length===1&&(t=Rc.newId()),bl("doc","path",t),n instanceof ts){const r=ot.fromString(t,...e);return Ha(r),new Ot(n,null,new L(r))}{if(!(n instanceof Ot||n instanceof ce))throw new O(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(t,...e));return Ha(r),new Ot(n.firestore,n instanceof ce?n.converter:null,new L(r))}}/**
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
 */class Zm{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new cl(this,"async_queue_retry"),this.hu=()=>{const e=Ms();e&&x("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Ms();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Ms();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new ae;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!$n(t))throw t;x("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Yt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Mi.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&j()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class $i extends ts{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Zm}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cl(this),this._firestoreClient.terminate()}}function Sl(n,t){const e=typeof n=="object"?n:Xd(),r=typeof n=="string"?n:"(default)",s=Kd(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=$h("firestore");o&&Ym(s,...o)}return s}function Pl(n){return n._firestoreClient||Cl(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Cl(n){var t,e,r;const s=n._freezeSettings(),o=function(l,u,d,p){return new bf(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Rl(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new zm(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xe(bt.fromBase64String(t))}catch(e){throw new O(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Xe(bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Bi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Vl{constructor(t){this._methodName=t}}/**
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
 */class ji{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return et(this._lat,t._lat)||et(this._long,t._long)}}/**
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
 */const tg=/^__.*__$/;class eg{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Se(t,this.data,this.fieldMask,e,this.fieldTransforms):new Bn(t,this.data,e,this.fieldTransforms)}}function Dl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class qi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new qi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Fr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Dl(this.fu)&&tg.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class ng{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Yr(t)}Fu(t,e,r,s=!1){return new qi({fu:t,methodName:e,vu:r,path:gt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rg(n){const t=n._freezeSettings(),e=Yr(n._databaseId);return new ng(n._databaseId,!!t.ignoreUndefinedProperties,e)}function sg(n,t,e,r,s,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);Ml("Data must be an object, but it was:",a,r);const l=Nl(r,a);let u,d;if(o.merge)u=new Mt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const T of o.mergeFields){const I=ig(t,T,e);if(!a.contains(I))throw new O(V.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);ag(p,I)||p.push(I)}u=new Mt(p),d=a.fieldTransforms.filter(T=>u.covers(T.field))}else u=null,d=a.fieldTransforms;return new eg(new Dt(l),u,d)}function kl(n,t){if(xl(n=Cn(n)))return Ml("Unsupported field value:",t,n),Nl(n,t);if(n instanceof Vl)return function(r,s){if(!Dl(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let u=kl(l,s.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Cn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=dt.fromDate(r);return{timestampValue:xr(s.serializer,o)}}if(r instanceof dt){const o=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xr(s.serializer,o)}}if(r instanceof ji)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xe)return{bytesValue:Zc(s.serializer,r._byteString)};if(r instanceof Ot){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Si(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Ui(r)}`)}(n,t)}function Nl(n,t){const e={};return bc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ze(n,(r,s)=>{const o=kl(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function xl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof ji||n instanceof Xe||n instanceof Ot||n instanceof Vl)}function Ml(n,t,e){if(!xl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Ui(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function ig(n,t,e){if((t=Cn(t))instanceof Bi)return t._internalPath;if(typeof t=="string")return Ol(n,t);throw Fr("Field path arguments must be of type string or ",n,!1,void 0,e)}const og=new RegExp("[~\\*/\\[\\]]");function Ol(n,t,e){if(t.search(og)>=0)throw Fr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Bi(...t.split("."))._internalPath}catch{throw Fr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Fr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new O(V.INVALID_ARGUMENT,l+n+u)}function ag(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Ll{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Fl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class cg extends Ll{data(){return super.data()}}function Fl(n,t){return typeof t=="string"?Ol(n,t):t instanceof Bi?t._internalPath:t._delegate._internalPath}/**
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
 */function lg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ug{convertValue(t,e="none"){switch(be(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw j()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ze(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new ji(ut(t.latitude),ut(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ti(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Nn(t));default:return null}}convertTimestamp(t){const e=he(t);return new dt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ot.fromString(t);rt(il(r));const s=new xn(r.get(1),r.get(3)),o=new L(r.popFirst(5));return s.isEqual(e)||Yt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function hg(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class fr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class dg extends Ll{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Er(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Fl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Er extends dg{data(t={}){return super.data(t)}}class fg{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new fr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Er(this._firestore,this._userDataWriter,r.key,r,new fr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Er(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new Er(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:pg(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function pg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}class mg extends ug{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ot(this.firestore,null,e)}}function gg(n){n=Or(n,es);const t=Or(n.firestore,$i),e=Pl(t),r=new mg(t);return lg(n._query),Qm(e,n._query).then(s=>new fg(t,r,n,s))}function ui(n,t){const e=Or(n.firestore,$i),r=Jm(n),s=hg(n.converter,t);return _g(e,[sg(rg(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function _g(n,t){return function(r,s){const o=new ae;return r.asyncQueue.enqueueAndForget(async()=>xm(await Gm(r),s,o)),o.promise}(Pl(n),t)}(function(t,e=!0){(function(s){Je=s})(Qd),Pr(new Vn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new $i(new hf(r.getProvider("auth-internal")),new mf(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),je(pa,"4.6.4",t),je(pa,"4.6.4","esm2017")})();function yg(n){let t,e,r,s;return r=new ac({}),{c(){t=U("p"),t.textContent=`${n[10].message}`,e=it(),qt(r.$$.fragment),Ru(t,"color","red")},m(o,a){X(o,t,a),X(o,e,a),Lt(r,o,a),s=!0},p:z,i(o){s||(Rt(r.$$.fragment,o),s=!0)},o(o){Ct(r.$$.fragment,o),s=!1},d(o){o&&(Q(t),Q(e)),Ft(r,o)}}}function Eg(n){let t,e,r,s,o;function a(d,p){return d[9].isTopTen&&d[0]!==""?wg:d[9].isTopTen&&d[0]===""?Tg:vg}let u=a(n)(n);return e=new Ph({props:{topten:n[9].topTen}}),s=new ac({}),{c(){u.c(),t=it(),qt(e.$$.fragment),r=it(),qt(s.$$.fragment)},m(d,p){u.m(d,p),X(d,t,p),Lt(e,d,p),X(d,r,p),Lt(s,d,p),o=!0},p(d,p){u.p(d,p)},i(d){o||(Rt(e.$$.fragment,d),Rt(s.$$.fragment,d),o=!0)},o(d){Ct(e.$$.fragment,d),Ct(s.$$.fragment,d),o=!1},d(d){d&&(Q(t),Q(r)),u.d(d),Ft(e,d),Ft(s,d)}}}function vg(n){let t,e,r;return{c(){t=U("h1"),t.textContent=`Schade${n[0]===""?"!":" "+n[0]+"!"}`,e=it(),r=U("p"),r.textContent=`Du hast ${n[1]} Punkte erreicht. Das reicht leider nicht für die aktuelle Top-Ten.`},m(s,o){X(s,t,o),X(s,e,o),X(s,r,o)},p:z,d(s){s&&(Q(t),Q(e),Q(r))}}}function Tg(n){let t,e,r,s,o;return{c(){t=U("h1"),t.textContent="Schade!",e=it(),r=U("p"),r.textContent=`Mit deinen ${n[1]} Punkten hättest du es in die Top-Ten geschafft.`,s=it(),o=U("p"),o.textContent="Leider hast du keinen Namen eingegeben und dein Ergebnis kann nicht gespeichert werden."},m(a,l){X(a,t,l),X(a,e,l),X(a,r,l),X(a,s,l),X(a,o,l)},p:z,d(a){a&&(Q(t),Q(e),Q(r),Q(s),Q(o))}}}function wg(n){let t,e,r;return{c(){t=U("h1"),t.textContent=`Super ${n[0]}!`,e=it(),r=U("p"),r.textContent=`Mit deinen ${n[1]} Punkten hast du es in die Top-Ten geschafft. Dein Ergebnis wird dauerhaft gespeichert.`},m(s,o){X(s,t,o),X(s,e,o),X(s,r,o)},p:z,d(s){s&&(Q(t),Q(e),Q(r))}}}function Ig(n){let t;return{c(){t=le("... warte auf das Resultat")},m(e,r){X(e,t,r)},p:z,i:z,o:z,d(e){e&&Q(t)}}}function Ag(n){let t,e,r,s={ctx:n,current:null,token:null,hasCatch:!0,pending:Ig,then:Eg,catch:yg,value:9,error:10,blocks:[,,,]};return ec(n[2](),s),{c(){t=U("div"),e=U("div"),s.block.c(),q(e,"class","svelte-1qncopx"),q(t,"id","flexbox-wrapper"),q(t,"class","svelte-1qncopx")},m(o,a){X(o,t,a),B(t,e),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null,r=!0},p(o,[a]){n=o,nc(s,n,a)},i(o){r||(Rt(s.block),r=!0)},o(o){for(let a=0;a<3;a+=1){const l=s.blocks[a];Ct(l)}r=!1},d(o){o&&Q(t),s.block.d(),s.token=null,s=null}}}function Rg(n){const e=_i({apiKey:"AIzaSyBpOgtLkUIXsLaHmqZHoqVV_0D3dCfVlVk",authDomain:"merry-holy-santa-chase.firebaseapp.com",projectId:"merry-holy-santa-chase",storageBucket:"merry-holy-santa-chase.appspot.com",messagingSenderId:"1050325198070",appId:"1:1050325198070:web:2efd1e961bf1c135af38d7"}),r=Sl(e),s=Ue(Bs),o=Ue(Be),a=Ue(js),l=Ue(qs),u={name:s,score:o,new:!0};return[s,o,async()=>{const T=(await gg(Lr(r,"userscores"))).docs.map(D=>{const P=D.data();return D.id===l&&(P.new=!0),P}),R=(a?[...T]:[...T,u]).sort((D,P)=>P.score-D.score).slice(0,10);if(R.length<10){const D=10-R.length;for(let P of Array(D).fill())R.push({name:"--",new:!1,score:"--"})}const S=R.some(D=>D.new===!0);if(u.name!==""&&!a){const D=await ui(Lr(r,"userscores"),{...u,new:!1});qs.set(D.id),console.log("Game result written to database with ID: ",D.id),js.set(!0)}else console.log("No Game result written to database");return{topTen:R,isTopTen:S}}]}class bg extends $t{constructor(t){super(),Ut(this,t,Rg,Ag,kt,{})}}function Sg(n){let t,e,r,s,o,a,l,u,d,p,T,I;return{c(){t=U("div"),e=U("div"),e.innerHTML='<p class="svelte-3ecrw7">IDEE UND UMSETZUNG:</p> <p class="svelte-3ecrw7">Jani, der kleine Weihnachtswichtel</p>',r=it(),s=U("div"),s.innerHTML='<p class="svelte-3ecrw7">MUSIK:</p><p class="svelte-3ecrw7"></p> <p class="svelte-3ecrw7"><a href="https://freemusicarchive.org/music/Nullsleep/The_8bits_of_Christmas/8bp038-02-nullsleep-silent_night/">Silent night</a> by Nullsleep. (Lizenz: <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/">CC BY-NC-ND 3.0</a>)</p>',o=it(),a=U("div"),a.innerHTML='<p class="svelte-3ecrw7">SCHRIFTART:</p> <p class="svelte-3ecrw7"><a href="https://www.1001fonts.com/kongtext-font.html">Kongtext</a> by codeman38. (Lizenz: <a href="https://st.1001fonts.net/license/kongtext/license.txt">custom</a>)</p>',l=it(),u=U("div"),u.innerHTML='<p class="svelte-3ecrw7">EMOJIS:</p> <p class="svelte-3ecrw7"><a href="https://openmoji.org/">OpenMoji</a> changed to Pixelart. (Lizenz: <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>)</p>',d=it(),p=U("button"),p.textContent="Zurück zum Start",q(e,"class","svelte-3ecrw7"),q(s,"class","svelte-3ecrw7"),q(a,"class","svelte-3ecrw7"),q(u,"class","svelte-3ecrw7"),q(p,"class","svelte-3ecrw7"),q(t,"id","flexbox-wrapper"),q(t,"class","svelte-3ecrw7")},m(R,S){X(R,t,S),B(t,e),B(t,r),B(t,s),B(t,o),B(t,a),B(t,l),B(t,u),B(t,d),B(t,p),T||(I=Te(p,"click",n[0]),T=!0)},p:z,i:z,o:z,d(R){R&&Q(t),T=!1,I()}}}function Pg(n){return[()=>Qt("/")]}class Cg extends $t{constructor(t){super(),Ut(this,t,Pg,Sg,kt,{})}}function Vg(n){let t,e,r;return e=new Uu({props:{routes:n[0]}}),{c(){t=U("main"),qt(e.$$.fragment),q(t,"class","svelte-13lsyqn")},m(s,o){X(s,t,o),Lt(e,t,null),r=!0},p:z,i(s){r||(Rt(e.$$.fragment,s),r=!0)},o(s){Ct(e.$$.fragment,s),r=!1},d(s){s&&Q(t),Ft(e)}}}function Dg(n){const e=_i({apiKey:"AIzaSyBpOgtLkUIXsLaHmqZHoqVV_0D3dCfVlVk",authDomain:"merry-holy-santa-chase.firebaseapp.com",projectId:"merry-holy-santa-chase",storageBucket:"merry-holy-santa-chase.appspot.com",messagingSenderId:"1050325198070",appId:"1:1050325198070:web:2efd1e961bf1c135af38d7"}),r=Sl(e),s={"/":Qu,"/intro":Ku,"/game":Rh,"/gameover":bg,"/credits":Cg};return window.onerror=async function(o,a,l,u,d){alert(o);const p={message:o,source:a,line:l,col:u,timestamp:Date.now()},T=await ui(Lr(r,"errorlogs"),{errorData:p});return console.log(`error written to server with id ${T.id}`),!0},window.onunhandledrejection=async function(o){console.log("onunhandledrejection handler logging error",o);const a={source:o.reason.fileName,line:o.reason.lineNumber,col:o.reason.columnNumber,message:o.reason.message,timestamp:Date.now()},l=await ui(Lr(r,"errorlogs"),{errorData:a});return console.log(`rejection error written to server with id ${l.id}`),!0},[s]}class kg extends $t{constructor(t){super(),Ut(this,t,Dg,Vg,kt,{})}}new kg({target:document.getElementById("app")});
