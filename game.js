/**let buttonColours=["red","blue","green","yellow"];
let gamePattern=[];
let userClickedPattern=[];
var level=0;
var started= false;


$("body").keydown( function(){
  if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started=true;
  }

});




function nextSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  let randomNumber= (Math.floor(Math.random()*3))+1;
  let randomChosenColor= buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}


$(".btn").click(function(){
  let userChosenColor=$(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userClickedPattern);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
  var audio= new Audio("./sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);

}


function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");

  }
  if (userClickedPattern.length === gamePattern.length){
    setTimeout(function () {
          nextSequence();
        }, 1000);

  }
  else {

      console.log("wrong");

      setTimeout(function(){
        $("body").addClass("game-over");
      },200);
      $("h1").HTML("GAME OVER , Press any key to restart");

    }


}*/

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
