export const id=258;export const ids=[258];export const modules={566:(A,e,t)=>{t.d(e,{e:()=>v,A:()=>E});var o=t(725),r=t(730),i=t(72),l=t.n(i),c=t(825),n=t.n(c),s=t(659),u=t.n(s),m=t(56),d=t.n(m),C=t(540),a=t.n(C),p=t(113),g=t.n(p),f=t(232),h={};h.styleTagTransform=g(),h.setAttributes=d(),h.insert=u().bind(null,"head"),h.domAPI=n(),h.insertStyleElement=a(),l()(f.A,h),f.A&&f.A.locals&&f.A.locals;var y=t(73);const v=({leftImageSources:A,leftListItems:e,leftText:t,rightImageSources:r})=>{const i=(0,o.Kr)((()=>(e??[]).map(((A,e)=>(0,y.Y)("li",{children:(0,y.Y)("a",{href:A.link,title:A.text,children:A.text})},e)))),[e]),l=(0,o.Kr)((()=>(A??[]).map(((A,e)=>"image"!==A.type?(0,y.Y)("source",{type:A.type,srcSet:A.src,media:"(min-width: 600px)"},e):(0,y.Y)("img",{loading:"eager",alt:"picture",src:A.src,width:"801",height:"251"},e)))),[A]),c=(0,o.Kr)((()=>(r??[]).map(((A,e)=>"image"!==A.type?(0,y.Y)("source",{type:A.type,srcSet:A.src,media:"(min-width: 600px)"},e):(0,y.Y)("img",{loading:"lazy",alt:"picture",src:A.src,width:"533",height:"349"},e)))),[r]);return(0,y.FD)("div",{children:[(0,y.FD)("div",{children:[(0,y.Y)("p",{children:(0,y.Y)("picture",{children:l})}),(0,y.Y)("p",{children:t}),(0,y.Y)("ul",{children:i})]}),(0,y.Y)("div",{className:"columns-img-col",children:(0,y.Y)("picture",{children:c})})]})};v.displayName="Columns";const E=async A=>{const e=(A=>{const e=A.querySelector("div"),t=(A=>{const e=A.querySelector("picture"),t=e.querySelectorAll("source"),o=e.querySelector("img"),r=[];t.forEach((A=>{const e={type:A.getAttribute("type"),src:A.getAttribute("srcset")};r.push(e)}));const i={type:"image",src:o.getAttribute("src")};return r.push(i),r.map((A=>({...A,src:A.src.replace("format=png","format=webply")})))})(e),o=e.querySelector("p:nth-of-type(2)")?.innerHTML,r=(A=>{const e=A.querySelectorAll("ul li a"),t=[];return e.forEach((A=>{const e={link:A.getAttribute("href"),text:A.getAttribute("title")};t.push(e)})),t})(e),i=(A=>{const e=A.querySelector("div:nth-of-type(2) picture"),t=e.querySelectorAll("source"),o=e.querySelector("img"),r=[];t.forEach((A=>{const e={type:A.getAttribute("type"),src:A.getAttribute("srcset")};r.push(e)}));const i={type:"image",src:o.getAttribute("src")};return r.push(i),r.map((A=>({...A,src:A.src.replace("format=png","format=webply")})))})(e);return{leftImageSources:t,leftListItems:r,leftText:o,rightImageSources:i}})(A);return r.Ay.createRoot(A).render((0,y.Y)(o.ZR,{children:(0,y.Y)(v,{...e})})),await Promise.resolve()}},232:(A,e,t)=>{t.d(e,{A:()=>c});var o=t(354),r=t.n(o),i=t(314),l=t.n(i)()(r());l.push([A.id,".columns>div{display:flex;flex-direction:column}.columns img{width:100%}.columns>div>div{order:1}.columns>div>.columns-img-col{order:0}.columns>div>.columns-img-col img{display:block}.columns.full-width>div{gap:unset}.columns.full-width>div:not(.columns-img-col){background-color:#354856}.columns.full-width .columns-img-col{order:1}.columns.full-width>div>div:not(.columns-img-col){display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.5rem 0}.columns.full-width>div>div:not(.columns-img-col) img{max-height:190px;width:auto;object-fit:contain}.columns.full-width p{color:#fff;font-size:16px;text-align:center;margin:0}.columns.full-width>div>div:not(.columns-img-col) p:nth-of-type(2){max-width:650px}.columns.full-width>div>div:not(.columns-img-col) ul{display:flex;flex-direction:column;justify-content:center;align-items:center;list-style:none;padding:0;gap:2rem}.columns.full-width>div>div:not(.columns-img-col) ul li a{background-color:#f0ebe2;color:#484745;border-color:#484745;font-size:14px;padding:1rem 2.5rem;border-radius:4px}.columns.full-width>div>div:not(.columns-img-col) ul li a:hover{text-decoration:none;background-color:var(--bg-color-red);color:#fff}@media(width >= 900px){.columns>div{align-items:center;flex-direction:unset;gap:32px}.columns>div>div{flex:1;order:unset}.columns.full-width>div>div:not(.columns-img-col) ul{flex-direction:row}}","",{version:3,sources:["webpack://./src/blocks/columns/columns.scss"],names:[],mappings:"AACE,aACE,YAAA,CACA,qBAAA,CAGF,aACE,UAAA,CAIA,iBACE,OAAA,CAGF,8BACE,OAAA,CAEA,kCACE,aAAA,CAMJ,wBACE,SAAA,CAEA,8CACE,wBAAA,CAIJ,qCACE,OAAA,CAGF,kDACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,gBAAA,CAEA,sDACE,gBAAA,CACA,UAAA,CACA,kBAAA,CAIJ,sBACE,UAAA,CACA,cAAA,CACA,iBAAA,CACA,QAAA,CAIA,mEACE,eAAA,CAGF,qDACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CACA,SAAA,CACA,QAAA,CAEA,0DACE,wBAAA,CACA,aAAA,CACA,oBAAA,CACA,cAAA,CACA,mBAAA,CACA,iBAAA,CAEA,gEACE,oBAAA,CACA,oCAAA,CACA,UAAA,CAWZ,uBAEI,aACE,kBAAA,CACA,oBAAA,CACA,QAAA,CAEA,iBACE,MAAA,CACA,WAAA,CAIJ,qDACE,kBAAA,CAAA",sourceRoot:""}]);const c=l}};import A from"../../scripts/bundle.js";import*as e from"./columns.js";A.C(e);var t=A(A.s=566),o=t.e,r=t.A;export{o as Columns,r as default};
//# sourceMappingURL=columns.js.map