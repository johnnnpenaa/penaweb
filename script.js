document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
  
    let total = 0;
  
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        const product = event.target.parentNode;
        const productTitle = product.querySelector('h3').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.slice(1));
  
        const cartItem = document.createElement('li');
        cartItem.textContent = productTitle;
        cartItems.appendChild(cartItem);
  
        total += productPrice;
        cartTotal.textContent = '$' + total.toFixed(2);
      });
    });
  
    const checkoutButton = document.getElementById('checkout');
    checkoutButton.addEventListener('click', function() {
      alert('Thank you for your purchase!');
      cartItems.innerHTML = '';
      total = 0;
      cartTotal.textContent = '$' + total.toFixed(2);
    });
  });