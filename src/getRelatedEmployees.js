const data = require('../data/zoo_data');

// Verifica se o Id corresponde à uma pessoa gerente retornando um valor bool
const isManager = (id) => data.employees.some((value) => value.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  // Se a função isManager for verdade retorna uma lista de funcionários da pessoa gerente
  if (isManager(managerId)) {
    return data.employees
      .filter((person) => person.managers.includes(managerId))
      .map((ppl) => `${ppl.firstName} ${ppl.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); // linha dada pelo requisito.
};

module.exports = { isManager, getRelatedEmployees };
