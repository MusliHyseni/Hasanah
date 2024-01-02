export const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
export const validatePassword = (inputPassword) => inputPassword.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export function generateError(errorName, ErrorMessage, emailErrorTag, passwordErrorTag) {
    if (errorName == "email") {
        emailErrorTag.innerText = ErrorMessage;
    } else if (errorName == "password") {
        passwordErrorTag.innerText = ErrorMessage;
    }
}

export  function formValidateFinal(inputEmail, inputPassword) {
    const emailErrorMessage = "The email you provided doesn't exist";
    const passwordErrorMessage = "Incorrect password";
    const emailErrorTag = document.querySelector(".errorMessageEmail");
    const passwordErrorTag = document.querySelector(".errorMessagePassword");
    if (!validateEmail(inputEmail)) {
        generateError("email", emailErrorMessage, emailErrorTag, passwordErrorTag);
    } 
    if (!validatePassword(inputPassword)) {
        generateError("password", passwordErrorMessage, emailErrorTag, passwordErrorTag);
    }
}