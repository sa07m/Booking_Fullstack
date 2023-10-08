const express = require('express')
const router = express.Router()
const routecontrol = require('../controllers/control')

router.get('/get-users',routecontrol.getUsers)

router.post('/add-user',routecontrol.addUser)

router.delete('/del-user/:id',routecontrol.delUser)

module.exports = router