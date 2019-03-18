import fetch from '@/libs/fetch';

let partnerID = '379d1f5c-7a60-458f-9f9b-4fd271003fca';
// let partnerID = 'f892ef13-6bf0-4fa2-ab18-8d0167c776a7';
// let shopID = '379d1f5c-7a60-458f-9f9b-4fd271003fca';
let baseUrl = 'http://115.159.124.30:8710/';
// let baseUrl = 'http://ommcht01api.stg.starbucks.net/';
/**
 * 获取门店
 * @export
 * @param {String} shopId
 * @param {int} sequence
 * @returns
 */
export function getShop(active, typeFlag, pageIndex = 0, pageSize = 10) {
    return fetch({
        baseURL: baseUrl,
        url: '/console/store/getStoreList',
        method: 'Get',
        params: {
            partnerId: partnerID,
            active,
            typeFlag,
            pageIndex,
            pageSize
        }
    });
}

/**
 * 获取门店所有菜单
 *
 * @export
 * @param {String} shopId
 * @param {int} sequence
 * @returns
 */

export function getListMenu(linkId) {
    return fetch({
        // baseUrl: baseUrl2,
        url: '/Query/BarCounter/ListMenu',
        method: 'GET',
        params: {
          linkId
        }
    });
}

/**
 * 设置门店默认菜单
 * @param {*} shopId
 * @param {*} menuId
 */
export function setDefaultMenu(linkId, menuId) {
  return fetch({
    // baseUrl: baseUrl2,
    url: '/BarCounter/SetDefaultMenu',
    method: 'POST',
    data: {
      linkId,
      menuId
    }
  });
}

/**
 * 查询吧台设置默认菜单
 * @param {*} linkIds
 */
export function getListDefaultMenus(linkIds) {
  return fetch({
    // baseUrl: baseUrl2,
    url: '/Query/BarCounter/ListDefaultMenus',
    method: 'GET',
    params: {
      linkIds
    }
  });
}

/**
 * 设置门店基本信息
 * @param {string} partnerId
 * @param {string} OrganizationCode
 * @param {int} state
 */
export function setStore(storeData) {
    return fetch({
        baseURL: baseUrl,
        url: '/console/store/update',
        method: 'POST',
        data: storeData
    });
}
