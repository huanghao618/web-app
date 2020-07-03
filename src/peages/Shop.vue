<!--  -->
<template>
  <div class="shop">
    <!-- 顶部返回 -->
    <van-nav-bar title="购物车" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" />
    <!-- 商品列表 -->
    <div v-for="item in getCartList" :key="item._id">
      <van-row type="flex" justify="center" align="center">
        <!-- 左边的 -->
        <van-col span="4" class="checkbox">
          <van-cell>
            <van-checkbox v-model="checked" />
          </van-cell>
        </van-col>
        <!-- 右边的 -->

        <van-col span="20">
          <van-swipe-cell>
            <van-card
              :num="item.num"
              :price="item.good.price"
              :desc="item.good.desc"
              :title="item.good.name"
              :thumb="item.good.img"
            >
              <template #footer>
                <van-button size="mini" @touchstart="update('sub',item)">-</van-button>
                <van-button size="mini" @touchstart="update('add',item)">+</van-button>
              </template>
            </van-card>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
                @touchstart="click(item)"
              />
            </template>
          </van-swipe-cell>
        </van-col>
      </van-row>
    </div>
    <!-- 底部提交 -->
    <van-submit-bar :price="3030" button-text="提交订单">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import {
  NavBar,
  SubmitBar,
  Button,
  Checkbox,
  Col,
  Row,
  Cell,
  SwipeCell,
  Card,
  Toast
} from "vant";
export default {
  components: {
    //  引入公共vue
    [NavBar.name]: NavBar,
    [SubmitBar.name]: SubmitBar,
    [Card.name]: Card,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [Col.name]: Col,
    [Row.name]: Row,
    [Cell.name]: Cell,
    [SwipeCell.name]: SwipeCell
  },
  // computed:{
  //  shopprice(item){
  //  return item.num*item.good.price*100
  //  }
  // },
  data() {
    return {
      checked: "",
      getCartList: [],
    };
  },
  mounted() {
    this.shop();
  },
  methods: {
    // 封装刷新购物车
    shop: function() {
      this.$http.getCartList({}).then(res => {
        this.getCartList = res;
      });
    },
    // 修改地址
    onClickEditAddress() {},
    // 返回上一层
    onClickLeft() {
      this.$router.back();
    },
    // 删除
    click(item) {
      let params = {
        id: item._id
      };
      this.$http.shopdelete(params).then(() => {
        Toast("删除成功");
        //  调刷新购物车
        this.shop();
      });
    },
    update(type,item) {
      if(type=="sub" && item.num==1)return Toast("不能减了")
      let data = {
        num: type=="sub"?item.num--:item.num++,
        id: item._id
      };
      this.$http.updateCartNum(data).then(() => { });
    }
  }
};
</script>   

<style lang='scss' scoped>
.shop {
  .checkbox {
    text-align: center;
  }
  .delete-button {
    height: 100%;
  }
  .van-card {
    padding-left: 0;
  }
}
</style>
