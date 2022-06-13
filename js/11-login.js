//* SIMULAMOS UNA BASE DE DATOS
class User {
    constructor(id, name, email, password){
        this.name = name;
        this.id = id;
        this.email = email;
        this.password = password;
        this.favs = [];
        this.cart = [];
    }
}

let users;

const usersFromLS = JSON.parse(localStorage.getItem('users'));

if (usersFromLS) {
    users = usersFromLS
} else{
    users = [
        new User (1, 'Diego Fernandez', 'diego@gmail.com', '12345678',[],[]),
        new User (2, 'Paula Moyano', 'paula@gmail.com', '87654321',[],[]),
        new User (3, 'lionel Scaloni', 'scaloneta@gmail.com', 'LeoSiempreTitular',[],[]),
        new User(4, 'Lionel Messi', 'elultimo10@gmail.com','antoteamo',[],[])
    ];
    localStorage.setItem('users',JSON.stringify(users))
}

// function login () {

// }

// const login = function(){

// }

const login = (event)=>{
    //prevenimos el comportamiento por defecto de recargarse la pagina
    event.preventDefault();
    //tomamos del dom los valores que escribio el usuario
    let email = document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;
    let emailOk = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    // let passOk = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/.test(pass);
    if (emailOk /*&& passOk*/) {
    // comparamos emails a ver si alguno coincide
    let userFound = users.find(user=>user.email==email);
    //si coincidio algun mail, comparamos las contrasenas
    if (userFound && userFound.password === pass) {
        //si todo coincide, lo redireccionamos adentro
        localStorage.setItem('favs',JSON.stringify(userFound.favs));
        localStorage.setItem('cart', JSON.stringify(userFound.cart));
        localStorage.setItem('user', JSON.stringify(userFound.id));

        window.location.assign(window.location.origin +'/ecommerce/ecommerce.html')
    } else{
        errorAlert('Credenciales incorrectas')
    }
} else{
    errorAlert('Escribi bien por favor')
}
}

function errorAlert (texto){
    let errorMessage = document.createElement('div');
    errorMessage.innerText = texto;
    errorMessage.classList.add('alert','alert-danger');
    let loginForm = document.getElementById('login-form');
    loginForm.appendChild(errorMessage);
    setTimeout( ()=>{
        errorMessage.remove()
    },3000)
}

//!REGISTRO

const register = (event)=>{
    event.preventDefault();
    let fullName = document.querySelector('#register-fullName').value;
    let email = document.querySelector('#register-email').value;
    // let age = document.getElementById('register-age').value;
    let pass = document.getElementById('register-pass').value;
    let pass2 = document.getElementById('register-pass2').value;
    
    let fullNameOk = /^[a-zA-Z]{4,35}$/.test(fullName); 
    let emailOk =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email); //true
    // let ageOk = age>=16 && age<150;
    let passOk = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/.test(pass);
    let pass2Ok = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/.test(pass);
    let equalPass = pass == pass2 

    if (fullNameOk && emailOk /*&& ageOk*/ && passOk && pass2Ok && equalPass){
        //!STEP 1: traer de LS
        let usersLS = JSON.parse(localStorage.getItem('users'));
        //!STEP 2: Agrego el nuevo usuario al array de usuarios
        if (usersLS.find(user=>user.email==email)) {
            console.log('usuario ya registrado');
        } else{
        usersLS.push(new User(usersLS.lenght+1,fullName,email,pass));
        window.location.assign(window.location.origin+'/ecommerce/ecommerce.html')
        }
        //!STEP 3: Envio de vuelta a LS
        localStorage.setItem('users', JSON.stringify(usersLS));
    } else {
        console.log('Los datos ingresados son incorrectos');
    }
}

