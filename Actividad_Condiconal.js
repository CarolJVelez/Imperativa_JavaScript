const prompt = require("prompt-sync")();

//Validando la edad-Ejercico 1
function validarEdad(edad) {
  if (edad < 0 ) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
    return;
  }else if (edad < 18) {
    console.log("No puede pasar al bar.");
  } else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  } else {
    console.log('Puede pasar al bar y tomar alcohol. ¡Felicitaciones por haber llegado a la mayoría de edad!');

  }

  if (edad % 2 !== 0) {
    console.log("¿Sabías que tu edad es impar?");
  }
}

var edadIngresada = prompt("Por favor, ingresa tu edad: ");
validarEdad(edadIngresada);

//Validando el total a pagar-Ejercico 2
function totalAPagar(vehiculo, litrosConsumidos) {
  let precio;

  switch (vehiculo) {
    case "coche":
      precio = litrosConsumidos * 86;
      break;
    case "moto":
      precio = litrosConsumidos * 70;
      break;
    case "autobús":
      precio = litrosConsumidos * 55;
      break;
    default:
      console.log("Vehículo no reconocido.");
      return;
  }

  if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
    precio += 50;
  } else if (litrosConsumidos > 25) {
    precio += 25;
  }

  return precio;
}
//prueba
let valorFinal = totalAPagar('autobús', 28);
console.log(valorFinal);


//Validando Sandwich-Ejercico 3

function ordenarSandwich() {
	console.log(`
        pollo: pollo (Precio: $150)
        carne: carne (Precio: $200)
        vegetariano: verduras asadas (Precio: $100)\n`);
	const sandwichBase = prompt('¿Qué tipo de sándwich desea pedir?: ');

  let totalFinal =0;

  switch (sandwichBase.toLowerCase()) {
    case "pollo":
      totalFinal += 150;
      break;
    case "carne":
      totalFinal += 200;
      break;
    case "vegetariano":
      totalFinal += 100;
      break;
    default:
      console.log("Sándwich base no válido.");
      return;
  }

  console.log(`
        blanco: blanco c/orégano y parmesano (Precio: $50)
        negro: negro c/avena (Precio: $60)
        s/gluten: sin gluten (Precio: $75)\n`);

	const tipoPan = prompt('¿Qué tipo de pan desea pedir?: ');


  switch (tipoPan.toLowerCase()) {
    case "blanco":
      totalFinal += 50;
      break;
    case "negro":
      totalFinal += 60;
      break;
    case "s/gluten":
      totalFinal += 75;
      break;
    default:
      console.log("Tipo de pan no válido.");
      return;
  }

  const quesoAdicional = prompt(
		'¿Desea agregar queso a su orden: (s: si/n: no)?: '
	);
	quesoAdicional.toLowerCase() === 's' ? (totalFinal += 20) : (totalFinal += 0);
	
  const tomateAdicional = prompt(
		'¿Desea agregar tomate a su orden: (s: si/n: no)?: '
	);
	tomateAdicional.toLowerCase() === 's' ? (totalFinal += 15) : (totalFinal += 0);
	
  const lechugaAdicional = prompt(
		'¿Desea agregar lechuga a su orden: (s: si/n: no)?: '
	);
	lechugaAdicional.toLowerCase() === 's' ? (totalFinal += 10) : (totalFinal += 0);
	
  const cebollaAdicional = prompt(
		'¿Desea agregar cebolla a su orden: (s: si/n: no)?: '
	);
	cebollaAdicional.toLowerCase() === 's' ? (totalFinal += 15) : (totalFinal += 0);
	
  const mayonesaAdicional = prompt(
		'¿Desea agregar mayonesa a su orden: (s: si/n: no)?: '
	);
	mayonesaAdicional.toLowerCase() === 's' ? (totalFinal += 5) : (totalFinal += 0);
	
  const motazaAgregada = prompt(
		'¿Desea agregar mostaza a su orden: (s: si/n: no)?: '
	);
	motazaAgregada.toLowerCase() === 's' ? (totalFinal += 5) : (totalFinal += 0);


  console.log('\nTotal a pagar: ' + totalFinal);
	return totalFinal;
}

ordenarSandwich();

//BONUS-- Numero Sereto Ejercicio 3
function numeroSecreto(numero) {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1; 

  if (numero === numeroSecreto) {
    return `Felicitaciones acertaste, el ${numero} es el número secreto`;
  } else {
    return `No adivinaste. El numero secreto era ${numeroSecreto} y tu ingresaste ${numero}. ¡Inténtalo de nuevo!`;
  }
}

let numeroIngresado = prompt("Por favor, ingresa un numero del 1 al 10");
console.log(numeroSecreto(numeroIngresado));

//BONUS--- Paracaidas
function abrirParacaidas(velocidad, altura) {
  if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
    return "El paracaídas se puede abrir";
  } else {
    return "El paracaídas no se puede abrir";
  }
}

let velocidadP = parseInt(prompt("Ingrese su velocidad actual: "));
let alturaP = parseInt(prompt("Ingrese su altura actual: "))
let respuesta = abrirParacaidas(velocidadP, alturaP);
console.log(respuesta);


//BONUS--Traductor
function traducirPalabra(palabra) {
  let palabraTraducida;

  switch (palabra) {
    case "casa":
      palabraTraducida = "La palabra traducida al Ingles es: House";
      break;
    case "perro":
      palabraTraducida = "La palabra traducida al Ingles es: Dog";
      break;
    case "pelota":
      palabraTraducida = "La palabra traducida al Ingles es: Ball";
      break;
    case "árbol":
      palabraTraducida = "La palabra traducida al Ingles es: Tree";
      break;
    case "genio":
      palabraTraducida = "La palabra traducida al Ingles es: Genius";
      break;
    default:
      palabraTraducida = "La palabra" + " " + palabra + " " + "es incorrecta y no tenemos traducción";
      break;
  }

  return palabraTraducida;
}

let palabraATraducir = prompt("Por favor, ingresa la palaba a traducir: ");
console.log(traducirPalabra(palabraATraducir));



//BONUS--Traductor
let valoracion = prompt("Ingrese una valoracion que puede ser muy mala, mala, mediocre, buena, muy buena: ");

  switch (valoracion.toLowerCase()) {
    case "muy mala":
      console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
      break;
    case "mala":
      console.log("Calificaste la película como Mala. Lo lamentamos.");
      break;
    case "mediocre":
      console.log("Calificaste la película como Mediocre. Lo lamentamos.");
      break;
    case "buena":
      console.log("Calificaste la película como Buena. Nos alegra que te haya gustado.");
      break;
    case "muy buena":
      console.log("Calificaste la película como Muy Buena.Nos alegra que te haya gustado");
      break;
    default:
      console.log("Ingresaste un valor inválido.");
      break;
  }
  console.log("Gracias por tu visita y valoración.");


