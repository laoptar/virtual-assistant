import axios, { InternalAxiosRequestConfig } from 'axios'
// import store from '@/store'
import { ElLoading, ElMessage } from 'element-plus'

const BASEURL = '/api'
const TIMEOUT = 5 * 60 * 1000
const HEADERS = {
  'content-type': 'application/json;charset=UTF-8'
}

const instance = axios.create({
  // 自定义请求头
  headers: HEADERS,
  // 可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: BASEURL,
  // 如果请求时间超过 `timeout` 的值，则请求会被中断
  timeout: TIMEOUT,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false // default
})

// 获取登录用户标识
const handleAuth = (config: InternalAxiosRequestConfig<object>) => {
  config.headers['token'] = localStorage.getItem('token') || ''
  return config
}

// 捕获响应状态的中文
const handleNetworkError = (errStatus: string | number) => {
  let errMessage = '未知错误'
  if (errStatus) {
    switch (errStatus) {
      case 400:
        errMessage = '错误的请求'
        break
      case 401:
        errMessage = '未授权，请重新登录'
        break
      case 403:
        errMessage = '拒绝访问'
        break
      case 404:
        errMessage = '请求错误,未找到该资源'
        break
      case 405:
        errMessage = '请求方法未允许'
        break
      case 408:
        errMessage = '请求超时'
        break
      case 500:
        errMessage = '服务器端出错'
        break
      case 501:
        errMessage = '网络未实现'
        break
      case 502:
        errMessage = '网络错误'
        break
      case 503:
        errMessage = '服务不可用'
        break
      case 504:
        errMessage = '网络超时'
        break
      case 505:
        errMessage = 'http版本不支持该请求'
        break
      default:
        errMessage = `其他连接错误 --${errStatus}`
    }
  } else {
    errMessage = `无法连接到服务器！`
  }

  ElMessage({
    message: errMessage,
    type: 'error'
  })
}

// 捕获网络请求状态的中文
const handleAuthError = (errno: string | number) => {
  const authErrMap: any = {
    '10031': '登录失效，需要重新登录', // token 失效
    '10032': '您太久没登录，请重新登录~', // token 过期
    '10033': '账户未绑定角色，请联系管理员绑定角色',
    '10034': '该用户未注册，请联系管理员注册用户',
    '10035': 'code 无法获取对应第三方平台用户',
    '10036': '该账户未关联员工，请联系管理员做关联',
    '10037': '账号已无效',
    '10038': '账号未找到'
  }

  if (Object.prototype.hasOwnProperty.call(authErrMap, errno)) {
    ElMessage({
      message: authErrMap[errno],
      type: 'error'
    })
    // 授权错误，登出账户
    // logout()
    return false
  }

  return true
}

// 添加请求拦截器
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.authorization = `Bearer ${token}`
    handleAuth(config)
  }
  ElLoading.service({ fullscreen: true })
  return config
})

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    ElLoading.service().close()
    return response
  },
  error => {
    ElLoading.service().close()
    handleNetworkError(error.state)
    handleAuthError(error.state)
  }
)

const httpRequest = {
  get: (url: string, params: object) => instance.get(url, { params }),

  post: (url: string, data: object) => instance.post(url, data),

  put: (url: string, data: object) => instance.put(url, data),

  delete: (url: string) => instance.delete(url)
}

export default httpRequest
