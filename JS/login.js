const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const registerLink = document.getElementById("register-link");
const loginLink = document.getElementById("login-link");

registerLink.addEventListener("click", () => {
  // quando o register link é clicado
  loginForm.style.display = "none"; // o formulario de login é ocultado
  registerForm.style.display = "block"; // e mostra o formulário de registro
});

loginLink.addEventListener("click", () => {
  // oq o outro faz, só que invertido
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

/* função pro botão de mostrar senha

eu dividi em duas funções: uma pra parte de login e outra pra parte de registro
(estava bugando quando só tinha uma função)
*/

function showPasswordL() {
  var caixaSenha = document.getElementById("passwordLogin");
  if (caixaSenha.type === "password") {
    // Se o tipo for senha
    caixaSenha.type = "text"; // O tipo vai virar "text", pra mostrar a senha
  } else {
    caixaSenha.type = "password"; // Reverte (vice-versa)
  }
}

function showPasswordR() {
  var caixaSenha = document.getElementById("passwordRegister");
  if (caixaSenha.type === "password") {
    caixaSenha.type = "text";
  } else {
    caixaSenha.type = "password";
  }
}

// Validação para o formulário de login
loginForm.addEventListener("submit", function (event) {
  // Impede o envio do formulário antes de validar os campos
  event.preventDefault();

  // Seleciona os elementos do formulário de login (email e senha)
  const emailLogin = document.getElementById("emailLogin");
  const passwordLogin = document.getElementById("passwordLogin");
  const emailLoginError = document.getElementById("emailLoginError");
  const passwordLoginError = document.getElementById("passwordLoginError");

  // Variável que define se os dados são válidos (inicialmente assume que estão corretos)
  let valid = true;

  // Limpa qualquer estilo de erro aplicado anteriormente nos campos de email e senha
  emailLogin.classList.remove("error");
  passwordLogin.classList.remove("error");

  // Validação do email
  if (!validateEmail(emailLogin.value)) {
    // Se o email for inválido, mostra mensagem de erro e adiciona classe de erro no campo
    emailLoginError.textContent = "Email inválido.";
    emailLoginError.classList.add("error-message");
    emailLogin.classList.add("error"); // Adiciona borda vermelha
    valid = false; // Define que os dados não são válidos
  } else {
    // Se o email for válido, limpa a mensagem de erro
    emailLoginError.textContent = "";
  }

  // Validação da senha
  const passwordErrorMessages = validatePassword(passwordLogin.value);
  if (passwordErrorMessages.length > 0) {
    // Se houver mensagens de erro, mostra elas e adiciona a classe de erro no campo
    passwordLoginError.textContent = passwordErrorMessages.join(" ");
    passwordLoginError.classList.add("error-message");
    passwordLogin.classList.add("error"); // Adiciona borda vermelha
    valid = false; // Define que os dados não são válidos
  } else {
    // Se a senha for válida, limpa a mensagem de erro
    passwordLoginError.textContent = "";
  }

  // Se ambos os campos forem válidos, verificar os dados de login
  if (valid) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) =>
        user.email === emailLogin.value && user.password === passwordLogin.value
    );

    if (user) {
      alert("Login efetuado com sucesso!");
      loginForm.submit();
    } else {
      alert("Email ou senha incorretos.");
    }
  }
});

// Função de validação para o formulário de registro
registerForm.addEventListener("submit", function (event) {
  // Impede o envio do formulário antes de validar os campos
  event.preventDefault();

  // Seleciona os elementos do formulário de registro (nome de usuário, email e senha)
  const username = document.getElementById("username");
  const emailRegister = document.getElementById("emailRegister");
  const passwordRegister = document.getElementById("passwordRegister");
  const usernameError = document.getElementById("usernameError");
  const emailRegisterError = document.getElementById("emailRegisterError");
  const passwordRegisterError = document.getElementById(
    "passwordRegisterError"
  );

  // Variável que define se os dados são válidos (inicialmente assume que estão corretos)
  let valid = true;

  // Limpa qualquer estilo de erro aplicado anteriormente
  username.classList.remove("error");
  emailRegister.classList.remove("error");
  passwordRegister.classList.remove("error");

  // Validação do nome de usuário (verifica se está vazio)
  if (username.value.trim() === "") {
    // Se o nome de usuário estiver vazio, exibe mensagem de erro e adiciona classe de erro
    usernameError.textContent = "Nome de usuário é obrigatório.";
    usernameError.classList.add("error-message");
    username.classList.add("error"); // Adiciona borda vermelha
    valid = false; // Define que os dados não são válidos
  } else {
    // Se o nome de usuário for válido, limpa a mensagem de erro
    usernameError.textContent = "";
  }

  // Validação do email
  if (!validateEmail(emailRegister.value)) {
    // Se o email for inválido, exibe mensagem de erro e adiciona classe de erro no campo
    emailRegisterError.textContent = "Email inválido.";
    emailRegisterError.classList.add("error-message");
    emailRegister.classList.add("error"); // Adiciona borda vermelha
    valid = false; // Define que os dados não são válidos
  } else {
    // Se o email for válido, limpa a mensagem de erro
    emailRegisterError.textContent = "";
  }

  // Validação da senha
  const passwordErrorMessages = validatePassword(passwordRegister.value);
  if (passwordErrorMessages.length > 0) {
    // Se houver mensagens de erro, exibe elas e adiciona a classe de erro no campo
    passwordRegisterError.textContent = passwordErrorMessages.join(" ");
    passwordRegisterError.classList.add("error-message");
    passwordRegister.classList.add("error"); // Adiciona borda vermelha
    valid = false; // Define que os dados não são válidos
  } else {
    // Se a senha for válida, limpa a mensagem de erro
    passwordRegisterError.textContent = "";
  }

  // Se todos os campos forem válidos, armazenar os dados no localStorage
  if (valid) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({
      username: username.value,
      email: emailRegister.value,
      password: passwordRegister.value
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro efetuado com sucesso!");
    registerForm.submit();
  }
});

// Função para validar o formato do email utilizando expressão regular
function validateEmail(email) {
  // Expressão regular que define o formato correto do email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email); // Retorna verdadeiro se o email estiver no formato correto
}

// Função para validar a senha e retornar as mensagens de erro
function validatePassword(password) {
  // Critérios para a senha
  const minLength = 8; // A senha deve ter no mínimo 8 caracteres
  const hasUpperCase = /[A-Z]/.test(password); // Deve conter pelo menos uma letra maiúscula
  const hasLowerCase = /[a-z]/.test(password); // Deve conter pelo menos uma letra minúscula
  const hasNumber = /\d/.test(password); // Deve conter pelo menos um número
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Deve conter pelo menos um caractere especial
  const hasNoSpaces = /^\S*$/.test(password); // Não deve conter espaços

  let errorMessages = []; // Array que vai armazenar as mensagens de erro

  // Verifica se a senha atende a cada critério e adiciona as mensagens de erro ao array
  if (password.length < minLength) {
    errorMessages.push("A senha deve ter pelo menos 8 caracteres.");
  }
  if (!hasUpperCase) {
    errorMessages.push("A senha deve incluir pelo menos uma letra maiúscula.");
  }
  if (!hasLowerCase) {
    errorMessages.push("A senha deve incluir pelo menos uma letra minúscula.");
  }
  if (!hasNumber) {
    errorMessages.push("A senha deve incluir pelo menos um número.");
  }
  if (!hasSpecialChar) {
    errorMessages.push(
      "A senha deve incluir pelo menos um caractere especial."
    );
  }
  if (!hasNoSpaces) {
    errorMessages.push("A senha não deve conter espaços.");
  }

  return errorMessages; // Retorna o array com todas as mensagens de erro (se houver)
}

// Tema

// Seleciona todos os checkboxes com a classe 'switch' (no caso, só 1) - (Igor)
const switches = document.getElementsByClassName("switch");

// verifica se o modo escuro está armazenado no localStorage - (Kaique)
const modoEscuroAtivado = localStorage.getItem("modoEscuro") === "true";

// aplica o estado armazenado ao carregar a página (Kaique)
if (modoEscuroAtivado) {
  document.body.classList.add("dark-tema"); // adiciona a classe 'dark-tema' ao body para ativar o modo escuro - (Kaique)

  // Se o checkbox estiver presente na página, atualiza seu estado para ativar o modo escuro - (Kaique)
  Array.from(switches).forEach((switchElement) => {
    switchElement.checked = true; // Marca o checkbox se o modo escuro estiver ativado - (Kaique)
  });
}

// Adiciona um evento de 'change' a cada checkbox - (Igor)
Array.from(switches).forEach((switchElement) => {
  switchElement.addEventListener("change", function () {
    // Alterna a classe no body - (Igor)
    document.body.classList.toggle("dark-tema");

    /* Armazena o estado atual no localStorage - (Kaique)
    O valor armazenado será 'true' se a classe 'dark-tema' estiver presente, caso contrário, será 'false' */
    localStorage.setItem("modoEscuro", document.body.classList.contains("dark-tema"));
  });
});