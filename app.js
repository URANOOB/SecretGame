//Global variables
let secretNumber = 0;
let counter = 1;
let listOfNumbers = [];

//Code optimization in base of a reusable function
function textElement (element, text) {
    let innerElement = document.querySelector(element);
    innerElement.innerHTML = text;
    return;
}

//Function of a random number generator that add a random number to the list of numbers
function randomNumber() {
    secretNumber = parseInt(Math.round(Math.floor(Math.random()*10))+1);
    if (listOfNumbers.includes(secretNumber)) {
        //Here it returns the function to force the console to add the number to the list of numbers
        return randomNumber();
    } else {
        console.log(listOfNumbers);
        listOfNumbers.push(secretNumber);
        if (listOfNumbers.length === 10) {
            console.log('Max quantity of numbers reached, please refresh');
            textElement('p', 'Max quantity of numbers reached, please refresh');
            document.querySelector('#newOne').setAttribute('disabled', 'true');
            return;
        }
        return;
    }
}

//Function to introduce a number and show it in the console when hit the boton try
function userNumber() {
    let verifyNumber = parseInt(document.getElementById('userNumber').value);
    //If the number introduced is the same as the secret number, it will create a new alert
    if (verifyNumber === secretNumber) {
        textElement('p', `Congrats, right number! You did it in ${counter} ${counter === 1 ? 'attempt' : 'attempts'}`);
        //This element will remove the attribute disabled frome the second boton 
        document.getElementById('reboot').removeAttribute('disabled');
        counter = 0;
    } else if (verifyNumber > secretNumber) {
        textElement('p', 'The number is greater than the real number');
    } else {
        textElement('p', 'The number is lower than the real number');
    }
    clearBox();
    return counter++;
}

function clearBox(){
    document.querySelector('#userNumber').value = '';
}

//This function calls the initial conditions on the game
function initialConditions(){
    //This is used to change the h1
    textElement('h1', 'Welcome!');
    //This is used to change the p 
    textElement('p', 'Provide a number between 1 and 10');
    randomNumber();
    if (listOfNumbers.length === 10) {
        return listOfNumbers = [];
    } else {
        console.log('The secret number is: ' + secretNumber);
    }
}

function restartGame(){
    //This function clears the box
    clearBox();
    //This function shows the initial conditions
    initialConditions();
    //This function disable the button of the new game
    document.querySelector('#reboot').setAttribute('disabled', 'true');
}

initialConditions();
