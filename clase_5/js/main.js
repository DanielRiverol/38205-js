let nombre = "Ale";
let edad = 25;
let soltero = true;

// objetos literales
let persona1 = {
  nombre: "Ale",
  edad: 25,
  pais: "Chile",
  movil: 1234567890,
  telefonoParticular: 23456789,
};
let persona2 = {
  nombre: "Lorena",
  edad: 24,
  soltero: false,
};
/* console.log(persona1.nombre);
console.log(persona2.nombre); */
//funcion constructora

function Persona(nombre, edad, pais, direccion, idioma) {
  this.nombre = nombre;
  this.edad = edad;
  this.pais = pais;
  this.direccion = direccion;
  this.idioma = idioma;

  this.saludar = () => {
    console.log("Hola me llamo " + this.nombre);
  };
  this.comer = () => {
    console.log("Estoy comiendo algo rico");
  };
}

let persona3 = new Persona("Ale", 24, "Chile", "Calle 123", "español");
/* console.log(persona3.nombre);
persona3.saludar(); */

let persona4 = new Persona("Maria", 32, "Peru", "Peru123", "espanol");

/* persona4.saludar();
persona4.comer();
console.log("pais" in persona3);
console.log("estado" in persona3); */

/* console.log(persona4["nombre"]); */
/* for (const papas in persona4) {
  console.log(papas + ": " + persona4[papas]);
} */

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  sumarIva() {
    this.precio = this.precio * 1.21;
  }
}

let producto1 = new Producto("Peras", 234);

for (const prop in producto1) {
  console.log(prop + ": " + producto1[prop]);
}
/* function crearPersona(nombre, edad, pais, direccion, idioma){
  let persona = new Persona(nombre, edad, pais, direccion,idioma)
  return persona
} */
