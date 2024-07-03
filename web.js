
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('currentTimeUTC');
    const currentTimeUTC = new Date().toUTCString();
    currentTimeElement.textContent = currentTimeUTC;
}

// Function to update current day of the week
function updateCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayElement = document.getElementById('currentDay');
    const currentDayIndex = new Date().getDay();
    const currentDay = daysOfWeek[currentDayIndex];
    currentDayElement.textContent = currentDay;
}

// Event listener for DOMContentLoaded to update time and day initially
document.addEventListener('DOMContentLoaded', function() {
    updateCurrentTime();
    updateCurrentDay();

    // Update time and day every minute
    setInterval(function() {
        updateCurrentTime();
        updateCurrentDay();
    }, 60000); // 60 seconds
});
