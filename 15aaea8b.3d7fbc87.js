(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(1),r=n(9),s=(n(0),n(202)),a={},l={id:"conflux-doc/docs/test_framework",title:"test_framework",description:"#Test Framework",source:"@site/docs/conflux-doc/docs/test_framework.md",permalink:"/docs/conflux-doc/docs/test_framework",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-doc/docs/test_framework.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1586699466},i={};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"#Test Framework"),Object(s.b)("p",null,"The framework is written in ","python3",". It can setup multiple Conflux nodes and test the distributed system behavior locally. It controls the nodes behavior by setting the node configurations, calling their RPCs, or sending them P2P messages directly."),Object(s.b)("p",null,"All related files are included in the directory  ","tests",". "),Object(s.b)("p",null,"After compiling the source code with ","cargo build --release"," under the project directory, you can run ","tests/test_all.py"," to run all included python tests."),Object(s.b)("p",null,"##An Example Test"),Object(s.b)("p",null,"Here is an example test. It setups 2 nodes, makes each node generate some blocks separately, and finally connects them to check if they can receive the blocks generated by the other."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"from test_framework.test_framework import ConfluxTestFramework\nfrom test_framework.util import *\n\nclass ExampleTest(ConfluxTestFramework):\n    def set_test_params(self):\n        self.setup_clean_chain = True\n        self.num_nodes = 2\n\n    def setup_network(self):\n        self.setup_nodes()\n        # connect_sample_nodes(self.nodes, self.log)\n\n    def run_test(self):\n        self.nodes[0].generate(1, 0)\n        assert (self.nodes[0].getblockcount() == 2)\n\n        self.nodes[1].generate(2, 0)\n        assert (self.nodes[1].getblockcount() == 3)\n\n        connect_nodes(self.nodes, 0, 1)\n        sync_blocks(self.nodes)\n        assert (self.nodes[0].getblockcount() == 4)\n        self.log.info(\"PASS\")\n\nif __name__ == '__main__':\n    ExampleTest().main()\n")),Object(s.b)("p",null,"The framework will"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Call ","set_test_params"," to set basic test initialization parameters."),Object(s.b)("li",{parentName:"ol"},"Setup the test directories and node configurations according to the parameters set in ","set_test_params",". By default, a temp directory will be created and all files will be kept within it. For example, setting ","self.num_nodes = 2"," will initialize directories for two nodes."),Object(s.b)("li",{parentName:"ol"},"Call ","setup_network"," to add nodes and connect them. Here ","self.setup_nodes()"," will add 2 Conflux nodes by running pre-compiled Conflux executable binary within the directory setupped in step 2. We do not connect them here because we want nodes seperated at the beginning."),Object(s.b)("li",{parentName:"ol"},"Call ","run_test"," to run the actual test codes.")),Object(s.b)("p",null,"After running ","self.setup_nodes()",", ","self.nodes"," is a list of ","TestNode",", and each can be used to interact with the corresponding Conflux node. For example, to get the number of blocks in node 0 by calling the RPC named ","getblockcount",", you simply call ","self.nodes[0].getblockcount"," and an integer will be returned."),Object(s.b)("p",null,"connect_nodes(self.nodes, 0, 1)"," connects nodes 0 and 1. ","sync_blocks(self.nodes)"," waits until all nodes have the same pivot chain tip. Them are both implemented by calling RPCs, and more useful functions will be introduced in ","[Utility Function List][#utility-function-list]","."),Object(s.b)("h2",{id:"user-content-sending-p2p-messages"},"Sending P2P Messages"),Object(s.b)("p",null,"After calling ","start_p2p_connection(self.nodes)",", the field ","p2p"," of each ","TestNode"," will be initialized with a simulated Conflux node written in Python, and this simulated node will be connected to the Conflux process controled by the corresponding ","TestNode",". After that, you can send and receive P2P messages within python code. Here is an example about how to use ","p2p"," to interact with the Conflux node."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"    def run_test(self):\n        def assert_length(_node, msg):\n            assert_equal(len(msg.headers), 1)\n        h = WaitHandler(self.nodes[0].p2p, GET_BLOCK_HEADERS_RESPONSE, assert_length)\n        self.nodes[0].p2p.send_protocol_msg(GetBlockHeaders(hashes=[self.nodes[0].p2p.genesis.hash]))\n        h.wait()\n")),Object(s.b)("p",null,"This example tries to get the genesis block header from node 0 with P2P requests (instead of using RPC), and asserts that only one header is returned."),Object(s.b)("p",null,"WaitHandler"," will wait for the first message of the designated message type and run a function on this received message. ","p2p.send_protocol_msg"," is used to send a rlp-encodable message. ","h.wait()"," waits and handles the first received ","GET_BLOCK_HEADERS_RESPONSE"," message. Note that ","WaitHandler"," starts listening right after it's initialized."),Object(s.b)("p",null,"##Configurations"),Object(s.b)("p",null,"By default, tests will use the release version executable binary built by ","cargo",". If you want to use a file at another path (e.g., a debug version binary), you can set the environment variable ","CONFLUX"," to the full path of the used binary file before running the tests."),Object(s.b)("p",null,"TODO"),Object(s.b)("h2",{id:"user-content-utility-function-list"},"Utility Function List"),Object(s.b)("p",null,"TODO"),Object(s.b)("h2",{id:"user-content-introduction-to-existing-python-tests"},"Introduction to Existing Python Tests"),Object(s.b)("p",null,"TODO"))}c.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,b=u["".concat(a,".").concat(f)]||u[f]||p[f]||s;return n?r.a.createElement(b,l({ref:t},c,{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);