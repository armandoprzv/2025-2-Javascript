<<<<<<< HEAD
const { ask } = require('../helpers/input');


//async function main()
//{
//
//    let continuar = true;
//    const infoAlumno = [];
//
//    while (continuar)
//    {
//
//
//        const respuesta = await ask("Deseas continuar ?: ");
//        if (respuesta !== "Si")
//        {
//            continuar = false;
//        }
//        
//    
//    }
//}

//main()


function obtenerPromedio(numeros)
{
    let total = 0;
    for (let i = 0; i<numeros.length; i++)
    {
        total = total + numeros[i];
    }

    const promedio = total / numeros.length;

    return promedio;
}

function obtenerMayor(numeros)
{
    let mayor = numeros[0];
    for (let i = 0; i<numeros.length; i++)
    {
        if(numeros[i]>mayor)
        {
            mayor = numeros[i];
        }
    }

    return mayor;
}

function obtenerMenor(numeros)
{
    let menor = numeros[0];
    for (let i = 0; i<numeros.length; i++)
    {
        if(numeros[i]<menor)
        {
            menor = numeros[i];
        }
    }

    return menor;
}

function obtenerAprobados(numeros)
{
    let aprobados = 0;
    let reprobados = 0;
    for (let i = 0; i< numeros.length; i++)
    {
        if (numeros[i]>70)
        {
            aprobados++;
        }
        else
        {
            reprobados++;
        }
    }
    return { aprobados, reprobados};

}

function analizarCalificaciones(calificaciones)
{
    const res = obtenerAprobados(calificaciones)
    let aprobados= res.aprobados;
    let reprobados= res.reprobados;
    let promedio= obtenerPromedio(calificaciones);
    let califAlta= obtenerMayor(calificaciones);
    let caliBaja= obtenerMenor(calificaciones);

    return { aprobados, reprobados, promedio, caliBaja, califAlta };
}
async function main()
{
    const alumnos = [];
    let opcion = 0;
    while(opcion!== 3)
    {
        opcion=Number(await ask("Selecciona la opcion deseada: 1 Agregar alumno 2 Mostrar Resultado 3 Salir "));
        if(opcion===1)
        {

            const nombre = await ask("Introduce nombre ");
            const edad = Number(await ask("Introduce edad"));
            const calificacion = Number(await ask("Introduce calificacion "));

            alumnos.push({nombre, edad, calificacion});

        }
        else if (opcion===2)
        {
            const calificaciones = [];
            for (let i =0; i < alumnos.length; i++)
            {
                calificaciones.push(alumnos[i].calificacion); // se almacena solamente la parte del objeto que es calificacion
            }

            console.log(analizarCalificaciones(calificaciones));
        }
        else
        {
            console.log ("opcion invalida");
        }
    }

}
main()
=======
// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.
const { ask } = require('../helpers/input');

function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;

  return promedio;
}

function obtenerMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

function obtenerMenor(numeros) {
  let menor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

function obtenerAprobados(numeros) {
  let aprobados = 0;
  let reprobados = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 70) {
      aprobados++;
    } else {
      reprobados++;
    }
  }
  return { aprobados, reprobados };
}

function analizarCalificaciones(calificaciones) {
  const res = obtenerAprobados(calificaciones);
  let aprobados = res.aprobados;
  let reprobados = res.reprobados;
  let promedio = obtenerPromedio(calificaciones);
  let califAlta = obtenerMayor(calificaciones);
  let califBaja = obtenerMenor(calificaciones);

  return { aprobados, reprobados, promedio, califAlta, califBaja };
}

async function main() {
  let opcion = 0;
  const alumnos = [];

  while (opcion !== 3) {
    opcion = Number(await ask(`Selecciona la opcion deseada \n1: Agregar Alumno: \n2: Mostrar resultados: \n3: Salir : `));
    if (opcion === 1) {
      const nombre = await ask(`Introduce el nombre del alumno`);
      const edad = Number(await ask(`Introduce la edad del alumno`));
      const calificacion = Number(await ask(`Introduce la calificacion del alumno`));
      alumnos.push({ nombre, edad, calificacion });
    } else if (opcion === 2) {

      if (alumnos.length === 0) {
        console.log("No hay alumnos que analizar");
      } else {
        console.log(alumnos);
        const calificaciones = [];

        for (let i = 0; i < alumnos.length; i++) {
          calificaciones.push(alumnos[i].calificacion);
        }
        console.log(analizarCalificaciones(calificaciones));
      }
    } else {
      console.log("Opción inválida");
    }
  }
}

main();
>>>>>>> dbdcf3d7fc64d45a55172709744d551ecf68d32c
