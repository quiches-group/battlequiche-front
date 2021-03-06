import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.prototype.$http = axios;
Vue.prototype.$env = process.env;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
