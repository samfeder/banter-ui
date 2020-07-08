import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Carousel3d from 'vue-carousel-3d';
import { store } from "./store/index.js";
import { router } from "./router/index.js";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
Vue.use(Carousel3d);
Vue.config.productionTip = false

moment.locale("en-us");
Object.defineProperty(Vue.prototype, "$moment", { value: moment });

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
