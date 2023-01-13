<template>
	<div class="jur">
		<div class="social-box">
			<el-card class="social-one">
				<div class="abc">
					<div class="one-box">
						<i class="el-icon-info" style="color: #5687fe"></i>
						本月：社保在缴 公积金在缴 增员 减员 入职 离职
					</div>
					<div class="tow">
						<el-button type="danger">历史归档</el-button>
						<el-button type="primary">202001报表</el-button>
					</div>
				</div>
			</el-card>
			<el-card>
				<div class="made">
					<div class="con-zero">
						<p>部门</p>
					</div>
					<div class="con">
						<div class="con-one" v-for="(item, index) in lists" :key="index">
							<input type="checkbox" />
							<div class="names">{{ item.name }}</div>
						</div>
					</div>
				</div>
				<div class="laoliu">
					<div>社保城市 <span><input type="checkbox">北京</span></div>
				</div>
				<div class="laoliu">
					<div>公积金城市 <span><input type="checkbox">北京</span></div>
				</div>
			</el-card>
			<el-table class="tab" :data="tableData" style="width: 100%">
				<el-table-column label="序号" type="index" width="60" />
				<el-table-column prop="username" sortable label="姓名" />
				<el-table-column prop="mobile" sortable label="手机" />
				<el-table-column prop="workNumber" sortable label="工号" />
				<el-table-column prop="departmentName" sortable label="部门" />
				<el-table-column prop="timeOfEntry" sortable label="入职时间" />
				<el-table-column prop="leaveTime" sortable label="离职时间" />
				<el-table-column prop="participatingInTheCity" label="社保城市" />
				<el-table-column prop="providentFundCity" label="公积金城市" />
				<el-table-column prop="socialSecurityBase" label="社保基数" />
				<el-table-column prop="providentFundBase" label="公益金基数" />
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	name: "",
	data () {
		return {
			lists: [
				{ name: "总裁办" },
				{ name: "行政部" },
				{ name: "人事部" },
				{ name: "财务部" },
				{ name: "技术部" },
				{ name: "运营部" },
				{ name: "市场部" },
				{ name: "财务核算部" },
				{ name: "税务管理部" },
				{ name: "Java研发部" },
				{ name: "Python研发部" },
				{ name: "Phy研发部" },
				{ name: "北京事业部" },
				{ name: "上海事业部" },
				{ name: "前端" },
				{ name: "前端程序员" },
				{ name: "1部" },
				{ name: "2部" },
				{ name: "大数据研发部" },
				{ name: "一人五百万" },
				{ name: "前端" },
				{ name: "112" },
				{ name: "123" },
				{ name: "秘书部2" },
				{ name: "人事部1223" },
				{ name: "asdsd" },
				{ name: "XDVDC" },
				{ name: "上海事耶部" },
				{ name: "你好" },
				{ name: "11" },
				{ name: "22" },
				{ name: "测试" },
				{ name: "PHP部门" },
				{ name: "1213" },
				{ name: "神里部门" },
				{ name: "c++" },
				{ name: "hsa" },
				{ name: "意义" },
				{ name: "测试111" },
				{ name: "12345" },
				{ name: "11111" },
				{ name: "555" },
				{ name: "asfasdf" },
				{ name: "666" },
				{ name: "32231" },
				{ name: "32212" },
				{ name: "金鲤跃龙门" },
				{ name: "万叶爷" },
				{ name: "哈哈哈" },
				{ name: "123q" },
				{ name: "13123" },
				{ name: "q11" },
				{ name: "1333" },
				{ name: "2333" },
				{ name: "q12" },
				{ name: "q13" },
				{ name: "q14" },
				{ name: "q15" },
				{ name: "222" },
				{ name: "16561" },
				{ name: "233" },
				{ name: "4444" },
				{ name: "444444444" },
				{ name: "33333333" },
				{ name: "2+" },
				{ name: "222222" },
				{ name: "3653" },
				{ name: "阿达大大" },
				{ name: "64654564" },
				{ name: "123" },
				{ name: "12333" },
				{ name: "3344" },
				{ name: "111111" },
				{ name: "666" },
				{ name: "ddddddddd" },
				{ name: "1111111" },
			],
			tableData: [
				{ "id": "1063705482939731968", "username": "cgx", "mobile": "13800000001", "workNumber": "", "departmentName": "", "timeOfEntry": "2018-11-01", "leaveTime": null, "participatingInTheCityId": "1084825908823904256", "participatingInTheCity": "北京", "socialSecurityBase": 10000, "providentFundCityId": "1084825908823904256", "providentFundCity": "北京", "providentFundBase": 10000 },
				{ "id": "1063705989926227968", "username": "666664587", "mobile": "13800000002", "workNumber": "9002", "departmentName": "总裁办", "timeOfEntry": "2018-11-02", "leaveTime": null, "participatingInTheCityId": "1084825908823904256", "participatingInTheCity": "北京", "socialSecurityBase": 10000, "providentFundCityId": "1084825908823904256", "providentFundCity": "北京", "providentFundBase": 10000 },
				{ "id": "1066370498633486336", "username": "孙财", "mobile": "13800000003", "workNumber": "111", "departmentName": "市场部", "timeOfEntry": "2018-11-04", "leaveTime": null, "participatingInTheCityId": "1084825908823904256", "participatingInTheCity": "北京", "socialSecurityBase": 3388, "providentFundCityId": "1084825908823904256", "providentFundCity": "北京", "providentFundBase": 2277 },
				{ "id": "1071632760222810112", "username": "罗晓晓", "mobile": "13800000004", "workNumber": "1111", "departmentName": "人事部", "timeOfEntry": "2018-12-02", "leaveTime": null, "participatingInTheCityId": "1084825908823904256", "participatingInTheCity": "北京", "socialSecurityBase": 5000, "providentFundCityId": "1084825908823904256", "providentFundCity": "北京", "providentFundBase": 5000 },
				{ "id": "1074238801330704384", "username": "文吉星", "mobile": "13400000001", "workNumber": "1001", "departmentName": "人事部", "timeOfEntry": "2018-01-01", "leaveTime": null, "participatingInTheCityId": "1084825908823904256", "participatingInTheCity": "北京", "socialSecurityBase": 5900, "providentFundCityId": "1084825908823904256", "providentFundCity": "北京", "providentFundBase": 5900 },
				{ "id": "1074238801402007552", "username": "巴思慧", "mobile": "13400000002", "workNumber": "1002", "departmentName": "人事部", "timeOfEntry": "2018-01-01", "leaveTime": null, "participatingInTheCityId": null, "participatingInTheCity": null, "socialSecurityBase": null, "providentFundCityId": null, "providentFundCity": null, "providentFundBase": null },
				{ "id": "1075383133106425856", "username": "乔海", "mobile": "13500000001", "workNumber": "2001", "departmentName": "总裁办", "timeOfEntry": "2018-01-01", "leaveTime": null, "participatingInTheCityId": null, "participatingInTheCity": null, "socialSecurityBase": null, "providentFundCityId": null, "providentFundCity": null, "providentFundBase": null },
				{ "id": "1075383135371350016", "username": "董昊空", "mobile": "13500000002", "workNumber": "2002", "departmentName": "总裁办", "timeOfEntry": "2018-01-01", "leaveTime": null, "participatingInTheCityId": null, "participatingInTheCity": null, "socialSecurityBase": null, "providentFundCityId": null, "providentFundCity": null, "providentFundBase": null },
				{ "id": "1075383135459430400", "username": "周乐天", "mobile": "13500000003", "workNumber": "2003", "departmentName": "财务部", "timeOfEntry": "2018-01-01", "leaveTime": null, "participatingInTheCityId": null, "participatingInTheCity": null, "socialSecurityBase": null, "providentFundCityId": null, "providentFundCity": null, "providentFundBase": null },
				{ "id": "1235396724497268736", "username": "吕勇锐", "mobile": "13600000001", "workNumber": "0001", "departmentName": "总裁办", "timeOfEntry": "1992-08-04", "leaveTime": null, "participatingInTheCityId": null, "participatingInTheCity": null, "socialSecurityBase": null, "providentFundCityId": null, "providentFundCity": null, "providentFundBase": null }
			]
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

.jur {
	padding: 20px;
}


.social-box {
	width: 100%;
	height: 80px;
	margin-bottom: 10px;
}

.social-one {
	height: 80px;
	line-height: 35px;
	width: 100%;
	margin-bottom: 10px;

	.abc {
		display: flex;

		.one-box {
			height: 30px;
			font-size: 15px;
			text-align: center;
			width: 400px;
			line-height: 30px;
			background-color: #e6f7ff;
			border: 1px solid #9fdaff;
		}

		.tow {
			margin-left: 600px;
			margin-right: 20px;

			.el-button {
				padding: 8px 15px 8px 15px;
			}
		}
	}
}

.made {
	display: flex;
	padding: 10px;

	.con-zero {
		width: 80px;
		font-weight: 700;

		p {
			width: 80px;
			text-align: right;
		}
	}
}

.con {
	display: flex;
	flex-flow: wrap;
}

.con-one {
	display: flex;
	flex-flow: wrap;
	align-items: center;
	margin-bottom: 30px;
	margin-left: 15px;
	margin-right: 15px;

	.names {
		margin-left: 5px;
	}
}

.laoliu {
	margin: 10px;

	div {
		width: 145px;
		text-align: right;
		font-weight: 700;

		span {
			margin-left: 10px;
			font-weight: 400;

			input {
				margin-right: 5px;
			}
		}
	}
}

.tab {
	margin-top: 20px;
	padding: 10px;
}
</style>
