const alunos = ['Ana', 'Marcos', 'Maria','Mauro']
const notas = [7,4.5,8,7.5]

const reprovados = alunos.filter((student,index) => notas[index] < 5) // no caso do filter, que não precisa ser chamado, podemos colocar '_' que ele vai saber que tem uma função.

console.log(reprovados)


const books = [10,5,8,9,4,3]
const names = ['João','Carlos', 'Victor','Gih','Kenji','Bruna']

const quantBooks = books.filter((_,index) => names[index] == 'João')
const bookas = books.filter(_ => _ == 7 || _==8)
console.log(quantBooks)
console.log(bookas) 