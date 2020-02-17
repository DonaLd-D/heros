
const mysql=require('mysql')

let conn=mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'root',
  database:'hero',
  dateStrings: true
})

conn.connect()

module.exports={
    getAllHeros(callback){
      let sql='select*from heros';
      conn.query(sql,(err,result)=>{
        if(err) return callback(err)

        callback(null,result)
      })
    },
    addHero(hero,callback){
      let sql = 'insert into heros set ?' // 使用参数化的方式来书写SQL语句 
      conn.query(sql,[hero],(err,result)=>{
        if(err) return callback(false)
  
        callback(true)
      })
    },
    // 根据id查询某一条英雄数据
    getOneHeroInfoById(id,callback){
      let sql = 'select * from heros where id = ?'
      conn.query(sql,[id],(err,results)=>{
        if(err) return callback(err)

        callback(null,results)
      })
    },
    delHero(id,callback){
      let sql = 'delete from heros where id = ?'
      conn.query(sql,[id],(err,results)=>{
        if(err) return callback(false)
        callback(true)
      })
    },
    // 根据id来更新一条英雄数据
    updateHeroInfoById(hero,callback){
      let {id} = hero 
      delete hero.id
      let sql = 'update heros set ? where id = ?'
      conn.query(sql,[hero,id],(err,results)=>{
        if(err) return callback(false)

        callback(true)
      })
    }
}