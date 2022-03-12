const counterDays = document.getElementById("days");
const counterHours = document.getElementById("hours");
const counterMinutes = document.getElementById("minutes");
const counterSeconds = document.getElementById("seconds");
const timerDirection = document.getElementById("timer-direction");

//store time till date as milliseconds
let countDownDate = new Date("march 9, 2022 19:00:00").getTime();

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
    //use clearinterval(t) to stop the count.
    //to not stop dont clear and * by -1 to keep time past point
    days *= -1;
    hours *= -1;
    minutes *= -1;
    seconds *= -1;
  }

  //Display results in place holder element
  counterDays.innerHTML = `${days}`;
  counterHours.innerHTML = `${hours}`;
  counterMinutes.innerHTML = `${minutes}`;
  counterSeconds.innerHTML = `${seconds}`;
  console.log(`${days}`);
}, 1000);
