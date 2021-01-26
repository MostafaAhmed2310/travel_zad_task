import Vue from 'vue';
import App from './App.vue';
import router from './router/mainRouter';
// import store from './store';
import './registerServiceWorker';
import AOS from 'aos'
import 'aos/dist/aos.css'
import carousel from 'vue-owl-carousel'
import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto)



Vue.config.productionTip = false;

new Vue({
  router,
  created () {
    AOS.init()
  },
  // store,
  render: (h) => h(App),
}).$mount('#app');
