var count = 0;

var load = document.getElementsByTagName("body");

load.onload = document.getElementById("count").innerHTML = count;
load.onload = disableBtn();

var increment = document.getElementById("inc-btn");

increment.onclick = function() {
    count += 1;
    document.getElementById("count").innerHTML = count;
    enableBtn();
};

var decrement = document.getElementById("dec-btn");

decrement.onclick = function() {
    if(count == 0) {
        disableBtn();
    } else if(count > 0) {
        count -= 1;
        document.getElementById("count").innerHTML = count;
    }
};

function enableBtn() {
    document.getElementById("dec-btn").disabled = false;
    document.getElementById("dec-btn").style.borderColor = "dimgrey";
}

function disableBtn() {
    document.getElementById("dec-btn").disabled = true;
    document.getElementById("dec-btn").style.borderColor = "lightgrey";
}
