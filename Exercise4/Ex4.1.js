//Write a JavaScript program to calculate the days left before Christmas.
function change1(){
Date
// getFullYear
// getMonth
// getDate
// setFullYear
// getTime
// Get the current date
today = new Date();
console.log(today);

// Create a Date object for Christmas of the current year
var christmasData = new Date(today.getFullYear(), 11, 25);
console.log(christmasData);

// Calculate the difference in days between today and Christmas
var timeDifference = (christmasData.getTime() - today.getTime())

// Log the number of days left until Christmas to the console
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil( timeDifference/ (one_day)) +
    " days left until Christmas!");
var final = Math.ceil( timeDifference/ (one_day));
document.getElementById("Days").innerText = final + 
" days left until Christmas!";
}