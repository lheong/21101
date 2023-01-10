<template>
	<div class="home">
		<el-container>
			<el-aside :width="isCollapse ? '63px' : '200px'">
				<img src="../assets/微信图片_20230105194248.png" alt="">
				<el-menu default-active="2" class="el-menu-vertical-demo" text-color="#fff" :collapse="isCollapse" router>
					<el-menu-item index="/dashboard">
						<i class="el-icon-eleme" style="color:#fff"></i>
						<span>首页</span>
					</el-menu-item>
					<el-menu-item index="/staff">
						<i class="el-icon-user-solid" style="color:#fff"></i>
						<span>员工</span>
					</el-menu-item>
					<el-menu-item index="/organization">
						<i class="el-icon-s-tools" style="color:#fff"></i>
						<span>设置</span>
					</el-menu-item>
					<el-menu-item index="/CompanySettings">
						<i class="el-icon-s-cooperation" style="color:#fff"></i>
						<span>权限管理</span>
					</el-menu-item>
					<el-menu-item index="/jurisdiction">
						<i class="el-icon-s-grid" style="color:#fff"></i>
						<span>社保</span>
					</el-menu-item>
					<el-menu-item index="/socialSecurity">
						<i class="el-icon-s-order" style="color:#fff"></i>
						<span>审批</span>
					</el-menu-item>
					<el-menu-item index="/checkWork">
						<i class="el-icon-video-camera-solid" style="color:#fff"></i>
						<span>考勤</span>
					</el-menu-item>
					<el-menu-item index="/wages">
						<i class="el-icon-s-data" style="color:#fff"></i>
						<span>工资</span>
					</el-menu-item>
					<el-menu-item index="/Approval">
						<i class="el-icon-share" style="color:#fff"></i>
						<span>组织架构</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container class="one">
				<el-header>
					<div class="left">
						<i @click="(isCollapse = !isCollapse)" class="el-icon-s-unfold"></i>
						<span class="con">江苏传智播客教育科技股份有限公司</span>
						<span class="btn">体验版</span>
					</div>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	name: "",
	data () {
		return {
			isCollapse: false
		}
	},
	methods: {},
	created () { }
}
</script>

<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
}

.home {
	width: 100%;
	height: 100%;
}

.el-container {
	width: 100%;
	height: 100%;
}

.one {}


.el-header,
.el-footer {
	background-color: #3d6df8;
	color: #333;
	line-height: 60px;
	color: #fff;
}

.el-aside {
	background-color: #5a8bff;
	color: #333;
	height: 100vh;

	.el-menu {
		background-color: #5889FE;

	}
}

.el-main {
	background-color: #e9eef3;
	color: #333;
	height: 100vh;
}

.left {
	i {
		font-size: 25px;
	}

	.con {
		margin: 0 10px;
		font-size: 20px;
	}

	.btn {
		display: inline-block;
		background-color: #84a9fe;
		line-height: 16px;
		height: 30px;
		padding: 8px 10px 8px 10px;
		border-radius: 10px;
	}
}
</style>
