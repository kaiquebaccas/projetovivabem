const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');

registerLink.addEventListener('click', () => {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

loginLink.addEventListener('click', () => {
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

/* vou ver isso amanha, mas é pra mostrar/ocultar senha 

function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.type;
    if (passwordFieldType === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
} */ 