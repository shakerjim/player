<style lang="less" scoped>
  ::-webkit-scrollbar {
    width: 0px
  }

  ;
  .ivu-checkbox + span, .ivu-checkbox-wrapper + span {
    margin-right: 0;
  }

  .edit-type {
    .menu-title {
      font-size: 14px;
      margin-left: 34px;
      margin-top: 20px;
      margin-bottom: 12px;
    }
    .menu-content {
      .menu-sel {
        font-size: 14px;
        margin-left: 34px;
      }
      .bar-content {
        height: 110px;
        overflow-x: auto;
        overflow-y: scroll;
      }
    }
  }

  .edit-time p {
    margin-bottom: 10px;
    margin-top: 15px;
    span {
      font-size: 14px;
      margin-right: 15px;
    }
  }

  .menuInfo-wrapper {
    background-color: #eeeeee;
    .menuInfo-top {
      .active {
        color: #fff;
        background-color: #a98e66;
        border-color: #a98e66;
      }
      .btn2{
        float: right;
      }
    }
    .menuInfo-bottom {
      .box {
        padding-bottom: 40px;
        background-color: #fff;
        .box-top {
          p {
            font-size: 14px;
            font-weight: 600;
            color: #333;
            padding: 24px 20px;
            .main-name{
              display: block;
              width: 70%;
              text-overflow:ellipsis;
              white-space:nowrap;
              overflow: hidden;
              color: #333;
            }
            .edit1 {
              float: right;
              margin-top: -20px;
              color: #868686;
              font-weight: 500;
              font-size: 18px;
              cursor: pointer;
            }
          }
          .accordion {
            width: 100%;
            .minus-circled {
              color: #a4a4a4;
              float: right;
              height: 50px;
              line-height: 50px;
              padding-right: 20px;
              margin-top: -50px;
            }
            #link {
              height: 50px;
              cursor: pointer;
              line-height: 50px;
              padding-left: 35px;
              .limit-len{
                display: block;
                width: 65%;
                text-overflow:ellipsis;
                white-space:nowrap;
                overflow: hidden;
                color: #333;
              }
            }
            #link:hover{
              background-color: #f4dcb8;
            }
            .submenu li:hover {
              #actv {
                color: #333;
              }
              background-color: #f5e9d7;
            }
            .submenu li {
              height: 50px;
              line-height: 50px;
              padding-left: 50px;
              a {
                color: #a4a4a4;
              }
              #actv {
                display: block;
                width: 65%;
                text-overflow:ellipsis;
                white-space:nowrap;
                overflow: hidden;
              }
            }
            .submenu .addType-center {
              margin-top: 15px;
              padding-left: 45px;
              .add-type {
                background-color: #fff;
                color: #0b7042;
                border: none;
                margin-bottom: 35px;
              }
            }
          }
          .active {
            color: #333;
            background-color: #f4dcb8;
          }
          .active1 {
            #actv {
              color: #333;
            }
            background-color: #f5e9d7;
          }
          .add-center {
            margin-bottom: 95px;
            padding-left: 30px;
            .add-type {
              background-color: #fff;
              color: #0b7042;
              border: none;
              margin-top: 15px;
              margin-bottom: 35px;
            }
          }
        }
        .up-menu {
          background-color: #fff;
          position: relative;
          margin-top: 20px;
          ul {
            height: 168px;
            overflow-x: auto;
            overflow-y: scroll;
          }
          ul li {
            padding: 10px 20px;
            font-size: 14px;
            border-top: 1px solid #ebebeb;
            label {
              text-align: left;
            }
            .check {
              float: right;
            }
          }
          .click-btn {
            padding: 10px 20px;
            margin-bottom: 20px;
            font-size: 14px;
            border-top: 1px solid #ebebeb;
            .down {
              float: right;
              font-size: 16px;
              text-align: right;
              margin-right: 10px;
              margin-top: 2px;
            }
          }
        }
      }
      .content {
        background-color: #fff;
        // height: 775px;
        position: relative;
        .content-title {
          background-color: #fff;
          padding: 10px 15px;
          span {
            font-size: 14px;
            font-weight: 600;
          }
          .lab-time {
            margin-left: 30px;
          }
          .active {
            color: #0b7042;
          }
          .edit2 {
            color: #868686;
            font-weight: 500;
            font-size: 18px;
            cursor: pointer;
            margin-top: 20px;
            margin-left: 5px;
          }
        }
        .content-info {
          background-color: #fff;
          padding: 10px 15px;
          color: #333;
          .list {
            background-color: #fff;
            float: left;
            padding: 10px 10px 10px 10px;
            text-align: center;
            width: 219px;
            height: 250px;
            margin-bottom: 10px;
            margin-right: 55px;
            .list-icon {
              text-align: right;
              font-size: 16px;
              color: #a4a4a4;
              position: absolute;
              margin-left: 180px;
              display: none;
            }
            .list-img {
              margin-bottom: 10px;
              img {
                width: 159px;
                height: 160px;
              }
            }
            .list-content {
              p {
                width: 200px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 15px;
                margin-top: 5px;
                margin-bottom: 5px;
              }
              label {
                color: #6e6e6e;
              }
              span {
                font-size: 14px;
                font-weight: 600;
                margin-left: 5px;
                color: #333;
              }
            }
            .icon {
              margin-top: 30%;
              .icon-Plus {
                font-size: 64px;
                color: #0b7042;
                cursor: pointer;
              }
            }
          }
          .active {
            border: 1px solid #0b7042;
            .list-icon {
              display: block;
            }
          }
          .nav-page {
            clear: both;
            text-align: right;
            padding-top: 60px;
            margin-bottom: 60px;
            .btn {
              float: right;
              height: 31px;
              line-height: 26px;
              width: 88px;
              margin-top: -40px;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="menuInfo-wrapper">
    <Row>
      <Col span="24" style="margin-bottom: 15px;">
      <div class="menuInfo-top">
        <template>
          <Tag style="height: 31px;line-height: 31px;" v-for="(item,seled) in menu" :key="seled" :closable="closable"
               :name="item.name" :class="menuTag != null ? (menuTag == item.mid ? 'active' : '') : ''"
               @click.native="selFunc(seled)"
               @on-close="handleClose(mid=item.mid)">{{item.name}}
          </Tag>
          <Modal
            :title="$t('menuPage.addMenuBigCN')"
            v-model="modal1"
            :mask-closable="false"
            :width="480"
            class-name="vertical-center-modal"
            @on-ok="AddMenu">
            <div class="edit-type">
              <p class="menu-title">{{$t('menuPage.menuNameCN')}}</p>
              <div class="menu-content">
                <Input :placeholder="$t('menuPage.InputMenuNameCN')"  :maxlength="language" v-model="menuName"
                       style="width: 376px;margin-left: 34px;margin-bottom: 30px;"/>
                <p class="menu-sel">{{$t('menuPage.barCounterCN')}}</p>
                <div class="bar-content">
                  <CheckboxGroup v-for="bar in bars" v-model="defaultBarName" :key="bar.storeId"
                                 style="margin-left: 34px;margin-top: 14px;"
                                 @on-change="barFunc(bar.storeId, bar.partnerId, bar.storeCode)">
                    <Checkbox :label="bar.storeName" style="float: left;margin: 10px 20px 5px 0px;">
                    </Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
            </div>
          </Modal>
          <Button type="success" icon="plus" class="btn2" style="float: right;background-color:#0b7042;"
                  @click="openEdit()" v-if="openBtn">{{$t('menuPage.editMenuCN')}}
          </Button>
          <Button type="success" icon="plus" class="btn2" style="float: right;background-color:#0b7042;" disabled
                  v-if="disableBtn">{{$t('menuPage.editMenuCN')}}
          </Button>
          <Button class="btn1" icon="ios-plus-empty" type="dashed" style="color:#0b7042;border: 1px solid #0b7042;"
                  v-if="addMenuBtn" @click="modal1 = true">{{$t('menuPage.addMenuCN')}}
          </Button>
        </template>
      </div>
      </Col>
    </Row>
    <div class="menuInfo-bottom">
      <Row :gutter="16">
        <Col span="4">
        <div class="box">
          <div class="box-top">
            <p><a class="main-name" :title="mainName">{{mainName}}</a>
              <Icon type="android-create" class="edit1" @click.native="modal3 = true" v-if="editMenuIcon"></Icon>
            </p>
            <Modal
              :title="$t('menuPage.editMenuBigCN')"
              v-model="modal3"
              :mask-closable="false"
              :width="480"
              class-name="vertical-center-modal"
              @on-ok="EditMenu">
              <div class="edit-type">
                <p class="menu-title">{{$t('menuPage.menuNameCN')}}</p>
                <div class="menu-content">
                  <Input :placeholder="$t('menuPage.InputMenuNameCN')" :maxlength="language" v-model="editName"
                         style="width: 376px;margin-left: 34px;margin-bottom: 30px;"/>
                </div>
              </div>
            </Modal>
            <ul class="accordion" v-for="(filter, index) in filters" :key="index">
              <li>
                <div id="link" :class="selected != null ? (selected == filter.nid ? 'active' : '') : ''"
                     @click="selectFunc(index)" :key="index"><a :title="filter.name" class="limit-len">{{filter.name}}</a>
                  <Icon type="android-remove-circle" class="minus-circled" v-if="delTypeIcon" @click.native.self="delTypeFunc(nid=filter.nid, menuId=filter.menuId, num=1)"></Icon>
                </div>
                <ul class="submenu" v-if="gather == index">
                  <li v-for="(category, cate) in filter.categories" :key="cate"
                      :class="sign != null && cated != null ? (cated == category.nid ? 'active1' : '') : ''"
                      @click="selectFilter(cate, index)"><a id="actv" :title="category.name">{{category.name}}</a>
                    <Icon type="minus-circled" class="minus-circled" v-if="delTypeIcon" @click.native.self="delTypeFunc(nid=category.nid, menuId=category.menuId, num=2)"></Icon>
                  </li>
                  <div class="addType-center">
                    <Button type="success" icon="plus" size="small" class="add-type" @click="modal5 = true "
                            v-if="addTypeBtn2">{{$t('menuPage.addCategoryCN1')}}
                    </Button>
                    <Modal
                      :title="$t('menuPage.addMenuTypeCN1')"
                      v-model="modal5"
                      :mask-closable="false"
                      :width="480"
                      class-name="vertical-center-modal"
                      @on-ok="AddNode(2)">
                      <div class="edit-type">
                        <p class="menu-title">{{$t('menuPage.menuTypeNameCN1')}}</p>
                        <div class="menu-content">
                          <Select style="width: 376px;margin-left: 34px;margin-bottom: 30px;" v-model="addTypeName" filterable>
                              <Option v-for="item in typeList" :value="item.name + '_' + item.code" :key="item.value">{{ item.label }}</Option>
                          </Select>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </ul>
              </li>
            </ul>
            <div class="add-center">
              <Button type="success" icon="plus" size="small" class="add-type" @click="modal2 = true "
                      v-if="addTypeBtn1">{{$t('menuPage.addCategoryCN')}}
              </Button>
              <Modal
                :title="$t('menuPage.addMenuTypeCN')"
                v-model="modal2"
                :mask-closable="false"
                :width="480"
                class-name="vertical-center-modal"
                @on-ok="AddNode(1)">
                <div class="edit-type">
                  <p class="menu-title">{{$t('menuPage.menuTypeNameCN')}}</p>
                  <div class="menu-content">
                    <Select style="width: 376px;margin-left: 34px;margin-bottom: 30px;" v-model="addTypeName" filterable>
                        <Option v-for="item in typeList" :value="item.name + '_' + item.code" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div class="up-menu" v-if="showBar">
            <ul>
              <li v-for="bar in bars" :key="bar.storeId">
                <!-- Twitch -->
                <label>{{bar.storeName}}</label>
                <Checkbox :value="bar.menu == mid ? true : false" class="check"
                          @on-change="copyFunc(bar.menu == mid ? true : false, mid, bar.partnerId, bar.storeCode)"></Checkbox>
              </li>
            </ul>
            <div class="click-btn"><label>{{$t('menuPage.barCounterCN')}}</label>
              <Icon type="arrow-down-b" class="down"></Icon>
            </div>
          </div>
        </div>
        </Col>
        <Col span="20">
        <div class="content">
          <div class="content-title">
            <span>{{nodeName}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;<b v-if="hide">>></b>&nbsp;&nbsp;&nbsp;&nbsp;<span v-if="hideLowerName">{{lowerName ? lowerName : ''}}</span>
            <tag style="float: right;border: 0;background-color: red;color: #fff;" v-if="recod" @click.native="RecommendShop()"><b>{{$t('menuPage.recodShopName')}}</b></tag>
            <tag style="float: right;border: 0;background-color: #fff;color: red;" v-if="recod1" @click.native="RecommendShop()"><b>{{$t('menuPage.recodShopName')}}</b></tag>
          </div>
          <div class="content-info">
            <div class="scroll-content">
              <div class="list" v-for="(list, indx) in lists" :key="indx" :class="{'active':ind === indx}"
                   @click="showFunc(indx)">
                <div class="list-icon">
                  <Icon type="close-circled" v-if="reveal" @click.native="removeShop(list.pid)"></Icon>
                </div>
                <div class="list-img">
                  <img v-bind:src="list.picture">
                </div>
                <div class="list-content">
                  <p>{{list.name}}</p>
                  <label>{{$t('menuPage.codeCN')}}：{{list.customerCode}}</label>
                  <span><Icon type="social-yen"></Icon>{{list.originalPrice / 100}}</span>
                </div>
              </div>
            </div>
            <div class="list" v-if="addShopIcon">
              <div class="icon">
                <Icon type="ios-plus-empty" class="icon-Plus" @click.native="addShop"></Icon>
              </div>
            </div>
            <div class="nav-page">
              <Button type="success" size="small" style="background-color: #0b7042;" class="btn" v-if="okBtn"
                      @click="okFunc()">{{$t('menuPage.okCN')}}
              </Button>
              <Page :total="total" show-total :current="pageNumber" v-if="showPage" :page-size="12" show-elevator size="small"
                    @on-change="changePage"></Page>
            </div>
          </div>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  /**
   * import引入对应的接口
   * 查询菜单列表、查询单个菜单分类下商品、查询单个菜单的整个树、添加菜单名字、编辑菜单名字、删除菜单名字、添加菜单分类名、删除菜单分类以及分类下商品、绑定菜单到指定的吧台、查询菜单绑定的吧台、解除绑定菜单到指定的吧台、删除商品
   */
  import {
    getListMenu,
    getListShop,
    ListChildrenType,
    getAddMenu,
    getEditMenu,
    getDelMenu,
    getAddNode,
    getDelNode,
    getBindingMenu,
    getListMenuBindings,
    getDelBindingMenu,
    getDelProducts,
    getListProductClassByCompanyId
  } from '@/api/shopMenu.js';
  import {getShop} from '@/api/shop.js';

  export default {
    data() {
      return {
        // 编辑模式启用: 修改菜单分类名称、修改菜单分类下级名称、隐藏菜单分类下级名称、添加商品、添加菜单名称、添加菜单分类名称、删除商品、修改菜单名称、删除菜单分类名称
        hideLowerName: false,
        addShopIcon: false,
        addMenuBtn: false,
        addTypeBtn1: false,
        addTypeBtn2: false,
        reveal: false,
        editMenuIcon: false,
        delTypeIcon: false,
        // 编辑模式显示隐藏块：数量、分页、左下角吧台模块、分类、分割符
        showTotal: true,
        showPage: true,
        showBar: false,
        hide: false,
        // 开启编辑模式按钮
        openBtn: true,
        // 开启编辑模后按钮禁用
        disableBtn: false,
        // 结束编辑模式按钮
        okBtn: false,
        // 页面for循环的各个列表：吧台、菜单、分类、商品、吧台Id
        bars: [],
        menu: [],
        filters: [],
        tabs: [],
        lists: [],
        barId: [],
        // 输入框value: 添加菜单名称、添加菜单分类名称、修改菜单名称、修改菜单分类名称
        menuName: '',
        addTypeName: null,
        editName: '',
        setName: '',
        // 页面显示: 菜单名、菜单分类名称、菜单分类下级名称
        mainName: '',
        nodeName: '',
        lowerName: '',
        // 弹窗：添加菜单、添加菜单分类、编辑菜单、编辑菜单分类、售卖时间
        modal1: false,
        modal2: false,
        modal3: false,
        modal5: false,
        // 选中：菜单分类、Modal属性（右上角关闭）、商品、菜单
        selected: null,
        cated: 0,
        closable: false,
        ind: '',
        menuTag: null,
        // 存储接口拿到的数据
        total: 0,
        lowerNid: '',
        mid: '',
        menuId: '',
        nid: '01',
        sequence: 0,
        seq: 0,
        type: 3,
        linkId: '379d1f5c-7a60-458f-9f9b-4fd271003fca_300001213',
        deep: 3,
        pageSize: 12,
        pageNumber: 1,
        productIds: [],
        defaultBarName: [],
        gather: null,
        partnerId: null,
        sign: null,
        language: 8,
        classIndex: 0,
        typeList: [],
        recod: false, // 隐藏推荐商品
        recod1: false, // 隐藏推荐商品
        publicId: null // 添加商品是传的id
      };
    },
    methods: {
      // 获取所有的商品
      AllShop(menuId) {
        getListShop(menuId, '01', 10, 12, 1).then(response => {
          if (response.data.data.count > 0) { // 当存在商品时，显示推荐商品按钮
            response.data.data.result.forEach(function (dataItem) {
              if (dataItem.picture == '') {
                dataItem.picture = require('../../assets/img/imgerror.jpg');
              }
            }, this);
            this.recod = true;
            this.recod1 = false;
            if (response.data.data.count == 1) {
              window.localStorage.setItem('lists', JSON.stringify(response.data.data.result));
            } else {
              window.localStorage.setItem('lists', JSON.stringify(response.data.data.result.slice(0, 2)));
            }
          } else {
            this.recod = false;
            this.recod1 = false;
          }
        }).catch(error => {
          console.log(error);
        });
      },
      // 获取当前分类下的推荐商品
      RecommendShop() {
        let lists = window.localStorage.getItem('lists');
        this.lists = JSON.parse(lists);
        this.showPage = false;
        this.cated = '';
        this.selected = '';
        this.gather = null;
        this.recod = false;
        this.recod1 = true;
      },
      // 获取所有分类名
      getAllTypes () {
        getListProductClassByCompanyId().then(response => {
          let res = response.data;
          if (res.errcode == 100) {
            res.data.forEach(function(item) {
              item.label = item.name;
              item.value = item.name;
              this.typeList.push(item);
            }, this);
          } else {
            this.$Message.info('查询门店所有分类失败！');
          }
        }).catch(error => {
          console.log('异常错误：', error);
        });
      },
      // 获取所有的菜单
      ListMenu(num) {
        this.$store.commit('SHOWLOADING');
        getListMenu().then(response => {
          var menus = response.data.data;
          var errcode = response.data.errcode;
          if (errcode === 100) {
            menus.forEach(function (item) {
              if (item.name != '') {
                if (item.sequence != 0) {
                  this.menu.push({
                    name: item.name,
                    mid: item.mid,
                    type: item.type,
                    linkId: item.linkId,
                    seq: item.sequence
                  });
                }
              }
            }, this);
            if (this.menu.length > 0) {
              if (num == 1) {
                this.AllShop(this.menu[0].mid);
                this.mid = this.menu[0].mid;
                this.type = this.menu[0].type;
                this.linkId = this.menu[0].linkId;
                this.seq = this.menu[0].seq;
                if (this.isEmptyObject(this.$route.params) == true) {
                  this.mainName = this.menu[0].name;
                  this.menuTag = this.menu[0].mid;
                  this.filters = [];
                  this.showChildrenType(1);
                }
              } else if (num == 2) { // 菜单添加成功查询，选中当前添加的菜单
                let len = this.menu.length - 1;
                let mid = this.menu[len].mid;
                let mainName = this.menu[len].name;
                this.seq = this.menu[len].seq;
                this.menuTag = mid;
                this.mainName = mainName;
                this.nodeName = '';
                this.closeEdit();
                this.filters = [];
                this.lists = [];
                if (len < 1) {
                  this.menu = [];
                  this.ListMenu(1);
                }
              } else if (num == 3) { // 修改成功查询，选中当前修改的菜单
                this.menuTag = this.mid;
                let menu = this.menu;
                menu.forEach(function (i) {
                  if (i.mid == this.menuTag) {
                    this.mainName = i.name;
                  }
                }, this);
                this.filters = [];
                this.showChildrenType(1);
              }
            } else {
              this.showTotal = false;
              this.showPage = false;
              this.$Message.info(this.$t('menuPage.noInfoCN'));
            }
          }
        }).catch(error => {
          alert(error);
        });
        this.$store.commit('HIDELOADING');
      },
      // 判断对象是否为空
      isEmptyObject(e) {
        var t;
        for (t in e) {
          return !1;
        }
        return !0;
      },
      // 获取所有吧台信息
      GetShop() {
        getShop(1, 4).then(response => {
          let res = response.data.data;
          res.forEach(function (item) {
            this.bars.push({
              storeName: item.storeName,
              storeId: item.storeId,
              partnerId: item.partnerId,
              storeCode: item.storeCode,
              menu: []
            });
          }, this);
          if (this.isEmptyObject(this.$route.params) == false) {
            if (this.$route.params.goTo == 'barback') {
              this.defaultBarName.push(this.$route.params.storeName);
              this.modal1 = true;
              this.barId.push(this.$route.params.partnerId + '_' + this.$route.params.storeCode);
            }
          } else {
//            console.log('默认选中吧台失败');
          }
        }).catch(error => {
          alert(error);
        });
      },
      // 获取单个菜单下的分类
      showChildrenType(num) {
        let linkId = '379d1f5c-7a60-458f-9f9b-4fd271003fca';
        let type = 2;
        let sequence = this.seq;
        ListChildrenType(linkId, type, sequence).then(response => {
          let categories = response.data.data;
          var errcode = response.data.errcode;
          if (errcode === 100) {
            if (this.isEmptyObject(this.$route.params) == true && num == 1) {
              this.lists = [];
              this.ListShop(1);
            }
            this.ListMenuBindings();
            if (categories == []) {
              this.deep = 1;
            } else {
              categories.rootNode.children.forEach(function (category) {
                let arrays = [];
                category.children.forEach(function (child) {
                  arrays.push({
                    name: child.name,
                    level: child.level,
                    nid: child.nid,
                    menuId: child.menuId
                  });
                });
                this.filters.push({
                  name: category.name,
                  level: category.level,
                  nid: category.nid,
                  menuId: category.menuId,
                  categories: arrays
                });
              }, this);
              if (this.filters.length > 0) {
                if (num == 1) {
                  if (this.isEmptyObject(this.$route.params) == true) {
                    this.selected = this.filters[0].nid;
                    this.nodeName = this.filters[0].name;
                  } else {
                    if (this.$route.params.goTo != 'barback') {
                    } else {
                      this.nodeName = '';
                    }
                  }
                } else if (num == 2) { // 添加成功查询，选中当前添加的菜单分类
                  if ((this.isEmptyObject(this.$route.params) == false)) {
                    this.lists = [];
                    this.showPage = false;
                    this.showTotal = false;
                    this.filters = [];
                    this.BackCategory(Number(window.localStorage.getItem('seq')), 0, this.mid, '0101');
                  } else {
                    let len = this.filters.length - 1;
                    this.classIndex = len;
                    let nid = this.filters[len].nid;
                    let nodeName = this.filters[len].name;
                    this.selected = nid;
                    this.nid = nid;
                    this.nodeName = nodeName;
                    this.lists = [];
                    this.total = 0;
                  }
                } else if (num == 3) { // 修改成功查询，选中当前修改的菜单
                  this.selected = this.nid;
                  let filters = this.filters;
                  filters.forEach(function (i) {
                    if (i.nid == this.selected) {
                      this.nodeName = i.name;
                    }
                  }, this);
                } else if (num == 4) { // 添加分类的子分类成功，页面展示处理
                  if ((this.isEmptyObject(this.$route.params) == false)) {
                    this.lists = [];
                    this.showPage = false;
                    this.showTotal = false;
                    this.filters = [];
                    this.BackCategory(Number(window.localStorage.getItem('seq')), 0, this.mid, '0101');
                  } else {
                    let len = this.filters[this.classIndex].categories.length - 1;
                    let nid = this.filters[this.classIndex].categories[len].nid;
                    let lowerName = this.filters[this.classIndex].categories[len].name;
                    this.sign = 1;
                    this.cated = nid;
                    this.lowerNid = nid;
                    this.lowerName = lowerName;
                    this.hide = true;
                    this.lists = [];
                    this.total = 0;
                  }
                } else if (num == 6) {
                  if (this.isEmptyObject(this.$route.params) == true) {
                    if (this.filters[this.classIndex].categories.length != 0 && this.disableBtn == true) {
                      this.addTypeBtn2 = true;
                      this.addShopIcon = false;
                    }
                  } else {
                    this.lowerName = '';
                    this.cated = this.filters[0].categories[0].nid;
                    this.lowerName = this.filters[0].categories[0].name;
                    this.ListShop(1);
                  }
                }
                if (this.disableBtn == true) { // 启用编辑模式后
                  if (this.lowerName) {
                    this.hideLowerName = true;
                  }
                  if (this.filters[this.classIndex].categories.length != 0) {
                    this.addShopIcon = false;
                  }
                }
                if (this.lowerName && this.disableBtn == false) {
                  this.hide = false;
                }
              } else {
                this.nodeName = '';
                this.lists = [];
                this.showTotal = false;
                this.hideLowerName = false;
                this.addShopIcon = false;
              }
            }
          }
        }).catch(error => {
          alert(error);
        });
      },
      // 分页
      changePage(page) {
        if (this.isEmptyObject(this.$route.params) == false) {
          this.mid = this.$route.params.menuId;
          this.nid = this.$route.params.nodeId;
        }
        this.pageNumber = page;
        this.ListShop(1);
      },
      // 获取菜单下的商品
      ListShop(num) {
        var menuId = this.mid;
        if (num == 1) {
          var nodeId = this.nid;
          if (nodeId != '01') {
            nodeId = this.nid;
          } else {
            nodeId = '0101';
          }
          this.selected = this.nid;
        } else {
          nodeId = this.lowerNid;
          if (nodeId != '010101') {
            nodeId = this.lowerNid;
          } else {
            nodeId = '010101';
          }
          this.cated = this.lowerNid;
        }
        this.publicId = nodeId;
        var deep = 1;
        var pageSize = this.pageSize;
        var pageNumber = this.pageNumber;
        this.lists = [];
        getListShop(menuId, nodeId, deep, pageSize, pageNumber).then(response => {
          let data = response.data.data;
          var errcode = response.data.errcode;
          if (errcode === 100) {
            this.total = data.count;
            if (this.total != 0) {
              data.result.forEach(function (dataItem) {
                if (dataItem.picture == '') {
                  dataItem.picture = require('../../assets/img/imgerror.jpg');
                }
                this.lists.push({
                  picture: dataItem.picture,
                  name: dataItem.name,
                  customerCode: dataItem.customerCode,
                  originalPrice: dataItem.originalPrice,
                  pid: dataItem.pid
                });
              }, this);
              this.showTotal = true;
              if (data.count > 12) {
                this.showPage = true;
              } else {
                this.showPage = false;
              }
            } else {
              if (nodeId.length < 6 && this.disableBtn == true) {
                this.addTypeBtn2 = true;
              }
              this.showTotal = false;
              this.showPage = false;
            }
          }
        }).catch(error => {
          console.log(error);
        });
      },
      // 添加门店的菜单
      AddMenu() {
        var name = this.menuName;
        let menu = this.menu;
        let bool = true;
        menu.forEach(function (item) {
          if (item.name == name) {
            bool = false;
            this.$Message.warning(this.$t('menuPage.addDifMenuCN'));
          }
        }, this);
        if (name != '') {
          if (bool) {
            getAddMenu(name).then(response => {
              var errcode = response.data.errcode;
              if (errcode === 100) {
                this.sequence = response.data.data.sequence;
                this.mid = response.data.data.mid;
                this.BindingMenu();
                this.menu = [];
                this.ListMenu(2);
                window.localStorage.setItem('seq', this.sequence);
              }
            }).catch(error => {
              alert(error);
            });
          }
        } else {
          this.$Message.warning(this.$t('menuPage.nullMenuNameCN'));
        }
      },
      // 编辑门店的菜单
      EditMenu() {
        var name = this.editName;
        var mid = this.mid;
        let menu = this.menu;
        let bool = true;
        menu.forEach(function (item) {
          if (item.name == name) {
            bool = false;
            this.$Message.warning(this.$t('menuPage.editMenuExistCN'));
          }
        }, this);
        if (name != '') {
          if (bool) {
            getEditMenu(mid, name).then(response => {
              var errcode = response.data.errcode;
              if (errcode === 100) {
                this.$Message.success(this.$t('menuPage.editMenuSuccessCN'));
                this.menu = [];
                this.ListMenu(3);
              }
            }).catch(error => {
              this.$Message.error(error);
            });
          }
        } else {
          this.$Message.warning(this.$t('menuPage.nullMenuNameCN'));
        }
      },
      // 删除门店的菜单
      DelMenu() {
        var shopId = this.linkId;
        var menuId = this.mid;
        getDelMenu(shopId, menuId).then(response => {
          var errcode = response.data.errcode;
          if (errcode === 100) {
            setTimeout(() => {
              this.$Modal.remove();
              this.$Message.success(this.$t('menuPage.delMenuSuccessCN'));
              this.menuTag = this.menu[0].mid;
              this.menu = [];
              this.mainName = '';
              this.nodeName = '';
              this.lowerName = '';
              this.recod = false;
              this.hide = false;
              this.filters = [];
              this.ListMenu(1);
              this.lists = [];
              this.closeEdit();
            }, 2000);
          }
        }).catch(error => {
          alert(error);
        });
      },
      // 添加菜单分类名称
      AddNode(num) {
        let newAddType = this.addTypeName.split('_');
        var menuId = this.mid;
        var name = newAddType[0];
        var type = newAddType[1];
        let filter = this.filters;
        let bool = true;
        if (num == 1) { // 添加一级菜单分类
          var addDifCategoryCN = this.$t('menuPage.addDifCategoryCN');
          var addTypeSuccessCN = this.$t('menuPage.addTypeSuccessCN');
          var nullMenuTypeCN = this.$t('menuPage.nullMenuTypeCN');
          // var type = this.type;
          var parentId = '01';
          filter.forEach(function (item) {
            if (item.name == name) {
              bool = false;
              this.$Message.warning(addDifCategoryCN);
            }
          }, this);
        } else {
          addDifCategoryCN = this.$t('menuPage.addDifCategoryCN1');
          addTypeSuccessCN = this.$t('menuPage.addTypeSuccessCN1');
          nullMenuTypeCN = this.$t('menuPage.nullMenuTypeCN1');
          // type = 3;
          parentId = this.partnerId;
          if (filter[this.classIndex].categories.length != 0) {
            filter[this.classIndex].categories.forEach(function (item) {
              if (item.name == name) {
                bool = false;
                this.$Message.warning(addDifCategoryCN);
              }
            }, this);
          }
        }
        if (name != '') {
          if (bool) {
            if (this.isEmptyObject(this.$route.params) == false) {
              menuId = this.$route.params.menuId;
            }
            getAddNode(menuId, parentId, name, type).then(response => {
              var errcode = response.data.errcode;
              if (errcode === 100) {
                this.$Message.success(addTypeSuccessCN);
                if (num == 1) {
                  this.filters = [];
                  this.showChildrenType(2);
                } else {
                  this.filters = [];
                  this.showChildrenType(4);
                }
              }
            }).catch(error => {
              this.$Message.error(error);
            });
          }
        } else {
          this.$Message.warning(nullMenuTypeCN);
        }
      },
      // 删除菜单分类
      DelNode(num, nid) {
        var nodeId = nid;
        var menuId = this.menuId;
        var delChildren = true;
        getDelNode(menuId, nodeId, delChildren).then(response => {
          var errcode = response.data.errcode;
          if (errcode === 100) {
            setTimeout(() => {
              this.$Modal.remove();
              this.$Message.success(this.$t('menuPage.delMenuCategoryCn'));
              if (num == 1) {
                this.filters = [];
                this.BackCategory(this.seq, this.classIndex, this.mid, nid);
                this.addShopIcon = false;
              }
            }, 100);
          }
        }).catch(error => {
          alert(error);
        });
      },
      // 绑定菜单到指定的吧台
      BindingMenu() {
        var barId = this.barId;
        var menuId = this.mid;
        var sequence = this.sequence;
        if (barId) {
          getBindingMenu(barId, menuId, sequence).then(response => {
            var errcode = response.data.errcode;
            if (errcode === 100) {
              if (this.$route.params.goTo == 'barback') {
//                this.$router.go(-1);
              }
              this.$Message.success(this.$t('menuPage.addMenuSuccessCN'));
            }
          }).catch(error => {
            this.$Message.error(error);
          });
        }
      },
      // 查询绑定到吧台的菜单
      ListMenuBindings() {
        var menuId = this.mid;
        getListMenuBindings(menuId).then(response => {
          var barData = response.data.data;
          var errcode = response.data.errcode;
          if (errcode === 100) {
            // 提取门店ID，绑定了的菜单
            barData.forEach(function (item) {
              let linkId = item.linkId;
              let menuId = item.menuId;
              this.bars.forEach(function (bar) {
                if (bar.partnerId + '_' + bar.storeCode == linkId) {
                  bar.menu = menuId;
                }
              }, this);
            }, this);
          }
        }).catch(error => {
          alert(error);
        });
      },
      // 绑定菜单到指定的吧台（修改）
      EditBindingMenu() {
        var barId = [this.barId];
        var menuId = this.mid;
        var sequence = this.seq;
        if (barId) {
          getBindingMenu(barId, menuId, sequence).then(response => {
            var errcode = response.data.errcode;
            if (errcode === 100) {
              this.$Message.success(this.$t('menuPage.bindSuccessCN'));
              this.ListMenuBindings();
            }
          }).catch(error => {
            this.$Message.error(error);
          });
        }
      },
      DelBindingMenu() {
        var barIdDel = '';
        barIdDel = this.barId;
        var menuId = this.mid;
        var type = 3;
        var sequence = this.seq;
        if (barIdDel) {
          getDelBindingMenu(barIdDel, type, sequence, menuId).then(response => {
            var errcode = response.data.errcode;
            if (errcode === 100) {
              this.ListMenuBindings();
              this.$Message.success(this.$t('menuPage.tieSuccessCN'));
            }
          }).catch(error => {
            console.log(error);
          });
        }
      },
      // 点击处理--获取选中菜单分类下的商品
      selectFilter(cate, index) {
        this.list = [];
        this.sign = 1;
        this.lowerName = (this.filters[index].categories[cate]).name;
        if (this.lowerName) {
          this.hide = true;
          this.hideLowerName = true;
          if (this.disableBtn == true) {
            this.addShopIcon = true;
          }
        }
        this.lowerNid = (this.filters[index].categories[cate]).nid;
        this.mid = (this.filters[index].categories[cate]).menuId;
        this.cated = (this.filters[index].categories[cate]).nid;
        this.lists = []; // 清除之前初始化列表数据
        this.pageNumber = 1;
        this.ListShop(2);
        if (this.isEmptyObject(this.$route.params) == false && this.cated != this.$route.params.lowerNId) {
          this.lowerNid = this.lowerNid;
          this.lowerName = this.lowerName;
        }
      },
      selectFunc(index) {
        this.lists = [];
        this.classIndex = index;
        if (this.sign) {
          this.sign = null;
        }
        this.lowerName = '';
        this.hideLowerName = false;
        this.hide = false;
        if (this.gather == index) {
          this.gather = null;
        } else {
          this.gather = index;
          this.hide = false;
          this.hideLowerName = false;
        }
        this.nodeName = this.filters[index].name;
        this.nid = this.filters[index].nid;
        this.mid = this.filters[index].menuId;
        this.selected = this.filters[index].nid;
        this.partnerId = this.selected;
        if (this.filters) {
          if (this.filters[index].categories) {
            if (this.filters[index].categories.length != 0) {
              this.addShopIcon = false;
              if (this.disableBtn == true) {
                this.addTypeBtn2 = true;
              }
            } else {
              if (this.disableBtn == true && this.lists != []) {
                this.addShopIcon = true;
                this.addTypeBtn2 = false;
              }
            }
          }
        }
        this.lists = []; // 清除之前初始化列表数据
        this.pageNumber = 1;
        this.ListShop(1);
        if (this.isEmptyObject(this.$route.params) == false && this.selected == this.$route.params.nodeId) {
          this.hideLowerName = true;
          let classIndex = index;
          if (this.filters[classIndex].categories.length != 0) {
            this.cated = this.$route.params.lowerNId;
            this.lowerName = this.$route.params.lowerName;
            this.sign = 1;
            this.lists = [];
            this.BackShop(this.$route.params.menuId, this.cated);
            this.lowerNid = this.cated;
            this.menuId = this.$route.params.menuId;
          } else {
            this.hide = false;
          }
          if (this.lowerName == '') {
            this.hide == false;
          }
          this.nid = this.nid;
          this.nodeName = this.nodeName;
          this.classIndex = this.classIndex;
          this.$route.params.lowerNId = '';
        }
      },
      // 启用编辑模式
      openEdit() {
        if (this.nid == '01') {
          this.nid = '0101';
        }
        this.disableBtn = true;
        this.openBtn = false;
        if (this.mainName != '') {
          this.editMenuIcon = true;
          this.addTypeBtn1 = true;
          this.addTypeBtn2 = true;
          this.showBar = true;
        }
        if (this.lists.length != 0) {
          this.addShopIcon = true;
          if (this.filters.length != 0) {
            if (this.filters[this.classIndex].categories.length != 0) {
              this.addShopIcon = true;
              this.addTypeBtn2 = true;
            } else {
              this.addTypeBtn2 = false;
            }
          }
        } else {
          if (this.filters.length != 0) {
            if (this.filters[this.classIndex].categories.length == 0) {
              this.addShopIcon = true;
            }
            if (this.hideLowerName == true) {
              this.addShopIcon = true;
            }
          }
        }
        this.addMenuBtn = true;
        this.delTypeIcon = true;
        this.closable = true;
        this.okBtn = true;
        if (this.isEmptyObject(this.$route.params) == false) {
          this.AllShop(this.mid);
          if (this.$route.params.sequence == Number(window.localStorage.getItem('seq'))) {
            this.seq = Number(window.localStorage.getItem('seq'));
          } else {
            this.seq = this.seq;
          }
        }
      },
      // 取消编辑模式
      closeEdit() {
        this.showBar = false;
        this.openBtn = true;
        this.addMenuBtn = false;
        this.disableBtn = false;
        this.addTypeBtn1 = false;
        this.addTypeBtn2 = false;
        this.editMenuIcon = false;
        this.addShopIcon = false;
        this.okBtn = false;
        this.closable = false;
        this.delTypeIcon = false;
        this.ind = '';
        this.reveal = false;
      },
      // 选中所属吧台的Id
      copyFunc(isCheck, mid, partnerId, storeCode) {
        this.barId = partnerId + '_' + storeCode;
        this.mid = mid;
        if (isCheck == false) {
          this.$Modal.confirm({
            title: this.$t('menuPage.bindMenuCN'),
            content: this.$t('menuPage.isSureBindCN'),
            loading: true,
            onOk: () => {
              this.$Modal.remove();
              this.EditBindingMenu();
            },
            onCancel: () => {
              this.ListMenuBindings();
            }
          });
        } else {
          this.$Modal.confirm({
            title: this.$t('menuPage.TieMenuCN'),
            content: this.$t('menuPage.isSureTieCN'),
            loading: true,
            onOk: () => {
              this.$Modal.remove();
              this.DelBindingMenu();
            },
            onCancel: () => {
              this.ListMenuBindings();
            }
          });
        }
      },
      // modal1选中所属吧台的Id
      barFunc: function (storeId, partnerId, storeCode) {
        let el = partnerId + '_' + storeCode;
        if (this.barId.indexOf(el) == -1) {
          this.barId.push(el);
        } else {
          this.inArray(el);
        }
      },
      // 点击二次去除选中吧台的数据
      inArray(value) {
        for (var i = 0; i < this.barId.length; i++) {
          if (value == this.barId[i]) {
            this.barId.splice(i, 1);
          }
          ;
        }
      },
      // 点击确定按钮--复制吧台菜单到指定的其他吧台
      okFunc() {
        this.closeEdit();
      },
      // 点击处理--获取选中的菜单数据
      selFunc(seled) {
        if (this.disableBtn == true) {
          this.$Message.info(this.$t('menuPage.executeCN'));
          return false;
        }
        this.recod1 = false;
        this.hide = false;
        this.hideLowerName = false;
        this.mid = this.menu[seled].mid;
        this.type = this.menu[seled].type;
        this.linkId = this.menu[seled].linkId;
        this.seq = this.menu[seled].seq;
        this.filters = [];
        this.lists = [];
        this.mainName = this.menu[seled].name;
        this.menuTag = this.menu[seled].mid;
        this.selected = seled;
        this.nid = '0101';
        this.showChildrenType(1);
        this.lists = [];
        this.ListShop();
        this.AllShop(this.menu[seled].mid);
        if (this.isEmptyObject(this.$route.params) == false) {
          this.nodeName = null;
          this.sign = null;
          this.lists = [];
          this.mid = this.mid;
          this.mainName = this.mainName;
          this.seq = this.menu[seled].seq;
        }
      },
      // 删除菜单
      handleClose(mid) {
        this.$Modal.confirm({
          title: this.$t('menuPage.delMenuTitleCN'),
          content: this.$t('menuPage.delMenuContentCN'),
          loading: true,
          onOk: () => {
            this.DelMenu();
          }
        });
      },
      // 删除菜单分类
      delTypeFunc(nid, menuId, num) {
        let delCateGoryTitleCN = this.$t('menuPage.delCateGoryTitleCN');
        let delCateGoryTitleCN1 = this.$t('menuPage.delCateGoryTitleCN1');
        let delCateGoryContentCN = this.$t('menuPage.delCateGoryContentCN');
        let delCateGoryContentCN1 = this.$t('menuPage.delCateGoryContentCN1');
        if (num != 1) {
          delCateGoryTitleCN = delCateGoryTitleCN1;
          delCateGoryContentCN = delCateGoryContentCN1;
        }
        this.$Modal.confirm({
          title: delCateGoryTitleCN,
          content: delCateGoryContentCN,
          loading: true,
          onOk: () => {
            if (num == 1) {
              this.nodeName = '';
              this.DelNode(num, nid);
            } else {
              this.DelNode(num, nid);
              if (this.filters[this.classIndex].categories.length != 0) {
                this.lowerName = '';
                this.hide = false;
                let arr = this.filters[this.classIndex].categories;
                let array2 = [];
                arr.forEach(function (j) {
                  if (j.nid != nid) {
                    array2.push({
                      name: j.name,
                      level: j.level,
                      nid: j.nid,
                      menuId: j.menuId
                    });
                  }
                }, this);
                this.filters[this.classIndex].categories = array2;
                this.selected = this.filters[this.classIndex].nid;
              } else {
                this.lowerName = this.filters[this.classIndex].categories[0].name;
                this.lowerNid = this.filters[this.classIndex].categories[0].nid;
              }
            }
          }
        });
      },
      // 用户选中的商品样式
      showFunc(indx) {
        if (this.disableBtn == true) {
          this.ind = indx;
          this.reveal = true;
        }
      },
      removeShop(products) {
        this.$Modal.confirm({
          title: this.$t('menuPage.removeShopCN'),
          content: this.$t('menuPage.isSureRemoveCN'),
          loading: true,
          onOk: () => {
            this.productIds[0] = products;
            this.DelProducts();
          }
        });
      },
      // 添加商品--跳转到商品池
      addShop() {
        if (this.isEmptyObject(this.$route.params) == false) {
          this.nid = this.selected;
          this.mid = this.menuTag;
          this.seq = this.seq;
          this.classIndex = this.classIndex;
          this.mainName = this.mainName;
          this.nodeName = this.nodeName;
          if (this.$route.params.lowerNId) {
            this.lowerNid = this.lowerNid;
            this.lowerName = this.lowerName;
          }
          window.localStorage.setItem('seq', this.seq);
        }
        if (this.publicId != null) { // 判断是给哪一级分类添加商品
          window.localStorage.setItem('seq', this.seq);
          if (this.publicId.length == 6) {
            this.$router.push({
              name: 'goodsList',
              params: {
                goTo: 'goodsMenu',
                menuId: this.mid,
                sequence: this.seq,
                classIndex: this.classIndex,
                nodeId: this.nid,
                lowerNId: this.lowerNid,
                mainName: this.mainName,
                nodeName: this.nodeName,
                lowerName: this.lowerName
              }
            });
          } else {
            this.$router.push({
              name: 'goodsList',
              params: {
                goTo: 'goodsMenu',
                menuId: this.mid,
                sequence: this.seq,
                classIndex: this.classIndex,
                nodeId: this.nid,
                mainName: this.mainName,
                nodeName: this.nodeName
              }
            });
          }
        }
      },
      // 删除商品
      DelProducts() {
        var menuId = this.mid;
        var nodeId = '';
        var productIds = [];
        if (this.publicId != null) { // 判断是删除哪一级分类下的商品
          if (this.publicId.length == 6) {
            nodeId = this.lowerNid;
            productIds = this.productIds;
            getDelProducts(menuId, nodeId, productIds).then(response => {
              var errcode = response.data.errcode;
              if (errcode === 100) {
                setTimeout(() => {
                  this.$Modal.remove();
                  this.$Message.success(this.$t('menuPage.removeSuccessCN'));
                  this.ListShop(2);
                  this.AllShop(this.mid);
                }, 100);
              }
            }).catch(error => {
              alert(error);
            });
          } else {
            nodeId = this.nid;
            productIds = this.productIds;
            getDelProducts(menuId, nodeId, productIds).then(response => {
              var errcode = response.data.errcode;
              if (errcode === 100) {
                setTimeout(() => {
                  this.$Modal.remove();
                  this.$Message.success(this.$t('menuPage.removeSuccessCN'));
                  this.ListShop(1);
                  this.AllShop(this.mid);
                }, 100);
              }
            }).catch(error => {
              alert(error);
            });
          }
        }
      },
      // 回退后查询分类
      BackCategory(sequence, classIndex, menuId, nodeId) {
        let linkId = '379d1f5c-7a60-458f-9f9b-4fd271003fca';
        let type = 2;
        ListChildrenType(linkId, type, sequence).then(response => {
          let categories = response.data.data;
          var errcode = response.data.errcode;
          if (errcode === 100) {
            if (categories == []) {
              this.deep = 1;
            } else {
              categories.rootNode.children.forEach(function (category) {
                let arrays = [];
                category.children.forEach(function (child) {
                  arrays.push({
                    name: child.name,
                    level: child.level,
                    nid: child.nid,
                    menuId: child.menuId
                  });
                });
                this.filters.push({
                  name: category.name,
                  level: category.level,
                  nid: category.nid,
                  menuId: category.menuId,
                  categories: arrays
                });
              }, this);
              if (this.filters) {
                if (classIndex >= this.filters.length) { // 添加分类立马就删除引发bug处理
                  classIndex = classIndex - 1;
                }
                if (this.filters[classIndex].categories.length == 0) {
                  this.lists = [];
                  this.BackShop(menuId, nodeId);
                }
              }
            }
          }
        }).catch(error => {
          console.log(error);
        });
      },
      // 回退后查询商品
      BackShop(menuId, nodeId) {
        this.publicId = nodeId;
        var deep = 1;
        var pageSize = this.pageSize;
        var pageNumber = this.pageNumber;
        this.lists = [];
        getListShop(menuId, nodeId, deep, pageSize, pageNumber).then(response => {
          let data = response.data.data;
          var errcode = response.data.errcode;
          if (errcode === 100) {
            this.total = data.count;
            if (this.total != 0) {
              data.result.forEach(function (dataItem) {
                if (dataItem.picture == '') {
                  dataItem.picture = require('../../assets/img/imgerror.jpg');
                }
                this.lists.push({
                  picture: dataItem.picture,
                  name: dataItem.name,
                  customerCode: dataItem.customerCode,
                  originalPrice: dataItem.originalPrice,
                  pid: dataItem.pid
                });
              }, this);
              this.showTotal = true;
              if (data.count > 12) {
                this.showPage = true;
              } else {
                this.showPage = false;
              }
            } else {
              if (nodeId.length < 6 && this.disableBtn == true) {
                this.addTypeBtn2 = true;
              }
              this.showTotal = false;
              this.showPage = false;
            }
          }
        }).catch(error => {
          console.log(error);
        });
      },
      // 添加商品成功后回退
      fallBack() {
        this.menu = [];
        this.ListMenu(1);
        this.seq = this.$route.params.sequence;
        this.menuTag = this.$route.params.menuId;
        if (this.$route.params.mainName != '') {
          this.mainName = this.$route.params.mainName;
        } else {
          this.mainName = this.$route.params.oldMenu;
        }
        if (this.$route.params) {
          if (this.$route.params.lowerNid) {
            this.filters = [];
            this.BackCategory(this.$route.params.sequence);
            this.selected = this.$route.params.nodeId;
            this.cated = this.$route.params.lowerNid;
            this.lowerName = this.$route.params.lowerName;
          } else {
            this.filters = [];
            this.BackCategory(this.$route.params.sequence, this.$route.params.classIndex, this.$route.params.menuId, this.$route.params.nodeId);
            this.selected = this.$route.params.nodeId;
            this.nodeName = this.$route.params.nodeName;
          }
        }
      }
    },
    created() {
      this.language = window.localStorage.getItem('language') != 'en-US' ? 8 : 16; // 判断限制输入框最大长度
      // 判断是否为回退
      if (this.isEmptyObject(this.$route.params) == false) {
        if (this.$route.params.goTo == 'barback') {
          this.ListMenu(1);
        } else {
          this.fallBack();
        }
      } else {
        this.ListMenu(1);
      }
      this.GetShop();
      this.showTotal = false;
      this.showPage = false;
      this.getAllTypes();
      console.log(this.$route.params);
    }
  };
</script>
