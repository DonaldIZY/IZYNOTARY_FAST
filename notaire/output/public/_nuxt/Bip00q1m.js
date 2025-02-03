import{b2 as ht,r as M,b3 as yt,a6 as _,a7 as $,b4 as xt,a8 as Ce,a9 as Ae,ab as Pt,ae as St,b5 as pt,af as $e,ag as Le,ah as wt,ai as N,aj as j,at as J,aK as kt,ak as Re,b6 as ne,Q as It,aZ as de,b7 as Dt,i as I,b8 as Y,R as T,aF as W,z as o,N as G,aw as B,b9 as Se,aA as pe,F as fe,aM as K,ba as Oe,aP as U,bb as se,bc as Vt,aW as L,D as Tt,bd as _t,be as Ft,bf as Ne,bg as oe,bh as ae,bi as ee,bj as ve,bk as Bt,bl as Ct,aX as At,bm as $t,J as q,a3 as we,B as ke,bn as ie,aC as Ie,y as Lt,am as Rt,bo as te,bp as Ot}from"./DXnXjm7K.js";import{V as Ee,d as ge,c as Nt,e as Et,u as Ht,a as Mt}from"./BS0uIqYZ.js";function De(e,l,a){return Object.keys(e).filter(t=>ht(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}function Gt(){const e=M([]);yt(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const jt=_({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:$,default:"$first"},prevIcon:{type:$,default:"$prev"},nextIcon:{type:$,default:"$next"},lastIcon:{type:$,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...xt(),...Ce(),...Ae(),...Pt(),...St(),...pt(),...$e({tag:"nav"}),...Le(),...wt({variant:"text"})},"VPagination"),Ve=N()({name:"VPagination",props:jt(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=j(e,"modelValue"),{t:r,n:s}=J(),{isRtl:u}=kt(),{themeClasses:d}=Re(e),{width:f}=ne(),g=It(-1);de(void 0,{scoped:!0});const{resizeRef:y}=Dt(h=>{if(!h.length)return;const{target:i,contentRect:p}=h[0],w=i.querySelector(".v-pagination__list > *");if(!w)return;const D=p.width,F=w.offsetWidth+parseFloat(getComputedStyle(w).marginRight)*2;g.value=S(D,F)}),v=I(()=>parseInt(e.length,10)),P=I(()=>parseInt(e.start,10)),b=I(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):g.value>=0?g.value:S(f.value,58));function S(h,i){const p=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((h-i*p)/i).toFixed(2)))}const m=I(()=>{if(v.value<=0||isNaN(v.value)||v.value>Number.MAX_SAFE_INTEGER)return[];if(b.value<=0)return[];if(b.value===1)return[n.value];if(v.value<=b.value)return Y(v.value,P.value);const h=b.value%2===0,i=h?b.value/2:Math.floor(b.value/2),p=h?i:i+1,w=v.value-i;if(p-n.value>=0)return[...Y(Math.max(1,b.value-1),P.value),e.ellipsis,v.value];if(n.value-w>=(h?1:0)){const D=b.value-1,F=v.value-D+P.value;return[P.value,e.ellipsis,...Y(D,F)]}else{const D=Math.max(1,b.value-2),F=D===1?n.value:n.value-Math.ceil(D/2)+P.value;return[P.value,e.ellipsis,...Y(D,F),e.ellipsis,v.value]}});function x(h,i,p){h.preventDefault(),n.value=i,p&&t(p,i)}const{refs:c,updateRef:V}=Gt();de({VPaginationBtn:{color:T(e,"color"),border:T(e,"border"),density:T(e,"density"),size:T(e,"size"),variant:T(e,"variant"),rounded:T(e,"rounded"),elevation:T(e,"elevation")}});const C=I(()=>m.value.map((h,i)=>{const p=w=>V(w,i);if(typeof h=="string")return{isActive:!1,key:`ellipsis-${i}`,page:h,props:{ref:p,ellipsis:!0,icon:!0,disabled:!0}};{const w=h===n.value;return{isActive:w,key:h,page:s(h),props:{ref:p,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:w?e.activeColor:e.color,"aria-current":w,"aria-label":r(w?e.currentPageAriaLabel:e.pageAriaLabel,h),onClick:D=>x(D,h)}}}})),k=I(()=>{const h=!!e.disabled||n.value<=P.value,i=!!e.disabled||n.value>=P.value+v.value-1;return{first:e.showFirstLastPage?{icon:u.value?e.lastIcon:e.firstIcon,onClick:p=>x(p,P.value,"first"),disabled:h,"aria-label":r(e.firstAriaLabel),"aria-disabled":h}:void 0,prev:{icon:u.value?e.nextIcon:e.prevIcon,onClick:p=>x(p,n.value-1,"prev"),disabled:h,"aria-label":r(e.previousAriaLabel),"aria-disabled":h},next:{icon:u.value?e.prevIcon:e.nextIcon,onClick:p=>x(p,n.value+1,"next"),disabled:i,"aria-label":r(e.nextAriaLabel),"aria-disabled":i},last:e.showFirstLastPage?{icon:u.value?e.firstIcon:e.lastIcon,onClick:p=>x(p,P.value+v.value-1,"last"),disabled:i,"aria-label":r(e.lastAriaLabel),"aria-disabled":i}:void 0}});function R(){var i;const h=n.value-P.value;(i=c.value[h])==null||i.$el.focus()}function E(h){h.key===Se.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,pe(R)):h.key===Se.right&&!e.disabled&&n.value<P.value+v.value-1&&(n.value=n.value+1,pe(R))}return W(()=>o(e.tag,{ref:y,class:["v-pagination",d.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:E,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(k.value.first):o(G,B({_as:"VPaginationBtn"},k.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(k.value.prev):o(G,B({_as:"VPaginationBtn"},k.value.prev),null)]),C.value.map((h,i)=>o("li",{key:h.key,class:["v-pagination__item",{"v-pagination__item--is-active":h.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(h):o(G,B({_as:"VPaginationBtn"},h.props),{default:()=>[h.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(k.value.next):o(G,B({_as:"VPaginationBtn"},k.value.next),null)]),e.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(k.value.last):o(G,B({_as:"VPaginationBtn"},k.value.last),null)])])]})),{}}}),Wt=_({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),He=Symbol.for("vuetify:data-table-pagination");function zt(e){const l=j(e,"page",void 0,t=>+(t??1)),a=j(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function qt(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=I(()=>a.value===-1?0:a.value*(l.value-1)),r=I(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),s=I(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));fe([l,s],()=>{l.value>s.value&&(l.value=s.value)});function u(v){a.value=v,l.value=1}function d(){l.value=se(l.value+1,1,s.value)}function f(){l.value=se(l.value-1,1,s.value)}function g(v){l.value=se(v,1,s.value)}const y={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:s,itemsLength:t,nextPage:d,prevPage:f,setPage:g,setItemsPerPage:u};return K(He,y),y}function Kt(){const e=U(He);if(!e)throw new Error("Missing pagination!");return e}function Ut(e){const l=Oe("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:r}=e,s=I(()=>r.value<=0?a.value:a.value.slice(t.value,n.value));return fe(s,u=>{l.emit("update:currentItems",u)},{immediate:!0}),{paginatedItems:s}}const Me=_({prevIcon:{type:$,default:"$prev"},nextIcon:{type:$,default:"$next"},firstIcon:{type:$,default:"$first"},lastIcon:{type:$,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Te=N()({name:"VDataTableFooter",props:Me(),setup(e,l){let{slots:a}=l;const{t}=J(),{page:n,pageCount:r,startIndex:s,stopIndex:u,itemsLength:d,itemsPerPage:f,setItemsPerPage:g}=Kt(),y=I(()=>e.itemsPerPageOptions.map(v=>typeof v=="number"?{value:v,title:v===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(v)}:{...v,title:isNaN(Number(v.title))?t(v.title):v.title}));return W(()=>{var P;const v=Ve.filterProps(e);return o("div",{class:"v-data-table-footer"},[(P=a.prepend)==null?void 0:P.call(a),o("div",{class:"v-data-table-footer__items-per-page"},[o("span",null,[t(e.itemsPerPageText)]),o(Ee,{items:y.value,modelValue:f.value,"onUpdate:modelValue":b=>g(Number(b)),density:"compact",variant:"outlined","hide-details":!0},null)]),o("div",{class:"v-data-table-footer__info"},[o("div",null,[t(e.pageText,d.value?s.value+1:0,u.value,d.value)])]),o("div",{class:"v-data-table-footer__pagination"},[o(Ve,B({modelValue:n.value,"onUpdate:modelValue":b=>n.value=b,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},v),null)])])}),{}}}),le=Vt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return o(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:L(e.height),width:L(e.width),maxWidth:L(e.maxWidth),left:L(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),Qt=_({headers:Array},"DataTable-header"),Ge=Symbol.for("vuetify:data-table-headers"),je={title:"",sortable:!1},Xt={...je,width:48};function Jt(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function ce(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)ce(a,l);return l}function We(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&We(a.children,l);return l}function Zt(e){if(e.key){if(e.key==="data-table-group")return je;if(["data-table-expand","data-table-select"].includes(e.key))return Xt}}function me(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>me(a,l+1))):l}function Yt(e){let l=!1;function a(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(s&&(r.fixed=!0),r.fixed)if(r.children)for(let u=r.children.length-1;u>=0;u--)a(r.children[u],!0);else l?isNaN(+r.width)&&Ft(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let u=r.children.length-1;u>=0;u--)a(r.children[u]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return s;if(r.children){r.fixedOffset=s;for(const u of r.children)s=t(u,s)}else r.fixed&&(r.fixedOffset=s,s+=parseFloat(r.width||"0")||0);return s}let n=0;for(const r of e)n=t(r,n)}function ea(e,l){const a=[];let t=0;const n=Jt(e);for(;n.size()>0;){let s=n.count();const u=[];let d=1;for(;s>0;){const{element:f,priority:g}=n.dequeue(),y=l-t-me(f);if(u.push({...f,rowspan:y??1,colspan:f.children?ce(f).length:1}),f.children)for(const v of f.children){const P=g%1+d/Math.pow(10,t+2);n.enqueue(v,t+y+P)}d+=1,s-=1}t+=1,a.push(u)}return{columns:e.map(s=>ce(s)).flat(),headers:a}}function ze(e){const l=[];for(const a of e){const t={...Zt(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,s={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?ze(t.children):void 0};l.push(s)}return l}function ta(e,l){const a=M([]),t=M([]),n=M({}),r=M({}),s=M({});Tt(()=>{var S,m,x;const f=(e.headers||Object.keys(e.items[0]??{}).map(c=>({key:c,title:_t(c)}))).slice(),g=We(f);(S=l==null?void 0:l.groupBy)!=null&&S.value.length&&!g.has("data-table-group")&&f.unshift({key:"data-table-group",title:"Group"}),(m=l==null?void 0:l.showSelect)!=null&&m.value&&!g.has("data-table-select")&&f.unshift({key:"data-table-select"}),(x=l==null?void 0:l.showExpand)!=null&&x.value&&!g.has("data-table-expand")&&f.push({key:"data-table-expand"});const y=ze(f);Yt(y);const v=Math.max(...y.map(c=>me(c)))+1,P=ea(y,v);a.value=P.headers,t.value=P.columns;const b=P.headers.flat(1);for(const c of b)c.key&&(c.sortable&&(c.sort&&(n.value[c.key]=c.sort),c.sortRaw&&(r.value[c.key]=c.sortRaw)),c.filter&&(s.value[c.key]=c.filter))});const u={headers:a,columns:t,sortFunctions:n,sortRawFunctions:r,filterFunctions:s};return K(Ge,u),u}function re(){const e=U(Ge);if(!e)throw new Error("Missing headers!");return e}const aa={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},qe={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return qe.select({items:a,value:l,selected:t})}},Ke={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return Ke.select({items:a,value:l,selected:t})}},la=_({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Ne}},"DataTable-select"),Ue=Symbol.for("vuetify:data-table-selection");function na(e,l){let{allItems:a,currentPage:t}=l;const n=j(e,"modelValue",e.modelValue,x=>new Set(oe(x).map(c=>{var V;return((V=a.value.find(C=>e.valueComparator(c,C.value)))==null?void 0:V.value)??c})),x=>[...x.values()]),r=I(()=>a.value.filter(x=>x.selectable)),s=I(()=>t.value.filter(x=>x.selectable)),u=I(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return aa;case"all":return Ke;case"page":default:return qe}});function d(x){return oe(x).every(c=>n.value.has(c.value))}function f(x){return oe(x).some(c=>n.value.has(c.value))}function g(x,c){const V=u.value.select({items:x,value:c,selected:new Set(n.value)});n.value=V}function y(x){g([x],!d([x]))}function v(x){const c=u.value.selectAll({value:x,allItems:r.value,currentPage:s.value,selected:new Set(n.value)});n.value=c}const P=I(()=>n.value.size>0),b=I(()=>{const x=u.value.allSelected({allItems:r.value,currentPage:s.value});return!!x.length&&d(x)}),S=I(()=>u.value.showSelectAll),m={toggleSelect:y,select:g,selectAll:v,isSelected:d,isSomeSelected:f,someSelected:P,allSelected:b,showSelectAll:S};return K(Ue,m),m}function ue(){const e=U(Ue);if(!e)throw new Error("Missing selection!");return e}const ra=_({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Qe=Symbol.for("vuetify:data-table-sort");function ua(e){const l=j(e,"sortBy"),a=T(e,"mustSort"),t=T(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function sa(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=d=>{if(d.key==null)return;let f=l.value.map(y=>({...y}))??[];const g=f.find(y=>y.key===d.key);g?g.order==="desc"?a.value?g.order="asc":f=f.filter(y=>y.key!==d.key):g.order="desc":t.value?f=[...f,{key:d.key,order:"asc"}]:f=[{key:d.key,order:"asc"}],l.value=f,n&&(n.value=1)};function s(d){return!!l.value.find(f=>f.key===d.key)}const u={sortBy:l,toggleSort:r,isSorted:s};return K(Qe,u),u}function Xe(){const e=U(Qe);if(!e)throw new Error("Missing sort!");return e}function oa(e,l,a,t){const n=J();return{sortedItems:I(()=>{var s,u;return a.value.length?ia(l.value,a.value,n.current.value,{transform:t==null?void 0:t.transform,sortFunctions:{...e.customKeySort,...(s=t==null?void 0:t.sortFunctions)==null?void 0:s.value},sortRawFunctions:(u=t==null?void 0:t.sortRawFunctions)==null?void 0:u.value}):l.value})}}function ia(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return e.map(s=>[s,t!=null&&t.transform?t.transform(s):s]).sort((s,u)=>{var d,f;for(let g=0;g<l.length;g++){let y=!1;const v=l[g].key,P=l[g].order??"asc";if(P===!1)continue;let b=ae(s[1],v),S=ae(u[1],v),m=s[0].raw,x=u[0].raw;if(P==="desc"&&([b,S]=[S,b],[m,x]=[x,m]),(d=t==null?void 0:t.sortRawFunctions)!=null&&d[v]){const c=t.sortRawFunctions[v](m,x);if(c==null)continue;if(y=!0,c)return c}if((f=t==null?void 0:t.sortFunctions)!=null&&f[v]){const c=t.sortFunctions[v](b,S);if(c==null)continue;if(y=!0,c)return c}if(!y){if(b instanceof Date&&S instanceof Date)return b.getTime()-S.getTime();if([b,S]=[b,S].map(c=>c!=null?c.toString().toLocaleLowerCase():c),b!==S)return ee(b)&&ee(S)?0:ee(b)?-1:ee(S)?1:!isNaN(b)&&!isNaN(S)?Number(b)-Number(S):n.compare(b,S)}}return 0}).map(s=>{let[u]=s;return u})}const Je=_({color:String,disableSort:Boolean,fixedHeader:Boolean,multiSort:Boolean,sortAscIcon:{type:$,default:"$sortAsc"},sortDescIcon:{type:$,default:"$sortDesc"},headerProps:{type:Object},sticky:Boolean,...ve(),...Bt()},"VDataTableHeaders"),_e=N()({name:"VDataTableHeaders",props:Je(),setup(e,l){let{slots:a}=l;const{t}=J(),{toggleSort:n,sortBy:r,isSorted:s}=Xe(),{someSelected:u,allSelected:d,selectAll:f,showSelectAll:g}=ue(),{columns:y,headers:v}=re(),{loaderClasses:P}=Ct(e);function b(h,i){if(!(!(e.sticky||e.fixedHeader)&&!h.fixed))return{position:"sticky",left:h.fixed?L(h.fixedOffset):void 0,top:e.sticky||e.fixedHeader?`calc(var(--v-table-header-height) * ${i})`:void 0}}function S(h){const i=r.value.find(p=>p.key===h.key);return i?i.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:m,backgroundColorStyles:x}=At(e,"color"),{displayClasses:c,mobile:V}=ne(e),C=I(()=>({headers:v.value,columns:y.value,toggleSort:n,isSorted:s,sortBy:r.value,someSelected:u.value,allSelected:d.value,selectAll:f,getSortIcon:S})),k=I(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky||e.fixedHeader},c.value,P.value]),R=h=>{let{column:i,x:p,y:w}=h;const D=i.key==="data-table-select"||i.key==="data-table-expand",F=B(e.headerProps??{},i.headerProps??{});return o(le,B({tag:"th",align:i.align,class:[{"v-data-table__th--sortable":i.sortable&&!e.disableSort,"v-data-table__th--sorted":s(i),"v-data-table__th--fixed":i.fixed},...k.value],style:{width:L(i.width),minWidth:L(i.minWidth),maxWidth:L(i.maxWidth),...b(i,w)},colspan:i.colspan,rowspan:i.rowspan,onClick:i.sortable?()=>n(i):void 0,fixed:i.fixed,nowrap:i.nowrap,lastFixed:i.lastFixed,noPadding:D},F),{default:()=>{var z;const H=`header.${i.key}`,Z={column:i,selectAll:f,isSorted:s,toggleSort:n,sortBy:r.value,someSelected:u.value,allSelected:d.value,getSortIcon:S};return a[H]?a[H](Z):i.key==="data-table-select"?((z=a["header.data-table-select"])==null?void 0:z.call(a,Z))??(g.value&&o(ge,{modelValue:d.value,indeterminate:u.value&&!d.value,"onUpdate:modelValue":f},null)):o("div",{class:"v-data-table-header__content"},[o("span",null,[i.title]),i.sortable&&!e.disableSort&&o(we,{key:"icon",class:"v-data-table-header__sort-icon",icon:S(i)},null),e.multiSort&&s(i)&&o("div",{key:"badge",class:["v-data-table-header__sort-badge",...m.value],style:x.value},[r.value.findIndex(Q=>Q.key===i.key)+1])])}})},E=()=>{const h=B(e.headerProps??{}??{}),i=I(()=>y.value.filter(w=>(w==null?void 0:w.sortable)&&!e.disableSort)),p=I(()=>{if(y.value.find(D=>D.key==="data-table-select")!=null)return d.value?"$checkboxOn":u.value?"$checkboxIndeterminate":"$checkboxOff"});return o(le,B({tag:"th",class:[...k.value],colspan:v.value.length+1},h),{default:()=>[o("div",{class:"v-data-table-header__content"},[o(Ee,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:i.value,label:t("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:p.value,"onClick:append":()=>f(!d.value)},{...a,chip:w=>{var D;return o(Nt,{onClick:(D=w.item.raw)!=null&&D.sortable?()=>n(w.item.raw):void 0,onMousedown:F=>{F.preventDefault(),F.stopPropagation()}},{default:()=>[w.item.title,o(we,{class:["v-data-table__td-sort-icon",s(w.item.raw)&&"v-data-table__td-sort-icon-active"],icon:S(w.item.raw),size:"small"},null)]})}})])]})};W(()=>V.value?o("tr",null,[o(E,null,null)]):o(q,null,[a.headers?a.headers(C.value):v.value.map((h,i)=>o("tr",null,[h.map((p,w)=>o(R,{column:p,x:w,y:i},null))])),e.loading&&o("tr",{class:"v-data-table-progress"},[o("th",{colspan:y.value.length},[o($t,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),da=_({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Ze=Symbol.for("vuetify:data-table-group");function ca(e){return{groupBy:j(e,"groupBy")}}function fa(e){const{disableSort:l,groupBy:a,sortBy:t}=e,n=M(new Set),r=I(()=>a.value.map(g=>({...g,order:g.order??!1})).concat(l!=null&&l.value?[]:t.value));function s(g){return n.value.has(g.id)}function u(g){const y=new Set(n.value);s(g)?y.delete(g.id):y.add(g.id),n.value=y}function d(g){function y(v){const P=[];for(const b of v.items)"type"in b&&b.type==="group"?P.push(...y(b)):P.push(b);return[...new Set(P)]}return y({type:"group",items:g,id:"dummy",key:"dummy",value:"dummy",depth:0})}const f={sortByWithGroups:r,toggleGroup:u,opened:n,groupBy:a,extractRows:d,isGroupOpen:s};return K(Ze,f),f}function Ye(){const e=U(Ze);if(!e)throw new Error("Missing group!");return e}function va(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=ae(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function et(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=va(e,l[0]),r=[],s=l.slice(1);return n.forEach((u,d)=>{const f=l[0],g=`${t}_${f}_${d}`;r.push({depth:a,id:g,key:f,value:d,items:s.length?et(u,s,a+1,g):u,type:"group"})}),r}function tt(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...tt(t.items,l))):a.push(t);return a}function ga(e,l,a){return{flatItems:I(()=>{if(!l.value.length)return e.value;const n=et(e.value,l.value.map(r=>r.key));return tt(n,a.value)})}}const ma=_({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ba=N()({name:"VDataTableGroupHeaderRow",props:ma(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=Ye(),{isSelected:s,isSomeSelected:u,select:d}=ue(),{columns:f}=re(),g=I(()=>r([e.item]));return()=>o("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[f.value.map(y=>{var v,P;if(y.key==="data-table-group"){const b=t(e.item)?"$expand":"$next",S=()=>n(e.item);return((v=a["data-table-group"])==null?void 0:v.call(a,{item:e.item,count:g.value.length,props:{icon:b,onClick:S}}))??o(le,{class:"v-data-table-group-header-row__column"},{default:()=>[o(G,{size:"small",variant:"text",icon:b,onClick:S},null),o("span",null,[e.item.value]),o("span",null,[ke("("),g.value.length,ke(")")])]})}if(y.key==="data-table-select"){const b=s(g.value),S=u(g.value)&&!b,m=x=>d(g.value,x);return((P=a["data-table-select"])==null?void 0:P.call(a,{props:{modelValue:b,indeterminate:S,"onUpdate:modelValue":m}}))??o("td",null,[o(ge,{modelValue:b,indeterminate:S,"onUpdate:modelValue":m},null)])}return o("td",null,null)})])}}),ha=_({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),at=Symbol.for("vuetify:datatable:expanded");function ya(e){const l=T(e,"expandOnClick"),a=j(e,"expanded",e.expanded,u=>new Set(u),u=>[...u.values()]);function t(u,d){const f=new Set(a.value);d?f.add(u.value):f.delete(u.value),a.value=f}function n(u){return a.value.has(u.value)}function r(u){t(u,!n(u))}const s={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return K(at,s),s}function lt(){const e=U(at);if(!e)throw new Error("foo");return e}const xa=_({index:Number,item:Object,cellProps:[Object,Function],onClick:ie(),onContextmenu:ie(),onDblclick:ie(),...ve()},"VDataTableRow"),Pa=N()({name:"VDataTableRow",props:xa(),setup(e,l){let{slots:a}=l;const{displayClasses:t,mobile:n}=ne(e,"v-data-table__tr"),{isSelected:r,toggleSelect:s,someSelected:u,allSelected:d,selectAll:f}=ue(),{isExpanded:g,toggleExpand:y}=lt(),{toggleSort:v,sortBy:P,isSorted:b}=Xe(),{columns:S}=re();W(()=>o("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},t.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&S.value.map((m,x)=>{const c=e.item,V=`item.${m.key}`,C=`header.${m.key}`,k={index:e.index,item:c.raw,internalItem:c,value:ae(c.columns,m.key),column:m,isSelected:r,toggleSelect:s,isExpanded:g,toggleExpand:y},R={column:m,selectAll:f,isSorted:b,toggleSort:v,sortBy:P.value,someSelected:u.value,allSelected:d.value,getSortIcon:()=>""},E=typeof e.cellProps=="function"?e.cellProps({index:k.index,item:k.item,internalItem:k.internalItem,value:k.value,column:m}):e.cellProps,h=typeof m.cellProps=="function"?m.cellProps({index:k.index,item:k.item,internalItem:k.internalItem,value:k.value}):m.cellProps;return o(le,B({align:m.align,class:{"v-data-table__td--expanded-row":m.key==="data-table-expand","v-data-table__td--select-row":m.key==="data-table-select"},fixed:m.fixed,fixedOffset:m.fixedOffset,lastFixed:m.lastFixed,maxWidth:n.value?void 0:m.maxWidth,noPadding:m.key==="data-table-select"||m.key==="data-table-expand",nowrap:m.nowrap,width:n.value?void 0:m.width},E,h),{default:()=>{var p,w,D,F,H;if(a[V]&&!n.value)return(p=a[V])==null?void 0:p.call(a,k);if(m.key==="data-table-select")return((w=a["item.data-table-select"])==null?void 0:w.call(a,k))??o(ge,{disabled:!c.selectable,modelValue:r([c]),onClick:Ie(()=>s(c),["stop"])},null);if(m.key==="data-table-expand")return((D=a["item.data-table-expand"])==null?void 0:D.call(a,k))??o(G,{icon:g(c)?"$collapse":"$expand",size:"small",variant:"text",onClick:Ie(()=>y(c),["stop"])},null);const i=Lt(k.value);return n.value?o(q,null,[o("div",{class:"v-data-table__td-title"},[((F=a[C])==null?void 0:F.call(a,R))??m.title]),o("div",{class:"v-data-table__td-value"},[((H=a[V])==null?void 0:H.call(a,k))??i])]):i}})})]))}}),nt=_({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...ve()},"VDataTableRows"),Fe=N()({name:"VDataTableRows",inheritAttrs:!1,props:nt(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=re(),{expandOnClick:r,toggleExpand:s,isExpanded:u}=lt(),{isSelected:d,toggleSelect:f}=ue(),{toggleGroup:g,isGroupOpen:y}=Ye(),{t:v}=J(),{mobile:P}=ne(e);return W(()=>{var b,S;return e.loading&&(!e.items.length||t.loading)?o("tr",{class:"v-data-table-rows-loading",key:"loading"},[o("td",{colspan:n.value.length},[((b=t.loading)==null?void 0:b.call(t))??v(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?o("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[o("td",{colspan:n.value.length},[((S=t["no-data"])==null?void 0:S.call(t))??v(e.noDataText)])]):o(q,null,[e.items.map((m,x)=>{var C;if(m.type==="group"){const k={index:x,item:m,columns:n.value,isExpanded:u,toggleExpand:s,isSelected:d,toggleSelect:f,toggleGroup:g,isGroupOpen:y};return t["group-header"]?t["group-header"](k):o(ba,B({key:`group-header_${m.id}`,item:m},De(a,":group-header",()=>k)),t)}const c={index:x,item:m.raw,internalItem:m,columns:n.value,isExpanded:u,toggleExpand:s,isSelected:d,toggleSelect:f},V={...c,props:B({key:`item_${m.key??m.index}`,onClick:r.value?()=>{s(m)}:void 0,index:x,item:m,cellProps:e.cellProps,mobile:P.value},De(a,":row",()=>c),typeof e.rowProps=="function"?e.rowProps({item:c.item,index:c.index,internalItem:c.internalItem}):e.rowProps)};return o(q,{key:V.props.key},[t.item?t.item(V):o(Pa,V.props,t),u(m)&&((C=t["expanded-row"])==null?void 0:C.call(t,c))])})])}),{}}}),rt=_({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Ce(),...Ae(),...$e(),...Le()},"VTable"),Be=N()({name:"VTable",props:rt(),setup(e,l){let{slots:a,emit:t}=l;const{themeClasses:n}=Re(e),{densityClasses:r}=Rt(e);return W(()=>o(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var s,u,d;return[(s=a.top)==null?void 0:s.call(a),a.default?o("div",{class:"v-table__wrapper",style:{height:L(e.height)}},[o("table",null,[a.default()])]):(u=a.wrapper)==null?void 0:u.call(a),(d=a.bottom)==null?void 0:d.call(a)]}})),{}}}),Sa=_({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function pa(e,l,a,t){const n=e.returnObject?l:te(l,e.itemValue),r=te(l,e.itemSelectable,!0),s=t.reduce((u,d)=>(d.key!=null&&(u[d.key]=te(l,d.value)),u),{});return{type:"item",key:e.returnObject?te(l,e.itemValue):n,index:a,value:n,selectable:r,columns:s,raw:l}}function wa(e,l,a){return l.map((t,n)=>pa(e,t,n,a))}function ka(e,l){return{items:I(()=>wa(e,e.items,l.value))}}function Ia(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const s=Oe("VDataTable"),u=I(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let d=null;fe(u,()=>{Ne(d,u.value)||(d&&d.search!==u.value.search&&(l.value=1),s.emit("update:options",u.value),d=u.value)},{deep:!0,immediate:!0})}const Da=_({...nt(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...ha(),...da(),...Qt(),...Sa(),...la(),...ra(),...Je(),...rt()},"DataTable"),Va=_({...Wt(),...Da(),...Et(),...Me()},"VDataTable"),Fa=N()({name:"VDataTable",props:Va(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=ca(e),{sortBy:r,multiSort:s,mustSort:u}=ua(e),{page:d,itemsPerPage:f}=zt(e),{disableSort:g}=Ot(e),{columns:y,headers:v,sortFunctions:P,sortRawFunctions:b,filterFunctions:S}=ta(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:m}=ka(e,y),x=T(e,"search"),{filteredItems:c}=Ht(e,m,x,{transform:O=>O.columns,customKeyFilter:S}),{toggleSort:V}=sa({sortBy:r,multiSort:s,mustSort:u,page:d}),{sortByWithGroups:C,opened:k,extractRows:R,isGroupOpen:E,toggleGroup:h}=fa({groupBy:n,sortBy:r,disableSort:g}),{sortedItems:i}=oa(e,c,C,{transform:O=>({...O.raw,...O.columns}),sortFunctions:P,sortRawFunctions:b}),{flatItems:p}=ga(i,n,k),w=I(()=>p.value.length),{startIndex:D,stopIndex:F,pageCount:H,setItemsPerPage:Z}=qt({page:d,itemsPerPage:f,itemsLength:w}),{paginatedItems:z}=Ut({items:p,startIndex:D,stopIndex:F,itemsPerPage:f}),Q=I(()=>R(z.value)),{isSelected:ut,select:st,selectAll:ot,toggleSelect:it,someSelected:dt,allSelected:ct}=na(e,{allItems:m,currentPage:Q}),{isExpanded:ft,toggleExpand:vt}=ya(e);Ia({page:d,itemsPerPage:f,sortBy:r,groupBy:n,search:x}),de({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const A=I(()=>({page:d.value,itemsPerPage:f.value,sortBy:r.value,pageCount:H.value,toggleSort:V,setItemsPerPage:Z,someSelected:dt.value,allSelected:ct.value,isSelected:ut,select:st,selectAll:ot,toggleSelect:it,isExpanded:ft,toggleExpand:vt,isGroupOpen:E,toggleGroup:h,items:Q.value.map(O=>O.raw),internalItems:Q.value,groupedItems:z.value,columns:y.value,headers:v.value}));return W(()=>{const O=Te.filterProps(e),gt=_e.filterProps(e),mt=Fe.filterProps(e),bt=Be.filterProps(e);return o(Be,B({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},bt,{fixedHeader:e.fixedHeader||e.sticky}),{top:()=>{var X;return(X=t.top)==null?void 0:X.call(t,A.value)},default:()=>{var X,be,he,ye,xe,Pe;return t.default?t.default(A.value):o(q,null,[(X=t.colgroup)==null?void 0:X.call(t,A.value),!e.hideDefaultHeader&&o("thead",{key:"thead"},[o(_e,gt,t)]),(be=t.thead)==null?void 0:be.call(t,A.value),!e.hideDefaultBody&&o("tbody",null,[(he=t["body.prepend"])==null?void 0:he.call(t,A.value),t.body?t.body(A.value):o(Fe,B(a,mt,{items:z.value}),t),(ye=t["body.append"])==null?void 0:ye.call(t,A.value)]),(xe=t.tbody)==null?void 0:xe.call(t,A.value),(Pe=t.tfoot)==null?void 0:Pe.call(t,A.value)])},bottom:()=>t.bottom?t.bottom(A.value):!e.hideDefaultFooter&&o(q,null,[o(Mt,null,null),o(Te,O,{prepend:t["footer.prepend"]})])})}),{}}});export{Fa as V};
