<template lang="html">
<div>
  <h3 v-text='info.name'></h3>
  <img :src="info.img">

  <van-button type='info' @touchstart='addToCart'>加入购物车</van-button>
</div>
</template>

<script>
import { Button, Toast } from 'vant'
export default {
  // props: ['id'],
  components: {
    [Button.name]: Button
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      info: {}
    }
  },
  mounted() {
    let params = {
      good_id: this.$route.params.id
    }
    this.$http.getGoodDetail(params).then(res=>{
      this.info = res
    })
  },
  methods: {
    addToCart() {
      let data = {
        good_id: this.info._id
      }
      this.$http.addToCart(data).then(()=>{
        Toast('添加成功')
        this.timer = setTimeout(()=>{
          this.$router.push('/shop')
        },1500)
      })
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="css" scoped>
</style>
