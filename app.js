let express=require('express')

let app=express()

app.set('view engine','ejs')

app.listen('3003',()=>{
  console.log('express server is running at http://localhost:3003')
})

app.use()
