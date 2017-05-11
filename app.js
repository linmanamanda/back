const config = require('./config/config')

const Koa = require('koa')
const convert = require('koa-convert')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const cors = require('koa-cors')
// const redis = require('koa-redis')
// const session = require('koa-generic-session')
// const cors = require('koa-cors')
// const session = require('koa-session-mininal')
// const mysqlStore = require('koa-mysql-session')



const app = new Koa()


// app.use(async (ctx, next) => {
//   ctx.config = config
//   await next()
// })

// app.use(async (ctx, next) => {
//   console.log(ctx.config)
//   await next()
// })

// session存储配置
// const sessionMysqlConfig = {
//   user: config.mysqlConfig.USERNAME,
//   password: config.mysqlConfig.PASSWORD,
//   database: config.mysqlConfig.DATABASE,
//   host: config.mysqlConfig.HOST
// }

// 配置session中间件
// const use(session({
//   key: 'SSID',
//   store: new mysqlStore(sessionMysqlConfig)
// }))

// 配置控制台日志中间件
// app.use(logger())

// 配置ctx.body解析中间件
app.use(bodyParser())

// 配置静态资源加载中间件
app.use(convert(koaStatic(config.staticDirection, {
  maxage: 60 * 60 * 24 * 365
})))

// 配置跨域中间件
app.use(convert(cors({
  // 7 days
  maxAge: 7 * 24 * 60 * 60,
  credentials: true,
  methods: 'GET, HEAD, OPTIONS, POST, PUT, PATCH, DELETE',
  headers: 'Content-Type, Accept, Authorization'
})))

// 配置路由中间件
const router = new Router()
const appRouter = require('./controller/index')

appRouter.init(router)
app.use(router.routes()).use(router.allowedMethods())


app.listen(config.port)

console.log(`The server is start at port ${config.port}`)