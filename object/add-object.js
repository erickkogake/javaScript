const clientes = {
    name: 'João',
    idade: 35,
    CPF: '43270698845',
}

clientes.endereco = 'R. Nagasaki' 

console.log(clientes)

clientes.endereco = 'R. João Barbosa'

console.log(clientes)

delete clientes.idade 

console.log(clientes)

const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

 pessoa.cpf=("15346626522-65").substring(0,4)
 pessoa.seguroSocial=("854321985-9").substring(0,4)

 console.log(pessoa)