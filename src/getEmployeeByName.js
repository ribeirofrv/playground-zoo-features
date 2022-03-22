const data = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  const [...employees] = data.employees;

  if (!name) return {};

  return employees.find((person) => (name === person.firstName) || (name === person.lastName));
};

module.exports = getEmployeeByName;
