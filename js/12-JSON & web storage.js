//*JSON

let objetito = {
    tamano: 'pequeno',
    edad :1
}
console.log(objetito);

let objetitoQueVaAUnBackend = JSON.stringify(objetito);

console.log(objetitoQueVaAUnBackend);

let objetitoQueVuelveDeUnBackend = JSON.parse(objetitoQueVuelveDeUnBackend)

console.log(objetitoQueVuelveDeUnBackend);

//*WEBSTORAGE
//? Se aplica para los dos tipos. Nosotros vamos a usar local Storage

localStorage.setItem('nombeUsuario1','Diego');
localStorage.setItem('nombeUsuario2','Nahuel');
localStorage.setItem('nombeUsuario3','Angel');

console.log (localStorage.getItem('nombreUsuario'));

console.log(localStorage.length);

localStorage.removeItem('nombreUsuario1');

localStorage.clear();

let products = [
    new Product(1,'Alfajor de maicena',50,'https://images.unsplash.com/photo-1604953781841-004f1848ed3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'),
    new Product(2, 'Alfajor de fruta', 45, 'https://images.unsplash.com/photo-1614436162606-6c5442426bcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFsZmFqb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
    new Product(3, 'Alfajor de chocolate', 80, 'https://images.unsplash.com/photo-1517400847543-fd27a32c8d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWxmYWpvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
    new Product (4, 'Alfajor de membrillo',50, 'https://images.unsplash.com/photo-1618822644418-e6759dfe5c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWxmYWpvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
    new Product(5,'brownie', 70, 'https://media.istockphoto.com/photos/homemade-dark-chocolate-fudge-brownies-cake-picture-id1344355252?b=1&k=20&m=1344355252&s=170667a&w=0&h=Yhap5AbqLBzMQ7gTxzH-aIUJc_4fdXziVXK0dK6GuKQ=')
    ]

localStorage.setItem('products', JSON.stringify(products));

let productsFromLS = JSON.parselocalStorage.getItem('products');

//WEB STORAGE

//key : value 

localStorage.setItem