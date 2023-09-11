
/* To Display Current Day of the Week */
//create a new Date object
const currentDate = new Date();

//define an array of days
const daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//get the day of the week from the date object as a number
const dayIndex = currentDate.getDay();

//get the day of the week from the array of days using the dayIndex
const dayName = daysofWeek[dayIndex];

//display on the page
const dayofTheWeekElement = document.getElementById("currentDayOfTheWeek");

dayofTheWeekElement.innerHTML = dayName;

/* To Display Current UTC Time in Milliseconds*/

function updateUTCTime() {
  const currentUTCTime = new Date().getTime();
  document.getElementById("currentUTCTime").innerHTML = `Current UTC Time in Milliseconds: ${currentUTCTime}`
}
// Call the function initially
  updateUTCTime();

// Update the time every millisecond
  setInterval(updateUTCTime, 1);

