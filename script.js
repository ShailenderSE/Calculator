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
const clearbtn = document.getElementById('clear');
const Allclearbtn = document.getElementById('Allclear');

//function appendtext(a){
//const displayinput = document.getElementById('diplaytextarea');
// if(displayinput.value === "0")
// {
//     displayinput.value = "";
//     displayinput.value += a.innerText;
// }
// else{
//     displayinput.value += a.innerText;

// }

// }

// const printme = (el)=> { 

//     console.log(this);
// }

function printme(){
    const displayInput = document.getElementById('diplaytextarea');
    const enteredInput = this.innerText;

    if ((displayInput.value=="0")&&(enteredInput!="0")){
        displayInput.value = "";
        displayInput.value += enteredInput;
    }
    else if ((displayInput.value=="0")&&(enteredInput=="0")){
        displayInput.value = "0";
    }
    else{
        displayInput.value += enteredInput;
    }

}

function resetInputScreen(){
    const displayInput = document.getElementById('diplaytextarea');
    displayInput.value = "0";
}


//Add event listener to buttons.

number1.addEventListener('click', printme);
number2.addEventListener('click', printme);
number3.addEventListener('click', printme);
number4.addEventListener('click', printme);
number5.addEventListener('click', printme);
number6.addEventListener('click', printme);
number7.addEventListener('click', printme);
number8.addEventListener('click', printme);
number9.addEventListener('click', printme);
number0.addEventListener('click', printme);
clearbtn.addEventListener('click',resetInputScreen);
Allclearbtn.addEventListener('click',resetInputScreen)
