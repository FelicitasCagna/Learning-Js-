let cartFromLS = JSON.parse(localStorage.getItem('cart'));
let cart;
if (!cartFromLS) {
    cart=[];
}else{
    cart=cartFromLS;
}

cart.forEach(product=>{
    let productCard = document.createElement('div');
    productCard.classList.add('card','mb-3');
    productCard.style.maxWidth='540px';
    productCard.innerHTML= `
    <div class="row g-0">
    <div class="col-md-4">
      <img src=${product.image} class="img-fluid rounded-start customize-image" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text"> Precio: $${product.price}</p>
      </div>
    </div>
  </div>
    `
    let productsContainer = document.getElementById('cart-container');
    productsContainer.appendChild(productCard);
})

{/* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}