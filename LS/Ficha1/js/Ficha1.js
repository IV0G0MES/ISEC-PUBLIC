'use strict'; 
function ex1a(){
let n1=3;
let n2=6;
let n3;
console.log(n1+n2);
console.log(n1+"n3");
console.log(n1+"5");
console.log(n1+"n2");
console.log(n1+n3);
console.log(n3);
console.log(`Variavel n1*n2 = ${n1*n2} (n1=${n1} e n2=${n2})`);
n3=n1+n2;
console.log(n3);
n3=n1+"---"+n2;
console.log(n3);
n3="6";
console.log(n1+n3);
console.log(n2===n3); //comparar o tipo de dados e o valor
console.log(n2==n3);
console.log(n2!==n3);
console.log(n2!=n3);
console.log(n1++);
console.log("n1="+n1);
n1=4;
console.log(++n1);
console.log('n1='+n1);
};

function ex1b(){
let variavel;
variavel='3'+2;
console.log(variavel);
variavel='3'+true;
console.log(variavel);
variavel='3'+undefined;
console.log(variavel);
variavel='3'+null;
console.log(variavel);
};

function ex1c(){
let disciplina;
disciplina="Linguagens Script";
console.log(disciplina);
};

function ex1d(){
let uc='Linguagens';
uc+=' Script';
console.log('Disciplina:'+uc +'- 2 semestre');
};

function ex1e(){
const nome1='Nuno';
const nome2='Ricardo';
const resultado=`Os nomes são ${nome1} e ${nome2}`;
console.log(resultado);
console.log(resultado+' e Filipe');
};

function ex2(){

const num1=5;
const num2=10;
const num3=7;


/*
const num1=prompt("Especifique o numero 1: ");
const num2=prompt("Especifique o numero 1: ");
const num3=prompt("Especifique o numero 1: ");
*/

if(num1>num2){
    if(num1>num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}else if(num2>num3){
    console.log(num2);   
} else{
    console.log(num3);
}

//maior=num1 > num2 && num1 > num3 ? num1 : num2 > num3 ? num2 : num3; //outra versao em apenas uma linha
};

function ex2b(){

const valor1=12;
const valor2=3;


/* Também se pode usar funcao number no lugar de parseInt
let valor1=prompt("Insira o primeiro valor que pretende somar: ");
valor1=parseInt(valor1);
let valor2=prompt("Insira o segundo valor que pretende somar: ");
valor2=parseInt(valor2);
*/
console.log(valor1+valor2);
};

function ex2c(){
let soma=0;
let valor;
let numero=0;
do{
    valor=prompt("Insira o valor a somar:");
    valor=parseInt(valor);
    numero++;
    soma+=valor;
}while(valor!=0);
console.log(`A soma dos numeros introduzidos é ${soma} e o numero de numeros introduzidos é ${numero-1}`);
};

function ex3a(){
let str1 = 'Linguagens Script';
function fazQualquerCoisa1() {
console.log(str1);
}
fazQualquerCoisa1();
};

function ex3b(){
let str2 = 'Linguagens';
function fazQualquerCoisa2() {
str2 = 'Script';
}
console.log(str2);
fazQualquerCoisa2();
console.log(str2);
};

function ex3c(){
function fazQualquerCoisa() {
    str3 = 'Script';
    }
    fazQualquerCoisa();
    console.log(str3);
};

function ex3d(){
    function fazQualquerCoisa() { let str = 'Script';
}
fazQualquerCoisa();
console.log(str);
};

function ex3e(){
    let str = 'Linguagens';
function fazQualquerCoisa() {
let str2 = ' Script';
console.log(str+str2);
}
fazQualquerCoisa();
console.log(str+str2);
};

function ex3f(){
    let str = 'Linguagens';
function fazQualquerCoisa() {
let str2 = ' Script';
if (str.length > str2.length) {
let dim="Primeira é maior!"
console.log(dim);
}
else if (str.length === str2.length) {
let dim="São iguais!"
console.log(dim);
}
else {
let dim="Segunda é maior!"
console.log(dim);
}
console.log(str+str2+"-"+dim);
}
fazQualquerCoisa();
}

function ex3g(){
    var str = 'Linguagens';
function fazQualquerCoisa() {
var str2 = ' Script';
if (str==='Linguagens') {
var dim='ok';
console.log("->"+dim);
}
console.log(str+str2+"- "+dim);
}
fazQualquerCoisa();
console.log(str+str2);
}

function ex3h(){
    console.log(str);
    var str;
}

function ex3i(){
    console.log(str);
    var str='Linguagens Script';
}

function ex3j(){
    str='Linguagens script'
    console.log(str);
    var str;
}

function ex3k(){
    function fazQualquerCoisa() {
        console.log(str);
        }
        fazQualquerCoisa();
        var str = 'Linguagens';
}

function ex3l(){
    var str="Linguagens"
function fazQualquerCoisa() {
str2="Script"
console.log(str2);
var str2;
}
fazQualquerCoisa();
console.log(str2);
}

function ex3m(){
    function mensagem() {
        let nome='José';
        console.log(`Olá ${nome}`);
        }
        mensagem();
        mensagem('Maria');
        mensagem('Maria','Jose','Vieira');
}

function ex3n(){
    mensagem();
function mensagem() {
let nome='José';
console.log(`Olá ${nome}`);
}
}

function ex3o(){
    function mensagem(nome='!') {
        console.log(`Olá ${nome}`);
        }
        mensagem();
        mensagem('Maria');
        mensagem('Jose');
        mensagem('Cristiana','Areias');
}

function ex3p1(){
    let n=50;
    if(true){
        let n=2;
        console.log(n);
    }
    console.log(n);
}

function ex3p2(){
    let n=50
    if(true){
        console.log(n);
        let n=2;
        console.log(n);
    }
    console.log(n);
}

function ex3p3(){
    //let n=50;
    let n=50;
    if(true){
        console.log(n);
        let n=2;
        console.log(n);
    }
    console.log(n);
}

function ex4a(){
    let numero1=1;
    let numero2=1;
    if(numero1==numero2){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

function ex4b(n){
    function parOuImpar(n){
        if(n%2==0){
            console.log("O numero é par");
        }
        else{
            console.log("O numero é impar");
        }
    }
    parOuImpar(n);
}

function ex4c(n){
    
    function obtemQuadrado(n){
        console.log(Math.pow(parseInt(n),2));
    }
    obtemQuadrado(n);
}

function ex4d(){

    function areaRetangulo(n,m){
        m=m || n;
        console.log(n*m);
    }
    areaRetangulo(5,5);
}

function ex4e(str){
    function contaVogais(str){
        let contador=0;
        const voagais=["a","e","i","o","u"];
        str=str.toLowerCase(str);
        for(let i=0; i<str.length;i++){
            if(voagais.indexOf(str.charAt(i))!=-1){
                contador++;
            }
        }
        console.log(contador);
    }
    contaVogais(str);
}
