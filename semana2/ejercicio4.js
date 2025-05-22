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

function resumenEstadistico(numeros)
{
    const promedio = obtenerPromedio(numeros);
    const mayor = obtenerMayor(numeros);
    const menor = obtenerMenor(numeros);

    return {menor,mayor,promedio}

}

function imprimirVocal(nombres)
{
    const vocales = ["a","e","i","o","u"];
    const resultado = [];
    for(let i=0; i<nombres.length; i++)
    {
        const primerLetra = nombres[i][0].toLocaleLowerCase(); // para conocer la letra en posicion 0
        if (vocales.includes(primerLetra))
        {
            resultado.push(nombres[i]);
        }
        //for(let j=0; j<vocales.length; j++)
        //{
        //    if(primerLetra===vocales[j])
        //    {
        //        resultado.push(nombres[i]);
        //    }
        //}
    }

    return resultado;
}

async function main()
{
    const edades = [20,18,25,30,22];
    console.log(`promedio =  ${obtenerPromedio(edades)}`);

    const lista = [5,20,11,99,3];
    console.log(`numero mayor =  ${obtenerMayor(lista)}`);

    const datos = [70,80,90,100,85];
    const estadistica = resumenEstadistico(datos);

    console.log(`resumen estadistico =  ${datos}`);
    console.log(`el numero menor es =  ${estadistica.menor}`);
    console.log(`el numero mayor es =  ${estadistica.mayor}`);
    console.log(`promedio es  =  ${estadistica.promedio}`);

    const nombres = ["Ana", "Esteban","Luis", "Oscar", "Maria"];
    console.log(`los nombre son   =  ${imprimirVocal(nombres)}`);
    


}
main()