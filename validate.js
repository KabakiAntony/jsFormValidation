/* here is the javascript that we are going to use to validate the various inputs */
let submitForm = document.getElementById("form");


submitForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value; 
    /*
    the reason am returning a false in all
    my ifs is to prevent the submit from 
    acting further down on my code till
    all actions are true this prevents 
    fetching with invalid data all
    input data has to be valid first
    before going on to fetch.
    */ 

    if(!isEmail(email)){
        document.getElementById("error-email").innerHTML = "Enter a valid email !";
        return false;
    }
    if(!isValidPassword(password)){
        document.getElementById("error-password").innerHTML = "Password does not meet requirements !";
        return false;
    }
    if(!doPasswordsMatch(password,confirmPassword)){
        document.getElementById("error-confirm-password").innerHTML = "Passwords do not match !";
        return false;
    }
    console.log("This should only show when all above is true");    
});


// in js when dealing with regex declare flags eg "igm"
/*
i - insensitive
g - global
m - multiline
there are others  but these flags determine how your string is parsed
*/
function isEmail(my_email){
    let emailRegex =/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    return my_email.match(emailRegex);
}
function isValidPassword(my_password){
    let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,20}$/igm;
    return my_password.match(passwordRegex);
}
function doPasswordsMatch(passOne,passTwo){
    return (passOne === passTwo);
}


