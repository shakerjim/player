<style lang="less">
.login-body {
    height: 100vh;
    background-repeat: no-repeat;
    background-image: url('../../../static/images/home-bg.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .log-png {
        width: 234px;
        height: 202px;
    }
    .log-frame {
        margin-top: 100px;
        border: 5px solid #b9b9b9;
        border-radius: 5px;
        .login-input {
            padding-left: 10px;
            border-top: none;
            border-left: none;
            border-right: none;
            width: 490px;
            height: 60px;
        }
        .no-botttom {
            border-bottom: none;
        }
    }
    .warn-text {
        margin-top: 10px;
        padding-left: 10px;
        width: 500px;
        color: red;
        font-size: 14px;
    }
    .login-btn {
        margin-top: 20px;
        width: 500px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: white;
        background-color: #0b7042;
        border-radius: 5px;
        border: none;
        margin-bottom: 200px;
    }
    .hint-text {
        color: white;
        font-size: 14px;
        margin-bottom: 100px
    }
}
</style>
<template>
    <div class="login-body">
        <img src="../../../static/images/logo.png" alt="" class="log-png">
        <div class="log-frame">
            <input type="text" v-model="account" placeholder="请输入用户名" class="login-input"><br>
            <input type="password" v-model="password" placeholder="请输入密码" class="login-input no-botttom">
        </div>
        <div class="warn-text" v-show="showWarn">{{message}}</div>
        <button class="login-btn" @click="startLogin">登录</button>
        <div class="hint-text">星巴克体验店吧台管理</div>
    </div>
</template>
<<script>
import { login } from '@/api/login.js';

export default {
        data () {
            return {
                account: null,
                password: null,
                showWarn: false,
                message: null
            };
        },
        methods: {
            startLogin () {
                if (!this.account) {
                    this.showWarn = true;
                    this.message = '用户名不能为空';
                    return;
                } else if (!this.password) {
                    this.showWarn = true;
                    this.message = '密码不能为空';
                    return;
                };
                this.$store.commit('SHOWLOADING');
                login(this.account, this.password)
                .then(response => {
                     this.$store.commit('HIDELOADING');
                     if (response.data.statusCode === 100) {
                        // 存入session
                         sessionStorage.setItem('encryptToken', response.data.data.user.id);
                         this.$router.push({path: '/barback'});
                     } else {
                          this.showWarn = true;
                          this.message = response.data.message;
                     }
                })
                .catch(error => {
                  this.$Message.error(error.message);
                });
            }
        }
};
</script>

