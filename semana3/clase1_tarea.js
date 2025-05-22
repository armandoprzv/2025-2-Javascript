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
