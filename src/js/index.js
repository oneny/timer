const $hour = document.querySelector(".inp-hour");
const $min = document.querySelector(".inp-min");
const $sec = document.querySelector(".inp-sec");
const $btnStart = document.querySelector(".btn-start");
const $btnReset = document.querySelector(".btn-reset");

let time = 0;
let id;


// 타이머 입력 이벤트
$hour.addEventListener("keyup", () => {
  time = parseInt($hour.value) * 60 * 60 + parseInt($min.value) * 60 + parseInt($sec.value);
  console.log(time);
});
$min.addEventListener("keyup", () => {
  time = parseInt($hour.value) * 60 * 60 + parseInt($min.value) * 60 + parseInt($sec.value);
  console.log(time);
});
$sec.addEventListener("keyup", () => {
  time = parseInt($hour.value) * 60 * 60 + parseInt($min.value) * 60 + parseInt($sec.value);
  console.log(time);
});

// START 및 PAUSE 이벤트
$btnStart.addEventListener("click", () => {
  if(!time) return alert("시간을 입력하세요");

  if (id) {
    clearInterval(id)
    id = null;
    return $btnStart.textContent = "START";
  };
  id = setInterval(updateCountdown, 1000);

  $btnStart.textContent = "PAUSE";
});

// RESET 이벤트
$btnReset.addEventListener("click", () => {
  $hour.value = doubleDigits(0);
  $min.value = doubleDigits(0);
  $sec.value = doubleDigits(0);

  setInterval(id);
  time = 0;
});

// 타이머
function updateCountdown() {
  time--;
  
  const hours = Math.floor(time / 60 / 60 % 60);
  const minutes = Math.floor(time / 60 % 60);
  let seconds = time % 60;

  $hour.value = doubleDigits(hours);
  $min.value = doubleDigits(minutes);
  $sec.value = doubleDigits(seconds);
  if (time === 0) alertFinish();
}

const alertFinish = () => {
  clearInterval(id);
  $btnStart.textContent = "START";
  return alert("Finish!");
}

const doubleDigits = (num) => num.toString().padStart(2, "0");