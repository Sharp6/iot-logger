const Sensor = require('../models').Sensor;

module.exports = {
    create(req,res) {
        return Sensor
            .create({
                name: req.body.name
            })
            .then(sensor => res.status(201).send(sensor))
            .catch(err => res.status(400).send(err));
    },
    list(req,res) {
        return Sensor
            .all()
            .then(sensors => res.status(200).send(sensors))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req,res) {
        return Sensor
            .findById(req.params.sensorId)
            .then(sensor => {
                if(!sensor) {
                    return res.status(404).send({
                        message: 'Sensor not found.'
                    });
                }
                return res.status(200).send(sensor);
            })
            .catch(err => res.status(400).send(err));
    },
    destroy(req,res) {
        return Sensor
            .findById(req.params.sensorId)
            .then(sensor => {
                if(!sensor) {
                    return res.status(400).send({
                        message: 'Sensor not found.'
                    });
                }
                return sensor
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(err => res.status(400).send(err));
            })
            .catch(err => res.status(400).send(err));
    }
}