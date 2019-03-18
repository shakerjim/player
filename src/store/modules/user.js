import {login} from '@/api/login';
// import Cookies from 'js-cookie';

const user = {
    state: {
        name: ''
    },
    mutations: {
        SET_NAME: (state, name) => {
            state.name = name;
        }
    },
    actions: {
        Login({commit}, userInfo) {
            const email = userInfo.email.trim();
            return new Promise((resolve, reject) => {
                login(email, userInfo.password).then(response => {
                    const data = response.data;
                    commit('SET_NAME', data.token);
                }).catch(error => {
                    reject(error);
                });
            });
        },
        // 前端 登出
        FedLogOut({ commit }) {
            return new Promise(resolve => {
            commit('SET_NAME', '');
            resolve();
            });
        }
    }

};

export default user;
