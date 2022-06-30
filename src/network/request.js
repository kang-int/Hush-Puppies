import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'https://hps-data.blankpage.site/wxapp/hush-uat',
    timeout: 5000
  })

  // axios拦截器
  // 1. 请求拦截
  // instance.interceptors.request.use(config => {
  //   // console.log(config);
  //   return config
  // }, err => {
  //   console.log(err);
  // })
  // // 2. 响应拦截
  // instance.interceptors.response.use(res => {
  //   // console.log(res);
  //   // 只返回data
  //   return res.data
  // }, err => {
  //   console.log(err);
  // })

  return instance(config)
}