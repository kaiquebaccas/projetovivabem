const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const registerLink = document.getElementById("register-link");
const loginLink = document.getElementById("login-link");

registerLink.addEventListener("click", () => { // quando o register link é clicado
  loginForm.style.display = "none"; // o formulario de login é ocultado
  registerForm.style.display = "block"; // e mostra o formulário de registro
});

loginLink.addEventListener("click", () => { // oq o outro faz, só que invertido
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

/* função pro botão de mostrar senha

eu dividi em duas funções: uma pra parte de login e outra pra parte de registro
(estava bugando quando só tinha uma função)
*/

function showPasswordL() {
  var x = document.getElementById("passwordLogin");
  if (x.type === "password") { // Se o tipo for senha
    x.type = "text"; // O tipo vai virar "text", pra mostrar a senha
  } else {
    x.type = "password"; // Reverte (vice-versa)
  }
}

function showPasswordR() {
  var x = document.getElementById("passwordRegister");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

document.getElementById('register-form').addEventListener('submit', function(event) {
  // Prevenir o envio do formulário como padrão.
  event.preventDefault();

  // Obter os valores
  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('passwordRegister').value.trim();

  // Validar nome de usuário
  if (username === '' || username.length < 3) {
      alert('O nome de usuário deve ter pelo menos 3 caracteres.');
      return;
  }

  // Validando a senha para que tenha ao menos 4 caracteres.
  if (password === '' || password.length < 4) {
      alert('A senha deve ter pelo menos 4 caracteres.');
      return;
  }

  // Se todas as validações passarem, enviar o formulário
  this.submit();
});


document.getElementById('toggle-tema').addEventListener('click', function() {
  // Alterna a classe no body
  document.body.classList.toggle('dark-tema');

  // Seleciona o elemento header e alterna a classe 
  const header = document.querySelector('header');
  header.classList.toggle('dark-tema');
  
  
  // Seleciona o elemento footer e alterna a classe 
  const footer = document.querySelector('footer');
  footer.classList.toggle('dark-tema');

  // Seleciona todo o 'content' e alterna a classe 
  const elementos = document.getElementsByClassName('content');
  for (let i = 0; i < elementos.length; i++) {
      contentElements[i].classList.toggle('dark-tema');
  }

  const p = document.querySelector('p');
  p.classList.toggle('dark-tema')
});