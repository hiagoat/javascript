// Jogo Pedra, Papel e Tesoura
const escholhaJogador = prompt ("Escolha pedra, papel ou tesoura:")
// Solicita que o usuário informe qual ele quer

const escolhaPC = ["pedra", "papel", "tesoura"] [Math.floor(Math.random() * 3)] 
// Gera uma escolha aleatoria para o computador
// Criamos um array com as opções e usamos o random para escolher uma forma aleatoria
alert(`Você escolheu ${escholhaJogador}`)
alert(`O computador escolheu ${escolhaPC}`)
// Mostrando qual foi a nossa escolha e qual foi a escolha do computador

// Compara se a nossa escolha foi igual a do computador
if (escholhaJogador == escolhaPC){
    alert("Empate")
}else if (escholhaJogador == "pedra" && escolhaPC == "tesoura"){//criamos a primeira verificação de vitoria
    alert("Você venceu")
}else if (escholhaJogador == "tesoura" && escolhaPC == "papel"){//criamos a segunda verificação
    alert("Você venceu")
}else if (escholhaJogador == "papel" && escolhaPC == "pedra"){//criamos a terceira verificação
    alert("Você venceu")
}else {
    alert("Você perdeu")
}
