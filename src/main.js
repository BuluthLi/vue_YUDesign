// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from "./store/index"
import 'swiper/dist/css/swiper.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueProgressiveImage from 'vue-progressive-image'// 渐进式
Vue.use(VueProgressiveImage, {
  delay: 500,
  cache: true,
  blur:0
});
console.log(VueProgressiveImage);

// import './assets/css/animate.css';


// Google Maps
// Vue.use(VueGoogleMaps, {
//   load: {
//     apiKey: 'AIzaSyD0ozzDLpblYqEVGUhL5BUmNgXYOMaprJU',
//     libraries: ['places'],
//     useBetaRenderer: false,
//   },
// })

// JSONP
axios.jsonp = (url, data) => {
  if (!url)
    throw new Error('url is necessary')
  const callback = 'CALLBACK' + Math.random().toString().substr(9, 18)
  const JSONP = document.createElement('script')
  JSONP.setAttribute('type', 'text/javascript')

  const headEle = document.getElementsByTagName('head')[0]

  let ret = '';
  if (data) {
    if (typeof data === 'string')
      ret = '&' + data;
    else if (typeof data === 'object') {
      for (let key in data)
        ret += '&' + key + '=' + encodeURIComponent(data[key]);
    }
    ret += '&_time=' + Date.now();
  }
  JSONP.src = `${url}?callback=${callback}${ret}`;
  return new Promise((resolve, reject) => {
    //定义一个处理Jsonp返回数据的回调函数,callback函数名要对应，接受处理返回数据的回调
    window[callback] = r => {
      resolve(r)
      headEle.removeChild(JSONP)
      delete window[callback]
    }
    headEle.appendChild(JSONP)
  })

}


// iView
Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.$http = axios




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
