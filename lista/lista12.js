function JavaScript() {
    console.log ("Eu gosto de JavaScript")
}
JavaScript()

/////Exercicio 2
function contarAteCinco(){
    for(let c = 1 ; c <= 5; c++){
        console.log(c)
    }
}

contarAteCinco()
/////Exercicio 3
function saudacao (){
    console.log("Olá, Pedro Hiago! Seja bem-vindo(a)!")
}
saudacao ()

/////Exercicio 4
function multiplicarDoisNumeros(a,b){
    let multiplicarDoisNumeros = a * b
    return multiplicarDoisNumeros
}
console.log(multiplicarDoisNumeros(5, 3))

/////Exercicio 5
function  verificarIdade (){
    let idade = prompt("Digite sua idade")
    if (idade >= 18){
        console.log("Maior de idade")
    }else {
        console.log("Menor de idade")
    }
}
verificarIdade ()

/////Exercicio 6
function somar() {
    let a = Number(prompt("Digite o primeiro número"));
    let b = Number(prompt("Digite o segundo número"));
    let resultado = a + b;
    return resultado;
}
console.log(somar());

/////Exercicio 7
function calcularAreaRetangulo() {
    let a = Number(prompt("Digite o valor da base do retângulo"));
    let l = Number(prompt("Digite o valor da altura do retângulo"));
    let resultado = l * a;
    return resultado;
}
console.log(calcularAreaRetangulo());

// Exercicio 8
function compararIdade(idade1, idade2) {
    if (idade1 > idade2) {
        return "A primeira pessoa é mais velha.";
    } else if (idade1 < idade2) {
        return "A segunda pessoa é mais velha.";
    } else {
        return "Ambas as pessoas têm a mesma idade.";
    }
}

console.log(compararIdade(25, 30));  
console.log(compararIdade(40, 40));  
console.log(compararIdade(50, 45));  




    
    


