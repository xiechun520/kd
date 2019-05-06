// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {scrollToTop,setTimer} from '../static/js/public'
Vue.prototype.scrollToTop = scrollToTop
Vue.prototype.setTimer = setTimer
import 'vue-ydui/dist/ydui.base.css';
import  "../static/font-awesome-4.7.0/css/font-awesome.min.css"
import  "../static/css/style.css"
import  "../static/css/slide.css"


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
