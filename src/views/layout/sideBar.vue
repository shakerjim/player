<style lang="less" scoped>
    .sideBar-menu{
        background: #191818;
        color: #87755b;
    }
    .sideBar-menu:after{
        width: 0 !important
    }
    .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
        color: #998466;
        border-right: 2px solid #2d8cf0;
        z-index: 2;
    }
    .ivu-icon-android-list{
        color:#a98e66;
    }
</style>

<template>
    <Menu class="sideBar-menu" :active-name="setActive" @on-select="routeTo"  width="auto" :open-names="['1']" accordion>
        <Submenu name="1">
            <template slot="title">
                <i class="iconfont icon-dianpu" :size="iconSize"></i>
                <span v-show="this.spanLeft !== 1">{{ $t('merStore') }}</span>
            </template>
            <!-- <Menu-item name="shoplist">{{ $t('storeMan') }}</Menu-item> -->
            <Menu-item name="barback">{{ $t('barMan') }}</Menu-item>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <i class="iconfont icon-dishes" :size="iconSize"></i>
                <span v-show="this.spanLeft !== 1">{{ $t('merDishes') }}</span>
            </template>
            <Menu-item name="goodsMenu">{{ $t('menuInfo') }}</Menu-item>
            <Menu-item name="goodsList">{{ $t('goodInfo') }}</Menu-item>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="android-list" size="16"></Icon>
                <span v-show="this.spanLeft !== 1">{{ $t('orderMan') }}</span>
            </template>
            <Menu-item name="orderInfo">{{ $t('orderInfo') }}</Menu-item>
        </Submenu>
    </Menu>
</template>

<script>
    export default {
        props: {
            iconSize: {
                type: Number,
                default: 24
            },
            spanLeft: {
                type: Number,
                default: 2
            }
        },
        data () {
            return {
                size: this.iconSize
            };
        },
        computed: {
            setActive () {
                return this.$route.path.replace('/', '');
            }
        },
        methods: {
            routeTo (e) {
               this.$router.push(e);
            }
        },
        created () {
        }
    };
</script>
