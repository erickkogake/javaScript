const students = ['João','Juliana','Caio', 'Ana']
const notas = [10,7,9,6]

const list = [students,notas]

const studentsAndNotas = (name) => {
    if(list[0].includes(name)) {
        let index = list[0].indexOf(name)
        return `${list[0][index]}, sua média é ${list[1][index]}`
    } else {
        return 'Aluno não está cadastrado'
    }
}

const animals = ['porco', 'passaro', 'leao','papagaio']
const level = ['2','1','9','3']

const lists = [animals,level]

const animalsAndLevel = (level) => {
    if(lists[1].includes(level)){
        let index = lists[1].indexOf(level)
        return `${lists[1][index]} this is level, is of ${lists[0][index]}`
    } else {
        return 'This is animal, dont exist'
    }
}

console.log(animalsAndLevel('3'))

console.log(lists[0].indexOf('passaro'))