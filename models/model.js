const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const modelb = sequelize.define('booking',{
    id:{
        type :Sequelize.INTEGER,
        autoIncrement :true,
        primaryKey:true,
        allowNull:false
    },
    name : { 
        type : Sequelize.STRING, 
    
      },
    
      phone : { 
        type : Sequelize.INTEGER, 
    
      },
      email : { 
        type : Sequelize.STRING, 
      }
    
})

module.exports = modelb