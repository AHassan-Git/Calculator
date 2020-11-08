function checkedRadioButton() {
  let operation = document.getElementsByName("Operation");

  for (i = 0; i < operation.length; i++) {
    if (operation[i].checked) {
      console.log(operation[i].id);
      return operation[i].id;
    }
  }
}

function equal() {
  let firstNumber = Number(document.getElementById("first-number").value);
  let secondNumber = Number(document.getElementById("second-number").value);
  let operation = checkedRadioButton();
  let result = 0;

  if (operation === "Add") {
    result = firstNumber + secondNumber;
    document.getElementById("result-text").innerHTML = result;
  } else if (operation === "Subtract") {
    result = firstNumber - secondNumber;
    document.getElementById("result-text").innerHTML = result;
  } else if (operation === "Multiply") {
    result = firstNumber * secondNumber;
    document.getElementById("result-text").innerHTML = result;
  } else if (operation === "Divide") {
    result = firstNumber / secondNumber;
    document.getElementById("result-text").innerHTML = result;
  }
}

function clear() {
  location.reload();
}

document.getElementById("equal").addEventListener("click", equal);
document.getElementById("clear").addEventListener("click", clear);

