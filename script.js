const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const canvas = document.getElementById("starfield");
const music = document.getElementById("bgMusic");

const context = canvas.getContext("2d");

let animationStarted = false;
let frameNumber = 0;
let opacity = 0;

/* ---------------------------
   Start Button Click Logic
---------------------------- */
startButton.addEventListener("click", () => {

  // Play music
  music.play();

  // Hide start screen
  startScreen.style.display = "none";

  // Show canvas
  canvas.style.display = "block";

  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  animationStarted = true;

  // Start animation
  window.requestAnimationFrame(draw);
});

/* ---------------------------
   Star Background Setup
---------------------------- */

let stars = 400;
let starArray = [];

function createStars() {
  starArray = [];
  for (let i = 0; i < stars; i++) {
    starArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      opacity: Math.random()
    });
  }
}

function drawStars() {
  for (let i = 0; i < stars; i++) {
    let star = starArray[i];
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(255,255,255," + star.opacity + ")";
    context.fill();
  }
}

function updateStars() {
  for (let i = 0; i < stars; i++) {
    if (Math.random() > 0.98) {
      starArray[i].opacity = Math.random();
    }
  }
}

/* ---------------------------
   Text Animation
---------------------------- */

function drawText() {

  let fontSize = Math.min(32, window.innerWidth / 22);
  context.font = fontSize + "px Comic Sans MS";
  context.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
  context.textAlign = "center";

  if (frameNumber < 200) {
    context.fillText("Everyday I cannot believe how lucky I am", canvas.width / 2, canvas.height / 2);
    opacity += 0.01;
  }

  if (frameNumber >= 200 && frameNumber < 400) {
    context.fillText("Everyday I cannot believe how lucky I am", canvas.width / 2, canvas.height / 2);
    opacity -= 0.01;
  }

  if (frameNumber === 400) opacity = 0;

  if (frameNumber > 400 && frameNumber < 700) {
    context.fillText("To be alive and spend this life with you", canvas.width / 2, canvas.height / 2);
    opacity += 0.01;
  }

  if (frameNumber >= 700 && frameNumber < 900) {
    context.fillText("To be alive and spend this life with you", canvas.width / 2, canvas.height / 2);
    opacity -= 0.01;
  }

  if (frameNumber === 900) opacity = 0;

  if (frameNumber > 900) {
    context.fillText("I love you so much Seetha ❤️", canvas.width / 2, canvas.height / 2);
    opacity += 0.01;
  }
}

/* ---------------------------
   Main Draw Loop
---------------------------- */

function draw() {

  context.clearRect(0, 0, canvas.width, canvas.height);

  drawStars();
  updateStars();
  drawText();

  frameNumber++;

  if (animationStarted) {
    window.requestAnimationFrame(draw);
  }
}

/* ---------------------------
   Resize Handling
---------------------------- */

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createStars();
});
