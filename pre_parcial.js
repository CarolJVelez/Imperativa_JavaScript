const prompt = require("prompt-sync")({ sigint: true });

/* 
Integrantes:
Alicia torres
Danahe murillo
Erika suesca
Horlando Espinoza
Omar Zagoya
Carol Velez
David Franco
lucia Bessio
*/


let misMascotas = 
    [
        {
            nombre: "perro",
            raza: "labrador",
            edad: 12,
            sonido: "guau",
            sonidos: function(){
                return "el sonido del " + this.nombre + " es: "+ this.sonido + this.sonido;
            }
        },
        {
            nombre: "gato",
            raza: "angora",
            edad: 8,
            sonido: "miau",
            sonidos: function(){
                return "el sonido del  " + this.nombre + " es: "+ this.sonido + this.sonido;
            }
        },
        {
            nombre: "pajaro",
            raza: "perico",
            edad: 3,
            sonido: "pio",
            sonidos: function(){
                return "el sonido del  " + this.nombre + " es: "+ this.sonido + this.sonido;
            }
        }, 
    ]

    function aumentarEdad(){
        for(let i = 0; i < misMascotas.length; i++){
           misMascotas[i].edad += 1;
            console.log("La edad del animal " + misMascotas[i].nombre + " cambia a: " +misMascotas[i].edad);
        }
    }

    function aumentarEdad2(){
        for(let i = 0; i < misMascotas.length; i++){
            if(misMascotas[i].edad < 6){
                misMascotas[i].edad += 1;
                console.log("La edad del animal " + misMascotas[i].nombre + " cambia a: " +misMascotas[i].edad);
            }else if (misMascotas[i].edad >= 6 && misMascotas[i].edad <= 10){
                misMascotas[i].edad += 2;
                console.log("La edad del animal " + misMascotas[i].nombre + " cambia a: " +misMascotas[i].edad);
            } else if(misMascotas[i].edad > 10){
                misMascotas[i].edad += misMascotas[i].edad / 2;
                console.log("La edad del animal " + misMascotas[i].nombre + " cambia a: " +misMascotas[i].edad);
            }
            
        }
    }

      function identificador(){
        let id = 1;
        for(let i = 0; i < misMascotas.length; i++){
            misMascotas[i].id = id;
            id++;
        }
      }  

console.log("----PUNTO 1 y 2------");
      for(let i = 0; i < misMascotas.length; i++){
        console.log(misMascotas[i].sonidos());
      }

console.log("----PUNTO 3------");
aumentarEdad();
console.log("----PUNTO 4------");
aumentarEdad2();
console.log("----PUNTO 5------");
identificador();
console.log(misMascotas);

console.log("----PUNTO EXTRA NUEVO ARREGLO------");
/* Nuevo Arreglo Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.Ejemplo: nuevoArreglo(5) debe retornar [1,2,3,4,5] nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */ 
function nuevoArreglo(number){
    let newArr = []
    for (let i=1; i <= number; i++){
      newArr.push(i)
    }
    return newArr
  }
  
  console.log(nuevoArreglo(14))

  console.log("----PUNTO EXTRA String Split------");
/* Similar String Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original, Si no sabés cómo funciona, Google puede ayudarte.. Importante: No podés usar el String.split() El método split(), separa un String y lo convierte en un Arreglo con sus distintas posiciones.Ejemplo: split(“hola”) debe retornar [“h”,”o”,”l”,”a”] split(“chau”) debe retornar [“c”,”h”,”a”,”u”] */
  function split(string){
    let arr = []
    return arr = [...string]
  }
  
  console.log(split('hola'))

  console.log("----PUNTO EXTRA LOOP------");
  /* LOOP DE PARESDebés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.*/
  function loopDePares(number){
    for(let i=0; i <= 100; i++){
      if((number + i) % 2 === 0){
        console.log (`${number +i} es un numero par`)
      } else {
        console.log (number + i)
      }
    }
  }
  
  loopDePares(50);