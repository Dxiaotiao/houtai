<template>
  <div class="base_box">
    <div class="serch_base">
      <div class="shuru">
        <span class="sou">
          <img src="static/images/sousuo.png" />
        </span>
        <span>开始日：<input type="text"/> </span>
        <span>截止日：<input type="text"/> </span>
        <span>手机号：<input type="text"/> </span>
        <div class="com-sel">
          <span> 类型：</span>
          <select class="com-opt">
            <option value="">食宿</option>
            <option value="">包吃住</option>
            <option value="">包吃</option>
            <option value="">包住</option>
          </select>
        </div>

      </div>
      <div>
      <span class="delete">删除</span>
      <span class="Add">添加</span>
      </div>
    </div>
    <div class="base_data">
      <div class="base_for" v-for="item in baseList">
        <div class="tu">
          <img :src="item.Bg" />
        </div>
        <div class="flex">
          <div class="tupian">
            <img :src="item.url" />
            <div class="botBox">已下线</div>
          </div>
          <div class="flex_one">
            <div class="newbox">
              <div><span class="spanL">ID号：</span> <span class="spanR">{{item.id}}</span></div>
              <div><span class="spanL">基地名称：</span> <span class="spanR">{{item.baseName}}</span></div>
              <div><span class="spanL">标签：</span> <span class="spanR">{{item.label}}</span></div>
              <div><span class="spanL">类型：</span> <span class="spanR">{{item.type}}</span></div>
              <div><span class="spanL">加入时间：</span> <span class="spanR">{{item.jobtTime}}</span></div>
            </div>
            <div class="newOne">
              <p class="xiugai">修改</p>
              <div>
                <span class="spanLo">城市：</span>
                <span class="spanR">{{item.city}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="big_f">
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
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        baseList:{
          1:{
              Bg:'static/images/unchange.png',
              url:'static/images/pg.png',
              id:"036",
              baseName:"伊春透龙山风景区基地",
              label:"山林奇景",
              type:"山川旅居基地",
              jobtTime:"2019-07-30  13:20:00",
              city:"伊春"
            },
          2:{
              Bg:'static/images/unchange.png',
              url:'static/images/pg.png',
              id:"036",
              baseName:"伊春透龙山风景区基地",
              label:"山林奇景",
              type:"山川旅居基地",
              jobtTime:"2019-07-30",
              city:"伊春"
            },
          3:{
              Bg:'static/images/unchange.png',
              url:'static/images/pg.png',
              id:"036",
              baseName:"伊春透龙山风景区基地",
              label:"山林奇景",
              type:"山川旅居基地",
              jobtTime:"2019-07-30",
              city:"伊春"
            },
          4:{
              Bg:'static/images/unchange.png',
              url:'static/images/pg.png',
              id:"036",
              baseName:"伊春透龙山风景区基地",
              label:"山林奇景",
              type:"山川旅居基地",
              jobtTime:"2019-07-30",
              city:"伊春"
            },
          5:{
              Bg:'static/images/unchange.png',
              url:'static/images/pg.png',
              id:"036",
              baseName:"伊春透龙山风景区基地",
              label:"山林奇景",
              type:"山川旅居基地",
              jobtTime:"2019-07-30",
              city:"伊春"
            },
        }
      }
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
       },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
       },
    }

  }
</script>

<style scoped="scoped">
  /* *{
    margin: 0;
    padding: 0;
  } */
  p,span{
    padding: 0;
    margin: 0;
    display: inline-block;
  }
  .base_box{
    flex: 1;
    box-sizing: border-box;
    padding: 16px 100px 0 50px;
    /* width: 1400px; */
    height: 900px;
    /* background-color: pink; */
   /* margin: 50px; */
    /* background-color: lightgray; */
  }
  .serch_base{
    /* width: 1400px; */
    /* height: 50px; */
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sou{
    display: inline-block;
    width: 38px;
    height: 38px;
    background-color: #4cccbb;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
  .sou img{
    width: 100%;
    height: 100%;
  }
  .delete{
    display: inline-block;
    width: 72px;
    height: 38px;
    background-color: #d5d5d7;
  	border-radius: 10px;
    color: #ffffff;
    text-align: center;
    line-height: 38px;
    /* margin-left: 35%; */
    cursor: pointer;
    font-size: 16px;
    margin-right:20px;
  }
  .Add{
    display: inline-block;
    width: 72px;
    height: 38px;
    background-color: #4cccbb;
    border-radius: 10px;
    color: #ffffff;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    /* margin: 0 10px; */
    font-size: 16px;
  }
  .base_data{
    /* width: 1300px; */
    height: 750px;
    /* background-color: #00FF00; */
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-content: flex-start;
  }
  .base_for{
    /* position: relative; */
    width: 49.5%;
    height: 200px;
    /* background-color: gray; */
    display: flex;

    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px
      rgba(6, 30, 54, 0.01);
    border-radius: 20px;
    margin-bottom: 20px;
  }
  .base_for:hover{
    box-shadow: 0px 0px 20px 0px rgba(32, 95, 255, 0.16);
  }
  .tu{
    width: 20px;
    height: 100%;
    /* background-color: red; */
    margin-left: 10px;
  }
  .tu img{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: 10px;
    cursor: pointer;
  }
  .flex{
    flex:1;
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    /* background-color: orange; */
  }
  .tupian{
    position: relative;
    width: 169px;
    height: 169px;
    border-radius: 10px;
    /* background-color: blue; */
    margin-left: 10px;
    overflow: hidden;
  }
  .tupian img{
    width: 100%;
    height: 100%;
  }
  .botBox{
    width: 100%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    font-weight: bold;
    color: #fefeff;
  }
  .flex_one{
    flex: 1;
    display: flex;
    /* background-color: pink; */
    box-sizing: border-box;
    padding: 0 45px 0 30px;
    align-items: center;
    justify-content: space-between;
  }
  .newbox{
    height: 154px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .newOne{
    height: 154px;
    /* background-color: #00FF00; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
  }
  .xiugai{
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
  .spanL{
    font-size: 14px;
	  font-weight: normal;
    color: #626771;
    width: 70px;
  }
  .spanLo{
    font-size: 14px;
    font-weight: normal;
    color: #626771;
    width: 50px;
  }
  .spanR{
    font-size: 16px;
	  font-weight: bold;
    color: #2d2f3a;
  }

  .shuru{
    display: flex;
    align-items: center;
 }
 .shuru span{
    color: #8c86ff;
    margin-right: 10px;
    font-size: 12px;
    font-weight: normal;
 }
  .shuru input{
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
</style>
