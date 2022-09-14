// notas 10,7,8,5,10 

const notas = [10,7,8,5,10]
notas.pop()

console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)

let notass = [5,4]

let medias = notas.concat(notass)

console.log(medias)
