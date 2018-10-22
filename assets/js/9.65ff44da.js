(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("想想平时我们是怎么使用存储层的")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),a("p",[t._v("这么一来，存储层就和接口层对接起来了。业务测再也不用手动调用 api 获取数据。")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("每次读取数据时如果都要手动传同步函数，实际编码时还是很麻烦...")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("其实手动编写每个 api 请求函数也是很繁琐的，要是有个根据配置自动生成请求函数的库就好了~")]),t._v(" "),a("p",[t._v("诶~，巧了么不是~。各位开发者老爷们 "),a("a",{attrs:{href:"https://tuateam.github.io/tua-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tua-api"),a("OutboundLink")],1),t._v(" 了解一下~？")]),t._v(" "),t._m(14),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"数据同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据同步","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据同步")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("然而，仅仅有这些我认为还不够...")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("读取一个数据")]),t._v(" "),a("li",[t._v("正好存储层里有这个数据\n"),a("ul",[a("li",[t._v("返回数据（皆大欢喜，happy ending~）")])])]),t._v(" "),a("li",[t._v("假如存储层里没这个数据\n"),a("ul",[a("li",[t._v("手动调用各种方法去同步这个数据")]),t._v(" "),a("li",[t._v("手动存到存储层中，以便下次读取")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("各位有没有看出其中麻烦的地方在哪儿？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("数据同步部分的复杂度全留给了业务测。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("让我们回归这件事的【"),s("strong",[this._v("初心")]),this._v("】：我仅仅需要获取这个数据！我不管它是来自存储层、来自接口数据、还是来自其他什么地方...")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"同步函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 同步函数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因此 "),s("code",[this._v("tua-storage")]),this._v(" 在读取数据时很贴心地提供了一个 "),s("code",[this._v("syncFn")]),this._v(" 参数，作为数据同步的函数，当请求的数据不存在或已过期时自动调用该函数。并且数据同步后默认会保存下来，这样下次再请求时存储层中就有数据了。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("tuaStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("load")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    key"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'some data'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    syncFn"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("axios")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'some api url'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 以下参数会传到 syncFn 中")]),t._v("\n    syncParams"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'a'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"合并配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 合并配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("不急，吃口药~")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("tua-storage")]),t._v(" 在初始化时能够传递一个叫做 "),a("code",[t._v("syncFnMap")]),t._v(" 参数。顾名思义，这是一个将 "),a("code",[t._v("key")]),t._v(" 和 "),a("code",[t._v("syncFn")]),t._v(" 映射起来的对象。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tuaStorage "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TuaStorage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    syncFnMap"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'data one'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("axios")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'data one api'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'data two'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("axios")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'data two api'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 不用手动传 syncFn 了")]),t._v("\ntuaStorage"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("load")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" key"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'data one'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自动生成配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动生成配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动生成配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("tua-storage")]),this._v(" 搭配 "),s("code",[this._v("tua-api")]),this._v(" 之后会变成这样")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TuaStorage "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'tua-storage'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 小程序端要引入 'tua-api/dist/mp'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getSyncFnMapByApis "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'tua-api'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" apis "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@/apis'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tuaStorage "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TuaStorage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    syncFnMap"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getSyncFnMapByApis")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("apis"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="sync-data.md";s.default=e.exports}}]);