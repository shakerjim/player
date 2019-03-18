/* eslint-disable eol-last */

import { SHOWLOADING, HIDELOADING, EN, ZH } from './type.js';

const state = {
    showLoading: false,
    language: 'zh-CN'
};

const mutations = {
    [SHOWLOADING](state) {
        state.showLoading = true;
    },
    [HIDELOADING](state) {
        state.showLoading = false;
    },
    [EN](state) {
        state.language = 'en-US';
    },
    [ZH](state) {
        state.language = 'zh-CN';
    }
};

const getters = {
    showLoading(state) {
        return state.showLoading;
    },
    language(state) {
        return state.language;
    }
};

export default {
    state,
    mutations,
    getters
};