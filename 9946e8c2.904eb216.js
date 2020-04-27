(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{187:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return i})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return b}));var a=t(1),r=t(9),c=(t(0),t(216)),o={},i={id:"go-conflux-sdk/README",title:"README",description:"[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/LICENSE)",source:"@site/docs/go-conflux-sdk/README.md",permalink:"/docs/go-conflux-sdk/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/go-conflux-sdk/README.md",lastUpdatedBy:"ConfluxBot",lastUpdatedAt:1587977988},l=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Manage Accounts",id:"manage-accounts",children:[]},{value:"Query Conflux Information",id:"query-conflux-information",children:[]},{value:"Send Transaction",id:"send-transaction",children:[]},{value:"Deploy/Call Smart Contract",id:"deploycall-smart-contract",children:[{value:"Contract Example",id:"contract-example",children:[]}]}],s={rightToc:l};function b(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/LICENSE"}),Object(c.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/License-GPL%20v3-blue.svg",alt:"License: GPL v3"}))),"\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://godoc.org/github.com/Conflux-Chain/go-conflux-sdk"}),Object(c.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/Documentation-GoDoc-green.svg",alt:"Documentation"})))),Object(c.b)("h1",{id:"conflux-golang-api"},"Conflux Golang API"),Object(c.b)("p",null,"The Conflux Golang API allows any Golang client to interact with a local or remote Conflux node based on JSON-RPC 2.0 protocol. With Conflux Golang API, user can easily manage accounts, send transactions, deploy smart contracts and query blockchain information."),Object(c.b)("h2",{id:"install"},"Install"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"go get github.com/Conflux-Chain/go-conflux-sdk\n")),Object(c.b)("p",null,"You can also add the Conflux Golang API into vendor folder."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"govendor fetch github.com/Conflux-Chain/go-conflux-sdk\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/api.md"}),"api document")),Object(c.b)("h2",{id:"manage-accounts"},"Manage Accounts"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"AccountManager")," struct to manage accounts at local machine."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create/Import/Update/Delete an account."),Object(c.b)("li",{parentName:"ul"},"List all accounts."),Object(c.b)("li",{parentName:"ul"},"Unlock/Lock an account."),Object(c.b)("li",{parentName:"ul"},"Sign a transaction.")),Object(c.b)("h2",{id:"query-conflux-information"},"Query Conflux Information"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"Client")," struct to query Conflux blockchain information, such as block, epoch, transaction, receipt. Following is an example to query the current epoch number:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n\n    conflux "github.com/Conflux-Chain/go-conflux-sdk"\n)\n\nfunc main() {\n    client, err := conflux.NewClient("http://52.175.52.111:12537")\n    if err != nil {\n        fmt.Println("failed to create client:", err)\n        return\n    }\n    defer client.Close()\n\n    epoch, err := client.GetEpochNumber()\n    if err != nil {\n        fmt.Println("failed to get epoch number:", err)\n        return\n    }\n\n    fmt.Println("Current epoch number:", epoch)\n}\n')),Object(c.b)("h2",{id:"send-transaction"},"Send Transaction"),Object(c.b)("p",null,"To send a transaction, you need to sign the transaction at local machine, and send the signed transaction to local or remote Conflux node."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Sign a transaction with unlocked account:"),Object(c.b)("p",{parentName:"li"},"  ",Object(c.b)("inlineCode",{parentName:"p"},"AccountManager.SignTransaction(tx UnsignedTransaction)"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Sign a transaction with passphrase for locked account:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"    `AccountManager.SignTransactionWithPassphrase(tx UnsignedTransaction, passphrase string)`\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Send a unsigned transaction"),Object(c.b)("p",{parentName:"li"},"  ",Object(c.b)("inlineCode",{parentName:"p"},"Client.SendTransaction(tx *types.UnsignedTransaction)"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Send a encoded transaction"),Object(c.b)("p",{parentName:"li"},"  ",Object(c.b)("inlineCode",{parentName:"p"},"Client.SendRawTransaction(rawData []byte)"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Encode a encoded unsigned transaction with signature and send transaction"),Object(c.b)("p",{parentName:"li"},"  ",Object(c.b)("inlineCode",{parentName:"p"},"Client.SignEncodedTransactionAndSend(encodedTx []byte, v byte, r, s []byte)")))),Object(c.b)("p",null,"To send multiple transactions at a time, you can unlock the account at first, then send multiple transactions without passphrase. To send a single transaction, you can just only send the transaction with passphrase."),Object(c.b)("h2",{id:"deploycall-smart-contract"},"Deploy/Call Smart Contract"),Object(c.b)("p",null,"You can use ",Object(c.b)("inlineCode",{parentName:"p"},"Client.DeployContract")," to deploy a contract or use ",Object(c.b)("inlineCode",{parentName:"p"},"Client.GetContract")," to get a contract by deployed address. Then you can use the contract instance to operate contract, there are GetData/Call/SendTransaction. Please see ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk/blob/master/api.md"}),"api document")," for detail."),Object(c.b)("h3",{id:"contract-example"},"Contract Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "encoding/hex"\n    "fmt"\n    "io/ioutil"\n    "math/big"\n    "time"\n\n    sdk "github.com/Conflux-Chain/go-conflux-sdk"\n    "github.com/Conflux-Chain/go-conflux-sdk/types"\n)\n\nfunc main() {\n\n    //unlock account\n    am := sdk.NewAccountManager("./keystore")\n    err := am.TimedUnlockDefault("hello", 300*time.Second)\n    if err != nil {\n        panic(err)\n    }\n\n    //init client\n    client, err := sdk.NewClient("http://testnet-jsonrpc.conflux-chain.org:12537")\n    if err != nil {\n        panic(err)\n    }\n    client.SetAccountManager(am)\n\n    //deploy contract\n    abiPath := "./contract/erc20.abi"\n    bytecodePath := "./contract/erc20.bytecode"\n    var contract *sdk.Contract\n\n    abi, err := ioutil.ReadFile(abiPath)\n    if err != nil {\n        panic(err)\n    }\n\n    bytecodeHexStr, err := ioutil.ReadFile(bytecodePath)\n    if err != nil {\n        panic(err)\n    }\n\n    bytecode, err := hex.DecodeString(string(bytecodeHexStr))\n    if err != nil {\n        panic(err)\n    }\n\n    doneChan := client.DeployContract(string(abi), bytecode, nil, time.Duration(time.Second*30), func(c sdk.Contractor, txhash *types.Hash, err error) {\n        if err != nil {\n            panic(err)\n        }\n        contract = c.(*sdk.Contract)\n        fmt.Printf("deploy contract by client.DeployContract done\\ncontract address: %+v\\ntxhash:%v\\n\\n", *contract.Address, txhash)\n    })\n\n    _ = <-doneChan\n    time.Sleep(30 * time.Second)\n\n    //get data for send/call contract method\n    data, err := contract.GetData("balanceOf", contract.Address.ToCommonAddress())\n    if err != nil {\n        panic(err)\n    }\n    fmt.Printf("get data of method balanceOf is: 0x%x\\n\\n", *data)\n\n    //call contract method\n    user := types.Address("0x19f4bcf113e0b896d9b34294fd3da86b4adf0302")\n    balance := &struct{ Balance *big.Int }{}\n    err = contract.Call(nil, balance, "balanceOf", user.ToCommonAddress())\n    if err != nil {\n        panic(err)\n    }\n    fmt.Printf("address %v balance in contract is: %+v\\n\\n", user, balance)\n\n    //send transction for contract method\n    to := types.Address("0x160ebef20c1f739957bf9eecd040bce699cc42c6")\n    txhash, err := contract.SendTransaction(nil, "transfer", to.ToCommonAddress(), big.NewInt(10))\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("transfer %v erc20 token to %v done, tx hash: %v\\n\\n", 10, to, txhash)\n\n    fmt.Println("wait for transaction be confirmed...")\n    for {\n        time.Sleep(time.Duration(1) * time.Second)\n        tx, err := client.GetTransactionByHash(*txhash)\n        if err != nil {\n            panic(err)\n        }\n        if tx.Status != nil {\n            fmt.Printf("transaction is confirmed.")\n            break\n        }\n    }\n}\n')))}b.isMDXComponent=!0},216:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},c=Object.keys(n);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=r.a.createContext({}),b=function(n){var e=r.a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i({},e,{},n)),t},u=function(n){var e=b(n.components);return r.a.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},p=Object(a.forwardRef)((function(n,e){var t=n.components,a=n.mdxType,c=n.originalType,o=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),u=b(t),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||c;return t?r.a.createElement(m,i({ref:e},s,{components:t})):r.a.createElement(m,i({ref:e},s))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var c=t.length,o=new Array(c);o[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:a,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);