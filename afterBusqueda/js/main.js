const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "Mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];

let ingreso = prompt("Buscar servicio");

console.log(servicios);
// Metodos de filtrado
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}
function buscarPorNombre(arr, filtro) {
  let encontrado = arr.find((el) => {
    return el.nombre == filtro;
  });
  return encontrado;
}
/* const serviciosFiltrados = filtrarServicio(servicios, ingreso);

console.log(serviciosFiltrados); */

const preciosConDescuento = servicios.map((el) => {
  return {
    id: el.id,
    nombre: el.nombre,
    precio: el.precio - 1.2,
  };
});

//console.log(preciosConDescuento);
/* let porPrecio = prompt(
  "Selecciona un opcion \n 1 - Menor precio \n 2-Mayor precio"
); */
//MOdificar la funcion para que el valor 2500 se pueda ingresar por prompt()
function filtrarPorPrecio(arr, filtro) {
  return arr.filter((el) => {
    switch (filtro) {
      case "1":
        return el.precio < 2500; //Este valor tiene ingresarlo el usuario
        break;

      case "2":
        return el.precio > 2500;
        break;
    }
  });
}
/* 
const filtroPrecio = filtrarPorPrecio(servicios, porPrecio);

console.log(filtroPrecio); */

const carrito = [];
console.log(carrito);

function cargarAlCarrito(arr, item) {
  return arr.push(item);
}

const filtrar = filtrarServicio(servicios, ingreso);

console.log(filtrar);

let nombre = prompt("Ingresa el nombre del producto");

const encontrado = buscarPorNombre(filtrar, nombre);

console.log(encontrado);

cargarAlCarrito(carrito, encontrado);

console.log(carrito);
