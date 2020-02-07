
let heroModel=require('./model.js')


module.exports={
  showIndexPage(req,res){
    heroModel.getAllHerosData((err,results)=>{
      if(err) return res.end('404')
      res.render('index',{data:results})
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