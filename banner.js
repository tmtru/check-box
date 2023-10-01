function sumPrice(){
    let sum=0;
    let checkBox=document.getElementsByClassName('price2');
    let price=document.getElementsByClassName('price2');
    for (let i=0; i<checkBox.length; i++){
        if (checkBox[i].checked===true){
            sum+=Number(price[i].value);
        }
    }
    
    document.getElementById("totalPrice").innerHTML='$'+sum;
}
function validateNonEmpty(inputField,helpText){
    if (inputField.value.length===0){
        helpText.innerHTML="Please enter a value";
        return false;
    }
    else {
        helpText.innerHTML="";
        return true;
    }
}
function validateRegEx(regex, input, helpText, helpMessage){
    if (regex.test(input.value)==false){
        helpText.innerHTML=helpMessage;
        return false;
    } else {
        helpText.innerHTML="";
        return true;
    }
}
function validateDate(input,helpText){
    if (validateNonEmpty(input,helpText)==false)
        return false;
        return validateRegEx(/\d{2}\/\d{2}\/\d{4}/,input,helpText,"Please enter a valid date");
}
function validateEmail(input,helpText){
    if (validateNonEmpty(input,helpText)==false)
        return false;
        return validateRegEx(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,input,helpText,"Please enter a valid email");
}