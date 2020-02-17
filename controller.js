
let heroModel=require('./model.js')

const moment=require('moment')


module.exports={
  showIndexPage(req,res){
    res.render('index',{}) // 只返回一个普通的页面即可 
  },
  getAllHeros(req,res){
    heroModel.getAllHeros((err,result)=>{
      if(err) return res.json({
        'code':201,
        'msg':'查询数据失败'
      })

      res.json({
        'code':200,
        'msg':'数据查询成功',
        'data':result
      })
    })
  },
  showAddPage(req,res){
    res.render('add',{})
  },
  addHero(req,res){
    // console.log(req.body); // req.body就可以接收浏览器端post方式传递过来的数据
    let hero = req.body // 接收传递过来的英雄数据
    hero.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
    heroModel.addHero(hero, result => {
      if (result) return res.json({
        "code": 200,
        "msg": "添加英雄成功"
      })

      res.json({
        "code": 201,
        "msg": "添加英雄失败"
      })

    })
  },
  showInfoPage(req,res){
    let { id } = req.query
    heroModel.getOneHeroInfoById(id, (err, results) => {
      if (err) return res.end('404')
      // console.log(results);
      res.render('info', results[0])
    })
  },
  showEditPage(req,res){
    let { id } = req.query
    heroModel.getOneHeroInfoById(id, (err, results) => {
      if (err) return res.end('404')

      res.render('edit', results[0])
    })
  },
  delHero(req,res){
    let { id } = req.query
    heroModel.delHero(id, result => {
      if (result) return res.json({
        "code": 200,
        "msg": "删除英雄成功"
      })

      res.json({
        "code": 201,
        "msg": "删除英雄失败"
      })
    })
  },
  // 根据id来更新英雄信息
  updateHeroInfoById(req, res) {
    // console.log(req.body);
    let hero = req.body
    hero.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
    heroModel.updateHeroInfoById(hero, result => {
      if (result) return res.json({
        "code": 200,
        "msg": "更新英雄信息成功"
      })

      res.json({
        "code": 201,
        "msg": "更新英雄信息失败"
      })
    })
  }
}