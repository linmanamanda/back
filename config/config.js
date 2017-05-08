const path = require('path')
const config = {

  // 端口号配置
  port: 3001,

  // 日志文件目录
  logDirection: path.join(__dirname, '..', 'log'),

  // 静态文件目录
  staticDirection: path.join(__dirname, '..', 'static'),

  // mysql数据库配置
  mysqlConfig: {
    HOST: '127.0.0.1',
    PORT: 3306,
    USERNAME: 'root',
    PASSWORD: 'xlqhlm1314',
    DATABASE: 'graduation'
  },

  jwt: {
    secret: 'graduation'
  }
}

module.exports = config