<template>
	<div>
		<!-- <h1>订单管理</h1 -->
		<el-card class="box-card">
  <el-input style="width:500px" placeholder="请输入内容" v-model="value" class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
<el-table
    :data="orderslist"
    style="width: 100%">
    <el-table-column
      label="#"
      width="60"
			type="index">
    </el-table-column>
    <el-table-column
      label="订单编号"
			prop="order_number">
    </el-table-column>
    <el-table-column
      label="订单价格"
			prop="order_price">
    </el-table-column>
    <el-table-column
      label="是否付款"
			prop="pay_status">
    </el-table-column>
    <el-table-column
      label="是否发货"
			prop="is_send">
    </el-table-column>
    <el-table-column
      label="下单时间"
			prop="create_time">
    </el-table-column>

    <el-table-column label="操作">
			<el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
			<el-button type="danger"  size="mini" icon="el-icon-delete"></el-button>
    
    </el-table-column>
  </el-table>

</el-card>
 </div>
</template>

<script>
export default {
	data () {
		return {
orderslist:[],
value:''
		}
	},
	methods: {

	},
	created () {
this.$http.send('/orders').then(res=>{
	console.log(res);
						this.orderslist=res.data.data.goods
				})
	},
	mounted () {

	},
	components: {

	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
</style>
