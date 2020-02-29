import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
const state = {
  show:true
}
 export default new Vuex.Store({

   state:{
     name:'',
   },
   // mutations:{
   //   //数据处理方法
   // },
   // getters:{
   //   //数据包装
   // }
 })
