<template>
	<div class="qing">
		<div class="lll">
			<div class="one">
				请假 | <el-switch v-model="value1">
				</el-switch>
			</div>
			<div class="one">
				请假 | <el-switch v-model="value2">
				</el-switch>
			</div>
			<div class="one">
				请假 | <el-switch v-model="value3">
				</el-switch>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "",
	data () {
		return {
			value1: true,
			value2: true,
			value3: true,
		}
	},
	methods: {},
	created () { },
}
</script>

<style lang="scss" scoped>
.qing {
	padding: 20px;

	.lll {
		width: 100%;
		height: 120px;
		border: 1px solid #ccc;
		display: flex;
		align-items: center;

		.one {
			text-align: center;
			width: 150px;
			height: 50px;
			padding: 10px;
			border: 1px solid #ccc;
			margin-left: 20px;
		}
	}
}
</style>
