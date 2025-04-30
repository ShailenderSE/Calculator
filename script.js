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
const subtractOperation = document.getElementById('subtract');
const equalsToElement = document.getElementById('equalsTo');



//Edge case
//Need to add a logic to convert multiple 000 to 0.
// Handle number larger than the display screen

var firstnumber=0;
var secondnumber=0;
var finaloutput=0;
var refreshscreen = false;
//Function to clear display screen
function resetInputScreen(){
    const displayInput = document.getElementById('diplaytextarea');
    displayInput.value = "0";
    firstnumber = 0;
    secondnumber=0;
    finaloutput=0;
}

//Function to add the text to display screen on click event
function appendtext(){
    //console.log("Append text");
    // Read display screen and the button clicked on the calculator
    const userInput = parseFloat(this.innerText);
    const displayScreen = document.getElementById('diplaytextarea');
    var displayScreenValue = displayScreen.value;    

    //case1: screen shows 0 and user entered 0 then there should be no change in the display screen
        if(refreshscreen == false){
            
            if(displayScreenValue=="0" && userInput!==0){
                displayScreen.value = "";
                displayScreen.value = userInput;
            }
            else if(displayScreenValue=="0" && userInput==0){
                // let the display show 0 
            }
            else{
                displayScreen.value += userInput;
            }
    }
    else{
        displayScreen.value = "";
        displayScreen.value = userInput;
        refreshscreen = false;
    }
  //console.log(refreshscreen);  
}


function mathOperation(){
    //console.log("Math operation called");
   if (refreshscreen == false){
        var displayScreen = document.getElementById('diplaytextarea');
        var userInput = displayScreen.value;
        const operationToPerform = this.innerText;

        if(operationToPerform=="+"){
        //Perform Sum operation
        if (finaloutput==0 && userInput ==="0"){
            console.log("Nothing to add");
        }
        else{
        
            finaloutput += parseFloat(userInput);
            displayScreen.value = finaloutput;
            refreshscreen = true;
        }
        }

        else if(operationToPerform=="-"){
            if (finaloutput==0 && userInput ==="0"){
                console.log("Nothing to subtract");
            }
            else{
                if (firstnumber == 0){
                    finaloutput = parseFloat(userInput);    
                    firstnumber = 1;
                }
                else{
                finaloutput -= parseFloat(userInput);
                }
                
                displayScreen.value = finaloutput;
                refreshscreen = true;

            }   
        }
    }
   // console.log(refreshscreen);
}

function showOutput(){
    //mathOperation();
    if (refreshscreen == false){
    var displayScreen = document.getElementById('diplaytextarea');
    finaloutput += parseFloat(displayScreen.value);
    displayScreen.value=finaloutput;
    refreshscreen = true;
    }
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
equalsToElement.addEventListener('click',showOutput)
//add event to math operations

addOperation.addEventListener('click',mathOperation);
subtractOperation.addEventListener('click',mathOperation);
