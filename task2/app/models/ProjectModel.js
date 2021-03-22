'use strict'

var sql = require('./db');

var Project = function(project) {
    this.project_name = project.project_name;
    this.start_date = project.start_date;
    this.planned_end_date = project.planned_end_date;
    this.description = project.description;
    this.project_code = project.project_code;
}

Project.createProject = (newProject, result) => {
    sql.query("INSERT INTO Projects SET ?", newProject, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

module.exports = Project
