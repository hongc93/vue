export const tableData = {
  col: [
    {
      prop: 'basic',
      label: '基本信息',
      render: (h, params) => {
        return (
          <div>
            <div class="thum">
              <img src={params.row.basic.thum} />
            </div>
            <div class="info">
              <div class="name">
                <span>名称：</span>
                {params.row.basic.label}
              </div>
              <div class="price">
                价格：
                <span>
                  ￥ {
                    params.row.basic.specifications[
                      params.row.basic.specificationVal
                    ].price
                  }
                  元/{params.row.basic.perUnit}
                </span>{' '}
                容量：
                <span>
                  {
                    params.row.basic.specifications[child.specificationVal]
                      .count
                  }
                </span>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      prop: 'subtotal',
      label: '小计'
    }
  ],
  data: [
    {
      basic: {
        label: '丝柔亲体纸尿裤 (大包) ',
        thum: require('@/assets/img/no-thum.png'),
        specificationVal: 0,
        buyCount: 0,
        total: '',
        specifications: [
          {
            size: 'S',
            range: '3-6KG',
            amount: '60片',
            price: 108,
            count: '3包/箱'
          },
          {
            size: 'M',
            range: '5-11KG',
            amount: '50片',
            price: 108,
            count: '3包/箱'
          },
          {
            size: 'L',
            range: '(9-13KG)',
            amount: '46片',
            price: 108,
            count: '3包/箱'
          },
          {
            size: 'XL',
            range: '12KG以上',
            amount: '42片',
            price: 108,
            count: '3包/箱'
          }
        ]
      },
      subtotal: 0
    }
  ]
}
