const nombre = document.getElementById("name");
const pass = document.getElementById("password");
const email = document.getElementById("email");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if (nombre.value.length < 3) {
        warnings += `El nombre debe ser mayor a 3 caracteres <br>`;
        entrar = true;
    }
    console.log(regexEmail.test(email.value));
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if (pass.value.length < 6) {
        warnings += `La contraseña debe ser mayor a 6 caracteres <br>`;
        entrar = true;
    }
    if (entrar) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado correctamente";
    }
})