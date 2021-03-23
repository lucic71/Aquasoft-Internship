const db = require('../models');
const Employee = db.employees;

exports.findAll = (req, res) => {
    Employee.findAll()
        .then(data => { res.send(data); })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving employees."
            });
        });
}

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

exports.delete = (req, res) => {
    const id = req.params.id;

    Employee.destroy({ where: { id: id } })
        .then(ret_code => {
            if (ret_code == 1) {
                res.send({
                    message: "Employee was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Employee with id=${id}. Not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Could not delete Employee with id=" + id
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Employee.update(req.body, { where: { id: id } })
        .then(ret_code => {
            if (ret_code == 1) {
                res.send({
                    message: "Employee was updated successfully."
                });
            } else {
                res.send({
                message: `Cannot update Employee with id=${id}. Not found!`
            });
        }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Employee with id=" + id
            });
        });
};
