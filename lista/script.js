// Exercício 1 - Mudar a cor de um botão
let btn1 = document.getElementById("btn1");
let cor = false;
btn1.addEventListener("click", function() {
    btn1.style.backgroundColor = cor ? "" : "blue";
    cor = !cor;
});

// Exercício 2 - Sistema de likes
let btn2 = document.getElementById("btn2");
let likes = document.getElementById("likes");
let count = 0;
btn2.addEventListener("click", function() {
    count++;
    likes.innerText = count;
});

// Exercício 3 - Amor e ódio
let btn3 = document.getElementById("btn3");
let opiniao = document.querySelectorAll(".opiniao");
btn3.addEventListener("click", function() {
    opiniao.forEach(p => p.innerText = "Eu gosto de JavaScript");
});

// Exercício 4 - Mensagem enviada
let btn4 = document.getElementById("btn4");
let msg = document.getElementById("msg");
btn4.addEventListener("click", function() {
    msg.style.display = "none";
    btn4.innerText = "Mensagem enviada";
});

// Exercício 5 - Ajuste de display
let btn5 = document.getElementById("btn5");
let container = document.getElementById("container");
btn5.addEventListener("click", function() {
    container.style.display = "flex";
    container.style.justifyContent = "space-between";
});

// Exercício 6 - Formas geométricas
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let shape = document.getElementById("shape");
shape.style.width = "200px";
shape.style.height = "200px";
shape.style.backgroundColor = "gray";
btn6.addEventListener("click", function() {
    shape.style.borderRadius = "50%";
});
btn7.addEventListener("click", function() {
    shape.style.borderRadius = "0";
});