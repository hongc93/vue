export const columns = [
         {
           key: 1,
           label: '系列',
           prop: 'series',
           align: 'left',
           width: '200',
           disabled: true
         },
         {
           key: 2,
           label: '箱容量',
           prop: 'boxCapacity',
           align: 'center',
           width: '200',
           disabled: true
         },
         // {
         //   key: 2,
         //   label: '规格',
         //   prop: 'specifications',
         //   align: 'left',
         //   minWidth: '240',
         //   render: (h, params) => {
         //     return (
         //       <div class="specifications">
         //         {params.row.specifications.map(item => {
         //           return (
         //             <div>
         //               <span class="size">{item.size}</span>
         //               <span class="range">{item.range}</span>
         //               <span class="amount">{item.amount}</span>
         //             </div>
         //           )
         //         })}
         //       </div>
         //     )
         //   }
         // },
         {
           key: 3,
           label: '零售(元)',
           prop: 'retailPrice',
           align: 'center'
         },
         {
           key: 4,
           label: '铺货(元)',
           prop: 'distributionPrice',
           align: 'center'
         },
         {
           key: 5,
           label: '首席(元)',
           prop: 'chiefPrice',
           align: 'center'
         },
         {
           key: 6,
           label: '总代(元)',
           prop: 'rosePrice',
           align: 'center'
         },
         {
           key: 7,
           label: '一级(元)',
           prop: 'beginPrice',
           align: 'center'
         },
         {
           key: 8,
           label: 'VIP(元)',
           prop: 'vipPrice',
           align: 'center'
         },
         {
           key: 9,
           label: '会员(元)',
           prop: 'memberPrice',
           align: 'center'
         }
       ]
