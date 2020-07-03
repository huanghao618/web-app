# webapp-myshop
created by huanghao at 2020-6-115

## webapp项目周

#### 一、Vue项目创建

1、安装node.js环境（node -v 验证）  

	A - B、C-D-E
2、cnpm的使用   

```
# 把国外的服务器，切换至淘宝镜像源。
# 使用cnpm安装第三方模块，网速会更快。
npm install -g cnpm --registry=https://registry.npm.taobao.org
```     

3、安装vue脚手架（@vue/cli)
	脚手架是一个第三方库，需先安装才能使用all @vue/cli -g
    cnpm insat @vue/cli -g
	-g 表示全局安装 global  cnpm insat @vue/cli -g
  
  vue create 文件名

4、使用脚手架来创建项目
	warn warning 警告
	error 红色，一定手动处理  

5、vue.config.js 配置文件   

6、第三方依赖依赖
	(c)npm install xxx -S  把包记录在dependencies这里
	(c)npm install yyy -D  把包记录在devDependencies这里
	(c)npm install 会根据根目录中的package.json文件中记录的第三方包来进行安装。 如果有时加载不了。删除可以删除node_modules在通过npm install重新安装
	(c)npm install zzz -g  全局安装永久可用  

7、ESLint
	作用：用于规范代码风格  


 # 把项目发在gitee上 
 ## 第一次提交
1、cd 把文件路径拖进来  

2、git init （初始化） 

3、git add * 

4、git commit -m "第一次提交" 

5、gitee新建仓储 

6、git remote add origin https://gitee.com/huanghao0618/（仓库地址）.git 

7、git push -u origin master

 ## 第二次和以后提交
 1、git add * 

 2、git commit -m "第二次提交" 
 
 3、git push

# 路由
1、安装 cnpm install vue-router -S(安装包要在根目录里安装，就是跟package.json同一级)

2、然后在src下创建router.js

3、// 引入 固定写法 import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册路由 固定写法
Vue.use(VueRouter)

4、// 引入三个页面组件 import后要与component里的相对应  from是引入路径当前下要加./不然会报错
import Home from './peages/HH1.vue'
import Find from './peages/HH2.vue'
import User from './peages/HH3.vue'

5、// 路由：定义了一组“路径-组件”匹配关系
// 创建路由实例
// 创建一个路由然后里面是！！注意routes是数组，然后第一个是拼接的路径 第二个是上面的参数.path: '/hh1'要加/不然不显示
let router = new VueRouter({
  routes: [
    { path: '/hh1', component: Home },
    { path: '/hh2', component: Find },
    { path: '/hh3', component: User }
  ]
})

6、
// 抛出实例
// 然后要把实例抛出去。要在main.js接收。因为main.js是Vue项目的入口
export default router

7、
// 这里是接收router的实例
import router from './router'

8、
// 创建根组件实例
new Vue 然后里面的要写router
9、
这是接收要显示的组件
  router-view  /router-view

10、
router-link 
这是接收里有三个参数-->  
to是默认是a标签.然后跳转之前写的页面
tag="p"里面是标签名,默认是a标签,标签名都可以写
active-class="on"里面绑定是class的名字

# 路由

1、动态路由 后面props里传true传参给父级接收

path:"/details/:id",component:Details, props:true


2、重定向，当有二级路由时路径不加/，然后要默认跳转详情页path:"",redirect:"/index2/shop"，前面写空

当你访问某一个路径时，自动跳转到另一个路径 redirect

path: '/', redirect: '/index2'

3、 mode默认不写是hash模式，缺点是url带个#号，比较难看，

   history模式是优点是url没有#号。
   
   但是外网刷新页面会出现404.解决办法是(要求后端做重定向处理。文档有解决问题的办法)

4、路由懒加载  使用箭头函数 使用异步原理，节省项目性能

const Gouwu =()=>import("./peages/Gouwu.vue")

5、嵌套路由

children:{path:"shop",component:Shop}, // 二级路径不加/最终路径是/index2/shop
         {path:"youhui",component:Youhui},// 二级路径不加/最终路径是/index2/youhui
         {path:"",redirect:"/index2/shop"}

#  声明式导航和编程式导航，怎么灵活使用呢？答：如果是侧边栏类似的导航建议用声明式导航，如果按钮跳转时使用编程式导航

6、声明式导航，可以是高亮样式可以无限点击

to是默认是a标签.然后跳转之前写的页面

tag="p"里面是标签名,默认是a标签,标签名都可以写

active-class="on"里面绑定是class的名字

 router-link to="/index1" tag="span" active-class="on" 首页 /router-link

 7、编程式导航不需高亮样式，不可以联系点击单个，用户看不到，但是控制台会报错

 span @click="tab(1)">首页在methods定义

   // .push()  

    //  .replace() 

    //  this.$router.push('/hh1')   路由栈（先进后出返回上一页）

    //  this.$router.replace('/hh1') 直接返回首页




