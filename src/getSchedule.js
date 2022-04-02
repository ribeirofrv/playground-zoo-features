const { species, hours } = require('../data/zoo_data');

/** Animal: 'Dia da semana' */
const animalDays = species.reduce((acc, curr) => {
  acc[curr.name] = curr.availability;
  return acc;
}, []);

/** Dias da Semana */
const daysOfTheWeek = Object.keys(hours);

/** Agenda do Zoo para ser acessada por dia especifico */
const schedule = daysOfTheWeek.reduce((acc, curr) => {
  const day = curr;
  acc[curr] = {
    [day]: {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter((animal) => (animal.availability.includes(day)))
        .map(({ name }) => name),
    },
  };
  if (day === 'Monday') {
    acc[day] = {
      [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }

  return acc;
}, {});

/** Agenda Completa do Zoo */
const allSchedule = daysOfTheWeek.reduce((acc, curr) => {
  const day = curr;
  acc[curr] = {
    officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
    exhibition: species.filter((animal) => (animal.availability.includes(day)))
      .map(({ name }) => name),
  };
  if (day === 'Monday') acc[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return acc;
}, {});

/** Lista de Animais do Zoo */
const animal = Object.keys(animalDays);

const getSchedule = (target) => {
  if (daysOfTheWeek.includes(target)) return schedule[target];
  if (animal.includes(target)) return animalDays[target];
  return allSchedule;
};
// console.log(getSchedule('looooooooool'));

module.exports = getSchedule;
