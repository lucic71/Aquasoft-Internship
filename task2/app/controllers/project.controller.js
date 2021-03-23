const db = require('../models');
const Project = db.projects;
const Op = db.Sequelize.Op;
const utils = require('../utils');

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
