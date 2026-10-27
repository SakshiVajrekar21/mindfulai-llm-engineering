const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const timerDisplay = document.getElementById("timerDisplay");
const timerMessage = document.getElementById("timerMessage");
const timerProgress = document.getElementById("timerProgress");
const startButton = document.getElementById("startTimer");
const resetButton = document.getElementById("resetTimer");
const totalSeconds = 60;
let remaining = totalSeconds;
let intervalId = null;

function renderTimer() {
  const minutes = Math.floor(remaining / 60).toString().padStart(2, "0");
  const seconds = (remaining % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
  timerProgress.style.width = `${((totalSeconds - remaining) / totalSeconds) * 100}%`;
}

function stopTimer() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

startButton.addEventListener("click", () => {
  if (intervalId !== null) {
    stopTimer();
    startButton.textContent = "Resume pause";
    timerMessage.textContent = "Paused. Resume whenever you like.";
    return;
  }
  if (remaining === 0) remaining = totalSeconds;
  startButton.textContent = "Pause";
  timerMessage.textContent = "Notice your breathing. Let thoughts come and go.";
  intervalId = setInterval(() => {
    remaining -= 1;
    renderTimer();
    if (remaining <= 0) {
      stopTimer();
      remaining = 0;
      startButton.textContent = "Start again";
      timerMessage.textContent = "One minute complete. Take your time before continuing.";
      renderTimer();
    }
  }, 1000);
});

resetButton.addEventListener("click", () => {
  stopTimer();
  remaining = totalSeconds;
  renderTimer();
  startButton.textContent = "Start pause";
  timerMessage.textContent = "Ready when you are.";
});

renderTimer();
