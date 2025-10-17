<template>
  <div id="app">
    <div id="part1">
      <span id="please">
        请输入:
      </span>
      <el-input class="select1" v-model="input1" style="width: 202px" placeholder="起点"></el-input>
      <el-input class="select1" v-model="input2" style="width: 202px" placeholder="终点"></el-input>
      <el-button class="select1" type="primary" plain @click="addData">添加</el-button>
      <el-button class="select_run" type="primary" plain @click="run">运行</el-button>
    </div>
    <div id="part2">
      <span class="label1">
        优化前
      </span>
      <el-image class="image" :src="currentImage1"></el-image>
    </div>
    <div id="part3">
      <span class="label1">
        优化后
      </span>
      <el-image class="image" :src="currentImage2"></el-image>
    </div>
    <div id="part4">
      <span class="label2">
        任务坐标
      </span>
      <el-table
        id="table1"
        :data="tableData"
        border
        :header-cell-style="{ background: '#2486b9', color: '#FFF' }"
        :row-class-name="tableRowClassName"
        height="193"
        style="width: 95%">
        <el-table-column
          align="center"
          prop="id"
          label="任务"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="start"
          label="起点"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="end"
          label="终点">
        </el-table-column>
      </el-table>
    </div>
    <div id="part5">
      <div
        class="echart"
        id="mychart"
        :style="{ float: 'left', width: '95%', height: '400px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    // this.initEcharts()
  },
  data() {
    return {
      input1: '',
      input2: '',
      tableData: [],
      presetData: [
        {id: '1', start: '(1,1)', end: '(15,30)'},
        {id: '2', start: '(10,2)', end: '(28,30)'},
        {id: '3', start: '(28,2)', end: '(3,29)'}
      ],
      images1: [
        require('@/assets/parts/0.png'), // 你需要把图片放在对应的路径下，这里假设是assets文件夹
        require('@/assets/parts/1.png'),
        require('@/assets/parts/2.png'),
        require('@/assets/parts/3.png'),
        require('@/assets/parts/old.png'),
      ],
      images2: [
        require('@/assets/parts/0.png'), // 你需要把图片放在对应的路径下，这里假设是assets文件夹
        require('@/assets/parts/1.png'),
        require('@/assets/parts/2.png'),
        require('@/assets/parts/3.png'),
        require('@/assets/parts/new.png'),
      ],
      currentImageIndex: 0,
      nextIndex: 0
    }
  },
  computed: {
    currentImage1() {
      return this.images1[this.currentImageIndex];
    },
    currentImage2() {
      return this.images2[this.currentImageIndex];
    },
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
        title: [
          {  // 设置第一个图表标题
            show: true,
            text: '本次路径规划',
            left: 'center',   // 设置为 'center' 使得标题在饼图上方
            top: '2%',       // 调整此值改变标题与饼图的距离
            textStyle: { //标题内容的样式
              fontFamily: "黑体",//主题文字字体，默认微软雅黑
              fontSize: 22
            }
          },
          {  // 设置第一个图表标题
            show: true,
            text: '转弯次数',
            left: 'center',   // 设置为 'center' 使得标题在饼图上方
            top: '44%',       // 调整此值改变标题与饼图的距离
            textStyle: { //标题内容的样式
              fontFamily: "黑体",//主题文字字体，默认微软雅黑
              fontSize: 18, //主题文字字体大小，默认为18px
              fontWeight: "500",
            },
          },
          {  // 设置第二个图表标题
            show: true,
            text: '路径长度',
            left: 'center',   // 设置为 'center' 使得标题在饼图上方
            top: '84%',       // 调整此值改变标题与饼图的距离
            textStyle: { //标题内容的样式
              fontFamily: "黑体",//主题文字字体，默认微软雅黑
              fontSize: 18, //主题文字字体大小，默认为18px
              fontWeight: "500",//可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            }
          }
        ],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '拐弯次数',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['50%', '30%'],
            data: [
              {value: 75, name: '优化前', itemStyle: {color: '#000080'}},
              {value: 31, name: '优化后', itemStyle: {color: '#1E90FF'}}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            name: '路径长度',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['50%', '70%'],
            data: [
              {value: 141, name: '优化前', itemStyle: {color: '#000080'}},
              {value: 109.2, name: '优化后', itemStyle: {color: '#1E90FF'}}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
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
    addData() {
      this.$message({
        message: '添加成功!',
        type: 'success'
      })
      this.input1=''
      this.input2=''
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images1.length;
      if (this.nextIndex < this.presetData.length) {
        this.tableData.push(this.presetData[this.nextIndex]);
        this.nextIndex++;
      } else {
        console.log('已经添加完所有数据');
      }
    }
    ,
    run() {
      this.$message({
        message: '路径规划成功!',
        type: 'success'
      })
      this.initEcharts()
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images1.length;
      this.currentImage1 = require('@/assets/parts/old.png')
      this.currentImage2 = require('@/assets/parts/new.png')
    }
  }
}
</script>

<style scoped>
#app {
  background-color: #edf7ff;
  height: 761px;
}

#please {
  font-family: 黑体;
  font-size: 22px;
  position: relative;
  left: 4%;
  top: 3px;
}

#part1 {
  background-color: #FFFFFF;
  border-radius: 10px;
  width: 750px;
  height: 150px;
  position: absolute;
  top: 50px;
  left: 4%;
}

#part2 {
  background-color: #FFFFFF;
  border-radius: 10px;
  width: 360px;
  height: 470px;
  position: absolute;
  top: 230px;
  left: 4%;
}

#part3 {
  background-color: #FFFFFF;
  border-radius: 10px;
  width: 360px;
  height: 470px;
  position: absolute;
  top: 230px;
  left: 33.6%;
}

#part4 {
  background-color: #FFFFFF;
  border-radius: 10px;
  width: 360px;
  height: 250px;
  position: absolute;
  top: 50px;
  left: 65%;
}

#table1 {
  position: relative;
  top: 20px;
  left: 2.5%;
}

#part5 {
  background-color: #FFFFFF;
  border-radius: 10px;
  width: 360px;
  height: 380px;
  position: absolute;
  top: 320px;
  left: 65%;
}

.select1 {
  margin-left: 40px;
  margin-top: 20px;
}

.select_run {
  position: relative;
  top: 20px;
  left: 80.2%;
}

.label1 {
  font-family: 黑体;
  font-size: 22px;
  position: relative;
  left: 40%;
  top: 30px;
}

.label2 {
  font-family: 黑体;
  font-size: 22px;
  position: relative;
  left: 40%;
  top: 12px;
}

.image {
  position: relative;
  top: 60px;
}

.el-table .warning-row {
  background: #d0dfe6;
}

.el-table .success-row {
  background: #FFF;
}
</style>
