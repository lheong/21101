<template>
    <div class="social">
        <div class="social-box">
            <el-card class="social-one">
                <div class="abc">
                    <div class="one-box">有0条考勤审批尚未处理</div>
                    <div class="tow">设置</div>
                    <div class="three">202003月报表</div>
                </div>
            </el-card>
        </div>
        <el-card>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="序号" type="index" width="60" />
                <el-table-column prop="username" label="姓名" width="100" />
                <el-table-column prop="mobile" label="手机" width="180" />
                <el-table-column prop="workNumber" label="工号" />
                <el-table-column prop="formOfEmployment" label="聘用形式" />
                <el-table-column prop="departmentName" label="部门" />
                <el-table-column prop="timeOfEntry" label="入职时间" />
                <el-table-column prop="currentBasicSalary" label="工资基数" width="100" />
                <el-table-column prop="inServiceStatus" type="1" label="津贴方案" />
                <el-table-column prop="companyId" label="操作">
                    <template #default="scope">
                        <el-button class="bo" size="small" type="primary">调薪</el-button>
                        <el-button class="bo" size="small">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="page">
                <el-pagination page-sizes="10" small background
                    layout="prev, pager, next" :total="20" />
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, reactive, toRefs } from 'vue';
// 引入路由
const router = useRouter();
// 引入仓库
const store = useStore();
const data = reactive({
});
const tableData = [
    { "username": "管理员", "departmentName": "总裁办", "timeOfEntry": "2018-11-02", "id": "1063705989926227968", "mobile": "13800000002", "workNumber": "9002", "currentBasicSalary": 123.00, "currentPostWage": 456.00, "departmentId": "1175310929766055936", "inServiceStatus": "通用方案", "formOfEmployment": "正式" },
    { "timeOfEntry": "2018-11-04", "currentPostWage": 20.00, "workNumber": "111", "mobile": "13800000003", "currentBasicSalary": 20.00, "id": "1066370498633486336", "departmentId": "1175311466846683136", "departmentName": "市场部", "username": "孙财", "inServiceStatus": "通用方案", "formOfEmployment": "正式" },
    { "username": "罗晓晓", "timeOfEntry": "2018-12-02", "currentBasicSalary": 3.00, "workNumber": "1111", "id": "1071632760222810112", "mobile": "13800000004", "departmentName": "人事部", "currentPostWage": 3.00, "departmentId": "1175311267684352000", "inServiceStatus": "通用方案", "formOfEmployment": "正式" },
    { "workNumber": "1001", "username": "文吉星", "departmentName": "人事部", "id": "1074238801330704384", "currentBasicSalary": 5000.00, "departmentId": "1175311267684352000", "mobile": "13400000001", "currentPostWage": 5000.00, "inServiceStatus": "通用方案", "timeOfEntry": "2018-01-01", "formOfEmployment": "正式" },
    { "workNumber": "1002", "currentBasicSalary": 100.00, "departmentName": "人事部", "currentPostWage": 100.00, "mobile": "13400000002", "id": "1074238801402007552", "username": "巴思慧", "departmentId": "1175311267684352000", "inServiceStatus": "通用方案", "timeOfEntry": "2018-01-01", "formOfEmployment": "正式" },
    { "departmentName": "总裁办", "currentBasicSalary": 7.00, "id": "1075383133106425856", "username": "乔海", "mobile": "13500000001", "currentPostWage": 7.00, "departmentId": "1175310929766055936", "workNumber": "2001", "inServiceStatus": "通用方案", "timeOfEntry": "2018-01-01", "formOfEmployment": "正式" },
    { "username": "董昊空", "departmentName": "总裁办", "workNumber": "2002", "currentPostWage": 123.00, "mobile": "13500000002", "id": "1075383135371350016", "currentBasicSalary": 123.00, "departmentId": "1175310929766055936", "inServiceStatus": "通用方案", "timeOfEntry": "2018-01-01", "formOfEmployment": "正式" },
    { "workNumber": "2003", "departmentName": "财务部", "departmentId": "1175311325720936448", "mobile": "13500000003", "username": "周乐天", "id": "1075383135459430400", "currentPostWage": 10.00, "currentBasicSalary": 10.00, "inServiceStatus": "通用方案", "timeOfEntry": "2018-01-01", "formOfEmployment": "正式" },
    { "timeOfEntry": "1992-08-04", "id": "1235396724497268736", "departmentName": "总裁办", "currentBasicSalary": 8888.00, "mobile": "13600000001", "workNumber": "0001", "currentPostWage": 8888.00, "username": "吕勇锐", "departmentId": "1175310929766055936", "inServiceStatus": "通用方案", "formOfEmployment": "正式" },
    { "username": "袁永安", "mobile": "13600000002", "workNumber": "0002", "currentPostWage": null, "departmentName": "总裁办", "currentBasicSalary": 200000000, "id": "1235396819959627776", "departmentId": "1175310929766055936", "timeOfEntry": "1993-08-04", "inServiceStatus": "通用方案", "formOfEmployment": "正式" }
];
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

.page {
    margin-top: 20px;
    margin-left: 900px;
    width: 350px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    line-height: 40px;

    div {
        .num {
            display: inline-block;
            width: 60px;
            line-height: 30px;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: center;
        }
    }
}

.social-box {
    width: 100%;
    margin-bottom: 10px;
}

.social-one {
    height: 70px;
    line-height: 35px;
    width: 100%;
    margin-bottom: 5px;

    .abc {
        display: flex;

        .one-box {
            height: 30px;
            font-size: 15px;
            text-align: center;
            width: 200px;
            line-height: 30px;
            background-color: #E6F7FF;
            border: 1px solid #9FDAFF;
        }

        .tow {
            margin-left: 820px;
            margin-right: 20px;

            .el-button {
                padding: 5px 10px 5px 10px;
            }
        }

    }


}

.made {
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;

    .con-zero {
        width: 140px;
        font-weight: 700;
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

    input {
        margin-left: 30px;
    }

    .names {
        margin-left: 5px;
    }
}

.bo {
    padding: 5px 10px 5px 10px;
}
</style>