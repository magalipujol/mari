var nameInput = document.getElementById('name');
var passwordInput = document.getElementById('password');


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
        alert('Password must contain a number');
    }

    return false;
}
document.getElementById('submit').addEventListener('click', function () {
    if (validateName() && validatePassword()) {
        alert('Success');
    }
});
