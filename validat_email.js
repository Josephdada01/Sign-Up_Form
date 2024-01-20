/**
 * validateForm: a function that confirm if the email and password
 * are corrects. 
 */
function validateForm(){
    var password = document.getElementById("pass_word").value;
    var confirmPass = document.getElementById("ConfirmPass").value;
    var email = document.getElementById("user_email").value;
    var confirmEmail = document.getElementById("ConfirmEmail").value;

    if (password !== confirmPass){
        alert("Password and Confirm Password do not match");
        return false;
    }
    if (email !== confirmEmail) {
        alert("Email and Confirm Email do not match");
        return false;
    }
    return true;
    
}