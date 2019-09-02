import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import vueHashCalendar from '../src/index'
// 注册组件库
Vue.use(vueHashCalendar)

Vue.config.productionTip = false

//引入百度统计插件
import ba from 'vue-ba'
Vue.use(ba, 'b0668f30d62e1597bdb36d05edea8960')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
