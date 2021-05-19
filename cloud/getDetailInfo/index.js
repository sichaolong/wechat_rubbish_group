// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()


/**
 * 根据id查询城市详细信息
 * @param {*} event 
 * @param {*} context 
 */
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
 
  return db.collection('citys').where({
    id: event.cid
  }).get()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}