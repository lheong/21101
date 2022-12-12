<template>
	<div>
		<!-- <h1>商品分类</h1> -->
			<el-card class="box-card">
	<el-button type="primary" style="margin-left: 15px;" @click="dialogFormVisible = true">添加用户</el-button>
 <el-table
    :data="classlist"
    style="width: 100%">
    <el-table-column type="expand">
      <!-- <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template> -->
    </el-table-column>
    <el-table-column
      label=""
      type="index">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="cat_name">
    </el-table-column>
    <el-table-column
      label="是否有效"
      prop="cat_deleted">
    </el-table-column>
    <el-table-column
      label="排序"
      prop="cat_level">
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
			classlist:[]
		}
	},
	methods: {

	},
	created () {
this.$http.send('/categories').then(res=>{
						console.log(res);
						this.classlist=res.data.data.result
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
