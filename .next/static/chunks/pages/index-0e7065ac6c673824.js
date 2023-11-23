(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(61364)}])},67086:function(t,e,n){"use strict";var a=n(91309),r=n(85893),i=n(67294),o=n(87357),s=n(94054),l=n(61903),d=n(60089);e.Z=function(t){var e=t.onDatesChange,n=(0,a._)((0,i.useState)(""),2),u=n[0],c=n[1],h=(0,a._)((0,i.useState)(""),2),x=h[0],f=h[1],m=(0,i.useCallback)(function(t){var n=t.target.value;c(n),x&&e({startDate:n,endDate:x})},[c,x,e]),p=(0,i.useCallback)(function(t){var n=t.target.value;f(n),u&&e({startDate:u,endDate:n})},[f,u,e]);return(0,r.jsx)(d.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:(0,r.jsxs)(o.Z,{sx:{display:"flex",gap:2,flexDirection:"row",alignItems:"center",mt:2},children:[(0,r.jsx)(s.Z,{variant:"outlined",sx:{flexGrow:1,maxWidth:300},children:(0,r.jsx)(l.Z,{id:"start-date",type:"date",value:u,onChange:m,label:"Start Date",InputLabelProps:{shrink:!0},fullWidth:!0})}),(0,r.jsx)(s.Z,{variant:"outlined",sx:{flexGrow:1,maxWidth:300},children:(0,r.jsx)(l.Z,{id:"end-date",type:"date",value:x,onChange:p,label:"End Date",InputLabelProps:{shrink:!0},fullWidth:!0})})]})})}},36856:function(t,e,n){"use strict";var a=n(72253),r=n(14932),i=n(85893),o=n(67294),s=n(29009),l=n(75244),d=n(14195),u=n(3023),c=n(75358),h=n(26050),x=n(33558),f=n(56880),m=n(2734),p=n(90629),v=function(t){var e=new Date(t),n=e.getDate().toString().padStart(2,"0"),a=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getFullYear();return"".concat(a,"/").concat(n,"/").concat(r)},g=o.memo(function(t){var e=t.data,n=(0,m.Z)(),o=e.map(function(t){return(0,r._)((0,a._)({},t),{start:v(t.start),average:t.average.toFixed(4)})});return(0,i.jsx)(p.Z,{elevation:3,sx:{p:2,mb:2,mt:2},children:(0,i.jsx)(s.h,{width:"100%",height:400,children:(0,i.jsxs)(l.w,{data:o,margin:{top:5,right:30,left:20,bottom:5},children:[(0,i.jsx)(d.q,{strokeDasharray:"3 3",stroke:n.palette.divider}),(0,i.jsx)(u.K,{dataKey:"start",tick:{fill:n.palette.text.primary}}),(0,i.jsx)(c.B,{tickFormatter:function(t){return"".concat(t)},tick:{fill:n.palette.text.primary}}),(0,i.jsx)(h.u,{}),(0,i.jsx)(x.D,{}),(0,i.jsx)(f.x,{type:"monotone",dataKey:"average",stroke:n.palette.primary.main,activeDot:{r:8}})]})})})});e.Z=g},38871:function(t,e,n){"use strict";var a=n(85893),r=n(67294),i=n(94054),o=n(33841),s=n(71683),l=n(23599),d=n(60089),u={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},c=r.memo(function(t){var e=t.value,n=t.onChange;return(0,a.jsx)(d.E.div,{variants:u,initial:"hidden",animate:"visible",children:(0,a.jsxs)(i.Z,{sx:{my:2},children:[(0,a.jsx)(o.Z,{id:"product-select-label",children:"Choose a product"}),(0,a.jsxs)(s.Z,{labelId:"product-select-label",id:"product-select",value:e,label:"Choose a product",onChange:function(t){return n(t.target.value)},children:[(0,a.jsx)(l.Z,{value:"carbonmonoxide",children:"Carbon Monoxide"}),(0,a.jsx)(l.Z,{value:"methane",children:"Methane"}),(0,a.jsx)(l.Z,{value:"ozone",children:"Ozone"})]})]})})});e.Z=c},61364:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return J}});var a=n(85893),r=n(67294),i=n(91309),o=n(23279),s=n.n(o),l=n(64593),d=n(9473),u=n(83848),c=n(202),h=n(87357),x=n(63366),f=n(87462),m=n(90512),p=n(70917),v=n(94780),g=n(41796),j=n(90948),b=n(71657),y=n(1588),Z=n(34867);function C(t){return(0,Z.Z)("MuiSkeleton",t)}(0,y.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);let w=["animation","className","component","height","style","variant","width"],k=t=>t,D,S,_,E,F=t=>{let{classes:e,variant:n,animation:a,hasChildren:r,width:i,height:o}=t;return(0,v.Z)({root:["root",n,a,r&&"withChildren",r&&!i&&"fitContent",r&&!o&&"heightAuto"]},C,e)},R=(0,p.F4)(D||(D=k`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),M=(0,p.F4)(S||(S=k`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),N=(0,j.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{let n=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",a=parseFloat(t.shape.borderRadius);return(0,f.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,g.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${n}/${Math.round(a/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>"pulse"===t.animation&&(0,p.iv)(_||(_=k`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),R),({ownerState:t,theme:e})=>"wave"===t.animation&&(0,p.iv)(E||(E=k`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),M,(e.vars||e).palette.action.hover)),W=r.forwardRef(function(t,e){let n=(0,b.Z)({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:o="span",height:s,style:l,variant:d="text",width:u}=n,c=(0,x.Z)(n,w),h=(0,f.Z)({},n,{animation:r,component:o,variant:d,hasChildren:!!c.children}),p=F(h);return(0,a.jsx)(N,(0,f.Z)({as:o,ref:e,className:(0,m.Z)(p.root,i),ownerState:h},c,{style:(0,f.Z)({width:u,height:s},l)}))});var $=n(15861),P=n(94054),X=n(33841),I=n(23599),T=n(71683),A=r.memo(function(t){var e=t.onCountrySelect,n=(0,c.T)(),o=(0,d.v9)(function(t){return t.countries}),s=o.list,l=o.loading,x=o.error,f=(0,i._)((0,r.useState)(""),2),m=f[0],p=f[1];return((0,r.useEffect)(function(){n((0,u.t)())},[n]),l)?(0,a.jsxs)(h.Z,{sx:{width:"100%",maxWidth:360},children:[(0,a.jsx)(W,{variant:"text",width:210,height:35}),(0,a.jsx)(W,{variant:"text",width:450,height:20}),(0,a.jsx)(W,{variant:"rectangular",width:150,height:56})]}):x?(0,a.jsxs)($.Z,{color:"error",children:["Error: ",x]}):(0,a.jsxs)(h.Z,{children:[(0,a.jsx)($.Z,{variant:"h5",children:"Select a Country"}),(0,a.jsx)($.Z,{variant:"body1",gutterBottom:!0,children:"Choose a country and a date-range to analyze its emissions data."}),(0,a.jsxs)(P.Z,{sx:{minWidth:150},children:[(0,a.jsx)(X.Z,{id:"country-select-label",children:"Country"}),(0,a.jsxs)(T.Z,{labelId:"country-select-label",id:"country-select",value:m,label:"Country",onChange:function(t){var n=t.target.value;p(n);var a=s.find(function(t){return t.name===n}),r=a?a.code:"";r&&e(r)},children:[(0,a.jsx)(I.Z,{value:"",children:(0,a.jsx)("em",{children:"None"})}),s.map(function(t){return(0,a.jsx)(I.Z,{value:t.name,children:t.name},t.code)})]})]})]})}),O=n(67086),q=n(36856),z=n(38871),B=n(79519),G=n(69417),K=n(98456),L=n(58703),H=n(21737),U=n(16628),Y=function(){var t=(0,c.T)(),e=(0,i._)((0,r.useState)(""),2),n=e[0],o=e[1],u=(0,i._)((0,r.useState)({startDate:"",endDate:""}),2),x=u[0],f=u[1],m=(0,d.v9)(function(t){return t.emissions}),p=m.data,v=m.loading,g=m.error,j=(0,i._)((0,r.useState)("carbonmonoxide"),2),b=j[0],y=j[1],Z=(0,i._)((0,r.useState)(""),2),C=Z[0],w=Z[1],k=(0,r.useCallback)(s()(function(e,n,a,r){t((0,B.U)({country:e,startDate:n,endDate:a,product:r}))},300),[t]),D=(0,r.useCallback)(function(){if(!n||!x.startDate||!x.endDate){w("Please select a country and date range.");return}k(n,x.startDate,x.endDate,b)},[n,x,b,k]);return(0,r.useEffect)(function(){t((0,U.dm)())},[t]),(0,a.jsxs)(h.Z,{sx:{padding:3},children:[(0,a.jsxs)(l.q,{children:[(0,a.jsx)("title",{children:"Emissions by Country | GlobalEmissions"}),(0,a.jsx)("meta",{name:"description",content:"Compare emissions data from different countries around the world."})]}),(0,a.jsx)(A,{onCountrySelect:function(t){o(t)}}),(0,a.jsx)(O.Z,{onDatesChange:function(t){f(t)}}),(0,a.jsx)(z.Z,{value:b,onChange:y}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(G.Z,{variant:"contained",color:"primary",onClick:D,disabled:v,children:"Fetch Data"})}),v&&(0,a.jsx)(h.Z,{display:"flex",justifyContent:"center",children:(0,a.jsx)(K.Z,{})}),!v&&!g&&p&&p.length>0&&(0,a.jsx)(q.Z,{data:p}),(0,a.jsx)(L.Z,{open:""!==C,autoHideDuration:6e3,onClose:function(){return w("")},children:(0,a.jsx)(H.Z,{onClose:function(){return w("")},severity:"error",sx:{width:"100%"},children:C})})]})},J=function(){return(0,a.jsx)(Y,{})}}},function(t){t.O(0,[89,799,774,888,179],function(){return t(t.s=75557)}),_N_E=t.O()}]);