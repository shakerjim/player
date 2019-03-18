import fetch from '@/libs/fetch';

// let baseUrl = 'http://118.89.192.122:9991/';

/**
 * 订单列表
 * @param {string} shopId
 * @param {int} pagesize
 * @param {int} pagenum
 */

/* eslint-disable eol-last */
export function orderList(data) {
    return fetch({
        // baseURL: baseUrl,
        url: 'Query/Order/ListShopOrders',
        method: 'GET',
        params: data
    });
};

/**
 * 根据订单号查询数据
 * @param {string} orderId
 */
export function getById(orderId) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Query/Order/GetById',
    method: 'GET',
    params: {
      orderId
    }
  });
};

/**
 * 模糊查询数据
 * @param {string} shopId
 * @param {string} barId
 * @param {string} starTime
 * @param {string} endTime
 * @param {int} barId
 * @param {int} barId
 * @param {int} status 6有效，-6无效
 */
export function getFuzzySearch(shopId, barId, starTime, endTime, pagesize, pagenumber, status) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Query/Order/ListShopOrdersByBarCounter',
    method: 'GET',
    params: {
      shopId,
      barId,
      starTime,
      endTime,
      pagesize,
      pagenumber,
      status
    }
  });
};
