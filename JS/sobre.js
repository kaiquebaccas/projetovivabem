// Seleciona todos os checkboxes com a classe 'switch'
const switches = document.getElementsByClassName('switch');

// Adiciona um evento de 'change' a cada checkbox
Array.from(switches).forEach(switchElement => {
    switchElement.addEventListener('change', function() {
        // Alterna a classe no body
        document.body.classList.toggle('dark-tema');

        // Seleciona o elemento header e alterna a classe
        const header = document.querySelector('header');
        header.classList.toggle('dark-tema');

        // Seleciona o elemento footer e alterna a classe
        const footer = document.querySelector('footer');
        footer.classList.toggle('dark-tema');

        // Seleciona o parágrafo e alterna a classe
        const paragrafo = document.querySelector('p');
        paragrafo.classList.toggle('dark-tema');

        // Seleciona as Redes Sociais
        const redessociais = document.getElementsByClassName('socialContainer');
        redessociais.classList.toggle('dark-tema');
    });
});
