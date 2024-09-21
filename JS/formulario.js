let form = document.querySelector('#parametros');
let inputs = document.querySelector('.tudo');

let titulo = document.querySelector('#titulo');
let desc = document.querySelector('#desc');

if(window.location.href.charAt(window.location.href.search('html')+4)=='?') {
    inputs.style.display="none";

    titulo.innerHTML= "Enviado com sucesso!"
    desc.innerHTML= "Ficamos gratos em poder ajudar com a qualidade do envelhecimento da sua família!"
}

document.getElementById('toggle-tema').addEventListener('click', function() {
    // Alterna a classe no body
    document.body.classList.toggle('dark-tema');
  
    // Seleciona o elemento header e alterna a classe 
    const header = document.querySelector('header');
    header.classList.toggle('dark-tema');
  
    const p = document.querySelector('p');
    p.classList.toggle('dark-tema')

    const desc = document.querySelector('desc')
    desc.classList.toggle('dark-tema')
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