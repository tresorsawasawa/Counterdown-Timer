const countDownDate = new Date("Oct 26, 2021 12:10:10"),
    daysEl = document.getElementById("days"),
    minutesEl = document.getElementById("minutes"),
    hoursEl = document.getElementById("hours"),
    secondsEl = document.getElementById("seconds");

let interval = setInterval(setCountDown, 1000);

function setCountDown() {
    let now = new Date().getTime(),
        distance = countDownDate - now,
        milli = 1000;
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (milli * 3600 * 24)),
        hours = Math.floor((distance % (milli * 3600 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((distance % (milli * 3600)) / (1000 * 60)),
        seconds = Math.floor((distance % (milli * 60)) / 1000);

    daysEl.innerHTML = days;
    minutesEl.innerHTML = formatTime(hours);
    hoursEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    if (distance < 0) {
        clearInterval(interval);

        // Delete span elements
        document.querySelector("#hide").style.display = "none";
        document.querySelector("#hide1").style.display = "none";
        document.querySelector("#hide2").style.display = "none";
        document.querySelector("#hide3").style.display = "none";
        document.querySelector("#hide4").style.display = "none";

        document.getElementById("days").innerHTML = "E";
        document.getElementById("hours").innerHTML = "N";
        document.getElementById("minutes").innerHTML = "D";
        document.getElementById("seconds").innerHTML = "E";
        document.getElementById("end").innerHTML = "D";
    }
}
setCountDown();

function formatTime(time) {
    return time < 10 ? '0${time}' : time
}