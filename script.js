const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');
const number8 = document.getElementById('number8');
const number9 = document.getElementById('number9');
const number0 = document.getElementById('number0');
const Allclearbtn = document.getElementById('Allclear');
const addOperation = document.getElementById('add');

//Edge case
//Need to add a logic to convert multiple 000 to 0.


var priorValue = 0;
//Function to add the text to display screen on click event
function appendtext(){
    const displayInput = document.getElementById('diplaytextarea');
    const enteredInput = this.innerText;

    if ((displayInput.value=="0")&&(enteredInput!="0")){
        if(priorValue=="0"){
        displayInput.value = "";
        displayInput.value += enteredInput;
        }
    }
    else if ((displayInput.value=="0")&&(enteredInput=="0")){
        displayInput.value = "0";
    }
    else{
       
        displayInput.value += enteredInput;

    }

}

function mathOperation(){
    const displayInput = document.getElementById('diplaytextarea');
    console.log("previous value :"+displayInput.value);
    priorValue = displayInput.value;
    console.log("prior value :"+priorValue);
    const operationToPerform = this.innerText;



}


//Function to clear display screen

function resetInputScreen(){
    const displayInput = document.getElementById('diplaytextarea');
    displayInput.value = "0";
}


//Add event listener to buttons.

number1.addEventListener('click', appendtext);
number2.addEventListener('click', appendtext);
number3.addEventListener('click', appendtext);
number4.addEventListener('click', appendtext);
number5.addEventListener('click', appendtext);
number6.addEventListener('click', appendtext);
number7.addEventListener('click', appendtext);
number8.addEventListener('click', appendtext);
number9.addEventListener('click', appendtext);
number0.addEventListener('click', appendtext);
Allclearbtn.addEventListener('click',resetInputScreen)

//add event to math operations

addOperation.addEventListener('click',mathOperation);
