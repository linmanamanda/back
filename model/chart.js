const db = require('./../utils/db')
const types = require('./../utils/types')
const moment = require('moment')

module.exports = {
  async getCharts(options) {
    let havingSQLArray = []
    let havingSQL = ''

    if (options.begintime) { // 相约信息的开始相约时间
      let begintime = moment(options.begintime).utcOffset(+8).format('YYYY-MM-DD HH:mm:ss')
      havingSQLArray.push(`time >= '${begintime}'`)
    } 

    if (options.endtime) { // 相约信息的结束相约时间
      let endtime = moment(options.endtime).utcOffset(+8).format('YYYY-MM-DD HH:mm:ss')
      havingSQLArray.push(`time <= '${endtime}'`)
    }


    if (havingSQLArray.length) {
      for (var i = 0; i < havingSQLArray.length - 1; i++) {
        havingSQL += havingSQLArray[i] + ' AND '
      }
      havingSQL += havingSQLArray[i]
    }

    if (havingSQL) {
      havingSQL = 'HAVING ' + havingSQL 
    }

    let SQL = `
      SELECT
        status, COUNT(*) AS count, time
      FROM 
        invitation
      GROUP BY
        status
      ${havingSQL}
    `

    let rawConfirmInvitationPie = await db.query(SQL)
    let confirmInvitationPie = {}

    for (let i = 0; i < rawConfirmInvitationPie.length; i++) {
      let item = rawConfirmInvitationPie[i]
      if (item.status === 0) {
        confirmInvitationPie['wait'] = item.count
      }

      if (item.status === 1) {
        confirmInvitationPie['confirm'] = item.count
      }

      if (item.status === 2) {
        confirmInvitationPie['expire'] = item.count
      }

      if (item.status === 3) {
        confirmInvitationPie['ban'] = item.count
      }
    }

    if (!confirmInvitationPie['wait']) {
      confirmInvitationPie['wait'] = 0
    }

    if (!confirmInvitationPie['confirm']) {
      confirmInvitationPie['confirm'] = 0
    }

    if (!confirmInvitationPie['expire']) {
      confirmInvitationPie['expire'] = 0
    }

    if (!confirmInvitationPie['ban']) {
      confirmInvitationPie['ban'] = 0
    }

    return {
      confirmInvitationPie
    }  
  }
}

