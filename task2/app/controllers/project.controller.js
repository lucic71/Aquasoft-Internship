const db = require('../models');
const Project = db.projects;
const utils = require('../utils');

exports.findAll = (req, res) => {
    Project.findAll()
        .then(data => { res.send(data); })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving projects."
            });
        });
}

exports.create = (req, res) => {
    if (!utils.isReqBodyOk(req.body)) {
        res.status(400).send({
            message: "Project fields cannot be empty!"
        });

        return;
    }

    const project = {
        project_name: req.body.project_name,
        start_date: req.body.start_date,
        planned_end_date: req.body.planned_end_date,
        description: req.body.description,
        project_code: req.body.project_code,
    };

    Project.create(project)
        .then(data => { res.send(data); })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the project."
            });
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Project.destroy({ where: { id: id } })
        .then(ret_code => {
            if (ret_code == 1) {
                res.send({
                    message: "Project was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Project with id=${id}. Not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Could not delete Project with id=" + id
            });
        });
}
