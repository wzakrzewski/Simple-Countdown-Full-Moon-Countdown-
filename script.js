const nextFullMoon = '13 July 2022 06:15:00';

const daysOutput = document.getElementById('days-output');
const hoursOutput = document.getElementById('hours-output');
const minutesOutput = document.getElementById('minutes-output');
const secondsOutput = document.getElementById('seconds-output');

function countdown() {
    const nextFullMoonDate = new Date(nextFullMoon);
    const todayDate = new Date();
    const timeLeft = nextFullMoonDate - todayDate;
    
    const msToSec = timeLeft / 1000;
    
    const days = Math.floor(msToSec / 24 / 3600);
    const hours = Math.floor(msToSec / 3600 % 24);
    const minutes = Math.floor(msToSec / 60 % 60);
    const seconds = Math.floor(msToSec % 60);

    daysOutput.innerHTML = days;
    hoursOutput.innerHTML = hours;
    minutesOutput.innerHTML = doubleZeros(minutes);
    secondsOutput.innerHTML = doubleZeros(seconds);
}

function doubleZeros(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);


