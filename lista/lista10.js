//////////Exercicio 1
for(let contador = 0; contador <= 30; contador+=1){
    console.log(contador)
}

///////Exercicio 2
console.log("------------------------------------------------------------------")
for(let conta = 30; conta >= 1; conta--){
    console.log(conta)
}
///////Exercicio 3
console.log("------------------------------------------------------------------")
for(let numero = 1;numero <= 5; numero ++ ) {
    let num = Number(prompt("Digite um número"))
    console.log(num)
    if (num >= 50)

    console.log("Acima da Média")
  else
  console.log("Abaixo da média")
}

///////Exercicio 4
console.log("------------------------------------------------------------------")
let tabu = prompt("Fale um número:")
console.log(tabu)
for(let mult = 1; mult <= 10; mult++){
    let resultado = mult * tabu
    console.log(resultado)
}
///////Exercicio 5

let musica = prompt("Digite o número de patinhos")
for (let pato = musica; pato != 0; pato--){
    console.log(pato, "patinhos foram passear")
    console.log("Além das montanhas")
    console.log("Para brincar")
    console.log("A mamãe gritou: Quá, quá, quá, quá")
    console.log("Mas só", pato-1, "patinhos voltaram de lá.")
}
console.log("A mamãe patinha foi procurar")
console.log("Além das montanhas")
console.log("Na beira do mar")
console.log("A mamãe gritou: Quá, quá, quá, quá")
console.log("E os patinhos voltaram de lá.")

///////Exercicio 6
console.log("------------------------------------------------------------------")
for(let idade = 1;idade <= 10; idade ++) {
    let nasc = Number(prompt("Me fale sua idade"))
    console.log(nasc)
    if (nasc >= 10)

    console.log("Maior de Idade")
  else
  console.log("Menor da Idade")
}

///////Exercicio 7
console.log("------------------------------------------------------------------")
for(let voto = 1;voto <= 5; voto ++) {
    let voto1 = Number(prompt("Ta na hora de Votar! Em quem você deseja votar?"))
    console.log(voto1)
    if (voto1 == 1){
        console.log("Nikolas Ferreira")
} else if (voto1 == 2) {
    console.log("Romario")
}else if (voto1 == 3) {
    console.log("Xuxa")
}else if (voto1 == 4) {
    console.log("Bolsonaro")
}else if (voto1 == 5) {
    console.log("Voto Nulo")
}else if (voto1 == 6) {
    console.log("Voto em branco")
}
}



