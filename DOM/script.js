let titulo = document.getElementById("titulo")
console.log(titulo.innerText)
// Documento = Html 
// Get = Pegue
// Element = Elemento
// ById = Pelo ID 
// (Vai no HTML e pegue o elemento pelo ID)

// -----------------------------------------------//
let text = document.getElementById("texto")
texto.innerText = "Texto Alterado"
// Desse jeito trocamos o texto de uma tag
texto.style.color = "blue"
// Usando style podemos mexer no CSS
// -----------------------------------------------//
let botao = document.getElementById("botao")

botao.addEventListener("click", function(){
    alert("botão clicado")
})
// -----------------------------------------------//
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function(){
    duplo.style.backgroundColor = "red"
})
// Só acontece quando clica duas vezes
// -----------------------------------------------//
let passe = document.getElementById("passe")
    passe.addEventListener("mouseover", function(){
    passe.inertText = "o mouse está aqui"
    passe.style.backgroundColor = "yellow"
})//o mouseover é quando o mouse está sobre o elemento
passe.addEventListener("mouseout", function(){
    passe.inertText = "passe o mouse aqui"
    passe.style.backgroundColor = "blue"
    passe.style.fontSize = "16px"
}) //o mouseout é quando o mouse está fora do elemento