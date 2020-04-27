(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{190:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return d})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return u}));var n=o(1),r=o(9),a=(o(0),o(216)),d={},i={id:"submit-a-repo",title:"submit-a-repo",description:"# How To Submit A Repo",source:"@site/docs/submit-a-repo.md",permalink:"/docs/submit-a-repo",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/submit-a-repo.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1587706875},c=[{value:"Add Metadata To Your Markdown File",id:"add-metadata-to-your-markdown-file",children:[]},{value:"Create A PR To Add Your Documentation",id:"create-a-pr-to-add-your-documentation",children:[{value:"Add Your Repo To <code>docs</code>",id:"add-your-repo-to-docs",children:[]},{value:"Add Your Markdown File To <code>sidebar.js</code>",id:"add-your-markdown-file-to-sidebarjs",children:[]}]},{value:"Add A CI Config To Trigger The Build Workflow of This Repo",id:"add-a-ci-config-to-trigger-the-build-workflow-of-this-repo",children:[]},{value:"Why It Works",id:"why-it-works",children:[]}],l={rightToc:c};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"how-to-submit-a-repo"},"How To Submit A Repo"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"add metadata to your markdown doc file"),Object(a.b)("li",{parentName:"ul"},"create a pr to add your markdown file id to the ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"../sidebars.js"}),"sidebars\nconfig")," file and add your repo as git submodule under\n",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./docs"}),"docs")," folder   "),Object(a.b)("li",{parentName:"ul"},"add a ci config to trigger the build workflow of this repo in your repo's ci\nconfig ")),Object(a.b)("h2",{id:"add-metadata-to-your-markdown-file"},"Add Metadata To Your Markdown File"),Object(a.b)("p",null,"You need to add metadata use syntax below at the beginning of your markdown file.\nYou only need to add metadata to those files that you want to publish to\ndeveloepr site."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"custom_edit_url")," is the github url for editing text files.\n",Object(a.b)("inlineCode",{parentName:"p"},"https://github.com/Conflux-Chain/{repo_name}/edit/{branch_name}/{path_to_md}")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),"---\nid: quick_start\ntitle: Quick Start\ncustom_edit_url: https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/01_Examples/00_Low_Level_CFX_Transfer.md\nhide_title: false\nhide_table_of_contents: false\nsidebar_label: Markdown :)\ncustom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md\ndescription: How do I find you when I cannot solve this problem\nkeywords:\n  - docs\n  - docusaurus\nimage: https://i.imgur.com/mErPwqL.png\n---\n")),Object(a.b)("p",null,"You can find the documentation and spec for each metadata\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/markdown-features#markdown-headers",title:"docusaurus markdown-headers documentation"}),"here"),".  "),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"id"),", ",Object(a.b)("inlineCode",{parentName:"p"},"title")," and ",Object(a.b)("inlineCode",{parentName:"p"},"custom_edit_url")," is required."),Object(a.b)("h2",{id:"create-a-pr-to-add-your-documentation"},"Create A PR To Add Your Documentation"),Object(a.b)("h3",{id:"add-your-repo-to-docs"},"Add Your Repo To ",Object(a.b)("inlineCode",{parentName:"h3"},"docs")),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"git submodule add https://<your-repo-url>.git docs/<your-repo-folder-name>"),"\nto add your repo under ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"./docs"}),"docs"),"."),Object(a.b)("h3",{id:"add-your-markdown-file-to-sidebarjs"},"Add Your Markdown File To ",Object(a.b)("inlineCode",{parentName:"h3"},"sidebar.js")),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"sidebar.js")," is like the below one. Each markdown can be added as ",Object(a.b)("inlineCode",{parentName:"p"},'{ type:\n"doc", folder: "conflux-portal", id: "quick_start" }'),". ",Object(a.b)("inlineCode",{parentName:"p"},"id")," is the id in\nmarkdown metadata, ",Object(a.b)("inlineCode",{parentName:"p"},"folder")," is the git submodule folder in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"./docs"}),"docs"),"\nfolder, ",Object(a.b)("inlineCode",{parentName:"p"},"type")," is ",Object(a.b)("inlineCode",{parentName:"p"},"doc"),". "),Object(a.b)("p",null,"You create your own document structure with ",Object(a.b)("inlineCode",{parentName:"p"},"category"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  docs: {\n    en: [\n      {\n        type: "category",\n        label: "Learn About Conflux",\n        items: [\n          { type: "doc", id: "conflux_overview", folder: "introduction" },\n          { type: "doc", id: "core_concepts", folder: "introduction" },\n          {\n            type: "category",\n            label: "Concepts",\n            items: [{ type: "doc", id: "treegraph", folder: "introduction" }]\n          }\n        ]\n      },\n      {\n        type: "category",\n        label: "Try Conflux",\n        items: [\n          { type: "doc", folder: "introduction", id: "try_conflux_core" },\n          {\n            type: "doc",\n            folder: "introduction",\n            id: "make_your_first_transaction"\n          }\n        ]\n      },\n      {\n        type: "category",\n        label: "Try Conflux Portal",\n        items: [{ type: "doc", folder: "conflux-portal", id: "quick_start" }]\n      }\n    ]\n  }\n};\n')),Object(a.b)("h2",{id:"add-a-ci-config-to-trigger-the-build-workflow-of-this-repo"},"Add A CI Config To Trigger The Build Workflow of This Repo"),Object(a.b)("p",null,"Once your create your PR, we'll check your repo and submit a PR to add the CI\nconfig. "),Object(a.b)("h2",{id:"why-it-works"},"Why It Works"),Object(a.b)("p",null,"The CI config in your repo will trigger the build workflow of this repo."),Object(a.b)("p",null,"The workflow will pull your repo down, check if any doc files being updated\nbetween old submodule revision and your ",Object(a.b)("strong",{parentName:"p"},"master")," branch, use docusaurus build\nthe doc and update developer.conflux-chain.org. "))}u.isMDXComponent=!0},216:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i({},t,{},e)),o},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(o),s=n,m=p["".concat(d,".").concat(s)]||p[s]||b[s]||a;return o?r.a.createElement(m,i({ref:t},l,{components:o})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,d=new Array(a);d[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var l=2;l<a;l++)d[l]=o[l];return r.a.createElement.apply(null,d)}return r.a.createElement.apply(null,o)}s.displayName="MDXCreateElement"}}]);