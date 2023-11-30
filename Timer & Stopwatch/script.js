let customTimer;
let customHours = 0;
let customMinutes = 0;
let customSeconds = 0;
let display = document.getElementById('display');

function startCustomTimer() {
  let hoursInput = parseInt(document.getElementById('hours').value) || 0;
  let minutesInput = parseInt(document.getElementById('minutes').value) || 0;
  let secondsInput = parseInt(document.getElementById('seconds').value) || 0;

  customHours = hoursInput;
  customMinutes = minutesInput;
  customSeconds = secondsInput;

  if (customHours > 0 || customMinutes > 0 || customSeconds > 0) {
    customTimer = setInterval(updateCustomTimer, 1000);
  } else {
    alert('Please enter a valid time.');
  }
}

function pauseCustomTimer() {
  clearInterval(customTimer);
}

function resetCustomTimer() {
  clearInterval(customTimer);
  customHours = 0;
  customMinutes = 0;
  customSeconds = 0;
  display.textContent = '00:00:00';
}

function updateCustomTimer() {
  if (customSeconds === 0) {
    if (customMinutes === 0) {
      if (customHours === 0) {
        clearInterval(customTimer);
        alert('Timer Complete!');
        return;
      }
      customHours--;
      customMinutes = 59;
    } else {
      customMinutes--;
    }
    customSeconds = 59;
  } else {
    customSeconds--;
  }

  let h = customHours < 10 ? '0' + customHours : customHours;
  let m = customMinutes < 10 ? '0' + customMinutes : customMinutes;
  let s = customSeconds < 10 ? '0' + customSeconds : customSeconds;

  display.textContent = h + ':' + m + ':' + s;
}
