const mysql = require('mysql')
const config = require('../config/config')

const pool = mysql.createPool({
  host: config.mysqlConfig.HOST,
  user: config.mysqlConfig.USERNAME,
  password: config.mysqlConfig.PASSWORD,
  database: config.mysqlConfig.DATABASE,
})

let query = (sql, values) => {
  return new Promise(resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err)
        resolve(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            console.log(err)
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  }
}

module.exports = { query }