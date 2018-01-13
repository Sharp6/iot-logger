'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sensor = sequelize.define('Sensor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Sensor.associate = (models) => {
    Sensor.hasMany(models.SensorReading, {
      foreignKey: 'sensorId',
      as: 'sensorReadings'
    });
  }

  return Sensor;
};