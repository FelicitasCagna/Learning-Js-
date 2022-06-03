// class Movie { //LA CLASE ES EL MOLDE DE UN OBJETO
//     constructor(title,category,year,description){ // EL CONSTRUCTOR ES EL QUE ARMA UNA INSTANCIA DE LA CLASE
//         this.title=title;
//         this.category=category;
//         this.year=year;
//         this.description=description;
//     }
//     showMovie(){ //EL METODO SE VA A AGREGAR A TODOS LOS OBJETOS INSTANCIADOS
//         console.log(`La pelicula se llama ${this.title}, entra en las categorias de ${this.category.join(', ')}, se estreno el ano ${this.year} y la sinopsis es la siguiente: ${this.description}`);
//     }
// }
// let movies2 = [
//     new Movie ('El padrino',['suspenso','accion'],1995,'Un chico que se vuelve mafioso'), // INSTANCIA ES UN OBJETO CREADO A PARTIR DE UN MOLDE
//     new Movie('Los power rangers', ['infantil'], 2000, 'los pibitos que luchan'), // ESTOS SON OBJETOS INSTANCIADOS
//     new Movie('El secreto de sus ojos', ['suspenso'], 2015, ['Un crimen que inquieta a un abogado']),
// ]
// console.log(movies2);

//?PERSONAS

// class Person {
//     constructor(name, age, country){
//         this.name=name;
//         this.age=age;
//         this.country=country;
//     }
//     greetings(){ //saludo
//         console.log(`Hola,mi nombre es ${this.name}`);
//     }
// }

// let angel = new Person ('Angel', 35, 'Uruguay');
// let Galileo = new Person ('Galileo', 22, 'Argentina');
// let Gonza = new Person ('Gonzalo', 24, 'Argentina');

// class Mentor extends Person {
//     constructor(name, age, country, group, course) {
//         super(name,age,country)
//         this.group = group;
//         this.course = course;
//     } 
    
// }

// let diego = new Mentor ('Diego', 26,'Argentina','1i','Argentina');
// let pau = new Mentor ('Pau',33, 'Argentina', '1i','Fullstack')

//!DRY DONT REPEAT YOURSELF

//? SETTERS Y GETTERS 
//? GET obtiene algo de un objeto de una propiedad, metodo escondido en una propiedad.
//? SET modifica una ya creada, o crea una nueva. 
//Metodo escondido en una propiedad

// class SuperHeroe {
//     constructor(name, company){
//         this.name=name;
//         this.company=company;
//     }

//     get getName(){
//         return this.name
//     }
//     set setPower(power){
//         this.power = power;
//     }
// }

// let ironman = new SuperHero ('Ironman','Marvel');

//? EJERCICIO: CUENTA BANCARIA 

// class Account{
//     constructor(name, id){
//         this.name=name;
//         this.id= Math.floor (Math.random()*10000000);
//         this.balance=0;
//     }
//     addMoney(value){
//         if (value<0) {
//             alert('Valor ingresado no valido');
//         } else{
//         this.balance= this.balance+value;
//         }
//     }
//     getMoney (value){
//         if (value<0){
//             alert('Valor ingresado no es valido')
//         }else if(this.balance<value){
//             alert(`Saldo insuficiente. Tu saldo disponible es de ${this.balance}`)
//         } else{
//             this.balance=this.balance-value;
//             alert(`Sacaste ${value} te quedan disponibles ${this.balance}`)
//         }
//     }
//     showInfo(){
//         Swal.fire(`La cuenta ${this.id} a nombre de ${this.name} tiene un saldo disponible de ${this.balance}`)
//     }
// }

// let diegoAccount = new Account ('Diego');
// console.log(diegoAccount);

// let string = new String ('Hola soy un string') //'hola soy un string'

// console.log(string);
// new Array()
// new Object()
// new Boolean()


//? EJERCICIO: LISTA DE LIBROS 

class ListaLibros {
    constructor(dueno){
        this.dueno=dueno;
        this.libros = [];
        this.librosYaLeidos = [];
        this.librosNoLeidos = [];
        this.libroActual = null;
        this.ultimoLibro = null ;
        this.siguienteLibro = null;
    }
    anadirLibros(libro){
        this.libros.push(libro);
        if(this.leido){
            this.librosYaLeidos.push(libro);
        }else{
            this.librosNoLeidos.push(libro);
        }
    }
    empezarLibro(nombreLibro){
        let libroQueCoincida = this.libros.find(libro=>libro.titulo===nombreLibro);
        if(libroQueCoincida){
            this.libroActual = libroQueCoincida;
        } else{
            alert('No tenes este libro en tu lista');
        }   
    }
    finalizarLibro(){
        this.ultimoLibro=this.libroActual;
        this.librosYaLeidos.push(this.ultimoLibro);
        // const posicion = this.librosNoLeidos.indexOf(this.libroActual);
        this.librosNoLeidos= this.librosNoLeidos.filter(libro=>libro.titulo!==this.libroActual.titulo)
        this.libroActual=null;
    }
}

class Libro {
    constructor(titulo, autor, genero, leido){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.leid=leido;
    }
}

const listaDiego = new ListaLibros('Diego');

let elPrincipito = new Libro ('El principito','Anthony','fantasia',false);
let harryPotter1 = new Libro ('Harry Potter y la piedra filosofal', 'JK', 'fantasia', false);
let laMuerteVisitaAlDentista = new Libro ('La muerte visita al dentista', 'Agatha Christie','suspenso', false );
let padreRicoPadrePobre = new Libro ('Padre Rico Padre Pobre', 'Kiyousaki','Autoayuda', false);

listaDiego.anadirLibros(elPrincipito);
listaDiego.anadirLibros(harryPotter1);
listaDiego.anadirLibros(laMuerteVisitaAlDentista);
listaDiego.anadirLibros(padreRicoPadrePobre);

listaDiego.empezarLibro('Harry Potter y la piedra filosofal')