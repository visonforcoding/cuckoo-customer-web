import axios from 'axios'
import config from '@/config'
import router from '@/router'
import { Notify } from 'quasar'

// const development = config.isDev
// const baseURL = development ? `${config.getBaseUrl()}/api` : config.getBaseUrl()
let baseURL = config.getBaseUrl()
// create an axios instance
if (config.isDev) {
  baseURL = baseURL + '/api'
}
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: baseURL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 120 // request timeout

})


service.interceptors.request.use(
  config => {
    if (config.method === 'POST') {
      config.headers = {
        'Content-Type': 'application/json'
      }
    }
    if (config.method === 'DELETE') {
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    if (localStorage.getItem('x-token')) {
      config.headers['x-token'] = localStorage.getItem('x-token')
    }
    return config
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // 状态逻辑
    if (res.code === 401) {
    //  $q.notify({
    //     group: 'common',
    //     text: res.msg,
    //     type: 'error'
    //   })
      setTimeout(function () {
        sessionStorage.clear()
        // location.href = 'login'
        router.push({
          path: 'login'
        })
        console.log(router)
      }, 1000)
      return new Promise(() => {})
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Notify.create({
      group: 'common',
      title: '系统错误',
      text: error.message,
      type: 'error'
    })
    return Promise.reject(error)
  }
)

export default service