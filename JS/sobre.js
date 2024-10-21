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