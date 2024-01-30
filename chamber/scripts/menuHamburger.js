document.addEventListener('DOMContentLoaded', function () {
    const hamButton = document.getElementById('hamburger');
    const navigation = document.querySelector('nav');
  
    hamButton.addEventListener('click', function () {
      navigation.classList.toggle('open');
    });
  });
  