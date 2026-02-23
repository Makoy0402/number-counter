
const increaseCount = document.getElementById("increaseBtn");
const decreaseCount = document.getElementById("decreaseBtn");
const resetCount = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
const messageLabel = document.getElementById("messageLabel");

let numberCounter = 0;

function updateMessage(message = ""){
    messageLabel.textContent = message;
}

increaseCount.onclick = function(){
    numberCounter++;

    countLabel.textContent = numberCounter;
    console.log("The current number is " + numberCounter);

    updateMessage();
    // warningMessage = "";
    // messageLabel.textContent = warningMessage;
}

decreaseCount.onclick = function(){
    if(numberCounter > 0){
        numberCounter--;

        countLabel.textContent = numberCounter;
        console.log("The current number is " + numberCounter);

        updateMessage();
        // warningMessage = "";
        // messageLabel.textContent = warningMessage;
    }
    else{
        countLabel.textContent = numberCounter;
        console.log("The current number is already 0");

        updateMessage("The Number cannot go lower than 0");
    }
}

resetCount.onclick = function(){
    numberCounter = 0;

    countLabel.textContent = numberCounter;
    console.log("The current number is " + numberCounter);

    updateMessage();
    // warningMessage = "";
    // messageLabel.textContent = warningMessage;
}