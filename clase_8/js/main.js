//Clase Date
/* let date = new Date("December 31, 2022");

let hoy = new Date("July 5 , 2022")

let diferencia = (date - hoy)/86400000;
//un dia 86400000 

console.log("Faltan " + diferencia + " dias [para año nuevo"); */
//Por ID
const h1 = document.getElementById("titulo"),
  fecha = document.getElementById("fecha");
//Por clase
const secundario = document.getElementsByClassName("titulo-secundario");

const items = document.getElementsByClassName("numeros");

//Por nombre de etiqueta
const p = document.getElementsByTagName("p");
const ingreso = document.getElementById("ingreso");
console.log(h1);
console.log(fecha);
console.log(secundario);
console.log(items[0].innerHTML);
console.log(items[1].innerHTML);
console.log(items[2].innerHTML);

console.log(p[3]);

for (const parrafo of p) {
  console.log(parrafo.innerHTML);
}

p[1].innerHTML = "Estoy cambiando el parrafo desde JS";
h1.innerHTML = "<p class='parrafo'>Soy una estructura distinta del orginal</p>";
//h1.innerText="Hola"

h1.className = "active";

//crear elemetos

const contenedor = document.createElement("main");

contenedor.innerHTML = "<h3> Titulo creado dinamicamente</h3>";

secundario[0].appendChild(contenedor)

contenedor.remove()

const lista = document.getElementById("lista")

const animales = ["Loro", "Nutria", "mapache","caballo"]
for (const animal of animales) {
    let li = document.createElement('li')
    li.innerHTML= animal
    lista.appendChild(li)
}

//template literals
//concatenar +

let producto = { id: 1,  nombre: "Arroz", precio: 125 };
let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;

let plantilla = `ID: ${producto.id} Producto: ${producto.nombre} $ ${producto.precio}`

console.log(concatenado);
console.log(plantilla);
h1.innerText= plantilla