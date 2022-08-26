const scoreForP1 = document.querySelector("#score1");
const scoreForP2 = document.querySelector("#score2");

let startScore1 = 0;
let startScore2 = 0;

scoreForP1.innerHTML = startScore1;
scoreForP2.innerHTML = startScore2;

const B1 = document
  .querySelector("#butPl1")
  .addEventListener("click", addScore1);

function addScore1() {
  scoreForP1.innerHTML = startScore1 + 1;
  startScore1 = parseInt(scoreForP1.innerHTML);
}

const B2 = document
  .querySelector("#butPl2")
  .addEventListener("click", addScore2);

function addScore2() {
  scoreForP2.innerHTML = startScore2 + 1;
  startScore2 = parseInt(scoreForP2.innerHTML);
}
