function comparaNumeros(num1, num2){
    //const resultado = num1 === num2
    //if (resultado)
    if (num1 === num2){
        return 'são iguais.'
    } else if (num1 < num2) {
        return 'é menor.'
    } else (num1 > num2); {
        return 'é maior.'
    }
    
}
let n1 = prompt("Digite um número.")
let n2 = prompt("Digite outro número.")
comparaNumeros(Number(n1), Number(n2))
let compara = comparaNumeros(n1, n2)
console.log (compara)