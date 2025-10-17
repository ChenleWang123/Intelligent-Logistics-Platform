<template>
  <div id="app">
    <div id="part1">
      <p id="input">请输入</p>
      <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="物流起点"
        :trigger-on-focus="false"
        @select="handleSelect"
      ></el-autocomplete>
      <el-autocomplete
        class="inline-input"
        v-model="state2"
        :fetch-suggestions="querySearch"
        placeholder="物流终点"
        :trigger-on-focus="false"
        @select="handleSelect"
      ></el-autocomplete>
      <el-button type="primary" plain @click="toDriving">规划路线</el-button>
      <br>
    </div>
    <div>
      <div id="container" ref="amap"></div>
      <div id="panel"></div>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'

export default {
  data() {
    return {
      map: null,
      lnglat: [], // [long,lat]
      driving: null,
      state1: '',
      state2: '',
      mapModule: null // AMap
    }
  },
  created(){
    this.state1 = this.$route.query.key1;
    this.state2 = this.$route.query.key2;
  },
  mounted() {
    this.restaurants = this.loadAll();
    window._AMapSecurityConfig = {
      securityJsCode: 'b1832cf9734f8c2f6a0daf8aa140e0ce' // 申请key对应的秘钥
    }
    this.initAMap()
  },
  destroyed() {
    this.map.destroy()
  },
  methods: {
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
        // {"value": "广州市", "address": ""},
        // {"value": "广州南站", "address": ""},
        // {"value": "广州白云国际机场", "address": ""},
        // {"value": "广州北站", "address": ""},
        // {"value": "广州塔", "address": ""},
        // {"value": "长春市", "address": ""},
        // {"value": "长春龙嘉国际机场", "address": ""},
        // {"value": "长春站", "address": ""},
        // {"value": "长春西站", "address": ""},
        // {"value": "长春冰雪新天地", "address": ""},
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    initAMap() {
      const _this = this
      AMapLoader.load({
        key: '080a3b1a36d9ebbc4ae40e246643ab38', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: []
      })
        .then((AMap) => {
          _this.mapModule = AMap
          const map = new AMap.Map('container', {
            // 设置地图容器id
            viewMode: '3D', // 默认2d地图模式
            zoom: 12, // 初始化地图级别
            zooms: [5, 30],
            // 可以设置初始化当前位置
            // center: new AMap.LngLat(121.378945, 31.264033), // 西安
            // center: [118.118547, 24.475637], // 厦门
            center: [108.939689, 34.343181], // 西安
            resizeEnable: true
          })
          // 添加控件
          AMap.plugin(
            [
              'AMap.ElasticMarker',
              'AMap.Scale',
              'AMap.ToolBar',
              'AMap.HawkEye',
              'AMap.MapType',
              'AMap.Geolocation',
              'AMap.Driving',
              'AMap.AutoComplete',
              'AMap.PlaceSearch',
              'AMap.MarkerClusterer'
            ],
            () => {
              map.addControl(new AMap.ElasticMarker())
              map.addControl(new AMap.Scale())
              map.addControl(new AMap.ToolBar())
              map.addControl(new AMap.HawkEye())
              map.addControl(new AMap.MapType())
              map.addControl(new AMap.Geolocation())
            }
          )
          _this.map = map
          // 驾驶路线
          // _this.toDriving()
        })
        .catch((e) => {
          console.log(e)
        })
    },
    toDriving() {
      this.$message({
        message: '最优路径规划成功,请稍后!',
        type: 'success'
      })
      const _this = this
      const driving = new _this.mapModule.Driving({
        map: this.map,
        panel: 'panel'
      })
      this.driving = driving
      const points = [
        {keyword: this.state1, city: ''},
        {keyword: this.state2, city: ''},
        // {keyword: '广州市人民政府', city: '广州市'},
        // {keyword: '长沙市人民政府', city: '长沙市'},
        // {keyword: '武汉市人民政府', city: '武汉市'},
        // {keyword: '郑州市人民政府', city: '郑州市'},
        // {keyword: '济南市人民政府', city: '济南市'},
        // {keyword: '天津市人民政府', city: '天津市'},
        // {keyword: '北京市人民政府', city: '北京市'},
        // {keyword: '长春市人民政府', city: '长春市'}
        // {keyword: '西安理工大学曲江校区', city: '西安市'},
        // {keyword: '西安理工大学金花校区', city: '西安市'},
      ]
      this.driving.search(
        points,
        // 经纬度
        // new _this.mapModule.LngLat(121.378945, 32.265033),
        // new _this.mapModule.LngLat(121.504128, 31.319716),
        function (status, result) {
          // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
          if (status === 'complete') {
            // console.log('绘制驾车路线完成', result)
          } else {
            console.log('获取驾车数据失败：' + result)
          }
        }
      )
    }
  }
}
</script>
<style scoped>
::v-deep .amap-logo {
  display: none;
  opacity: 0 !important;
}
::v-deep .amap-copyright {
  opacity: 0;
}
#part1{
  width: 1057px;
  height: 70px;
  position: relative;
  left: 130px;
  top: 30px;
  background-color: #FFFFFF;
  border-radius: 10px;
}

#container {
  width: 80%;
  height: 640px;
  margin: 100px auto;
  border: 1px solid black;
  position: relative;
  top: -50px;
}

#input {
  font-family: 黑体;
  font-size: 22px;
  position: absolute;
  left: 50px;
  top: 0px;
}

.el-button {
  position: relative;
  left: 18%;
  top: 6px;
}

.el-autocomplete {
  width: 200px;
  padding: 10px;
  position: relative;
  left: 12%;
  top: 6px;
}

#app {
  background-color: #edf7ff;
  height: 761px;
}
</style>
