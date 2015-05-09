var User = require('../models/user')

var handlers = {}

handlers.index = {
  handler: function(req, res) {
    User.findAll()
      .then(function(users) {
        res(users)
      })
      .catch(function(err) {
        res("An error ocurred").code(500)
        throw err
      })
  }
}

handlers.create = {
  handler: function(req, res) {
    User.create(req.payload)
      .then(function(user) {
        res(user)
      })
      .catch(function(err) {
        res("An error ocurred").code(500)
        throw err
      })
  }
}

// TODO - show
// TODO - update
// TODO - delete

module.exports = handlers
