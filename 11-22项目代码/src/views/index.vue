<template>
  <div class="temo1">
    <h1>数据统计</h1>
    <ul>
      <li class="inc">当日数据:</li>
      <li>2新增用户</li>
      <li>1新增订单</li>
      <li>3新增管理员</li>
    </ul>
    <ul>
      <li class="ioc">总数据:</li>
      <li>69837 注册用户</li>
      <li>32676 订单</li>
      <li>124574 管理员</li>
    </ul>

    <div>
      <div id="main" :style="{ width: '1000px', height: '600px' }"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "Temperature Change in the Coming Week",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} °C",
        },
      },
      series: [
        {
          name: "Highest",
          type: "line",
          data: [10, 11, 13, 11, 12, 12, 9],
          markPoint: {
            data: [
              { type: "max", name: "Max" },
              { type: "min", name: "Min" },
            ],
          },
          markLine: {
            data: [{ type: "average", name: "Avg" }],
          },
        },
        {
          name: "Lowest",
          type: "line",
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
          },
          markLine: {
            data: [
              { type: "average", name: "Avg" },
              [
                {
                  symbol: "none",
                  x: "90%",
                  yAxis: "max",
                },
                {
                  symbol: "circle",
                  label: {
                    position: "start",
                    formatter: "Max",
                  },
                  type: "max",
                  name: "最高点",
                },
              ],
            ],
          },
        },
      ],
    };

    option && myChart.setOption(option);
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.temo1 {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 400;
  }
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    li {
      width: 200px;
      height: 40px;
      background-color: #e5e9f2;
      margin: 10px;
      border-radius: 8px;
      text-align: center;
      line-height: 40px;
    }
    .inc {
      color: #ffffff;
      background-color: #ff9800;
    }
    .ioc {
      color: #ffffff;
      background-color: #20a0ff;
    }
  }
}
</style>
