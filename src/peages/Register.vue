<!--  -->
<template>
  <div>
    <!-- 顶部返回 -->
    <van-nav-bar title="注册" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      
      <van-field
        v-model="password2"
        type="password"
        name="密码"
        label="密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请确认密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { 
    Form,
     Field,
      Button ,
      NavBar,
      Toast} from "vant";
export default {
  name: "land",
  components: {
    [NavBar.name]: NavBar,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      username: "",
      password: "",
      password2:""
    };
  },
  mounted(){
      
  },
  methods: {
    // 返回上一层
    onClickLeft() {
      // 跳转页面
      this.$router.back();
    },
    onSubmit(){
        let data={
            username: this.username,
             password: this.password,
             password2:this.password2
        }
       this.$http.register(data).then(()=>{
           Toast('注册成功')
           
       })
    }
  }
};
</script>

<style lang='scss' scoped>
</style>
