<style lang="less" scoped>
.shopList-wrapper{
  color: #747474;
  .nav{
    height: 89px;
    line-height: 89px;
    border-bottom: 1px solid #F5F7F9;
    .left{
      box-sizing: border-box;
      line-height: 0;
      // margin-left: 14px;
      margin-right: 14px;
      .search{
        top: 28.5px;
      }
    }
    .right{
      margin-left: 29px;
      .option{
        display: inline-block;
        margin-left: 21px;
        span{
          margin-right: 21px;
          padding: 3px 7px;
          font-size: 12px;
          vertical-align: middle;
          &.active{
            color: #ED3F14;
            border-bottom: 2px solid #ED3F14;
          }
        }
      }
    }
  }
  .content{
    .topBar{
      width: 100%;
      height: 67px;
      line-height: 67px;
      button{
        font-size: 14px;
      }
      .bar{
        .option {
          display: inline-block;
          margin-left: 20px;
          span{
            margin-right: 20px;
            padding: 3px 7px;
            font-size: 14px;
            vertical-align: middle;
            &.active{
              color: #ED3F14;
              border-bottom: 2px solid #ED3F14; 
            }
          }
        }
      }
      .addShop{
        text-align: right;
        button{
          width: 100px;
          background-color: #fcd000;
          color: #FFF;
          border-style: none;
          font-weight: 500;
        }
      }
    }
    .shopTable{
      width: 100%;
      margin-bottom: 36px;

    }
  }
}
</style>

<template>
   <div class="shopList-wrapper">
      <Row type="flex" class="nav">
        <Col class="left" :xs="{ span: 4 }" :md="{ span: 4 }" :lg="{ span: 4 }">
          <Input class="search" icon="ios-search" placeholder="请输入门店名称或门店编码、城市">
          </Input>
        </Col>
        <Col class="right" :xs="{ span: 19 }" :md="{ span: 19 }" :lg="{ span: 19 }">
            <Button type="ghost">是否有效</Button>
            <div class="option">
                <span class="active">全部</span>
                <span>有效</span>
                <span>无效</span>
            </div>
        </Col>
      </Row>
      <Row type="flex" class="content">
         <div class="topBar">
           <Row>
              <Col class="bar" :xs="{ span: 22 }" :md="{ span: 22 }" :lg="{ span: 22 }">
                  <Button type="ghost" size="small">批量操作</Button>
                  <div class="option">
                      <span class="active">服务信息</span>
                      <span>导入门店</span>
                      <span>营业状态</span>
                      <span>店铺公告</span>
                      <span>店铺简介</span>
                  </div>
              </Col>
              <Col class="addShop" :xs="{ span: 2 }" :md="{ span: 2 }" :lg="{ span: 2 }">
                 <Button type="ghost" @click="load">新增</Button>
              </Col>
           </Row>
         </div>
         <div class="shopTable">
            <Row>
              <Table :columns="columns4" :data="data1"></Table>
                <div style="margin: 10px; overflow: hidden">
                    <div style="float: right;">
                        <Page :total="100" :current="1" @on-change="changePage" show-elevator></Page>
                    </div>
                </div>
            </Row>
         </div>
      </Row>
  </div>
</template>

<script>
  // import shopIcon from '@/components/ShopIcon.vue';
  
  export default {
    data () {
        return {
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '门店编号',
                    key: 'number'
                },
                {
                    title: '门店名称',
                    key: 'name'
                },
                {
                    title: '城市',
                    key: 'city'
                },
                {
                  title: '是否有效',
                  key: 'enabled'
                },
                {
                  title: '开通平台',
                  key: 'platform',
                  render: (h, params) => {
                      return h('div', [
                          h('span', {
                          }, '')
                      ]);
                  }
                },
                {
                  title: '营业时间',
                  key: 'startTime',
                  width: 150,
                  align: 'center'
                },
                {
                   title: ' ',
                   key: 'action',
                   width: 100,
                   align: 'left',
                   render: (h, params) => {
                      return h('div', [
                          h('Icon', {
                              props: {
                                  type: 'edit'
                              },
                              style: {
                                  fontSize: '20px'
                              },
                              on: {
                                  click: () => {
                                      this.show(params.index);
                                  }
                              }
                          }, '')
                      ]);
                    }
                },
                {
                  title: '营业状态',
                  key: 'status',
                  render: (h, params) => {
                      const row = params.row;
                      const color = row.status === 1 ? 'green' : 'red';
                      const text = row.status === 1 ? '营业中' : '休息中';
                      return h('Tag', {
                          props: {
                              type: 'dot',
                              color: color
                          }
                      }, text);
                  }
                },
                {
                   title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index);
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index);
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                }
            ],
            data1: [
                {
                    number: '9512',
                    name: '星巴克宜山路旗舰店',
                    city: '上海',
                    enabled: '有效',
                    platform: '美团，饿了吗',
                    startTime: '07:00-11:00',
                    status: '营业中'
                },
                {
                    number: '9512',
                    name: '星巴克宜山路旗舰店',
                    city: '上海',
                    enabled: '无效',
                    platform: '美团，饿了吗',
                    startTime: '07:00-11:00',
                    status: '营业中'
                },
                {
                    number: '9512',
                    name: '星巴克宜山路旗舰店',
                    city: '上海',
                    enabled: '有效',
                    platform: '美团，饿了吗',
                    startTime: '07:00-11:00',
                    status: '营业中'
                },
                {
                    number: '9512',
                    name: '星巴克宜山路旗舰店',
                    city: '上海',
                    enabled: '有效',
                    platform: '美团，饿了吗',
                    startTime: '07:00-11:00',
                    status: '营业中'
                }
            ]
        };
    },
    created: {

    },
    methods: {
        load: function () {
            console.log(this.$route);
        }
    }
  };
</script>