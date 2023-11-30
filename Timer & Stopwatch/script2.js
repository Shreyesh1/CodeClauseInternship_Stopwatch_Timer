let stopwatch;
let hours = 0;
let minutes = 0;
let seconds = 0;
let display = document.getElementById('display');

function startStopwatch() {
  stopwatch = setInterval(updateStopwatch, 1000);
}

function pauseStopwatch() {
  clearInterval(stopwatch);
}

function resetStopwatch() {
  clearInterval(stopwatch);
  hours = 0;
  minutes = 0;
  seconds = 0;
  display.textContent = '00:00:00';
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }

  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  display.textContent = h + ':' + m + ':' + s;
}
