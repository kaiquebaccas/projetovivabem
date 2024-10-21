let form = document.querySelector('#parametros');
let inputs = document.querySelector('.tudo');

let titulo = document.querySelector('#titulo');
let desc = document.querySelector('#desc');

if(window.location.href.charAt(window.location.href.search('html')+4)=='?') {
    inputs.style.display="none";

    titulo.innerHTML= "Enviado com sucesso!"
    desc.innerHTML= "Ficamos gratos em poder ajudar com a qualidade do envelhecimento da sua família!"
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

document.addEventListener('DOMContentLoaded', function() {
    const telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('input', function(e) {
        // não permite que letras sejam colocadas
        let inputValue = e.target.value.replace(/\D/g, '');

        // adiciona a máscara
        if (inputValue.length > 10) {
            inputValue = inputValue.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        } else if (inputValue.length > 5) {
            inputValue = inputValue.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');
        } else if (inputValue.length > 2) {
            inputValue = inputValue.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
        } else if (inputValue.length > 0) {
            inputValue = inputValue.replace(/^(\d{2})/, '($1)');
        }

        e.target.value = inputValue;
    });
});

