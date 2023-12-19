function validateForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "" || password === "") {
            alert("Username and password are required");
        } else {
            // You can add your login logic here
            alert("Login successful");
        }
    }
