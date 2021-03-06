import Vue from 'vue'
import App from './App.vue'

//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
//引入路由
import router from '@/router';
//引入仓库
import store from '@/store';
// //测试
// import { reqCategoryList } from '@/api';
// reqCategoryList();

//引入MockServe.js-----mock数据
import '@/mock/mockServe';
//引入swiper样式,在其他组件也要使用，故在此处引用
import 'swiper/css/swiper.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  //註冊路由：底下的写法是K_V一致省略V【router的小写】
  router,
  //注册路由信息，组件的身上都会有$route,$router属性
  router,
  //注册仓库:组件实例的身上会有一个属性$store
  store

}).$mount('#app')
