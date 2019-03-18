import fetch from '@/libs/fetch.js';

/* eslint-disable eol-last */
// let baseUrl = 'http://118.89.192.122:9991';
let shopID = '379d1f5c-7a60-458f-9f9b-4fd271003fca';
/**
 * 获取门店菜单
 *
 * @export
 * @param {String} shopId
 * @returns
 */
export function getListMenu(companyId = shopID) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Query/Company/ListMenu',
    method: 'Get',
    params: {
      companyId
    }
  });
}

/**
 * 获取菜单分类
 *
 * @export
 * @param {String} linkId
 * @returns
 */
export function ListChildrenType(linkId, type, sequence) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Query/BarCounter/ListChildrenType',
    method: 'Get',
    params: {
      linkId,
      type,
      sequence
    }
  });
}

/**
 *  获取单个菜单下的分类以及商品
 *  @export
 *  @param {Int} menuId   菜单Id
 *  @param {String} nodeId
 *  @param {Int} deep
 */
export function getListChildren(menuId, nodeId = '01', deep = 3) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Query/Menu/ListChildren',
    method: 'Get',
    params: {
      menuId,
      nodeId,
      deep
    }
  });
}
/**
 *  获取单个菜单下的商品
 *  @export
 *  @param {Int} menuId   菜单Id
 *  @param {String} nodeId
 *  @param {Int} deep
 */
export function getListShop(menuId, nodeId, deep, pagesize, pagenumber) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Query/BarCounter/ListChildren',
    method: 'Get',
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
 * 获取门店所有商品信息
 *
 * @export
 * @param {String} linkId
 * @param {Int} type
 * @param {Int} channel
 * @returns
 */
export function getMenuTree(linkId = shopID, type = 2, sequence = 0) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Query/BarCounter/GetMenuTree',
    method: 'GET',
    params: {
      linkId,
      type,
      sequence
    }
  });
}

/**
 * 添加门店菜单
 *
 * @export
 * @param {String} shopId  门店标识
 * @param {String} name    菜单名
 * @param {Int} sequence
 * @returns
 */
export function getAddMenu(name, linkId = shopID) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Company/AddMenu',
    method: 'POST',
    data: {
      name,
      linkId
    }
  });
}
/**
 * 编辑门店菜单
 *
 * @export
 * @param {int} menuId  菜单标志
 * @param {String} name    菜单名
 * @returns
 */
export function getEditMenu(menuId, name) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Menu/EditName',
    method: 'POST',
    data: {
      menuId,
      name
    }
  });
}
/**
 * 删除门店菜单
 *
 * @export
 * @param {String} shopId  门店标志
 * @param {Int} menuId    菜单id
 * @returns
 */
export function getDelMenu(shopId, menuId) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Company/DelMenu',
    method: 'POST',
    data: {
      shopId,
      menuId
    }
  });
}
/**
 * 添加菜单分类名称
 *
 * @export
 * @param {Int} menuId  菜单标志
 * @param {Int} parentId  节点Id
 * @param {String} name    节点名称
 * @param {Int} type
 * @returns
 */
export function getAddNode(menuId, parentId, name, type) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Menu/AddNode',
    method: 'POST',
    data: {
      menuId,
      parentId,
      name,
      type
    }
  });
}
/**
 * 编辑菜单分类名称
 *
 * @export
 * @param {Int} menuId  菜单标志
 * @param {Int} nodeId    菜单名
 * @param {String} name    节点名称
 * @returns
 */
export function setNodeName(menuId, nodeId, name) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Menu/SetNodeName',
        method: 'POST',
        data: {
            menuId,
            nodeId,
            name
        }
    });
}
/**
 * 删除菜单分类
 *
 * @export
 * @param {String} menuId  菜单Id
 * @param {Int} nodeId    菜单节点id
 * @param {Boolean} delChildren    是否删除菜单节点下商品
 * @returns
 */
export function getDelNode(menuId, nodeId, delChildren) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Menu/DelNode',
    method: 'POST',
    data: {
      menuId,
      nodeId,
      delChildren
    }
  });
}
/**
 * 绑定菜单到指定的吧台
 *
 * @export
 * @param {String} barId   吧台Id
 * @param {Int} menuId    菜单Id
 * @param {Int} sequence
 * @returns
 */
export function getBindingMenu(barIds, menuId, sequence) {
  return fetch({
    // baseURL: baseUrl,
    url: '/BarCounter/BindingMenu',
    method: 'POST',
    data: {
      barIds: barIds,
      menuId,
      sequence
    }
  });
}
/**
 * 解除绑定菜单到指定的吧台
 *
 * @export
 * @param {String} linkId   商户编号 + 门店编码
 * @param {Int} type
 * @param {Int} sequence
 * @param {Int} menuId    菜单Id
 * @returns
 */
export function getDelBindingMenu(linkId, type, sequence, menuId) {
  return fetch({
    // baseURL: baseUrl,
    url: '/BarCounter/DelBindingMenu',
    method: 'POST',
    data: {
      linkId,
      type,
      sequence,
      menuId
    }
  });
}
/**
 * 查询绑定到吧台的菜单
 *
 * @export
 * @param {Int} menuId    菜单Id
 * @returns
 */
export function getListMenuBindings(menuId) {
  return fetch({
    // baseURL: baseUrl,
    url: '/Query/Menu/ListMenuBindings',
    method: 'GET',
    params: {
      menuId
    }
  });
}
/**
 * 删除商品
 *
 * @export
 * @param {String} menuId
 * @param {String} nodeId
 * @param {String} products
 * @returns
 */
export function getDelProducts(menuId, nodeId, productIds) {
    return fetch({
        // baseURL: baseUrl,
        url: '/Menu/DelProducts',
        method: 'POST',
        data: {
            menuId,
            nodeId,
          productIds
        }
    });
}

/**
 * 获取商户所有的分类
 *
 * @export
 * @param {any} companyId
 * @returns
 */
export function getListProductClassByCompanyId (companyId = shopID) {
  return fetch({
    url: 'Query/ProductClass/ListProductClassByCompanyId',
    method: 'GET',
    params: {
      companyId
    }
  });
}
