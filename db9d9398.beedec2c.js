(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{193:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(9),c=(t(0),t(204)),o={},l={id:"js-conflux-sdk/README",title:"README",description:"# js-conflux-sdk",source:"@site/docs/js-conflux-sdk/README.md",permalink:"/docs/js-conflux-sdk/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/README.md",lastUpdatedBy:"ConfluxBot",lastUpdatedAt:1587669401},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Nodejs",id:"nodejs",children:[]},{value:"Frontend",id:"frontend",children:[]}]},{value:"Change log",id:"change-log",children:[]},{value:"Example",id:"example",children:[]}],i={rightToc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"js-conflux-sdk"},"js-conflux-sdk"),Object(c.b)("p",null,"JavaScript Conflux Software Development Kit"),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"npm install js-conflux-sdk")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/js-conflux-sdk/blob/master/api.md"}),"api document")),Object(c.b)("h3",{id:"nodejs"},"Nodejs"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const { Conflux } = require('js-conflux-sdk');\n\nasync function main() {\n  const cfx = new Conflux({\n    url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n    defaultGasPrice: 100,\n    defaultGas: 1000000,\n    logger: console,\n  });\n\n  const balance = await cfx.getBalance('0xbbd9e9be525ab967e633bcdaeac8bd5723ed4d6b');\n  console.log(balance); // 937499420597305000n\n}\n\nmain();\n")),Object(c.b)("p",null,"require deep nested file/dir  "),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const util = require('js-conflux-sdk/lib/util');\n")),Object(c.b)("h3",{id:"frontend"},"Frontend"),Object(c.b)("h4",{id:"esm"},"esm"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Conflux } from 'js-conflux-sdk';\nimport { util } from 'js-conflux-sdk/esm/util';\n")),Object(c.b)("p",null,"Note: This assumes bundler will read the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.npmjs.com/files/package.json#browser"}),"package.json browser\nfield")," as module entry. For\nbundlers don't support that, additional configurations needs to be add to\nsupport that. Please checkout the bundlers documentation."),Object(c.b)("h4",{id:"umd"},"umd"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Conflux } from 'js-conflux-sdk/dist/js-conflux-sdk.umd.min.js';\n")),Object(c.b)("p",null,"or  "),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script type="text/javascript" src="node_modules/js-conflux-sdk/dist/js-conflux-sdk.umd.min.js"><\/script>\n<script type="text/javascript">\n  const cfx = new window.Conflux.Conflux({\n    url: \'http://testnet-jsonrpc.conflux-chain.org:12537\',\n    defaultGasPrice: 100,\n    defaultGas: 1000000,\n    logger: console,\n  });\n<\/script>\n')),Object(c.b)("h2",{id:"change-log"},"Change log"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/js-conflux-sdk/tree/master/CHANGE_LOG.md"}),"see")),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/js-conflux-sdk/tree/master/example"}),"example")))}u.isMDXComponent=!0},204:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),u=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},p=function(e){var n=u(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||c;return t?a.a.createElement(f,l({ref:n},i,{components:t})):a.a.createElement(f,l({ref:n},i))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=t[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);