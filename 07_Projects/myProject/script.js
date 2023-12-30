let IntervalId;
const StartChangingColor = function (){
    if(!IntervalId) IntervalId = setInterval(changeBgColor, 1000);
    function changeBgColor() {
        console.log("My Name is Abhimanyu Yadav", Date.now())
    }
}

const StopChangingColor = function (){
    clearInterval(IntervalId);
    IntervalId = null
}
document.querySelector("#start").addEventListener('click', StartChangingColor);
document.querySelector("#stop").addEventListener('click', StopChangingColor);