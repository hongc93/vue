/*
 * Filename: menu.js
 * Remark: 菜单配置文件
 * Project: purchase-sell-stock
 * File Created: 2019-03-26 5:56:32 pm
 * Last Modified: 2019-03-26 5:57:07 pm
 * Author: CC
 */
function setRandomId(menuData,parent) {
  menuData.forEach(menu => {
    if(parent){
      menu.parentId = parent.id
    }
    menu.id = new Date().getTime()+Math.random()*1e18
    if(menu.children || menu.child){
      setRandomId(menu.children || menu.child,menu)
    }
  })
}

export const getMenu = () => {
  let sliderMenu = [
    {
      label: '出货单',
      icon: 'icon-liebiao',
      name: 'SalesList',
      path: '/sales-list'
    },
    {
      label: '库存',
      icon: 'icon-liebiao',
      name: 'StockList',
      path: '/stock-list'
    },
    {
      label: '试用装邮寄',
      icon: 'icon-liebiao',
      name: 'TryoutList',
      path: '/tryout-list'
    },
    {
      label: '客户信息',
      icon: 'icon-liebiao',
      name: 'CustomList',
      path: '/custom-list'
    },
    {
      label: '其他成本',
      icon: 'icon-liebiao',
      name: 'OtherCost',
      path:'/other-cost'
    },
    {
      label: '收入',
      icon: 'icon-liebiao',
      name: 'Income',
      path:'/income'
    },
    {
      label: '进货单',
      icon: 'icon-liebiao',
      name: 'PurchaseList',
      path:'/purchase-list'
    },
    {
      label: '自用',
      icon: 'icon-liebiao',
      name: 'SelfList',
      path:'/self-list'
    },
    {
      label: '产品价目',
      icon: 'icon-liebiao',
      name: 'PriceList',
      path:'/price-list'
    }
  ]
  setRandomId(sliderMenu)
  return sliderMenu
}