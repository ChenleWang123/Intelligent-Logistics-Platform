<template>
  <div id="app">
    <div id="part1">
      <p id="input">请输入</p>
      <el-input v-model="input1" placeholder="国内生产总值"></el-input>
      <el-input v-model="input2" placeholder="人民币兑美元汇率"></el-input>
      <el-input v-model="input3" placeholder="汽车制造业投资利润总额"></el-input>

      <el-button type="primary" plain @click="select">生成结果</el-button>
    </div>
    <div
      class="echart"
      id="mychart"
      :style="{ float: 'left', width: '50%', height: '420px' }"
    ></div>
    <div id="table">
      <p id="data1">往年数据</p>
      <el-table
        id="table1"
        :data="tableData"
        height="360"
        border
        style="width: 95%">
        <el-table-column
          align="center"
          prop="year"
          label="年份"
          width="60"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="gdp"
          label="国内生产总值"
          width="110"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="rate"
          label="人民币兑美元汇率"
          width="135"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="sum"
          label="汽车制造业投资利润总额">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  mounted() {
    this.initEcharts()
  },
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      tableData: [{
        year: '2011',
        gdp: '451,480.07',
        rate: '6.4588434',
        sum: '24480.401'
      }, {
        year: '2012',
        gdp: '486,983.28',
        rate: '6.3125',
        sum: '24881.501'
      }, {
        year: '2013',
        gdp: '524,803.13',
        rate: '6.1932',
        sum: '30214.119'
      }, {
        year: '2014',
        gdp: '563,773.77',
        rate: '6.1428',
        sum: '36791.048'
      }, {
        year: '2015',
        gdp: '603,470.94',
        rate: '6.2284',
        sum: '36259.003'
      }, {
        year: '2016',
        gdp: '736,036.48',
        rate: '6.6423',
        sum: '39974.2'
      }, {
        year: '2017',
        gdp: '787,170.41',
        rate: '6.7518',
        sum: '43224.8'
      }, {
        year: '2018',
        gdp: '840,302.63',
        rate: '6.6174',
        sum: '39268.5'
      }, {
        year: '2019',
        gdp: '890,304.85',
        rate: '6.8985',
        sum: '31108.4'
      }, {
        year: '2020',
        gdp: '910,235.55',
        rate: '6.8976',
        sum: '27380.7'
      }, {
        year: '2021',
        gdp: '1,099,197.90',
        rate: '6.4515',
        sum: '34065.6'
      }]
    }
  },
  methods: {
    initEcharts() {
      const option = {
        title: {
          left: '2%',   // 设置为 'center' 使得标题在饼图上方
          top: '2%',
          text: '汽车销售拟合预测结果',
          textStyle: {
            fontFamily: '黑体'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['模拟值', '真实值', '预测值'],
          top: 20
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
          interval: 2
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '模拟值',
            type: 'line',
            data: [2611611.709,
              2646960.522,
              2792167.166,
              2971480.016,
              3013202.576,
              3281007.572,
              3418278.357,
              3382221.076,
              3291713.826,
              3235120.028,
              3550620.494,
              null, null, null, null, null],
            itemStyle: {color: '#1E90FF'},
            smooth: true
          },
          {
            name: '真实值',
            type: 'line',
            data: [2590714,
              2702896,
              2908496,
              3053947,
              2843774,
              3105662,
              3345968,
              3418366,
              3459475,
              3706091,
              3500571,
              null, null, null, null, null],
            itemStyle: {color: '#DC143C'},
            smooth: true
          },
          {
            name: '预测值',
            type: 'line',
            data: [null, null, null, null, null, null, null, null, null, null, null, 3570423.473,
              3650707.783,
              3730552.702,
              3809921.426,
              3888862.474
            ],
            itemStyle: {color: '#808080'},
            smooth: true
          }
        ]
      }
      const myChart = echarts.init(document.getElementById('mychart'))// 图标初始化
      myChart.setOption(option)// 渲染页面
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    select() {
      this.$message({
        message: '预测成功!',
        type: 'success'
      })
      const option = {
        title: {
          text: '汽车销售拟合预测结果',
          textStyle: {
            fontFamily: '黑体'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['模拟值', '真实值', '预测值'],
          top: 20
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
          interval: 2
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '模拟值',
            type: 'line',
            data: [2611611.709,
              2646960.522,
              2792167.166,
              2971480.016,
              3013202.576,
              3281007.572,
              3418278.357,
              3382221.076,
              3291713.826,
              3235120.028,
              3550620.494,
              3541408.349,
              null, null, null, null, null],
            itemStyle: {color: '#1E90FF'},
            smooth: true
          },
          {
            name: '真实值',
            type: 'line',

            data: [2590714,
              2702896,
              2908496,
              3053947,
              2843774,
              3105662,
              3345968,
              3418366,
              3459475,
              3706091,
              3500571,
              3200000,
              null, null, null, null, null],
            itemStyle: {color: '#DC143C'},
            smooth: true
          },
          {
            name: '预测值',
            type: 'line',
            data: [null, null, null, null, null, null, null, null, null, null, null, null, 3714649.136,
              3795532.043,
              3875512.184,
              3955394.189,
              4034776.88
            ],
            itemStyle: {color: '#808080'},
            smooth: true
          }
        ]
      }
      const myChart = echarts.init(document.getElementById('mychart'))// 图标初始化
      myChart.setOption(option)// 渲染页面
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        myChart.resize()
      })
      this.tableData = [{
        year: '2011',
        gdp: '451,480.07',
        rate: '6.4588434',
        sum: '24480.401'
      }, {
        year: '2012',
        gdp: '486,983.28',
        rate: '6.3125',
        sum: '24881.501'
      }, {
        year: '2013',
        gdp: '524,803.13',
        rate: '6.1932',
        sum: '30214.119'
      }, {
        year: '2014',
        gdp: '563,773.77',
        rate: '6.1428',
        sum: '36791.048'
      }, {
        year: '2015',
        gdp: '603,470.94',
        rate: '6.2284',
        sum: '36259.003'
      }, {
        year: '2016',
        gdp: '736,036.48',
        rate: '6.6423',
        sum: '39974.2'
      }, {
        year: '2017',
        gdp: '787,170.41',
        rate: '6.7518',
        sum: '43224.8'
      }, {
        year: '2018',
        gdp: '840,302.63',
        rate: '6.6174',
        sum: '39268.5'
      }, {
        year: '2019',
        gdp: '890,304.85',
        rate: '6.8985',
        sum: '31108.4'
      }, {
        year: '2020',
        gdp: '910,235.55',
        rate: '6.8976',
        sum: '27380.7'
      }, {
        year: '2021',
        gdp: '1,099,197.90',
        rate: '6.4515',
        sum: '34065.6'
      }, {
        year: '2022',
        gdp: '1,132,053.80',
        rate: '6.726076',
        sum: '30679'
      }]
    }
  }
}
</script>

<style scoped>
#app {
  background-color: #edf7ff;
  height: 761px;
}

#part1 {
  position: absolute;
  left: 80px;
  top: 60px;
  height: 100px;
  width: 1165px;
  background-color: #FFFFFF;
  border-radius: 10px;
}

#input {
  font-family: 黑体;
  font-size: 22px;
  position: absolute;
  left: 60px;
  top: 15px;
}

.el-button {
  position: relative;
  left: 15%;
  top: 23px;
}

.el-input {
  width: 210px;
  padding: 10px;
  position: relative;
  left: 12%;
  top: 23px;
}

#mychart {
  position: absolute;
  top: 200px;
  left: 80px;
  background-color: #FFFFFF;
  border-radius: 10px;
}

#table {
  background-color: #FFFFFF;
  position: absolute;
  top: 200px;
  left: 61%;
  width: 450px;
  height: 421px;
  border-radius: 10px;
}

#table1 {
  position: relative;
  top: -92px;
  left: 11px;
  border-radius: 5px;
}

#data1 {
  font-family: 黑体;
  font-size: 20px;
  position: relative;
  top: -2px;
  left: 40%;
  height: 100px;
  width: 100px;
}

</style>
