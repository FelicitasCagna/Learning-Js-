let days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

// console.log(days[0]);
// console.log(days[1]);
// console.log(days[2]);
// console.log(days[3]);
// console.log(days[4]);
// console.log(days[5]);
// console.log(days[6]);
//!DRY DONT REPEAT YOURSELF lo de arriba es muy repetitivo

for(let i=0;i<7;i++){
    console.log(days[i]);
}
//* PUSH agrega un elemento al final
days.push('Feriadus');
console.log(days);

//*POP elimina el ultimo elemento
days.pop();
console.log(days);

//* UNSHIFT agrega un elemento al comienzo
days.unshift('hola');
console.log(days);

//*SHIFT elimina el ultimo elemento
days.shift();
console.log(days);

//*INDEXOF devuelve la posicion de algun elemento
console.log(days.indexOf('Miercoles'));

//*REVERSE da vuelta la serie
// days.reverse();
// console.log(days);

//*CONCAT concatena 2 arrays

let newDays = ['Feriadus', 'Sabaduki'];
let newWeek = days.concat(newDays)
console.log(newWeek);

//* INCLUDES dice si lo incluye o no 

console.log(newWeek.includes('Feriadus'));
console.log(days.includes('octopus'));

//* JOIN lo agrega y devuelve con separadores

console.log('Los dias de la semana son:', newWeek.join('\n- '));

//*SORT lo ordena alfabeticamente

console.log(newWeek.sort()); 

//*SPLICE 

let diasFalopa = newWeek.splice(7,2);
console.log(newWeek);
console.log(diasFalopa);

//*SLICE
let testWeek = newWeek.slice(0,4)
console.log(testWeek);














// function suma (fulano,mengano,nombre) {
//     const resultado = fulano+mengano;
//     console.log(`los numeros sumados son ${fulano} y ${mengano} y los creo ${nombre}`);
//     return resultado
// }




// const database =['nahuel','angel','pilar','gonzalo','galileo','rocio'];

// const deleteUser = () =>{
//     const user = prompt('Que usuario queres borrar?');
//     if (database.includes(user)){
//         alert('El usuario no existe')
//     } else{
//         const position = database.lastIndexOf(user);
//         database.splice(position,1);
//         alert('Usuario eliminado')
//     }
// }

// const updateUser = function (){
//     const user = prompt ('Que usuario queres actualizas?');
//     if(!database.includes(user)){
//         alert('El usuario no existe');
//     } else{
//         const position = database.lastIndexOf(user);
//         database.splice(position,1,'')
//     }
// }

//*CALLBACKS : FUNCION QUE SE PASA COMO ARGUMENTO DE OTRA FUNCION

// const hi nombre => alert ('hola'+'nombre')

// const ageDatabase = [25,35,20,25,32,25];

// const mayores25 = ageDatabase.filter(age=>age>=25);
// const mayoresA30 = ageDatabase.filter(age=>age>30);
// console.log(ageDatabase);
// console.log(mayores25);

// const en20anos= ageDatabase.forEach(age=>age+20);
// console.log(en20anos);


// //EJERCICIO CALCULADORA

// const calculator = () =>{
//     const num1 = prompt ('dame el primer numero');
//     const num2 = prompt ('dame el segundo numero');
//     const op = prompt ('dame la operacion');

// if (isNan(num1) | isNan(nun2)) {
//     alert('Numeros no validos')
// }

//     switch (op) {
//         case 'suma':
//             alert (num1 + num2);
//             break;
//         case 'resta':
//             alert (num1 + num2);
//             break;
//         case 'multiplicacion':
//             alert (num1 + num2);
//             break;
//         case 'division':
//             alert (num1 + num2);
//             break;
//         default:
//             alert('Operacion no valida')
//             break;
//     }
// } 