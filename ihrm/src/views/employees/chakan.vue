<template>
  <!-- 查看信息模块 -->
  <div class="Staffsee">
    <el-card class="box-card">
      <el-tabs v-model="activeName">
        <!-- 登陆账户设置 -->
        <el-tab-pane label="登陆账户设置" name="first">
          <div class="first">
            <div>
              <span>姓名:</span>
              <input v-model="list.username" />
            </div>
            <div>
              <span>密码:</span>
              <input v-model="list.password" />
            </div>
            <div>
              <el-button size="mini" type="primary">更新</el-button>
            </div>
          </div>
        </el-tab-pane>
        <!-- 个人详情 -->
        <el-tab-pane label="个人详情" name="second">
          <div class="con">
            <div class="center">
              <div class="p">
                <div class="p-p">
                  <span style="width: 40px" class="weight">工号</span>
                  <el-input v-model="list.workNumber"></el-input>
                </div>
                <div class="p-p">
                  <span class="weight">入职时间</span>
                  <el-date-picker
                    v-model="list.correctionTime"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 40px" class="weight">姓名</span>
                  <el-input v-model="list.username"></el-input>
                </div>
                <div class="p-p">
                  <span class="weight" style="width: 40px">部门</span>
                  <el-input v-model="list.departmentName"></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 40px" class="weight">手机</span>
                  <el-input disabled v-model="list.mobile"></el-input>
                </div>
                <div class="p-p">
                  <span class="weight">聘用形式</span>
                  <el-select value="" placeholder="请选择">
                    <el-option label="正式" value="正式"> </el-option>
                    <el-option label="非正式" value="非正式"> </el-option>
                  </el-select>
                </div>
              </div>
              <div class="img">
                <span class="weight">员工头像</span>
                <img :src="list.staffPhoto" alt="" />
              </div>
              <div class="btn">
                <el-button type="primary">保存更新</el-button>
                <el-button type="primary">返回</el-button>
              </div>
            </div>
            <div class="text">基础信息</div>
            <div class="center">
              <div class="p">
                <div class="p-p">
                  <span class="weight">最高学历</span>
                  <el-select value="" placeholder="请选择">
                    <el-option label="本科" value="本科"> </el-option>
                    <el-option label="硕士" value="硕士"> </el-option>
                    <el-option label="研究生" value="研究生"> </el-option>
                    <el-option label="博士" value="博士"> </el-option>
                  </el-select>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span class="weight">员工照片</span>
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                  >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span class="weight">国家/地区</span>
                  <el-select value="" placeholder="请选择">
                    <el-option label="中国" value="中国"> </el-option>
                    <el-option label="港外" value="港外"> </el-option>
                  </el-select>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">护照号</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">身份证号</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">籍贯</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">民族</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span class="weight">婚姻状态</span>
                  <el-select value="" placeholder="请选择">
                    <el-option label="未婚" value="未婚"> </el-option>
                    <el-option label="已婚" value="已婚"> </el-option>
                    <el-option label="离异" value="离异"> </el-option>
                  </el-select>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">生日</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">年龄</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span class="weight">星座</span>
                  <el-select value="" placeholder="请选择">
                    <el-option label="处女" value="处女"> </el-option>
                    <el-option label="狮子" value="狮子"> </el-option>
                    <el-option label="双鱼" value="双鱼"> </el-option>
                  </el-select>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span class="weight">血型</span>
                  <el-select value="" placeholder="请选择">
                    <el-option label="o" value="o"> </el-option>
                    <el-option label="a" value="a"> </el-option>
                    <el-option label="b" value="b"> </el-option>
                  </el-select>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 140px" class="weight">户籍所在地</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">政治面貌</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span class="weight">入党时间</span>
                  <el-date-picker type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">存档机构</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">子女状态</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 240px" class="weight"
                    >有无违法违纪状态</span
                  >
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 180px" class="weight">有无重大病史</span>
                  <el-input></el-input>
                </div>
              </div>
            </div>
            <div class="text">通讯信息</div>
            <div class="center">
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">QQ</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">微信</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">现居住地</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">通讯地址</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">联系手机</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">个人邮箱</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">紧急联系人</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">紧急联系电话</span>
                  <el-input></el-input>
                </div>
              </div>
            </div>
            <div class="text">账号信息</div>
            <div class="center">
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">社保电脑号</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">公积金账号</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">银行卡号</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">开户行</span>
                  <el-input></el-input>
                </div>
              </div>
            </div>
            <div class="text">教育信息</div>
            <div class="center">
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">毕业学校</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span class="weight">入学时间</span>
                  <el-date-picker type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span class="weight">毕业时间</span>
                  <el-date-picker type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">专业</span>
                  <el-input></el-input>
                </div>
              </div>
            </div>
            <div class="text">从业信息</div>
            <div class="center">
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">上家公司</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">职称</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">有无竞业限制</span>
                  <el-input></el-input>
                </div>
              </div>
              <div class="p">
                <div class="p-p">
                  <span style="width: 100px" class="weight">备注</span>
                  <el-input></el-input>
                </div>
              </div>
            </div>
            <div class="btn" style="text-align: center">
              <el-button size="mini" type="primary">保存更新</el-button>
              <el-button size="mini" type="primary">返回</el-button>
            </div>
          </div>
        </el-tab-pane>
        <!-- 岗位信息 -->
        <el-tab-pane label="岗位信息" name="third">
          <div class="con">
            <div class="text">基础信息</div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">岗位</span>
                <el-input v-model="jobList.post"></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">转正状态</span>
                <el-input disabled></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">职级</span>
                <el-input></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">转正评价</span>
                <el-input v-model="jobList.correctionEvaluation"></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">汇报对象</span>
                <el-input></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">HRBP</span>
                <el-input></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">调整司龄(天)</span>
                <el-input v-model="jobList.adjustmentAgedays"></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 200px" class="weight"
                  >首次参加工作时间</span
                >
                <el-input></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">调整工龄</span>
                <el-input></el-input>
              </div>
            </div>
            <div class="text">合同信息</div>
            <div class="p">
              <div class="p-p">
                <span class="weight">首次合同开始时间</span>
                <el-date-picker type="date" placeholder="选择日期">
                </el-date-picker>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span class="weight">首次合同结束时间</span>
                <el-date-picker type="date" placeholder="选择日期">
                </el-date-picker>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span class="weight">现合同开始时间</span>
                <el-date-picker type="date" placeholder="选择日期">
                </el-date-picker>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span class="weight">现合同结束时间</span>
                <el-date-picker type="date" placeholder="选择日期">
                </el-date-picker>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">合同期限</span>
                <el-input v-model="jobList.contractPeriod"></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">续签次数</span>
                <el-input></el-input>
              </div>
            </div>
            <div class="text">招聘信息</div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">其他招聘渠道</span>
                <el-input></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">招聘渠道</span>
                <el-input></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">社招/校招</span>
                <el-input></el-input>
              </div>
            </div>
            <div class="p">
              <div class="p-p">
                <span style="width: 100px" class="weight">推荐企业/人</span>
                <el-input></el-input>
              </div>
            </div>
            <div class="btn" style="text-align: center">
              <el-button size="mini" type="primary">保存更新</el-button>
              <el-button size="mini" type="primary">返回</el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      list: [],
      jobList: [],
      imageUrl: ''
    }
  },
  methods: {},
  created() {}
}
</script>

<style lang="scss" scoped>
.Staffsee {
  padding: 10px;
}
.first {
  text-align: center;
  margin-top: 20px;
  span {
    width: 100px;
    font-weight: 900;
  }
  input {
    margin-left: 10px;
    width: 350px;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    color: rgb(111, 111, 111);
  }
  .el-button {
    margin-top: 15px;
  }
}
.center {
  text-align: center;
  width: 600px;
  padding: 0 180px;
}
.text {
  margin-top: 30px;
  font-size: 18px;
}
.con {
  margin-top: 20px;
  .p {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 40px 0;
    .p-p {
      display: flex;
      align-items: center;
    }
  }
}
.weight {
  font-weight: 900;
  font-size: 14px;
  margin-right: 20px;
}
.img {
  margin-top: 20px;
  display: flex;
  img {
    width: 200px;
    height: 200px;
  }
}
.btn {
  margin-top: 20px;
}
</style>
