let saudacao = function(nome){
    console.log("Oi", nome)
}
saudacao("Juliana")

let cumprimento = (nome) => {
    console.log("Oi", nome)
}
cumprimento("Luiz")
cumprimento("José")
//Função Anonima
let soma = function(a,b) {
    let resultado = a + b
    return resultado
}
console.log(soma(5,3)) 

//Arrow Function
let adicao = (a,b) => {
    let resultado = a + b
    return resultado
}
console.log(adicao(6,4))

//Arrow Function
let vezesDois = (numero) => {
    let resultado = numero * 2
    return resultado
}
console.log(vezesDois(8))