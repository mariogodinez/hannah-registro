// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import store from './store.js'
import App from './App.vue'
import Home from './components/Home.vue'





window.axios = require('axios')
window.Is = require('is_js')

// window.onbeforeunload = function(){
//   localStorage.removeItem('tokenOrkestra')
// }

let prodApi = 'https://hannahapi.unexpectdemo.mx'
let domain = '---'
let devApi = 'https://3016be0f.ngrok.io'

window.apiUrl =  prodApi

axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.tokenCT;
axios.defaults.timeout                         = 8000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Accept'] = 'application/json, text/plain, */*'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


import VueRouter from 'vue-router'
Vue.use(VueRouter)


function scrollTop (to,from,next){
  let body = document.querySelector('body')
  let html = document.querySelector('html')
  body.scrollTop = 0
  html.scrollTop = 0
  next()
}


let routes = [
  {path: '/registro', component: Home, beforeEnter:scrollTop},

]

let router = new VueRouter({
	routes,
	//mode: 'history',
	//history: true
})

let VueApp = new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  created(){

  }
})

