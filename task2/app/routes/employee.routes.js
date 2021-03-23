module.exports = app => {
  const employees = require("../controllers/employee.controller");

  var router = require("express").Router();

  // Create a new employee
  router.post("/", employees.create);

  // Retrieve all employees
  router.get("/", employees.findAll);

  // Update a employee with id
  router.put("/:id", employees.update);

  // Delete a employee with id
  router.delete("/:id", employees.delete);

  app.use('/api/employees', router);
};
