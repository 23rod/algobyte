document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulación de autenticación simple
    if (username === 'usuario' && password === 'contraseña') {
        localStorage.setItem('loggedIn', 'true');
        alert('Inicio de sesión exitoso');
        window.location.href = '../'; // Redirigir a la página de cursos
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
