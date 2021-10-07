// 接口地址
export const apiAdsress = 'http://localhost:3008/'

// 开发代理前缀
export const proxyApi = '/api'

// 接口前缀，通过环境变量判断是否需要添加代理
export const urlPrefix = process.env.NODE_ENV === 'development' ? proxyApi : ''