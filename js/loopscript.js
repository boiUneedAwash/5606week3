function calculateSum() {
    sum = 0;  //my sum start from 0, later on, I add numbers on
    number = Number(document.getElementById("numFrom").value); //my number start from 1, this number will be a counter for my loop
    while (number <= Number(document.getElementById("numTo").value) ) { //my condition is number less equal to 50
        //actions
        sum = sum + number; //on left of "=", it is variable, on the right of the "=", they must be considered as value
        console.log("number: " + number + "sum: " + sum); //we need to print them out
        number = number + 1; //add one on number, in order to update my condition
    }
    document.getElementById("sumResult").innerText = sum;
}

function goNextStep() {
    inputText = document.getElementById("userInput").value;
    if (inputText != "yes"){
        alert("type again");
    }else {
        alert("you type right");
    }
}