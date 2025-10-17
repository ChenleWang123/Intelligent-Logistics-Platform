<template>
  <div id="app">
    <div id="input1">
      <p id="input_select">请输入</p>
      <el-input v-model="input1" placeholder="员工姓名"></el-input>

      <el-button id="button1" type="primary" plain @click="select" icon="el-icon-search">查询</el-button>
      <el-button id="button2" type="primary" plain @click="update" icon="el-icon-edit">修改</el-button>
    </div>
    <div id="input2">
      <div id="image3">
        <el-image :src="imagePath2" style="width: 40px; height: 220px"></el-image>
      </div>
<!--      <p id="text1">员工照片</p>-->
<!--      <p id="text2">员工基本信息</p>-->
      <div class="rectangle1">
        <el-image class="image" :src="imagePath" style="width: 350px; height: 365px"></el-image>
      </div>
      <div class="rectangle2">
        <div style="width: 100px">
          <div>
            <p class="label1">姓名:</p>
            <el-input v-model="input2" class="input1"></el-input>
          </div>
          <div>
            <p class="label1">民族:</p>
            <el-input v-model="input3" class="input1"></el-input>
          </div>
          <div>
            <p class="label1">工种:</p>
            <el-input v-model="input4" class="input1"></el-input>
          </div>
          <div>
            <p class="label1">电话:</p>
            <el-input v-model="input5" class="input1"></el-input>
          </div>
        </div>
        <div style="width: 100px" id="div2">
          <div>
            <p class="label2">性别:</p>
            <el-input v-model="input6" class="input2"></el-input>
          </div>
          <div>
            <p class="label2">工龄:</p>
            <el-input v-model="input7" class="input2"></el-input>
          </div>
          <div>
            <p class="label2">工号:</p>
            <el-input v-model="input8" class="input2"></el-input>
          </div>
          <div>
            <p class="label2">邮箱:</p>
            <el-input v-model="input9" class="input2"></el-input>
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
      // 判断 input1 是否等于 '吕珊珊'
      if (this.input1 === '吕珊珊') {
        this.$message({
          message: '查询成功!',
          type: 'success'
        });
        this.input2 = '吕珊珊'; // 填充数据
        this.input3 = '汉族';
        this.input4 = '总经理';
        this.input5 = '13652090146';
        this.input6 = '女';
        this.input7 = '7';
        this.input8 = 'D00001';
        this.input9 = 'Lss0001@163.com';
        this.imagePath = require('@/assets/user/lss.png'); // 设置图片路径
      } else if (this.input1 === '黄曼涵') {
        this.$message({
          message: '查询成功!',
          type: 'success'
        });
        this.input2 = '黄曼涵'; // 填充数据
        this.input3 = '土家族';
        this.input4 = '人力资源主管';
        this.input5 = '17870840815';
        this.input6 = '女';
        this.input7 = '6';
        this.input8 = 'D00002';
        this.input9 = 'Hmh0002@163.com';
        this.imagePath = require('@/assets/user/hmh.png'); // 设置图片路径
      } else if (this.input1 === '李巍') {
        this.$message({
          message: '查询成功!',
          type: 'success'
        });
        this.input2 = '李巍'; // 填充数据
        this.input3 = '汉族';
        this.input4 = '战略资源部部长';
        this.input5 = '18540880484';
        this.input6 = '男';
        this.input7 = '4';
        this.input8 = 'D00003';
        this.input9 = 'Lw0003@163.com';
        this.imagePath = require('@/assets/user/lw.png'); // 设置图片路径
      } else if (this.input1 === '张宇') {
        this.$message({
          message: '查询成功!',
          type: 'success'
        });
        this.input2 = '张宇'; // 填充数据
        this.input3 = '汉族';
        this.input4 = '智能物流技术研发员';
        this.input5 = '17750158408';
        this.input6 = '男';
        this.input7 = '8';
        this.input8 = 'D00004';
        this.input9 = 'Zy0004@163.com';
        this.imagePath = require('@/assets/user/zy.png'); // 设置图片路径
      } else if (this.input1 === '刘泽城') {
        this.$message({
          message: '查询成功!',
          type: 'success'
        });
        this.input2 = '刘泽城'; // 填充数据
        this.input3 = '汉族';
        this.input4 = '库内调度员';
        this.input5 = '13205346068';
        this.input6 = '男';
        this.input7 = '5';
        this.input8 = 'D00005';
        this.input9 = 'Lzc0005@163.com';
        this.imagePath = require('@/assets/user/lzc.png'); // 设置图片路径
      } else {
        // 如果 input1 不等于 '吕珊珊'，可以在这里处理其他逻辑
        this.$message({
          message: '未找到匹配的员工信息',
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
      input1: '', // 员工姓名
      input2: '', // 姓名
      input3: '', // 民族
      input4: '', // 工种
      input5: '', // 电话
      input6: '', // 性别
      input7: '', // 工龄
      input8: '', // 工号
      input9: '', // 邮箱
      imagePath: require('@/assets/user/blank.png'), // 员工照片路径
      imagePath2: require('@/assets/user/ygxx.png'), // 员工照片路径
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
  left: 67px;
  top: -7px;
  margin-top: 25px;
  width: 230px;
  font-size: 20px;
}

.input2 {
  position: relative;
  left: 53px;
  top: -106px;
  margin-top: 25px;
  width: 230px;
  font-size: 20px;
}

.label1 {
  font-size: 22px;
  margin: 0px 0 0 0px;
  padding: 0 0 0 0;
  position: relative;
  display: grid; /* Add this */
  top: 60px;
  left: 20px;
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
