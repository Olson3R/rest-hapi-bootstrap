var Sequelize = require('sequelize')
var db_config = require('../config/database')

var sequelize = new Sequelize(db_config.database, db_config.username, db_config.password, db_config)

module.exports.sequelize = sequelize
module.exports.Sequelize = Sequelize
