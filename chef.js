document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".chef-profile");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function showProfile(index) {
        profiles.forEach((profile, idx) => {
            profile.classList.toggle("active", idx === index);
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : profiles.length - 1;
        showProfile(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < profiles.length - 1) ? currentIndex + 1 : 0;
        showProfile(currentIndex);
    });

    // Show the first profile initially
    showProfile(currentIndex);
});

// Function to format the current date as a string
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
}

// Set the last updated date in the footer
document.getElementById("last-updated").innerHTML = "Last Updated: " + getFormattedDate();
