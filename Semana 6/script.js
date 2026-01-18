// Validaciones

const nombre = document.getElementById('nombre');
const errorNombre =document.getElementById('error_nombre');
nombre.addEventListener('input', () => { 
    if (nombre.value.length < 3) {
        errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres';
        nombre.classList.add('invalid');
        nombre.classList.remove('valid'); 
    } else {
        errorNombre.textContent = '';
        nombre.classList.add('valid');
        nombre.classList.remove('invalid');  
    }

    validarFormulario();
});


const emailInput = document.getElementById('email');
const errorEmail = document.getElementById('error_email');
emailInput.addEventListener('input', () => { 
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
    if (!regex.test(email)) {
            errorEmail.textContent = 'Correo inválido';
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
        } else {
            errorEmail.textContent = '';
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
        }

        validarFormulario();
});


const password = document.getElementById('password');
const errorPass = document.getElementById('error_pass');
password.addEventListener('input', () => { 
    const pass = password.value;
    if (pass.length < 8) {
        errorPass.textContent = 'La contraseña debe tener al menos 8 caracteres';
        password.classList.add('invalid');
        password.classList.remove('valid');
    }
    else if (!/^(?=.*\d)(?=.*[\W_]).{8,}$/.test(pass)) {
        errorPass.textContent = 'La contraseña debe incluir al menos un número y un carácter especial';
        password.classList.add('invalid');
        password.classList.remove('valid');
    }
    else {
        errorPass.textContent = ''; // Limpiar mensaje de error si la contraseña es válida
        password.classList.remove('invalid');
        password.classList.add('valid');
    }

    validarFormulario();
});

const validarPassword = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const errorConfirmPass = document.getElementById('error_confirmpass');
confirmPassword.addEventListener('input', () => { 
    if (confirmPassword.value !== validarPassword.value) {
        errorConfirmPass.textContent = 'Las contraseñas no coinciden';
        confirmPassword.classList.add('invalid');
        confirmPassword.classList.remove('valid'); 
    } else {
        errorConfirmPass.textContent = '';
        confirmPassword.classList.add('valid');
        confirmPassword.classList.remove('invalid');  
    }

    validarFormulario();
});

const edad = document.getElementById('edad');
const errorEdad =document.getElementById('error_edad');
edad.addEventListener('input', () => { 
    if (edad.value < 18) {
        errorEdad.textContent = 'La edad debe ser mayor o igual a 18';
        edad.classList.add('invalid');
        edad.classList.remove('valid'); 
    } else {
        errorEdad.textContent = '';
        edad.classList.add('valid');
        edad.classList.remove('invalid');  
    }

    validarFormulario();
});

const btnSubmit = document.getElementById('btn_submit');
const btnReset = document.getElementById('btn_reset');
btnReset.addEventListener('click', () => {
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('valid', 'invalid');
    });

    document.querySelectorAll('.error').forEach(span => {
        span.textContent = '';
    });

    btnSubmit.disabled = true;
});


function validarFormulario() {
    const inputs = document.querySelectorAll('#formulario input');
    let formularioValido = true;

    inputs.forEach(input => {
        if (!input.classList.contains('valid')) {
            formularioValido = false;
        }
    });

    btnSubmit.disabled = !formularioValido;
}

const form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Formulario enviado correctamente');
    location.reload(); 
});

    
    /*

function validarEmail() {
    const email = document.getElementById("email");
    return validarCampo(
        email,
        emailRegex.test(email.value),
        "Correo electrónico no válido"
    );
}

function validarPassword() {
    const password = document.getElementById("password");
    return validarCampo(
        password,
        passwordRegex.test(password.value),
        "Mínimo 8 caracteres, un número y un carácter especial"
    );
}

function validarConfirmacion() {
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirmPassword");
    return validarCampo(
        confirm,
        confirm.value === password.value && confirm.value !== "",
        "Las contraseñas no coinciden"
    );
}

function validarEdad() {
    const edad = document.getElementById("edad");
    return validarCampo(
        edad,
        parseInt(edad.value) >= 18,
        "Debes ser mayor de 18 años"
    );
}

// Función genérica
function validarCampo(input, condicion, mensaje) {
    const error = input.nextElementSibling;

    if (condicion) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        error.textContent = "";
        return true;
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        error.textContent = mensaje;
        return false;
    }
}

// Validación general
function validarFormulario() {
    const validaciones = [
        validarNombre(),
        validarEmail(),
        validarPassword(),
        validarConfirmacion(),
        validarEdad()
    ];

    submitBtn.disabled = !validaciones.every(v => v);
}

// Eventos en tiempo real
inputs.forEach(input => {
    input.addEventListener("input", validarFormulario);
});

// Envío del formulario
form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Formulario enviado correctamente ✅");
    form.reset();
    submitBtn.disabled = true;
    inputs.forEach(i => i.classList.remove("valid", "invalid"));
});
*/