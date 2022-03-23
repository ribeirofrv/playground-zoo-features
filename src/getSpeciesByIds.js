const data = require('../data/zoo_data');

/* Mapeia cada item do array de entradas
* Encontra no objeto data.species a chave identica ao codigo passado por parametro
*/
const getSpeciesByIds = (...ids) => ids.map((cod) => data.species.find((key) => key.id === cod));
// *lint odeia linhas gigantes por isso diminui o nome das variaveis

module.exports = getSpeciesByIds;
