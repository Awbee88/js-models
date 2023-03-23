// Timer

function timer(id, deadline) {

    // const deadline = "2023-03-20";

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const dif = Date.parse(endtime) - Date.parse(new Date());

        if (dif <= 0) {
            days = hours = minutes = seconds = 0;
        } else {
            days = Math.floor(dif / (1000 * 60 * 60 * 24)),
                hours = Math.floor((dif / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((dif / 1000 / 60) % 60),
                seconds = Math.floor((dif / 1000) % 60);
        }
        return {
            total: dif,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const dif = getTimeRemaining(endtime);

            days.innerHTML = getZero(dif.days);
            hours.innerHTML = getZero(dif.hours);
            minutes.innerHTML = getZero(dif.minutes);
            seconds.innerHTML = getZero(dif.seconds);

            if (dif.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock(".timer", deadline);
}

export default timer;