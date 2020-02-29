<template>
  <div class="bigbox">
    <div class="content">
      <div class="title">
        <div class="left">
          <span>新增马尔代夫五日游路线开放通知（一）</span>
          <span>来自华泰顺彩集团</span>
          <span>2019-10-22 02:58:40</span>
        </div>
        <div class="back" @click="go">返回</div>
      </div>
      <div class="all">
         华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五
          华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五
           华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五
            华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五
             华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五

              华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五
               华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五
                华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {


    }
  },
    methods:{
      go(){
         this.$router.go(-1);
      }

      }
    }
</script>

<style scoped="scoped">
  body,html,p,span{
    margin: 0;
    padding: 0;
  }
  p,span{
    display: inline-block;
  }
  .bigbox{
    width: 100%;
    height: 100%;
    flex: 1;
    /* background-color: pink; */
    box-sizing: border-box;
    padding: 50px 100px 0 100px;
  }
  .content{
    height:742px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px
      rgba(6, 30, 54, 0.01);
    border-radius: 10px;
    flex: 1;
    box-sizing: border-box;
    padding: 28px 50px 0 30px;
    display: flex;
    flex-direction: column;
  }
  .title{
    /* width: 100%; */
    height: 35px;
   /* flex: 1; */
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .back{
    width: 64px;
    height: 34px;
    background-color: #4cccbb;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    line-height: 34px;
    cursor: pointer;
  }
  .left{
    height: 35px;
    flex: 1;
    /* background-color: pink; */
    border-bottom: 1px solid #e3e5ec;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0 0 20px;
  }
  .left span:nth-child(1){
    font-size: 14px;
    font-weight: normal;
    color: #2d2f3a;
    margin-right: 20px;
  }
  .left span:nth-child(2){
    font-size: 12px;
    font-weight: normal;
    color: #28c6b1;
    margin-right: 20px;
  }
  .left span:nth-child(3){
    font-size: 12px;
    font-weight: normal;
    color: #626771;
  }
  .all{
    text-indent: 2em;
    width:100%;
    max-height:500px;
 /*   background-color: pink; */
    box-sizing: border-box;
    padding: 0 0 0 20px;
    font-size: 12px;
    font-weight: normal;
    color: #626771;
    margin-top: 26px;
   /* 文本省略 */
    /* overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical; */
  }
</style>
