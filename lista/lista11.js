let filmes = ["Aladdin", "Interestelar", "Homem-Aranha: Sem Volta para Casa"]

console.log(filmes[0])

////////////Exercicio 2
console.log("---------------------------------------------------------")
let fruta = ["Goiaba", "Melancia", "Maça", "Pitaya", "Uva Verde"]

console.log(fruta [2])

////////////Exercicio 3
console.log("---------------------------------------------------------")
let cor = ["Vermelho", "Preto", "Roxo"]
for (let c = 0; c < cor.push(); c++) {
    console.log(cor[c]);
}
console.log("Adicionando no final");
cor.push("Rosa");
console.log(cor);
////////////Exercicio 3
let cores = ["Vermelho", "Azul", "Verde"];
cores.push("Amarelo");
console.log("Array atualizado:");
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

////////////Exercicio 4
console.log("---------------------------------------------------------")
let numeros = [10, 20, 30, 40];
numeros.pop();
console.log("Array atualizado:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

////////////Exercicio 5
console.log("---------------------------------------------------------")
let cidades = ["São Paulo", "Rio de Janeiro"];
cidades.unshift("Curitiba");
console.log("Array atualizado:");
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]);
}

////////////Exercicio 6
console.log("---------------------------------------------------------")
let animais = ["Cachorro", "Gato", "Pássaro"];
animais.shift();
console.log("Array atualizado:");
for (let i = 0; i < animais.length; i++) {
    console.log(animais[i]);
}
////////////Exercicio 7
console.log("---------------------------------------------------------")
let carros = ["Ferrari", "BMW", "Toyota", "Honda"];
console.log("Quantidade de carros:", carros.length);

////////////Exercicio 8
console.log("---------------------------------------------------------")
let numeros1 = [];
numeros1.push(5);
numeros1.push(10);
numeros1.push(15);
numeros1.unshift(20);
numeros1.pop();
numeros1.shift();
console.log("Array final:", numerosArray);
console.log("Tamanho do array:", numerosArray.length);