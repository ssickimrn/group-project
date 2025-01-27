// Select the slider container
const slider = document.querySelector('.team-container');

// Variable to keep track of animation state
let isSliding = true;

// Function to stop sliding
function stopSliding() {
    if (isSliding) {
        slider.style.animationPlayState = 'paused'; // Pause the animation
        isSliding = false;
    } else {
        slider.style.animationPlayState = 'running'; // Resume the animation
        isSliding = true;
    }
}

// Add event listener to the slider for click event
slider.addEventListener('click', stopSliding);

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

        // Function to format the current date as a string
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
}

// Set the last updated date in the footer
document.getElementById("last-updated").innerHTML = "Last Updated: " + getFormattedDate();
