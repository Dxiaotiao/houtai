<template>
  <div>
    <footer>
      <p>Copyright © 2014-2019.北京详屿科技发展有限公司 版权所有 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;      热线：400-9965-5617</p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {

      }
    }
  }
</script>

<style scoped="scoped">
  body,html{
    width: 100%;
  }
  footer{
    width: 100%;
    height: 48px;
    background-color: #42454d;
	  opacity: 0.3;
  /*  background-color: rgba(0, 0, 0, 0.3); */
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
  }
  footer p{
    display: inline-block;
    margin-left: 306px;
    color: #ffffff;
    font-size: 12px;
	  font-weight: normal;
  }
</style>
