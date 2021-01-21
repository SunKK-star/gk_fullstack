const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const express = require('express')
const Koa = require('koa')
const mount = require('koa-mount')

const game = require('../game.js')

let playerWon = 0
let playerLastAction = null
let sameCount = 0

const app = new Koa()

app.use(
  mount('/favicon.ico', function (ctx) {
    ctx.status = 200
  })
)
const gameKoa = new Koa()
gameKoa.use(
  async function (ctx, next) {
    if (playerWon >= 3) {
      ctx.status = 500
      ctx.body = '我再也不和你玩了'
      return
    }
    await next();
    if (ctx.playerWon) {
      playerWon++
    }
  },
  async function (ctx, next) {
    const query = ctx.query
    const playerAction = query.action

    if (playerLastAction && playerAction == playerLastAction) {
      sameCount++
    } else {
      sameCount = 0
    }

    if (sameCount >= 3) {
      // res.writeHead(400)
      // res.send('你作弊！')
      ctx.status = 400
      ctx.body = '你作弊！'
      sameCount = 9
      return
    }

    const gameResult = game(playerAction)

    playerLastAction = playerAction
    ctx.status = 200
    console.log(gameResult);
    if (gameResult == 0) {
      ctx.body = '平局'
    } else if (gameResult == 1) {
      ctx.body = '你赢了！'
      playerWon++
    } else {
      ctx.body = '你输了！'
    }
  }
)
app.use(
  mount('/game', function () {

  })
)
app.use(
  mount('/', function (ctx) {
    ctx.body = fs.readFileSync(__dirname + 'game.html', 'utf-8')
  })
)

app.get('/favicon.ico', function (req, res) {
  res.status(200)
  // res.writeHead(200)
  // res.send()
  return
})
app.get('/', function (req, res) {
  res.send(fs.readFileSync(__dirname + '/game.html', 'utf-8'))
  // fs.createReadStream(__dirname + '/game.html').pipe(res)
})
app.get('/game', function (req, res) {

})

app.listen(3000, () => {
  console.log('服务已启动');
})
