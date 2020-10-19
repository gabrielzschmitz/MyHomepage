setInterval(realtimeClock, 500);
function realtimeClock() {

    // Set variables
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var day = rtClock.getDate();
    
    //Setting week day and day in three letters
    var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    
    //Pad the hours, minutes and day with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    day = ("0" + day).slice(-2);
    

    //Display Clock
    document.getElementById('clock').innerHTML =
        hours + ":" + minutes;
    
    //Display Date
    document.getElementById('date').innerHTML =
        week[rtClock.getDay()] + ", " + month[rtClock.getMonth()] + " " + day;
}
