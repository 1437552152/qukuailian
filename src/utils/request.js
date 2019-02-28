import Fly from 'flyio/dist/npm/wx'
const fly = new Fly

fly.interceptors.request.use((config,promise)=>{
  wx.showLoading({ title: '正在保存...' })
  config.headers["X-Tag"]="flyio"
  return config
})

export function request (url, params) {
  return new Promise((resolve, reject) => {
    fly.request(url, params).then(response => {
      wx.hideLoading() 
      resolve(response)
    }, err => {
      wx.hideLoading()
      wx.showToast({
        title: err.message,
        icon: 'none'
      })
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

const env = process.env.NODE_ENV
if (env === 'development') {
  fly.config.baseURL='https://test.xclerk.com'
}

export default {
    /* 微信授权登录 */
    Xcclogin (params) {
      return request('/yunhe/wechat/login/wxminiLogin', params)
    }
}