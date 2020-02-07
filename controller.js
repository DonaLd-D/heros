



module.exports={
  showIndexPage(req,res){   
    res.render('index',{})
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