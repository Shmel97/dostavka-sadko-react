"use strict";(self.webpackChunkdostavka_sadko_react=self.webpackChunkdostavka_sadko_react||[]).push([[438],{8857:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(4942),r=a(1413),s=a(4165),o=a(5861),c=a(9439),i=a(2791),l=a(7689),u={login:"Login_login__rSGNM"},p=a(184);var d=function(){var e=(0,l.s0)(),t=i.useState({email:"",password:""}),a=(0,c.Z)(t,2),d=a[0],m=a[1],f=function(){var t=(0,o.Z)((0,s.Z)().mark((function t(a){var n,r,o;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("https://mentor.archakov.im/api/mock/login?email=".concat(d.email,"&password=").concat(d.password));case 3:if(!(n=t.sent).ok){t.next=13;break}return t.next=7,n.json();case 7:r=t.sent,o=r.token,window.localStorage.setItem("token",o),e("/profile"),t.next=14;break;case 13:alert("\u041e\u0448\u0438\u0431\u043a\u0430! \u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u043f\u043e\u0447\u0442\u0430 \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c!");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(e){m((0,r.Z)((0,r.Z)({},d),{},(0,n.Z)({},e.target.name,e.target.value)))};return console.log(d),(0,p.jsx)("div",{className:u.login,children:(0,p.jsxs)("form",{onSubmit:f,children:[(0,p.jsx)("input",{type:"email",onChange:k,name:"email",value:d.email,placeholder:"\u041f\u043e\u0447\u0442\u0430: test@test.ru"}),(0,p.jsx)("input",{type:"password",onChange:k,name:"password",value:d.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c: 123456"}),(0,p.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})}}}]);
//# sourceMappingURL=Login.4d9ac669.chunk.js.map