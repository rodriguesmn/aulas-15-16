const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
// a) a primeira linha está pedindo ao usuário que digite o primeiro número
// b) se o usuário tivesse digitado 10, seria impresso que o número passou no teste, caso tivesse digitado -10, daria um erro pelo número não definido
// c) sim, haverá erro no console, porque conforme os conceitos de 