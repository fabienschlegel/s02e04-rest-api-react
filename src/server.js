const { randSuperhero } = require("@ngneat/falso");

module.exports = () => {
  const data = { heroes: [] };
  for (let i = 0; i < 10; i++) {
    const hero = randSuperhero();
    data.heroes.push(hero);
  }
  return data;
};
