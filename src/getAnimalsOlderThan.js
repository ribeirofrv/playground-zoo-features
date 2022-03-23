const data = require('../data/zoo_data');

const getAnimalsOlderThan = (name, age) => {
  const [...species] = data.species;
  const animal = species.find((fera) => name === fera.name); // Encontra e guarda dados da especie especifica

  return animal.residents.every((resident) => age <= resident.age); // Verifica se TODOS residentes daquela especie tem idade maior ou igual à passada pelo parametro
};

// console.log(getAnimalsOlderThan('frogs', 2));
// console.log(getAnimalsOlderThan('frogs', 3));
module.exports = getAnimalsOlderThan;
