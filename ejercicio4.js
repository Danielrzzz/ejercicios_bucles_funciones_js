const cartoons = [
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];


let olderCartoon = cartoons[0];

for (let i = 0;i < cartoons.length; i++) {
    let cartoon = cartoons[i];
    if(cartoon.debut < olderCartoon.debut){
        olderCartoon = cartoon;
    }
}

console.log(olderCartoon.name);   //es un objeto, por lo que tengo que llamar al name dentro del objeto, no estoy seguro si así vale igual el ejercicio.