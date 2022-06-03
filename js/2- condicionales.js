//ESTRUCTURAS CONDICIONALES

//SIMPLE
//let edad= Number (prompt ('cual es tu edad?'))
//if (edad>18) {
//    console.log('Entraste a ver los goles de Messi');
//} 

//DOBLES
//let edad= Number (prompt ('cual es tu edad?'))
//if (edad>18) {
//    console.log('Entraste a ver los goles de Messi');
//} else{
//    console.log('Anda a ver los goles de Icardi');
//}

//EJERCICIO: solo respuestas de si y no en el cementerio indio
// let anteojos = prompt('Trajiste anteojos?');
// if (anteojos.toLowerCase()=='si') {
//     console.log('corre');
// } else{
//     if (anteojos.toLowerCase()=='no') {
//         console.log('compra, no hay drama');
//     } else{
//         console.log('solo respuestas de si y no admitidas');
//     }
// }


//EJERCICIO recibir un numero del usuario y responderle si es par o impar

//let numero = Number (prompt('Digite un numero'));

//if(numero%2==0){
//    console.log('%cEs par','color:blue;font-size:40px');
//}
//else{
//    console.log('%cEs impar','color:red;font-size:40px');
//}

//*CONDICIONALES MULTIPLES

// let numero = Math.random()*10;

// if(numero<2){
//    console.log('es menor a 2');
// } else if (numero<4){
// console.log('Esta entre 2 y 4');
// } else if (numero<6) {
//     console.log('Esta entre 4 y 6');
// } else {
//     console.log('Esta entre 6 y 10');
// }

//EJERCICIO

// let edad = prompt('Decime tu edad');

// if(edad<18){
//    let tutor = prompt('Tenes tutor?');
//    if (tutor=='si' || tutor = 'no') {
//        console.log('Podes pasar');
//    } else {}
//    console.log('Tomatela');
// } else{
//    console.log('Pasa pibe');
// }


// if(edad>18) {
//     console.log('Podes pasar');
// } else if (prompt ('tenes tutor?').toLowerCase()==='si') {
//     console.log('podes pasar');
// } else {
//     console.log('No podes pasar');
// }

// let provincia = prompt ('De que provincia sos?')

// if (provincia.toLowerCase()=='Tucuman' || provincia.toLowerCase()=='tucuman') {
//     console.log('que rico sanguche de milanesa');
// } else if (provincia == 'cordoba') {
//     console.log('buen fernet');
// } else if (provincia == 'chaco') {
//     console.log('rico chipa');
// } else {
//     console.log('no tenemos datos sobre tu locacion');
// }

//*SWITCH

// let number = 30;

// switch(number){
//    case 10:
//        console.log('tu numero es un 10');
//        break;
//    case 20:
//        console.log('tu numero es un 20');
//        break;
//    case 30:
//        console.log('tu numero es un 30');
//        break;
//    case 40:
//        console.log('tu numero es un 40');
//        break;
//    default:
//        console.log('Tu numero no es ninguno de los anteriores');
//        break;
// }

// let provincia = prompt ('De que provincia sos');

// switch (provincia.toLowerCase()) {
//     case 'tucuman':
//     case 'tucuman con acento':
//         console.log('que rico sanguche');
//         break;
//     case 'cordoba':
//         console.log('buen fernet');
//         break;
//     case 'chaco':
//         console.log('buen chipa');
//         break;    
//     default:
//         console.log('de donde sos');
//         break;
// }

// let edad = prompt ('decime tu edad');

// switch (true) {
//     case edad>=0 && edad<10:
//         console.log('baby shark');
//         break;
//     case edad>=10 && edad<20:
//         console.log('Tini, bar');
//         break;
//     case edad>=20 && edad<30:
//             console.log('Los angeles azules');
//             break;
//     case edad>=30 && edad<40:
//             console.log('Rodrigo, 840');
//             break; 
//     case edad>=40 && edad<50:
//             console.log('Elvis, el rock de la casa');
//             break;                   
//     default:
//         break;
// }

// 20-04

const day = new Date().getDay();

switch (day) {
        case 1:
                console.log('Hoy es lunes de clases');
                break;
        case 2:
                console.log('Hoy es martes aburrido');
                break;
        case 3:
                console.log('Hoy es miercoles de js');
                break;
        case 4:
                console.log('Hoy es jueves de repaso de la clase de ayer');
                break;
        case 5:
                console.log('Hoy es viernes de hacer quiz');
                break;
        case 6:
                console.log('Hoy es sabado de leer teoria y practicar');
                break;
        case 7:
                console.log('Hoy es domingo de resaca de lectura de js');
                break;      
        default:
                break;
}


