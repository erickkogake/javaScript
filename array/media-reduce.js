const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaJava= [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

function mediaSala(notas) {
    let medias = notas.reduce((acum, atual) => atual + acum, 0)
    return medias/notas.length
}

console.log(`A média da sala de JavaScript é ${mediaSala(salaJS)}`)

const notas = [10,6.5,8,7]

const totalNotas = notas.reduce((acum, atual) => atual + acum, 0 )/ notas.length
// let mediaNotas = totalNotas/notas.length

console.log(totalNotas)