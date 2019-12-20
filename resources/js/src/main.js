/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import Vue from 'vue'
import App from './App.vue'
// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax);

// axios
import axios from "./axios.js"
Vue.prototype.$http = axios;


// Theme Configurations
import '../themeConfig.js'


// Globally Registered Components
import './globalComponents.js'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer);


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Vue select css
import vSelect from 'vue-select'
Vue.component('v-select', vSelect);

// VeeValidate
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate);
//Tinymce Editor
import tinymce from 'vue-tinymce-editor'
Vue.component('tinymce', tinymce);
//modal
import VModal from 'vue-js-modal'
Vue.use(VModal);
//moment
import moment from 'moment';
Vue.prototype.moment = moment;

Vue.prototype.$formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

//print
import VueHtml2Canvas from 'vue-html2canvas';
Vue.use(VueHtml2Canvas);

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
