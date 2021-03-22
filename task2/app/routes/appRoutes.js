'use strict'

module.exports = (app) => {
    var controller = require('../controllers/appController');

    app.route('/projects')
        .post(controller.create_new_project);
};
