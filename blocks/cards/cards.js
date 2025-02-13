export const id=742;export const ids=[742];export const modules={571:(A,e,r)=>{r.d(e,{C:()=>h,A:()=>B});var t=r(725),a=r(730),i=r(72),d=r.n(i),c=r(825),o=r.n(c),n=r(659),s=r.n(n),C=r(56),l=r.n(C),g=r(540),m=r.n(g),p=r(113),u=r.n(p),f=r(312),y={};y.styleTagTransform=u(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=m(),d()(f.A,y),f.A&&f.A.locals&&f.A.locals;var b=r(73);const h=({cards:A,showSecondButton:e})=>(0,b.Y)("div",{className:"cards-container",children:A?.map(((A,r)=>(0,b.FD)("div",{className:"cards-element",children:[(0,b.FD)("div",{className:"cards-card-image",children:[(0,b.Y)("p",{children:(0,b.FD)("picture",{children:[(0,b.Y)("source",{type:A.imageSide.imgSourceType,srcSet:A.imageSide.imgSourceSrc}),(0,b.Y)("img",{loading:"lazy",alt:"",src:A.imageSide.imgSrc.replace("format=png","format=webply")})]})}),(0,b.Y)("p",{children:A.imageSide.text})]}),(0,b.FD)("div",{className:"cards-card-body",children:[(0,b.Y)("p",{children:(0,b.Y)("strong",{children:A.bodySide.title})}),(0,b.Y)("p",{children:A.bodySide.textBody}),(0,b.Y)("p",{className:"button-container",children:(0,b.Y)("a",{href:A.bodySide.firstButtonHref,title:A.bodySide.firstButtonText,className:"button",children:A.bodySide.firstButtonText})}),e&&(0,b.Y)("p",{className:"button-container",children:(0,b.Y)("a",{href:A.bodySide.secondButtonHref,title:A.bodySide.secondButtonText,className:"button",children:A.bodySide.secondButtonText})})]})]},r)))});h.displayName="Cards";const B=async A=>{const e=(A=>{const e=[];return[...A.children].forEach((A=>{if(A.firstElementChild){const r=A.firstElementChild,t=r.nextElementSibling,a=r.querySelector("source").getAttribute("type"),i=r.querySelector("source").getAttribute("srcset"),d=r.querySelector("img").getAttribute("src").replace("format=png","format=webply"),c=r.querySelector("p:nth-of-type(2)")?.innerHTML,o=t?.querySelector("p strong")?.innerHTML,n=t?.querySelector("p:nth-of-type(2)")?.innerHTML,[s,C]=t.querySelectorAll("p.button-container a"),l=s.getAttribute("href"),g=s.innerHTML,m=C?.getAttribute("href"),p=C?.innerHTML,u={imageSide:{imgSourceType:a,imgSourceSrc:i,imgSrc:d,text:c},bodySide:{title:o,textBody:n,firstButtonHref:l,firstButtonText:g,secondButtonHref:m,secondButtonText:p}};e.push(u)}})),{cards:e,showSecondButton:A.classList.contains("grid-3")}})(A);return a.Ay.createRoot(A).render((0,b.Y)(t.ZR,{children:(0,b.Y)(h,{...e})})),await Promise.resolve()}},312:(A,e,r)=>{r.d(e,{A:()=>c});var t=r(354),a=r.n(t),i=r(314),d=r.n(i)()(a());d.push([A.id,".cards>.cards-container{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill, minmax(278px, 1fr));grid-gap:16px}.cards>.cards-container>.cards-element{background-color:rgba(0,0,0,0);text-align:center;display:flex;flex-direction:column}.cards .cards-card-body{margin:16px;flex:1;height:100%;display:flex;flex-direction:column}.cards .cards-card-body p{margin:0}.cards .cards-card-body p:nth-of-type(2){font-size:16px;padding:0 1rem .5rem;margin-bottom:auto}.cards .cards-card-body a{margin:0;border:.0625rem solid rgba(0,0,0,0);font-size:16px;font-weight:400;background-color:#f0ebe2;color:#484745;border-color:#484745;border-radius:4px;min-width:11.1875rem;padding:.5rem 0}.cards .cards-card-body a:hover{text-decoration:none;background-color:var(--bg-color-red);color:#fff}.cards .cards-card-image{line-height:0}.cards .cards-card-body>*:first-child{margin-top:0}.cards>.cards-container>.cards-element img{width:100%;aspect-ratio:4/3;object-fit:cover}.cards.grid-3>.cards-container{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:24px 30px}.cards.grid-3>.cards-container .cards-card-image{line-height:0;position:relative}.cards.grid-3>.cards-container .cards-card-image p{margin:0}.cards.grid-3>.cards-container .cards-card-image p:last-of-type{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:rgba(0,0,0,.5);width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff}.cards.grid-2>.cards-container{display:grid;grid-template-columns:1fr 1fr;grid-gap:24px 30px}@media(width <= 768px){.cards.grid-3>.cards-container,.cards.grid-2>.cards-container{grid-template-columns:unset}}","",{version:3,sources:["webpack://./src/blocks/cards/cards.scss"],names:[],mappings:"AACE,wBACE,eAAA,CACA,QAAA,CACA,SAAA,CACA,YAAA,CACA,2DAAA,CACA,aAAA,CAEA,uCACE,8BAAA,CACA,iBAAA,CACA,YAAA,CACA,qBAAA,CAIJ,wBACE,WAAA,CACA,MAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CAEA,0BAOE,QAAA,CANA,yCACE,cAAA,CACA,oBAAA,CACA,kBAAA,CAMJ,0BACE,QAAA,CACA,mCAAA,CACA,cAAA,CACA,eAAA,CACA,wBAAA,CACA,aAAA,CACA,oBAAA,CACA,iBAAA,CACA,oBAAA,CACA,eAAA,CAEA,gCACE,oBAAA,CACA,oCAAA,CACA,UAAA,CAKN,yBACE,aAAA,CAGF,sCACE,YAAA,CAGF,2CACE,UAAA,CACA,gBAAA,CACA,gBAAA,CAGF,+BACE,YAAA,CACA,iCAAA,CACA,kBAAA,CAEA,iDACE,aAAA,CACA,iBAAA,CAEA,mDACE,QAAA,CAEA,gEACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,+BAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CAMR,+BACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAQJ,uBAEI,8DAEE,2BAAA,CAAA",sourceRoot:""}]);const c=d}};import A from"../../scripts/bundle.js";import*as e from"./cards.js";A.C(e);var r=A(A.s=571),t=r.C,a=r.A;export{t as Cards,a as default};
//# sourceMappingURL=cards.js.map