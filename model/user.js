const db = require('./../utils/db')
const types = require('./../utils/types')

module.exports = {
  /**
   * 获取一个已存在用户的信息
   * @param  {object} options [description]
   * @return {object | null}         [description]
   */
  async getExistOne(options) {
    let SQL = `
      SELECT * FROM user WHERE email = '${options.email}' LIMIT 1
    ` 
    let result = await db.query(SQL)

    if (types.isArray(result) && result.length > 0) {
      console.log(result)

      result = result[0]
    } else {
      result = null
    }

    return result
  },

  /**
   * 通过邮箱和密码获取用户信息
   * @param  {object} options [description]
   * @return {object | null}         [description]
   */
  async getUserByEmailAndPassword(options) {
    let SQL = `
      SELECT * FROM user WHERE email = '${options.email}' AND password = '${options.password}' LIMIT 1
    `
    let result = await db.query(SQL)

    if (types.isArray(result) && result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  }
}