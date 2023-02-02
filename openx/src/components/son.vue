<template>
<div>
    <span>{{messageA}}</span>
	<p>获取父组件的值为：{{parentVal}}</p>
</div>
</template>

<script>
export default {
	name: '',
	components: {},
	data() {
		return {
			messageA: 'this is',
		};
	},
	computed: {
		parentVal() {
			return this.$parent.msg1;
		},
	},
	created() {},
	mounted() {},
	methods: {},
};
</script>
<style scoped lang='scss'>
</style>
