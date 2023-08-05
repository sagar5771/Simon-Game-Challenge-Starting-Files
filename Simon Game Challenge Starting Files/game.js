var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0 ;

var keyPress = false;
$(document).keypress(function(){
    if(!keyPress){
        nextSequence();
        keyPress = true;
    }
})
function nextSequence(){
    userClickedPattern = [];

    $("#level-title").text("Level " + level);
    level += 1;
    var randNum = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randNum];
     gamePattern.push(randomChosenColour);
     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
     playSound(randomChosenColour);
    }

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    check(userClickedPattern.length-1);
    //console.log(userClickedPattern);
})
function check(n){
        if(gamePattern[n] === userClickedPattern[n]){
        //    console.log(gamePattern[n]);
         //   console.log(userClickedPattern[n]);
            console.log("success");
            if (userClickedPattern.length === gamePattern.length){

                //5. Call nextSequence() after a 1000 millisecond delay.
                setTimeout(function () {
                  nextSequence();
                }, 1000);
            }
        }
        else{
            //console.log(gamePattern[n]);
            //console.log(userClickedPattern[n]);
            playSound("wrong");
            $("body").addClass("game-over");
            console.log("wrong");
            setTimeout(function () {
                $("body").removeClass("game-over");
              }, 200);
            $("h1").text("Game Over, Press Any Key to Restart");  
            startOver();
        }
}
function startOver(){
     gamePattern = [];
 userClickedPattern = [];
 level = 0 ;

 keyPress = false;
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
}
function animatePress(currentColor){
      //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

