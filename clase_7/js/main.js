const nombres = ["Hugo", "Paco", "Luis"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 23, 21, 4, 543, 4, 6];

const productos = [
  { id: 1, nombre: "Arroz", precio: 124 },
  { id: 2, nombre: "Papa", precio: 90 },
  { id: 3, nombre: "Tomate", precio: 204 },
  { id: 4, nombre: "Morrón", precio: 870 },
  { id: 5, nombre: "Pan", precio: 240 },
  { id: 6, nombre: "Fideos", precio: 124 },
];

/* function porCadaUno(arr, fn) {
  for (const el of arr) {
    fn(el);
  }
}
const duplicado = [];
porCadaUno(numeros, (elemento) => {
  duplicado.push(elemento * 2);
});
console.log(numeros);
console.log(duplicado); */

/* productos.forEach((prodcuto)=>{
  console.log(prodcuto.id);
  console.log(prodcuto.nombre);
  console.log(prodcuto.precio);
}) */

/* console.log(numeros);

const encontrado= numeros.find((el)=>{
  return el === 6
})

console.log(encontrado);

const precio= productos.find((el)=>{
  return el.precio === 300
})

console.log(precio); */

//filter
const barato = productos.filter((el)=>{
  return el.precio < 200 || el.nombre === "Morrón"
})
/* console.log(productos);
console.log(barato); */

//some
 const existe = productos.some(el=>{
  return el.id === 2
 })

 console.log(existe);

 if(existe){
  console.log("Producto encontrado");
}else{
   console.log("Producto NO encontrado");

 }
 //map

 const preciosActualizados = productos.map(el=>{
  return {
    id:el.id,
    nombre : el.nombre,
    precio: el.precio * 1.20
  }
 })
console.log(productos);
console.log(preciosActualizados);

//Math
console.log(Math);
const PI = Math.PI
console.log(PI);

let maximo= Math.max(1,2.3,5,-59,0)
console.log(maximo);
let min= Math.min(1,3,-7,5,66,-66)
console.log(min);

let redondeo= Math.floor(PI)
console.log(redondeo);

let random= Math.floor(Math.random()*100)
console.log(random);