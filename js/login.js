
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

var attempt = 2; // Variable to count number of attempts
function validate(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(i = 0; i < database.length; i++){
        if(username == database[i].username && password == database[i].password){
            window.location.assign("fetch.html");
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
    // Disabling fields after 2 attempts.
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("login").disabled = true;

    $('.login-btn').hover(
        function(){ $(this).addClass('no-hover') },
        function(){ $(this).removeClass('hover') }
    )
    /*---------------- */
    $('form').on('submit', function(event) {
        event.preventDefault();
      $(this).find('login-btn').removeClass('hover');
      $(this).find('login-btn').addClass('no-hover');
    });
    /*---------------- */
    // document.querySelector("#login-btn").addEventListener('submit',function(){
    //     // let Dh = document.querySelector("#login-btn");
    //     document.getElementById("login").classList.add('no-hover')

    // })

    return false;
    }
    
}

