<template>
<div>
  <!-- 父子 -->
  <FatherView :name="name"></FatherView>
  
  <!-- 子父 -->
  <SonFatherView @parentdom="dom"></SonFatherView>
  <h2>这是子组件传来的值:{{msg}}</h2>

  <!-- vuex -->
  <button @click="add">vuex传值</button>

  <!-- 本地存储 -->
  <button @click="Localstorage">本地存储</button>

  <!-- ref -->
  <son-view ref="sonDate"></son-view>

  <!-- $parent/$chidren -->
  <div>{{msg1}}</div>
  <son></son>
  <button @click="chan">点击改变子组件值</button>

  <!-- provide/inject -->
  <one></one>
</div>
</template>

<script>
// 父传子
import FatherView from '../components/FatherView';
// 子传父
import SonFatherView from '../components/SonFatherView';
// ref
import sonView from '../components/sonView';
// $parent/$chidren
import son from '../components/son';
// provide/inject
import one from '../components/one';

export default {
	name: '',
	components: {
		FatherView,
		SonFatherView,
		sonView,
		son,
		one,
	},
	provide: {
		for: 'demo',
	},
	data() {
		return {
			name: '我是从父组件的值',
			msg: '',
			list: [
				{
					name: 'zs',
					age: 19,
				},
				{
					name: 'ls',
					age: 19,
				},
				{
					name: 'wu',
					age: 19,
				},
			],
			list1: '本地数据',
			msg1: 'Welcome11',
		};
	},
	created() {},
	mounted() {
		// ref
		const sonDate = this.$refs.sonDate;
		console.log(sonDate.name1);
		sonDate.sayHello();
	},
	methods: {
		// 子父
		dom(value) {
			this.msg = value;
		},
		// vuex
		add() {
			this.$store.commit('add', this.list);
		},
		// 本地存储
		Localstorage() {
			localStorage.setItem('list', this.list1);
		},
		// $parent/$chidren
		chan() {
			this.$children[0].messageA = 'this is new value';
		},
	},
};
</script>
<style scoped lang='scss'>
</style>
