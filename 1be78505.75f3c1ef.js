(window.webpackJsonp=window.webpackJsonp||[]).push([[13,68],{199:function(e,t,a){"use strict";a.r(t);a(25),a(19),a(20),a(52),a(234);var n=a(0),r=a.n(n),l=a(202),i=a(203),o=a(62),c=a(207),s=a(1),u=a(205),m=a.n(u),d=a(206),f=a(220),b=a(204),p=a(213),v=a(141),h=a.n(v);function E(e){var t=e.item,a=e.onItemClick,l=e.collapsible,i=t.items,o=t.href,c=t.label,u=t.type,d=Object(n.useState)(t.collapsed),f=d[0],v=d[1],h=Object(n.useState)(null),k=h[0],g=h[1];t.collapsed!==k&&(g(t.collapsed),v(t.collapsed));var _=Object(n.useCallback)((function(e){e.preventDefault(),v((function(e){return!e}))}));switch(u){case"category":return i.length>0&&r.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":f}),key:c},r.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":l,"menu__link--active":l&&!t.collapsed}),href:"#!",onClick:l?_:void 0},c),r.a.createElement("ul",{className:"menu__list"},i.map((function(e){return r.a.createElement(E,{key:e.label,item:e,onItemClick:a,collapsible:l})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(b.a,Object(s.a)({className:"menu__link",to:o},Object(p.a)(o)?{activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"}),c))}}var k=function(e){var t=Object(n.useState)(!1),a=t[0],l=t[1],o=Object(i.a)().siteConfig,c=(o=void 0===o?{}:o).themeConfig.navbar,s=(c=void 0===c?{}:c).title,u=c.logo,b=void 0===u?{}:u,p=Object(d.a)(b.src),v=e.docsSidebars,k=e.path,g=e.sidebar,_=e.sidebarCollapsible;if(Object(f.a)(a),!g)return null;var w=v[g];if(!w)throw new Error('Cannot find the sidebar "'+g+'" in the sidebar config!');return _&&w.forEach((function(e){return function e(t,a){var n=t.items,r=t.href;switch(t.type){case"category":var l=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!l,l;case"link":default:return r===a}}(e,k)})),r.a.createElement("div",{className:h.a.sidebar},r.a.createElement("div",{className:h.a.sidebarLogo},null!=b&&r.a.createElement("img",{src:p,alt:b.alt}),null!=s&&r.a.createElement("strong",null,s)),r.a.createElement("div",{className:m()("menu","menu--responsive",h.a.menu,{"menu--show":a})},r.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){l(!a)}},a?r.a.createElement("span",{className:m()(h.a.sidebarMenuIcon,h.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{className:h.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},w.map((function(e){return r.a.createElement(E,{key:e.label,item:e,onItemClick:function(){l(!1)},collapsible:_})})))))},g=a(212),_=a(215),w=a(219),y=a(146),C=a.n(y);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,s=t.routes.find((function(e){return Object(w.a)(n.pathname,e)}))||{},u=a.permalinkToSidebar,m=a.docsSidebars,d=a.version,f=u[s.path],b=Object(i.a)(),p=b.siteConfig,v=(p=void 0===p?{}:p).themeConfig,h=void 0===v?{}:v,E=b.isClient,y=h.sidebarCollapsible,N=void 0===y||y;return 0===Object.keys(s).length?r.a.createElement(_.default,e):r.a.createElement(c.a,{version:d,key:E},r.a.createElement("div",{className:C.a.docPage},f&&r.a.createElement("div",{className:C.a.docSidebarContainer},r.a.createElement(k,{docsSidebars:m,path:s.path,sidebar:f,sidebarCollapsible:N})),r.a.createElement("main",{className:C.a.docMainContainer},r.a.createElement(l.a,{components:g.a},Object(o.a)(t.routes)))))}},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(207);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},234:function(e,t,a){"use strict";var n=a(17),r=a(235)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),n(n.P+n.F*l,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(75)("find")},235:function(e,t,a){var n=a(27),r=a(76),l=a(51),i=a(36),o=a(236);e.exports=function(e,t){var a=1==e,c=2==e,s=3==e,u=4==e,m=6==e,d=5==e||m,f=t||o;return function(t,o,b){for(var p,v,h=l(t),E=r(h),k=n(o,b,3),g=i(E.length),_=0,w=a?f(t,g):c?f(t,0):void 0;g>_;_++)if((d||_ in E)&&(v=k(p=E[_],_,h),e))if(a)w[_]=v;else if(v)switch(e){case 3:return!0;case 5:return p;case 6:return _;case 2:w.push(p)}else if(u)return!1;return m?-1:s||u?u:w}}},236:function(e,t,a){var n=a(237);e.exports=function(e,t){return new(n(e))(t)}},237:function(e,t,a){var n=a(12),r=a(238),l=a(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}},238:function(e,t,a){var n=a(21);e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);