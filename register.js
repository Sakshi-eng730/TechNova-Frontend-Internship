const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const message = document.getElementById("message");

    if (!name || !email || !phone || !password || !confirmPassword) {
        message.style.color = "red";
        message.textContent = "Please fill all fields!";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.style.color = "red";
        message.textContent = "Enter a valid email address!";
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        message.style.color = "red";
        message.textContent = "Enter a valid 10-digit phone number!";
        return;
    }

    if (password.length < 8) {
        message.style.color = "red";
        message.textContent = "Password must contain at least 8 characters!";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registration Successful!";

    form.reset();

});