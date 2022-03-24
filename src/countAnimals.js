const { species } = require('../data/zoo_data');

// Função gera objeto com nomes e quantidade de animais de cada espécie
const getAllAnimals = () => {
  const animalsData = species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});

  return animalsData;
};

// Função retorna número de população de animais do zoo
const countAnimals = (animal) => {
  // Se o parâmetro for falso retorna função que traz um objeto com nomes e quantidade de animais de cada espécie
  if (!animal) return getAllAnimals();

  // Busca dados do animal recebido por parâmetro
  const getAnimal = species.find((key) => key.name === animal.specie);

  // Se existir uma chave 'sex' no objeto recebido por parâmetro, retorna quantidade de animais do sexo específico
  if (animal.sex) {
    return getAnimal.residents.filter((key) => key.sex === animal.sex).length;
  }

  return getAnimal.residents.length;
};

module.exports = countAnimals;
