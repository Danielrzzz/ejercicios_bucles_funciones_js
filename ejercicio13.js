const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {
    let actualAge = [];
    let age = 0;
    const actualYear = new Date().getFullYear(); // es una asignación con dos funciones que encontre en internet, para poder conocer el año actual automáticamente y que el código pueda continuar funcionando con el paso de los años.
    for(let actor of actors){
        age = actualYear - actor.born;
        actor.born = age;
        actualAge.push(actor);
    }
    return actualAge;
}

console.log (calculateActorsAges(actors));