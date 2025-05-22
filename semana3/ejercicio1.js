<<<<<<< HEAD
const { ask } = require('../helpers/input');


async function main()
{

    const persona = 
    {
        nombre:"Clau",
        edad:34,
        profesion:"Desarrollador"
    }

    console.log(persona.nombre);
    console.log(persona["edad"]);

    const persona2 = 
    {
        nombre:"Carlos",
        edad:28,
        ocupaciion:"estudiante",
        saludar: function ()
        {
            console.log(`hola mi nombre es ${this.nombre}`); //this una referenia al objeto previo i
        }
    }

    persona2.saludar();

    const alumno = 
    {
        nombre:"yeye",
        edad:18,
        ocupacion:"estudiante",
        esMayorDeEdad: function()
        {
            if(this.edad>=18)
            {
                return true
            }
             else
            {
                return false 
            }
        },
        mostrarinfo: function()
        {
            console.log(`hola soy ${this.nombre}, tengo ${this.edad}, me dedico a ser ${this.ocupacion}`);
            if(this.esMayorDeEdad())
            {
                console.log(" y soy mayor de edad");
            }
            else
            {
                console.log("no soy mayor de edad");
            }
        }
    }
    console.log(alumno.mostrarinfo());


}
main()
=======

const { ask } = require('../helpers/input');

async function main() {

  const personas = [
    {
      nombre: "Claudia",
      edad: 34,
      ocupacion: "Desarrollador",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre}`);
      }
    },
    {
      nombre: "Carlos",
      edad: 28,
      ocupacion: "Estudiante",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre}`);
      }
    }
  ];

  // personas[0].saludar();
  // personas[1].saludar();

  for (let i = 0; i < personas.length; i++) {
    personas[i].saludar();
  }

  const alumno = {
    nombre: "Yei Yei",
    edad: 18,
    ocupacion: "Estudiante",
    esMayorDeEdad: function () {
      if (this.edad >= 18) { return true; }
      else { return false; }
    },
    mostrarInfo: function () {
      console.log(`Hola soy: ${this.nombre}, tengo ${this.edad}, me dedico a ser: ${this.ocupacion} `);
      if (this.esMayorDeEdad()) {
        console.log("Y SOY MAYOR DE EDAD");
      } else {
        console.log("no puedo votar");
      }
    }
  }

  alumno.mostrarInfo();

}



main();
>>>>>>> dbdcf3d7fc64d45a55172709744d551ecf68d32c
