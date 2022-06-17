//si (condicion)entonces { algo }
//operador de comparacion
//Asignacion =
//comparacion ==(valores) / === valores y tipo de dato
/* let numero = 16;

if (numero == "16") {
  console.log("Este bloque se va a ejecutar");
} */

/* let color = prompt("Ingresa un color");

if (color == "Verde") {
  console.log("El color que elgiste es Verde");
} else {
  console.log("El color que elgiste NO es Verde " + " es: " + color);
}

console.log("Este es un bloque posterior"); */

/* let user = prompt("ingresa tu usuario");
//Utilizar AND para modificar
if (user == "") {
  console.log("Campo requerido");
} else {
  let pass = prompt("ingresa tu password");
  if (pass == "") {
    console.log("Campo requerido");
  } else {
    console.log("Bienvenido/a " + user);
  }
} */

/* let numeroIngresado = parseInt(prompt("Ingresa un precio"));

if (numeroIngresado < 30) {
  console.log("El precio ingresado es menor que 30");
} else if (numeroIngresado < 75) {
  console.log("El precio ingresado es menor que 75");
} else if (numeroIngresado < 100) {
  console.log("El precio ingresado es menor que 100");
} else {
  console.log("El precio ingresado supera el presupuesto");
} */

//Variables booleanas
/* let valorNumerico = 34;

let esValido = valorNumerico > 120;

console.log(esValido);

if (esValido) {
  console.log("La variable esValido es verdadera");
} else {
  console.log("La variable esValido es falsa");
} */

//let nombreIngresado = prompt("Ingresar nombre");
/* let apellidoIngresado = prompt("Ingresar apellido");

if (nombreIngresado != "" && apellidoIngresado != "") {
  alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
  alert("Error: Ingresar nombre y apellido");
} */

/* let primerComparacion = nombreIngresado == "Alejandra";
let segundaComparacion = nombreIngresado == "ALEJANDRA";
let valorNumerico = 34;

let esValido = valorNumerico > 120;

if (
  nombreIngresado != "" &&
  (nombreIngresado == "Alejandra" || nombreIngresado == "ALE")
) {
  console.log("Bienvenida Alejandra que bueno verte");
} else {
  console.log("Hola " + nombreIngresado + " mucho gusto");
} */

let usuario = "Daniel";
let password = 1234;

let user = prompt("Ingresa tu usuario");
let pass = prompt("Ingresa tu contraseña");

if (user == usuario && pass == password) {
  console.log("Bienvenido " + user);
} else {
  /* if (user != usuario) {
    console.log("Usuario incorrecto");
  }
  if (pass != password) {
    console.log("password incorrecto");
  } */
  console.log("Campos incorrectos");
}
//practica
//Crear un simulador de notas con no aprobo, aprobo y sacaste 10 utilizar and u Or segun el caso
