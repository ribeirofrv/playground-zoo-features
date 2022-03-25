const { species } = require('../data/zoo_data');

const categorizedAnimals = () => {
  const animalsMap = species.reduce((acc, curr) => {
    // Se não existir uma key no objeto correspondente ao indice atual, ela é criada
    if (!acc[curr.location]) {
      acc[curr.location] = [];
    }

    acc[curr.location].push(curr.name); // Adiciona animal ao array da localização correspondente

    return acc;
  }, {});
  // console.log(animalsMap);
  return animalsMap;
};

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) return categorizedAnimals();

  if (options.sex === 'female' && options.sorted) return categorizedAnimals();

  return 0;
};

// console.log(categorizedAnimals());
// {
//   NE: [ 'lions', 'giraffes' ],
//   NW: [ 'tigers', 'bears', 'elephants' ],
//   SE: [ 'penguins', 'otters' ],
//   SW: [ 'frogs', 'snakes' ]
// }
module.exports = getAnimalMap;
