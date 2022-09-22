const persons = [{
    name: 'João',
    age: 35,
    CPF: '43270698845',
    fones: ['978114846', '962614665'],
    dependent: [
        { name: 'Eric', age: 20, parent: 'sobrinho' }
    ], 
},{
    name: 'Roberto',
    age: 33,
    CPF: '43270698899',
    fones: ['978114899', '962614644'],
    dependent: [
        { name: 'Julio', age: 22, parent: 'sobrinho' }
    ], 
}]

const listDepends = [...persons[0].dependent, ...persons[1].dependent]

console.log(listDepends)