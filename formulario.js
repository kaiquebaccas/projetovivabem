let form = document.querySelector('#parametros');
let inputs = document.querySelector('.tudo');

let titulo = document.querySelector('#titulo');
let desc = document.querySelector('#desc');

if(window.location.href.charAt(window.location.href.search('html')+4)=='?') {
    inputs.style.display="none";

    titulo.innerHTML= "Enviado com sucesso!"
    desc.innerHTML= "Ficamos gratos em poder ajudar com a qualidade do envelhecimento da sua família!"
}