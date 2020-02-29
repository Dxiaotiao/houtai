<template>
  <div>
    <div class="box_head">
      <div class="bg">
        <img src="../../static/images/logo.png" />
      </div>
      <div class="box_show">
        <span class="showN">
          <img src="../../static/images/unclick.png" class="unclick" @click="notshow"/>
        </span>
        <div class="box_top">
          <span>
            <img src="../../static/images/update.png" class="update" />
          </span>
          <span>
            <img src="../../static/images/set.png" class="set" />
          </span>
          <span>张小波</span>
          <span>
            <img src="../../static/images/personal.png" class="personal" @click="Info"/>
            <div class="xiaLa" v-if="show">
              <p>个人信息</p>
              <p>个人信息</p>
              <p>个人信息</p>
              <p>个人信息</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
         show:false,
      }
    },
    created(){

    },
    methods:{
      Info(){
        this.show = !this.show;
      },
      notshow(){
        var name = this.$state.name;
        if(name == 1){
          this.$state.name = 2;
        }else{
          this.$state.name = 1;
        }
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
  .box_head{
    width: 100%;
    height: 100px;
    /* background-color: red; */
    display: flex;
   /* background-color: #ffffff; */
  	box-shadow: 0px 0px 20px 0px
		 rgba(32, 95, 255, 0.1);
  /*  position: fixed;
    top: 0; */
  }
  .box_head .bg{
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: #554def;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bg img{
    width: 67px;
    height: 38px;
  }
  .box_show{
    /* width: 1820px; */
    flex: 1;
    height: 100px;
    /* background-color: green; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .box_top{
    display: flex;
    align-items: center;
  }
  /* .unclick{
    margin-left: 50px;
  } */
  .box_top span{
    display: inline-block;
    margin: 0 15px;
  }
  .box_show .showN{
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #262832;
    border-radius: 20px;
    opacity: 0.2;
    margin-left: 50px;
  }
  .showN img{
    width: 100%;
    height: 100%;
  }
  .box_top span:nth-child(1){
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #262832;
    border-radius: 20px;
    opacity: 0.2;
  }
  .box_top span:nth-child(1) img{
    width: 100%;
    height: 100%;
  }
  .box_top span:nth-child(2){
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #262832;
    border-radius: 20px;
    opacity: 0.2;
  }
  .box_top span:nth-child(2) img{
    width: 100%;
    height: 100%;
  }
  .box_top span:nth-child(3){
    position: relative;
  }
  .xiaLa{
    position: absolute;
    width: 100px;
    height: 150px;
    /* background: red; */
    top: 80px;
    right: 10px;
    z-index: 1;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;
    cursor: pointer;
  }
  .xiaLa p{
    width: 100%;
    height: 20%;
    /* background-color: orange; */
    text-align: center;
    line-height: 30px;
  }
  .xiaLa p:hover{
    background-color: darkgray;
  }
</style>
