
import Vue from 'vue';
import App from './App.vue';
import router from './router'; //설정 라우터 호출


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
  ,router               //뷰에 설정
}).$mount('#app')