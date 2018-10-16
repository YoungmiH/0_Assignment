// check out http://www.w3schools.com/js/js_dates.asp
// variable for new date object

var d = new Date();

// ARRAY VARIABLE TO HOLD ALL THE DAYS OF THE WEEK

  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("today is [ " + d.getDay() + "] in the getDay array");

console.log("today is " + day[d.getDay()]);

console.log("this month is [" + d.getMonth() + "] in the array using the getMonth method");

var month = []; // modern way of writing: var month =new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


console.log("translating the getMonth result using an array: " + month[d.getMonth()]);

console.log("writing to the console the results of some methods on the Date object");
console.log("getDate: " + d.getDate());

console.log("getFullYear: " + d.getFullYear());

console.log(d.getMonth());
console.log(d.toLocaleDateString());

console.log("the hour in the 24 hr clock: " + d.getHours());

var hour = (d.getHours());

console.log(hour);
// using 24 hour result to assign am or pm to the hour
var amPm = " ";

if (hour >= 12){
  amPm = " pm";
}else {
  amPm = " am";
}
console.log(amPm);

//change default 24 hour time to 12 hour time

  if (hour === 0){
       hour = 12;
    } else if (hour >= 13){
       hour = hour - 12;

}
console.log(hour);
console.log(hour + amPm);


var n = day[d.getDay()];

var m = month[d.getMonth()];

var min = d.getMinutes();

if ( min >=0 && min <= 9){
  min = "0" + min;
} else {
  min = min;
}
console.log (min);
//http://www.w3schools.com/jsref/met_document_getelementbyid.asp

document.getElementById("today").innerHTML =
  n + ", " + d.getDate() + " " + m + " " + d.getFullYear();

document.getElementById("time").innerHTML = hour + ":" + min + amPm;
