

var a = async (ctx, next)=>{
    ctx.response.body = `<h1>
        <form action='login' method='post'>
            <p>账号：<input type='text' name='name'></p>
            <p>密码：<input type='password' name='psw'></p>
            <p><input type='submit' name='submit'></p>
        </form>
    </h1>`
    await next();
};

var b = async (ctx, next)=>{
    let name = ctx.request.body.name || '';
    let psw = ctx.request.body.psw || '';
    console.log(name,psw)
    if(name !== '' && psw !== ''){
        ctx.response.body= `<h4>hello1 ${name}</h4>`
    }
};

module.exports = {
    a,
    b
}