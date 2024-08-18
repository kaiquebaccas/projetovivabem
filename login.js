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
  if (x.type === "password") { // se o tipo for senha
    x.type = "text"; // o tipo vai virar "text", pra mostrar a senha
  } else {
    x.type = "password"; // vice-versa
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
