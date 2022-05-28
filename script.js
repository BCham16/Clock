
// Variable definitions of HTML Elments
const date = document.getElementById('date')
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

//Arrays for displaying proper Day & Month text
const weekDay = new Array(
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  );
const month = new Array(
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'
  );


function showTime(){
//Get Current Date
let today = new Date();

//Numeric value of .getDay() as an index of the weekDay array
let dayToPrint = weekDay[today.getDay()];

//Numeric value of .getMonth() as an index of month array
let monthToPrint = month[today.getMonth()];

//set descriptor after numeric date value
let descriptor = new String;
let temp = today.getDate();
if (temp == 1){descriptor = 'st'}
else if (temp == 2){descriptor = 'nd'}
else if (temp == 3){descriptor = 'rd'}
else if (temp > 20 && temp % 10 == 1){descriptor = 'st'}
else if (temp > 20 && temp % 10 == 2){descriptor = 'nd'}
else if (temp > 20 && temp % 10 == 3){descriptor = 'rd'}
else {descriptor = 'th'}
let dayOfMonth = String(temp) + String(descriptor);

//Assigning a variable to year for consistency
let yearToPrint = today.getFullYear();

let dateToPrint = dayToPrint + ', ' + monthToPrint + ' ' + dayOfMonth + ' ' + yearToPrint;
date.textContent = dateToPrint; 

//Set Time Info
let hh = today.getHours();
// Code to covert to 12h format (not including AM/PM signifier)
/*
if (hh > 12){hh -= 12}
else if (hh == 0){hh = 12}
*/
if (hh < 10){hh = '0' + hh};

let mm = today.getMinutes();
if (mm < 10){mm = '0' + mm};

let ss = today.getSeconds();
if (ss < 10){ss = '0' + ss};

//update textContent with time information
hours.textContent = hh;
minutes.textContent = mm;
seconds.textContent = ss;

setTimeout(showTime, 1000);
}

showTime();