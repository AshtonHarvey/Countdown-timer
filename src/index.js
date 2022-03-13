const counterDays = document.getElementById("days");
const counterHours = document.getElementById("hours");
const counterMinutes = document.getElementById("minutes");
const counterSeconds = document.getElementById("seconds");
const timerDirection = document.getElementById("timer-direction");
const inputDate = document.getElementById("input-date");
const inputTime = document.getElementById("input-time");

let countDownDate = new Date("march 9, 2022 19:00:00").getTime();

inputDate.addEventListener("change", () => {
  updateTimeDate();
});
inputTime.addEventListener("change", () => {
  updateTimeDate();
});

function updateTimeDate() {
  //take in date and time inpout and create/ update the date use for count down
  //console.log("change date is working");
  if (inputDate == null || inputTime == null) {
    console.log("missing date or time");
  } else {
    countDownDate = new Date(`${inputDate.value} ${inputTime.value}`);
  }
}

//store time till date as milliseconds

let t = setInterval(() => {
  //store current date and time
  let now = new Date().getTime();

  // get the distance between the two dates
  let distance = countDownDate - now;

  //calculate days, hours, minutes, seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //check if count down is finished
  //use < for extra second to see clock at all 0. otherwise use <=
  if (distance < 0) {
    //use to stop the count.
    //clearinterval(t);
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  //Display results in place holder element
  counterDays.innerHTML = `${days}`;
  counterHours.innerHTML = `${hours}`;
  counterMinutes.innerHTML = `${minutes}`;
  counterSeconds.innerHTML = `${seconds}`;
}, 1000);
