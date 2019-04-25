export const tableData = {
  col: [
    {
      prop: 'basic',
      label: '基本信息',
      render: (h, params) => {
        return (
          <div>
            <div class="thum">
              <img src={params.row.thum} />
            </div>
            <div class="info">
              <div class="name">
                <span>名称：</span>
                {params.row.productName}
              </div>
            </div>
          </div>
        )
      }
    },
    {
      prop: 'price',
      label: '单价',
      align: 'center'
    },
    {
      prop: 'count',
      label: '数量',
      align: 'center',
      render: (h, params) => {
        let min = 1
        const handleChange = value => {
          this.$nextTick(() => {
            console.log(222222)
          })
        }
        let count = params.row.count
        return (
          <div>
            {params.row.count}
            {count}
            <el-input-number
              v-model={count}
              min={min}
              onChange={handleChange}
            />
          </div>
        )
      }
    },
    {
      prop: 'total',
      label: '小计',
      align: 'center',
      render: (h, params) => {
        let total = params.row.price * params.row.count
        return <div>{total}</div>
      }
    }
  ],
  data: [
    {
      productName: '丝柔亲体纸尿裤 (大包)',
      thum: require('@/assets/img/no-thum.png'),
      size: 'S',
      price: 108,
      count: 3,
      total: ''
    }
  ]
}
