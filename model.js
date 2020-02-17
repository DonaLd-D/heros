
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
    }
}