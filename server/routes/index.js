const sensorsController = require('../controllers').sensors;
const sensorReadingsController = require('../controllers').sensorReadings;

module.exports = (app) => {
    app.get('/api', (req,res) => res.status(200).send({
        message: 'Welcome to the IoT logger API!'
    }));
    
    app.get('/api/sensors', sensorsController.list);
    app.get('/api/sensors/:sensorId', sensorsController.retrieve);
    app.post('/api/sensors', sensorsController.create);
    app.delete('/api/sensors/:sensorId', sensorsController.destroy);

    app.get('/api/sensors/:sensorId/sensorreadings', sensorReadingsController.retrieve);
    app.post('/api/sensors/:sensorId/sensorreadings', sensorReadingsController.create);
    app.delete('/api/sensors/:sensorId/sensorreadings/:sensorReadingId', sensorReadingsController.destroy);
}