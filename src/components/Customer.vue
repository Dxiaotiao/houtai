<template>
  <div class="Big_box">
    <div class="mem_T">
      <div class="sou">
        <span class="souNo">
          <img src="static/images/sousuo.png" />
        </span>
        <span>用户名：<input type="text"/> </span>
        <span>用户ID：<input type="text"/> </span>
       <!-- <span>手机号：<input type="text"/> </span>
        <div class="com-sel">
            <span>类型：</span>
            <select class="com-opt">
        		<option value="">请选择</option>
        		<option value="">包吃住</option>
        		<option value="">包吃</option>
        		<option value="">包住</option>
        	</select>
        </div> -->
      </div>
      <div>
        <span class="shan">删除</span>
        <span class="tian">添加</span>
      </div>
    </div>
    <div class="mem_F">
      <div class="mem_c">
        <div class="b_t">
          <p></p>
          <span class="one">ID</span>
          <span>用户名</span>
          <span>手机号</span>
          <span>年龄</span>
          <span>性别</span>
          <span>身份证号</span>
          <span>住址</span>
          <span>所属销售</span>
          <span>加入时间</span>
          <p></p>
        </div>
        <div class="b_t" v-for="item in curstomList">
          <p><img :src="item.urlPG" class="pgchange" /></p>
          <span class="one">{{item.me}}</span>
          <span>{{item.ni}}</span>
          <span>{{item.me1}}</span>
          <span>{{item.ni1}}</span>
          <span>{{item.me2}}</span>
          <span>{{item.ni2}}</span>
          <span>{{item.me3}}</span>
          <span>{{item.ni3}}</span>
          <span>{{item.me4}}</span>
          <p class="ziti">修改</p>
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
       curstomList:{
         1:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         2:{
             urlPG:'static/images/unchange.png',
            me:"036",
            ni:"张小波",
            me1:"17339191057",
            ni1:"18",
            me2:"男",
            ni2:"110349196408120364",
            me3:"北京市海淀区青龙桥街道大有庄......",
            ni3:"某某某",
            me4:"2019-07-15 02:51:23",
        },
         3:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         4:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         5:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         6:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         7:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         8:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         9:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         10:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         11:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         12:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         13:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
         14:{
             urlPG:'static/images/unchange.png',
             me:"036",
             ni:"张小波",
             me1:"17339191057",
             ni1:"18",
             me2:"男",
             ni2:"110349196408120364",
             me3:"北京市海淀区青龙桥街道大有庄......",
             ni3:"某某某",
             me4:"2019-07-15 02:51:23",
         },
       }
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
    align-items: center;
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
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px
      rgba(6, 30, 54, 0.01);
    border-radius: 20px;
    margin-top: 16px;
    display: flex;
    justify-content: center;
  }
  .mem_F .b_t:last-child{
    border-bottom: none;
  }
  .mem_c{
    width:95%;
    height:95%;
    /* background-color: red; */
    margin-top: 20px;
  }
  .mem_c div:nth-child(1){
    background-color: #f2f3f7;
    border-radius: 10px;
    border: none;
  }
  .mem_c div:nth-child(1) span{
    display: inline-block;
  /*  width: 9%; */
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    font-size: 14px;
    color: #2d2f3a;
  }
  .mem_c div span{
    /* font-weight: normal; */
    display: inline-block;
    /* width: 9%; */
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    font-weight: normal;
    color: #626771;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .b_t{
    /* width:1200px ; */
    height: 45px;
    max-height: 80px;
    /* background-color: green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 10px 0 0 0; */
    border-bottom: 1px solid #d4d4d6;
  }
  .b_t p{
    display: inline-block;
    width: 4%;
    height: 40px;
    /* background-color: yellow; */
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    /* line-height: 40px; */
  }
  .b_t:hover{
	  background-color: #f2f3f7;
  }
  .b_t span:nth-of-type(1){
  	width: 80px;
  }
  .b_t span:nth-of-type(2){
  	width: 120px;
  }
  .b_t span:nth-of-type(3){
  	width: 120px;
  }
  .b_t span:nth-of-type(4){
  	width: 80px;
  }
  .b_t span:nth-of-type(5){
  	width: 80px;
  }
  .b_t span:nth-of-type(6){
  	width: 180px;
  }
  .b_t span:nth-of-type(7){
  	width: 240px;
  	text-overflow: -o-ellipsis-lastline;
  	overflow: hidden;
  	text-overflow: ellipsis;
  	white-space: nowrap;
  }
  .b_t span:nth-of-type(8){
  	min-width: 80px;
  }
  .b_t span:nth-of-type(9){
  	width: 180px;
  	text-overflow: -o-ellipsis-lastline;
  	overflow: hidden;
  	text-overflow: ellipsis;
  	white-space: nowrap;
  }
  .mem_c div:nth-child(1) .one{
    width: 80px;
    margin-left: -45px;
  }
  .b_t .one{
    width: 80px;
    display: inline-block;
    /* background-color: red; */
   margin-left: -45px;
  }
  .pgchange{
    display: inline-block;
    width: 20px;
    height: 20px;
    /* background: black; */
    cursor: pointer;
  }
  .pgchange img{
    width: 100%;
    height: 100%;
  }
  .ziti{
    font-size: 16px;
  	font-weight: bold;
    color: #8c86ff;
    cursor: pointer;
    font-stretch: normal;
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
</style>
