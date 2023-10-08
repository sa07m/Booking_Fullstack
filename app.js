const express = require('express')
const sequelize = require('./util/database')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routers/route')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors)

app.use(routes)
sequelize.sync()
.then(result=>{
    app.listen(3000)
    console.log('listening on port 3000')
})
.catch(err=> console.log(err))