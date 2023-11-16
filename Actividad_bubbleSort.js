const prompt = require("prompt-sync")({ sigint: true });

/* 
Integrante
Carol Velez
*/

//Ejercicio 1
const edades = [33,27,34,30,34,25];

function ordenarAscendente(arreglo){
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo.length - 1; j++) {
      if (arreglo[j] > arreglo[j + 1]) {
        let num = arreglo[j];
        arreglo[j] = arreglo[j + 1];
        arreglo[j + 1] = num;
      }
    }
  }
  return arreglo
} 

function ordenarDescendente(arreglo){
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo.length - 1; j++) {
      if (arreglo[j] < arreglo[j + 1]) {
        let num = arreglo[j];
        arreglo[j] = arreglo[j + 1];
        arreglo[j + 1] = num;
      }
    }
  }
  return arreglo
} 
console.log('----------Ejercicio 1----------');
console.log(ordenarAscendente(edades));
console.log(ordenarDescendente(edades));

//Ejercicio 2
const letras = ["C", "A","D","E","H","Z","J","L"];

function ordenarAlfabeto(arreglo){
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo.length - 1; j++) {
      if (arreglo[j] > arreglo[j + 1]) {
        let num = arreglo[j];
        arreglo[j] = arreglo[j + 1];
        arreglo[j + 1] = num;
      }
    }
  }
  return arreglo
} 

console.log('----------Ejercicio 2----------');
console.log(ordenarAlfabeto(letras));

//Ejercicio 3
const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

    function ordenarAscendenteSaldo(arreglo){
      for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length - 1; j++) {
          if (arreglo[j].saldo > arreglo[j + 1].saldo) {
            let num = arreglo[j];
            arreglo[j] = arreglo[j + 1];
            arreglo[j + 1] = num;
          }
        }
      }
      return arreglo
    } 
    
    function ordenarDescendenteSaldo(arreglo){
      for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length - 1; j++) {
          if (arreglo[j].edadTitular > arreglo[j + 1].edadTitular) {
            let num = arreglo[j];
            arreglo[j] = arreglo[j + 1];
            arreglo[j + 1] = num;
          }
        }
      }
      return arreglo
    } 

    
    console.log('----------Ejercicio 3 Saldo----------');
    console.log(ordenarAscendenteSaldo(arrayCuentas));
    console.log('----------Ejercicio 3 Edades----------');
    console.log(ordenarDescendenteSaldo(arrayCuentas));