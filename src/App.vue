<template>
  <div id="app">
    <div class="display-loading" v-show="showLoading">
      <Spin fix class="loading-text">
        <Icon type="load-c" size=30 class="icon-load"></Icon>
        <div class="icon-text">加载中...</div>
      </Spin>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: mapGetters([
    'showLoading'
  ])
};
</script>

<style lang="less" scoped>
#app {
  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
  ;
  font-family: 'Avenir',
  Helvetica,
  Arial,
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .display-loading {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999999;
    .loading-text {
      background-color: rgba(0, 0, 0, 0.6);
      .icon-load {
        animation: ani-loading 1s linear infinite;
        @keyframes ani-loading {
          from {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      }
      .icon-text {
        font-size: 14px;
      }
    }
  }
}
</style>
