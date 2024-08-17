document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item"); //o codigo vai se adaptar a quantidade de slides, eu nao sabia se vcs queriam todas as imagens de idosos entao peguei só 3 por enquanto
    const totalSlides = slides.length;

// avança o slide
    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add("active");
    });

// volta o slide
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].classList.add("active");
    });
});
