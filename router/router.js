const router = require('koa-router')();
const index = require('../controllers/index');
const nunenv = require('../controllers/nunjucks').nunenv;
const api = require('../controllers/login');

function allRouter() {
    // 使用路由
    router.get('/home', async (ctx, next) => {
        await next();
        ctx.response.body = nunenv.render('index.html',{name:'jack',age:18,stu:[1,2,3]})
    })

    router.get('/home/:name', async (ctx, next) => {
        let name = ctx.params.name;
        ctx.response.body = `<h1>hello ${name}</h1>`
    })

    router.get('/', index.a)

    router.post('/login', index.b)

    router.get('/api',api.api)
}

module.exports = {
    allRouter: allRouter,
    router
}