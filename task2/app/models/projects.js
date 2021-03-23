module.exports = (sequelize, Sequelize) => {
  const Projects = sequelize.define("projects", {
      project_name     : Sequelize.STRING,
      start_date       : Sequelize.DATE,
      planned_end_date : Sequelize.DATE,
      description      : Sequelize.STRING,
      project_code     : Sequelize.STRING,
  });

  return Projects;
};

