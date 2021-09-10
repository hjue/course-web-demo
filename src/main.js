import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import '@/libs/iview-pro/iview-pro.css'
// 加入 iview pro后出现编译错误
// import iViewPro from '@/libs/iview-pro/iview-pro.min.js'

Vue.config.productionTip = false

Vue.use(ViewUI)
// Vue.use(iViewPro)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
