// function hello1() {
//     console.log('Hola manola');
// }
// const hello2 = function() {
//     console.log('Hola tarola');
// }
// const hello3 = () => {
//     console.log('Hola carola');
//}
//la arrow function te permite que si tenes un solo argumento,no hacen falta los parentesis, y ademas si vas a hacer un simple retorno, la flecha funciona como un return

// const todoAMayuscula =(palabra)=>{
//     return palabra.toUpperCase();
// }

// const todoAMayusc = palabra => palabra.toUpperCase

// hello1();
// hello2();
// hello3();

// function suma (x,y, nombre) {
//     const resultado = x+y;
//     console.log(`los numeros sumados son ${x} e ${y} y los creo ${nombre}`);
//     return resultado
// }

// console.log(suma(5,7,'Diego')); 
// console.log(suma(12,3,'Diego')); 
// console.log(suma(123,2,'Diego')); 
// console.log(suma(10,4,'Mario')); 
// console.log(suma(22,2,'Diego')); 
// console.log(suma(5,33,'Diego')); 
// console.log(suma(12,7,'Diego')); 

const database = ['Nahuel', 'Pilar', 'Angel', 'Gonzalo', 'Galileo', 'Rocio']

const deleteUser = () =>{
    const user = prompt('Que usuario queres borrar?');
    if (!database.includes(user)) {
        alert('El usuario no existe');
    } else {
        const position = database.indexOf(user);
        database.splice(position,1);
        alert('Usuario eliminado')
    }
}

const updateUser = function () {
    const user = prompt ('Que usuario queres actualizar?');
    const userUpdated = prompt('Como va a ser el nuevo nombre?')
    if (!database.includes(user)) {
        alert('El usuario no existe');
    } else {
        const position = database.indexOf(user);
        database.splice(position,1,userUpdated);
        alert('La base de usuarios ha sido actualizada')
    }
}

//*CALLBACKS : Funcion que se pasa como argumento de otra funcion

// const hi = nombre => alert ('Hola ' + nombre);
// const bye = nombre => alert ('Chau ' + nombre)
// function newUser (saludo /*hi y bye*/){
//     const nombre = prompt ('Como es el nombre?');
//     saludo (nombre)
// }

// newUser(hi);
// newUser(bye);

// const ageDatabase = [25,35,20,25,22,25];
//*FILTER & FIND
// const mayores25 = ageDatabase.filter(age=>age>=25);
// const mayorA30 = ageDatabase.find(age=>age>=25);
// console.log(ageDatabase);
// console.log(mayores25);
// console.log(mayorA30);
//*FOREACH & MAP
// ageDatabase.forEach(age=>console.log(age+20));
// const en20anos = ageDatabase.map(age=>age+20);
// console.log(en20anos);

//? EJERCICIO: calculadora

// const calculator = ()=>{
//     let num1;
//     let num2;
//     let op;
//     while(isNaN(num1)||isNaN(num2)){ 
//     num1 = Number(prompt('Dame el primer numero'));
//     num2 = Number(prompt('Dame el segundo numero'));
//     op = prompt('Dame la operacion');
    
//     if (isNaN (num1) || isNaN(num2)) {
//         alert('Numeros no validos');
//         return
//         }
//     }

//     switch (op) {
//         case 'suma':
//             alert (num1+num2);
//             break;
//         case 'resta':
//             alert (num1-num2);
//             break;
//         case 'producto':
//             alert (num1*num2);
//             break; 
//         case 'division':
//             alert (num1/num2);
//             break;   
//         default:
//             alert('Operacion no valida')
//             break;
//     }
// }

const calculator = (num1,num2,op)=>{
    
    if (isNaN (num1) || isNaN(num2)) {
        return 'Numeros no validos'
        }

    switch (op) {
        case 'suma':
            return num1+num2;
        case 'resta':
            return num1-num2;
        case 'producto':
            return num1*num2;
        case 'division':
            return num1/num2;
        default:
            return 'Operacion no valida';
    }
}

let outcome = calculator(15,20,'suma');
console.log(outcome);