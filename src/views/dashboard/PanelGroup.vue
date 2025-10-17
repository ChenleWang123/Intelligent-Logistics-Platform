<template>
  <el-row :gutter="130" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <img src="@/assets/dashboard/ysz.png" alt="Icon" id="icon-class1">
        <div class="card-panel-description">
          <div class="card-panel-text" id="text1">
            整车运输中任务
          </div>
          <div class="text2">
            /个
          </div>
          <count-to :start-val="0" :end-val="188" :duration="2000" id="num1" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('messages')">
        <img src="@/assets/dashboard/dys.png" alt="Icon" id="icon-class2">
        <div class="card-panel-description">
          <div class="card-panel-text" id="text2">
            整车待运输任务
          </div>
          <div class="text2">
            /个
          </div>
          <count-to :start-val="0" :end-val="67" :duration="2000" id="num2" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <img src="@/assets/dashboard/lj.png" alt="Icon" id="icon-class3">
        <div class="card-panel-description">
          <div class="card-panel-text" id="text3">
            累计运输车次
          </div>
          <div class="text2">
            /万次
          </div>
          <count-to :start-val="0" :end-val="87390" :duration="2000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 53px;

  .card-panel-col {
    margin-bottom: 32px;
    margin-left: 52px;
  }

  .card-panel {
    border-radius: 10px;
    width: 378px;
    height: 50px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    .card-panel-description {
      float: left;
      font-weight: bold;
      margin: 0px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 18px;
        margin-bottom: 0px;
        position: relative;
        left: 85px;
        top: 17px;
      }

      .card-panel-num {
        font-size: 20px;
        position: relative;
        left: 265px;
        top: -24px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}

#num1{
  left: 293px;
  top: -24px;
}

#num2{
  left: 305px;
  top: -24px;
}

#icon-class1 {
  position: relative;
  left: -105px;
  top: 3px;
  height: 45px;
  width: 45px;
}

#icon-class2 {
  position: relative;
  left: -105px;
  top: 3px;
  height: 45px;
  width: 45px;
}

#icon-class3 {
  position: relative;
  left: -90px;
  top: 3px;
  height: 45px;
  width: 45px;
}


.text2 {
  position: relative;
  left: 329px;
  top: -3px;
  font-size: 18px;
}

</style>
