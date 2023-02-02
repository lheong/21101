<template>
<div>
    <h1>我是子组件:{{name}}</h1>
</div>
</template>

<script>
export default {
	// 父子
	props: ['name'],
	name: '',
	components: {},
	data() {
		return {};
	},
	created() {},
	mounted() {
		// 兄弟
		this.$bus.$on('brotherclick', (value) => {
			console.log(value);
		});
	},
	methods: {},
};
</script>
<style scoped lang='scss'>
</style>
