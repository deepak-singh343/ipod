(this.webpackJsonpipod=this.webpackJsonpipod||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),n=a(4),i=a.n(n),c=(a(3),a(1)),o=a(5),r=a(6),m=a(9),d=a(8),g=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"list-container",unselectable:"off",id:"display"},l.a.createElement("ul",null,l.a.createElement("li",{className:"list-item",id:"games"},l.a.createElement("img",{className:"icons",src:"https://image.flaticon.com/icons/svg/686/686589.svg",alt:"game",height:"15px",width:"15px"}),l.a.createElement("span",{className:"options"},"Games")),l.a.createElement("li",{className:"list-item",id:"music"},l.a.createElement("img",{className:"icons",src:"https://image.flaticon.com/icons/svg/937/937363.svg",alt:"game",height:"15px",width:"15px"}),l.a.createElement("span",{className:"options"},"Music")),l.a.createElement("li",{className:"list-item",id:"camera"},l.a.createElement("img",{className:"icons",src:"https://image.flaticon.com/icons/svg/2088/2088898.svg",alt:"game",height:"15px",width:"15px"}),l.a.createElement("span",{className:"options"},"Camera")),l.a.createElement("li",{className:"list-item",id:"videos"},l.a.createElement("img",{className:"icons",src:"https://image.flaticon.com/icons/svg/1159/1159798.svg",alt:"game",height:"15px",width:"15px"}),l.a.createElement("span",{className:"options"},"Videos")),l.a.createElement("li",{className:"list-item",id:"settings"},l.a.createElement("img",{className:"icons",src:"https://image.flaticon.com/icons/svg/675/675528.svg",alt:"game",height:"15px",width:"15px"}),l.a.createElement("span",{className:"options"},"Settings")))),l.a.createElement("div",{id:"music-screen",className:"newScreen"}),l.a.createElement("div",{id:"games-screen",className:"newScreen"}),l.a.createElement("div",{id:"camera-screen",className:"newScreen"}),l.a.createElement("div",{id:"videos-screen",className:"newScreen"}),l.a.createElement("div",{id:"settings-screen",className:"newScreen"}))},u=function(e){return l.a.createElement("div",null,l.a.createElement("div",{id:"outer-wheel",unselectable:"off",className:"controls",onClick:e.scroll},l.a.createElement("img",{id:"forward",src:"https://image.flaticon.com/icons/svg/106/106105.svg",alt:"forward"}),l.a.createElement("img",{id:"backward",src:"https://image.flaticon.com/icons/svg/18/18603.svg",alt:"backward"}),l.a.createElement("img",{id:"next",src:"https://cdn.onlinewebfonts.com/svg/img_497120.png",alt:"next"})),l.a.createElement("button",{className:"Menu",onClick:e.mainScr},"Menu"),l.a.createElement("div",{className:"inner-wheel"},l.a.createElement("button",{id:"ok",onClick:e.optn},"OK")))},h=a(7),y=a.n(h),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,l=new Array(s),n=0;n<s;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).handleColor=function(){var e=document.getElementById("games");e.style.backgroundColor="white",e.style.color="black";var t=document.getElementById("music");t.style.backgroundColor="white",t.style.color="black";var a=document.getElementById("camera");a.style.backgroundColor="white",a.style.color="black";var s=document.getElementById("videos");s.style.backgroundColor="white",s.style.color="black";var l=document.getElementById("settings");l.style.backgroundColor="white",l.style.color="black"},e.handleScroll=function(){var t=0,a=document.getElementById("outer-wheel");new y.a.Region(a).bind(a,"rotate",(function(a){if(t+=a.detail.distanceFromLast,Math.abs(t)>0&&Math.abs(t)<15){e.handleColor();var s=document.getElementById("games");s.style.backgroundColor="crimson",s.style.color="white"}if(Math.abs(t)>15&&Math.abs(t)<30){e.handleColor();var l=document.getElementById("music");l.style.backgroundColor="crimson",l.style.color="white"}if(Math.abs(t)>30&&Math.abs(t)<45){e.handleColor();var n=document.getElementById("camera");n.style.backgroundColor="crimson",n.style.color="white"}if(Math.abs(t)>45&&Math.abs(t)<60){e.handleColor();var i=document.getElementById("videos");i.style.backgroundColor="crimson",i.style.color="white"}if(Math.abs(t)>60&&Math.abs(t)<75){e.handleColor();var c=document.getElementById("settings");c.style.backgroundColor="crimson",c.style.color="white"}Math.abs(t)>75&&(t=0)}))},e.mainScreen=function(){var e,t=document.getElementsByClassName("newScreen"),a="",s=Object(c.a)(t);try{for(s.s();!(e=s.n()).done&&"visible"!==(a=e.value).style.visibility;);}catch(n){s.e(n)}finally{s.f()}a.style.visibility="hidden",a.style.height="0",a.style.width="0";var l=document.getElementById("display");l.style.visibility="visible",l.style.height="45%",l.style.width="90%",l.style.borderTopLeftRadius="3%",l.style.borderTopRightRadius="5%",l.style.marginTop="20px"},e.switchScreen=function(e){var t=document.getElementById("display");t.style.visibility="hidden",t.style.height="0",t.style.width="0";var a=document.getElementById(e.id+"-screen");null!=document.getElementById("title")&&document.getElementById("title").remove();var s=document.createElement("img");"music"===e.id?s.setAttribute("src","https://image.winudf.com/v2/image/Y29tLmlrb3JvbGtvdi5wb3dlcmFtcC5za2lucy5pY3Nfc2NyZWVuc2hvdHNfMF9mZDRkNmQwOQ/screen-0.jpg?fakeurl=1&type=.jpg"):"games"===e.id?s.setAttribute("src","https://cdn.images.express.co.uk/img/dynamic/143/750x445/1140505.jpg"):"camera"===e.id?s.setAttribute("src","https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.preview.jpg"):"videos"===e.id?s.setAttribute("src","https://www.ufusoft.com/image/guide/10/blu-ray-player-windows-7.jpg"):"settings"===e.id&&s.setAttribute("src","https://www.maketecheasier.com/assets/uploads/2016/09/settings-app-not-working-featured.jpg"),s.id="title",s.style.height="100%",s.style.width="100%",a.appendChild(s),a.style.alignmentBaseline="center",a.style.position="absolute",a.style.visibility="visible",a.style.height="45%",a.style.width="85%",a.style.borderRadius="3%",a.style.marginLeft="15px"},e.Click=function(){console.log("hello");var t,a,s=document.getElementsByClassName("list-item"),l=Object(c.a)(s);try{for(l.s();!(a=l.n()).done&&"crimson"!==(t=a.value).style.backgroundColor;);}catch(n){l.e(n)}finally{l.f()}e.switchScreen(t)},e}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"ipod"},l.a.createElement(g,null),l.a.createElement(u,{scroll:this.handleScroll,mainScr:this.mainScreen,optn:this.Click})))}}]),a}(l.a.Component);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root"))},3:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.23714bd8.chunk.js.map