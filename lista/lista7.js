// exercico 1
let dia1 = Number(prompt ("Qual é o dia da semana"))
switch(dia1) {
    case 1 :
        console.log("Domingo")
        break
    case 2 :
        console.log("Segunda-feira")
        break
    case 3 :
        console.log("Terça-feira")
        break
    case 4 :
        console.log("Quarta-feira")
        break
    case 5 :
        console.log("Quinta-feira")
        break
    case 6 :
        console.log("Sexta-feira")
        break
     case 7 :
        console.log("Sábado")
        break
    default: 
        console.log("Número inválido.")
}

// exercico 2
let num1 = Number(prompt ("Digite sua idade! (Insira 5, 10, 15, 20 ou 30)"))
switch(num1) {
    case 5 :
        console.log("Infantil A")
        break
    case 10 :
        console.log("Infantil B")
        break
    case 15 :
        console.log("Juvenil A")
        break
    case 20 :
        console.log("Juvenil B")
        break
    case 30 :
        console.log("Adulto")
        break
    default: 
        console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30")
}

// exercico 3
let letra1 = prompt ("Digite seu turno! (Insira M, V OU N.)")
switch(letra1) {
    case "M" :
        console.log("Bom dia!")
        break
    case "V" :
        console.log("Boa tarde!")
        break
    case "N" :
        console.log("Boa noite!")
        break
    default: 
        console.log("Turno inválido. Insira M, V ou N.")
}
// exercico 4
let Number1= Number (prompt ("Digite um numero de 1 a 5 e descubra seu time!!"))
switch(Number1) {
    case 1 :
        console.log("Flamengo")
        break
    case 2 :
        console.log("Fluminenese")
        break
    case 3 :
        console.log("Vasco")
        break
    case 4 :
        console.log("Botafogo")
        break
    case 5 :
        console.log("Nova Iguaçu")
        break
    default: 
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.")
}
// exercico 5
let estação1 = Number (prompt ("Digite um numero (Descubra a estação)"))
switch(estação1) {
    case 1 :
        console.log("Primavera")
        break
    case 2 :
        console.log("Verão")
        break
    case 3 :
        console.log("Outono")
        break
    case 4 :
        console.log("Inverno")
        break
    default: 
        console.log("Estação inválida. Insira um número de 1 a 4.       ")
}
