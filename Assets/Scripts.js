const starsContainer = document.querySelector('.stars-container');

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${getRandomNumber(0, 100)}vw`;
    star.style.top = `${getRandomNumber(0, 100)}vh`;
    star.style.width = `${getRandomNumber(1, 3)}px`;
    star.style.height = `${getRandomNumber(1, 3)}px`;
    star.style.animationDelay = `${getRandomNumber(0, 2)}s`;
    starsContainer.appendChild(star);
}

document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('background-music');

    // Função para iniciar a música após interação do usuário
    function startMusic() {
        music.play().then(() => {
            console.log('Música iniciada automaticamente.');
        }).catch((error) => {
            console.error('Erro ao iniciar a música:', error);
        });

        // Remover o event listener após a primeira interação
        document.removeEventListener('click', startMusic);
        document.removeEventListener('keydown', startMusic);
    }

    // Iniciar a música após um clique ou pressionamento de tecla
    document.addEventListener('click', startMusic);
    document.addEventListener('keydown', startMusic);
});

function fuja(){
    var botaoNao = document.getElementById("nao")

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";


}