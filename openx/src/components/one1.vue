<template>
<div>
	{{demo}}
</div>
</template>

<script>
export default {
	name: '',
	inject: ['for'],
	components: {},
	data() {
		return { demo: this.for };
	},
	created() {},
	mounted() {},
	methods: {},
};
</script>
<style scoped lang='scss'>
</style>
