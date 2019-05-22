import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/view/login/login.vue')
    },
    {
      path: '',
      component: () => import('@/view/index'),
      children: [
        {
          path: '/',
          name: 'IndexPage',
          component: () => import('@/view/orders/orders')
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('@/view/orders/orders')
        },
        {
          path: 'sales-list',
          name: 'SalesList',
          component: () => import('@/view/sales-list/sales-list')
        },
        {
          path: 'stock-list',
          name: 'StockList',
          component: () => import('@/view/stock-list/stock-list')
        },
        {
          path: 'tryout-list',
          name: 'TryoutList',
          component: () => import('@/view/tryout-list/tryout-list')
        },
        {
          path: 'custom-list',
          name: 'CustomList',
          component: () => import('@/view/custom-list/custom-list')
        },
        {
          path: 'other-cost',
          name: 'OtherCost',
          component: () => import('@/view/other-cost/other-cost')
        },
        {
          path: 'income',
          name: 'Income',
          component: () => import('@/view/income/income'),
          redirect: 'income/bill-follow',
          children: [
            {
              path: 'bill-follow',
              name: 'BillFollow',
              component: () =>
                import('@/view/income/components/bill-follow/bill-follow')
            },
            {
              path: 'income-settle',
              name: 'IncomeSettle',
              component: () =>
                import('@/view/income/components/income-settle/income-settle')
            }
          ]
        },
        {
          path: 'purchase-list',
          name: 'PurchaseList',
          component: () => import('@/view/purchase-list/purchase-list')
        },
        {
          path: 'self-list',
          name: 'SelfList',
          component: () => import('@/view/self-list/self-list')
        },
        {
          path: 'product-category',
          name: 'ProductCategory',
          component: () => import('@/view/product-category/product-category')
        },
        {
          path: 'settlement-list',
          name: 'SettlementList',
          component: () => import('@/view/settlement-list/settlement-list')
        },
        {
          path: 'settlement-type',
          name: 'SettlementType',
          component: () => import('@/view/settlement-type/settlement-type')
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.meta.title) {
    document.title = to.meta.title
  }
  //顶部进度条开始
  Vue.prototype.$Progress.start()
  next()
})
router.afterEach(() => {
  Vue.prototype.$Progress.finish()
})
export default router
