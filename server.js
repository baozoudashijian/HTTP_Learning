const express = require('express')

const app = express()

// 返回普通字符串
app.get('/main.css', (req, res) => {
  res.send('hello main.css')
})

// 返回css格式字符串
app.get('/main2.css', (req, res) => {
  res.send(`.box, p {font-size: 40px}`)
})

// 设置content-type
app.get('/main3.css', (req, res) => {
  res.type('.css')
  res.send(`.box, p {font-size: 40px}`)
})

// 设置错误的content-type
app.get('/main4.css', (req, res) => {
  res.type('.js')
  res.send(`.box, p {font-size: 40px}`)
})


app.get('/index.js', (req, res) => {
  res.send('hello index.js')
})

app.get('/index2.js', (req, res) => {
  res.send(`console.log('hello index2.js')`)
})

app.get('/index3.js', (req, res) => {
  res.type('.css')
  res.send(`console.log('hello index2.js')`)
})

app.get('/index4.js', (req, res) => {
  res.type('.js')
  res.send(`console.log('hello index2.js')`)
})

const htmlStr = `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>JS Bin</title>
</head>

<body>
  <p>fallout boy</p>
</body>

</html>`

app.get('/index.html', (req, res) => {
  res.send(`<!DOCTYPE html>`)
})

app.get('/index2.html', (req, res) => {
  res.send(htmlStr)
})

app.get('/index3.html', (req, res) => {
  res.type('.css')
  res.send(htmlStr)
})

app.get('/index4.html', (req, res) => {
  res.type('.html')
  res.send(htmlStr)
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

app.get('/index5.html', (req, res) => {
  console.log(req.url) // 带路径的查询字符串
  console.log(req.query) // 不带路径的查询字符串
  res.type('.html')
  res.send(htmlStrCombine)
})




app.listen(3000, () => {
  console.log('空中旋转720°')
})
