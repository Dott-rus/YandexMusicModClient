(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{80285:function(e,t,n){Promise.resolve().then(n.bind(n,78435)),Promise.resolve().then(n.bind(n,90344)),Promise.resolve().then(n.bind(n,68638)),Promise.resolve().then(n.bind(n,61308)),Promise.resolve().then(n.bind(n,83537)),Promise.resolve().then(n.bind(n,68724)),Promise.resolve().then(n.bind(n,19297)),Promise.resolve().then(n.bind(n,44491)),Promise.resolve().then(n.bind(n,75174)),Promise.resolve().then(n.bind(n,96355)),Promise.resolve().then(n.bind(n,30923)),Promise.resolve().then(n.bind(n,59210)),Promise.resolve().then(n.bind(n,97373)),Promise.resolve().then(n.bind(n,19822)),Promise.resolve().then(n.bind(n,68288)),Promise.resolve().then(n.bind(n,95946)),Promise.resolve().then(n.bind(n,39930)),Promise.resolve().then(n.bind(n,45461)),Promise.resolve().then(n.bind(n,3068)),Promise.resolve().then(n.bind(n,49221)),Promise.resolve().then(n.bind(n,56821)),Promise.resolve().then(n.bind(n,75563)),Promise.resolve().then(n.bind(n,46635)),Promise.resolve().then(n.bind(n,66883)),Promise.resolve().then(n.bind(n,34575)),Promise.resolve().then(n.t.bind(n,82333,23)),Promise.resolve().then(n.t.bind(n,95932,23)),Promise.resolve().then(n.t.bind(n,25747,23)),Promise.resolve().then(n.t.bind(n,70345,23)),Promise.resolve().then(n.bind(n,90703)),Promise.resolve().then(n.bind(n,24747)),Promise.resolve().then(n.bind(n,77617)),Promise.resolve().then(n.bind(n,56472)),Promise.resolve().then(n.bind(n,29751)),Promise.resolve().then(n.bind(n,48769)),Promise.resolve().then(n.bind(n,76808)),Promise.resolve().then(n.bind(n,15859)),Promise.resolve().then(n.bind(n,98805)),Promise.resolve().then(n.bind(n,96262)),Promise.resolve().then(n.bind(n,76600)),Promise.resolve().then(n.bind(n,677)),Promise.resolve().then(n.bind(n,25701)),Promise.resolve().then(n.bind(n,88734)),Promise.resolve().then(n.bind(n,28239)),Promise.resolve().then(n.bind(n,90565)),Promise.resolve().then(n.bind(n,64421)),Promise.resolve().then(n.bind(n,64632)),Promise.resolve().then(n.bind(n,96999)),Promise.resolve().then(n.bind(n,33066)),Promise.resolve().then(n.bind(n,91510)),Promise.resolve().then(n.bind(n,13795)),Promise.resolve().then(n.bind(n,74299)),Promise.resolve().then(n.bind(n,7064)),Promise.resolve().then(n.bind(n,97224)),Promise.resolve().then(n.bind(n,59418)),Promise.resolve().then(n.bind(n,42651)),Promise.resolve().then(n.bind(n,92569))},70345:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return r},NoSSR:function(){return i}}),n(1073),n(99616);let o=n(53518);function r(){let e=Error(o.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=o.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:t}=e;return t}},13236:function(e,t,n){"use strict";n.d(t,{I7:function(){return _},b4:function(){return l},at:function(){return b},zU:function(){return g}});var o=n(8759),r=n(99616),i=n.t(r,2),s=n(44285);let l=e=>{let{children:t,title:n,className:i}=e,{setTitleElement:l,setTitle:a}=(0,r.useContext)(s.pI),d=(0,r.useRef)(null);return(0,r.useEffect)(()=>{(null==d?void 0:d.current)&&l(d),n&&a(n)},[d,n,l,a]),(0,r.useEffect)(()=>()=>{a("")},[a]),(0,o.jsx)("div",{ref:d,className:i,children:t})};var a=n(33423),d={810:e=>{e.exports=i}},u={},c={};(()=>{Object.defineProperty(c,"__esModule",{value:!0}),c.useScroll=void 0;let e=function e(t){var n=u[t];if(void 0!==n)return n.exports;var o=u[t]={exports:{}};return d[t](o,o.exports,e),o.exports}(810);c.useScroll=t=>{(0,e.useEffect)(()=>(window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",t)}),[t])}})(),c.__esModule;var m=c.useScroll,v=n(5674);let h=e=>{let{element:t,scrollTop:n,isMobile:o}=e,r=.4*t.clientHeight;return n+(o?56:72)>=t.offsetTop+r},_=(0,a.Pi)(e=>{let{children:t,scrollElement:n,outerTitle:i="",headerElement:l,headerThreshold:a}=e,[d,u]=(0,r.useState)(i),[c,_]=(0,r.useState)(null),[g,b]=(0,r.useState)(!1),[p,P]=(0,r.useState)(!1),{settings:x}=(0,v.oR)(),f=x.layout===v.t8.Mobile;(0,r.useLayoutEffect)(()=>{u(i)},[i]);let N=(0,r.useCallback)(()=>{if(!n)return;let e=null!=a?a:10,t=l?Number(l.offsetTop)-e:e;t<0&&(t=0),P(n.scrollTop>t),(null==c?void 0:c.current)&&b(h({element:null==c?void 0:c.current,scrollTop:n.scrollTop,isMobile:f}))},[n,a,l,c,f]);(0,r.useEffect)(()=>{(null==n?void 0:n.scrollTop)===0&&P(!1)},[null==n?void 0:n.scrollTop]),m(N);let W=(0,r.useMemo)(()=>({title:d,setTitle:u,titleElement:c,scrollElement:n,setTitleElement:_,isScrolledTitle:g,isScrolling:p}),[d,g,c,n,p]);return(0,o.jsx)(s.pI.Provider,{value:W,children:t})});n(41197);let g=()=>{let[e,t]=(0,r.useState)(null),n=(0,r.useCallback)(n=>{e!==n&&t(n)},[e]);return[e,n]},b=(e,t)=>{let n=(0,v.uK)();n.get(v.Xt);let o=(0,r.useMemo)(()=>{if(void 0!==t){let n=t-17;return{"--average-color-background":e,transform:"translateY(".concat(t>=17?0:n,"px)"),opacity:1}}return{}},[t,!1,e]),i=(0,r.useMemo)(()=>({"--average-color-background":e}),[e]);return[o,i]}},42769:function(e,t,n){"use strict";n.d(t,{h:function(){return r.h},n:function(){return o.n}});var o=n(22008),r=n(38828)},92569:function(e,t,n){"use strict";n.r(t),n.d(t,{TagNotFoundPage:function(){return s}});var o=n(8759),r=n(33423),i=n(2365);let s=(0,r.Pi)(()=>(0,o.jsx)(i.T,{}))},42651:function(e,t,n){"use strict";n.r(t),n.d(t,{TagPage:function(){return b}});var o=n(8759),r=n(35338),i=n(33423),s=n(11769),l=n(99616),a=n(65244),d=n(1918),u=n(70579),c=n(13236),m=n(20210),v=n(5674),h=n(44285),_=n(3537),g=n.n(_);let b=(0,i.Pi)(e=>{var t,n,i;let{tagId:_}=e,{tag:b}=(0,v.oR)(),{formatMessage:p}=(0,a.Z)(),[P,x]=(0,c.zU)(),f=(0,v.k6)();_||(0,s.notFound)();let N=(0,l.useCallback)(e=>{b.getPlaylists({page:e,pageSize:20})},[b]);b.tagLoadingState===v.Gu.IDLE&&(0,l.use)(b.getTag({id:_,page:0,pageSize:20})),b.isNotFound&&(0,s.notFound)(),(0,l.useEffect)(()=>()=>{b.reset()},[b]);let W=(0,l.useMemo)(()=>({Footer:()=>(0,o.jsx)(h.$_,{className:g().footer})}),[]);return((0,v.NO)(b.tagLoadingState===v.Gu.RESOLVE&&b.playlistsLoadingState===v.Gu.RESOLVE),b.tagLoadingState!==v.Gu.REJECT&&b.playlistsLoadingState!==v.Gu.REJECT||b.isNotFound)?(0,o.jsx)(v.Lh,{pageId:v.Rh.TAG,children:(0,o.jsx)(c.I7,{scrollElement:P,outerTitle:b.title,children:(0,o.jsxs)("div",{className:g().root,children:[(0,o.jsx)(h.h4,{variant:"text",withForwardControl:!1,withBackwardControl:f.canBack,children:(0,o.jsx)(d.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:b.title})}),(0,o.jsx)(h.Wv,{className:(0,r.W)(g().scrollContainer,g().important),customComponents:W,itemContentCallback:e=>{var t;let n=null==b?void 0:null===(t=b.playlists)||void 0===t?void 0:t[e],r=p({id:"loading-messages.entity-is-loading"},{entityName:p({id:"entity-names.playlist"})});return n?(0,o.jsx)(m.ZL,{playlist:n,contentLinesCount:3},n.key):(0,o.jsx)(h.hi,{"aria-label":r})},totalCount:null!==(n=null==b?void 0:null===(t=b.pager)||void 0===t?void 0:t.total)&&void 0!==n?n:0,onGetDataByPage:N,pageSize:20,totalRequests:null!==(i=b.requests)&&void 0!==i?i:0,listClassName:g().content,itemClassName:g().item,handleRef:x,context:{listAriaLabel:p({id:"mixes.albums-list"},{genreName:b.title||""})}})]})})}):(0,o.jsx)(u.D,{})})},2365:function(e,t,n){"use strict";n.d(t,{T:function(){return o.NotFound}});var o=n(54529)},54529:function(e,t,n){"use strict";n.r(t),n.d(t,{NotFound:function(){return h}});var o=n(8759),r=n(35338),i=n(33423),s=n(2814),l=n(15527),a=n(14581),d=n(1918),u=n(42769),c=n(5674),m=n(94170),v=n.n(m);let h=(0,i.Pi)(e=>{let{className:t}=e,{contentRef:n}=(0,c.$Y)(),i=(0,c.s0)("/");return(0,c.ZP)(!0),(0,o.jsxs)("div",{className:(0,r.W)(v().root,{[v().root_desktop]:!n},t),children:[(0,o.jsx)(u.n,{withBackwardFallback:"/",className:v().navigation,withForwardControl:!1}),(0,o.jsxs)("div",{className:v().content,children:[(0,o.jsx)(a.J,{className:v().icon,variant:"musicLogo",size:"xxl"}),(0,o.jsx)(d.Heading,{className:(0,r.W)(v().title,v().important),variant:"h3",size:"xs",children:(0,o.jsx)(s.Z,{id:"page-error.page-does-not-exist"})}),(0,o.jsx)(d.Caption,{className:(0,r.W)(v().text,v().important),variant:"span",type:"text",size:"l",weight:"normal",children:(0,o.jsx)(s.Z,{id:"page-error.page-does-not-exist-description"})}),(0,o.jsx)(l.z,{onClick:i,className:v().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,o.jsx)(d.Caption,{type:"controls",variant:"span",size:"m",children:(0,o.jsx)(s.Z,{id:"navigation.page-main"})})})]})]})})},70579:function(e,t,n){"use strict";n.d(t,{D:function(){return o.SomethingWentWrong}});var o=n(48471)},48471:function(e,t,n){"use strict";n.r(t),n.d(t,{SomethingWentWrong:function(){return _}});var o=n(8759),r=n(35338),i=n(33423),s=n(99616),l=n(2814),a=n(15527),d=n(14581),u=n(1918),c=n(42769),m=n(5674),v=n(29847),h=n.n(v);let _=(0,i.Pi)(e=>{let{className:t,withBackwardControl:n=!0}=e,i=(0,s.useCallback)(()=>{window.location.reload()},[]),{contentRef:v}=(0,m.$Y)();return(0,o.jsxs)("div",{className:(0,r.W)(h().root,t),children:[n&&(0,o.jsx)(c.n,{withBackwardFallback:"/",className:(0,r.W)(h().navigation,{[h().navigation_desktop]:!v}),withForwardControl:!1}),(0,o.jsxs)("div",{className:(0,r.W)(h().content,{[h().content_shrink]:!n}),children:[(0,o.jsx)(d.J,{className:h().icon,variant:"attention",size:"xxl"}),(0,o.jsx)(u.Heading,{className:(0,r.W)(h().title,h().important),variant:"h3",size:"xs",children:(0,o.jsx)(l.Z,{id:"error-messages.something-went-wrong"})}),(0,o.jsxs)(u.Caption,{className:(0,r.W)(h().text,h().important),variant:"span",type:"text",size:"l",weight:"normal",children:[!1,(0,o.jsx)(l.Z,{id:"page-error.try-to-restart-app"})]}),(0,o.jsx)(a.z,{onClick:i,className:h().button,role:"link",color:"secondary",size:"l",radius:"xxxl",children:(0,o.jsxs)(u.Caption,{type:"controls",variant:"span",size:"m",children:[!1,(0,o.jsx)(l.Z,{id:"page-error.restart-app-button"})]})})]})]})})},3537:function(e){e.exports={root:"TagPage_root__EWN9A",scrollContainer:"TagPage_scrollContainer__lvG_1",important:"TagPage_important__Jq37E",content:"TagPage_content__rUC_l",footer:"TagPage_footer__W0mZr",item:"TagPage_item__X_lW7"}},94170:function(e){e.exports={root:"NotFound_root__47ZX6",root_desktop:"NotFound_root_desktop___QqSb",navigation:"NotFound_navigation__q8rIW",content:"NotFound_content__3kry_",icon:"NotFound_icon___Wa9y",title:"NotFound_title__akG_o",important:"NotFound_important__z1LWl",text:"NotFound_text__oxDZv",button:"NotFound_button__jF4uH"}},29847:function(e){e.exports={root:"SomethingWentWrong_root__d77VJ",content:"SomethingWentWrong_content__8_YkJ",content_shrink:"SomethingWentWrong_content_shrink__GOR_7",navigation:"SomethingWentWrong_navigation__a8eMG",navigation_desktop:"SomethingWentWrong_navigation_desktop__WGGBX",icon:"SomethingWentWrong_icon__f15_y",title:"SomethingWentWrong_title__Kn89B",important:"SomethingWentWrong_important__namIb",text:"SomethingWentWrong_text__KEfGc",button:"SomethingWentWrong_button__dmh7t"}}}]);