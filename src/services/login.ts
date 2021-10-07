import { request } from '../util/request'

/**
 * 登录请求数据类型
 */
export interface ILogin {
  username: string;
  pwd: string;
}

/**
 * 返回数据类型，需要提前和后端协商好参数
 */
export interface ILoginData {
  code: number;
  message: string;
  token: string
}

/**
 * 登录接口
 * @param params 
 * @returns 
 */
export const loginApp = (params: ILogin):Promise<ILoginData> => {
  return request.get('/login', params)
}