<template>
  <div id="app">
    <div id="input1">
      <p id="input_select">请输入</p>
      <el-input v-model="input1" placeholder="员工工号"></el-input>

      <el-button id="button1" type="danger" plain @click="delet" icon="el-icon-delete">删除</el-button>
      <el-button id="button2" type="primary" plain @click="add" icon="el-icon-plus">新增</el-button>
    </div>
    <div id="input2">
      <div id="image3">
        <el-image :src="imagePath" style="width: 40px; height: 220px"></el-image>
      </div>
<!--      <p id="text1">员工照片</p>-->
<!--      <p id="text2">员工基本信息</p>-->
      <div class="rectangle1">
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          :limit="limitCountImg"
          :class="{ uploadIconOne: showImg, uploadIcon: noneUploadImg }"

          :file-list="fileList"
          file="file"
          :on-change="uploadImgChange"
        >
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>

                  <span
                    class="el-upload-list__item-delete"
                    @click="handleDeleteImgRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
          </div>
        </el-upload>

        <el-dialog :visible.sync="imgDialog">
          <img width="300px" :src="form.imageUrl" alt=""/>
        </el-dialog>
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
    delet() {
      this.$confirm('确定删除该员工?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    add() {
      this.$message({
        message: '新增成功!',
        type: 'success'
      })
    },
    // 图片上传功能实现
    handleSuccess(response, file, fileList) {
      this.fileList = fileList;
      this.form.image = file.raw; // 将上传的图片数据存放在form对象的image属性中
    },


    handlePictureCardPreview(file) {
      this.form.imageUrl = file.url;
      this.imgDialog = true;
    },

    // 判断数量，是否显示上传icon
    uploadImgChange(file, fileList) {
      this.needfile = file.raw;
      console.log("这是要上传的文件===", file);
      this.noneUploadImg = fileList.length >= this.limitCountImg;
    },
    // 删除图片，判断数量，是否显示icon
    handleDeleteImgRemove(file) {
      console.log("要删除的文件=====", file);
      this.fileList = [];
      this.needfile = {};

      // this.noneUploadImg = fileList.length >= this.limitCountImg;
      this.noneUploadImg = false;
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
      input9: '',
      imagePath: require('@/assets/user/ygxx.png'),
      form: {
        imageUrl: '',//放大后展示的图片路径
      },
      showImg: true, //默认展示
      noneUploadImg: false, //
      fileList: [], //文件传输流
      needfile: {}, //需要上传的文件，最后上传的文件是存储在这里 上传文件给后端的格式后续有需
      //要可以再另写一篇
      limitCountImg: 1,//设置的第几张图片隐藏上传标志
      imgDialog: false,//图片弹框
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
  left: 8px;
  top: 6px;
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

::v-deep .el-upload--picture-card {
  width: 374px;
  height: 474px;
  line-height: 450px;
}

::v-deep .el-upload-list--picture-card .el-upload-list__item {
  width: 374px !important;
  height: 474px !important;
}

.uploadIcon ::v-deep .el-upload--picture-card {
  display: none !important; /* 上传按钮隐藏 */
}

#image3 {
  position: absolute;
  top: 160px; /* 或者试着改变这个值查看效果 */
  left: 18px;
}

</style>
