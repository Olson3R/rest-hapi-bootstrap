var Path = require('path')
var Hapi = require('hapi')

// server
var server = new Hapi.Server()
server.connection({
  port: process.env.PORT || 4001,
  routes: {
    cors: {
      credentials: true
    },
    files: {
      relativeTo: Path.join(__dirname, 'public')
    }
  },
  router: {
    isCaseSensitive: false,
    stripTrailingSlash: true
  }
})

// routes
server.route(require('./config/routes').routes)

// register plugins and start server
server.register(require('./config/plugins').plugins, function(err) {
  if (err) {
    throw err
  }

  // start server
  server.start(function() {
    console.info('Server started at ' + server.info.uri)
  })
})
