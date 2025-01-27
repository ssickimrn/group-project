 // JavaScript to handle cart and slider functionality
 let cart = JSON.parse(localStorage.getItem('cart')) || [];

 function addToCart(item, price) {
     cart.push({ item: item, price: price });
     localStorage.setItem('cart', JSON.stringify(cart));
     window.location.href = "cart.html";
 }

 function redirectToMenuPage() {
     window.location.href = 'menupage.html'; // Replace with the actual URL of the menu page
 }

 const backToTopBtn = document.getElementById('backToTopBtn');

 // Show the button when the user scrolls down 100px
 window.addEventListener('scroll', () => {
 if (window.scrollY > 100) {
     backToTopBtn.classList.add('show');
 } else {
     backToTopBtn.classList.remove('show');
 }
 });

 // Scroll to the top when clicked
     backToTopBtn.addEventListener('click', () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
 });

 // Function to format the current date as a string
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
}

// Set the last updated date in the footer
document.getElementById("last-updated").innerHTML = "Last Updated: " + getFormattedDate();
