<!--  -->
<template>
  <van-tabbar
    route
    active-color="#F53515"
    fixed
  >
    <van-tabbar-item
      icon="home-o"
      to="/home"
    >
      首页
    </van-tabbar-item>
    <van-tabbar-item
      icon="search"
      to="/find"
      dot
    >
      发现
    </van-tabbar-item>
    <van-tabbar-item
      icon="friends-o"
      to="/shop"
      badge="10"
    >
      购物车
    </van-tabbar-item>
    <van-tabbar-item
      icon="setting-o"
      to="/user"
    >
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem

    },
    data() {
        return {
        };
    }
};

</script>

<style lang='scss' scoped>

</style>
