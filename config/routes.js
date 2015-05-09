var usersController = require('../app/controllers/users-controller')

module.exports.routes = []

// Users
module.exports.routes.push({
  method: 'GET',
  path: '/users',
  config: usersController.index
})

module.exports.routes.push({
  method: 'POST',
  path: '/users',
  config: usersController.create
})
