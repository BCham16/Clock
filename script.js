
// Variable definitions of HTML Elments using GETELEMENTBYID
date = document.getElementById('date')
hours = document.getElementById('hours');
minutes = document.getElementById('minutes');
seconds = document.getElementById('seconds');

//Arrays for displaying proper text
weekDay = new Array(
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  );
month = new Array(
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'
  );


function showTime(){
//Get Current Date
today = new Date();

//Numeric value of .getDay() as an index of the weekDay array
dayToPrint = weekDay[today.getDay()];

//Numeric value of .getMonth() as an index of month array
monthToPrint = month[today.getMonth()];

//set descriptor after numeric date value
descriptor = new String;
temp = today.getDate();
if (temp == 1){descriptor = 'st'}
else if (temp == 2){descriptor = 'nd'}
else if (temp == 3){descriptor = 'rd'}
else if (temp > 20 && temp % 10 == 1){descriptor = 'st'}
else if (temp > 20 && temp % 10 == 2){descriptor = 'nd'}
else if (temp > 20 && temp % 10 == 3){descriptor = 'rd'}
else {descriptor = 'th'}
dayOfMonth = String(temp) + String(descriptor);
console.log(dayOfMonth)

//Assigning a variable to year for consistency
yearToPrint = today.getFullYear();

dateToPrint = dayToPrint + ', ' + monthToPrint + ' ' + dayOfMonth + ' ' + yearToPrint;
date.textContent = dateToPrint; 

//Set Time Info
hh = today.getHours();

// Code to covert to 12h format
/*
if (hh > 12){hh -= 12}
else if (hh == 0){hh = 12}
*/

if (hh < 10){hh = '0' + hh};
mm = today.getMinutes();
if (mm < 10){mm = '0' + mm};
ss = today.getSeconds();
if (ss < 10){ss = '0' + ss};

//update textContent with time information
hours.textContent = hh;
minutes.textContent = mm;
seconds.textContent = ss;

setTimeout(showTime, 1000);
}

showTime();