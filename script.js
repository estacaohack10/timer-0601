let paragrafo = document.querySelector('#timer');
let main = document.querySelector('main');
let section = document.querySelector('section');
let botaoComecar = document.querySelector('button');
let inputTempo = document.querySelector('input');
let tempoTotal = 30;
let valorIntervalo;

const corAleatoria = () => {
    let r = gerarAleatorio(0, 255);
    let g = gerarAleatorio(0, 255);
    let b = gerarAleatorio(0, 255);

    return `rgb(${r}, ${g}, ${b})`;
}

const atualizarParagrafo = (valor) => {    
    paragrafo.style.color = corAleatoria();
    paragrafo.innerHTML = `${valor}`;
};

const diminuirTempo = () => {
    if (tempoTotal > 0) {
        tempoTotal --;
        main.style.backgroundColor = corAleatoria();
        atualizarParagrafo(tempoTotal);
    }
    else {
        atualizarParagrafo(tempoTotal);
        clearInterval(valorIntervalo);
    }
}

const comecarTimer = () => {
    tempoTotal = Number(inputTempo.value);
    section.style.display = 'none';
    main.style.display = 'flex';
    atualizarParagrafo(tempoTotal);
    valorIntervalo = setInterval(diminuirTempo, 1000);
}

botaoComecar.onclick = comecarTimer;