function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio)

    if (elemento === null){
        alert('elemento não encontrado')
    }
    
    if (elemento != null && elemento.localName ==='audio'){
        elemento.play()
    }
}

const lista_teclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < lista_teclas.length; cont++) {

    const tecla = lista_teclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown =  function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    };
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    };

};
