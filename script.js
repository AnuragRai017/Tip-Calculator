//User enter to  the Amount, to Calculate Tip and TOTAL Amount
const inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(function(input) {
    input.addEventListener("input", calculateTip); // Adding event listner  for input box takes two values =>A String that specifies the name of the event and Specifies the function to run when the event occurs.  
});

//Select the slider value to calculte the Tip.
const slider = document.querySelectorAll("input[type='range']");
slider.forEach(function(slider){
    slider.addEventListener("input", calculateTip); // Adding event listner for slider takes two values =>A String that specifies the name of the event and Specifies the function to run when the event occurs. 
});


const billInput = document.getElementById("bill"); //Total bill and calculateTip function call
billInput.addEventListener("change", calculateTip);

//Function to calculate the Tip
function calculateTip(){
    //Storing the values => Using 'value' property sets or returns the value of the value attribute of a text field.
    let bill = parseFloat(billInput.value);
    //Check bill amount is valid or not
    if (bill>10000){
        alert("Bill amount exceded to 10000")
    }
    // Exceptional Handling for bill amount
    try {
        if (bill > 0) throw " Can pay through Cash or Card";
        if (isNaN(bill)) throw "Enter a number";
        bill = Number(bill);
        if (bill > 10000) throw "Maximium limit pay through card or UPI";
    } catch (err) {
        message.innerHTML = "Message_1:- " + err;
    }
   
    let tipPercent = document.getElementById("tip").value;
    //Check that tippercantage value is valid or not.
    if(tipPercent >= 100){
        alert("Check your Tip percentage 'Not Valid' ")
    }
    // Exceptional Handling for tip percantage
    try {
        if (tipPercent >= 100) throw "Range exceeds";
        if (isNaN(tipPercent)) throw "Not a percentage";
        tipPercent = Number(tipPercent);
         if (tipPercent <= 10) throw "Than You For Tip :)";
         if (tipPercent >= 50) throw "Than You For Such a High Tip :)";
    
    } catch (err) {
        message_1.innerHTML = "Message_2:- " + err;
    }
    let persons = document.getElementById("no-of-people").value;
    //Bill value is not decimal value
    billInput.value = bill.toFixed(0);
    //Calculating the the total Tip
    let totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));
    //Calculting the Total amount for per person
    let totalAmount = parseFloat((bill + totalTip).toFixed(0));

    //Calculating the Tip for eveey person sepratly
    let tipPerPerson = (totalTip / persons).toFixed(2);
    // calculating the Total amount for every person sepratly
    let totalPerPerson = (totalAmount / persons).toFixed(0);
    //Passing the value to all HTML elements 
    document.getElementById("tip-amount").textContent = `\₹  ${totalTip}`;
    document.getElementById("total-amount").textContent = `\₹  ${totalAmount}`;
    //Passing the value to all HTML elements 
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    document.getElementById("split-num").textContent = persons;
    //Passing the value to all HTML elements 
    document.getElementById("tip-per-person").textContent = `\₹  ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\₹  ${totalPerPerson}`;
}
calculateTip();


