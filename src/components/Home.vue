<template>
  <div>
    <div class="home_content">
      <div class="home_left">
         <div class="box_view">
            <div class="viewL">
               <video id="vio" src="movie.ogg" controls="controls"></video>
            </div>
            <div class="viewR">
              <div class="viewR_t">
                <div class="vL"></div>
                <div class="vC">
                  <span></span>
                  <span>视屏教程</span>
                  <span></span>
                </div>
                <div class="vR"></div>
              </div>
              <div class="viewR_f">
                <div class="boxFor" v-for="(item,index) in viewList"  @click="onclick(item,index)" :key = "index" :class="{black:index == showid}">
                  <p>{{item.name}}</p>
                </div>
              </div>
            </div>
         </div>
         <div class="box_text">
           <p class="box_text_p">
             <span style="width:637px;"> 城城快乐居简介</span>
             <span style="width:637px;height: 2px;background-color: #2d2f3a;margin: 5px 0 10px 0;"></span>
             <span style="width:637px;">城城快乐居作为一家国内先行的旅居服务平台，以会员制为基础，“重体验、高品质、慢节奏 、深度游”为核心理念。
                   我们精选知名旅游度假区为核心，整合国内经典宜居城市，从北国到南疆，建立适宜深度居住，躲避城市喧嚣的理想旅居休闲基地，
                   在全国范围内为会员提供以合作基地+品质周边游+生活大健康多重的旅居休闲服务，轻松帮助您实现365天循环游玩旅居圈。
             </span>
           </p>
           <p class="box_text_bgO">
             <img src="static/images/QR-code.png" />
             <span>小程序二维码</span>
           </p>
           <p class="box_text_bgT">
             <img src="static/images/group.png" />
             <span>集团二维码</span>
           </p>
         </div>
      </div>
      <div class="home_right">
        <div class="message" :style="ImgO">
          <div class="mes_box">
            <div class="mesL"></div>
            <div class="mesC">
              <span></span>
              <span>消息中心</span>
              <span></span>
            </div>
            <div class="mesR"></div>
          </div>
          <ul>
            <li v-for="item in messageList">{{item.name}}</li>
          </ul>
          <p class="bFn" @click="changeMessage">查看更多</p>
        </div>
        <div class="problem" :style="ImgT">
          <div class="pro_box">
            <div class="proL"></div>
            <div class="proC">
              <span></span>
              <span>问题中心</span>
              <span></span>
            </div>
            <div class="proR"></div>
          </div>
          <ul>
            <li>哈哈哈哈哈哈哈哈哈哈哈</li>
            <li>哈哈哈哈哈哈哈哈哈哈哈</li>
            <li>哈哈哈哈哈哈哈哈哈哈哈</li>
            <li>哈哈哈哈哈哈哈哈哈哈哈</li>
            <li>哈哈哈哈哈哈哈哈哈哈哈</li>
            <li>哈哈哈哈哈哈哈哈哈哈哈</li>
            <li>哈哈哈哈哈哈哈哈哈哈哈</tli>
            <li>哈哈哈哈哈哈哈哈哈哈哈</li>
          </ul>
         <p class="wFn" @click="changeProblem">查看更多</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ImgO:{
          background:"url("+require('../../static/images/mesBg.png')+") no-repeat  bottom  #fafffe"
        },
        ImgT:{
          background:"url("+require('../../static/images/questionBg.png')+") no-repeat  bottom  #fff8f5"
        },
        messageList:[{name:"华泰顺彩"},{name:"华泰顺彩"},{name:"华泰顺彩"},{name:"华泰顺彩"},{name:"华泰顺彩"},{name:"华泰顺彩"}],
        viewList:[
          {url:"123", name:'如何正确使用城城快乐居后台',id:'1'},
          {url:"456",name:'如何正确使用城城快乐居后台',id:'2'},
          {url:"789",name:'如何正确使用城城快乐居后台',id:'3'},
          {url:"老刘",name:'如何正确使用城城快乐居后台',id:'4'},
          {url:"老王",name:'如何正确使用城城快乐居后台',id:'5'},
          {url:"老李",name:'如何正确使用城城快乐居后台',id:'6'},
          {url:"老人",name:'如何正确使用城城快乐居后台',id:'7'},
        ],
        showid:"",
    }
  },
    methods:{
        onclick(item,id){
          let lot = document.getElementById('vio')
          lot.src = item.url
          this.showid = id;
          console.log(id)
          console.log(lot.src)
          console.log(lot)
        },
        changeMessage(){
          this.$router.push("/message_alert")
        },
        changeProblem(){
          this.$router.push("/problem_alert")
        }
      }
    }
</script>

<style scoped="scoped">
  ul,li,p{
    list-style: none;
    padding: 0;
    margin:0;
  }
  p,span{
    display: inline-block;
  }
  .home_content{
    display: flex;
    /* margin-top: 10px; */
    flex: 1;
  }
  .home_left{
    width:1161px;
    height: 800px;
    /* background-color: red; */
    margin-left: 100px;
    margin-top: 50px;
  }
  .home_right{
    width: 429px;
    height: 800px;
   /* background-color: black; */
    margin-top: 50px;
  }
  .box_view{
   /* width: 1150px; */
    height: 560px;
    background-color: #ffffff;
	  box-shadow: 0px 0px 16px 0px
		 rgba(8, 0, 157, 0.06);
	  border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .box_text{
    /* width: 1150px; */
    height: 213px;
    /* background-color: yellow; */
    margin-top: 30px;
    background-color: #ffffff;
	  box-shadow: 0px 0px 16px 0px
		 rgba(8, 0, 157, 0.06);
	  border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

  }

  .message{
    width: 429px;
    height: 353px;
    background-color: #fafffe;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-left: 30px;
   /* background-image: no-repeat center bottom #fafffe; */
  }
  .message ul{
    margin: 0;
    padding: 0;
    width: 300px;
    height: 200px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .message ul li{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 30px;
    /* background-color: green; */
    text-align: center;
    line-height: 30px;
  }
  .message P{
    margin:0;
    padding:0;
    display: inline-block;
  }
  .problem{
    width: 429px;
    height: 420px;
    background-color: #fff8f5;
    box-shadow: 0px 0px 16px 0px
      rgba(8, 0, 157, 0.06);
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-left: 30px;
  }
  .problem ul{
    margin: 0;
    padding: 0;
    width: 300px;
    height: 260px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .problem ul li{
    margin: 0;
    padding: 0;
    width: 100%;
    /* background-color: green; */
    text-align: center;
  }
  .box_text_p{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    /* align-items: center; */
  }
  .box_text_p span:nth-child(1){
    color: #626771;
    font-size: 20px;
  }
  .box_text_bgO{
    display: inline-block;
    width: 165px;
    height: 165px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .box_text_bgO span{
    font-size: 12px;
    color: #626771;
  }
  .box_text_bgO img{
    display: inline-block;
    width: 138px;
    height: 138px;
  }
  .box_text_bgT{
    display: inline-block;
    width: 165px;
    height: 165px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .box_text_bgT span{
    font-size: 12px;
    color: #626771;
  }
  .box_text_bgT img{
    display: inline-block;
    width: 138px;
    height: 138px;
  }
  .bFn{
    display: inline-block;
    width: 136px;
    height: 36px;
    background-color: #4cccbb;
    border-radius: 18px;
    color: white;
    text-align: center;
    line-height: 36px;
    cursor: pointer;
    font-size: 16px;
 /*   margin: 0;
    padding: 0; */
  }
  .wFn{
    display: inline-block;
    width: 136px;
    height: 36px;
    background-color: #ff9059;
    border-radius: 18px;
    color: white;
    text-align: center;
    line-height: 36px;
    cursor: pointer;
    font-size: 16px;
    margin:0;
    padding:0;
  }
  .mes_box{
    width: 100%;
    height: 40px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mesL{
    width: 70px;
    height: 2px;
    background-color: #4cccbb;
    /* opacity: 0.2; */
  }
  .mesR{
    width: 70px;
    height: 2px;
    background-color: #4cccbb;
    /* opacity: 0.2; */
  }
  .mesC{
    width: 60%;
    height: 100%;
    background-color: #4cccbb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
  }
  .mesC span:nth-child(1){
    display: inline-block;
    width:0;
    height:0;
    border-left:20px solid white;
    border-right:20px solid transparent;
    border-top:20px solid transparent;
    border-bottom:20px solid transparent;
  }
  .mesC span:nth-child(3){
    display: inline-block;
    width:0;
    height:0;
    border-left:20px solid transparent;
    border-right:20px solid white;
    border-top:20px solid transparent;
    border-bottom:20px solid transparent;
  }
  .pro_box{
    width: 100%;
    height: 40px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .proL{
    width: 70px;
    height: 2px;
    background-color: #ff9059;
    /* opacity: 0.2; */
  }
  .proR{
    width: 70px;
    height: 2px;
    background-color: #ff9059;
    /* opacity: 0.2; */
  }
  .proC{
    width: 60%;
    height: 100%;
    background-color: #ff9059;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
  }
  .proC span:nth-child(1){
    display: inline-block;
    width:0;
    height:0;
    border-left:20px solid white;
    border-right:20px solid transparent;
    border-top:20px solid transparent;
    border-bottom:20px solid transparent;
  }
  .proC span:nth-child(3){
    display: inline-block;
    width:0;
    height:0;
    border-left:20px solid transparent;
    border-right:20px solid white;
    border-top:20px solid transparent;
    border-bottom:20px solid transparent;
  }
  .viewL{
    width: 700px;
    height: 560px;
    background-color: #aab4ff;
  }
  .viewR{
    width: 350px;
    height: 540px;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .viewR_t{
    width: 100%;
    height: 40px;
    /* background: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .viewR_f{
    width: 300px;
    height: 480px;
    /* background: pink; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .boxFor{
    width: 100%;
    height: 13%;
    /* background-color: green; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .boxFor p{
    display: inline-block;
    margin: 0;
    padding: 0;
    /* color: #626771; */
    /* font-size: 16px; */
    cursor:pointer;
  }
  .viewR_f .black {
    background-color: #e8e7ff;
    border-radius: 4px;
    font-size: 18px;
    color: #8c86ff;
  }
  #vio{
    width: 100%;
    height: 100%;
    background-color: red;
  }
  .vL{
    width: 40px;
    height: 2px;
    background-color: #554def;
    opacity: 0.2;
  }
  .vR{
    width: 40px;
    height: 2px;
    background-color: #554def;
    opacity: 0.2;
  }
  .vC{
    width: 70%;
    height: 100%;
    background-color: #554def;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
  }
  .vC span:nth-child(1){
    display: inline-block;
    width:0;
    height:0;
    border-left:20px solid white;
    border-right:20px solid transparent;
    border-top:20px solid transparent;
    border-bottom:20px solid transparent;
  }
  .vC span:nth-child(3){
    display: inline-block;
    width:0;
    height:0;
    border-left:20px solid transparent;
    border-right:20px solid white;
    border-top:20px solid transparent;
    border-bottom:20px solid transparent;
  }
</style>
