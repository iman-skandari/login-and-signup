document.addEventListener("DOMContentLoaded", function () {
  function validateForm() {
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!fullname) {
      alert("Please enter your full name.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!password) {
      alert("Please enter your password.");
      return false;
    }

    if (!confirmPassword) {
      alert("Please confirm your password.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return false;
    }

    return true;
  }

  const signUpForm = document.querySelector(".signUp-form");
  if (signUpForm) {
    signUpForm.addEventListener("submit", function (event) {
      if (!validateForm()) {
        event.preventDefault();
      }
    });
  } else {
    console.error('Form with class "signUp-form" not found.');
  }

  const loginLink = document.getElementById("login-button");
  if (loginLink) {
    loginLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/login.html";
    });
  } else {
    console.error("Login link not found.");
  }
});
const signupLink = document.getElementById("signup-button");
if (signupLink) {
  signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "/index.html";
  });
} else {
  console.error("Login link not found.");
}
