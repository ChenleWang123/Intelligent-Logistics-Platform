<template>
  <div id="app">
    <div id="part1">
      <el-button id="button1" type="primary" @click="plan">规划路线</el-button>
    </div>
    <div
      class="echart"
      id="mychart"
      :style="{ float: 'left', width: '80%', height: '400px' }"
    ></div>
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
    }
  },
  methods: {
    initEcharts() {
      const option = {
        title: {
          text: '基于多式联运的整车物流路径规划',
          left:20 ,
          top:20
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 12,
            roam: true,
            color: '#4169E1',
            label: {
              show: true
            },
            edgeSymbol: ['circle'],
            edgeSymbolSize: [1, 10],
            edgeLabel: {
              fontSize: 10
            },
            data: [
              {
                name: '1',
                x: 763,
                y: 88
              },
              {
                name: '2',
                x: 725,
                y: 198
              },
              {
                name: '3',
                x: 710,
                y: 98
              },
              {
                name: '4',
                x: 724,
                y: 2
              },
              {
                name: '5',
                x: 625,
                y: 13
              },
              {
                name: '6',
                x: 643,
                y: 73
              },
              {
                name: '7',
                x: 660,
                y: 175
              },
              {
                name: '8',
                x: 645,
                y: 295
              },
              {
                name: '9',
                x: 542,
                y: 390
              },
              {
                name: '10',
                x: 593,
                y: 243
              },
              {
                name: '11',
                x: 578,
                y: 154
              },
              {
                name: '12',
                x: 530,
                y: 84
              },
              {
                name: '13',
                x: 427,
                y: 478
              },
              {
                name: '14',
                x: 486,
                y: 321
              },
              {
                name: '15',
                x: 480,
                y: 227
              },
              {
                name: '16',
                x: 425,
                y: 166
              },
              {
                name: '17',
                x: 396,
                y: 300
              },
              {
                name: '18',
                x: 458,
                y: 410
              },
              {
                name: '19',
                x: 360,
                y: 480
              },
              {
                name: '20',
                x: 388,
                y: 385
              },
              {
                name: '21',
                x: 320,
                y: 265
              },
              {
                name: '22',
                x: 300,
                y: 345
              },
              {
                name: '23',
                x: 309,
                y: 435
              },
              {
                name: '24',
                x: 294,
                y: 539
              },
              {
                name: '25',
                x: 225,
                y: 490
              },
              {
                name: '26',
                x: 205,
                y: 414
              },
              {
                name: '27',
                x: 210,
                y: 342
              },
              {
                name: '28',
                x: 91,
                y: 418
              },
              {
                name: '29',
                x: 135,
                y: 488
              },
              {
                name: '30',
                x: 188,
                y: 550
              },
              {
                name: '31',
                x: 200,
                y: 600
              },
              {
                name: '32',
                x: 112,
                y: 570
              },
              {
                name: '33',
                x: 46,
                y: 480
              },
              {
                name: '34',
                x: 18,
                y: 540
              },
              {
                name: '35',
                x: 2,
                y: 465
              }
            ],
            // links: [],
            links: [
              {
                source: '1',
                target: '2'
              },
              {
                source: '1',
                target: '4'
              },
              {
                source: '1',
                target: '3'
              },
              {
                source: '8',
                target: '2'
              },
              {
                source: '8',
                target: '9'
              },
              {
                source: '9',
                target: '13'
              },
              {
                source: '13',
                target: '24'
              },
              {
                source: '24',
                target: '31'
              },
              {
                source: '31',
                target: '32'
              },
              {
                source: '32',
                target: '34'
              },
              {
                source: '34',
                target: '35'
              },
              {
                source: '35',
                target: '28'
              },
              {
                source: '28',
                target: '27'
              },
              {
                source: '27',
                target: '21'
              },
              {
                source: '21',
                target: '16'
              },
              {
                source: '16',
                target: '12'
              },
              {
                source: '12',
                target: '5'
              },
              {
                source: '5',
                target: '4'
              },
              {
                source: '5',
                target: '6'
              },
              {
                source: '6',
                target: '3'
              },
              {
                source: '3',
                target: '7'
              },
              {
                source: '7',
                target: '2'
              },
              {
                source: '7',
                target: '10'
              },
              {
                source: '10',
                target: '8'
              },
              {
                source: '10',
                target: '14'
              },
              {
                source: '14',
                target: '9'
              },
              {
                source: '14',
                target: '18'
              },
              {
                source: '18',
                target: '13'
              },
              {
                source: '19',
                target: '13'
              },
              {
                source: '19',
                target: '24'
              },
              {
                source: '30',
                target: '24'
              },
              {
                source: '30',
                target: '32'
              },
              {
                source: '32',
                target: '29'
              },
              {
                source: '29',
                target: '33'
              },
              {
                source: '33',
                target: '35'
              },
              {
                source: '33',
                target: '34'
              },
              {
                source: '33',
                target: '28'
              },
              {
                source: '28',
                target: '29'
              },
              {
                source: '29',
                target: '30'
              },
              {
                source: '29',
                target: '25'
              },
              {
                source: '25',
                target: '26'
              },
              {
                source: '26',
                target: '27'
              },
              {
                source: '27',
                target: '22'
              },
              {
                source: '26',
                target: '29'
              },
              {
                source: '22',
                target: '26'
              },
              {
                source: '17',
                target: '21'
              },
              {
                source: '22',
                target: '21'
              },
              {
                source: '23',
                target: '22'
              },
              {
                source: '23',
                target: '25'
              },
              {
                source: '25',
                target: '24'
              },
              {
                source: '25',
                target: '30'
              },
              {
                source: '30',
                target: '31'
              },
              {
                source: '23',
                target: '19'
              },
              {
                source: '17',
                target: '20'
              },
              {
                source: '20',
                target: '22'
              },
              {
                source: '23',
                target: '25'
              },
              {
                source: '20',
                target: '23'
              },
              {
                source: '20',
                target: '19'
              },
              {
                source: '17',
                target: '14'
              },
              {
                source: '20',
                target: '18'
              },
              {
                source: '20',
                target: '14'
              },
              {
                source: '15',
                target: '17'
              },
              {
                source: '15',
                target: '16'
              },
              {
                source: '12',
                target: '11'
              },
              {
                source: '11',
                target: '15'
              },
              {
                source: '15',
                target: '14'
              },
              {
                source: '11',
                target: '10'
              },
              {
                source: '11',
                target: '7'
              },
              {
                source: '11',
                target: '6'
              },
              {
                source: '27',
                target: '21'
              },
              {
                source: '27',
                target: '21'
              }
            ],
            lineStyle: {
              width: 2,
              color: '#4169E1'
            }
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
    plan() {
      this.$message({
        message: '最优路径规划成功!',
        type: 'success'
      })
      const option = {
        title: {
          text: '基于多式联运的整车物流路径规划'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 12,
            roam: true,
            color: '#4169E1',
            label: {
              show: true
            },
            edgeSymbol: ['circle'],
            edgeSymbolSize: [1, 10],
            edgeLabel: {
              fontSize: 10
            },
            data: [
              {
                name: '1',
                x: 763,
                y: 88,
                color: '#32CD32'
              },
              {
                name: '2',
                x: 725,
                y: 198
              },
              {
                name: '3',
                x: 710,
                y: 98
              },
              {
                name: '4',
                x: 724,
                y: 2
              },
              {
                name: '5',
                x: 625,
                y: 13
              },
              {
                name: '6',
                x: 643,
                y: 73
              },
              {
                name: '7',
                x: 660,
                y: 175
              },
              {
                name: '8',
                x: 645,
                y: 295
              },
              {
                name: '9',
                x: 542,
                y: 390
              },
              {
                name: '10',
                x: 593,
                y: 243
              },
              {
                name: '11',
                x: 578,
                y: 154
              },
              {
                name: '12',
                x: 530,
                y: 84
              },
              {
                name: '13',
                x: 427,
                y: 478
              },
              {
                name: '14',
                x: 486,
                y: 321
              },
              {
                name: '15',
                x: 480,
                y: 227
              },
              {
                name: '16',
                x: 425,
                y: 166
              },
              {
                name: '17',
                x: 396,
                y: 300
              },
              {
                name: '18',
                x: 458,
                y: 410
              },
              {
                name: '19',
                x: 360,
                y: 480
              },
              {
                name: '20',
                x: 388,
                y: 385
              },
              {
                name: '21',
                x: 320,
                y: 265
              },
              {
                name: '22',
                x: 300,
                y: 345
              },
              {
                name: '23',
                x: 309,
                y: 435
              },
              {
                name: '24',
                x: 294,
                y: 539
              },
              {
                name: '25',
                x: 225,
                y: 490
              },
              {
                name: '26',
                x: 205,
                y: 414
              },
              {
                name: '27',
                x: 210,
                y: 342
              },
              {
                name: '28',
                x: 91,
                y: 418
              },
              {
                name: '29',
                x: 135,
                y: 488
              },
              {
                name: '30',
                x: 188,
                y: 550
              },
              {
                name: '31',
                x: 200,
                y: 600
              },
              {
                name: '32',
                x: 112,
                y: 570
              },
              {
                name: '33',
                x: 46,
                y: 480
              },
              {
                name: '34',
                x: 18,
                y: 540
              },
              {
                name: '35',
                x: 2,
                y: 465,
                color: 'red'
              }
            ],
            // links: [],
            links: [
              {
                source: '1',
                target: '2'
              },
              {
                source: '1',
                target: '4',
                lineStyle: {
                  color: '#3C3C3C',
                  width: 4
                }
              },
              {
                source: '1',
                target: '3'
              },
              {
                source: '8',
                target: '2'
              },
              {
                source: '8',
                target: '9'
              },
              {
                source: '9',
                target: '13'
              },
              {
                source: '13',
                target: '24'
              },
              {
                source: '24',
                target: '31'
              },
              {
                source: '31',
                target: '32'
              },
              {
                source: '32',
                target: '34'
              },
              {
                source: '34',
                target: '35'
              },
              {
                source: '35',
                target: '28',
                lineStyle: {
                  color: '#32CD32',
                  width: 4
                }
              },
              {
                source: '28',
                target: '27',
                lineStyle: {
                  color: '#32CD32',
                  width: 4
                }
              },
              {
                source: '27',
                target: '21',
                lineStyle: {
                  color: '#3C3C3C',
                  width: 4
                }
              },
              {
                source: '21',
                target: '16',
                lineStyle: {
                  color: '#3C3C3C',
                  width: 4
                }
              },
              {
                source: '16',
                target: '12',
                lineStyle: {
                  color: '#3C3C3C',
                  width: 4
                }
              },
              {
                source: '12',
                target: '5',
                lineStyle: {
                  color: '#3C3C3C',
                  width: 4
                }
              },
              {
                source: '5',
                target: '4',
                lineStyle: {
                  color: '#3C3C3C',
                  width: 4
                }
              },
              {
                source: '5',
                target: '6'
              },
              {
                source: '6',
                target: '3'
              },
              {
                source: '3',
                target: '7'
              },
              {
                source: '7',
                target: '2'
              },
              {
                source: '7',
                target: '10'
              },
              {
                source: '10',
                target: '8'
              },
              {
                source: '10',
                target: '14'
              },
              {
                source: '14',
                target: '9'
              },
              {
                source: '14',
                target: '18'
              },
              {
                source: '18',
                target: '13'
              },
              {
                source: '19',
                target: '13'
              },
              {
                source: '19',
                target: '24'
              },
              {
                source: '30',
                target: '24'
              },
              {
                source: '30',
                target: '32'
              },
              {
                source: '32',
                target: '29'
              },
              {
                source: '29',
                target: '33'
              },
              {
                source: '33',
                target: '35'
              },
              {
                source: '33',
                target: '34'
              },
              {
                source: '33',
                target: '28'
              },
              {
                source: '28',
                target: '29'
              },
              {
                source: '29',
                target: '30'
              },
              {
                source: '29',
                target: '25'
              },
              {
                source: '25',
                target: '26'
              },
              {
                source: '26',
                target: '27'
              },
              {
                source: '27',
                target: '22'
              },
              {
                source: '26',
                target: '29'
              },
              {
                source: '22',
                target: '26'
              },
              {
                source: '17',
                target: '21'
              },
              {
                source: '22',
                target: '21'
              },
              {
                source: '23',
                target: '22'
              },
              {
                source: '23',
                target: '25'
              },
              {
                source: '25',
                target: '24'
              },
              {
                source: '25',
                target: '30'
              },
              {
                source: '30',
                target: '31'
              },
              {
                source: '23',
                target: '19'
              },
              {
                source: '17',
                target: '20'
              },
              {
                source: '20',
                target: '22'
              },
              {
                source: '23',
                target: '25'
              },
              {
                source: '20',
                target: '23'
              },
              {
                source: '20',
                target: '19'
              },
              {
                source: '17',
                target: '14'
              },
              {
                source: '20',
                target: '18'
              },
              {
                source: '20',
                target: '14'
              },
              {
                source: '15',
                target: '17'
              },
              {
                source: '15',
                target: '16'
              },
              {
                source: '12',
                target: '11'
              },
              {
                source: '11',
                target: '15'
              },
              {
                source: '15',
                target: '14'
              },
              {
                source: '11',
                target: '10'
              },
              {
                source: '11',
                target: '7'
              },
              {
                source: '11',
                target: '6'
              },
              {
                source: '27',
                target: '21'
              },
              {
                source: '27',
                target: '21'
              }
            ],
            itemStyle: { // 设置节点样式
              normal: {
                // 函数接收params参数，params就是当前data数组的每一项，把颜色return出来就可以啦~
                color: function(params) {
                  return params.data.color
                }
              }
            },
            lineStyle: {
              width: 2,
              color: '#4169E1'
            }
          }
        ]
      }
      const myChart = echarts.init(document.getElementById('mychart'))// 图标初始化
      myChart.setOption(option)// 渲染页面
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    }
  }
}
</script>

<style scoped>
#app {
  background-color: #edf7ff;
  height: 761px;
}

#button1{
  position: relative;
  left: 8%;
  top: 100px;
}

#mychart{
  position: relative;
  top: 10px;
  margin-left: 100px;
  margin-top: 160px;
  background-color: #FFFFFF;
  border-radius: 10px;
}
</style>
