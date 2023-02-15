const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
/*additional variables */
var regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;  
var regPhone = /^\d{10}$/;                                        
var regName = /^[a-zA-Z\-]+$/; 
var regPass_1 = /^[A-Za-z]\w{7,14}$/;
/*------------------------adding event listner for click------------------------------------------------ */
form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})


/*-----------------------------for email verification ------------------------------------------- */
// const isEmail = (emailVal) =>{
//     var atSymbol = emailVal.indexOf('@');
//     if(atSymbol < 1) return false;

//     var dot = emailVal.lastIndexOf('.');
//     if(dot <= atSymbol + 2) return false;
//     if(dot === emailVal.length -1) return false;
//     return true;
// }

// /* extra function for mail verification with regex // ======Not used for validations==========*/
// function isValidEmail(email){
//     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//  }
/*-------------------------------Account Creation validations----------------------------------------- */
function Validate(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const phoneVal = phone.value.trim();

    //------------------------username
    if(usernameVal === ""){
        setErrorMsg(username, 'name cannot be blank');
    }
    else if(usernameVal.length <=5){
        setErrorMsg(username, 'min. 5 chars');
    }
    else if( !regName.test(usernameVal) ){
        setErrorMsg(username, 'Digits cannot be used');
        username.focus;
    }
    else{
        setSuccessMsg(username);
    }
    //-----------------------email
    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
    }
    // else if(!isEmail(emailVal)){
    //     setErrorMsg(email, 'email is not valid');
    // }
    else if( !regEmail.test(emailVal) ){
        setErrorMsg(email, 'email is not valid');
        
    }
    else{
        setSuccessMsg(email);
    }

    //--------------------password
    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
    }
    // else if(passwordVal.length <= 7){
    //     setErrorMsg(password, 'min. 8 char');
    // }
    else if( !regPass_1.test(passwordVal) ){
        setErrorMsg(password, 'min. 8 char;Should contain atleat one digit,1 uppercase & 1 lowercase');
        
    }
    else{
        setSuccessMsg(password);
    }
    
    //-----------------------confirm contact
    if(phoneVal === ""){
        setErrorMsg(phone, 'phome number cannot be blank');
    }
    else if( !regPhone.test(phoneVal) ){
        setErrorMsg(phone, 'Enter 10 digits number(Digits only');
        
    }
    // else if(phoneVal < 10){
    //     setErrorMsg(phone, 'Enter 10 digits number');
    // }
    else{
        setSuccessMsg(phone);
    }

   


}
/*-------------------------------for error----------------------------------------- */
function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement; // will find parent element inour case-form-control
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
/*-------------------------------for successful match----------------------------------------- */
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
