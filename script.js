let cart = [];

function addToCart(productName, price) {
    // Menambah produk ke keranjang
    cart.push({ name: productName, price: price });
    
    // Update jumlah item di keranjang
    document.getElementById('cart-count').textContent = cart.length;

    // Animasi: Button 'Tambah ke Keranjang' muncul efek klik
    const button = event.target;
    button.style.transform = 'scale(1.1)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
}

function viewCart() {
    // Tampilkan modal
    const modal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear previous cart items
    cartItemsList.innerHTML = '';

    // Add items to cart list
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    // Update total price
    totalPriceElement.textContent = totalPrice.toLocaleString();

    // Show modal
    modal.style.display = 'flex';
}

function closeCart() {
    // Close modal dengan animasi fade-out
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
}
