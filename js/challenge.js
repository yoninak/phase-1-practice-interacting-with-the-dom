
function increaseTimer(){
document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText, 10) +1

}

// variable to store our intervalID
let intervalID;

intervalID = setInterval(increaseTimer, 1000)

