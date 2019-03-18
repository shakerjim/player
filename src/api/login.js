import fetch from '@/libs/fetch';

let baseUrl = 'http://115.159.124.30:8710/';
// let baseUrl = 'http://ommcht01api.stg.starbucks.net/';
/**
 * 用户登录
 *
 * @export
 * @param {String} email
 * @param {String} password
 * @returns
 */

/* eslint-disable eol-last */

export function login(account, password) {
    return fetch({
        baseURL: baseUrl,
        url: '/console/user/entity',
        method: 'GET',
        params: {
            account,
            password
        }
    });
}
