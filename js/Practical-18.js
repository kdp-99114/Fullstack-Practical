// Selector

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

// Event Handler

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkInputs();
});

// Functions

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    // for username
    if(usernameValue === '') {
        showError(username, "Username cannot be blank");
    } else {
        showSuccess(username);
    }

    // for email
    if(emailValue === '') {
        showError(email, "Email ID cannot be blank");
    } else if(!isEmailValid(emailValue)) {
        showError(email, "Email ID not valid");
    } else {
        showSuccess(email);
    }

    //for password1
    if(password1Value === '') {
        showError(password1, "Password cannot be blank");
    } else {
        showSuccess(password1);
    }

    // for password2
    if(password2Value === '') {
        showError(password2, "Password cannot be blank");
    } else if(password2Value != password1Value) {
        showError(password2, "Password not matched");
    } else {
        showSuccess(password2);
    }

}

function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}

function isEmailValid(email) {
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}