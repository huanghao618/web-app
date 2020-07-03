<!--  -->
<template>
  <div>
    <!-- 顶部返回 -->
    <van-nav-bar title="登陆" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" />
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
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登陆</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { NavBar, Form, Field, Button } from "vant";
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
    };
  },
  mounted(){
  
  },
  methods: {
    // 返回上一层
    onClickLeft() {
      this.$router.back();
    },
      onSubmit(){
        let data={
            username: this.username,
             password: this.password,
        }
       this.$http.land(data).then(res=>{
           console.log('登陆成功', res)
          //  登陆记录token
            localStorage.setItem('token', res.token)
             // 登录完成之后 跳转回首页
            this.$router.replace('/home')
           
       })
    }
  }
};
</script>

<style lang='scss' scoped>
</style>
