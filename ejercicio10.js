const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {

    if (capitals[country]){
        return capitals[country];
    } else {
        console.log("That country is not registered. Please try another one.");
    }
}

console.log(getCapital('Greece'));