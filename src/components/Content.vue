<template>
  <div>
    <div class="contentbox">
      <div class="box_left">
        <div class="box_home" @click="show_home">
          <span>
             <img src="../../static/images/home.png" />
          </span>
          首页
        </div>
        <div  class="box_live" @click="showFn('ju')">
          <span>
          <img src="../../static/images/live.png" />
          </span>
          快乐居
        </div>
        <div class="box_travel"  @click="showFn('you')">
          <span>
          <img src="../../static/images/travel.png" />
          </span>
          旅游
        </div>
        <div class="box_shopMall"  @click="showFn('you')">
          <span>
          <img src="../../static/images/shopMall.png" />
          </span>
          商城
        </div>
        <div class="box_bus" @click="showFn('bus')">
          <span>
          <img src="../../static/images/bus.png" />
          </span>
          公共
        </div>
      </div>
      <div class="right_live"  v-if="show">
        <div @click="one(order.path,order.id)" v-for="order in this.dataShow" :class="{black:order.id == showid}">
          <span class="span_box">
            <img :src="order.pic_white" v-if="order.id == showid"/>
            <img :src="order.pic_black" v-else/>
            {{order.content}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
   export default {
    name: 'Content',
    data () {
      return {
        // show:false,
        datanow:[{
          ju:{
            1:{
              pic_black:'static/images/Distributor_black.png',
              pic_white:'static/images/Distributor_white.png',
              content:'经销商',
              path:'/Distributor',
              id:'1'
            },
             2:{
              pic_black:'static/images/Customer_black.png',
              pic_white:'static/images/Customer_white.png',
              content:'客户',
              path:'/Customer',
              id:'2'
            },
             3:{
              pic_black:'static/images/base_black.png',
              pic_white:'static/images/base_white.png',
              content:'基地',
              path:'/Base',
              id:'3'
            },
             4:{
              pic_black:'static/images/active_black.png',
              pic_white:'static/images/active_white.png',
              content:'活动',
              path:'/Active',
              id:'4'
            },
             5:{
              pic_black:'static/images/travelCard_black.png',
              pic_white:'static/images/travrlCard_white.png',
              content:'旅居卡',
              path:'/TravelHotel',
              id:'5'
            },
             6:{
              pic_black:'static/images/notice_black.png',
              pic_white:'static/images/notice_white.png',
              content:'通知',
              path:'/Notice',
              id:'6'
            }
          },
          you:{
            1:{
              pic_black:'static/images/Member_black.png',
              pic_white:'static/images/Member_white.png',
              content:'会员管理',
              path:'/Member',
              id:'7'
            },
             2:{
              pic_black:'static/images/Registration_black.png',
              pic_white:'static/images/Registration_white.png',
              content:'报名管理',
              path:'/Sign',
              id:'8'
            },
             3:{
              pic_black:'static/images/Route_black.png',
              pic_white:'static/images/Route_white.png',
              content:'路线管理',
              path:'/Route',
              id:'9'
            },
             4:{
              pic_black:'static/images/Tourism_black.png',
              pic_white:'static/images/Tourism_white.png',
              content:'旅游卡管理',
              path:'/Tourism',
              id:'10'
            },
             5:{
              pic_black:'static/images/Sales_black.png',
              pic_white:'static/images/Sales_white.png',
              content:'销售管理',
              path:'/Sale',
              id:'11'
            },
             6:{
              pic_black:'static/images/Opinion_black.png',
              pic_white:'static/images/Opinion_white.png',
              content:'用户意见',
              path:'/Opinion',
              id:'12'
            }
          },
          bus:{
            1:{
              pic_black:'static/images/banner_black.png',
              pic_white:'static/images/banner_white.png',
              content:'banner',
              path:'/Banner',
              id:'13'
            },
             2:{
              pic_black:'static/images/note_black.png',
              pic_white:'static/images/note_white.png',
              content:'短信管理',
              path:'/Note',
              id:'14'
            },
             3:{
              pic_black:'static/images/administrator_black.png',
              pic_white:'static/images/administrator_white.png',
              content:'管理员管理',
              path:'/Administrator',
              id:'15'
            },
             4:{
              pic_black:'static/images/modular_black.png',
              pic_white:'static/images/modular_white.png',
              content:'模块管理',
              path:'/Modular',
              id:'16'
            },
             5:{
              pic_black:'static/images/role_black.png',
              pic_white:'static/images/role_white.png',
              content:'角色管理',
              path:'/Role',
              id:'17'
            },
          },
        }],
        dataShow:{},
        oldName:'',
        showid:'',
        showName:'',
      }
    },
    created(){
      this.showName = this.$state.name;
      console.log(this.showName)
    },
    methods: {
       showFn(name){
         // this.show = !this.show;
         if(name == this.oldName){
            // this.show = false;
            this.$state.name = 1;
            this.oldName = "";
            return false;
         }
         if(name){
           // this.show = true;
           this.$state.name = 2;
           this.dataShow = this.datanow[0][name];
           this.oldName = name;
         }else{
           // this.show = false;
           this.$state.name = 1;
         }

       },
       show_home(){
          this.$router.push("/Home");
          this.$state.name = 1;
       },
       one(path,id){
         this.showid = id;
         this.$router.push(path);
       },
      },
      computed:{
        show(){
          if(this.$state.name == 1){
            return false;
          }else{
            return true;
          }
        }
      }
    }
</script>

<style scoped="scoped">
  html,body{width: 100%;}
  p{
    padding: 0;
  }
  .contentbox{
    /* width: 1920px; */
    height: 1000px;
    /* background-color: #2d2f3a; */
    display: flex;
    justify-content: flex-start;
    /* background-color: darkgray; */
  }
  .box_left{
    width:100px;
    height: 1000px;
    background-color: #2d2f3a;
    display: flex;
    align-items: center;
    flex-flow: column;
  }
  .box_home,.box_live,.box_travel,.box_bus,.box_shopMall{
    width: 100px;
    height: 100px;
    margin: 20px 0;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    color: #ffffff;
  }
  .box_home span{
    display: inline-block;
    width:40px;
    height:40px;
    background-color: #262832;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box_home>span>img{
    width: 40px;
    height: 40px;
  }
  .box_live span{4
    display: inline-block;
    width:40px;
    height:40px;
    background-color: #262832;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box_live>span>img{
    width: 40px;
    height: 40px;
  }
  .box_travel span{
    display: inline-block;
    width:40px;
    height:40px;
    background-color: #262832;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box_travel>span>img{
    width: 40px;
    height: 40px;
  }
  .box_shopMall span{
    display: inline-block;
    width:40px;
    height:40px;
    background-color: #262832;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box_shopMall>span>img{
    width: 40px;
    height: 40px;
  }
  .box_bus span{
    display: inline-block;
    width:40px;
    height:40px;
    background-color: #262832;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box_bus>span>img{
    width: 40px;
    height: 40px;
  }
  .right_live{
    width: 156px;
    height: 1000px;
    /* background-color: pink; */
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

  .right_live div{
    width: 136px;
    height: 40px;
    /* background-color: #00FF00; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
    margin: 20px 0;
    border-radius: 20px 0px 0px 20px;
    cursor: pointer;
    margin-top: 50px;
  }
  .right_live div.black{
    background: #333333;
    color: white;
  }
  .right_live div.black:hover{
    background: #333333;
  }
  /* .right_live div:nth-child(1){
    background-color: #262832;;
  } */
  .right_live div:hover{
    background-color: #e9e9ea;
  }
  .span_box{
    display: inline-block;
    display: flex;
    width:110px;
    height: 40px;
    align-items: center;
    font-size: 14px;
  }
</style>
