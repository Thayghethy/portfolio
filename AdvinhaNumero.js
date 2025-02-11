import entradaDados from 'readline-sync';

let num = Math.floor(Math.random()* 100) + 1

let tentativa = 0

console.log("-----ADVINHE O NÚMERO-----\n")
console.log("O programa gerará aleatóriamente um número de 0 a 100\n")
console.log("Tente advinhar o número seguindo as dicas!\n")

function verifica (num, entrada) {
    tentativa++
    if (entrada === num) {
        console.log("Parabéns! Você acertou com "+ tentativa + " Tentativas")
        return true
    } else if (entrada < num) {
        console.log("O número digitado é menor que o número sorteado")
    } else {
        console.log("O número digitado é maior que o número sorteado")
    }
    
    return false
} 

let acertou = false

while (!acertou) {
    let entrada = parseInt(entradaDados.question("Digite um número entre 0 e 100\n"))
    
    if(isNaN(entrada)) {
        console.log ("Por favor, digite um número válido")
        continue
    } acertou = verifica(num,entrada);
}

