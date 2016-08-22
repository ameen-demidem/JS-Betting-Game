var bankroll = 100;
var newGame = false;

function evaluate(r, guess, bet) {
  if (r === guess)
    return bet;
  else if (Math.abs(r - guess) === 1)
    return 0;
  else 
    return -bet;
}

//var play = function () {
function play() {
  if (newGame) {
    bankroll = 100;
    newGame = false;
    $("#bankroll").text(bankroll);
    $("#status").removeClass("red").addClass("green");
    $("#status").text("Ready!");
    $("#bet").val("");
    $("#guess").val("");
    $("#button").text("Go!");
    return;
  }

  var r = Math.floor((Math.random() * 10) + 1);
  var bet = Number($("#bet").val());
  var guess = Number($("#guess").val());

  var outcome = evaluate(r, guess, bet);
  if (outcome <= 0) {
    // Set status to Wrong guess with red color
    $("#status").removeClass("green").addClass("red");
    $("#status").text("Wrong guess! The answer was: " + r);
  } else {
    $("#status").removeClass("red").addClass("green");
    $("#status").text("Wrong guess! The answer was: " + r);
  } 

  bankroll += outcome; 
  $("#bankroll").text(bankroll);
  if (bankroll <= 0) {
    $("#status").toggleClass("green", false);
    $("#status").toggleClass("red", true);
    $("#status").text("You loose!");
    $("#button").text("Restart!");
    newGame = true;
  }
}
