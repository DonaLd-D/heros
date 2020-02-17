
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
    res.render('info',{})
  },
  showEditPage(req,res){
    res.render('edit',{})
  }
}