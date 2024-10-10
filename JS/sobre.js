// Seleciona todos os checkboxes com a classe 'switch'
const switches = document.getElementsByClassName('switch');

// Adiciona um evento de 'change' a cada checkbox
Array.from(switches).forEach(switchElement => {
    switchElement.addEventListener('change', function() {
        // Alterna a classe no body
        document.body.classList.toggle('dark-tema');
    });
});
