let wrapperEl = document.getElementById("numbers-wrapper")
let userNumbersEl = document.getElementById("numbers-user")
let totalNumbers = 5


const numbers = generateNumbers(totalNumbers)

generateSpan(numbers, wrapperEl);




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