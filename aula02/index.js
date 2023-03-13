/*
1) PEÇA PARA O USUÁRIO DIGITAR SEU NOME  COMPLETO

2) PEÇA PARA O USUÁRIO DIGITAR O ANO DE NASCIMENTO

3) PEÇA PARA O USUÁRIO DIGITAR O SEU SALÁRIO MENSAL EM REAIS

4) PEÇA PARA O USUÁRIO DIGITAR A QUANTIDADE FILHOS QUE TEM

5) EXIBA NO CONSOLE E NA TELA A SEGUINTE MENSAGEM:
"Olá, Fulano, tudo bem?
Você tem X anos de idade, seu salário é R$ Y e receberá R$ Z até se aposentar.
Caso você deseje dividir seu salário entre os seus filhos, dará R$ W para cada um.
“Fulano” deve ser substituído pelo nome digitado;
“X” deve ser substituído pela idade;
“Y” deve ser substituído pelo salário (com duas casas decimais);
“Z” é o valor total que o usuário receberá até se aposentar, com duas casas decimais (considere 70 anos como a idade de se aposentar) ;
“W” é o valor do salário dividido pela quantidade de filhos digitadas, com duas casas decimais (considere que o usuário tem 1 ou mais filhos).
*/

const nome = prompt("Digite seu nome completo")
const anoNascimento = parseInt(prompt("Nascimento:"))
const salarioMensal = parseFloat(prompt("Digite o seu salario mensal em R$"))
const qtdtFilhos = parseInt(prompt("Digite a quantidade de filhos que voce tem"))
const idade = 2023 - anoNascimento
const aposentadoria = ((70 - idade) * 12) * salarioMensal
const divFilhos = salarioMensal / qtdtFilhos

console.log(`Ola, ${nome}, tudo bem? Voce tem ${idade} anos de idade, seu salario e R$ ${salarioMensal.toFixed(2)} e recebera R$ ${aposentadoria.toFixed(2)} ate se aposentar. Caso desejese dividir o salario entre seus filhos dara, R$ ${divFilhos.toFixed(2)} para cada um `)

alert(`Ola, ${nome}, tudo bem? Voce tem ${idade} anos de idade, seu salario e R$ ${salarioMensal.toFixed(2)} e recebera R$ ${aposentadoria.toFixed(2)} ate se aposentar. Caso desejese dividir o salario entre seus filhos dara, R$ ${divFilhos.toFixed(2)} para cada um `)
