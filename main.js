
var nameInput = document.getElementById('name');
var nameError = document.getElementById('nameError');
var passwordInput = document.getElementById('password');
var passwordError = document.getElementById('passwordError');



nameInput.addEventListener("focus", (event) => {
    event.target.style.background = "pink";
});
nameInput.addEventListener("blur", (event) => {
    event.target.style.background = "";
    validateName();
});

password.addEventListener("focus", (event) => {
    event.target.style.background = "pink";
});
password.addEventListener("blur", (event) => {
    event.target.style.background = "";
    validatePassword();
});

function validateName() {
    var name = nameInput.value;
    if (name.length < 3) {
        alert('Name must be at least 3 characters long');
    }
    return false;
}

function validatePassword() {
    var password = passwordInput.value;
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
    }
    if (password.search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) < 0) {
        var message = 'Password must contain a number'
        passwordError.innerHTML = message;
        alert(message);
    }

    return false;
}
document.getElementById('submit').addEventListener('click', function () {
    if (validateName() && validatePassword()) {
        alert('Success');
    }
});
