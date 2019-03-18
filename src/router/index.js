import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login = r => require.ensure([], () => r(require('@/views/home/login')));
const dashboard = r => require.ensure([], () => r(require('@/views/layout/dashboard')));
// 门店管理
const shopBarback = r => require.ensure([], () => r(require('@/views/shop/barback')));
// 门店商品管理
const goodsMenu = r => require.ensure([], () => r(require('@/views/goods/menu')));
const goodsList = r => require.ensure([], () => r(require('@/views/goods/list')));
const goodsInfo = r => require.ensure([], () => r(require('@/views/goods/info')));
const orderInfo = r => require.ensure([], () => r(require('@/views/order/orderInfo')));

const routes = [{
        path: '/',
        name: '',
        component: login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard,
        children: [
            {
                path: '/barback',
                name: '',
                component: shopBarback,
                meta: {
                    requireAuth: true,
                    metaName: ['merStore', 'barMan']
                }
            },
            {
                path: '/goodsMenu',
                name: 'goodsMenu',
                component: goodsMenu,
                meta: {
                    requireAuth: true,
                    metaName: ['merDishes', 'menuInfo']
                }
            },
            {
                path: '/goodsList',
                name: 'goodsList',
                component: goodsList,
                meta: {
                    requireAuth: true,
                    metaName: ['merDishes', 'goodInfo']
                }
            },
            {
                path: '/orderInfo',
                name: '',
                component: orderInfo,
                meta: {
                    requireAuth: true,
                    metaName: ['orderMan', 'orderInfo']
                }
            },
            {
                path: '/:shopId',
                name: '',
                component: goodsInfo,
                meta: {
                    requireAuth: true,
                    metaName: ['merDishes', 'goodInfo', 'goodDetail']
                }
            }
        ]
    }
];

/* eslint-disable eol-last */
 var router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (sessionStorage.getItem('encryptToken')) {
            next();
        } else {
            next({
                path: '/',
                query: {redirect: to.fullPath}
            });
        }
    } else {
        next();
    }
});

export default router;
