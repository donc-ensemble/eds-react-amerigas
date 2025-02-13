export const id=278;export const ids=[278,385];export const modules={621:(A,e,a)=>{a.d(e,{L:()=>i});var t=a(91),n=a(955);async function i(A){if(A&&A.startsWith("/")){const e=await fetch(`${A}.plain.html`);if(e.ok){const a=document.createElement("main");a.innerHTML=await e.text();const i=(e,t)=>{a.querySelectorAll(`${e}[${t}^="./media_"]`).forEach((e=>{e[t]=new URL(e.getAttribute(t),new URL(A,window.location)).href}))};return i("img","src"),i("source","srcset"),(0,t.P)(a),await(0,n.$1)(a),a}}return null}},758:(A,e,a)=>{a.d(e,{Y:()=>y,A:()=>B});var t=a(725),n=a(730),i=a(955),r=a(621),o=a(72),l=a.n(o),C=a(825),d=a.n(C),s=a(659),c=a.n(s),h=a(56),p=a.n(h),u=a(540),v=a.n(u),g=a(113),m=a.n(g),f=a(16),b={};b.styleTagTransform=m(),b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=v(),l()(f.A,b),f.A&&f.A.locals&&f.A.locals;var x=a(73);const y=({brandItems:A,headerItems:e,navItems:a})=>{const[n,i]=(0,t.J0)(!1),[r,o]=(0,t.J0)("Close navigation"),l=(0,t.Kr)((()=>A.map(((A,e)=>(0,x.Y)("p",{children:(0,x.Y)("a",{href:A.link,title:"link",children:(0,x.FD)("picture",{children:[(0,x.Y)("source",{type:"image/webp",srcSet:A.source}),(0,x.Y)("img",{loading:"lazy",alt:"{item.text}",src:A.imgSrc,width:"54",height:"10"})]})})},e)))),[A]),C=(0,t.Kr)((()=>(0,x.FD)(x.FK,{children:[(0,x.Y)("p",{children:(0,x.Y)("a",{href:e[0].link,title:"link",children:(0,x.FD)("picture",{children:[(0,x.Y)("source",{type:"image/webp",srcSet:e[0].source}),(0,x.Y)("img",{alt:e[0].text,src:e[0].imgSrc.replace("format=png","format=webply"),width:"614",height:"201"})]})})}),(0,x.FD)("p",{children:[(0,x.Y)("input",{type:"text",placeholder:"What are you looking for?"}),(0,x.Y)("span",{className:"icon icon-search",children:(0,x.Y)("img",{"data-icon-name":"search",src:e[1].imgSrc,alt:e[1].text,loading:"lazy"})})]})]})),[e]),d=(0,t.hb)(((A,e)=>(0,x.FD)("li",{children:[(0,x.Y)("span",{className:"icon icon-user-profile",children:(0,x.Y)("img",{"data-icon-name":"user-profile",src:A.imgSrc,alt:A.text,loading:"lazy"})}),(0,x.FD)("div",{className:"tool-link-register",children:[(0,x.FD)("div",{children:["Welcome ",(0,x.Y)("span",{children:"⌄"})]}),(0,x.FD)("div",{className:"links",children:[(0,x.Y)("span",{children:"Sign In"})," or ",(0,x.Y)("span",{children:"Register"})]}),(0,x.Y)("div",{className:"mobile-label",children:"Account"})]})]},e)),[]),s=(0,t.hb)(((A,e)=>(0,x.FD)("li",{children:[(0,x.Y)("span",{className:`icon icon-${A.text}`,children:(0,x.Y)("img",{"data-icon-name":A.text,src:A.imgSrc,alt:A.text+"image",loading:"lazy"})}),"shoppingbag"===A.text?"bag":"support"]},e)),[]),c=(0,t.Kr)((()=>e.slice(2).map(((A,e)=>"userprofile"===A.text?d(A,e):s(A,e)))),[e,s,d]),h=(0,t.Kr)((()=>a.map(((A,e)=>(0,x.Y)("li",{"aria-expanded":n,children:(0,x.Y)("a",{href:A.link,title:A.text,children:A.text})},e)))),[n,a]),p=(0,t.hb)((()=>{o(n?"Close navigation":"Open navigation"),i(!n)}),[n,i,o]);return(0,x.Y)("div",{className:"nav-wrapper",children:(0,x.FD)("nav",{id:"nav","aria-expanded":n,children:[(0,x.Y)("div",{className:"section nav-brand","data-section-status":"loaded",children:(0,x.Y)("div",{className:"default-content-wrapper",children:l})}),(0,x.Y)("div",{className:"section nav-tools","data-section-status":"loaded",children:(0,x.FD)("div",{className:"default-content-wrapper",children:[(0,x.Y)("div",{className:"nav-hamburger",children:(0,x.Y)("button",{type:"button","aria-controls":"nav","aria-label":r,onClick:()=>p(),children:(0,x.Y)("span",{className:"nav-hamburger-icon"})})}),C,(0,x.Y)("ul",{children:c})]})}),(0,x.Y)("div",{className:"section nav-sections","data-sections-status":"loaded",children:(0,x.Y)("div",{className:"default-content-wrapper",children:(0,x.Y)("ul",{children:h})})})]})})};y.displayName="Header";const B=async A=>{const e=await async function(){const A=(0,i.yb)("nav"),e=A?new URL(A).pathname:"/nav",a=await(0,r.L)(e),[t,n,o]=a.children;return{brandItems:[...t.querySelectorAll("p")].map((A=>({link:A.querySelector("a").getAttribute("href"),source:A.querySelector("picture source:nth-of-type(2)").getAttribute("srcset"),imgSrc:A.querySelector("img").getAttribute("src").replace("format=png","format=webply"),text:A.querySelector("img").getAttribute("alt")}))),headerItems:[{link:n.querySelector("p:first-child a").getAttribute("href"),source:n.querySelector("p:first-child a picture source:nth-of-type(2)").getAttribute("srcset"),imgSrc:n.querySelector("p:first-child a img").getAttribute("src"),text:"Logo"},{link:"",imgSrc:n.querySelector("p:nth-of-type(2) img").getAttribute("src"),text:"SearchIcon"},...[...n.querySelectorAll("ul li")].map((A=>({link:"",imgSrc:A.querySelector("img").getAttribute("src"),text:A.querySelector("img").getAttribute("data-icon-name")})))],navItems:[...o.querySelectorAll("ul li")].map((A=>({link:A.querySelector("a")?.getAttribute("href")??"",text:A.outerText})))}}();n.Ay.createRoot(A).render((0,x.Y)(t.ZR,{children:(0,x.Y)(y,{...e})}))}},16:(A,e,a)=>{a.d(e,{A:()=>o});var t=a(354),n=a.n(t),i=a(314),r=a.n(i)()(n());r.push([A.id,'header .nav-wrapper{background-color:var(--bg-color-white);width:100%;z-index:2;position:fixed}header nav{box-sizing:border-box;align-items:center;gap:0 2em;margin:auto;width:100%;font-family:var(--body-font-family)}header nav>div{padding:0 1rem}header nav .section{width:100%;box-sizing:border-box}header .section>div{max-width:1440px;margin:0 auto}header nav[aria-expanded=true]{grid-template:"hamburger brand" var(--nav-height) "sections sections" 1fr "tools tools" var(--nav-height)/auto 1fr;overflow-y:auto;min-height:100vh}header nav p{margin:0;line-height:1}header nav a:any-link{color:currentcolor}header nav .nav-hamburger{grid-area:hamburger;height:22px;display:flex;align-items:center}header nav .nav-hamburger button{height:22px;margin:0;border:0;border-radius:0;padding:0;background-color:rgba(0,0,0,0);color:inherit;overflow:initial;text-overflow:initial;white-space:initial}header nav .nav-hamburger-icon{box-sizing:border-box;display:block;position:relative;width:20px}header nav .nav-hamburger-icon::before,header nav .nav-hamburger-icon::after{box-sizing:border-box;display:block;position:relative;width:20px}header nav .nav-hamburger-icon::before,header nav .nav-hamburger-icon::after{content:"";position:absolute;background:currentcolor}header nav[aria-expanded=false] .nav-hamburger-icon{height:2px;border-radius:2px;background:currentcolor}header nav[aria-expanded=false] .nav-hamburger-icon::before,header nav[aria-expanded=false] .nav-hamburger-icon::after{height:2px;border-radius:2px;background:currentcolor}header nav[aria-expanded=false] .nav-hamburger-icon::before{top:-6px}header nav[aria-expanded=false] .nav-hamburger-icon::after{top:6px}header nav[aria-expanded=true] .nav-hamburger-icon{height:22px}header nav[aria-expanded=true] .nav-hamburger-icon::before{top:3px;left:1px;transform:rotate(45deg);transform-origin:2px 1px;width:24px;height:2px;border-radius:2px}header nav[aria-expanded=true] .nav-hamburger-icon::after{top:3px;left:1px;transform:rotate(45deg);transform-origin:2px 1px;width:24px;height:2px;border-radius:2px;top:unset;bottom:3px;transform:rotate(-45deg)}header .nav-brand{grid-area:brand;font-size:var(--heading-font-size-s);font-weight:700;line-height:1;background-color:var(--bg-color-white);margin:0 auto;padding:5px 1rem}header .nav-brand>div{display:flex;flex-direction:row;gap:20px}header nav .nav-brand img{width:auto;height:auto}header nav .nav-sections{grid-area:sections;flex:1 1 auto;display:none;visibility:hidden;background-color:var(--bg-color-beige);height:100%}header nav[aria-expanded=true] .nav-sections{display:block;visibility:visible;align-self:start}header nav .nav-sections ul{list-style:none;padding-left:0;font-size:14px;font-weight:500}header nav .nav-sections ul>li{font-weight:700}header nav .nav-sections ul>li>a:hover{text-decoration:none}header nav .nav-sections ul>li>ul{margin-top:0}header nav .nav-sections ul>li>ul>li{font-weight:500;display:flex;flex-direction:column;font-weight:900}header nav .nav-sections ul>li>ul>li>a{padding:.25rem 0}header nav .nav-sections ul>li>ul>li>a:hover{text-decoration:underline}header nav .nav-sections ul>li>ul>li>ul{display:block}header nav .nav-sections ul>li>ul>li>ul>li{color:#696158;font-weight:400}header nav .nav-tools{grid-area:tools;background-color:var(--bg-color-beige)}header nav .nav-tools img{height:40px;width:auto;object-fit:contain}header nav .nav-tools>div{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:10px 0;gap:3rem}header nav .nav-tools ul{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:row;gap:2rem}header nav .nav-tools>div p:nth-of-type(2){margin-right:auto}header nav .nav-tools p:nth-of-type(2){display:flex;justify-content:center;align-items:center}header nav .nav-tools p:nth-of-type(2) input[type=text]{height:auto;width:auto;padding:1rem .75rem;min-width:20rem;background-color:var(--bg-color-beige);font-size:16px;border:1px solid;border-radius:2px 0 0 2px}header nav .nav-tools p:nth-of-type(2) .icon-search{display:block;width:auto;height:auto;padding:.9rem;background-color:#484745;border-radius:0 5px 5px 0}header nav .nav-tools p:nth-of-type(2) .icon-search:hover{background-color:var(--bg-color-red);cursor:pointer;transition:.15s ease-in-out}header nav .nav-tools p:nth-of-type(2) .icon-search img{width:20px;height:20px;filter:invert(1)}header nav .nav-tools ul li{display:flex;justify-content:center;align-items:center;font-size:12px}header nav .nav-tools ul li:hover{color:var(--bg-color-red);cursor:pointer}header nav .nav-tools ul li:nth-of-type(2),header nav .nav-tools ul li:nth-of-type(3){display:flex;flex-direction:column;text-transform:capitalize}header nav .nav-tools ul li span{height:28px;width:28px}header nav .nav-tools .icon img{height:30px;width:30px}header nav .nav-tools .tool-link-register{margin-left:.5rem}header nav .nav-tools .tool-link-register>div:not(.links) span{margin-left:35px}header nav .nav-tools .tool-link-register .links span{text-decoration:underline}header nav .nav-tools .tool-link-register .mobile-label{display:none}@media(width <= 1440px){header .section>div{max-width:1080px;margin:0 auto}}@media(width >= 900px){header nav{display:flex;flex-direction:column;justify-content:space-between}header nav[aria-expanded=true]{min-height:0;overflow:visible}}@media(width >= 900px){header nav .nav-hamburger{display:none;visibility:hidden}}@media(width >= 900px){header nav .nav-sections{display:block;visibility:visible;white-space:nowrap}header nav[aria-expanded=true] .nav-sections{align-self:unset}header nav .nav-sections .nav-drop{position:relative;cursor:pointer}header nav .nav-sections ul{display:flex;gap:1rem;margin:0;justify-content:center}header nav .nav-sections .default-content-wrapper>ul>li{flex:0 1 auto;position:relative;font-weight:500;padding:.5rem;line-height:normal}header nav .nav-sections .default-content-wrapper>ul>li.nav-drop:hover{color:var(--bg-color-red);background-color:#e3dfd6}header nav .nav-sections .default-content-wrapper>ul>li>ul{display:none;position:relative}header nav .nav-sections .default-content-wrapper>ul>li[aria-expanded=true]>ul{display:block;position:absolute;left:0;width:200px;margin-top:7px;padding:1em;background-color:#e3dfd6;white-space:initial}header nav .nav-sections ul>li>ul>li>a{padding:.5rem 0}header nav .nav-sections .default-content-wrapper>ul>li>ul>li{padding:8px 0;color:#000}}@media(width <= 992px){header nav .nav-tools .tool-link-register div:not(.mobile-label){display:none}header nav .nav-tools .tool-link-register .mobile-label{display:block}header nav .nav-tools ul{gap:1.5rem}header nav .nav-tools ul li{display:flex;flex-direction:column}header nav .nav-tools>div{gap:1.5rem}header nav .nav-tools p:nth-of-type(2) input[type=text]{min-width:15rem;background-color:var(--bg-color-white)}header nav .nav-sections ul{margin:0}header nav .nav-tools img{height:30px}}@media(width <= 768px){header nav .nav-tools ul li:nth-of-type(1),header nav .nav-tools ul li:nth-of-type(2){display:none}header nav .nav-tools p:nth-of-type(2){display:none}}@media(width <= 900px){header nav .nav-sections{height:100vh}}',"",{version:3,sources:["webpack://./src/blocks/header/header.scss"],names:[],mappings:"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",sourceRoot:""}]);const o=r},91:(A,e,a)=>{a.d(e,{P:()=>i});var t=a(955);async function n(){await(0,t.y6)(`${window.hlx.codeBasePath}/styles/fonts.css`);try{window.location.hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch(A){}}function i(A){(0,t.HI)(A),(0,t.sT)(A),function(A){try{!function(A){const e=A.querySelector("h1"),a=A.querySelector("picture");if(e&&a&&e.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_PRECEDING){const n=document.createElement("div");n.append((0,t.KG)("hero",{elems:[a,e]})),A.prepend(n)}}(A)}catch(A){console.error("Auto Blocking failed",A)}}(A),(0,t.yd)(A),(0,t.iK)(A)}!async function(){await async function(A){document.documentElement.lang="en",(0,t.O3)();const e=A.querySelector("main");e&&(i(e),document.body.classList.add("appear"),await(0,t.OW)(e.querySelector(".section"),t.S_));try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&n()}catch(A){}}(document),await async function(A){const e=A.querySelector("main");await(0,t.$1)(e);const{hash:a}=window.location,i=!!a&&A.getElementById(a.substring(1));a&&i&&i.scrollIntoView(),(0,t.Y7)(A.querySelector("header")),(0,t.iB)(A.querySelector("footer")),(0,t.y6)(`${window.hlx.codeBasePath}/styles/lazy-styles.css`),n()}(document),window.setTimeout((()=>import(`${window.hlx.codeBasePath}/scripts/delayed.js`)),3e3)}()}};import A from"../../scripts/bundle.js";import*as e from"./header.js";A.C(e);var a=A(A.s=758),t=a.Y,n=a.A;export{t as Header,n as default};
//# sourceMappingURL=header.js.map