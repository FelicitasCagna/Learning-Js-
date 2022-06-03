//*WHILE
// let numero = 1
// while (numero<15) {
//     console.log('todavia no sali');
//     numero ++;
// }
// console.log('sali');

// let numero = prompt('Dame un numero');
// while (numero!=0) {
//     numero--;
//     console.log(numero);
// }

// let contador = 1;
// while (contador<numero) {
//     console.log(contador);
//     contador++;
// }

// let response = prompt('por que la luna es mayor que el sol?');
// let contador = 1;
// let surrender = false;

// while (response !='Porque sale de noche' && surrender===false) {
//     response = prompt('Intenta otra vez');
//     if (contador===3) {
//         alert('Pensa en la noche')
//     }
//     if (contador===5) {
//         alert('porque sale de noche')
//         surrender===true;
//     }
//     contador++;
// }
// alert('Usted si que es chistoso')

// const day = new Date().getDay();

// switch (day) {
//     case 1:
//         console.log('Hoy es lunes de clases');
//         break;

//     default:
//         break;
// }


//*FOR
// SE PONEN 3 ARGUMENTOS 

// for(let contador=0; contador<15; contador ++){
//     console.log(contador);
// }

//?EJERCICIO DE TABLAS

// let number = prompt ('Que tabla queres saber?');

// for (let i = 0; i<=9; i++ ){
//     console.log(`${number} x ${i} = ${number*i}`);  
//     }

//?PROMT DE EXCALIBUR 

// let name;
// let isKing= false;

// while (name.toLowerCase()!== arturo || isKing===false) {
//     name=prompt('Como te llamas?');
//     if (name.toLowerCase()==='arturo') {
//         isKing=confirm('Sos rey?');
//     } else{
//         alert('No te llamas Arturo')
//     }
// }
// alert('Sacaste el prompt del rey Arturo');

//? INTELIGENCIA ARTIFICIAL EN UN HOSPITAL, DOLENCIA: DOLOR ABDOMINAL

let isWoman = confirm ('Es usted mujer?')

if(isWoman){
    isPregnant = confirm('Esta embarazada?')
    if (isPregnant){
        alert ('A ecografia')
    } else{
        alert('A rayos X')
    } 
} else {
    alert(' A rayos x')
}
