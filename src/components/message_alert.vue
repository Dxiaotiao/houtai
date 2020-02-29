<template>
  <div class="bigBox">
    <div class="contentBox">
      <div class="boxTop">
        <div class="bf">
          <p class="title">消息中心</p>
        </div>
        <p @click="go" class="back">返回</p>
      </div>
      <div class="dataBox" v-for="item in messageList" @click="goin">
        <div class="LBox">
          <div class="new">
            <div class="SLeft">
              <span class="sl">新增马尔代夫五日游路线开放通知（一）</span>
              <div class="sr">
                 <span class="ziti">来自华泰顺彩集团</span>
              </div>

            </div>
            <div class="time">2019-10-22 02:58:40</div>
          </div>
          <div class="detailed">华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华通五条新路线华泰顺彩开通五条新路线华泰顺顺泰顺彩开通五条新路线华泰顺彩开通五条新路线华泰顺彩开通五条新路线华华泰......</div>
        </div>
        <div class="RBox">
          <div></div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        messageList:{
          1:{

          },
          2:{

          },
          3:{

          },
          4:{

          },
          5:{

          },
          6:{

          },
          7:{

          },
//           8:{
//
//           },
        }

    }
  },
    methods:{
      go(){
         this.$router.go(-1);
      },
      goin(){
        this.$router.push("/messageContent")
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
  .bigBox{
    flex: 1;
    height: 742px;
    box-sizing: border-box;
    padding: 50px 100px 0 100px;
    /* background-color: orange; */
  }
  .contentBox{
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 0px 0px 16px 0px
      rgba(8, 0, 157, 0.06);
    border-radius: 10px;
    padding: 20px 30px 35px 30px;
  }
  .boxTop{
    height: 45px;
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
  }
  .bf{
    flex: 1;
    /* background-color: pink; */
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-bottom:1px solid  #e3e5ec;
  }
  .title{
    font-size: 22px;
    font-weight: normal;
    color: #2d2f3a;
    margin-left: 20px;
    letter-spacing: 0.6px;
    /* background-color: red; */
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
    margin-top: 10px;
    margin-right:20px;
  }
  .gang{
    /* width: 1457px; */
    height: 4px;
    border: solid 1px #e3e5ec;
  }
  .dataBox{
    height: 74px;
    /* background-color: orange; */
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 20px 0px
      rgba(6, 30, 54, 0.01);
    border-radius: 10px;
    margin-top: 2px;
    cursor: pointer;
  }
  .dataBox:hover{
    background-color: #f2f3f7;
  }
 /* .dataBox:hover .RBox>div{
    display: block;
  } */
  .RBox{
    width: 8px;
    height: 100%;
    /* background-color: yellow; */
    margin-right: 10px;
  }
  .RBox div{
    width: 8px;
    height: 8px;
    background-color: #ff4848;
    border-radius: 10px;
    margin-top: 10px;
    /* display: none; */
  }
  .LBox{
    flex: 1;
    /* background-color: pink; */
    box-sizing: border-box;
    padding: 0 21px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .new{
    display: flex;
    justify-content: space-between;
  }
  .detailed{
    font-size: 12px;
    font-weight: normal;
    color: #626771;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-top: 9px;
  }
  .time{
    font-size: 12px;
    font-weight: normal;
    color: #626771;
  }
  .sl{
    font-size: 14px;
    font-weight: normal;
    color: #2d2f3a;
  }
  .sr{
    width: 108px;
    height: 18px;
    background-color: rgba(76, 204, 187, 0.2);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }
  .ziti{
    font-size: 12px;
    font-weight: normal;
    color: #28c6b1;
  }
  .SLeft{
    display: flex;
  }
</style>
