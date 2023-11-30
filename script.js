/*let num1 = prompt  ("Digite um número:");
let num2 = prompt ("Digite outro número:");
let op = prompt ("Digite operação matemática:");
let soma;
if (op == "+"){
    soma = Number(num1) + Number(num2);
}else if(op == "-"){
    soma = Number(num1) - Number(num2);
}else if(op == "*"){
    soma = Number(num1) * Number(num2);
}else if(op == "/"){
    soma = Number(num1) / Number(num2);
}else{
    alert ('Informe uma op válida');
}
alert ('O resultado da op é'+soma);*/


/*let num1; declarando a variável
let num2; porém da para declarar já utilizando ela.
let num1 = prompt("Digite um número:");
let num2 = prompt("Digite outro número:");
let op = prompt ("Digite a operação matemática")
let soma;
if(op == "+"){
soma = Number(num1) + Number(num2);   
}else if(op == '-'){
soma = Number(num1) - Number(num2); 
}else if(op == '*'){
soma = Number(num1) * Number(num2);
}else if(op == '/'){
soma = Number(num1) / Number(num2);
}else{
alert ('Informe uma operação valida!')
}
alert('O resultado da operação é' +soma)*/


/*let n1 = prompt ("Informe a primeira nota");
let n2 = prompt ("Informe a segunda nota");
let n3 = prompt ("Informe a terceira nota");
let n4 = prompt ("Informe a quarta nota");
let media;
media = (Number(n1) + Number(n2) + Number(n3) + Number(n4))/4;
alert('O resultado da média é:' +media);*/


/*let km = prompt ("Quantidade de km percorrido");
let dias = prompt ("Quantidade de dias alugado");
let total;
total = (Number(km)*0.20) + (Number(dias)*90);
alert('Valor total a pagar' +total);*/

/*let dkm = prompt ("Digite a distância percorrida");

let rs = prompt ("Preço da passagem");

let multi;

if(dkm <= 200){
    multi = Number (dkm)*0.50;
}else{
    multi = Number (dkm)*0.45;
}
    alert("Total a pagar:" +multi)*/


/*let nota1 = prompt("Digite a nota:");
let nota2 = prompt("Digite a outra nota:");
let media;

media = (Number (nota1) + Number (nota2)) /2;

if(media >=5 && media<7){
  
    alert ("Recuperação")
}else if(media <=4.9){
 
    alert ("Reprovado")
}else{
    alert ("Aprovado")
}
 
alert('O resultado é: ' +media)*/

/*let nome = prompt ("digite seu nome")
let sal = prompt ("digite seu salario")
let temp = prompt ("digite há quantos anos você trabalha")
let conv, salf;

if (temp <=3){
    conv = Number (sal) *0.03;
}
else if (temp >3 && temp<= 10){
    conv = Number (sal) *0.125;
}
else{
    conv = Number(sal) * 0.2;
}
    salf = Number(conv) + Number(sal);
alert (nome + "seu salário teve um aumento de: " + conv + "R$" + "e seu novo salário é de:" + salf + "R$");*/


/*let larg = prompt("Digite a largura do terreno");
let comp = prompt("Digite o comprimento do terreno");
let area;

area = (Number(larg) * Number(comp))

if (area <= 100){
    alert ("Terreno Popular");
}else if 
    (area > 100 && area <= 500){
    alert ("Terreno Master");
}else{
    alert ("Terreno VIP");
}*/

/*let ativ = prompt ("Digite as horas de atividade");
let calc = prompt ("Digite o valor");
let pontos, money

if (ativ <=10){
    pontos = Number (ativ) *2;
}
else if (ativ >10 && ativ <=20){
    pontos = Number (ativ) *5;
}
else {
    pontos = Number (ativ) *10;
}

money = Number (pontos) + Number  (0.05);

alert ("Valor ganho");*/

/*let gen = prompt ("Digite o gênero")
let sal = prompt ("Digite o salário")
let temp = prompt ("Digite tempo de trabalho")
let feminino = "f";
let masculino = "m";
let novosalario, salf;

if (gen == "f"){
    if (Number(temp) <=15){
    novosalario = Number(sal) * 0.05;
}else if (temp >15 && temp <=20){
    novosalario = Number(sal) * 0.12;
}else{
    novosalario = Number(sal) * 0.23;
}
if (gen == "m"){
    if (Number(temp) <20){
    novosalario = Number(sal) * 0.03;
}else if (temp =20 && temp <=30){
    novosalario = Number(sal) * 0.13;
}else 
    novosalario = Number(sal) * 0.25;
}
}
salf = Number (novosalario) + Number(sal);

alert( "O novo salário é: R$" + salf );*/

// let alt = prompt ("Digite sua altura");
// let peso = prompt ("Digite o seu peso");

// imc = Number(peso) / Number(alt) * Number(alt);

// if (peso <18.5){
//     alert ("Abaixo do peso");
// }
// else if (peso =18.5 && peso <25){
//     alert ("Peso ideal");
// }
// else if (peso >25 && peso <30){
//     alert ("Sobrepeso");
// }
// else if (peso >30 && peso <40){
//     alert ("Obesidade");
// }
// else{
//     alert ("Obesidade mórbida");
// }

/*function listaNumeros() {
//cria referência aos elementos da página
let inNumero = document.getElementById('inNumero');
let outResposta = document.getElementById('outResposta');
//let outTabuada = document.getElementById('out');

//converte conteúdo do campo inNumero
let Numero = Number(inNumero.value); //obtem o número informado

//verifica validade do número
if (Numero == 0 || isNaN(Numero)){
    alert("Informe um número válido...");
    inNumero.focus();
    inNumero.value = ""
}

//cria uma variável do tipo String, que irá concatenar a resposta
//let resposta = "";

//inicializa variável reposta
let resposta = "Entre" + Numero + "e 1: ";

//cria um laço de repetição
//for (let i = 1; i <=10; i++) {
    //a variável resposta vai acumulando os novos conteúdos
 //   resposta = resposta + numero + " X " + i + "=" + numero * i + "\n"
//}

//cria um for decrescente
for (let i = Numero; i > 0; i = i -1) {
    //resposta vai acumulando números (e vírgulas)
    resposta = resposta + i + ", ";
}
//o conteúdo da tag pre é alterado para exibir a tabuada do num
//outTabuada.textContent = resposta;
//}

//altera o conteúdo de outResposta
outResposta.textContent = resposta;
}
//referencia elemento e após associa function ao evento click
let btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listaNumeros);
//cria referência ao botão e após associa function ao evento click
//let btMostrar = document.getElementById('btMostrar');
//btMostrar.addEventListener("click", mostrarTabuada)*/

/*function listaNumeros() {

let inNumero = document.getElementById('inNumero');
let outResposta = document.getElementById('outResposta');

let Numero = Number(inNumero.value);

if (Numero == 0 || isNaN(Numero)){
    alert("Informe um número válido...");
    inNumero.focus();
    inNumero.value = ""
}

let resposta = " ";

for (let i = Numero; i >= 0; i = i -10) {

    resposta = resposta + i + " ";
}

outResposta.textContent = resposta + "Acabou!"

}

let btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listaNumeros);*/

/*function listaNumeros() {

let inNumero = document.getElementById('inNumero');
let outResposta = document.getElementById('outResposta');

let Numero = Number(inNumero.value);

if (Numero == 0 || isNaN(Numero)){
    alert("Informe um número válido...");
    inNumero.focus();
    inNumero.value = ""
}

let resposta = " ";

for (let i = Numero; i >= 0; i = i -10) {

    resposta = resposta + i + " ";
}

outResposta.textContent = resposta + "Acabou!"

}

let btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listaNumeros);*/

let npessoas;
let maiorpeso = 0;
let totalpessoas;
let maiorcem;
let media;

for (let i = 1; i <= 8; i++) {
    let peso = Number(prompt('Digite o peso da' + i + 'º pessoa'))
    //let genero = Number(prompt('Digite o seu genero'))

    /*if (sexo == 'f'){
        nmulheres++
    }else if (sexo == 'm'){
        nhomens++
    }*/

    if (peso > maiorpeso) {
        maiorpeso = peso
    }

    total += peso //acumulador = acumula todos os valores juntos.

    if (peso > 100) {
        maiorcem++
    }

    else if ((maiorpeso + maiorcem) /8) {
        media++
    }

}

alert("O maior peso é:" + maiorpeso)
//alert ("A quantidade de pessoas que pesam mais de 100kg é" + maiorcem)
alert ("A média de peso é: " + media)
//alert ("O maior peso cadastrado foi de:" + )

/*<h1>Programa Números Decrescentes</h1>
<p>Número:
<input type="number" id="inNumero">
</p>
<p>
    <input type="button" value="Decrescer" id="btDecrescer">
    <h3 id="outResposta"></h3>
</p>*/