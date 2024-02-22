document.addEventListener('DOMContentLoaded', function() {
    var currentPath = window.location.pathname;

    currentPath = currentPath.replace(/^\//, '');

    var currentLink = document.querySelector('nav a[href="' + currentPath + '"]');

    if (currentLink) {
        currentLink.classList.add('current');
    }
});
