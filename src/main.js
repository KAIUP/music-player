import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Lazyload, Toast, Loading } from 'vant';

Vue.use(Lazyload);
Vue.use(Toast);
Vue.use(Loading);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')