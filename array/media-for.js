const notas = [10,6.5,8,7.5]

let somaDasNotas = 0;

for(let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]
}

let medias = somaDasNotas/notas.length

console.log(medias)

const notas2 = [5,6,10,6,7]
let soma = 0;

for (i = 0; i < notas2.length; i++ ){
    soma += notas2[i]
}

let media = soma/notas2.length

console.log(media)