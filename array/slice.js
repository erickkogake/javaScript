let nomes = ['joao', 'juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']
const sala1 = nomes.slice(0,10)
const sala2 = nomes.slice(10,20)

console.log(sala1)
console.log(sala2)

nomes.shift()
console.log(nomes.slice(0,2))

nomes.unshift('Jo')
console.log(nomes.slice(0,2))