const { species, hours } = require('../data/zoo_data');

/** Animal: 'Dia da semana' */
const animalDays = species.reduce((acc, curr) => {
  acc[curr.name] = curr.availability;
  return acc;
}, []);

/** Dias da Semana */
const daysOfTheWeek = Object.keys(hours);

/** Agenda do Zoo */
const schedule = daysOfTheWeek.reduce((acc, curr) => {
  const day = curr;
  acc[curr] = {
    [daysOfTheWeek[curr]]: {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter((animal) => (animal.availability.includes(day)))
        .map(({ name }) => name),
    },
  };

  return acc;
}, {});

schedule.Monday.officeHour = 'CLOSED';
schedule.Monday.exhibition = 'The zoo will be closed!';

const animal = Object.keys(animalDays);

const getSchedule = (target) => {
  if (daysOfTheWeek.includes(target)) return schedule[target];
  if (animal.includes(target)) return animalDays[target];
  return schedule;
};
console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
