(this.webpackJsonpsurfapp=this.webpackJsonpsurfapp||[]).push([[0],{100:function(e,i,t){},101:function(e,i,t){},102:function(e,i,t){"use strict";t.r(i);var a=t(0),n=t.n(a),r=t(15),o=t.n(r),c=(t(90),t(49)),s=t(30),p=t.n(s),l=t(40),m=t(18),d=t(143),u=t(144),h=t(150),g=t(147);t(92);var y=function(e){return n.a.createElement(h.a,{id:"combo-box",options:[{title:"Linda Mar",id:"819",latitude:37.598932,longitude:-122.501738},{title:"Ocean Beach",id:"255",latitude:37.759473,longitude:-122.5107}],getOptionLabel:function(e){return e.title},style:{width:200},renderInput:function(e){return n.a.createElement(g.a,Object.assign({},e,{label:"Surf Spots"}))},onChange:function(i,t){e.parentCallback(t)},getOptionSelected:function(e,i){return e.title===i.title}})};t(96);var w=function(e){var i=Object(a.useState)("Default"),t=Object(m.a)(i,2),r=t[0],o=t[1];return n.a.createElement(d.a,{item:!0,xs:12,align:"center"},n.a.createElement("p",null,"Type in where you want to go, see if you should"),n.a.createElement("h1",null,"Gnar Report"),n.a.createElement(y,{parentCallback:function(e){o(e)}}),n.a.createElement(u.a,{variant:"contained",color:"primary",style:{margin:"20px"},onClick:function(){return e.onHeaderChange(r)}},"Lets Go"))},D=t(149),E=t(64),f=t.n(E),H=t(66),C=t.n(H),S=t(65),x=t.n(S),P=t(142),R=t(145),k=t(151),b=t(67),W=t.n(b),T=t(146),v=t(68),B=t.n(v),U=t(33),j=t(62),M=t(63),O=t(70),I=t(69),N=function(e){Object(O.a)(t,e);var i=Object(I.a)(t);function t(){return Object(j.a)(this,t),i.apply(this,arguments)}return Object(M.a)(t,[{key:"_redraw",value:function(e){var i=e.width,t=e.height,a=e.ctx,n=e.isDragging,r=e.project,o=(e.unproject,this.props),c=o.points,s=o.color,p=void 0===s?"black":s,l=o.lineWidth,m=void 0===l?2:l,d=o.renderWhileDragging,u=void 0===d||d;a.clearRect(0,0,i,t),a.globalCompositeOperation="lighter",!u&&n||!c||(a.lineWidth=m,a.strokeStyle=p,a.beginPath(),c.forEach((function(e){var i=r([e[0],e[1]]);a.lineTo(i[0],i[1])})),a.stroke())}},{key:"render",value:function(){return n.a.createElement(U.a,{redraw:this._redraw.bind(this)})}}]),t}(a.PureComponent);t(98);function z(e){switch(e){case"18":case"28":case"9":return"/Images/thunder.svg";case"10":case"20":return"/Images/cloudynew.svg";case"22":return"/Images/drizzle.svg";case"21":case"23":case"24":return"/Images/rain.svg";case"1":case"11":case"19":case"2":case"30":case"31":case"32":case"33":case"34":case"35":return"/Images/cloud-sun.svg";default:return"No ID found"}}function F(e,i){for(var t=[],a=0;a<e;a++)t.push(n.a.createElement(f.a,{style:{color:"#64b5f6"}}));for(var r=0;r<i;r++)t.push(n.a.createElement(x.a,{style:{color:"#90caf9"}}));for(;t.length<5;)t.push(n.a.createElement(C.a,null));return n.a.createElement("div",null,t)}function A(e){return n.a.createElement(W.a,{style:{transform:"rotate(".concat(e+"deg",")"),color:"black"}})}function Z(e){return n.a.createElement(B.a,{style:{transform:"rotate(".concat(e+"deg",")"),color:"black"}})}var G=function(e){var i=e.pushMap,t=e.pushDayMonth,r=e.pushTimespot,o=e.pushConditionRating,c=e.pushFadedRating,s=e.pushSolidRating,u=e.pushMinHeight,h=e.pushMaxHeight,g=e.pushUnit,y=e.pushPrimaryHeight,w=e.pushPrimaryPeriod,E=e.pushPrimaryDirection,f=e.pushSecondaryHeight,H=e.pushSecondaryPeriod,C=e.pushSecondaryDirection,S=e.pushWindSpeed,x=e.pushWindDirection,b=(e.pushWindChill,e.pushWindUnit),W=e.pushTemp,v=e.pushTimespot1,B=e.pushConditionRating1,j=e.pushFadedRating1,M=e.pushSolidRating1,O=e.pushMinHeight1,I=e.pushMaxHeight1,G=e.pushUnit1,J=e.pushPrimaryHeight1,L=e.pushPrimaryPeriod1,X=e.pushPrimaryDirection1,Y=e.pushSecondaryHeight1,_=e.pushSecondaryPeriod1,Q=e.pushSecondaryDirection1,V=e.pushWindSpeed1,$=e.pushWindDirection1,q=(e.pushWindChill1,e.pushWindUnit1,e.pushTemp1),K=e.pushTimespot2,ee=e.pushConditionRating2,ie=e.pushFadedRating2,te=e.pushSolidRating2,ae=e.pushMinHeight2,ne=e.pushMaxHeight2,re=e.pushUnit2,oe=e.pushPrimaryHeight2,ce=e.pushPrimaryPeriod2,se=e.pushPrimaryDirection2,pe=e.pushSecondaryHeight2,le=e.pushSecondaryPeriod2,me=e.pushSecondaryDirection2,de=e.pushWindSpeed2,ue=e.pushWindDirection2,he=(e.pushWindChill2,e.pushWindUnit2,e.pushTemp2),ge=e.pushTimespot3,ye=e.pushConditionRating3,we=e.pushFadedRating3,De=e.pushSolidRating3,Ee=e.pushMinHeight3,fe=e.pushMaxHeight3,He=(e.pushUnit3,e.pushPrimaryHeight3),Ce=e.pushPrimaryPeriod3,Se=e.pushPrimaryDirection3,xe=e.pushSecondaryHeight3,Pe=e.pushSecondaryPeriod3,Re=e.pushSecondaryDirection3,ke=e.pushWindSpeed3,be=e.pushWindDirection3,We=(e.pushWindChill3,e.pushWindUnit3,e.pushTemp3),Te=e.pushTimespot4,ve=e.pushConditionRating4,Be=e.pushFadedRating4,Ue=e.pushSolidRating4,je=e.pushMinHeight4,Me=e.pushMaxHeight4,Oe=(e.pushUnit4,e.pushPrimaryHeight4),Ie=e.pushPrimaryPeriod4,Ne=e.pushPrimaryDirection4,ze=e.pushSecondaryHeight4,Fe=e.pushSecondaryPeriod4,Ae=e.pushSecondaryDirection4,Ze=e.pushWindSpeed4,Ge=e.pushWindDirection4,Je=(e.pushWindChill4,e.pushWindUnit4,e.pushTemp4),Le=Object(a.useState)({latitude:0,longitude:0,width:"100%",height:"100%",zoom:10}),Xe=Object(m.a)(Le,2),Ye=Xe[0],_e=Xe[1],Qe=Object(a.useState)({latitude:0,longitude:0}),Ve=Object(m.a)(Qe,2),$e=Ve[0],qe=Ve[1],Ke=Object(a.useState)(),ei=Object(m.a)(Ke,2),ii=ei[0],ti=ei[1],ai=Object(a.useState)(),ni=Object(m.a)(ai,2),ri=ni[0],oi=ni[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(p.a.mark((function e(i,t,a,n){var r,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.mapbox.com/directions/v5/mapbox/driving-traffic/".concat(i,",").concat(t,";").concat(a,",").concat(n,"?steps=true&geometries=geojson&access_token=").concat("pk.eyJ1IjoiZW56b2gzNDIzIiwiYSI6ImNrYmhobXRnZDA1ZGoyeXA5czF1d2dmZ2oifQ.Nx7d2ojudoubk4Hu4ag7pA"),e.next=4,fetch(r);case 4:return o=e.sent,e.next=7,o.json();case 7:c=e.sent,ti(c.routes[0].geometry.coordinates),oi(Math.floor(c.routes[0].duration/60)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(i,t,a,n){e.apply(this,arguments)}($e.longitude,$e.latitude,i.longitude,i.latitude)}),[$e.longitude,$e.latitude,i.longitude,i.latitude]),Object(a.useEffect)((function(){_e({latitude:i.latitude,longitude:i.longitude,width:"100%",height:"100%",zoom:10})}),[i.latitude,i.longitude]),n.a.createElement(D.a,{className:"Box"},n.a.createElement(d.a,{item:!0,container:!0,xs:12,className:"Main-Grid",style:{padding:"15px 15px",backgroundColor:"white",margin:"auto",width:"95%",boxShadow:"0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)",borderRadius:"16px"}},n.a.createElement(d.a,{item:!0,container:!0,xs:3},n.a.createElement(d.a,{item:!0,xs:12,className:"Card-Item",style:{marginBottom:"20px",height:"300px"}},n.a.createElement("h1",null,"Traffic Report"),n.a.createElement("h2",null,"Time to Destination:"),n.a.createElement("h2",null,ri," Minutes")),n.a.createElement(d.a,{item:!0,xs:12,style:{},className:"MapBox"},n.a.createElement(U.d,Object.assign({mapboxApiAccessToken:"pk.eyJ1IjoiZW56b2gzNDIzIiwiYSI6ImNrYmhobXRnZDA1ZGoyeXA5czF1d2dmZ2oifQ.Nx7d2ojudoubk4Hu4ag7pA"},Ye,{onViewportChange:function(e){return _e(e)},height:"400px"}),n.a.createElement(N,{points:ii}),n.a.createElement(U.b,{positionOptions:{enableHighAccuracy:!0},trackUserLocation:!1,onViewportChange:function(e){return qe({latitude:e.latitude,longitude:e.longitude})},auto:!0}),i.longitude?n.a.createElement(U.c,{latitude:i.latitude,longitude:i.longitude,zoom:Ye.zoom},n.a.createElement("img",{src:"/Images/map.svg",alt:"Destination",height:"20px",width:"20px"})):n.a.createElement("div",null)))),n.a.createElement(d.a,{item:!0,container:!0,xs:9,style:{padding:"15px 15px"},justify:"space-between"},n.a.createElement(d.a,{item:!0,xs:12,style:{}},n.a.createElement("h1",null,"Surf Report"),n.a.createElement("h3",null,t)),n.a.createElement(d.a,{container:!0,item:!0,xs:6,style:{maxWidth:"49.5%"},className:"Card-Item"},n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement("p",null,r),n.a.createElement("img",{src:z(o),alt:"",height:"100px",width:"100px"}),n.a.createElement("p",null,W+"f")),n.a.createElement(d.a,{container:!0,item:!0,xs:8},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(P.a,null,n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"".concat(u,"-").concat(h).concat(g),style:{float:"left"}}),F(s,c)),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Primary Swell"}),n.a.createElement(k.a,{primary:"".concat(y,"ft at ").concat(w,"s")}),n.a.createElement(T.a,null,A(E))),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Secondary Swell"}),n.a.createElement(k.a,{primary:"".concat(f,"ft at ").concat(H,"s")}),n.a.createElement(T.a,null,A(C))),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Wind Direction"}),n.a.createElement(k.a,{primary:"".concat(S).concat(b)}),n.a.createElement(T.a,null,Z(x))))))),n.a.createElement(d.a,{container:!0,item:!0,xs:6,style:{maxWidth:"49.5%"},className:"Card-Item"},n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement("p",null,v),n.a.createElement("img",{src:z(B),alt:"",height:"100px",width:"100px"}),n.a.createElement("p",null,q+"f")),n.a.createElement(d.a,{container:!0,item:!0,xs:8},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(P.a,null,n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"".concat(O,"-").concat(I).concat(G),style:{float:"left"}}),F(M,j)),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Primary Swell"}),n.a.createElement(k.a,{primary:"".concat(J,"ft at ").concat(L,"s")}),n.a.createElement(T.a,null,A(X))),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Secondary Swell"}),n.a.createElement(k.a,{primary:"".concat(Y,"ft at ").concat(_,"s ")}),n.a.createElement(T.a,null,A(Q))),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Wind Direction"}),n.a.createElement(k.a,{primary:"".concat(V,"mph")}),n.a.createElement(T.a,null,Z($))))))),n.a.createElement(d.a,{container:!0,item:!0,xs:6,style:{maxWidth:"49.5%"},className:"Card-Item"},n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement("p",null,K),n.a.createElement("img",{src:z(ee),alt:"",height:"100px",width:"100px"}),n.a.createElement("p",null,he+"f")),n.a.createElement(d.a,{container:!0,item:!0,xs:8},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(P.a,null,n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"".concat(ae,"-").concat(ne).concat(re),style:{float:"left"}}),F(te,ie)),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Primary Swell"}),n.a.createElement(k.a,{primary:"".concat(oe,"ft at ").concat(ce,"s ")}),n.a.createElement(T.a,null,A(se))),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Secondary Swell"}),n.a.createElement(k.a,{primary:"".concat(pe,"ft at ").concat(le,"s")}),n.a.createElement(T.a,null,A(me))),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Wind Direction"}),n.a.createElement(k.a,{primary:"".concat(de,"mph")}),n.a.createElement(T.a,null,Z(ue))))))),n.a.createElement(d.a,{container:!0,item:!0,xs:6,style:{maxWidth:"49.5%"},className:"Card-Item"},n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement("p",null,ge),n.a.createElement("img",{src:z(ye),alt:"",height:"100px",width:"100px"}),n.a.createElement("p",null,We+"f")),n.a.createElement(d.a,{container:!0,item:!0,xs:8},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(P.a,null,n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"".concat(Ee,"-").concat(fe,"ft"),style:{float:"left"}}),F(De,we)),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Primary Swell"}),n.a.createElement(k.a,{primary:"".concat(He,"ft at ").concat(Ce,"s")}),n.a.createElement(T.a,null,A(Se))),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Secondary Swell"}),n.a.createElement(k.a,{primary:"".concat(xe,"ft at ").concat(Pe,"s")}),n.a.createElement(T.a,null,A(Re))),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Wind Direction"}),n.a.createElement(k.a,{primary:"".concat(ke,"mph")}),n.a.createElement(T.a,null,Z(be))))))),n.a.createElement(d.a,{container:!0,item:!0,xs:12,style:{},className:"Card-Item"},n.a.createElement(d.a,{item:!0,xs:6},n.a.createElement("p",null,Te),n.a.createElement("img",{src:z(ve),alt:"sun",height:"100px",width:"100px"}),n.a.createElement("p",null,Je+"f")),n.a.createElement(d.a,{container:!0,item:!0,xs:6},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(P.a,null,n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"".concat(je,"-").concat(Me,"ft"),style:{float:"left"}}),F(Ue,Be)),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Primary Swell"}),n.a.createElement(k.a,{primary:"".concat(Oe,"ft at ").concat(Ie,"s")}),n.a.createElement(T.a,null,A(Ne))),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Secondary Swell"}),n.a.createElement(k.a,{primary:"".concat(ze,"ft at ").concat(Fe,"s")}),n.a.createElement(T.a,null,A(Ae))),n.a.createElement(R.a,null,n.a.createElement(k.a,{primary:"Wind Direction"}),n.a.createElement(k.a,{primary:"".concat(Ze,"mph")}),n.a.createElement(T.a,null,Z(Ge))))))))))};t(100);var J=function(e){var i=e.pushSurfSpot,t=e.pushMapInfo;return n.a.createElement(G,{pushDayMonth:i.dayMonth,pushMap:t,pushTimespot:i.localTimestamp0,pushConditionRating:i.conditionRating0,pushFadedRating:i.fadedRating0,pushSolidRating:i.solidRating0,pushMinHeight:i.minBreakingHeight0,pushMaxHeight:i.maxBreakingHeight0,pushUnit:i.unit,pushPrimaryHeight:i.primaryHeight0,pushPrimaryPeriod:i.primaryPeriod0,pushPrimaryDirection:i.primaryDirection0,pushPrimaryCompass:i.primaryCompassDirection0,pushSecondaryHeight:i.secondaryHeight0,pushSecondaryPeriod:i.secondaryPeriod0,pushSecondaryDirection:i.secondaryDirection0,pushSecondaryCompassDirection:i.secondaryCompassDirection0,pushWindSpeed:i.windSpeed0,pushWindDirection:i.windDirection0,pushWindCompass:i.windCompassDirection0,pushWindChill:i.windChill0,pushWindUnit:i.windUnit,pushTemp:i.temperature0,pushTempUnit:i.temperatureUnit,pushTimespot1:i.localTimestamp1,pushConditionRating1:i.conditionRating1,pushFadedRating1:i.fadedRating1,pushSolidRating1:i.solidRating1,pushMinHeight1:i.minBreakingHeight1,pushMaxHeight1:i.maxBreakingHeight1,pushUnit1:i.unit,pushPrimaryHeight1:i.primaryHeight1,pushPrimaryPeriod1:i.primaryPeriod1,pushPrimaryDirection1:i.primaryDirection1,pushPrimaryCompass1:i.primaryCompassDirection1,pushSecondaryHeight1:i.secondaryHeight1,pushSecondaryPeriod1:i.secondaryPeriod1,pushSecondaryDirection1:i.secondaryDirection1,pushSecondaryCompassDirection1:i.secondaryCompassDirection1,pushWindSpeed1:i.windSpeed1,pushWindDirection1:i.windDirection1,pushWindCompass1:i.windCompassDirectio1,pushWindChill1:i.windChill1,pushWindUnit1:i.windUnit,pushTemp1:i.temperature1,pushTempUnit1:i.temperatureUnit,pushTimespot2:i.localTimestamp2,pushConditionRating2:i.conditionRating2,pushFadedRating2:i.fadedRating2,pushSolidRating2:i.solidRating2,pushMinHeight2:i.minBreakingHeight2,pushMaxHeight2:i.maxBreakingHeight2,pushUnit2:i.unit,pushPrimaryHeight2:i.primaryHeight2,pushPrimaryPeriod2:i.primaryPeriod2,pushPrimaryDirection2:i.primaryDirection2,pushPrimaryCompass2:i.primaryCompassDirection2,pushSecondaryHeight2:i.secondaryHeight2,pushSecondaryPeriod2:i.secondaryPeriod2,pushSecondaryDirection2:i.secondaryDirection2,pushSecondaryCompassDirection2:i.secondaryCompassDirection2,pushWindSpeed2:i.windSpeed2,pushWindDirection2:i.windDirection2,pushWindCompass2:i.windCompassDirection2,pushWindChill2:i.windChill2,pushWindUnit2:i.windUnit,pushTemp2:i.temperature2,pushTempUnit2:i.temperatureUnit,pushTimespot3:i.localTimestamp3,pushConditionRating3:i.conditionRating3,pushFadedRating3:i.fadedRating3,pushSolidRating3:i.solidRating3,pushMinHeight3:i.minBreakingHeight3,pushMaxHeight3:i.maxBreakingHeight3,pushUnit3:i.unit,pushPrimaryHeight3:i.primaryHeight3,pushPrimaryPeriod3:i.primaryPeriod3,pushPrimaryDirection3:i.primaryDirection3,pushPrimaryCompass3:i.primaryCompassDirection3,pushSecondaryHeight3:i.secondaryHeight3,pushSecondaryPeriod3:i.secondaryPeriod3,pushSecondaryDirection3:i.secondaryDirection3,pushSecondaryCompassDirection3:i.secondaryCompassDirection3,pushWindSpeed3:i.windSpeed3,pushWindDirection3:i.windDirection3,pushWindCompass3:i.windCompassDirection3,pushWindChill3:i.windChill3,pushWindUnit3:i.windUnit,pushTemp3:i.temperature3,pushTempUnit3:i.temperatureUnit,pushTimespot4:i.localTimestamp4,pushConditionRating4:i.conditionRating4,pushFadedRating4:i.fadedRating4,pushSolidRating4:i.solidRating4,pushMinHeight4:i.minBreakingHeight4,pushMaxHeight4:i.maxBreakingHeight4,pushUnit4:i.unit,pushPrimaryHeight4:i.primaryHeight4,pushPrimaryPeriod4:i.primaryPeriod4,pushPrimaryDirection4:i.primaryDirection4,pushPrimaryCompass4:i.primaryCompassDirection4,pushSecondaryHeight4:i.secondaryHeight4,pushSecondaryPeriod4:i.secondaryPeriod4,pushSecondaryDirection4:i.secondaryDirection4,pushSecondaryCompassDirection4:i.secondaryCompassDirection4,pushWindSpeed4:i.windSpeed4,pushWindDirection4:i.windDirection4,pushWindCompass4:i.windCompassDirection4,pushWindChill4:i.windChill4,pushWindUnit4:i.windUnit,pushTemp4:i.temperature4,pushTempUnit4:i.temperatureUnit})};t(101);function L(e){var i=new Date(1e3*e),t=i.getHours()>12?i.getHours()-12:i.getHours(),a=i.getHours()>=12?"PM":"AM";return"".concat(t," ").concat(a)}function X(e){var i=new Date(1e3*e),t=i.getDate(),a=i.getMonth();return 0===a?"1/".concat(t):"".concat(a,"/").concat(t)}var Y=function(){var e=Object(a.useState)("Default"),i=Object(m.a)(e,2),t=i[0],r=i[1],o=Object(a.useState)({dayMonth:"",localTimestamp0:0,localTimestamp1:0,localTimestamp2:0,localTimestamp3:0,localTimestamp4:0,conditionRating0:0,conditionRating1:0,conditionRating2:0,conditionRating3:0,conditionRating4:0,fadedRating0:0,fadedRating1:0,fadedRating2:0,fadedRating3:0,fadedRating4:0,solidRating0:0,solidRating1:0,solidRating2:0,solidRating3:0,solidRating4:0,minBreakingHeight0:0,minBreakingHeight1:0,minBreakingHeight2:0,minBreakingHeight3:0,minBreakingHeight4:0,maxBreakingHeight0:0,maxBreakingHeight1:0,maxBreakingHeight2:0,maxBreakingHeight3:0,maxBreakingHeight4:0,unit:"ft",primaryHeight0:0,primaryHeight1:0,primaryHeight2:0,primaryHeight3:0,primaryHeight4:0,primaryPeriod0:0,primaryPeriod1:0,primaryPeriod2:0,primaryPeriod3:0,primaryPeriod4:0,primaryDirection0:0,primaryDirection1:0,primaryDirection2:0,primaryDirection3:0,primaryDirection4:0,primaryCompassDirection0:"",primaryCompassDirection1:"",primaryCompassDirection2:"",primaryCompassDirection3:"",primaryCompassDirection4:"",secondaryHeight0:0,secondaryHeight1:0,secondaryHeight2:0,secondaryHeight3:0,secondaryHeight4:0,secondaryPeriod0:0,secondaryPeriod1:0,secondaryPeriod2:0,secondaryPeriod3:0,secondaryPeriod4:0,secondaryDirection0:0,secondaryDirection1:0,secondaryDirection2:0,secondaryDirection3:0,secondaryDirection4:0,secondaryCompassDirection0:"",secondaryCompassDirection1:"",secondaryCompassDirection2:"",secondaryCompassDirection3:"",secondaryCompassDirection4:"",windSpeed0:0,windSpeed1:0,windSpeed2:0,windSpeed3:0,windSpeed4:0,windDirection0:0,windDirection1:0,windDirection2:0,windDirection3:0,windDirection4:0,windCompassDirection0:0,windCompassDirection1:0,windCompassDirection2:0,windCompassDirection3:0,windCompassDirection4:0,windChill0:0,windChill1:0,windChill2:0,windChill3:0,windChill4:0,windUnit:"mph",temperature0:0,temperature1:0,temperature2:0,temperature3:0,temperature4:0,temperatureUnit:0}),s=Object(m.a)(o,2),u=s[0],h=s[1],g=Object(a.useState)({latitude:0,longitude:0,width:"100%",height:"100%",zoom:10}),y=Object(m.a)(g,2),D=y[0],E=y[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(p.a.mark((function e(){var i,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://morning-refuge-88650.herokuapp.com/",i="http://magicseaweed.com/api/".concat("0caa0348eefdd152237d5cf143d22e35","/forecast/?spot_id=").concat(t.id,"&units=us"),e.next=5,fetch("https://morning-refuge-88650.herokuapp.com/"+i);case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,h({dayMonth:X(n[4].localTimestamp),localTimestamp0:L(n[4].localTimestamp),localTimestamp1:L(n[5].localTimestamp),localTimestamp2:L(n[6].localTimestamp),localTimestamp3:L(n[7].localTimestamp),localTimestamp4:L(n[8].localTimestamp),fadedRating0:n[4].fadedRating,fadedRating1:n[5].fadedRating,fadedRating2:n[6].fadedRating,fadedRating3:n[7].fadedRating,fadedRating4:n[8].fadedRating,solidRating0:n[4].solidRating,solidRating1:n[5].solidRating,solidRating2:n[6].solidRating,solidRating3:n[7].solidRating,solidRating4:n[8].solidRating,minBreakingHeight0:n[4].swell.minBreakingHeight,minBreakingHeight1:n[5].swell.minBreakingHeight,minBreakingHeight2:n[6].swell.minBreakingHeight,minBreakingHeight3:n[7].swell.minBreakingHeight,minBreakingHeight4:n[8].swell.minBreakingHeight,maxBreakingHeight0:n[4].swell.maxBreakingHeight,maxBreakingHeight1:n[5].swell.maxBreakingHeight,maxBreakingHeight2:n[6].swell.maxBreakingHeight,maxBreakingHeight3:n[7].swell.maxBreakingHeight,maxBreakingHeight4:n[8].swell.maxBreakingHeight,unit:"ft",primaryHeight0:n[4].swell.components.primary.height,primaryHeight1:n[5].swell.components.primary.height,primaryHeight2:n[6].swell.components.primary.height,primaryHeight3:n[7].swell.components.primary.height,primaryHeight4:n[8].swell.components.primary.height,primaryPeriod0:n[4].swell.components.primary.period,primaryPeriod1:n[5].swell.components.primary.period,primaryPeriod2:n[6].swell.components.primary.period,primaryPeriod3:n[7].swell.components.primary.period,primaryPeriod4:n[8].swell.components.primary.period,primaryDirection0:n[4].swell.components.primary.direction,primaryDirection1:n[5].swell.components.primary.direction,primaryDirection2:n[6].swell.components.primary.direction,primaryDirection3:n[7].swell.components.primary.direction,primaryDirection4:n[8].swell.components.primary.direction,primaryCompassDirection0:n[4].swell.components.primary.compassDirection,primaryCompassDirection1:n[5].swell.components.primary.compassDirection,primaryCompassDirection2:n[6].swell.components.primary.compassDirection,primaryCompassDirection3:n[7].swell.components.primary.compassDirection,primaryCompassDirection4:n[8].swell.components.primary.compassDirection,secondaryHeight0:n[4].swell.components.secondary.height,secondaryHeight1:n[5].swell.components.secondary.height,secondaryHeight2:n[6].swell.components.secondary.height,secondaryHeight3:n[7].swell.components.secondary.height,secondaryHeight4:n[8].swell.components.secondary.height,secondaryPeriod0:n[4].swell.components.secondary.period,secondaryPeriod1:n[5].swell.components.secondary.period,secondaryPeriod2:n[6].swell.components.secondary.period,secondaryPeriod3:n[7].swell.components.secondary.period,secondaryPeriod4:n[8].swell.components.secondary.period,secondaryDirection0:n[4].swell.components.secondary.direction,secondaryDirection1:n[5].swell.components.secondary.direction,secondaryDirection2:n[6].swell.components.secondary.direction,secondaryDirection3:n[7].swell.components.secondary.direction,secondaryDirection4:n[8].swell.components.secondary.direction,secondaryCompassDirection0:n[4].swell.components.secondary.compassDirection,secondaryCompassDirection1:n[5].swell.components.secondary.compassDirection,secondaryCompassDirection2:n[6].swell.components.secondary.compassDirection,secondaryCompassDirection3:n[7].swell.components.secondary.compassDirection,secondaryCompassDirection4:n[8].swell.components.secondary.compassDirection,windSpeed0:n[4].wind.speed,windSpeed1:n[5].wind.speed,windSpeed2:n[6].wind.speed,windSpeed3:n[7].wind.speed,windSpeed4:n[8].wind.speed,windDirection0:n[4].wind.direction,windDirection1:n[5].wind.direction,windDirection2:n[6].wind.direction,windDirection3:n[7].wind.direction,windDirection4:n[8].wind.direction,windCompassDirection0:n[4].wind.compassDirection,windCompassDirection1:n[5].wind.compassDirection,windCompassDirection2:n[6].wind.compassDirection,windCompassDirection3:n[7].wind.compassDirection,windCompassDirection4:n[8].wind.compassDirection,windChill0:n[4].wind.chill,windChill1:n[5].wind.chill,windChill2:n[6].wind.chill,windChill3:n[7].wind.chill,windChill4:n[8].wind.chill,windUnit:"mph",temperature0:n[4].condition.temperature,temperature1:n[5].condition.temperature,temperature2:n[6].condition.temperature,temperature3:n[7].condition.temperature,temperature4:n[8].condition.temperature,temperatureUnit:"c",conditionRating0:n[4].condition.weather,conditionRating1:n[5].condition.weather,conditionRating2:n[6].condition.weather,conditionRating3:n[7].condition.weather,conditionRating4:n[8].condition.weather}),console.log(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),n.a.createElement("div",{className:"App"},n.a.createElement(d.a,{container:!0,spacing:2},n.a.createElement(w,{onHeaderChange:function(e){r(e),E(Object(c.a)(Object(c.a)({},D),{},{latitude:e.latitude,longitude:e.longitude}))}}),n.a.createElement(J,{pushSurfSpot:u,pushMapInfo:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,i,t){e.exports=t(102)},90:function(e,i,t){},92:function(e,i,t){},96:function(e,i,t){},98:function(e,i,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.116944b7.chunk.js.map