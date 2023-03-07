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
        
        // oppure let userNumber = +(totalInputs[i].value);
        let userNumber = Number(totalInputs[i].value);

        guessedNumbers.push(userNumber);

        if (numbers.includes(userNumber)) {

            totalInputs[i].classList.add("correct");

            totalInputs[i].classList.remove("incorrect");

        } else {

            totalInputs[i].classList.add("incorrect");

            totalInputs[i].classList.remove("correct");

        }

    }

    let rightGuesses = getRightGuesses(guessedNumbers, numbers);

    alert("You guessed " + rightGuesses.length + " numbers: " + rightGuesses);

})

//..........functions


//function generateSpan(numbers, wrapperEl) {
function generateSpan(numbers) {

    for (let i = 0; i < numbers.length; i++) {
    
        let numberSpan = document.createElement("span");

        numberSpan.textContent = numbers[i];

        wrapperEl.append(numberSpan);

    }
}

function generateNumbers(totalNumbers) {

    const arrayN = [];

    for (let i = 0; i < totalNumbers; i++) {
        
        arrayN.push(Math.floor(Math.random() * 100) + 1);

    }

    return arrayN;

}

function generateInputs(totalNumbers) {

    const arrayInputs = [];

    for (let i = 0; i < totalNumbers; i++) {

      let inputEl = document.createElement("input");

      inputEl.type = "number";

      arrayInputs.push(inputEl);

      //userNumbersEl.append(inputEl); 

      //userNumbersEl.append(...totalInputs); totalInputs non esiste ancora fino a che non ritorno l'array qui sotto

    }

    return arrayInputs;

  }

  function getRightGuesses (guessedNumbers, numbers) {

    let arrayRightGuesses = []

    for (let i = 0; i < guessedNumbers.length; i++) {

        let userNumber = guessedNumbers[i];

        if (numbers.includes(userNumber)) {

            arrayRightGuesses.push(userNumber);
        }

    }

    return arrayRightGuesses;

  }