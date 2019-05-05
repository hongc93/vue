export const columns = [
         {
           label: '系列',
           prop: 'series',
           align: 'left',
           width: '200',
           key:1
         },
         {
             key:2,
           label: '规格',
           prop: 'specifications',
           align: 'left',
           minWidth: '240',
           render: (h, params) => {
             return (
               <div class="specifications">
                 {params.row.specifications.map(item => {
                   return (
                     <div>
                       <span class="size">{item.size}</span>
                       <span class="range">{item.range}</span>
                       <span class="amount">{item.amount}</span>
                     </div>
                   )
                 })}
               </div>
             )
           }
         },
         {
             key:3,
           label: '零售',
           prop: 'retailPrice',
           align: 'right'
         },
         {
             key:4,
           label: '铺货',
           prop: 'distributionPrice',
           align: 'right'
         },
         {
             key:5,
           label: '首席',
           prop: 'chiefPrice',
           align: 'right'
         },
         {
             key:6,
           label: '总代',
           prop: 'rosePrice',
           align: 'right'
         },
         {
             key:7,
           label: '一级',
           prop: 'beginPrice',
           align: 'right'
         },
         {
             key:8,
           label: 'VIP',
           prop: 'vipPrice',
           align: 'right'
         },
         {
             key:9,
           label: '会员',
           prop: 'memberPrice',
           align: 'right'
         }
       ]
