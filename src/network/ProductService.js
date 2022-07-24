import axios from "axios"

const instance = axios.create({
  baseURL: 'https://hps-data.blankpage.site/wxapp/hush-uat',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProductDetail(id) {
    return instance.get(`/product_${id}.json`)
  },
  getHotGoods() {
    return instance.get('/home_hotGoods.json')
  },
  getBanner() {
    return instance.get('/home_banner.json')
  }
}