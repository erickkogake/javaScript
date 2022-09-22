const persons = {
    name: 'João',
    age: 35,
    CPF: '43270698845',
    fones: ['978114846', '962614665'],
    dependent: [
        { name: 'Eric', age: 20, parent: 'sobrinho' },
        { name: 'Jonas', age: 23, parent: 'Tio' },
        { name: 'Camilo', age: 26, parent: 'Tio Avô' }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    },
    sacar: function(valor){
        this.saldo -= valor;
    } 
}

persons.depositar(150)

console.log(persons.saldo)

persons.sacar(50)

console.log(persons.saldo)