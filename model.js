
const mysql=require('mysql')

let conn=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'hero',
  dataStrings:true
})

conn.connect()

module.exports={
      getAllHerosData(callback){
        let sql='select*from heros';
        conn.query(sql,(err,results)=>{
          if(err) return callback(err)

          callback(null,results)
        })
      }
}