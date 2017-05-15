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

    let reportWhereSQL = ''
    let reportWhereSQLArray = []
    let userWhereSQL = ''
    let userWhereSQLArray = []
    let reportAndUserSQL = ''
    let countWhereSQL = ''

    if (options.id) { // 举报信息ID
      reportWhereSQLArray.push(`id = ${options.id}`)
    }

    if (options.reason) { // 举报原因
      reportWhereSQLArray.push(`reason LIKE '%${options.reason}%'`)
    }

    if (options.status) {
      reportWhereSQLArray.push(`status = ${options.status}`)
    }

    if (reportWhereSQLArray.length) {
      for (var i = 0; i < reportWhereSQLArray.length - 1; i++) {
        reportWhereSQL += 'report.' + reportWhereSQLArray[i] + ' AND '
      }
      reportWhereSQL += 'report.' + reportWhereSQLArray[i]
    }

    if (options.email) {
      userWhereSQLArray.push(`email LIKE '%${options.email}%'`)
    }

    if (userWhereSQLArray.length) {
      for (var i = 0; i < userWhereSQLArray.length - 1; i++) {
        userWhereSQL += 'user.' + userWhereSQLArray[i] + ' AND '
      }
      userWhereSQL += 'user.' + userWhereSQLArray[i]
    }

    if (reportWhereSQL) {
      reportAndUserSQL += ' AND ' + reportWhereSQL
    }

    if (userWhereSQL) {
      reportAndUserSQL += ' AND ' + userWhereSQL
    }

    let reportsSQL = `
      SELECT
        report.id, 
        user.id AS userId,
        user.email AS email, 
        report.reason, 
        report.status, 
        report.created_at AS createdAt, 
        report.updated_at AS updatedAt  
      FROM 
        report_user AS report, user
      WHERE 
        report.user_id = user.id ${reportAndUserSQL}
      ${limitSQL};
    `

    let countSQL = `
      SELECT 
        COUNT(*) AS total 
      FROM 
        report_user AS report, user
      WHERE
        report.user_id = user.id ${reportAndUserSQL}
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
  async manipulateUserReport(options) {
    let reportSQL = `
      UPDATE 
        report_user
      SET
        status = 1
      WHERE
        user_id = ${options.userId}; 
    `

    let userSQL = `
      UPDATE
        user
      SET
        status = 1
      WHERE
        id = ${options.userId}
    `

    let result = await Promise.all([db.query(reportSQL), db.query(userSQL)])
    return result
  },

  /**
   * 删除用户举报信息
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  async deleteUserReport(options) {
    let SQL = `
      DELETE FROM 
        report_user 
      WHERE 
        id = '${options.id}';
    `

    let result = await db.query(SQL)
    return result
  },

  async getInvitationReports(options) {
    let rows = options.pageSize
    let offset = (options.currentPage - 1) * rows
    let limitSQL = `LIMIT ${offset}, ${rows}`

    let reportWhereSQL = ''
    let reportWhereSQLArray = []
    let invitationWhereSQL = ''
    let invitationWhereSQLArray = []
    let reportAndInvitationSQL = ''
    let countWhereSQL = ''

    if (options.id) { // 举报信息ID
      reportWhereSQLArray.push(`id = ${options.id}`)
    }

    if (options.reason) { // 举报原因
      reportWhereSQLArray.push(`reason LIKE '%${options.reason}%'`)
    }

    if (options.status) {
      reportWhereSQLArray.push(`status = ${options.status}`)
    }

    if (reportWhereSQLArray.length) {
      for (var i = 0; i < reportWhereSQLArray.length - 1; i++) {
        reportWhereSQL += 'report.' + reportWhereSQLArray[i] + ' AND '
      }
      reportWhereSQL += 'report.' + reportWhereSQLArray[i]
    }

    if (options.title) {
      invitationWhereSQLArray.push(`title LIKE '%${options.title}%'`)
    }

    if (invitationWhereSQLArray.length) {
      for (var i = 0; i < invitationWhereSQLArray.length - 1; i++) {
        invitationWhereSQL += 'invitation.' + invitationWhereSQLArray[i] + ' AND '
      }
      invitationWhereSQL += 'invitation.' + invitationWhereSQLArray[i]
    }

    if (reportWhereSQL) {
      reportAndInvitationSQL += ' AND ' + reportWhereSQL
    }

    if (invitationWhereSQL) {
      reportAndInvitationSQL += ' AND ' + invitationWhereSQL
    }

    let reportsSQL = `
      SELECT
        report.id, 
        invitation.id AS invitationId,
        invitation.title AS title, 
        report.reason, 
        report.status, 
        report.created_at AS createdAt, 
        report.updated_at AS updatedAt  
      FROM 
        report_invitation AS report, invitation
      WHERE 
        report.invitation_id = invitation.id ${reportAndInvitationSQL}
      ${limitSQL};
    `

    let countSQL = `
      SELECT 
        COUNT(*) AS total 
      FROM 
        report_invitation AS report, invitation
      WHERE
        report.invitation_id = invitation.id ${reportAndInvitationSQL}
    `

    let [reports, count] = await Promise.all([db.query(reportsSQL), db.query(countSQL)])
    return {
      reports,
      total: count[0].total
    }  
  },

  async manipulateInvitationReport(options) {
    let reportSQL = `
      UPDATE 
        report_invitation
      SET
        status = 1
      WHERE
        invitation_id = ${options.invitationId}; 
    `

    let invitationSQL = `
      UPDATE
        invitation
      SET
        status = 3
      WHERE
        id = ${options.invitationId}
    `
    let result = await Promise.all([db.query(reportSQL), db.query(invitationSQL)])
    return result
  },

  async deleteInvitationReport(options) {
    let SQL = `
      DELETE FROM 
        report_invitation 
      WHERE 
        id = '${options.id}';
    `

    let result = await db.query(SQL)
    return result
  },

  async getReplyReports(options) {
    let rows = options.pageSize
    let offset = (options.currentPage - 1) * rows
    let limitSQL = `LIMIT ${offset}, ${rows}`

    let reportWhereSQL = ''
    let reportWhereSQLArray = []
    let replyWhereSQL = ''
    let replyWhereSQLArray = []
    let reportAndReplySQL = ''
    let countWhereSQL = ''

    if (options.id) { // 举报信息ID
      reportWhereSQLArray.push(`id = ${options.id}`)
    }

    if (options.reason) { // 举报原因
      reportWhereSQLArray.push(`reason LIKE '%${options.reason}%'`)
    }

    if (options.status) {
      reportWhereSQLArray.push(`status = ${options.status}`)
    }

    if (reportWhereSQLArray.length) {
      for (var i = 0; i < reportWhereSQLArray.length - 1; i++) {
        reportWhereSQL += 'report.' + reportWhereSQLArray[i] + ' AND '
      }
      reportWhereSQL += 'report.' + reportWhereSQLArray[i]
    }

    if (options.content) {
      replyWhereSQLArray.push(`content LIKE '%${options.content}%'`)
    }

    if (replyWhereSQLArray.length) {
      for (var i = 0; i < replyWhereSQLArray.length - 1; i++) {
        replyWhereSQL += 'reply.' + replyWhereSQLArray[i] + ' AND '
      }
      replyWhereSQL += 'reply.' + replyWhereSQLArray[i]
    }

    if (reportWhereSQL) {
      reportAndReplySQL += ' AND ' + reportWhereSQL
    }

    if (replyWhereSQL) {
      reportAndReplySQL += ' AND ' + replyWhereSQL
    }

    let reportsSQL = `
      SELECT
        report.id, 
        reply.id AS replyId,
        reply.content AS content, 
        report.reason, 
        report.status, 
        report.created_at AS createdAt, 
        report.updated_at AS updatedAt  
      FROM 
        report_reply AS report, reply
      WHERE 
        report.reply_id = reply.id ${reportAndReplySQL}
      ${limitSQL};
    `

    let countSQL = `
      SELECT 
        COUNT(*) AS total 
      FROM 
        report_reply AS report, reply
      WHERE
        report.reply_id = reply.id ${reportAndReplySQL}
    `

    let [reports, count] = await Promise.all([db.query(reportsSQL), db.query(countSQL)])
    return {
      reports,
      total: count[0].total
    }  
  },

  async manipulateReplyReport(options) {
    let reportSQL = `
      UPDATE 
        report_reply
      SET
        status = 1
      WHERE
        reply_id = ${options.replyId}; 
    `

    let invitationSQL = `
      UPDATE
        reply
      SET
        status = 1
      WHERE
        id = ${options.replyId}
    `
    let result = await Promise.all([db.query(reportSQL), db.query(invitationSQL)])
    return result
  },

  async deleteReplyReport(options) {
    let SQL = `
      DELETE FROM 
        report_reply 
      WHERE 
        id = '${options.id}';
    `

    let result = await db.query(SQL)
    return result
  },



}


