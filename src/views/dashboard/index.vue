<template>
  <div id="app">
    <!-- 注意： link 不能使用，因为它是内置的标签
     你要使用另外一个名称就行了，一般加上一个前缀
   -->
    <div>
      <span id="time1">{{ dateFormat2(newDate) }}</span>
      <span id="time2">{{ dateFormat1(newDate) }}</span>
      <span id="head">一汽物流全链路资源智能调度平台</span>
      <el-divider id="divider"></el-divider>
    </div>
    <panel-group @handleSetLineChartData="handleSetLineChartData"/>
    <div id="part1">
      <span id="car">整车物流调度</span>
      <div>
        <img id="map"
             :src="require('@/assets/dashboard/map.png')">
      </div>
    </div>
    <div id="part2">
      <span id="predict">物流资源需求预测</span>
      <el-button type="primary" plain size="small" id="button1" @click="year" round>年度</el-button>
      <el-button type="primary" plain size="small" id="button2" @click="season" round>季度</el-button>
      <el-button type="primary" plain size="small" id="button3" @click="month" round>月度</el-button>
      <div
        class="echart"
        id="mychart"
        :style="{ float: 'left', width: '500px', height: '490px' }"
      ></div>
    </div>
    <div id="part3">
      <span id="user">用户信息</span>
      <el-table id="table1"
                :data="tableData1"
                border
                :header-cell-style="{ background: '#2486b9', color: '#FFF' }"
                :row-class-name="tableRowClassName"
                height="440px"
                style="width: 90%">
        <el-table-column
          width="70"
          align="center"
          label="编号"
          type="index"
        >
        </el-table-column>
        <el-table-column
          width="100"
          align="center"
          label="Logo"
        >
          <template slot-scope="scope">
            <img v-if="scope.row.logo" :src="scope.row.logo" alt="Logo" style="width: 75px; height: 50px;">
            <!-- 如果没有 img，则显示默认图标或者文本 -->
            <i v-else class="el-icon-picture-outline" style="font-size: 50px;"></i>
          </template>
        </el-table-column>
        <el-table-column
          width="100"
          align="center"
          label="用户"
        >
          <template slot-scope="scope">
            <div>{{ scope.row.user }}</div>
          </template>
        </el-table-column>
        <el-table-column
          width="280"
          align="center"
          label="车型"
        >
          <template slot-scope="scope">
            <div>{{ scope.row.type }}</div>
          </template>
        </el-table-column>
        <el-table-column
          width="200"
          align="center"
          label="运输累计车次(万次)"
        >
          <template slot-scope="scope">
            <div>{{ scope.row.number }}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="历史任务"
          width="280"
        >
          <template slot-scope="scope">
            <div>{{ scope.row.task1 }}</div>
            <div>{{ scope.row.task2 }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div id="part4">
      <span id="device">设备信息</span>
      <el-table id="table2"
                :data="tableData2"
                border
                height="440px"
                :header-cell-style="{ background: '#2486b9', color: '#FFF' }"
                :row-class-name="tableRowClassName"
                style="width: 90%">
        <el-table-column
          align="center"
          id="id1"
          prop="num"
          label="设备编号"
        >
        </el-table-column>
        <el-table-column
          width="100"
          align="center"
          label="Logo"
        >
          <template slot-scope="scope">
            <img v-if="scope.row.img" :src="scope.row.img" alt="Logo" style="width: 75px; height: 50px;">
            <!-- 如果没有 img，则显示默认图标或者文本 -->
            <i v-else class="el-icon-picture-outline" style="font-size: 50px;"></i>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="type"
          label="设备类型"
          width="120px">
        </el-table-column>
        <el-table-column
          align="center"
          prop="version"
          label="设备型号"
          width="120px">
        </el-table-column>
        <el-table-column
          align="center"
          prop="speed"
          label="举升高度">
        </el-table-column>
        <el-table-column
          align="center"
          prop="weight"
          label="额定负载"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="charge"
          label="电量状态"
          width="120px"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="year"
          label="使用年限"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="出厂时间"
          width="155">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
import * as echarts from 'echarts'
import PanelGroup from './PanelGroup.vue'
import CountTo from "vue-count-to";

export default {
  components: {
    CountTo,
    PanelGroup
  },
  data() {
    return {
      like: true,
      value1: 4154.564,
      value2: 1314,
      title: "增长人数",
      // 当前时间
      newDate: new Date(),
      input1: '',
      input2: '',
      map: null,
      lnglat: [], // [long,lat]
      driving: null,
      state1: '',
      state2: '',
      mapModule: null, // AMap
      tableData1: [{
        logo: require('@/assets/consumer_logo/ad.png'),
        user: '一汽奥迪',
        type: '奥迪100、奥迪200、奥迪A4、奥迪A6',
        number: '25746',
        task1: 'K6628 深圳-天津 2023年08月22日',
        task2: 'K1850 深圳-郑州 2023年02月09日'
      },
        {
          logo: require('@/assets/consumer_logo/jf.png'),
          user: '一汽解放',
          type: '解放J6P、JH6、解放J7',
          number: '17105',
          task1: 'G6968 西安-郑州 2023年05月03日',
          task2: 'G1495 青岛-长春 2022年05月29日',
        },
        {
          logo: require('@/assets/consumer_logo/dz.png'),
          user: '一汽大众',
          type: '大众cc、宝来、腾迈',
          number: '20422',
          task1: 'K4655 青岛-天津 2022年05月22日',
          task2: 'K1410 成都-青岛 2022年12月15日'
        },
        {
          logo: require('@/assets/consumer_logo/ft.png'),
          user: '一汽丰田',
          type: '威驰，卡罗拉，亚洲龙',
          number: '23493',
          task1: 'H7185 天津-佛山 2023年07月30日',
          task2: 'H4503 西安-佛山 2022年04月20日'
        },
        {
          logo: require('@/assets/consumer_logo/mzd.png'),
          user: '一汽马自达',
          type: 'ATZ、伊瑞、CX4',
          number: '22647\n',
          task1: 'H1895 天津-长春 2023年10月09日',
          task2: 'H3341 成都-长春 2022年06月02日'
        },
        {
          logo: require('@/assets/consumer_logo/hq.png'),
          user: '一汽红旗',
          type: '红旗H9、H5、HS5',
          number: '13804',
          task1: 'L5760 武汉-南京 2023年09月02日',
          task2: 'L2539 长春-上海 2023年01月20日'
        },
        {
          logo: require('@/assets/consumer_logo/hm.png'),
          user: '一汽海马',
          type: '海马8S、海马7X-E、海马6P',
          number: '20360',
          task1: 'H4896 杭州-长沙 2023年02月27日',
          task2: 'H5643 南京-成都 2022年08月31日'
        },
        {
          logo: require('@/assets/consumer_logo/bt.png'),
          user: '一汽奔腾',
          type: '奔腾T33、奔腾E01、奔腾T55',
          number: '16714',
          task1: 'H1347 长春-郑州 2023年12月11日',
          task2: 'H9551 长春-西安 2022年12月13日'
        }],
      tableData2: [{
        num: 'S0001',
        version: 'AGVQ7-1000E',
        weight: '1000(kg)',
        time: '2021-02-19 11:00:00',
        type: '海康升举型',
        charge: '98%',
        speed: '60mm',
        year: '5',
        img: require('@/assets/management/VQ7.png')
      }, {
        num: 'S0002',
        version: 'AGVQ2-400D',
        weight: '1000(kg)',
        time: '2022-05-01 09:00:00',
        type: '海康升举型',
        charge: '60%',
        speed: '60mm',
        year: '5',
        img: require('@/assets/management/VQ2.png')
      }, {
        num: 'S0003',
        version: 'F1-300T',
        weight: '300(kg)',
        time: '2020-07-15 10:00:00',
        type: '海康叉取机器人',
        speed: '438mm',
        year: '4',
        charge: '78%',
        img: require('@/assets/management/F13.png')
      }, {
        num: 'S0004',
        version: 'F1-600U',
        weight: '600(kg)',
        time: '2019-12-25 08:00:00',
        type: '海康叉取机器人',
        speed: '1344mm',
        year: '6',
        charge: '50%',
        img: require('@/assets/management/F16.png')
      }, {
        num: 'S0005',
        version: 'F5-1400U',
        weight: '1500(kg)',
        time: '2023-01-20 07:00:00',
        type: '海康叉取机器人',
        speed: '3070mm',
        year: '7',
        charge: '100%',
        img: require('@/assets/management/F514.png')
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
    // 时间格式化
    dateFormat1() {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      let week = date.getDay() // 星期
      let weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
// 拼接 时间格式处理
      return year + '年' + month + '月' + day + '日 ' + weekArr[week]
    },
    dateFormat2() {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      let week = date.getDay() // 星期
      let weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
// 拼接 时间格式处理
      return hours + ':' + minutes + ':' + seconds
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        {"value": "广州市", "address": ""},
        {"value": "广州南站", "address": ""},
        {"value": "广州白云国际机场", "address": ""},
        {"value": "广州北站", "address": ""},
        {"value": "广州塔", "address": ""},
        {"value": "长春市", "address": ""},
        {"value": "长春龙嘉国际机场", "address": ""},
        {"value": "长春站", "address": ""},
        {"value": "长春西站", "address": ""},
        {"value": "长春冰雪新天地", "address": ""},
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    initEcharts() {
      const option = {
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
            padding: [0, 0, 20, -42]
          },
          axisLabel: {
            align: 'right',
            margin: 8,
            padding: [0, -10, 0, 0]  // 添加右侧内边距来向右移动文本
          },
        },
        yAxis: [
          {
            type: 'category',
            data: [
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
            data: [
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
            data: [
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
            data: [
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
            data: [null, null, null, null,
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
      this.initEcharts()
    },
    season() {
      const myChart = echarts.init(document.getElementById('mychart'))// 图标初始化
      myChart.clear()
      const option = {
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
            padding: [0, 0, 20, -42]
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
            padding: [0, 0, 20, -42]
          },
          axisLabel: {
            align: 'right',
            margin: 8,
            padding: [0, -20, 0, 0]  // 添加右侧内边距来向右移动文本
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
    }
  },
// 挂载时间
  mounted() {
    let that = this
    this.timer = setInterval(function () {
      that.newDate = new Date().toLocaleString()
    })
    this.restaurants = this.loadAll();
    this.initEcharts()
  },
// 销毁时清除计时器
  beforeDestroy: function () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  destroyed() {
    this.map.destroy()
  }
}
</script>


<style scoped>

#app {
  background-color: #edf7ff;
  height: 1280px;
}

.like {
  cursor: pointer;
  font-size: 25px;
  display: inline-block;
}

#time1 {
  font-family: 黑体;
  position: relative;
  left: 2%;
  top: 34px;
  font-size: large;
  font-weight: 600;
}

#time2 {
  font-family: 黑体;
  position: relative;
  left: 79%;
  top: 34px;
  font-size: large;
  font-weight: 600;
}

#divider {
  position: absolute;
  top: 45px;
}

#head {
  position: relative;
  left: 10%;
  top: 30px;
  font-size: xx-large;
  font-family: 黑体;
  font-weight: 600;
}

#car {
  font-family: 黑体;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  left: 5%;
  top: 15px;
}

#map {
  width: 88%;
  height: 467px;
  border: 1px solid black;
  position: relative;
  top: 25px;
  left: 31px;
  border-radius: 5px;
}

#part0 {
  background: #FFFFFF;
  width: 540px;
  height: 280px;
  border-radius: 10px;
  position: absolute;
  left: 1%;
  top: 90px;
}

#part1 {
  background: #FFFFFF;
  width: 585px;
  height: 528px;
  border-radius: 10px;
  position: absolute;
  left: 52px;
  top: 160px;
}

#predict {
  position: relative;
  left: 5%;
  top: 15px;
  font-family: 黑体;
  font-size: 20px;
  font-weight: 600;
}

#mychart {
  position: relative;
  left: 12%;
  top: -10px;
}

#part2 {
  background: #FFFFFF;
  width: 585px;
  height: 528px;
  border-radius: 10px;
  position: absolute;
  left: 665px;
  top: 160px;
}

#user {
  position: relative;
  left: 5%;
  top: 15px;
  font-family: 黑体;
  font-size: 20px;
  font-weight: 600;
}

#device {
  position: relative;
  left: 5%;
  top: 15px;
  font-family: 黑体;
  font-size: 20px;
  font-weight: 600;
}

#table1 {
  position: relative;
  height: 270px;
  left: 31px;
  top: 30px;
  width: 300px;
  border-radius: 5px;
}

#table2 {
  position: relative;
  height: 270px;
  left: 31px;
  top: 30px;
  width: 300px;
  border-radius: 5px;
}

#part3 {
  background: #FFFFFF;
  width: 585px;
  height: 528px;
  border-radius: 10px;
  position: relative;
  left: 52px;
  top: 537px;
}

#part4 {
  background: #FFFFFF;
  width: 585px;
  height: 528px;
  border-radius: 10px;
  position: absolute;
  left: 665px;
  top: 709px;
}

#button1 {
  position: relative;
  left: -140px;
  top: 167px;
}

#button2 {
  position: relative;
  left: -206px;
  top: 248px;
}

#button3 {
  position: relative;
  left: -271px;
  top: 329px;
}

/*最外层透明*/
/deep/ .el-table, /deep/ .el-table__expanded-cell {
  background-color: transparent;
}

.el-table .warning-row {
  background: #d0dfe6;
}

.el-table .success-row {
  background: #FFF;
}

</style>
