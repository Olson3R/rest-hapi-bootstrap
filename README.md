# rest-hapi-bootstrap
Minimal rest api bootstrap project.

# Instructions
1. Install dependencies `npm install`
2. Make sure `config/database.json` is configured properly
3. Migrate the database `sequelize --options-path=config/database.json db:migrate`
 * Requires `sequelize-cli` be installed globally
4. Start the server `node index.js` or `nodemon index.js --watch ./ -e js,json` (if you have nodemon installed)
