/*Carol Julieth Velez Fernandez
Danahe Murillo
David Franco
Lucia Bessio*/

/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

function encontrarMultiplos(numero, limite) {
  let multiplos = [];

  for (let i = numero; i < limite; i += numero) {
    multiplos.push(i);
  }

  return multiplos;

}

console.log(encontrarMultiplos(5, 50));



/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
//CODIGO
// Crear arreglo de objetos estudiantes

let estudiantes = [

  {
    nombre: "Marco",
    notas: [60, 40, 28],
    aprobado: false,
  },
  {
    nombre: "Brenda",
    notas: [99, 50, 80],
    aprobado: false,
  },
  {
    nombre: "Kevin",
    notas: [50, 70, 80],
    aprobado: false,
  },
  {
    nombre: "Anahi",
    notas: [40, 27, 55],
    aprobado: false,
  },
];

// Función para calcular el promedio de notas

function promedio(notas) {
  let sum = 0;
  let l = notas.length;
  for (i = 0; i < l; i++) {
    sum += notas[i];
  }

  return Math.round((sum / l));
}

console.log(promedio(estudiantes[0].notas));


// Función para determinar si el estudiante aprobó
function determinarAprobacion(){
  for (let i = 0; i < estudiantes.length; i++) {
    let resultado = promedio(estudiantes[i].notas);
    if (resultado >= 70) {
      estudiantes[i].aprobado = true;
    }else{
      estudiantes[i].aprobado = false;
    }
  }
}


// Calcular si los estudiantes aprobaron o no
determinarAprobacion();
console.log(estudiantes) //verificar el cambio de estado 

// Imprimir estado de aprobación de los estudiantes
for(let i = 0; i< estudiantes.length; i++){
  if(estudiantes[i].aprobado === true){
    console.log("El estudiante " + estudiantes[i].nombre + " tiene un promedio superior a 70 tiene estado APROBADO");
  }else{
    console.log("El estudiante " + estudiantes[i].nombre + " tiene un promedio inferior a 70 tiene estado DESAPROBADO");
  }
}

// FUNCIÓN EXTRA QUE HACE TODAS LAS ANTERIORES

function determinarAprobacionFinal() {
  for (let i = 0; i < estudiantes.length; i++) {
    let resultado = promedio(estudiantes[i].notas);

    if (resultado >= 70) {
      estudiantes[i].aprobado = true;
      let estado = "Aprobado";
      console.log("El estudiante " + estudiantes[i].nombre + " tiene un promedio de: " + resultado + " y su estado es " + estado);
    } else {
      let estado = "Desaprobado";
      console.log("El estudiante " + estudiantes[i].nombre + " tiene un promedio de: " + resultado + " y su estado es " + estado);
    }

  }
}
console.log("---------SOLUCION EXTRA----------")
determinarAprobacionFinal();

/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.
*/
console.log("---------SOLUCION NUMEROS PARES----------")
let arreglo =[1,2,5,6,7,8,9];

function numerosPares(arr){
  
let sumaFinal =0;
let cont = 0;
  while(cont < arr.length){
    if(arr[cont] %2 === 0){
      sumaFinal += arr[cont];
    }
    cont++;
  }
  return sumaFinal;
}

console.log("La suma de los numeros pares del arreglo es: " + numerosPares(arreglo));
/*
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/
console.log("---------SOLUCION NUMEROS IMPARES----------")

function numerosImpares(arr){
  
let sumaFinal =1;
let cont = 0;
  while(cont < arr.length){
    if(arr[cont] %2 !== 0){
      sumaFinal *= arr[cont];
    }
    cont++;
  }
  return sumaFinal;
}

console.log("El producto de los numeros impares del arreglo es: " + numerosImpares(arreglo));
  
/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/


let vehiculo = [

  {
    marca: "Ford",
    modelo: "Fiesta",
    anio: 2022,
    precio: 20000,
  },
  {
    marca: "BMW",
    modelo: "BMW XM",
    anio: 2023,
    precio: 50000,
  },
  {
    marca: "Renault",
    modelo: "Sandero",
    anio: 2020,
    precio: 40000,
  },
  {
    marca: "Chevrolet",
    modelo: "Aveo",
    anio: 2021,
    precio: 40000,
  },
];
//Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.
function calcularImpuesto() {
  let impuesto;
  for(let i = 0; i < vehiculo.length;i++){
    if (vehiculo[i].anio < 2010) {
      impuesto = vehiculo[i].precio * 0.1;
      vehiculo[i].precio = vehiculo[i].precio + impuesto;
      console.log("El vehiculo de la marca " + vehiculo[i].marca+ " su precio cambia a " +vehiculo[i].precio+" por el incremento del impuesto" );
  } else {
    impuesto = vehiculo[i].precio * 0.05;
    vehiculo[i].precio = vehiculo[i].precio + impuesto;
    console.log("El vehiculo de la marca " + vehiculo[i].marca+ " su precio cambia a " +vehiculo[i].precio+" por el incremento del impuesto" )
  }
  }
  
}
console.log("---------SOLUCION VEHICULO----------")
calcularImpuesto();