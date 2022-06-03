//NUMBERS - vamos a utilizar el objeto Math
//* redondeo y truncamiento
//35.73 redondeo 36 truncamiento 35

let numberOne = 35.73;

console.log( Math.round(numberOne) );

console.log( Math.floor(numberOne) );

//*ENCONTRAR MAXIMOS Y MINIMOS

let max = Math.max(1,7,84,79)
let man = Math.min(1,7,84,79)

console.log(max);
console.log(min);

//*POTENCIAS Y RAICES

console.log('3 al cuadrado' ,Math.pow(3,2));
console.log('3 al cubo' ,Math.pow(3,3));

console.log('la raiz cuadrada de 9' ,Math.sqrt(9));
console.log('la raiz cuadrada de 27' ,Math.cbrt(27));

//*OBTENER NUMERO ALEATORIO -- entre 0 y 1 tiene muchos decimales 

let dado = Math.random();
console.log(dado);

// Obtengamos un numero aleatorio del 0 al 9 

let random2 = Math.round((Math.random())*10)
console.log(random2);

//*PARSEAR CADENAS -- convertir una cadena string en un numero

let string = '15'
console.log(string);
console.log(Number(string));
console.log(parseInt(string));
console.log(parseFloat(string));

//*LIMITAR CANTIDAD DE DECIMALES

let number3 = Number(Math.random().toFixed());
