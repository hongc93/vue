// import _isEqual from 'lodash/findIndex'

// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18

/**
 *
 *日期格式化
 * @param {*} date new Date日期
 * @param {*} fmt 格式。例如：yyyy-MM-dd hh:mm:ss.S，yyyy-M-d h:m:s.S
 * @returns 返回值，例如：2006-07-02 08:09:04.423，2006-7-2 8:9:4.18
 */
export const formatDate = (date, fmt) => {
  let myDate = new Date(date)
  let o = {
    'M+': myDate.getMonth() + 1, //月份
    'd+': myDate.getDate(), //日
    'h+': myDate.getHours(), //小时
    'm+': myDate.getMinutes(), //分
    's+': myDate.getSeconds(), //秒
    'q+': Math.floor((myDate.getMonth() + 3) / 3), //季度
    S: myDate.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (myDate.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  for (let k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  return fmt
}

/**
 *
 *根据name/params/query判断两个路由对象是否相等
 * @param {*} route1
 * @param {*} route2
 * @returns
 */
// export const routeEqual = (route1, route2) => {
//   const params1 = route1.params || {}
//   const params2 = route2.params || {}
//   const query1 = route1.query || {}
//   const query2 = route2.query || {}
//   return (
//     route1.name === route2.name &&
//     _isEqual(params1, params2) &&
//     _isEqual(query1, query2)
//   )
// }
