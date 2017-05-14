const db = require('./../utils/db')
const types = require('./../utils/types')
const moment = require('moment')

module.exports = {
  /**
   * 获取用户举报信息
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  async getUserReports(options) {
    let rows = options.pageSize
    let offset = (options.currentPage - 1) * rows
    let limitSQL = `LIMIT ${offset}, ${rows}`

    let reportsSQL = `
      SELECT
        r.id, 
        u.email AS user, 
        r.reason, 
        r.status, 
        r.created_at AS createdAt, 
        r.updated_at AS updatedAt  
      FROM report_user AS r, user AS u
      WHERE r.user_id = u.id 
      ${limitSQL};
    `

    let countSQL = `
      SELECT COUNT(*) AS total FROM report_user
    `

    let [reports, count] = await Promise.all([db.query(reportsSQL), db.query(countSQL)])
    return {
      reports,
      total: count[0].total
    }  
  },

  /**
   * 修改用户举报信息
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  async updateUserReport(options) {
    let SQL = `
      UPDATE 
        report_user
      SET
        status = ${options.status}
      WHERE
        id = ${options.id}; 
    `

    let result = await db.query(SQL)
    return result
  },

  /**
   * 删除用户举报信息
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  async deleteUserReport(options) {
    let SQL = `
      DELETE FROM report_user WHERE id = '${options.id}';
    `

    let result = await db.query(SQL)
    return result
  }
}


