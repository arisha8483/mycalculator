function add() {
    let number1 = Number(document.getElementById("number1").value);
    console.log("number1: " + number1);

    let number2 = Number(document.getElementById("number2").value);
    console.log("number2: " + number2);

    let sum = number1 + number2;
    console.log("Sum: " + sum);
    document.getElementById("display_number1").innerHTML = "Sum: " + sum;

  }

  function subtract() {
    let number1 = Number(document.getElementById("number1").value); 
    console.log("number1: " + number1);

    let number2 = Number(document.getElementById("number2").value);
    console.log("number2: " + number2);

    let difference = number1 - number2;
    console.log("Difference: " + difference);
    document.getElementById("display_number1").innerHTML = "Difference: " + difference;
  }
  
  function multiply() {
    let number1 = Number(document.getElementById("number1").value);
    console.log("number1: " + number1);

    let number2 = Number(document.getElementById("number2").value);
    console.log("number2: " + number2);

    let multiply = number1 * number2;
    console.log("Multiply: " + multiply);
    document.getElementById("display_number1").innerHTML = "Multiply: " + multiply;
  }

  function divide() {
    let number1 = Number(document.getElementById("number1").value);
    console.log("number1: " + number1);

    let number2 = Number(document.getElementById("number2").value);
    console.log("number2: " + number2);

    let division = number1 / number2;
    console.log("Divide: " + division);
    document.getElementById("display_number1").innerHTML = "Divide: " +division;
  }





