 <style lang="less" scoped>
.order-body {
    padding: 5px 10px 10px 10px;
    .order-title {
        font-size: 14px;
        font-weight: 600;
        margin-top: 10px;
    }
    .order-nav {
        margin-top: 10px;
        .nav-ordernum {
          margin-right: 10px;
        }
        .nav-ordertime {
            margin: 0 10px;
            .picker-date {
                width: 45%;
            }
        }
        .nav-orderstatus {
            .my-status {
                margin-left: 0;
            }
        }
        .search-btn {
            padding: 0;
            text-align: center;
        }
    }
    .order-table {
        margin-top: 20px;
    }
    .ivu-select-selection{
      border-color: #dddee1;
    }
}
    .ivu-table td.payWayStyle {
        background-color: #2db7f5;
        color: #fff;
    }
</style>
<template>
    <div class="order-body">
        <div class="order-title">{{ $t('orderPlate.orderInfo') }}</div>
        <Row class="order-nav" type="flex" justify="start" align="middle">
            <Col class="nav-ordernum" :xs="{ span: 3 }" :md="{ span: 3 }" :lg="{ span: 3 }">
              <Input size="large" class="search" icon="ios-search" v-model="orderId" :placeholder="$t('orderPlate.inputOne')"></Input>
            </Col>
            <Col class="nav-barnum" :xs="{ span: 3}" :md="{ span: 3}" :lg="{ span: 3}">
              <Select size="large" v-model="barId" :placeholder="$t('orderPlate.chooseBar')">
                <Option v-for="(bar, index) in barList" :value="bar.storeCode" :key="index">{{ bar.storeName }}</Option>
              </Select>
            </Col>
            <Col class="nav-ordertime" :xs="{ span: 8 }" :md="{ span: 10 }" :lg="{ span: 9 }">
              <!-- <label>{{ $t('orderPlate.orderTime') }}</label> -->
              <Date-picker size="large" type="datetime" format="yyyy-MM-dd HH:mm:ss" v-model="startTime" @on-change="startTime=$event" :placeholder="$t('orderPlate.chooseDate')" class="picker-date"></Date-picker>
              <label>{{ $t('orderPlate.to') }}</label>
              <Date-picker size="large" type="datetime" format="yyyy-MM-dd HH:mm:ss" v-model="endTime" @on-change="endTime=$event" :placeholder="$t('orderPlate.chooseDate')" class="picker-date"></Date-picker>
            </Col>
            <Col class="nav-orderstatus" :xs="{ span: 4 }" :md="{ span: 5 }" :lg="{ span: 4 }">
            <Radio-group v-model="selectOrder" class="my-status">
                <label>{{ $t('orderPlate.orderStatus') }}</label>
                <Radio :label="$t('orderPlate.vaildOrder')"></Radio>
                <Radio :label="$t('orderPlate.invaildOrder')"></Radio>
            </Radio-group>
            </Col>
            <Col :xs="{ span: 1 }" :md="{ span: 1 }" :lg="{ span: 2 }">
            <Button type="primary" class="search-btn" @click="queryFunc">{{$t('orderPlate.startSearch')}}</Button>
            </Col>
        </Row>

        <Table stripe :columns="orderColumns" size="small" height='560' :data="orderData" class="order-table"></Table>

        <div style="margin-top: 20px; overflow: hidden" v-if="showPage()">
            <div style="float: right;">
                <Page :total="ordertotal" :current="1" @on-change="changePage" show-elevator show-total :page-size="12"></Page>
            </div>
        </div>
    </div>
</template>
<script>
import {orderList, getById, getFuzzySearch} from '@/api/orderList.js';
import formatTime from '@/api/getTime.js';
import {getShop} from '@/api/shop.js';
export default {
    data() {
        return {
            ordertotal: 0,
            pagesize: 12,
            pagenumber: 1,
            selectOrder: '',
            orderColumns: [
                {
                    title: this.$t('orderPlate.orderNum'),
                    key: 'orderNum'
                },
                {
                    title: this.$t('orderPlate.barNum'),
                    key: 'tableNum'
                },
                {
                    title: this.$t('orderPlate.orderTime'),
                    key: 'orderTime'
                },
                {
                    title: this.$t('orderPlate.goodName'),
                    key: 'goodName'
                },
                {
                    title: this.$t('orderPlate.payNum'),
                    key: 'orderMoney'
                },
                {
                    title: this.$t('orderPlate.payWay'),
                    key: 'orderWay',
                    className: 'payWayStyle'
                },
                {
                    title: this.$t('orderPlate.orderStatus'),
                    key: 'orderStatus'
                }
            ],
            barList: [],
            orderId: '',
            barId: '',
            orderData: [],
            startTime: '',
            endTime: ''
        };
    },
    created() {
        this.GetShop();
        this.getOrderList(this.pagenumber);
    },
    methods: {
        GetShop() {
          getShop(1, 4).then(response => {
            let res = response.data.data;
            res.forEach(function (item) {
              this.barList.push({storeName: item.storeName, storeCode: item.storeCode});
            }, this);
          }).catch(error => {
            alert(error);
          });
        },
        ById(orderId) {
          getById(orderId).then(response => {
            let data = response.data.data;
            let errcode = response.data.errcode;
            if (errcode == 100) {
              this.ordertotal = 1;
              this.resingleJson(data);
            } else {
              this.orderData = [];
            }
          }).catch(error => {
            console.log(error);
          });
        },
        FuzzySearch(shopId, barId, startTime, endTime, pagesize, pagenumber, status) {
          getFuzzySearch(shopId, barId, startTime, endTime, pagesize, pagenumber, status).then(response => {
            let data = response.data.data;
            let errcode = response.data.errcode;
            if (errcode == 100) {
              this.ordertotal = data.count;
              if (data.count == 0) {
                this.orderData = [];
              }
              if (data.orders != []) {
                this.regroupJson(data.orders);
              }
            } else {
              this.orderData = [];
            }
          }).catch(error => {
            console.log(error);
          });
        },
        queryFunc() {
          let shopId = '051018';
          let orderId = this.orderId;
          let barId = this.barId;
          let startTime = this.startTime;
          let endTime = this.endTime;
          let status = this.selectOrder;
          let pagesize = this.pagesize;
          let pagenumber = this.pagenumber;
          if (status == '无效') {
            status = 6;
          } else {
            status = -6;
          }
          if (orderId != '') {
            this.ById(orderId);
          } else {
            this.FuzzySearch(shopId, barId, startTime, endTime, pagesize, pagenumber, status);
          }
        },
        changePage(page) {
            if (this.selectOrder.trim().length > 0 || this.startTime.trim().length > 0 || this.endTime.trim().length > 0 || this.barId.trim().length > 0) {
              this.queryFunc();
            } else {
              this.getOrderList(page);
            }
            // this.pagenumber = page;
        },
        showPage () {
            return this.orderData.length > 0;
        },
        getOrderList(page) {
            this.$store.commit('SHOWLOADING');
            orderList({
                // shopId: '178a14ba-85a8-40c7-9ff4-6418418f5a0c_31310040',
                shopId: '051018',
                pagesize: this.pagesize,
                pagenumber: page
            }).then(response => {
                this.$store.commit('HIDELOADING');
                if (response.data.errcode === 100) {
                    let res = response.data.data;
                    this.ordertotal = res.count;
                    this.regroupJson(res.orders);
                } else {
                    this.$Message.error(response.data.errmsg);
                }
            }).catch(error => {
                this.$store.commit('HIDELOADING');
                this.$Message.error(error.message);
            });
        },
        resingleJson(obj) {
          let tempArray = [];
          let temp = {};
          temp.orderNum = obj.oid;
          temp.tableNum = obj.barCounter;
          temp.orderTime = formatTime(obj.gmtCreate);
          temp.orderMoney = (obj.amount / 100).toFixed(2) + '元';
          switch (obj.status) {
            case 1:
              temp.orderStatus = '下单';
              break;
            case 2:
              temp.orderStatus = '待支付';
              break;
            case 3:
              temp.orderStatus = '接单';
              break;
            case 4:
              temp.orderStatus = '配送中';
              break;
            case 5:
              temp.orderStatus = '完成';
              break;
            case 6:
              temp.orderStatus = '取消';
              break;
            default:
              temp.orderStatus = '--';
          }

          if (obj.payChannel === '10001') {
            temp.orderWay = '支付宝';
          } else if (obj.payChannel === '10004') {
            temp.orderWay = '微信';
          } else {
            temp.orderWay = '--';
          }
          if (obj.productList.length > 1) {
            let nameTemp = [];
            for (let nameV of obj.productList) {
              nameTemp.push(nameV.productName);
            }
            temp.goodName = nameTemp.join(';');
          } else {
            temp.goodName = obj.productList[0].productName;
          }
          tempArray.push(temp);
          this.orderData = tempArray;
        },
        regroupJson(array) {
            let tempArray = [];
            for (let value of array) {
                let temp = {};
                temp.orderNum = value.oid;
                temp.tableNum = value.barCounter;
                temp.orderTime = formatTime(value.gmtCreate);
                temp.orderMoney = (value.amount / 100).toFixed(2) + '元';
                switch (value.status) {
                    case 1:
                        temp.orderStatus = '下单';
                        break;
                    case 2:
                        temp.orderStatus = '待支付';
                        break;
                    case 3:
                        temp.orderStatus = '接单';
                        break;
                    case 4:
                        temp.orderStatus = '配送中';
                        break;
                    case 5:
                        temp.orderStatus = '完成';
                        break;
                    case 6:
                        temp.orderStatus = '取消';
                        break;
                    default:
                        temp.orderStatus = '--';
                }
                temp.orderWay = value.userType;
                // if (value.use === '10001') {
                //     temp.orderWay = '支付宝';
                // } else if (value.payChannel === '10004') {
                //     temp.orderWay = '微信';
                // } else {
                //     temp.orderWay = '--';
                // }
                if (value.productList.length > 1) {
                    let nameTemp = [];
                    for (let nameV of value.productList) {
                         nameTemp.push(nameV.productName);
                    }
                    temp.goodName = nameTemp.join(';');
                } else {
                    // temp.goodName = value.productList[0].productName;
                    temp.goodName = '--';
                }
                tempArray.push(temp);
            }
            this.orderData = tempArray;
        }
    }
};
</script>

