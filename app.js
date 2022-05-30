let drumMain = document.getElementById("drum-main");

//drum keys
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

// drum noises
const boomSound = document.getElementById("boom-sound");
const clapSound = document.getElementById("clap-sound");
const hihatSound = document.getElementById("hihat-sound");
const kickSound = document.getElementById("kick-sound");
const openhatSound = document.getElementById("openhat-sound");
const rideSound = document.getElementById("ride-sound");
const snareSound = document.getElementById("snare-sound");
const tinkSound = document.getElementById("tink-sound");
const tomSound = document.getElementById("tom-sound");

//keydown event listener

document.addEventListener("keydown", (x) => {
  console.log(x);
  if (x.key == "A") {
    boomSound.play();
    boomSound.currentTime = 0;
  } else if (x.key == "S") {
    clapSound.play();
    clapSound.currentTime = 0;
  } else if (x.key == "D") {
    hihatSound.play();
    hihatSound.currentTime = 0;
  } else if (x.key == "F") {
    kickSound.play();
    kickSound.currentTime = 0;
  } else if (x.key == "G") {
    openhatSound.play();
    openhatSound.currentTime = 0;
  } else if (x.key == "H") {
    rideSound.play();
    rideSound.currentTime = 0;
  } else if (x.key == "J") {
    snareSound.play();
    snareSound.currentTime = 0;
  } else if (x.key == "K") {
    tinkSound.play();
    tinkSound.currentTime = 0;
  } else if (x.key == "L") {
    tomSound.play();
    tomSound.currentTime = 0;
  }
});

//click event listener

boom.addEventListener("click", () => {
  boomSound.play();
  boomSound.currentTime = 0;
});
clap.addEventListener("click", () => {
  clapSound.play();
  clapSound.currentTime = 0;
});
hihat.addEventListener("click", () => {
  hihatSound.play();
  hihatSound.currentTime = 0;
});
kick.addEventListener("click", () => {
  kickSound.play();
  kickSound.currentTime = 0;
});
openhat.addEventListener("click", () => {
  openhatSound.play();
  openhatSound.currentTime = 0;
});
ride.addEventListener("click", () => {
  rideSound.play();
  rideSound.currentTime = 0;
});
snare.addEventListener("click", () => {
  snareSound.play();
  snareSound.currentTime = 0;
});
tink.addEventListener("click", () => {
  tinkSound.play();
  tinkSound.currentTime = 0;
});
tom.addEventListener("click", () => {
  tomSound.play();
  tomSound.currentTime = 0;
});
