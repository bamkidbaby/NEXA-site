const countdown = {
  days: 600,
  hours: 0,
  minutes: 0,
  seconds: 0
};

function updateCountdown() {
  const d = document.getElementById("days");
  const h = document.getElementById("hours");
  const m = document.getElementById("minutes");
  const s = document.getElementById("seconds");

  s.textContent = countdown.seconds.toString().padStart(2, '0');
  m.textContent = countdown.minutes.toString().padStart(2, '0');
  h.textContent = countdown.hours.toString().padStart(2, '0');
  d.textContent = countdown.days;

  countdown.seconds--;
  if (countdown.seconds < 0) {
    countdown.seconds = 59;
    countdown.minutes--;
    if (countdown.minutes < 0) {
      countdown.minutes = 59;
      countdown.hours--;
      if (countdown.hours < 0) {
        countdown.hours = 23;
        countdown.days--;
        if (countdown.days < 0) {
          countdown.days = 0;
          countdown.hours = 0;
          countdown.minutes = 0;
          countdown.seconds = 0;
          clearInterval(timer);
        }
      }
    }
  }
}

// Update every second
const timer = setInterval(updateCountdown, 1000);
updateCountdown();
