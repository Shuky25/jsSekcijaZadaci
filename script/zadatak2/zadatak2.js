let btnStart = document.querySelector('#startBtn');
let btnStop = document.querySelector('#stopBtn');
let btnReset = document.querySelector('#resetBtn');
let btnChip = document.querySelector('#chipBtn');
let timeChip = document.querySelector('#chipTime');

let min = 00;
let sec = 00;
let appMin = document.querySelector('#minut');
let appSec = document.querySelector('#sekund');
let Interval;

btnStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
});

btnStop.addEventListener('click', () => {
    clearInterval(Interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(Interval);
    sec = "00";
    min = "00";
    appSec.innerHTML = sec;
    appMin.innerHTML = min;
    timeChip.innerHTML = "";
});

btnChip.addEventListener('click', () => {
    timeChip.innerHTML = min + ":" + sec;
});

function startTimer() {
    sec++;

    if (sec <= 9) {
        appSec.innerHTML = "0" + sec;
    }

    if (sec > 9) {
        appSec.innerHTML = sec;

    }

    if (sec > 59) {
        // console.log("min");
        min++;
        appMin.innerHTML = "0" + min;
        sec = 0;
        appSec.innerHTML = "0" + 0;
    }

    if (min > 9) {
        appMin.innerHTML = min;
    }

}
