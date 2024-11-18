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
    autoPlayInterval = setInterval(nextSlide, 3000); // 3 segundos
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

// espera até que todo o documento seja carregado

document.addEventListener('DOMContentLoaded', ()=>{

// POP-UP
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

var map = L.map('map').setView([-24.008191441703165, -46.43461477726323], 18); //Define o ponto central do mapa (-24.008191441703165, -46.43461477726323) e o Zoom que será dado nesse ponto (18)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); //Faz com que os Tiles (Pedaços quadrados de imagens) se posicionem de forma coordenada

var marcador = L.marker([-24.008191441703165, -46.43461477726323]).addTo(map) //Cria um marcador (Aquela seta)
    .bindPopup('Clínica Viva Bem') // Cria um popup ativado ao clique que mostra o texto "Clínica Viva Bem"
    .openPopup(); //Abre o PopUp como padrão


    // Aqui vou começar a escrever o código do buscador de endereço através do CEP

    const busca = document.getElementById('buscarEndereco');
    const cep = document.getElementById('CEP');
    const lograd = document.getElementById('Logradouro');
    const bairro = document.getElementById('Bairro');
    const local = document.getElementById('Cidade');
    const uf = document.getElementById('Estado');
    const alerta = document.getElementById('alerta');
    const card = document.getElementsByClassName('consultarCep');


    busca.addEventListener('click', function(event){ //pega o botao e executa a funçao qnd o botao é apertado
      event.preventDefault(); //serve para a pagina nao recarregar quando o form for submitado
      cep.value = cep.value.replace(/\D/g, ""); //isso aqui só tira oque nao for numero, uma mini validação

      if(cep.value){ //se cep tiver algum valor
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`) //fetch faz request no servidor da API, q no caso é a viacep
        .then(response => response.json()) //pega a response da request e puxa o json da responde, p vir no formato de obj js
        .then(end => {
          if(!end.erro){ //se nao der erro, ele transforma o valor das const dos inputs no valor fornecido pelo servidor
            lograd.value = end.logradouro;
            bairro.value = end.bairro;
            local.value = end.localidade;
            uf.value = end.uf;

            //os outros inputs se habilitam para o caso do user precisar editar alguma informação
            lograd.disabled = false; 
            bairro.disabled = false; 
            local.disabled = false; 
            uf.disabled = false; 

          } else {
            alerta.style.display = 'block';
          }
        }
        )
        .catch(error => { //se der erro ao entrar em contato com a API
          console.error(error);
        }); 
      } else { //se cep n tiver valor
        alerta.style.display = 'block';
      }
    });



const xArray = ["60-69", "70-79", "80-89", "90-99"];
const yArray = [11, 2, 20, 4];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255,0.6)"}
}];

const layout = {title:"Faixa Etária dos Residentes"};

Plotly.newPlot("grafico", data, layout);
