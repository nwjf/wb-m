/**
 * @file request
 * @author wangjunfa
 */

import axios from 'axios'
import qs from 'qs'
import { devBaseApi, prodBaseApi } from './apiConfig.js'

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? devBaseApi : prodBaseApi,
    timeout: 5000
})

// request
service.interceptors.request.use(config => {
    return config
});

// response
service.interceptors.response.use(response => {
    return response
});

/**
 * $get, $post, $put, $delete
 * @param {String} url apiurl
 * @param {Object} params request query 参数
 * @param {Object} data request body 参数
 */
export const $get = (url, params, data) => service({
    url,
    methods: 'get',
    params,
    data
})
export const $post = (url, data, params) => service({
    url,
    methods: 'post',
    params,
    data
})
export const $put = (url, data, params)  => service({
    url,
    method: 'put',
    data,
    params
})
export const $delete = (url, data, params) => service({
    url,
    method: 'delete',
    data,
    params
})

export default service
/**
 * 使用
 * import request, { $get, $post, $put, $delete } from './request';
 * 可以按需引入，
 * request 为axios主体方法包含各种使用方式
 */
