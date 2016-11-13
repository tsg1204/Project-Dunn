'use strict';
module.exports = function(sequelize, DataTypes) {
  var statistics = sequelize.define('statistics', {
    school_year: DataTypes.STRING,
    pass_rate: DataTypes.INTEGER,
    pass_prof_rate: DataTypes.INTEGER,
    pass_adv_rate: DataTypes.INTEGER,
    fail_rate: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return statistics;
};