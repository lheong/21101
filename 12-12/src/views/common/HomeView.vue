<template>
	<div class="home">
		<el-container>
			<el-aside :width="isCollapse ? '63px' : '200px'">
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse"
					background-color="#333744" text-color="#fff" active-text-color="#ffd04b" router>
					<el-submenu :index="item.path" v-for="item in leftList" :key="item.id">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span slot="title">{{ item.authName }}</span>
						</template>
						<el-menu-item-group v-for="ele in item.children" :key="ele.id">
							<el-menu-item :index="ele.path">{{ ele.authName }}</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<header>
					<span class="left-span">
						<i @click="(isCollapse = !isCollapse)" class="el-icon-s-unfold"></i>
						<h1>电商后台管理系统</h1>
					</span>
					<span class="btn" @click="exit">
						退出登录
					</span>

				</header>
				<el-breadcrumb class="crumbs" separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item v-for="(item,i) in $route.meta" :key="i">{{item}}</el-breadcrumb-item>
				
				</el-breadcrumb>
				<router-view class="con"></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			leftList: [],
			isCollapse: false

		}
	},
	methods: {
		exit() {
			this.$router.push("/longin")
			this.$message({
				message: '成功退出',
				type: 'success'
			});
		}

	},
	created() {
		this.$http.send("/left").then(res => {
			console.log(res);
			this.leftList = res.data.data
		})

	},
	mounted() {

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
header {
	width: 100%;
	height: 60px;
	background: #373d41;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;

	.left-span {
		display: flex;
		align-items: center;
	}

	.el-icon-s-unfold {
		line-height: 60px;
		font-size: 20px;
		padding-left: 50px;
		padding-right: 50px;
	}

	.btn {
		padding: 10px 15px;
		border-radius: 8px;
		background: rgba(204, 204, 204, 0.252);

	}
}
.crumbs{
	margin: 30px;
}
.home{
	background: #eee;
}
</style>
