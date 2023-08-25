function tablaDeMultiplicar(numero) {
  let i = 1;
  while (i <= 10) {
      let resultado = numero * i;
      console.log(`${numero} * ${i} = ${resultado}`);
      i++;
  }
}

const numeroParametro = 5; // Cambia este valor al número que desees
tablaDeMultiplicar(numeroParametro);