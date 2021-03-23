module.exports = (sequelize, Sequelize) => {
  const Employees = sequelize.define("employees", {
      name       : Sequelize.STRING,
      email      : Sequelize.STRING,
      hire_date  : Sequelize.DATE,
      salary     : Sequelize.FLOAT,
      job_title  : Sequelize.STRING,
      project_id : Sequelize.INTEGER
  });

  return Employees;
};

