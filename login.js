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