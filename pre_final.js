/* PRE - EXAMEN FINAL */

//EJERCICIO Nº1

//Dada la matriz
//3x3

let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];

/* 
  1) Crear una función que reciba la matriz por parámetro, sume todos los valores de primer diagonal  y retorne la suma.
  2) Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz. */

/* ---------------------------------------------------------- */

function sumaDiagonal(mat) {
  let acumulador = 0;
  for (i = 0; i < mat[0].length; i++) {
    acumulador += mat[i][i];
  }
  return acumulador;
}

console.log(`1.1. ${sumaDiagonal(matriz)}`);

function crearArrPares(mat) {
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
console.log(`1.2. ${crearArrPares(matriz)}`);

//EJERCICIO Nº2

//Dado el siguiente arreglo de objetos:

let cuadros = [
  {
    nombre: "Mona Lisa",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La ultima cena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La noche estrellada",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "El grito",
    creador: "Edvard Munch",
  },
  {
    nombre: "Trigal con cuervos",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "Maria Magdalena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "Amor y Dolor",
    creador: "Edvard Munch",
  },
  {
    nombre: "Ansiedad",
    creador: "Edvard Munch",
  },
];
/* 
    1) Realizar una función llamada filtrarPorCreador que reciba por parámetro el array y el nombre de un artista. Nuestra función deberá retornar un nuevo array que contenga los nombres de las obras de arte que ha realizado el creador recibido por parámetro. Por ejemplo, si se envía por parámetro: (cuadros, “Leonardo Da Vinci”). 
    
    Nuestra función deberá retornar: 
    
    ("Mona Lisa", "La ultima cena", "Maria Magdalena")
  
    */

/* ---------------------------------------------------------- */

function filtrarPorCreador(arr, name) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].creador === name) {
      filteredArr.push(arr[i].nombre);
    }
  }
  return filteredArr;
}

let filteredStuff = filtrarPorCreador(cuadros, "Leonardo Da Vinci");
console.log(`2.1. ${filteredStuff}`);

/* 
  //EJERCICIO Nº3
  
  Realizar una función que mediante el algoritmo de ordenamiento bubbleSort:
  
  1) indique si el arreglo de objetos del EJERCICIO Nº2 se encuentra ordenado alfabéticamente según su creador o no. 
  2) Si está ordenado deberá retornar true. Si no lo está, deberá ordenarlo.  
  3) Realizar el correspondiente llamado a esta función para demostrar su correcto funcionamiento.  
  */

/* ---------------------------------------------------------- */

function checkOrder(arr) {
  let isOrdered = false;
  let arrCopy = [...arr];

  for (let i = 0; i < arrCopy.length; i++) {
    for (let j = 0; j < arrCopy.length; j++) {
      if (arrCopy[j] > arrCopy[j + 1]) {
        let temp = arrCopy[j];
        arrCopy[j] = arrCopy[j + 1];
        arrCopy[j + 1] = temp;
      }
    }
  }

  isOrdered = arrCopy === arr;
  console.log("Original", arr);
  console.log("Ordered", arrCopy);

  return isOrdered;
}

console.log(`3. ${checkOrder(filteredStuff)}`);

/* 
  //EJERCICIO Nº4
  
  Desarrollar una función para cada uno de las siguientes apartados: 
  
  1) Que reciba por parámetro un número entero y retorne su triple.
  2) Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
  3) Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos. 
  
  */

/* ---------------------------------------------------------- */

function tripleNumero(numero) {
  if (numero % 1 === 0) {
    return numero * 3;
  }
}

function multiplicaDosNumeros(numero1, numero2) {
  if (numero1 % 1 === 0 && numero2 % 1 === 0) {
    return numero1 * numero2;
  } else console.log("No son números enteros");
}

function dividirDosNumeros(numero1, numero2) {
  if (
    numero1 !== 0 &&
    numero2 !== 0 &&
    numero1 % 1 === 0 &&
    numero2 % 1 === 0
  ) {
    return numero1 / numero2;
  } else {
    console.log("deben ser enteros y distintos de 0");
  }
}

console.log(`4.1. tripleNumero ${tripleNumero(5)}`);
console.log(`4.2. multiplicaDosNumeros ${multiplicaDosNumeros(5, 3)}`);
console.log(`4.3. dividirDosNumeros ${dividirDosNumeros(5, 2)}`);

/* 
  //EJERCICIO Nº5
  
  Crear una matriz de 5 x 7.
  Crear una función que reciba la matriz generada por parámetro, sume todos los valores de la fila 4 y retorne la suma.
   */

/* ---------------------------------------------------------- */

let matrix = [];

for (let i = 0; i < 5; i++) {
  let row = [];
  for (let j = 0; j < 7; j++) {
    let value = Math.floor(Math.random() * Math.floor(9) + 1);
    row.push(value);
  }
  matrix.push(row);
}

console.log(`5.1. Matrix: `, matrix);

function Sum4(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j === 3) {
        sum += parseInt(matrix[i][j]);
      }
    }
  }
  return sum;
}

console.log(`5.2. ${Sum4(matrix)}`);

//EJERCICIO Nº6

//Dado el siguiente arreglo de objetos:

let personas = [
  {
    nombre: "Lucia",
    oficio: "Medica",
    edad: 37,
  },
  {
    nombre: "Tiziano",
    oficio: "Programador",
    edad: 9,
  },
  {
    nombre: "Julian",
    oficio: "Chofer",
    edad: 45,
  },
  {
    nombre: "Adriana",
    oficio: "Chef",
    edad: 24,
  },
];

/* 
  
  1) Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las personas cuya edad sea mayor a 25. La función deberá retornar un nuevo arreglo con las personas que cumplan con la condición antes mencionada.
  2) Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento. 
  
  */

function checkGreaterThan25(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].edad > 25) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let filteredPersonas = checkGreaterThan25(personas);
console.log(`6. ${JSON.stringify(filteredPersonas)}`);

/*
Dalia Barranco Giles
Aldhair Vera
Carol Julieth Velez
Andrea Carreño
*/
