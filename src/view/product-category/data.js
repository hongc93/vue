export const columns = [
         {
           label: '系列',
           prop: 'series',
           align: 'left',
           width: '200'
         },
         {
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
           label: '零售',
           prop: 'retailPrice',
           align: 'right'
         },
         {
           label: '铺货',
           prop: 'distributionPrice',
           align: 'right'
         },
         {
           label: '首席',
           prop: 'chiefPrice',
           align: 'right'
         },
         {
           label: '总代',
           prop: 'rosePrice',
           align: 'right'
         },
         {
           label: '一级',
           prop: 'beginPrice',
           align: 'right'
         },
         {
           label: 'VIP',
           prop: 'vipPrice',
           align: 'right'
         },
         {
           label: '会员',
           prop: 'memberPrice',
           align: 'right'
         }
       ]
