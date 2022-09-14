const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

nomes.splice(1,2, 'Rodrigo') //ao invés de incluir um nome na lista com .push(), posso incluir dentro do splice depois que retirado os indíces.
// nomes.push('Rodrigo')
console.log(nomes)

nomes.splice(1,0)
console.log(nomes)