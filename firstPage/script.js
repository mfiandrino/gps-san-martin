var dateElement = document.getElementById( "date" );
var timeElement = document.getElementById( "time" );

function updateClock (date,time) {
    var dt = new Date();
    date.textContent = (("0"+dt.getDate()).slice(-2)) +"/"+ (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (dt.getFullYear())
    time.textContent = (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
}

updateClock( dateElement,timeElement );
setInterval(function () {
    updateClock(  dateElement,timeElement );
}, 1000);
  