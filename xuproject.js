let productsInCart = [];
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document. querySelector("#sum-prices");
const product = document. querySelector('.product-under');

const countTheSUmPrice = function(){
    let sumPrice = 0;
    productsInCart.forEach(product =>{
        sumPrice += product.price;
    });
    return sumPrice;
}


const updateShoppingCartHTML = function(){
    if(productsInCart.length > 0){
        productsInCart.map(product => {
            return `
            <div class="col-lg-6 col-md-12 col-12">
            <img src="${product.image}">
                <h6>Home / T-Shirt</h6>
                <h3 class="py-4">${procutc.name}</h3>
                <h2 class="price">$${procutc.price}</h2>
                <select class="my-3">
                    <option>Select Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>Small</option>
                    <option>Large</option>
                </select>
                <input type="number" value="1">
                <button class="buy-btn">Add To Cart</button>
                <h4 class="mt-5 mb-5"> Product Details</h4>
                <span>gsdkfhsdkjfhslkdflsjhdflkjsldfhslkhdfjshdfjh
                    gksjdgfksjdhfkjshdfkjsdhkfjhskdjfhksjdhfksjdhfksjh
                    gdjsfhgsjdhgfjsdhgfjshdgfjsdhgfjsdghfjsdgjfgsdjgfjsdgh
                    skdjfhksjdghfksdhgfjksdhgfjsdghfjsdghfjhdgsfj sdhgfjsdghf.
                </span>


            </div>
            ` 
        });
        parrentElement.innerHTML = result.join('');
        document.querySelector('.checkout').classList.remove('hidden');
        cartSumPrice.innerHTML = "$" + countTheSUmPrice();

    }
    else{
        document.querySelector('checkout').classList.add('hidden');
        parentElement.innerHTML = '<h4 class="empty">your cart empty</h4>';
        cartSumPrice.innerHTML = "";
    }
}  
function updateProductsInCart(product)
{
    for(let i=0; i < productsInCart.length; i++)
    {
        if(productsInCart[i].id == product.id){
            productsInCart[i].const += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].const;
            return;
        }
    }
    productsInCart.push(product);
}

product.forEach(product => {
    product.addEventListener('click', (e) =>{
    if( e.target.classList.contains('buy-btn')){
        const productID = e.target.dataset.productID;
        const productDetails = product.querySelector('py-4').innerHTML;
        const productPrice = product.querySelector('price').innerHTML;
        const productImage = product.querySelector('img').src;
        let productToCart = 
        {
            name: productDetails,
            Image: productImage,
            id: productID,
            count : 1,
            price: +productPrice,
            basePrice : +productPrice
        }
        updateProductsCart(productToCart);
        updateShoppingCartHTML();   
    

    }


    });
} );