const express = require('express')
const createError = require('http-errors')
const path = require('path')
const router = express.Router();
const app = express();
const jet = require('jsonwebtoken')
const auth = require('basic-auth')
app.use(router)

router.get('/', function (req, res, next) {
  const token = jet.sign({ username: 'zhangsan', }, 'this is sign', {
    expiresIn: 60 * 60 * 24
  })
  res.send(token)
})

router.get('/Login', function (req, res, next) {
  const token = auth(req)
  try {
    var decoded = jet.verify(token.name, 'this is sign');
    if (decoded) {
      res.send({
        success: true,
        msg: '验证成功'
      })
    }
  } catch (error) {
    res.send({
      success: false,
      msg: '验证成功'
    })
  }
  res.send(token)
})

router.get('/adress', function (req, res, next) {
  res.send('adress')
})

app.listen('3006')


