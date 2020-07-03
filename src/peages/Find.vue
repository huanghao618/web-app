<template>
  <div class="find">
    <div class="find-left">
      <!-- 侧边导航 -->
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </div>
    <!-- 宫格 -->
    <div class="find-right">
      <div v-for="i in 20" :key="i">
        <van-grid column-num="3">
          <van-grid-item>
            <template>
              <div class="find-good">
              <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <div>文字</div>
              </div>
            </template>
          </van-grid-item>
          <van-grid-item>
            <template>
              <div class="find-good">
              <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <div>文字</div>
              </div>
            </template>
          </van-grid-item>

          <van-grid-item>
            <template>
              <div class="find-good">
              <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <div>文字</div>
              </div>
            </template>
          </van-grid-item>

        </van-grid>
      </div>
    </div>
    <!-- 底部 -->
    <TabBar></TabBar>
  </div>
</template>
<script>
import { Sidebar, SidebarItem, Grid, GridItem, Image } from "vant";
export default {
  components: {
    //  引入公共vue
    TabBar: () => import("@/components/Tabbar.vue"),
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image
  },
  data() {
    return {
      activeKey: 0
    };
  }
};
</script>
<style lang='scss' scoped>
.find {
  .find-left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 1.6rem;
    width: 2.27rem;
    overflow: auto;
    // 在移动端有absolute产生滚动条，使用下面这个属性，可以更加流畅
    overflow-scrolling: touch;
  }
  .find-right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 1.6rem;
    left: 2.27rem;
    overflow: auto;
    // 在移动端有absolute产生滚动条，使用下面这个属性，可以更加流畅
    overflow-scrolling: touch;
    .find-good{
      &>div{
        font-size:0.2133rem ;
        text-align: center;
      }
    }
  }

}
</style>