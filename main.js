// hace que cuando se recargue la página el cursor no esté en ningún input
document.getElementById('name').blur();
document.getElementById('password').blur();


var nameInput = document.getElementById('name');
var nameError = document.getElementById('nameError');
var passwordInput = document.getElementById('password');
var passwordError = document.getElementById('passwordError');


// event listeners para cuando se hace focus y blur en los inputs
// cuando estás parado sobre el input del name, se hace focus, por lo tanto, se ejecuta el código de acá abajo
nameInput.addEventListener("focus", (event) => {
    event.target.style.background = "pink";
});

// cuando te vas del input del name, se ejecuta el código de acá abajo
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

// estas son las funciones que hacen la validación de las entradas
// crean una alerta que se muestra en pantalla si no se cumple la condición, y agregan un mensaje de error en el html
// también devuelven 
// son llamadas en los event listeners de focus de arriba y también cuando se hace click en el botón de submit
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
