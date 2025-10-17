<template>
  <div id="app">
    <div id="input1">
      <p id="input_select">请输入</p>
      <el-input v-model="input1" placeholder="设备编号"></el-input>

      <el-button id="button1" type="primary" plain @click="select" icon="el-icon-search">查询</el-button>
      <el-button id="button2" type="primary" plain @click="update" icon="el-icon-edit">修改</el-button>
    </div>
    <div id="input2">
      <div id="image3">
        <el-image :src="imagePath2" style="width: 40px; height: 220px"></el-image>
      </div>
<!--      <p id="text1">设备示意图</p>-->
<!--      <p id="text2">设备信息列表</p>-->
      <div class="rectangle1">
        <el-image class="image" :src="imagePath" style="width: 350px; height: 365px"></el-image>
      </div>
      <div class="rectangle2">
        <div style="width: 100px">
          <div>
            <p class="label1">设备编号:</p>
            <el-input v-model="input2" class="input1"></el-input>
          </div>
          <div>
            <p class="label1">设备型号:</p>
            <el-input v-model="input3" class="input1"></el-input>
          </div>
          <div>
            <p class="label1">额定负载:</p>
            <el-input v-model="input4" class="input1"></el-input>
          </div>
          <div>
            <p class="label1">电量状态:</p>
            <el-input v-model="input9" class="input1"></el-input>
          </div>
        </div>
        <div style="width: 100px" id="div2">
          <div>
            <p class="label2">设备类型:</p>
            <el-input v-model="input6" class="input2"></el-input>
          </div>
          <div>
            <p class="label2">举升高度:</p>
            <el-input v-model="input7" class="input2"></el-input>
          </div>
          <div>
            <p class="label2">使用年限:</p>
            <el-input v-model="input8" class="input2"></el-input>
          </div>
          <div>
            <p class="label2">出厂时间:</p>
            <el-input v-model="input5" class="input2"></el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    select() {
      if (this.input1 === 'S0001') {
        this.$message({
          message: '查询成功!',
          type: 'success'
        });
        this.input2 = 'S0001'
        this.input3 = 'AGVQ7-1000E'
        this.input4 = '1000(kg)'
        this.input5 = '2021-02-19 11:00:00'
        this.input6 = '海康升举型'
        this.input7 = '60mm'
        this.input8 = '5'
        this.input9 = '98%'
        this.imagePath = require('@/assets/management/VQ7.png')
      } else if (this.input1 === 'S0002') {
        this.$message({
          message: '查询成功!',
          type: 'success'
        });
        this.input2 = 'S0002'
        this.input3 = 'AGVQ2-400D'
        this.input4 = '1000(kg)'
        this.input5 = '2022-05-01 09:00:00'
        this.input6 = '海康升举型'
        this.input7 = '60mm'
        this.input8 = '5'
        this.input9 = '85%'
        this.imagePath = require('@/assets/management/VQ2.png')
      }else if (this.input1 === 'S0003') {
        this.$message({
          message: '查询成功!',
          type: 'success'
        });
        this.input2 = 'S0003'
        this.input3 = 'F1-300T'
        this.input4 = '300(kg)'
        this.input5 = '2020-07-15 10:00:00'
        this.input6 = '海康叉取机器人'
        this.input7 = '438mm'
        this.input8 = '4'
        this.input9 = '75%'
        this.imagePath = require('@/assets/management/F13.png')
      }else if (this.input1 === 'S0004') {
        this.$message({
          message: '查询成功!',
          type: 'success'
        });
        this.input2 = 'S0004'
        this.input3 = 'F1-600U'
        this.input4 = '600(kg)'
        this.input5 = '2019-12-25 08:00:00'
        this.input6 = '海康叉取机器人'
        this.input7 = '1344mm'
        this.input8 = '6'
        this.input9 = '50%'
        this.imagePath = require('@/assets/management/F16.png')
      }else if (this.input1 === 'S0005') {
        this.$message({
          message: '查询成功!',
          type: 'success'
        });
        this.input2 = 'S0005'
        this.input3 = 'F1-4000U'
        this.input4 = '1500(kg)'
        this.input5 = '2023-01-20 07:00:00'
        this.input6 = '海康叉取机器人'
        this.input7 = '3070mm'
        this.input8 = '7'
        this.input9 = '100%'
        this.imagePath = require('@/assets/management/F514.png')
      }else {
        // 如果 input1 不等于 '吕珊珊'，可以在这里处理其他逻辑
        this.$message({
          message: '未找到匹配的设备信息',
          type: 'error'
        });
      }
    },
    update() {
      this.$message({
        message: '修改成功!',
        type: 'success'
      })
    }
  },
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      imagePath: require('@/assets/user/blank.png'),
      imagePath2: require('@/assets/management/sbxx.png'),
    }
  }
}
</script>

<style scoped>
#app {
  background-color: #edf7ff;
  height: 761px;
}

#input_select {
  font-family: 黑体;
  font-size: 22px;
  margin-top: 5%;
  margin-left: 5%;
  position: relative;
  left: 10px;
  top: -21px;
}

#button1 {
  position: relative;
  left: 14%;
  top: -85px;
  margin-left: 5%;
}

#button2 {
  position: relative;
  left: 13%;
  top: -85px;
  margin-left: 5%;
}

.el-input {
  width: 200px;
  padding: 10px;
  position: relative;
  left: 13%;
  top: -85px;
}

.image {
  position: relative;
  left: 12px;
  top: 55px;
}

.rectangle1 {
  width: 380px;
  height: 480px;
  border: 3px solid #d0dfe6;
  border-radius: 7px;
  position: relative;
  left: 5%;
  top: 45px
}

.rectangle2 {
  width: 600px;
  height: 480px;
  border: 3px solid #d0dfe6;
  border-radius: 7px;
  position: relative;
  left: 43%;
  top: -435px;
}

.input1 {
  position: relative;
  left: 98px;
  top: -7px;
  margin-top: 25px;
  width: 210px;
  font-size: 20px;
}

.input2 {
  position: relative;
  left: 90px;
  top: -106px;
  margin-top: 25px;
  width: 210px;
  font-size: 20px;
}

.label1 {
  font-size: 22px;
  margin: 0px 0 0 0px;
  padding: 0 0 0 0;
  position: relative;
  display: grid; /* Add this */
  top: 60px;
  left: 12px;
}

.label2 {
  font-size: 22px;
  margin: 0px 0 0 0px;
  padding: 0 0 0 0;
  position: relative;
  display: grid; /* Add this */
  top: -40px;
  left: 6px;
}

#div2 {
  position: relative;
  left: 50%;
  bottom: 341px;
}


#input1 {
  width: 1150px;
  height: 100px;
  position: absolute;
  top: 40px;
  left: 90px;
  background-color: #FFFFFF;
  border-radius: 10px;
}

#input2 {
  width: 1150px;
  height: 568px;
  position: absolute;
  top: 170px;
  left: 90px;
  background-color: #FFFFFF;
  border-radius: 10px;
}

#image3 {
  position: absolute;
  top: 160px; /* 或者试着改变这个值查看效果 */
  left: 18px;
}
</style>
