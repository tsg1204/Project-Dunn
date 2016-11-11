'use strict';
module.exports = function(sequelize, DataTypes) {
  var ClassInfo = sequelize.define('ClassInfo', {
    school_name: DataTypes.STRING,
    class_name: DataTypes.STRING,
    teacher_name: DataTypes.STRING,
    grade: DataTypes.STRING
   }, 
  // {
  //   freezeTableName: true
  // },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ClassInfo;
};