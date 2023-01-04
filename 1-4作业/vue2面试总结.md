## diff算法
	Diff算法的步骤：
	1.js 对象表示真实的 dom 结构，就是我们说的生成一个虚拟 dom，再用虚拟 dom 构建一个真的 dom 树，放到页面中。 
	2.状态改变的时候生成一个新的虚拟 dom 跟旧的进行对比，这个对比的过程就是 diff 算法，通过 patch 对象记录差异 
	3.把记录的差异用在第一个虚拟 dom 构建的真实的 dom 上，视图就更新了
	
	Vue 的 diff 算法是平级⽐较，不考虑跨级⽐较的情况。内部采⽤深度递归的⽅式+双指针⽅式⽐较
	
	diff 算法就是对虚拟 dom 进行对比，并返回一个 patch 对象，这个对象的作用是存储两个节点不同的地方，最后用 patch 里记录的信息去局部更新真实的 dom

## 虚拟 dom
	虚拟dom就是一个普通的js对象。是一个用来描述真实dom结构的js对象，因为他不是真实dom，所以才叫虚拟dom。
	
	虚拟dom可以很好的跟踪当前dom状态，因为他会根据当前数据生成一个描述当前dom结构的虚拟dom，然后数据发送变化时，又会生成一个新的虚拟dom，而这两个虚拟dom恰恰保存了变化前后的状态。然后通过diff算法，计算出两个前后两个虚拟dom之间的差异，得出一个更新的最优方法（哪些发生改变，就更新哪些）。可以很明显的提升渲染效率以及用户体验。

## 插槽
	插槽就是⼀个占位符,将⾃定义组件的内容展示出来
	
	插槽分别具名插槽和匿名插槽、以及作⽤域插槽. 我们⽤的⽐较多的具名插槽和匿名插槽,
	具名插槽需要所有 slot 标签上指定name 属性,⽽在对应标签上添加# 属性指定名字.
	作用域插槽：是把子组件里的数据传到父组件的插槽里使用

## 过滤器 filter

	所谓的 vue 过滤器就是将数据进⾏⼆次处理,得到我们想要的结果数据
	vue 的过滤器分为两种,第⼀种是全局过滤器,通过 vue.filter 来进⾏定义,第⼆种是局部过滤器,需要定义在组件内部，用 filters 过滤
	项⽬中我们通过过滤器将后台返回的状态 0 和 1 转化为⽀付或者未⽀付 还有对时间格式进行过滤

## 常用的修饰符
	.trim 去除⾸尾多余的空格
	.stop 阻⽌事件冒泡
	.once 只渲染⼀次
	.self 事件只作⽤在元素本身
	.number 将值转化为 number 类型
	.capter 组件之间捕获
	.prevent 阻⽌元素的默认⾏为
	.native 事件穿透,让我们可以在⾃定义组件上触发原生的事件

## 组件通信
	父传子：在父组件中的子组件的标签上 添加自定义属性，在子组件中通过 props 来接收，在接收的时候有两种接收方式 数组形式 和 对象形式 。对象形式可以规定传来的变量的数据类型（type）默认值（default）以及是否必填（required）
	
	子传父：首先在使用子组件的标签上定义一个自定义事件 在子组件里通过 this.$emit 去调用这个自定义事件 $emit 方法的第一个参数是自定义事件的名字 第二个参数是就是子组件要传递给父组件的变量 最后在父组件接收使用就可以了
	
	兄弟组件：利用中央事件总线 eventbus
	把一个空的 vue 实例挂载在 vue 的原型上起名叫$bus
	传数据的时候用this.$bus.$emit传 
	在要接受数据的子组件 在 created钩子函数中 用$on 方法接收
	
	利用 vuex 进行组件通信 把公共的数据存在 vuex 里就可以实现组件之间都能使用这个数据了

## methods computed watch

	 methods 就是方法 我们写的点击事件等各种事件都放在 methods 里
	 
	 计算属性 computed 计算属性 有缓存功能就是当跟他有关的值发生变化的时候才会重新计算 还有一个特点就是必须要有 return 值 return 就是把计算的结果 return 出去
	 
	 watch 可以用来监听 数据和路由的变化
	watch 有三个参数 deep immediate handler
	当我们不需要 deep 和 immediate 的时候 就可以简写为一个函数 这个函数就是 handler

## 导航守卫

	路由的导航守卫 又叫做路由的钩子函数（生命周期函数）
	就是在跳转页面的 时候把 路由拦下来 做一些操作 再放行
	
	全局守卫 
	beforeEach 路由进入之前 afterEach 路由进入之后
	
	组件内守卫
	beforeRouteEnter 路由进入之前
	beforeRouteUpdate 路由更新之前
	beforeRouteLeave 路由离开之前
	
	独享守卫
	beforeEnter 路由进入之前
	
	都有三个参数：to from next
	to：从哪里来；from：到哪里去；next：下一步，放行
	next 参数 除了括号里可以是空和路径之外 还可以是一个回调函数（回调函数就是一个被作为参数传递的函数）
	next 这个参数 在vu2中是必须的但是到了vue3的时候 next 参数变成可选的了
	
	全局 组件 独享守卫的区别：
	1. 作用范围不同 全局作用于所有页面 组件作用于单个组件 独享也是守卫单个页面
	2. 代码写的位置不一样 全局守卫写在 router/index.js 中 组件守卫写在组件里 跟 data 同级 独享守卫写在路由规则里
	3. 执行顺序有区别 执行的顺序要记下来
	   beforeEach 前置守卫
	   beforeEnter 独享守卫
	   beforeRouteEnter 组件守卫
	   beforeResolve 解析守卫
	   afterEach 路由后置守卫

## vuex 

	vuex 的执行机制
	在项⽬当中如果要改变 state 的状态,我们⼀般是在组件⾥⾯调⽤ this.$store.dispatch ⽅式来触发 actions ⾥⾯的⽅法,在actions⾥⾯的⽅法通过 commit 来调⽤ mutations ⾥⾯定义的⽅法来改变 state,同时这也是 vuex 的执⾏机制
	
	vuex 的理解
	vuex 是 vue 的状态管理工具 管理项目中的公共数据 能够在所有的组件中使用
	一共有五大核心：
	state 存放公共数据的地方 通过 this.$store.state.xxx调用
	mutations 修改 state 的地方 只有这里能修改 通过this.$store.commit 调用
	getters 相当于是之前的计算属性 通过 this.$store.getters 调用
	actions 执行异步操作的地方 通过 this.$store.dispatch 调用
	modules 模块化
	vuex 缺点就是刷新数据会丢失 我们可以保存本地存储 或者 安装 vuex 持久化插件 vuex-persist 去实现自动本地存储

## 路由的模式 以及原理
	哈希模式
	1、hash模式是比较好区分的，凡是我们的url后带有“#”的都属于hash模式；
	2、hash“#”后的值，不会包含在http请求中，改变hash的值不会引起页面的重新载
	3、hash可以兼容到ie8以上
	
	history模式
	1、url不带参数，所以看起来比较美观
	2、history依赖于前后端交互，即将url修改的就和正常请求的后端url一样，如后端没有配置对应的/user/id的路由处理，就会返回404错误
	3、history可以兼容到ie10
	history的原理就是利⽤html5新增的两个特性⽅法,分是pushState和replaceState来完成的

## vue 中 key 的作⽤

	避免 dom 元素重复渲染.
	 我们⼀般在设置 key 的时候⾸先尽量会设置为 id,或者 index 下表.
	 key的值是唯一的

## vue双向数据绑定原理

	1、vue双向数据绑定是 通过 数据劫持 并结合 发布-订阅模式 的方法来实现的。 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变。
	2、其中 数据劫持 是通过 Object.defineProperty() 方法实现的。vue 在内部会把定义在 data 中的属性通过这个方法全部转为 getter/setter。
	3、在数据变动时发布消息给订阅者，触发相应的监听回调。这个时候就可以实现数据的双向绑定

## vue 常⽤的指令

	v-if ：判断是否显示隐藏
	v-for：数据循环
	v-bind：绑定属性，可以简写为：
	v-model: 实现数据双向绑定
	v-show:判断隐藏显示
	v-on: 事件绑定指令,可以简写为@
	
	内容渲染指令：
	v-text：
	作用：将对应的值渲染到元素内部
	缺点：会覆盖元素内部原有的内容
	v-html：
	可以把包含HTML标签的字符串渲染为页面的HTML元素。

## v-if 与 v-show 的区别

	v-if：动态创建或移除元素，实现元素的显示与隐藏
	
	v-show：动态为元素添加和移除 display: none 样式，实现元素的显示与隐藏
	
	性能区别：
	如果要频繁的显示和隐藏，v-show的性能更好，因为动态创建和移除元素浏览器会出现重绘等机制，所以会消耗更多的性能。
	如果刚进入页面的时候，某些元素默认不需要被展示，而且后期这个元素很可能也不需要被展示出来，此时v-if性能更好。

## 生命周期函数

	beforeCreate 实例创建之前
	beforeCreate可以获取到this，this指向创建好的组件实例，beforeCreate中不能获取到data、methods、computed中的数据和方法
	
	created 实例创建之后
	created也可以获取到this，我们一般都在created中发送请求和获取本都存储数据。created可以获取到data，methods、computed的数据和方法。如果要在created中获取到dom元素可以使用this.$nextTick，this.$nextTick参数是一个函数
	
	beforeMount  组件挂载之前
	
	mounted  组件挂载之后
	mounted中可以获取到dom元素
	
	beforeUpdate  数据变了，视图还没变
	
	updated   数据变了，视图也变了
	
	beforeDestory   组件销毁之前
	beforeDestory是最后一个可以获取到data和methods的钩子函数。
	
	destoryed  组件销毁之后

## ⽗⼦组件⽣命周期执⾏的顺序

	页面—beforeCreate
	页面—created
	页面—beforeMount
	组件—beforeCreate
	组件—created
	组件—beforeMount
	组件—mounted
	页面—mounted

## keep-alive

	当组件进行切换的时候，一般默认会把页面进行销毁，而keep-alive是vue的一个内置组件，作用就是保存组件的状态，让他不被销毁，
	组件使用keep-alive之后会新增两个生命周期activated，和deactivated，activated是激活，deactivated是失活。
	当遇到有些组件不需要缓存时，这个时候就可以用到keep-alive标签的两个属性，include属性和exclude属性 ：
	include（白名单）属性定义了要缓存谁，exclude（黑名单）属性定义了不缓存谁，要想黑白名单生效，可以通过name来让属性生效

## v-for 与 v-if 的优先级

	v-for 的优先级⾼. 因为 v-for 的时候我们才开始渲染 dom 元素,这个 v-if 还⽆法进⾏判断.
	
	v-for 和 v-if 不能同时使⽤,我们可以通过标签,⽐如 div 或者 template 标签来进⾏包裹,把 v-if 写到包裹的标签上⾯(写到 v-for 外⾯)

