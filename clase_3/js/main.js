//for(desde;hsat; actualizacion){codigo a repetir }
/* 
let ingreso = prompt("Ingresa un número");
ingreso = parseInt(ingreso);
let limite = prompt("Ingresa hasta dónde");
limite = parseInt(limite);

if (isNaN(ingreso) || isNaN(limite)) {
  console.log("El valor ingresado no es un número");
} else {
  for (let index = 0; index <= limite; index++) {
    //codigo
    let result = ingreso * index;
    console.log(ingreso + " X " + index + "=" + result);
  }
} */

/* for (let index = 0; index <= 10; index++) {
  if (index == 6 || index == 9) {
    continue;
  }
  console.log(index);
} */

//while o mientras

/* let contador = 0;

while (contador <= 10) {
  console.log(contador);
  contador++;
} */

/* let ingreso = prompt("Ingresa un producto \nPara salir ingresa 0");
 */
/* while (ingreso != "0") {
  console.log("Ingresaste el producto: " + ingreso);
  //actualizar para que en algun sea falso
  ingreso = prompt("Ingresa un producto \nPara salir ingresa 0");
} */

//do while
/* let ingreso = "";
do {
  ingreso = prompt("Ingresa un producto \nPara salir ingresa 0");
  console.log("Ingresaste el producto: " + ingreso);
} while (ingreso != "0");
 */
//switch // if else

/* let numero = prompt("Ingresa un número");

switch (numero) {
  case "1":
    console.log("Ingresaste el numero 1");
    break;
  case "2":
    console.log("Ingresaste el numero 2");
    break;
  case "3":
    console.log("Ingresaste el numero 3");

    break;
  case "4":
    console.log("Ingresaste el numero 4");
    break;

  default:
    console.log("Dato invalido");
    break;
} */

let ingreso = prompt(
  "Ingresa una opción \n 1-Café solo \n 2-Café con leche \n 3-Té \n 4-Té con leche \n 5-Agua caliente"
);
if (ingreso == "0") {
  alert("Gracias, que tengas un buen día");
}

while (ingreso != "0") {
  switch (ingreso) {
    case "1":
      alert("Seleccionaste Café, que lo disfrutes");
      break;
    case "2":
      alert("Seleccionaste Café con leche, que lo disfrutes");
      break;
    case "3":
      alert("Seleccionaste Té, que lo disfrutes");
      break;
    case "4":
      alert("Seleccionaste Té co leche, que lo disfrutes");
      break;
    case "5":
      alert("Seleccionaste Agua caliente");
      break;

    default:
      console.log("opcion no valida");
      break;
  }
  ingreso = prompt(
    "Ingresa una opción \n 1-Café solo \n 2-Café con leche \n 3-Té \n 4-Té con leche \n 5-Agua caliente"
  );
  if (ingreso == "0") {
    alert("Gracias, que tengas un buen día");
  }
}
