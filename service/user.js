const userModel = require('./../model/user')

/**
 * 获取用户信息
 * @param  {[type]} user [description]
 * @return {[type]}      [description]
 */
const getUsers = async() => {
  let result = await userModel.getUsers()
  return result
}


/**
 * 创建用户
 * @param  {object} user 用户信息
 * @return {object}      创建结果
 */
const createUser = async(user) => {
  let result = await userModel.createUser(user)
  return result
}

module.exports = {
  getUsers
}