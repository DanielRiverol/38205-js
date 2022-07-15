document.title = "Clase 10 | Comisión 38205";
const tituloPrincipal = document.querySelector(".titulo-principal span"),
  tituloSecundario = document.querySelector("h2");

const formulario = document.querySelector("#formulario");
//asignación
tituloPrincipal.innerText = "Clase 10";
tituloSecundario.innerText = "Storage y JSON";

localStorage.setItem("mensaje", "Esto es un mensaje para el Storage");
localStorage.setItem("Valido", false);
let mensaje = localStorage.getItem("mensaje");

let esValido = localStorage.getItem("Valido") == "true";

sessionStorage.setItem("numeros", [1, 2, 3, 4, 5, 6]);

let nums = sessionStorage.getItem("numeros").split(",");
/* console.log(typeof nums);
console.log(typeof mensaje); */
//console.log(typeof esValido);

/* localStorage.removeItem("Valido");
localStorage.clear();

const usuario = { nombre: "Juan", email: "juan@mail.com", pass: 123456 };

const userJson = JSON.stringify(usuario) 

localStorage.setItem("usuario", userJson);

const usuarioDeLS = JSON.parse(userJson)

let usr = localStorage.getItem("usuario")
console.log(usr)
console.log(usuarioDeLS) */

function guadarLS(clave, valor) {
 const ls= localStorage.setItem(clave, valor)
 return ls;
} 
formulario.addEventListener("submit", (e)=>{
  e.preventDefault()
let form= e.target
const usuario= form.children[0].children[1].value
const pass= form.children[1].children[1].value

console.log(usuario);
console.log(pass);
})

