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

  // **Important:** create stars AFTER canvas size
  createStars();

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
      radius: Math.random() * 1.5 + 0.5,  // ensure visible radius
      opacity: Math.random() * 0.8 + 0.2   // ensure visible opacity
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

// function drawText() {

//   let fontSize = Math.min(32, window.innerWidth / 22);
//   context.font = fontSize + "px Comic Sans MS";
//   context.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
//   context.textAlign = "center";

//   if (frameNumber < 200) {
//     context.fillText("Everyday I cannot believe how lucky I am", canvas.width / 2, canvas.height / 2);
//     opacity += 0.01;
//   }

//   if (frameNumber >= 200 && frameNumber < 400) {
//     context.fillText("Everyday I cannot believe how lucky I am", canvas.width / 2, canvas.height / 2);
//     opacity -= 0.01;
//   }

//   if (frameNumber === 400) opacity = 0;

//   if (frameNumber > 400 && frameNumber < 700) {
//     context.fillText("To be alive and spend this life with you", canvas.width / 2, canvas.height / 2);
//     opacity += 0.01;
//   }

//   if (frameNumber >= 700 && frameNumber < 900) {
//     context.fillText("To be alive and spend this life with you", canvas.width / 2, canvas.height / 2);
//     opacity -= 0.01;
//   }

//   if (frameNumber === 900) opacity = 0;

//   if (frameNumber > 900) {
//     context.fillText("I love you so much Seetha ❤️", canvas.width / 2, canvas.height / 2);
//     opacity += 0.01;
//   }
// }
   function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["I love you so much {name}, more than", "all the time and space in the universe can contain"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("I love you so much {name}, more than all the time and space in the universe can contain", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;


        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and I can't wait to spend all the time in", "the world to share that love with you!"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("and I can't wait to spend all the time in the world to share that love with you!", canvas.width/2, (canvas.height/2 + 50));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Happy Valentine's Day <3", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;

        button.style.display = "block";
    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

/* ---------------------------
   Main Draw Loop
---------------------------- */

function draw() {

context.fillStyle = "#111";
context.fillRect(0, 0, canvas.width, canvas.height);

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
