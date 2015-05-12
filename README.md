# rest-hapi-bootstrap
Minimal rest api bootstrap project. It implements the index and create actions for a user model.

The primary technologies used are [NodeJS](https://nodejs.org/), [HapiJS](http://hapijs.com/), and [Sequelize](http://docs.sequelizejs.com/en/latest/)

# Instructions
>If you provisioned using [vagrant-bootstrap](https://github.com/Olson3R/vagrant-bootstrap), then you can skip to **Start The Server**

1. Install dependencies `npm install`
2. Make sure `config/database.json` is configured properly
3. Migrate the database `sequelize --options-path=config/database.json db:migrate`
 * Requires `sequelize-cli` be installed globally

# Start The Server
1. Start the server `node index.js` or `nodemon index.js --watch ./ -e js,json` (if you have nodemon installed)
