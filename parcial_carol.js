const prompt = require("prompt-sync")({ sigint: true });

/* Parcial 1:
Carol Velez
*/

//Ejercicio 1
function determinarTipoDeDato(valor1, valor2) {

  switch (typeof valor1) {
    case 'number':
      if (typeof valor2 === 'number') {
        return "Son numeros, la multiplicacion es: " + valor1 * valor2;
      }
      break;
    case 'string':
      if (typeof valor2 === 'string') {
        return "Son letras, la frase es: " + valor1 + " " + valor2;
      }
      break;
    case 'boolean':
      if (typeof valor2 === 'boolean') {
        return "Son booleanos, la respuesta es: " + false;
      }
      break;
  }

  return "Tipos de datos no válidos";
}
//Casos de prueba
console.log("-------Ejercicio 1------")
console.log(determinarTipoDeDato(4, 2));
console.log(determinarTipoDeDato("carol", "velez"));
console.log(determinarTipoDeDato(false, true));
console.log(determinarTipoDeDato("carol", 5));

//Ejercicio 2
let persona =
{
  nombre: "Carol",
  apellido: "Velez",
  edad: 16,
  esArgentino: true,
}

function validarNacionalidadArgentino(objeto) {

  if (objeto.edad >= 18 && objeto.esArgentino === true) {
    return objeto.nombre + " " + objeto.apellido + " vive en Argentina y es mayor de edad.";
  } else if (objeto.edad >= 18 && objeto.esArgentino === false) {
    return objeto.nombre + " " + objeto.apellido + " NO vive en Argentina y es mayor de edad.";
  } else if (objeto.edad < 18 && objeto.esArgentino === true) {
    return objeto.nombre + " " + objeto.apellido + " vive en Argentina y NO es mayor de edad";
  } else if (objeto.edad < 18 && objeto.esArgentino === false) {
    return objeto.nombre + " " + objeto.apellido + " NO vive en Argentina y NO es mayor de edad";
  }
}

console.log("-------Ejercicio 2-2------")
console.log(validarNacionalidadArgentino(persona));

function verificacionDeTiposDeDatos(valor1, valor2) {
  if ((valor1 === true || valor1 === false) && (valor2 === true || valor2 === false)) {
    return "Son del mismo tipo";
  } else if ((valor1 === "" || valor1 === "true" || valor1 === "false") && (valor2 === "" || valor2 === "true" || valor2 === "false")) {
    return "Son del mismo tipo";
  } else {
    return "No son del mismo tipo";
  }
}
console.log("-------Ejercicio 2-3------")
console.log(verificacionDeTiposDeDatos(true, "true"));
console.log(verificacionDeTiposDeDatos(false, true));
console.log(verificacionDeTiposDeDatos("true", "false"));
console.log(verificacionDeTiposDeDatos("false", false));
console.log("-------Termina ejercicio 2------")

//Ejercicio 3
let destinos = [];
let brasil = {
  cantidadDeVisitas: 3,
  clima: "soleado",
  habitantes: "212 millones"
}
let rusia = {
  cantidadDeVisitas: 4,
  clima: "frio",
  habitantes: "144 millones"
}
let estadosUnidos = {
  cantidadDeVisitas: 1,
  clima: "nublado",
  habitantes: "329 millones"
}

destinos.push(brasil, rusia, estadosUnidos);
console.log("-------Ejercicio 3------")
console.log("-------Array antes del incremento------")
console.log(destinos);

function siguienteViaje(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].cantidadDeVisitas += 1;
  }
}
siguienteViaje(destinos);
console.log("-------Array despues del incremento------")
console.log(destinos);