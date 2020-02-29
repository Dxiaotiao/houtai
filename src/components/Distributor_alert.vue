<template>
  <div class="box_add">
    <div class="top">
      <span>修改</span>
      <span>/</span>
      <span>添加</span>
    </div>
    <div class="add_content">
      <div>
        <p>
          <h5>*</h5><span>标题：</span>
          <input type="text" placeholder="在此输入标题" />
          <h5>*</h5><span>必填，例如：河北宜昌和祥尊长园基地</span>
          <span style="margin-left: 100px;">
           <h5>*</h5><span>标签：</span>
            <input type="text" placeholder="在此输入标题" />
            <h5>*</h5><span>必填，例如：湖北宜昌</span>
          </span>
        </p>
      </div>

      <div>
          <h5>*</h5><span>城市：</span>
          <input type="text" placeholder="北京" />
          <h5>*</h5><span>必填，例如：湖北</span>
      </div>

      <div>
          <h5>*</h5><span>类型：</span>
           <el-select v-model="value" placeholder="请选择" style="width:180px;">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>

         <h5>*</h5><span>必填，例如：山川旅居基地</span>
      </div>

      <div>
          <h5>*</h5><span>首页图片：</span>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
      </div>

      <div>
          <h5>*</h5><span>首页图片：</span>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
      </div>

      <div class="jianjie">
          <h5>*</h5>
          <span>简介：</span>
          <span style="display: inline-block;border-radius: 4px;border: solid 2px #d4d4d6;">
            伊春透龙山景区位于黑龙江伊春222国道86.5公里处，占地310公顷，景区特色以山林风光为主，
            山势相对奇特，具有典型的花岗岩地貌，景区开发较早，风景资源的利用比较充分，极具观赏价值，
            有“小黄山”之誉。古人云：“智者乐水、仁者乐山”。
          </span>
      </div>

      <div class="wenan">
          <h5>*</h5>
          <span>文案：</span>
          <span style="display: inline-block;border-radius: 4px;border: solid 2px #d4d4d6;">
            基地周边森林、溪水环绕，空气清新，负氧离子含量高，峰峰险绝，
            景景奇秀，风景秀丽，美不胜收。景区基地日月峡度假酒店是按三星级标准建设的豪华酒店，酒店西临水伊方水上乐园，
            东靠日月峡依吉密下水码头，毗邻鹤哈高速，交通极其便利。酒店按现代风格设计装修，环境优美，格调高雅。客房舒适、豪华，游客服务中心随时为您提供周到、快捷的服务。
          </span>
      </div>

      <div  class="save">
        <p @click="back">保存</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
         imageUrl: '',
          options: [{
           value: '选项1',
           label: '黄金糕'
         }, {
           value: '选项2',
           label: '双皮奶'
         }, {
           value: '选项3',
           label: '蚵仔煎'
         }, {
           value: '选项4',
           label: '龙须面'
         }, {
           value: '选项5',
           label: '北京烤鸭'
         }],
         value: '',
      }
    },
     methods: {
      back(){
        alert("保存成功");
        this.$router.go(-1);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style>
  .box_add{
    margin: 20px;
  }
  p{padding: 0;margin:0}
  h5{
    display:inline-block;
    color: red;
    margin: 0;
    padding: 0;
  }
  .top{
   width: 1464px;
    height: 48px;
    background-color: #e9e9ea;
    border-radius: 10px 10px 0px 0px;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .add_content{
    width:1464px;
    height:900px;
    /* background-color:red; */
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px
      rgba(6, 30, 54, 0.01);
    border-radius: 10px;
    /* border:1px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .jianjie{
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
  }
  .jianjie span:nth-child(2){
    display: inline-block;
    /* background-color: blue; */
    width: 80px;
  }
  .wenan{
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
  }
  .wenan span:nth-child(2){
    display: inline-block;
    /* background-color: blue; */
    width: 90px;
  }
  .save{
    width: 100%;
    height: 40px;
    /* background-color:red; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .save p{
    display: inline-block;
    width: 68px;
    height: 38px;
    background-color: #4cccbb;
    border-radius: 10px;
    text-align: center;
    line-height: 38px;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
  }
</style>
<style>
 .avatar-uploader-icon{
    width: 100px;
    height: 100px;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;

  }

</style>
