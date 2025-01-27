// Redirects user to Gmail with pre-filled details
function handleDraftEmail(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Construct mailto link
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=anauroracafe@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Open Gmail in a new tab with the mailto link
    window.open(mailtoLink, "_blank");
}

// Function to format the current date as a string
function getFormattedDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
}

// Set the last updated date in the footer
document.getElementById("last-updated").innerHTML = "Last Updated: " + getFormattedDate();

// Handle review form submission
function handleReviewSubmission(event) {
    event.preventDefault();  // Prevent page reload

    // Get form values
    const reviewName = document.getElementById('reviewName').value;
    const visitDate = document.getElementById('visitDate').value;
    const rating = document.getElementById('rating').value;
    const reviewMessage = document.getElementById('reviewMessage').value;

    // Construct mailto link
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=anauroracafe@gmail.com&su=${encodeURIComponent(rating)}&body=${encodeURIComponent(`Name: ${reviewName}\nDate: ${visitDate}\n\nReview:\n${reviewMessage}`)}`;

    // Open Gmail in a new tab with the mailto link
    window.open(mailtoLink, "_blank");

    // Optionally, alert user and redirect to a thank you page or back to home
    alert('Thank you for your review!');
    window.location.href = "index.html"; // Redirect to the homepage after submission
}