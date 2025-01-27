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

// Function to display current Malaysia time
function updateMalaysiaTime() {
    const options = {
        timeZone: 'Asia/Kuala_Lumpur',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const time = new Date().toLocaleString('en-US', options);
    document.getElementById('current-time').textContent = `Current Time (Malaysia): ${time}`;
}

// Update the time every second
setInterval(updateMalaysiaTime, 1000);

// Initial call to set the time immediately when the page loads
updateMalaysiaTime();

// Function to format the current date as a string
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
}

// Set the last updated date in the footer
document.getElementById("last-updated").innerHTML = "Last Updated: " + getFormattedDate();

window.addEventListener('load', function() {
    var audio = document.getElementById('background-audio');
    audio.play(); // Start playing audio automatically when the page loads
});