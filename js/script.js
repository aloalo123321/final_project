const countdownDate = new Date("2024-07-06T00:00:00").getTime();

// Update the countdown every second
const countdownTimer = setInterval(function () {
  const now = new Date().getTime();
  const darchenilidro = countdownDate - now;

  const days = Math.floor(darchenilidro / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (darchenilidro % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((darchenilidro % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((darchenilidro % (1000 * 60)) / 1000);

  document.getElementById("daysNumber").innerText = days;
  document.getElementById("hoursNumber").innerText = hours;
  document.getElementById("minutesNumber").innerText = minutes;
  document.getElementById("secondsNumber").innerText = seconds;
  if (darchenilidro < 0) {
    clearInterval(countdownTimer);
    document.getElementById("daysNumber").innerText = "დაიწყო";
    document.getElementById("hoursNumber").innerText = "გაზაფხულის";
    document.getElementById("minutesNumber").innerText = "მაგარი";
    document.getElementById("secondsNumber").innerText = "აქციაა";
  }
}, 1000);
