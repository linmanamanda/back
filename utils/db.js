const config = require('../config/config')
const mysql = require('mysql')

const pool = mysql.createPool({
  host: config.mysqlConfig.HOST,
  user: config.mysqlConfig.USERNAME,
  password: config.mysqlConfig.PASSWORD,
  database: config.mysqlConfig.DATABASE,
  port: config.mysqlConfig.PORT
})

/**
 * Promise封装mysql操作语句
 * @param  {string} sql  [mysql操作语句]
 * @return {promise}     [具有sql操作结果的promise对象]
 */
let query = (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

/**
 * 建表
 * @param  {[string]} sql  [mysql建表语句]
 * @return {[promise]}     [description]
 */
let createTable = (sql) => {
  return query(sql)
}

let findDataById = (table, id) => {
  let _sql = `SELECT * FROM ${table} WHERE id = ${id}`
  return query(_sql)
}

let findDataByPage = (table, keys, start, end) => {
  let _sql = `SELECT ${keys} FROM ${table} LIMIT ${start}, ${end}`
  return query(_sql)
}

let insertData = (table, values) => {
  let _sql = `INSERT INTO ${table} SET ${values}`
  return query(_sql)
}

let updateDataById = (table, values, id) => {
  let _sql = `UPDATE ${table} SET values WHERE id = ${id}`
}

let deleteDataById = (table, id) => {
  let _sql = `DELETE FROM ${table} WHERE id = ${id}`
  return query(_sql)
}

let selectAll = (table) => {
  let _sql = `SELECT * FROM ${table}`
  return query(_sql)
}

let count = (table) => {
  let _sql = `SELECT COUNT(*) AS total_count FROM ${table}`
  return query(_sql)
}

module.exports = {
  query,
  createTable,
  findDataById,
  findDataByPage,
  insertData,
  updateDataById,
  deleteDataById,
  selectAll,
  count
}
