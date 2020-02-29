<template>
  <div class="Big_box">
    <div class="mem_T">
      <div class="sou">
        <span class="souNo">
          <img src="static/images/sousuo.png" />
        </span>
        <span>开始日：<input type="text"/> </span>
        <span>截止日：<input type="text"/> </span>
        <span>手机号：<input type="text"/> </span>
        <div class="com-sel">
            <span>类型：</span>
            <select class="com-opt">
        		<option value="">请选择</option>
        		<option value="">包吃住</option>
        		<option value="">包吃</option>
        		<option value="">包住</option>
        	</select>
        </div>
      </div>
      <div>
        <span class="shan">删除</span>
        <span class="tian">添加</span>
      </div>
    </div>
    <div class="mem_F">
      <div class="boxF" v-for="item in routeList">
        <div class="boxF_o"><img :src="item.srcO" /></div>
        <div class="boxF_t">
          <img :src="item.url" />
          <div class="man">已满图</div>
        </div>
        <div class="flex">
          <div class="boxF_th">
            <div><span class="newL">ID号：</span><span class="newR">{{item.id}}</span> </div>
            <div><span class="newL">标题：</span><span class="newR">{{item.title}}</span></div>
            <div><span class="newL">简称：</span><span class="newR">{{item.abbrevia}}</span></div>
            <div><span class="newL">路线：</span><span class="newR">{{item.route}}</span></div>
            <div><span class="newL">出发日期：</span><span class="newR">{{item.goTime}}</span></div>
          </div>
          <div class="boxF_f">
            <p class="xiugai">修改</p>
            <div class="boxPrice">
              <p class="boxP">
                <span>会员价：</span>
                <span>{{item.memPrice}}</span>
              </p>
              <p class="boxPr">
                <span>价钱：</span>
                <span>{{item.price}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="page_box">
        <div class="yeshu"  v-for="(item,index) in pageList" :key = "index"  @click="onclick(item,index)" :class="{box_page:index == showid}"  >
          {{item}}
        </div>
        <p class="next_page">下一页</p>
        <p class="dao">
          <span>共9页</span>
          <span>到第</span>
          <input type="text" />
          <span>页</span>
        </p>
        <p class="Sure">确定</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
   data() {
     return {
       // options: [{
       //   value: '选项1',
       //   label: '黄金糕'
       // }, {
       //   value: '选项2',
       //   label: '双皮奶'
       // }, {
       //   value: '选项3',
       //   label: '蚵仔煎'
       // }, {
       //   value: '选项4',
       //   label: '龙须面'
       // }, {
       //   value: '选项5',
       //   label: '北京烤鸭'
       // }],
       // value: '',
       // currentPage1: 5,
       // currentPage2: 5,
       // currentPage3: 5,
       // currentPage4: 4,
       pageList:["1","2",3,4,5,6,7,8,9],
       showid:"",
       routeList:{
         1:{
             srcO:'static/images/unchange.png',
             url:'static/images/pg.png',
             id:"036",
             title:"晋善晋美",
             abbrevia:"山西",
             route:"山西全景双汽纯玩7日游",
             goTime:"2019年7月--8月末",
             memPrice:"3280元",
             price:"3280元"
         },
         2:{
             srcO:'static/images/unchange.png',
             url:'static/images/pg.png',
             id:"036",
             title:"晋善晋美",
             abbrevia:"山西",
             route:"山西全景双汽纯玩7日游",
             goTime:"2019年7月--8月末",
             memPrice:"3280元",
             price:"3280元"
        },
         3:{
             srcO:'static/images/unchange.png',
             url:'static/images/pg.png',
             id:"036",
             title:"晋善晋美",
             abbrevia:"山西",
             route:"山西全景双汽纯玩7日游",
             goTime:"2019年7月--8月末",
             memPrice:"3280元",
             price:"3280元"
         },
         4:{
             srcO:'static/images/unchange.png',
             url:'static/images/pg.png',
             id:"036",
             title:"晋善晋美",
             abbrevia:"山西",
             route:"山西全景双汽纯玩7日游",
             goTime:"2019年7月--8月末",
             memPrice:"3280元",
             price:"3280元"
         },
         5:{
             srcO:'static/images/unchange.png',
             url:'static/images/pg.png',
             id:"036",
             title:"晋善晋美",
             abbrevia:"山西",
             route:"山西全景双汽纯玩7日游",
             goTime:"2019年7月--8月末",
             memPrice:"3280元",
             price:"3280元"
         },
         6:{
             srcO:'static/images/unchange.png',
             url:'static/images/pg.png',
             id:"036",
             title:"晋善晋美",
             abbrevia:"山西",
             route:"山西全景双汽纯玩7日游",
             goTime:"2019年7月--8月末",
             memPrice:"3280元",
             price:"3280元"
         },
         6:{
             srcO:'static/images/unchange.png',
             url:'static/images/pg.png',
             id:"036",
             title:"晋善晋美",
             abbrevia:"山西",
             route:"山西全景双汽纯玩7日游",
             goTime:"2019年7月--8月末",
             memPrice:"3280元",
             price:"3280元"
         },
       },
     }
   },
     methods:{
         // handleSizeChange(val) {
         //   console.log(`每页 ${val} 条`);
         //  },
         // handleCurrentChange(val) {
         //   console.log(`当前页: ${val}`);
         //  },
        onclick(item,id){
          this.showid = id;
          console.log(this.showid)
        }
       }
     }
</script>

<style scoped="scoped">
  p,span{
    margin: 0;
    padding: 0;
    display: inline-block;
  }
  .Big_box{
    flex: 1;
    height: 900px;
    /* background-color: pink; */
    box-sizing:border-box;
    padding: 16px 100px 0 50px;
  }
  .mem_T{
    height: 38px;
    /* background-color: green; */
    display: flex;
    justify-content: space-between;
  }
  .souNo{
    display: inline-block;
    width: 38px;
    height: 38px;
    background-color: #4cccbb;
    border-radius: 10px;
    cursor:pointer;
  }
  .souNo img{
    width: 100%;
    height: 100%;
  }
  .sou{
    display:flex;
    align-items: center;
    font-size: 12px;
    font-weight: normal;
  }
  .sou span{
    color: #8c86ff;
    margin-right: 10px;
  }
  .sou input{
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
    font-size: 12px;
    font-weight: normal;
    color: #8c86ff;
  }
  .com-sel {
     /* line-height: 5rem; */
     cursor: pointer;        /*鼠标上移变成小手*/
  }
  .com-sel span{
    margin: 0;
  }
  .com-opt {
    display: inline-block;
    width: 140px;
    height: 32px;
    background-color: #ffffff;
    border-radius: 10px;
    border: none;
    outline: none;
    color: #8c86ff;
    /*去掉默认的下拉三角*/
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    padding: 0 10px;
    box-sizing:border-box;
    /*添加下拉三角图标*/
    background: url("/static/images/sel.png") no-repeat 110px center white;
  }
  .shan{
    width: 72px;
    height: 38px;
    background-color: #d5d5d7;
    border-radius: 10px;
    font-size: 16px;
    color: #ffffff;
    cursor:pointer;
    text-align:center;
    line-height:38px;
    margin-right:20px;
  }
  .tian{
    width: 72px;
    height: 38px;
    background-color: #4cccbb;
    border-radius: 10px;
    font-size: 16px;
    color: #ffffff;
    cursor:pointer;
    text-align:center;
    line-height:38px;
  }
  .mem_F{
    height: 725px;
    /* background-color: gray; */
    /* box-shadow: 0px 0px 20px 0px
      rgba(6, 30, 54, 0.01);
    border-radius: 20px; */
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .boxF{
    width: 738px;
    height: 200px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px
      rgba(6, 30, 54, 0.01);
    border-radius: 20px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin-bottom: 20px;
  }
  .boxF:hover{
    box-shadow: 0px 0px 20px 0px rgba(32, 95, 255, 0.16);
  }
  .boxF_o{
    width: 20px;
    height: 100%;
    /* background-color: red; */
    margin-left: 10px;
  }
  .boxF_o img{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #e9e9ea;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
  }
  .boxF_t{
    position: relative;
    width: 169px;
	  height: 169px;
    /* background-color: pink; */
    border-radius: 10px;
    margin-left: 9px;
    overflow: hidden;
  }
  .boxF_t img{
    width: 100%;
    height: 100%;
  }
  .man{
    position: absolute;
    width: 100%;
    height: 31px;
    background-color: #000000;
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 0;
    /* border-radius: 0 0 10px 10px; */
    text-align: center;
    line-height: 31px;
    font-size: 16px;
	  font-weight: bold;
    color: #fefeff;
  }
  .flex{
    flex:1;
    display: flex;
    justify-content: space-between;
    /* padding-right: 30px; */
    /* background-color: orange; */
  }
  .boxF_th{
    /* width: 45.5%; */
    height: 153px;
    /* background-color: pink; */
    margin-left: 29px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .boxF_th .newL{
    width: 70px;
    /* height: 15px; */
    /* background-color: blue; */
    font-size: 14px;
	  font-weight: normal;
    color: #626771;
  }
  .boxF_th .newR{
    font-size: 16px;
	  font-weight: bold;
    color: #2d2f3a;
  }
  .boxF_f{
    /* width: 140px; */
    height: 153px;
    /* background-color: #00FFFF; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: 45px;
  }
  .boxF_f .xiugai{
    width: 65px;
    height: 34px;
    background-color: #e8e7ff;
    border-radius: 10px;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
	  font-weight: bold;
    color: #8c86ff;
    cursor: pointer;
  }
  .boxF_f .boxPrice{
    display: flex;
    flex-direction: column;
  }
  .boxPrice .boxP{
    margin-bottom: 14px;
  }
  .boxPrice .boxP span:nth-child(1){
    width: 56px;
    font-size: 14px;
    font-weight: normal;
    color: #626771;
  }
  .boxPrice .boxP span:nth-child(2){
    font-size: 16px;
    font-weight: bold;
    color: #4cccbb;
  }
  .boxPrice .boxPr span:nth-child(1){
    width: 56px;
    font-size: 14px;
    font-weight: normal;
    color: #626771;
  }
  .boxPrice .boxPr span:nth-child(2){
    font-size: 16px;
    font-weight: bold;
    color: #2d2f3a;
  }
  .page{
    height: 38px;
    /* background-color: gray; */
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .page_box{
    width: 57%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
  }
  .page_box .yeshu{
    width: 40px;
    height: 38px;
    background-color: #ffffff;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #4cccbb;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    margin-right: 10px;
  }
  .page_box p{
    display: inline-block;
  }
  .next_page{
    display: inline-block;
    width: 88px;
    height: 38px;
    background-color: #4cccbb;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    margin-right: 20px;
  }
  .Sure{
    width: 64px;
    height: 38px;
    background-color: #4cccbb;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    margin-left: 10px;
  }
  .dao{
    display: inline-block;
    display: flex;
  }
  .dao input{
    -web-kit-appearance:none;
    -moz-appearance: none;
    width: 40px;
    height: 38px;
    background-color: #ffffff;
    border-radius: 10px;
    outline:0;
    border: 0;
    padding: 0 15px;
    box-sizing:border-box;
    font-size: 16px;
	  font-weight: bold;
    color: #4cccbb;
  }
  .dao span{
    display: inline-block;
    font-size: 16px;
	  font-weight: bold;
    color: #626771;
    margin: 0 10px;
  }
  .page_box .box_page {
    background-color: #4cccbb;
    color: #ffffff;
  }
 /* p{
    display:inline-block;
    width:100px;
    height:50px;
    background-color:orange;
    border-radius:10px;
    box-shadow:0 0 0 10px;
    display:flex;
  } */
</style>
