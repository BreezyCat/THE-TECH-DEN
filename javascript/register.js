function validateName(name) {
    return name.length >= 3;
}

function validateGender(maleChecked, femaleChecked) {
    return maleChecked || femaleChecked;
}

function validateEmail(email) {
    return email.endsWith("@gmail.com");
}

function validatePhoneNumber(phoneNumber) {
    const phoneNumberPattern = /^\d{10,12}$/;
    return phoneNumber.match(phoneNumberPattern);
}

function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return password.match(passwordPattern);
}

function validateForm() {
    const name = document.getElementById("name").value;
    const maleChecked = document.getElementById("male").checked;
    const femaleChecked = document.getElementById("female").checked;
    const email = document.getElementById("Email").value;
    const phoneNumber = document.getElementById("PhoneNumber").value;
    const password = document.getElementById("password").value;

    if (!validateName(name)) {
        alert("Name length must be 3 or more characters!");
    } else if (!validateGender(maleChecked, femaleChecked)) {
        alert("Gender cannot be empty!");
    } else if (!validateEmail(email)) {
        alert("Email must end with @gmail.com!");
    } else if (!validatePhoneNumber(phoneNumber)) {
        alert("Phone number must be numerical and between 10 to 12 digits!");
    } else if (!validatePassword(password)) {
        alert("Password must be at least 6 characters long and contain at least one letter and one number!");
    } else {
        alert("Registration successful!");
        window.location.href = "signin.html";
        storeUserData(name, email, password);
    }
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    validateForm();
});
