function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim().length < 4) {
        alert("Username must contain at least 4 letters");
        return false;
    }

    if (password.trim().length === 0) {
        alert("Password cannot be empty");
        return false;
    }

    if (password.trim().length < 6 || password.trim().length > 12) {
        alert("Password must be between 6 and 12 characters");
        return false;
    }
    alert("Login successful!");
    return true;
}
