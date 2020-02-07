/**
 * 这是一个控制器模块，主要负责业务逻辑
 */

let heroModel = require('./model.js')

module.exports = {
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