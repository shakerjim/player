<style lang="less" scoped>
.goodsInfo-wrap {
    color: #333;
    font-size: 14px;
    .cont-title {
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        text-indent: 25px;
        margin-top: 15px;
    }
    .cont-top {
        overflow: hidden;
        .img-wrap {
            float: left;
            width: 220px;
            height: 220px;
            text-align: center;
            margin: 50px 20px 75px 20px;
            img {
                height: 220px;
            }
        }
        .cont-info {
            float: left;
            margin-top: 30px;
            .one-info {
                margin-top: 36px;
                td {
                    padding: 16px 18px;
                    span {
                        margin-right: 10px;
                    }
                }
                .text-end {
                    text-align: end;
                }
            }
        }
    }
    .cont-bottom {
        .wrap {
            height: 358px;
            overflow: auto;
            padding-left: 30px;
            margin-bottom: 20px;
            .isShow {
                margin: 30px 30px;
            }
        }
    }
}
</style>
<style lang='less'>
.cont-bottom {
    .ivu-tabs-nav {
        margin: 0px 30px 0px;
    }
    .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
        margin-right: 12px;
    }
    table {
        border-right: 1px solid #e1e6eb;
        border-bottom: 1px solid #e1e6eb;
        text-align: center;
        td,
        th {
            border-left: 1px solid #e1e6eb;
            border-top: 1px solid #e1e6eb;
            padding: 10px 10px;
            min-width: 86px;
        }
    }
}
</style>

<template>
    <div class="goodsInfo-wrap">
        <div class="cont-title">
            {{ $t('goodsDetail.baseInfo') }}
        </div>
        <div class="cont-top">
            <div class="img-wrap">
                <img :src="goodsDetail.imgUrl ? goodsDetail.imgUrl : 'http://osx7vha3g.bkt.clouddn.com/sbux.jpg'" class="demo-badge" alt="">
                <!-- <img src="../../assets/img/drink.png"> -->
            </div>
            <div class="cont-info">
                <table class="one-info">
                    <tr>
                        <td class="text-end">{{ $t('goodsDetail.goodsName') }}：</td>
                        <td>{{goodsDetail.name}}</td>
                    </tr>
                    <tr>
                        <td class="text-end">{{ $t('goodsDetail.SKU') }}：</td>
                        <td>{{goodsDetail.SKU}}</td>
                    </tr>
                    <tr>
                        <td class="text-end">{{ $t('goodsDetail.goodsType') }}：</td>
                        <td>{{goodsDetail.typeName}}</td>
                    </tr>
                    <tr>
                        <td class="text-end">{{$t('goodsDetail.goodsLabel')}}：</td>
                        <td>
                            <span v-for="(lable, index) in goodsDetail.labelNames" :key="index">{{lable}}</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-end">{{$t('goodsDetail.originOfGoods')}}：</td>
                        <td>
                            <span v-for="(lable, index) in goodsDetail.areaLabel" :key="index">{{lable}}</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-end">{{$t('goodsDetail.vendorCode')}}：</td>
                        <td>
                            <span v-for="(lable, index) in goodsDetail.providerCode" :key="index">{{lable}}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="cont-bottom">
            <Tabs type="card">
                <Tab-pane :label="$t('goodsDetail.tabOne')">
                    <div class="wrap">
                        <div class="isShow" v-if="isShow">{{ $t('goodsDetail.noSpecTip') }}</div>
                        <table v-html="specHtml" v-else></table>
                    </div>
                </Tab-pane>
                <Tab-pane :label="$t('goodsDetail.tabTwo')">
                    <div class="wrap">
                        <div class="isShow" v-if="isShow">{{ $t('goodsDetail.trTip') }}</div>
                        <table v-else>
                            <thead>
                                <tr>
                                    <th width="80px">{{ $t('goodsDetail.feeding') }}</th>
                                    <th width="116px">{{ $t('goodsDetail.feddingName') }}</th>
                                    <th width="170px">{{ $t('goodsDetail.tabSKU') }}</th>
                                    <th width="86px">{{ $t('goodsDetail.price') }}</th>
                                </tr>
                            </thead>
                            <tbody v-for="(item, feednum) in feedingList" :key="feednum">
                                <tr v-for="(item2, ind) in item.productDetail" :key="ind">
                                    <td v-if="ind==0" :rowspan="item.productDetail.length">{{item.totalName}}</td>
                                    <td>{{item2.productName}}</td>
                                    <td>{{item2.customerCode}}</td>
                                    <td>￥{{(item2.productPrice/100).toFixed(2)}}</td>
                                </tr>
                            </tbody>
                            <tr v-if="isShowTr">
                                <td colspan="4">{{ $t('goodsDetail.trTip') }}</td>
                            </tr>
                        </table>
                    </div>
                </Tab-pane>
            </Tabs>
        </div>
    </div>
</template>

<script>
import { getGoodsDetail } from '@/api/shopGoods.js';
// import { goodsInfo } from '@/mock/shopGoods';

export default {
    data() {
        return {
            goodsDetail: {
                name: null,
                imgUrl: null,
                SKU: null,
                typeName: null,
                labelNames: null,
                areaLabel: [],
                providerCode: []
            },
            goodsSpec: null,
            producFtId: null,
            specHtml: '',
            feedingPid: null,
            isfeeding: true,
            feedingList: null,
            isShowTr: false,
            isShow: false
        };
    },
    methods: {
        goodsDetails() {
            let shopId = this.$route.params.shopId;
            getGoodsDetail(shopId, '379d1f5c-7a60-458f-9f9b-4fd271003fca').then(response => {
                if (response.data.errcode == 100) {
                    var goods = response.data.data;
                    this.goodsDetail = {
                        name: goods.productName,
                        imgUrl: goods.productPicture,
                        SKU: goods.productSKU,
                        typeName: goods.productTypeName,
                        labelNames: goods.productLabel,
                        areaLabel: goods.areaLabel,
                        providerCode: goods.providerCode
                    };
                    if (!goods.specificationMap) {
                        this.isShow = true;
                        return;
                    }
                    var html = '<thead><tr>';
                    goods.specificationMap.specificationName.forEach(function(item) {
                        html += `<th>${item}</th>`;
                    }, this);
                    goods.specificationMap.specification.forEach(function(item, num) {
                        html += `<tbody>`;
                        if (num == 0) {
                            this.feedingPid = item.detailBody[0].productId;
                            // console.log(this.feedingPid);
                        }
                        item.detailBody.forEach(function(item1, ind) {
                            html += `<tr>`;
                            if (ind == 0) {
                                html += `<td rowspan="${item.detailBody.length}">${item.detailName}</td>`;
                            }
                            for (let i = 1; i < goods.specificationMap.specificationName.length - 2; i++) {
                                let totalKey = goods.specificationMap.specificationName[i];
                                for (let key in item1) {
                                    if (item1[key] == null) {
                                        item1[key] = '';
                                    }
                                    if (key === totalKey) {
                                        html += `<td>${item1[key]}</td>`;
                                    }
                                }
                            }
                            html += `<td>${item1.productSKU}</td><td>￥${(item1.productPrice / 100).toFixed(2)}</td>`;
                            html += `</tr>`;
                        }, this);
                        html += `</tbody>`;
                    }, this);
                    this.specHtml = html;
                    if (this.isfeeding) {
                        this.goodsFeeding();
                        this.isfeeding = false;
                    }
                } else {
                    this.$Message.warning(response.data.errmsg);
                }
            }).catch(error => {
                this.isShow = true;
                console.log(error);
            });
        },
        goodsFeeding() {
            getGoodsDetail(this.feedingPid, '379d1f5c-7a60-458f-9f9b-4fd271003fca').then(response => {
                //  getGoodsDetail('30000281').then(response => {
                let res = response.data;
                if (res.errcode == 100) {
                    this.feedingList = response.data.data.productCharging;
                    if (response.data.data.productCharging.length === 0) {
                        this.isShowTr = true;
                    }
                } else {
                    this.$Message.warning(`获取加料信息${res.errmsg}`);
                    this.isShowTr = true;
                }
            }).catch(error => {
                this.$Message.warning(error);
            });
        }
    },
    created() {
        this.goodsDetails();
    }
};
</script>

