const clientes = {
    name: 'João',
    age: 35,
    CPF: '43270698845',
    fones: ['978114846', '962614665']
}

clientes.dependent = {
    name: 'Eric',
    age:20,
    parent:'sobrinho'
} 

console.log(clientes)

clientes.dependent.name = "Carlos"
console.log(clientes)