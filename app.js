let express=require('express')

let bodyParser = require('body-parser')
let router = require('./router.js')

let app=express()

app.set('view engine','ejs')

app.use('/node_modules',express.static('node_modules'))
app.use(bodyParser.urlencoded({ extended: false }))

app.listen('3003',()=>{
  console.log('express server is running at http://127.0.0.1:3003')
})

app.use(router)
