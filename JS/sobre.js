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
    localStorage.setItem(
      "modoEscuro",
      document.body.classList.contains("dark-tema")
    );
  });
});

/*
GRÁFICO: Gênero dos residentes
*/

const dadosGenero = {
  labels: ['Masculino', 'Feminino', 'Não Binário'], // rótulos do gráfico
  datasets: [{
    label: 'Residentes:',
    data: [10, 24, 3], // dados: [masculino, feminino, não binário]
    backgroundColor: ['#4A90E2', '#E94A84', '#50C878'], // cores para as categorias
    hoverOffset: 4 // deslocamento ao passar o mouse por cima das "fatias"
  }]
};

const configGenero = {
  type: 'pie', // tipo do gráfico: torta (grafico de setores, tradicionalmente chamado de gráfico de pizza)
  data: dadosGenero,
  options: {
    responsive: true, // torna o gráfico responsivo
    plugins: {
      legend: {
        position: 'top', // posiciona a legenda no topo
      },
      title: {
        display: true, // mostra o título
        text: 'Distribuição de Gênero dos Residentes',
        font: {
          size: 20
        }
      }
    }
  }
};

const contextoCanvas = document.getElementById('graficoGenero').getContext('2d'); // seleciona o canvas 
const graficoGenero = new Chart(contextoCanvas, configGenero); // cria o gráfico

// grafico atividades --------------------- kaua li malao

  google.charts.load('current',{packages:['corechart']}); // carrega a versao atual (current) e os graficos (corechart)
  google.charts.setOnLoadCallback(drawChart); // funcao callback, quando a biblioteca for carregada, tal funcao (no caso a "grafico") é executada

  function drawChart(){ // funcao que cria o grafico
    const data = google.visualization.arrayToDataTable([ //pega uma array e tranforma em dados do grafico
      ['Residentes', 'Atividade favorita'],
      ['Yoga', 12],
      ['Cardio', 13],
      ['Musica', 6],
      ['Pintura', 6]
    ]); //pega uma array e tranforma em dados do grafico

    const options = {
      title: 'Atividades favoritas dos residentes'
    };

    const construirGrafico = new google.visualization.BarChart(document.getElementById('atividade')); //desenha o grafico

    construirGrafico.draw(data, options)
  };
// grafico regiões - olavio
  // Define os rótulos para as fatias do gráfico (as regiões do Brasil).(Olavio)
const xValues = ["Norte", "Sudeste", "Sul", "Centro-Oeste", "Nordeste"];

// Define os valores associados a cada região, que serão representados no gráfico.(Olavio)
const yValues = [9, 11, 5, 7, 5];

// Define as cores de preenchimento para cada fatia do gráfico.(Olavio)
const barColors = [
  "#b91d47", 
  "#00aba9", 
  "#2b5797", 
  "#006400", 
  "#A0522D"  
];

// Cria um novo gráfico utilizando a biblioteca Chart.js.(Olavio)
new Chart("myChart", {
  type: "doughnut", // Especifica o tipo de gráfico (gráfico de rosca).(Olavio)
  data: {
    // Define os rótulos (as regiões) que aparecerão no gráfico.(Olavio)
    labels: xValues,
    // Define os dados do gráfico, incluindo as cores e os valores das fatias.(Olavio)
    datasets: [{
      backgroundColor: barColors, // Associa as cores às fatias do gráfico.(Olavio)
      data: yValues // Associa os valores numéricos às fatias do gráfico.(Olavio)
    }]
  },
  options: {
    // Configurações adicionais do gráfico.(Olavio)
    title: {
      display: true, // Exibe o título do gráfico.(Olavio)
      text: "Regiões dos Residentes:" // Texto do título que será exibido acima do gráfico.(Olavio)
    }
  }
});