const express = require('express')

const app = express()

let Hash;
function generateHash() {
    if((Math.random() * 10) > 3) {
        Hash = 'RongerZhang'
        return 'RongerZhang'
    }else{
        Hash = 'Jay Chou'
        return 'Jay Chou'
    }
}

// 设置content-type
app.get('/main3.css', (req, res) => {
    res.type('.css')
    app.set('etag', generateHash)
    if(req.headers['if-none-match'] === Hash) {
        console.log('304')
        res.set('etag', Hash)
        res.writeHead(304,'not modifed')
        res.end()
    }else{
        console.log('etag')
        
        res.send(`.box, p {font-size: 40px}`)
    }

})

app.get('/index4.js', (req, res) => {
  res.type('.js')
  res.send(`console.log('hello index2.js')`)
})


const htmlStrCombine = `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>JS Bin</title>
    <link rel="stylesheet" href="/main3.css">
</head>

<body>
  <p>fallout boy</p>
  <script src="/index4.js"></script>
</body>

</html>`

let a = 1

app.get('/', (req, res) => {
  console.log('你访问了服务器的次数为'+ a++ )
  res.type('.html')
  res.send(htmlStrCombine)
})




app.listen(3000, () => {
  console.log('空中旋转720°')
})
