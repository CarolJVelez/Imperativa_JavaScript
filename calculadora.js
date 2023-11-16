//const prompt = require("prompt-sync")({ sigint: true });

/* 
Integrantes:
Carol Velez
Claudia Heredia
Franco Tineo
Adriana Diaz
Erick Poma
Frank villa lobo
Valeria Alvarez
*/

//Funciones basicas 

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  if(b !== 0){
    return a / b;
  }else{
    return "No es posible realizar la division";
  }
}

function calcular (a,b, operacion){
  if(typeof a !== "number" || typeof b !== "number" ){
    return "Los datos deben de ser numericos"
  }

  switch (operacion){
    case "suma":
      return suma(a,b);
    case "resta":
      return resta(a,b); 
    case "multiplicacion":
      return multiplicacion(a,b);
    case "division":
      return division(a,b);   
    default:
      return "no existe la operacion ingresada"
  }
}



let operacionSuma = calcular(2,null,"suma");
console.log("Suma de numeros: " + operacionSuma);
let operacionResta = calcular("a",3,"resta");
console.log("Resta de numeros: " + operacionResta);
let operacionMultiplicacion = calcular(5,2.3,"multiplicacion");
console.log("Multiplicacion de numeros: " + operacionMultiplicacion);
let operacionDivision = calcular(20,0,"division");
console.log("Division de numeros: " + operacionDivision);
let operacionSinDatos = calcular();
console.log(operacionSinDatos);
