<template>
<div>
    <button @click="dombn">我是子组件</button> <br> <br>
    <button @click="dombtn">我是哥哥</button>
</div>
</template>

<script>
export default {
	name: '',
	components: {},
	data() {
		return {
			name: '我是子组件的值',
			name1: '我是哥哥',
		};
	},
	created() {},
	mounted() {},
	methods: {
		// 子父
		dombn() {
			this.$emit('parentdom', this.name);
		},
		// 兄弟
		dombtn() {
			this.$bus.$emit('brotherclick', this.name1);
		},
	},
};
</script>
<style scoped lang='scss'>
</style>
