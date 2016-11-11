'use strict';
module.exports = function(sequelize, DataTypes) {
  var statistics = sequelize.define('statistics', {
    school_year: DataTypes.STRING,
    pass_rate: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return statistics;
};