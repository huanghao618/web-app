import fetch from "./fetch"

// 注册
export function register(data){
return fetch({
    url:"/users/regiter",
    method:"POST",
    data
})
}
// 登陆
export function land(data){
    return fetch({
        url:"/users/login",
        method:"POST",
        data
    })
}

// 获取首页推荐商品
export function tuijian(params){
  return fetch({
      url:"/goods/find",
      method:"GET",
      params
  })
}
// 获取商品详情
export function getGoodDetail(params){
    return fetch({
        url:"/goods/getGoodDetail",
        method:"GET",
        params

    })
}
// 添加到购物车
export function addToCart(data) {
    return fetch({
      url: '/goods/add',
      method: 'POST',
      data
    })
  }
// 获取购物车列表：  
export function getCartList(params){
return fetch({
    url:"/goods/getCartList",
    method:"GET",
    params
})
}
// 删除购物车中的商品：
export function shopdelete(params){
    return fetch({
        url:"/goods/del",
        method:"GET",
        params
    })
}
// 更改购物车中的商品数量
export function updateCartNum(data){
    return fetch({
        url:"/goods/add",
        method:"POST",
        data
    })
}


export default{
    register,
    land,
    tuijian,
    getGoodDetail,
    addToCart,
    getCartList,
    shopdelete,
    updateCartNum
}