<style lang="less">
body{
    background: #eeeeee;
}
    .layout{
        background: #eeeeee;
        position: relative;
        overflow: hidden;
    }
    .en-layout-menu-right{
        margin-left: 220px;
        width: 100%;
    }
    .layout-menu-right{
        margin-left: 180px;
        width: 100%;
    }
    .en-menu {
        width: 220px !important;
    }
    .layout-menu-left{
        box-sizing:border-box;
        -moz-box-sizing:border-box; /* Firefox */
        -webkit-box-sizing:border-box; /* Safari */
        position: fixed;
        width: 180px;
        left: 0;
        padding-top: 65px;
        height: 100vh;
        background: #202020;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-breadcrumb{
        box-sizing:border-box;
        -moz-box-sizing:border-box; /* Firefox */
        -webkit-box-sizing:border-box; /* Safari */
        padding: 80px 15px 0;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-header{
        height: 50px;
        background: #d22e2e;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-header .ivu-btn-text{
        color: #FFF;
    }
    .layout-logo-left{
        width: 100%;
        padding: 12px 16px;
        box-sizing: border-box;
    }
    .layout-logo-left .demo-badge{
        width: 40px;
        height: 40px;
        background: #eee;
        border-radius: 50%;
        display: inline-block;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .layout-ceiling-main{
        height: 50px;
        line-height: 50px;
        float: right;
        margin-right: 15px;
        color: #FFF;
    }
    .layout-ceiling-main a{
        color: #fff;
        margin-left: 20px;
        font-size: 14px;
    }
    .ivu-badge-count{
      border-radius: 50%;
      width: 30px;
      height: 30px;
      text-align: center;
      top: 5px;
      right: 20px;
      padding: 0;
      line-height: 30px;
    }
    .ivu-checkbox-checked .ivu-checkbox-inner{
      background-color: #0b7042;
      border-color: #0b7042;
    }
    .ivu-page-item-active{
      background-color: #0b7042;
    }
    .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{
      background-color: #a98e66;
      color: #fff;
    }
    .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active{
      color: #a98e66;
      background-color: #fff;
    }
    .ivu-modal-header{
      height: 40px;
      padding: 12px 20px;
      background-color: #0b7042;
    }
    .ivu-modal-header p, .ivu-modal-header-inner{
      font-weight: 500;
      line-height: 16px;
      color: #fff;
    }
    .ivu-modal-close .ivu-icon-ios-close-empty{
      top: -3px;
      color: #fff;
    }
    .ivu-modal-close .ivu-icon-ios-close-empty:hover{
      color: #fff;
    }
    .ivu-radio-checked .ivu-radio-inner{
      border-color: #0b7042;
    }
    .ivu-radio-inner:after{
      background-color: #0b7042;
    }
    .ivu-input-small:hover{
      border-color: #0b7042;
    }
    .ivu-input-small:after{
      border-color: #0b7042;
    }
    .ivu-input{
      // border-color: #959595;
      // border-radius: 0;
    }
    .ivu-input:hover{
      // border-color: #959595;
    }
    .ivu-input:focus{
      // border-color: #959595;
      // box-shadow: 0 0 0 0 rgba(144,214,144,.5);
    }
    .ivu-date-picker-cells-cell-selected:hover em{
      background: #0b7042;
    }
    .ivu-date-picker-cells-cell-selected em, .ivu-date-picker-cells-cell-selected:hover em{
      background: #0b7042;
    }
    .ivu-date-picker-cells span em:hover{
      background: #90d690;
    }
    .ivu-date-picker-cells-cell-today em:after{
      background: #0b7042;
    }
    .ivu-btn-text{
      border-color: #0b7042;
      /*width: 80px;*/
      height: 30px;
      border-radius: 0;
      line-height: 16px;
    }
    .ivu-btn-text:hover{
      border-radius: 0;
      border-color: #0b7042;
      color: #333;
    }
    .ivu-btn-primary{
      background-color: #0b7042;
      border-color: #0b7042;
      width: 80px;
      border-radius: 0;
      height: 30px;
      line-height: 16px;
    }
    .ivu-picker-confirm>span {
      color:  #0b7042;
    }
    .ivu-picker-confirm>span:active{
      color:  #0b7042;
    }
    .ivu-picker-confirm>span:hover{
      color:  #0b7042;
    }
    .ivu-btn-primary:hover{
      background-color: #0b7042;
      border-radius: 0;
      border-color: #0b7042;
    }
    .ivu-modal-footer{
      border-top: none;
    }
    .ivu-radio-group{
      margin-left: 75px;
      margin-top: 5px;
    }
    .ivu-tag{
      background-color: #fff;
    }
    /*.ivu-tag .ivu-icon-ios-close-empty{*/
      /*color: #fff;*/
    /*}*/
    .vertical-center-modal{
      display: flex;
      align-items: center;
      justify-content: center;
      .ivu-modal{
        top: 0;
      }
    }
    .ivu-select-visible .ivu-select-selection{
      border-color: #333;
      box-shadow: 0 0 0 0 rgba(144,214,144,.5);
    }
    .ivu-select-selection:hover{
      border-color: #959595;
    }
    .ivu-select-selection{
      border-color: #959595;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
        <navBar></navBar>
        <Row type="flex" class="main">
            <i-col  :class=" lang === 'zh-CN' ? 'layout-menu-left' : 'layout-menu-left en-menu' ">
                <sideBar></sideBar>
            </i-col>
            <i-col :class=" lang === 'zh-CN' ? 'layout-menu-right' : 'en-layout-menu-right' " :iconSize="iconSize">
                  <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item >{{$t('home')}}</Breadcrumb-item>
                        <Breadcrumb-item v-for="(item,index) in $route.meta.metaName" :key="index">{{$t(item)}}</Breadcrumb-item>
                    </Breadcrumb>
                </div>

                <div class="layout-content">
                    <div class="layout-content-main">
                         <router-view>内容区域</router-view>
                    </div>
                </div>
                <!-- <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div> -->
            </i-col>
        </Row>
    </div>
</template>
<script>
    import { navBar, sideBar } from '@/views/layout';
    import Vue from 'vue';

    export default {
        components: {
            sideBar,
            navBar
        },
        data () {
            return {
                lang: Vue.lang,
                spanLeft: 2,
                spanRight: 22
            };
        },
        computed: {
            iconSize () {
                return this.spanLeft === 2 ? 24 : 28;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 2) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                    let menuDowns = document.querySelectorAll('.ivu-menu-submenu-title .ivu-menu-submenu-title-icon');
                    menuDowns.forEach(function(el) {
                        el.style.display = 'none';
                    }, this);
                } else {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                    let menuDowns = document.querySelectorAll('.ivu-menu-submenu-title .ivu-menu-submenu-title-icon');
                    menuDowns.forEach(function(el) {
                        el.style.display = 'block';
                    }, this);
                }
            }
        },
        created () {
        }
    };
</script>
