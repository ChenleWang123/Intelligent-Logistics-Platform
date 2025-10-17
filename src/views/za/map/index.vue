<template>
  <div>
    <div class="top-part">
      <!-- 输入框 -->
      <el-input v-model="inputVal" placeholder="请输入查询地点" id="searchInput" style="width:200px"></el-input>
    </div>
    <!-- 容器 -->
    <div id="container"></div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'; // 引入
window._AMapSecurityConfig = {
  securityJsCode: 'b1832cf9734f8c2f6a0daf8aa140e0ce', // 安全密钥
}
export default {
  data() {
    return {
      map: null,
      inputVal: '',
      autoOptions: {
        input: 'searchInput' // searchInput输入框的id
      },
      placeSearch: null,
      auto: null,
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    // 初始化地图
    initMap() {
      AMapLoader.load({
        key: "080a3b1a36d9ebbc4ae40e246643ab38",        // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye', 'AMap.AutoComplete', 'AMap.PlaceSearch'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.map = new AMap.Map("container", {  // 设置地图容器id
          viewMode: '3D', // 是否为3D地图模式
          zoom: 10, //初 始化地图级别
          center: [108.939689,34.343181] // 初始化地图中心点位置
        })
        this.map.addControl(new AMap.Scale())
        this.map.addControl(new AMap.ToolBar())
        this.map.addControl(new AMap.HawkEye())
        this.auto = new AMap.AutoComplete(this.autoOptions) // AutoComplete提示插件
        this.placeSearch = new AMap.PlaceSearch({ // 搜索插件
          map: this.map
        })
        // 绑定select事件
        this.auto.on('select', this.select)
        // 点标记
        // const marker1 = new AMap.Marker({
        //   position: [120.2, 30.3],
        //   title: '杭州'
        // })
        // this.map.add(marker1)
        // // 点标记加图标
        // const icon = new AMap.Icon({
        //   size: new AMap.Size(40, 40),
        //   // image: require('@/assets/imgs/user.png'),
        //   imageSize: new AMap.Size(40, 40),
        // })
        // const marker2 = new AMap.Marker({
        //   position: [120.2, 30.4],
        //   icon: icon,
        //   title: '杭州市区'
        // })
        // this.map.add(marker2)
      }).catch(e => {
        console.log(e)
      })
    },
    select(e) {
      this.$message({
        message: '查询成功!',
        type: 'success'
      })
      console.log('ee', e)
      this.placeSearch.setCity(e.poi.adcode)
      this.placeSearch.search(e.poi.name)
    }
  }
}
</script>

<style scoped>
.top-part {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background: #F6F6F6;
}

#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 650px;
}
</style>
