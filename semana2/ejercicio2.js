const { ask } = require('../helpers/input');

async function main() {
  let opcion = '';
  let frutas = [];

<<<<<<< HEAD
  while (opcion !== '3') 
  {
    opcion = await ask(`¿Qué deseas hacer? \n1. Agregar una fruta\\n2. Eliminar una fruta\\n3. Salir`)

    if (opcion === '1') 
    {
      let frutaNueva = await ask('Ingresa el nombre de la fruta que quieres agregar: ');
      frutas.push(frutaNueva);
      console.log(`Fruta Agregada: ${frutaNueva}`);
      console.log(`Frutas actuales ${frutas}`);

    } 
    else if (opcion === '2') 
    {
      if (frutas.length === 0) 
      {
        console.log('No hay frutas disponibles');
        continue;
      } 
      else
      {
        let frutaAEliminar = await ask('¿Qué fruta deseas eliminar?');
        let index = frutas.indexOf(frutaAEliminar);

        if (index !== -1) 
        {
          frutas.splice(index, 1);//elimina un rango de frutas, en este caso es 1 
          console.log(`${frutaAEliminar} ha sido eliminado`);
        }
        console.log(`Frutas actuales ${frutas}`);
      }
    } else if (opcion === '3') 
    {
      console.log('Gracias por usar el programa. Tus frutas fueron: ', frutas);
    } 
    else 
    {
      console.log('Opción no permitida. Intenta de nuevo');
=======
  while (opcion !== '3') {
    opcion = await ask('¿Qué deseas hacer? \n1. Agregar una fruta \n2. Eliminar una fruta \n3. Salir\n');
    if (opcion === '1') {
      //Agregar
      let frutaNueva = await ask('¿Qué fruta deseas agregar?: ');
      frutas.push(frutaNueva);
      console.log(`Fruta agregada: ${frutaNueva}`);
      console.log('Frutas disponibles: ', frutas);
    } else if (opcion === '2') {
      //Eliminar
      if (frutas.length === 0) {
        console.log('No hay frutas disponibles');
        continue;
      } else {
        let frutaEliminar = await ask('¿Qué fruta deseas eliminar?: ');
        let index = frutas.indexOf(frutaEliminar);

        if (index !== -1) {
          frutas.splice(index, 1);
          console.log(`${frutaEliminar} ha sido eliminada `)
        } else {
          console.log('Fruta no encontrada ');
        }
        console.log('Frutas disponibles: ', frutas);
      }
    } else if (opcion === '3') {
      //Salir
      console.log('Gracias por usar el programa');
    } else {
      console.log('Opción no válida');
>>>>>>> dbdcf3d7fc64d45a55172709744d551ecf68d32c
    }
  }
}

main();