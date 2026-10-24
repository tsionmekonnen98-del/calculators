const display = document.getElementById("display");


function updateText(){
    const length = display.value.length;
    if(length> 10){
   display.style.fontSize = "3rem";

    }
     if(length> 15){
   display.style.fontSize = "2rem";

    }
     if(length <= 10){
   display.style.fontSize = "5rem";

    }
}



function appendToDisplay(input){
    display.value += input;
    updateText();
}
function toClear(){
    display.value = " ";
}
function toCalculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function toDelete(){
    display.value = display.value.slice(0,-1);
}