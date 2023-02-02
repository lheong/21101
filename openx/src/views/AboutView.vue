<template>
<div>
	<!-- vuex -->
	<ul>
		<li v-for="(item,index) in $store.state.list" :key='index'>{{item.name}} - {{item.age}}</li>
	</ul>
	<!-- 本地存储 -->
	<ul>
		<li>{{obj}}</li>
	</ul>
</div>
</template>

<script>
export default {
	name: '',
	components: {},
	data() {
		return {
			obj: '',
		};
	},
	created() {
		this.obj = localStorage.getItem('list');
	},
	mounted() {},
	methods: {},
};
</script>
<style scoped lang='scss'>
</style>
