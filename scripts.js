/*var secondsInAMinute = 60;
var minutesInAnHour = secondsInAMinute * 60;
var hoursInADay = minutesInAnHour * 24;
var daysInAYear = hoursInADay * 365;
var age = daysInAYear * 11;
console.log(age);

var balloons = 100;
balloons /= 4;
console.log(balloons);

var string = "hElLo tHerE, I aM kEnObi!";
string[0].toUpperCase() + string.slice(1).toLowerCase();
console.log(string);
*/
var calling = [
    "Helen you are bitch", 
    "Yeees, YOU are bitch", 
    "You how sand!", 
    "Beach", 
    "Hey Hilan!", 
    "You are the bitch, like piss of sand in anakin's shoes", 
    "Bye bitch!"
];

document.getElementById('button').onclick = function() {   
    let callingField = document.getElementById('calling-field');
    let out = '';
    out += `<p class="alertName" role="alert">${calling[Math.floor(Math.random() * 7)]}</p>`;
    callingField.innerHTML = out;
}