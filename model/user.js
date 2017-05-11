const db = require('./../utils/db')
const types = require('./../utils/types')

module.exports = {
  /**
   * 通过邮箱获取指定用户信息
   * @param  {object} options [description]
   * @return {object | null}         [description]
   */
  async getUserByEmail(options) {
    let SQL = `
      SELECT * FROM user WHERE email = '${options.email}' LIMIT 1
    ` 
    let result = await db.query(SQL)

    if (types.isArray(result) && result.length > 0) {
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
  },

  async getUsers(options) {
    let whereSQLArray = []
    let whereSQL = ''

    if (options.email) {
      whereSQLArray.push(`email like '%${options.email}%'`)
    }

    if (options.username) {
      whereSQLArray.push(`username like '%${options.username}%'`)
    }

    if (options.status) {
      whereSQLArray.push(`status = ${options.status}`)
    }

    if (options.authority) {
      whereSQLArray.push(`authority = ${options.authority}`)
    }

    if (whereSQLArray.length) {
      whereSQL = 'WHERE '
      for (var i = 0; i < whereSQLArray.length - 1; i++) {
        whereSQL += whereSQLArray[i] + ' AND '
      }
      whereSQL += whereSQLArray[i]
    }


    let rows = options.pageSize 
    let offset = (options.currentPage - 1) * rows

    let limitSQL = `LIMIT ${offset}, ${rows}`

    let usersSQL = `
      SELECT 
        id, email, username, authority, status, updated_at AS updatedAt, created_at AS createdAt 
      FROM user
      ${whereSQL}
      ${limitSQL};
    ` 
    
    let countSQL = `
      SELECT COUNT(*) AS total FROM user
      ${whereSQL}
    `

    let [users, count] = await Promise.all([db.query(usersSQL), db.query(countSQL)])

    return {
      users,
      total: count[0].total
    }
  },

  /**
   * 根据邮箱信息修改指定用户的指定字段信息
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  async updateUser(options) {
    let SQL = `
      UPDATE user 
      SET username = '${options.username}', status = ${options.status}, authority = ${options.authority} 
      WHERE email = '${options.email}';
    `

    let result = await db.query(SQL)
    return result
  },

  /**
   * 根据邮箱信息修改指定用户信息
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  async deleteUser(options) {
    let SQL = `
      DELETE FROM user WHERE email = '${options.email}';
    `

    let result = await db.query(SQL)
    return result
  }
}


