'use strict';
module.exports = (sequelize, DataTypes) => {
  var SensorReading = sequelize.define('SensorReading', {
    value: DataTypes.STRING,
    datetime: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  SensorReading.associate = (models) => {
    SensorReading.belongsTo(models.Sensor, {
      foreignKey: 'sensorId',
      onDelete: 'CASCADE'
    })
  }
  return SensorReading;
};