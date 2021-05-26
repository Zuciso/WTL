

function requiredField(input) {
    if (input.name == "fname") {

        var letters = /^[A-Za-z]+$/;
        if (input.value.length > 1 && input.value.match(letters)) {
            //green border
            document.getElementById("error_name").innerHTML = "";
            input.style.borderColor = "#2ecc71";
            input.style.borderWidth = "medium";
        } else {
            //red border
            document.getElementById("error_name").innerHTML = "Input characters must be alphabetical.";
            input.style.borderColor = "#e74c3c";
            input.style.borderWidth = "medium";
        }
    }
    if (input.name == "lname") {

        var letters = /^[A-Za-z]+$/;
        if (input.value.length > 1 && input.value.match(letters)) {
            //green border
            document.getElementById("error_lname").innerHTML = "";
            input.style.borderColor = "#2ecc71";
            input.style.borderWidth = "medium";
        } else {
            //red border
            document.getElementById("error_lname").innerHTML = "Input characters must be alphabetical.";
            input.style.borderColor = "#e74c3c";
            input.style.borderWidth = "medium";
        }
    }
    if (input.name == "city") {

        var letters = /^[A-Za-z]+$/;
        if (input.value.length > 1 && input.value.match(letters)) {
            //green border
            document.getElementById("error_city").innerHTML = "";
            input.style.borderColor = "#2ecc71";
            input.style.borderWidth = "medium";
        } else {
            //red border
            document.getElementById("error_name").innerHTML = "Input characters must be alphabetical.";
            input.style.borderColor = "#e74c3c";
            input.style.borderWidth = "medium";
        }
    }
    if (input.name == "email") {
        var email1 = /^([a-zA-Z0-9._-])+\@([a-zA-Z0-9])+\.([a-zA-Z]{2,4})$/;
        var email2 = /^([a-zA-Z0-9._-])+\@([a-zA-Z0-9])+\.([a-zA-Z]{2,4})+\.([a-zA-Z]{2,4})$/;
        if (input.value.match(email2) || input.value.match(email1)) {
            //green border
            document.getElementById("error_email").innerHTML = "";
            input.style.borderColor = "#2ecc71";
            input.style.borderWidth = "medium";
        } else {
            //red border
            document.getElementById("error_email").innerHTML = "Please enter valid email ID.";
            input.style.borderColor = "#e74c3c";
            input.style.borderWidth = "medium";
        }

    }

}

function requiredField2(input) {
    if (input.name == "phone") {

        var phoneno = /^\d{10}$/;

        if (input.value.match(phoneno)) {
            //green border
            document.getElementById("error_phone").innerHTML = "";
            input.style.borderColor = "#2ecc71";
            input.style.borderWidth = "medium";
        } else {
            //red border
            document.getElementById("error_phone").innerHTML = "Please enter valid mobile number - should be 10 digits.";
            input.style.borderColor = "#e74c3c";
            input.style.borderWidth = "medium";
        }
    }

    if (input.name == "password") {

        var passwords = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

        if (input.value.match(passwords)) {
            //green border
            document.getElementById("error_password").innerHTML = "";
            input.style.borderColor = "#2ecc71";
            input.style.borderWidth = "medium";
        } else {
            //red border
            document.getElementById("error_password").innerHTML = "Password should have 8 to 15 characters, should contain one capital letter, special characters and numeric input.";
            input.style.borderColor = "#e74c3c";
            input.style.borderWidth = "medium";
        }
    }
}

function requiredField3(input) {
    if (input.name == "age") {

        if (input.value > 18 && input.value < 140) {
            //green border
            document.getElementById("error_age").innerHTML = "";
            input.style.borderColor = "#2ecc71";
            input.style.borderWidth = "medium";
        } else {
            //red border
            document.getElementById("error_age").innerHTML = "Age cannot be less than 18 years or more than 140 years.";
            input.style.borderColor = "#e74c3c";
            input.style.borderWidth = "medium";
        }
    }
    if(input.name =="rnumber"){
        var phoneno = /^\d{4}$/;
        if (input.value.match(phoneno)) {
            //green border
            document.getElementById("error_rnumber").innerHTML = "";
            input.style.borderColor = "#2ecc71";
            input.style.borderWidth = "medium";
        } else {
            //red border
            document.getElementById("error_rnumber").innerHTML = "Enter 4 digit registeration number";
            input.style.borderColor = "#e74c3c";
            input.style.borderWidth = "medium";
        }

    }
}

function resetfunction() {
    document.getElementById("fname").innerHTML = "";
}