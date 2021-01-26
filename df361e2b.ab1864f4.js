(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return r}));var o=t(3),a=(t(0),t(99));const c={id:"doc2",title:"Run your own Raiden Node"},d={unversionedId:"doc2",id:"doc2",isDocsHomePage:!1,title:"Run your own Raiden Node",description:"Introduction",source:"@site/docs/doc2.md",slug:"/doc2",permalink:"/flows-monorepo/docs/doc2",editUrl:"https://github.com/avolabs-io/flows-monorepo/docs/doc2.md",version:"current"},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Setup Node",id:"setup-node",children:[]},{value:"Run Node",id:"run-node",children:[]},{value:"Access Node",id:"access-node",children:[]},{value:"Stop Node",id:"stop-node",children:[]},{value:"Cleanup Node",id:"cleanup-node",children:[]},{value:"Useful Links",id:"useful-links",children:[]}],l={toc:i};function r({components:e,...n}){return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"A Raiden node allows a user to access the Raiden network. The Raiden network is a payment channel implementation which allows scalable, cheap and low latency payments for Ethereum. Once the user has access to the Raiden network through the Raiden node they can open channels with other Raiden users and make payments to each other."),Object(a.b)("p",null,"These steps will help you run your own Raiden node."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": Currently this only works on Linux and Unix Operating Systems. "),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("p",null,"Clone the repository and navigate to the directory:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/avolabs-io/flows-monorepo.git\ncd flows-monorepo\n")),Object(a.b)("h3",{id:"setup-node"},"Setup Node"),Object(a.b)("p",null,"Create test accounts for your Raiden node and setup your env file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"make setup-env\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": If you want to use a different version of the Raiden node set the environment variable ",Object(a.b)("inlineCode",{parentName:"p"},"RAIDEN_NODE_VERSION")," to the version you want which can be found in the ",Object(a.b)("inlineCode",{parentName:"p"},".env")," file."),Object(a.b)("h3",{id:"run-node"},"Run Node"),Object(a.b)("p",null,"Run your Raiden node:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"make start-raiden\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": running a Raiden node uses lots of eth-node bandwidth. To be economical while testing it may be wise to run ",Object(a.b)("inlineCode",{parentName:"p"},"make start-raiden2")," or ",Object(a.b)("inlineCode",{parentName:"p"},"make start-raiden1")," to start a 2 node or 1 node raiden network respectively."),Object(a.b)("h3",{id:"access-node"},"Access Node"),Object(a.b)("p",null,"You can access your Raiden node at ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:5001"),", ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:5002")," or  ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:5003")," depending on which node you have started and which node you are trying to access."),Object(a.b)("h3",{id:"stop-node"},"Stop Node"),Object(a.b)("p",null,"Stop your Raiden node:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"make stop-raiden\n")),Object(a.b)("h3",{id:"cleanup-node"},"Cleanup Node"),Object(a.b)("p",null,"To delete all Raiden metadata (usually not needed):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"make stop-raiden-hard\n")),Object(a.b)("h3",{id:"useful-links"},"Useful Links"),Object(a.b)("p",null,"Flows Finance Repository - ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/avolabs-io/flows-monorepo"}),"https://github.com/avolabs-io/flows-monorepo")))}r.isMDXComponent=!0}}]);