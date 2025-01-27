// Function to load receipt details
window.onload = function () {
    // Retrieve stored data from localStorage
    const name = localStorage.getItem('customerName') || 'N/A';
    const email = localStorage.getItem('customerEmail') || 'N/A';
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = localStorage.getItem('total') || '0.00';

    // Populate the receipt with user details
    document.getElementById('customerName').textContent = name;
    document.getElementById('customerEmail').textContent = email;

    // Populate the cart items
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '<h4>Items Purchased:</h4>'; // Add section heading for items
    if (cart.length > 0) {
        cart.forEach(item => {
            if (item.item && typeof item.price === 'number') {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('order-item');
                itemDiv.innerHTML = `<span>${item.item}</span><span>RM${item.price.toFixed(2)}</span>`;
                itemsList.appendChild(itemDiv);
            }
        });
    } else {
        itemsList.innerHTML += '<p>No items were purchased.</p>';
    }

    // Set the total price
    document.getElementById('totalPrice').textContent = total;
};

// Function to clear cart and redirect to home
function goToHome() {
    localStorage.removeItem('cart');
    localStorage.removeItem('total');
    localStorage.removeItem('customerName');
    localStorage.removeItem('customerEmail');
    alert('A receipt has been sent to your email.');
    window.location.href = 'index.html';
}