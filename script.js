window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let addMins = document.querySelector('#minutes');
    let addTens = document.querySelector('#tens');
    let addSecs = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let lapBtn = document.querySelector('#lap');
    let lapsDiv = document.querySelector('#laps');
    let Interval;

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            addTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
            addTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            addSecs.innerHTML = '0' + seconds;
            tens = 0;
            addTens.innerHTML = '0' + 0;
        }

        if (seconds > 9) {
            addSecs.innerHTML = seconds;
        }

        if (seconds > 59) {
            minutes++;
            addMins.innerHTML = '0' + minutes;
            seconds = 0;
            addSecs.innerHTML = '0' + 0;
        }
    };

    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        lapBtn.disabled = false;
    };

    stopBtn.onclick = () => {
        clearInterval(Interval);
    };

    resetBtn.onclick = () => {
        clearInterval(Interval);
        tens = '00';
        seconds = '00';
        minutes = '00';
        addTens.innerHTML = tens;
        addSecs.innerHTML = seconds;
        addMins.innerHTML = minutes;
        lapsDiv.innerHTML = '';
        lapBtn.disabled = true;
    };

    let count=0;
    lapBtn.onclick = () => {
        count++;
        let lapTime = count + ". " + addMins.innerHTML + ':' + addSecs.innerHTML + ':' + addTens.innerHTML;
        let lapItem = document.createElement('p');
        lapItem.innerHTML = lapTime;
        lapsDiv.appendChild(lapItem);
    };
};


