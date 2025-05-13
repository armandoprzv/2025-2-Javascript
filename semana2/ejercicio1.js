const { ask } = require('../helpers/input');
function saludar(nombre)
{
    console.log(`Hola estimado: ${nombre}`)
}


async function main() {
   //const personas =
   //[
   // "carlos", "juan", "diego", 
   //];
   //for (let i=0; i<personas.length; i++)
   //{
   // saludar(personas[i]);
   //}
//
   //console.log("foreach"); // para cada uno de uno en uno de los elementos del arreglo
   //personas.forEach((persona) => saludar(persona));
//
//
   const frutas = ["Fresa", "mango0","kiwi","manzana","uva"]
   const cajon =Number(await ask("que cajon quieres abrir (1-5)"));

   for(let j=1; j<=5; j++)
   {
    if(j===cajon)
    {
        console.log("en el cajon hay: ", frutas[j-1]);
    }
   }

   
   
   
   
   
    // let limite = Number(await ask("Hasta que numero quieres contar"));
   // let i = 0;
//
   // while (i<=limite)
   // {
   //     console.log(i);
   //     i++;
   // }
//
   // i = limite
   // while (i>=0)
   // {
   //     console.log(i);
   //     i--;
   // }
//


    //let i = 1;
    //while (i<=10)
    //{
    //    console.log(i);
    //    i++;
    //}
}
main()