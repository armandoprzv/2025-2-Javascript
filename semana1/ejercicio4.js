const { ask } = require('../helpers/input');

async function main() {
    const dia = Number (await ask("ingresa un numero del 1-7"));
    const diasemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

    if (dia >= 1 && dia <=7 )
    {
        console.log(diasemana[dia -1]);
    }
    else
    {
        console.log("no es numero valid");
    }

}
main()