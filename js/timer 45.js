let circleTimer = document.querySelector(".circle-timer");
let progressValue = document.querySelector(".progress-value");

let progressStartValue = 0;
let progressEndValue = 45;
let animationDuration = 45 * 60 * 1000; // 25 minutes in milliseconds
let animationStartTime = Date.now();
let speed = 1000;

function updateProgress() {
    let currentTime = Date.now();
    let elapsedTime = currentTime - animationStartTime;
    let progressPercentage = (elapsedTime / animationDuration) * 100;
    let progressDeg = (progressPercentage / 100) * 360;

    circleTimer.style.background = `conic-gradient(#1A2458 ${progressDeg}deg, #fff ${progressDeg}deg)`;

    let remainingTime = Math.max(0, Math.ceil((animationDuration - elapsedTime) / 1000));
    let remainingMinutes = Math.floor(remainingTime / 60); // Convert remaining time to minutes
    progressValue.textContent = remainingMinutes;

    if (elapsedTime >= animationDuration) {
        clearInterval(progress);
        progressValue.textContent = 0; // Reset timer to 0 when finished
    }
}

let progress = setInterval(updateProgress, speed);
updateProgress(); // Run updateProgress immediately to avoid initial delay

document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "Be yourself; everyone else is already taken. - Oscar Wilde",
        "You only live once, but if you do it right, once is enough. - Mae West",
        "Be the change that you wish to see in the world. - Mahatma Gandhi",
        // Add more quotes as needed
    ];

    const quoteElement = document.getElementById('quote');
    const randomQuoteText = document.getElementById('random-quote-text');

    // Function to get a random quote
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function updateQuoteWithFadeIn() {
        quoteElement.classList.remove('fade-in');
        // Delay the update to let the fade-out effect complete
        setTimeout(() => {
            randomQuoteText.textContent = getRandomQuote();
            quoteElement.classList.add('fade-in');
        }, 500); // Half a second (0.5s) delay before updating with fade-in
    }

    // Display a random quote when the page loads
    randomQuoteText.textContent = getRandomQuote();

    // Update the quote every 10 seconds
    setInterval(updateQuoteWithFadeIn, 10000); // 10 seconds in milliseconds
});