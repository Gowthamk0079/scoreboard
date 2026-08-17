let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let score1 = 0;
let score2 = 0;
homeScore.innerText = score1;
guestScore.innerText = score2;

console.log(homeScore);

function add1ForHome() {
  score1 += 1;
  homeScore.innerText = score1;
}

function add2ForHome() {
  score1 += 2;
  homeScore.innerText = score1;
}

function add3ForHome() {
  score1 += 3;
  homeScore.innerText = score1;
}

function add1ForGuest() {
  score2 += 1;
  guestScore.innerText = score2;
}

function add2ForGuest() {
  score2 += 2;
  guestScore.innerText = score2;
}

function add3ForGuest() {
  score2 += 3;
  guestScore.innerText = score2;
}

function resetScore() {
  score1 = 0;
  score2 = 0;
  homeScore.innerText = score1;
  guestScore.innerText = score2;
}
