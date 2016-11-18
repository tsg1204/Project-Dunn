'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('statistics', {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      school_year: {
        type: Sequelize.STRING
      },
      pass_rate: {
        type: Sequelize.INTEGER
      },
      pass_prof_rate: {
        type: Sequelize.INTEGER
      },
      pass_adv_rate: {
        type: Sequelize.INTEGER
      },
      fail_rate: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('statistics');
  }
};