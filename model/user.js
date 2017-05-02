const db = require('./../util/db')
const type = require('./../util/type')

/**
 * 获取用户数据
 * @return {object}       mysql执行结果
 */
let getUsers = async () => {
  let result = await db.selectAll('user')
  return result
}


/**
 * 插入用户数据
 * @param  {object} model 用户数据模型
 * @return {object}       mysql执行结果
 */
let createUser = async (model) => {
  let result = await db.insertData('user', model)
  return result
}

let getExistOne = async (options) => {
  let _sql = `
    SELECT * FROM user
    WHERE email = ${options.email} OR name = ${options.name}
    LIMIT 1 
  `
  let result = await db.query(_sql)

  return result
}



module.exports = {
  getUsers,
  createUser,
  getExistOne
}