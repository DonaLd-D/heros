
let heroModel=require('./model.js')


module.exports={
  showIndexPage(req,res){
    heroModel.getAllHerosData((err,result)=>{
      if(err) return res.json({
        code:201,
        msg:'没有数据'
      });
      console.log(result)
      res.render('index',{data:result})
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