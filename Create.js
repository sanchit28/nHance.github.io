const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
//const phone = document.getElementById('phone');
/*------------------------adding event listner for click------------------------------------------------ */
form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})


/*-----------------------------for email verification ------------------------------------------- */
const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;

    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}
/* extra function for mail verification with regex*/
function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }
/*-------------------------------Account Creation validations----------------------------------------- */
function Validate(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
   // const phoneVal = cpassword.value.trim();

    //username
    if(usernameVal === ""){
        setErrorMsg(username, 'name cannot be blank');
    }
    else if(usernameVal.length <=5){
        setErrorMsg(username, 'min. 5 chars');
    }
    else{
        setSuccessMsg(username);
    }
    //email
    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'email is not valid');
    }
    else{
        setSuccessMsg(email);
    }

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'min. 8 char');
    }
    else{
        setSuccessMsg(password);
    }
    /*
    //confirm contact
    if(phoneVal === ""){
        setErrorMsg(phone, 'phome number cannot be blank');
    }
    else if(phoneVal < 10){
        setErrorMsg(phone, 'Enter 10 digits number');
    }
    else{
        setSuccessMsg(phone);
    }
*/
   


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
