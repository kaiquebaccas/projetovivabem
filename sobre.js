document.getElementById('toggle-tema').addEventListener('click', function() {
    // Alterna a classe no body
    document.body.classList.toggle('dark-tema');
  
    // Seleciona o elemento header e alterna a classe 
    const header = document.querySelector('header');
    header.classList.toggle('dark-tema');
    
    
    // Seleciona o elemento footer e alterna a classe 
    const footer = document.querySelector('footer');
    footer.classList.toggle('dark-tema');
  
    // Seleciona todo o 'content' e alterna a classe 
    const elementos = document.getElementsByClassName('content');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].classList.toggle('dark-tema');
    }
    // Seleciona todo o 'p' e alterna a classe 

    const ps = document.querySelectorAll('p');
    for (let i = 0; i < ps.length; i++) {
        ps[i].classList.toggle('dark-tema');
    }
  });
