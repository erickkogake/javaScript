const names = ['joao', 'caio', 'lucas', 'jo']

// names.forEach(name => {
//     console.log(name)
// })

const room = (nome) => {
    console.log(nome)
}

names.forEach(room)

const notas = [10, 9, 8, 7, 6]
const notasAtualizadas = notas.map(nota =>
    nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)