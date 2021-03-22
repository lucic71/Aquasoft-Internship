var ProjectModel = require('../models/ProjectModel');

exports.create_new_project = (req, res) => {
    var newProject = new ProjectModel(req.body);

    // check that there are no empty fields
    for (var k of Object.keys(newProject)) {
        if (!newProject[k]) {
            res.status(400).send({
                error:true,
                message: 'Please provide a ' + k
            });

            return;
        }
    }

    ProjectModel.createProject(newProject, (err, project) => {
        if (err)
            res.send(err);

        res.json(project);
    });

    console.log("Sucessfully created new project");
}
