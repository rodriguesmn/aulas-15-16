const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
// a)  código realiza o teste de dividir somente até onde ele suporta
// b) ele imprime que passou no teste somente quando números pares são inseridos
// c) ele imprime que não passou no teste somente quando números ímpares são inseridos