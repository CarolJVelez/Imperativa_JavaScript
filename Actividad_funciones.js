const prompt = require("prompt-sync")({ sigint: true });

//Carol Julieth Velez
//1.Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

    function incremento(numero){
        let cont = numero + 10;
        for(let i = numero +1; i <= cont; i++ ){
            console.log(i);
        }

    }
    incremento(5);

//2.Imprimir los números entre el 5 y el 20, saltando de tres en tres.
    for(i=5; i<=20; i+=3){
        console.log(i);
    }

//3.Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

    let contador=0;
    for(let i=0;i<=100;i++){
        contador += i;
        
    }
    console.log("La sumatoria de los números del 0 al 100 es:" + contador)


//4.Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.
    function factorial(numero){
        let contador=1;
    for(let i=1 ; i<=numero ; i++){
        contador = contador * i
        
    }
    console.log("El factorial del numero " +numero+"! "+"es: " + contador)
    }
    factorial(5);

//5.Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.
function fibonacciSecuencia(hasta) {
    let numero1 = 0;
    let numero2 = 1;


    for (let i = 1; numero2 <= hasta; i++) {
        console.log(numero2);
        let siguienteNumero = numero1 + numero2;
        numero1 = numero2;
        numero2 = siguienteNumero;
    }
}

const valorIngresado = 50; 
fibonacciSecuencia(valorIngresado);
