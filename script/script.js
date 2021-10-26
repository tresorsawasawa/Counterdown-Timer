const countDownDate = new Date("Oct 26, 2021 12:10:10");

let interval = setInterval(setCountDown, 1000),
    deadline = "EXPIRED";

function setCountDown() {
    let now = new Date().getTime(),
        distance = countDownDate - now,
        milli = 1000;
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (milli * 3600 * 24)),
        hours = Math.floor((distance % (milli * 3600 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((distance % (milli * 3600)) / (1000 * 60)),
        seconds = Math.floor((distance % (milli * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(interval);
        // deadline = document.getElementById("days").innerHTML = document.getElementById("hours").innerHTML = document.getElementById("minutes").innerHTML = document.getElementById("seconds").innerHTML = "EXPIRED"
        document.getElementById("days").innerHTML = "E";
        document.getElementById("hours").innerHTML = "N";
        document.getElementById("minutes").innerHTML = "D";
        document.getElementById("seconds").innerHTML = "E";
        document.getElementById("end").innerHTML = "D";
    }
}

setCountDown();