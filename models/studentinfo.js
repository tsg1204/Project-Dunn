'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentInfo = sequelize.define('StudentInfo', {
    student_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StudentInfo;
};