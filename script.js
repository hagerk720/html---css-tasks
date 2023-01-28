const playbtn = document.querySelector(".play");
const vid = document.querySelector("#vid");
const speaker = document.querySelector(".speaker");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const expand = document.querySelector(".full-screen");
const input = document.querySelector("#range-input");
const volumeRang = document.querySelector("#volume-range");
const selector = document.getElementById("#lab1-selector");
const red_range = document.querySelector("#range-red");
const green_range = document.querySelector("#range-green");
const blue_range = document.querySelector("#range-blue");
const task1 = document.querySelector(".video-Task");
const task2 = document.querySelector(".color-range");
const pColored = document.querySelector(".colored-p");
playbtn.addEventListener("click", function (e) {
  if (vid.paused) {
    vid.play();
    playbtn.src = "./src/pause.png";
  } else {
    vid.pause();

    playbtn.src = "./src/play-button.png";
  }
});
speaker.addEventListener("click", function () {
  if (vid.muted) {
    vid.muted = false;
    speaker.src = "./src/speaker-filled-audio-tool.png";
  } else {
    vid.muted = true;
    speaker.src = "./src/mute.png";
  }
});
forward.addEventListener("click", function () {
  vid.currentTime = vid.currentTime + 5;
});
backward.addEventListener("click", function () {
  vid.currentTime = vid.currentTime - 5;
});

input.setAttribute("max", vid.duration);
input.addEventListener("input", (event) => {
  vid.currentTime = event.target.value;
});

volumeRang.addEventListener("input", (e) => {
  vid.volume = e.target.value;
  if (e.target.value == 0) {
    speaker.src = "./src/mute.png";
  } else {
    speaker.src = "./src/speaker-filled-audio-tool.png";
  }
});
vid.addEventListener("timeupdate", function () {
  input.value = vid.currentTime;
});
expand.addEventListener("click", () => {
  vid.webkitRequestFullscreen();
});
selector.addEventListener("change", function (e) {
  console.log("here");
  if (selector.value === "0") {
    task1.style.display = "flex";
    task2.style.display = "none";
  } else if (selector.value === "1") {
    task1.style.display = "none";
    task2.style.display = "block";
  }
});

red_range.addEventListener("input", (e) => {
  pColored.style.color = `rgb(${red_range.value}, ${green_range.value}, ${blue_range.value})`;
});
green_range.addEventListener("input", (e) => {
  pColored.style.color = `rgb(${red_range.value}, ${green_range.value}, ${blue_range.value})`;
});
blue_range.addEventListener("input", (e) => {
  pColored.style.color = `rgb(${red_range.value}, ${green_range.value}, ${blue_range.value})`;
});

let speedRang = document.querySelector("#speed-range");
// speedRang.style.display = "inline";
speedRang.addEventListener("input", (e) => {
  vid.playbackRate = e.target.value;
});
