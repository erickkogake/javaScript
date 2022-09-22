const clientes = {
    name: 'João',
    age: 35,
    CPF: '43270698845',
    fones: ['978114846', '962614665'],
    dependent: [{
        name: 'Eric',
        age:20,
        parent:'sobrinho'
    }]
}

clientes.dependent.push({
    name: 'Jonas',
    age:23,
    parent:'Tio'
},{
    name: 'Camilo',
    age:26,
    parent:'Tio Avô'
})

// clientes.dependent.forEach(element => {
//     console.log(element)
// });

console.log(clientes.dependent)
console.log(clientes)