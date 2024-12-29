document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const burgerMenu = document.getElementById('burger-menu');
    const menuLinks = document.getElementById('menu-links');

    // Scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            navbar.style.padding = '10px';
            logo.style.fontSize = '25px';
        } else {
            navbar.style.padding = '20px 10px';
            logo.style.fontSize = '35px';
        }
    });

    // Burger menu toggle
    burgerMenu.addEventListener('click', function() {
        menuLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = navbar.contains(event.target);
        
        if (!isClickInsideNavbar) {
            menuLinks.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });
});