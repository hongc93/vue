export const productAry = [
  {
    label: '纸尿裤系列',
    name: 'diapers',
    perUnit: '包',
    children: [
      {
        value: 'rouDipersBig',
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
      {
        value: 'rouDipersSmall',
        label: '丝柔亲体纸尿裤 (小包) ',
        thum: require('@/assets/img/no-thum.png'),
        specificationVal: 0,
        buyCount: 0,
        total: '',
        specifications: [
          {
            size: 'NB',
            range: '4KG以下',
            amount: '40片',
            price: 58,
            count: '6包/箱'
          },
          {
            size: 'S',
            range: '3-6KG',
            amount: '30片',
            price: 58,
            count: '6包/箱'
          }
        ]
      }
    ]
  },
  {
    label: '卫生巾系列',
    name: 'tampon',
    perUnit: '包',
    children: [
      {
        value: 'pyjamas',
        label: '舒心安睡裤 ',
        thum: require('@/assets/img/no-thum.png'),
        specificationVal: 0,
        buyCount: 0,
        total: '',
        specifications: [
          {
            size: 'S-M',
            amount: '2片/包',
            price: 18,
            count: '30包/箱'
          }
        ]
      },
      {
        value: 'Butterfly',
        label: '蝶影卫生巾 ',
        thum: require('@/assets/img/no-thum.png'),
        specificationVal: 0,
        buyCount: 0,
        total: '',
        specifications: [
          {
            size: '日用 240mm',
            amount: '8片/包',
            price: 18,
            count: '24盒/箱'
          }
        ]
      }
    ]
  }
]
