let wrapperEl = document.getElementById("numbers-wrapper")
let userNumbersEl = document.getElementById("numbers-user")
let totalNumbers = 5


const numbers = generateNumbers(totalNumbers)
generateSpan(numbers, wrapperEl);


setTimeout(function() {wrapperEl.textContent = "";}, 10000);
setTimeout(function() {userNumbersEl.style.display = "flex"}, 10000)
  


const totalInputs = generateInputs(totalNumbers);
userNumbersEl.append(...totalInputs);




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