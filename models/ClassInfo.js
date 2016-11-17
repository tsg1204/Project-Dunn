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
        // ClassInfo.hasMany(models.StudentInfo, {
        //   onDelete: "CASCADE",
        //   hooks: true,
        //   foreignKey: {
        //     allowNull: false
        //   }
        // })
      }
    }    
  });
  return ClassInfo;
};