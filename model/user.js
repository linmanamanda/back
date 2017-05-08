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
  },

  //     id: 6,
  //     email: 'zengyanfen@snh48.com',
  //     username: 'zengyanfen',
  //     authority: '0',
  //     status: '0',
  //     updatedAt: '2017-05-06 01:00',
  //     createdAt: '2017-05-06 01:00',

  async getUsers(options) {
    let whereSQL = ''
    let whereQueryArray = []
    
    if (options) {
      let likeQuery = options.like
      let equalQuery = options.equal

      if (likeQuery) {
        for (let [field, query] in Object.entries(likeQuery)) {
          if (query) {
            whereQueryArray.push(`${field} like '%${query}%'`)
          }
        }
      }

      if (equalQuery) {
        for (let [field, query] in Object.entries(equalQuery)) {
          if (query) {
            whereQueryArray.push(`${field} = ${query}`)
          }
        }
      }



      if (whereQueryArray.length) {
        whereSQL = `WHERE`
        for (var i = 0; i < whereQueryArray.length - 1; i++) {
          whereSQL += whereQueryArray[i] + ' AND '
        }
        whereSQL += whereQueryArray[i]
      }
    }





    // if (options.email) {
    //   whereSQL.push(`email like %${options.email}%`)
    // }

    // if (options.username) {
    //   whereSQL.push(`username like %${options.username}%`)
    // }

    // if (options.status) {
    //   whereSQL.push(`status = ${options.status}`)
    // }

    // if (options.authority) {
    //   whereSQL.push(`authority = ${options.authority}`)
    // }





    // let usersSQL = `
    //   SELECT 
    //     id, email, username, authority, status, updated_at AS updatedAt, created_at AS createdAt 
    //   FROM user
    //   LIMIT ${options.offset}, ${options.rows};
    // `
    // let countSQL = `
    //   SELECT COUNT(*) AS total FROM user
    // `


    // let users = await db.query(usersSQL)
    // let count = await db.query(countSQL)

    // return {
    //   users,
    //   total: count[0].total
    // }
    return whereSQL
  },

}