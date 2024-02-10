function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("password").focus();
    }
}

function updateRatingValue() {
    var ratingValue = document.getElementById("pageRating").value;
    document.getElementById("ratingValue").innerText = ratingValue;
}