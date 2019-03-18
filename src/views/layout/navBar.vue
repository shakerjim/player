<template>
  <Row class="navBar-wrapper" type="flex">
    <Col class="navBar-left" span="8">
    <img src="static/images/startbucks.png" />
    <span class="name">{{ $t('titlePlate.pcName') }}</span>
    </Col>
    <Col class="navBar-rigth" span="16">

      <i class="language" style="margin-right: 20px;cursor: pointer" @click="changeLanguage">
        <span v-if="lang === 'en-US'">
          <span class="cn selectLang">CN</span>/
          <span class="en">EN</span>
        </span>
        <span v-if="lang === 'zh-CN'">
          <span class="cn selectLang">EN</span>/
          <span class="en">CN</span>
        </span>
      </i>

      <Dropdown trigger="click" style="margin: 0 20px;">
        <a href="javascript:void(0)" @click="logout">
          {{ $t('titlePlate.logout') }}&nbsp;&nbsp;
          <Icon type="log-out"></Icon>
        </a>
      </Dropdown>
    </Col>
  </Row>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      lang: Vue.lang
    };
  },
  methods: {
    changeLanguage() {
      const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
      this.lang = lang;
      window.localStorage.setItem('language', lang);
      window.location.reload();
    },
    logout () {
      sessionStorage.removeItem('encryptToken');
      this.$router.push('/');
      this.$Message.success('成功登出！');
    }
  }
};
</script>

<style lang="less" scoped>
.navBar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 65px;
  background-color: #202020;
  .navBar-left {
    display: inline-block;
    padding: 16.5px 17.5px;
    font-size: 0;
    .name {
      margin-left: 17.5px;
      vertical-align: top;
      line-height: 40px;
      font-size: 14px;
      color: #FFF;
    }
  }
  .navBar-rigth {
    text-align: right;
    line-height: 65px;
    a {
      font-size: 14px;
      color: #FFF;
    }
    .language {
      font-style: normal;
      font-size: 14px;
      color: #FFF;
      .selectLang {
        font-size: 16px;
      }
    }
  }
}
</style>
