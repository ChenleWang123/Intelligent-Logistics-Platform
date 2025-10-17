<template>
  <div id="app">
    <div id="part1">
      <p id="input">请输入</p>
      <el-input v-model="input1" placeholder="国内生产总值"></el-input>
      <el-input v-model="input2" placeholder="人民币兑美元汇率"></el-input>
      <el-input v-model="input3" placeholder="汽车制造业投资利润总额"></el-input>

      <el-button type="primary" plain @click="select">生成结果</el-button>
    </div>
    <div id="part2">
      <el-button type="primary" plain size="medium" id="button1" @click="year" round>年度</el-button>
      <el-button type="primary" plain size="medium" id="button2" @click="season" round>季度</el-button>
      <el-button type="primary" plain size="medium" id="button3" @click="month" round>月度</el-button>
      <div
        class="echart"
        id="mychart"
        :style="{ float: 'left', width: '90%', height: '520px' }"
      ></div>
    </div>

    <div id="table">
      <p id="data1">往年数据</p>
      <el-table
        id="table1"
        :data="tableData"
        height="455"
        :header-cell-style="{ background: '#2486b9', color: '#FFF' }"
        :row-class-name="tableRowClassName"
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
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 === 0) {
        return 'warning-row';
      } else {
        return 'success-row';
      }
      return '';
    },
    initEcharts() {
      const option = {
        title: {
          text: '汽车销售拟合预测结果',
          left:'30%',
          textStyle: {
            fontFamily: '黑体',
            fontSize: 22,
            fontWeight: 600
          }
        },
        legend: {
          right: '0%',
          top: '6%',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          min: 2000000,
          max: 4000000,
          minInterval: 500000,
          splitNumber: 4,
          name: '万元',
          nameLocation: 'end',
          nameTextStyle: {
            padding: [0, 0, 10, -14]
          },
          axisLabel: {
            align: 'right',
            margin: 8
          },
        },
        yAxis: [
          {
            type: 'category',
            data: ['2011',
              '2012',
              '2013',
              '2014',
              '2015',
              '2016',
              '2017',
              '2018',
              '2019',
              '2020',
              '2021',
              '2022',
              '2023',
              '2024',
              '2025'],
            name: '年',
            nameLocation: 'end',
            nameTextStyle: {
              padding: [0, -10, -10, 0]
            },
            position: 'left'
          },
          {
            type: 'category',
            data: ['2011',
              '2012',
              '2013',
              '2014',
              '2015',
              '2016',
              '2017',
              '2018',
              '2019',
              '2020',
              '2021',
              '2022',
              '2023',
              '2024',
              '2025'],
            nameLocation: 'end',
            nameTextStyle: {
              padding: [0, -10, -10, 0]
            },
            position: 'right',
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false}
          }
        ],
        series: [
          {
            name: '真实值',
            type: 'bar',
            yAxisIndex: 0,  // 使用第一个y轴（左侧）
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
            itemStyle: {color: '#2486b9'},
            barWidth: '30%',
          },
          {
            name: '模拟值',
            type: 'bar',
            yAxisIndex: 0,  // 使用第一个y轴（左侧）
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
            itemStyle: {color: '#d0dfe6'},
            barWidth: '30%',
          },
          {
            name: '预测值',
            type: 'bar',
            yAxisIndex: 1,  // 使用第二个y轴（右侧）
            data: [null, null, null, null, null, null, null, null, null, null, null,
              3570423.473,
              3650707.783,
              3730552.702,
              3809921.426,
              3888862.474],
            itemStyle: {color: '#FF8000'},
            barWidth: '30%',
          }
        ]
      };

      const myChart = echarts.init(document.getElementById('mychart'));
      myChart.setOption(option);
      window.addEventListener('resize', () => {
        myChart.resize();
      });

    },

    year() {
      const myChart = echarts.init(document.getElementById('mychart'))// 图标初始化
      myChart.clear()
      const option = {
        title: {
          text: '汽车销售拟合预测结果',
          left:'30%',
          textStyle: {
            fontFamily: '黑体',
            fontSize: 22,
            fontWeight: 600
          }
        },
        legend: {
          right: '0%',
          top: '6%',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          min: 2000000,
          max: 4000000,
          minInterval: 500000,
          splitNumber: 4,
          name: '万元',
          nameLocation: 'end',
          nameTextStyle: {
            padding: [0, 0, 10, -14]
          },
          axisLabel: {
            align: 'right',
            margin: 8
          },
        },
        yAxis: [
          {
            type: 'category',
            data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
            name: '年',
            nameLocation: 'end',
            nameTextStyle: {
              padding: [0, -10, -10, 0]
            },
            position: 'left'
          },
          {
            type: 'category',
            data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
            nameLocation: 'end',
            nameTextStyle: {
              padding: [0, -10, -10, 0]
            },
            position: 'right',
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false}
          }
        ],
        series: [
          {
            name: '真实值',
            type: 'bar',
            yAxisIndex: 0,  // 使用第一个y轴（左侧）
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
            itemStyle: {color: '#2486b9'},
            barWidth: '30%',
          },
          {
            name: '模拟值',
            type: 'bar',
            yAxisIndex: 0,  // 使用第一个y轴（左侧）
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
            itemStyle: {color: '#d0dfe6'},
            barWidth: '30%',
          },
          {
            name: '预测值',
            type: 'bar',
            yAxisIndex: 1,  // 使用第二个y轴（右侧）
            data: [null, null, null, null, null, null, null, null, null, null, null, null,
              3714649.136,
              3795532.043,
              3875512.184,
              3955394.189,
              4034776.88],
            itemStyle: {color: '#FF8000'},
            barWidth: '30%',
          }
        ]
      };
      myChart.setOption(option)// 渲染页面
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    season() {
      const myChart = echarts.init(document.getElementById('mychart'))// 图标初始化
      myChart.clear()
      const option = {
        title: {
          text: '23-24年汽车销售拟合预测结果',
          left:'25%',
          textStyle: {
            fontFamily: '黑体',
            fontSize: 22,
            fontWeight: 600
          }
        },
        legend: {
          data: ['预测值'],
          right: '0%',
          top: '6%',
        },
        tooltip: {
          trigger: 'axis'
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
          type: 'value', // 修改为 'value'
          min: 3600000, // 设置y轴最小值
          max: 3850000, // 设置y轴最大值,
          name: '万元',  // 添加单位到y轴末端
          nameLocation: 'end',  // 设置单位位置在轴末端
          nameTextStyle: {
            padding: [0, 0, 10, -14]  // 调整单位位置，具体值根据图表实际布局调整
          },
          axisLabel: {
            align: 'right',
            margin: 8
          }
        },
        yAxis: {
          type: 'category',
          data: ['2023-1', '2023-2', '2023-3', '2023-4', '2024-1', '2024-2', '2024-3', '2024-4'],
          interval: 2,
          name: '季度',  // 添加单位到x轴末端
          nameLocation: 'end',  // 设置单位位置在轴末端
          nameTextStyle: {
            padding: [0, -10, -10, 0]  // 调整单位位置，具体值根据图表实际布局调整
          }
        },
        series: [
          {
            name: '预测值',
            type: 'bar',
            data: [3672236.573, 3694732.385, 3721447.490, 3778954.832, 3743078.437, 3784118.707, 3799650.943, 3805403.204],
            itemStyle: {color: '#FF8000'},
            barWidth: '50%'
          }
        ]
      }
      myChart.setOption(option)// 渲染页面
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    month() {
      const myChart = echarts.init(document.getElementById('mychart'))// 图标初始化
      myChart.clear()
      const option = {
        title: {
          text: '2024年汽车销售拟合预测结果',
          left:'25%',
          textStyle: {
            fontFamily: '黑体',
            fontSize: 22,
            fontWeight: 600
          }
        },
        legend: {
          data: ['预测值'],
          right: '0%',
          top: '6%',
        },
        tooltip: {
          trigger: 'axis'
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
          type: 'value', // 修改为 'value'
          min: 3800000, // 设置y轴最小值
          max: 3880000, // 设置y轴最大值,
          name: '万元',  // 添加单位到y轴末端
          nameLocation: 'end',  // 设置单位位置在轴末端
          nameTextStyle: {
            padding: [0, 0, 10, -14]  // 调整单位位置，具体值根据图表实际布局调整
          },
          axisLabel: {
            align: 'right',
            margin: 8,
            padding: [0, -20, 0, 0]
          }
        },
        yAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          interval: 2,
          name: '月',  // 添加单位到x轴末端
          nameLocation: 'end',  // 设置单位位置在轴末端
          nameTextStyle: {
            padding: [0, -10, -10, 0]  // 调整单位位置，具体值根据图表实际布局调整
          }
        },
        series: [
          {
            name: '预测值',
            type: 'bar',
            data: [3824716.942,
              3810288.891,
              3817471.501,
              3820609.366,
              3837567.027,
              3842037.274,
              3860781.585,
              3870010.569,
              3862792.993,
              3849175.044,
              3829821.458,
              3831218.694],
            itemStyle: {color: '#FF8000'},
            barWidth: '50%'
          }
        ]
      }
      myChart.setOption(option)// 渲染页面
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },

    select() {
      const myChart = echarts.init(document.getElementById('mychart'))// 图标初始化
      myChart.clear()
      this.year()
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

<style>
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
  position: relative;
  top: -31px;
  left: 69px;
  border-radius: 10px;
}

#table {
  background-color: #FFFFFF;
  position: absolute;
  top: 200px;
  left: 795px;
  width: 450px;
  height: 521px;
  border-radius: 10px;
}

#table1 {
  position: relative;
  top: -95px;
  left: 11px;
  border-radius: 5px;
}

#data1 {
  font-family: 黑体;
  font-size: 22px;
  font-weight: 600;
  position: relative;
  top: -14px;
  left: 40%;
  height: 100px;
  width: 100px;
}

#button1 {
  position: relative;
  left: 10px;
  top: 140px;
}

#button2 {
  position: relative;
  left: -70px;
  top: 230px;
}

#button3 {
  position: relative;
  left: -150px;
  top: 320px;
}

#part2 {
  background-color: #FFFFFF;
  position: absolute;
  top: 200px;
  left: 81px;
  width: 700px;
  height: 521px;
  border-radius: 10px;
}

.el-table .warning-row {
  background: #d0dfe6;
}

.el-table .success-row {
  background: #FFF;
}

</style>
