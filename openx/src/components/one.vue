<template>
<div>
    {{demo}}
    <ones></ones>
</div>
</template>

<script>
import ones from '../components/one1';
export default {
	name: '',
	inject: ['for'],
	components: {
		ones,
	},
	data() {
		return {
			demo: this.for,
		};
	},
	created() {},
	mounted() {},
	methods: {},
};
</script>
<style scoped lang='scss'>
</style>
