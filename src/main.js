// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable eol-last */

import Vue from 'vue';
import App from './App';
import zhLocale from 'iview/dist/locale/zh-CN';
import enLocale from 'iview/dist/locale/en-US';
import VueI18n from 'vue-i18n';
import router from './router';
import Locales from './language';
import iView from 'iview'; // 导入iView
import 'iview/dist/styles/iview.css'; // 使用 iView UI CSS
import stores from './store/store.js';

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(VueI18n);

// 设置语言
const lang = window.localStorage.getItem('language') || 'zh-CN';
Vue.lang = lang;
Vue.config.lang = lang;

// 多语言配置
const locales = Locales;
const mergeZH = Object.assign(zhLocale, locales['zh-CN']);
const mergeEN = Object.assign(enLocale, locales['en-US']);
Vue.locale('zh-CN', mergeZH);
Vue.locale('en-US', mergeEN);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store: stores,
    router,
    template: '<App/>',
    components: { App },
    created() {
        this.$Message.config({
            top: 75,
            duration: 3
        });
    }
});