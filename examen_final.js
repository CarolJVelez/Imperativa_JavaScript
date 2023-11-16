/* EXAMEN FINAL  CAROL VELEZ*/

//Ejercicio 1
let paises = [
  {
    nombre: "Argentina",
    continente: "Sudamérica",
    poblacion: 40000000
  },
  {
    nombre: "Colombia",
    continente: "Sudamérica",
    poblacion: 50372000
  },

  {
    nombre: "Brasil",
    continente: "Sudamérica",
    poblacion: 300000000
  },
  {
    nombre: "Etiopía",
    continente: "África",
    poblacion: 15000000
  },
  {
    nombre: "Chile",
    continente: "Sudamérica",
    poblacion: 10000000
  }
];

function arregloPaisesYPoblacion(arr, continente, nPoblacion) {
  let paisesFiltrados = [];
  const continenteBuscado = continente.toLowerCase();

  for (let i = 0; i < arr.length; i++) {
    const continenteActual = arr[i].continente.toLowerCase(); 
    if (continenteActual === continenteBuscado && arr[i].poblacion >= nPoblacion) {
      paisesFiltrados.push(arr[i]);
      
    }
    if (paisesFiltrados.length === 0) {
      return [];
    }
  }
  return paisesFiltrados;
}
console.log("--------Ejercicio 1 EXITOSO------------")
console.log(arregloPaisesYPoblacion(paises, "SudamériCa", 40000000));
console.log("--------Ejercicio 1 NO EXITOSO------------")
console.log(arregloPaisesYPoblacion(paises, "Sudamérica", 100000000));

//Ejercicio 2

let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];

//Funciones para ordenar

function ordenarAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let num = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = num;
      }
    }
  }
  return arr
}

function ordenarDes(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let num = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = num;
      }
    }
  }
  return arr
}
//funcion para determinar el orden
function bubbleSort(arr, orden) {
  orden = orden.toUpperCase()
  if (orden === "ASC") {
    return ordenarAsc(arr)
  }
  else if (orden === "DES") {
    let arregloOrdenado = ordenarDes(arr)
    return arregloOrdenado
  }
  else {
    let malo = "No se encontro la palabra"
    return malo
  }
}
console.log("--------Ejercicio 2 ANTES DEL ORDENAMIENTO------------");
console.log(arrayDeNumeros);
console.log("--------Ejercicio 2 DESPUES DEL ORDENAMIENTO------------");
console.log(bubbleSort(arrayDeNumeros, "des"));

//Ejercicio 3

let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5]  // 2
];

function sumaMatriz(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (i === 0) {
        sum += parseInt(mat[i][j]);
      }
    }
  }
  return sum;
}

function paresMatriz(mat) {
  let nuevaM = [];
  for (i = 0; i < mat[0].length; i++) {
    for (j = 0; j < mat.length; j++) {
      if (mat[i][j] % 2 == 0) {
        nuevaM.push(mat[i][j]);
      }
    }
  }
  return nuevaM;
}

console.log("--------Ejercicio 3 SUMA------------");
console.log(sumaMatriz(matriz));
console.log("--------Ejercicio 3 PARES------------");
console.log(paresMatriz(matriz));

