import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
Vue.prototype.$apiUrl = 'http://localhost/modul11/index.php';


new Vue({
  render: h => h(App),
  router,
  vuetify,
  components: { App }
 }).$mount('#app')
 
