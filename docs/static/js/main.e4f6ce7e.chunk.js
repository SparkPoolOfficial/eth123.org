(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var r,a=n(2),i=n(0),c=n.n(i),o=n(7),s=n.n(o),l=n(38),d=n.n(l),j=n(60),u=n(18),h=n(19),b=n(21),f=n(20),g=n(164),x=n(161),m=n(166),p=n(82),O=n(163),C=n(154),v=n(168),L=n(156),_=n(151),y=n(27),w=n.n(y),k=n(75),B=n.n(k),N=n(55),S=n(83),I=function(e){var t=e.id,n=e.className,r=e.style,i=e.children,c=e.onClick,o=Object(S.a)(e,["id","className","style","children","onClick"]),s={m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:["ml","mr"],my:["mt","mb"],p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:["pl","pr"],py:["pt","pb"]},l=["position","top","right","bottom","left","display","flex","flexWrap","flexDirection","justifyContent","alignItems","width","height","minHeight","fontWeight","fontSize","lineHeight","textAlign","color","backgroundColor","border","borderTop","borderRight","borderBottom","borderLeft","borderColor","borderRadius","boxShadow","wordBreak","cursor","userSelect","zIndex"],d={};try{Object.keys(o).forEach((function(e){s[e]&&(/(x|y)/.test(e)?s[e].forEach((function(t){d[s[t]]=8*o[e]})):d[s[e]]=8*o[e])}))}catch(u){}var j={};try{Object.keys(o).forEach((function(e){l.indexOf(e)>-1&&(j[e]=o[e])}))}catch(u){}return Object(a.jsx)("div",{style:Object(N.a)(Object(N.a)(Object(N.a)({},j),d),r),onClick:c,id:t,className:n,children:i})},T=n.p+"static/media/logo_title_new.3cf03a5d.svg",D=n(29),E=n.n(D),R="https://expo-res.sparkpool.com/SparkPoolOfficial/eth123.org",z="https://expo-res.sparkpool.com",M=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=[],n=0;n<e;n++)t.push(n);return t},P=function(){return"en"===window.localStorage.getItem("i18nextLng")?"en":"zh"},Z=function(e,t){try{window._hmt.push(["_trackEvent",e,"click",t])}catch(n){console.log(n)}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?e.indexOf("http")>-1?e:/\S+\.svg$/.test(e)?"".concat(z).concat(e):"".concat(z).concat(e,"!webp"):""},A=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={sticky:!1,activeKey:"Home",top:0},e.initActiveKey=function(){var t=e.props.tagList,n=window.location.hash,r=n?n.split("#")[1]:encodeURI((t[0]||{}).tag_en);e.setState({activeKey:r})},e.onScroll=function(){var t=0,n=document.documentElement.scrollTop;r>window.innerHeight-234&&(t=n>document.body.clientHeight/2?-(n/(document.body.clientHeight/2)-1)*(r-window.innerHeight+234+166):0),e.setState({top:parseInt(t,10),sticky:n>157,activeKey:e.getCurrentAnchor()})},e.getCurrentAnchor=function(){var t=e.props.tagList,n=[];if(t.forEach((function(t){var r=encodeURI(t.tag_en),a=document.getElementById(r);if(a){var i=e.getOffsetTop(a);n.push({link:r,top:i})}})),n.length)for(var r=1;r<n.length;r++)if(n[r].top>0)return n[r-1].link;return""},e.getOffsetTop=function(e){var t=e.getBoundingClientRect();if(t.width||t.height)return t.top-e.ownerDocument.documentElement.clientTop},e.renderWebNavList=function(){var t=e.props,n=t.tagList,r=t.language,i=e.state,c=i.sticky,o=i.top,s=i.activeKey;if(!(n||[]).length){var l=+window.localStorage.getItem("tagListLength"),d=M(l||30);return Object(a.jsx)(I,{display:"flex",flexDirection:"column",pl:1,pr:1,style:{top:o},children:d.map((function(e,t){return Object(a.jsx)(I,{pt:1,pr:2,pb:1,pl:2,children:Object(a.jsx)(_.a,{variant:"text",width:80})},"".concat(e,"-").concat(t))}))})}return Object(a.jsx)(I,{pl:1,pr:1,display:"flex",flexDirection:"column",id:"NavBar",className:w()(E.a.NavBar,c?E.a.NavBa_fixed:{}),style:{top:o},children:(n||[]).map((function(e,t){var n=e.tag,i=e.tag_en,c="zh"===r?n:i;return Object(a.jsx)(C.a,{href:"#".concat(i),className:w()(E.a.link,s===encodeURI(i)?E.a.link_active:{}),color:"textPrimary",underline:"none",children:c},i)}))})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=(this.props.tagList||[]).length;e&&(window.localStorage.setItem("tagListLength",e),r=36*e,this.initActiveKey(),window.addEventListener("scroll",B()(this.onScroll,16.7)))}},{key:"render",value:function(){var e=this.props,t=e.tagList,n=e.language,r=e.drawerVisible,i=e.onClose,c=this.state.activeKey;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m.a,{lgUp:!0,children:Object(a.jsx)(v.a,{open:r,onClose:i,children:Object(a.jsxs)(I,{display:"flex",flexDirection:"column",style:{height:"inherit",overflow:"hideen"},children:[Object(a.jsx)(I,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:2,children:Object(a.jsx)("img",{src:T,alt:"eth123",height:17})}),Object(a.jsx)(L.a,{}),Object(a.jsx)(I,{flex:"1",style:{overflow:"auto"},onClick:i,children:(t||[]).map((function(e,t){var r=e.tag,i=e.tag_en,o="zh"===n?r:i;return Object(a.jsx)(C.a,{href:"#".concat(i),className:w()(E.a.drawer_link,c===encodeURI(i)?E.a.drawer_link_active:{}),color:"textPrimary",underline:"none",children:Object(a.jsx)(I,{pl:4,pr:4,pt:1,pb:1,children:o})},i)}))})]})})}),Object(a.jsx)(m.a,{mdDown:!0,children:this.renderWebNavList()})]})}}]),n}(i.PureComponent),H=n(157),U=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.navList,n=e.tagList,r=e.language;if(!(n||[]).length||!(t||[]).length){var i=M();return Object(a.jsx)("div",{id:encodeURI((n[0]||{}).tag_en),style:{marginBottom:16},children:Object(a.jsx)(H.a,{container:!0,spacing:2,children:i.map((function(e,t){return Object(a.jsx)(H.a,{item:!0,xs:6,sm:4,md:3,children:Object(a.jsx)("div",{className:"skeletonHotCard",style:{backgroundColor:"#fff",borderRadius:8}})},"".concat(e,"-").concat(t))}))})})}return Object(a.jsx)("div",{id:encodeURI((n[0]||{}).tag_en),style:{marginBottom:16},children:Object(a.jsx)(H.a,{container:!0,spacing:2,children:(t||[]).filter((function(e){return(e.tag_en||"").indexOf("Hot")>-1})).map((function(e,t){return Object(a.jsx)(H.a,{item:!0,xs:6,sm:4,md:3,children:Object(a.jsx)(C.a,{color:"textPrimary",href:"".concat("zh"===r?e.url:e.url_en||e.url,"?utm_resource=eth123.org"),target:"_blank",underline:"none",onClick:function(){Z(e.tag_en,e.name_en||e.name)},children:Object(a.jsx)(I,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",py:2,borderRadius:8,backgroundColor:"#fff",className:"hotCard",children:Object(a.jsx)("img",{src:V(e.image),alt:""})})})},"Hot-".concat(t))}))})})}}]),n}(i.PureComponent),W=n(126),K=n(14),F=n.n(K),G=function(){return(M()||[]).map((function(e,t){return Object(a.jsx)(H.a,{item:!0,xs:6,sm:4,md:3,children:Object(a.jsxs)(I,{display:"flex",flexDirection:"row",className:F.a.itemSkeleton,children:[Object(a.jsx)(I,{mr:1,children:Object(a.jsx)(_.a,{variant:"circle",width:30,height:30})}),Object(a.jsxs)(I,{flex:"1",children:[Object(a.jsx)(_.a,{variant:"text"}),Object(a.jsx)(_.a,{variant:"text"})]})]})},"".concat(e,"-").concat(t))}))},J=function(){return(M()||[]).map((function(e){return Object(a.jsxs)(I,{mb:2,backgroundColor:"white",borderRadius:16,className:F.a.cardSkeleton,children:[Object(a.jsx)(I,{py:2,borderBottom:"1px solid #f5f5f5",children:Object(a.jsx)(_.a,{variant:"text",width:100})}),Object(a.jsx)(I,{className:F.a.cardSkeleton_card,children:Object(a.jsx)(H.a,{container:!0,spacing:2,children:Object(a.jsx)(G,{})})})]},"".concat(e,"-index"))}))},q=n(169),X=n(79),Y=n.n(X),$=function(e){var t=e.item,n=t.tag_en,r=t.logo,i=t.name,c=t.name_en,o=t.desc,s=t.desc_en,l=t.url,d=t.url_en,j=t.logoWidthAuto,u=t.logoHeightAuto,h=e.language,b=30,f="zh"===h?l:d||l;return Object(a.jsx)(H.a,{item:!0,xs:6,sm:4,md:3,children:Object(a.jsx)(C.a,{color:"textPrimary",href:"".concat(f,"?utm_resource=eth123.org"),target:"_blank",underline:"none",onClick:function(){Z(n,c||i)},children:Object(a.jsxs)(I,{display:"flex",flexDirection:"row",className:w()("cardItem",F.a.cardItem),borderRadius:8,children:[Object(a.jsx)(I,{mr:1,children:Object(a.jsx)(Y.a,{height:b,style:{width:b},once:!0,children:Object(a.jsx)(q.a,{alt:"zh"===h?i:c||i,src:V(r),style:{height:u?"auto":b,width:j?"auto":b},imgProps:{height:u?"auto":b,width:j?"auto":b},children:("zh"===h?i:c||i).slice(0,1)})})}),Object(a.jsxs)(I,{children:[Object(a.jsx)(W.a,{variant:"body1",className:"cardItem_title",style:{fontWeight:500},children:"zh"===h?i:c||i}),Object(a.jsx)(W.a,{variant:"caption",style:{color:"#999",wordBreak:"break-all"},children:function(){if("zh"===h&&o)return o;if("en"===h&&s)return s;var e=(f||"").replace(/htt(p|ps):\/\//,"");return"/"===e.slice("-1")&&(e=e.slice(0,e.length-1)),e}()})]})]})})})},Q=n(37),ee=n(158),te=function(e){var t=e.list,n=e.language,r=Object(i.useState)(!1),c=Object(Q.a)(r,2),o=c[0],s=c[1];return o?(t||[]).slice(7).map((function(e,t){return Object(a.jsx)($,{item:e,language:n},t)})):Object(a.jsx)(H.a,{item:!0,xs:6,sm:4,md:3,children:Object(a.jsx)(I,{display:"flex",flexDirection:"column",justifyContent:"center",className:"toggleBtnWrap",children:Object(a.jsx)(I,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",className:"toggleBtn",borderRadius:4,onClick:function(){s(!0)},children:Object(a.jsx)(ee.a,{})})})},"toggleBtnGrid")},ne=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tag,n=e.navList,r=e.language;if(!(n||[]).length)return Object(a.jsx)(G,{});var i=(n||[]).filter((function(e){return e.tag_en===t})),c=[],o=i.length<=8?8:7;return c=i.slice(0,o).map((function(e,t){return Object(a.jsx)($,{item:e,language:r},t)})),i.length>8&&c.push(Object(a.jsx)(te,{list:i,language:r},"NavExpandItem")),c}}]),n}(i.PureComponent),re=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tagList,n=e.navList,r=e.language;return(t||[]).length?(t||[]).slice(1).map((function(e){return Object(a.jsxs)(I,{backgroundColor:"white",borderRadius:16,mb:2,id:encodeURI(e.tag_en),className:F.a.navItemCard,children:[Object(a.jsx)(I,{py:2,borderBottom:"1px solid #f5f5f5",children:Object(a.jsx)(W.a,{children:"zh"===r?e.tag:e.tag_en})}),Object(a.jsx)(I,{className:F.a.navItemCard_card,children:Object(a.jsx)(H.a,{container:!0,spacing:2,children:Object(a.jsx)(ne,{tag:e.tag_en,navList:n,language:r})})})]},e.tag_en)})):Object(a.jsx)(J,{})}}]),n}(i.PureComponent),ae=n(53),ie=n(159),ce=n(162),oe=n(167),se=n(170),le=n(160),de=n(80),je=n.n(de),ue=function(e){var t=e.style;return Object(a.jsx)(ae.a,{viewBox:"0 0 86 18",version:"1.1",style:Object.assign({},{height:18,width:86},t),children:Object(a.jsx)("g",{id:"\u9875\u9762-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(a.jsx)("g",{id:"\u5bfc\u822a\u9875\u9762-\uff08\u6dfb\u52a0-logo-\u8df3\u8f6c\uff09",transform:"translate(-151.000000, -16.000000)",fill:"#333333",fillRule:"nonzero",children:Object(a.jsx)("g",{id:"\u7f16\u7ec4-7",transform:"translate(150.000000, 16.000000)",children:Object(a.jsx)("path",{d:"M6.01366806,17.8254848 C6.8292887,17.8254848 7.47698745,17.1523546 7.47698745,16.3047091 L7.47698745,1.54570637 C7.47698745,0.698060942 6.85327755,0.0249307479 6.01366806,0.0249307479 L5.96569038,0.0249307479 C5.53389121,0.0249307479 5.10209205,0.12465374 4.52635983,0.299168975 L1.98354254,1.1468144 C1.38382148,1.32132964 1,1.8199446 1,2.46814404 C1,3.16620499 1.59972106,3.76454294 2.29539749,3.76454294 C2.43933054,3.76454294 2.65523013,3.73961219 2.82315202,3.68975069 L4.55034868,3.14127424 L4.55034868,16.3047091 C4.55034868,17.1523546 5.22203626,17.8254848 6.01366806,17.8254848 Z M21.9182706,17.700831 C22.6379358,17.700831 23.2136681,17.1024931 23.2136681,16.3545706 C23.2136681,15.6066482 22.6379358,15.0083102 21.9182706,15.0083102 L15.1054393,15.0083102 L18.5598326,12.0166205 C21.5344491,9.49861496 22.925802,8.00277008 22.925802,5.26038781 L22.925802,5.21052632 C22.925802,2.09418283 20.6708508,0 17.3843794,0 C14.7456067,0 13.1863319,1.04709141 11.8189679,2.81717452 C11.6030683,3.09141274 11.4831241,3.44044321 11.4831241,3.76454294 C11.4831241,4.53739612 12.0828452,5.16066482 12.8264993,5.16066482 C13.3062762,5.16066482 13.6421199,4.93628809 13.8580195,4.68698061 C14.8895397,3.39058172 15.8251046,2.74238227 17.1684798,2.74238227 C18.7037657,2.74238227 19.879219,3.73961219 19.879219,5.4598338 C19.879219,7.03047091 19.0396095,8.15235457 16.7366806,10.1717452 L11.5790795,14.734072 C11.0753138,15.1578947 10.8114365,15.6565097 10.8114365,16.2548476 C10.8114365,17.1523546 11.4831241,17.700831 12.3947001,17.700831 L21.9182706,17.700831 Z M31.9456067,18 C35.4479777,18 37.8228731,15.6814404 37.8228731,12.465374 L37.8228731,12.4155125 C37.8228731,9.19944598 35.4239888,7.8531856 32.8811715,7.52908587 L36.8393305,3.26592798 C37.3430962,2.74238227 37.67894,2.31855956 37.67894,1.59556787 C37.67894,0.772853186 37.0552301,0.249307479 36.2156206,0.249307479 L27.6276151,0.249307479 C26.9079498,0.249307479 26.3322176,0.847645429 26.3322176,1.59556787 C26.3322176,2.31855956 26.9079498,2.91689751 27.6276151,2.91689751 L33.720781,2.91689751 L29.7866109,7.27977839 C29.3308229,7.7534626 29.162901,8.12742382 29.162901,8.52631579 C29.162901,9.24930748 29.7386332,9.84764543 30.4343096,9.84764543 L31.0340307,9.84764543 C33.3849372,9.84764543 34.8962343,10.8199446 34.8962343,12.5401662 L34.8962343,12.5900277 C34.8962343,14.1855956 33.6488145,15.232687 31.9935844,15.232687 C30.4343096,15.232687 29.2348675,14.6592798 28.1793584,13.5623269 C27.93947,13.3379501 27.6276151,13.1634349 27.1958159,13.1634349 C26.4281729,13.1634349 25.7804742,13.8365651 25.7804742,14.634349 C25.7804742,15.0831025 25.9963738,15.5069252 26.260251,15.7313019 C27.6276151,17.1024931 29.4747559,18 31.9456067,18 Z M52.8398884,17.700831 C53.5595537,17.700831 54.1592748,17.1024931 54.1592748,16.3296399 C54.1592748,15.5817175 53.5595537,14.9584488 52.8398884,14.9584488 L44.4198047,14.9584488 L44.4198047,10.2714681 L51.6404463,10.2714681 C52.3601116,10.2714681 52.9598326,9.67313019 52.9598326,8.92520776 C52.9598326,8.15235457 52.3601116,7.52908587 51.6404463,7.52908587 L44.4198047,7.52908587 L44.4198047,2.99168975 L52.7199442,2.99168975 C53.4396095,2.99168975 54.0393305,2.3933518 54.0393305,1.62049861 C54.0393305,0.872576177 53.4396095,0.249307479 52.7199442,0.249307479 L42.9564854,0.249307479 C42.1168759,0.249307479 41.4691771,0.922437673 41.4691771,1.79501385 L41.4691771,16.1551247 C41.4691771,17.0277008 42.1168759,17.700831 42.9564854,17.700831 L52.8398884,17.700831 Z M63.1550907,17.8254848 C63.9707113,17.8254848 64.6423989,17.1523546 64.6423989,16.3047091 L64.6423989,3.09141274 L68.7444909,3.09141274 C69.488145,3.09141274 70.0878661,2.4432133 70.0878661,1.67036011 C70.0878661,0.897506925 69.488145,0.249307479 68.7444909,0.249307479 L57.5896792,0.249307479 C56.8220363,0.249307479 56.2223152,0.897506925 56.2223152,1.67036011 C56.2223152,2.4432133 56.8220363,3.09141274 57.5896792,3.09141274 L61.6677824,3.09141274 L61.6677824,16.3047091 C61.6677824,17.1523546 62.33947,17.8254848 63.1550907,17.8254848 Z M85.5126918,17.8254848 C86.3523013,17.8254848 87,17.1523546 87,16.3047091 L87,1.64542936 C87,0.797783934 86.3523013,0.12465374 85.5126918,0.12465374 C84.6970711,0.12465374 84.0493724,0.797783934 84.0493724,1.64542936 L84.0493724,7.50415512 L76.037099,7.50415512 L76.037099,1.64542936 C76.037099,0.797783934 75.3894003,0.12465374 74.5737796,0.12465374 C73.7341702,0.12465374 73.0864714,0.797783934 73.0864714,1.64542936 L73.0864714,16.3047091 C73.0864714,17.1523546 73.7341702,17.8254848 74.5737796,17.8254848 C75.3894003,17.8254848 76.037099,17.1523546 76.037099,16.3047091 L76.037099,10.3462604 L84.0493724,10.3462604 L84.0493724,16.3047091 C84.0493724,17.1523546 84.6970711,17.8254848 85.5126918,17.8254848 Z",id:"123ETH"})})})})})},he=function(e){var t=e.style;return Object(a.jsx)(ae.a,{viewBox:"0 0 86 18",version:"1.1",style:Object.assign({},{height:18,width:86},t),children:Object(a.jsx)("g",{id:"\u9875\u9762-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(a.jsx)("g",{id:"\u5bfc\u822a\u9875\u9762-\uff08\u6dfb\u52a0-logo-\u8df3\u8f6c\uff09",transform:"translate(-348.000000, -16.000000)",fill:"#333333",fillRule:"nonzero",children:Object(a.jsx)("g",{id:"\u7f16\u7ec4-5",transform:"translate(348.000000, 16.000000)",children:Object(a.jsx)("path",{d:"M4.98585298,17.8259669 C5.79694868,17.8259669 6.44105409,17.1546961 6.44105409,16.3093923 L6.44105409,1.59116022 C6.44105409,0.745856354 5.82080444,0.0745856354 4.98585298,0.0745856354 L4.93814147,0.0745856354 C4.50873786,0.0745856354 4.07933426,0.174033149 3.50679612,0.348066298 L0.978085992,1.19337017 C0.381692094,1.36740331 0,1.86464088 0,2.51104972 C0,3.20718232 0.596393897,3.8038674 1.28821082,3.8038674 C1.43134535,3.8038674 1.64604716,3.77900552 1.81303745,3.72928177 L3.53065187,3.18232044 L3.53065187,16.3093923 C3.53065187,17.1546961 4.19861304,17.8259669 4.98585298,17.8259669 Z M20.8022191,17.7016575 C21.5178918,17.7016575 22.09043,17.1049724 22.09043,16.359116 C22.09043,15.6132597 21.5178918,15.0165746 20.8022191,15.0165746 L14.0271845,15.0165746 L17.4624133,12.0331492 C20.420527,9.52209945 21.8041609,8.03038674 21.8041609,5.29558011 L21.8041609,5.24585635 C21.8041609,2.13812155 19.5617198,0.0497237569 16.2934813,0.0497237569 C13.6693481,0.0497237569 12.118724,1.09392265 10.7589459,2.85911602 C10.5442441,3.13259669 10.4249653,3.48066298 10.4249653,3.8038674 C10.4249653,4.57458564 11.0213592,5.1961326 11.7608877,5.1961326 C12.2380028,5.1961326 12.5719834,4.97237569 12.7866852,4.72375691 C13.8124827,3.43093923 14.7428571,2.78453039 16.0787795,2.78453039 C17.6055479,2.78453039 18.7744799,3.77900552 18.7744799,5.49447514 C18.7744799,7.06077348 17.9395284,8.17955801 15.6493759,10.1933702 L10.5203883,14.7430939 C10.0194175,15.1657459 9.75700416,15.6629834 9.75700416,16.2596685 C9.75700416,17.1546961 10.4249653,17.7016575 11.331484,17.7016575 L20.8022191,17.7016575 Z M30.7739251,18 C34.2568655,18 36.6185853,15.6878453 36.6185853,12.480663 L36.6185853,12.4309392 C36.6185853,9.22375691 34.2330097,7.88121547 31.7042996,7.55801105 L35.6404993,3.30662983 C36.1414702,2.78453039 36.4754508,2.36187845 36.4754508,1.64088398 C36.4754508,0.820441989 35.8552011,0.298342541 35.0202497,0.298342541 L26.479889,0.298342541 C25.7642164,0.298342541 25.1916782,0.895027624 25.1916782,1.64088398 C25.1916782,2.36187845 25.7642164,2.95856354 26.479889,2.95856354 L32.539251,2.95856354 L28.6269071,7.30939227 C28.1736477,7.78176796 28.0066574,8.15469613 28.0066574,8.55248619 C28.0066574,9.27348066 28.5791956,9.87016575 29.2710125,9.87016575 L29.8674064,9.87016575 C32.2052705,9.87016575 33.7081831,10.839779 33.7081831,12.5552486 L33.7081831,12.6049724 C33.7081831,14.1961326 32.4676838,15.2403315 30.8216366,15.2403315 C29.2710125,15.2403315 28.0782247,14.6685083 27.0285714,13.5745856 C26.7900139,13.3508287 26.479889,13.1767956 26.0504854,13.1767956 C25.2871012,13.1767956 24.6429958,13.8480663 24.6429958,14.6436464 C24.6429958,15.0911602 24.8576976,15.5138122 25.120111,15.7375691 C26.479889,17.1049724 28.3167822,18 30.7739251,18 Z M47.9739251,17.7016575 C51.695423,17.7016575 54.1525659,16.0359116 54.1525659,12.9281768 L54.1525659,12.878453 C54.1525659,10.5165746 52.7927878,9.3480663 50.8366158,8.6519337 C52.0771151,7.98066298 53.2221914,6.86187845 53.2221914,4.77348066 L53.2221914,4.72375691 C53.2221914,3.55524862 52.8404993,2.61049724 52.1009709,1.83977901 C51.1467406,0.845303867 49.643828,0.298342541 47.7353675,0.298342541 L41.7237171,0.298342541 C40.8887656,0.298342541 40.2446602,0.96961326 40.2446602,1.83977901 L40.2446602,16.160221 C40.2446602,17.0303867 40.8887656,17.7016575 41.7237171,17.7016575 L47.9739251,17.7016575 Z M47.1389736,7.63259669 L43.1312067,7.63259669 L43.1312067,3.00828729 L47.3536755,3.00828729 C49.2382802,3.00828729 50.2879334,3.85359116 50.2879334,5.22099448 L50.2879334,5.27071823 C50.2879334,6.86187845 49.0235784,7.63259669 47.1389736,7.63259669 Z M47.9977809,14.9917127 L43.1312067,14.9917127 L43.1312067,10.218232 L47.7830791,10.218232 C50.0970874,10.218232 51.2183079,11.0883978 51.2183079,12.5552486 L51.2183079,12.6049724 C51.2183079,14.1712707 50.0016644,14.9917127 47.9977809,14.9917127 Z M62.740638,17.8259669 C63.5517337,17.8259669 64.2196949,17.1546961 64.2196949,16.3093923 L64.2196949,3.13259669 L68.2990291,3.13259669 C69.0385576,3.13259669 69.6349515,2.48618785 69.6349515,1.71546961 C69.6349515,0.944751381 69.0385576,0.298342541 68.2990291,0.298342541 L57.2061026,0.298342541 C56.4427184,0.298342541 55.8463245,0.944751381 55.8463245,1.71546961 C55.8463245,2.48618785 56.4427184,3.13259669 57.2061026,3.13259669 L61.2615811,3.13259669 L61.2615811,16.3093923 C61.2615811,17.1546961 61.9295423,17.8259669 62.740638,17.8259669 Z M79.4635229,18 C82.1592233,18 83.948405,17.1049724 85.5228849,15.6629834 C85.7852982,15.4143646 86,15.0414365 86,14.5690608 C86,13.7983425 85.3558946,13.1519337 84.6163662,13.1519337 C84.2585298,13.1519337 83.948405,13.301105 83.7337032,13.5 C82.5170596,14.5690608 81.3242718,15.1657459 79.5589459,15.1657459 C76.3622746,15.1657459 74.0482663,12.4060773 74.0482663,9 L74.0482663,8.95027624 C74.0482663,5.5441989 76.3861304,2.80939227 79.5589459,2.80939227 C81.1572816,2.80939227 82.3977809,3.40607735 83.5428571,4.37569061 C83.7337032,4.52486188 84.0199723,4.67403315 84.4255201,4.67403315 C85.2366158,4.67403315 85.8807212,4.02762431 85.8807212,3.18232044 C85.8807212,2.63535912 85.6183079,2.21270718 85.3081831,1.9640884 C83.852982,0.79558011 82.1592233,0 79.5828017,0 C74.5253814,0 70.9708738,4.05248619 70.9708738,9 L70.9708738,9.04972376 C70.9708738,14.0469613 74.5969487,18 79.4635229,18 Z",id:"123BTC"})})})})})},be=n.p+"static/media/domain_select.887b41f7.svg",fe="https://123btc.org/",ge=function(e){var t=e.language,n=e.onChangeLanguage,r=e.tagList,o=Object(i.useState)(!1),s=Object(Q.a)(o,2),l=s[0],d=s[1],j=c.a.useState(null),u=Object(Q.a)(j,2),h=u[0],b=u[1],f={zh:{ethTitle:"\u4ee5\u592a\u574a\u751f\u6001\u8d44\u6e90\u5bfc\u822a",btcTitle:"\u6bd4\u7279\u5e01\u751f\u6001\u8d44\u6e90\u5bfc\u822a"},en:{ethTitle:"A Portal to Ethereum Ecosystem",btcTitle:"A Portal to Bitcoin Ecosystem"}},g=function(e){return f[t][e]},p=function(e){b(e.currentTarget)},O=function(){b(null)},C=function(){return Object(a.jsx)(ie.a,{disableElevation:!0,variant:"outlined",onClick:function(){var e="zh"===t?"en":"zh";window.localStorage.setItem("i18nextLng",e),document.cookie="i18next=".concat(e,";path=/;domain=.eth123.org"),document.cookie="i18next=".concat(e,";path=/;domain=.123btc.org"),n(e)},size:"small",startIcon:Object(a.jsx)(le.a,{}),className:"languageBtn",style:{textTransform:"none"},children:Object(a.jsx)(I,{fontWeight:"400",className:"languageBtn_text",children:"zh"===t?"English":"\u4e2d\u6587"})})};return Object(a.jsxs)(I,{children:[Object(a.jsx)(m.a,{smDown:!0,children:Object(a.jsx)(I,{mb:3.75,backgroundColor:"#fff",boxShadow:"0 2px 8px #f0f1f2",children:Object(a.jsx)(x.a,{children:Object(a.jsxs)(I,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",py:2,children:[Object(a.jsxs)(I,{display:"flex",flexDirection:"row",children:[Object(a.jsx)("a",{href:"/",style:{textDecoration:"none"},children:Object(a.jsxs)(I,{position:"relative",children:[Object(a.jsx)(ue,{}),Object(a.jsx)(I,{mt:.5,fontSize:14,color:"#999",children:g("ethTitle")}),Object(a.jsx)(I,{position:"absolute",bottom:-16,left:0,height:4,width:"100%",borderRadius:2,backgroundColor:"#FF7828"})]})}),Object(a.jsx)("a",{href:fe,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:Object(a.jsxs)(I,{ml:4.5,pl:4.5,borderLeft:"1px solid rgba(0, 0, 0, .1)",children:[Object(a.jsx)(he,{}),Object(a.jsx)(I,{mt:.5,fontSize:14,color:"#999",children:g("btcTitle")})]})})]}),Object(a.jsx)(I,{children:C()})]})})})}),Object(a.jsxs)(m.a,{mdUp:!0,children:[Object(a.jsxs)(I,{mb:2,py:1.25,backgroundColor:"#fff",children:[Object(a.jsx)(x.a,{children:Object(a.jsxs)(I,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:30,children:[Object(a.jsx)(I,{display:"flex",cursor:"pointer",onClick:function(){d(!0)},children:Object(a.jsx)(je.a,{})}),Object(a.jsxs)(I,{display:"flex",flexDirection:"row",alignItems:"center",children:[Object(a.jsx)(ue,{}),Object(a.jsx)(ce.a,{"aria-label":"more","aria-controls":"domain-menu","aria-haspopup":"true",onClick:p,children:Object(a.jsx)("img",{src:be,alt:"",height:24})})]}),Object(a.jsx)(I,{width:32,children:Object(a.jsx)(I,{position:"absolute",top:10,right:16,children:C()})})]})}),Object(a.jsx)(oe.a,{id:"domain-menu",anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:O,children:Object(a.jsx)(se.a,{onClick:function(){window.open(fe),O()},children:"123BTC"})})]}),Object(a.jsx)(A,{tagList:r,language:t,drawerVisible:l,onClose:function(){d(!1)}},"NavBar-".concat((r||[]).length))]})]})},xe=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.footerVisible,n=e.t;return t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(I,{display:"flex",flexDirection:"column",alignItems:"center",className:w()("footer",F.a.footer),children:[Object(a.jsx)(I,{className:F.a.footer_title,children:Object(a.jsx)(W.a,{variant:"h5",className:"footer_title",children:n("more")})}),Object(a.jsx)(ie.a,{variant:"contained",className:"submitBtn",color:"primary",style:{textTransform:"none"},onClick:function(){window.open("https://github.com/SparkPoolOfficial/eth123.org/issues")},children:n("submit")})]}),Object(a.jsxs)(I,{display:"flex",flexDirection:"row",justifyContent:"center",className:F.a.footer_sponsored,children:[Object(a.jsx)("div",{children:"Sponsored By\xa0"}),Object(a.jsx)("div",{style:{color:"#ff7828"},children:Object(a.jsx)(C.a,{href:"https://www.sparkpool.com",underline:"none",children:"SparkPool"})})]})]}):null}}]),n}(i.PureComponent),me=n(81),pe=n.n(me).a.create();function Oe(e,t){return pe({method:"get",url:e,params:t})}pe.interceptors.response.use((function(e){return e.data}));n(123);var Ce=Object(p.a)({palette:{primary:{main:"#ff7828",contrastText:"#fff"}}}),ve={zh:{subTitle:"\u4ee5\u592a\u574a\u751f\u6001\u8d44\u6e90\u5bfc\u822a",more:"\u4e00\u8d77\u53d1\u73b0\u66f4\u591a\u65b0\u4ea7\u54c1",submit:"\u63d0\u3000\u4ea4"},en:{subTitle:"A Portal to Ethereum Ecosystem",more:"Discover more new products",submit:"Submit"}},Le=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={tagList:[],navList:[],language:P(),drawerVisible:!1,footerVisible:!1},e.fetchTagList=function(){var t=Object(j.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Oe("".concat(R,"/main/tagList.json"));case 2:(r=t.sent)&&(r||[]).length&&e.setState({tagList:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fetchNavList=Object(j.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Oe("".concat(R,"/main/resource.json"));case 2:(n=t.sent)&&(n||[]).length&&e.setState({navList:n,footerVisible:!0});case 4:case"end":return t.stop()}}),t)}))),e.translate=function(t){var n=e.state.language;return ve[n][t]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchTagList(),this.fetchNavList()}},{key:"render",value:function(){var e=this,t=this.state,n=t.navList,r=t.tagList,i=t.footerVisible,c=t.language,o=t.drawerVisible,s=this.translate;return Object(a.jsxs)(O.a,{theme:Ce,children:[Object(a.jsx)(g.a,{}),Object(a.jsx)(ge,{tagList:r,language:c,onChangeLanguage:function(t){e.setState({language:t})}}),Object(a.jsx)(x.a,{children:Object(a.jsxs)(I,{display:"flex",flexDirection:"row",children:[Object(a.jsx)(A,{tagList:r,language:c,drawerVisible:o,onClose:function(){e.setState({drawerVisible:!1})}},"NavBar-".concat((r||[]).length)),Object(a.jsx)(I,{flex:"1"}),Object(a.jsxs)(I,{className:"tagContent",children:[Object(a.jsx)(U,{navList:n,tagList:r,language:c}),Object(a.jsx)(re,{navList:n,tagList:r,language:c})]},(n||[]).length),Object(a.jsx)(m.a,{lgUp:!0,children:Object(a.jsx)(I,{flex:"1"})})]})}),Object(a.jsx)(xe,{footerVisible:i,t:s})]})}}]),n}(c.a.Component);n(124);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Le,{})}),document.getElementById("root"))},14:function(e,t,n){e.exports={header:"Box_header__2eM58",header_title:"Box_header_title__KkvuV",header_logo:"Box_header_logo__1DwV-",cardSkeleton:"Box_cardSkeleton__1-4a5",cardSkeleton_card:"Box_cardSkeleton_card__2zuX2",itemSkeleton:"Box_itemSkeleton__3T6Bj",navItemCard:"Box_navItemCard__2ba-h",navItemCard_card:"Box_navItemCard_card__2Go7C",cardItem:"Box_cardItem__2TlOT",footer:"Box_footer__3nxP2",footer_title:"Box_footer_title__6Y7qN",footer_sponsored:"Box_footer_sponsored__2-_4u"}},29:function(e,t,n){e.exports={NavBa_fixed:"styles_NavBa_fixed__EbRnh",link:"styles_link__3NeEE",NavBar:"styles_NavBar__34su-",link_active:"styles_link_active__13com",drawer_link:"styles_drawer_link___-O06",drawer_link_active:"styles_drawer_link_active__1h1PE"}}},[[125,1,2]]]);
//# sourceMappingURL=main.e4f6ce7e.chunk.js.map