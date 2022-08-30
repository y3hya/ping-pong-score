const scoreForP1 = document.querySelector("#score1");
const scoreForP2 = document.querySelector("#score2");
const result = document.querySelector("#result");
const fL = document.querySelector("#finishLine");

// ----------------------------------------------------------------
for (let i = 0; i <= 15; i++) {
  let opt = document.createElement("option");
  opt.innerHTML = [i];
  fL.appendChild(opt);
}
let topLine = 0;
fL.addEventListener("change", x);
function x() {
  topLine = fL.value;
  resetButton();
}
// ----------------------------------------------------------------
let startScore1 = 0;
let startScore2 = 0;

scoreForP1.innerHTML = startScore1;
scoreForP2.innerHTML = startScore2;

const B1 = document
  .querySelector("#butPl1")
  .addEventListener("click", addScore1);

const B2 = document
  .querySelector("#butPl2")
  .addEventListener("click", addScore2);

const BReset = document
  .querySelector("#butReset")
  .addEventListener("click", resetButton);

function addScore1() {
  if (startScore1 < topLine && startScore2 < topLine) {
    startScore1++;
    scoreForP1.innerHTML = startScore1;
  }
  if (startScore1 == topLine) {
    result.innerHTML = "Player 1 Won!";
  }
}
function addScore2() {
  if (startScore2 < topLine) {
    startScore2++;
    scoreForP2.innerHTML = startScore2;
  }
  if (startScore2 == topLine && startScore1 < topLine) {
    result.innerHTML = "Player 2 Won!";
  }
}

function resetButton() {
  startScore1 = 0;
  startScore2 = 0;
  scoreForP1.innerHTML = 0;
  scoreForP2.innerHTML = 0;
  result.innerHTML = "";
}

// ----------------------------------------------------------------

scoreForP1.innerHTML = 0;
scoreForP2.innerHTML = 0;
