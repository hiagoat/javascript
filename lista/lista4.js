let idade = 40
if (idade <= 12) {
    console.log("Criança")
}else if (idade <= 17){
    console.log("Adolescente")
}else if (idade <= 59){
    console.log("Adulto")
}else if (idade >= 60) {
    console.log("Idoso")
}

// Exercicio 2

let graus = 20
if (graus <= 10) {
    console.log("Muito Frio")
}else if (graus<= 20){
    console.log("Frio")
}else if (graus <= 30){
    console.log("Agradável")
}else if (graus >= 30){
    console.log("Muito Quente")
}

// Exercicio 3

let horario = "n"
if (horario == "m") {
    console.log("Bom dia!")
}else if (horario == "v"){
    console.log("Boa tarde!")
}else if (horario  == "n"){
    console.log("Boa noite!")
}else {
    console.log("Turno inválido")
}

// Exercicio 4

let resultado = 900
if (resultado <= 100) {
    console.log("Desconto de 5%")
}else if (resultado <= 200){
    console.log("Desconto de 10%")
}else if (resultado > 200){
    console.log("Desconto de 15%")
}



// Exercicio 5

let nota = 75
if (nota >= 90 ) {
    console.log("A")
}else if (nota >=80 ){
    console.log("B")
}else if  (nota >= 70){
    console.log("C")
}else if  (nota >= 60){
    console.log("D")
}else if  (nota < 60){
    console.log("F")
}


// Exercicio 6

let dia = 5
if (dia == 1 ) {
    console.log("Domingo")
}else if (dia == 2){
    console.log("Segunda-feira")
}else if  (dia == 3){
    console.log("Terça-feira")
}else if  (dia == 4){
    console.log("Quarta-feira")
}else if  (dia == 5){
    console.log("Quinta-feira")
}else if  (dia == 6){
    console.log("Sexta-feira")
}else if  (dia == 7){
    console.log("Sábado")
}

// Exercicio 7

let corrida = 900
if (corrida<= 400) {
    console.log("Pista curta")
}else if (corrida <= 800){
    console.log("Pista média")
}else if (corrida <= 1500){
    console.log("Pista longa")
}else if (corrida > 1500){
    console.log("Pista muito longa" )
}

// Exercicio 8

let pontuacao = 14569
if (pontuacao <= 1000) {
    console.log("Iniciante")
}else if (pontuacao <= 5000){
    console.log("Intermediário")
}else if (pontuacao <= 10000){
    console.log("Avançado")
}else if (pontuacao > 10000){
    console.log("Mestre")
}