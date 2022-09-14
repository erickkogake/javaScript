const notas = [10, 6.5, 8, 7.5]

let soma = 0;

notas.forEach(nota => {
    soma = soma + nota
})

let media = soma / notas.length

console.log(media)

const salas = [32, 35, 40, 55, 60]
let somas = 0;

salas.forEach(num => {
    somas += num
})

let mediaSala = somas / salas.length
console.log(mediaSala)

