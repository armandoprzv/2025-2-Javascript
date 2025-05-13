const { ask } = require('../helpers/input');
function obtenerMayor(a,b)
{
    if(a>b)
    {
        return a;
    }
    else
    {
        return b;
    }
}

async function main() {

    const num1 = Number(await ask("Introduce el primero número"));
    const num2 = Number(await ask("Introduce el segundo número"));

    if (num1===num2)
    {
        console.log("los dos numeros son iguales");
    }
    else
    {
        const resultado = obtenerMayor(num1,num2);
        console.log("El numero mayor es ", resultado);
    }
}
main()