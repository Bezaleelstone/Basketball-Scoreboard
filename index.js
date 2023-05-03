let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")

let homeScore = 0
let awayScore = 0

function homeOnePoint() {
    homeScore = homeScore + 1
    homeEl.textContent = homeScore
}

function homeTwoPoint() {
    homeScore = homeScore + 2
    homeEl.textContent = homeScore
}

function homeThreePoint() {
    homeScore = homeScore + 3
    homeEl.textContent = homeScore
}

function homeResetPoint() {
    homeScore = 0
    homeEl.textContent = homeScore
}

function awayOnePoint() {
    awayScore = awayScore + 1
    awayEl.textContent = awayScore
}

function awayTwoPoint() {
    awayScore = awayScore + 2
    awayEl.textContent = awayScore
}

function awayThreePoint() {
    awayScore = awayScore + 3
    awayEl.textContent = awayScore
}

function awayResetPoint() {
    awayEl.textContent = 0
}