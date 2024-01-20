/**
 * validateForm: a function that confirm if the email and password
 * are corrects. 
 */
function validateForm(){
    var password = document.getElementById("pass_word").value;
    var confirmPass = document.getElementById("ConfirmPass").value;
    var email = document.getElementById("user_email").value;
    var confirmEmail = document.getElementById("ConfirmEmail").value;

    /* setting the to red if they are not correct email or password */
    var emailInputs = document.querySelectorAll('[name^="email"]');
    var passInputs = document.querySelectorAll('[name^="pass"]');

    if (password !== confirmPass){
        alert("Password and Confirm Password do not match");
        passInputs.forEach(input => input.style.borderColor = 'red');
        return false;
    }
    if (email !== confirmEmail) {
        alert("Email and Confirm Email do not match");
        emailInputs.forEach(input => input.style.borderColor = 'red');
        return false;
    }
    /* Reset border color if validation passes */
    emailInputs.forEach(input => input.style.borderColor = 'green');
    passInputs.forEach(input => input.style.borderColor = 'green');
    return true;
    
}