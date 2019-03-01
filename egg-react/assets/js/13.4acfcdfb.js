(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{313:function(a,t,s){"use strict";s.r(t);var e=s(46),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"开发部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发部署","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发部署")]),a._v(" "),s("h3",{attrs:{id:"新项目开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新项目开发","aria-hidden":"true"}},[a._v("#")]),a._v(" 新项目开发")]),a._v(" "),s("p",[a._v("在 "),s("a",{attrs:{href:"https://github.com/hubcarl/egg-react-webpack-boilerplate",target:"_blank"}},[a._v("egg-react-webpack-boilerplate")]),a._v(" 骨架项目中, 提供了一些demo, 如果要进行新项目开发，可以删除部分文件：")]),s("ul",[s("li",[s("p",[a._v("app/web/page 是页面目录。下面的每个目录都是一个单独的页面，其中 spa 目录是一个单页面服务端渲染例子，其他是简单的 React 服务端渲染例子， 这些文件都可以删除，删除后，你需要自己按照类似方式添加页面进行开发。")])])]),s("ul",[s("li",[s("p",[a._v("app/controller 是服务端页面处理逻辑入口，下面都是例子，可以删除， 然后自己根据业务添加对应的controller")])])]),s("ul",[s("li",[s("p",[a._v("asset 是几个公共的静态资源文件，如果 app/web/component下面没有引用到，可以根据需要删除")])])]),s("ul",[s("li",[s("p",[a._v("controller 和 page 删除了部分文件后，需要清理 app/router.js 和 webpack.config.js 下面文件不存在的一下配置")])])]),s("ul",[s("li",[s("p",[a._v("app/web/component 下面的 app 是单页面的 router 配置，如果 app/web/page/app  删除了，这个也可以删除")])])]),s("ul",[s("li",[s("p",[a._v("app/web/component/layout 提供了单页面 layout 和 多页面 layout, 自己根据需要选用。")])])]),a._v(" "),s("h3",{attrs:{id:"纯净版本分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纯净版本分支","aria-hidden":"true"}},[a._v("#")]),a._v(" 纯净版本分支")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/hubcarl/egg-react-webpack-boilerplate",target:"_blank"}},[a._v("egg-react-webpack-boilerplate")]),a._v(" 项目单独提供了两个纯净版本分支用于实际项目开发")]),s("ul",[s("li",[s("p",[a._v("Egg2 + React 多页面服务端渲染分支 "),s("a",{attrs:{href:"https://github.com/hubcarl/egg-react-webpack-boilerplate/tree/feature/green/multi",target:"_blank"}},[a._v("feature/green/multi")])])])]),s("ul",[s("li",[s("p",[a._v("Egg2 + React + React Router + Redux + React-Redux 单页面服务端渲染分支 "),s("a",{attrs:{href:"https://github.com/hubcarl/egg-react-webpack-boilerplate/tree/feature/green/spa",target:"_blank"}},[a._v("feature/green/spa")])])])]),a._v(" "),s("h3",{attrs:{id:"本地开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地开发","aria-hidden":"true"}},[a._v("#")]),a._v(" 本地开发")]),a._v(" "),s("p",[a._v("一般我们推荐把 "),s("code",[a._v("easy build dev")]),a._v(", "),s("code",[a._v("easy build test")]),a._v(", "),s("code",[a._v("easy build prod")]),a._v(" 配置到 项目的 "),s("code",[a._v("package.json")]),a._v(" 的 script 中去, 然后通过 npm run [command] 的方式使用。")]),s("ul",[s("li",[s("p",[a._v("通过 "),s("code",[a._v("npm run [command]")]),a._v(" 方式使用 easy 命令时，不需要全局安装 "),s("code",[a._v("easywepback-cli")]),a._v(" 命令行工具, 只需要把 "),s("code",[a._v("easywepback-cli")]),a._v(" 安装到项目 "),s("code",[a._v("devDependencies")]),a._v(" 即可。")])])]),s("ul",[s("li",[s("p",[a._v("在命令行直接使用 "),s("code",[a._v("easy")]),a._v(" 命令时，需要全局安装 "),s("code",[a._v("easywepback-cli")]),a._v(" 命令行工具。如果不安装, 可以通过 npm5 支持的 "),s("code",[a._v("npx easy")]),a._v(" 方式运行。")])])]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"clean"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"easy clean"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"debug"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"egg-bin debug"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"build"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cross-env easy clean && easy build prod"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dev"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"egg-bin dev"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"start"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"egg-scripts start"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n")])])]),s("ul",[s("li",[s("p",[a._v("本项目本地开发过程中, "),s("code",[a._v("npm run dev")]),a._v("  自动启动 Webpack 内存构建，无需手动构建;")])])]),s("ul",[s("li",[s("p",[a._v("测试环境和正式环境部署一定要先进行 "),s("code",[a._v("npm run build")]),a._v(" 模式构建，然后再打包, 只用用 "),s("code",[a._v("npm start")]),a._v("  启动")])])]),s("ul",[s("li",[s("p",[a._v("如果不是用 "),s("code",[a._v("egg-scripts start")]),a._v(" 启动应用， 请配置"),s("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/env.html",target:"_blank"}},[a._v("EGG_SERVER_ENV")]),a._v(" 环境变量。"),s("code",[a._v("EGG_SERVER_ENV")]),a._v("表示 Egg 用那种方式启动, "),s("code",[a._v("test")]),a._v(" 表示读取 "),s("code",[a._v("config.test.js")]),a._v(" 配置， "),s("code",[a._v("prod")]),a._v(" 表示读取 "),s("code",[a._v("config.prod.js")]),a._v(" 配置， 线上运行一定要用 "),s("code",[a._v("prod")]),a._v(" 模式。例如自己写 "),s("code",[a._v("index.js")]),a._v("  启动脚本, 然后通过 "),s("code",[a._v("node index.js")]),a._v("   启动时，请配置 "),s("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/env.html",target:"_blank"}},[a._v("EGG_SERVER_ENV")]),a._v(" 环境变量。")])])]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ${root}/index.js")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'egg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("startCluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n baseDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" __dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("PORT")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n")])])]),s("h4",{attrs:{id:"本地开发模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地开发模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 本地开发模式")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run dev \n")])])]),s("p",[a._v("使用 "),s("code",[a._v("egg-webpack")]),a._v(" 插件进行前端资源构建, 这个插件只会在本地开发启用。")]),a._v(" "),s("h4",{attrs:{id:"本地模拟测试环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地模拟测试环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 本地模拟测试环境")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("easy build "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" start \n")])])]),s("h4",{attrs:{id:"本地模拟正式环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地模拟正式环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 本地模拟正式环境")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run build\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" start \n")])])]),s("h3",{attrs:{id:"打包部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包部署","aria-hidden":"true"}},[a._v("#")]),a._v(" 打包部署")]),a._v(" "),s("p",[a._v("项目开发完成以后，我们要部署上线, 一般如下步骤:")]),a._v(" "),s("h4",{attrs:{id:"清除缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 清除缓存")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run clean \n")])])]),s("h4",{attrs:{id:"开始构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始构建","aria-hidden":"true"}},[a._v("#")]),a._v(" 开始构建")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run build \n")])])]),s("h4",{attrs:{id:"打包上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包上传","aria-hidden":"true"}},[a._v("#")]),a._v(" 打包上传")]),a._v(" "),s("blockquote",[s("p",[a._v("这里需要你自己实现把构建好的文件和项目问题一起打成 zip 或 tar 包，然后上传到部署平台进行部署。参数配置请见："),s("a",{attrs:{href:"https://www.yuque.com/easy-team/easywebpack/build",target:"_blank"}},[a._v("https://www.yuque.com/easy-team/easywebpack/build")])])]),s("ul",[s("li",[s("p",[a._v("需要把构建后的文件(public目录，app/view 目录， config/manifest.json)与项目源代码一起打包部署，当然部分文件("),s("a",{attrs:{href:"http://README.md",target:"_blank"}},[a._v("README.md")]),a._v(", eslint, gitignore等)可以不打进去。")])])]),s("ul",[s("li",[s("p",[a._v("如果 "),s("code",[a._v("node_modules")]),a._v(" 在打包时也打进去，packjson.json 里面的 devDependencies 依赖是不需要打进去的，这些只在开发期间和 Webpack 构建期间用到，不需要打进去。如果打进去也没有问题，只是包非常大，部署上传是个问题。")])])]),s("ul",[s("li",[s("p",[a._v("如果 "),s("code",[a._v("node_modules")]),a._v(" 在打包时不打进去，在"),s("strong",[a._v("启动")]),a._v("之前，你需要先按照依赖 "),s("code",[a._v("npm install --production")])])])]),a._v(" "),s("h5",{attrs:{id:"cli-zip打包-内置依赖和node-："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-zip打包-内置依赖和node-：","aria-hidden":"true"}},[a._v("#")]),a._v(" cli zip打包(内置依赖和node)：")]),a._v(" "),s("p",[s("strong",[a._v("这里会把代码，构建文件，node_modules 以及 node 一起压缩程 zip， 这样线上在启动时就不需要按照依赖。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("easy clean all\neasy build prod\neasy "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" --deps --nodejs \n")])])]),s("h5",{attrs:{id:"cli-zip打包-线上安装依赖-："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-zip打包-线上安装依赖-：","aria-hidden":"true"}},[a._v("#")]),a._v(" cli zip打包(线上安装依赖)：")]),a._v(" "),s("p",[s("strong",[a._v("这里仅仅把代码，构建文件一起压缩程 zip， 这样线上在启动时需要运行 npm install --production 按照依赖。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("easy clean all\neasy build prod\neasy "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" \n")])])]),s("h4",{attrs:{id:"线上项目启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线上项目启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 线上项目启动")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" start \n")])])]),s("p",[a._v("如果不是用 "),s("code",[a._v("egg-scripts start")]),a._v(" 启动应用， 请配置 "),s("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/env.html",target:"_blank"}},[a._v("EGG_SERVER_ENV")]),a._v(" 环境变量 "),s("code",[a._v("EGG_SERVER_ENV=prod NODE_ENV=production")]),a._v("  配置环境变量")])])},[],!1,null,null,null);t.default=n.exports}}]);