/**
 * Gather user input from form controls
 * Controller Function
 */
function getValues(){
    let fizzValue = parseInt(document.getElementById('fizzValue').value);
    let buzzValue = parseInt(document.getElementById('buzzValue').value);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        
        let fizzBuzzNumbers = getFizzBuzzNumbers(fizzValue, buzzValue);

        displayResults(fizzBuzzNumbers);
    } 
}

/**
 * Determine multiples of 3, 5, and 3 + 5
 * Logic Functions
 */

function getFizzBuzzNumbers(fizz, buzz){
    let returnFizzBuzz = [];

    for (let index = 0; index <= 100; index++) {
        if (index % fizz == 0 && index % buzz == 0) 
            returnFizzBuzz.push("FizzBuzz");
        else if (index % fizz == 0) 
            returnFizzBuzz.push("Fizz");
        else if (index % buzz == 0) 
            returnFizzBuzz.push("Buzz");
        else 
            returnFizzBuzz.push(index);
    } return returnFizzBuzz;
}

/**
 * Display output to the user
 * View Function
 */
function displayResults(fizzBuzzArray){
    let tableBody = document.getElementById('results');
    let templateRow = document.getElementById('fb-template');

    tableBody.innerHTML = '';

    for (let index = 1; index < fizzBuzzArray.length; index+=5) {
        let tableRow = document.importNode(templateRow.content, true);

        //grab tds and put them in an array
        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(fizzBuzzArray[index]);
        rowCols[0].textContent = fizzBuzzArray[index];
        
        rowCols[1].classList.add(fizzBuzzArray[index+1]);
        rowCols[1].textContent = fizzBuzzArray[index+1];

        rowCols[2].classList.add(fizzBuzzArray[index+2]);
        rowCols[2].textContent = fizzBuzzArray[index+2];
        
        rowCols[3].classList.add(fizzBuzzArray[index+3]);
        rowCols[3].textContent = fizzBuzzArray[index+3];
        
        rowCols[4].classList.add(fizzBuzzArray[index+4]);
        rowCols[4].textContent = fizzBuzzArray[index+4];
        
        tableBody.appendChild(tableRow);
    }

}
