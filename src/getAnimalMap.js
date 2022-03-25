const { species } = require('../data/zoo_data');

const animalsMap = species.reduce((acc, curr) => {
  // Se não existir uma key no objeto correspondente ao indice atual, ela é criada
  if (!acc[curr.location]) {
    acc[curr.location] = [];
  }

  acc[curr.location].push(curr.name); // Adiciona animal ao array da localização correspondente

  return acc;
}, {});

const residentsByNames = (option) => species.reduce((acc, curr) => {
  const animal = curr.residents; // busca residentes da especie atual
  const names = animal.map((key) => key.name); // guarda nomes de animais da especie atual
  let sortedName = names;

  if (!acc[curr.location]) {
    acc[curr.location] = []; // Adiciona região
  }

  const animalByName = { // cria objeto de especies
    [curr.name]: [],
  };

  if (option.sorted) sortedName = names.sort();

  animalByName[curr.name].push(...sortedName); // atribui nomes de animais a respectiva especie
  acc[curr.location].push(animalByName); // adiciona especies às suas regions

  return acc;
}, {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) return animalsMap;

  return residentsByNames(options);
};

// console.log(getAnimalMap());

module.exports = getAnimalMap;
