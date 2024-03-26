const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['Tere Hawaale','Maan Meri Jaan','O Mahi O Mahi','Dil Kya Kare','Pehli Dafa','Guli Mata','Pehle Bhi Main','Zihaal e Miskin','Bhool_Bhulaiyaa-2','Meri Zindagi','Baithe_Baithe','Tu Mujhse Juda','Peaches','Intentions Justin Bieber','Love Me - Justin Bieber','You Know You Love Me','Beauty And A Beat','Baby Calm Down','Gall Mukdi Aa','Coffee Shade','Lehnga','Waaliyaa','Enemy','Koi Farak Nahi','Go! - NEFFEX','No Doubt - Yung Logos','Play Dead - NEFFEX','Shaka Laka Boom Boom','Take Me Back - NEFFEX','Winning - NEFFEX'];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);


function playthis(a) {
  let songIndex=a;
  loadSong(songs[songIndex])
  playSong();
  
}


/**--------------------responsive navbar-------- */
function shownav(){
  var x=document.getElementById("navbar");
  if (x.className=="navbar") {
      x.className += " responsive";
      
  } else {
      x.className="navbar";
      
  }

}