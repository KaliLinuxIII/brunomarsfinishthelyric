/**@type {HTMLButtonElement} */
const startBtn = document.getElementById('start-btn');
/**@type {HTMLDivElement} */
const webpageContent = document.getElementById('webpage-content');

const songs = [{
  name: 'twil',
  src: 'Song Audio Files/Thats What I Like Opening.MP3',
  correctLyric: 'manhattan'
}, {
  name: 'tttm',
  src: 'Song Audio Files/Talking To The Moon Opening.MP3',
  correctLyric: 'room'
}];

let score = 0;
let randomSong;

function loadGame() {
  webpageContent.innerHTML = `
  <div id="display"></div>
  <audio src="Song Audio Files/Thats What I Like Opening.MP3" id="song-player"></audio>
  <input id="lyric-input" type="text" placeholder="What comes next?">
  <button id="submit-btn">Submit</button>
  `;
/**@type {HTMLAudioElement} */
  const songPlayer = document.getElementById('song-player');
/**@type {HTMLInputElement} */
  const lyricInput = document.getElementById('lyric-input');
/**@type {HTMLButtonElement} */
  const submitBtn = document.getElementById('submit-btn');
/**@type {HTMLDivElement} */
  const display = document.getElementById('display');

  function chooseSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const song = songs[randomIndex];
    return song;
  }

  randomSong = chooseSong();

  songPlayer.src = randomSong.src;

  songPlayer.play();

  function checkLyric() {
    const {src, correctLyric} = randomSong;
    console.log(correctLyric);
    const userLyric = lyricInput.value;
    if (userLyric.toLowerCase() == correctLyric) {
      display.textContent = 'You guessed corectly';
      score++;
    } else {
      display.textContent = 'You guessed incorectly';
    }

  webpageContent.innerHTML += `<button id="restart-btn">Click to play again</button>`;

/**@type {HTMLButtonElement} */
    const restartBtn = document.getElementById('restart-btn');
    restartBtn.addEventListener('click', loadGame);
  }

  submitBtn.addEventListener('click', checkLyric);
}

startBtn.addEventListener('click', loadGame);