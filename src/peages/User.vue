<template>
  <div>
    <h1>我的</h1>
    <!-- 底部 -->
    <TabBar></TabBar>
  </div>
</template>
<script>
export default {
  components:{
    //  引入公共vue
    TabBar: ()=>import('@/components/Tabbar.vue'),
    }
};
</script>
<style lang='scss' scoped>
</style>