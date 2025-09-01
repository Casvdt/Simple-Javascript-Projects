const cart = [];
const cartItemsEl = document.querySelector('.cart-items');
const cartTotalEl = document.querySelector('.cart-total');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productEl = button.closest('.product');
    const id = productEl.dataset.id;
    const name = productEl.dataset.name;
    const price = parseFloat(productEl.dataset.price);

    addToCart({ id, name, price });
  });
});

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
}

function renderCart() {
  cartItemsEl.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    const itemTotal = item.price * item.quantity;
    li.textContent = `${item.name} x${item.quantity} = €${itemTotal.toFixed(2)}`;
    cartItemsEl.appendChild(li);
    total += itemTotal;
  });

  cartTotalEl.textContent = total.toFixed(2);
}
