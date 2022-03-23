const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const countPerson = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((person) => {
    if (person.age < 18) countPerson.child += 1;
    if (person.age >= 18 && person.age < 50) countPerson.adult += 1;
    if (person.age >= 50) countPerson.senior += 1;
  });

  return countPerson;
};

const calculateEntry = (entrants) => {
  const { ...price } = data.prices;

  // Se 'entrants' for verdade E contenha alguma chave o calculo é realizado.
  if (entrants && Object.keys(entrants).length > 0) {
    const { child, adult, senior } = countEntrants(entrants);
    return (child * price.child) + (adult * price.adult) + (senior * price.senior);
  }

  return 0;
};

module.exports = { calculateEntry, countEntrants };
