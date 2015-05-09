'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users')
  }
}
