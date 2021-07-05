import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import TreeTable from 'vue-table-with-tree-grid'
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

/* 导入富文本编辑器 */
import VueQuillEditor from 'vue-quill-editor'
/* 导入富文本编辑器对应的样式 */
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

/* 导入全局样式表 */
import './assets/css/global.css'
// 全局时间过滤器
Vue.filter('dataFormat', function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  // yyyy-mm-dd hh:mm:ss
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
// axios.defaults.baseURL = "https://www.liulongbin.top:8888/api/private/v1/ "
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/upload'
axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  /* 最后必须retrurn */
  return config
})

Vue.prototype.$http = axios

Vue.component('tree-table', TreeTable)
/* 将富文本编辑器注册成全局可用的组件 */
Vue.use(VueQuillEditor)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
