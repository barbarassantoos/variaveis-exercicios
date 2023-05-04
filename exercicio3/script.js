// Este é um cadastro de pessoas 

let nome = prompt ("Qual é o seu nome completo?")
let nascimento = prompt ("Qual a sua data de nascimento?")
let endereco = prompt ("Qual o seu endereço?")
const CPF = Number (prompt ("CPF?"))
let escolaridade = prompt ("Qual a sua escolaridade?")
let CNH = prompt ("Possui CNH?")
let filhos = Number (prompt ("Quantos filhes possui?"))
let cargo = prompt ("Qual seu cargo atual?")
let salario = Number (prompt ("Qual o seu salário?"))
let comissao = confirm ("Você recebe comissão?  aperte em confirme, caso não, clique em cancel")
let dataAdmissao = Number (prompt("Informe o ano de admissão"))

console.log(nome, nascimento, CPF, escolaridade, CNH, filhos, cargo, salario, dataAdmissao)

console.log(typeof nome)
console.log(typeof nascimento)
console.log(typeof CPF)
console.log(typeof escolaridade)
console.log(typeof CNH)
console.log(typeof filhos)
console.log(typeof cargo)
console.log(typeof salario)
console.log(typeof comissao);
console.log(typeof dataAdmissao)

