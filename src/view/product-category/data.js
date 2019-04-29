export const columns = [
  {
    label: '系列',
    prop: 'series',
    align: 'left'
  },
  {
    label: '规格',
    prop: 'specifications',
    align: 'left',
    render:(h,params)=>{
      
      return <div>{params.row.children}</div>
    }
  },
  {
    label: '零售价',
    prop: 'retailPrice',
    align: 'right'
  }
]
