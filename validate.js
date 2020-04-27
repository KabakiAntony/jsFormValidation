/* here is the javascript that we are going to use to validate the various inputs */
let submitForm = document.getElementById("form");

// declare various functions below here.
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
submitForm.addEventListener('submit',(e)=>{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    
    e.preventDefault();
    if(!isEmail(email)){
        document.getElementById("email").style.borderColor = "red";
    }
    if(!isValidPassword(password)|| !doPasswordsMatch(password,confirmPassword)){
        document.getElementById("password").style.borderColor = "red";
    }
});



