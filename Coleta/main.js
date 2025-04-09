//main.js

// Funções Matemáticas
let num = 4.7

//Arredondar números
console.log(Math.round(num)) //inteiro mais proximo
console.log(Math.floor(num)) //arredonda para baixo
console.log(Math.ceil(num)) //arredonda para cima
//Numero Aleatório
console.log(Math.random()) //número aleatório 0 e 1
console.log(Math.random()*10) //número aleatorio 0 e 10

// Funções de String
let texto = "Eu amo javaScript"

//Manipular String

console.log(texto.toLowerCase()) // Deixa tudo maiusculo
console.log(texto.toLowerCase()) // Deixa tudo minusculo
console.log(texto.trim()) // Remove espaços antes e depois do texto

// Localizar texto

console.log(texto.charAt(5)) //mostra a letra que está nessa posição

// Trocar textos
console.log(texto.replace("amo", "adoro"))

//Funções Númericas
let numero = "42.85"
console.log(parseInt(numero))//converte String para número intero
console.log(parseFloat(numero))//converte String para número decimal
console.log(Number(numero).toFixed(1))//



