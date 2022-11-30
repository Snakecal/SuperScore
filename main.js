// Stores score for both teams and the current game time, in seconds.
class Model {
    constructor(score1, score2, time) {
        this.score1 = score1;
        this.score2 = score2;
        this.time = time;
    }

    increaseScore1() {
        this.score1 = this.score1 + 1;
    }

    increaseScore2() {
        this.score2 = this.score2 + 1;
    }

    resetScore() {
        this.score1 = 0;
        this.score2 = 0;
    }

    formattedTime() {
        let minutes = Math.floor(this.time / 60);
        let remaining_secs = this.time % 60;
        return String(minutes).padStart(2, '0') + ' : ' + String(remaining_secs).padStart(2, '0');
    }
}

var my_model = new Model(0, 0, 0);

// Controller
function handleScore1Click() {
    my_model.increaseScore1();
    document.getElementById("team1").innerHTML = my_model.score1;
}
document.getElementById("score-team1").addEventListener("click", handleScore1Click);

function handleScore2Click() {
    my_model.increaseScore2();
    document.getElementById("team2").innerHTML = my_model.score2;
}
document.getElementById("score-team2").addEventListener("click", handleScore2Click);

function handleScoreReset() {
    my_model.score1 = 0;
    my_model.score2 = 0;
    document.getElementById("team1").innerHTML = my_model.score1;
    document.getElementById("team2").innerHTML = my_model.score2;
}
document.getElementById("reset-score").addEventListener("click", handleScoreReset);

document.getElementById("clock").innerHTML = my_model.formattedTime();
var clock = 0;
var clockIsRunning = false;
function incrementTime() {
    my_model.time = my_model.time + 1;
    document.getElementById("clock").innerHTML = my_model.formattedTime();
}
function startClock() {
    if (!clockIsRunning) {
        clockIsRunning = true;
        clock = window.setInterval(incrementTime, 1000);
    }
}
document.getElementById("start").addEventListener("click", startClock);

function stopClock() {
    if (clockIsRunning) {
        clockIsRunning = false;
        window.clearInterval(clock);
    }
}
document.getElementById("stop").addEventListener("click", stopClock);

function resetClock() {
    stopClock();
    my_model.time = 0;
    document.getElementById("clock").innerHTML = my_model.formattedTime();
}
document.getElementById("reset-clock").addEventListener("click", resetClock);
