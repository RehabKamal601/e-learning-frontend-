document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrors();

        if (!validateName()) return;
        if (!validateEmail()) return;
        if (!validatePassword()) return;
        if (!validateConfirmPassword()) return;

        alert("Registration successful!");
        form.reset();
    });

    function validateName() {
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required.");
            return false;
        }
        return true;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        if (!emailRegex.test(email)) {
            showError(emailInput, "Invalid email format.");
            return false;
        }
        return true;
    }

    function validatePassword() {
        if (passwordInput.value.length < 6) {
            showError(passwordInput, "Password must be at least 6 characters.");
            return false;
        }
        return true;
    }

    function validateConfirmPassword() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, "Passwords do not match.");
            return false;
        }
        return true;
    }

    function showError(input, message) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.textContent = message;
        input.parentElement.appendChild(error);
        input.classList.add("error");
    }

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(error => error.remove());
        document.querySelectorAll(".error").forEach(input => input.classList.remove("error"));
    }
});