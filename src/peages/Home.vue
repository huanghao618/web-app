<!--创建vue三步template 里面只有一个父级-->
<!--  -->

<template>
  <div class="home">
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

    <!-- 顶部提示框 -->
    <van-notice-bar mode="closeable" left-icon="smile-o" scrollable text="京东618，年中大促销。更快，更省"></van-notice-bar>
    <!-- 搜索框 -->
    <van-search shape="round" background="#B20D07" :placeholder="tips" show-action disabled>
      <template #action>
        <div class="login" @click="skipToLogin">测试合并代码</div>
        <div>测试测试合并代码</div>
      </template>
    </van-search>
    <!-- 轮播图 -->
    <van-swipe :autoplay="2000" indicator-color="white">
      <van-swipe-item>
        <van-image
          src="//img20.360buyimg.com/babel/s590x470_jfs/t1/138502/17/690/85785/5ee78198E9cea4164/966981e914e93a2e.jpg.webp"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          src="//img10.360buyimg.com/pop/s590x470_jfs/t1/124371/29/5044/56116/5ee88037E7e7a9b46/d9febb06671e4fb5.jpg.webp"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          src="//img12.360buyimg.com/da/s590x470_jfs/t1/132276/20/2431/86168/5ee98b05E317fdbea/7c48dd5bb288baf2.jpg.webp"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          src="//img11.360buyimg.com/pop/s590x470_jfs/t1/111858/15/8568/72232/5ecf8e84E09decf54/ed26d6d9b7c460d0.jpg.webp"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 分割线 -->
    <van-divider>
      <template>
        <div class="fenge">为你推荐</div>
      </template>
    </van-divider>
    <!-- 列表 -->
      <van-list
       finished-text="没有更多了"
      :finished="finished"
      v-model="loading"
      @load="onLoad"
      :immediate-check='false'
      offset='50'
    >
      <!-- v-for循环一个数字时，是从1开始 -->
      <div v-for="i in len" :key="i">
        <Good :good='list[2*(i-1)]'></Good>
        <Good :good='list[2*(i-1)+1]'></Good>
      </div>
    </van-list>
  </van-pull-refresh>

    <!-- 底部 -->
    <TabBar></TabBar>
    
   
  </div>
</template>

<script>
import {
  NoticeBar,
  Search,
  Image,
  Swipe,
  SwipeItem,
  Divider,
  Tabbar,
  TabbarItem,
  PullRefresh ,
  List,
  Toast
} from "vant";
export default {
  name: "Home",
  //  转换为局部组件并进行异步加载
  components: {
    //  引入公共vue
    TabBar: () => import("@/components/Tabbar.vue"),
    Good:()=>import ("@/components/Good.vue"),
    [NoticeBar.name]: NoticeBar,
    [Search.name]: Search,
    [Image.name]: Image,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Divider.name]: Divider,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [PullRefresh .name]:PullRefresh ,
    [List.name]:List
  },
  data: function() {
    return {
      //  登陆
      refreshing: false,
      list: [],
      page: 1,
      finished: false,
      loading: false
    };
  },
  //  计算属性
  computed: {
    tips: function() {
      var arr = ["电脑", "手机", "平板", "鼠标"];
      return arr[Math.floor(Math.random() * 4)];
    },
    len: function() {
      return Math.floor(this.list.length/2)
    }
  },
  mounted(){
this.getList()
  },
   methods: {
    skipToLogin() {
      // 跳转去登录页
      this.$router.push("/login")
    },
    onRefresh() {
      this.page = 1
      this.getList()
    },
    onLoad() {
      this.loading = true
      this.page++
      this.getList()
    },
    //商品列表
    getList() {
      let params = {
        hot: true,
        page: this.page
      }
      this.$http.tuijian(params).then(res=>{
        console.log('商品列表', res.list)
        if (res.length < 10) {
          Toast('没有更多了')
        }
        if (this.refreshing) {
          this.list = res.list
        } else {
          this.list = [...this.list, ...res.list]
        }
        this.finished = false
        this.refreshing = false
        this.loading = false
       
      })
    }
  }
};
</script>

 <style lang="scss">
.home {
  .login {
    color: #ffffff;
  }
  .van-image {
    width: 100%;
    height: 2.6667rem;
  }
  .van-divider {
    color: red;
  }
}
</style>

