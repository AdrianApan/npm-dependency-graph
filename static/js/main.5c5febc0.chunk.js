(this["webpackJsonpnpm-dependency-graph"]=this["webpackJsonpnpm-dependency-graph"]||[]).push([[0],{1132:function(e,t,a){},1150:function(e,t,a){},1152:function(e,t,a){},1262:function(e,t,a){},1299:function(e,t,a){},1300:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(57),s=a.n(c),o=a(92);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(383);var i=a(1312),l=(a(384),a(26)),u=a(65),m=a(1316),p=a(343),f=a.n(p),d=a(1313),h=a(1311),b=a(1301),g=a(1315),v=a(81),j=a(78),O=(a(1132),{bottom:30,right:20}),E=a(116),w=a(35),k=a.n(w),y=a(63),N=a(364),x=a(79),S=a.n(x);var P=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!1),o=Object(l.a)(s,2),i=o[0],u=o[1],m=Object(n.useState)(""),p=Object(l.a)(m,2),f=p[0],d=p[1],h=Object(n.useState)(null),b=Object(l.a)(h,2),g=b[0],v=b[1],j=Object(n.useState)(null),O=Object(l.a)(j,2),w=O[0],x=O[1],P=Object(n.useState)(null),C=Object(l.a)(P,2),M=C[0],D=C[1],R=Object(n.useState)(!0),W=Object(l.a)(R,2),B=W[0],F=W[1],J="https://registry.npmjs.org";function T(){return(T=Object(y.a)(k.a.mark((function t(){var a,n,r,c=arguments;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>0&&void 0!==c[0]?c[0]:[],n=c.length>1&&void 0!==c[1]?c[1]:20,t.next=4,S()("".concat(J,"/-/v1/search?text=").concat(e,"&from=").concat(n));case 4:return r=t.sent,t.abrupt("return",new Promise((function(e){setTimeout((function(){for(var t=[],c=n;c<n+20;c++)r.data.objects.length>0?t=Object(E.a)(a).concat(r.data.objects):(t=Object(E.a)(a),F(!1));e(t)}),1e3)})));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(n.useEffect)((function(){""!==e&&function(){var t=Object(y.a)(k.a.mark((function t(){var a,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Date.now(),c(!0),D(null),t.next=6,S()("".concat("https://morning-cove-30121.herokuapp.com","/").concat(J,"/-/v1/search?text=").concat(e));case 6:n=t.sent,D(n.data.objects),x(n.data.total),c(!1),v((Date.now()-a)/1e3),n.data.objects.length<20&&F(!1),t.next=20;break;case 14:t.prev=14,t.t0=t.catch(0),u(!0),d("We cannot fetch the data at the moment. Please try again later."),c(!1),F(!1);case 20:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var L=Object(N.a)({loading:r,hasNextPage:B,onLoadMore:function(){c(!0),function(){return T.apply(this,arguments)}(M,M.length).then((function(e){c(!1),D(e)}))},scrollContainer:"window"});return{loading:r,error:i,errorMsg:f,loadTime:g,totalResults:w,results:M,infiniteRef:L,setHasNextPage:F}};a(1150);var C=function(e){var t=e.data,a=t.package,n=a.name,c=a.description,s=a.version,i=a.keywords;return r.a.createElement(o.b,{to:{pathname:"/".concat(n),state:{packageName:n}}},r.a.createElement(j.Card,{className:"item"},r.a.createElement("h3",null,n,r.a.createElement("span",{className:"version"}," ",s),t.searchScore>1&&r.a.createElement("div",{className:"exact-match"},"exact match")),r.a.createElement("p",{className:"description"},c),i&&r.a.createElement("ul",{className:"keywords"},i.map((function(e){return r.a.createElement("li",{key:Object(m.a)()},e)})))))};a(1152);var M=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!1),o=Object(l.a)(s,2),i=o[0],u=o[1],m=Object(n.useState)(!1),p=Object(l.a)(m,2),f=p[0],d=p[1],h=Object(n.useState)(""),b=Object(l.a)(h,2),g=b[0],v=b[1];return Object(n.useEffect)((function(){(function(){var t=Object(y.a)(k.a.mark((function t(){var a,n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(!0),t.next=4,S()("".concat("https://morning-cove-30121.herokuapp.com","/").concat("https://registry.npmjs.org","/").concat(e));case 4:a=t.sent,n=a.data&&Object.entries(a.data).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return"dist-tags"===a?n.latest:null})).filter((function(e){return null!==e})).toString(),r=a.data&&Object.entries(a.data.versions).filter((function(e){var t=Object(l.a)(e,2),a=t[0];t[1];return a===n}))[0][1],c(r),u(!1),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),d(!0),v("We cannot fetch the data at the moment. Please try again later."),u(!1);case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),{loading:i,error:f,errorMsg:g,apiData:r}},D=a(348),R=a.n(D),W=a(1310);a(1262);function B(e){return new Promise((function(t){return setTimeout(t,e)}))}var F=a(349);var J=function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!1),o=Object(l.a)(s,2),i=o[0],u=o[1],m=Object(n.useState)(0),p=Object(l.a)(m,2),f=p[0],d=p[1],h=Object(n.useState)(!1),b=Object(l.a)(h,2),g=b[0],v=b[1],j=Object(n.useState)(""),O=Object(l.a)(j,2),w=O[0],N=O[1];Object(n.useEffect)((function(){x(e)}),[e]);var x=function(){var e=Object(y.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.delegateYield(k.a.mark((function e(){var a,n,r,s,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[{id:t,label:t,title:t}],n=new Set,r=[t],s=new Set,o=k.a.mark((function e(){var t,c,o,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),d(r.length),t=r.shift(),e.next=5,P(t);case 5:c=e.sent,o=c.parent,i=c.children,s.add(o),i.forEach((function(e){var t={id:e,label:e,title:e,color:Object(F.randomColor)()},c={from:o,to:e};n.add(c),s.has(e)||(r.push(e),a.push(t),s.add(e))}));case 10:case"end":return e.stop()}}),e)}));case 6:if(!(r.length>0)){e.next=10;break}return e.delegateYield(o(),"t0",8);case 8:e.next=6;break;case 10:c({nodes:a,edges:Object(E.a)(n)}),u(!1);case 12:case"end":return e.stop()}}),e)}))(),"t0",2);case 2:e.next=9;break;case 4:e.prev=4,e.t1=e.catch(0),v(!0),N("We cannot fetch the dependencies data. Please try again later."),u(!1);case 9:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(y.a)(k.a.mark((function e(t){var a,n,r,c,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S()("".concat("https://morning-cove-30121.herokuapp.com","/").concat("https://registry.npmjs.org","/").concat(t));case 3:return a=e.sent,n=a.data&&Object.entries(a.data).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return"dist-tags"===a?n.latest:null})).filter((function(e){return null!==e})).toString(),r=a.data&&Object.entries(a.data.versions).filter((function(e){var t=Object(l.a)(e,2),a=t[0];t[1];return a===n}))[0][1],c=[],r.dependencies&&Object.entries(r.dependencies).map((function(e){var t=Object(l.a)(e,2),a=t[0];t[1];return c.push(a),null})),s={parent:t,children:c},e.next=11,B(300);case 11:return e.abrupt("return",s);case 14:e.prev=14,e.t0=e.catch(0),v(!0),N("We cannot fetch the dependencies data. Please try again later."),u(!1);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return{loading:i,progress:f,error:g,errorMsg:w,graph:r}},T={height:"500px",physics:{enabled:!1},interaction:{hideEdgesOnDrag:!1},layout:{hierarchical:!1},nodes:{font:{face:"Roboto Mono",color:"#333333",multi:"html"},shape:"dot",size:7},edges:{color:{inherit:"from"},width:.3,smooth:{enabled:!0,type:"continuous"}}};var L=function(e){var t=e.packageName,a=J(t),n=a.loading,c=a.progress,s=a.error,o=a.errorMsg,i=a.graph;return r.a.createElement("div",{className:"dependecy-graph"},n&&r.a.createElement(W.a,{indeterminate:!0,active:!0,inline:"centered",content:"Remaining packages: ".concat(c),style:{margin:"20px 0"}}),s&&r.a.createElement(g.a,{error:!0,content:o}),!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return JSON.stringify(e)===JSON.stringify({})}(i)&&r.a.createElement(R.a,{graph:i,options:T}))};var z=function(){var e=Object(u.g)(),t=Object(u.h)(),a=Object(u.f)(),n=e.state?e.state.packageName:t.packageName,c=M(n),s=c.loading,o=c.error,i=c.errorMsg,l=c.apiData;return r.a.createElement(j.Card,{className:"details"},r.a.createElement("a",{href:"/",onClick:function(e){return function(e){e.preventDefault(),a.goBack()}(e)}},"\xab Back"),s&&r.a.createElement("p",{className:"loading"},"Loading..."),o&&r.a.createElement(g.a,{error:!0,content:i}),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,n," ",r.a.createElement("span",{className:"version"},l.version)),r.a.createElement("p",{className:"description"},l.description),l.keywords&&r.a.createElement("ul",{className:"keywords"},l.keywords.map((function(e,t){return r.a.createElement("li",{key:"".concat(e,"-").concat(t)},e)}))),r.a.createElement("h3",{className:"dependencies-heading"},"\u2192 dependencies"),r.a.createElement(L,{packageName:n})))};var H=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),i=o[0],p=o[1],E=P(a),w=E.loading,k=E.error,y=E.errorMsg,N=E.loadTime,x=E.totalResults,S=E.results,M=E.infiniteRef,D=E.setHasNextPage,R=Object(u.g)(),W=Object(u.f)();return Object(n.useEffect)((function(){R.state?(p(R.state.referrer),c(R.state.referrer)):p(a),R.search?(p(R.search.split("=")[1]),c(R.search.split("=")[1])):p(a)}),[R.state,R.search]),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.Card,{className:"search"},r.a.createElement(d.a,{onSubmit:function(e){return function(e){e.preventDefault(),W.push({pathname:"/",search:"?q=".concat(i),state:{referrer:i}}),D(!0)}(e)},className:"search-form",error:k},r.a.createElement(h.a,{action:r.a.createElement(b.a,{primary:!0,type:"submit",className:"search-button"},"Search"),fluid:!0,size:"large",icon:"search",iconPosition:"left",type:"text",value:i,placeholder:"enter npm package name",className:"search-input",onChange:function(e){return function(e){var t=e.target.value;p(t)}(e)}}),r.a.createElement(g.a,{error:!0,content:y}))),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},S&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"stats"},"Found ",x," results (",N," seconds)"),r.a.createElement("div",{className:"results",ref:M},S.length>0?S.map((function(e){return r.a.createElement(C,{key:Object(m.a)(),data:e})})):r.a.createElement(j.Card,{className:"no-results"},r.a.createElement("p",null,"No results found.")))),w&&r.a.createElement("p",{className:"loading"},"Loading...")),r.a.createElement(u.a,{path:"/:packageName"},r.a.createElement(z,null))),r.a.createElement(f.a,{showUnder:480,style:O},r.a.createElement(v.a,{name:"angle double up",className:"scroll"})))};var I,Y=function(){return r.a.createElement(i.a,{className:"app"},r.a.createElement(H,null))};a(1299);s.a.render(r.a.createElement(o.a,{basename:(I=window.location.pathname,I.substr(0,I.lastIndexOf("/")))},r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},250:function(e,t){},378:function(e,t,a){e.exports=a(1300)},384:function(e,t,a){},747:function(e,t){},748:function(e,t){}},[[378,1,2]]]);
//# sourceMappingURL=main.5c5febc0.chunk.js.map