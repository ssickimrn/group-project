// Function to format the current date as a string
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
}

// Set the last updated date in the footer
document.getElementById("last-updated").innerHTML = "Last Updated: " + getFormattedDate();

// Get the button
var mybutton = document.getElementById("backToTop");
    
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// When the user clicks the button, scroll to the top of the document
mybutton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};