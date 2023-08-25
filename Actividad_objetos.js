const prompt = require("prompt-sync")({ sigint: true });

//Creamos el objeto

let banco = {
    clientes:[
        {
            nroCuenta: 5486273622,
            tipoDeCuenta: "Cuenta Corriente",
            saldoEnPesos: 27771,
            titularCuenta: "Abigael Natte",
        },
        {
            nroCuenta: 1183971869,
            tipoDeCuenta: "Caja de Ahorro",
            saldoEnPesos: 8675,
            titularCuenta: "Ramon Connell",
        },
        {
            nroCuenta: 9582019689,
            tipoDeCuenta: "Caja de Ahorro",
            saldoEnPesos: 27363,
            titularCuenta: "Jarret Lafuente",
        },
        {
            nroCuenta: 1761924656,
            tipoDeCuenta: "Cuenta Corriente",
            saldoEnPesos: 32415,
            titularCuenta: "Ansel Ardley",
        },
        {
            nroCuenta: 7401971607,
            tipoDeCuenta: "Cuenta Unica",
            saldoEnPesos: 18789,
            titularCuenta: "Jacki Shurmer",
        }, 
    ],
    consultarCliente: function (nombreTitular) {
        for (let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].titularCuenta === nombreTitular){
                return this.clientes[i];
            }
        }
        return "Usuario no encontrado"
      },
    deposito: function(nombreTitular,valor){
        let usuario = this.consultarCliente(nombreTitular);
        let total = usuario.saldoEnPesos + valor;
        usuario.saldoEnPesos = total;
        return "Depósito realizado, su nuevo saldo es:" + total;
    },
    extraccion: function(nombreTitular,valor){
        let usuario = this.consultarCliente(nombreTitular);
        let total = usuario.saldoEnPesos-valor;
        usuario.saldoEnPesos = total;
        return "Extracción realizada correctamente, su nuevo saldo es:" + total;
    },
}


//Ejecutar el 3 punto
console.log(banco.consultarCliente("Jacki Shurmer"));
console.log(banco.deposito("Jacki Shurmer",10000));
console.log(banco.extraccion("Jacki Shurmer",5000));
console.log(banco.consultarCliente("Jacki Shurmer"));
