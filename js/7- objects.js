// let alumno = {
//     name: 'Gonzalo',
//     age: 20,
//     location: 'Cordoba',
//     hobbies:['Escabiar', 'Dormir', 'Trabajar'],
//     pet:[
//         {name: 'Blue', type:'dog'},
//         {name: 'chiqui', type:'dog'}
//         ],
//     children:null,

//     saludar: function () {
//         console.log('Hola soy Gonzalo');
//     }
// }

// //* Leer una propiedad del objeto
// console.log(alumno.name); //!no se puede poner una variable 
// console.log(alumno['age']); //!otra notacion, se puede ejecutar funciones, pasar una variable

// alumno.age = 22; //!para reasignar la edad

// console.log(alumno);
// console.log(alumno.age);

// alumno.saludar(); //!Para ejecutar algun metodo,tenemos que poner los parentesis!!!

// console.log(alumno.pet[0].name); //!para acceder al array pongo los []
// console.log(alumno.pet[1].name);

// delete alumno.children;
// console.log(alumno);


// //? EJERCICIO

// let person = {
//     nombre:'Gabriel',
//     edad: 26,
//     dni: '41425968',
//     domicilio: 'Laprida 850',
//     hijos:0,
//     profesion:'Programador de git',
//     saludar:function () {
//         console.log ('Hola, soy '+ this.nombre);
//         },
//     listar: function (){
//         // console.log(`Los datos de la persona son: \n
//         // nombre:${this.nombre}\n
//         // edad:${this.edad}\n
//         // dni:${this.dni}`);
//         for (let clave in this){
//             console.log(clave+'='+this[clave]);
//         }
//     }
//     }

//? EJERCICIO: Carrito de compras

// let carrito = [];

// const addProduct = () =>{
//     let product = prompt('Que productos desea agregar?');
//     carrito.push(product);
// }

// const getProducts = () => {
//     alert (`Su carrito esta compuesto por:\n ${carrito.join('\n- ')}`)
// }

// const getProduct = ()=> {
//     const product = prompt('Que producto desea verificar si esta en su carrito?');
//     if (carrito.includes(product)===true){ //devuelve un true or false
//         alert('El producto se encuentra en su carrito');
//     } else {
//         alert ('El producto no se encuentra en su carrito');
//     }
// }

// const searchProducts = ()=> {
//     const search = prompt('Que desea buscar?');
//     let results = carrito.filter(product=>product.includes(search));
//     alert(results);
// }

// const removeProduct = function(){
//     const productToRemove = prompt('Que producto desea eliminar?');
//     carrito = carrito.filter(product=>product!=productToRemove)

//* CREANDO OBJETOS CON LA FUNCION CONSTRUCTORA

// function Team (name,colors,people){
//     this.name = name;
//     this.colors = colors;
//     this.people = people;
// }

// let SanMartin = new Team ('San Martin de Tucuman', ['red','white'], 1000000);
// let Atletico = new Team ('Atletico Tucuman', ['blue','white'], 150000);

// console.log(SanMartin);
// console.log(Atletico);

// //* CREANDO OBJETOS CON CLASES

// class Country {
//     constructor(name, people){
//         this.name = name;
//         this.people = people;
//     }
// }
// let Argentina = new Country ('Argentina', 40000000);

// //*Otra forma de crear un objeto

// let Brasil = new Object();

// Brasil.name = Brasil;
// Brasil.people = 100000000;

// console.log(Brasil);





//? EJERCICIO DE PELICULAS
let movies = [
    {
        title: 'El padrino',
        category: ['suspenso','accion'],
        year: 1995,
        description: 'Un chico que se vuelve mafioso',
        showMovie: function() {
            console.log(`La pelicula se llama ${this.title}, entra en las categorias de ${this.category.join(', ')}, se estreno el ano ${this.year} y la sinopsis es la siguiente: ${this.description}`);
        }
    },
    {
        tittle: 'Los power rangers',
        category: ['infantil'],
        year: 2000,
        description: 'Unos tipazos de colores que pelean',
        showMovie: function() {
            console.log(`La pelicula se llama ${this.title}, entra en las categorias de ${this.category.join(', ')}, se estreno el ano ${this.year} y la sinopsis es la siguiente: ${this.description}`);
        }
    },
    {
        tittle:'El secreto de sus ojos',
        category: ['suspenso'],
        year: 2015,
        description: 'Un crimen que inquieta a un abogado',
        showMovie: function() {
            console.log(`La pelicula se llama ${this.title}, entra en las categorias de ${this.category.join(', ')}, se estreno el ano ${this.year} y la sinopsis es la siguiente: ${this.description}`);
        }
    }
]
console.log(movies)

// movies[0].showMovie(); //para la ejecucion de un metodo tenemos que poner los parentesis. Para las propiedades no
// movies[1].showMovie();
// movies[2].showMovie();

movies.forEach(movie=>movie.showMovie())

// for (let i=0; i<movies.length; i++){
//     movies[i].showMovie()
// } SERIA LO MISMO HACER ESTO

// function Movie(title,category,year,description) {
//     this.title=title;
//     this.category=category;
//     this.year=year;
//     this.description=description;

// }

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
