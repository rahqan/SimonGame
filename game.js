$(document).keypress(function (event) {
  if (event.key == "a") {
    playing = true;
    startGame();
  }
});

var simon = [];
var userInput = [];
var playing = false;
var level = 1;

$(".green").click(function () {
  if (playing === true) {
    display(0);
    userInput.push(0);
    checkAnswer(userInput.length);
    console.log("hi0");
  }
  // $(".green").off("click");
});
$(".red").click(function () {
  if (playing === true) {
    display(1);
    userInput.push(1);
    checkAnswer(userInput.length);
    console.log("hi1");
  }
  // $(".red").off("click");
});
$(".yellow").click(function () {
  if (playing === true) {
    display(2);
    userInput.push(2);
    checkAnswer(userInput.length);
    console.log("hi2");
  }
  // $(".yellow").off("click");
});
$(".blue").click(function () {
  if (playing === true) {
    display(3);
    userInput.push(3);
    checkAnswer(userInput.length);
    //  checkAnswer(userInput.length);
    console.log("hi3");
  }
  // $(".blue").off("click");
});

function display(x) {
  switch (x) {
    case 0:
      $(".green").addClass("pressed");
      var sound = new Audio("./sounds/green.mp3");
      sound.play();
      setTimeout(() => {
        $(".green").removeClass("pressed");
      }, 300);
      break;
    case 1:
      $(".red").addClass("pressed");
      var sound = new Audio("./sounds/red.mp3");
      sound.play();
      setTimeout(() => {
        $(".red").removeClass("pressed");
      }, 300);
      break;
    case 2:
      $(".yellow").addClass("pressed");
      var sound = new Audio("./sounds/yellow.mp3");
      sound.play();
      setTimeout(() => {
        $(".yellow").removeClass("pressed");
      }, 300);
      break;
    case 3:
      $(".blue").addClass("pressed");
      var sound = new Audio("./sounds/blue.mp3");
      sound.play();
      setTimeout(() => {
        $(".blue").removeClass("pressed");
      }, 300);
      break;

    default:
      break;
  }
}

function checkAnswer(len) {
  if (userInput[len - 1] !== simon[len - 1]) {
    // console.log(userInput[i]);
    gameOver();
  }

  if (playing == 1 && userInput.length === simon.length) {
    level++;
    setTimeout(() => {
      console.log();
      $("h1").text("Moving to Level" + level);
      startGame();
    }, 1000);
  }
}

function startGame() {
  userInput = [];
  var x = Math.floor(Math.random() * 4);
  $("h1").text("Level " + level);
  display(x);
  simon.push(x);

  console.log(simon);
}

function gameOver() {
  playing = false;
  userInput = [];
  simon = [];
  level = 1;

  $("body").addClass("game-over");
  var sound = new Audio("./sounds/wrong.mp3");
  sound.play();
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 500);

  $("h1").html("Game Over,<br>Score: "+level+" <br>Press A to Restart");
}
