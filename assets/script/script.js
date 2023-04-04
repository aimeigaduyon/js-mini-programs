// Integer Checker

function intChecker() {
    let inputIntValue = parseFloat(document.querySelector("#inputInt").value);
    let outputIntValue = document.querySelector("#outputInt");

    if (inputIntValue > 0) {
    outputIntValue.innerHTML = "This is a positive integer."; 
    } else if (inputIntValue < 0) {
    outputIntValue.innerHTML = "This is a negative integer.";
    } else if (inputIntValue === 0) {
    outputIntValue.innerHTML = "This is neither a positive nor a negative integer.";
    } else {
    outputIntValue.innerHTML = "Please enter a valid input."
    }
}


// Parity Checker

function parChecker() {
    let inputParValue = parseFloat(document.querySelector("#inputPar").value);
    let outputParValue = document.querySelector("#outputPar");

    if (inputParValue % 2 === 0) {
    outputParValue.innerHTML = "This is an even number.";
  } else {
    outputParValue.innerHTML = "This is an odd number.";
  }
}


// Voter's Eligibility
function voterEligibility() {
    let voterName = document.querySelector("#firstName").value;
    let ageValue = parseFloat(document.querySelector("#age").value);
    let residencyValue = parseFloat  (document.querySelector("#residency").value); 
    let outputVoterValue = document.querySelector("#outputVoter");
    
    if (ageValue >= 18 && residencyValue >= 18) {
        outputVoterValue.innerHTML = "Hi " + voterName +  "! You are eligible to vote!";
    } else {
        outputVoterValue.innerHTML = "Sorry " + voterName + ", but you are not eligible to vote.";
    }
}