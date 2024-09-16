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
    
    // Seleciona o elemento footer e alterna a classe 
    const footer = document.querySelector('footer');
    footer.classList.toggle('dark-tema');
  
    const p = document.querySelector('p');
    p.classList.toggle('dark-tema')
  });