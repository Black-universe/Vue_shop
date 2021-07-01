import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

/* 导入字体图标 */
/*
import './assets/font.iconfont.css'

然后可以正常使用

 prefix-icon:来自element-ui

 iconfont icon-user:来自阿里图标库
<i prefix-icon="iconfont icon-user"  ><>
*/

// 配置请求的根路径
import axios from 'axios'

/* 导入全局样式表 */
import './assets/css/global.css'
// axios.defaults.baseURL = "https://www.liulongbin.top:8888/api/private/v1/ "
axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  /* 最后必须retrurn */
  return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
