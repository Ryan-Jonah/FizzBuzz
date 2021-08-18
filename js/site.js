/**
 * Gather user input from form controls
 * Controller Function
 */
function getValues(){
    let fizzValue = parseInt(document.getElementById('fizzValue').value);
    let buzzValue = parseInt(document.getElementById('buzzValue').value);

    if (isNaN(fizzValue) == false && isNaN(buzzValue) == false){
        
        let fizzNumbers = [];
        let buzzNumbers = [];
        let fizzBuzzNumbers = [];

        displayResults(fizzNumbers, buzzNumbers, fizzBuzzNumbers);
    }
}

/**
 * Determine multiples of 3, 5, and 3 + 5
 * Logic Functions
 */
function getFizzNumbers(fizz, buzz){
    let returnNumbers = [];

    for (let index = 0; index <= 100; index++) {
        if (index % fizz == 0){
            returnNumbers.push(index);
        }
    }
    return returnNumbers;
}

function getBuzzNumbers(fizz, buzz){
    let returnNumbers = [];

    for (let index = 0; index <= 100; index++) {
        if (index % buzz == 0){
            returnNumbers += index;
        }
    }
    return returnNumbers;
}

function getFizzBuzzNumbers(fizz, buzz){
    let returnNumbers = [];

    for (let index = 0; index <= 100; index++) {
        if (index % fizz == 0 && index % buzz == 0){
            returnNumbers += index;
        }
    }
    return returnNumbers;
}

/**
 * Display output to the user
 * View Function
 */
function displayResults(fizzNumbers, buzzNumbers, fizzBuzzNumbers){
    
}
