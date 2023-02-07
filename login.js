/*
var obj=[
    {
        username : "root",
        password : "root1234"
    },
    {
        username : "test",
        password : "test1234"
    }
]

function getInfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    console.log("Your username:"+ username +"/password:"+ password);
}

*/
// Login ID & passowrd dictonary
var database = [
    {
        username : "root",
        password : "root1234"
    },
    {
        username : "test",
        password : "test1234"
    },
    {
        username : "sanchit",
        password : "sanchit1234"
    }
]

var attempt = 5; // Variable to count number of attempts
function validate(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(i = 0; i < database.length; i++){
        if(username == database[i].username && password == database[i].password){
            alert("Successfull Login, Hola Visionary");
            //console.log("Successfull Login, Hola Visionary");
            return
        }
        
            
            

        
        //else{
            //alert("Login Failed!! Try with correct username & password");
            //console.log("Login Failed!! Try Again..");
        //}
         
    }
    attempt --;// Decrementing by one.
    alert("You have left "+attempt+" attempt;");
    // Disabling fields after 3 attempts.
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("login").disabled = true;
    return false;
    }
    // alert("Login Failed!! Try with correct username & password");
            //console.log("Login Failed!! Try Again..");
}


/*
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    {
        if(username =="root" && password == "root1234"){
            alert("Successfull Login, Hola Visionary");
          return false;
        }
        else{
            alert("Login Failed!! Try Again..");
        }
    }
}
*/