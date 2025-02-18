let amigos = ["Carlos", "Joana", "Marcos", "Barbara", "Luan"]

console.log(amigos [3])

for (let i = 0; i < amigos.length; i++){
    console.log(amigos[i])
}



console.log("Remove o primeiro da lista")
amigos.shift()
console.log(amigos)

console("Remove o último da lista")
amigos.pop()
console.log(amigos)

console.log("Adiciona no incio da lista")
amigos.unshift("Tati")
console.log(amigos)