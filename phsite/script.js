// Exercício 1 - Ocultar Imagem
function ocultarImagem() {
    const img = document.getElementById('minhaImagem');
    img.style.display = img.style.display === 'none' ? 'block' : 'none';
}

// Exercício 2 - Tema escuro
function alternarTema() {
    const corpo = document.body;
    corpo.style.backgroundColor = corpo.style.backgroundColor === 'black' ? 'white' : 'black';
    corpo.style.color = corpo.style.color === 'white' ? 'black' : 'white';
}

// Exercício 3 - Completar texto
function completarTexto() {
    const texto = "Meu nome é Pedro Hiago, tenho 16 anos, moro em Suzano, estudo no Senai e faço o curso de Desenvolvimento de sistemas.";
    document.getElementById('completo').innerText = texto;
}

// Exercício 4 - Cores do Brasil
let indiceCor = 0;
const cores = ['green', 'yellow', 'blue'];
function trocarCor() {
    document.getElementById('brasil').style.color = cores[indiceCor];
    indiceCor = (indiceCor + 1) % cores.length;
}

// Exercício 5 - Não clique
document.getElementById('botaoNaoClique').addEventListener('click', function() {
    alert('Pare de clicar no botão!');
});

// Exercício 6 - Escolha premiada
function escolherPremio(porta) {
    let mensagem = '';
    let imagemSrc = '';
    if (porta === 1) {
        mensagem = 'Você ganhou um carro!';
        imagemSrc = 'https://via.placeholder.com/150?text=Carro';
    } else if (porta === 2) {
        mensagem = 'Você não ganhou nada!';
        imagemSrc = 'https://via.placeholder.com/150?text=Caixa+Vazia';
    } else {
        mensagem = 'Parabéns, você encontrou o tesouro!';
        imagemSrc = 'https://via.placeholder.com/150?text=Tesouro';
    }
    alert(mensagem);
    document.body.insertAdjacentHTML('beforeend', `<img src="${imagemSrc}" alt="Premio">`);
}

// Exercício 7 - Redimensionar imagem
function redimensionarImagem() {
    const img = document.getElementById('imagemRedimensionar');
    const tamanhoAleatorio = Math.floor(Math.random() * (300 - 20 + 1)) + 20;
    img.style.width = `${tamanhoAleatorio}px`;
    img.style.height = `${tamanhoAleatorio}px`;
}

// Exercício 8 - Semáforo
let passoSemaforo = 0;
function mudarSemaforo() {
    const luzes = ['luz1', 'luz2', 'luz3'];
    const cores = ['red', 'yellow', 'green'];
    const mensagens = ['PARE', 'ATENÇÃO!', 'PODE IR!'];

    for (let i = 0; i < 3; i++) {
        document.getElementById(luzes[i]).style.backgroundColor = 'black';
    }

    const luzAtual = document.getElementById(luzes[passoSemaforo]);
    luzAtual.style.backgroundColor = cores[passoSemaforo];
    alert(mensagens[passoSemaforo]);

    passoSemaforo = (passoSemaforo + 1) % 3;
}

// Exercício 9 - Recomendação de filme

function mostrarImagem(genero) {
    document.getElementById(`imagem${genero.charAt(0).toUpperCase() + genero.slice(1)}Hover`).style.display = 'block';
    document.getElementById(`imagem${genero.charAt(0).toUpperCase() + genero.slice(1)}`).style.display = 'none';
}

function ocultarImagem(genero) {
    document.getElementById(`imagem${genero.charAt(0).toUpperCase() + genero.slice(1)}Hover`).style.display = 'none';
    document.getElementById(`imagem${genero.charAt(0).toUpperCase() + genero.slice(1)}`).style.display = 'block';
}

