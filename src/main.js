import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'

// 注册路由兼容
Vue.use(MpvueRouterPatch)

Vue.config.productionTip = false

import IboxPlugin from '@/plugins/ibox'
Vue.use(IboxPlugin)

const app = new Vue({
  store,
  ...App
})

app.$mount()

export default {
  config: {
    pages: ['^pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    // 网络超时时间
    networkTimeout: {
      request: 60000
    },
    tabBar: {
      color: '#888888',
      selectedColor: '#2896ff',
      borderStyle: 'black',
      position: 'bottom',
      backgroundColor: '#fff',
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './static/image/house.png',
        selectedIconPath: './static/image/house_select.png'
      }, {
        pagePath: 'pages/message/index',
        text: '消息',
        iconPath: './static/image/near.png',
        selectedIconPath: './static/image/near_select.png'
      }, {
        pagePath: 'pages/home/index',
        text: '我的',
        iconPath: './static/image/home.png',
        selectedIconPath: './static/image/home_select.png'
      }]
    }
  }
}
