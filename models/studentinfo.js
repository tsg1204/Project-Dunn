'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentInfo = sequelize.define('StudentInfo', {
    student_name: DataTypes.STRING,
    assignment: DataTypes.STRING,
    student_grade: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //StudentInfo.hasOne(models.ClassInfo);
        // StudentInfo.belongsTo(models.ClassInfo, {
        //   onDelete: "CASCADE",
        //   foreignKey: {
        //     allowNull: false
        //   }
        // })
      }
    }
  });
  return StudentInfo;
};