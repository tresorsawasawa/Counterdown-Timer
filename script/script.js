const countDownDate = new Date("Nov 22, 2021 9:55:59");

setInterval(setCountDown, 1000);

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
}
setCountDown();