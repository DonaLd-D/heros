// 1. 引入模块
let express = require('express')

// 2. 创建路由对象
let router = express.Router()

let heroCtrl=require('./controller.js')


// 3. 设置路由的路径
router.get('/',(req,res)=>{
 heroCtrl.showIndexPage(req,res)
})
.get('/add',(req,res)=>{
  heroCtrl.showAddPage(req,res)
})
.get('/info',(req,res)=>{
  heroCtrl.showInfoPage(req,res)
})
.get('/edit',(req,res)=>{
  heroCtrl.showEditPage(req,res)
})
.get('/getAllHeros',(req,res)=>{
  heroCtrl.getAllHeros(req,res)
})
.post('/addHero',(req,res)=>{
  heroCtrl.addHero(req,res)
})
.get('/delHero',(req,res)=>{
  heroCtrl.delHero(req,res)
})
.post('/updateHeroInfo',(req,res)=>{
  heroCtrl.updateHeroInfoById(req,res)
})

// 4. 向外暴露路由
module.exports = router