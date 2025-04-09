function mostrarNumero() {
    let teto = document.getElementById("teto").value
    let resultado1 = document.getElementById("resultado1")
    let resultado = document.getElementById("resultado")

    resultado1.innerText = Math.round(teto)
    resultado.innerText = Math.floor(teto) 

    console.log(Math.round(teto))
}

//Ex2
function mostrarNome() {
    let letra = document.getElementById("letra").value
    let primeiro = document.getElementById("primeiro")
    let segundo = document.getElementById("segundo")

    primeiro.innerText = letra.toUpperCase()
    segundo.innerText = letra.toLowerCase() 
}
//Ex3
function mostrarNumeroaleatorio() {
    let numberAleatorio = document.getElementById("numberAleatorio").value
    let numero = document.getElementById("resultado")

    numero.innerText = (Math.random(numberAleatorio)*100)


}
//Ex4
function decimal() {
    let  numero1 = document.getElementById("numero1").value
    let numero2 = (Number(numero2).toFixed(2))
    numero1.innerText = (parseFloat(numero2))


}
//Ex5






