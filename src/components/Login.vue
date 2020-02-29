<template>
  <div class="container">
    <div class="middle">
      <div class="box_left">
        <img src="../../static/images/b.png"  class="bg"/>
        <div class="box_t">
          <img src="../../static/images/logo.png" />
        </div>
        <div class="box_m"></div>
        <div class="box_f">
         <p>CHENG  CHENG  KUAI  LE  JU</p>
         <p>城城快乐居</p>
         <p>后台管理系统</p>
        </div>

      </div>
      <div class="box_right">
        <div class="log_t">
          <h3>欢迎登录</h3>
          <p>请正确的输入您的城城快乐居后台管理系统个人账号和密码</p>
        </div>
        <div class="log_m">
         <el-input  placeholder="输入您的账号" v-model="input1"> <i slot="prefix" class="el-input__icon el-icon-s-custom"></i></el-input>
					<!-- <div class="log_username"><img src="../../static/images/head.png"/><input class="log_name" v-model="input1" placeholder="请输入您的账号"></input> </div> -->
          <el-input  placeholder="输入您的密码" v-model="input2" show-password> <i slot="prefix" class="el-input__icon el-icon-unlock"></i></el-input>
         <!-- <div class="flex">
         </div>
         <div class="flex">
         </div> -->
        </div>
        <div class="log_f">
          <p @click="login">
            登录
            <img src="../../static/images/Arrow.png" />
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',

    data () {
      return {
        input1:"",
        input2:"",
      }
    },
    methods:{
      login(){
        this.$router.push("/Home")
      }
    },
    //  created(){
    //   this.$router.show = false
    // },
  }
</script>

<style scoped="scoped">
  html,body,#app{
    height: 100%;
  }
  p,h3{margin: 0;padding: 0;}
  .container{
    width: 100%;
    height: 100%;
    background-color: #f2f3f7;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .middle{
    width: 1200px;
    height: 800px;
    background-color: #ffffff;
    box-shadow: 0px 40px 60px 0px
    rgba(0, 21, 56, 0.3);
    border-radius: 20px;
    display: flex;
  }
  .box_left{
    width: 600px;
    height: 800px;
   /* background-color: yellow; */
   position: relative;
  }
  .box_left .box_t{
    width: 172px;
    height: 100px;
   /* background-color: red; */
    margin-left: 343px;
    margin-top: 190px;
    position: absolute;
  }
  .box_left .box_m{
    width: 434px;
	  height: 2px;
	  border: solid 1px #ffffff;
    background-color: white;
    margin-top: 400px;
    margin-left: 82px;
    position: absolute;
  }
  .box_left .box_f{
    width: 320px;
    height: 150;
    margin-top: 490px;
    margin-left: 208px;
    position: absolute;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .box_left .box_f p:nth-child(1){
    font-size: 24px;
    font-weight: normal;
	  font-stretch: normal;
    color: #ffffff;
  }
  .box_left .box_f p:nth-child(2){
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    color: #ffffff;
  }
  .box_left .box_f p:nth-child(3){
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    color: #ffffff;
  }
  .box_left .bg{
    width: 100%;
    height: 100%;
    /* z-index: -100; */
    position: absolute;
  }
  .box_right{
    width: 600px;
    height: 800px;
   /* background-color: blue; */
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
  }
  .log_t{
    width: 304px;
    /* height: 80px; */
    /* background-color: red; */
  }
  .log_t h3{
    display: inline-block;
    width: 304px;
    height: 25px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #626771;
  }
  .log_t p{
    display: inline-block;
    width: 304px;
    height: 42px;
    font-size: 16px;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #989898;
  }
  .log_m{
    width: 300px;
   /* height: 120px; */
    /* background-color: orange; */
   margin: 88px 0 100px 0;
    display: flex;
    flex-direction: column;
  }
  .log_m .flex{
    width: 298px;
    height: 42px;
    background-color: #ffffff;
    border-radius: 21px;
    border: solid 1px #2d2f3a;
  }
  .log_m .flex:nth-child(2){
    margin-top: 30px;
  }
  .log_m input{
    -web-kit-appearance:none;
    -moz-appearance: none;
    width: 300px;
    height: 42px;
    background-color: #ffffff;
    border-radius: 21px;
    outline:0;
    border: 0;
    border: solid 1px #2d2f3a;
    padding: 0 20px;
    box-sizing:border-box;
  }

  .log_m .account{
    width: 300px;
    height: 42px;
    background-color: #ffffff;
    border-radius: 21px;
    border: solid 1px #2d2f3a;
  }
  .log_f{
    width: 304px;
    height: 60px;
   /* background-color: pink; */
  }
  .log_f p{
    display:inline-block;
    width: 150px;
    height: 42px;
    background-color: #554def;
    border-radius: 21px;
    cursor: pointer;
    color: #ffffff;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .log_f p img{
    width: 38px;
    height: 22px;
    margin-left: 15px;
  }

</style>
<style>
  .el-icon-s-custom{
    font-size:19px;
    margin-top:7px;
    margin-left:13px;
  }
  .log_m .el-input__inner{
    width: 300px;
    height: 42px;
    border-radius: 21px;
    border: solid 1px #2d2f3a;
    margin-top: 10px;
  }
  /* .el-input__inner .el-input__icon {
   margin: 19px 21px;
  } */

  .el-input--prefix .el-input__inner{
    padding-left: 58px;
    background-color: #FFFFFF;
  }
  /* .el-input__icon {
    margin-top: 7px;
    margin-left: 13px;
  } */
  .el-icon-unlock{
    font-size: 17px;
    margin: 6px 0 0 12px;
  }
  .el-input__suffix-inner{
    display: inline-block;
    margin-right: 15px;
    margin-top: 11px;
  }
</style>
