document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.footer-elements img');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(0.7)';
            this.style.transform = 'scale(1.2)';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.filter = '';
            this.style.transform = '';
        });
    });
});
