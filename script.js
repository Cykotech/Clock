const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function displayTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourValue = hours > 12 ? hours - 12 : hours;

  secondHand.style.transform = `rotate(${(seconds / 60) * 360 + 270}deg)`;
  minuteHand.style.transform = `rotate(${(minutes / 60) * 360 + 270}deg)`;
  hourHand.style.transform = `rotate(${(hourValue / 12) * 360 + 270}deg)`;

  if (seconds === 0) {
    secondHand.style.transition = "none";
  }

  if (seconds === 1) {
    secondHand.style.transition = "all 0.5s";
  }

  if (minutes === 0) {
    minuteHand.style.transition = "none";
  }

  if (minutes === 1) {
    minuteHand.style.transition = "all 0.5s";
  }

  if (hours === 0) {
    hourHand.style.transition = "none";
  }

  if (hours === 1) {
    hourHand.style.transition = "all 0.5s";
  }
}
setInterval(displayTime, 1000);
