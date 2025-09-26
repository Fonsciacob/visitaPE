import { usersData } from '../data/users.js';

const form = document.getElementById('loginForm');

// Función para validar credenciales
function validateLogin(email, password) {
    return usersData.users.find(user => 
        user.username === email && user.password === password
    );
}

// Función para simular guardado de sesión
function saveUserSession(user) {
    const userSession = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        username: user.username,
        loginTime: new Date().toISOString()
    };
    
    // Simular localStorage (en un entorno real)
    try {
        localStorage.setItem('userSession', JSON.stringify(userSession));
        localStorage.setItem('isLoggedIn', 'true');
    } catch (e) {
        // Fallback si localStorage no está disponible
        console.log('Sesión guardada:', userSession);
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    
    const email = formData.get('email');
    const password = formData.get('password');

    const user = validateLogin(email, password);

    if (user) {
        saveUserSession(user)
        console.log('Login successful:', user);
        window.location.href="../index.html";
    }
})