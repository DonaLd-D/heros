// 1. 引入模块
let express = require('express')

// 2. 创建路由对象
let router = express.Router()

let heroCtrl = require('./controller.js')
// 3. 设置路由的路径
router.get('/',(req,res)=>{
  heroCtrl.showIndexPage(req,res)
})
.get('/add',(req,res)=>{
  heroCtrl.showAddPage(req,res)
})
.get('/info',(req,res)=>{
  heroCtrl.showIndexPage(req,res)
})
.get('/edit',(req,res)=>{
  heroCtrl.showEditPage(req,res)
})

// 4. 向外暴露路由
module.exports = router