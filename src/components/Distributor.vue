<template>
  <div class="con">
    <div class="query">
      <div class="souL">
      <span class="chaxun">
        <img src="static/images/sousuo.png" />
      </span>
      <span>用户名：<input type="text"/> </span>
      <span>用户ID：<input type="text"/> </span>
      </div>
      <div class="souR">
      <span class="shan">删除</span>
      <span class="addD" @click="add" >添加</span>
      </div>
    </div>
    <ul class="box">
        <li v-for="item in distributorList">
          <div class="change_pg">
            <span>
              <img :src="item.changPG" />
            </span>
          </div>
          <div class="oneL">
          <p class="bgd"><img :src="item.url" /></p>
          <p class="change">修改</p>
          </div>
          <div class="twoB">
          <div class="idcard">
            <div><span class="spL">ID号：</span><span class="spR">{{item.id}}</span></div>
            <div><span class="spL">用户名：</span><span class="spR">{{item.user_Name}}</span></div>
            <div><span class="spL">联系方式：</span><span class="spR">{{item.contactIn}}</span></div>
            <div><span class="spL">加入时间：</span><span class="spR">{{item.jobTime}}</span></div>
          </div>
          <p class="bg_s"><img :src="item.urlQR" /></p>
          </div>
        </li>
    </ul>
    <!-- <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div> -->

  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        distributorList:{
          1:{
              changPG:'static/images/unchange.png',
              url:'static/images/logo-F.png',
              id:"036",
              user_Name:"家检成厨",
              contactIn:"18755241966 400-998-5617",
              jobTime:"2019-07-30 13:59:04",
              urlQR:'static/images/QR-code.png',
            },
          2:{
              changPG:'static/images/unchange.png',
              url:'static/images/logo-F.png',
              id:"036",
              user_Name:"家检成厨",
              contactIn:"18755241966 400-998-5617",
              jobTime:"2019-07-30 13:59:04",
              urlQR:'static/images/QR-code.png',
            },
          3:{
              changPG:'static/images/unchange.png',
              url:'static/images/logo-F.png',
              id:"036",
              user_Name:"家检成厨",
              contactIn:"18755241966 400-998-5617",
              jobTime:"2019-07-30 13:59:04",
              urlQR:'static/images/QR-code.png',
            },
          4:{
              changPG:'static/images/unchange.png',
              url:'static/images/logo-F.png',
              id:"036",
              user_Name:"家检成厨",
              contactIn:"18755241966 400-998-5617",
              jobTime:"2019-07-30 13:59:04",
              urlQR:'static/images/QR-code.png',
            },
          5:{
              changPG:'static/images/unchange.png',
              url:'static/images/logo-F.png',
              id:"036",
              user_Name:"家检成厨",
              contactIn:"18755241966 400-998-5617",
              jobTime:"2019-07-30 13:59:04",
              urlQR:'static/images/QR-code.png',
            },
          6:{
              changPG:'static/images/unchange.png',
              url:'static/images/logo-F.png',
              id:"036",
              user_Name:"家检成厨",
              contactIn:"18755241966 400-998-5617",
              jobTime:"2019-07-30 13:59:04",
              urlQR:'static/images/QR-code.png',
            },
        },
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
        // pageList:{
        //   name:'哈哈哈哈',
        //   2:'嘻嘻嘻嘻',
        //   3:'嘻嘻嘻嘻',
        //   4:'嘻嘻嘻嘻',
        //   5:'嘻嘻嘻嘻',
        //   6:'哈哈哈哈',
        // }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      add(){
        this.$router.push("/Distributor_alert")
      }
    }
  }
</script>

<style scoped="scoped">
 /* *{
    margin: 0;
    padding: 0;
  } */
  p,span{
    display:inline-block;
    padding: 0;
    margin: 0;
  }
  .con{
    flex: 1;
    box-sizing: border-box;
    padding: 16px 100px 0 50px;
    /* width: 1400px; */
    height: 900px;
    /* background-color: lightgray; */
    /* margin: 50px; */
  }
  .query{
    /* width: 1400px; */
    /* height: 50px; */
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .con_top{
   /* width: 1000px; */
   /* background-color: yellow;
    margin-left: 20px;
    display: flex;
    height: 800px;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap; */
  }
  .box{
    /* width: 1300px; */
    height: 800px;
    /* display: -webkit-flex; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
   align-content: flex-start;
    /* background: yellow; */
    margin: 0;
    padding: 0;
    margin-top:16px;
  }
  li{
    /* position: relative; */
 /*   display: flex; */
    margin: 0;
    padding: 0;
    list-style: none;
    width: 485px;
    height: 344px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px
      rgba(6, 30, 54, 0.01);
    border-radius: 20px;
    display: flex;
    /* justify-content: space-around; */
    flex-direction: column;
    /* align-items: center; */
    margin-bottom: 20px;
  }
  li:hover{
    box-shadow: 0px 0px 20px 0px rgba(32, 95, 255, 0.16);
  }
  .bgd{
    display: inline-block;
    width: 88px;
    height: 88px;
    border-radius: 44px;
    overflow: hidden;
   /* background-color: red; */
    /* margin-left: 20px; */
    overflow: hidden;
  }
  .bgd img{
    width: 100%;
    height: 100%;
  }
  .idcard{
    /* position: absolute; */
    display: inline-block;
   /* width: 215px; */
    height: 164px;
    /* background-color: red; */
    display: flex;
    flex-direction:column;
    justify-content:space-between;
  }
  .idcard div{
    display:flex;
  }
  .spL{
    width:70px;
    font-size: 14px;
    font-weight: normal;
    color: #626771;
  }
  .spR{
    width:120px;
    font-size: 16px;
    font-weight: bold;
    color: #2d2f3a;
  }
  .bg_s{
    /* position: absolute; */
    display: inline-block;
    width: 160px;
    height: 160px;
    /* margin: 130px 0 0 220px; */
    border: 2px solid #e9e9ea;
    border-radius: 10px;
  }
  .bg_s img{
    width: 100%;
    height: 100%;
    /* background-color: red; */
  }
  .change{
    display: inline-block;
    width: 65px;
    height: 34px;
    background-color: #e8e7ff;
    border-radius: 10px;
    text-align: center;
    line-height: 34px;
    cursor: pointer;
    color: #8c86ff;
    font-size: 16px;
    font-weight: bold;
  }
  .page{
    width: 600px;
    height: 40px;
    /* background-color: green; */
    margin-left: 30%;
    margin-top: 5px;
  }
  .chaxun{
    display: inline-block;
    width: 38px;
    height: 38px;
    background-color: #4cccbb;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
    }
  .chaxun img{
    width: 100%;
    height: 100%;
  }
  .shan{
    display: inline-block;
    width: 72px;
    height: 38px;
    background-color: #d5d5d7;
    border-radius: 10px;
    color: white;
    text-align: center;
    line-height: 38px;
    /* margin-left: 650px; */
    cursor: pointer;
    margin-right: 20px;
    font-size:16px;
    }
  .addD{
    display: inline-block;
    width: 72px;
    height: 38px;
    background-color: #4cccbb;
    border-radius: 10px;
    color: white;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    font-size:16px;
  }
  .souL{
    /* background: pink; */
    display: flex;
    align-items: center;

  }
  .souL span{
    color: #8c86ff;
    font-size: 12px;
    font-weight: normal;
  }
  .souL span:nth-child(3){
    margin-left: 10px;
  }
  .souL input{
    -web-kit-appearance:none;
    -moz-appearance: none;
    width: 140px;
    height: 32px;
    background-color: #ffffff;
    border-radius: 10px;
    outline:0;
    border: 0;
    padding: 0 10px;
    box-sizing:border-box;
  }
  .souR{
   /* background: red; */
  }
  .oneL{
    width: 100%;
    height: 90px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    box-sizing: border-box;
    margin-top: 6px;
  }
  .twoB{
    width: 100%;
    display: flex;
    /* background-color: pink; */
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    box-sizing: border-box;
    margin-top: 19px;
  }

  .change_pg{
    width: 100%;
    height: 20px;
    /* background-color: green; */
    margin-top: 10px;
  }
  .change_pg span{
    display: inline-block;
    width: 20px;
    height: 20px;
    /* background-color: red; */
    margin-left: 10px;
  }
  .change_pg span img{
    width: 100%;
    height: 100%;
  }
</style>
