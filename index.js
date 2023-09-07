
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

/* To Display Current UTC Time */
//create a new Date object
const currentUTCDate = new Date();

//get the current time from the date object
const currentUTCHours = currentUTCDate.getUTCHours();
const currentUTCMinutes = currentUTCDate.getUTCMinutes();
const currentUTCSeconds = currentUTCDate.getUTCSeconds();

//get the current time in the format HH:MM:SS
const currentUTCTime = `${currentUTCHours}:${currentUTCMinutes}:${currentUTCSeconds} UTC`;

//display on the page
const currentUTCTimeElement = document.getElementById("currentUTCTime");
currentUTCTimeElement.innerHTML = currentUTCTime;

