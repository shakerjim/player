<template>
  <div class="barback-wrapper">
    <!-- 第一层 -->
    <div class="floor-name">{{$t('barBack.floorOneCN')}}</div>
    <Row class="floor floor-one" type="flex" justify="space-around">
      <Col class="floor-col" v-for="(shop, index) in floorOne"
           :class="borderSelect == 'greenBorder'?'greenBorder':'yellowBorder'" span="7" :key="index">
      <div class="barback-show">
        <div class="name">
          {{shop.storeName}}
        </div>
        <div class="info">
          <p>
            {{$t('barBack.BussinessStatusCN')}}： <span>{{shop.state == 1 ? $t('barBack.doBussinesssCN') : $t('barBack.inRestCN')}}</span>
          </p>
          <p>{{$t('barBack.BussinessTimeCN')}}： <span>{{shop.businessHours}}</span></p>
          <p>{{$t('barBack.CurrentMenuCN')}}： <span>{{shop.menuName ? shop.menuName : ''}}</span>
            <Button class="addBtn" v-if="shop.menuName?false:true" @click="addMenu(storeName=shop.storeName, storeId=shop.storeId, partnerId = shop.partnerId, storeCode = shop.storeCode)"
                    type="ghost" size="small">{{$t('barBack.addCN')}}
            </Button>
          </p>
        </div>
        <div class="btn">
          <Button @click="barBackSetBtn(1, index, shop.storeId)" class="btnSet" type="ghost">
            {{$t('barBack.setBarsCN')}}
          </Button>
        </div>
      </div>
      <img src="../../assets/img/barback_01.jpg" alt="">
      </Col>
    </Row>
    <!-- 第二层 -->
    <div class="floor-name">{{$t('barBack.floorTwoCN')}}</div>
    <Row class="floor floor-two" type="flex" justify="space-around">
      <Col class="floor-col" v-for="(shop, index) in floorTwo"
           :class="borderSelect == 'greenBorder'?'greenBorder':'yellowBorder'" span="7" :key="index">
        <div class="barback-show" v-show="!shop.show">
          <div class="name">
            {{shop.storeName}}
          </div>
          <div class="info">
            <p>
              {{$t('barBack.BussinessStatusCN')}}： <span>{{shop.state == 1 ? $t('barBack.doBussinesssCN') : $t('barBack.inRestCN')}}</span>
            </p>
            <p>{{$t('barBack.BussinessTimeCN')}}： <span>{{shop.businessHours}}</span></p>
            <p>{{$t('barBack.CurrentMenuCN')}}： <span>{{shop.menuName ? shop.menuName : ''}}</span>
              <Button class="addBtn" v-if="shop.menuName?false:true" @click="addMenu(storeName=shop.storeName, storeId=shop.storeId, partnerId = shop.partnerId, storeCode = shop.storeCode)"
                      type="ghost" size="small">{{$t('barBack.addCN')}}
              </Button>
            </p>
          </div>
          <div class="btn">
            <Button @click="barBackSetBtn(2, index, shop.storeId)" class="btnSet" type="ghost">
              {{$t('barBack.setBarsCN')}}
            </Button>
          </div>
        </div>
        <div class="barback-set" v-show="shop.show">
          <ul>
            <li>
              <span>{{$t('barBack.BussinessStatusCN')}}:</span>
              <Button class="btn" :class="shop.state == 1?'active':''" type="ghost" @click="isBtnClick('isWork')">
                {{$t('barBack.doBussinesssCN')}}
              </Button>
              <Button class="btn" :class="shop.state == 1?'':'active'" type="ghost" @click="isBtnClick('isWork')">
                {{$t('barBack.inRestCN')}}
              </Button>
            </li>
            <li>
              <span>{{$t('barBack.BussinessTimeCN')}}:</span>
              <Time-picker format="HH:mm" type="timerange" placement="bottom-end"
                          :placeholder="$t('barBack.selectTimeCN')" style="width: 168px"></Time-picker>
            </li>
            <li>
              <span>{{$t('barBack.CurrentMenuCN')}}:</span>
              <div class="menu">
                <Tag v-for="(item, index) in barBackMenu" :key="index" class="menu-tag">{{ item.name }}</Tag>
              </div>
            </li>
          </ul>
          <Button class="submit" type="ghost">确认</Button>
        </div>
        <img src="../../assets/img/barback_01.jpg" alt="">
      </Col>
      <Col class="floor-col falseBox" span="7" ></Col>
    </Row>

    <!-- 吧台设置模态框 -->
    <Modal
      class-name="barback-modal"
      v-model="setBarbackModal"
      :title="$t('barBack.setBarsCN')"
      width=620
    @on-ok="ok"
    @on-cancel="cancel">
    <Row class="top">
      <Col span="3">
      {{$t('barBack.BussinessStatusCN')}}:</Col>
      <Col span="21">
      <button class="btn" :class="barBackState == '1'? 'active': ''" @click="setState('1')">
        {{$t('barBack.doBussinesssCN')}}
      </button>
      <button class="btn" :class="barBackState == '0'? 'active': ''" @click="setState('0')">{{$t('barBack.inRestCN')}}
      </button>
      </Col>
    </Row>
    <Row class="middle">
      <Col span="3">
      {{$t('barBack.BussinessTimeCN')}}:</Col>
      <Col span="21">
      <Time-picker
        :value="barBackDate"
        @on-change="setDateChange" class="businessHours" format="HH:mm" type="timerange" placement="bottom-end"
        :placeholder="$t('barBack.selectTimeCN')" style="width: 168px"></Time-picker>
      </Col>
    </Row>
    <Row class="bottom">
      <Col span="3">
      {{$t('barBack.CurrentMenuCN')}}:</Col>
      <Col span="21">
      <Tag v-for="(item, idx) in barBackMenu" :key="idx" class="menu-tag"
           @click.native="setDefMenu(idx,mid=item.mid,barId=item.linkId)" data-sequence="item.sequence"
           :class="{active:selected==idx}">{{ item.name }}
      </Tag>
      </Col>
    </Row>
    </Modal>
  </div>
</template>

<script>
  import {getShop, getListMenu, setStore, setDefaultMenu, getListDefaultMenus} from '@/api/shop';

  export default {
    data() {
      return {
        isBarback: false,
        isWork: false, // 营业为true、歇息为false
        modal_loading: false,
        setBarbackModal: false,
        borderSelect: 'greenBorder',
        floorOne: [],
        floorTwo: [],
        // 操作吧台数据
        partnerId: '',
        storeCode: '',
        storeId: '',
        barBackState: null,
        barBackDate: [],
        barBackMenu: [],
        selected: 0,
        mid: '',
        linkId: '',
        linkIds: [],
        barId: '',
        menuName: '',
        defaultMenus: [],
        storeName: ''
      };
    },
    methods: {
      barBackSetBtn(floor, index, storeId) {
        console.log(floor);
        // 提取吧台相关数据 shopId 吧台的Id；index 吧台数据索引
        var res = null;
        if (floor == 1) {
          res = this.floorOne[index];
        } else {
          res = this.floorTwo[index];
        }
        this.storeId = storeId;
        this.partnerId = res.partnerId;
        this.storeCode = res.storeCode;
        console.log();
        this.barBackState = res.state;
        this.barBackDate = res.businessHours;
        //  获取当前吧台的菜单
        this.getMenu(this.partnerId + '_' + this.storeCode);
        this.setBarbackModal = true;
      },
      // 获取吧台数据
      getBarback() {
        // 获取吧台
        getShop(1, 4).then(response => {
          let shops = [];
          let barIds = [];
          if (response.data.statusCode == 100) {
            let res = response.data.data;
            res.forEach(function (item) {
              shops.push(item);
              barIds.push(item.partnerId + '_' + item.storeCode);
            }, this);
          }
          this.ListDefaultMenus(barIds, shops);
          // this.packet(shops);
          this.packet2(shops);
        });
      },
      packet2 (arr) {
        let arr1 = [];
        let arr2 = [];
        if (arr.length > 0) {
          arr.forEach(function(item) {
            switch (item.floor) {
              case '1':
                arr1.push(item);
                break;
              case '2':
                arr2.push(item);
                break;
            }
          }, this);
        }
        this.floorOne = arr1;
        this.floorTwo = arr2;
      },
      // 门店数据分组
      packet(arr) {
        // 准备两个空的容器，一个对象，一个数组
        let map = {};    // 依次接收数组中的每个值
        let dest = [];   // 新组成的数组容器
        for (var i = 0, l = arr.length; i < l; i++) {
          var ai = arr[i];
          // 读取map对象里，是否存在指定的对象，不存在，添加dest里， 存在进行对第一个相同的parentId 的对象里的data数组里push，相同类的数据
          if (!map[ai.parentId]) { // 不存在
            dest.push({
              parentId: ai.parentId,
              data: [ai]
            });
            map[ai.parentId] = ai;
          } else { // 存在，对已有数据进行循环，处理区分，根据同样的parentId进行划分
            for (var j = 0; j < dest.length; j++) {
              var dj = dest[j];
              if (dj.parentId == ai.parentId) {
                dj.data.push(ai);
                break;
              }
            }
          }
        }
        dest.forEach(function (el) {
          if (el.data.length == 3) {
            el.floor = 1;
          } else {
            el.floor = 2;
          }
        }, this);
        this.floorOne = dest[0];
        this.floorTwo = dest[1];
      },
      // 获取门店菜单
      getMenu(storeId) {
        getListMenu(storeId).then(response => {
          if (response.data.errcode == 100) {
            let res = response.data.data;
            this.barBackMenu = res;
          }
        });
      },
      // 吧台状态
      setState(state) {
        this.barBackState = state;
      },
      // 时间选择
      setDateChange(time) {
        time = time.join('-');
        this.barBackDate = time;
      },
      // 添加菜单
      addMenu(storeName, storeId, partnerId, storeCode) {
        this.$router.push({name: 'goodsMenu', params: {goTo: 'barback', storeName: storeName, storeId: storeId, partnerId: partnerId, storeCode: storeCode}});
      },
      // 获取菜单的id/吧台的id
      setDefMenu(inx, mid, barId) {
        this.selected = inx;
        this.mid = mid;
        this.barId = barId;
      },
      // 查询设置的默认菜单
      ListDefaultMenus(barIds, shops) {
//        let arr = JSON.stringify(barIds);
        let arr = barIds.join(',');
        let data = [];
        getListDefaultMenus(arr).then(response => {
          if (response.data.errcode == 100) {
            var res = response.data.data;
            data = res;
          }
          shops.forEach(function (item) {
            // item.partnerId + '_' + item.storeCode
            data.forEach(function (item2) {
              if (item.partnerId + '_' + item.storeCode == item2.linkId) {
                item.menuName = item2.name;
              }
            }, this);
          }, this);
          // this.packet(shops);
          this.packet2(shops);
        });
      },
      // 设置默认菜单
      setMenu() {
        var barId = this.barId;
        var menuId = this.mid;
        setDefaultMenu(barId, menuId).then(response => {
          if (response.data.errcode == 100) {
            this.$Message.success(this.$t('barBack.defaultMenuCN'));
            this.selected = 0;
          }
        });
      },
      // 提交设置
      ok() {
        if (!this.barBackState && !this.barBackDate && !this.currentShopId) {
          this.$Message.warning(this.$t('barBack.warningsCN'));
        } else {
          // 门店吧台基础信息修改
          let storeData = {
            partnerId: this.partnerId,
            OrganizationCode: this.storeCode,
            businessHours: this.barBackDate,
            state: this.barBackState
          };
          setStore(storeData).then(response => {
            this.getBarback();
          }).catch(error => {
            this.$Message.warning(error);
          });
          this.setMenu();
        }
      },
      cancel() {
        this.addButton = true;
      }
    },
    created() {
      // 获取吧台
      this.getBarback();
    }
  };
</script>

<style lang="less" scoped>
  .barback-wrapper {
    padding: 10px;
    .floor-name {
      margin-top: 15px;
      margin-bottom: 10px;
      padding-left: 10px;
      height: 30px;
      line-height: 30px;
      border-left: 4px solid #D2A767;
      color: #5D5D5D;
      font-size: 14px;
      &:first-child {
        margin-top: 0;
      }
    }
    .floor {
      .floor-col {
        position: relative;
        height: 294px;
        font-size: 14px;
        font-weight: bold;
        border-radius: 2px;
        &.greenBorder {
          border: 2px solid #0b7042;
        }
        &.yellowBorder {
          border: 2px solid #a98e66;
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9;
        }
        .barback-show {
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          color: #FFF;
          font-size: 16px;
          font-weight: 500;
          z-index: 99;
          .name {
            padding-left: 10px;
            width: 100%;
            height: 52px;
            line-height: 52px;
            font-weight: bold;
          }
          .info {
            margin: 6px auto;
            padding: 22px 45px;
            width: 306px;
            height: 140px;
            border: 2px solid #FFF;
            border-radius: 1px;
            p {
              margin-bottom: 8px;
              .addBtn {
                color: #FFF;
              }
            }
          }
          .btn {
            width: 100%;
            height: 64px;
            .btnSet {
              position: absolute;
              bottom: 13px;
              right: 10px;
              border: 2px solid #FFF;
              color: #FFF;
              font-weight: bold;
            }
          }
        }
      }
      &.floor-one, &.floor-two {
        .floor-col {
          margin-right: 25px;
          &:first-child {
            margin-left: 20px;
          }
        }
      }
      .falseBox {
        height: 294px;
        font-size: 14px;
        font-weight: bold;
        border-radius: 2px;
      }
    }
  }

  .barback-modal {
    .top, .middle, .bottom {
      margin-bottom: 10px;
    }
    .top {
      .btn {
        padding: 5px 10px;
        color: #0b7042;
        background-color: transparent;
        border: 1px solid #0b7042;
        &.active {
          background-color: #0b7042;
          color: #FFF;
          font-weight: 600;
        }
      }
    }
    .middle {
      .businessHours {
        border: 1px solid #0b7042;
      }
    }
    .bottom {
      .menu-tag {
        height: 32px;
        padding: 5px;
      }
      &.active {
        background: #0b7042;
        color: #FFF;
        font-weight: 600;
      }
    }
    .active {
      background: #0b7042;
      color: #FFF;
      font-weight: 600;
    }
  }
</style>
