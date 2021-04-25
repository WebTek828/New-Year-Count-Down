const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const content = [days, hours, minutes, seconds];

function makeRightLength(num) {
  let numStr = num.toString();
  numStr = numStr.padStart(2, 0);
  return numStr;
}

function countDown() {
  const newYear = new Date(2022, 0).getTime();
  const now = new Date().getTime();
  const timeLeft = newYear - now;

  const sec = 1000;
  const minute = sec * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));

  const d = Math.floor(timeLeft / day);
  const h = Math.floor((timeLeft % day) / hour);
  const m = Math.floor((timeLeft % hour) / minute);
  const s = Math.floor((timeLeft % minute) / sec);
  const outPut = [d, h, m, s];

  outPut.forEach((outPut, i) => {
    const result = makeRightLength(outPut);
    content[i].textContent = result;
  });
}

countDown();
setInterval(countDown, 1000);
