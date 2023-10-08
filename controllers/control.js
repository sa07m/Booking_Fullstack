const express = require('express')
const bookingModel = require('../models/model')

exports.addUser = async (req, res, next) => {
    
    console.log('entered export adduser')
    const name = req.body.name
    const phone = req.body.phone
    const email = req.body.email
    try {
        const data = await bookingModel.create({
            name: name,
            phone: phone,
            email: email
        })
        if (data !== null || data !== undefined) {
            res.json(data)
        }
    }
    catch (e) { console.log(e) }


}

exports.getUsers = async (req, res, next) => {

    try {
        console.log('in get users')
        await bookingModel.findAll()
            .then(result => res.json(result))
            .catch(err => console.log(err))
    } catch (e) {
        console.log('wrong');
    }
}



exports.delUser = async (req, res, next) => {
    const id = req.params.id
    await bookingModel.destroy({ where: { id: id } })
        .then(result => res.json('deleted'))
        .catch(err => console.log(err))

}
