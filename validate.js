/* here is the javascript that we are going to use to validate the various inputs */
let submitForm = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");


submitForm.addEventListener('submit',(e)=>{
    e.preventDefault();  
    /*
    the reason am returning a false in all
    my ifs is to prevent the submit from 
    acting further down on my code till
    all actions are true this prevents 
    fetching with invalid data all
    input data has to be valid first
    before going on to fetch.
    */ 

    if(!isEmail(email.value)){
        document.getElementById("error-email").innerHTML = "Enter a valid email !";
        return false;
    }
    if(!isValidPassword(password.value)){
        document.getElementById("error-password").innerHTML = 
        `Password should contain atleast 
        1 uppercase character,
        1 lowercase character,
        1 number, 
        1 special character,
        atleast 6 characters
        & not more than 20.`;
        return false;
    }
    if(!doPasswordsMatch(password.value,confirmPassword.value)){
        document.getElementById("error-confirm-password").innerHTML = "Passwords do not match !";
    }
    console.log("This should only show when all above is true");    
});
email.addEventListener('input',(e)=>{
    if(isEmail(email.value)){
        document.getElementById("error-email").innerHTML = ""; 
    }
    else{
        document.getElementById("error-email").innerHTML = "Enter a valid email !";
    }
});
password.addEventListener('input',(e)=>{
    if(isValidPassword(password.value))
    {
        document.getElementById("error-password").innerHTML = "";
    }else{
        document.getElementById("error-password").innerHTML = 
        `Password should contain atleast 
        1 uppercase character,
        1 lowercase character,
        1 number, 
        1 special character,
        atleast 6 characters
        & not more than 20.`;
    }
});
confirmPassword.addEventListener('input',(e)=>{
    if(doPasswordsMatch(password.value,confirmPassword.value)){
        document.getElementById("password").style.backgroundColor= "rgb(232,240,254)";
        document.getElementById("confirm-password").style.backgroundColor= "rgb(232,240,254)";
        document.getElementById("error-confirm-password").innerHTML = "";

    }else{
        document.getElementById("error-confirm-password").innerHTML = "Passwords do not match !";
    }
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


