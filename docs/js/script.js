let timeLeft = 30;
const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
  timeLeft--;
  countdownEl.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);
    countdownEl.textContent = "Time's up!";
  }
}, 1000);
