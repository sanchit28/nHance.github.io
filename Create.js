const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
//const phone = document.getElementById('phone');
/*------------------------------------------------------------------------ */
form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})
/*------------------------------------------------------------------------ */
const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello " + usernameVal , "You are Registered", "success");
    }
}
/*------------------------------------------------------------------------ */
const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}

/*-----------------------------email verification function------------------------------------------- */
const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
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
        setErrorMsg(username, 'min 5 chars');
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
        setErrorMsg(password, 'min 8 char');
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
    SuccessMsg(usernameVal);


}
/*------------------------------------------------------------------------ */
function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
