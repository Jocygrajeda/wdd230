function closeBanner() {
    var banner = document.getElementById("meetAndGreetBanner");
    banner.style.display = "none";
}

function checkDayAndShowBanner() {
    var today = new Date().getDay();
    var banner = document.getElementById("meetAndGreetBanner");

    if (today >= 1 && today <= 3) {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
}

// Run the check when the page loads
window.onload = checkDayAndShowBanner;