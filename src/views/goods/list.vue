<template>
  <div class="shopDetails-wrapper">
    <div class="search-box">
      <input type="text" class="search-input" :placeholder="$t('goodsList.inputGoodsName') " v-model="searchGoods">
      <div class="search-btn" @click="searchProducts(1)"><img class="search-icon" src="../../assets/img/search.png" alt=""></div>
    </div>
    <div class="content">
      <div class="contentInfo">
        <Tabs type="card" size="default" @on-click="clickMenu">
          <TabPane v-for="(tab, index) in tabs" :label="tab.name" :key="index" style="background: #FFF;min-height: 218px;">

            <Cascader v-if="index == 3" @on-change="foodTypeSelect" style="width: 200px;margin-left: 2px;margin-bottom: 2px;" :data="foodTypes" change-on-select></Cascader>

            <div class="contentInfo-top">
              <div v-if="!keepActive">
                <Tag class="tag tagAll" @click.native="selectLabel('all')" :class="selectedL.length == 0?'active':''">{{$t('goodsList.all')}}</Tag>
                <Tag class="tag" :class="selectedL.lid == item.lid?'active':''" v-for="(item, index) in menu" :key="index" @click.native="selectLabel(index)" :closable="true" @on-close="delLabelTag(item.lid)">{{item.name}}</Tag>
                <Button class="btn1" icon="ios-plus-empty" type="dashed" size="small" @click="addLabel = true">{{$t('goodsList.addLabelBtn')}}</Button>
                <Checkbox class="selectAll" :value="checkAll" @on-change="selectAll">{{$t('goodsList.allSelect')}}</Checkbox>
              </div>
              <div v-else>
                <Tag class="tag tagAll" @click.native="keepTagClick(1)" :class="keepTag == 1 ? 'active' : ''">{{$t('goodsList.newGoods')}}</Tag>
                <Tag class="tag tagAll" @click.native="keepTagClick(2)" :class="keepTag == 2 ? 'active' : ''">{{$t('goodsList.updateGoods')}}</Tag>
                <Tag class="tag tagAll" @click.native="keepTagClick(3)" :class="keepTag == 3 ? 'active' : ''">{{$t('goodsList.delGoods')}}</Tag>
                <Checkbox class="selectAll" :value="checkAll" @on-change="selectAll">{{$t('goodsList.allSelect')}}</Checkbox>
              </div>
            </div>
            <div class="contentInfo-box">
              <div class="list" v-for="(list, index) in lists" :key="index">
                <div class="list-icon">
                  <label class="code">{{$t('goodsList.encode')}}：{{list.customerCode}}</label>
                  <!-- <Checkbox class="check" @on-change="checkboxClick(list.pid)" :label="list.pid" :value="checkAll"></Checkbox> -->
                  <label class="check ivu-checkbox-wrapper" @click="checkboxClick(list.pid)">
                    <span class="ivu-checkbox" :class="social.indexOf(list.pid) == -1 ? '' : 'ivu-checkbox-checked'">
                      <span class = "ivu-checkbox-inner"></span>
                      <input type="checkbox" class="ivu-checkbox-input">
                    </span >
                  </label>
                </div>

                <div class="list-img" v-if="keepActive">
                  <Badge class-name="keep" :count="list.updateStatus == 1 ? $t('goodsList.newGoods') : (
                      list.updateStatus == 2 ? $t('goodsList.updateGoods') :
                        (
                          list.updateStatus == 3 ? $t('goodsList.delGoods') : ''
                        )
                    )
                  ">
                    <img @click="goToDetail(index)" :src="list.picture ? list.picture : 'http://osx7vha3g.bkt.clouddn.com/sbux.jpg'" class="demo-badge" alt="">
                  </Badge>
                </div>
                <div class="list-img" v-else>
                  <Badge class-name="keep">
                    <img @click="goToDetail(index)" :src="list.picture ? list.picture : 'http://osx7vha3g.bkt.clouddn.com/sbux.jpg'" class="demo-badge" alt="">
                  </Badge>
                </div>

                <div class="list-content">
                  <p>{{list.name}}</p>
                  <span>
                    <Icon type="social-yen"></Icon>{{list.originalPrice / 100 }}</span>
                </div>
              </div>
            </div>
            <div class="contentInfo-btn">
              <!-- <Button @click="delLabelPro" class="subtractMenuBtn" type="error" icon="minus" size="large" v-if="keepActive && selectedL.length != 0">{{$t('goodsList.delBtn')}}</Button> -->
              <Button class="addMenuBtn" @click="bindLabelModal" type="success"  size="large">
                {{ keepActive ? (keepTag == 1 ? $t('goodsList.newGoods') : (keepTag == 2 ? $t('goodsList.updateGoods') : $t('goodsList.delGoods'))) : $t('goodsList.newGoods') }}
              </Button>
              <!-- <Button class="addMenuBtn" type="success" icon="plus" size="large">{{$t('goodsList.editBtn')}}</Button> -->
            </div>
            <div class="contentInfo-page">
                <Page v-if="tabsIndex != 3 && searchConfirm == false" :total="goodsTotal" :current="pageNumber" show-elevator size="small" :page-size="12" show-total @on-change="changePage "></Page>

                 <Page v-else-if="searchConfirm" :total="goodsTotal" :current="pageNumber" show-elevator size="small" :page-size="12" show-total @on-change="searchProducts"></Page>

                 <Page v-else :total="goodsTotal" :current="pageNumber" show-elevator size="small" :page-size="12" show-total @on-change="foodPages"></Page>
            </div>
          </TabPane>

          <div class="shopColor" slot="extra">
            <Button @click="keepclick()" :class="keepActive ? 'active' : ''" type="ghost" class="btn" size="large" icon="ios-pricetag-outline">{{$t('goodsList.goodsMaintenance')}}&nbsp;&nbsp;</Button>
            <!-- <div class="dot">{{keepNumber}}</div> -->
          </div>
        </Tabs>
      </div>

      <Modal class-name="addLabel" v-model="addLabel" :title="$t('goodsList.addTags')" width="600" @on-ok="addLabelClick" :mask-closable="false">
          <div class="formLabel">
            <span>{{$t('goodsList.tagName')}}</span>
            <input v-model="formLabel" type="text" maxlength="10" class="labelInput" :placeholder="$t('goodsList.tagNameInput')">
          </div>
      </Modal>

      <Modal class-name="label-modal" v-model="addMenuModal" :title="$t('goodsList.goodsSet')" width="650" :mask-closable="false" @on-ok="bindLabel()">
        <div v-if="!keepActive">
            <div class="sidebar">
              <ul>
                <li @click="clickColumn(1)" :class="selectColumn == 1 ? 'active' : ''">{{$t('goodsList.menu')}}</li>
                <li @click="clickColumn(2)" :class="selectColumn == 1 ? '' : 'active'">{{$t('goodsList.tag')}}</li>
              </ul>
            </div>
            <div class="content">
               <div v-show="selectColumn == 1" class="menu">
                 <!-- 菜单无限级 Start-->
                  <ul class="column_1">
                    <li v-for="(menu, index) in bindMenu" :key="index" v-if="menu.sequence == 0 ? false : true">
                      <span class="inactive">{{menu.name}}</span>
                      <Icon @click.native="clickMenuFloor(index, menu)" class="label-icon" :type="columnChild == index ? 'android-remove-circle' :  'android-add-circle'"></Icon>
                      <ul v-if="columnChild == index">
                        <li @click.stop="newClickBindMenu(item1, 1)" v-for="(item1, index1) in newBindMenuChild.children" :key="index1">
                          <span class="inactive">{{item1.name}}</span>
                          <!-- 加号 -->
                          <Icon @click.native.stop="clickMenuFloor2(index1)" class="label-icon" :type="columnChild2 == index1 ? 'android-remove-circle' :  'android-add-circle'" v-if="item1.children.length > 0"></Icon>
                          <!-- 勾选 -->
                          <Icon :color="twoMenu != null? ((twoMenu.menuId == menu.mid && twoMenu.nid == item1.nid) ? '#0b7042' : '#4B505F') : '#4B505F'" class="label-icon" type="android-checkmark-circle" v-if="item1.children.length == 0"></Icon>

                          <ul v-if="columnChild2 == index1 && item1.children.length > 0">
                            <li @click.stop="newClickBindMenu(item2, 2)" v-for="(item2, index2) in item1.children" :key="index2">
                              <span>{{item2.name}}</span>
                              <!-- 勾选 -->
                              <Icon class="label-icon" :color="twoMenu != null? ((twoMenu.menuId == menu.mid && twoMenu.nid == item2.nid) ? '#0b7042' : '#4B505F') : '#4B505F'" type="android-checkmark-circle"></Icon>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <!-- <Tree :data="baseData" show-checkbox></Tree> -->
                 <!-- 菜单无限级 End-->
               </div>

              <ul class="column_2" v-show="selectColumn == 2">
                <li v-for="(item, index) in menu" :key="index" @click="labelClick(item.lid)" :class="labelIndex == item.lid?'active':''">
                  <span>{{item.name}}</span>
                  <Icon class="label-icon" type="android-checkmark-circle"></Icon>
                </li>
              </ul>
            </div>
        </div>
        <div class="keepModal" v-else>
            <!-- <span>{{$t('goodsList.goodsStatus')}}&nbsp;&nbsp;</span>
            <i-switch size="large" v-model="goodsStatus">
                <span slot="open">{{$t('goodsList.up')}}</span>
                <span slot="close">{{$t('goodsList.down')}}</span>
            </i-switch> -->
            <span>
              {{ keepTag == 1 ? $t('goodsList.newGoodsHint') : (
                  keepTag == 2 ? $t('goodsList.updateGoodsHint') : (
                    keepTag == 3 ? $t('goodsList.delGoodsHint') : ''
                )
              ) }}
            </span>
        </div>
        <div style="clear: both"></div>
      </Modal>
    </div>
  </div>
</template>

<script>
import {
        getMenuTree,
        getListMenu,
        getListChildren,
        ListChildrenType
       } from '@/api/shopMenu.js';
import {
        ListChildren,
        getLabel,
        addLabel,
        bindProduct,
        ListProductByLabelName,
        // EndableDisableProducts, // 商品上下架
        SetProducts,
        DelProductsLabel,
        delLabel,
        ListProductByInfo,
        ListChangeProducts,
        SetAddProducts,
        SetUpdateProducts,
        RemoveDelProducts
      } from '@/api/shopGoods.js';

export default {
  data() {
    return {
      number: 99,
      tabs: [],         // 菜单
      tabsIndex: 0,     // tab 切换索引
      currentTag: '',   // 当前tab 分类名
      menu: [],         // 标签
      mid: null,        // menuId
      nid: null,        // nodeId
      tagIndex: null,   // 标签分类索引
      selected: 1,
      lists: [],        // 商品列表
      social: [],       // 选中商品容器
      checkAll: false,  // 全选默认状态
      addLabel: false,  // 添加标签Modal
      formLabel: '',    // 添加标签传递的标签名数据
      addMenuModal: false,  // 绑定商品到菜单Modal
      selectedL: [],    // 选择
      labelIndex: null,      // 选择标签分类的标签lid
      goodsTotal: null,      // 商品总数量
      pageNumber: 1,
      keepActive: false,
      goodsStatus: false,    // 上下架
      selectColumn: 1,      // 1 菜单 2 标签
      bindMenu: [],         // 绑定商户菜单数据
      bindMenuChild: [],     // 商户菜单二级
      bindLabelData: [],
      menuOrLable: 1,        // 1 menu 2 label
      oneMenu: null,
      twoMenu: null,
      delLabelIndex: null,
      searchGoods: '',
      name1: '',             // 菜单一级分类名
      name2: '',              // 菜单二级分类名,
      keepTag: 1,
      newMenuList: false,      // 新菜单选择
      columnChild: null,       // 点击菜单的 index
      columnChild2: null,       // 点击菜单的 index2
      newBindMenuChild: [],     // 一级菜单下的所有分类
      foodTypeNid: null,        // 食品下分类的nid
      foodTypes: [],             // 食品分类下的分类层
      menuToGoods: null,          // 从菜单跳到商品时路由带过来的数据
      searchConfirm: false,       // 是不是搜索情况下的
      recordMenuType: null
    };
  },
  methods: {
    // 菜单四级支持操作
    clickMenuFloor (index) {
        if (this.columnChild == index) {
            this.columnChild = null;
        } else {
          this.columnChild = index;
          let oneMenu = this.bindMenu[index];
          this.getListChildType(oneMenu.linkId, oneMenu.type, oneMenu.sequence);
          this.recordMenuType = {
            mainName: oneMenu.name,
            sequence: oneMenu.sequence,
            classIndex: index
          };
          console.log(this.recordMenuType);
        }
    },
    clickMenuFloor2 (index) {
        if (this.columnChild2 == index) {
            this.columnChild2 = null;
        } else {
          this.columnChild2 = index;
          if (this.newBindMenuChild.children.length > 0) {
              let arr = this.newBindMenuChild.children[index];

              this.recordMenuType.nodeName = arr.name;
              this.recordMenuType.menuId = arr.menuId;
              this.recordMenuType.nodeId = arr.nid;
          }
           console.log(this.recordMenuType);
        }
    },
    // 获取菜单，分类层级
    getListChildType (linkId, type, sequence) {
      ListChildrenType(linkId, type, sequence).then(response => {
        let res = response.data;
        if (res.errcode === 100) {
          this.newBindMenuChild = res.data.rootNode;
          // 提取一级分类后，如果是菜单跳转过来的，提取二级
          if (this.$route.params.goTo == 'goodsMenu') {
            this.newBindMenuChild.children.forEach(function(item) {
              if (item.children.length > 0 && item.menuId == this.menuToGoods.menuId) {
                item.children.forEach(function(item2) {
                  if (item2.nid == this.menuToGoods.lowerNId) {
                      this.twoMenu = item2;
                    }
                }, this);
              } else {
                   if (item.nid == this.menuToGoods.nodeId && item.menuId == this.menuToGoods.menuId) {
                      this.twoMenu = item;
                   }
              }
            }, this);
          }
        }
      }).catch(error => {
        console.log('异常错误:', error);
      });
    },
    // 勾选菜单
    newClickBindMenu (item, index) {
      this.twoMenu = item;
      console.log('选定菜单', this.twoMenu);
      if (index == 1) {
        this.recordMenuType.nodeName = this.twoMenu.name;
        this.recordMenuType.menuId = this.twoMenu.menuId;
        this.recordMenuType.nodeId = this.twoMenu.nid;
        this.recordMenuType.lowerName = '';
        this.recordMenuType.lowerNId = '';
      } else {
        this.recordMenuType.lowerName = this.twoMenu.name;
        this.recordMenuType.lowerNId = this.twoMenu.nid;
      }
      console.log(this.recordMenuType);
    },
    // 商品维护池子 click
    keepTagClick (num) {
      switch (num) {
        case 1:
          this.keepTag = 1;
          break;
        case 2:
          this.keepTag = 2;
          break;
        case 3:
          this.keepTag = 3;
          break;
      }

      this.keepGoods();
    },
    // 商品维护池子里相关操作
    keepGoodsHandle () {
    // 数据转换
    var data = [];
    if (this.keepTag === 1) {
      this.social.forEach(function(item) {
        data.push({
          menuId: this.tabs[this.tabsIndex].menuId.toString(),
          parentId: this.tabs[this.tabsIndex].nid,
          type: this.tabs[this.tabsIndex].name,
          productId: item
        });
      }, this);
     }
    //  alert(JSON.stringify(data));
      switch (this.keepTag) {
        case 1:
          SetAddProducts(data).then(response => {
            let res = response.data;
            if (res.errcode === 100) {
              this.social.splice(0, this.social.length);
              this.$Message.success(this.$t('goodsList.addGoodsY'));
            } else {
              this.$Message.warning(this.$t('goodsList.addGoodsN'));
            }
          }).catch(error => {
            console.log('异常错误:', error);
          });
          break;
        case 2:
          SetUpdateProducts(this.tabs[this.tabsIndex].menuId.toString(), this.tabs[this.tabsIndex].nid, this.social).then(response => {
            let res = response.data;
            if (res.errcode === 100) {
              this.social.splice(0, this.social.length);
              this.$Message.success(this.$t('goodsList.updateGoodsY'));
            } else {
              this.$Message.warning(this.$t('goodsList.updateGoodsN'));
            }
          }).catch(error => {
            console.log('异常错误:', error);
          });
          break;
        case 3:
          RemoveDelProducts(this.tabs[this.tabsIndex].menuId.toString(), this.tabs[this.tabsIndex].nid, this.social).then(response => {
            let res = response.data;
            if (res.errcode === 100) {
              this.social.splice(0, this.social.length);
              this.$Message.success(this.$t('goodsList.moveGoodsY'));
            } else {
              this.$Message.warning(this.$t('goodsList.moveGoodsN'));
            }
          }).catch(error => {
            console.log('异常错误:', error);
          });
          break;
      }
    },
    // 全局搜索
    searchProducts (page) {
      console.log(page);
      this.searchConfirm = true;
      let data = this.tabs[this.tabsIndex];
      let menuId = data.menuId;
      if (this.searchGoods.trim().length === 0) {
        this.$Message.info(this.$t('goodsList.inputGoodsName'));
        return;
      }
      ListProductByInfo(this.searchGoods, menuId, page).then(response => {
        this.$store.commit('SHOWLOADING');
        let res = response.data;
        console.log(res);
        if (res.errcode == 100) {
            this.$store.commit('HIDELOADING');
            if (res.data.count > 0) {
               this.lists = res.data.products;
               this.goodsTotal = res.data.count;
               console.log(this.goodsTotal);
            }
        } else {
          this.$Message.warning(res.errmsg);
        }
      }).catch(error => {
        console.log('异常错误:', error);
      });
    },
    clickColumn (num) {
      if (num == 1) {
        this.selectColumn = num;
        this.menuOrLable = num;
        this.getBindMenu();
      } else {
        this.selectColumn = num;
        this.menuOrLable = num;
      }
    },
    clickBindMenu(index, name, num) {
      // 获取到选中的菜单
      if (num == 1) {
          this.name1 = name;
          this.oneMenu = this.bindMenu[index];
          this.towMenu = null;
          this.getBindMenuC(this.oneMenu.mid);
      } else {
          this.name2 = name;
          this.twoMenu = this.bindMenuChild[index];
      }
    },
    // 获取菜单
    getBindMenu () {
        // 获取商户菜单集合
        getListMenu().then(response => {
          let res = response.data;
          if (res.errcode == 100) {
              this.bindMenu = res.data;
              console.log('菜单:', this.bindMenu);
              // 查看当前选中的,从菜单入口进来
              if (this.$route.params.goTo == 'goodsMenu') {
                this.bindMenu.forEach(function (item) {
                  if (item.mid == this.$route.params.menuId) {
                    // 锁定菜单
                    this.oneMenu = item;
                    // this.getBindMenuC(this.$route.params.menuId); // old
                  }
                }, this);
              }
          } else {
            this.$Message.warning(res.errmsg);
          }
        }).catch(error => {
          console.log('异常错误:', error);
        });
    },
    // 获取菜单下分类
    getBindMenuC (menuId) {
      getListChildren(menuId).then(response => {
          let res = response.data;
          if (res.errcode == 100) {
              this.bindMenuChild = res.data;
              // 查看当前选中的
              if (this.$route.params.goTo == 'goodsMenu') {
                this.bindMenuChild.forEach(function (item) {
                  if (item.resultModel.nid == this.$route.params.nodeId) {
                    this.twoMenu = item;
                  }
                }, this);
              }
          } else {
            this.$Message.warning(res.errmsg);
          }
      }).catch(error => {
          console.log('异常错误:', error);
        });
    },
    // 商品维护点击事件
    keepclick (num = 1) {
      // 查询新商品
      // category, updateStatus, pagenumber, pagesize = 12, linkId = shopID
      this.keepActive = !this.keepActive;
      if (this.keepActive) {
         this.keepGoods(num);
      } else {
        this.tabs = [];
        this.getGoodsList();
      }
    },
    keepGoods (num = 1) {
       ListChangeProducts(this.currentTag, this.keepTag, num).then(response => {
          let res = response.data;
          if (res.errcode === 100) {
            this.$Message.success(res.errmsg);
            this.lists.splice(0, this.lists.length);
            this.goodsTotal = res.data.count;
            this.lists = res.data.products;
          } else {
             this.$Message.warning(res.errmesg);
          }
        }).catch(error => {
          console.log('异常错误:', error);
        });
    },
    // 选定标签分类，获取标签下的数据
    selectLabel (index, pageNumber = 1) {
      this.searchConfirm = false;
      this.pageNumber = 1;
      this.social = [];
      if (this.checkAll) {
        this.checkAll = !this.checkAll;
      }
      this.delLabelIndex = index;
      if (index == 'all') { // 选择全部
        this.selectedL = [];
        this.tagIndex = null;
        // this.getGoodsList();
        this.clickMenu(this.tabsIndex);
      } else {
        if (index.length != 0) {
          this.tagIndex = index;
        }
        this.selectedL = this.menu[this.tagIndex];
        let menuId = this.tabs[this.tabsIndex].menuId;
        let nid = this.tabs[this.tabsIndex].nid;
        let lname = this.menu[this.tagIndex].name;
        let selectedL = menuId + '_' + nid + '_' + lname;
        ListProductByLabelName(pageNumber, selectedL).then(response => {
          let res = response.data;
          if (res.errcode == 100) {
              this.lists.splice(0, this.lists.length);
              this.lists = res.data.products;
              this.goodsTotal = res.data.count;
          } else {
            this.$Message.warning(res.errmsg);
          }
        }).catch(error => {
          console.log('异常错误：', error);
        });
      }
    },
    // 分页
    changePage (page) {
      this.social = [];
      this.checkAll = false;
      if (this.tagIndex == null && this.keepActive == false) {
          this.clickMenu(0, page);
      } else if (this.keepActive) {
        this.keepGoods(page);
      } else {
        this.selectLabel('', page);
      }
    },
    selectAll () {
      this.checkAll = !this.checkAll;
      // 获取当前页所有的商品
      if (this.social.length == this.lists.length) {
        this.social = [];
      } else {
        this.social = [];
        this.lists.forEach(function (item) {
          this.social.push(item.pid);
        }, this);
      }
    },
    // 选择标签分类
    labelClick (lid) {
      this.labelIndex = lid;
    },
    // 选择商品，将勾选的商品压人池子
    checkboxClick (productId) {
      if (this.social.indexOf(productId) == -1) {
         this.social.push(productId);
      } else {
        this.inArray(productId);
      }
    },
    // 点击二次去除商品数据池中的数据
    inArray (value) {
      for (var i = 0; i < this.social.length; i++) {
        if (value == this.social[i]) {
            this.social.splice(i, 1);
         };
      }
    },
    // 跳转商品详情页
    goToDetail(index) {
     let shopId = this.lists[index].pid;
     this.$router.push(`/${shopId}`);
    },
    // 获取菜单和商品数据
    getGoodsList () {
      // 商品数据业务逻辑处理
      getMenuTree().then(response => {
          this.$store.commit('SHOWLOADING');
          var res = response.data;
          // 成功返回状态信息
          if (res.errcode == 100) {
              res = res.data;
              // 菜单商品数据转换 一级
              res.children.forEach(function(item) {
                 // 获取一级分类
                 this.tabs.push({
                   name: item.resultModel.name,
                   nid: item.resultModel.nid,
                   menuId: item.resultModel.menuId,
                   num: item.children.length,
                   data: item.children
                 });
              }, this);
              this.clickMenu(0);
          } else {
             this.$Message.warning(res.errmsg);
          }
      }).catch(error => {
        console.log('异常报错:', error);
      });
    },
    // 获取菜单下的标签分类
    getLableList () {
       let index = this.tabsIndex;
       let menuId = this.tabs[index].menuId;
       let nid = this.tabs[index].nid;
       getLabel(menuId, nid).then(response => {
            let res = response.data;
            if (res.errcode == 100) {
               this.menu = res.data;
               this.$store.commit('HIDELOADING');
            } else {
               this.$Message.warning(res.errmsg);
            }
       }).catch(error => {
         this.$Message.warning(error);
       });
    },
    // 递归处理食品下的层级
    loopFood (obj) {
      if (obj.children.length > 0) {
          obj.children.forEach(function(item) {
              // console.log(item);
              item.label = item.resultModel.name;
              item.value = item.resultModel.nid;
              this.loopFood(item);
          }, this);
        }
    },
    foodTypeSelect (value, selectedData) {
      let nid = value[value.length - 1];
      if (value.length > 0) {
        this.foodTypeNid = nid;
        this.clickMenuType(nid);
      }
    },
    // 当在食品分类下的时候，分页
    foodPages (page) {
      this.clickMenuType(this.foodTypeNid, page);
    },
    clickMenuType (nid, pageNumber = 1) {
      // 获取当前分类下的商品
      ListChildren(this.mid, nid, pageNumber).then(response => {
            let res = response.data;
            if (res.errcode == 100) {
                this.lists = res.data.result;
                this.goodsTotal = res.data.count;
            } else {
              this.$Message.warning(response.data.errmsg);
            }
      }).catch(error => {
        this.$Message.warning(error);
      });
    },
    // tab切换，商品数据切换
    clickMenu (index, page = 1) {
       this.selectedL = [];
       this.tabsIndex = index;
       this.mid = this.tabs[index].menuId;
       this.nid = this.tabs[index].nid;
       this.currentTag = this.tabs[index].name;     // 当前
       this.searchConfirm = false;
       if (this.keepActive) {
          this.keepGoods();
       } else {
        // 当tab切换到食品时的操作
        if (index == 3) {
           ListChildren(this.mid, this.nid, page, 2).then(response => {
             this.foodTypes = [];
              let res = response.data.data;
              if (res.result.length > 0) {
                res.result.forEach(function (item) {
                  item.label = item.resultModel.name;
                  item.value = item.resultModel.name;
                  this.loopFood(item);
                  this.foodTypes.push(item);
                }, this);
              }
            }).catch(error => {
              console.log('异常错误:', error);
            });
        }

        // 获取当前分类下的商品
        ListChildren(this.mid, this.nid, page).then(response => {
              let res = response.data;
              if (res.errcode == 100) {
                  this.lists = res.data.result;
                  this.goodsTotal = res.data.count;
              } else {
                this.$Message.warning(response.data.errmsg);
              }
        }).catch(error => {
          this.$Message.warning(error);
        });
        this.getLableList();
      }
    },
    // 新增标签
    addLabelClick () {
      let name = this.formLabel.trim();
      let index = this.tabsIndex;
      let menuId = this.tabs[index].menuId;
      let nid = this.tabs[index].nid;
      if (name.length != 0) {
         addLabel(menuId, nid, name).then(response => {
            let res = response.data;
            if (res.errcode == 100) {
              this.menu.push(res.data);
              this.$Message.success(res.errmsg);
            }
         }).catch(error => {
           console.log('异常错误:', error);
         });
      } else {
        this.$Message.warning(this.$t('goodsList.tagNameInput'));
      }
      this.menu();
    },
    // 绑定商品Modal
    bindLabelModal () {
      if (this.social.length == 0) {
         this.$Modal.info({
                            title: this.$t('goodsList.friendlyTips'),
                            content: this.$t('goodsList.friendlyTipsText'),
                            okText: this.$t('goodsList.okText')
                        });
      } else {
        this.clickColumn(1);
        this.addMenuModal = true;
      }
    },
    // 绑定商品到菜单或标签
    bindLabel () {
      this.$store.commit('SHOWLOADING');
      if (this.keepActive) {
        this.keepGoodsHandle();
      } else {
        // 商品绑定到菜单
        if (this.menuOrLable == 1) {
          if (this.twoMenu == null) {
              this.$store.commit('HIDELOADING');
              this.$Message.warning('请先创建该菜单的类别');
              return;
          }
          // let menuId = this.oneMenu.mid;
          // let nid = this.twoMenu.resultModel.nid;
          let menuId = this.twoMenu.menuId;
          let nid = this.twoMenu.nid;

          // let name1 = this.name1;
          // let name2 = this.name2;
          // let oldNode = this.$route.params.nodeName;
          // let oldMenu = this.$route.params.mainName;
          SetProducts(menuId, nid, this.social).then(response => {
            let res = response.data;
            if (res.errcode == 100) {
              if (this.$route.params.goTo == 'goodsMenu') {
                // this.$router.push({name: 'goodsMenu', params: {menuId: menuId, nodeId: nid, mainName: name1, nodeName: name2, oldNode: oldNode, oldMenu: oldMenu}});
                console.log(this.twoMenu);
                if (this.twoMenu.nid == this.recordMenuType.nodeId || this.twoMenu.nid == this.recordMenuType.lowerNId) {
                    this.$router.push({name: 'goodsMenu', params: this.recordMenuType});
                } else {
                  this.$router.push({name: 'goodsMenu', params: this.menuToGoods});
                }
              }
              this.checkAll = false;
              this.social.splice(0, this.social.length);
              this.clickMenu(this.tabsIndex);
              this.social.splice(0, this.social.length);
              this.$Message.success(res.errmsg);
            } else {
              this.$Message.warning(res.errmsg);
            }
          }).catch(error => {
             console.log('异常错误:', error);
          });
        } else {
           if (this.labelIndex == null) {
             this.$store.commit('HIDELOADING');
             this.$Message.warning('请选择标签分类');
             return;
           }
          // 绑定商品到标签
          bindProduct(this.labelIndex, this.social).then(response => {
            let res = response.data;
            if (res.errcode == 100) {
              this.labelIndex = null;
              this.social.splice(0, this.social.length);
              this.clickMenu(this.tabsIndex);
              this.social.splice(0, this.social.length);
              this.$Message.success(res.errmsg);
            } else {
              this.$Message.warning(res.errmsg);
            }
          }).catch(error => {
            console.log('异常错误:', error);
          });
        }
      }
      this.$store.commit('HIDELOADING');
    },
    // 删除标签分类
    delLabelTag (labelId) {
        this.$Modal.confirm({
          title: '确认删除标签',
          content: '<p>你确定要删除吗?</p>',
          loading: true,
          onOk: () => {
            delLabel(labelId).then(response => {
                  let res = response.data;
                  if (res.errcode == 100) {
                    setTimeout(() => {
                            this.getLableList();
                            this.$Modal.remove();
                            this.$Message.success(res.errmsg);
                        }, 2000);
                  } else {
                     this.$Modal.remove();
                     this.$Message.warning(res.errmsg);
                  }
            }).catch(error => {
              console.log('异常错误:', error);
            });
          }
      });
    },
    // 标签解绑商品
    delLabelPro () {
      this.$Modal.confirm({
          title: '商品确认删除',
          content: '<p>你确定要删除吗?</p>',
          loading: true,
          onOk: () => {
              DelProductsLabel(this.selectedL.lid, this.social).then(response => {
                let res = response.data;
                if (res.errcode == 100) {
                  setTimeout(() => {
                      this.selectLabel(this.delLabelIndex);
                      this.$Modal.remove();
                      this.$Message.success(res.errmsg);
                  }, 2000);
                } else {
                     this.$Modal.remove();
                     this.$Message.warning(res.errmsg);
                }
              }).catch(error => {
                console.log('异常错误:', error);
              });
          }
      });
    },
    // 从菜单入口添加商品
    lockMenuType () {

    }
  },
  created () {
      // 获取所有商品数据
      this.getGoodsList();
      this.menuToGoods = this.$route.params;
      // console.log(this.menuToGoods);
  }
};
</script>

<style lang="less" scoped>
.shopDetails-wrapper {
  color: #333333;
  font-size: 14px;
  .search-box {
    position: absolute;
    top: 65px;
    right: 228px;
    width: 289px;
    height: 46px;
    border: 2px solid #0b7042;
    background: #FFF;
    .search-input {
      float: left;
      width: 253px;
      height: 100%;
      padding: 0 16px;
      border: none;
      box-sizing: border-box;
    }
    .search-btn{
      float: right;
      width: 32px;
      height: 100%;
      .search-icon {
        margin: 19px 9px 0 0;
        width: 18px;
        height: 10px;
      }
    }

  }
  .content {
    .contentInfo {
      padding: 10px;
      .shopColor {
        background-color: #a98e66;
        color: #fff;
        border-radius: 5px 0 0 0;
        .btn {
          color: #FFF;
          padding: 5px 10px;
          text-align: left;
          border: 1px solid #DDDEE1;
          &.active{
            color: #a98e66;
            background: #FFF;
          }
        }
        .dot {
          position: absolute;
          top: 1px;
          right: 1px;
          min-width: 30px;
          height: 28px;
          padding-right: 2px;
          background-color: #d71929;
          border-radius: 0 0 0 100%;
          line-height: 28px;
          text-align: right;
        }
      }
      .contentInfo-top {
        .tag {
          padding: 1px 10px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          // border: none;
          background-color: #fff;
        }
        .selectAll {
          float: right;
        }
        .active {
          color: #fff;
          background-color: #a98e66;
        }
        .btn1 {
          width: 88px;
          height: 32px;
          line-height: 28px;
          text-align: center;
          color: #0b7042;
          font-weight: bold;
          border: 1px solid green;
        }
      }
      .contentInfo-box {
        max-height: 700px;
        overflow-y: scroll;
        .list {
          float: left;
          margin-right: 10px;
          margin-top: 20px;
          text-align: center;
          border: 1px solid #a4a4a4;
          width: 220px;
          height: 275px;
          padding: 5px 5px 0 5px;
          .list-icon {
            .code {
              color: #333333;
              font-size: 12px;
              float: left;
              margin-left: 5px;
              padding: 2px 0;
            }
            .check {
              float: right;
              font-size: 16px;
              color: #ccc;
              margin-right: 0;
            }
          }
          .list-img {
            text-align: center;
            margin: 35px 5px 10px 5px;
            img {
              height: 160px;
            }
            .demo-badge {
              width: 159px;
              height: 160px;
            }
            .keep{
                background: #5cb85c !important;
            }
          }
          .list-content {
            p {
              margin: 5px 0;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              font-size: 14px;
              color: #333333;
            }
            label {
              font-size: 6px;
            }
            span {
              font-size: 18px;
              font-weight: 600;
              margin-left: 5px;
            }
          }
        }
      }
      .contentInfo-btn {
        clear: both;
        float: right;
        margin-right: 55px;
        margin-bottom: 20px;
        .addMenuBtn {
          margin-top: 10px;
          background: #0b7042;
        }
        .subtractMenuBtn {
          margin-top: 10px;
        }
      }
      .contentInfo-page {
        clear: both;
        float: right;
        margin-top: -10px;
        margin-right: 55px;
        margin-bottom: 5px;
      }
    }
  }
}

.label-modal {
  width: 800px;
  height: 600px;
  background: red;
  .sidebar{
    float: left;
    width: 25%;
    height: 100%;
    border: 1px solid #EEE;
    border-right: none;
    font-size: 16px;
    font-weight: 600;
    ul>li {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-bottom: 1px solid #EEE;
      &:last-child {
        border-bottom: none;
      }
      &.active{
        border: 1px solid #0b7042;
        background: rgba(11, 112, 66, 0.95);
        color: #FFF;
      }
    }
  }
  .content {
    float: left;
    width: 75%;
    min-height: 300px;
    border: 1px solid #EEE;
    .menu{
      width: 100%;
      overflow: hidden;
      ul {
        display: block;
        li{
          display: block;
          width: 100%;
          list-style: none;
          overflow: visible;
          .label-icon {
              float: right;
              margin-top: 15px;
              margin-right: 20px;
              font-size: 24px;
          }
          span {
            display: inline-block;
            height: 50px;
            line-height: 50px;
            margin-top: 0px;
            padding-left: 35px;
            font-size: 14px;
            color: #82846f;
            outline: none;
          }
          ul {
              display: block;
              margin-top: -4px;
              li{
                  display: block;
                  background-color: #EEE;
                  font-size: 12px;
                  list-style: circle;
                  padding-left: 35px;
                  .label-icon {
                    float: right;
                    margin-top: 15px;
                    margin-right: 20px;
                    font-size: 24px;
                  }
              }
          }
        }
      }
    }
    .column_2 li{
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      text-align: left;
      border: 1px solid #EEE;
      font-size: 0;
      &:hover {
        color: #0B7042;
        border: 2px solid #0B7042;
      }
      &.active{
        color: #0B7042;
        border: 2px solid #0B7042;
      }
      span{
        font-size: 18px;
      }
      .label-icon {
        float: right;
        margin-top: 10px;
        font-size: 24px;
      }
    }
  }
}

.addLabel {
  span {
    font-size: 16px;
    font-weight: 600;
  }
  .labelInput {
    width: 100%;
    height: 35px;
    margin-top: 15px;
    font-size: 16px;
    padding-left: 10px;
  }
}
</style>
