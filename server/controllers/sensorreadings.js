const SensorReading = require('../models').SensorReading;

module.exports = {
    create(req,res) {
        return SensorReading
            .create({
                value: req.body.value,
                datetime: req.body.datetime,
                sensorId: req.params.sensorId
            })
            .then(sensorReading => res.status(201).send(sensorReading))
            .catch(err => res.status(400).send(err));
    },
    retrieve(req,res) {
        return SensorReading
            .findAll({
                where: {
                    sensorId: req.params.sensorId
                }
            })
            .then(sensorReadings => res.status(200).send(sensorReadings))
            .catch(err => res.status(400).send(err));
    },
    destroy(req,res) {
        return SensorReading
            .find({
                where: {
                    id: req.params.sensorReadingId,
                    sensorId: req.params.sensorId
                }
            })
            .then(sensorReading => {
                if(!sensorReading) {
                    return res.status(404).send({
                        message: 'SensorReading not found.'
                    })
                }

                return sensorReading
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(err => res.status(400).send(err));
            })
            .catch(err => res.status(400).send(err));
    }
}