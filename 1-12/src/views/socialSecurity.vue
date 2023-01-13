<template>
	<div class='yearBox'>
		<el-card class="daBox">
			<button class="dangBox"><i class="el-icon-info" style="color: #5687fe"></i> 当前审批中0本月审批通过1本月审批驳回0</button>
			<el-button type="primary" @click="add">流程设置</el-button>
		</el-card>
		<el-card class="daaBox">
			<el-table ref="multipleTableRef" :data="tableData" style="width: 100%">
				<el-table-column type="selection" width="55" />
				<el-table-column type="index" label="序号" width="120" />
				<el-table-column property="processName" sortable label="审批类型" width="120" />
				<el-table-column property="username" sortable label="申请人" width="120" />
				<el-table-column property="procCurrNodeUserName" sortable label="当前审批人" width="240" />
				<el-table-column property="procData.startTime" sortable label="审批发起时间" width="180">
					<template slot-scope="scope">
						{{ scope.row.procApplyTime | filtimer }}
					</template>
				</el-table-column>

				<el-table-column property="processState" sortable label="审批状态" width="120">
					<template slot-scope="scope">
						<p v-show="scope.row.processState == 2">审批通过</p>
						<p v-show="scope.row.processState == 4">撤销</p>
						<p v-show="scope.row.processState == 1">审批中</p>
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="200">
					<template #default>
						<el-button link type="primary" size="small">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination :page-size="1" :pager-count="11" layout="prev, pager, next" :total="1">
			</el-pagination>
		</el-card>

	</div>
</template>
<script>
import axios from 'axios'
export default {
	data () {
		return {
			tableData: [],
			arr: [],
		}
	},
	methods: {
		getdata () {
			axios.get('/lists.json').then((res) => {
				console.log(res.data);
				this.tableData = res.data.data.rows;
				this.arr = res.data.data.rows;
			})
		},
		add () {
			this.$router.push('/qingjia')
		}
	},
	created () {
		this.getdata();

	},
	mounted () {

	},
	components: {

	},
	computed: {

	},
	filters: {
		filtimer (val) {
			return new Date(val * 1000).toLocaleDateString()
		}
	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
.yearBox {
	padding: 0 20px;
}

.daBox {
	margin-top: 20px;
	height: 70px;

	.dangBox {
		height: 30px;
		width: 300px;
		background-color: #E6F7FF;
		border: 1px solid #9FDAFF;
	}

	.el-button {
		margin-left: 770px;
	}
}

.daaBox {
	margin-top: 20px;
}

.el-pagination {
	margin-top: 20px;
	margin-left: 1000px;
}
</style>
