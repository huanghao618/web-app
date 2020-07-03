// 引入 固定写法
import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册路由 固定写法
Vue.use(VueRouter)

// 引入三个页面组件 import后要与component里的相对应  from是引入路径当前下要加./不然会报错
const Home = ()=>import("@/peages/Home.vue")
const Find = ()=>import("@/peages/Find.vue")
const Shop =()=>import("./peages/Shop.vue")
const User = ()=>import("@/peages/User.vue")
const Detail=()=>import("@/peages/Detail.vue")
const Land = ()=>import("@/peages/Land.vue")
const Register = ()=>import("@/peages/Register.vue")
// 路由：定义了一组“路径-组件”匹配关系
// 创建路由实例
// 创建一个路由然后里面是！！注意routes是数组，
// 然后第一个是拼接的路径 第二个是上面的参数.path: '/hh1'要加/不然不显示
// alias是小名
const router = new VueRouter({
  // 默认不写是hash模式，缺点是url带个#号，比较难看，
  // history模式是优点是url没有#号。但是外网刷新页面会出现404.
  // 解决办法是(要求后端做重定向处理。文档有解决问题的办法)
  // mode:"hash",
  routes:[
    {path:"",redirect:"./home"},
    {path:"/home",component:Home,},
    {path:"/find",component:Find},
    {path:"/shop",component:Shop},
    {path:"/user",component:User},
    {path:"/login",component:Land},
    {path:"/register",component:Register},
    { path: '/detail/:id', component: Detail, props: true },
    
  ]
})
export default router