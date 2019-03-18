/**
 * XMLHttpRequests 全局请求封装
 * 统一处理请求前验证、请求后数据处理
 * Axios基于promise的HTTP库
 */
import { baseUrl } from '@/config/env.js';
import axios from 'axios';
// import Message from 'iview/src/components/message';

let lang = window.localStorage.getItem('language') === 'en-US' ? 'en_US' : 'zh_CN';
console.log(lang);
// 创建axios实例
const service = axios.create({
    baseURL: baseUrl,  // 域名URL
    // `headers` 是即将被发送的自定义请求头
    headers: {'Content-Type': 'application/json'},
    params: {
      lang: lang
    },
    timeout: 5000,       // 请求超时时间
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // 默认的
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // 默认的
    // `maxContentLength` 定义允许的响应内容的最大尺寸
    maxContentLength: 2000,
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }]

});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default service;
