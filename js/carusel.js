let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Optional: Automatic slide change
function autoChangeSlide() {
    changeSlide(1);
}

// Change slide every 5 seconds
setInterval(autoChangeSlide, 5000);