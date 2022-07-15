const form = document.querySelector("form");

const inputNombre = document.querySelector("#nombre"),
  inputDescripcion = document.querySelector("#descripcion"),
  inputPrecio = document.querySelector("#precio"),
  inputImg = document.querySelector("#img"),
  btnGuardar = document.querySelector("#btnGuardar"),
  contenedor = document.querySelector("#contenedor");

const almacen = [];
class Producto {
  constructor(nombre, descripcion, precio, img) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.img = img;
  }
}

//funciones
function crearHtml() {
  let html;
  for (const producto of almacen) {
    html = `<div class="col s4 m3">
 <div class="card">
<div class="card-image">
 <img class="responsive-img" src=${producto.img} />
 <span class="card-title">${producto.nombre}</span>
</div>
<div class="card-content">
 <p>
   ${producto.descripcion}
 </p>
 <p>$${producto.precio}</p>
</div>
<div class="card-action">
 <input type= "button" class="btn" value="Comprar" >
</div>
</div>
</div>`;
  }
  contenedor.innerHTML += html;
}

function guardarProducto(producto) {
  almacen.push(producto);
  console.log(almacen);
}

function crearProducto(nombre, descripcion, precio, img) {
  nombre = inputNombre.value;
  descripcion = inputDescripcion.value;
  precio = inputPrecio.value;
  img = inputImg.value;

  const producto = new Producto(nombre, descripcion, precio, img);
  return producto;
  console.log(producto);
}

btnGuardar.addEventListener("click", () => {
  const producto = crearProducto(nombre, descripcion, precio, img);
  guardarProducto(producto);
  crearHtml();
});
