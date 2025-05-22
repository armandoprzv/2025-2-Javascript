const { ask } = require('../helpers/input');
<<<<<<< HEAD
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
=======

function saludar(nombre) {
  console.log(`Hola estimado(a): ${nombre}, espero tengas un buen día...`);
}

async function main() {
  let limite = Number(await ask("Hasta que numero quieres contar"));
  let i = 0;

  while (i <= limite) {
    console.log(i);
    i++; // Es igual a: (i = i + 1);
  }
  i = limite
  while (i >= 0) {
    console.log(i);
    i--; // Es igual a: (i = i - 1);
  }

  const personas = [
    "Pedro",
    "Juan",
    "Maria",
    "Ana",
    "Karla",
    "Sofía",
    "Carlos",
    "Esteban",
    "Diego",
    "Laura",
    "Fernando",
    "Karolina",
  ];
  console.log("Ascendente");
  for (let i = 0; i < personas.length; i++) {
    saludar(personas[i]);
  }
  console.log("Descendente");
  for (let i = personas.length - 1; i >= 0; i--) {
    saludar(personas[i]);
  }
  console.log("foreach");
  personas.forEach((persona) => saludar(persona));

  const frutas = ["Fresas", "Mango", "Kiwi", "Manzana", "Uvas"]
  const cajon = Number(await ask("¿Qué cajón quieres abrir? (1-5)"));

  for (let j = 1; j <= 5; j++) {
    if (j === cajon) {
      console.log("En el cajón hay: ", frutas[j - 1]);
    }
  }
}

main();
>>>>>>> upstream/main
