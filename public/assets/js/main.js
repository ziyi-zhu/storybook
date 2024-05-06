function getTimePassed(datePast) {
  let dateNow = new Date();

  let seconds = Math.floor((dateNow - datePast) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function displayTime() {
  //20. June 2023
  let time = getTimePassed(new Date(2023, 6 - 1, 20, 22, 0, 0, 0));
  let message =
    "In love <strong>" +
    time.days +
    "</strong> days, <strong>" +
    time.hours +
    "</strong> hours, <strong>" +
    time.minutes +
    "</strong> minutes, <strong>" +
    time.seconds +
    "</strong> seconds";

  $("#heading").html(message);
}

function initialize() {
  displayTime();
}

initialize();

setInterval(displayTime, 1000);
