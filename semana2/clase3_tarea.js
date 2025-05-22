<<<<<<< HEAD
const { ask } = require('../helpers/input');

async function main()
{
    let opcion = '';
    let listedad=[];
    while (opcion !== 'Si') 
    {
        opcion = await ask(`Deseas agregar una nueva edad Si o NO`)

        const edad = await ask("Escribe la edad a ingresar \n");

        listedad.push(edad);
        console.log(`Edad agregada: ${edad}`);
        console.log(`Lista edad: ${listedad}`);
    }


}
main()
=======
// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.
>>>>>>> dbdcf3d7fc64d45a55172709744d551ecf68d32c
