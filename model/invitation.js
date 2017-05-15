const db = require('./../utils/db')
const types = require('./../utils/types')
const moment = require('moment')

module.exports = {
  async getInvitations(options) {
    let whereSQLArray = []
    let userSQLArray = []
    let whereSQL = ''
    let invitationWhereSQL = ''
    let invitationWhereSQLArray = []
    let userWhereSQL = ''
    let userWhereSQLArray = []
    let invitationAndCountSQL = ''
    let countWhereSQL = ''

    if (options.id) { // 相约信息ID
      invitationWhereSQLArray.push(`id = ${options.id}`)
    }

    if (options.title) { // 相约信息的标题
      invitationWhereSQLArray.push(`title LIKE '%${options.title}%'`)
    }

   
    if (options.location) {  // 相约信息的相约地点
      invitationWhereSQLArray.push(`location LIKE '%${options.location}%'`)
    }

    if (options.begintime) { // 相约信息的开始相约时间
      let begintime = moment(options.begintime).utcOffset(+8).format('YYYY-MM-DD HH:mm:ss')
      invitationWhereSQLArray.push(`time >= '${begintime}'`)
    } 

    if (options.endtime) { // 相约信息的结束相约时间
      let endtime = moment(options.begintime).utcOffset(+8).format('YYYY-MM-DD HH:mm:ss')
      invitationWhereSQLArray.push(`time <= '${endtime}'`)
    }

    if (options.status) { // 相约信息的状态
      invitationWhereSQLArray.push(`status = ${options.status}`)
    }

    if (invitationWhereSQLArray.length) {
      for (var i = 0; i < invitationWhereSQLArray.length - 1; i++) {
        invitationWhereSQL += 'invitation.' + invitationWhereSQLArray[i] + ' AND '
      }
      invitationWhereSQL += 'invitation.' + invitationWhereSQLArray[i]
    }

    
    if (options.createdBy) { // 相约信息的发布人
      userWhereSQLArray.push(`email LIKE '%${options.createdBy}%'`)
    }

    if (userWhereSQLArray.length) {
      for (var i = 0; i < userWhereSQLArray.length - 1; i++) {
        userWhereSQL += 'user.' + userWhereSQLArray[i] + ' AND '
      }
      userWhereSQL += 'user.' + userWhereSQLArray[i]
    }

    if (invitationWhereSQL) {
      invitationAndCountSQL += ' AND ' + invitationWhereSQL
      countWhereSQL += ' AND ' + invitationWhereSQL
    }

    if (userWhereSQL) {
      invitationAndCountSQL += ' AND ' + userWhereSQL
      countWhereSQL += ' AND ' + userWhereSQL
    }

    let rows = options.pageSize
    let offset = (options.currentPage - 1) * rows
    let limitSQL = `LIMIT ${offset}, ${rows}`

    let invitationsSQL = `
      SELECT 
        invitation.id, 
        invitation.title, 
        invitation.content, 
        invitation.time, 
        invitation.location, 
        invitation.status, 
        user.email AS createdBy, 
        invitation.created_at AS createdAt,  
        invitation.updated_at AS updatedAt
      FROM 
        invitation, user 
      WHERE 
        invitation.created_by = user.id ${invitationAndCountSQL}
      ${limitSQL};
    `

    let countSQL = `
      SELECT 
        COUNT(*) AS total 
      FROM 
        invitation, user
      WHERE
        invitation.created_by = user.id ${countWhereSQL};
    `

    let [invitations, count] = await Promise.all([db.query(invitationsSQL), db.query(countSQL)])
    return {
      invitations,
      total: count[0].total
    }  
  },

  /**
   * 根据相约信息id和用户邮箱信息修改指定字段信息
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  async updateInvitation(options) {
    let time = moment(options.time).utcOffset(+8).format('YYYY-MM-DD HH:mm:ss')
    let SQL = `
      UPDATE 
        invitation
      SET
        title = '${options.title}',
        time = '${time}',
        location = '${options.location}',
        status = ${options.status},
        content = '${options.content}'
      WHERE
        id = ${options.id}; 
    `

    let result = await db.query(SQL)
    return result
  },

  async deleteInvitation(options) {
    let SQL = `
      DELETE FROM invitation WHERE id = '${options.id}';
    `

    let result = await db.query(SQL)
    return result
  }
}


