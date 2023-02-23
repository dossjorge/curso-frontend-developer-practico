const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');     
 
  if(!isAsideClosed){
    shoppingCartContainer.classList.add('inactive');
   }  
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');     
 
  if(!isAsideClosed){
    shoppingCartContainer.classList.add('inactive');
   }
   mobileMenu.classList.toggle('inactive');  
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');   

  if(!isMobileMenuClosed){
   mobileMenu.classList.add('inactive');
  }
  shoppingCartContainer.classList.toggle('inactive'); 
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Camera photography',
    price: 100,
    image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Book',
    price: 30,
    image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
productList.push({
    name: 'Tennis racket',
    price: 40,
    image: 'https://images.pexels.com/photos/5741299/pexels-photo-5741299.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
productList.push({
    name: 'Sneakers',
    price: 80,
    image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
productList.push({
    name: 'Armchair',
    price: 150,
    image: 'https://images.pexels.com/photos/6373660/pexels-photo-6373660.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
productList.push({
    name: 'Tennis racket',
    price: 40,
    image: 'https://images.pexels.com/photos/5741299/pexels-photo-5741299.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
productList.push({
    name: 'Sneakers',
    price: 80,
    image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1600',
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');

        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);