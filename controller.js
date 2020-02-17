
let heroModel=require('./model.js')


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
  showInfoPage(req,res){
    res.render('info',{})
  },
  showEditPage(req,res){
    res.render('edit',{})
  }
}