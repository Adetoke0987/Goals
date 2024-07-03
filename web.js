function updateCurrentTime() {
    const currentTimeElement = document.getElementById('currentTimeUTC');
    const now = new Date();
    const utcString = now.getUTCHours().toString().padStart(2, '0') + ':' +
                      now.getUTCMinutes().toString().padStart(2, '0') + ':' +
                      now.getUTCSeconds().toString().padStart(2, '0');
    currentTimeElement.textContent = utcString;
}

function updateCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayElement = document.getElementById('currentDay');
    const now = new Date();
    const currentDayIndex = now.getUTCDay(); 
    const currentDay = daysOfWeek[currentDayIndex];
    currentDayElement.textContent = currentDay;
}

document.addEventListener('DOMContentLoaded', function() {
    updateCurrentTime();
    updateCurrentDay();

    setInterval(function() {
        updateCurrentTime();
        updateCurrentDay();
    }, 1000); 
});
