const { species, employees } = require('../data/zoo_data');
/** Busca residentes da espécie por Id */
const getSpecieById = (id) => species.find((key) => key.id === id).residents;

/** Busca primeira espécie por quem o funcionário é responsável */
const getEmployeeById = (id) => employees.find((person) => person.id === id).responsibleFor[0];

/** Retorna o animal mais velho gerenciado pelo funcionário identificado pelo Id recebido por parâmetro */
const getOldestFromFirstSpecies = (id) => {
  const firstSpecieId = getEmployeeById(id);
  const residents = getSpecieById(firstSpecieId);
  const residentsAges = residents.map((animal) => animal.age);
  const maxAge = Math.max(...residentsAges);
  const oldest = residents.find((animal) => animal.age === maxAge);

  return Object.values(oldest);
};

module.exports = getOldestFromFirstSpecies;
