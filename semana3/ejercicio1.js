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