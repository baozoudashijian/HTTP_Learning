// 1. 流程图 <宏观>
// 2. 组件与组件之间的依赖图 <宏观> 【业务组件】【公共组件】
// 3. 单个组件 的理解 <微观>

// 需求：我先把上面实现，然后编码
const express = require('express')

const app = express()



app.get('/index4.js', (req, res) => {
    res.type('.js')
    res.send(`console.log('hello index4.js')`)
})


const htmlStrCombine = `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>JS Bin</title>
</head>

<body>
  <form action="/login">
    <input type="text" name="name" />
    <input type="password" name="password" />
    <input type="submit" value="登陆" />
  </form>
  <script src="/index4.js"></script>
</body>

</html>`

const SESSION = {
    "user": "14cabe1ec7981DCvKX9cPTyYUvIuTaY9SJvsqqeH0DrcalIqjBrxRYLkA0LUtHh41uhTwQ4OOptDtLQzuM5EsHaQ7djWAlYz0h39irnaLyMMCbMzWQ"
}

app.get('/login', (req, res) => {
    const { name, password } = req.query

    if(hasSessionId(req)) {
        res.redirect('/')
    } else {
        if(name == 'user' && password == '1023') {
            res.cookie('sessionId', SESSION[name])
            res.redirect('/')
        } else {
            res.type('.html')
            res.send(htmlStrCombine)
        }
    }
})

app.get('/', (req, res) => {
    let sessionId = hasSessionId(req)
    if(sessionId) {
        res.send('登陆成功！')
    } else {
        res.redirect('/login')
    }
})

function hasSessionId (req) {
    let cookie = req.headers.cookie
    if(cookie) {
        let sessionId = cookie.split('=')[1]
        return sessionId
    }
}






app.listen(3000, () => {
    console.log('空中旋转720°')
})

function generate32Random() {
    /*生成32位随机流水号*/
    /*默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1*/
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < 32; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }

    return pwd
}