document.addEventListener("DOMContentLoaded", function () {
    // Function to validate the form
    function validateForm() {
        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Check if fullname is provided
        if (!fullname) {
            alert("Please enter your full name.");
            return false;
        }

        // Check if email is valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Check if password is provided
        if (!password) {
            alert("Please enter your password.");
            return false;
        }

        // Check if confirm password is provided
        if (!confirmPassword) {
            alert("Please confirm your password.");
            return false;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again."); // Updated error message
            return false;
        }

        return true; // Form is valid
    }

    // Attach the validation function to the form submit event
    const signUpForm = document.querySelector(".signUp-form");
    if (signUpForm) {
        signUpForm.addEventListener("submit", function (event) {
            if (!validateForm()) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    } else {
        console.error('Form with class "signUp-form" not found.');
    }

    // Add event listener for login link
    const loginLink = document.getElementById("login-button"); // Ensure this ID matches your HTML
    if (loginLink) {
        loginLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            window.location.href = "/login.html"; // Change 'login.html' to your desired page
        });
    } else {
        console.error("Login link not found.");
    }
});
