<template>
  <div id="app">
    <div id="select">
      <span id="please">
        请输入:
      </span>
      <div id="select1">
        <el-input class="select1" v-model="input1" style="width: 202px" placeholder="任务单号"></el-input>
        <el-select class="select1" v-model="value1" placeholder="车辆型号">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input class="select1" v-model="input2" style="width: 202px" placeholder="待运数量"></el-input>
        <el-select class="select1" v-model="value2" placeholder="数据来源">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div id="select2">
        <el-cascader
          class="select2"
          placeholder="运输起点"
          :options="options2"
          v-model="selectedOptions1"
          @change="handleChange">
        </el-cascader>
        <el-cascader
          class="select2"
          placeholder="运输终点"
          :options="options2"
          v-model="selectedOptions2"
          @change="handleChange">
        </el-cascader>
        <el-date-picker
          style="width: 202px"
          class="select2"
          v-model="value3"
          type="date"
          placeholder="任务起始日期">
        </el-date-picker>
        <el-date-picker
          style="width: 202px"
          class="select2"
          v-model="value4"
          type="date"
          placeholder="任务终止日期">
        </el-date-picker>
        <el-button type="primary" plain class="select2" @click="select">查询</el-button>
      </div>

    </div>
    <div id="table">
      <el-table id="table1"
                border
                :data="tableData"
                :header-cell-style="{ background: '#2486b9', color: '#FFF' }"
                :row-class-name="tableRowClassName"
                style="width: 95%"
                height="480">
        <el-table-column
          align="center"
          prop="number"
          label="任务单号">
        </el-table-column>
        <el-table-column
          align="center"
          prop="type"
          label="货品类型"
          width="165px">
        </el-table-column>
        <el-table-column
          align="center"
          prop="quantity"
          label="待运数量"
          width="90px">
        </el-table-column>
        <el-table-column
          align="center"
          prop="start"
          label="车辆起点"
          width="175px">
        </el-table-column>
        <el-table-column
          align="center"
          prop="end"
          label="车辆终点"
          width="175px">
        </el-table-column>
        <el-table-column
          align="center"
          prop="match"
          label="匹配程度">
        </el-table-column>
        <el-table-column
          align="center"
          prop="date"
          label="任务创建时间"
          width="105px">
        </el-table-column>
        <el-table-column
          align="center"
          prop="status"
          label="任务状态">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="更新时间">
        </el-table-column>
        <el-table-column
          align="center"
          width="120">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="toHome(scope.row)">查看路径
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination id="page"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage4"
                     :page-sizes="[10, 20, 30, 40]"
                     :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total='total'>
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {regionData} from 'element-china-area-data'

export default {
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 === 0) {
        return 'warning-row';
      } else {
        return 'success-row';
      }
      return '';
    },
    handleChange(value) {
      console.log(value)
    },
    select() {
      this.$message({
        message: '查询成功!',
        type: 'success'
      })
      this.tableData = [{
        number: '185746278',
        type: '大众CC',
        quantity: '23',
        start: '广东省广州市越秀区',
        end: '吉林省长春市南关区',
        date: '2024-01-05',
        status: '未完成',
        time: '2024-01-11',
        match: '98%',
      }, {
        number: '214543659',
        type: '威驰(VIOS)',
        quantity: '19',
        start: '山东省青岛市城阳区',
        end: '江苏省徐州市鼓楼区',
        date: '2024-03-25',
        status: '未完成',
        time: '2024-03-15',
        match: '94%',
      }, {
        number: '223019180',
        type: '花冠(COROLLAEX)',
        quantity: '7',
        start: '广东省佛山市南海区',
        end: '广东省广州市天河区',
        date: '2024-01-01',
        status: '未完成',
        time: '2024-01-05',
        match: '89%',
      }, {
        number: '225346908',
        type: '探岳X',
        quantity: '11',
        start: '吉林省长春市朝阳区',
        end: '北京市朝阳区',
        date: '2024-01-21',
        status: '未完成',
        time: '2024-01-27',
        match: '81%',
      }, {
        number: '182234501',
        type: '锐志(REIZ)',
        quantity: '15',
        start: '甘肃省兰州市城关区',
        end: '甘肃省天水市麦积区',
        date: '2024-03-01',
        status: '未完成',
        time: '2024-03-07',
        match: '73%',
      }]
      this.total = 5;
    },
    toHome(row) {
      this.$router.push({
        path: '/vehicle/dispatch',
        query: {
          key1: row.start,
          key2: row.end
        }
      });
    },
    // this.$router.push("/vehicle/dispatch")   //不带参
  },
  data() {
    return {
      total: 400,
      input1: '',
      input2: '',
      options: [{
        value: '选项1',
        label: '单轴双胎'
      }, {
        value: '选项2',
        label: '双轴单胎'
      }, {
        value: '选项3',
        label: '长头牵引车+半挂车'
      }, {
        value: '选项4',
        label: '中置轴轿运列车'
      }],
      options2: regionData,
      selectedOptions1: [],
      selectedOptions2: [],
      options3: [{
        value: '选项1',
        label: '手动输入'
      }, {
        value: '选项2',
        label: '历史任务'
      }, {
        value: '选项3',
        label: '自动推送'
      }],
      value1: '',
      value2: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value3: '',
      value4: '',
      tableData: [{
        number: '185746278',
        type: '大众CC',
        quantity: '23',
        start: '广东省广州市越秀区',
        end: '吉林省长春市南关区',
        date: '2024-01-05',
        status: '已完成',
        time: '2024-01-11'
      }, {
        number: '124246238',
        type: '奔腾B70',
        quantity: '16',
        start: '吉林省长春市双阳区',
        end: '河南省郑州市中原区',
        date: '2023-12-25',
        status: '已完成',
        time: '2023-12-31'
      }, {
        number: '225346908',
        type: '探岳X',
        quantity: '11',
        start: '吉林省长春市朝阳区',
        end: '北京市朝阳区',
        date: '2024-01-21',
        status: '已完成',
        time: '2024-01-27'
      }, {
        number: '135189248',
        type: '奔腾X80',
        quantity: '15',
        start: '吉林省长春市绿园区',
        end: '安徽省合肥市庐阳区',
        date: '2024-02-15',
        status: '已完成',
        time: '2024-02-20'
      }, {
        number: '214543659',
        type: '威驰(VIOS)',
        quantity: '19',
        start: '山东省青岛市城阳区',
        end: '江苏省徐州市鼓楼区',
        date: '2024-03-25',
        status: '待接单',
        time: '2024-03-15'
      }, {
        number: '106907271',
        type: '皇冠(CROWN)',
        quantity: '8',
        start: '四川省成都市成华区',
        end: '四川省攀枝花市仁和区',
        date: '2024-03-15',
        status: '正在运输',
        time: '2024-03-16'
      }, {
        number: '321352671',
        type: '奔腾B90',
        quantity: '20',
        start: '吉林省长春市绿园区',
        end: '黑龙江省佳木斯市友好区',
        date: '2024-03-13',
        status: '正在运输',
        time: '2024-03-15'
      }, {
        number: '223019180',
        type: '花冠(COROLLAEX)',
        quantity: '7',
        start: '广东省佛山市南海区',
        end: '广东省广州市天河区',
        date: '2024-01-01',
        status: '已完成',
        time: '2024-01-05'
      }, {
        number: '106972582',
        type: '卡罗拉(COROLLA)',
        quantity: '12',
        start: '天津市南开区',
        end: '河北省石家庄市裕华区',
        date: '2024-04-09',
        status: '待接单',
        time: '2024-03-13'
      }, {
        number: '182234501',
        type: '锐志(REIZ)',
        quantity: '15',
        start: '甘肃省兰州市城关区',
        end: '甘肃省天水市麦积区',
        date: '2024-03-01',
        status: '已完成',
        time: '2024-03-07'
      }]
    }
  }
}
</script>

<style>
#app {
  background-color: #edf7ff;
  height: 761px;
}

#please {
  font-family: 黑体;
  font-size: 22px;
  position: relative;
  left: 1%;
  top: 36px;
}

#select {
  width: 1300px;
  height: 150px;
  position: relative;
  top: 15px;
  left: 1%;
  background-color: #FFFFFF;
  border-radius: 10px;
}

#select1 {
  width: 1200px;
  height: 50px;
  position: relative;
  top: 5px;
  left: 5%;
}

.select1, .select2 {
  margin-left: 30px;
}

#select2 {
  width: 1200px;
  height: 50px;
  position: relative;
  top: 20px;
  left: 5%;
}

#table {
  background-color: #FFFFFF;
  width: 1300px;
  height: 560px;
  position: relative;
  top: 30px;
  left: 1%;
  border-radius: 10px;
}

#table1 {
  width: 1300px;
  position: relative;
  top: 25px;
  left: 2.5%;
}

#page {
  position: relative;
  top: 30px;
}

.el-table .warning-row {
  background: #d0dfe6 !important;
}

.el-table .success-row {
  background: #FFF !important;
}

</style>
