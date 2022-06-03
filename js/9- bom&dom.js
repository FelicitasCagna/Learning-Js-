//! BOM Funciones del tiempo

//*setInterval
//window.setInterval //? son del BOM pero no hace falta poner el window al principio

// function helloWorld (){
//     console.log('Hi everybody');
// }
// let intervalId = setInterval(/*funcion callback*/helloWorld,/*numero de tiempo expresado en milisegundos*/2000);


// //! 1000ms = 1s
// //! Funcion callback --> Funcion que se pasa como argumento de otra funcion

// //*setTimeout

// const byeWorld = ()=> console.log('Bye bye');
// setTimeout (byeWorld,10000);

// setTimeout(()=> clearInterval(intervalId),1000);

// //? CUENTA REGRESIVA
// let countdown = 10;
// console.log('El cohete sera lanzado en' +countdown);

// let idInterval = setInterval(()=>{
//     console.log(countdown);
//     countdown--
// },10000)

// setTimeout(()=>{
//     clearInterval(idInterval);
//     console.log('Despegue');
// },10000);

//!DOM

// document.body.innerHTML='<h2>Hola Comision 1i</h2>' //borro todo lo que estaba antes 
//Traer por ID
let linkInfobae = document.getElementById('link-a-infobae');
linkInfobae.innerText='Ir a infobae';
linkInfobae.classList.add('test','test123');
console.log( linkInfobae.classList);
// linkInfobae.style.backgroundColor='red'
console.log(linkInfobae);

//Traer por clase
let classElements = document.getElementsByClassName('test-class');
console.log(classElements);

//Traer por etiqueta
let tagElements = document.getElementsByTagName('a')
console.log(tagElements);

//Traer por nombre 
let nameElements = document.getElementsByName('name');
console.log(nameElements);

//Traer elementos por selectores de CSS
//! El QUERYSELECTOR Trae el primer elemento que encuentra, no arrays. Por eso conviene usar clases unicas
console.log(document.querySelector('#link-a-infobae'));

console.log(document.querySelector('.test-class'));

console.log(document.querySelectorAll('.test-class'));

function changeColor() {
    let elementClass = document.getElementById('link-a-infobae').classList;
    if(elementClass.contains('light')){
        elementClass.add('dark');
        elementClass.remove('light');
    } else {
        elementClass.add('light');
        elementClass.remove('dark');
    }
}

function crearElemento(){
    let elementoACrear = document.createElement ('h5'); //pongo la etiqueta que quiero crear
    elementoACrear.innerText = 'Este h5 ha sido creado dinamicamente con JS'; //pongo lo que quiero poner adentro
    let padreDelElemento = document.querySelector('.test-class'); //identifico al elemento padre
    padreDelElemento.appendChild(elementoACrear) //lo adopta al hijo
}

const publish = (event) => {
    console.log(event);
    event.preventDefault(); //prevenimos el comportamiento por defecto del evento!!
    let commentText = document.querySelector('#comment-text').value; // #selector de id
    let commentSection = document.querySelector('#comment-section');
    let newComment = document.createElement('div');
    newComment.classList.add('text-light');
    let id = Math.floor(Math.random()*100);
    newComment.id= id;
    newComment.innerHTML = `
        ${commentText} <button class='ms-3 btn btn-danger' onclick='deleteComment(${id})'> Borrar comentario </button>
    `;
    commentSection.appendChild(newComment);
    document.getElementById('comment-form').reset() //una vez que guardo, reseteo, volver a hacer 
}



// const deleteComment = function(id){
    // let commentSection = document.querySelector('#comment-section');
    // let childToRemove = document.getElementById(id)
    // commentSection.removeChild(childToRemove);
//     let elemtToRemove = document.getElementById(id)
//     elemtToRemove.remove();
// }
