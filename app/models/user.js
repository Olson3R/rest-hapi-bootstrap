var database = require('../../lib/database')

var User = database.sequelize.define('user', {
  name: database.Sequelize.STRING
})

module.exports = User
