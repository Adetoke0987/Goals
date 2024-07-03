
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('currentTimeUTC');
    const currentTimeUTC = new Date().toUTCString();
    currentTimeElement.textContent = currentTimeUTC;
}


function updateCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayElement = document.getElementById('currentDay');
    const currentDayIndex = new Date().getDay();
    const currentDay = daysOfWeek[currentDayIndex];
    currentDayElement.textContent = currentDay;
}


document.addEventListener('DOMContentLoaded', function() {
    updateCurrentTime();
    updateCurrentDay();

   
    setInterval(function() {
        updateCurrentTime();
        updateCurrentDay();
    }, 60000); 
});
