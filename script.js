let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minsEl = document.getElementById("mins");
let secondsEl = document.getElementById("seconds");

const christmas = "25 Dec 2022"

function countdown(){
    const chritmasDate = new Date(christmas);
    const currentDate = new Date();

    const totalSeconds = (chritmasDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 60 / 60 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) %60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);
