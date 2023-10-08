const express = require('express')
const cors = require('cors')
const app = express()
const sequelize = require('./util/database')
const bodyParser = require('body-parser')
const routes = require('./routers/route')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use(routes)

sequelize.sync()
.then(result=>{
    app.listen(4000)
    console.log('listening on port 3000')
})
.catch(err=> console.log(err))