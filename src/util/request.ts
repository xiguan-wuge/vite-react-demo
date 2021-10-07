import umiRequest, { extend } from 'umi-request'
import { urlPrefix } from '../config'

// 使用前缀，配合本地代理
export const request = extend({
  prefix: `${urlPrefix}`
})

export default umiRequest