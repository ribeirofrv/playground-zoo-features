const data = require('../data/zoo_data');

/** Funcão(RECEBE ID) retorna dados dos animais.
 * Percorre o array de entradas
 * Compara o array de entradas com os dados de species
 * Verifica se existe algum valor dentro de species identico ao valor de entrada
 * Retorna valores identicos
 *
 * Erro: Função retorna um array vazio além do valor esperado.
 */

const getSpeciesByIds = (...entries) => {
  const { ...animals } = data.species; // busca dados de especies.
  // console.log(entries);
  return entries.filter((ids) => ids === animals);
};

module.exports = getSpeciesByIds;
