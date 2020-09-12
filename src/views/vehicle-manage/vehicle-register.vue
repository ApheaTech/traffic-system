<template>
  <div class="vehicleRegister">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">车辆管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/vehicleRegister'}">车辆录入</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>车辆录入</h1>
    <!-- 填写表单 -->
    <el-form ref="form" :model="form" label-width="80px">
      <!-- 第1行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="车牌照号" label-width="100px">
            <el-input v-model="vehicleForm.carNumber"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="使用单位" label-width="100px">
            <el-select v-model="vehicleForm.carBelong" placeholder="请选择使用单位">
              <!-- <el-option label="矿级机关-汽车服务中心" value="1"></el-option> -->
              <el-option v-for="item in departmentList" :key="item.index" :label="item.departmentName" :value="item.departmentName"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第2行 -->
      <el-row>
        <el-col :span="4" :offset="5">
          <el-form-item label="车辆种类" label-width="100px">
            <el-select v-model="vehicleForm.carType" placeholder="请选择车辆种类" style="width:100%;">
              <el-option v-for="item in vehicleCategoryList" v-bind:key="item" v-bind:label="item.carType" v-bind:value="item.carType"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="2" :offset="0">
          <el-form-item label-width="0">
            <el-checkbox v-model="vehicleForm.isLeaderCar">领导用车</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="车辆类型" label-width="100px">
            <el-select v-model="vehicleForm.carCategory" placeholder="请选择车辆类型">
              <el-option label="小车" value="car"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第3行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="驾驶员" label-width="100px">
            <el-input v-model="vehicleForm.driverName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="车身颜色" label-width="100px">
            <el-input v-model="vehicleForm.carColor"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第4行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="厂牌型号" label-width="100px">
            <el-input v-model="vehicleForm.brandModel"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="出厂日期" label-width="100px">
            <el-date-picker
              v-model="vehicleForm.manufactureDate"
              type="date"
              placeholder="选择日期"
              style="width:100%">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第5行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="入户日期" label-width="100px">
            <el-date-picker
              v-model="vehicleForm.obtainDate"
              type="date"
              placeholder="选择日期"
              style="width:100%;">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="价值（万元）" label-width="100px">
            <el-input v-model="vehicleForm.carValue"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第6行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="车辆来历" label-width="100px">
            <el-select v-model="vehicleForm.carFrom" placeholder="请选择车辆来历">
              <!-- <el-option label="租赁" value="rent"></el-option> -->
              <el-option v-for="item in carFromList" :key="item.index" :label="item.carFrom" :value="item.carFrom"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="0">
          <el-form-item label="已累计行驶（公里）" label-width="170px">
            <el-input v-model="vehicleForm.carDrivingDistance"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第7行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="行驶证车主" label-width="100px">
            <el-input v-model="vehicleForm.drivingLicenseOwner"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="车主地址" label-width="100px">
            <el-input v-model="vehicleForm.carOwnerAddress"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第8行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="车主代码" label-width="100px">
            <el-input v-model="vehicleForm.carOwnerIndex"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="制造国" label-width="100px">
            <el-input v-model="vehicleForm.carMadeBy"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第9行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="制造厂商" label-width="100px">
            <el-input v-model="vehicleForm.manufactures"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="启用日期" label-width="100px">
            <el-date-picker
              v-model="vehicleForm.enbaleDate"
              type="date"
              placeholder="选择日期"
              style="width:100%">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第10行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="发动机型号" label-width="100px">
            <el-input v-model="vehicleForm.engineModel"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="发动机号" label-width="100px">
            <el-input v-model="vehicleForm.engineNumber"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第11行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="气缸数目" label-width="100px">
            <el-input-number v-model="vehicleForm.cylinderCount" @change="handleChange" :min="1" :max="10"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="车架号" label-width="100px">
            <el-input v-model="vehicleForm.frameNumber"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第12行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="排量/功率" label-width="100px">
            <el-input v-model="vehicleForm.displacement"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="最小离地距离" label-width="100px">
            <el-input v-model="vehicleForm.leastDistanceFromGround"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第13行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="缸径×行程" label-width="100px">
            <el-input v-model="vehicleForm.boreMultiplyDistance"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="最小转弯半径" label-width="100px">
            <el-input v-model="vehicleForm.leastTurnRadius"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第14行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="压缩比" label-width="100px">
            <el-input v-model="vehicleForm.compressionRatio"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="转向器型式" label-width="100px">
            <el-input v-model="vehicleForm.steerMachineModel"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第15行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="轴数" label-width="100px">
            <el-input-number v-model="vehicleForm.axleCount" @change="handleChange" :min="1" :max="10"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="轴距" label-width="100px">
            <el-input v-model="vehicleForm.axleDistance"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第16行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="轮胎规格" label-width="100px">
            <el-input v-model="vehicleForm.tyreSize"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="轮胎数" label-width="100px">
            <el-input-number v-model="vehicleForm.tyreCount" @change="handleChange" :min="1" :max="10"></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第17行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="主制动型式" label-width="100px">
            <el-input v-model="vehicleForm.mainBrakeType"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="驻车制动型式" label-width="100px">
            <el-input v-model="vehicleForm.parkBrakeType"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第18行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="油耗" label-width="100px">
            <el-input v-model="vehicleForm.oilConsumption"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="油箱容量" label-width="100px">
            <el-input v-model="vehicleForm.tankCapacity"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第19行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="核定载客" label-width="100px">
            <el-input v-model="vehicleForm.approvedPassengerCapacity"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="核定载重" label-width="100px">
            <el-input v-model="vehicleForm.approvedLoad"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第20行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="总质量" label-width="100px">
            <el-input v-model="vehicleForm.totalMass"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="车身尺寸-长" label-width="100px">
            <el-input v-model="vehicleForm.carLength"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第21行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="车身尺寸-宽" label-width="100px">
            <el-input v-model="vehicleForm.carWidth"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="车身尺寸-高" label-width="100px">
            <el-input v-model="vehicleForm.carHeight"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第22行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="冷却-形式" label-width="100px">
            <el-input v-model="vehicleForm.coolingForm"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="冷却-容量" label-width="100px">
            <el-input v-model="vehicleForm.coolingCapacity"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第23行 -->
      <el-row>
        <el-col :span="6" :offset="5">
          <el-form-item label="轮距-前" label-width="100px">
            <el-input v-model="vehicleForm.frontWheelBase"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-form-item label="轮距-中后" label-width="100px">
            <el-input v-model="vehicleForm.middleBackWheelBase"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第24行 -->
      <el-row>
        <el-col :span="13" :offset="5">
          <el-form-item label="备注" label-width="100px">
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入内容"
              v-model="vehicleForm.remarks">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="13" :offset="5">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="large" type="success">点击上传行驶证复印件</el-button>
          </el-upload>
        </el-col>
      </el-row>
      <!-- 提交 -->
      <el-row>
        <el-col :span="13" :offset="5">
          <el-form-item label-width="0px" style="margin-top:20px;">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-popconfirm title="是否确定清空录入信息?">
              <el-button slot="reference" type="danger" @click="onClear" style="margin-left:20px;">清空</el-button>
            </el-popconfirm>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vehicleForm: {
        carNumber: '',
        carBelong: '',
        carType: '',
        isLeaderCar: '',
        carCategory: '',
        driverName: '',
        carColor: '',
        brandModel: '',
        manufactureDate: '',
        obtainDate: '',
        carValue: '',
        carFrom: '',
        carDrivingDistance: '',
        drivingLicenseOwner: '',
        carOwnerAddress: '',
        carOwnerIndex: '',
        carMadeBy: '',
        manufactures: '',
        enbaleDate: '',
        engineModel: '',
        engineNumber: '',
        cylinderCount: '',
        frameNumber: '',
        displacement: '',
        leastDistanceFromGround: '',
        boreMultiplyDistance: '',
        leastTurnRadius: '',
        compressionRatio: '',
        steerMachineModel: '',
        axleCount: '',
        axleDistance: '',
        tyreSize: '',
        tyreCount: '',
        mainBrakeType: '',
        parkBrakeType: '',
        oilConsumption: '',
        tankCapacity: '',
        approvedPassengerCapacity: '',
        approvedLoad: '',
        totalMass: '',
        carLength: '',
        carWidth: '',
        carHeight: '',
        coolingForm: '',
        coolingCapacity: '',
        frontWheelBase: '',
        middleBackWheelBase: '',
        remarks: ''
      },
      // 车辆种类应该为在线获取，不能获取时，使用自行填充的list；可以获取时，使用空list
      vehicleCategoryList: [{}],
      // vehicleCategoryList: [
      //   {
      //     index: 1,
      //     categoryName: '大型普通客车'
      //   },
      //   {
      //     index: 2,
      //     categoryName: '小车'
      //   },
      //   {
      //     index: 3,
      //     categoryName: '小越野车'
      //   },
      //   {
      //     index: 4,
      //     categoryName: '皮卡'
      //   },
      //   {
      //     index: 5,
      //     categoryName: '双排货车'
      //   },
      //   {
      //     index: 6,
      //     categoryName: '大型消防车'
      //   },
      //   {
      //     index: 7,
      //     categoryName: '特种车'
      //   },
      //   {
      //     index: 8,
      //     categoryName: '重型转向作业车'
      //   },
      //   {
      //     index: 9,
      //     categoryName: '轻型普通客车'
      //   }
      // ],
      departmentList: [
        {
          index: 1,
          departmentName: '矿级机关-汽车服务中心'
        },
        {
          index: 2,
          departmentName: '环保科'
        },
        {
          index: 3,
          departmentName: '行政部'
        },
        {
          index: 4,
          departmentName: '调度中心'
        }
      ],
      carFromList: [
        {
          index: 1,
          carFrom: '租赁'
        },
        {
          index: 2,
          carFrom: '集团采购'
        }
      ]
    }
  },
  methods: {
    // 提交表单
    onSubmit () {
      this.axios
        .get('/addvehicleform', {
          params: {
            // form: this.vehicleForm
            carNumber: this.vehicleForm.carNumber,
            carBelong: this.vehicleForm.carBelong,
            carType: this.vehicleForm.carType,
            isLeaderCar: this.vehicleForm.isLeaderCar,
            carCategory: this.vehicleForm.carCategory,
            driverName: this.vehicleForm.driverName,
            carColor: this.vehicleForm.carColor,
            brandModel: this.vehicleForm.brandModel,
            manufactureDate: this.vehicleForm.manufactureDate,
            obtainDate: this.vehicleForm.obtainDate,
            carValue: this.vehicleForm.carValue,
            carFrom: this.vehicleForm.carFrom,
            carDrivingDistance: this.vehicleForm.carDrivingDistance,
            drivingLicenseOwner: this.vehicleForm.drivingLicenseOwner,
            carOwnerAddress: this.vehicleForm.carOwnerAddress,
            carOwnerIndex: this.vehicleForm.carOwnerIndex,
            carMadeBy: this.vehicleForm.carMadeBy,
            manufactures: this.vehicleForm.manufactures,
            enbaleDate: this.vehicleForm.enbaleDate,
            engineModel: this.vehicleForm.engineModel,
            engineNumber: this.vehicleForm.engineNumber,
            cylinderCount: this.vehicleForm.cylinderCount,
            frameNumber: this.vehicleForm.frameNumber,
            displacement: this.vehicleForm.displacement,
            leastDistanceFromGround: this.vehicleForm.leastDistanceFromGround,
            boreMultiplyDistance: this.vehicleForm.boreMultiplyDistance,
            leastTurnRadius: this.vehicleForm.leastTurnRadius,
            compressionRatio: this.vehicleForm.compressionRatio,
            steerMachineModel: this.vehicleForm.steerMachineModel,
            axleCount: this.vehicleForm.axleCount,
            axleDistance: this.vehicleForm.axleDistance,
            tyreSize: this.vehicleForm.tyreSize,
            tyreCount: this.vehicleForm.tyreCount,
            mainBrakeType: this.vehicleForm.mainBrakeType,
            parkBrakeType: this.vehicleForm.parkBrakeType,
            oilConsumption: this.vehicleForm.oilConsumption,
            tankCapacity: this.vehicleForm.tankCapacity,
            approvedPassengerCapacity: this.vehicleForm.approvedPassengerCapacity,
            approvedLoad: this.vehicleForm.approvedLoad,
            totalMass: this.vehicleForm.totalMass,
            carLength: this.vehicleForm.carLength,
            carWidth: this.vehicleForm.carWidth,
            carHeight: this.vehicleForm.carHeight,
            coolingForm: this.vehicleForm.coolingForm,
            coolingCapacity: this.vehicleForm.coolingCapacity,
            frontWheelBase: this.vehicleForm.frontWheelBase,
            middleBackWheelBase: this.vehicleForm.middleBackWheelBase
          }
        })
        .then(response => {
          console.log(response)
        })
        .catch(err => console.log(err))
    },
    onClear () {
      // this.vehicleForm = {}
    }
  },
  mounted () {
    // 与服务器通信，获取车辆种类
    this.axios
      .get('/getAllCarType')
      .then(response => {
        console.log(response)
        this.vehicleCategoryList = response.data
      })
      .catch(err => console.log(err))
  }
}
</script>

<style>
  .list {
    margin: 30px auto;
  }
  .el-select{
    width: 100%;
  }
</style>
