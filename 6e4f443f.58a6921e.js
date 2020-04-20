(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(9),r=(n(0),n(203)),c={id:"introduction",title:"What Is Conflux Portal",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Introduction.md"},i={id:"conflux-portal/docs/en/portal/introduction",title:"What Is Conflux Portal",description:"\x3c!-- ![Conflux Logo](https://www.conflux-chain.org/icons/icon-48x48.png) --\x3e",source:"@site/docs/conflux-portal/docs/en/portal/Introduction.md",permalink:"/docs/conflux-portal/docs/en/portal/introduction",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Introduction.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1585033639,sidebar:"docs",previous:{title:"My First Transaction",permalink:"/docs/conflux-doc/docs/send_transaction"},next:{title:"Getting Started",permalink:"/docs/conflux-portal/docs/en/portal/Main_Concepts/getting_started"}},l=[{value:"Why ConfluxPortal?",id:"why-confluxportal",children:[{value:"Account Management",id:"account-management",children:[]},{value:"Blockchain Connection",id:"blockchain-connection",children:[]}]},{value:"Blockchain Applications",id:"blockchain-applications",children:[{value:"New Dapp Developers",id:"new-dapp-developers",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Welcome to Conflux Portal's Developer Documentation. ConfluxPortal is Conflux\nversion of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/MetaMask/metamask-extension#readme"}),"MetaMask"),".\nThis documentation is for learning to develop applications for ConfluxPortal.  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can find the latest version of ConfluxPortal on ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/conflux-portal/releases"}),"the github release\npage")," and installation\ninstructions ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/conflux-portal/issues/31"}),"in this\nissue"),". "),Object(r.b)("li",{parentName:"ul"},"For help using ConfluxPortal, ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/conflux-portal/issues/new/choose"}),"submit\nissues"),"\nin our github repo."),Object(r.b)("li",{parentName:"ul"},"To learn how to contribute to the ConfluxPortal project itself, visit our\n",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/conflux-portal/tree/develop/docs"}),"Internal\nDocs"),". ")),Object(r.b)("h2",{id:"why-confluxportal"},"Why ConfluxPortal?"),Object(r.b)("p",null,"ConfluxPortal was created out of the needs of creating more secure and usable\nConflux-based web sites. In particular, it handles account management and\nconnecting the user to the blockchain. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/conflux-portal/docs/en/portal/API_Reference/provider_api"}),"Read the full docs of our injected provider")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/conflux-portal/docs/en/portal/API_Reference/json_rpc_api"}),"Read the full docs of the JSON RPC API")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/conflux-portal/docs/en/portal/API_Reference/experimental_api"}),"Read about other supported APIs"))),Object(r.b)("h3",{id:"account-management"},"Account Management"),Object(r.b)("p",null,"ConfluxPortal allows users to manage accounts and their keys in a variety of\nways, including hardware wallets, while isolating them from the site context.\nThis is a great security improvement over storing the user keys on a single\ncentral server, or even in local storage, which can allow for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.ccn.com/cryptocurrency-exchange-etherdelta-hacked-in-dns-hijacking-scheme/"}),"mass account\nthefts"),". "),Object(r.b)("p",null,"This security feature also comes with developer convenience: For developers, you\nsimply interact with the globally available ",Object(r.b)("inlineCode",{parentName:"p"},"conflux")," API that identifies the\nusers of web3-compatible browsers (like ConfluxPortal users), and whenever you\nrequest a transaction signature (like ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_sendTransaction"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"cfx_signTypedData"),", or others), ConfluxPortal will prompt the user in as\ncomprehensible a way as possible, allowing them to be informed, you to have a\nsimple API, and attackers left trying to phish individual users rather than\nperforming mass hacks, although ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://medium.com/metamask/new-phishing-strategy-becoming-common-1b1123837168"}),"DNS hacks can still be used for phishing en\nmasse"),". "),Object(r.b)("h3",{id:"blockchain-connection"},"Blockchain Connection"),Object(r.b)("p",null,"ConfluxPortal comes pre-loaded with nice and fast connections to the Conflux\nblockchain and conflux test networks. This allows users to get started without\nsynchronizing a full node, while still providing the option to upgrade their\nsecurity the blockchain provider of their choice over time. "),Object(r.b)("p",null,"Today, ConfluxPortal is compatible with any blockchain that exposes an ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/json-rpc/"}),"Conflux\nCompatible JSON RPC API"),",\nincluding custom and private blockchains. For development, we recommend running\na test blockchain like\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/yqrashawn/conflux-local-network-lite#readme"}),"conflux-local-network-lite"),". "),Object(r.b)("h2",{id:"blockchain-applications"},"Blockchain Applications"),Object(r.b)("p",null,"ConfluxPortal makes it easy to write user interfaces to blockchain-based smart\ncontract systems. You can accept payments without knowing how to write smart\ncontracts, but you'll be able to do much more interesting things if you do. "),Object(r.b)("h3",{id:"new-dapp-developers"},"New Dapp Developers"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We recommend this ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://karl.tech/learning-solidity-part-1-deploy-a-contract/"}),"Learning\nSolidity"),"\ntutorial series by Karl Floersch. ")))}u.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,d=p["".concat(c,".").concat(h)]||p[h]||b[h]||r;return n?a.a.createElement(d,i({ref:t},s,{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);