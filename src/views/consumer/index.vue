<template>
  <div id="app">
    <div id="input1">
      <p id="input_select">请输入</p>
      <el-input class="input11" v-model="input1" placeholder="用户名称"></el-input>
      <el-input class="input11" v-model="input2" placeholder="用户车型"></el-input>
      <el-button id="button2" type="primary" plain @click="add" icon="el-icon-plus">新增</el-button>
      <el-button id="button2" type="primary" plain @click="select" icon="el-icon-search">查询</el-button>
    </div>
    <div id="input2">
      <el-table id="table"
                :data="data"
                :span-method="arraySpanMethod"
                :header-cell-style="{ background: '#2486b9', color: '#FFF' }"
                :row-class-name="tableRowClassName"
                style="width: 95%"
                border
                height="480"
      >
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
          width="200"
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
        >
          <template slot-scope="scope">
            <div>{{ scope.row.task1 }}</div>
            <div>{{ scope.row.task2 }}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          width="160"
          label="操作"
        >
          <template>
            <div>
              <el-button type="primary" icon="el-icon-edit" circle @click="dialogVisible = true"></el-button>
              <el-button type="danger" icon="el-icon-delete" circle @click="delet"></el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-dialog
        title="修改数据"
        :visible.sync="dialogVisible"
        width="40%"
      >
        <el-form :model="formInline">
          <el-row :gutter="20"> <!-- 设置间距 -->
            <el-col :span="8">
              <el-form-item label="用户">
                <el-input v-model="formInline.user" placeholder="用户"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="车型">
                <el-input v-model="formInline.type" placeholder="车型"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="运输累计车次(万次)">
                <el-input v-model="formInline.number" placeholder="运输累计车次(万次)"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="历史任务">
                <el-input v-model="formInline.task1" placeholder="历史任务"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="上传图片">
                <el-upload
                  action="#"
                  list-type="picture-card"
                  limit="1"
                  :auto-upload="false">
                  <i slot="default" class="el-icon-plus"></i>
                  <div slot="file" slot-scope="{file}">
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url" alt=""
                    >
                    <span class="el-upload-list__item-actions">
                </span>
                  </div>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item>
                <el-button type="primary" @click="edit" class="button_add1">提交</el-button>
                <el-button @click="dialogVisible = false" class="button_add2">取消</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-dialog>

    </div>
  </div>
</template>

<style scoped>
#app {
  background-color: #edf7ff;
  height: 761px;
}

.button_add1{
  margin: 0 0 0 190px;
}

.button_add2{
  margin: 0 0 0 40px;
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

#button2 {
  position: relative;
  left: 13%;
  top: -85px;
  margin-left: 5%;
}

.input11 {
  width: 200px;
  padding: 10px;
  position: relative;
  left: 13%;
  top: -85px;
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
  height: 560px;
  position: absolute;
  top: 170px;
  left: 90px;
  background-color: #FFFFFF;
  border-radius: 10px;
}

#table {
  position: relative;
  left: 2.5%;
  top: 20px;
}

#form {
  background-color: #97a8be;
  position: absolute;
  width: 1000px;
  height: 800px;
  left: 100px;
  top: 200px;
  border-radius: 10px;
}

.el-table .warning-row {
  background: #d0dfe6;
}

.el-table .success-row {
  background: #FFF;
}
</style>

<script>

export default {
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 === 0) {
        return 'warning-row';
      } else {
        return 'success-row';
      }
      return '';
    },
    select() {
      this.$message({
        message: '查询成功!',
        type: 'success'
      })
      this.data = [{
        logo: require('@/assets/consumer_logo/dz.png'),
        user: '一汽大众',
        type: '大众cc、宝来、腾迈',
        number: '20422',
        task1: 'K4655 青岛-天津 2022年05月22日',
        task2: 'K1410 成都-青岛 2022年12月15日'
      }]
    },
    edit() {
      this.dialogVisible = false
      this.data = [
        {
          logo: require('@/assets/consumer_logo/jl.png'),
          user: '一汽吉林',
          type: '森雅R7、R9、佳宝V52、V55',
          number: '21946',
          task1: 'K6628 广州-西安 2022年02月12日',
          task2: 'K1850 北京-上海 2023年05月17日'
        },
        {
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
        }]
      this.$message({
        message: '修改成功!',
        type: 'success'
      })
    },
    delet() {
      this.$confirm('确定删除该用户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.data = [
          {
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
          }]
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
      this.data = [
        {
          user: '一汽吉林',
          type: '森雅R7、R9、佳宝V52、V55',
        },
        {
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
        }]
    }
  },
  data() {
    return {
      dialogVisible: false,
      input1: '',
      input2: '',
      formInline: {
        user: '一汽吉林',
        type: '森雅R7、R9、佳宝V52、V55',
      },
      data: [
        {
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
        }]
    }
  }
}
</script>


