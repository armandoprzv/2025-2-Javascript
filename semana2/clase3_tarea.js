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