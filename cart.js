  // Load cart items from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsDiv = document.getElementById('cart-items');
  const totalDiv = document.getElementById('total');

  // Display cart items
  function displayCart() {
      if (cart.length === 0) {
          cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
      } else {
          let total = 0;
          cartItemsDiv.innerHTML = cart.map(item => {
              total += item.price;
              return `
                  <div class="cart-item">
                      <p>${item.item}</p>
                      <p>RM${item.price.toFixed(2)}</p>
                  </div>
              `;
          }).join('');
          totalDiv.innerHTML = `<p><strong>Total: RM${total.toFixed(2)}</strong></p>`;
      }
  }

  // Function to proceed to checkout
  function proceedToCheckout() {
      if (cart.length > 0) {
          window.location.href = "payment.html"; // Redirect to the checkout page
      } else {
          alert("Your cart is empty. Please add items to the cart.");
      }
  }

  // Function to cancel the order and go back to the menu page
  function cancelOrder() {
      localStorage.removeItem('cart');  // Clear the cart from localStorage
      window.location.href = "menupage.html";  // Redirect to the menu page
  }

  // Function to continue choosing and go back to the menu page
  function continueToChoose() {
      window.location.href = "menupage.html";  // Redirect to the menu page
  }

  // Call the displayCart function when the page loads
  displayCart();

  // Function to format the current date as a string
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
}

// Set the last updated date in the footer
document.getElementById("last-updated").innerHTML = "Last Updated: " + getFormattedDate();
