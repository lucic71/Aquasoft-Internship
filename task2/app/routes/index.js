const project_routes = require('./project.routes');
const employee_routes = require('./employee.routes');

module.exports = app => {
    project_routes(app);
    employee_routes(app);
}
