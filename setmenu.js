 // Add to Cart Functionality without Popup
 function addToCart(item, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ item, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = "cart.html"; // Redirect to the cart page
}

function redirectToMenuPage() {
    window.location.href = 'menupage.html'; // Replace with the actual URL of the menu page
}

// Function to format the current date as a string
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
}

// Set the last updated date in the footer
document.getElementById("last-updated").innerHTML = "Last Updated: " + getFormattedDate();
