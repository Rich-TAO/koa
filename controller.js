
var index = async function (ctx, next) {
    ctx.render(`index.html`,{
        title:'welcome'
    })
}

var login = async function (ctx, next){
    let name = ctx.request.body.name || '',
        psw = ctx.request.body.psw || '';

        if(name !== '' && psw !==''){
            ctx.render('login-ok.html',{
                title:'login ok',
                name: 'jack Ma',
            })
        }else{
            ctx.render('login-fail.html',{
                title:'login failed'
            })
        }
}