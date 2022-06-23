let variableGlobal = 'Soy una variable global';

console.log(variableGlobal);

function cambiar(){
    variableGlobal = 'Me cambiaron desde una función'; //Acá modifico una variable global, desde la función
    console.log(variableGlobal);
}

cambiar();



function saludar() {
    console.log('¡Buenas noches, Alejandra!');
}

function saludarPersonalizado(momento, nombre) {
    console.log('Buenas ' + momento + ", " + nombre);
}

/* saludar();
let nombre = prompt('Ingresa tu nombre');

saludarPersonalizado('noches',nombre);
saludarPersonalizado('tardes','Alicia');
saludarPersonalizado('noches','Marcelo'); */

//let resultado = 0;

function sumar(numeroA, numeroB) {
    let suma = numeroA + numeroB;
    return suma;
}


for(let i=0;i<10;i++){

}


function restar(numeroA, numeroB) {
    let resta = numeroA - numeroB;
    return resta;
}

function multiplicar(numeroA, numeroB) {
    let multiplicacion = numeroA * numeroB;
    return multiplicacion;
}

function dividir(numeroA, numeroB) {
    let division = numeroA / numeroB;
    return division;
}

function mostrar(mensaje) {
    console.log(mensaje);
}



function calcular(numeroA, numeroB, signo) {

    let resultado = 0;

    switch (signo) {
        case "+":
            resultado = sumar(numeroA, numeroB);
            break;
        case "-":
            resultado = restar(numeroA, numeroB);
            break;
        case"*":
        resultado = multiplicar(numeroA,numeroB);
        break;
        case "/":
            resultado = dividir(numeroA,numeroB);
            break;
        default:
            console.log('Dato no válido');
    }
return resultado;
}
/* 
let numero1 = parseInt(prompt('Ingresa el primer operando de la suma'));
let numero2 = parseInt(prompt('Ingresa el segundo operando de la suma'));
let operacion = prompt('Ingresa el signo de la operación: + - * /')
mostrar(calcular(numero1,numero2,operacion)); */



/* 


mostrar(sumar(numero1, numero2)); */


/*
//Funciones anónimas
const suma = function (a, b) {
    return a + b;
}

suma(5, 6);

//Funciones flecha
const division = (a,b) =>{
    return a/b;
}

//También las podemos escribir en una sola línea
const resta = (a, b) => {return a - b}

//Podemos prescindir de las llaves
const multiplicacion = (a, b) => a * b

//Y si reciben un solo parámetro, hasta de los paréntesis
const mensaje = x =>'El mensaje es: '+x

console.log(mensaje('las funciones flecha son lo máximo!'))
console.log(division(70,35));
*/