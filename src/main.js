// 这是整个Vue项目的入口文件

// 安装Vue
import Vue from 'vue'
// 引入根组件
import App from './App.vue'
// 关闭项目启动的生产提示
Vue.config.productionTip = false
// 上面三个是自动生成的，不用改


// 这里是接收router的实例 xxx
import router from './router'
// 把所有api接口方法，都挂载在Vue的原型上，在组件中就可以使用 this.$http 来访问所有的接口方法
import http from '@/utils/api'
Vue.prototype.$http=http

// 创建根组件实例
new Vue({
  // 然后里面的要写router
  // router:xxx简写。
  router,
  render: h => h(App),
}).$mount('#app')
// $mount() 手动挂载相当于el:"#app"
