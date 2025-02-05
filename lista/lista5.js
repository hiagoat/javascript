let idade = prompt("Quase sua Idade?")
let carteira = true
if (idade >= 18 && carteira == true){
    console.log ("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

// Exercicio 2

let anos = prompt("Quantos anos você tem na empresa?")
let projetos = prompt("Quantos projetos você já realizou?")
if (anos >= 5 || projetos >= 10 ){
    console.log ("Você está elegível para promoção")
} else {
    console.log("Você não está elegível para promoção")
}

// Exercicio 3

let acesso = prompt("Qual é a sua idade?")
if (acesso >= 18 && acesso <=30){
    console.log("Você pode entrar!")
}else {
    console.log("Você não pode entrar!")
}


// Exercicio 4

let pessoa = prompt("Diga sua idade")
let experiencia = true
if (pessoa >= 21 && experiencia == true){
    console.log ("Você foi aceito para vaga!")
}else {
    console.log("Você não foi aceito")
}


// Exercicio 5

let usuario = prompt("Digite seu nome")
let senha = prompt ("Digite sua senha")
if (senha = "admin" && senha == 1234){
    console.log ("Login bem-sucedido!")
}else {
    console.log("Nome de usuário ou senha incorretos")
}


// Exercicio 6
let numero = prompt("Digite um número:")
if (numero >= 10  && numero <= 20){
    console.log("O número está dentro do intervalo entre 10 e 20")
}else if (numero >= 30 && numero <= 50) {
    console.log("O número está dentro do intervalo entre 30 e 50")
}else {
    console.log("ele não está dentro do intervalo de 10 e 20 nem 30 e 50")
}

// Exercicio 7 
let num = prompt("Me diga um número")
if (num <10 || num > 100 && num == 50){
    console.log("O número é aceito")
}else {
    console.log("O número não é aceito")
}