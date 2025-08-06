const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const songs = {};

for (let track of tracks) { 
    let genre = "";
    switch (true) {
        case track.genre === 'Rock':
            genres = 'Rock';
            break;
        case track.genre === 'Pop':
            genres = 'Pop';
            break;
        case track.genre === 'Country':
            genres = 'Country';
            break;
        case track.genre === 'Grunge':
            genres = 'Grunge';
            break;
        case track.genre === 'Metal':
            genres = 'Metal';
            break;
        default:
            genres = 'other';
            console.log("Thats not a existent genre on the list, please ask to administration to add the new genre");
    }
    if(!songs[genres]){
        songs[genres] = [];
    }

    songs[genres].push(track.title);
}

console.log(songs);