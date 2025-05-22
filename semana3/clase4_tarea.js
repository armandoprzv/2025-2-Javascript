const { ask } = require('../helpers/input');

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
    let aprobados=0;
    let reprobados=0;
    let promedio= obtenerPromedio(calificaciones);
    let califAlta= obtenerMayor(calificaciones);
    let caliBaja= obtenerMenor(calificaciones);

    return { aprobados, reprobados, promedio, caliBaja, califAlta };
}

async function main()
{

    const calificaciones = [90,20,58,62,78,97,56,12,85];
    const resultado = analizarCalificaciones(calificaciones);
    console.log(resultado);

}
main()