(this["webpackJsonpcom.fosscord.client"]=this["webpackJsonpcom.fosscord.client"]||[]).push([[3],{86:function(e,t,n){"use strict";function c(e){var t=e.primary?"primary":e.danger?"danger":e.secondary?"secondary":e.success?"success":e.warning?"warning":void 0;return a(e,"primary","danger","secondary","success","warning"),t||""}function a(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];for(var a=0,r=n;a<r.length;a++){var s=r[a];delete e[s]}return e}n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}))},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(73),a=(n(0),n(86)),r=(n(78),n(3));function s(e){var t=Object(c.a)({},e);return t.className="button ".concat(t.className||""," ").concat(Object(a.b)(t)),Object(r.jsx)("button",Object(c.a)({},t))}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(74),a=n(73),r=n(0),s=n(86),i=(n(79),n(3));function o(e){var t=Object(a.a)({},e);t.className="input ".concat(t.className||"");var n=Object(r.useState)(""),o=Object(c.a)(n,2);o[0],o[1];return t.onChange||t.value||(t.onChange=console.log),Object(i.jsxs)("label",{className:"input-wrapper",children:[Object(i.jsx)("p",{className:"label title text",children:t.labelText}),Object(i.jsx)("input",Object(a.a)({},Object(s.a)(t,"labelText")))]})}},91:function(e,t,n){},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n.p+"static/media/logo_big_transparent.c79a2a72.png",a=(n(87),n(3));function r(){return Object(a.jsxs)("div",{className:"branding",children:[Object(a.jsx)("img",{src:c}),Object(a.jsx)("h2",{className:"text headline",children:"Fosscord"})]})}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n(10),a=n(35),r=n(73),s=n(74),i=(n(75),n(77),n(0)),o=n.n(i),l=n(3);function u(e){var t=Object(i.useRef)(null),n=Object(i.useState)(!1),c=Object(s.a)(n,2),a=c[0],u=c[1],d=Object(i.useState)(0),j=Object(s.a)(d,2),b=j[0],m=j[1],O=e.children.map((function(t,n){var c=Object(r.a)(Object(r.a)({},t),{},{props:Object(r.a)({},t.props)});return n===b&&(c.props.selected=!0),c.props.onClick||(c.props.onClick=function(t){var n,a=e.children.findIndex((function(e){return e.props.id===c.props.id}));m(a),u(!1),null===(n=e.onChange)||void 0===n||n.call(e,a,e.children[a])}),c}));return Object(i.useEffect)((function(){function e(e){var n=t.current;e.target===n||(null===n||void 0===n?void 0:n.contains(e.target))||u(!1)}return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]),Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)("div",{className:"text title",children:e.labelText}),Object(l.jsxs)("div",{ref:t,className:"dropdown ".concat(e.className||""," ").concat(a&&"open"),children:[Object(l.jsxs)("div",{className:"control item",onClick:function(){return u(!a)},children:[Object(l.jsx)("span",{className:"left",children:Object(r.a)(Object(r.a)({},O[b]),{},{props:Object(r.a)(Object(r.a)({},O[b].props),{},{item:!0})})}),Object(l.jsx)("span",{className:"right",children:Object(l.jsx)("i",{className:"icon chevron-down"})})]}),Object(l.jsx)("div",{className:"menu",children:O})]})]})}function d(e){return o.a.createElement(e.item?o.a.Fragment:"div",e.item?{key:e.id}:{id:e.id,className:"item ".concat(e.className||""," ").concat(e.selected?"selected":""),onClick:e.onClick,key:e.id},Object(l.jsxs)(l.Fragment,{children:[e.icon&&("string"===typeof e.icon?Object(l.jsx)("i",{className:"prefix icon "+e.icon,children:" "}):e.icon),Object(l.jsx)("span",{className:"name",children:e.name}),Object(l.jsx)("span",{className:"category text title",children:e.category})," "]}))}window.addEventListener("mousedown",(function(e){document.getElementById("parent-node")}));n(88);var j=n(2),b=o.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,99))}));function m(e){var t,n=Object(j.f)(),r=Object(a.b)((function(e){return e.instances}));return e.defaultValue||null===(t=e.onChange)||void 0===t||t.call(e,r[0]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{className:"instance-selection",labelText:"Instance",onChange:function(t){var n;return null===(n=e.onChange)||void 0===n?void 0:n.call(e,r[t])},children:[].concat(Object(c.a)(r.map((function(e){var t=e.icon&&Object(l.jsx)("img",{className:"icon",alt:"",src:e.icon});return Object(l.jsx)(d,{name:e.host,id:e.id,icon:t},e.id)}))),[Object(l.jsx)(d,{name:"Add Instance",id:"add_instance",icon:"plus",onClick:function(){return n.push("".concat(n.location.pathname,"/instance"))}},"add_instance")])}),Object(l.jsx)(j.a,{path:"".concat(n.location.pathname.replaceAll("/instance",""),"/instance"),component:b})]})}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var c=n(74),a=n(0),r=n(85),s=n(34),i=n(92),o=n(93),l=n(89),u=n(90),d=(n(91),n(80),n(3));function j(e,t){if(!e)return"";if(!t)return"";var n=t.split("."),c=e[n.first()];return c&&Array.isArray(c._errors)?c._errors.map((function(e){return Object(d.jsxs)(d.Fragment,{children:[e.message,Object(d.jsx)("br",{})]})})):j(c,n.slice(1).join("."))}function b(){var e=Object(r.a)("login").t,t=Object(a.useState)({}),n=Object(c.a)(t,2),b=n[0],m=n[1],O=Object(a.useState)(""),p=Object(c.a)(O,2),f=(p[0],p[1]),h=Object(a.useState)(""),x=Object(c.a)(h,2),g=(x[0],x[1]);return Object(d.jsx)("div",{className:"page login",children:Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)(i.a,{}),Object(d.jsx)("h1",{className:"text headline",children:e("login")}),Object(d.jsx)(o.a,{defaultValue:b,onChange:function(e){return m(e)}}),Object(d.jsx)("p",{className:"text danger error",children:j({test:"error"},"test")}),Object(d.jsx)(u.a,{onChange:function(e){return f(e.target.value)},autoComplete:"email",type:"text",className:"emailPhone",labelText:e("emailTelephone")}),Object(d.jsx)(u.a,{onChange:function(e){return g(e.target.value)},className:"password",type:"password",labelText:e("password"),autoComplete:"current-password"}),Object(d.jsx)(s.b,{className:"small",to:"/resetPassword",children:e("forgotPassword")}),Object(d.jsx)(l.a,{className:"submit ",primary:!0,children:e("login")}),Object(d.jsxs)("div",{className:"text muted",children:[e("registerNotice"),Object(d.jsx)(s.b,{to:"/register",children:e("register")})]})]})})}}}]);
//# sourceMappingURL=3.873a51db.chunk.js.map