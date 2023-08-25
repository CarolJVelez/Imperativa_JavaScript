//Carol Velez
//Colecciones de películas 
//Ejercicio 1
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log(peliculas);

//Ejercicio 2
function cambioMayusculas(arrPeliculas){

  for(let i = 0; i < arrPeliculas.length; i++){
    arrPeliculas[i] = arrPeliculas[i].toUpperCase();
  }
  return arrPeliculas;
}
console.log(cambioMayusculas(peliculas));

//Ejercicio 3
let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
let cambioPeliculas2 = cambioMayusculas( peliculas2);
//Ejericio 4 tambien 
let eliminarPelicula = cambioPeliculas2.pop();
console.log(eliminarPelicula);


  function agregarPeliculas (arrPeliculasViejas, arrPeliculasnuevas){
    for(let i = 0; i < arrPeliculasnuevas.length; i++){
      arrPeliculasViejas.push(arrPeliculasnuevas[i])
    }
    return arrPeliculasViejas;
  }

  let peliculasAgregadas = agregarPeliculas(peliculas,cambioPeliculas2);
console.log(peliculasAgregadas);

//Ejercicio 5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
let valoracionfinal =[];

  function valoraciones(valoracion1, valoracion2){
    for(let i = 0;  i < valoracion2.length; i++ ){
        if(valoracion1[i]===valoracion2[i]){
          valoracionfinal.push(`La valoracion de la pelicula ${peliculasAgregadas[i]} es igual: ${valoracion1[i]}`);
    }else{
      valoracionfinal.push(`La valoracion de la pelicula ${peliculasAgregadas[i]} no es igual: (${valoracion1[i]}),(${valoracion2[i]})`);
    }
  }
  return valoracionfinal;
}
console.log(valoraciones(asiaScores,euroScores));

//EXTRA BONUS 
//ARRAY INVERSO
  function imprimirInverso(arrayElementos){
    for (let i = arrayElementos.length - 1; i >= 0; i--) {
      console.log(arrayElementos[i]);
    }

  }
  imprimirInverso(peliculas);


  function invertir(arrayElementos){
    let arrayInertido = [];
    let j = 0;
    for(let i = arrayElementos.length-1; i >=0; i--){
      arrayInertido[j] = arrayElementos[i];
      j++;
    }
    return arrayInertido;
  }
  let arrInvertido =invertir(peliculas);
  console.log(arrInvertido)

  //SUMAR
  let valores = [1,2,5];
  let suma = 0;
  function sumaArray(arrElementos){
    for(let i = 0; i < arrElementos.length; i++){
      suma = arrElementos[i] + suma;
    }
    return suma;
  }
  console.log(`Valor suma: ${sumaArray([80,150,260])}`);

  //SUMAR Array.join()
  function join(arrElementos) {
    let result = '';
    for (let i = 0; i < arrElementos.length; i++) {
        result += arrElementos[i];
    }
    return result;
}

const arreglo = ["h", "o", "l", "a"];
const resultado = join(arreglo);
console.log("Resultado del Arreglo: ", resultado);