//'Soy un string';
//'Tambien soy un string';
//console.log('Leo Messi dijo: /"La comision es la mejor/"');

//* CONCATENACIÓN DE STRINGS
// console.log('hola' + ' manola');
// console.log(15 + '15');
// console.log('15' + 15 + 15);
// console.log(15 + 15 + '15');

//* TEMPLATE LITERALS
// let ganador = 'Pau'
// let proyecto = 'Avances en JS'
// let premio = '10000 USD'

//console.log('El ganador fue' + ganador);

//console.log( ` El ganador fue ${ganador} por su proyecto ${proyecto} y gano ${premio} ` );

//* METODOS DE STRINGS 

//toUpperCase-- Pasa todo a mayusculas

//console.log('Hola soy DIEGOTE'.toUpperCase() )

//toLowerCase-- Pasa todo a minusculas

//Lenght --> ver cantidad de caracteres, no lleva () por que es una propiedad

//console.log('Hola, aca va a haber 23'.length );
//console.log('ganador'.length);

//charAt --> ver posicion de un caracter

//console.log('Diego Fernandez'.charAt(5));
//console.log(ganador.charAt(2));

//substr--> obtenes una porcion del string

//console.log('Hola soy Diego'.substring(0,4));

//trim--> elimina espacios iniciales y finales 
//console.log('      Diego      '.trim());

//includes--> busca alguna palabra/palabra se encuentra dentro de otra y descubre true or false si la encontro
//console.log('Estoy buscando a nemo'.includes('nemo'));

//EJERCICIO 1 recibir el apellido del usuario y mostrar por consola la ultima letra 

//let apellido = prompt('Dame tu apellido');

//console.log(apellido.charAt(apellido.lenght-1));

//EJERCICIO 2 Recibir el nombre del usuario y mostrar por consola el nombre con la primera letra en mayuscula

let nombre = prompt('Dame tu nombre');

let firstLetter = nombre.substring(0,1).toUpperCase();

let resto = nombre.substring(1,nombre.length);

console.log(firstLetter+resto);


