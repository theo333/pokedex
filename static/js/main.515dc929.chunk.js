(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{30:function(e,t,a){e.exports=a(60)},35:function(e,t,a){},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=(a(35),a(2)),m=function(){return r.a.createElement("header",null,"Pokemon Presenter")},s=a(8),u=a.n(s),i=a(12),h=a(9),p=a(10),E=a(63),f=a(61),b=a(62),d=(a(37),function(e){var t=e.id,a=e.name,n=e.weight,c=e.height;return r.a.createElement("div",{className:"card-info"},r.a.createElement("p",null,"#",r.a.createElement("span",null,t)),r.a.createElement("p",null,"Name: ",r.a.createElement("span",null,a)),r.a.createElement("p",null,"Weight: ",r.a.createElement("span",null,n/100," g")),r.a.createElement("p",null,"Height: ",r.a.createElement("span",null,c/10," m")))}),v=function(e){var t=e.isSearch,a=e.currentPokemon,n=e.changePokemon,c=a.id,l=a.name,o=a.weight,m=a.height,s=a.image;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"img",src:s,alt:"Pokemon character ".concat(l," front")}),t?"":r.a.createElement("div",{className:"nav"},r.a.createElement("button",{className:"btn-nav",onClick:function(){return n("prev")},disabled:1===c?"{true}":""},r.a.createElement(f.a,{color:"red",size:90})),r.a.createElement("button",{className:"btn-nav",onClick:function(){return n("next")}},r.a.createElement(b.a,{color:"red",size:90}))),r.a.createElement(d,{id:c,name:l,weight:o,height:m}))},g=a(28),k=a.n(g),S=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,l,o,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 2:return a=e.sent,n=a.data,r=n.id,c=n.height,l=n.weight,o=n.forms[0].name,m=n.sprites.front_default,e.abrupt("return",{id:r,name:o,height:c,weight:l,image:m});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),o=Object(h.a)(l,2),m=o[0],s=o[1],f=Object(n.useState)(""),b=Object(h.a)(f,2),d=b[0],g=b[1];Object(n.useEffect)((function(){k(m)}),[m]);var k=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t);case 3:a=e.sent,c(a),g(""),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Card err: ",e.t0),g("Sorry there is no Pokemon with that ID.<br />Please try again.");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Pokedex"),r.a.createElement("div",{className:"nav-link"},r.a.createElement(p.b,{to:"/search"},r.a.createElement("span",null,r.a.createElement(E.a,{size:24,color:"red"}))," Search")),d?r.a.createElement("h2",{className:"error-msg"},d):"",r.a.createElement(v,{isSearch:!1,currentPokemon:a,changePokemon:function(e){s("prev"===e?m-1:m+1)}}))},x=a(64),O=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(h.a)(a,2),l=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l.toLowerCase()),o("")},className:"search-form"},r.a.createElement("input",{className:"",type:"text",name:"name",value:l,"aria-label":"Search","aria-placeholder":"enter Pokemon name",placeholder:"enter Pokemon name",role:"searchbox",onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Search"))},w=function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(h.a)(l,2),m=o[0],s=o[1],E=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t);case 3:a=e.sent,c(a),s(""),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Card err: ",e.t0),s("Sorry no results match your search terms: ".concat(t,".  Please search again.")),c({});case 13:case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Search"),r.a.createElement("div",{className:"nav-link"},r.a.createElement(p.b,{to:"/"},r.a.createElement("span",null,r.a.createElement(x.a,{size:24,color:"red"}))," Pokedex")),r.a.createElement(O,{onSubmit:E}),m?r.a.createElement("h3",{className:"error-msg"},m):"",Object.keys(a).length?r.a.createElement(v,{isSearch:!0,currentPokemon:a}):"")},N=function(){return r.a.createElement("main",null,r.a.createElement(m,null),r.a.createElement("section",{className:"container"},r.a.createElement("article",{className:"main"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/search",component:w}),r.a.createElement(o.a,{path:"/",component:j})))))},P=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,null,r.a.createElement(N,null))),P)}},[[30,1,2]]]);
//# sourceMappingURL=main.515dc929.chunk.js.map