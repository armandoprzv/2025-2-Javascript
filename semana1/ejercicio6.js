const { ask } = require('../helpers/input');

function diffDays(actualDate,birthdate)
{
    const diff = actualDate - birthdate;
    const edadendias = Math.floor (diff / (1000*60*60*24)); //math.floor para redondear 

    return edadendias;
}

async function main() {

    const actualDate = new Date();

    const birthday = await ask("¿cual es tu dia de nacimiento");
    const birthmonth = await ask("¿cual es tu mes de nacimiento");
    const birthyear = await ask("¿cual es tu año de nacimiento");

    const birthdate = new Date(`${birthyear}-${birthmonth}-${birthday}`); // sin espacios

    console.log(actualDate);
    console.log(birthdate);
    console.log("Haz vivido aprox");
    console.log(`${diffDays(actualDate,birthdate)}`);

   // const diff = actualdate - birthdate;

    //console.log(actualdate.toLocaleDateString);
    //console.log(birthdate);
    //console.log(diff);
}
main()