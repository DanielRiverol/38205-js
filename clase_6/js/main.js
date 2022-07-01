// arrays
let b = 34;
const nombres = ["Jesus", "Maria", "Jose"];
const numeros = [1, 2, 3, 4, 5, 3, 4, 2, 4, 6, 8, 5, 3];
const mixto = [true, 1, "Hola tarola", {}, [12, 34, 54], b];
/* 
console.log(nombres[1]);
console.log(numeros[8]);
console.log("El tamño del array mixto es " + mixto.length); */

let result = numeros[0] + numeros[10];

/* console.log(result); */

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}
console.log(numeros);
//console.log(numeros.toString());

//metodo agrega elementos al final del array (push)

numeros.push(495, 23, 56, 98);
/* console.log(numeros); */
//metodo agrega elementos al principio del array (unshift)
numeros.unshift(0);
/* console.log(numeros); */

//metodo elimina elementos del final del array (pop)

numeros.pop();
/* console.log(numeros); */

//metodo elimina elementos del principio del array (shift)
numeros.shift();
/* 
console.log(numeros); */

// unir arrays concat()
/* const cubiertos = ["tenedor", "cuchillo", "cuchara", " cuchara de te"];

const platos = ["plato hondo", "plato playo", "plato de postre"];

const despensa = cubiertos.concat(platos);

console.log(despensa); */
/* 
const eliminar = (nombre) => {
  let index = nombres.indexOf(nombre);
  if (index != -1) {
    nombres.splice(index, 1);
  }
};

eliminar("Maria");

console.log(nombres); */

// array de objetos
const persona1 = { nombre: "Pedro", edad: 18, direccion: "calle falsa 123" };

const personas = [
  { nombre: "Julian", edad: 12, direccion: "calle falsa 123" },
  { nombre: "Sandra", edad: 15, direccion: "calle encontrada 345" },
  persona1,
];
//constructora
function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle;
}
//crear persona
function crearPersonas(nombre, edad, calle) {
  const persona = new Persona(nombre, edad, calle);
  return persona;
}
//pushear al array
function cargarPersona(persona) {
  personas.push(persona);
}

const nahuel = crearPersonas("Nahuel", 14, "Lopez 75645");

cargarPersona(nahuel);
cargarPersona(crearPersonas("Marcos", 12, "Vilaa 12334"));
cargarPersona(nahuel);
console.log(personas);
//Esto no funciona con obj
//console.log(personas.toString());

//forof recorro array de objetos
for (const persona of personas) {
  //recorro objeto
  for (const propiedad in persona) {
    console.log(persona[propiedad]);
  }
}
