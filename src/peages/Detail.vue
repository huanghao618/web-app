<template lang="html">
  <div>
    <h3 v-text="info.name" />
    <img :src="info.img">

    <van-button
      type="info"
      @touchstart="addToCart"
    >
      加入购物车
    </van-button>
  </div>
</template>

<script>
import { Button, Toast } from 'vant';
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
    data() {
        return {
            info: {}
        };
    },
    mounted() {
        const params = {
            good_id: this.$route.params.id
        };
        this.$http.getGoodDetail(params).then(res => {
            this.info = res;
        });
    },
    beforeDestroy() {
        clearTimeout(this.timer);
    },
    methods: {
        addToCart() {
            const data = {
                good_id: this.info._id
            };
            this.$http.addToCart(data).then(() => {
                Toast('添加成功');
                this.timer = setTimeout(() => {
                    this.$router.push('/shop');
                }, 1500);
            });
        }
    }
};
</script>

<style lang="css" scoped>
</style>
