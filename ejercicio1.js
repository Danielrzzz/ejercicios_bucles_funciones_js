const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];
const humanCharacters = [];

// en el enunciado decía que lo hiciera filtrando, por lo que dejo esta opción de realizar el trabajo con .filter comentado (también por que me parecía mas simple con .filter), pero lo realizo con el bucle for, ya que también pide un bucle
// const humanCharacters = characters.filter(character => character.species === 'Human');

for (let character of characters) {
    if(character.species === 'Human'){
        humanCharacters.push(character);
    }
}

console.log(humanCharacters);