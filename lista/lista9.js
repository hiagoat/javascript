console.log("Exercicio 1: ")
let conta = 1
do{
    console.log(conta)
    conta+=1
}while (conta <= 20)

// Exercicio 2
console.log("Exercicio 2: ")
console.log("--------------------------------")
let opcao;
do {
    opcao = prompt("Você deseja continuar?");
} while (opcao == 's');

// Exercicio 3
let numeroUsuario = prompt("Escolha um número: ");
let numero = 1;

while (numero <= numeroUsuario) {
    console.log(numero);
    numero++;
}

// Exercicio 4
console.log("Exercicio 4: ")
let contador = 1;
do {
    console.log(contador);
    contador += 2;
} while (contador <= 31);

// Exercicio 5
console.log("Exercicio 5: ")
let Num = 1
    do{
        let num1 = Number(prompt("digite um numero"))
        if (num1 > 0){
            console.log("Positivo")
        }
        else if (num1 < 0)
            console.log("negativo")
        else{
            console.log("ZERO")
        }
        num++
    } while (num <= 5)
//Exercicio 6
console.log("Exercicio 6: ")
let 
    do{
         pergunta = prompt("Deseja fazer uma conta? Digite s")
        if (pergunta == "s") {
        let soma = number(prompt("Numero 1"))
        let conta = number(prompt("Numero 2"))
        let resultado = conta + soma
        }
        else {
            console.log("encerrado")
        }
    
    } while(pergunta == "s")