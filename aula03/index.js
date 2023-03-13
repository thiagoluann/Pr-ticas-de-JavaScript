//1) Peça para o usuario digitar um valor e mostre o cubo daquele valor.

const n1 = parseInt(prompt("Digite um valor que vai ser elevado ao cubo:"))
let cubo = Math.pow(n1, 3)
console.log(`Numero ao cubo: ${cubo}`)

//2) Peça para o usuario digitar outro valor e mostre a raiz daquele valor.

const n2 = parseInt(prompt('Digite um numero e mostre a raiz quadrada dele:'))
let raiz = Math.sqrt(n2)
console.log(`Raiz quadrada do numero: ${raiz}`) 

//3) Considerando um vetor, retorne o maior e o menor valor desse vetor

const vet = [9,0,8,1,7,190,12,87,-10,-200,14,1]
alert(Math.max(...vet))
alert(Math.min(...vet))
