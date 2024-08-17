document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;
    let autoPlayInterval;

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (index + totalSlides) % totalSlides;
        slides[currentSlide].classList.add("active");
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 3000); // 3 segundos pra mim ta bom
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        nextSlide();
    });

    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        prevSlide();
    });

    const carousel = document.getElementById("carrossel");

    carousel.addEventListener("mouseover", function () {
        stopAutoPlay();
    });

    carousel.addEventListener("mouseout", function () {
        startAutoPlay();
    });

    startAutoPlay();
});
