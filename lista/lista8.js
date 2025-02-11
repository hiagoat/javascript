let contador = 0
while(contador <= 10){
    console.log(contador)
    contador++
}

////Exercicio 2
console.log("----------------------------------")
let numero = prompt("Digite um numero:")
let multiplicador =1
while (multiplicador <= 10){
    let resultado = numero * multiplicador
    console.log (numero, "x", multiplicador,"=", resultado)
    multiplicador += 1
}
////Exercicio 3
console.log("----------------------------------")
let conta = 10
while (conta >=1){
    console.log(conta)
    conta--
}

/////Exercicio 4
console.log("----------------------------------")
let senha = prompt("Digite sua senha")
while (senha != "12345") {
    senha = prompt("tente novamente")
    if (senha == "12345") {
        console.log("Senha Correta")
    }
}

/////Exercicio 5
console.log("----------------------------------")
let numeros = 50
while (numeros <= 100){
    console.log(numeros)
    numeros+=1
}

/////Exercicio 6
console.log("----------------------------------")
let num = 0
while (num <= 100){
    console.log(num)
    num+=5
}

/////Exercicio 7
console.log("----------------------------------")
let java = 0
while (java < 5){
    console.log("Eu gosto de JavaScript")
    java+=1
}
/////Exercicio 8
console.log("----------------------------------")
let nome = prompt("Digite seu nome:")
let numero1 = prompt ("Digite um numero")
let começo = 0
while (começo < numero1){
    console.log(nome)
    numero1--
}