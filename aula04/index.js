/*1) PEÇA PARA O USUÁRIO DIGITAR SUA DATA DE NASCIMENTO, 
   VERIFIQUE SE ELE É DE MAIOR E INFORME SE É OU NÃO;

2) PEÇA PARA O USUÁRIO DIGITAR UM NÚMERO DE  1 A 7, E DIGA QUAL DIA DA SEMANA ELE SELECIONOU,
   CASO SEJA UM NÚMERO INVÁLIDO, INFORME-O O ERRO: CONSIDERE O DOMINGO COMO 1;

3) PEÇA PARA O USUÁRIO DIGITAR UM MÊS (1 A 12) E UM DIA (1 A 31), 
   VERIFIQUE SE AMBOS SÃO IGUAIS A DATA DA AULA (07/03), CASO NÃO SEJAM IGUAIS, RETORNE UM ERRO PARA O USUÁRIO;
   
4) PEÇA PARA O USUÁRIO DIGITAR UM MÊS (1 A 12) E UM DIA (1 A 31),
   VERIFIQUE SE UM DOS DOIS É IGUAL A DATA DA AULA (07/03), CASO NENHUM SEJA IGUAL, RETORNE UM ERRO PARA O USUÁRIO;
*/

//1)
const anoNas = parseInt(prompt("Digite o ano de seu nascimento: "));
const idade = 2023 - anoNas

if(idade >= 18){
    console.log(`Voce e maior de idade!\n\n`)
}
else{
    console.log(`Voce e menor de idade!\n\n`)
}

//2)
const n = parseInt(prompt("Digite um numero de 1 a 7: "))

if(n === 1){
    console.log("Voce selecionou o dia de DOMINGO/\n\n")
}
else if(n === 2){
    console.log("Voce selecionou o dia de SEGUNDA\n\n")
}
else if(n === 3){
    console.log("Voce selecionou o dia de TERCA\n\n")
}
else if(n === 4){
    console.log("Voce selecionou o dia de QUARTA\n\n")
}
else if(n === 5){
    console.log("Voce selecionou o dia de QUINTA\n\n")
}
else if(n === 6){
    console.log("Voce selecionou o dia de SEXTA\n\n")
}
else if(n === 7){
    console.log("Voce selecionou o dia de SABADO\n\n")
}
else{
    console.log("Voce inseriu um numero invalido\n\n")
}

//3)
const mes = parseInt(prompt("Digite um numero de 1 a 12 para representar o mes: "))
const dia = parseInt(prompt("Digite um dia do mes: "))

if(mes === 3 && dia === 7){
    console.log("O dia e o mes selecionado foi igual o dia da aula 4.\n\n")
}
else{
    console.log('ERRO! Pois o dia e o mes nao sao iguais ao da aula do dia 07/03\n\n')
}

//4)
if(mes === 3 || dia === 7){
    console.log("O dia ou o mes inserido pelo usuario foi igual ao dia ou mes da aula 4.\n\n")
}
else{
    console.log('ERRO! Pois nem o dia nem o mes foi igual ao da aula do dia 07/03 \n\n')
}
