(this.webpackJsonpsurfapp=this.webpackJsonpsurfapp||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),i=(a(96),a(49)),o=a(30),m=a.n(o),s=a(40),u=a(18),p=a(149),d=a(150),E=a(156),h=a(153);a(98);var g=function(e){return r.a.createElement(E.a,{id:"combo-box",options:[{title:"Linda Mar",id:"819",latitude:37.598932,longitude:-122.501738},{title:"Ocean Beach",id:"255",latitude:37.759473,longitude:-122.5107}],getOptionLabel:function(e){return e.title},style:{width:200},renderInput:function(e){return r.a.createElement(h.a,Object.assign({},e,{label:"Surf Spots"}))},onChange:function(t,a){e.parentCallback(a)},getOptionSelected:function(e,t){return e.title===t.title}})};a(102);var f=function(e){var t=Object(n.useState)("Default"),a=Object(u.a)(t,2),c=a[0],l=a[1];return r.a.createElement(p.a,{item:!0,xs:12,align:"center"},r.a.createElement("p",null,"Type in where you want to go, see if you should"),r.a.createElement("h1",null,"Gnar Report"),r.a.createElement(g,{parentCallback:function(e){l(e)}}),r.a.createElement(d.a,{variant:"contained",color:"primary",style:{margin:"20px"},onClick:function(){return e.onHeaderChange(c)}},"Lets Go"))},y=a(155),w=a(70),x=a.n(w),b=a(72),v=a.n(b),j=a(71),k=a.n(j),S=a(148),O=a(151),I=a(157),D=a(73),H=a.n(D),R=a(152),C=a(74),N=a.n(C),B=a(33),W=a(62),z=a(63),M=a(76),T=a(75),A=function(e){Object(M.a)(a,e);var t=Object(T.a)(a);function a(){return Object(W.a)(this,a),t.apply(this,arguments)}return Object(z.a)(a,[{key:"_redraw",value:function(e){var t=e.width,a=e.height,n=e.ctx,r=e.isDragging,c=e.project,l=(e.unproject,this.props),i=l.points,o=l.color,m=void 0===o?"black":o,s=l.lineWidth,u=void 0===s?2:s,p=l.renderWhileDragging,d=void 0===p||p;n.clearRect(0,0,t,a),n.globalCompositeOperation="lighter",!d&&r||!i||(n.lineWidth=u,n.strokeStyle=m,n.beginPath(),i.forEach((function(e){var t=c([e[0],e[1]]);n.lineTo(t[0],t[1])})),n.stroke())}},{key:"render",value:function(){return r.a.createElement(B.a,{redraw:this._redraw.bind(this)})}}]),a}(n.PureComponent),P=a(64),Z=a.n(P),G=a(65),J=a.n(G),L=a(66),X=a.n(L),Y=a(67),_=a.n(Y),F=a(68),Q=a.n(F),V=a(69),U=a.n(V);a(104);function $(e){var t=new Date(1e3*e),a=t.getHours()>12?t.getHours()-12:t.getHours(),n=t.getHours()>=12?"PM":"AM";return"".concat(a," ").concat(n)}function q(e){switch(e){case"18":case"28":case"9":return J.a;case"10":case"20":return Q.a;case"22":return U.a;case"21":case"23":case"24":return _.a;case"1":case"11":case"19":case"2":case"30":case"31":case"32":case"33":case"34":case"35":return X.a;default:return"No ID found"}}function K(e,t){for(var a=[],n=0;n<e;n++)a.push(r.a.createElement(x.a,{style:{color:"#64b5f6"}}));for(var c=0;c<t;c++)a.push(r.a.createElement(k.a,{style:{color:"#90caf9"}}));for(;a.length<5;)a.push(r.a.createElement(v.a,null));return r.a.createElement("div",null,a)}function ee(e){return r.a.createElement(H.a,{style:{transform:"rotate(".concat(e+"deg",")"),color:"black"}})}function te(e){return r.a.createElement(N.a,{style:{transform:"rotate(".concat(e+"deg",")"),color:"black"}})}var ae=function(e){var t=e.pushMap,a=e.surfSpotInfo;console.log(a);var c=Object(n.useState)({latitude:0,longitude:0,width:"100%",height:"100%",zoom:10}),l=Object(u.a)(c,2),i=l[0],o=l[1],d=Object(n.useState)({latitude:0,longitude:0}),E=Object(u.a)(d,2),h=E[0],g=E[1],f=Object(n.useState)(),w=Object(u.a)(f,2),x=w[0],b=w[1],v=Object(n.useState)(),j=Object(u.a)(v,2),k=j[0],D=j[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(m.a.mark((function e(t,a,n,r){var c,l,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="https://api.mapbox.com/directions/v5/mapbox/driving-traffic/".concat(t,",").concat(a,";").concat(n,",").concat(r,"?steps=true&geometries=geojson&access_token=").concat("pk.eyJ1IjoiZW56b2gzNDIzIiwiYSI6ImNrYmhobXRnZDA1ZGoyeXA5czF1d2dmZ2oifQ.Nx7d2ojudoubk4Hu4ag7pA"),e.next=4,fetch(c);case 4:return l=e.sent,e.next=7,l.json();case 7:i=e.sent,b(i.routes[0].geometry.coordinates),D(Math.floor(i.routes[0].duration/60)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(t,a,n,r){e.apply(this,arguments)}(h.longitude,h.latitude,t.longitude,t.latitude)}),[h.longitude,h.latitude,t.longitude,t.latitude]),Object(n.useEffect)((function(){o({latitude:t.latitude,longitude:t.longitude,width:"100%",height:"100%",zoom:10})}),[t.latitude,t.longitude]),r.a.createElement(y.a,{className:"Box"},r.a.createElement(p.a,{item:!0,container:!0,xs:12,className:"Main-Grid",style:{padding:"15px 15px",backgroundColor:"white",margin:"auto",width:"95%",boxShadow:"0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)",borderRadius:"16px"}},r.a.createElement(p.a,{item:!0,container:!0,xs:3},r.a.createElement(p.a,{item:!0,xs:12,className:"Card-Item",style:{marginBottom:"20px",height:"300px"}},r.a.createElement("h1",null,"Traffic Report"),r.a.createElement("h2",null,"Time to Destination:"),r.a.createElement("h2",null,k," Minutes")),r.a.createElement(p.a,{item:!0,xs:12,style:{},className:"MapBox"},r.a.createElement(B.d,Object.assign({mapboxApiAccessToken:"pk.eyJ1IjoiZW56b2gzNDIzIiwiYSI6ImNrYmhobXRnZDA1ZGoyeXA5czF1d2dmZ2oifQ.Nx7d2ojudoubk4Hu4ag7pA"},i,{onViewportChange:function(e){return o(e)},height:"400px"}),r.a.createElement(A,{points:x}),r.a.createElement(B.b,{positionOptions:{enableHighAccuracy:!0},trackUserLocation:!1,onViewportChange:function(e){return g({latitude:e.latitude,longitude:e.longitude})},auto:!0}),t.longitude?r.a.createElement(B.c,{latitude:t.latitude,longitude:t.longitude,zoom:i.zoom},r.a.createElement("img",{src:Z.a,alt:"Destination",height:"20px",width:"20px"})):r.a.createElement("div",null)))),r.a.createElement(p.a,{item:!0,container:!0,xs:9,style:{padding:"15px 15px"},justify:"space-between"},r.a.createElement(p.a,{item:!0,xs:12,style:{}},r.a.createElement("h1",null,"Surf Report"),r.a.createElement("h3",null,function(e){var t=new Date(1e3*e),a=t.getDate(),n=t.getMonth();return 0===n?"1/".concat(a):"".concat(n,"/").concat(a)}(a[4].localTimestamp))),r.a.createElement(p.a,{container:!0,item:!0,xs:6,style:{maxWidth:"49.5%"},className:"Card-Item"},r.a.createElement(p.a,{item:!0,xs:4},r.a.createElement("p",null,$(a[4].localTimestamp)),r.a.createElement("img",{src:q(a[4].condition.weather),alt:"",height:"100px",width:"100px"}),r.a.createElement("p",null,a[4].condition.temperature+"f")),r.a.createElement(p.a,{container:!0,item:!0,xs:8},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"".concat(a[4].swell.minBreakingHeight,"-").concat(a[4].swell.maxBreakingHeight,"ft"),style:{float:"left"}}),K(a[4].solidRating,a[4].fadedRating)),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Primary Swell"}),r.a.createElement(I.a,{primary:"".concat(a[4].swell.components.primary.height,"ft at ").concat(a[4].swell.components.primary.period,"s")}),r.a.createElement(R.a,null,ee(a[4].swell.components.primary.direction))),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Secondary Swell"}),r.a.createElement(I.a,{primary:"".concat(a[4].swell.components.secondary.height,"ft at ").concat(a[4].swell.components.secondary.period,"s")}),r.a.createElement(R.a,null,ee(a[4].swell.components.secondary.direction))),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Wind Direction"}),r.a.createElement(I.a,{primary:"".concat(a[4].wind.speed).concat(a[4].wind.unit)}),r.a.createElement(R.a,null,te(a[4].wind.direction))))))),r.a.createElement(p.a,{container:!0,item:!0,xs:6,style:{maxWidth:"49.5%"},className:"Card-Item"},r.a.createElement(p.a,{item:!0,xs:4},r.a.createElement("p",null,$(a[5].localTimestamp)),r.a.createElement("img",{src:q(a[5].condition.weather),alt:"",height:"100px",width:"100px"}),r.a.createElement("p",null,a[5].condition.temperature+"f")),r.a.createElement(p.a,{container:!0,item:!0,xs:8},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"".concat(a[5].swell.minBreakingHeight,"-").concat(a[5].swell.maxBreakingHeight,"ft"),style:{float:"left"}}),K(a[5].solidRating,a[5].fadedRating)),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Primary Swell"}),r.a.createElement(I.a,{primary:"".concat(a[5].swell.components.primary.height,"ft at ").concat(a[5].swell.components.primary.period,"s")}),r.a.createElement(R.a,null,ee(a[5].swell.components.primary.direction))),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Secondary Swell"}),r.a.createElement(I.a,{primary:"".concat(a[5].swell.components.secondary.height,"ft at ").concat(a[5].swell.components.secondary.period,"s ")}),r.a.createElement(R.a,null,ee(a[5].swell.components.secondary.direction))),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Wind Direction"}),r.a.createElement(I.a,{primary:"".concat(a[5].wind.speed,"mph")}),r.a.createElement(R.a,null,te(a[5].wind.direction))))))),r.a.createElement(p.a,{container:!0,item:!0,xs:6,style:{maxWidth:"49.5%"},className:"Card-Item"},r.a.createElement(p.a,{item:!0,xs:4},r.a.createElement("p",null,$(a[6].localTimestamp)),r.a.createElement("img",{src:q(a[6].condition.weather),alt:"",height:"100px",width:"100px"}),r.a.createElement("p",null,a[6].condition.temperature+"f")),r.a.createElement(p.a,{container:!0,item:!0,xs:8},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"".concat(a[6].swell.minBreakingHeight,"-").concat(a[6].swell.maxBreakingHeight,"ft"),style:{float:"left"}}),K(a[6].solidRating,a[6].fadedRating)),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Primary Swell"}),r.a.createElement(I.a,{primary:"".concat(a[6].swell.components.primary.height,"ft at ").concat(a[6].swell.components.primary.period,"s ")}),r.a.createElement(R.a,null,ee(a[6].swell.components.primary.direction))),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Secondary Swell"}),r.a.createElement(I.a,{primary:"".concat(a[6].swell.components.secondary.height,"ft at ").concat(a[6].swell.components.secondary.period,"s")}),r.a.createElement(R.a,null,ee(a[6].swell.components.secondary.direction))),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Wind Direction"}),r.a.createElement(I.a,{primary:"".concat(a[6].wind.speed,"mph")}),r.a.createElement(R.a,null,te(a[6].wind.direction))))))),r.a.createElement(p.a,{container:!0,item:!0,xs:6,style:{maxWidth:"49.5%"},className:"Card-Item"},r.a.createElement(p.a,{item:!0,xs:4},r.a.createElement("p",null,$(a[7].localTimestamp)),r.a.createElement("img",{src:q(a[7].condition.weather),alt:"",height:"100px",width:"100px"}),r.a.createElement("p",null,a[7].condition.temperature+"f")),r.a.createElement(p.a,{container:!0,item:!0,xs:8},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"".concat(a[7].swell.minBreakingHeight,"-").concat(a[7].swell.maxBreakingHeight,"ft"),style:{float:"left"}}),K(a[7].solidRating,a[7].fadedRating)),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Primary Swell"}),r.a.createElement(I.a,{primary:"".concat(a[7].swell.components.primary.height,"ft at ").concat(a[7].swell.components.primary.period,"s")}),r.a.createElement(R.a,null,ee(a[7].swell.components.primary.direction))),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Secondary Swell"}),r.a.createElement(I.a,{primary:"".concat(a[7].swell.components.secondary.height,"ft at ").concat(a[7].swell.components.secondary.period,"s")}),r.a.createElement(R.a,null,ee(a[7].swell.components.secondary.direction))),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Wind Direction"}),r.a.createElement(I.a,{primary:"".concat(a[7].wind.speed,"mph")}),r.a.createElement(R.a,null,te(a[7].wind.direction))))))),r.a.createElement(p.a,{container:!0,item:!0,xs:12,style:{},className:"Card-Item"},r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement("p",null,$(a[8].localTimestamp)),r.a.createElement("img",{src:q(a[8].condition.weather),alt:"",height:"100px",width:"100px"}),r.a.createElement("p",null,a[8].condition.temperature+"f")),r.a.createElement(p.a,{container:!0,item:!0,xs:6},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"".concat(a[8].swell.minBreakingHeight,"-").concat(a[8].swell.maxBreakingHeight,"ft"),style:{float:"left"}}),K(a[8].solidRating,a[8].fadedRating)),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Primary Swell"}),r.a.createElement(I.a,{primary:"".concat(a[8].swell.components.primary.height,"ft at ").concat(a[8].swell.components.primary.period,"s")}),r.a.createElement(R.a,null,ee(a[8].swell.components.primary.direction))),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Secondary Swell"}),r.a.createElement(I.a,{primary:"".concat(a[8].swell.components.secondary.height,"ft at ").concat(a[8].swell.components.secondary.period,"s")}),r.a.createElement(R.a,null,ee(a[8].swell.components.secondary.direction))),r.a.createElement(O.a,null,r.a.createElement(I.a,{primary:"Wind Direction"}),r.a.createElement(I.a,{primary:"".concat(a[8].wind.speed,"mph")}),r.a.createElement(R.a,null,te(a[8].wind.direction))))))))))};a(106);var ne=function(e){var t=e.pushSurfSpot,a=e.pushMapInfo;return r.a.createElement(ae,{pushMap:a,surfSpotInfo:t})};a(107);var re=function(){var e=Object(n.useState)("Default"),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),o=Object(u.a)(l,2),d=o[0],E=o[1],h=Object(n.useState)({latitude:0,longitude:0,width:"100%",height:"100%",zoom:10}),g=Object(u.a)(h,2),y=g[0],w=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://morning-refuge-88650.herokuapp.com/",t="http://magicseaweed.com/api/".concat("0caa0348eefdd152237d5cf143d22e35","/forecast/?spot_id=").concat(a.id,"&units=us&fields=timestamp,fadedRating,localTimestamp,solidRating,condition.*,swell.*, wind.*"),e.next=5,fetch("https://morning-refuge-88650.herokuapp.com/"+t);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,E(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{container:!0,spacing:2},r.a.createElement(f,{onHeaderChange:function(e){c(e),w(Object(i.a)(Object(i.a)({},y),{},{latitude:e.latitude,longitude:e.longitude}))}}),d[0]?r.a.createElement(ne,{pushSurfSpot:d,pushMapInfo:y}):r.a.createElement("div",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){e.exports=a.p+"static/media/map.26afe40b.svg"},65:function(e,t,a){e.exports=a.p+"static/media/thunder.e1e508b1.svg"},66:function(e,t,a){e.exports=a.p+"static/media/cloud-sun.7598a5c2.svg"},67:function(e,t,a){e.exports=a.p+"static/media/rain.92c2ac11.svg"},68:function(e,t,a){e.exports=a.p+"static/media/cloudynew.f2b049c6.svg"},69:function(e,t,a){e.exports=a.p+"static/media/drizzle.1413091d.svg"},91:function(e,t,a){e.exports=a(108)},96:function(e,t,a){},98:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.3d2e56c5.chunk.js.map