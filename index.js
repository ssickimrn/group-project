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
    document.getElementById('current-time').textContent = `Current Time : ${time}`;
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

// Get the current visitor count from local storage
let visitorCount = localStorage.getItem("visitorCount") || 0;

// Increment the visitor count
visitorCount++;

// Update the count in local storage
localStorage.setItem("visitorCount", visitorCount);

// Display the updated count in the footer
document.getElementById("visitor-count").textContent = visitorCount;
