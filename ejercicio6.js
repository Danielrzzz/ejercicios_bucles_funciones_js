const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const years = {};

for(movies of starWarsMovies) {
let year = movies.releaseYear; //esto lo hice para que fuera mas sencillo las comparaciones
let decade = "";

    switch (true){
        case year >= 1970 && year < 1980:
            decade = '1970';
            break;
        case year >= 1980 && year < 1990:
            decade = '1980';
            break;
        case year >= 1990 && year < 2000:
            decade = '1990';
            break;
        case year >= 2000 && year < 2010:
            decade = '2000';
            break;
        case year >= 2010 && year < 2020:
            decade = '2010';
            break;
        case year >= 2020 && year < 2030:
            decade = '2020';
            break;
        default:
            decade = 'others'
            console.log("Star Wars doesn't have any movies in that year, at least not yet...");
    }
    if(!years[decade]) {
        years[decade] = [];
    }

    years[decade].push(movies.title);
}

console.log(years);