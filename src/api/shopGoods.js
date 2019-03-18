import fetch from '@/libs/fetch';

// let baseUrl = 'http://118.89.192.122:9998';
let shopID = '379d1f5c-7a60-458f-9f9b-4fd271003fca';

/**
 * 获取商品详情
 *
 * @export
 * @param {String} productId
 * @param {String} shopId
 * @returns
 */
export function getGoodsDetail(productId, shopId) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Query/Product/GetProductInfo',
        method: 'GET',
        params: {
            productId,
            shopId
        }
    });
}

/**
 * 获取商品详情的加料信息
 *
 * @export
 * @param {String} productId
 * @returns
 */
export function getGoodsFeeding(productId) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Query/Product/GetBaseInfo',
        method: 'GET',
        params: {
            productId
        }
    });
}

/**
 * 获取菜单分类商品
 * @param {string} menuId
 * @param {string} nodeId
 * @param {int} deep
 * @param {int} pagesize
 * @param {int} pagenumber
 */
export function ListChildren(menuId, nodeId, pagenumber = 1, deep = 10, pagesize = 12) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Query/BarCounter/ListChildren',
        method: 'GET',
        params: {
            menuId,
            nodeId,
            deep,
            pagesize,
            pagenumber
        }
    });
}

/**
 * 查询当前菜单下的标签分类
 * @param {string} linkId 商户ID
 * @param {string} menuId 菜单ID
 * @param {string} nodeId 菜单节点ID
 */
export function getLabel(menuId, nodeId, linkId = shopID) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Query/BarCounter/ListMenuTypeLabels',
        method: 'GET',
        params: {
            linkId,
            menuId,
            nodeId
        }
    });
}

/**
 * 菜单添加标签
 * @param {string} linkId 商户ID
 * @param {string} menuId 菜单ID
 * @param {string} nodeId 菜单节点ID
 * @param {string} name 标签名
 */
export function addLabel(menuId, nodeId, name, linkId = shopID) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Shop/AddProductsLabel',
        method: 'POST',
        data: {
            linkId,
            menuId,
            nodeId,
            name
        }
    });
}

/**
 * 删除标签
 * @param {string} labelId
 */
export function delLabel(labelId) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Label/Del',
        method: 'POST',
        data: {
            labelId
        }
    });
}

/**
 * 商品绑定标签
 * @param {string} lid
 * @param {array} productsIds
 */
export function bindProduct(lid, productIds) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Shop/BindingProductsLabel',
        method: 'POST',
        data: {
            lid,
            productIds
        }
    });
}

/**
 *  查询标签下的商品
 * @param {string} linkId
 * @param {string} labelName
 * @param {int} pagenumber
 * @param {int} pagesize
 */
export function ListProductByLabelName(pagenumber = 1, labelName, pagesize = 12, linkId = shopID) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Query/Company/ListProductByLabelName',
        method: 'GET',
        params: {
            linkId,
            labelName,
            pagenumber,
            pagesize
        }
    });
}

/**
 * 商品上下架
 * @param {string} companyId
 * @param {boolean} endableDisable
 * @param {array} productIds
 */
export function EndableDisableProducts(productIds, endableDisable, companyId = shopID) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Company/EndableDisableProducts',
        method: 'POST',
        data: {
            companyId,
            endableDisable,
            productIds
        }
    });
}

/**
 * 商品绑到菜单
 * @param {string} menuId
 * @param {string} nodeId
 * @param {array} productIds
 */
export function SetProducts(menuId, nodeId, productIds) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Menu/SetProducts',
        method: 'POST',
        data: {
            menuId,
            nodeId,
            productIds
        }
    });
}

/**
 * 标签解绑商品
 * @param {string} lid
 * @param {array} productIds
 */
export function DelProductsLabel(lid, productIds) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Shop/DelProductsLabel',
        method: 'POST',
        data: {
            lid,
            productIds
        }
    });
}

/**
 * 商品池全局查询
 * @param {string} companyId
 * @param {string} productName
 */
export function ListProductByInfo(productInfo, menuId, pagenumber = 1, pagesize = 12) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Query/Menu/ListProductByInfo',
        method: 'GET',
        params: {
            menuId,
            productInfo,
            pagenumber,
            pagesize
        }
    });
}

// 获取新增商品维护池
/**
 * @param {*string} category
 * @param {int} updateStatus 1 = add, 2 = update, 3 = del
 * @param {int} pagenumber
 * @param {int} pagesize
 * @param {string} linkId
 */
export function ListChangeProducts(category, updateStatus, pagenumber, pagesize = 12, linkId = shopID) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Query/Product/ListChangeProducts',
        method: 'GET',
        params: {
            linkId,
            category,
            updateStatus,
            pagenumber,
            pagesize
        }
    });
}

/**
 * 商品维护池的新增商品
 * @param {string} menuId
 * @param {string} nodeId
 * @param {array} productIds
 */
export function SetAddProducts (data) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Menu/SetAddProducts',
        method: 'POST',
        data: data
    });
}

/**
 * 商品维护池的更新商品
 * @param {string} menuId
 * @param {string} nodeId
 * @param {array} productIds
 */
export function SetUpdateProducts (menuId, nodeId, productIds) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Menu/SetUpdateProducts',
        method: 'POST',
        data: {
          menuId,
          nodeId,
          productIds
        }
    });
}

/**
 * 商品维护池的移除商品
 * @param {string} menuId
 * @param {string} nodeId
 * @param {array} productIds
 */
export function RemoveDelProducts (menuId, nodeId, productIds) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Menu/RemoveDelProducts',
        method: 'POST',
        data: {
          menuId,
          nodeId,
          productIds
        }
    });
}
