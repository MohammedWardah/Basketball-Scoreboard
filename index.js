const t1ScoreEl = document.getElementById("t1Score");
const t2ScoreEl = document.getElementById("t2Score");

let t1Score = 0;
let t2Score = 0;
t1ScoreEl.textContent = t1Score;
t2ScoreEl.textContent = t2Score;

function t1p1() {
  t1Score += 1;
  t1ScoreEl.textContent = t1Score;
}

function t1p2() {
  t1Score += 2;
  t1ScoreEl.textContent = t1Score;
}

function t1p3() {
  t1Score += 3;
  t1ScoreEl.textContent = t1Score;
}

function t2p1() {
  t2Score += 1;
  t2ScoreEl.textContent = t2Score;
}

function t2p2() {
  t2Score += 2;
  t2ScoreEl.textContent = t2Score;
}

function t2p3() {
  t2Score += 3;
  t2ScoreEl.textContent = t2Score;
}

function reset() {
  t1Score = 0;
  t2Score = 0;
  t1ScoreEl.textContent = t1Score;
  t2ScoreEl.textContent = t2Score;
}
