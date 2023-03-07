let wrapperEl = document.getElementById("numbers-wrapper")
let userNumbersEl = document.getElementById("numbers-user")
let buttonEl = document.getElementById("compare")
//let enteredNumbers = document.querySelectorAll
let totalNumbers = 5


const numbers = generateNumbers(totalNumbers)
generateSpan(numbers, wrapperEl);


setTimeout(function() {wrapperEl.textContent = "";}, 10000);
setTimeout(function() {userNumbersEl.style.display = "flex"}, 10000)
  


const totalInputs = generateInputs(totalNumbers);
userNumbersEl.append(...totalInputs);

buttonEl.addEventListener("click", function(){

    let guessedNumbers = [];
    for (let i = 0; i < totalInputs.length; i++){
        
        let userNumber = Number(totalInputs[i].value);

        guessedNumbers.push(userNumber)
    }

    let rightGuesses = getRightGuesses(guessedNumbers, numbers);
    alert("You guessed " + rightGuesses.length + " numbers: " + rightGuesses);



})

//..........functions

function generateSpan(numbers, wrapperEl) {

    for (let i = 0; i < numbers.length; i++) {
    
        let numberSpan = document.createElement("span");

        numberSpan.textContent = numbers[i];

        wrapperEl.append(numberSpan);

    }
}

function generateNumbers(totalNumbers) {

    const numbers = [];

    for (let i = 0; i < totalNumbers; i++) {
        
        numbers.push(Math.floor(Math.random() * 100) + 1);

    }

    return numbers;

}

function generateInputs(totalNumbers) {

    const totalInputs = [];

    for (let i = 0; i < totalNumbers; i++) {

      let inputEl = document.createElement("input");

      inputEl.type = "number";

      totalInputs.push(inputEl);

      //userNumbersEl.append(inputEl); 

    }

    return totalInputs;

  }

  function getRightGuesses (guessedNumbers, numbers) {

    let rightGuesses = []

    for (let i = 0; i < guessedNumbers.length; i++) {

        let userNumber = guessedNumbers[i];

        if (numbers.includes(userNumber)) {

            rightGuesses.push(userNumber);
        }

    }

    return rightGuesses;

  }