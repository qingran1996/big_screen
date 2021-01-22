import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import router from '../router/index.js'






// 请求拦截  设置统一header
axios.interceptors.request.use(
  config => {
    // 加载
    // startLoading();
    if (localStorage.eleToken) {
      config.headers.Authorization = 'Bearer ' + localStorage.eleToken
    }
    // console.log(config.url)
    return config
  },
  error => {
    loading.close()
	Message.error({
	  message: '加载超时'
	})
    return Promise.reject(error)
  }
)

// 响应拦截  401 token过期处理
axios.interceptors.response.use(
  response => {
    // endLoading();
    // console.log(1)
    return response
  },
  error => {
    switch (error.response.status) {
      case 401:
		Message.error({
		  message: '权限不足,请联系管理员!'
		})
        break
      case 500:
        Message.error({
          message: '系统繁忙'
        })
        break
      case 404:
        Message.error({
          message: '请求地址错误'
        })
        break
      case 403:
	    Message.error({
	      message: '系统繁忙'
	    })
        break
    }

    return Promise.reject(error)
  }
)

export default axios
