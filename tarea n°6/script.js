document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simulando validación de usuario y contraseña
    if (username === "admin" && password === "1234") {
        message.textContent = "Ingreso correcto!";
        message.style.color = "green";
        
        // Simular envío de correo (No se puede hacer realmente sin un backend)
        console.log(`Se ha ingresado ${username} a la página web.`);
        
        // Redirigir a la página principal (Página 2)
        setTimeout(() => {
            window.location.href = "pagina2.html"; // Cambia esto al nombre de tu página principal
        }, 1500);
    } else {
        message.textContent = "Ingreso incorrecto. Por favor verifique sus datos.";
        message.style.color = "red";
    }
});
