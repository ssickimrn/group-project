// Redirect to the chosen page
function redirectTo(page) {
    window.location.href = page;
}

// Function to format the current date as a string
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
}

// Set the last updated date in the footer
document.getElementById("last-updated").innerHTML = "Last Updated: " + getFormattedDate();
