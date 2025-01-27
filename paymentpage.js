// Function to format expiry date as MM/YY
function formatExpiryDate(input) {
    let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4); // Add slash after MM
    }
    input.value = value;
}

// Function to check if all form fields are filled out
function checkForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    
    // Enable or disable the submit button based on the form fields
    const submitBtn = document.getElementById('submitBtn');
    if (name && address && email && cardNumber && expiryDate && cvv) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function validateForm() {
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const address = document.getElementById('address').value;
const cardNumber = document.getElementById('cardNumber').value;
const expiryDate = document.getElementById('expiryDate').value;
const cvv = document.getElementById('cvv').value;

if (!name || !email || !address || !cardNumber || !expiryDate || !cvv) {
alert("Please fill out all the fields.");
return false;
}

// Store name and email in localStorage
localStorage.setItem('customerName', name);
localStorage.setItem('customerEmail', email);

// Retrieve and calculate the total from the cart
const cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = 0;
cart.forEach(item => total += item.price);
localStorage.setItem('total', total.toFixed(2));

// Redirect to confirmation page
window.location.href = "confirmation.html";
return false;
}

// Function to format the current date as a string
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
}

// Set the last updated date in the footer
document.getElementById("last-updated").innerHTML = "Last Updated: " + getFormattedDate();
