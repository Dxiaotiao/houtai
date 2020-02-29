.
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
      <div class="boxF" v-for="item in tourismList">
        <div class="tou_L">
          <img :src="item.srcO" />
        </div>
        <div class="flex">
          <div class="qing"><img :src="item.url" /></div>
          <div class="banBox">
            <div><p class="gai">修改</p></div>
            <div><span class="spLe">ID号：</span><span class="spRi">{{item.id}}</span> </div>
            <div><span class="spLe">跳转地址：</span><span class="spRi">{{item.tiao}}</span> </div>
            <div><span class="spLe">是否展示：</span><span class="spRi">{{item.show}}</span> </div>
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
       tourismList:{
         1:{
             srcO:'static/images/unchange.png',
             url:'static/images/qingmai.png',
             id:"036",
             tiao:"家捡成厨",
             show:"是",
         },
         2:{
             srcO:'static/images/unchange.png',
             url:'static/images/qingmai.png',
             id:"036",
             tiao:"家捡成厨",
             show:"是",
        },
         3:{
             srcO:'static/images/unchange.png',
             url:'static/images/qingmai.png',
             id:"036",
             tiao:"家捡成厨",
             show:"是",
         },
         4:{
             srcO:'static/images/unchange.png',
             url:'static/images/qingmai.png',
             id:"036",
             tiao:"家捡成厨",
             show:"否",
         },
         5:{
             srcO:'static/images/unchange.png',
             url:'static/images/qingmai.png',
             id:"036",
             tiao:"家捡成厨",
             show:"否",
         },
         6:{
             srcO:'static/images/unchange.png',
             url:'static/images/qingmai.png',
             id:"036",
             tiao:"家捡成厨",
             show:"是",
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
    width: 488px;
    height: 260px;
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
  .tou_L{
    width:20px;
    height:100%;
    /* background-color: red; */
    margin-left: 10px;
  }
  .tou_L img{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: 10px;
    cursor: pointer;
  }
  .qing{
    width: 240px;
    height: 180px;
    /* background-color: #554def; */
    border-radius: 10px;
    margin-left: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
  .qing img{
    width:100%;
    height:100%;
  }
  .flex{
    flex:1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: orange; */
  /*  box-sizing:border-box;
    padding: 0 0 0 10px; */
  }
  .banBox{
    flex: 1;
    height:180px;
    /* background-color:pink; */
   /* margin-right:40px; */
    box-sizing:border-box;
    padding: 0 40px 0 20px;
  }
  .banBox div:nth-child(1){
    display: flex;
    justify-content: flex-end;
  }
  .banBox div{
    margin-bottom: 20px;
  }
  .spLe{
    font-size: 14px;
	  font-weight: normal;
    color: #626771;
    width: 72px;
  }
  .spRi{
    font-size: 16px;
	  font-weight: bold;
    color: #2d2f3a;
  }
  .gai{
    width: 65px;
    height: 34px;
    background-color: #e8e7ff;
    border-radius: 10px;
    font-size: 16px;
	  font-weight: bold;
    color: #8c86ff;
    text-align: center;
    line-height: 34px;
    cursor: pointer;
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
