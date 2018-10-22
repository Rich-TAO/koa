 
const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new koa();
const allRouter = require(__dirname + '/router/router');
const seq = require('sequelize');
const mysql = require('mysql');
var cors = require('koa-cors');
//添加路由中间件
app.use(cors());
app.use(bodyparser());
app.use(allRouter.router.routes());




// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root',
//     database : 'node'
//   });

//   connection.connect();

//   connection.query('SELECT * FROM nodes', function (error, results, fields) {
//     if (error) throw error;
//   });

//   connection.end();
var sequelize = new seq('node', 'root','root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

var Pet = sequelize.define('node', {
    id: {
        type: seq.STRING(50),
        primaryKey: true
    },
    name: seq.STRING(100)
}, {
        timestamps: false
    });



    (async () => {
        var pets = await Pet.findAll({
            where: {
                id: 1
            }
        });
        console.log(`find ${pets.length} pets:`);
        for (let p of pets) {
            console.log(JSON.stringify(p));
        }
    })();

app.use(async (ctx, next)=>{
    await next();
    ctx.response.type = 'text/html';
})

allRouter.allRouter();
app.listen(8888);
console.log('start');