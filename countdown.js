const countdown = document.querySelector('.countdown-timer');

var countDownDate = new Date("January 1, 2024 12:00:00").getTime();

const x = setInterval( () => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.querySelector('.countdown-days').innerHTML = days;
  countdown.querySelector('.countdown-hours').innerHTML = hours;
  countdown.querySelector('.countdown-minutes').innerHTML = minutes;
  countdown.querySelector('.countdown-seconds').innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    countdown.innerHTML = "TIME UP";
  }
}, 1000);
