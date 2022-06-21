//? El destructuring es una caracteristica nueva de ES6 que nos permite desempacar un arreglo o un objeto directamente y de manera multiple para extraerlos en variables o constantes
//* DESESTRUCTURACION DE OBJETOS (OBJECT DESTRUCTURING)
let persona = {
    name : 'Diego',
    age:26,
    country:'Argentina'
}

// let name = persona.name;
// let age = persona.age;
// let country = persona.country;

// let {name, age, country} = persona;
// console.log(name);
// console.log(age);
// console.log(country);

// let {name: nombre, age: edad, country: pais} = persona; 
// console.log(nombre);
// console.log(edad);
// console.log(pais);

// let {age, country, name} = persona; 
// console.log(name);
// console.log(age);

// item ={
//     property1 : 'hola',
//     property2 : 'chau'
// }

// array.forEach(({property1,property2})=>{
//     console.log(property1);
//     console.log(property2);
// })

// function getSong() {
//     return{name:'november rain', artista: 'guns n roses'}
// }

// const{artist} = getSong();

//* DESESTRUCTURACION DE ARREGLOS (ARRAY DESTRUCTURING) - importa el orden 

const rgb = [150, 100, 255];

let [red, green, blue] = rgb;
console.log(red);
console.log(green);
console.log(blue);

let [rosso, ,blu] = rgb;
//dejo el espacio del que no quiero mostrar entre , , 
console.log(rosso);
console.log(blu);

const useState = ['Diego',function(newState){console.log(newState);}];

const [state,setState] = useState;
console.log(state);
setState('Pau')

//*SPREAD OPERATOR 
//? El spread operator es tambien una incorporacion de ES6 que nos permite trabajar de mejor manera con arrays y objetos. Su simbolo es ... x.x

const numeros = [5,6];
// const del1al10 = [1,2,3,4,5,6,7,8,9,10];
const del1al10 = [1,2,3,4,...numeros,7,8,9,10];
console.log(del1al10);

//?tambien permite crear una copia del array
const copiadel1al10 = [...del1al10]
console.log(copiadel1al10);

//? Agregar datos como un push 
[...del1al10,11]

let dog = {
    name:'Fiona',
    age:2,
    gender:'male',
    breed:'callejero aleman'
}
//?Hicimos una copia y le agregamos una propiedad nueva 
let dogWithOwner = {
    ...dog,
    owner:'Gonza'
}
console.log(dogWithOwner);

//*IMPORTACION Y EXPORTACION (IMPORT & EXPORT)
//? Podemos exportar funciones, objetos o datos para que puedan ser utilizadas en otras partes de mi aplicacion.
//? Existen dos tipos de exports: por defecto (puede haber solo una en un script) o nombrada (puede haber multiples en un script)
//?Tengo que aclarar que es un modulo con type="module" en el html

//? Hay que poner las llaves cuando es export nombrado
// import {crearDinamicamente, sumar} from './13-Useful-functions.js'
// import {NAME as nombre, DB_DIRECTION} from './13-constants.js'
//? No hay que poner llaves cuando es export por default
// import crearNavbar from './13-constants.js'


// crearDinamicamente('div','hola',document.getElementById('comment-section'));
// crearDinamicamente('div','chau',document.getElementById('comment-section'));
// console.log(sumar(1,2));
// console.log(nombre, DB_DIRECTION);

//? NORMALMENTE LOS IMPORTS VAN EN LA PARTE INICIAL DEL JS

//* REPASO DE FUNCIONES

// function saludo (){
//     console.log('Hola mundo');
// }

// const saludar = function (){
//     console.log('Hola mundo de nuevo');
// }

// const saludazo = () => {
//     console.log('Hola mundo una vez mas');
// }

//saludo();
//saludar();
//saludazo();

//*OPERADOR TERNIARIO

let x = 10;
x>5? 'si es mayor que 5':'es menor que 5';

//*TRY - CATCH
//? NOS PERMITE HACER ALGUNA ACCION CONTRA CUALQUIER ERROR QUE PUEDA SUCEDER
try {
    console.log('hola');
} catch (error) {
    console.log('Ocurrio un error');
}