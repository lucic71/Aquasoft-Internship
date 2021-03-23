const db = require('../models');
const Employee = db.employees;
const Op = db.Sequelize.Op;
const utils = require('../utils');

exports.create = (req, res) => {
    if (!utils.isReqBodyOk(req.body)) {
        res.status(400).send({
            message: "Employee fields cannot be empty!"
        });

        return;
    }

    const employee = {
        name: req.body.name,
        email: req.body.email,
        hire_date: req.body.hire_date,
        salary: req.body.salary,
        job_title: req.body.job_title,
        project_id: req.body.project_id,
    };

    Employee.create(employee)
        .then(data => { res.send(data); })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the employee."
            });
        });
}
