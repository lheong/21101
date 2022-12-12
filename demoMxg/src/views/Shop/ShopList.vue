<template>
	<div>
		<!-- <h1>商品列表</h1> -->
<el-card class="box-card">
  <el-input style="width:500px" placeholder="请输入内容" v-model="value" class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
	<el-button type="primary" style="margin-left: 15px;" @click="$router.push('/shopadd')">添加用户</el-button>
<el-table
    :data="shoplist"
    style="width: 100%">
    <el-table-column
      label="#"
      width="60"
			type="index">
    </el-table-column>
    <el-table-column
      label="商品名称"
			prop="goods_name" width="500">
    </el-table-column>
    <el-table-column
      label="商品价格"
			prop="goods_price">
    </el-table-column>
    <el-table-column
      label="商品重量"
			prop="goods_weight">
    </el-table-column>
    <el-table-column
      label="创建时间"
			prop="add_time">
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
			shoplist:[],
			value:''
		}
	},
	methods: {

	},
	created () {
this.$http.send('/goods').then(res=>{
						console.log(res);
						this.shoplist=res.data.data.goods
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
