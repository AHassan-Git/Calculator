//this figures out which operation is being performed/which readio button is selected
function checkedRadioButton() {
  let operation = document.getElementsByName("Operation");

  for (i = 0; i < operation.length; i++) {
    if (operation[i].checked) {
      return operation[i].id;
    }
  }
}

function checkInputIsValid(firstNumber, secondNumber, operation) {
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(operation);

  if (secondNumber === 0 && operation === "Divide") {
    alert("You are trying to divide by zero! Please don't do that. You will crash the universe. Not cool!");
    return false;
  } else if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return false;
  } else {
    return true;
  }
}

//the actual operation is done here
function equal() {
  let firstNumber = Number(document.getElementById("first-number").value);
  let secondNumber = Number(document.getElementById("second-number").value);
  let operation = checkedRadioButton();
  let result = 0;

  console.log(checkInputIsValid(firstNumber, secondNumber, operation));
  if (checkInputIsValid(firstNumber, secondNumber, operation)) {
    if (operation === "Add") {
      result = firstNumber + secondNumber;
      document.getElementById("result-text").innerHTML =
        "The Result Is: " + result;
    } else if (operation === "Subtract") {
      result = firstNumber - secondNumber;
      document.getElementById("result-text").innerHTML =
        "The Result Is: " + result;
    } else if (operation === "Multiply") {
      result = firstNumber * secondNumber;
      document.getElementById("result-text").innerHTML =
        "The Result Is: " + result;
    } else if (operation === "Divide") {
      result = firstNumber / secondNumber;
      document.getElementById("result-text").innerHTML =
        "The Result Is: " + result;
    }
  } else {
    document.getElementById("result-text").innerHTML =
      "Your Input Is Not Valid. Please Try Again";
  }
}

function clear() {
  location.reload();
}

//Even Listners for the equal and clear buttons, and the default focus
document.getElementById("equal").addEventListener("click", equal);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("first-number").focus();
