<template>
  <div class="temo2">
    <div class="topmost">
      <img src="../assets/Snipaste_2023-01-06_00-11-12.png" alt="" />
      <div>
        <h1>早安，安欣，祝你开心每一天！</h1>
        <div>安欣 | 警司部 - qwer b ctrl 6</div>
      </div>
    </div>

    <div class="below">
      <div class="left">
        <el-calendar v-model="value"> </el-calendar>
        <div class="left_bottm">
          <h1>公告</h1>
          <div class="left_title">
            <div>高启强 发布了第一期青年大学习</div>
            <div>2018-7-21 15:30:00</div>
          </div>
          <div class="left_title">
            <div>高启强 发布了第二期青年大学习</div>
            <div>2018-7-22 15:30:00</div>
          </div>
          <div class="left_title">
            <div>高启强 发布了第三期青年大学习</div>
            <div>2018-7-23 15:30:00</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="righet_top">
          <div class="righet_top_sp">流程申请</div>
          <div class="righet_top_bottm">
            <el-button>加班离职</el-button>
            <el-button>请假调休</el-button>
            <el-button>申请列表</el-button>
            <el-button>我的信息</el-button>
          </div>
        </div>

        <div class="righet_middle">
          <h1>绩效指数</h1>
          <div class="earch" id="main"></div>
        </div>

        <div class="righet_top">
          <div class="righet_top_sp">帮助链接</div>
          <div class="righet_top_bottm imsg">
            <div>
              <img src="../assets/logo.png" alt="" />
              <div>入门指南</div>
            </div>
            <div>
              <img src="../assets/logo.png" alt="" />
              <div>在线帮助手册</div>
            </div>
            <div>
              <img src="../assets/logo.png" alt="" />
              <div>联系技术支持</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: '',
  components: {},
  data() {
    return {
      value: new Date()
    }
  },
  created() {},
  mounted() {
    this.echartss()
  },
  methods: {
    echartss() {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        title: {
          text: '人力资源基础成绩表'
        },
        // legend: {
        //     data: ['Allocated Budget', 'Actual Spending']
        // },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '考勤', max: 60000 },
            { name: '工资', max: 60000 },
            { name: '社保', max: 60000 },
            { name: '工作效率', max: 60000 },
            { name: '知识分享', max: 60000 },
            { name: '代码行数', max: 60000 }
          ]
        },
        series: [
          {
            name: '人力资源基础成绩表',
            type: 'radar',
            data: [
              {
                value: [5000, 2500, 60000, 12000, 60000, 60000],
                name: 'Allocated Budget'
              },
              {
                value: [17000, 17000, 17000, 17000, 17000, 17000],
                name: 'Actual Spending'
              },
              {
                value: [41500, 41500, 41500, 41500, 41500, 41500]
              }
            ]
          }
        ]
      }

      option && myChart.setOption(option)
    }
  }
}
</script>
<style scoped lang="scss">
.temo2 {
  width: 100%;
  height: 100%;
}
.earch {
  width: 450px;
  height: 450px;
  margin: 50px auto;
}
.topmost {
  width: 100%;
  height: 200px;
  background-color: #fff;
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 25px;
  img {
    margin-right: 20px;
  }
  h1 {
    margin-bottom: 15px;
  }
}
.below {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 48%;
    .left_bottm {
      width: 100%;
      background-color: #fff;
      padding: 20px;
      margin-top: 10px;
      h1 {
        margin-bottom: 10px;
      }
      .left_title {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        height: 100px;
        line-height: 50px;
        padding-left: 20px;
      }
    }
  }
  .righet_middle {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 20px;
    background-color: #fff;
    h1 {
      height: 40px;
      border-bottom: 1px solid #ccc;
    }
  }
  .right {
    width: 48%;
    .righet_top {
      width: 100%;
      height: 150px;
      background-color: #fff;
      padding: 20px;
      .righet_top_sp {
        width: 85px;
        height: 30px;
        text-align: center;
        border-bottom: #8a97f8 2px solid;
      }
      .righet_top_bottm {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .imsg {
        img {
          width: 50px;
          height: 50px;
        }
        text-align: center;
      }
    }
  }
}
</style>
