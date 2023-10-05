function SubmitSignIn() {
    let email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    let user = storedUsers.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Sign In Successful");
        localStorage.setItem("signedIn", "true");
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function storeUserData(name, email, password) {
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    let newUser = {
        name: name,
        email: email,
        password: password
    };

    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
}