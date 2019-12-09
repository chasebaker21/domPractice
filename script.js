"use strict";

function runCode() {
    
  let inputText = document.getElementById("input").value;

  if (document.getElementById("fruit").checked == true) {
    const newLi = document.createElement("li");
    newLi.innerHTML = inputText;
    fruitListOutput.append(newLi);

  } else if (document.getElementById("vegetable").checked == true) {
    const newLi = document.createElement("li");
    newLi.innerHTML = inputText;
    vegetableListOutput.append(newLi);
  }
}

