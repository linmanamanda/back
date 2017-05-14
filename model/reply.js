const db = require('./../utils/db')
const types = require('./../utils/types')
const moment = require('moment')

module.exports = {
  async getReplys(options) {
    let rows = options.pageSize
    let offset = (options.currentPage - 1) * rows
    let limitSQL = `LIMIT ${offset}, ${rows}`

    // @fixme!
    // type=0的评论数据中to_id为默认的0，type=1的评论数据中to_id为不为0的值。如何查询使得to的邮箱在type=0时为空，type=1是用户邮箱
    let replySQL = `
      SELECT 
        reply.id,  
        invitation.title, 
        user.email AS repliedFrom,
        reply.status, 
        reply.content, 
        reply.created_at AS createdAt,  
        reply.updated_at AS updatedAt
      FROM 
        invitation, user, reply 
      WHERE 
        reply.invitation_id = invitation.id AND reply.from_id = user.id
      ${limitSQL};
    `

    let countSQL = `
      SELECT 
        COUNT(*) AS total 
      FROM 
        invitation, user, reply
      WHERE
        reply.from_id = user.id AND reply.invitation_id = invitation.id;
    `

    let [replys, count] = await Promise.all([db.query(replySQL), db.query(countSQL)])
    return {
      replys,
      total: count[0].total
    }  
  },

  async updateReply(options) {
  },

  async deleteReply(options) {
    let SQL = `
      DELETE FROM reply WHERE id = '${options.id}';
    `

    let result = await db.query(SQL)
    return result
  }
}


