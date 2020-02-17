
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
    }
}