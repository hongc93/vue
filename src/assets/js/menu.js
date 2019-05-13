/*
 * Filename: menu.js
 * Remark: 菜单配置文件
 * Project: purchase-sell-stock
 * File Created: 2019-03-26 5:56:32 pm
 * Last Modified: 2019-03-26 5:57:07 pm
 * Author: CC
 */
function setRandomId(menuData, parent) {
  menuData.forEach(menu => {
    if (parent) {
      menu.parentId = parent.id
    }
    menu.id = new Date().getTime() + Math.random() * 1e18
    if (menu.children || menu.child) {
      setRandomId(menu.children || menu.child, menu)
    }
  })
}

export const getMenu = () => {
  let sliderMenu = [{
      label: '下单',
      icon: 'icon-xiadan',
      name: 'Orders',
      path: '/orders'
    },
    {
      label: '自用',
      icon: 'icon-ziyong',
      name: 'SelfList',
      path: '/self-list'
    },
    {
      label: '试用装邮寄',
      icon: 'icon-shiyong',
      name: 'TryoutList',
      path: '/tryout-list'
    },

    {
      label: '其他成本',
      icon: 'icon-chengben',
      name: 'OtherCost',
      path: '/other-cost'
    },
    {
      label: '出库单',
      icon: 'icon-chuhuo',
      name: 'SalesList',
      path: '/sales-list'
    },
    {
      label: '进货单',
      icon: 'icon-jinhuodan',
      name: 'PurchaseList',
      path: '/purchase-list'
    },

    {
      label: '库存',
      icon: 'icon-kucun',
      name: 'StockList',
      path: '/stock-list'
    },
    {
      label: '客户信息',
      icon: 'icon-kehuxinxi',
      name: 'CustomList',
      path: '/custom-list'
    },
  
    {
      label: '产品分类',
      icon: 'icon-fenlei',
      name: 'ProductCategory',
      path: '/product-category'
    },
    {
      label: '收入',
      icon: 'icon-income',
      name: 'Income',
      path: '/income'
    }
  ]
  setRandomId(sliderMenu)
  return sliderMenu
}
