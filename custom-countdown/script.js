const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');
const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set minimum date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Populate countdown
function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownValue - now;
        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / second);
        // Populate countdown
        countdownElTitle.textContent = `${countdownTitle}`;
        timeElements[0].textContent = `${days}`;
        timeElements[1].textContent = `${hours}`;
        timeElements[2].textContent = `${minutes}`;
        timeElements[3].textContent = `${seconds}`;
        // Hide input, show countdown
        inputContainer.hidden = true;
        countdownEl.hidden = false;
    }, second);
}

function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    // Check for valid date
    if(countdownDate === '') {
        alert('Please select a date')
    } else {
        // Get number version of current date, update DOM
        countdownValue = new Date(countdownDate).getTime();
        updateDOM();
    }
}

// Reset all values
function reset() {
    // Hide countdowns and show input
    countdownEl.hidden = true;
    inputContainer.hidden = false;
    clearInterval(countdownActive);
    // Reset values
    countdownTitle = '';
    countdownDate = '';
}

// Event listener
countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);