class Product{
    constructor(id,name,price,image){
        this.id=id;
        this.name=name;
        this.price=price;
        this.image=image;
    }
}

let products = [
new Product(1,'Alfajor de maicena',50,'https://images.unsplash.com/photo-1604953781841-004f1848ed3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'),
new Product(2, 'Alfajor de fruta', 45, 'https://images.unsplash.com/photo-1614436162606-6c5442426bcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFsZmFqb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
new Product(3, 'Alfajor de chocolate', 80, 'https://images.unsplash.com/photo-1517400847543-fd27a32c8d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWxmYWpvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
new Product (4, 'Alfajor de membrillo',50, 'https://images.unsplash.com/photo-1618822644418-e6759dfe5c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWxmYWpvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
new Product(5,'brownie', 70, 'https://media.istockphoto.com/photos/homemade-dark-chocolate-fudge-brownies-cake-picture-id1344355252?b=1&k=20&m=1344355252&s=170667a&w=0&h=Yhap5AbqLBzMQ7gTxzH-aIUJc_4fdXziVXK0dK6GuKQ=')
]

let favsFromLS = JSON.parse(localStorage.getItem('favs'));
let favs;
if (favsFromLS===null) {
  favs=[];
}else {
  favs = favsFromLS
}


console.log(products);

favs.forEach(fav=>{
  //!STEP 1: crear el elemento
  let favCard = document.createElement('div');
  //!STEP 2: decirle al elemento que lleva adentro
  favCard.classList.add('card','my-3');
  favCard.id = fav.id;
  favCard.innerHTML=`
  <div class="card-body">
    <h5 class="card-title"> ${fav.name}</h5>
    <p class="card-text">Precio: $${fav.price}</p>
    <button class="btn btn-dark" onclick="removeFav(event)"> X </button>
  </div>
  `
  //!STEP 3: Llamar al padre 
  let favsContainer = document.querySelector('.favs-container');
  //!STEP 4: Adoptar al hijo
  favsContainer.appendChild(favCard)
})

products.forEach(product=>{
  //!STEP 1: crear el elemento
  let productCard = document.createElement('div');
  //!STEP 2: decirle al elemento que lleva adentro
//? primer id hace referencia al id del card que estamos creando, el segundo hace referencia al id de cada producto que esta en el array
  productCard.id= product.id;
  productCard.classList.add('card','my-3');
  productCard.style.width='18rem';
  productCard.innerHTML=`
  <img src=${product.image} class="card-img-top customize-image" alt=${product.name}>
  <div class="card-body">
    <h5 class="card-title"> ${product.name}</h5>
    <p class="card-text">Precio: $${product.price}</p>
    <button class="btn btn-dark" onclick="addProductToCart(event)">Carrito</button>
    <button class="btn btn-dark" onclick="addFav(event)"> Favorito </button>
  </div>
  `
  //!STEP 3: Llamar al padre 
  let productsContainer = document.getElementById('products-container');
  //!STEP 4: Adoptar al hijo
  productsContainer.appendChild(productCard)
})
//? lo que se crea por cada item del array de productos 
{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
//!Otra forma de obtener el id
// const addFav = (id)=>{
  // uso el id
// }

const addFav = (event)=>{
  //!STEP 1 identificar el producto donde se hizo click
  let productId = event.target.parentElement.parentElement.id;
  let product = products.find(product=>product.id==productId);
  //!STEP 2: novela padre e hijo 
  let productCard = document.createElement('div');
  productCard.classList.add('card','my-3');
  productCard.innerHTML = `
  <div class="card-body">
    <h5 class="card-title"> ${product.name}</h5>
    <p class="card-text">Precio: $${product.price}</p>
    <button class="btn btn-dark">Eliminar producto</button>
  </div>
  `
  let favsContainer = document.querySelector('.favs-container');
  favsContainer.appendChild(productCard);
  favs.push(product);
  localStorage.setItem('favs', JSON.stringify(favs));
}

let cart;
const addProductToCart = (event) => {
  //!STEP 1 identificar el producto donde se hizo click
  let productId = event.target.parentElement.parentElement.id;
  let product = products.find(product=>product.id==productId);
  //!STEP 2  agregar el producto a local storage
  //*Traer si es que hay algo de LS
  let cartFromLS = JSON.parse(localStorage.getItem('cart'));
  //* Chequear si no esta vacio
  if (cartFromLS==null) {
    cart=[];
  } else{
    cart=cartFromLS
  }
  //*Editar el array
  cart.push(product);
  //*Enviamos a Local Storage
  localStorage.setItem('cart',JSON.stringify(cart));
}