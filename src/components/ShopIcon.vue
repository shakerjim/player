<template>
  <div class="shop-icon">
      <span class="icon" :class="item"></span>
  </div>
</template>

<script>
    export default {
        props: {
          className: {
              type: String
          }
        }
    };
</script>

<style lang="less" scoped>
@import '@/styles/mixin.less';

    .shop-icon{
        font-size: 0;
        .icon{
            display: inline-block;
            vertical-align: top;
            width: 30px;
            height: 30px;
            margin-right: 4px;
            background-size: 30px 30px;
            background-repeat: no-repeat;
            &.baidu{
                .shop-icon('baidu');
            }
            &.element{
                .shop-icon('element');
            }
            &.meituan{
                .shop-icon('meituan');
            }
            &.jd{
                .shop-icon('jd');
            }

        }
    }
</style>