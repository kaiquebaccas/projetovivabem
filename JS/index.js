document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;
  let autoPlayInterval;

  function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 3000); // 3 segundos pra mim ta bom
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  document
    .querySelector(".carousel-control-next")
    .addEventListener("click", function () {
      nextSlide();
    });

  document
    .querySelector(".carousel-control-prev")
    .addEventListener("click", function () {
      prevSlide();
    });

  const carousel = document.getElementById("carrossel");

  carousel.addEventListener("mouseover", function () {
    stopAutoPlay();
  });

  carousel.addEventListener("mouseout", function () {
    startAutoPlay();
  });

  startAutoPlay();
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

  const p = document.querySelector('p');
  p.classList.toggle('dark-tema')
});

// espera até que todo o documento seja carregado

document.addEventListener('DOMContentLoaded', ()=>{

// POP-UP ---------------------------------------------------------------------------------------
const popup = document.getElementById('cookieDialog');
const novamente = document.getElementById('novamente');
const fechar = document.getElementById('fechar');
const tudo = document.getElementById('modal');

// define cookies

function setcookie(name, value, days){
      // define a data de expiração e converte pro formato universal
  const date = new Date();
  date.setTime(date.getTime + (days * 24 * 60 * 60 * 1000)); //date.SETTime define a data e a hora (em milisegundos desde 1970). date GET Time define a data atual em milissegundos desde 1970
 // days * tanana calcula em milissegundos os dias fornecidos para expirar o cookie
  let expira = 'expires=' + date.toUTCString();
      // cria a string que define o cookie com nome, valor e data de expiração
  document.cookie = name + '=' + (value || '') + ';' + expira + ";path=/" //path indica que é valido em todo caminho começado com "/", ou seja, o site todo

}

function getcookie(name){
  let nomeIgual = name + "="

  let arrayCookie = document.cookie.split(';') // divide cada cookie como uma posição na array, usando ';' pra delimitar

  for(x = 0; x < arrayCookie.length; x++) //ou seja, para cada cookie na array de cookies
  {
    let cookie = arrayCookie[x];

    while(cookie.charAt(0) === ' ') //enquanto a primeira letra de cookie for vazia, ...
    {
      cookie = cookie.substring(1) // cookie vai valer ele mesmo, sem a posição 0, para evitar espaços vazios antes de ';'
    };

    if(cookie.indexOf(nomeIgual) === 0) // se nameehigual for encontrado em cookie na posição 0, ou seja, se os nomes forem os mesmos, ...
      {
        return cookie.substring(nomeIgual.length, cookie.length) // retorna o valor do cookie, que é a substring cortando a parte que eles são os mesmos até o final de cookie
      }

      return null; // se nada disso acontecer, e o cookie n existir, retorna nula

  }

}

function checkcookie(){
  const popupAtivado = getcookie('popupShown') //busca o valor retornado pela getcookie, 'popupShown' se for encontrado ou null se não, e armazena esse valor na popupado

  if(popupAtivado === 'true') // se popupado encontrou valor true
  {
    return; //não mostra o popup, pq o usuario ja optou por não ve-lo
  }
  popup.showModal();          //\
  tudo.style.display = 'block'; // \___ se não, exibe o popup e o "tudo", que cria um fundo atrás dele

}

function fecharpopup(){
  if(novamente.checked) //se a caixinha estiver selecionada
    {
    setcookie('popupShown', 'true', 365) // define um cookie com o nome popupshown e o valor true
  }
  popup.close();                // fecha o popup
  tudo.style.display = 'none'; // fecha o tudo
}

  checkcookie(); // chama a função checkcookie quando a pág é carregada

  fechar.addEventListener('click', fecharpopup); // ao clicar no butao p fechar, ele fecha (só garantindo que vou explicar tudo)


});